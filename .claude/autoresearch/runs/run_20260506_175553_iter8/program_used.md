The user denied the write. They asked me to *output* the improved program.md content — not necessarily save it to disk. Let me output it directly in the response.

## Failure analysis

Q1 produced `0.375` in the worked solution. That's exactly **3/8** — a denominator-8 fraction rendered as a decimal. Two distinct gaps in v3:

1. **v3 never forbade decimal notation.** The model wrote `0.375` instead of `3/8`. Even if 3/8 had been a permitted fraction, the *decimal token* still triggers C2.
2. **v3's denominator ceiling was 8.** Denominator 8 is the natural landing zone for coefficient × (1/2)ⁿ products (e.g. 3·(1/2)³ = 3/8, or 3·(1/2)² halved during integration → 3/8). v3's power-trap rule only covered fractional *bases*, not the coefficient × fractional^n product.

Fix: ban decimal notation outright, tighten denominator ceiling in the worked solution to ≤ 4, and add an explicit rule for coefficient × fractional^n products.

---

## Improved program.md (v4)

````markdown
# A-Level Maths Year 1 — Question Generator Skill

## Version: 4

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

**C2 — Clean Math Metric (UPGRADED in v4 — read carefully)**

Cleanliness applies to **every intermediate value in the worked solution**, not just inputs and final answers. AND it applies to how those values are *written*, not just to their mathematical form. A correct fraction rendered as a decimal still fails.

**Hard rule 0 (NEW in v4) — NEVER write a decimal in the worked solution.**
Every non-integer numerical value in every line of working must be expressed exactly as one of:
- a fraction in lowest terms (e.g. `3/8`, never `0.375`)
- a surd (e.g. `2√3`, never `3.464...`)
- a symbolic constant (π, e, ln 2, etc.)
- an integer

If you ever find yourself about to write `0.5`, write `1/2`. If you ever find yourself about to write `0.375`, write `3/8`. If you ever find yourself about to write `1.4142...`, write `√2`. **Decimals are forbidden in the worked solution, even when they would be exact.** The auditor flags any decimal token regardless of whether it equals a clean fraction.

(Final answers may use decimals only when the problem asks for a decimal approximation, which it should not for these questions.)

**Hard rule 1 — Denominators in the worked solution ≤ 4.**
v3 allowed ≤ 8, but denominator-8 fractions (3/8, 5/8, 7/8) are ugly to read and tempt the writer to decimalise. From v4 onwards, every fraction appearing in any line of working must have denominator ∈ {1, 2, 3, 4} unless the fraction provably cancels in the very next line. Denominators 6 and 12 are acceptable only when they arise from combining halves and thirds (e.g. 1/2 + 1/3 = 5/6) and resolve quickly.

**Hard rule 2 — Inputs to power operations must be integers.**
A fractional value p/q raised to power n produces a fraction with denominator qⁿ — almost always ugly.
- (3/2)³ = 27/8
- (5/2)³ = 125/8
- (1/2)⁴ = 1/16
- (1/2)² used inside a coefficient-3 product → 3 · (1/2)² · (something) easily yields 3/8

**Rule: if a value will be raised to power n ≥ 2 in the working, it must be an INTEGER** — not a fraction, not a decimal, not a surd unless the surd is engineered to simplify (e.g. (√2)² = 2 is fine).

**Hard rule 3 (NEW in v4) — Watch coefficient × fractional^n products.**
Even if the base of the power is small (say 1/2), multiplying by an integer coefficient produces ugly fractions:
- 3 · (1/2)² = 3/4 (OK so far)
- After integration / halving → 3/8 (FAILS hard rule 1)
- 5 · (1/2)³ = 5/8 (FAIL)
- 7 · (1/2)² · (1/2) = 7/8 (FAIL)

Whenever a coefficient multiplies a fractional power, mentally compute the product and check denominator ≤ 4. If not, redesign — usually by making the substituted value an integer.

**Hard rule 4 — Specific contexts:**
- **Integration limits** of polynomials of degree d → limits must be integers (limits get raised to the (d+1)th power).
- **x-coordinates of stationary points** that get substituted back into a polynomial of degree d → must be integers if d ≥ 2.
- **Binomial expansion**: the variable being expanded (e.g. the x in (1+ax)^n) is fine fractional in the *final substitution*, but each term Cₖ · aᵏ · xᵏ must yield a coefficient that is an integer or a fraction with denominator ≤ 4.
- **Stationary values, areas, and "evaluate f at x = c" steps**: c must be an integer if f involves any term of degree ≥ 2.

