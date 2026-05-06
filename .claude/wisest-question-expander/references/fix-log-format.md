# Fix-Log Format

Printed to stdout after the expanded file has been written. The format below is fixed — match it exactly, including the emoji, the section headers, and the indentation. Tools and reviewers may parse this output, so consistency matters.

## Header line (always)

```
Wisest Question Expander — {filename}
Expanded {total} questions. {fixCount} fixes applied.
```

`{filename}` is the basename of the file that was overwritten (e.g. `y2df3.ts`), not the full path. `{total}` is the number of questions in the file. `{fixCount}` is the total across all severity sections.

If `fixCount` is zero, replace the second line with:

```
✅ Expanded {total} questions. No mathematical errors found.
```

…and stop. No further sections.

## Section: 🔴 FIXED

For each question whose `finalAnswer` was overwritten:

```
🔴 FIXED  ({count})
  {topicRef}-{id}  "{first 50 chars of question}"
    Was:      {original finalAnswer as written}
    Now:      {corrected finalAnswer in the file's LaTeX style}
    Why:      {one-sentence explanation of the original error}
```

- `{count}` is the number of 🔴 fixes in this section.
- The question snippet is the first 50 characters of the stem, with newlines collapsed to spaces. Add `…` if truncated.
- `Was:` and `Now:` show the LaTeX literally — no rendering. Use the same LaTeX style the file uses (`\\tfrac` if the file uses `\\tfrac`, etc.).
- `Why:` is one sentence. Examples: "Dropped two solutions when the trig angle was doubled.", "Sign error in step 2 propagated to the final answer.", "Differentiated `2x` as `2x²` instead of `2`."

Two-space indent on the question line, four-space indent on the `Was/Now/Why` lines.

## Section: 🟠 FIXED

For each question where an intermediate step was wrong but the original `finalAnswer` was correct:

```
🟠 FIXED  ({count})
  {topicRef}-{id}  step {n} (in original)
    Was:      {original wrong step's workingLatex}
    Now:      {corrected step's workingLatex}
    Why:      {one-sentence explanation}
```

`step {n}` refers to the original (pre-expansion) step number. If the expansion replans multiple steps but they all stem from a single first-wrong-step, list only that first step — listing every downstream consequence is noise.

If the same question has both a 🔴 and a 🟠, list it only under 🔴 (the 🔴 fix subsumes the 🟠 because the steps are replanned anyway).

## Section: ⚠️ UNVERIFIED

For each question the expander couldn't fully verify:

```
⚠️ UNVERIFIED  ({count})
  {topicRef}-{id}  {brief description of concern}
```

Use this when:
- The question stem is ambiguous or ill-posed (since the stem is frozen, the expander can't fix it — flag and move on).
- The question is outside the A-Level Pure syllabus and you're not confident in your re-derivation.
- You see something that *might* be wrong but you can't be sure after rechecking.

Questions in this section are still expanded (with the original solution untouched if you couldn't verify it, or with the prose expanded conservatively).

## Section ordering and omission

Print sections in this order: 🔴 FIXED, 🟠 FIXED, ⚠️ UNVERIFIED.

Omit any section whose count is zero. Do **not** print empty `🔴 FIXED (0)` blocks.

A blank line separates sections.

## Worked example

```
Wisest Question Expander — y2df3.ts
Expanded 20 questions. 3 fixes applied.

🔴 FIXED  (1)
  y2df3-q14  "Solve sin(2x) = 1/2 for 0 ≤ x ≤ 2π…"
    Was:      x = \tfrac{\pi}{12}, \tfrac{5\pi}{12}
    Now:      x = \tfrac{\pi}{12}, \tfrac{5\pi}{12}, \tfrac{13\pi}{12}, \tfrac{17\pi}{12}
    Why:      Doubling the angle stretches the range to [0, 4π], giving four solutions, not two.

🟠 FIXED  (1)
  y2df3-q07  step 2 (in original)
    Was:      \frac{dy}{dx} = 6x^2 - 4x + 1
    Now:      \frac{dy}{dx} = 6x^2 - 4x
    Why:      Constant +5 differentiated to 1 instead of 0; subsequent steps coincidentally landed on the right answer.

⚠️ UNVERIFIED  (1)
  y2df3-q19  Question stem ambiguous: "the gradient" could mean dy/dx or the gradient of the chord.
```

## Worked example — clean run

```
Wisest Question Expander — y2pf1.ts
✅ Expanded 18 questions. No mathematical errors found.
```