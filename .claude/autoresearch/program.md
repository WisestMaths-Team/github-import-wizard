# A-Level Maths Year 1 — STEP-Level Question Generator

## Version: 6

## Goal
Generate 6 questions that genuinely match Cambridge STEP I difficulty, using only Year 1 A-level content.

## Generator Prompt

You are writing questions for the **Cambridge STEP I Mathematics exam**. STEP questions are fundamentally different from A-level questions — they are PROBLEMS, not exercises. A student who can do every A-level question perfectly may still score zero on STEP.

### What makes STEP different (READ THIS CAREFULLY — this is why previous versions failed):

**A-level question:** "Find the stationary points of y = x³ - 3x."
**STEP question:** "The cubic y = x³ + bx + c has a local maximum at (p, q) and a local minimum at (r, s). Show that 4(q − s) = (p − r)(p² + r² + pr + 4b). Given further that the line through the two stationary points is tangent to the cubic at one of them, find the relationship between b and c."

The difference: STEP questions require you to **discover structure**, not apply techniques. They ask "what happens when..." and "show that this surprising thing is true" rather than "calculate this value."

### The 6 STEP question archetypes (use a MIX of these):

**Type A — The Generalisation:** Start with a specific case, then prove it for the general case using a parameter.
Example skeleton: "(i) Show that the tangent to y=x³ at (a, a³) meets the curve again at x = −2a. (ii) The tangent at this new point meets the curve again at a third point. Find its x-coordinate. (iii) Show that if this process is repeated n times, the x-coordinate is (−2)ⁿa."

**Type B — The Surprising Equality:** Two things that look unrelated turn out to be equal.
Example skeleton: "(i) Find the area between y = x² and the tangent at (t, t²). (ii) Find the area of the triangle formed by this tangent, the y-axis, and the line y = t². (iii) Show that the ratio of these areas is independent of t."

**Type C — The Parameter Problem:** For what values of a parameter does a property hold?
Example skeleton: "The line y = k cuts the curve y = x³ − 3x in three points. (i) Show that this requires −2 < k < 2. (ii) Show that the sum of the x-coordinates is always 0. (iii) Find k such that the three points form an isosceles triangle."

**Type D — The Proof:** Prove an algebraic or number-theoretic result using calculus or algebra.
Example skeleton: "(i) By considering the function f(x) = eˣ − 1 − x, show that eˣ ≥ 1 + x for all real x. (ii) By applying this with suitable values of x, show that (1 + 1/n)ⁿ < e for all positive integers n. (iii) Deduce that..."

**Type E — The Construction:** Build a mathematical object satisfying given constraints.
Example skeleton: "A polynomial p(x) of degree 3 satisfies p(0) = 0, p(1) = 1, and p'(0) = p'(1) = 0. (i) Find p(x). (ii) Show that 0 ≤ p(x) ≤ 1 for 0 ≤ x ≤ 1. (iii) Find a polynomial q(x) of degree 5 with the same properties AND q''(0) = q''(1) = 0."

**Type F — The Dual Perspective:** The same mathematical situation viewed two different ways.
Example skeleton: "The region R is bounded by y = x², the x-axis, and x = a. (i) Find the area of R by integrating with respect to x. (ii) By considering horizontal strips, show the area can also be written as ∫₀^{a²} (a − √y) dy. (iii) Verify the two expressions agree, and explain geometrically why."

### Hard constraints:

**C1 — Multi-topic fusion:** Each question must fuse 2+ Year 1 topics (not stack them).

**C2 — Clean math:** All values exact integers, simple fractions (denom ≤ 4), or clean surds. Design BACKWARDS from the answer. No decimals anywhere.

**C3 — STEP difficulty (MOST IMPORTANT):**
- The question must contain a moment of genuine surprise or insight
- At least one part must be non-routine (not a direct application of any standard technique)
- A well-prepared A-level student should get stuck on at least one part
- The question should tell a mathematical STORY where each part reveals something new
- Include at least 2 "show that" / "prove that" / "deduce that" parts

**C4 — Multi-part structure:** 3-5 parts labelled (i), (ii), (iii)... or (a), (b), (c)... Total 12-16 marks. Parts must form a connected argument.

### Output format:

```
QUESTION [N]:
Type: [A/B/C/D/E/F]
Topics fused: [list]
Total marks: [M]
The surprise: [one sentence — what non-obvious thing does the student discover?]

(i) ... [marks]
(ii) ... [marks]
(iii) ... [marks]

WORKED SOLUTION:
(i) ...
(ii) ...
(iii) ...
```

### MANDATORY self-check before outputting each question:
1. Could this appear on a regular A-level paper? → If yes, REJECT.
2. Does every part follow directly from a standard technique? → If yes, REJECT.
3. Is there a moment where the student must pause and think "how do I approach this?" → If no, REJECT.
4. Does the question reveal something surprising or beautiful about the mathematics? → If no, it's not STEP — REJECT.

## Changelog
- v1-v4: A*/near-STEP attempts (failed — produced hard A-level, not STEP)
- v5: First STEP attempt (failed — too routine, predictable patterns)
- v6: Complete rewrite based on analysis of real STEP papers. Introduced 6 archetypes. Mandatory self-check. "The surprise" field required.
