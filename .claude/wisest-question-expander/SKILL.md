---
name: wisest-question-expander
description: "Expand the worked solutions in A-Level Mathematics question banks for the Wisest AI Tutor platform — adding finer-grained intermediate steps and richer prose explanations to each question's solutionSteps. Use this skill whenever the user asks to expand, elaborate, flesh out, break down, unpack, lengthen, or add detail to the working / worked solutions / solution steps of a Wisest questions file (`.ts` file with a `Question[]` export), a topic bank, or a question pack — even when they don't say 'expand' explicitly (e.g. 'these skip too much', 'make the working more detailed', 'show every step', 'this is too compressed for a Foundation question'). Also trigger on topic codes like `y2df3`, `y2in4`, `y2pf1` paired with verbs like 'expand' / 'elaborate' / 'flesh out' / 'break down'. Overwrites the original file in place. Fixes mathematical errors encountered during expansion (correcting the final answer if it's wrong) and prints a fix-log of what changed."
---

# Wisest A-Level Maths Question Expander

This skill takes a Wisest question bank that has terse worked solutions and rewrites the `solutionSteps` of every question to be more thoroughly worked — finer-grained algebraic moves and richer prose — without changing what the question is asking or (in well-formed input) what the final answer is. It is the elaboration counterpart to `wisest-question-generator` and `wisest-question-checker`.

It assumes the input is a TypeScript file conforming to the project's `Question[]` schema (see `references/schema.md`).

## What this skill does (and what it doesn't)

**Does:**

- Splits each `solutionSteps[]` entry into finer-grained micro-steps when the original step compresses multiple algebraic moves into one.
- Rewrites each step's `description` (short label naming the move) and `explanation` (1–3 sentences saying *why* this move, and what to watch out for).
- Preserves every question's stem, `id`, `topicRef`, difficulty band, marks, and hints exactly.
- Preserves the `finalAnswer` of every question whose original solution was mathematically correct.
- **Fixes** mathematical errors encountered during expansion (see "Error handling" below). For 🔴 errors, this means correcting `finalAnswer`; for 🟠 errors, the fix is contained inside the steps.
- Overwrites the original `.ts` file in place.
- Prints a fix-log to stdout listing every correction made.

**Does NOT:**

- Touch the question stem, hints, ID, topic reference, difficulty band, or marks.
- Add or remove questions from the bank.
- Reorder questions.
- Translate notation between styles (`\\tfrac` ↔ `\\dfrac`, `\\cdot` ↔ `\\times`) — match whatever the file already uses.
- Flag stylistic issues (terse `description` fields, unsimplified fractions that aren't mathematically wrong, etc.). Out of scope.
- Change difficulty band or marks even if the expanded working makes the question feel longer.

If the user asks for any of those out-of-scope things, point them at the generator skill or the checker skill rather than running this expander.

## Core workflow

1. **Locate the file.** The user will either pass a path or reference a topic code (`y2df3` → look for `y2df3.ts` in the current repo). If ambiguous, ask once.
2. **Read the file.** Parse out the `Question[]` array as text — extract each question object's stem, current `solutionSteps`, `finalAnswer`, and metadata.
3. **For every question, in order:**
   - Re-derive the answer independently from the stem (see "Re-derivation discipline" below).
   - Compare your derivation to the file's `finalAnswer` and `solutionSteps`. Note any mathematical errors.
   - Plan the expanded `solutionSteps` (see "Granularity" and "Prose expansion" below).
   - If the original had errors, fold corrections into the expansion.
4. **Write the expanded file** by overwriting the original. Preserve all imports, exports, comments, and any other top-level file structure — only the contents of the `Question[]` array's `solutionSteps`, and `finalAnswer` (where corrected), change.
5. **Print the fix-log to stdout** in the format specified in `references/fix-log-format.md`. If no fixes were needed, print a single-line confirmation.

Read `references/working-method.md` for the re-derivation discipline (how to avoid being primed by the existing solution and miss errors).
Read `references/granularity.md` for concrete examples of how finely to break down steps in each band.
Read `references/prose-style.md` for the tone and content of `description` / `explanation` fields.

## What's frozen vs. mutable

**Frozen (must not change):**

- Question stem (`question` / `questionLatex` field).
- `id`, `topicRef`.
- Difficulty band, `marks`.
- Hints (`hints[]` if present).
- `finalAnswer` — *unless* the original is mathematically wrong (🔴 case), in which case it gets corrected.

**Mutable:**

- `solutionSteps[]` — can grow in length; each existing step can be split into multiple micro-steps.
- Each step's `description` (short move label, ~5–10 words).
- Each step's `explanation` (1–3 sentences of reasoning).
- Each step's `workingLatex` — can be split across multiple steps, but every individual step must still be a valid algebraic consequence of the previous one.

## Granularity

Expand to roughly:

- **Foundation:** 1 algebraic move per step.
- **Standard:** 1–2 algebraic moves per step.
- **Challenge:** 1–3 algebraic moves per step — but never a compressed jump that hides a substantive technique.

A "move" means one of: applying a named rule (chain, product, quotient, integration by parts), one round of algebraic manipulation (factor, expand, collect terms, multiply both sides), one substitution, one numerical simplification.

If the original solution already meets this granularity for its band, you may leave the step structure alone and only expand the prose. Don't pad steps for the sake of padding.

See `references/granularity.md` for worked before/after examples.

## Prose expansion

Each step has two prose fields:

- **`description`**: ~5–10 words. Names the move. Imperative voice. Examples: "Apply the chain rule.", "Factor out the common term.", "Substitute u = 2x + 1.".
- **`explanation`**: 1–3 sentences. Says *why* this move is the right one here, and (where relevant) flags a common slip a student might make. Examples: "We use the chain rule because the function is a composition: sin of (3x²+1). Differentiate the outer sin first, leaving the inner expression untouched, then multiply by the derivative of the inner. A common slip is to forget the inner derivative entirely."

The audience is an A-Level student looking at a worked solution and asking "but why did they do *that* there?". The explanation should answer that question without lecturing.

See `references/prose-style.md` for tone calibration.

## Re-derivation discipline (critical)

The expander will produce a worse output than the input if it just rewords the existing steps without checking them. To genuinely add value — and to catch errors — work each problem from scratch first.

1. Read **only the question stem** for the current question.
2. Solve it yourself, writing out your working in a scratchpad. Actually do the working — don't eyeball it.
3. **Then** compare your `finalAnswer` to the file's `finalAnswer`.
   - If they match, walk the file's `workingLatex` steps and verify each transition. Plan your expansion using the file's structure as a base.
   - If they differ, recheck your working once. If you still disagree, the file has a 🔴 error — see "Error handling" below.
4. While walking the file's steps, watch for 🟠 errors (a step that doesn't follow from the previous one even though the final answer happens to come out right). These get fixed in the expansion too.

