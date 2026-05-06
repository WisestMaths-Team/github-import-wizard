The write was blocked since it's a sensitive file. Re-reading the task — it asks me to "output" the improved file content, so I'll deliver it as text rather than writing it.

## Failure analysis

Three of six questions failed **C3 (difficulty)** despite passing mark count and solution length. The diagnostic notes ("good range," "substantial") confirm the generator is producing questions that are *long* but not *hard*. Root causes:

1. **Topics stacked, not fused** — part (a) does logs, (b) does calculus, (c) does geometry. The student does three medium questions back-to-back instead of one hard one.
2. **Each part routine within its own topic** — even with multi-topic combination, individual parts collapse to memorised algorithms.
3. **No genuine insight step** — the rubric mentioned "non-obvious step" but didn't define it concretely, so the generator interpreted "longer working" as "harder."
4. **Linear part-dependency** — later parts substitute earlier results directly rather than re-framing them.

## Improved `program.md` (v2)

````markdown
# A-Level Maths Year 1 — Question Generator Skill

## Version: 2

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

**C2 — Clean Math Metric**
- All coordinates must be exact integers or simple rational fractions (e.g. 3/2, not 1.7)
- Any discriminant must be a perfect square so roots are rational or clean surds
- Lengths, areas, gradients must be rational or clean exact surds (e.g. 4√3, 5√2)
- No ugly decimals anywhere in the question or worked solution
- Design the numbers BACKWARDS from the answer to guarantee cleanliness

**C3 — A*/STEP-adjacent difficulty (THE CRITICAL CONSTRAINT — MOST FAILURES HAPPEN HERE)**

Length and mark count are NOT difficulty. A question worth 12 marks with a 600-character solution can still be routine. What makes a question A*/STEP-adjacent:

