# Re-derivation Discipline

The expander's value comes from working each problem from scratch before expanding it. Skimming the existing solution and "elaborating" it is how silent errors get propagated.

This file gives worked examples of the discipline applied to the three main families of A-Level Pure question.

## The discipline in one paragraph

Read **only the question stem**. Solve it on a fresh scratchpad. Then — and only then — open the file's existing solution and compare. If your `finalAnswer` matches the file's, walk the file's steps and verify each transition. If they differ, recheck your working once; if you still disagree, the file has a 🔴 error and your derivation becomes the basis for the expansion.

If you skip the scratchpad and "do it in your head", you will anchor on the file's answer and miss errors. This has happened in past runs of this skill. Just write the working out.

## Example 1 — differentiation (chain rule)

**Stem:** `Differentiate y = (3x² + 1)⁵ with respect to x.`

**File's solution:**
- Step 1: `\\frac{dy}{dx} = 5(3x^2 + 1)^4 \\cdot 6x`
- Step 2: `\\frac{dy}{dx} = 30x(3x^2 + 1)^4`
- `finalAnswer`: `30x(3x^2 + 1)^4`

**Wrong approach:** read step 1, think "yep chain rule, looks fine", read step 2, think "yep, 5 × 6 = 30, fine", move on.

**Right approach:**
1. Scratchpad: outer function `u⁵`, inner `u = 3x² + 1`. `dy/du = 5u⁴`, `du/dx = 6x`. So `dy/dx = 5u⁴ · 6x = 5(3x² + 1)⁴ · 6x = 30x(3x² + 1)⁴`.
2. Compare to file's `finalAnswer`: matches.
3. Walk the file's steps: step 1 transition — chain rule applied correctly. Step 2 — `5 · 6x = 30x`, valid. ✓
4. Plan expansion: this is a Foundation/Standard chain rule question. Expand by splitting step 1 into "identify outer/inner" → "differentiate outer leaving inner alone" → "differentiate inner" → "multiply", with prose on each.

## Example 2 — integration (substitution)

**Stem:** `Find ∫ 2x cos(x²) dx.`

**File's solution:**
- Step 1 `description`: "Use the substitution u = x²."
- Step 1 `workingLatex`: `u = x^2, \\quad du = 2x\\,dx`
- Step 2 `workingLatex`: `\\int \\cos(u)\\,du`
- Step 3 `workingLatex`: `\\sin(u) + C`
- `finalAnswer`: `\\sin(x^2) + C`

**Right approach:**
1. Scratchpad: let `u = x²`, then `du = 2x dx`, so `2x dx` in the integral becomes `du`. Integral becomes `∫ cos(u) du = sin(u) + C = sin(x²) + C`.
2. Matches file's `finalAnswer`.
3. Walk steps: each transition valid.
4. Plan expansion: a Standard question with three steps already, but each step compresses two ideas. Expand step 1 to also show *why* this substitution (because we see the inner function `x²` and its derivative `2x` as a factor outside). Expand step 2 to show the explicit replacement: `\\int \\cos(x^2) \\cdot 2x\\,dx = \\int \\cos(u)\\,du`. Step 3 stays as one move (it's a basic integral).

## Example 3 — error caught mid-expansion (sign error)

**Stem:** `Differentiate y = e^{-2x} sin(3x) with respect to x.`

**File's solution:**
- Step 1: `\\frac{dy}{dx} = -2e^{-2x}\\sin(3x) + e^{-2x} \\cdot 3\\cos(3x)`
- Step 2: `\\frac{dy}{dx} = e^{-2x}(-2\\sin(3x) + 3\\cos(3x))`
- `finalAnswer`: `e^{-2x}(3\\cos(3x) - 2\\sin(3x))`

**Right approach:**
1. Scratchpad: product rule. `u = e^{-2x}`, `v = sin(3x)`, `u' = -2e^{-2x}`, `v' = 3cos(3x)`. So `dy/dx = u'v + uv' = -2e^{-2x}sin(3x) + 3e^{-2x}cos(3x) = e^{-2x}(3cos(3x) - 2sin(3x))`.
2. Matches file's `finalAnswer`. ✓
3. Walk steps. Step 1 — applies product rule, valid. Step 2 — factors out `e^{-2x}`, valid. Final answer rearranges step 2's terms, valid (commutative). Clean.
4. Plan expansion: Standard product-rule question. Expand step 1 by introducing `u, v, u', v'` separately, then assembling.

## Example 4 — error caught mid-expansion (wrong final answer)

**Stem:** `Solve sin(2x) = 1/2 for 0 ≤ x ≤ 2π. Give exact values.`

**File's solution:**
- Step 1: `2x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}`
- Step 2: `x = \\frac{\\pi}{12}, \\frac{5\\pi}{12}`
- `finalAnswer`: `x = \\frac{\\pi}{12}, \\frac{5\\pi}{12}`

**Right approach:**
1. Scratchpad: `sin(2x) = 1/2`. The range for `2x` is `0 ≤ 2x ≤ 4π` (because `0 ≤ x ≤ 2π`). Solutions for `sin(θ) = 1/2` in `[0, 4π]` are `θ = π/6, 5π/6, 13π/6, 17π/6`. So `x = π/12, 5π/12, 13π/12, 17π/12`.
2. File's `finalAnswer` only lists two solutions. Mine lists four. Recheck — yes, the doubled angle stretches the range, so two solutions in `[0, 2π]` for `sin(θ) = 1/2` become four in `[0, 4π]`.
3. **🔴 error.** The file dropped the additional solutions from extending the range.
4. Plan expansion: replan the entire `solutionSteps` from scratch, including a new step that explicitly transforms the range (`0 ≤ x ≤ 2π ⟹ 0 ≤ 2x ≤ 4π`) — that's where the error originated. Overwrite `finalAnswer`. Log as `🔴 FIXED`.

## Example 5 — equivalent-but-different forms (don't false-flag)

**Stem:** `Find ∫ 1/(2x) dx.`

**File's `finalAnswer`:** `\\tfrac{1}{2}\\ln|2x| + C`

**Your derivation gives:** `\\tfrac{1}{2}\\ln|x| + C` (factoring the constant out and absorbing `(1/2)ln(2)` into `C`).

These differ literally but are equivalent (the constant of integration absorbs the difference). **Do not flag this as 🔴.** Either form is acceptable; match the file's choice in your expansion.

The general principle: if two answers differ only by a constant of integration, by an absolute-value bracket convention, or by trig identity rearrangement, they're equivalent.

## What "scratchpad" means in practice

Inside the conversation: actually write out the working in your reply, in a fenced code block or as inline LaTeX, before opening the file. Don't describe what you would do — do it. The point is to commit to an answer before the file's answer biases you.