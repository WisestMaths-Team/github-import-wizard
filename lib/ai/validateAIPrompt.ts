/**
 * LLM Gateway — Prompt Injection Defense
 *
 * Scans student input against known injection patterns before
 * it reaches the LLM API. Returns a sanitised string or throws
 * if the input is too dangerous to process.
 */

// ── Blocklist patterns (case-insensitive) ────────────────────────────
const INJECTION_PATTERNS: RegExp[] = [
  /\b(ignore|forget|disregard|override)\b.*\b(previous|prior|above|all)\b.*\b(instructions?|prompt|rules?|context)\b/i,
  /\b(you are now|act as|pretend to be|roleplay as|simulate)\b/i,
  /\b(system\s*prompt|system\s*message|system\s*:)/i,
  /\b(admin|root|sudo|superuser)\b/i,
  /\b(reveal|show|print|output|display)\b.*\b(system|prompt|instructions?|config|secret|key|password)\b/i,
  /\b(jailbreak|dan\s*mode|developer\s*mode)\b/i,
  /```[\s\S]*```/,  // Code blocks — students should submit maths, not code
  /<script[\s>]/i,  // XSS via script tags
  /\beval\s*\(/i,   // Eval attempts
  /\b(import|require)\s*\(/i, // Module injection
];

// ── Character whitelist for mathematical answers ─────────────────────
// Alphanumeric, whitespace, maths operators, LaTeX commands, Greek letters
const SAFE_ANSWER_CHARS = /^[a-zA-Z0-9\s+\-*/^=<>()[\]{},.:;!?'"|\\√∫∑∏πθαβγδεφσω°±×÷≤≥≠≈∞∂∇]+$/;

// ── Max lengths ──────────────────────────────────────────────────────
const MAX_ANSWER_LENGTH = 2000;
const MAX_EXPLANATION_LENGTH = 5000;

export interface SanitisedInput {
  answer: string;
  explanation: string;
}

export interface ValidationResult {
  valid: boolean;
  sanitised?: SanitisedInput;
  error?: string;
}

/**
 * Validates and sanitises student input before sending to the LLM.
 * Returns a ValidationResult with either sanitised input or an error.
 */
export function validateAIPrompt(
  studentAnswer: string,
  studentExplanation: string
): ValidationResult {
  // ── Length checks ────────────────────────────────────────────────
  if (studentAnswer.length > MAX_ANSWER_LENGTH) {
    return { valid: false, error: "Answer exceeds maximum length." };
  }
  if (studentExplanation.length > MAX_EXPLANATION_LENGTH) {
    return { valid: false, error: "Explanation exceeds maximum length." };
  }

  // ── Injection pattern scan ───────────────────────────────────────
  const combined = `${studentAnswer} ${studentExplanation}`;
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(combined)) {
      return {
        valid: false,
        error: "Your input contains disallowed content. Please enter only your mathematical working.",
      };
    }
  }

  // ── Sanitise: strip control characters and null bytes ────────────
  const sanitisedAnswer = studentAnswer
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();

  const sanitisedExplanation = studentExplanation
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim();

  // ── Empty check after sanitisation ───────────────────────────────
  if (!sanitisedAnswer) {
    return { valid: false, error: "Please provide an answer." };
  }

  return {
    valid: true,
    sanitised: {
      answer: sanitisedAnswer,
      explanation: sanitisedExplanation,
    },
  };
}