For Challenge questions where the answer has multiple valid forms (e.g. `\\tfrac{1}{2}\\ln(2x)+C` vs `\\tfrac{1}{2}\\ln x + \\tfrac{1}{2}\\ln 2 + C`), check that the file's form is *equivalent* to yours, not literally identical. Don't "fix" a different-but-equivalent form.

See `references/working-method.md` for worked examples.

## Error handling

Errors found during re-derivation are fixed in the expansion. The behaviour depends on severity:

- **🔴 Wrong final answer.** The original `finalAnswer` is mathematically incorrect. Overwrite `finalAnswer` with the correct value (in the same LaTeX style the file uses). Replan the entire `solutionSteps[]` for that question from your re-derivation. Log this as a `🔴 FIXED` entry.
- **🟠 Wrong intermediate step.** The original `finalAnswer` is correct, but somewhere along the way a step doesn't follow from the previous one (sign error, dropped factor, invalid manipulation, arithmetic slip). Replan the steps from the first wrong step onward, ensuring every transition is valid and the chain still lands on the correct `finalAnswer`. Log this as a `🟠 FIXED` entry.
- **🟡 Cosmetic.** Out of scope. Don't "fix" minor stylistic things — the expander's job is mathematical elaboration, not style cleanup.

If you genuinely cannot decide whether something is wrong (the question stem is ambiguous, you're outside the syllabus, etc.), leave the original solution untouched, expand its prose conservatively, and add an `⚠️ UNVERIFIED` entry to the fix-log naming the question and your concern.

**Never fix silently.** Every mutation to a `finalAnswer` and every replanned step chain must appear in the fix-log.

## Fix-log format

Print to stdout after the file has been written. The format is fixed — see `references/fix-log-format.md`. The shape is:

```
Wisest Question Expander — {filename}
Expanded {total} questions. {fixCount} fixes applied.

🔴 FIXED  ({count})
  {topicRef}-{id}  "{first 50 chars of question}"
    Was:      {original finalAnswer}
    Now:      {corrected finalAnswer}
    Why:      {one-sentence explanation}

🟠 FIXED  ({count})
  {topicRef}-{id}  step {n} (in original)
    Was:      {original wrong step latex}
    Now:      {corrected step latex}
    Why:      {one-sentence explanation}

⚠️ UNVERIFIED  ({count})
  {topicRef}-{id}  {brief description of concern}
```

If no fixes were needed:

```
Wisest Question Expander — {filename}
✅ Expanded {total} questions. No mathematical errors found.
```

Section headers are omitted when their count is zero. Don't print empty `🔴 FIXED (0)` blocks.

## File-writing rules

- Overwrite the original file in place. No `.expanded.ts` suffix, no backup file — the user runs this knowing it's destructive.
- Preserve everything outside the `Question[]` array exactly: imports, exports, type annotations, top-of-file comments, blank lines between questions.
- Match the file's existing formatting conventions: indentation width, quote style (`"` vs `'`), trailing commas, line break placement inside object literals. If the file uses `\\tfrac`, your expansions use `\\tfrac`. If it uses `\\frac`, you use `\\frac`. Drop-in compatibility.
- Do **not** reorder fields within a question object. If the existing pattern is `{ id, topicRef, question, solutionSteps, finalAnswer, ... }`, keep that order.
- Do **not** add new fields to question objects that weren't already present.

If you can't tell what convention the file uses (e.g. you're expanding the first and only question), match the conventions used in `wisest-question-generator`'s output.

## Interaction style

This skill is for Benjamin (Wisest's developer), not end-students. Be direct. No preamble like "I'll now expand your file" — just do the work and print the fix-log.

If the user asks follow-up questions about a specific fix, walk them through the re-derivation in detail. The terseness rule applies to the fix-log itself, not to follow-up discussion.

If the file doesn't exist or the path is ambiguous, ask once. If the file exists but doesn't parse as a `Question[]` (wrong shape, syntax error in the source), say so and stop — don't try to expand a malformed file.

## When in doubt

- If you're not certain a step is wrong — work it again on a fresh scratchpad before "fixing" it.
- If your expansion would make a Foundation question feel like a Challenge question (15+ steps for what was 3), you've over-expanded. Consolidate.
- If the question stem itself is ill-posed (ambiguous, missing a constraint, has no real solution), don't try to fix the stem (it's frozen). Add a `⚠️ UNVERIFIED` entry naming the issue and leave that question's solution untouched.
- If a question is outside the A-Level Pure syllabus and you're not confident in your re-derivation, list it under `⚠️ UNVERIFIED` rather than guessing.