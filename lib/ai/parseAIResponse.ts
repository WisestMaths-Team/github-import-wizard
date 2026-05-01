/**
 * LLM Output Parser — validates and sanitises the AI response
 * before it reaches the frontend.
 *
 * Ensures the response is valid JSON conforming to the expected
 * schema and does not contain sensitive system strings.
 */

import { z } from "zod";

// ── Expected response schema ─────────────────────────────────────────
const AIResponseSchema = z.object({
  score: z.number().min(0).max(10),
  feedback: z.string().max(2000),
  correct: z.string().max(1000),
  improvements: z.array(z.string().max(500)).max(5),
});

export type AIResponse = z.infer<typeof AIResponseSchema>;

// ── Strings that should never appear in a response to the student ────
const SENSITIVE_PATTERNS = [
  /sk-ant-[a-zA-Z0-9]+/i,      // Anthropic API keys
  /sk_live_[a-zA-Z0-9]+/i,     // Stripe live keys
  /Bearer\s+[a-zA-Z0-9._-]+/i, // Auth tokens
  /password\s*[:=]\s*\S+/i,    // Leaked passwords
  /DATABASE_URL/i,              // Env var names
  /NEXTAUTH_SECRET/i,
  /system\s*prompt\s*[:=]/i,    // System prompt leakage
];

// ── Fallback response when parsing fails ─────────────────────────────
const FALLBACK_RESPONSE: AIResponse = {
  score: 0,
  feedback: "We were unable to assess your answer at this time. Please try again.",
  correct: "",
  improvements: ["Please review the worked solution and try again."],
};

/**
 * Parses the raw LLM output string into a validated AIResponse.
 * Returns the fallback response if parsing or validation fails.
 * Never throws — errors are handled gracefully.
 */
export function parseAIResponse(rawOutput: string): AIResponse {
  // ── Step 1: Try to parse as JSON ─────────────────────────────────
  let parsed: unknown;
  try {
    // Handle cases where the LLM wraps JSON in markdown code fences
    const cleaned = rawOutput
      .replace(/^```json?\s*/i, "")
      .replace(/```\s*$/, "")
      .trim();
    parsed = JSON.parse(cleaned);
  } catch {
    console.error("[AI Parser] Failed to parse JSON from LLM response");
    return FALLBACK_RESPONSE;
  }

  // ── Step 2: Validate against schema ──────────────────────────────
  const result = AIResponseSchema.safeParse(parsed);
  if (!result.success) {
    console.error("[AI Parser] Schema validation failed:", result.error.issues);
    return FALLBACK_RESPONSE;
  }

  const response = result.data;

  // ── Step 3: Scan for sensitive content ───────────────────────────
  const allText = `${response.feedback} ${response.correct} ${response.improvements.join(" ")}`;
  for (const pattern of SENSITIVE_PATTERNS) {
    if (pattern.test(allText)) {
      console.error("[AI Parser] Sensitive content detected in LLM response — redacted");
      return FALLBACK_RESPONSE;
    }
  }

  return response;
}
