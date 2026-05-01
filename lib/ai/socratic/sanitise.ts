/**
 * Socratic Tutor — Input Sanitisation & Prompt Injection Filter
 *
 * All student input passes through this BEFORE reaching the Gemini API.
 * Defence-in-depth: the system instructions also have guardrails,
 * but we filter at the application layer first.
 */

// ── Constants ────────────────────────────────────────────────────────
const MAX_INPUT_LENGTH = 500;

const INJECTION_KEYWORDS = [
  "ignore",
  "system",
  "developer",
  "instruction",
  "prompt",
  "override",
  "jailbreak",
  "admin",
  "sudo",
  "root",
  "pretend",
  "roleplay",
  "act as",
  "you are now",
  "forget everything",
  "disregard",
  "reveal",
];

const INJECTION_PATTERNS: RegExp[] = [
  /\b(ignore|forget|disregard|override)\b.*\b(previous|prior|above|all)\b.*\b(instructions?|prompt|rules?)\b/i,
  /\b(you are now|act as|pretend to be|simulate|roleplay)\b/i,
  /\b(system\s*prompt|system\s*message|system\s*:)/i,
  /<script[\s>]/i,
  /javascript\s*:/i,
  /on(error|load|click|mouse)\s*=/i,
];

// ── HTML/Script stripping ────────────────────────────────────────────

/**
 * Strips all HTML tags and attributes from a string.
 * Defence against XSS injection through student input.
 */
function stripHTML(input: string): string {
  return input
    .replace(/<[^>]*>/g, "")           // Remove all HTML tags
    .replace(/&lt;/g, "<")              // Decode common entities for re-check
    .replace(/&gt;/g, ">")
    .replace(/<[^>]*>/g, "")           // Second pass after decoding
    .replace(/javascript\s*:/gi, "")   // Remove javascript: URIs
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "") // Remove event handlers
    .trim();
}

/**
 * Strips control characters and null bytes.
 */
function stripControlChars(input: string): string {
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");
}

// ── Validation result ────────────────────────────────────────────────

export interface SanitiseResult {
  valid: boolean;
  sanitisedAnswer?: string;
  sanitisedReasoning?: string;
  error?: string;
}

// ── Main sanitisation function ───────────────────────────────────────

/**
 * Sanitises and validates student input before it reaches the Gemini API.
 *
 * Checks performed (in order):
 * 1. Length cap (500 chars per field)
 * 2. HTML/script stripping
 * 3. Control character removal
 * 4. Prompt injection keyword scan
 * 5. Prompt injection pattern scan
 * 6. Empty input check
 *
 * @returns SanitiseResult with either sanitised strings or an error
 */
export function sanitiseStudentInput(
  answer: string,
  reasoning: string
): SanitiseResult {
  // ── Step 1: Length check (before any processing) ────────────────
  if (answer.length > MAX_INPUT_LENGTH) {
    return {
      valid: false,
      error: `Answer must be ${MAX_INPUT_LENGTH} characters or fewer.`,
    };
  }
  if (reasoning.length > MAX_INPUT_LENGTH) {
    return {
      valid: false,
      error: `Reasoning must be ${MAX_INPUT_LENGTH} characters or fewer.`,
    };
  }

  // ── Step 2: Strip HTML tags and scripts ─────────────────────────
  let cleanAnswer = stripHTML(answer);
  let cleanReasoning = stripHTML(reasoning);

  // ── Step 3: Strip control characters ───────────────────────────
  cleanAnswer = stripControlChars(cleanAnswer);
  cleanReasoning = stripControlChars(cleanReasoning);

  // ── Step 4: Keyword injection scan ─────────────────────────────
  const combined = `${cleanAnswer} ${cleanReasoning}`.toLowerCase();
  for (const keyword of INJECTION_KEYWORDS) {
    if (combined.includes(keyword)) {
      return {
        valid: false,
        error: "Your input contains disallowed content. Please enter only your mathematical answer and reasoning.",
      };
    }
  }

  // ── Step 5: Pattern injection scan ─────────────────────────────
  const combinedOriginal = `${cleanAnswer} ${cleanReasoning}`;
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(combinedOriginal)) {
      return {
        valid: false,
        error: "Your input contains disallowed content. Please enter only your mathematical answer and reasoning.",
      };
    }
  }

  // ── Step 6: Empty check after sanitisation ─────────────────────
  if (!cleanAnswer.trim()) {
    return { valid: false, error: "Please provide an answer." };
  }
  if (!cleanReasoning.trim()) {
    return { valid: false, error: "Please explain your reasoning." };
  }

  return {
    valid: true,
    sanitisedAnswer: cleanAnswer.trim(),
    sanitisedReasoning: cleanReasoning.trim(),
  };
}
