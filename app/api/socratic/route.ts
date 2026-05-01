/**
 * Socratic Mathematics Tutor — API Route
 *
 * POST /api/socratic
 *
 * Actions:
 *   { action: "start", topicRef: "..." }     → Create session, get Q1
 *   { action: "answer", sessionId, answer, reasoning } → Submit answer, get evaluation + next Q
 *
 * Security layers applied (in order):
 *   1. Authentication check (cookie session)
 *   2. Rate limiting (10 req/min per user)
 *   3. Input sanitisation (HTML strip, length cap)
 *   4. Prompt injection filter (keyword + pattern scan)
 *   5. Session ownership validation (BOLA prevention)
 *   6. Gemini API call with system instructions
 *   7. Output validation (schema + prohibited content scan)
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitiseStudentInput } from "@/lib/ai/socratic/sanitise";
import { validateGeminiOutput, getGenericErrorResponse } from "@/lib/ai/socratic/validateOutput";
import { createSession, validateSession, recordTurn } from "@/lib/ai/socratic/sessionStore";
import { SOCRATIC_SYSTEM_INSTRUCTIONS } from "@/lib/ai/socratic/systemInstructions";
import { checkRateLimit } from "@/lib/rateLimit";
import type { SocraticTurn, SocraticResponse, TurnEvaluation } from "@/lib/ai/socratic/types";

// ── LaTeX fix helper ─────────────────────────────────────────────────
// After JSON parsing with doubled backslashes, LaTeX commands like
// \\frac become \\\\frac. This restores them to single-backslash form
// and ensures \( \) delimiters are correct for KaTeX rendering.
function fixLaTeX(text: string): string {
  // After JSON parsing with fixBackslashes, strings have doubled backslashes:
  //   \\( -> needs to be \(    (for MathText to find LaTeX delimiters)
  //   \\\\frac -> needs to be \\frac  (\\frac from Gemini was quadrupled)
  //   \\frac -> needs to be \frac     (\frac from Gemini was doubled)
  //
  // Since JSON.stringify will convert \ to \\, and the frontend JSON.parse
  // will convert \\ back to \, we just need the strings to have \( and \frac.
  //
  // After our fixBackslashes + JSON.parse, strings have \\( and \\frac.
  // Convert all \\\\ to \\ first (quadrupled to doubled), then \\ to \ (doubled to single).
  // Only strip markdown bold — do NOT touch backslashes.
  // The strings from fixBackslashes + JSON.parse have \\( and \\frac
  // which JSON.stringify correctly outputs as \\( and \\frac,
  // and the browser's JSON.parse converts to \( and \frac for KaTeX.
  return text.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function normaliseEvaluation(evaluation: {
  answerCorrect: boolean;
  reasoningSound: boolean;
  feedback: string;
  mentalModelCorrection?: string | null;
  correctWorking?: string | null;
  score: number;
}): TurnEvaluation {
  return {
    answerCorrect: evaluation.answerCorrect,
    reasoningSound: evaluation.reasoningSound,
    feedback: fixLaTeX(evaluation.feedback),
    mentalModelCorrection: evaluation.mentalModelCorrection
      ? fixLaTeX(evaluation.mentalModelCorrection)
      : null,
    correctWorking: evaluation.correctWorking
      ? fixLaTeX(evaluation.correctWorking)
      : null,
    score: evaluation.score,
  };
}

// ── Request schemas (Zod) ────────────────────────────────────────────

const StartSchema = z.object({
  action: z.literal("start"),
  topicRef: z.string().min(1).max(20),
});

const EvaluateSchema = z.object({
  action: z.literal("evaluate"),
  questionId: z.string().min(1).max(50),
  questionText: z.string().min(1).max(2000),
  answer: z.string().min(1).max(500),
  reasoning: z.string().min(1).max(500),
});

const AnswerSchema = z.object({
  action: z.literal("answer"),
  sessionId: z.string().min(1).max(100),
  answer: z.string().min(1).max(500),
  reasoning: z.string().min(1).max(500),
});

const RequestSchema = z.discriminatedUnion("action", [StartSchema, AnswerSchema, EvaluateSchema]);

// ── Helper: extract user from cookie ─────────────────────────────────

function getUserFromCookie(request: NextRequest): { id: string; email: string } | null {
  const cookie = request.cookies.get("mathsapp-session");
  if (!cookie?.value) return null;
  try {
    const session = JSON.parse(decodeURIComponent(cookie.value));
    if (session.email) {
      return { id: session.email, email: session.email };
    }
  } catch {
    // Invalid cookie
  }
  return null;
}

// ── Helper: call Gemini API ──────────────────────────────────────────

async function callGemini(
  conversationHistory: Array<{ role: string; parts: Array<{ text: string }> }>,
  userMessage: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: SOCRATIC_SYSTEM_INSTRUCTIONS }],
        },
        contents: [
          ...conversationHistory,
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
        generationConfig: {
          temperature: 0.3,       // Low temperature for consistent, accurate maths
          maxOutputTokens: 8192,
          thinkingConfig: {
            thinkingBudget: 0, // Disable thinking — all tokens go to the JSON output
          },
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[Socratic] Gemini API error:", response.status, errorText);
    throw new Error(`Gemini API returned ${response.status}`);
  }

  const data = await response.json();
  const parts = data.candidates?.[0]?.content?.parts;
  if (!parts || parts.length === 0) {
    throw new Error("Empty response from Gemini");
  }

  // Gemini 2.5 returns thinking parts (thought=true) and output parts
  // Skip thinking parts, get the last non-thinking text part
  let text = "";
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i].thought) continue; // Skip thinking parts
    if (parts[i].text) {
      text = parts[i].text;
      break;
    }
  }
  if (!text) {
    throw new Error("No text in Gemini response");
  }

  // Strip markdown code fences if present
  text = text.trim();
  if (text.startsWith("```")) {
    text = text.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
  }

  return text;
}

// ── Main handler ─────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // ── 1. Authentication ──────────────────────────────────────────
  const user = getUserFromCookie(request);
  if (!user) {
    return NextResponse.json(
      { error: "Authentication required." },
      { status: 401 }
    );
  }

  // ── 2. Rate limiting ───────────────────────────────────────────
  const rateResult = checkRateLimit(user.id, "ai");
  if (!rateResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before trying again." },
      { status: 429 }
    );
  }

  // ── 3. Parse and validate request body ─────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  const parseResult = RequestSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json(
      { error: "Invalid request format.", details: parseResult.error.issues },
      { status: 400 }
    );
  }

  const payload = parseResult.data;

  try {
    // ── ACTION: START ──────────────────────────────────────────────
    if (payload.action === "start") {
      const session = createSession(user.id, payload.topicRef);

      // Ask Gemini for the first question
      const prompt = `Start a Socratic tutoring session on the A-Level topic "${payload.topicRef}". Present Question 1 of 5. Set evaluation to null since the student hasn't answered yet. Respond with ONLY valid JSON, no other text.`;

      const rawResponse = await callGemini([], prompt);

      // Validate output
      const validation = validateGeminiOutput(rawResponse, 1);
      if (!validation.valid || !validation.parsed) {
        return NextResponse.json(getGenericErrorResponse(), { status: 200 });
      }

      const response: SocraticResponse = {
        questionNumber: 1,
        totalQuestions: 5,
        evaluation: null,
        nextQuestion: validation.parsed.questionText ? fixLaTeX(validation.parsed.questionText) : null,
        sessionComplete: false,
        overallFeedback: null,
        overallScore: null,
      };

      return NextResponse.json({
        sessionId: session.sessionId,
        ...response,
      });
    }

    // ── ACTION: ANSWER ─────────────────────────────────────────────
    if (payload.action === "answer") {
      // ── 4. Input sanitisation ──────────────────────────────────
      const sanitised = sanitiseStudentInput(payload.answer, payload.reasoning);
      if (!sanitised.valid) {
        return NextResponse.json(
          { error: sanitised.error },
          { status: 400 }
        );
      }

      // ── 5. Session validation (BOLA prevention) ────────────────
      const sessionCheck = validateSession(payload.sessionId, user.id);
      if (!sessionCheck.valid || !sessionCheck.session) {
        return NextResponse.json(
          { error: sessionCheck.error },
          { status: 403 }
        );
      }

      const session = sessionCheck.session;
      const currentQ = session.currentQuestion;

      // Build conversation history from session
      const conversationHistory: Array<{ role: string; parts: Array<{ text: string }> }> = [];
      for (const turn of session.history) {
        conversationHistory.push({
          role: "model",
          parts: [{ text: JSON.stringify({
            questionNumber: turn.questionNumber,
            questionText: turn.questionText,
            evaluation: null,
            sessionComplete: false,
            overallFeedback: null,
            overallScore: null,
          })}],
        });
        conversationHistory.push({
          role: "user",
          parts: [{ text: `[Answer]: ${turn.studentAnswer}\n[Reasoning]: ${turn.studentReasoning}` }],
        });
        conversationHistory.push({
          role: "model",
          parts: [{ text: JSON.stringify({
            questionNumber: turn.questionNumber,
            evaluation: turn.evaluation,
            sessionComplete: false,
            overallFeedback: null,
            overallScore: null,
          })}],
        });
      }

      // ── 6. Call Gemini ─────────────────────────────────────────
      const isLastQuestion = currentQ >= 5;
      const userMessage = `[Answer]: ${sanitised.sanitisedAnswer}\n[Reasoning]: ${sanitised.sanitisedReasoning}`;

      let prompt: string;
      if (isLastQuestion) {
        prompt = `${userMessage}\n\nThis is the answer to Question 5 of 5 (the final question). Evaluate the answer and reasoning, then provide the overall session summary with total score out of 50, key strengths, areas for improvement, and a study recommendation. Set sessionComplete to true. Respond with ONLY valid JSON.`;
      } else {
        prompt = `${userMessage}\n\nIMPORTANT: Your JSON response MUST include BOTH:\n1. "evaluation" object with answerCorrect, reasoningSound, feedback, correctWorking (if wrong), and score for Question ${currentQ}\n2. "questionText" containing Question ${currentQ + 1} of 5\n\nSet questionNumber to ${currentQ}. Do NOT set evaluation to null — you must evaluate the student's answer. If the answer is wrong, include full step-by-step correctWorking. Respond with raw JSON only, no markdown fences.`;
      }

      let rawResponse = await callGemini(conversationHistory, prompt);

      // ── 7. Output validation ───────────────────────────────────
      let validation = validateGeminiOutput(rawResponse, currentQ);

      // If evaluation is missing, retry with a more explicit prompt
      if (validation.valid && validation.parsed && !validation.parsed.evaluation) {
        const retryPrompt = `You did not include an evaluation in your previous response. You MUST evaluate the student's answer now.\n\nThe student answered: "${sanitised.sanitisedAnswer}"\nTheir reasoning: "${sanitised.sanitisedReasoning}"\n\nProvide a JSON response with the evaluation object (answerCorrect, reasoningSound, feedback, correctWorking if wrong, score 0-10) AND the next question in questionText. Set questionNumber to ${currentQ}. Raw JSON only.`;
        rawResponse = await callGemini(conversationHistory, retryPrompt);
        validation = validateGeminiOutput(rawResponse, currentQ);
      }

      if (!validation.valid || !validation.parsed) {
        return NextResponse.json(getGenericErrorResponse(), { status: 200 });
      }

      const geminiData = validation.parsed;
      const evaluation: TurnEvaluation = geminiData.evaluation
        ? normaliseEvaluation(geminiData.evaluation)
        : {
            answerCorrect: false,
            reasoningSound: false,
            feedback: "Unable to evaluate your answer at this time. Please review the topic and try the next question.",
            mentalModelCorrection: null,
            correctWorking: null,
            score: 0,
          };

      // Record the turn
      const turn: SocraticTurn = {
        questionNumber: currentQ,
        questionText: `Question ${currentQ}`,
        studentAnswer: sanitised.sanitisedAnswer!,
        studentReasoning: sanitised.sanitisedReasoning!,
        evaluation,
      };
      recordTurn(payload.sessionId, turn);

      if (geminiData.questionText) {
        geminiData.questionText = fixLaTeX(geminiData.questionText);
      }

      // Build response
      const response: SocraticResponse = {
        questionNumber: currentQ,
        totalQuestions: 5,
        evaluation,
        nextQuestion: geminiData.questionText ?? null,
        sessionComplete: geminiData.sessionComplete,
        overallFeedback: geminiData.overallFeedback ?? null,
        overallScore: geminiData.overallScore ?? null,
      };

      return NextResponse.json(response);
    }

    // ── ACTION: EVALUATE (single question from question bank) ──────
    if (payload.action === "evaluate") {
      // Input sanitisation
      const sanitised = sanitiseStudentInput(payload.answer, payload.reasoning);
      if (!sanitised.valid) {
        return NextResponse.json({ error: sanitised.error }, { status: 400 });
      }

      const prompt = `The student was asked the following A-Level Mathematics question:

"${payload.questionText}"

The student answered: "${sanitised.sanitisedAnswer}"
Their reasoning: "${sanitised.sanitisedReasoning}"

Evaluate their answer and reasoning. Your JSON response MUST include the evaluation object with answerCorrect, reasoningSound, feedback, correctWorking (if the answer is wrong, show the full step-by-step correct method), and score (0-10).

Set questionNumber to 1, questionText to null, sessionComplete to false. Respond with raw JSON only, no markdown fences.`;

      const rawResponse = await callGemini([], prompt);

      const validation = validateGeminiOutput(rawResponse, 1);

      if (!validation.valid || !validation.parsed || !validation.parsed.evaluation) {
        return NextResponse.json({
          evaluation: {
            answerCorrect: false,
            reasoningSound: false,
            feedback: "Unable to evaluate your answer at this time. Please try again.",
            mentalModelCorrection: null,
            correctWorking: null,
            score: 0,
          },
        });
      }

      const eval_ = normaliseEvaluation(validation.parsed.evaluation);

      return NextResponse.json({ evaluation: eval_ });
    }
  } catch (error) {
    // ── Never leak internal errors to the client ─────────────────
    console.error("[Socratic] Internal error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