1. **Insight step**: at least ONE part must require a step that a strong but mechanical student would NOT see. Examples of genuine insight:
   - Recognising that a circle's tangent condition gives a quadratic with discriminant = 0
   - Spotting that two seemingly unrelated quantities (e.g. a stationary value and an integral) are equal because of a hidden symmetry
   - Reformulating a geometric condition as an algebraic one (e.g. perpendicularity → product of gradients = −1, applied where it isn't obvious)
   - Using a result from part (a) in a way that isn't a direct substitution — it has to be *reinterpreted*
   - Parameterising a family (e.g. "for what k...") rather than solving one fixed instance

2. **Non-trivial part-dependency**: later parts must use earlier results in a way that requires the student to *re-frame*, not just plug in. Bad: "(a) find p, (b) using p from (a), find q." Good: "(a) show that f(x) can be written as ..., (b) hence prove that the tangent at x = a has gradient equal to the area found in (c)."

3. **Topic fusion, not stacking**: a single line of working should require two topics simultaneously. Examples:
   - Differentiation + Coordinate Geometry: a normal to a curve passes through the centre of a given circle — find the point of contact.
   - Logs + Quadratic Inequalities: solve `log(2x+1) − log(x−3) > log 5`, then state the integer solutions.
   - Integration + Algebra: the area between a curve and a chord equals a given surd — find the chord.
   - Binomial + Sequences: the coefficients of three consecutive terms in (1+ax)^n form an arithmetic progression — find a and n.
   - Trig + Algebra: solve a quadratic in sin θ where the discriminant condition forces a specific range.

4. **"Show that" and "Prove that" parts**: include at least one such part per question where possible. They force genuine reasoning, not just calculation.

5. **The Difficulty Audit (run this mentally before finalising each question)**:
   - Could a student score full marks by following a memorised algorithm? If YES → reject and redesign.
   - Does at least one part require choosing between multiple plausible approaches? If NO → reject.
   - If I delete the words "hence" or "show that", does the question collapse into 2-3 disconnected easy questions? If YES → the parts are stacked, not fused. Redesign.
   - Would a top-grade A-level student need ≥3 minutes of *thinking* (not writing) on at least one part? If NO → not hard enough.

**C4 — Multi-part structure**
- Every question must have at least 3 parts: (a), (b), (c) minimum
- Parts must build on each other AND require re-framing, not just substitution (see C3.2)
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

The `Insight step` and `Difficulty audit` lines are MANDATORY. If you cannot write them honestly, the question is not hard enough — redesign it before outputting.

### Design tips that have worked well in past iterations:
- Start with the answer and work backwards to design the question
- Use completing the square to link algebra with coordinate geometry
- Use "find the equation of the tangent, then find where it meets..." to link differentiation with coordinate geometry
- Use "show that the area is..." with integration + algebra
- For clean numbers: choose roots first, then build the quadratic from them

### Design tips added from v2 failure analysis (READ CAREFULLY):

The previous version produced questions that were the right *length* but not the right *difficulty*. Three out of six failed C3 despite having good mark counts and substantial solutions. The fixes:

- **Reject sequential-topic structures.** If your question is "(a) do some logs, (b) do some calculus, (c) do some geometry," it's stacked. The student is doing three medium questions back-to-back, not one hard one. Tear it up. Each part must require at least two topics interacting.

- **Build the question around ONE insight, then add scaffolding.** Decide first what the non-obvious step is (e.g. "the locus of P as k varies is a circle"). The other parts should set up the tools needed for that insight, or extract consequences from it.

- **Use parametric/family questions.** "Find the value(s) of k for which the line y = kx + 3 is tangent to the circle..." or "For what values of n does the binomial expansion of (1+x)^n contain three consecutive terms in geometric progression?" These force reasoning about a *condition*, not just a calculation.

- **Use "hence or otherwise" deliberately.** It signals that part (b) has a clever route via (a), and a student who misses the link will burn time. That's the A* discriminator.

- **Hide the topic in the setup.** Instead of "Use the binomial expansion to find...", say "The coefficient of x³ in the expansion of (2 − x)(1 + ax)^n is 80. Find a and n." The student has to *recognise* what tools to deploy.

- **Avoid these failure patterns specifically:**
  - "Differentiate, set = 0, find stationary point, sub into original" — pure routine, even if dressed up.
  - "Find tangent at given point, then find where it meets x-axis" — routine unless something else is going on.
  - "Expand binomially to 3 terms, then substitute x = 0.01" — that's a textbook exercise, not an A* question.
  - Three separate parts that share variable names but no genuine logical chain.

- **Test for fusion**: after drafting, ask "if I split this into 3 separate questions, would each one be markedly easier than the whole?" If no, you've stacked — redesign.

- **Concrete strong patterns to favour:**
  - Tangent line to a curve from differentiation also tangent to a given circle (forces discriminant = 0 of a quadratic).
  - Stationary point of a curve lies on the perpendicular bisector of two given points.
  - The area between two curves equals the value of an unknown coefficient — find the coefficient.
  - A geometric/arithmetic sequence whose terms are themselves logs of consecutive integers.
  - The chord joining two stationary points of a cubic has a specific gradient — prove it / find the cubic.
  - Two simultaneous conditions (e.g. tangency AND passes through a point) force a system that needs both algebra and geometry.

## Changelog
- v1: Initial prompt
- v2: Three of six v1 questions failed C3 (difficulty) despite passing mark count and solution length. Diagnosis: questions were the right length but topics were stacked sequentially, not fused, and parts were routine within each topic. Changes: (1) expanded C3 with concrete definitions of "insight," "fusion vs stacking," and a 4-point Difficulty Audit checklist; (2) made `Insight step` and `Difficulty audit` lines mandatory in the output format so the generator self-attests; (3) added a v2-specific design-tips section listing the failure modes to avoid (sequential topic structures, routine differentiate-and-solve patterns) and concrete high-difficulty patterns to favour (parametric tangency, locus questions, conditions forcing systems).
````

### Key changes summarised
- **C3 was the failing constraint** — rewrote it from 4 vague bullets to 5 concrete criteria, including a self-audit checklist that the generator must run mentally per question.
- **Mandatory self-attestation lines** (`Insight step`, `Difficulty audit`) in the output format force the generator to articulate *why* the question is hard before producing it. If it can't, that's the signal to redesign.
- **Stacking vs fusion** named explicitly as the main failure mode, with a concrete test ("if you split this into 3 questions, would each be easier?").
- **Anti-patterns blacklist** calls out the specific routine patterns the generator was producing.
- **Strong-pattern allowlist** gives concrete A*-grade question shapes to imitate (parametric tangency, locus, perpendicular bisector + stationary point, etc.).

If you'd like me to write this to disk, you can grant permission and I'll re-run the Write — or paste it in yourself.
