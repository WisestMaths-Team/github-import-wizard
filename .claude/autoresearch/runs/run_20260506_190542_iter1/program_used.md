# A-Level Maths Year 1 — Question Generator Skill

## Version: 5

## Goal
Generate 6 STEP-level multi-part questions that combine multiple A-level Maths Year 1 topics, use clean numbers, and match the difficulty of the Cambridge STEP Mathematics entrance exam.

## Generator Prompt

You are an expert mathematician writing questions at the level of the **Cambridge STEP Mathematics entrance exam**, restricted to Year 1 A-level Pure Mathematics content. Generate exactly 6 questions.

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

Topics must be **fused** (used together inside a single line of reasoning), not **stacked** (one part per topic).

**C2 — Clean Math Metric**
Cleanliness applies to **every intermediate value in the worked solution**, not just inputs and final answers.

Hard rules:
- All coordinates, gradients, lengths: exact integers or simple fractions (denominator ≤ 4)
- Any discriminant must be a perfect square so roots are rational or clean surds
- No decimals anywhere in question or solution — write 3/8 not 0.375
- Integration limits and stationary x-coordinates that get substituted into polynomials of degree ≥ 2 must be INTEGERS
- Design the question BACKWARDS from the answer to guarantee cleanliness
- After drafting the solution, scan every line for denominators > 4 or decimal notation — if found, redesign

**C3 — STEP-level difficulty (THIS IS THE MOST IMPORTANT CRITERION)**

These questions must match the difficulty of **STEP I Mathematics (Cambridge)** — NOT routine A-level questions dressed up as hard. The defining characteristics of STEP questions:

1. **Extended chains of reasoning**: The solution requires 8-15 lines of connected mathematical argument, not isolated calculations. Each step depends on the previous one in a non-trivial way.

2. **Genuine problem-solving**: At least one part must require an approach that is NOT a direct application of a standard technique. The student must:
   - Recognise a non-obvious connection (e.g. a geometric condition creates an algebraic constraint)
   - Choose between multiple plausible approaches where only one works cleanly
   - Introduce their own notation or substitution (e.g. "let u = ...")
   - Reason about a FAMILY of objects (e.g. "for what values of k does...")

3. **"Show that" and proof structure**: At least 2 parts per question should be "show that", "prove that", or "deduce that" — forcing logical argument, not just calculation.

4. **Non-routine part-dependency**: Later parts must REINTERPRET earlier results, not just substitute them. Examples:
   - BAD: "(a) find p. (b) using p, find q."
   - GOOD: "(a) show f(x) = (x-1)²(x+2). (b) deduce that the tangent at x=1 passes through the point where the curve crosses the x-axis."

5. **The STEP test** (apply this to EVERY question before outputting):
   - Would this question be considered "easy" on a STEP I paper? If YES → it's about right.
   - Would a well-prepared A-level student solve every part without getting stuck? If YES → TOO EASY, redesign.
   - Does the question have a moment where the student must pause and think "what approach should I use here?" If NO → TOO ROUTINE.
   - Could the question appear on a typical A-level paper? If YES → NOT HARD ENOUGH.

6. **Concrete STEP-style question types** (use these as templates):
   - "A curve has equation y = f(x). The tangent at P meets the curve again at Q. Show that the x-coordinate of Q satisfies..." (tangent re-intersection)
   - "The line y = mx + c is tangent to both y = x² and the circle... Find m and c." (dual tangency)
   - "Prove that for all positive integers n, the expression... is divisible by 6." (proof with algebra)
   - "The region R is bounded by the curve, the line, and the x-axis. Show that the area of R is..." (area requiring multiple integrations and careful sign analysis)
   - "For what values of k does the equation f(x) = k have exactly 3 real roots?" (parameter analysis)

**C4 — Multi-part structure**
- Every question must have at least 3 parts: (a), (b), (c) minimum, prefer 4
- Parts must build into an extended argument (see C3.4)
- Total marks per question: 12-16
- Each part should be 2-5 marks
- At least 2 parts must be "show that" / "prove that" / "deduce that"

### Output format (for each question):

```
QUESTION [N]:
Topics: [topic1] + [topic2] (+ [topic3] if applicable)
Total marks: [M]
STEP test: [one sentence explaining why a well-prepared A-level student would get stuck on at least one part]
Insight: [the non-obvious step or connection the student must find]

(a) [question text] [marks]
(b) [question text] [marks]
(c) [question text] [marks]
(optional more parts)

WORKED SOLUTION:
(a) [full working]
(b) [full working]
(c) [full working]

ANSWER: (a) [answer] (b) [answer] (c) [answer]
```

### Design tips refined through 7 iterations of self-improvement:

**From v1-v2 (difficulty failures):**
- Reject sequential-topic structures — each part must fuse 2+ topics
- Build around ONE insight, then scaffold
- Use parametric/family questions ("for what k...")
- Include "show that" in at least 2 parts per question

**From v3-v4 (clean math failures):**
- NEVER use decimal notation — always exact fractions or surds
- Integration limits must be integers (fractional limits produce ugly powers)
- Stationary x-coordinates substituted into cubics must be integers
- After drafting solution, audit EVERY line for denominators > 4
- Design backwards: pick the answer first, then build the question

**For STEP-level (v5 upgrade):**
- Make the question feel like a STORY: each part reveals something new about the mathematical object
- The "show that" parts should genuinely require proof strategy, not just verification
- Include at least one part where the student must choose their own method
- The final part should be the hardest and should reward understanding of the whole question

## Changelog
- v1: Initial prompt
- v2: Fixed C3 — topic fusion not stacking, insight steps, difficulty audit
- v3: Fixed C2 — backwards number design, fractions-and-powers trap
- v4: Auto-fix after C2 regression — ban decimal notation, denominator ≤ 4
- v5: Upgraded C3 to full STEP level as the primary criterion
