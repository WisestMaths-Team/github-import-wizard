# Question Schema (expander's view)

The canonical TypeScript definition of the `Question` type lives in the Wisest project repo (typically `apps/web/src/types/question.ts` or similar). This file documents only the fields the expander reads, writes, or must preserve.

If the project's actual `Question` type has fields not listed here, **preserve them unchanged**. Do not invent new fields, drop existing fields, or reorder them within the object literal.

## Fields the expander touches

| Field | Type | Frozen? | Notes |
|---|---|---|---|
| `id` | string | Frozen | Unique within the file. Never modify. |
| `topicRef` | string | Frozen | Topic code like `y2df3`. Never modify. |
| `question` (or `questionLatex`) | string | Frozen | The stem. Even if it's ambiguous, the expander must not rewrite it. |
| `marks` | number | Frozen | The expanded working may be longer, but the marks total stays. |
| `difficulty` (or `band`) | "Foundation" \| "Standard" \| "Challenge" | Frozen | Drives granularity decisions. |
| `hints[]` | string[] | Frozen | Out of scope. |
| `solutionSteps[]` | Step[] | **Mutable** | Can grow. See below. |
| `finalAnswer` | string (LaTeX) | Conditionally frozen | Frozen unless the original is mathematically wrong (🔴), in which case it's overwritten with the corrected value. |

## The `Step` shape

Each entry in `solutionSteps[]` has roughly:

- `description: string` — short label, ~5–10 words, names the move.
- `workingLatex: string` — the LaTeX showing the state of the working *after* this step.
- `explanation: string` — 1–3 sentences of prose, says why this move.

Some Wisest files use different field names (`label` / `latex` / `note`, etc.). Match whatever the file uses — don't rename.

## Things to preserve outside the question objects

- `import` statements at the top of the file.
- The named export (e.g. `export const questions: Question[] = [ ... ];`).
- Any top-of-file comments (often topic notes or build-spec references).
- Blank lines between questions in the array.
- Indentation width and quote style.
- Trailing commas (or lack thereof).

The expander rewrites the contents of question objects, not the file's frame.

## When the schema is unclear

If you open a file and can't tell what fields are present (e.g. the file uses spread syntax from a helper, or the Question type is unusual), read 2–3 questions to establish the shape, then expand the rest using that shape. Don't ask the user — the file itself is the source of truth.