**The Cleanliness Audit** (run this AFTER drafting the worked solution, BEFORE outputting):

1. **Decimal scan (NEW in v4)**: search the worked solution for `.` followed by any digit. If any decimal point appears in a numerical value, REWRITE that value as a fraction or surd. Zero decimals allowed.
2. **Denominator scan**: list every fraction that appears in the worked solution. Confirm each has denominator ∈ {1, 2, 3, 4}. Allowed exceptions: denominator 6 or 12 if combining halves and thirds; any denominator that cancels within one line.
3. **Power-trap scan**: for every power operation a^n in the working, confirm a is an integer. For every product k · (p/q)^n, mentally compute and confirm the result has denominator ≤ 4.
4. **Endpoint scan**: for every definite integral, confirm both limits are integers. For every "substitute x = c into f(x)" step where f has degree ≥ 2, confirm c is an integer.
5. If any scan fails → trace the ugly value back to its source, redesign the question setup (NOT the solution presentation), regenerate from scratch.

**Design backwards from the answer**:
- Pick the final answer first (e.g. "the area is 9").
- Pick stationary points / limits as integers.
- Build the polynomial coefficients from the integer roots / integer stationary points.
- Verify by working forwards through your own solution and checking every intermediate against the audit.

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
Cleanliness audit: [one sentence confirming (a) you searched the worked solution for decimals and found zero, (b) every fraction has denominator ≤ 4 (or named exceptions), (c) every base of a power and every integration limit is an integer]

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

**Cleanliness — the v3 lessons (fractions raised to powers)**:

The v2 failure was ugly decimals appearing in mid-solution because fractional values (3/2, 5/2) were cubed during integration. The fixes:

