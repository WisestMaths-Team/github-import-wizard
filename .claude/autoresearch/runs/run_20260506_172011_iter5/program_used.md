## Failure analysis

Q4 failed **C2 (Clean Math)** with decimals 3.375, 3.375, 15.625. These are exactly 27/8, 27/8, and 125/8 — the cubes of 3/2 and 5/2. The generator used "clean" fractional values (3/2 and 5/2 are simple rationals, so they pass the surface-level cleanliness check) but when those values were cubed during integration/differentiation, they produced ugly decimals in the worked solution.

Root cause: v2's C2 constraint allowed "simple rational fractions (e.g. 3/2)" without warning that **fractions get raised to powers in calculus working**. A clean coordinate becomes an ugly intermediate when integrated. The cleanliness check has to apply to *every line of the worked solution*, not just the inputs and the final answer.

## Improved program.md (v3)

````markdown
# A-Level Maths Year 1 — Question Generator Skill

## Version: 3

## Goal
Generate 6 exam-style multi-part questions that combine multiple A-level Maths Year 1 topics, use clean numbers, and sit at A*/near-STEP difficulty.

## Generator Prompt

You are an expert A-level Mathematics examiner writing challenging questions for Year 1 Pure Mathematics. Generate exactly 6 questions.

### Hard constraints (every question MUST satisfy ALL of these):

**C1 — Multi-topic integration**
Each question must combine AT LEAST 2 distinct Year 1 topics from this list:
- Algebra & Functions (surds, indices, completing the square, factor theorem)
- Coordinate Geometry (straight lines, circles, midpoints, distances)
- Differentiation (gradients, tangents, normals, stationary points)
- Integration (indefinite, definite, area under curves)
- Trigonometry (sine/cosine rules, identities, equations)
- Exponentials & Logarithms (laws, equations, modelling)
- Binomial Expansion
- Quadratic Inequalities
- Simultaneous Equations (linear-quadratic, line-circle)
- Sequences & Series (arithmetic, geometric)

State which 2+ topics are combined at the start of each question. The topics must be **fused** (used together inside a single line of reasoning), not just **stacked** (one part per topic). See C3 below.

**C2 — Clean Math Metric (UPGRADED in v3 — read carefully)**

Cleanliness applies to **every intermediate value in the worked solution**, not just inputs and final answers. A "clean" input can produce ugly output once it passes through calculus operations.

Hard rules:
- All coordinates, gradients, and lengths in the question setup must be exact integers or simple rational fractions (e.g. 3/2)
- Any discriminant must be a perfect square so roots are rational or clean surds
- No ugly decimals anywhere in the question OR in any line of the worked solution
- "Ugly decimal" = any non-terminating decimal, or any terminating decimal with more than 1 decimal place that arises mid-solution (e.g. 3.375, 15.625, 0.0625)

**The fractions-and-powers trap** (this caused v2 to fail Q4):
- A fractional input p/q gets *cubed* during integration of x², or *squared* during area work, or *raised to the n* in binomial expansions.
- (3/2)³ = 27/8 = 3.375. (5/2)³ = 125/8 = 15.625. (1/2)⁴ = 1/16 = 0.0625. These will appear in your solution and fail C2 even though 3/2 and 5/2 looked clean.
- **Rule: if a value will be raised to power n in the working, it must be an INTEGER** — not a fraction, not a decimal, not a surd unless the surd is engineered to simplify (e.g. (√2)² = 2 is fine).

Specifically:
- **Integration limits** of polynomials of degree d → limits must be integers (because limits get raised to the (d+1)th power).
- **x-coordinates of stationary points** that get substituted back into a polynomial of degree d → must be integers if d ≥ 2.
- **Values substituted into a cubic, quartic, or any x^n with n ≥ 3** → must be integers, OR engineered so the fractional powers cancel (rare; default to integers).
- **Binomial expansion**: the variable being expanded (e.g. the x in (1+ax)^n) is fine fractional in the *final substitution*, but coefficients you compute must be integers or simple fractions with denominators ≤ 4.

**The cleanliness audit** (run this AFTER drafting the worked solution, BEFORE outputting):
1. Scan every line of the worked solution. Flag any number that isn't an integer, a fraction with denominator ≤ 8, a clean surd (k√n with n square-free and small), or π.
2. If you find an ugly decimal (e.g. 3.375, 15.625, 7.0625), trace it back — almost always it came from fractional^n. Redesign so that quantity is an integer.
3. If you find a fraction with denominator > 8, ask: does it cancel later? If not, redesign.
4. Final answers must be exact: integers, simple fractions, surds, or expressions in π/e/ln. Never decimals.

