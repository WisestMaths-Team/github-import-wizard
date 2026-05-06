# A-Level Maths Year 1 — Question Generator Skill

## Version: 1

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

State which 2+ topics are combined at the start of each question.

**C2 — Clean Math Metric**
- All coordinates must be exact integers or simple rational fractions (e.g. 3/2, not 1.7)
- Any discriminant must be a perfect square so roots are rational or clean surds
- Lengths, areas, gradients must be rational or clean exact surds (e.g. 4√3, 5√2)
- No ugly decimals anywhere in the question or worked solution
- Design the numbers BACKWARDS from the answer to guarantee cleanliness

**C3 — A*/STEP-adjacent difficulty**
- The question should require genuine problem-solving, not just routine application
- Multiple ideas must be connected across the parts
- At least one part should require an insight or non-obvious step
- Difficulty: harder than a typical A-level paper Q8, but not full STEP — aim for the gap between

**C4 — Multi-part structure**
- Every question must have at least 3 parts: (a), (b), (c) minimum
- Parts must build on each other (later parts use results from earlier parts)
- Total marks per question: 10-15
- Each part should be 2-5 marks

### Output format (for each question):

```
QUESTION [N]:
Topics: [topic1] + [topic2] (+ [topic3] if applicable)
Total marks: [M]

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

### Design tips that have worked well in past iterations:
- Start with the answer and work backwards to design the question
- Use completing the square to link algebra with coordinate geometry
- Use "find the equation of the tangent, then find where it meets..." to link differentiation with coordinate geometry
- Use "show that the area is..." with integration + algebra
- For clean numbers: choose roots first, then build the quadratic from them

## Changelog
- v1: Initial prompt
