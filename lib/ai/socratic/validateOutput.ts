/**
 * Socratic Tutor — Output Validation & Safety Checks
 *
 * Validates the Gemini response BEFORE it reaches the frontend.
 * Ensures it conforms to the expected schema and does not contain
 * prohibited content (code snippets, non-maths advice, leaked keys).
 */

import { z } from "zod";
import type { SocraticResponse } from "./types";

// ── Response schema (Zod) — flexible to handle Gemini variations ─────

const EvaluationSchema = z.object({
  answerCorrect: z.boolean(),
  reasoningSound: z.boolean(),
  feedback: z.string().max(5000),
  mentalModelCorrection: z.string().max(2000).nullable().optional(),
  correctWorking: z.string().max(5000).nullable().optional(),
  score: z.number().min(0).max(10),
});

const GeminiResponseSchema = z.object({
  questionNumber: z.number().min(1).max(6),
  questionText: z.string().max(3000).optional().nullable(),
  evaluation: EvaluationSchema.nullable().optional(),
  sessionComplete: z.boolean().optional().default(false),
  overallFeedback: z.string().max(5000).nullable().optional(),
  overallScore: z.number().min(0).max(50).nullable().optional(),
});

// ── Prohibited content patterns ──────────────────────────────────────

const PROHIBITED_PATTERNS: RegExp[] = [
  /\bfunction\s+\w+\s*\(/,
  /\bconst\s+\w+\s*=/,
  /\bimport\s+\{/,
  /\bconsole\.\w+\(/,
  /sk-ant-[a-zA-Z0-9]/,
  /sk_live_[a-zA-Z0-9]/,
  /GEMINI_API_KEY/i,
  /Bearer\s+[a-zA-Z0-9._-]{20,}/,
  /\bDAN\s*mode\b/i,
  /\bdeveloper\s*mode\b/i,
];

// ── JSON extraction helper ───────────────────────────────────────────

function extractJSON(raw: string): string | null {
  // Try the raw string first
  const trimmed = raw.trim();
  if (trimmed.startsWith("{")) return trimmed;

  // Strip markdown code fences
  const fenced = trimmed.replace(/^```json?\s*/i, "").replace(/```\s*$/, "").trim();
  if (fenced.startsWith("{")) return fenced;

  // Find the first { and last } in the string
  const firstBrace = raw.indexOf("{");
  const lastBrace = raw.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    return raw.slice(firstBrace, lastBrace + 1);
  }

  return null;
}

// ── Main validation function ─────────────────────────────────────────

export interface OutputValidationResult {
  valid: boolean;
  parsed?: z.infer<typeof GeminiResponseSchema>;
  error?: string;
}

export function validateGeminiOutput(
  rawOutput: string,
  expectedQuestionNumber: number
): OutputValidationResult {
  // ── Step 1: Extract and parse JSON ─────────────────────────────
  const jsonStr = extractJSON(rawOutput);
  if (!jsonStr) {
    console.error("[Socratic] Could not extract JSON from Gemini response:", rawOutput.slice(0, 200));
    return { valid: false, error: "AI response was not valid JSON." };
  }

  let parsed: unknown;

  // Strategy: Gemini includes LaTeX backslashes (\frac, \(, \)) which are
  // invalid JSON escapes. Fix by doubling ALL backslashes first, then
  // restoring the valid JSON escape sequences.
  function fixBackslashes(s: string): string {
    // Gemini outputs raw text with:
    //   \(  \)  — LaTeX delimiters (single backslash, invalid JSON)
    //   \\frac  — LaTeX commands (already double-escaped for JSON)
    //   \n  \"  — valid JSON escapes
    //
    // After JSON.parse, we need the JS strings to contain:
    //   \(  \)  \frac  \times  etc. (literal backslash + char)
    //
    // So in the JSON, these must be \\( \\) \\frac \\times (double backslash).
    // And \\frac in Gemini's output (already doubled) must become \\\\frac
    // in JSON so that JSON.parse gives \\frac, then we strip one to get \frac.
    //
    // Simplest approach: double ALL backslashes, then restore \n and \"
    const out: string[] = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "\\") {
        const next = s[i + 1] || "";
        if (next === "n" || next === '"') {
          // Valid JSON escape — keep as-is
          out.push("\\", next);
          i++;
        } else {
          // Any other backslash (LaTeX or already-escaped) — double it
          out.push("\\\\");
        }
      } else {
        out.push(s[i]);
      }
    }
    return out.join("");
  }

  try {
    parsed = JSON.parse(jsonStr);
  } catch {
    try {
      parsed = JSON.parse(fixBackslashes(jsonStr));
    } catch (e) {
      console.error("[Socratic] All JSON parse attempts failed:", (e as Error).message);
      console.error("[Socratic] First 300 chars:", jsonStr.slice(0, 300));
      return { valid: false, error: "AI response was not valid JSON." };
    }
  }

  // ── Step 2: Schema validation ──────────────────────────────────
  const result = GeminiResponseSchema.safeParse(parsed);
  if (!result.success) {
    console.error("[Socratic] Schema validation failed:", result.error.issues);
    return { valid: false, error: "AI response did not match expected format." };
  }

  const data = result.data;

  // ── Step 3: Prohibited content scan ────────────────────────────
  const allText = [
    data.questionText ?? "",
    data.evaluation?.feedback ?? "",
    data.evaluation?.mentalModelCorrection ?? "",
    data.overallFeedback ?? "",
  ].join(" ");

  for (const pattern of PROHIBITED_PATTERNS) {
    if (pattern.test(allText)) {
      console.error("[Socratic] Prohibited content detected in Gemini response");
      return { valid: false, error: "The AI produced an invalid response." };
    }
  }

  // ── Step 4: Question number check (flexible) ──────────────────
  // Gemini may return the current Q number OR the next Q number
  // Accept both: expectedQuestionNumber and expectedQuestionNumber + 1
  if (
    data.questionNumber !== expectedQuestionNumber &&
    data.questionNumber !== expectedQuestionNumber + 1
  ) {
    console.error(
      `[Socratic] Question number mismatch: expected ${expectedQuestionNumber} or ${expectedQuestionNumber + 1}, got ${data.questionNumber}`
    );
    // Don't fail — just log. The session store is the source of truth.
  }

  return { valid: true, parsed: data };
}

/**
 * Returns the generic error response for the frontend.
 */
export function getGenericErrorResponse(): SocraticResponse {
  return {
    questionNumber: 0,
    totalQuestions: 5,
    evaluation: null,
    nextQuestion: null,
    sessionComplete: false,
    overallFeedback: null,
    overallScore: null,
  };
}