- **Identify the "power trap" points before designing the question.** For each part, ask: which values get raised to a power ≥ 2 in the worked solution? Those values MUST be integers.
  - Integration of x² between limits a and b → both a and b must be integers (because you'll compute a³ and b³).
  - Integration of x³ between limits → integer limits (you'll compute a⁴ and b⁴).
  - Substituting a stationary point x = c into a cubic f(x) = x³ + ... → c must be an integer.

- **For integration questions, default to integer limits.** If the geometry of the problem seems to demand limits like 3/2, redesign the chord so the intersection points have integer x-coordinates. Engineer the curve, not the limits.

- **For stationary points used in a cubic or quartic, force integer x-coordinates.** Choose the stationary points first (say x = 1 and x = 4), then construct the polynomial: f'(x) = k(x − 1)(x − 4), integrate to get f(x). Now f(1) and f(4) are clean.

**Cleanliness — the v4 lessons (decimals, denominator-8 fractions, coefficient × fractional^n)**:

The v3 failure was the decimal `0.375` appearing in Q1's worked solution. `0.375 = 3/8`. v3 permitted denominator-8 fractions and didn't forbid decimal notation. Two new rules:

- **NEVER use decimal notation in the worked solution.** Even if a value equals exactly 3/8, write it as `3/8`, not `0.375`. Even if a value equals exactly 1/2, write `1/2`, not `0.5`. When reaching for a decimal, stop and reach for the fraction.

- **Avoid denominator 8 entirely in worked solutions.** Denominator-8 fractions look ugly and invite decimalisation. If you compute a denominator-8 fraction mid-solution, you've almost certainly violated the integer-base rule somewhere upstream — go back and fix the *cause*, not the symptom.

- **Watch coefficient × fractional^n products.** A small fractional base like 1/2 looks innocent, but multiplied by an integer coefficient and possibly halved (during integration), it lands at /8.
  - 3 · (1/2)² → 3/4 → after one more integration/halving step → 3/8 ❌
  - C(3,1) · 1 · (1/2)² · (something) → 3/4 · (something) → easily 3/8 in binomial expansions
  - Before designing a part with x = 1/2 substitution, write down every coefficient that will multiply a power of 1/2 and check the resulting denominators. If any exceed 4, change the substitution point to an integer.

- **Specifically watch for these ugly-decimal/fraction triggers:**
  - 3/2 cubed = 27/8 = 3.375
  - 5/2 cubed = 125/8 = 15.625
  - 1/2 to the 4th = 1/16 = 0.0625
  - **3 × (1/2)³ or coefficient × (1/2)² halved → 3/8 = 0.375** (v4 trigger)
  - 5 × (1/2)³ = 5/8 = 0.625
  - 7 × (1/2)² · (1/2) = 7/8
  - Any (odd)/2 raised to an odd power ≥ 3
  - Any (odd)/4 raised to any power ≥ 2
  - Any (odd)/8 appearing anywhere

- **Worked-solution scan, line by line.** After writing each line, look at it: is every number an integer, simple fraction (denom ≤ 4), clean surd, or symbolic constant? Search the entire solution for `.` followed by a digit — if found, REWRITE as a fraction.

- **The "evaluate at the boundary" test.** If your question involves integrating a polynomial of degree d, write down (mentally) what `[term]_a^b` will look like for each term. If any of those evaluations produces a fraction with denominator > 4, your limits or your polynomial coefficients are wrong. Pick different ones.

- **The "binomial coefficient × fractional substitution" test.** For binomial expansions where the student substitutes a fractional value (e.g. x = 1/2 into (1 + 2x)⁵), pre-compute term-by-term: Cₖ · 2ᵏ · (1/2)ᵏ = Cₖ. The coefficients should collapse to integers. If they don't, redesign.

- **Surds are fine; cubes of fractions are not.** Engineered surds (e.g. answer = 4√3) are part of A-level cleanliness. The problem is *unintended* fractions arising from fractional inputs to power operations, AND any decimal notation regardless of underlying cleanliness.

## Changelog
- v1: Initial prompt.
- v2: Three of six v1 questions failed C3 (difficulty) despite passing mark count and solution length. Expanded C3 with concrete definitions of insight, fusion vs stacking, and a Difficulty Audit checklist. Made `Insight step` and `Difficulty audit` mandatory output lines.
- v3: Q4 failed C2 with ugly decimals 3.375, 3.375, 15.625 — these are 27/8 and 125/8, the cubes of 3/2 and 5/2. v2's C2 allowed "simple rational fractions" without warning that fractions get raised to powers during calculus. Changes: (1) upgraded C2 to apply cleanliness to every line of the worked solution, not just inputs and final answers; (2) added the "fractions-and-powers trap" rule that any value being raised to n must be an integer; (3) added a Cleanliness Audit checklist and made `Cleanliness audit` a mandatory output line; (4) added a v3-specific design-tips section listing the power-trap points and the specific ugly-decimal triggers.
- v4: Q1 failed C2 with the ugly decimal 0.375 = 3/8. Two distinct gaps in v3: (1) v3 didn't forbid decimal notation, so the model wrote `0.375` instead of `3/8`; (2) v3 allowed denominator-8 fractions, but denominator 8 is the natural landing spot for coefficient × (1/2)ⁿ products that v3's power-trap rule didn't catch (it only covered fractional *bases*, not coefficient × fractional^n). Changes: (a) Hard rule 0 — never write a decimal anywhere in the worked solution, regardless of underlying cleanliness; rewrite every non-integer as a fraction or surd. (b) Hard rule 1 — tighten denominator ceiling in the worked solution from ≤ 8 to ≤ 4 (with named exceptions for /6 and /12 from halves+thirds). (c) Hard rule 3 — added explicit "coefficient × fractional^n" rule to catch products that produce /8 from a /2 base. (d) Cleanliness Audit now starts with a literal decimal-point search of the solution. (e) Cleanliness audit output line now must attest to all three checks (zero decimals, denominator ≤ 4, integer power-bases). (f) Design-tips cleanliness section split into "v3 lessons" (fractional bases) and "v4 lessons" (decimal notation, /8 denominators, coefficient products), with the specific 3/8 = 0.375 trigger named explicitly alongside the v3 triggers.
````

### Key changes from v3 → v4

1. **Hard rule 0**: decimals are forbidden in the worked solution, even when they equal clean fractions. Forces the writer to use `3/8` instead of `0.375`.
2. **Denominator ceiling tightened from ≤ 8 to ≤ 4**: removes the `/8` landing zone that invites decimalisation.
3. **Hard rule 3 (coefficient × fractional^n)**: closes the v3 gap where the power-base was clean (1/2) but multiplication by an integer coefficient still produced an ugly result (3/8).
4. **Cleanliness Audit step 1**: literal decimal-point search of the solution string.
5. **Mandatory `Cleanliness audit` output line** now attests to all three checks (zero decimals, denominator ≤ 4, integer power-bases).