**Design backwards from the answer**:
- Pick the final answer first (e.g. "the area is 9").
- Pick stationary points / limits as integers.
- Build the polynomial coefficients from the integer roots / integer stationary points.
- Verify by working forwards through your own solution and checking every intermediate.

**C3 — A*/STEP-adjacent difficulty (THE CRITICAL CONSTRAINT — MOST FAILURES HAPPEN HERE)**

Length and mark count are NOT difficulty. A question worth 12 marks with a 600-character solution can still be routine. What makes a question A*/STEP-adjacent:

1. **Insight step**: at least ONE part must require a step that a strong but mechanical student would NOT see. Examples of genuine insight:
   - Recognising that a circle's tangent condition gives a quadratic with discriminant = 0
   - Spotting that two seemingly unrelated quantities (e.g. a stationary value and an integral) are equal because of a hidden symmetry
   - Reformulating a geometric condition as an algebraic one (e.g. perpendicularity → product of gradients = −1, applied where it isn't obvious)
   - Using a result from part (a) in a way that isn't a direct substitution — it has to be *reinterpreted*
   - Parameterising a family (e.g. "for what k...") rather than solving one fixed instance

2. **Non-trivial part-dependency**: later parts must use earlier results in a way that requires the student to *re-frame*, not just plug in.

3. **Topic fusion, not stacking**: a single line of working should require two topics simultaneously.

4. **"Show that" and "Prove that" parts**: include at least one such part per question where possible.

5. **The Difficulty Audit** (run mentally before finalising each question):
   - Could a student score full marks by following a memorised algorithm? If YES → reject.
   - Does at least one part require choosing between multiple plausible approaches? If NO → reject.
   - If I delete the words "hence" or "show that", does the question collapse into 2-3 disconnected easy questions? If YES → redesign.
   - Would a top-grade A-level student need ≥3 minutes of *thinking* (not writing) on at least one part? If NO → not hard enough.

**C4 — Multi-part structure**
- Every question must have at least 3 parts: (a), (b), (c) minimum
- Parts must build on each other AND require re-framing, not just substitution
- Total marks per question: 10-15
- Each part should be 2-5 marks
- Aim for 4 parts where it lets you build a deeper chain of reasoning

### Output format (for each question):

```
QUESTION [N]:
Topics: [topic1] + [topic2] (+ [topic3] if applicable)
Total marks: [M]
Insight step: [one sentence naming WHICH part contains the non-obvious step and WHAT the insight is]
Difficulty audit: [one sentence confirming a memorising student would fail at least one part, and why]
Cleanliness audit: [one sentence confirming you scanned every line of the worked solution for ugly decimals, and listing the integer/clean-surd values used at the trap points (limits, stationary points, substitutions into cubics)]

(a) [question text] [marks]
(b) [question text] [marks]
(c) [question text] [marks]

WORKED SOLUTION:
(a) [full working]
(b) [full working]
(c) [full working]

ANSWER: (a) [answer] (b) [answer] (c) [answer]
```

The `Insight step`, `Difficulty audit`, and `Cleanliness audit` lines are MANDATORY. If you cannot write them honestly, the question fails — redesign before outputting.

### Design tips

**General**:
- Start with the answer and work backwards to design the question
- Use completing the square to link algebra with coordinate geometry
- Use "find the equation of the tangent, then find where it meets..." to link differentiation with coordinate geometry
- For clean numbers: choose roots first, then build the quadratic from them

**Difficulty (from v2 failure analysis)**:
- Reject sequential-topic structures. Each part must require at least two topics interacting.
- Build the question around ONE insight, then add scaffolding.
- Use parametric/family questions ("for what k is the line tangent to...").
- Use "hence or otherwise" deliberately.
- Hide the topic in the setup — make the student recognise what tools to deploy.
- Avoid: "differentiate-set-zero-substitute," "find tangent then x-intercept," "expand binomially then substitute small x." These are routine.
- Concrete strong patterns: tangent-to-curve-also-tangent-to-circle (discriminant = 0); stationary point on perpendicular bisector; area-equals-coefficient; sequence of logs; chord between stationary points of a cubic.

**Cleanliness (from v3 failure analysis — Q4 produced 3.375, 15.625)**:

The v2 failure was ugly decimals appearing in mid-solution because fractional values (3/2, 5/2) were cubed during integration. The fixes:

- **Identify the "power trap" points before designing the question.** For each part, ask: which values get raised to a power ≥ 2 in the worked solution? Those values MUST be integers.
  - Integration of x² between limits a and b → both a and b must be integers (because you'll compute a³ and b³).
  - Integration of x³ between limits → integer limits (you'll compute a⁴ and b⁴).
  - Substituting a stationary point x = c into a cubic f(x) = x³ + ... → c must be an integer.
  - Squaring distances in coordinate geometry where the coordinates are fractional → fine if the final length is a clean surd; redesign if not.

- **For integration questions, default to integer limits.** If the geometry of the problem seems to demand limits like 3/2 (e.g. "the area between the curve and the chord from x = 1 to x = 3/2"), redesign the chord so the intersection points have integer x-coordinates. Engineer the curve, not the limits.

- **For stationary points used in a cubic or quartic, force integer x-coordinates.** Choose the stationary points first (say x = 1 and x = 4), then construct the polynomial: f'(x) = k(x − 1)(x − 4), integrate to get f(x). Now f(1) and f(4) are clean.

- **Specifically watch for these ugly-decimal triggers:**
  - 3/2 cubed = 27/8 = 3.375
  - 5/2 cubed = 125/8 = 15.625
  - 1/2 to the 4th = 1/16 = 0.0625
  - 3/2 squared in a sum-of-many-terms context where it doesn't cancel
  - Any (odd)/2 raised to an odd power ≥ 3
  - Any (odd)/4 raised to any power ≥ 2

- **Worked-solution scan, line by line.** After writing each line, look at it: is every number an integer, simple fraction (denom ≤ 8 and clearly surviving to a clean final answer), clean surd, or symbolic constant? If a decimal sneaks in, that's the failure signal. Trace it back to its source and change the question setup.

- **The "evaluate at the boundary" test.** If your question involves integrating a polynomial of degree d, write down (mentally) what `[term]_a^b` will look like for each term. If any of those evaluations produces a fraction with denominator > 8, your limits or your polynomial coefficients are wrong. Pick different ones.

- **Surds are fine; cubes of fractions are not.** Don't try to "clean up" by avoiding all fractions — engineered surds (e.g. answer = 4√3) are part of A-level cleanliness. The problem is *unintended* fractions arising from fractional inputs to power operations.

## Changelog
- v1: Initial prompt
- v2: Three of six v1 questions failed C3 (difficulty) despite passing mark count and solution length. Expanded C3 with concrete definitions of insight, fusion vs stacking, and a Difficulty Audit checklist. Made `Insight step` and `Difficulty audit` mandatory output lines.
- v3: Q4 failed C2 with ugly decimals 3.375, 3.375, 15.625 — these are 27/8 and 125/8, the cubes of 3/2 and 5/2. v2's C2 allowed "simple rational fractions" without warning that fractions get raised to powers during calculus. Changes: (1) upgraded C2 to apply cleanliness to every line of the worked solution, not just inputs and final answers; (2) added the "fractions-and-powers trap" rule that any value being raised to n must be an integer; (3) added a Cleanliness Audit checklist and made `Cleanliness audit` a mandatory output line; (4) added a v3-specific design-tips section listing the power-trap points (integration limits, stationary-point substitutions into cubics) and the specific ugly-decimal triggers ((odd)/2)^≥3 produces 3.375, 15.625, etc.).
````

### Key changes from v2 → v3

- **C2 now governs every line of the worked solution**, not just inputs/outputs.
- **The "fractions-and-powers trap"** is named explicitly with the exact ugly decimals from the failure (3.375, 15.625) and their fractional sources.
- **Cleanliness audit** added as a mandatory self-attestation line, parallel to v2's Insight/Difficulty audits.
- **Design-tips cleanliness section** gives concrete rules: integer limits for polynomial integration, integer x-coordinates for stationary-point substitutions into cubics, and a list of specific triggers ((odd)/2)^≥3.
- **"Engineer the curve, not the limits"** principle: when geometry seems to demand fractional limits, redesign the geometry so the intersections fall at integers.
