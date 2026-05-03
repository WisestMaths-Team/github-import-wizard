import { Question, CurveDiagramConfig } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 60): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        pts.push([x, f(x)]);
    }
    return pts;
}

/**
 * Topic: Curve Sketching
 * Ref:   cg5
 *
 * Add your questions to the array below.
 * ID convention: "a9-001", "a9-002", etc.
 *
 * LaTeX cheat sheet:
 *   Fractions:   \\frac{a}{b}
 *   Powers:      x^{2}
 *   Square root: \\sqrt{x}
 *   Trig:        \\sin, \\cos, \\tan
 *   Greek:       \\theta, \\pi
 *   Derivative:  \\frac{dy}{dx}
 *   Integral:    \\int_{a}^{b} f(x)\\,dx
 *   Text:        \\text{minimum}
 */
export const questions: Question[] = [

    // ── Type A: Identify graph shape from equation (Q1–Q5) ────────────────────

    {
        id: 'cg5-001',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 01',
        difficulty: 'Foundation',
        questionText: 'State the general shape of the graph of each of the following functions, giving a reason in each case.\n\na) \\( y = 4x^5 \\)\nb) \\( y = -2x^4 \\)\nc) \\( y = -7x^3 \\)\nd) \\( y = 3x^6 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify power and coefficient for part a.',
                    workingLatex: 'y = 4x^5',
                    explanation: 'We need to read off the power (5) and the coefficient (4) to determine the shape.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine shape for part a.',
                    workingLatex: '\\text{Power } 5 \\text{ is odd, coefficient } 4 > 0 \\implies \\text{bottom-left to top-right}',
                    explanation: 'An odd power means the graph goes in opposite directions at each end. A positive coefficient means it rises to the right and falls to the left, giving a bottom-left to top-right shape.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify power and coefficient for part b.',
                    workingLatex: 'y = -2x^4',
                    explanation: 'The power is 4 and the coefficient is -2.'
                },
                {
                    stepNumber: 4,
                    description: 'Determine shape for part b.',
                    workingLatex: '\\text{Power } 4 \\text{ is even, coefficient } {-2} < 0 \\implies \\text{n-shape}',
                    explanation: 'An even power means both ends go in the same direction. A negative coefficient means both ends point downward, giving an n-shape (inverted u). A common mistake is confusing even/odd power behaviour.'
                },
                {
                    stepNumber: 5,
                    description: 'Identify power and coefficient for part c.',
                    workingLatex: 'y = -7x^3',
                    explanation: 'The power is 3 and the coefficient is -7.'
                },
                {
                    stepNumber: 6,
                    description: 'Determine shape for part c.',
                    workingLatex: '\\text{Power } 3 \\text{ is odd, coefficient } {-7} < 0 \\implies \\text{top-left to bottom-right}',
                    explanation: 'Odd power with a negative coefficient flips the standard cubic shape: it rises to the left and falls to the right, giving top-left to bottom-right.'
                },
                {
                    stepNumber: 7,
                    description: 'Identify power and coefficient for part d.',
                    workingLatex: 'y = 3x^6',
                    explanation: 'The power is 6 and the coefficient is 3.'
                },
                {
                    stepNumber: 8,
                    description: 'Determine shape for part d.',
                    workingLatex: '\\text{Power } 6 \\text{ is even, coefficient } 3 > 0 \\implies \\text{u-shape}',
                    explanation: 'Even power with a positive coefficient means both ends point upward, giving a u-shape. This is the same overall shape as a quadratic with positive leading coefficient.'
                }
            ],
            finalAnswer: 'a) Bottom-left to top-right. b) n-shape. c) Top-left to bottom-right. d) u-shape.'
        }
    },

    {
        id: 'cg5-002',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 02',
        difficulty: 'Foundation',
        questionText: 'Four graphs are shown below, labelled A, B, C, and D. Match each graph to the correct function.\n\na) Graph A: u-shape entirely above the \\(x\\)-axis, passing through the origin.\nb) Graph B: top-left to bottom-right, passing through the origin.\nc) Graph C: n-shape entirely below the \\(x\\)-axis, passing through the origin.\nd) Graph D: bottom-left to top-right, passing through the origin.\n\nFunctions: \\( y = 0.5x^3 \\), \\( y = -4x^2 \\), \\( y = 2x^4 \\), \\( y = -3x^5 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Classify Graph A as u-shape.',
                    workingLatex: '\\text{Graph A: u-shape above } x\\text{-axis}',
                    explanation: 'A u-shape means even power with a positive coefficient. We look through the functions for one that matches.'
                },
                {
                    stepNumber: 2,
                    description: 'Match Graph A to its function.',
                    workingLatex: 'y = 2x^4 \\quad \\text{power } 4 \\text{ (even)}, \\quad 2 > 0 \\implies \\text{u-shape} \\quad \\checkmark',
                    explanation: 'The power 4 is even so both ends go the same way, and the positive coefficient 2 means both ends point upward. This matches Graph A.'
                },
                {
                    stepNumber: 3,
                    description: 'Classify Graph B as top-left to bottom-right.',
                    workingLatex: '\\text{Graph B: top-left to bottom-right}',
                    explanation: 'This shape requires an odd power with a negative coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Match Graph B to its function.',
                    workingLatex: 'y = -3x^5 \\quad \\text{power } 5 \\text{ (odd)}, \\quad {-3} < 0 \\implies \\text{top-left to bottom-right} \\quad \\checkmark',
                    explanation: 'The odd power 5 means the ends go in opposite directions. The negative coefficient -3 flips the standard orientation so the graph falls to the right.'
                },
                {
                    stepNumber: 5,
                    description: 'Classify Graph C as n-shape.',
                    workingLatex: '\\text{Graph C: n-shape below } x\\text{-axis}',
                    explanation: 'An n-shape means even power with a negative coefficient.'
                },
                {
                    stepNumber: 6,
                    description: 'Match Graph C to its function.',
                    workingLatex: 'y = -4x^2 \\quad \\text{power } 2 \\text{ (even)}, \\quad {-4} < 0 \\implies \\text{n-shape} \\quad \\checkmark',
                    explanation: 'The even power 2 means both ends go the same way, and the negative coefficient -4 means both ends point downward. This matches the n-shape of Graph C.'
                },
                {
                    stepNumber: 7,
                    description: 'Classify Graph D as bottom-left to top-right.',
                    workingLatex: '\\text{Graph D: bottom-left to top-right}',
                    explanation: 'This shape requires an odd power with a positive coefficient.'
                },
                {
                    stepNumber: 8,
                    description: 'Match Graph D to its function.',
                    workingLatex: 'y = 0.5x^3 \\quad \\text{power } 3 \\text{ (odd)}, \\quad 0.5 > 0 \\implies \\text{bottom-left to top-right} \\quad \\checkmark',
                    explanation: 'The odd power 3 means the ends go in opposite directions, and the positive coefficient 0.5 means the graph rises to the right and falls to the left.'
                }
            ],
            finalAnswer: 'A \\(\\leftrightarrow y = 2x^4\\), B \\(\\leftrightarrow y = -3x^5\\), C \\(\\leftrightarrow y = -4x^2\\), D \\(\\leftrightarrow y = 0.5x^3\\).'
        }
    },

    // ── Type B: Sketch cubics — three distinct roots (Q3–Q8) ──────────────────

    {
        id: 'cg5-003',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 03',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x(x - 2)(x + 3) \\), clearly showing where the curve meets the coordinate axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = x(x - 2)(x + 3) = x \\cdot x \\cdot x + \\cdots = x^3 + \\cdots',
                    explanation: 'Multiplying the highest-power part of each factor gives the leading term. The coefficient of the leading term determines the end behaviour.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^3: \\text{ odd degree, positive coefficient}',
                    explanation: 'Since the degree is odd and the leading coefficient is positive, the curve goes from bottom-left to top-right. As \\(x\\) tends to negative infinity \\(y\\) tends to negative infinity, and as \\(x\\) tends to positive infinity \\(y\\) tends to positive infinity.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = 0(0 - 2)(0 + 3) = 0 \\times (-2) \\times 3 = 0',
                    explanation: 'Substituting \\(x = 0\\) into every factor shows the curve passes through the origin \\((0, 0)\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: 'x = 0',
                    explanation: 'The first factor gives the root \\(x = 0\\). Since it appears once (single root), the curve crosses the \\(x\\)-axis here.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: 'x - 2 = 0 \\implies x = 2',
                    explanation: 'This is also a single root, so the curve crosses the \\(x\\)-axis at \\(x = 2\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Set the third factor equal to zero.',
                    workingLatex: 'x + 3 = 0 \\implies x = -3',
                    explanation: 'Another single root, so the curve crosses the \\(x\\)-axis at \\(x = -3\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -3,\\ 0,\\ 2 \\text{ (all cross)}; \\quad y\\text{-intercept } (0,0); \\quad \\text{bottom-left to top-right}',
                    explanation: 'All three roots are single roots so the curve crosses the \\(x\\)-axis at each one. The curve enters from the bottom-left, crosses at \\(x = -3\\), then at \\(x = 0\\), then at \\(x = 2\\), and exits to the top-right.',
                    diagram: { xMin: -4, xMax: 3, yMin: -10, yMax: 20, xTicks: [-3, -2, -1, 0, 1, 2, 3], yTicks: [-10, -5, 0, 5, 10, 15, 20],
                        curves: [{ points: sample(x => x*(x-2)*(x+3), -4, 3), color: "#0d9488", width: 2.5 }],
                        points: [{ at: [-3, 0], label: "(-3, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c" }]
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -3, 0, 2\\); passes through origin; positive leading coefficient.'
        }
    },

    {
        id: 'cg5-004',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 04',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (x + 1)(x - 3)(x - 5) \\), showing clearly where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = (x + 1)(x - 3)(x - 5) = x \\cdot x \\cdot x + \\cdots = x^3 + \\cdots',
                    explanation: 'Multiplying the \\(x\\) from each bracket gives the leading term. The coefficient is positive (+1).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^3: \\text{ odd degree, positive coefficient} \\implies \\text{bottom-left to top-right}',
                    explanation: 'Odd degree with a positive leading coefficient means the curve falls to the left and rises to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = (0 + 1)(0 - 3)(0 - 5) = (1)(-3)(-5)',
                    explanation: 'Replace \\(x\\) with 0 in each factor to find where the curve meets the \\(y\\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the \\(y\\)-intercept.',
                    workingLatex: 'y = 1 \\times (-3) \\times (-5) = 15',
                    explanation: 'Two negatives multiply to give a positive. The \\(y\\)-intercept is at \\((0, 15)\\). A common error is getting the sign wrong when multiplying negatives.'
                },
                {
                    stepNumber: 5,
                    description: 'Set first factor equal to zero.',
                    workingLatex: 'x + 1 = 0 \\implies x = -1',
                    explanation: 'This is a single root so the curve crosses the \\(x\\)-axis at \\(x = -1\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Set second factor equal to zero.',
                    workingLatex: 'x - 3 = 0 \\implies x = 3',
                    explanation: 'Another single root, so the curve crosses at \\(x = 3\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Set third factor equal to zero.',
                    workingLatex: 'x - 5 = 0 \\implies x = 5',
                    explanation: 'A single root, so the curve crosses at \\(x = 5\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -1,\\ 3,\\ 5 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 15); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from bottom-left, crosses at \\(x = -1\\), rises through \\((0, 15)\\), crosses at \\(x = 3\\), dips and crosses at \\(x = 5\\), then rises to the top-right.',
                    diagram: { xMin: -2, xMax: 6, yMin: -40, yMax: 25, xTicks: [-1, 0, 1, 2, 3, 4, 5, 6], yTicks: [-30, -20, -10, 0, 10, 20],
                        curves: [{ points: sample(x => (x+1)*(x-3)*(x-5), -2, 6), color: "#0d9488", width: 2.5 }],
                        points: [{ at: [-1, 0], label: "(-1, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 15], label: "(0, 15)", labelAnchor: "e", color: "#d4775c" }, { at: [3, 0], label: "(3, 0)", labelAnchor: "n", color: "#d4775c" }, { at: [5, 0], label: "(5, 0)", labelAnchor: "nw", color: "#d4775c" }]
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -1, 3, 5\\); \\(y\\)-intercept at \\((0, 15)\\).'
        }
    },

    {
        id: 'cg5-005',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 05',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -x(x + 2)(x - 4) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = -x(x + 2)(x - 4) = (-x) \\cdot x \\cdot x + \\cdots = -x^3 + \\cdots',
                    explanation: 'The leading coefficient comes from multiplying the \\(x\\)-parts of each factor: \\((-x)\\), \\(x\\), and \\(x\\) give \\(-x^3\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } -x^3: \\text{ odd degree, negative coefficient} \\implies \\text{top-left to bottom-right}',
                    explanation: 'Odd degree with a negative leading coefficient means the curve rises to the left and falls to the right. This is the opposite of a standard positive cubic.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = -(0)(0 + 2)(0 - 4) = 0 \\times 2 \\times (-4) = 0',
                    explanation: 'Since \\(x = 0\\) is a factor, the product is zero. The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: '-x = 0 \\implies x = 0',
                    explanation: 'This is a single root so the curve crosses the \\(x\\)-axis at \\(x = 0\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: 'x + 2 = 0 \\implies x = -2',
                    explanation: 'Another single root, so the curve crosses at \\(x = -2\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Set the third factor equal to zero.',
                    workingLatex: 'x - 4 = 0 \\implies x = 4',
                    explanation: 'A single root, so the curve crosses at \\(x = 4\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -2,\\ 0,\\ 4 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{top-left to bottom-right}',
                    explanation: 'The curve enters from the top-left, crosses at \\(x = -2\\), dips down, crosses the origin, rises and crosses at \\(x = 4\\), then falls to the bottom-right. The negative leading coefficient flips the orientation compared to a standard cubic.',
                    diagram: { xMin: -3, xMax: 5, yMin: -40, yMax: 25, xTicks: [-2, -1, 0, 1, 2, 3, 4, 5], yTicks: [-30, -20, -10, 0, 10, 20],
                        curves: [{ points: sample(x => -x*(x+2)*(x-4), -3, 5), color: "#0d9488", width: 2.5 }],
                        points: [{ at: [-2, 0], label: "(-2, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [4, 0], label: "(4, 0)", labelAnchor: "nw", color: "#d4775c" }]
                    }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -2, 0, 4\\); passes through origin; top-left to bottom-right shape.'
        }
    },

    {
        id: 'cg5-006',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 06',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = x^3 + x^2 - 6x \\):\n\na) Factorise the expression completely.\nb) Hence sketch the graph, showing where it meets the coordinate axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the common factor.',
                    workingLatex: 'x^3 + x^2 - 6x',
                    explanation: 'Each of the three terms contains a factor of \\(x\\). We must take this out first before attempting to factorise the quadratic that remains.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\(x\\).',
                    workingLatex: 'x^3 + x^2 - 6x = x(x^2 + x - 6)',
                    explanation: 'Dividing each term by \\(x\\) gives \\(x^2 + x - 6\\). A common mistake is forgetting to factor out \\(x\\) first and trying to factorise the cubic directly.'
                },
                {
                    stepNumber: 3,
                    description: 'Find two numbers that multiply to -6 and add to 1.',
                    workingLatex: '3 \\times (-2) = -6, \\quad 3 + (-2) = 1',
                    explanation: 'To factorise \\(x^2 + x - 6\\), we need two numbers whose product is -6 (the constant term) and whose sum is +1 (the coefficient of \\(x\\)).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + x - 6 = (x + 3)(x - 2)',
                    explanation: 'Using the numbers 3 and -2 found above.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the complete factorisation.',
                    workingLatex: 'x^3 + x^2 - 6x = x(x + 3)(x - 2)',
                    explanation: 'This is the answer to part a). Three linear factors means three roots.'
                },
                {
                    stepNumber: 6,
                    description: 'Identify the leading term for part b.',
                    workingLatex: '\\text{Leading term: } x^3 \\quad (\\text{positive coefficient})',
                    explanation: 'Odd degree with positive leading coefficient gives a bottom-left to top-right shape.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the \\(y\\)-intercept.',
                    workingLatex: 'y = 0(0 + 3)(0 - 2) = 0 \\times 3 \\times (-2) = 0',
                    explanation: 'Substituting \\(x = 0\\) shows the curve passes through the origin \\((0, 0)\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Find the \\(x\\)-intercepts.',
                    workingLatex: 'x = 0, \\quad x + 3 = 0 \\implies x = -3, \\quad x - 2 = 0 \\implies x = 2',
                    explanation: 'Setting each factor to zero gives three distinct single roots. Since each root is single, the curve crosses the \\(x\\)-axis at each one.'
                },
                {
                    stepNumber: 9,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -3,\\ 0,\\ 2 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from the bottom-left, crosses at \\(x = -3\\), rises, crosses the origin, dips, crosses at \\(x = 2\\), and exits to the top-right.',
                    diagram: { xMin: -4, xMax: 3, yMin: -10, yMax: 20, xTicks: [-3, -2, -1, 0, 1, 2, 3], yTicks: [-10, -5, 0, 5, 10, 15, 20],
                        curves: [{ points: sample(x => x*(x+3)*(x-2), -4, 3), color: "#0d9488", width: 2.5 }],
                        points: [{ at: [-3, 0], label: "(-3, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c" }]
                    }
                }
            ],
            finalAnswer: 'a) \\(x(x+3)(x-2)\\). b) Cubic crossing at \\(x = -3, 0, 2\\); positive shape.'
        }
    },

    {
        id: 'cg5-007',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 07',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (2x + 1)(x - 2)(x - 4) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = (2x + 1)(x - 2)(x - 4) = 2x \\cdot x \\cdot x + \\cdots = 2x^3 + \\cdots',
                    explanation: 'Multiply the \\(x\\)-parts of each factor: \\(2x\\) from the first, \\(x\\) from the second, \\(x\\) from the third gives \\(2x^3\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } 2x^3: \\text{ odd degree, positive coefficient} \\implies \\text{bottom-left to top-right}',
                    explanation: 'Odd degree with positive leading coefficient means the curve falls to the left and rises to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = (2(0) + 1)(0 - 2)(0 - 4) = (1)(-2)(-4)',
                    explanation: 'Replace \\(x\\) with 0 in each factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the \\(y\\)-intercept.',
                    workingLatex: 'y = 1 \\times (-2) \\times (-4) = 8',
                    explanation: 'Two negatives multiply to give a positive. The \\(y\\)-intercept is at \\((0, 8)\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: '2x + 1 = 0 \\implies 2x = -1 \\implies x = -\\tfrac{1}{2}',
                    explanation: 'This gives a fractional root. It is a single root so the curve crosses here. Be careful to solve \\(2x + 1 = 0\\) correctly by subtracting 1 then dividing by 2.'
                },
                {
                    stepNumber: 6,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: 'x - 2 = 0 \\implies x = 2',
                    explanation: 'A single root, so the curve crosses at \\(x = 2\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Set the third factor equal to zero.',
                    workingLatex: 'x - 4 = 0 \\implies x = 4',
                    explanation: 'A single root, so the curve crosses at \\(x = 4\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -\\tfrac{1}{2},\\ 2,\\ 4 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 8); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from bottom-left, crosses at \\(x = -1/2\\), rises through \\((0, 8)\\), crosses at \\(x = 2\\), dips and crosses at \\(x = 4\\), then rises to the top-right.',
                    diagram: { xMin: -1.5, xMax: 5, yMin: -40, yMax: 35, xTicks: [-1, 0, 1, 2, 3, 4, 5], yTicks: [-30, -20, -10, 0, 10, 20, 30], curves: [{ points: sample(x => (2*x+1)*(x-2)*(x-4), -1.5, 5), color: "#0d9488", width: 2.5 }], points: [{ at: [-0.5, 0], label: "(-0.5, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 8], label: "(0, 8)", labelAnchor: "e", color: "#d4775c" }, { at: [2, 0], label: "(2, 0)", labelAnchor: "n", color: "#d4775c" }, { at: [4, 0], label: "(4, 0)", labelAnchor: "nw", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Cubic crossing \\(x\\)-axis at \\(x = -\\tfrac{1}{2}, 2, 4\\); \\(y\\)-intercept at \\((0, 8)\\).'
        }
    },

    {
        id: 'cg5-008',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 08',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = 2x^3 - 8x \\):\n\na) Factorise completely.\nb) Hence sketch the graph, showing where it meets the coordinate axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the common factor.',
                    workingLatex: '2x^3 - 8x',
                    explanation: 'Both terms contain a factor of \\(2x\\). We must extract this first.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\(2x\\).',
                    workingLatex: '2x^3 - 8x = 2x(x^2 - 4)',
                    explanation: 'Dividing each term by \\(2x\\): \\(2x^3 / 2x = x^2\\) and \\(-8x / 2x = -4\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise the difference of two squares.',
                    workingLatex: 'x^2 - 4 = x^2 - 2^2',
                    explanation: 'The expression \\(x^2 - 4\\) is in the form \\(a^2 - b^2\\) where \\(a = x\\) and \\(b = 2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the difference of two squares.',
                    workingLatex: 'x^2 - 2^2 = (x - 2)(x + 2)',
                    explanation: 'Using \\(a^2 - b^2 = (a - b)(a + b)\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the complete factorisation.',
                    workingLatex: '2x^3 - 8x = 2x(x - 2)(x + 2)',
                    explanation: 'This is the answer to part a). Three linear factors give three roots.'
                },
                {
                    stepNumber: 6,
                    description: 'Identify the leading term for part b.',
                    workingLatex: '\\text{Leading term: } 2x^3 \\quad (\\text{positive coefficient})',
                    explanation: 'Odd degree with positive leading coefficient gives a bottom-left to top-right shape.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the \\(y\\)-intercept.',
                    workingLatex: 'y = 2(0)(0 - 2)(0 + 2) = 2 \\times 0 \\times (-2) \\times 2 = 0',
                    explanation: 'Since \\(x = 0\\) is a factor, the \\(y\\)-intercept is 0. The curve passes through the origin.'
                },
                {
                    stepNumber: 8,
                    description: 'Find the \\(x\\)-intercepts.',
                    workingLatex: '2x = 0 \\implies x = 0, \\quad x - 2 = 0 \\implies x = 2, \\quad x + 2 = 0 \\implies x = -2',
                    explanation: 'All three roots are single roots, so the curve crosses the \\(x\\)-axis at each. The roots at \\(x = -2\\) and \\(x = 2\\) are symmetric about the origin.'
                },
                {
                    stepNumber: 9,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -2,\\ 0,\\ 2 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from the bottom-left, crosses at \\(x = -2\\), rises through the origin, dips and crosses at \\(x = 2\\), then exits to the top-right. The graph has rotational symmetry about the origin since \\(y = 2x^3 - 8x\\) is an odd function.',
                    diagram: { xMin: -3, xMax: 3, yMin: -35, yMax: 35, xTicks: [-2, -1, 0, 1, 2], yTicks: [-30, -20, -10, 0, 10, 20, 30], curves: [{ points: sample(x => 2*x*(x-2)*(x+2), -3, 3), color: "#0d9488", width: 2.5 }], points: [{ at: [-2, 0], label: "(-2, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'a) \\(2x(x-2)(x+2)\\). b) Cubic crossing \\(x\\)-axis at \\(x = -2, 0, 2\\); passes through origin.'
        }
    },

    // ── Type C: Cubics with repeated roots (Q9–Q14) ───────────────────────────

    {
        id: 'cg5-009',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 09',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x^2(x - 3) \\), showing clearly where the curve meets the axes and describing the behaviour at each \\( x \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = x^2(x - 3) = x^2 \\cdot x + \\cdots = x^3 + \\cdots',
                    explanation: 'Multiplying the \\(x\\)-parts of each factor gives \\(x^3\\). The leading coefficient is positive (+1).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^3: \\text{ odd degree, positive coefficient} \\implies \\text{bottom-left to top-right}',
                    explanation: 'Odd degree with positive leading coefficient means the curve falls to the left and rises to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = 0^2(0 - 3) = 0 \\times (-3) = 0',
                    explanation: 'The curve passes through the origin \\((0, 0)\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: 'x^2 = 0 \\implies x = 0 \\quad (\\text{double root})',
                    explanation: 'The factor \\(x\\) appears squared, so \\(x = 0\\) is a repeated (double) root. A double root means the curve touches the \\(x\\)-axis at this point but does not cross it.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: 'x - 3 = 0 \\implies x = 3 \\quad (\\text{single root})',
                    explanation: 'This factor appears once, so \\(x = 3\\) is a single root. The curve crosses the \\(x\\)-axis at this point.'
                },
                {
                    stepNumber: 6,
                    description: 'Explain touch vs cross behaviour.',
                    workingLatex: 'x = 0: \\text{ touches (bounces off)}; \\quad x = 3: \\text{ crosses (cuts through)}',
                    explanation: 'At a double root the curve just touches the axis and turns back, like a turning point sitting on the axis. At a single root the curve passes straight through. A common mistake is drawing the curve crossing at a double root.'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = 0 \\text{ (touch)},\\ x = 3 \\text{ (cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from the bottom-left, rises to touch the \\(x\\)-axis at the origin without crossing, dips below the axis, then crosses at \\(x = 3\\) and rises to the top-right.',
                    diagram: { xMin: -2, xMax: 4, yMin: -10, yMax: 16, xTicks: [-1, 0, 1, 2, 3, 4], yTicks: [-10, -5, 0, 5, 10, 15], curves: [{ points: sample(x => x*x*(x-3), -2, 4), color: "#0d9488", width: 2.5 }], points: [{ at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [3, 0], label: "(3, 0)", labelAnchor: "n", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Cubic touching \\(x\\)-axis at \\(x = 0\\) (double root) and crossing at \\(x = 3\\); \\(y\\)-intercept at origin.'
        }
    },

    {
        id: 'cg5-010',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 10',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (x + 2)^2(x - 1) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = (x + 2)^2(x - 1) = x^2 \\cdot x + \\cdots = x^3 + \\cdots',
                    explanation: 'The \\(x^2\\) from the squared bracket and the \\(x\\) from the linear bracket give \\(x^3\\). The leading coefficient is positive (+1).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^3: \\text{ odd degree, positive coefficient} \\implies \\text{bottom-left to top-right}',
                    explanation: 'Odd degree with positive leading coefficient means the curve falls to the left and rises to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) into each factor.',
                    workingLatex: 'y = (0 + 2)^2(0 - 1) = (2)^2 \\times (-1)',
                    explanation: 'Replace \\(x\\) with 0 in each bracket to find the \\(y\\)-intercept.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the \\(y\\)-intercept.',
                    workingLatex: 'y = 4 \\times (-1) = -4',
                    explanation: 'The \\(y\\)-intercept is at \\((0, -4)\\). The curve crosses the \\(y\\)-axis below the \\(x\\)-axis.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the squared factor equal to zero.',
                    workingLatex: '(x + 2)^2 = 0 \\implies x + 2 = 0 \\implies x = -2 \\quad (\\text{double root})',
                    explanation: 'The factor \\((x + 2)\\) appears squared, so \\(x = -2\\) is a double root. The curve touches the \\(x\\)-axis here but does not cross it.'
                },
                {
                    stepNumber: 6,
                    description: 'Set the linear factor equal to zero.',
                    workingLatex: 'x - 1 = 0 \\implies x = 1 \\quad (\\text{single root})',
                    explanation: 'This factor appears once, so \\(x = 1\\) is a single root. The curve crosses the \\(x\\)-axis at this point.'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -2 \\text{ (touch)},\\ x = 1 \\text{ (cross)}; \\quad y\\text{-intercept } (0, -4); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from the bottom-left, touches the \\(x\\)-axis at \\(x = -2\\) and bounces back down, passes through \\((0, -4)\\), then crosses the \\(x\\)-axis at \\(x = 1\\) and rises to the top-right.',
                    diagram: { xMin: -3.5, xMax: 2.5, yMin: -12, yMax: 20, xTicks: [-3, -2, -1, 0, 1, 2], yTicks: [-10, -5, 0, 5, 10, 15, 20], curves: [{ points: sample(x => (x+2)*(x+2)*(x-1), -3.5, 2.5), color: "#0d9488", width: 2.5 }], points: [{ at: [-2, 0], label: "(-2, 0)", labelAnchor: "n", color: "#d4775c" }, { at: [0, -4], label: "(0, -4)", labelAnchor: "e", color: "#d4775c" }, { at: [1, 0], label: "(1, 0)", labelAnchor: "nw", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Cubic touching \\(x\\)-axis at \\(x = -2\\), crossing at \\(x = 1\\); \\(y\\)-intercept at \\((0, -4)\\).'
        }
    },

    {
        id: 'cg5-011',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 11',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (3 - x)^3 \\), showing where the curve meets the axes and describing the behaviour at the \\( x \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = (3 - x)^3 = (-x + 3)^3',
                    explanation: 'We need to find the highest-power term. The \\(x\\)-part of the bracket is \\(-x\\), and this bracket is cubed.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the leading coefficient.',
                    workingLatex: '(-x)^3 = -x^3 \\quad \\text{so leading term is } -x^3',
                    explanation: 'Cubing the \\(-x\\) part gives \\(-x^3\\). The leading coefficient is negative.'
                },
                {
                    stepNumber: 3,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } -x^3: \\text{ odd degree, negative coefficient} \\implies \\text{top-left to bottom-right}',
                    explanation: 'Odd degree with a negative leading coefficient means the curve rises to the left and falls to the right.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = (3 - 0)^3 = 3^3',
                    explanation: 'Replace \\(x\\) with 0 in the bracket.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the \\(y\\)-intercept.',
                    workingLatex: 'y = 3^3 = 27',
                    explanation: 'The \\(y\\)-intercept is at \\((0, 27)\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Set the factor equal to zero.',
                    workingLatex: '(3 - x)^3 = 0 \\implies 3 - x = 0 \\implies x = 3 \\quad (\\text{triple root})',
                    explanation: 'The factor \\((3 - x)\\) appears three times, so \\(x = 3\\) is a triple root. A triple root means the curve still crosses the \\(x\\)-axis (unlike a double root which only touches), but it flattens out as it crosses, creating a point of inflection on the axis.'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Root: } x = 3 \\text{ (triple, crosses with inflection)}; \\quad y\\text{-intercept } (0, 27); \\quad \\text{top-left to bottom-right}',
                    explanation: 'The curve enters from the top-left, passes through \\((0, 27)\\), then flattens and crosses the \\(x\\)-axis at \\(x = 3\\) with an inflection-type crossing, before falling to the bottom-right. A common mistake is thinking a triple root means the curve touches but does not cross.',
                    diagram: { xMin: -1, xMax: 6, yMin: -30, yMax: 70, xTicks: [0, 1, 2, 3, 4, 5], yTicks: [-20, 0, 20, 40, 60], curves: [{ points: sample(x => Math.pow(3 - x, 3), -1, 6), color: "#0d9488", width: 2.5 }], points: [{ at: [0, 27], label: "(0, 27)", labelAnchor: "e", color: "#d4775c" }, { at: [3, 0], label: "(3, 0)", labelAnchor: "n", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Cubic with triple root at \\(x = 3\\); \\(y\\)-intercept at \\((0, 27)\\); top-left to bottom-right overall shape.'
        }
    },

    {
        id: 'cg5-012',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 12',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -x^2(x + 4) \\), showing where the curve meets the axes and describing the behaviour at each \\( x \\)-intercept.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = -x^2(x + 4) = -x^2 \\cdot x + \\cdots = -x^3 + \\cdots',
                    explanation: 'The \\(-x^2\\) multiplied by the \\(x\\) from the second bracket gives \\(-x^3\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } -x^3: \\text{ odd degree, negative coefficient} \\implies \\text{top-left to bottom-right}',
                    explanation: 'Odd degree with negative leading coefficient means the curve rises to the left and falls to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = -(0)^2(0 + 4) = 0 \\times 4 = 0',
                    explanation: 'Since \\(x^2\\) gives 0 when \\(x = 0\\), the entire product is 0. The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the squared factor equal to zero.',
                    workingLatex: '-x^2 = 0 \\implies x^2 = 0 \\implies x = 0 \\quad (\\text{double root})',
                    explanation: 'The factor \\(x\\) appears squared, so \\(x = 0\\) is a double root. The curve touches the \\(x\\)-axis here but does not cross it.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the linear factor equal to zero.',
                    workingLatex: 'x + 4 = 0 \\implies x = -4 \\quad (\\text{single root})',
                    explanation: 'This is a single root, so the curve crosses the \\(x\\)-axis at \\(x = -4\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Explain touch vs cross behaviour.',
                    workingLatex: 'x = -4: \\text{ crosses}; \\quad x = 0: \\text{ touches (bounces off)}',
                    explanation: 'At the double root \\(x = 0\\), the curve bounces off the axis like a turning point sitting on it. At the single root \\(x = -4\\), it cuts straight through.'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -4 \\text{ (cross)},\\ x = 0 \\text{ (touch)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{top-left to bottom-right}',
                    explanation: 'The curve enters from the top-left, crosses the \\(x\\)-axis at \\(x = -4\\), rises to touch the origin, then falls away to the bottom-right. The negative leading coefficient determines the overall direction.',
                    diagram: { xMin: -5, xMax: 2, yMin: -25, yMax: 30, xTicks: [-4, -3, -2, -1, 0, 1, 2], yTicks: [-20, -10, 0, 10, 20, 30], curves: [{ points: sample(x => -x * x * (x + 4), -5, 2), color: "#0d9488", width: 2.5 }], points: [{ at: [-4, 0], label: "(-4, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Cubic crossing at \\(x = -4\\), touching at \\(x = 0\\); passes through origin; top-left to bottom-right shape.'
        }
    },

    {
        id: 'cg5-013',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 13',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x(x - 5)^2 \\), showing all intercepts and describing the nature of each root.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = x(x - 5)^2 = x \\cdot x^2 + \\cdots = x^3 + \\cdots',
                    explanation: 'The \\(x\\) from the first factor and \\(x^2\\) from the squared bracket give \\(x^3\\). The leading coefficient is positive (+1).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^3: \\text{ odd degree, positive coefficient} \\implies \\text{bottom-left to top-right}',
                    explanation: 'Odd degree with positive leading coefficient means the curve falls to the left and rises to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = 0 \\times (0 - 5)^2 = 0 \\times 25 = 0',
                    explanation: 'Since \\(x\\) is a factor, the product is 0 when \\(x = 0\\). The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: 'x = 0 \\quad (\\text{single root})',
                    explanation: 'The factor \\(x\\) appears once, so \\(x = 0\\) is a single root. The curve crosses the \\(x\\)-axis here.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the squared factor equal to zero.',
                    workingLatex: '(x - 5)^2 = 0 \\implies x - 5 = 0 \\implies x = 5 \\quad (\\text{double root})',
                    explanation: 'The factor \\((x - 5)\\) appears squared, so \\(x = 5\\) is a double root. The curve touches the \\(x\\)-axis here but does not cross it.'
                },
                {
                    stepNumber: 6,
                    description: 'Explain touch vs cross behaviour.',
                    workingLatex: 'x = 0: \\text{ crosses}; \\quad x = 5: \\text{ touches (bounces off)}',
                    explanation: 'At a single root the curve cuts through the axis. At a double root the curve bounces off the axis. A common mistake is drawing the curve crossing at \\(x = 5\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = 0 \\text{ (cross)},\\ x = 5 \\text{ (touch)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from the bottom-left, crosses the \\(x\\)-axis at the origin, rises to a local maximum, dips back down to touch the \\(x\\)-axis at \\(x = 5\\), then rises to the top-right.',
                    diagram: { xMin: -1, xMax: 6.5, yMin: -20, yMax: 22, xTicks: [0, 1, 2, 3, 4, 5, 6], yTicks: [-15, -10, -5, 0, 5, 10, 15, 20], curves: [{ points: sample(x => x * (x - 5) * (x - 5), -1, 6.5), color: "#0d9488", width: 2.5 }], points: [{ at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [5, 0], label: "(5, 0)", labelAnchor: "n", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Cubic crossing at \\(x = 0\\), touching at \\(x = 5\\); \\(y\\)-intercept at origin; positive shape.'
        }
    },

    {
        id: 'cg5-014',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 14',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = 2x^3 - 12x^2 + 18x \\):\n\na) Factorise completely.\nb) Hence sketch the graph, showing where it meets the coordinate axes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the common factor.',
                    workingLatex: '2x^3 - 12x^2 + 18x',
                    explanation: 'Each of the three terms contains a factor of \\(2x\\). We must extract this before factorising the remaining quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\(2x\\).',
                    workingLatex: '2x^3 - 12x^2 + 18x = 2x(x^2 - 6x + 9)',
                    explanation: 'Dividing each term by \\(2x\\): \\(2x^3 / 2x = x^2\\), \\(-12x^2 / 2x = -6x\\), and \\(18x / 2x = 9\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise the perfect square.',
                    workingLatex: 'x^2 - 6x + 9 = (x)^2 - 2(x)(3) + (3)^2',
                    explanation: 'The quadratic matches the pattern \\(a^2 - 2ab + b^2\\) with \\(a = x\\) and \\(b = 3\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise as a perfect square.',
                    workingLatex: 'x^2 - 6x + 9 = (x - 3)^2',
                    explanation: 'Using \\(a^2 - 2ab + b^2 = (a - b)^2\\). A common mistake is not recognising this as a perfect square and using the quadratic formula unnecessarily.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the complete factorisation.',
                    workingLatex: '2x^3 - 12x^2 + 18x = 2x(x - 3)^2',
                    explanation: 'This is the answer to part a). The factor \\(x\\) appears once and the factor \\((x - 3)\\) appears twice.'
                },
                {
                    stepNumber: 6,
                    description: 'Identify the leading term for part b.',
                    workingLatex: '\\text{Leading term: } 2x^3 \\quad (\\text{positive coefficient})',
                    explanation: 'Odd degree with positive leading coefficient gives a bottom-left to top-right shape.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the \\(y\\)-intercept.',
                    workingLatex: 'y = 2(0)(0 - 3)^2 = 0 \\times 9 = 0',
                    explanation: 'Since \\(x\\) is a factor, the \\(y\\)-intercept is 0. The curve passes through the origin.'
                },
                {
                    stepNumber: 8,
                    description: 'Find \\(x\\)-intercepts and their nature.',
                    workingLatex: '2x = 0 \\implies x = 0 \\;(\\text{single, crosses}); \\quad (x - 3)^2 = 0 \\implies x = 3 \\;(\\text{double, touches})',
                    explanation: 'The single root at \\(x = 0\\) means the curve crosses the \\(x\\)-axis there. The double root at \\(x = 3\\) means the curve touches the \\(x\\)-axis and bounces back.'
                },
                {
                    stepNumber: 9,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = 0 \\text{ (cross)},\\ x = 3 \\text{ (touch)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{bottom-left to top-right}',
                    explanation: 'The curve enters from the bottom-left, crosses the \\(x\\)-axis at the origin, rises to a local maximum, dips to touch the \\(x\\)-axis at \\(x = 3\\), then rises to the top-right.',
                    diagram: { xMin: -1, xMax: 4.5, yMin: -15, yMax: 22, xTicks: [0, 1, 2, 3, 4], yTicks: [-10, -5, 0, 5, 10, 15, 20], curves: [{ points: sample(x => 2 * x * (x - 3) * (x - 3), -1, 4.5), color: "#0d9488", width: 2.5 }], points: [{ at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [3, 0], label: "(3, 0)", labelAnchor: "n", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'a) \\(2x(x-3)^2\\). b) Crosses at \\(x = 0\\), touches at \\(x = 3\\); positive cubic shape.'
        }
    },

    // ── Type D: Quartic sketching (Q15–Q22) ───────────────────────────────────

    {
        id: 'cg5-015',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 15',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x(x - 1)(x + 1)(x - 3) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = x(x - 1)(x + 1)(x - 3) = x \\cdot x \\cdot x \\cdot x + \\cdots = x^4 + \\cdots',
                    explanation: 'Multiplying the \\(x\\)-part of each of the four brackets gives \\(x^4\\). The leading coefficient is positive (+1).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^4: \\text{ even degree, positive coefficient} \\implies \\text{u-shape}',
                    explanation: 'Even degree means both ends go in the same direction. Positive coefficient means both ends point upward, giving a u-shape overall. As \\(x\\) tends to both positive and negative infinity, \\(y\\) tends to positive infinity.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = 0(0 - 1)(0 + 1)(0 - 3) = 0 \\times (-1) \\times 1 \\times (-3) = 0',
                    explanation: 'Since \\(x\\) is a factor, the product is 0 when \\(x = 0\\). The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set each factor equal to zero.',
                    workingLatex: 'x = 0, \\quad x - 1 = 0 \\implies x = 1, \\quad x + 1 = 0 \\implies x = -1, \\quad x - 3 = 0 \\implies x = 3',
                    explanation: 'Four distinct single roots. Since none are repeated, the curve crosses the \\(x\\)-axis at each root.'
                },
                {
                    stepNumber: 5,
                    description: 'Note all roots are single (cross).',
                    workingLatex: 'x = -1,\\ 0,\\ 1,\\ 3 \\quad \\text{all single roots} \\implies \\text{all cross}',
                    explanation: 'At each of these four \\(x\\)-values, the curve crosses straight through the \\(x\\)-axis. There are no repeated roots so no touching behaviour.'
                },
                {
                    stepNumber: 6,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -1,\\ 0,\\ 1,\\ 3 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{u-shape}',
                    explanation: 'The curve rises from the top-left, crosses at \\(x = -1\\), dips, crosses at \\(x = 0\\), rises, crosses at \\(x = 1\\), dips again, crosses at \\(x = 3\\), then rises to the top-right. The u-shape end behaviour means both ends point upward.',
                    diagram: { xMin: -2, xMax: 4, yMin: -10, yMax: 30, xTicks: [-1, 0, 1, 2, 3, 4], yTicks: [-5, 0, 5, 10, 15, 20, 25], curves: [{ points: sample(x => x * (x - 1) * (x + 1) * (x - 3), -2, 4), color: "#0d9488", width: 2.5 }], points: [{ at: [-1, 0], label: "(-1, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [1, 0], label: "(1, 0)", labelAnchor: "n", color: "#d4775c" }, { at: [3, 0], label: "(3, 0)", labelAnchor: "nw", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = -1, 0, 1, 3\\); \\(y\\)-intercept at origin; u-shape overall.'
        }
    },

    {
        id: 'cg5-016',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 16',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -2x(x + 3)(x - 1)(x - 4) \\), showing where the curve meets the axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = -2x(x + 3)(x - 1)(x - 4) = -2x \\cdot x \\cdot x \\cdot x + \\cdots = -2x^4 + \\cdots',
                    explanation: 'Multiplying the \\(x\\)-parts from each factor with the coefficient \\(-2\\) gives \\(-2x^4\\). The leading coefficient is negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } -2x^4: \\text{ even degree, negative coefficient} \\implies \\text{n-shape}',
                    explanation: 'Even degree means both ends go in the same direction. Negative coefficient means both ends point downward, giving an n-shape (inverted u). As \\(x\\) tends to both positive and negative infinity, \\(y\\) tends to negative infinity.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = -2(0)(0 + 3)(0 - 1)(0 - 4) = -2 \\times 0 \\times 3 \\times (-1) \\times (-4) = 0',
                    explanation: 'Since \\(x\\) is a factor, the product is 0 when \\(x = 0\\). The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set each factor equal to zero.',
                    workingLatex: '-2x = 0 \\implies x = 0, \\quad x + 3 = 0 \\implies x = -3, \\quad x - 1 = 0 \\implies x = 1, \\quad x - 4 = 0 \\implies x = 4',
                    explanation: 'Four distinct single roots. Since none are repeated, the curve crosses the \\(x\\)-axis at each root.'
                },
                {
                    stepNumber: 5,
                    description: 'Note all roots are single (cross).',
                    workingLatex: 'x = -3,\\ 0,\\ 1,\\ 4 \\quad \\text{all single roots} \\implies \\text{all cross}',
                    explanation: 'At each root the curve passes straight through the \\(x\\)-axis.'
                },
                {
                    stepNumber: 6,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -3,\\ 0,\\ 1,\\ 4 \\text{ (all cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{n-shape}',
                    explanation: 'The curve falls from the bottom-left, crosses at \\(x = -3\\), rises, crosses at \\(x = 0\\), rises further, crosses at \\(x = 1\\), rises to a peak, crosses at \\(x = 4\\), then falls to the bottom-right. The n-shape end behaviour means both ends point downward.',
                    diagram: { xMin: -3.5, xMax: 4.5, yMin: -125, yMax: 80, xTicks: [-3, -2, -1, 0, 1, 2, 3, 4], yTicks: [-100, -50, 0, 50], curves: [{ points: sample(x => -2 * x * (x + 3) * (x - 1) * (x - 4), -3.5, 4.5), color: "#0d9488", width: 2.5 }], points: [{ at: [-3, 0], label: "(-3, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [1, 0], label: "(1, 0)", labelAnchor: "n", color: "#d4775c" }, { at: [4, 0], label: "(4, 0)", labelAnchor: "nw", color: "#d4775c" }] }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = -3, 0, 1, 4\\); \\(y\\)-intercept at origin; n-shape overall.'
        }
    },

    {
        id: 'cg5-017',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 17',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x^2(x + 2)(x - 3) \\), showing all intercepts and the nature of each root.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: 'y = x^2(x + 2)(x - 3) = x^2 \\cdot x \\cdot x + \\cdots = x^4 + \\cdots',
                    explanation: 'The \\(x^2\\) from the first factor and the \\(x\\) from each of the other two factors give \\(x^4\\). The leading coefficient is positive (+1).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the end behaviour.',
                    workingLatex: '\\text{Leading term } x^4: \\text{ even degree, positive coefficient} \\implies \\text{u-shape}',
                    explanation: 'Even degree with positive leading coefficient means both ends point upward, giving a u-shape overall.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) for the \\(y\\)-intercept.',
                    workingLatex: 'y = 0^2(0 + 2)(0 - 3) = 0 \\times 2 \\times (-3) = 0',
                    explanation: 'Since \\(x^2\\) is a factor, the product is 0 when \\(x = 0\\). The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the squared factor equal to zero.',
                    workingLatex: 'x^2 = 0 \\implies x = 0 \\quad (\\text{double root})',
                    explanation: 'The factor \\(x\\) appears squared, so \\(x = 0\\) is a double root. The curve touches the \\(x\\)-axis here but does not cross it.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the remaining factors equal to zero.',
                    workingLatex: 'x + 2 = 0 \\implies x = -2 \\quad (\\text{single root}); \\quad x - 3 = 0 \\implies x = 3 \\quad (\\text{single root})',
                    explanation: 'Both of these are single roots, so the curve crosses the \\(x\\)-axis at \\(x = -2\\) and \\(x = 3\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Explain touch vs cross behaviour.',
                    workingLatex: 'x = -2: \\text{ crosses}; \\quad x = 0: \\text{ touches}; \\quad x = 3: \\text{ crosses}',
                    explanation: 'At the double root \\(x = 0\\) the curve bounces off the axis without crossing. At the single roots \\(x = -2\\) and \\(x = 3\\), it cuts through.'
                },
                {
                    stepNumber: 7,
                    description: 'Summarise the sketch.',
                    workingLatex: '\\text{Roots: } x = -2 \\text{ (cross)},\\ x = 0 \\text{ (touch)},\\ x = 3 \\text{ (cross)}; \\quad y\\text{-intercept } (0, 0); \\quad \\text{u-shape}',
                    explanation: 'The curve rises from the top-left, crosses at \\(x = -2\\), dips down, touches the origin and bounces back up, then dips again, crosses at \\(x = 3\\), and rises to the top-right.',
                    diagram: {
                        xMin: -3, xMax: 4, yMin: -20, yMax: 55,
                        xTicks: [-3, -2, -1, 1, 2, 3, 4],
                        yTicks: [-20, -10, 10, 20, 30, 40, 50],
                        curves: [{
                            points: sample(x => x * x * (x + 2) * (x - 3), -2.8, 3.6, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [0, 0], label: '(0, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [3, 0], label: '(3, 0)', labelAnchor: 'nw', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Quartic touching at \\(x = 0\\), crossing at \\(x = -2\\) and \\(x = 3\\); \\(y\\)-intercept at origin.'
        }
    },

    {
        id: 'cg5-018',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 18',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (x - 2)^2(x + 1)^2 \\), showing all intercepts and describing the behaviour at each.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the degree of the polynomial.',
                    workingLatex: '(x-2)^2(x+1)^2 \\text{ has degree } 2 + 2 = 4',
                    explanation: 'Each squared factor contributes degree 2, so the overall polynomial is a quartic (degree 4).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the leading coefficient.',
                    workingLatex: 'x^2 \\cdot x^2 = x^4',
                    explanation: 'The leading term is \\( x^4 \\) with coefficient \\( +1 \\). Even degree with positive leading coefficient gives a u-shape overall.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 0\\) into each factor.',
                    workingLatex: 'y = (0 - 2)^2(0 + 1)^2 = (-2)^2 \\times (1)^2',
                    explanation: 'Substitute \\( x = 0 \\) into every bracket to find the \\( y \\)-intercept. A common mistake is forgetting to square each bracket.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the \\(y\\)-intercept.',
                    workingLatex: 'y = 4 \\times 1 = 4',
                    explanation: 'The curve crosses the \\( y \\)-axis at \\( (0, 4) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: '(x - 2)^2 = 0 \\Rightarrow x - 2 = 0 \\Rightarrow x = 2',
                    explanation: 'This is a double (repeated) root because the factor is squared.'
                },
                {
                    stepNumber: 6,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: '(x + 1)^2 = 0 \\Rightarrow x + 1 = 0 \\Rightarrow x = -1',
                    explanation: 'This is also a double (repeated) root because the factor is squared.'
                },
                {
                    stepNumber: 7,
                    description: 'Determine behaviour at each root.',
                    workingLatex: 'x = 2: \\text{ double root } \\Rightarrow \\text{touches}; \\quad x = -1: \\text{ double root } \\Rightarrow \\text{touches}',
                    explanation: 'A double root means the curve touches the \\( x \\)-axis and bounces back without crossing. A single root would cross the axis instead.'
                },
                {
                    stepNumber: 8,
                    description: 'Note the curve is non-negative.',
                    workingLatex: 'y = (x-2)^2(x+1)^2 = \\bigl[(x-2)(x+1)\\bigr]^2 \\geq 0 \\text{ for all } x',
                    explanation: 'Since \\( y \\) is the square of a real expression, the entire curve sits on or above the \\( x \\)-axis. It only equals zero at the roots.'
                },
                {
                    stepNumber: 9,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Enters top-left, touches } x = -1, \\text{ rises to } (0,4), \\text{ touches } x = 2, \\text{ rises top-right}',
                    explanation: 'The u-shape overall with two touch points creates a W-like profile. The curve never goes below the \\( x \\)-axis.',
                    diagram: {
                        xMin: -2.5, xMax: 3.5, yMin: -2, yMax: 30,
                        xTicks: [-2, -1, 1, 2, 3],
                        yTicks: [5, 10, 15, 20, 25, 30],
                        curves: [{
                            points: sample(x => (x - 2) * (x - 2) * (x + 1) * (x + 1), -2.2, 3.2, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [-1, 0], label: '(-1, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [2, 0], label: '(2, 0)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [0, 4], label: '(0, 4)', labelAnchor: 'e', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Quartic touching \\(x\\)-axis at \\(x = -1\\) and \\(x = 2\\); \\(y\\)-intercept at \\((0, 4)\\); curve lies above \\(x\\)-axis.'
        }
    },

    {
        id: 'cg5-019',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 19',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = (x^2 - 9)(x^2 - 4) \\):\n\na) Expand the expression.\nb) Hence sketch the graph, showing where it meets the axes.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise first factor as difference of squares.',
                    workingLatex: 'x^2 - 9 = x^2 - 3^2 = (x - 3)(x + 3)',
                    explanation: 'Use the identity \\( a^2 - b^2 = (a-b)(a+b) \\) with \\( a = x \\) and \\( b = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise second factor as difference of squares.',
                    workingLatex: 'x^2 - 4 = x^2 - 2^2 = (x - 2)(x + 2)',
                    explanation: 'Same identity with \\( b = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part a: expand the product of the two quadratics.',
                    workingLatex: '(x^2 - 9)(x^2 - 4) = x^4 - 4x^2 - 9x^2 + 36',
                    explanation: 'Multiply each term in the first bracket by each term in the second.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect like terms.',
                    workingLatex: 'x^4 - 4x^2 - 9x^2 + 36 = x^4 - 13x^2 + 36',
                    explanation: 'Combine the \\( x^2 \\) terms: \\( -4 - 9 = -13 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Identify the leading term and overall shape.',
                    workingLatex: '\\text{Leading term } x^4 \\text{ (positive)}: \\text{ u-shape overall}',
                    explanation: 'Even degree with positive leading coefficient means the curve rises on both ends.'
                },
                {
                    stepNumber: 6,
                    description: 'Find \\(x\\)-intercepts from the first factor.',
                    workingLatex: 'x - 3 = 0 \\Rightarrow x = 3; \\quad x + 3 = 0 \\Rightarrow x = -3',
                    explanation: 'Set each linear factor from \\( x^2 - 9 \\) equal to zero.'
                },
                {
                    stepNumber: 7,
                    description: 'Find \\(x\\)-intercepts from the second factor.',
                    workingLatex: 'x - 2 = 0 \\Rightarrow x = 2; \\quad x + 2 = 0 \\Rightarrow x = -2',
                    explanation: 'Set each linear factor from \\( x^2 - 4 \\) equal to zero. All four roots are distinct single roots, so the curve crosses the axis at each.'
                },
                {
                    stepNumber: 8,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = (0 - 9)(0 - 4) = (-9)(-4) = 36',
                    explanation: 'Substituting into the original factored form is easiest. The curve meets the \\( y \\)-axis at \\( (0, 36) \\).'
                },
                {
                    stepNumber: 9,
                    description: 'Note the symmetry of the graph.',
                    workingLatex: '\\text{Roots at } \\pm 2 \\text{ and } \\pm 3 \\Rightarrow \\text{symmetric about the } y\\text{-axis}',
                    explanation: 'Since the function contains only even powers of \\(x\\), \\(f(-x) = f(x)\\), confirming \\(y\\)-axis symmetry.'
                },
                {
                    stepNumber: 10,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Crosses at } x = -3, -2, 2, 3; \\; y\\text{-intercept } (0, 36); \\text{ u-shape}',
                    explanation: 'The curve enters from top-left, crosses at \\( -3 \\), dips below, crosses at \\( -2 \\), rises to \\( (0, 36) \\), then mirrors on the right side.',
                    diagram: {
                        xMin: -4, xMax: 4, yMin: -10, yMax: 40,
                        xTicks: [-3, -2, -1, 1, 2, 3],
                        yTicks: [-10, 10, 20, 30, 40],
                        curves: [{
                            points: sample(x => (x * x - 9) * (x * x - 4), -3.6, 3.6, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [-3, 0], label: '(-3, 0)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [2, 0], label: '(2, 0)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [3, 0], label: '(3, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [0, 36], label: '(0, 36)', labelAnchor: 'e', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = \\pm 2, \\pm 3\\); \\(y\\)-intercept at \\((0, 36)\\); u-shape overall; symmetric about the \\(y\\)-axis.'
        }
    },

    {
        id: 'cg5-020',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 20',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = 3x(x - 2)^2(x + 1) \\), showing all intercepts and the nature of each.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the highest-power terms together.',
                    workingLatex: '3x \\cdot x^2 \\cdot x = 3x^4',
                    explanation: 'To find the overall shape, multiply the leading term from each bracket. This gives the term that dominates for large values of \\(x\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the overall shape.',
                    workingLatex: '3x^4: \\quad \\text{even degree, positive coefficient} \\implies \\text{u-shape}',
                    explanation: 'An even degree means both ends of the graph go in the same direction. A positive coefficient means both ends point upward, giving a u-shape.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = 3(0)(0 - 2)^2(0 + 1) = 0',
                    explanation: 'Substituting \\(x = 0\\) into every bracket gives \\(y = 0\\), so the curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: '3x = 0 \\implies x = 0',
                    explanation: 'This is a single (odd multiplicity) root, so the curve crosses the \\(x\\)-axis here.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'This is a double (even multiplicity) root, so the curve touches the \\(x\\)-axis at \\(x = 2\\) but does not cross it. A common mistake is forgetting that repeated roots cause the curve to bounce off the axis.'
                },
                {
                    stepNumber: 6,
                    description: 'Set the third factor equal to zero.',
                    workingLatex: 'x + 1 = 0 \\implies x = -1',
                    explanation: 'This is a single root, so the curve crosses the \\(x\\)-axis at \\(x = -1\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Describe the sketch from left to right.',
                    workingLatex: '\\text{Rises from top-left, crosses at } x = -1, \\text{ crosses at } x = 0, \\text{ touches at } x = 2, \\text{ rises to top-right}',
                    explanation: 'Starting from the far left, the u-shape means the curve comes from the top-left. It crosses the axis at \\(x = -1\\), crosses again at the origin, bounces off the axis at \\(x = 2\\), then rises to the top-right.',
                    diagram: {
                        xMin: -2, xMax: 3, yMin: -15, yMax: 30,
                        xTicks: [-1, 1, 2, 3],
                        yTicks: [-10, 10, 20, 30],
                        curves: [{
                            points: sample(x => 3 * x * (x - 2) * (x - 2) * (x + 1), -1.6, 2.8, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [-1, 0], label: '(-1, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [0, 0], label: '(0, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [2, 0], label: '(2, 0)', labelAnchor: 'nw', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = -1, 0\\), touching at \\(x = 2\\); \\(y\\)-intercept at origin; u-shape.'
        }
    },

    {
        id: 'cg5-021',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 21',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -x^2(x - 4)^2 \\), showing all intercepts and the nature of each root.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the highest-power terms together.',
                    workingLatex: '-x^2 \\cdot x^2 = -x^4',
                    explanation: 'Take the leading term from each factor and multiply. The negative sign in front of \\(x^2\\) carries through.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the overall shape.',
                    workingLatex: '-x^4: \\quad \\text{even degree, negative coefficient} \\implies \\text{n-shape}',
                    explanation: 'An even degree means both ends go in the same direction. A negative coefficient means both ends point downward, giving an n-shape (inverted u).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = -(0)^2(0 - 4)^2 = 0',
                    explanation: 'Since \\(x^2\\) is a factor, the product is zero when \\(x = 0\\). The curve passes through the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: 'x^2 = 0 \\implies x = 0 \\quad (\\text{double root})',
                    explanation: 'The factor \\(x\\) appears squared, so \\(x = 0\\) is a double root. The curve touches the \\(x\\)-axis here but does not cross it.'
                },
                {
                    stepNumber: 5,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: '(x - 4)^2 = 0 \\implies x = 4 \\quad (\\text{double root})',
                    explanation: 'The factor \\((x - 4)\\) also appears squared, so \\(x = 4\\) is a double root. The curve touches the \\(x\\)-axis here too.'
                },
                {
                    stepNumber: 6,
                    description: 'Rewrite to show the curve is non-positive.',
                    workingLatex: 'y = -x^2(x-4)^2 = -[x(x-4)]^2 \\leq 0',
                    explanation: 'Since \\(y\\) is the negative of a square, it is always less than or equal to zero. The curve lies entirely on or below the \\(x\\)-axis.'
                },
                {
                    stepNumber: 7,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Falls from bottom-left, touches } x = 0, \\text{ dips below, touches } x = 4, \\text{ falls to bottom-right}',
                    explanation: 'The n-shape means the curve comes from the bottom on both sides. It touches the axis at \\(x = 0\\), dips below to a minimum between 0 and 4, touches again at \\(x = 4\\), then falls away to the bottom-right.',
                    diagram: {
                        xMin: -1.5, xMax: 5.5, yMin: -20, yMax: 5,
                        xTicks: [-1, 1, 2, 3, 4, 5],
                        yTicks: [-20, -15, -10, -5],
                        curves: [{
                            points: sample(x => -x * x * (x - 4) * (x - 4), -1, 5, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [0, 0], label: '(0, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [4, 0], label: '(4, 0)', labelAnchor: 'nw', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Quartic touching \\(x\\)-axis at \\(x = 0\\) and \\(x = 4\\); curve lies on or below \\(x\\)-axis; n-shape.'
        }
    },

    {
        id: 'cg5-022',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 22',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = x^4 - 5x^2 + 4 \\):\n\na) Factorise the expression completely.\nb) Hence sketch the graph, showing where it meets the axes.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: substitute \\(u = x^2\\).',
                    workingLatex: 'x^4 - 5x^2 + 4 = u^2 - 5u + 4',
                    explanation: 'Since every power of \\(x\\) is even, we can substitute \\(u = x^2\\) to turn this quartic into a quadratic in \\(u\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic in u.',
                    workingLatex: 'u^2 - 5u + 4 = (u - 1)(u - 4)',
                    explanation: 'We need two numbers that multiply to 4 and add to -5. These are -1 and -4.'
                },
                {
                    stepNumber: 3,
                    description: 'Replace \\(u\\) with \\(x^2\\).',
                    workingLatex: '(u - 1)(u - 4) = (x^2 - 1)(x^2 - 4)',
                    explanation: 'Substitute back \\(u = x^2\\) into each factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise \\(x^2 - 1\\) as difference of two squares.',
                    workingLatex: 'x^2 - 1 = (x - 1)(x + 1)',
                    explanation: 'Using \\(a^2 - b^2 = (a - b)(a + b)\\) with \\(a = x\\) and \\(b = 1\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\(x^2 - 4\\) as difference of two squares.',
                    workingLatex: 'x^2 - 4 = (x - 2)(x + 2)',
                    explanation: 'Using \\(a^2 - b^2 = (a - b)(a + b)\\) with \\(a = x\\) and \\(b = 2\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Write the complete factorisation.',
                    workingLatex: 'x^4 - 5x^2 + 4 = (x - 1)(x + 1)(x - 2)(x + 2)',
                    explanation: 'This is the answer to part a). All four roots are single roots.'
                },
                {
                    stepNumber: 7,
                    description: 'Part b: find the \\(x\\)-intercepts.',
                    workingLatex: 'x = -2,\\; -1,\\; 1,\\; 2',
                    explanation: 'Setting each factor to zero gives four distinct roots. All are single roots so the curve crosses the axis at each one. The roots are symmetric about the \\(y\\)-axis.'
                },
                {
                    stepNumber: 8,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = 0 - 0 + 4 = 4',
                    explanation: 'Substitute \\(x = 0\\) into the original expression. The \\(y\\)-intercept is at \\((0, 4)\\).'
                },
                {
                    stepNumber: 9,
                    description: 'Determine the overall shape.',
                    workingLatex: '\\text{Leading term } x^4: \\text{ even degree, positive coefficient} \\implies \\text{u-shape}',
                    explanation: 'Even degree with positive leading coefficient means both ends point upward, giving a u-shape.'
                },
                {
                    stepNumber: 10,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Crosses at } x = -2, -1, 1, 2; \\quad y\\text{-intercept } (0, 4); \\quad \\text{u-shape, symmetric about } y\\text{-axis}',
                    explanation: 'The curve rises from the top-left, crosses at \\(x = -2\\), dips below the axis, crosses at \\(x = -1\\), rises to \\((0, 4)\\), then mirrors on the right side.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -3, yMax: 10,
                        xTicks: [-2, -1, 1, 2],
                        yTicks: [-2, 2, 4, 6, 8, 10],
                        curves: [{
                            points: sample(x => x * x * x * x - 5 * x * x + 4, -2.5, 2.5, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1, 0], label: '(-1, 0)', labelAnchor: 'n', color: '#d4775c' },
                            { at: [1, 0], label: '(1, 0)', labelAnchor: 'n', color: '#d4775c' },
                            { at: [2, 0], label: '(2, 0)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [0, 4], label: '(0, 4)', labelAnchor: 'e', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'a) \\((x-1)(x+1)(x-2)(x+2)\\). b) Quartic crossing at \\(x = \\pm 1, \\pm 2\\); \\(y\\)-intercept \\((0, 4)\\); u-shape.'
        }
    },

    // ── Type E: Reciprocal functions (Q23–Q29) ────────────────────────────────

    {
        id: 'cg5-023',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 23',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = \\dfrac{4}{x} \\), stating the equations of the asymptotes and the coordinates of the points where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of x.',
                    workingLatex: 'y = \\frac{4}{x} = 4x^{-1}',
                    explanation: 'Writing it as \\(4x^{-1}\\) makes the power and coefficient clear: the power is -1 (odd) and the coefficient is 4 (positive).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the quadrants from the sign rules.',
                    workingLatex: '\\text{Odd power, positive } k \\implies \\text{top-right and bottom-left quadrants}',
                    explanation: 'For an odd negative power with a positive coefficient, \\(y\\) is positive when \\(x\\) is positive and negative when \\(x\\) is negative. This places the two branches in the top-right and bottom-left quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'State the vertical asymptote.',
                    workingLatex: 'x = 0',
                    explanation: 'The function is undefined when \\(x = 0\\) because we cannot divide by zero. The curve approaches the \\(y\\)-axis but never touches it.'
                },
                {
                    stepNumber: 4,
                    description: 'State the horizontal asymptote.',
                    workingLatex: 'y = 0',
                    explanation: 'As \\(x\\) becomes very large (positive or negative), \\(4/x\\) approaches 0. The curve approaches the \\(x\\)-axis but never touches it.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the point where \\(x = 1\\).',
                    workingLatex: 'y = \\frac{4}{1} = 4 \\implies (1,\\, 4)',
                    explanation: 'Substitute \\(x = 1\\) into the equation. This point lies on the top-right branch of the curve.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the point where \\(x = -1\\).',
                    workingLatex: 'y = \\frac{4}{-1} = -4 \\implies (-1,\\, -4)',
                    explanation: 'Substitute \\(x = -1\\). This point lies on the bottom-left branch of the curve. The graph has rotational symmetry about the origin.',
                    diagram: {
                        xMin: -8, xMax: 8, yMin: -8, yMax: 8,
                        xTicks: [-6, -4, -2, 2, 4, 6],
                        yTicks: [-6, -4, -2, 2, 4, 6],
                        curves: [
                            { points: sample(x => 4 / x, 0.3, 8, 40), color: '#0d9488', width: 2 },
                            { points: sample(x => 4 / x, -8, -0.3, 40), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [1, 4], label: '(1, 4)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1, -4], label: '(-1, -4)', labelAnchor: 'nw', color: '#d4775c' }
                        ],
                        lines: [
                            { from: [0, -8], to: [0, 8], color: '#94a3b8', dashed: true },
                            { from: [-8, 0], to: [8, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0\\), \\(y = 0\\); passes through \\((1, 4)\\) and \\((-1, -4)\\); two branches in top-right and bottom-left quadrants.'
        }
    },

    {
        id: 'cg5-024',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 24',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -\\dfrac{5}{x} \\), stating the asymptotes and the coordinates where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of x.',
                    workingLatex: 'y = -\\frac{5}{x} = -5x^{-1}',
                    explanation: 'Writing it as \\(-5x^{-1}\\) shows the power is -1 (odd) and the coefficient is -5 (negative).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the quadrants from the sign rules.',
                    workingLatex: '\\text{Odd power, negative } k \\implies \\text{top-left and bottom-right quadrants}',
                    explanation: 'For an odd negative power with a negative coefficient, \\(y\\) is negative when \\(x\\) is positive and positive when \\(x\\) is negative. This flips the standard reciprocal orientation.'
                },
                {
                    stepNumber: 3,
                    description: 'State the vertical asymptote.',
                    workingLatex: 'x = 0',
                    explanation: 'The function is undefined at \\(x = 0\\). The curve approaches the \\(y\\)-axis but never touches it.'
                },
                {
                    stepNumber: 4,
                    description: 'State the horizontal asymptote.',
                    workingLatex: 'y = 0',
                    explanation: 'As \\(x\\) becomes very large, \\(-5/x\\) approaches 0. The curve approaches the \\(x\\)-axis but never reaches it.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the point where \\(x = 1\\).',
                    workingLatex: 'y = -\\frac{5}{1} = -5 \\implies (1,\\, -5)',
                    explanation: 'Substitute \\(x = 1\\). This point lies in the bottom-right quadrant, confirming the branch orientation.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the point where \\(x = -1\\).',
                    workingLatex: 'y = -\\frac{5}{-1} = 5 \\implies (-1,\\, 5)',
                    explanation: 'Substitute \\(x = -1\\). The two negatives cancel to give positive 5. This point lies in the top-left quadrant. A common mistake is forgetting to handle the double negative.',
                    diagram: {
                        xMin: -10, xMax: 10, yMin: -10, yMax: 10,
                        xTicks: [-8, -6, -4, -2, 2, 4, 6, 8],
                        yTicks: [-8, -6, -4, -2, 2, 4, 6, 8],
                        curves: [
                            { points: sample(x => -5 / x, 0.3, 10, 40), color: '#0d9488', width: 2 },
                            { points: sample(x => -5 / x, -10, -0.3, 40), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [1, -5], label: '(1, -5)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1, 5], label: '(-1, 5)', labelAnchor: 'nw', color: '#d4775c' }
                        ],
                        lines: [
                            { from: [0, -10], to: [0, 10], color: '#94a3b8', dashed: true },
                            { from: [-10, 0], to: [10, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0\\), \\(y = 0\\); passes through \\((1, -5)\\) and \\((-1, 5)\\); branches in top-left and bottom-right.'
        }
    },

    {
        id: 'cg5-025',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 25',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = \\dfrac{3}{x^2} \\), stating the asymptotes and the points where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of x.',
                    workingLatex: 'y = \\frac{3}{x^2} = 3x^{-2}',
                    explanation: 'Writing it as \\(3x^{-2}\\) shows the power is -2 (even) and the coefficient is 3 (positive).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine which side of the \\(x\\)-axis the branches lie on.',
                    workingLatex: '\\text{Even power, positive } k \\implies \\text{both branches above the } x\\text{-axis}',
                    explanation: 'An even power means \\(x^2\\) is always positive, so \\(3/x^2\\) is always positive. Both branches sit above the \\(x\\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'State the vertical asymptote.',
                    workingLatex: 'x = 0',
                    explanation: 'The function is undefined at \\(x = 0\\) because we cannot divide by zero. The curve shoots upward as \\(x\\) approaches 0 from either side.'
                },
                {
                    stepNumber: 4,
                    description: 'State the horizontal asymptote.',
                    workingLatex: 'y = 0',
                    explanation: 'As \\(x\\) becomes very large, \\(3/x^2\\) approaches 0. The curve gets closer and closer to the \\(x\\)-axis but never reaches it.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the point where \\(x = 1\\).',
                    workingLatex: 'y = \\frac{3}{1^2} = 3 \\implies (1,\\, 3)',
                    explanation: 'Substitute \\(x = 1\\) into the equation.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the point where \\(x = -1\\).',
                    workingLatex: 'y = \\frac{3}{(-1)^2} = \\frac{3}{1} = 3 \\implies (-1,\\, 3)',
                    explanation: 'Since the power is even, \\((-1)^2 = 1\\), giving the same \\(y\\)-value as \\(x = 1\\). This confirms the graph is symmetric about the \\(y\\)-axis.'
                },
                {
                    stepNumber: 7,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Two branches, both above } x\\text{-axis, symmetric about } y\\text{-axis, side by side}',
                    explanation: 'Both branches look like the top halves of a hyperbola, sitting above the \\(x\\)-axis and either side of the \\(y\\)-axis. They approach both asymptotes but never touch them.',
                    diagram: {
                        xMin: -6, xMax: 6, yMin: -1, yMax: 12,
                        xTicks: [-4, -2, 2, 4],
                        yTicks: [2, 4, 6, 8, 10, 12],
                        curves: [
                            { points: sample(x => 3 / (x * x), 0.3, 6, 40), color: '#0d9488', width: 2 },
                            { points: sample(x => 3 / (x * x), -6, -0.3, 40), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [1, 3], label: '(1, 3)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1, 3], label: '(-1, 3)', labelAnchor: 'nw', color: '#d4775c' }
                        ],
                        lines: [
                            { from: [0, -1], to: [0, 12], color: '#94a3b8', dashed: true },
                            { from: [-6, 0], to: [6, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0\\), \\(y = 0\\); passes through \\((\\pm 1, 3)\\); both branches above \\(x\\)-axis; symmetric about \\(y\\)-axis.'
        }
    },

    {
        id: 'cg5-026',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 26',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = -\\dfrac{2}{x^4} \\), stating the asymptotes and the points where \\( x = 1 \\) and \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of x.',
                    workingLatex: 'y = -\\frac{2}{x^4} = -2x^{-4}',
                    explanation: 'Writing it as \\(-2x^{-4}\\) shows the power is -4 (even) and the coefficient is -2 (negative).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine which side of the \\(x\\)-axis the branches lie on.',
                    workingLatex: '\\text{Even power, negative } k \\implies \\text{both branches below the } x\\text{-axis}',
                    explanation: 'An even power means \\(x^4\\) is always positive, so \\(-2/x^4\\) is always negative. Both branches sit below the \\(x\\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'State the vertical asymptote.',
                    workingLatex: 'x = 0',
                    explanation: 'The function is undefined at \\(x = 0\\). The curve shoots downward as \\(x\\) approaches 0 from either side.'
                },
                {
                    stepNumber: 4,
                    description: 'State the horizontal asymptote.',
                    workingLatex: 'y = 0',
                    explanation: 'As \\(x\\) becomes very large, \\(-2/x^4\\) approaches 0 from below. The curve gets closer to the \\(x\\)-axis but stays below it.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the point where \\(x = 1\\).',
                    workingLatex: 'y = -\\frac{2}{1^4} = -2 \\implies (1,\\, -2)',
                    explanation: 'Substitute \\(x = 1\\) into the equation.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the point where \\(x = -1\\).',
                    workingLatex: 'y = -\\frac{2}{(-1)^4} = -\\frac{2}{1} = -2 \\implies (-1,\\, -2)',
                    explanation: 'Since the power is even, \\((-1)^4 = 1\\), giving the same \\(y\\)-value as \\(x = 1\\). The graph is symmetric about the \\(y\\)-axis.'
                },
                {
                    stepNumber: 7,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Two branches, both below } x\\text{-axis, symmetric about } y\\text{-axis, side by side}',
                    explanation: 'The entire graph lies below the \\(x\\)-axis. The two branches are mirror images of each other in the \\(y\\)-axis, approaching both asymptotes but never touching them.',
                    diagram: {
                        xMin: -5, xMax: 5, yMin: -10, yMax: 1,
                        xTicks: [-4, -3, -2, -1, 1, 2, 3, 4],
                        yTicks: [-8, -6, -4, -2],
                        curves: [
                            { points: sample(x => -2 / (x * x * x * x), 0.4, 5, 40), color: '#0d9488', width: 2 },
                            { points: sample(x => -2 / (x * x * x * x), -5, -0.4, 40), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [1, -2], label: '(1, -2)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1, -2], label: '(-1, -2)', labelAnchor: 'nw', color: '#d4775c' }
                        ],
                        lines: [
                            { from: [0, -10], to: [0, 1], color: '#94a3b8', dashed: true },
                            { from: [-5, 0], to: [5, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Asymptotes \\(x = 0\\), \\(y = 0\\); passes through \\((\\pm 1, -2)\\); both branches below \\(x\\)-axis.'
        }
    },

    {
        id: 'cg5-027',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 27',
        difficulty: 'Foundation',
        questionText: 'Sketch the graphs of \\( y = \\dfrac{6}{x} \\) and \\( y = \\dfrac{6}{x^2} \\) on the same axes, for \\( x > 0 \\). State one key difference between the two graphs in the first quadrant.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find points on \\(y = 6/x\\) for \\(x > 0\\).',
                    workingLatex: 'x = 1: \\; y = \\frac{6}{1} = 6; \\quad x = 2: \\; y = \\frac{6}{2} = 3; \\quad x = 6: \\; y = \\frac{6}{6} = 1',
                    explanation: 'Substitute three positive \\(x\\)-values to plot the first curve. This is a standard hyperbola branch in the first quadrant with asymptotes \\(x = 0\\) and \\(y = 0\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find points on \\(y = 6/x^2\\) for \\(x > 0\\).',
                    workingLatex: 'x = 1: \\; y = \\frac{6}{1} = 6; \\quad x = 2: \\; y = \\frac{6}{4} = 1.5; \\quad x = 3: \\; y = \\frac{6}{9} = \\tfrac{2}{3}',
                    explanation: 'Substitute the same \\(x\\)-values. Notice that at \\(x = 2\\), this curve gives \\(y = 1.5\\) compared to \\(y = 3\\) for the first curve.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the shared point.',
                    workingLatex: '\\text{At } x = 1: \\quad \\frac{6}{1} = 6 \\quad \\text{and} \\quad \\frac{6}{1^2} = 6',
                    explanation: 'Both curves pass through the point \\((1, 6)\\). This is because \\(1^1 = 1^2 = 1\\), so the denominator is the same for both.'
                },
                {
                    stepNumber: 4,
                    description: 'Compare the curves for x > 1.',
                    workingLatex: 'x > 1 \\implies x^2 > x \\implies \\frac{6}{x^2} < \\frac{6}{x}',
                    explanation: 'When \\(x > 1\\), squaring makes \\(x\\) larger, so dividing by \\(x^2\\) gives a smaller result. The \\(6/x^2\\) curve lies below the \\(6/x\\) curve.'
                },
                {
                    stepNumber: 5,
                    description: 'Compare the curves for 0 < x < 1.',
                    workingLatex: '0 < x < 1 \\implies x^2 < x \\implies \\frac{6}{x^2} > \\frac{6}{x}',
                    explanation: 'When \\(0 < x < 1\\), squaring makes \\(x\\) smaller, so dividing by \\(x^2\\) gives a larger result. The \\(6/x^2\\) curve lies above the \\(6/x\\) curve in this region.'
                },
                {
                    stepNumber: 6,
                    description: 'State the key difference.',
                    workingLatex: 'y = \\frac{6}{x^2} \\text{ decreases more steeply than } y = \\frac{6}{x} \\text{ for } x > 1',
                    explanation: 'Both curves have the same asymptotes (\\(x = 0\\) and \\(y = 0\\)), but the \\(1/x^2\\) curve approaches zero much faster as \\(x\\) increases. This is the main visual difference to show on your sketch.',
                    diagram: {
                        xMin: -0.5, xMax: 8, yMin: -1, yMax: 14,
                        xTicks: [1, 2, 3, 4, 5, 6, 7],
                        yTicks: [2, 4, 6, 8, 10, 12],
                        curves: [
                            { points: sample(x => 6 / x, 0.3, 8, 40), color: '#0d9488', width: 2, label: 'y = 6/x', labelAt: [5, 1.2] },
                            { points: sample(x => 6 / (x * x), 0.5, 8, 40), color: '#d4775c', width: 2, label: 'y = 6/x\u00B2', labelAt: [3.5, 0.49] }
                        ],
                        points: [
                            { at: [1, 6], label: '(1, 6)', labelAnchor: 'ne', color: '#d4775c' }
                        ],
                        lines: [
                            { from: [0, -1], to: [0, 14], color: '#94a3b8', dashed: true },
                            { from: [-0.5, 0], to: [8, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Both curves pass through \\((1, 6)\\) and have asymptotes \\(x = 0\\), \\(y = 0\\). The graph of \\(y = \\frac{6}{x^2}\\) decreases more steeply for \\(x > 1\\).'
        }
    },

    {
        id: 'cg5-028',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 28',
        difficulty: 'Foundation',
        questionText: 'Match each function below to the correct description of its graph.\n\nFunctions: \\( y = 5x^{-3} \\), \\( y = -\\dfrac{1}{x^2} \\), \\( y = \\dfrac{7}{x^4} \\), \\( y = -4x^{-5} \\)\n\nDescriptions:\n- P: both branches above the \\( x \\)-axis, side by side\n- Q: top-left and bottom-right quadrant branches\n- R: top-right and bottom-left quadrant branches\n- S: both branches below the \\( x \\)-axis, side by side',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the power and sign of \\(y = 5x^{-3}\\).',
                    workingLatex: 'y = 5x^{-3}: \\quad \\text{power } 3 \\text{ (odd)}, \\quad k = 5 > 0',
                    explanation: 'The power is 3 which is odd, and the coefficient is 5 which is positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Match \\(y = 5x^{-3}\\) to a description.',
                    workingLatex: '\\text{Odd power, positive } k \\implies \\text{top-right and bottom-left} \\implies R',
                    explanation: 'Odd power with positive coefficient means \\(y\\) is positive when \\(x\\) is positive and negative when \\(x\\) is negative. This gives branches in the top-right and bottom-left quadrants.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the power and sign of \\(y = -1/x^2\\).',
                    workingLatex: 'y = -\\frac{1}{x^2} = -x^{-2}: \\quad \\text{power } 2 \\text{ (even)}, \\quad k = -1 < 0',
                    explanation: 'The power is 2 which is even, and the coefficient is -1 which is negative.'
                },
                {
                    stepNumber: 4,
                    description: 'Match \\(y = -1/x^2\\) to a description.',
                    workingLatex: '\\text{Even power, negative } k \\implies \\text{both branches below } x\\text{-axis} \\implies S',
                    explanation: 'Even power means both branches are side by side. Negative coefficient means \\(y\\) is always negative, so both branches sit below the \\(x\\)-axis.'
                },
                {
                    stepNumber: 5,
                    description: 'Identify the power and sign of \\(y = 7/x^4\\).',
                    workingLatex: 'y = \\frac{7}{x^4} = 7x^{-4}: \\quad \\text{power } 4 \\text{ (even)}, \\quad k = 7 > 0',
                    explanation: 'The power is 4 which is even, and the coefficient is 7 which is positive.'
                },
                {
                    stepNumber: 6,
                    description: 'Match \\(y = 7/x^4\\) to a description.',
                    workingLatex: '\\text{Even power, positive } k \\implies \\text{both branches above } x\\text{-axis} \\implies P',
                    explanation: 'Even power means side-by-side branches. Positive coefficient means \\(y\\) is always positive, so both branches sit above the \\(x\\)-axis.'
                },
                {
                    stepNumber: 7,
                    description: 'Identify the power and sign of \\(y = -4x^{-5}\\).',
                    workingLatex: 'y = -4x^{-5}: \\quad \\text{power } 5 \\text{ (odd)}, \\quad k = -4 < 0',
                    explanation: 'The power is 5 which is odd, and the coefficient is -4 which is negative.'
                },
                {
                    stepNumber: 8,
                    description: 'Match \\(y = -4x^{-5}\\) to a description.',
                    workingLatex: '\\text{Odd power, negative } k \\implies \\text{top-left and bottom-right} \\implies Q',
                    explanation: 'Odd power with negative coefficient flips the standard orientation: \\(y\\) is positive when \\(x\\) is negative and negative when \\(x\\) is positive. This gives branches in the top-left and bottom-right quadrants.',
                    diagram: {
                        xMin: -4, xMax: 4, yMin: -8, yMax: 8,
                        xTicks: [-3, -2, -1, 1, 2, 3],
                        yTicks: [-6, -4, -2, 2, 4, 6],
                        curves: [
                            { points: sample(x => 5 / (x * x * x), 0.6, 4, 80), color: '#0d9488', width: 2, label: '5x\u207B\u00B3 (R)' },
                            { points: sample(x => 5 / (x * x * x), -4, -0.6, 80), color: '#0d9488', width: 2 },
                            { points: sample(x => -1 / (x * x), 0.25, 4, 80), color: '#6366f1', width: 2, label: '-1/x\u00B2 (S)' },
                            { points: sample(x => -1 / (x * x), -4, -0.25, 80), color: '#6366f1', width: 2 },
                            { points: sample(x => 7 / (x * x * x * x), 0.7, 4, 80), color: '#d4775c', width: 2, label: '7/x\u2074 (P)' },
                            { points: sample(x => 7 / (x * x * x * x), -4, -0.7, 80), color: '#d4775c', width: 2 },
                            { points: sample(x => -4 / (x * x * x * x * x), 0.6, 4, 80), color: '#a855f7', width: 2, label: '-4x\u207B\u2075 (Q)' },
                            { points: sample(x => -4 / (x * x * x * x * x), -4, -0.6, 80), color: '#a855f7', width: 2 }
                        ],
                        lines: [
                            { from: [0, -8], to: [0, 8], color: '#94a3b8', dashed: true },
                            { from: [-4, 0], to: [4, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: '\\(5x^{-3} \\to R\\), \\(-1/x^2 \\to S\\), \\(7/x^4 \\to P\\), \\(-4x^{-5} \\to Q\\).'
        }
    },

    {
        id: 'cg5-029',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 29',
        difficulty: 'Foundation',
        questionText: 'Consider the equation \\( \\dfrac{2}{x^2} = -x^2 + 3 \\).\n\na) Sketch the graphs of \\( y = \\dfrac{2}{x^2} \\) and \\( y = -x^2 + 3 \\) on the same axes.\nb) Hence state the number of real solutions.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: identify the type of \\(y = 2/x^2\\).',
                    workingLatex: 'y = 2x^{-2}: \\quad \\text{even power, positive } k',
                    explanation: 'This is a reciprocal function with even power and positive coefficient, so both branches sit above the \\(x\\)-axis, symmetric about the \\(y\\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'State the asymptotes and a key point for \\(y = 2/x^2\\).',
                    workingLatex: '\\text{Asymptotes: } x = 0, \\; y = 0; \\quad (1,\\,2) \\text{ and } (-1,\\,2)',
                    explanation: 'The curve approaches both axes but never touches them. At \\(x = 1\\) and \\(x = -1\\), \\(y = 2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the type of \\(y = -x^2 + 3\\).',
                    workingLatex: 'y = -x^2 + 3: \\quad \\text{downward parabola}',
                    explanation: 'The negative coefficient of \\(x^2\\) means this parabola opens downward (n-shape).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the vertex of the parabola.',
                    workingLatex: '\\text{Vertex at } (0,\\, 3)',
                    explanation: 'Since \\(y = -(x - 0)^2 + 3\\), the vertex is at \\((0, 3)\\). This is also the \\(y\\)-intercept.'
                },
                {
                    stepNumber: 5,
                    description: 'Find where the parabola crosses the \\(x\\)-axis.',
                    workingLatex: '-x^2 + 3 = 0 \\implies x^2 = 3 \\implies x = \\pm\\sqrt{3}',
                    explanation: 'The parabola crosses the \\(x\\)-axis at \\(x = \\sqrt{3}\\) and \\(x = -\\sqrt{3}\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Part b: set the two expressions equal.',
                    workingLatex: '\\frac{2}{x^2} = -x^2 + 3',
                    explanation: 'The number of solutions to this equation equals the number of intersection points visible on the sketch.'
                },
                {
                    stepNumber: 7,
                    description: 'Multiply both sides by \\(x^2\\).',
                    workingLatex: '2 = (-x^2 + 3) \\cdot x^2 = -x^4 + 3x^2',
                    explanation: 'Since \\(x\\) cannot be 0 (the reciprocal function is undefined there), we can multiply both sides by \\(x^2\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^4 - 3x^2 + 2 = 0',
                    explanation: 'Move all terms to one side to get a quartic equation.'
                },
                {
                    stepNumber: 9,
                    description: 'Factorise as a quadratic in \\(x^2\\).',
                    workingLatex: '(x^2 - 1)(x^2 - 2) = 0',
                    explanation: 'We need two numbers that multiply to 2 and add to \\(-3\\). These are \\(-1\\) and \\(-2\\).'
                },
                {
                    stepNumber: 10,
                    description: 'Solve each factor.',
                    workingLatex: 'x^2 = 1 \\implies x = \\pm 1; \\quad x^2 = 2 \\implies x = \\pm\\sqrt{2}',
                    explanation: 'Both factors give positive values for \\(x^2\\), so each produces two real solutions. There are 4 real solutions in total.',
                    diagram: {
                        xMin: -4, xMax: 4, yMin: -6, yMax: 10,
                        xTicks: [-3, -2, -1, 1, 2, 3],
                        yTicks: [-4, -2, 2, 4, 6, 8],
                        curves: [
                            { points: sample(x => 2 / (x * x), 0.3, 4, 35), color: '#0d9488', width: 2, label: 'y = 2/x\u00B2', labelAt: [1.8, 0.62] },
                            { points: sample(x => 2 / (x * x), -4, -0.3, 35), color: '#0d9488', width: 2 },
                            { points: sample(x => -x * x + 3, -3.5, 3.5, 40), color: '#d4775c', width: 2, label: 'y = -x\u00B2 + 3', labelAt: [-2.8, -4.84] }
                        ],
                        points: [
                            { at: [1, 2], label: '(1, 2)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1, 2], label: '(-1, 2)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [1.414, 1], label: '(\u221A2, 1)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [-1.414, 1], label: '(-\u221A2, 1)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [0, 3], label: '(0, 3)', labelAnchor: 'e', color: '#d4775c' }
                        ],
                        lines: [
                            { from: [0, -6], to: [0, 10], color: '#94a3b8', dashed: true },
                            { from: [-4, 0], to: [4, 0], color: '#94a3b8', dashed: true }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'The equation has 4 real solutions.'
        }
    },

    // ── Type F: Mixed and multi-part exam-style (Q30–Q35) ────────────────────

    {
        id: 'cg5-030',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 30',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = (4 - x)(x + 1)^2 \\), showing all intercepts and describing the behaviour at each root.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the highest-power terms together.',
                    workingLatex: '(4 - x)(x + 1)^2: \\quad (-x) \\cdot x^2 = -x^3',
                    explanation: 'From the first bracket the leading term is \\(-x\\), and from the squared bracket the leading term is \\(x^2\\). Multiplying gives \\(-x^3\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the overall shape.',
                    workingLatex: '-x^3: \\quad \\text{odd degree, negative coefficient} \\implies \\text{top-left to bottom-right}',
                    explanation: 'Odd degree with a negative leading coefficient means the curve rises to the left and falls to the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = (4 - 0)(0 + 1)^2 = 4 \\times 1 = 4',
                    explanation: 'Substitute \\(x = 0\\) into each bracket. The \\(y\\)-intercept is at \\((0, 4)\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: '4 - x = 0 \\implies x = 4',
                    explanation: 'This is a single root, so the curve crosses the \\(x\\)-axis at \\(x = 4\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: '(x + 1)^2 = 0 \\implies x = -1',
                    explanation: 'This is a double root because the factor is squared. The curve touches the \\(x\\)-axis at \\(x = -1\\) but does not cross it.'
                },
                {
                    stepNumber: 6,
                    description: 'Describe the sketch from left to right.',
                    workingLatex: '\\text{Enters top-left, touches } x = -1, \\text{ rises to } (0,\\,4), \\text{ crosses } x = 4, \\text{ falls bottom-right}',
                    explanation: 'The curve comes from the top-left, bounces off the axis at \\(x = -1\\), passes through the \\(y\\)-intercept \\((0, 4)\\), then crosses the axis at \\(x = 4\\) and falls to the bottom-right.',
                    diagram: {
                        xMin: -3, xMax: 5.5, yMin: -15, yMax: 22,
                        xTicks: [-2, -1, 1, 2, 3, 4, 5],
                        yTicks: [-10, -5, 5, 10, 15, 20],
                        curves: [{
                            points: sample(x => (4 - x) * (x + 1) * (x + 1), -2.5, 5.2, 50),
                            color: '#0d9488', width: 2
                        }],
                        points: [
                            { at: [-1, 0], label: '(-1, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [4, 0], label: '(4, 0)', labelAnchor: 'nw', color: '#d4775c' },
                            { at: [0, 4], label: '(0, 4)', labelAnchor: 'e', color: '#d4775c' }
                        ]
                    } as CurveDiagramConfig
                }
            ],
            finalAnswer: 'Cubic touching at \\(x = -1\\), crossing at \\(x = 4\\); \\(y\\)-intercept at \\((0, 4)\\); top-left to bottom-right shape.'
        }
    },

    {
        id: 'cg5-031',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 31',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = x^4 - 16 \\), showing where it meets the coordinate axes.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the leading term.',
                    workingLatex: '\\text{Leading term: } x^4',
                    explanation: 'The highest-power term is \\(x^4\\) with a positive coefficient of 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the overall shape.',
                    workingLatex: 'x^4: \\quad \\text{even degree, positive coefficient} \\implies \\text{u-shape}',
                    explanation: 'Even degree with positive leading coefficient means both ends point upward, giving a u-shape.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y = 0^4 - 16 = -16',
                    explanation: 'The \\(y\\)-intercept is at \\((0, -16)\\). This tells us the curve dips below the \\(x\\)-axis.'
                },
                {
                    stepNumber: 4,
                    description: 'Set \\(y = 0\\) to find \\(x\\)-intercepts.',
                    workingLatex: 'x^4 - 16 = 0',
                    explanation: 'We need to factorise this to find where the curve crosses the \\(x\\)-axis.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise as a difference of two squares.',
                    workingLatex: 'x^4 - 16 = (x^2)^2 - 4^2 = (x^2 - 4)(x^2 + 4)',
                    explanation: 'Treat \\(x^4\\) as \\((x^2)^2\\) and 16 as \\(4^2\\), then apply \\(a^2 - b^2 = (a - b)(a + b)\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Factorise \\(x^2 - 4\\) further.',
                    workingLatex: 'x^2 - 4 = (x - 2)(x + 2)',
                    explanation: 'This is another difference of two squares with \\(a = x\\) and \\(b = 2\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Check \\(x^2 + 4\\) for real roots.',
                    workingLatex: 'x^2 + 4 = 0 \\implies x^2 = -4 \\quad \\text{(no real solutions)}',
                    explanation: 'Since \\(x^2\\) is always non-negative, \\(x^2 + 4\\) is always at least 4 and can never equal zero. This factor gives no real roots.'
                },
                {
                    stepNumber: 8,
                    description: 'State the \\(x\\)-intercepts.',
                    workingLatex: 'x = -2 \\quad \\text{and} \\quad x = 2',
                    explanation: 'The only real roots come from \\((x - 2)(x + 2) = 0\\). Both are single roots, so the curve crosses at each.'
                },
                {
                    stepNumber: 9,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{Crosses at } x = \\pm 2; \\quad y\\text{-intercept at } (0,\\,-16); \\quad \\text{u-shape}',
                    explanation: 'The curve enters from the top-left, crosses at \\(x = -2\\), dips down to the minimum at \\((0, -16)\\), crosses at \\(x = 2\\), and rises to the top-right. The graph is symmetric about the \\(y\\)-axis.',
                    diagram: { xMin: -3.5, xMax: 3.5, yMin: -20, yMax: 70, xTicks: [-3, -2, -1, 1, 2, 3], yTicks: [-16, 0, 20, 40, 60], curves: [{ points: sample(x => Math.pow(x, 4) - 16, -3.5, 3.5), color: "#0d9488", width: 2 }], points: [{ at: [-2, 0], label: "(-2, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 }, { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 }, { at: [0, -16], label: "(0, -16)", labelAnchor: "e", color: "#d4775c", r: 4 }] }
                }
            ],
            finalAnswer: 'Quartic crossing at \\(x = \\pm 2\\); \\(y\\)-intercept at \\((0, -16)\\); u-shape.'
        }
    },

    {
        id: 'cg5-032',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 32',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = x^3 - 4x^2 + 4x \\):\n\na) Factorise completely.\nb) Sketch the graph, showing all intercepts and describing the nature of each root.\nc) Write down the number of distinct real roots of \\( x^3 - 4x^2 + 4x = 0 \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: identify the common factor.',
                    workingLatex: 'x^3 - 4x^2 + 4x',
                    explanation: 'Each of the three terms contains a factor of \\(x\\). We must take this out first.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out \\(x\\).',
                    workingLatex: 'x^3 - 4x^2 + 4x = x(x^2 - 4x + 4)',
                    explanation: 'Dividing each term by \\(x\\) gives \\(x^2 - 4x + 4\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Recognise the perfect square trinomial.',
                    workingLatex: 'x^2 - 4x + 4 = (x)^2 - 2(x)(2) + (2)^2',
                    explanation: 'This matches the pattern \\(a^2 - 2ab + b^2\\) with \\(a = x\\) and \\(b = 2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise as a perfect square.',
                    workingLatex: 'x^2 - 4x + 4 = (x - 2)^2',
                    explanation: 'Using \\(a^2 - 2ab + b^2 = (a - b)^2\\). A common mistake is not recognising this pattern and trying other factor pairs.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the complete factorisation.',
                    workingLatex: 'x^3 - 4x^2 + 4x = x(x - 2)^2',
                    explanation: 'This is the answer to part a). The factor \\(x\\) appears once and the factor \\((x - 2)\\) appears twice.'
                },
                {
                    stepNumber: 6,
                    description: 'Part b: identify the leading term.',
                    workingLatex: '\\text{Leading term: } x^3 \\quad (\\text{positive coefficient})',
                    explanation: 'Odd degree with positive leading coefficient gives a bottom-left to top-right shape.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the \\(y\\)-intercept.',
                    workingLatex: 'y = 0 \\cdot (0 - 2)^2 = 0',
                    explanation: 'Since \\(x\\) is a factor, \\(y = 0\\) when \\(x = 0\\). The curve passes through the origin.'
                },
                {
                    stepNumber: 8,
                    description: 'Set the first factor equal to zero.',
                    workingLatex: 'x = 0 \\quad (\\text{single root})',
                    explanation: 'This is a single root, so the curve crosses the \\(x\\)-axis at the origin.'
                },
                {
                    stepNumber: 9,
                    description: 'Set the second factor equal to zero.',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2 \\quad (\\text{double root})',
                    explanation: 'This is a double root, so the curve touches the \\(x\\)-axis at \\(x = 2\\) but does not cross it.'
                },
                {
                    stepNumber: 10,
                    description: 'Describe the sketch from left to right.',
                    workingLatex: '\\text{Enters bottom-left, crosses at } x = 0, \\text{ rises, touches at } x = 2, \\text{ rises to top-right}',
                    explanation: 'The curve enters from the bottom-left, crosses the axis at the origin, rises, bounces off the axis at \\(x = 2\\), then continues rising to the top-right.'
                },
                {
                    stepNumber: 11,
                    description: 'Part c: count distinct real roots.',
                    workingLatex: 'x = 0 \\quad \\text{and} \\quad x = 2 \\implies 2 \\text{ distinct real roots}',
                    explanation: 'Although \\(x = 2\\) is a double root (it appears twice in the factorisation), it counts as only one distinct root. So there are 2 distinct real roots in total.',
                    diagram: {
                        xMin: -1.5, xMax: 3.5, yMin: -6, yMax: 10,
                        xTicks: [-1, 0, 1, 2, 3], yTicks: [-4, -2, 0, 2, 4, 6, 8],
                        curves: [{ points: sample((x) => x * (x - 2) * (x - 2), -1.5, 3.5, 40), color: "#0d9488", width: 2 }],
                        points: [
                            { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                            { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                            { at: [0.667, 1.185], label: "(2/3, 32/27)", labelAnchor: "n", color: "#d4775c", r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: 'a) \\(x(x-2)^2\\). b) Crosses at \\(x = 0\\), touches at \\(x = 2\\). c) 2 distinct real roots.'
        }
    },

    {
        id: 'cg5-033',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 33',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = f(x) \\) is a quartic with positive leading coefficient. It crosses the \\( x \\)-axis at \\( x = -2 \\), touches the \\( x \\)-axis at \\( x = 1 \\), and crosses again at \\( x = 4 \\).\n\na) Write down a possible equation for \\( f(x) \\) in factorised form.\nb) Find the \\( y \\)-intercept of this graph.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: write the factor for the crossing root \\(x = -2\\).',
                    workingLatex: '\\text{Crosses at } x = -2 \\implies \\text{single factor } (x + 2)',
                    explanation: 'A crossing root has odd multiplicity. The simplest choice is a single (linear) factor.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the factor for the touching root \\(x = 1\\).',
                    workingLatex: '\\text{Touches at } x = 1 \\implies \\text{squared factor } (x - 1)^2',
                    explanation: 'A touching root has even multiplicity. The simplest choice is a squared factor. This is what makes the curve bounce off the axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the factor for the crossing root \\(x = 4\\).',
                    workingLatex: '\\text{Crosses at } x = 4 \\implies \\text{single factor } (x - 4)',
                    explanation: 'Another crossing root, so we use a single factor.'
                },
                {
                    stepNumber: 4,
                    description: 'Combine all factors.',
                    workingLatex: 'f(x) = (x + 2)(x - 1)^2(x - 4)',
                    explanation: 'The total degree is 1 + 2 + 1 = 4, which matches the requirement that \\(f\\) is a quartic.'
                },
                {
                    stepNumber: 5,
                    description: 'Check the leading coefficient is positive.',
                    workingLatex: 'x \\cdot x^2 \\cdot x = x^4 \\quad (\\text{coefficient } +1 > 0)',
                    explanation: 'Multiplying the leading terms gives \\(x^4\\) with a positive coefficient, confirming the requirement.'
                },
                {
                    stepNumber: 6,
                    description: 'Part b: substitute \\(x = 0\\) into the first factor.',
                    workingLatex: '(0 + 2) = 2',
                    explanation: 'Replace x with 0 in the first bracket.'
                },
                {
                    stepNumber: 7,
                    description: 'Substitute \\(x = 0\\) into the second factor.',
                    workingLatex: '(0 - 1)^2 = (-1)^2 = 1',
                    explanation: 'Replace x with 0 in the squared bracket and evaluate. Remember to square the result.'
                },
                {
                    stepNumber: 8,
                    description: 'Substitute \\(x = 0\\) into the third factor.',
                    workingLatex: '(0 - 4) = -4',
                    explanation: 'Replace x with 0 in the last bracket.'
                },
                {
                    stepNumber: 9,
                    description: 'Multiply to find the \\(y\\)-intercept.',
                    workingLatex: 'f(0) = 2 \\times 1 \\times (-4) = -8',
                    explanation: 'The \\(y\\)-intercept is at \\((0, -8)\\). Be careful with the sign: a positive times a negative gives a negative.',
                    diagram: {
                        xMin: -3, xMax: 5, yMin: -20, yMax: 30,
                        xTicks: [-2, -1, 0, 1, 2, 3, 4], yTicks: [-15, -10, -5, 0, 5, 10, 15, 20, 25],
                        curves: [{ points: sample((x) => (x + 2) * (x - 1) * (x - 1) * (x - 4), -3, 5, 50), color: "#0d9488", width: 2 }],
                        points: [
                            { at: [-2, 0], label: "(-2, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                            { at: [1, 0], label: "(1, 0)", labelAnchor: "n", color: "#d4775c", r: 4 },
                            { at: [4, 0], label: "(4, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                            { at: [0, -8], label: "(0, -8)", labelAnchor: "e", color: "#d4775c", r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: 'a) \\(f(x) = (x+2)(x-1)^2(x-4)\\). b) \\(y\\)-intercept at \\((0, -8)\\).'
        }
    },

    {
        id: 'cg5-034',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 34',
        difficulty: 'Foundation',
        questionText: 'Consider the equation \\( \\dfrac{1}{x^3} = x^3 \\).\n\na) On the same axes, sketch the graphs of \\( y = \\dfrac{1}{x^3} \\) and \\( y = x^3 \\).\nb) State the number of real solutions and find them.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: identify the shape of \\(y = x^3\\).',
                    workingLatex: 'y = x^3: \\quad \\text{odd degree, positive coefficient}',
                    explanation: 'This is a standard cubic with bottom-left to top-right shape. It passes through the origin.'
                },
                {
                    stepNumber: 2,
                    description: 'Plot key points on \\(y = x^3\\).',
                    workingLatex: '(-1,\\,-1), \\quad (0,\\,0), \\quad (1,\\,1)',
                    explanation: 'These three points help draw the standard cubic curve accurately.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the shape of \\(y = 1/x^3\\).',
                    workingLatex: 'y = \\frac{1}{x^3} = x^{-3}: \\quad \\text{odd power, positive } k',
                    explanation: 'This is a reciprocal function with odd power and positive coefficient, so the branches lie in the top-right and bottom-left quadrants.'
                },
                {
                    stepNumber: 4,
                    description: 'State the asymptotes and key points for \\(y = 1/x^3\\).',
                    workingLatex: '\\text{Asymptotes: } x = 0, \\; y = 0; \\quad (1,\\,1) \\text{ and } (-1,\\,-1)',
                    explanation: 'The curve approaches both axes but never touches them. It passes through \\((1, 1)\\) and \\((-1, -1)\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part b: note where the curves share points.',
                    workingLatex: '\\text{Both curves pass through } (1,\\,1) \\text{ and } (-1,\\,-1)',
                    explanation: 'From the sketch, we can see the two graphs intersect at these two points. Now we verify algebraically.'
                },
                {
                    stepNumber: 6,
                    description: 'Set the two expressions equal.',
                    workingLatex: '\\frac{1}{x^3} = x^3',
                    explanation: 'We need to solve this equation to find all intersection points.'
                },
                {
                    stepNumber: 7,
                    description: 'Multiply both sides by \\(x^3\\).',
                    workingLatex: '1 = x^6',
                    explanation: 'Since \\(y = 1/x^3\\) is undefined at \\(x = 0\\), we know \\(x\\) is not zero, so we can safely multiply both sides by \\(x^3\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Solve \\(x^6 = 1\\).',
                    workingLatex: 'x^6 = 1 \\implies x = \\pm 1',
                    explanation: 'The only real numbers whose sixth power equals 1 are \\(x = 1\\) and \\(x = -1\\). There are 2 real solutions.'
                },
                {
                    stepNumber: 9,
                    description: 'Find the y-values at each solution.',
                    workingLatex: 'x = 1: \\; y = 1^3 = 1; \\quad x = -1: \\; y = (-1)^3 = -1',
                    explanation: 'The intersections are at \\((1, 1)\\) and \\((-1, -1)\\), confirming what we saw from the sketch.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -8, yMax: 8,
                        xTicks: [-2, -1, 0, 1, 2], yTicks: [-6, -4, -2, 0, 2, 4, 6],
                        curves: [
                            { points: sample((x) => x * x * x, -2, 2, 40), color: "#0d9488", width: 2 },
                            { points: sample((x) => 1 / (x * x * x), 0.4, 3, 30), color: "#6366f1", width: 2 },
                            { points: sample((x) => 1 / (x * x * x), -3, -0.4, 30), color: "#6366f1", width: 2 }
                        ],
                        points: [
                            { at: [1, 1], label: "(1, 1)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                            { at: [-1, -1], label: "(-1, -1)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                            { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 }
                        ],
                        lines: [
                            { from: [0, -8], to: [0, 8], color: "#94a3b8", dashed: true },
                            { from: [-3, 0], to: [3, 0], color: "#94a3b8", dashed: true }
                        ]
                    }
                }
            ],
            finalAnswer: 'b) 2 real solutions: \\(x = 1\\) and \\(x = -1\\).'
        }
    },

    {
        id: 'cg5-035',
        topicRef: 'cg5',
        topicTitle: 'Curve Sketching 35',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = x^4 - 10x^3 + 35x^2 - 50x + 24 \\) has four positive integer roots.\n\na) By trying small positive integers, find all four roots.\nb) Write the function in fully factorised form.\nc) Sketch the graph, showing all intercepts.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: substitute \\(x = 1\\).',
                    workingLatex: '1^4 - 10(1)^3 + 35(1)^2 - 50(1) + 24 = 1 - 10 + 35 - 50 + 24',
                    explanation: 'Replace x with 1 in each term of the polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate at \\(x = 1\\).',
                    workingLatex: '1 - 10 + 35 - 50 + 24 = 0 \\quad \\checkmark',
                    explanation: 'The result is 0, so \\(x = 1\\) is a root.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(x = 2\\).',
                    workingLatex: '2^4 - 10(2)^3 + 35(2)^2 - 50(2) + 24 = 16 - 80 + 140 - 100 + 24',
                    explanation: 'Replace x with 2 in each term. Be careful to compute each power correctly: 2^4 = 16, 2^3 = 8, 2^2 = 4.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate at \\(x = 2\\).',
                    workingLatex: '16 - 80 + 140 - 100 + 24 = 0 \\quad \\checkmark',
                    explanation: 'The result is 0, so \\(x = 2\\) is a root.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\(x = 3\\).',
                    workingLatex: '3^4 - 10(3)^3 + 35(3)^2 - 50(3) + 24 = 81 - 270 + 315 - 150 + 24',
                    explanation: 'Replace x with 3 in each term: 3^4 = 81, 3^3 = 27, 3^2 = 9.'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate at \\(x = 3\\).',
                    workingLatex: '81 - 270 + 315 - 150 + 24 = 0 \\quad \\checkmark',
                    explanation: 'The result is 0, so \\(x = 3\\) is a root.'
                },
                {
                    stepNumber: 7,
                    description: 'Try the next positive integer: substitute \\(x = 4\\).',
                    workingLatex: '4^4 - 10(4)^3 + 35(4)^2 - 50(4) + 24 = 256 - 640 + 560 - 200 + 24',
                    explanation: 'We have found three roots so far. The question says there are four positive integer roots, so keep trying the next integer.'
                },
                {
                    stepNumber: 8,
                    description: 'Evaluate at \\(x = 4\\).',
                    workingLatex: '256 - 640 + 560 - 200 + 24 = 0 \\quad \\checkmark',
                    explanation: 'The result is 0, so \\(x = 4\\) is the fourth root. We now have all four positive integer roots: \\(1, 2, 3, 4\\).'
                },
                {
                    stepNumber: 9,
                    description: 'Part b: write the factorised form.',
                    workingLatex: 'y = (x - 1)(x - 2)(x - 3)(x - 4)',
                    explanation: 'Each root gives a linear factor. All four roots are single roots.'
                },
                {
                    stepNumber: 10,
                    description: 'Verify the constant term.',
                    workingLatex: '(-1)(-2)(-3)(-4) = 24 \\quad \\checkmark',
                    explanation: 'The product of the constant terms in each factor should equal the constant term of the original polynomial. Four negatives multiply to a positive: \\((-1)(-2) = 2\\), then \\(2(-3) = -6\\), then \\((-6)(-4) = 24\\).'
                },
                {
                    stepNumber: 11,
                    description: 'Part c: identify the leading term.',
                    workingLatex: '\\text{Leading term: } x^4 \\quad (\\text{positive coefficient})',
                    explanation: 'Even degree with positive leading coefficient gives a u-shape overall.'
                },
                {
                    stepNumber: 12,
                    description: 'Find the \\(y\\)-intercept by substituting \\(x = 0\\).',
                    workingLatex: 'y(0) = (0-1)(0-2)(0-3)(0-4) = (-1)(-2)(-3)(-4) = 24',
                    explanation: 'The \\(y\\)-intercept is at \\((0, 24)\\).'
                },
                {
                    stepNumber: 13,
                    description: 'State that all roots are single (crossing).',
                    workingLatex: 'x = 1, 2, 3, 4 \\quad \\text{all single roots} \\implies \\text{all cross}',
                    explanation: 'Since no factor is repeated, the curve crosses the \\(x\\)-axis at each root.'
                },
                {
                    stepNumber: 14,
                    description: 'Describe the complete sketch.',
                    workingLatex: '\\text{u-shape; crosses at } x = 1, 2, 3, 4; \\quad y\\text{-intercept at } (0,\\,24)',
                    explanation: 'The curve enters from the top-left, crosses at \\(x = 1\\), dips below, crosses at \\(x = 2\\), rises above, crosses at \\(x = 3\\), dips below, crosses at \\(x = 4\\), then rises to the top-right.',
                    diagram: {
                        xMin: -0.5, xMax: 5, yMin: -5, yMax: 30,
                        xTicks: [0, 1, 2, 3, 4, 5], yTicks: [-4, 0, 5, 10, 15, 20, 24],
                        curves: [{ points: sample((x) => (x - 1) * (x - 2) * (x - 3) * (x - 4), -0.5, 5, 50), color: "#0d9488", width: 2 }],
                        points: [
                            { at: [1, 0], label: "(1, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                            { at: [2, 0], label: "(2, 0)", labelAnchor: "n", color: "#d4775c", r: 4 },
                            { at: [3, 0], label: "(3, 0)", labelAnchor: "n", color: "#d4775c", r: 4 },
                            { at: [4, 0], label: "(4, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                            { at: [0, 24], label: "(0, 24)", labelAnchor: "e", color: "#d4775c", r: 4 }
                        ]
                    }
                }
            ],
            finalAnswer: 'a) Roots: \\(1, 2, 3, 4\\). b) \\(y = (x-1)(x-2)(x-3)(x-4)\\). c) Quartic crossing at \\(x = 1, 2, 3, 4\\); \\(y\\)-intercept at \\((0, 24)\\); u-shape.'
        }
    },

    // ─── Q36–70: Additional Curve Sketching Questions ──────────────────────

    {
        id: 'cg5-036', topicRef: 'cg5', topicTitle: 'Curve Sketching 36', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 - 4 \\), showing the intercepts with both axes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = (0)^2 - 4 = 0 - 4 = -4', explanation: 'Substitute \\(x = 0\\) into the equation to find where the curve crosses the \\(y\\)-axis. The \\(y\\)-intercept is \\((0, -4)\\).' },
            { stepNumber: 2, description: 'Set \\(y = 0\\) for \\(x\\)-intercepts', workingLatex: 'x^2 - 4 = 0', explanation: 'To find where the curve crosses the \\(x\\)-axis, set \\(y = 0\\).' },
            { stepNumber: 3, description: 'Factorise using difference of two squares', workingLatex: '(x - 2)(x + 2) = 0', explanation: 'Recognise \\(x^2 - 4\\) as \\(a^2 - b^2 = (a - b)(a + b)\\) with \\(a = x\\) and \\(b = 2\\).' },
            { stepNumber: 4, description: 'Solve each factor for \\(x\\)', workingLatex: 'x - 2 = 0 \\implies x = 2; \\quad x + 2 = 0 \\implies x = -2', explanation: 'Set each linear factor equal to zero. The \\(x\\)-intercepts are \\((-2, 0)\\) and \\((2, 0)\\).' },
            { stepNumber: 5, description: 'Determine the overall shape', workingLatex: '\\text{Coefficient of } x^2 \\text{ is } +1 > 0 \\implies \\text{U-shape}', explanation: 'A positive \\(x^2\\) coefficient means the parabola opens upward.' },
            { stepNumber: 6, description: 'Identify the vertex', workingLatex: 'y = (x - 0)^2 - 4 \\implies \\text{vertex at } (0,\\,-4)', explanation: 'The equation is already in completed-square form, so the vertex (minimum point) is at \\((0, -4)\\).',
                diagram: {
                    xMin: -4, xMax: 4, yMin: -6, yMax: 14,
                    xTicks: [-3, -2, -1, 0, 1, 2, 3], yTicks: [-4, 0, 4, 8, 12],
                    curves: [{ points: sample((x) => x * x - 4, -4, 4, 40), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [-2, 0], label: "(-2, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [0, -4], label: "(0, -4)", labelAnchor: "e", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'U-shape; roots at \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept and vertex at \\((0, -4)\\).' }
    },
    {
        id: 'cg5-037', topicRef: 'cg5', topicTitle: 'Curve Sketching 37', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-1)(x+3) \\), showing all intercepts and the vertex.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find \\(x\\)-intercepts from factors', workingLatex: 'x - 1 = 0 \\implies x = 1; \\quad x + 3 = 0 \\implies x = -3', explanation: 'Set each factor equal to zero. The \\(x\\)-intercepts are \\((1, 0)\\) and \\((-3, 0)\\).' },
            { stepNumber: 2, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = (0 - 1)(0 + 3) = (-1)(3) = -3', explanation: 'Substitute \\(x = 0\\) into the equation. The \\(y\\)-intercept is \\((0, -3)\\).' },
            { stepNumber: 3, description: 'Find \\(x\\)-coordinate of the vertex', workingLatex: 'x = \\frac{1 + (-3)}{2} = \\frac{-2}{2} = -1', explanation: 'The vertex of a quadratic lies at the midpoint of its two roots.' },
            { stepNumber: 4, description: 'Find \\(y\\)-coordinate of the vertex', workingLatex: 'y = (-1 - 1)(-1 + 3) = (-2)(2) = -4', explanation: 'Substitute \\(x = -1\\) back into the original equation. The vertex is \\((-1, -4)\\).' },
            { stepNumber: 5, description: 'Determine the overall shape', workingLatex: '\\text{Coefficient of } x^2 \\text{ is } +1 > 0 \\implies \\text{U-shape}', explanation: 'Expanding gives \\(x^2 + \\ldots\\) so the parabola opens upward.',
                diagram: {
                    xMin: -5, xMax: 3, yMin: -6, yMax: 14,
                    xTicks: [-4, -3, -2, -1, 0, 1, 2], yTicks: [-4, -2, 0, 2, 4, 6, 8, 10, 12],
                    curves: [{ points: sample((x) => (x - 1) * (x + 3), -5, 3, 40), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [1, 0], label: "(1, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [-3, 0], label: "(-3, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [-1, -4], label: "(-1, -4)", labelAnchor: "n", color: "#d4775c", r: 4 },
                        { at: [0, -3], label: "(0, -3)", labelAnchor: "e", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'U-shape; roots \\((1, 0)\\), \\((-3, 0)\\); vertex \\((-1, -4)\\); \\(y\\)-int \\((0, -3)\\).' }
    },
    {
        id: 'cg5-038', topicRef: 'cg5', topicTitle: 'Curve Sketching 38', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -x^2 + 6x - 5 \\), showing the vertex and all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor out the negative sign', workingLatex: 'y = -(x^2 - 6x + 5)', explanation: 'Factor out \\(-1\\) so we can factorise the quadratic inside the bracket.' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: 'y = -(x - 1)(x - 5)', explanation: 'We need two numbers that multiply to give 5 and add to give \\(-6\\): these are \\(-1\\) and \\(-5\\).' },
            { stepNumber: 3, description: 'Find the \\(x\\)-intercepts', workingLatex: 'x - 1 = 0 \\implies x = 1; \\quad x - 5 = 0 \\implies x = 5', explanation: 'Set each factor to zero. The roots are at \\((1, 0)\\) and \\((5, 0)\\).' },
            { stepNumber: 4, description: 'Find the \\(x\\)-coordinate of the vertex', workingLatex: 'x = \\frac{1 + 5}{2} = \\frac{6}{2} = 3', explanation: 'The vertex is at the midpoint of the two roots.' },
            { stepNumber: 5, description: 'Find the \\(y\\)-coordinate of the vertex', workingLatex: 'y = -(3)^2 + 6(3) - 5 = -9 + 18 - 5 = 4', explanation: 'Substitute \\(x = 3\\) into the original equation. The vertex is \\((3, 4)\\).' },
            { stepNumber: 6, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = -(0)^2 + 6(0) - 5 = -5', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, -5)\\).' },
            { stepNumber: 7, description: 'Determine the overall shape', workingLatex: '\\text{Coefficient of } x^2 \\text{ is } -1 < 0 \\implies \\text{n-shape}', explanation: 'A negative \\(x^2\\) coefficient means the parabola opens downward, so \\((3, 4)\\) is a maximum.',
                diagram: {
                    xMin: -1, xMax: 7, yMin: -8, yMax: 6,
                    xTicks: [0, 1, 2, 3, 4, 5, 6], yTicks: [-6, -4, -2, 0, 2, 4],
                    curves: [{ points: sample((x) => -x * x + 6 * x - 5, -1, 7, 40), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [1, 0], label: "(1, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [5, 0], label: "(5, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [3, 4], label: "(3, 4)", labelAnchor: "s", color: "#d4775c", r: 4 },
                        { at: [0, -5], label: "(0, -5)", labelAnchor: "e", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'n-shape; roots \\((1, 0)\\), \\((5, 0)\\); vertex \\((3, 4)\\); \\(y\\)-int \\((0, -5)\\).' }
    },
    {
        id: 'cg5-039', topicRef: 'cg5', topicTitle: 'Curve Sketching 39', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x} \\) for \\( x > 0 \\) and \\( x < 0 \\), showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the vertical asymptote', workingLatex: 'x = 0 \\text{ is a vertical asymptote}', explanation: 'The function is undefined when \\(x = 0\\) because we cannot divide by zero.' },
            { stepNumber: 2, description: 'Identify the horizontal asymptote', workingLatex: 'x \\to \\pm\\infty: \\quad y = \\frac{1}{x} \\to 0', explanation: 'As \\(x\\) becomes very large, \\(1/x\\) approaches zero but never reaches it. So \\(y = 0\\) is a horizontal asymptote.' },
            { stepNumber: 3, description: 'Determine behaviour for \\(x > 0\\)', workingLatex: 'x > 0: \\quad y = \\frac{1}{x} > 0 \\quad \\text{(1st quadrant)}', explanation: 'When \\(x\\) is positive, \\(y\\) is positive. As \\(x\\) increases from 0, \\(y\\) decreases towards 0.' },
            { stepNumber: 4, description: 'Determine behaviour for \\(x < 0\\)', workingLatex: 'x < 0: \\quad y = \\frac{1}{x} < 0 \\quad \\text{(3rd quadrant)}', explanation: 'When \\(x\\) is negative, \\(y\\) is negative. As \\(x\\) decreases from 0, \\(y\\) increases towards 0.' },
            { stepNumber: 5, description: 'Note key reference points', workingLatex: 'x = 1: y = 1; \\quad x = -1: y = -1', explanation: 'These points help position each branch of the hyperbola when sketching.',
                diagram: {
                    xMin: -5, xMax: 5, yMin: -5, yMax: 5,
                    xTicks: [-4, -3, -2, -1, 1, 2, 3, 4], yTicks: [-4, -3, -2, -1, 1, 2, 3, 4],
                    curves: [
                        { points: sample((x) => 1 / x, 0.15, 5, 80), color: "#0d9488", width: 2 },
                        { points: sample((x) => 1 / x, -5, -0.15, 80), color: "#0d9488", width: 2 }
                    ],
                    points: [
                        { at: [1, 1], label: "(1, 1)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [-1, -1], label: "(-1, -1)", labelAnchor: "sw", color: "#d4775c", r: 4 }
                    ],
                    lines: [
                        { from: [0, -5], to: [0, 5], color: "#94a3b8", dashed: true },
                        { from: [-5, 0], to: [5, 0], color: "#94a3b8", dashed: true }
                    ]
                } }
        ], finalAnswer: 'Rectangular hyperbola with asymptotes \\(x = 0\\) and \\(y = 0\\); branches in 1st and 3rd quadrants.' }
    },
    {
        id: 'cg5-040', topicRef: 'cg5', topicTitle: 'Curve Sketching 40', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^3 \\), showing the shape and any key points.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the intercept', workingLatex: 'x = 0: \\quad y = 0^3 = 0', explanation: 'The curve passes through the origin \\((0, 0)\\). This is both the \\(x\\)-intercept and \\(y\\)-intercept.' },
            { stepNumber: 2, description: 'Determine the end behaviour.', workingLatex: 'x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'Odd power with positive coefficient gives a bottom-left to top-right S-shape.' },
            { stepNumber: 3, description: 'Plot key points.', workingLatex: 'x = 1: y = 1; \\quad x = -1: y = -1; \\quad x = 2: y = 8; \\quad x = -2: y = -8', explanation: 'The curve is an odd function (symmetric about the origin). It passes through the origin and curves steeply as \\(x\\) increases.',
                diagram: {
                    xMin: -3, xMax: 3, yMin: -8, yMax: 8,
                    xTicks: [-2, -1, 0, 1, 2], yTicks: [-6, -4, -2, 0, 2, 4, 6],
                    curves: [{ points: sample((x) => x * x * x, -2, 2, 60), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [1, 1], label: "(1, 1)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [-1, -1], label: "(-1, -1)", labelAnchor: "se", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'S-shaped cubic through the origin; passes through \\((1, 1)\\) and \\((-1, -1)\\).' }
    },
    {
        id: 'cg5-041', topicRef: 'cg5', topicTitle: 'Curve Sketching 41', difficulty: 'Foundation',
        questionText: '[PREREQ:See Differentiation module on stationary points before attempting this question] Sketch \\( y = x^3 - 3x \\), showing all stationary points and intercepts.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise to find \\(x\\)-intercepts', workingLatex: 'y = x(x^2 - 3)', explanation: 'Take out a common factor of \\(x\\).' },
            { stepNumber: 2, description: 'Set each factor to zero', workingLatex: 'x = 0; \\quad x^2 - 3 = 0 \\implies x = \\pm\\sqrt{3}', explanation: 'The curve crosses the \\(x\\)-axis at \\(x = 0\\), \\(x = \\sqrt{3}\\) and \\(x = -\\sqrt{3}\\).' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 0^3 - 3(0) = 0', explanation: 'The \\(y\\)-intercept is at the origin.' },
            { stepNumber: 4, description: 'Differentiate to find stationary points', workingLatex: '\\frac{dy}{dx} = 3x^2 - 3', explanation: 'Differentiate term by term.' },
            { stepNumber: 5, description: 'Set the derivative equal to zero', workingLatex: '3x^2 - 3 = 0 \\implies 3(x^2 - 1) = 0 \\implies x^2 = 1', explanation: 'Factor out 3 then solve.' },
            { stepNumber: 6, description: 'Solve for \\(x\\)', workingLatex: 'x = 1 \\quad \\text{or} \\quad x = -1', explanation: 'Take the square root of both sides.' },
            { stepNumber: 7, description: 'Find \\(y\\) at each stationary point', workingLatex: 'x = 1: y = 1 - 3 = -2; \\quad x = -1: y = -1 + 3 = 2', explanation: 'Substitute each value back into \\(y = x^3 - 3x\\).' },
            { stepNumber: 8, description: 'Classify the stationary points', workingLatex: '\\frac{d^2y}{dx^2} = 6x; \\quad x = 1: 6 > 0 \\text{ (min)}; \\quad x = -1: -6 < 0 \\text{ (max)}', explanation: 'Use the second derivative to classify. Positive means minimum, negative means maximum.',
                diagram: {
                    xMin: -3, xMax: 3, yMin: -5, yMax: 5,
                    xTicks: [-2, -1, 0, 1, 2], yTicks: [-4, -2, 0, 2, 4],
                    curves: [{ points: sample((x) => x * x * x - 3 * x, -2.5, 2.5, 40), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [1.732, 0], label: "(\u221a3, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [-1.732, 0], label: "(-\u221a3, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [-1, 2], label: "(-1, 2)", labelAnchor: "n", color: "#d4775c", r: 4 },
                        { at: [1, -2], label: "(1, -2)", labelAnchor: "s", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'Cubic; roots at \\(0, \\pm\\sqrt{3}\\); local max \\((-1, 2)\\); local min \\((1, -2)\\).' }
    },
    {
        id: 'cg5-042', topicRef: 'cg5', topicTitle: 'Curve Sketching 42', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x-2} \\), clearly showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the vertical asymptote', workingLatex: 'x - 2 = 0 \\implies x = 2', explanation: 'The function is undefined when the denominator equals zero, so \\(x = 2\\) is a vertical asymptote.' },
            { stepNumber: 2, description: 'Identify the horizontal asymptote', workingLatex: 'x \\to \\pm\\infty: \\quad \\frac{1}{x - 2} \\to 0 \\implies y = 0', explanation: 'As \\(x\\) becomes very large, the fraction approaches zero, giving a horizontal asymptote at \\(y = 0\\).' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = \\frac{1}{0 - 2} = \\frac{1}{-2} = -\\frac{1}{2}', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, -1/2)\\).' },
            { stepNumber: 4, description: 'Note there is no \\(x\\)-intercept', workingLatex: '\\frac{1}{x - 2} = 0 \\text{ has no solution}', explanation: 'A fraction equals zero only when the numerator is zero. Since the numerator is always 1, the curve never crosses the \\(x\\)-axis.' },
            { stepNumber: 5, description: 'Describe the shape as a translation', workingLatex: 'y = \\frac{1}{x - 2} \\text{ is } y = \\frac{1}{x} \\text{ translated 2 units right}', explanation: 'This is the standard reciprocal graph shifted right by 2. The two branches sit either side of \\(x = 2\\).',
                diagram: {
                    xMin: -3, xMax: 7, yMin: -6, yMax: 6,
                    xTicks: [-2, -1, 0, 1, 2, 3, 4, 5, 6], yTicks: [-4, -2, 0, 2, 4],
                    curves: [
                        { points: sample((x) => 1 / (x - 2), -3, 1.85, 80), color: "#0d9488", width: 2 },
                        { points: sample((x) => 1 / (x - 2), 2.15, 7, 80), color: "#0d9488", width: 2 }
                    ],
                    points: [
                        { at: [0, -0.5], label: "(0, -\\tfrac{1}{2})", labelAnchor: "sw", color: "#d4775c", r: 4 },
                        { at: [3, 1], label: "(3, 1)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [1, -1], label: "(1, -1)", labelAnchor: "ne", color: "#d4775c", r: 4 }
                    ],
                    lines: [
                        { from: [2, -6], to: [2, 6], color: "#94a3b8", dashed: true },
                        { from: [-3, 0], to: [7, 0], color: "#94a3b8", dashed: true }
                    ]
                } }
        ], finalAnswer: 'Translated reciprocal; asymptotes \\(x = 2\\), \\(y = 0\\); \\(y\\)-int \\((0, -\\frac{1}{2})\\).' }
    },
    {
        id: 'cg5-043', topicRef: 'cg5', topicTitle: 'Curve Sketching 43', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-2)^2(x+1) \\), showing all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Determine the leading term', workingLatex: 'y = x^2 \\cdot x + \\cdots = x^3 + \\cdots', explanation: 'The highest power is \\(x^3\\) with positive coefficient, so the curve goes from bottom-left to top-right.' },
            { stepNumber: 2, description: 'Find \\(x\\)-intercepts from factors', workingLatex: '(x - 2)^2 = 0 \\implies x = 2; \\quad x + 1 = 0 \\implies x = -1', explanation: 'Set each factor to zero. There are roots at \\(x = 2\\) (repeated) and \\(x = -1\\).' },
            { stepNumber: 3, description: 'Determine touch/cross behaviour', workingLatex: 'x = 2: \\text{ repeated root (touches)}; \\quad x = -1: \\text{ single root (crosses)}', explanation: 'A squared factor means the curve touches the \\(x\\)-axis and turns back. A single factor means it crosses through.' },
            { stepNumber: 4, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = (0 - 2)^2(0 + 1) = (-2)^2 \\times 1 = 4', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, 4)\\).',
                diagram: {
                    xMin: -2.5, xMax: 3.5, yMin: -4, yMax: 12,
                    xTicks: [-2, -1, 0, 1, 2, 3], yTicks: [-2, 0, 2, 4, 6, 8, 10],
                    curves: [{ points: sample((x) => (x - 2) * (x - 2) * (x + 1), -2, 3.5, 40), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [-1, 0], label: "(-1, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [0, 4], label: "(0, 4)", labelAnchor: "e", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'Positive cubic; touches \\(x\\)-axis at \\((2, 0)\\); crosses at \\((-1, 0)\\); \\(y\\)-int \\((0, 4)\\).' }
    },
    {
        id: 'cg5-044', topicRef: 'cg5', topicTitle: 'Curve Sketching 44', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sqrt{x} \\) for \\( x \\geq 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the domain', workingLatex: '\\text{Domain: } x \\geq 0', explanation: 'The square root is only defined for non-negative values of x.' },
            { stepNumber: 2, description: 'Find the starting point', workingLatex: 'x = 0: \\quad y = \\sqrt{0} = 0', explanation: 'The curve starts at the origin \\((0, 0)\\).' },
            { stepNumber: 3, description: 'Evaluate at key points', workingLatex: 'x = 1: y = 1; \\quad x = 4: y = 2; \\quad x = 9: y = 3', explanation: 'These points help to plot the curve. Notice \\(y\\) increases more slowly as \\(x\\) gets larger.' },
            { stepNumber: 4, description: 'Describe the shape', workingLatex: 'y = x^{1/2} \\implies \\text{increasing, concave (flattening)}', explanation: 'The curve increases without bound but gets flatter. It is the top half of a sideways parabola.',
                diagram: {
                    xMin: -1, xMax: 10, yMin: -1, yMax: 4,
                    xTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], yTicks: [0, 1, 2, 3],
                    curves: [{ points: sample((x) => Math.sqrt(x), 0, 10, 150), color: "#0d9488", width: 2 }],
                    points: [
                        { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [1, 1], label: "(1, 1)", labelAnchor: "ne", color: "#d4775c", r: 4 },
                        { at: [4, 2], label: "(4, 2)", labelAnchor: "nw", color: "#d4775c", r: 4 },
                        { at: [9, 3], label: "(9, 3)", labelAnchor: "nw", color: "#d4775c", r: 4 }
                    ]
                } }
        ], finalAnswer: 'Starts at \\((0, 0)\\), increases and flattens; defined for \\(x \\geq 0\\).' }
    },
    {
        id: 'cg5-045', topicRef: 'cg5', topicTitle: 'Curve Sketching 45', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2^x \\), showing the asymptote and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 2^0 = 1', explanation: 'Any number to the power of 0 equals 1, so the \\(y\\)-intercept is \\((0, 1)\\).' },
            { stepNumber: 2, description: 'Identify the horizontal asymptote', workingLatex: 'x \\to -\\infty: \\quad 2^x \\to 0 \\implies y = 0', explanation: 'As \\(x\\) becomes very negative, \\(2^x\\) approaches 0 but never reaches it.' },
            { stepNumber: 3, description: 'Determine behaviour for large \\(x\\)', workingLatex: 'x \\to +\\infty: \\quad 2^x \\to +\\infty', explanation: 'As \\(x\\) increases, \\(2^x\\) grows without bound. This is exponential growth.' },
            { stepNumber: 4, description: 'Note key points for the sketch', workingLatex: 'x = 1: y = 2; \\quad x = 2: y = 4; \\quad x = -1: y = \\tfrac{1}{2}', explanation: 'The curve is always positive since \\(2^x > 0\\) for all \\(x\\). It never touches the \\(x\\)-axis.',
                diagram: {
                    xMin: -4, xMax: 4, yMin: -1, yMax: 9,
                    xTicks: [-3, -2, -1, 1, 2, 3], yTicks: [2, 4, 6, 8],
                    curves: [{ points: sample((x) => Math.pow(2, x), -4, 3.2, 80), color: '#0d9488' }],
                    lines: [{ from: [-4, 0], to: [4, 0], color: '#888', dashed: true }],
                    points: [
                        { at: [0, 1], label: '(0, 1)', labelAnchor: 'e', color: '#d4775c', r: 4 },
                        { at: [1, 2], label: '(1, 2)', labelAnchor: 'w', color: '#d4775c', r: 4 },
                        { at: [2, 4], label: '(2, 4)', labelAnchor: 'w', color: '#d4775c', r: 4 },
                        { at: [-1, 0.5], label: '(-1, \\frac{1}{2})', labelAnchor: 'e', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Exponential growth curve; \\(y\\)-int \\((0, 1)\\); asymptote \\(y = 0\\); always positive.' }
    },
    {
        id: 'cg5-046', topicRef: 'cg5', topicTitle: 'Curve Sketching 46', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 + 2x + 5 \\), explaining why it does not cross the x-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the expression to complete the square', workingLatex: 'y = x^2 + 2x + 5', explanation: 'We complete the square to find the vertex and determine whether the curve crosses the \\(x\\)-axis.' },
            { stepNumber: 2, description: 'Complete the square on \\(x^2 + 2x\\)', workingLatex: 'x^2 + 2x = (x + 1)^2 - 1', explanation: 'Halve the coefficient of \\(x\\): half of 2 is 1. Then \\((x + 1)^2 = x^2 + 2x + 1\\), so \\(x^2 + 2x = (x + 1)^2 - 1\\).' },
            { stepNumber: 3, description: 'Substitute back', workingLatex: 'y = (x + 1)^2 - 1 + 5 = (x + 1)^2 + 4', explanation: 'Replace \\(x^2 + 2x\\) with \\((x + 1)^2 - 1\\) and simplify the constants.' },
            { stepNumber: 4, description: 'Identify the vertex', workingLatex: '\\text{Vertex at } (-1,\\, 4)', explanation: 'From \\(y = (x + 1)^2 + 4\\), the minimum value of \\(y\\) is 4 when \\(x = -1\\).' },
            { stepNumber: 5, description: 'Explain why no \\(x\\)-intercepts exist', workingLatex: '(x + 1)^2 \\geq 0 \\implies y = (x + 1)^2 + 4 \\geq 4 > 0', explanation: 'Since \\((x + 1)^2\\) is always >= 0, the minimum \\(y\\)-value is 4. The curve is always above the \\(x\\)-axis.' },
            { stepNumber: 6, description: 'Verify using the discriminant', workingLatex: '\\Delta = b^2 - 4ac = (2)^2 - 4(1)(5) = 4 - 20 = -16 < 0', explanation: 'A negative discriminant confirms there are no real roots.' },
            { stepNumber: 7, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 0 + 0 + 5 = 5', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, 5)\\).',
                diagram: {
                    xMin: -5, xMax: 3, yMin: -1, yMax: 16,
                    xTicks: [-4, -3, -2, -1, 1, 2], yTicks: [4, 8, 12],
                    curves: [{ points: sample((x) => x * x + 2 * x + 5, -4.5, 2.5, 80), color: '#0d9488' }],
                    points: [
                        { at: [-1, 4], label: '(-1, 4)', labelAnchor: 's', color: '#d4775c', r: 4 },
                        { at: [0, 5], label: '(0, 5)', labelAnchor: 'e', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'U-shape; vertex \\((-1, 4)\\); \\(y\\)-int \\((0, 5)\\); no \\(x\\)-intercepts (discriminant \\(= -16 < 0\\)).' }
    },
    {
        id: 'cg5-047', topicRef: 'cg5', topicTitle: 'Curve Sketching 47', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |x - 3| \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the vertex of the V-shape', workingLatex: 'x - 3 = 0 \\implies x = 3', explanation: 'The modulus expression equals zero when \\(x = 3\\), giving the vertex at \\((3, 0)\\).' },
            { stepNumber: 2, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = |0 - 3| = |-3| = 3', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, 3)\\).' },
            { stepNumber: 3, description: 'Write the piecewise definition', workingLatex: 'y = \\begin{cases} x - 3 & \\text{if } x \\geq 3 \\\\ 3 - x & \\text{if } x < 3 \\end{cases}', explanation: 'For x >= 3 the expression inside is non-negative. For x < 3 it is negative, so we negate it.' },
            { stepNumber: 4, description: 'Describe the shape', workingLatex: '\\text{Gradient } -1 \\text{ for } x < 3; \\quad \\text{gradient } +1 \\text{ for } x > 3', explanation: 'The left arm slopes down and the right arm slopes up, forming a V-shape symmetric about \\(x = 3\\).',
                diagram: {
                    xMin: -2, xMax: 8, yMin: -1, yMax: 7,
                    xTicks: [-1, 1, 2, 3, 4, 5, 6, 7], yTicks: [1, 2, 3, 4, 5, 6],
                    curves: [{ points: sample((x) => Math.abs(x - 3), -1.5, 7.5, 80), color: '#0d9488' }],
                    points: [
                        { at: [3, 0], label: '(3, 0)', labelAnchor: 'n', color: '#d4775c', r: 4 },
                        { at: [0, 3], label: '(0, 3)', labelAnchor: 'e', color: '#d4775c', r: 4 },
                        { at: [6, 3], label: '(6, 3)', labelAnchor: 'w', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'V-shape; vertex \\((3, 0)\\); \\(y\\)-int \\((0, 3)\\); symmetric about \\(x = 3\\).' }
    },
    {
        id: 'cg5-048', topicRef: 'cg5', topicTitle: 'Curve Sketching 48', difficulty: 'Foundation',
        questionText: '[PREREQ:See Differentiation module on stationary points before attempting this question] Sketch \\( y = x^4 - 4x^2 \\), showing all intercepts and stationary points.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take out common factor \\(x^2\\)', workingLatex: 'y = x^2(x^2 - 4)', explanation: 'Factor out \\(x^2\\) from both terms.' },
            { stepNumber: 2, description: 'Factorise the remaining bracket', workingLatex: 'y = x^2(x - 2)(x + 2)', explanation: 'Recognise \\(x^2 - 4\\) as a difference of two squares.' },
            { stepNumber: 3, description: 'Find the \\(x\\)-intercepts', workingLatex: 'x^2 = 0 \\implies x = 0; \\quad x - 2 = 0 \\implies x = 2; \\quad x + 2 = 0 \\implies x = -2', explanation: '\\(x = 0\\) is a repeated root (touches), while \\(x = 2\\) and \\(x = -2\\) are single roots (crosses).' },
            { stepNumber: 4, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 0', explanation: 'The \\(y\\)-intercept is at the origin.' },
            { stepNumber: 5, description: 'Differentiate', workingLatex: '\\frac{dy}{dx} = 4x^3 - 8x', explanation: 'Differentiate term by term.' },
            { stepNumber: 6, description: 'Factorise the derivative', workingLatex: '\\frac{dy}{dx} = 4x(x^2 - 2) = 0', explanation: 'Take out the common factor of 4x.' },
            { stepNumber: 7, description: 'Solve for stationary points', workingLatex: 'x = 0; \\quad x^2 = 2 \\implies x = \\pm\\sqrt{2}', explanation: 'Set each factor to zero.' },
            { stepNumber: 8, description: 'Find \\(y\\) at each stationary point', workingLatex: 'y(0) = 0; \\quad y(\\pm\\sqrt{2}) = (\\sqrt{2})^4 - 4(\\sqrt{2})^2 = 4 - 8 = -4', explanation: 'Substitute back into the original equation.' },
            { stepNumber: 9, description: 'Classify the stationary points', workingLatex: '\\frac{d^2y}{dx^2} = 12x^2 - 8; \\quad x = 0: -8 < 0 \\text{ (max)}; \\quad x = \\pm\\sqrt{2}: 16 > 0 \\text{ (min)}', explanation: 'The second derivative test shows \\(x = 0\\) is a local max and \\(x = \\pm\\sqrt{2}\\) are local minima, giving a W-shape.',
                diagram: {
                    xMin: -3, xMax: 3, yMin: -5, yMax: 6,
                    xTicks: [-2, -1, 1, 2], yTicks: [-4, -2, 2, 4],
                    curves: [{ points: sample((x) => x * x * x * x - 4 * x * x, -2.6, 2.6, 100), color: '#0d9488' }],
                    points: [
                        { at: [0, 0], label: '(0, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [2, 0], label: '(2, 0)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [-1.414, -4], label: '(-\\sqrt{2}, -4)', labelAnchor: 's', color: '#d4775c', r: 4 },
                        { at: [1.414, -4], label: '(\\sqrt{2}, -4)', labelAnchor: 's', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'W-shape; roots at \\(0, \\pm 2\\); local max \\((0, 0)\\); local min \\((\\pm\\sqrt{2}, -4)\\).' }
    },
    {
        id: 'cg5-049', topicRef: 'cg5', topicTitle: 'Curve Sketching 49', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{3}{x} \\) for \\( x > 0 \\) and \\( x < 0 \\), showing the asymptotes. On the same axes, sketch \\( y = x + 2 \\). State how many intersection points there are.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the asymptotes of \\(y = \\frac{3}{x}\\).', workingLatex: '\\text{Vertical: } x = 0; \\quad \\text{Horizontal: } y = 0', explanation: 'The function \\(y = \\frac{3}{x}\\) is undefined at \\(x = 0\\) and approaches 0 as \\(x \\to \\pm\\infty\\).' },
            { stepNumber: 2, description: 'Plot key points for \\(y = \\frac{3}{x}\\).', workingLatex: 'x = 1: y = 3; \\quad x = 3: y = 1; \\quad x = -1: y = -3; \\quad x = -3: y = -1', explanation: 'The curve lies in the first and third quadrants since \\(k = 3 > 0\\) with odd power.' },
            { stepNumber: 3, description: 'Sketch the straight line \\(y = x + 2\\).', workingLatex: '\\text{Gradient } 1, \\quad y\\text{-intercept } (0, 2), \\quad x\\text{-intercept } (-2, 0)', explanation: 'A straight line with positive gradient crossing the \\(y\\)-axis at 2.' },
            { stepNumber: 4, description: 'Count the intersections.', workingLatex: '\\frac{3}{x} = x + 2 \\implies 3 = x^2 + 2x \\implies x^2 + 2x - 3 = 0 \\implies (x+3)(x-1) = 0', explanation: 'Multiply both sides by \\(x\\) and rearrange to a quadratic. Two solutions: \\(x = -3\\) and \\(x = 1\\).' },
            { stepNumber: 5, description: 'Find the intersection points.', workingLatex: 'x = 1: y = 3; \\quad x = -3: y = -1', explanation: 'The curves meet at \\((1, 3)\\) and \\((-3, -1)\\). There are 2 intersection points.',
                diagram: {
                    xMin: -6, xMax: 6, yMin: -6, yMax: 6,
                    xTicks: [-4, -2, 2, 4], yTicks: [-4, -2, 2, 4],
                    curves: [
                        { points: sample(x => 3 / x, 0.4, 6, 60), color: '#0d9488', width: 2 },
                        { points: sample(x => 3 / x, -6, -0.4, 60), color: '#0d9488', width: 2 },
                        { points: sample(x => x + 2, -6, 6, 60), color: '#d4775c', width: 2 }
                    ],
                    lines: [
                        { from: [0, -6], to: [0, 6], color: '#94a3b8', dashed: true },
                        { from: [-6, 0], to: [6, 0], color: '#94a3b8', dashed: true }
                    ],
                    points: [
                        { at: [1, 3], label: '(1, 3)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [-3, -1], label: '(-3, -1)', labelAnchor: 'se', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: '2 intersection points at \\((1, 3)\\) and \\((-3, -1)\\).' }
    },
    {
        id: 'cg5-050', topicRef: 'cg5', topicTitle: 'Curve Sketching 50', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = f(x) \\) passes through \\( (0, 3) \\) and has a maximum at \\( (2, 7) \\). Sketch \\( y = f(x) + 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the transformation', workingLatex: 'y = f(x) + 2 \\text{ is a vertical translation of } +2', explanation: 'Adding 2 outside the function shifts every point upward by 2 units. The shape of the curve does not change.' },
            { stepNumber: 2, description: 'Transform the first key point', workingLatex: '(0,\\, 3) \\to (0,\\, 3 + 2) = (0,\\, 5)', explanation: 'The \\(y\\)-coordinate increases by 2 while the \\(x\\)-coordinate stays the same.' },
            { stepNumber: 3, description: 'Transform the maximum point', workingLatex: '(2,\\, 7) \\to (2,\\, 7 + 2) = (2,\\, 9)', explanation: 'The maximum also shifts up by 2. It remains a maximum because the shape is unchanged.',
                diagram: {
                    xMin: -2, xMax: 5, yMin: -1, yMax: 11,
                    xTicks: [-1, 1, 2, 3, 4], yTicks: [2, 4, 6, 8, 10],
                    curves: [
                        { points: sample((x) => -(x - 2) * (x - 2) + 7, -1.5, 4.5, 60), color: '#888', width: 1.5 },
                        { points: sample((x) => -(x - 2) * (x - 2) + 9, -1.5, 4.5, 60), color: '#0d9488' }
                    ],
                    points: [
                        { at: [0, 3], label: '(0, 3)', labelAnchor: 'e', color: '#888', r: 3 },
                        { at: [2, 7], label: '(2, 7)', labelAnchor: 'n', color: '#888', r: 3 },
                        { at: [0, 5], label: '(0, 5)', labelAnchor: 'e', color: '#d4775c', r: 4 },
                        { at: [2, 9], label: '(2, 9)', labelAnchor: 'n', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Same shape, shifted up 2; passes through \\((0, 5)\\); max at \\((2, 9)\\).' }
    },
    {
        id: 'cg5-051', topicRef: 'cg5', topicTitle: 'Curve Sketching 51', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x+2)^3 \\), stating the point of inflection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the transformation from \\(y = x^3\\)', workingLatex: 'y = (x + 2)^3 \\text{ is } y = x^3 \\text{ translated 2 units left}', explanation: 'Replacing \\(x\\) with \\((x + 2)\\) shifts the graph 2 units to the left.' },
            { stepNumber: 2, description: 'Find the point of inflection', workingLatex: '\\text{Inflection of } y = x^3 \\text{ at } (0, 0) \\to (-2, 0)', explanation: 'The inflection point of \\(y = x^3\\) at the origin moves to \\((-2, 0)\\) after the translation.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = (0 + 2)^3 = 2^3 = 8', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, 8)\\).' },
            { stepNumber: 4, description: 'Determine the end behaviour', workingLatex: 'x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'The leading term is \\(x^3\\) with positive coefficient, so the S-shape runs from bottom-left to top-right, centred at \\((-2, 0)\\).',
                diagram: {
                    xMin: -5, xMax: 2, yMin: -15, yMax: 15,
                    xTicks: [-4, -3, -2, -1, 1], yTicks: [-10, -5, 5, 8, 10],
                    curves: [{ points: sample((x) => (x + 2) * (x + 2) * (x + 2), -4.5, 1.5, 80), color: '#0d9488' }],
                    points: [
                        { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [0, 8], label: '(0, 8)', labelAnchor: 'e', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Cubic S-shape; inflection at \\((-2, 0)\\); \\(y\\)-int \\((0, 8)\\).' }
    },
    {
        id: 'cg5-052', topicRef: 'cg5', topicTitle: 'Curve Sketching 52', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -\\frac{1}{x} \\), showing the asymptotes.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the asymptotes', workingLatex: 'x = 0 \\text{ (vertical)}, \\quad y = 0 \\text{ (horizontal)}', explanation: 'The asymptotes are the same as \\(y = 1/x\\) because multiplying by \\(-1\\) does not change where the function is undefined.' },
            { stepNumber: 2, description: 'Identify the transformation', workingLatex: 'y = -\\frac{1}{x} \\text{ is a reflection of } y = \\frac{1}{x} \\text{ in the x-axis}', explanation: 'Multiplying by \\(-1\\) reflects every \\(y\\)-value, flipping the graph over the \\(x\\)-axis.' },
            { stepNumber: 3, description: 'Determine which quadrants', workingLatex: 'x > 0: y = -\\frac{1}{x} < 0 \\text{ (4th)}; \\quad x < 0: y = -\\frac{1}{x} > 0 \\text{ (2nd)}', explanation: 'For positive \\(x\\), \\(y\\) is negative (4th quadrant). For negative \\(x\\), \\(y\\) is positive (2nd quadrant). This is the opposite of \\(y = 1/x\\).' },
            { stepNumber: 4, description: 'Note key reference points', workingLatex: 'x = 1: y = -1; \\quad x = -1: y = 1', explanation: 'These points help position the two branches when sketching.',
                diagram: {
                    xMin: -6, xMax: 6, yMin: -6, yMax: 6,
                    xTicks: [-4, -2, 2, 4], yTicks: [-4, -2, 2, 4],
                    curves: [
                        { points: sample((x) => -1 / x, -6, -0.18, 60), color: '#0d9488' },
                        { points: sample((x) => -1 / x, 0.18, 6, 60), color: '#0d9488' }
                    ],
                    lines: [
                        { from: [0, -6], to: [0, 6], color: '#888', dashed: true },
                        { from: [-6, 0], to: [6, 0], color: '#888', dashed: true }
                    ],
                    points: [
                        { at: [1, -1], label: '(1, -1)', labelAnchor: 'se', color: '#d4775c', r: 4 },
                        { at: [-1, 1], label: '(-1, 1)', labelAnchor: 'nw', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Hyperbola in 2nd and 4th quadrants; asymptotes \\(x = 0\\), \\(y = 0\\).' }
    },
    {
        id: 'cg5-053', topicRef: 'cg5', topicTitle: 'Curve Sketching 53', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2 - 6x + 9 \\), identifying the nature of the root.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recognise as a perfect square', workingLatex: 'y = x^2 - 6x + 9 = (x - 3)^2', explanation: 'Check: \\((x - 3)^2 = x^2 - 6x + 9\\). This is a perfect square trinomial.' },
            { stepNumber: 2, description: 'Find the repeated root', workingLatex: '(x - 3)^2 = 0 \\implies x = 3', explanation: 'There is a single repeated root at \\(x = 3\\). The curve touches the \\(x\\)-axis here but does not cross it.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = (0 - 3)^2 = (-3)^2 = 9', explanation: 'Substitute \\(x = 0\\). The \\(y\\)-intercept is \\((0, 9)\\).' },
            { stepNumber: 4, description: 'Identify the vertex', workingLatex: 'y = (x - 3)^2 \\implies \\text{vertex at } (3, 0)', explanation: 'From the completed-square form, the minimum value of \\(y\\) is 0 at \\(x = 3\\). The vertex is the same as the root.' },
            { stepNumber: 5, description: 'Determine the shape', workingLatex: '\\text{Coefficient of } x^2 \\text{ is } +1 > 0 \\implies \\text{U-shape}', explanation: 'The parabola opens upward. It sits on the \\(x\\)-axis at \\((3, 0)\\), touching but not crossing.',
                diagram: {
                    xMin: -1, xMax: 7, yMin: -1, yMax: 12,
                    xTicks: [1, 2, 3, 4, 5, 6], yTicks: [3, 6, 9],
                    curves: [{ points: sample((x) => (x - 3) * (x - 3), -0.5, 6.5, 80), color: '#0d9488' }],
                    points: [
                        { at: [3, 0], label: '(3, 0)', labelAnchor: 'n', color: '#d4775c', r: 4 },
                        { at: [0, 9], label: '(0, 9)', labelAnchor: 'e', color: '#d4775c', r: 4 },
                        { at: [6, 9], label: '(6, 9)', labelAnchor: 'w', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'U-shape; touches \\(x\\)-axis at \\((3, 0)\\) (repeated root); vertex \\((3, 0)\\); \\(y\\)-int \\((0, 9)\\).' }
    },
    {
        id: 'cg5-054', topicRef: 'cg5', topicTitle: 'Curve Sketching 54', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\frac{1}{x^2} \\), showing the asymptotes.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the vertical asymptote', workingLatex: 'x^2 = 0 \\implies x = 0', explanation: 'The denominator is zero when \\(x = 0\\), so \\(x = 0\\) is a vertical asymptote. The function is undefined at the origin.' },
            { stepNumber: 2, description: 'Identify the horizontal asymptote', workingLatex: 'x \\to \\pm\\infty \\implies \\frac{1}{x^2} \\to 0', explanation: 'As \\(x\\) becomes very large in either direction, \\(1/x^2\\) approaches 0 from above, so \\(y = 0\\) is a horizontal asymptote.' },
            { stepNumber: 3, description: 'Determine the sign of \\(y\\)', workingLatex: 'x^2 > 0 \\text{ for all } x \\neq 0 \\implies y = \\frac{1}{x^2} > 0', explanation: 'Since \\(x^2\\) is always positive, \\(y\\) is always positive. The curve never crosses the \\(x\\)-axis, so there are no \\(x\\)-intercepts.' },
            { stepNumber: 4, description: 'Check symmetry', workingLatex: 'f(-x) = \\frac{1}{(-x)^2} = \\frac{1}{x^2} = f(x)', explanation: 'Since \\(f(-x) = f(x)\\), the curve is symmetric about the \\(y\\)-axis. Both branches lie in the 1st and 2nd quadrants.',
                diagram: {
                    xMin: -5, xMax: 5, yMin: -1, yMax: 8,
                    xTicks: [-4, -3, -2, -1, 1, 2, 3, 4], yTicks: [1, 2, 4, 6],
                    curves: [
                        { points: sample((x) => 1 / (x * x), -5, -0.36, 60), color: '#0d9488' },
                        { points: sample((x) => 1 / (x * x), 0.36, 5, 60), color: '#0d9488' }
                    ],
                    lines: [
                        { from: [0, -1], to: [0, 8], color: '#888', dashed: true },
                        { from: [-5, 0], to: [5, 0], color: '#888', dashed: true }
                    ],
                    points: [
                        { at: [1, 1], label: '(1, 1)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [-1, 1], label: '(-1, 1)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [2, 0.25], label: '(2, \\frac{1}{4})', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [-2, 0.25], label: '(-2, \\frac{1}{4})', labelAnchor: 'nw', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Both branches in 1st and 2nd quadrants; asymptotes \\(x = 0\\), \\(y = 0\\).' }
    },
    {
        id: 'cg5-055', topicRef: 'cg5', topicTitle: 'Curve Sketching 55', difficulty: 'Foundation',
        questionText: 'Given \\( y = f(x) \\) with roots at -1, 2, 5 and y-intercept 10, sketch \\( y = f(x+1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Determine \\(f(x)\\) from given information', workingLatex: 'f(x) = k(x+1)(x-2)(x-5)', explanation: 'The roots at \\(-1\\), \\(2\\), \\(5\\) give these three linear factors. We need to find the constant \\(k\\).' },
            { stepNumber: 2, description: 'Find \\(k\\) using the \\(y\\)-intercept', workingLatex: 'f(0) = k(1)(-2)(-5) = 10k = 10 \\implies k = 1', explanation: 'Substituting \\(x = 0\\) and using \\(f(0) = 10\\) gives \\(k = 1\\), so \\(f(x) = (x+1)(x-2)(x-5)\\).' },
            { stepNumber: 3, description: 'Apply the horizontal translation', workingLatex: 'f(x+1): \\text{ replace } x \\text{ with } x+1 \\implies \\text{shift left by 1}', explanation: 'The transformation \\(y = f(x+1)\\) shifts the entire graph 1 unit to the left. A common mistake is shifting right instead of left.' },
            { stepNumber: 4, description: 'Find the new roots', workingLatex: 'x+1 = -1 \\implies x = -2; \\quad x+1 = 2 \\implies x = 1; \\quad x+1 = 5 \\implies x = 4', explanation: 'Each root is shifted 1 unit to the left, giving new roots at \\(-2\\), \\(1\\) and \\(4\\).' },
            { stepNumber: 5, description: 'Find the new \\(y\\)-intercept', workingLatex: 'f(0+1) = f(1) = (1+1)(1-2)(1-5) = (2)(-1)(-4) = 8', explanation: 'The new \\(y\\)-intercept is found by evaluating \\(f(1)\\), not \\(f(0)\\). The \\(y\\)-intercept changes from 10 to 8.', diagram: { xMin: -3, xMax: 5, yMin: -20, yMax: 20, xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5], yTicks: [-15, -10, -5, 0, 5, 10, 15], curves: [{ points: sample(x => (x + 2) * (x - 1) * (x - 4), -3, 5), color: "#0d9488", width: 2.5 }], points: [{ at: [-2, 0], label: "(-2, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [1, 0], label: "(1, 0)", labelAnchor: "n", color: "#d4775c" }, { at: [4, 0], label: "(4, 0)", labelAnchor: "nw", color: "#d4775c" }, { at: [0, 8], label: "(0, 8)", labelAnchor: "e", color: "#d4775c" }] } }
        ], finalAnswer: 'Same shape shifted 1 left; roots at \\(-2, 1, 4\\); \\(y\\)-int \\((0, 8)\\).' }
    },
    {
        id: 'cg5-056', topicRef: 'cg5', topicTitle: 'Curve Sketching 56', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 3 - x^2 \\), showing the vertex and intercepts.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the shape of the parabola', workingLatex: 'y = -x^2 + 3', explanation: 'The coefficient of \\(x^2\\) is negative, so the parabola is an n-shape (opens downwards). A common mistake is drawing a u-shape.' },
            { stepNumber: 2, description: 'Find the vertex', workingLatex: 'y = -(x-0)^2 + 3 \\implies \\text{vertex } (0, 3)', explanation: 'The equation is already in completed square form. The vertex is at \\((0, 3)\\), which is the maximum point.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 3 - 0 = 3', explanation: 'The \\(y\\)-intercept is at \\((0, 3)\\), which coincides with the vertex in this case.' },
            { stepNumber: 4, description: 'Find the \\(x\\)-intercepts', workingLatex: '3 - x^2 = 0 \\implies x^2 = 3 \\implies x = \\pm\\sqrt{3}', explanation: 'Setting \\(y = 0\\) and solving gives two symmetric roots at \\(x = -\\sqrt{3}\\) and \\(x = \\sqrt{3}\\).', diagram: { xMin: -3, xMax: 3, yMin: -6, yMax: 4, xTicks: [-3, -2, -1, 0, 1, 2, 3], yTicks: [-6, -4, -2, 0, 2, 4], curves: [{ points: sample(x => 3 - x * x, -3, 3), color: "#0d9488", width: 2.5 }], points: [{ at: [0, 3], label: "(0, 3)", labelAnchor: "e", color: "#d4775c" }, { at: [-1.73, 0], label: "(-\\sqrt{3}, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [1.73, 0], label: "(\\sqrt{3}, 0)", labelAnchor: "nw", color: "#d4775c" }] } }
        ], finalAnswer: 'n-shape; vertex \\((0, 3)\\); roots \\((\\pm\\sqrt{3}, 0)\\); \\(y\\)-int \\((0, 3)\\).' }
    },
    {
        id: 'cg5-057', topicRef: 'cg5', topicTitle: 'Curve Sketching 57', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x(x-2)(x+3) \\), showing all intercepts.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the \\(x\\)-intercepts', workingLatex: 'x(x-2)(x+3) = 0 \\implies x = 0, \\; x = 2, \\; x = -3', explanation: 'Set each factor equal to zero. There are three distinct roots, so the curve crosses the \\(x\\)-axis at each one.' },
            { stepNumber: 2, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 0(0-2)(0+3) = 0', explanation: 'The curve passes through the origin since \\(x = 0\\) is one of the roots.' },
            { stepNumber: 3, description: 'Identify the leading term', workingLatex: 'y = x \\cdot x \\cdot x + \\cdots = x^3 + \\cdots', explanation: 'The leading term is \\(x^3\\) with a positive coefficient, so this is a positive cubic.' },
            { stepNumber: 4, description: 'Determine end behaviour', workingLatex: 'x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'A positive cubic goes from bottom-left to top-right. The curve crosses the \\(x\\)-axis at \\(-3\\), \\(0\\) and \\(2\\) in order from left to right.', diagram: { xMin: -4, xMax: 3, yMin: -15, yMax: 15, xTicks: [-3, -2, -1, 0, 1, 2], yTicks: [-10, -5, 0, 5, 10], curves: [{ points: sample(x => x * (x - 2) * (x + 3), -4, 3), color: "#0d9488", width: 2.5 }], points: [{ at: [-3, 0], label: "(-3, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [0, 0], label: "(0, 0)", labelAnchor: "ne", color: "#d4775c" }, { at: [2, 0], label: "(2, 0)", labelAnchor: "nw", color: "#d4775c" }] } }
        ], finalAnswer: 'Cubic through \\((-3, 0)\\), \\((0, 0)\\), \\((2, 0)\\); positive leading coefficient.' }
    },
    {
        id: 'cg5-058', topicRef: 'cg5', topicTitle: 'Curve Sketching 58', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x - 1)(x + 2)(x - 3)(x + 4) \\), showing where the curve meets the axes.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the leading term.', workingLatex: 'y = x \\cdot x \\cdot x \\cdot x + \\cdots = x^4 + \\cdots', explanation: 'The leading term is \\(x^4\\) with a positive coefficient, so the curve has a u-shape overall (enters from top-left, exits top-right).' },
            { stepNumber: 2, description: 'Find the \\(x\\)-intercepts.', workingLatex: 'x = 1, \\quad x = -2, \\quad x = 3, \\quad x = -4', explanation: 'Set each factor equal to zero. All four roots are single roots, so the curve crosses the \\(x\\)-axis at each one.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept.', workingLatex: 'y(0) = (0-1)(0+2)(0-3)(0+4) = (-1)(2)(-3)(4) = 24', explanation: 'Substitute \\(x = 0\\). Be careful with signs: \\((-1)(2) = -2\\), then \\((-2)(-3) = 6\\), then \\(6 \\times 4 = 24\\).' },
            { stepNumber: 4, description: 'Describe the sketch.', workingLatex: '\\text{Quartic, u-shape; crosses at } x = -4, -2, 1, 3; \\quad y\\text{-int } (0, 24)', explanation: 'The curve enters from the top-left, crosses at \\(x = -4\\), dips below, crosses at \\(x = -2\\), rises through \\((0, 24)\\), crosses at \\(x = 1\\), dips below, crosses at \\(x = 3\\), then rises to the top-right.',
                diagram: {
                    xMin: -5, xMax: 4, yMin: -30, yMax: 40,
                    xTicks: [-4, -3, -2, -1, 0, 1, 2, 3], yTicks: [-20, -10, 0, 10, 20, 30],
                    curves: [{ points: sample(x => (x-1)*(x+2)*(x-3)*(x+4), -5, 4), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [-4, 0], label: '(-4, 0)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [1, 0], label: '(1, 0)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [3, 0], label: '(3, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [0, 24], label: '(0, 24)', labelAnchor: 'e', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Quartic crossing at \\(x = -4, -2, 1, 3\\); \\(y\\)-intercept at \\((0, 24)\\); u-shape overall.' }
    },
    {
        id: 'cg5-059', topicRef: 'cg5', topicTitle: 'Curve Sketching 59', difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) has a minimum at \\( (1, -3) \\) and passes through \\( (0, 0) \\). Sketch \\( y = -f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the transformation', workingLatex: 'y = -f(x) \\implies \\text{reflect in the } x\\text{-axis}', explanation: 'Multiplying \\(f(x)\\) by \\(-1\\) reflects the entire curve in the \\(x\\)-axis. All \\(y\\)-coordinates are negated while \\(x\\)-coordinates stay the same.' },
            { stepNumber: 2, description: 'Transform the minimum point', workingLatex: '(1, -3) \\to (1, -(-3)) = (1, 3)', explanation: 'The minimum at \\((1, -3)\\) becomes a maximum at \\((1, 3)\\). Reflecting in the \\(x\\)-axis always turns minima into maxima and vice versa.' },
            { stepNumber: 3, description: 'Transform the origin point', workingLatex: '(0, 0) \\to (0, -0) = (0, 0)', explanation: 'Points on the \\(x\\)-axis (where \\(y = 0\\)) are unchanged by reflection in the \\(x\\)-axis, since \\(-0 = 0\\).',
                    diagram: {
                        xMin: -1, xMax: 3, yMin: -1, yMax: 4,
                        xTicks: [1, 2], yTicks: [1, 2, 3],
                        curves: [
                            { points: sample(x => -3 * Math.pow(x - 1, 2) + 3, -1, 3), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [0, 0], label: '(0,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [1, 3], label: '(1,\\,3)\\;\\text{max}', labelAnchor: 's', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Reflected curve; max at \\((1, 3)\\); through origin.' }
    },
    {
        id: 'cg5-060', topicRef: 'cg5', topicTitle: 'Curve Sketching 60', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = e^{-x} \\), showing the asymptote and intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the transformation', workingLatex: 'y = e^{-x} \\text{ is a reflection of } y = e^x \\text{ in the } y\\text{-axis}', explanation: 'Replacing \\(x\\) with \\(-x\\) reflects the standard exponential curve in the \\(y\\)-axis, changing it from increasing to decreasing.' },
            { stepNumber: 2, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = e^{0} = 1', explanation: 'The \\(y\\)-intercept is at \\((0, 1)\\). This is the same as for \\(y = e^x\\) since the reflection does not move points on the \\(y\\)-axis.' },
            { stepNumber: 3, description: 'Find the horizontal asymptote', workingLatex: 'x \\to +\\infty: \\quad e^{-x} \\to 0', explanation: 'As \\(x\\) increases, \\(e^{-x}\\) approaches 0 from above but never reaches it, so \\(y = 0\\) is a horizontal asymptote.' },
            { stepNumber: 4, description: 'Check behaviour as \\(x\\) decreases', workingLatex: 'x \\to -\\infty: \\quad e^{-x} \\to +\\infty', explanation: 'As \\(x\\) becomes very negative, \\(-x\\) becomes very positive, so \\(e^{-x}\\) grows without bound. The curve rises steeply to the left.',
                    diagram: {
                        xMin: -3, xMax: 5, yMin: -1, yMax: 8,
                        xTicks: [-2, -1, 1, 2, 3, 4], yTicks: [1, 2, 3, 4, 5, 6, 7],
                        curves: [
                            { points: sample((x) => Math.exp(-x), -2, 5), color: '#0d9488', width: 2 }
                        ],
                        lines: [
                            { from: [-3, 0], to: [5, 0], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [0, 1], label: '(0,\\,1)', labelAnchor: 'e', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Decreasing exponential; \\(y\\)-int \\((0, 1)\\); asymptote \\(y = 0\\).' }
    },
    {
        id: 'cg5-061', topicRef: 'cg5', topicTitle: 'Curve Sketching 61', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = x^2(x-3) \\), showing where the curve touches or crosses the x-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the roots', workingLatex: 'x^2(x-3) = 0 \\implies x = 0 \\text{ or } x = 3', explanation: 'Setting each factor to zero gives two roots. The factor \\(x^2\\) gives a repeated root at \\(x = 0\\).' },
            { stepNumber: 2, description: 'Determine touch or cross behaviour', workingLatex: 'x = 0: \\text{ repeated root (touches)}; \\quad x = 3: \\text{ single root (crosses)}', explanation: 'A repeated root means the curve touches the \\(x\\)-axis and turns back. A single root means the curve crosses through the axis.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = 0^2(0-3) = 0', explanation: 'The \\(y\\)-intercept is at the origin, which coincides with the repeated root.' },
            { stepNumber: 4, description: 'Determine end behaviour', workingLatex: 'y = x^3 - 3x^2; \\quad x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'The leading term is \\(x^3\\) (positive coefficient), so the cubic goes from bottom-left to top-right. The curve touches at the origin then crosses at \\((3, 0)\\).',
                    diagram: {
                        xMin: -2, xMax: 5, yMin: -5, yMax: 10,
                        xTicks: [-1, 1, 2, 3, 4], yTicks: [-4, -2, 2, 4, 6, 8],
                        curves: [
                            { points: sample((x) => x * x * (x - 3), -1.5, 4.5), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [0, 0], label: '(0,\\,0)\\;\\text{touch}', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [3, 0], label: '(3,\\,0)\\;\\text{cross}', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                            { at: [2, -4], label: '(2,\\,-4)\\;\\text{min}', labelAnchor: 'ne', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Cubic; touches \\(x\\)-axis at origin, crosses at \\((3, 0)\\).' }
    },
    {
        id: 'cg5-062', topicRef: 'cg5', topicTitle: 'Curve Sketching 62', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = -x(x - 1)(x - 4)(x + 2) \\), showing where the curve meets the axes.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the leading term.', workingLatex: 'y = (-x)(x)(x)(x) + \\cdots = -x^4 + \\cdots', explanation: 'The leading term is \\(-x^4\\), negative coefficient with even degree, so the curve has an n-shape (enters from bottom-left, exits bottom-right).' },
            { stepNumber: 2, description: 'Find the \\(x\\)-intercepts.', workingLatex: 'x = 0, \\quad x = 1, \\quad x = 4, \\quad x = -2', explanation: 'Set each factor equal to zero. All are single roots, so the curve crosses the \\(x\\)-axis at each one.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept.', workingLatex: 'y(0) = -(0)(0-1)(0-4)(0+2) = 0', explanation: 'Since \\(x = 0\\) is a root, the curve passes through the origin.' },
            { stepNumber: 4, description: 'Describe the sketch.', workingLatex: '\\text{Quartic, n-shape; crosses at } x = -2, 0, 1, 4; \\quad y\\text{-int } (0, 0)', explanation: 'The curve enters from the bottom-left, crosses at \\(x = -2\\), rises above, crosses at \\(x = 0\\), dips below, crosses at \\(x = 1\\), rises above, crosses at \\(x = 4\\), then falls to the bottom-right.',
                diagram: {
                    xMin: -3, xMax: 5, yMin: -20, yMax: 20,
                    xTicks: [-2, -1, 0, 1, 2, 3, 4], yTicks: [-15, -10, -5, 0, 5, 10, 15],
                    curves: [{ points: sample(x => -x*(x-1)*(x-4)*(x+2), -3, 5), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [0, 0], label: '(0, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [1, 0], label: '(1, 0)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                        { at: [4, 0], label: '(4, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Quartic crossing at \\(x = -2, 0, 1, 4\\); \\(y\\)-intercept at origin; n-shape overall.' }
    },
    {
        id: 'cg5-063', topicRef: 'cg5', topicTitle: 'Curve Sketching 63', difficulty: 'Foundation',
        questionText: 'Given \\( y = f(x) \\) with a maximum at \\( (3, 5) \\), sketch \\( y = f(2x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the transformation', workingLatex: 'y = f(2x) \\implies \\text{horizontal stretch, scale factor } \\tfrac{1}{2}', explanation: 'Replacing \\(x\\) with \\(2x\\) compresses the graph horizontally by a factor of 2. All \\(x\\)-coordinates are halved while \\(y\\)-coordinates remain unchanged.' },
            { stepNumber: 2, description: 'Transform the maximum point', workingLatex: '(3, 5) \\to \\left(\\frac{3}{2}, 5\\right)', explanation: 'The \\(x\\)-coordinate 3 is halved to give \\(3/2\\), while the \\(y\\)-coordinate 5 stays the same. The maximum is now at \\((3/2, 5)\\).' },
            { stepNumber: 3, description: 'State the nature of the point', workingLatex: '\\text{Maximum at } \\left(\\frac{3}{2}, 5\\right) \\text{ with same height}', explanation: 'The nature of stationary points is preserved under horizontal stretches. A maximum remains a maximum at the same height.',
                    diagram: {
                        xMin: -1, xMax: 4, yMin: -1, yMax: 7,
                        xTicks: [1, 1.5, 2, 3], yTicks: [1, 2, 3, 4, 5, 6],
                        curves: [
                            { points: sample(x => -5 * Math.pow(x - 1.5, 2) / Math.pow(1.5, 2) + 5, 0, 3), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [1.5, 5], label: '(\\frac{3}{2},\\,5)\\;\\text{max}', labelAnchor: 's', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Same height, compressed horizontally; max at \\((\\frac{3}{2}, 5)\\).' }
    },
    {
        id: 'cg5-064', topicRef: 'cg5', topicTitle: 'Curve Sketching 64', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = |2x - 4| \\), showing the vertex and intercepts.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find where the expression is zero', workingLatex: '2x - 4 = 0 \\implies x = 2', explanation: 'The modulus function equals zero when the expression inside is zero. This gives the vertex of the V-shape at \\(x = 2\\).' },
            { stepNumber: 2, description: 'State the vertex', workingLatex: '\\text{vertex} = (2, 0)', explanation: 'At \\(x = 2\\), \\(y = |0| = 0\\), so the vertex (the lowest point of the V-shape) is at \\((2, 0)\\).' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = |2(0) - 4| = |-4| = 4', explanation: 'Substituting \\(x = 0\\) gives \\(y = 4\\). The \\(y\\)-intercept is at \\((0, 4)\\).' },
            { stepNumber: 4, description: 'Determine the gradient of each arm', workingLatex: 'x > 2: \\; y = 2x - 4, \\; \\text{gradient } 2; \\quad x < 2: \\; y = -(2x-4) = 4-2x, \\; \\text{gradient } {-2}', explanation: 'The right arm has gradient \\(+2\\) and the left arm has gradient \\(-2\\). The V-shape is steeper than \\(|x|\\) because the coefficient of \\(x\\) is 2.',
                    diagram: {
                        xMin: -1, xMax: 6, yMin: -1, yMax: 9,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [1, 2, 3, 4, 5, 6, 7, 8],
                        curves: [
                            { points: sample((x) => Math.abs(2 * x - 4), -1, 6), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [2, 0], label: '(2,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4 },
                            { at: [0, 4], label: '(0,\\,4)', labelAnchor: 'e', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'V-shape; vertex \\((2, 0)\\); \\(y\\)-int \\((0, 4)\\); gradient \\(\\pm 2\\).' }
    },
    {
        id: 'cg5-065', topicRef: 'cg5', topicTitle: 'Curve Sketching 65', difficulty: 'Foundation',
        questionText: '[PREREQ:See Differentiation module on stationary points before attempting this question] Sketch \\( y = -x^3 + 3x \\), showing the stationary points and intercepts.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor to find \\(x\\)-intercepts', workingLatex: 'y = -x^3 + 3x = -x(x^2 - 3)', explanation: 'Taking out a common factor of \\(-x\\) gives the factorised form.' },
            { stepNumber: 2, description: 'Solve for the roots', workingLatex: '-x(x^2 - 3) = 0 \\implies x = 0 \\text{ or } x^2 = 3 \\implies x = \\pm\\sqrt{3}', explanation: 'There are three distinct roots: \\(x = 0\\) and \\(x = \\pm\\sqrt{3}\\). The curve crosses the \\(x\\)-axis at each.' },
            { stepNumber: 3, description: 'Differentiate to find stationary points', workingLatex: '\\frac{dy}{dx} = -3x^2 + 3', explanation: 'Differentiating term by term: the derivative of -x³ is -3x² and the derivative of 3x is 3.' },
            { stepNumber: 4, description: 'Set the derivative equal to zero', workingLatex: '-3x^2 + 3 = 0 \\implies x^2 = 1 \\implies x = \\pm 1', explanation: 'Solving \\(dy/dx = 0\\) gives two stationary points at \\(x = -1\\) and \\(x = 1\\).' },
            { stepNumber: 5, description: 'Find \\(y\\)-values at stationary points', workingLatex: 'y(-1) = -(-1)^3 + 3(-1) = 1 - 3 = -2; \\quad y(1) = -(1)^3 + 3(1) = -1 + 3 = 2', explanation: 'Substituting \\(x = -1\\) and \\(x = 1\\) back into the original equation gives the coordinates of the stationary points.' },
            { stepNumber: 6, description: 'Classify the stationary points', workingLatex: '\\frac{d^2y}{dx^2} = -6x; \\quad x = -1: -6(-1) = 6 > 0 \\text{ (min)}; \\quad x = 1: -6(1) = -6 < 0 \\text{ (max)}', explanation: 'The second derivative is positive at \\(x = -1\\) (minimum) and negative at \\(x = 1\\) (maximum). The leading coefficient is negative, confirming the curve goes from top-left to bottom-right.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -4, yMax: 4,
                        xTicks: [-2, -1, 1, 2], yTicks: [-3, -2, -1, 1, 2, 3],
                        curves: [
                            { points: sample((x) => -x * x * x + 3 * x, -2.5, 2.5), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [-1.732, 0], label: '(-\\sqrt{3},\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [0, 0], label: '(0,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [1.732, 0], label: '(\\sqrt{3},\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                            { at: [-1, -2], label: '(-1,\\,-2)\\;\\text{min}', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [1, 2], label: '(1,\\,2)\\;\\text{max}', labelAnchor: 'sw', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Negative cubic; roots \\(0, \\pm\\sqrt{3}\\); max \\((1, 2)\\); min \\((-1, -2)\\).' }
    },
    {
        id: 'cg5-066', topicRef: 'cg5', topicTitle: 'Curve Sketching 66', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\ln x \\), showing the x-intercept and asymptote.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the domain', workingLatex: '\\ln x \\text{ is defined for } x > 0', explanation: 'The natural logarithm is only defined for positive values of \\(x\\). The curve exists only to the right of the \\(y\\)-axis.' },
            { stepNumber: 2, description: 'Find the \\(x\\)-intercept', workingLatex: '\\ln x = 0 \\implies x = e^0 = 1', explanation: 'Setting \\(y = 0\\) gives \\(\\ln x = 0\\), so \\(x = 1\\). The curve crosses the \\(x\\)-axis at \\((1, 0)\\).' },
            { stepNumber: 3, description: 'Identify the vertical asymptote', workingLatex: 'x \\to 0^+: \\quad \\ln x \\to -\\infty', explanation: 'As \\(x\\) approaches 0 from the right, \\(\\ln x\\) decreases without bound. The \\(y\\)-axis (\\(x = 0\\)) is a vertical asymptote.' },
            { stepNumber: 4, description: 'Describe the overall shape', workingLatex: 'x \\to +\\infty: \\quad \\ln x \\to +\\infty \\text{ (slowly)}', explanation: 'The curve is always increasing but grows more and more slowly. It has no horizontal asymptote; it increases without bound.',
                    diagram: {
                        xMin: -1, xMax: 10, yMin: -4, yMax: 3,
                        xTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9], yTicks: [-3, -2, -1, 1, 2],
                        curves: [
                            { points: sample((x) => Math.log(x), 0.05, 10), color: '#0d9488', width: 2 }
                        ],
                        lines: [
                            { from: [0, -4], to: [0, 3], color: '#888', dashed: true }
                        ],
                        points: [
                            { at: [1, 0], label: '(1,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [2.718, 1], label: '(e,\\,1)', labelAnchor: 'nw', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Increasing curve; \\(x\\)-int \\((1, 0)\\); asymptote \\(x = 0\\).' }
    },
    {
        id: 'cg5-067', topicRef: 'cg5', topicTitle: 'Curve Sketching 67', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = (x-1)^2(x+2) \\), showing all intercepts and where the curve touches the axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the roots', workingLatex: '(x-1)^2(x+2) = 0 \\implies x = 1 \\text{ or } x = -2', explanation: 'Setting each factor to zero gives two roots. The factor \\((x-1)^2\\) is a repeated factor.' },
            { stepNumber: 2, description: 'Determine touch or cross behaviour', workingLatex: 'x = 1: \\text{ repeated root (touches)}; \\quad x = -2: \\text{ single root (crosses)}', explanation: 'Since \\((x-1)\\) is squared, the curve touches the \\(x\\)-axis at \\(x = 1\\) and turns back. At \\(x = -2\\), the curve crosses through.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-intercept', workingLatex: 'x = 0: \\quad y = (0-1)^2(0+2) = (1)(2) = 2', explanation: 'Substituting \\(x = 0\\) gives the \\(y\\)-intercept at \\((0, 2)\\).' },
            { stepNumber: 4, description: 'Determine end behaviour', workingLatex: 'y = x^3 + \\cdots; \\quad x \\to +\\infty: y \\to +\\infty; \\quad x \\to -\\infty: y \\to -\\infty', explanation: 'The leading term is \\(x^3\\) with a positive coefficient. The cubic goes from bottom-left to top-right, crossing at \\((-2, 0)\\) then touching at \\((1, 0)\\).',
                    diagram: {
                        xMin: -4, xMax: 3, yMin: -5, yMax: 8,
                        xTicks: [-3, -2, -1, 1, 2], yTicks: [-4, -2, 2, 4, 6],
                        curves: [
                            { points: sample((x) => (x - 1) * (x - 1) * (x + 2), -3.2, 2.5), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [-2, 0], label: '(-2,\\,0)\\;\\text{cross}', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [1, 0], label: '(1,\\,0)\\;\\text{touch}', labelAnchor: 'nw', color: '#d4775c', r: 4 },
                            { at: [0, 2], label: '(0,\\,2)', labelAnchor: 'e', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Cubic; touches at \\((1, 0)\\); crosses at \\((-2, 0)\\); \\(y\\)-int \\((0, 2)\\).' }
    },
    {
        id: 'cg5-068', topicRef: 'cg5', topicTitle: 'Curve Sketching 68', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\sin x \\) for \\( 0 \\leq x \\leq 2\\pi \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the starting value', workingLatex: 'x = 0: \\quad \\sin 0 = 0', explanation: 'The sine curve starts at the origin when \\(x = 0\\).' },
            { stepNumber: 2, description: 'Find the maximum point', workingLatex: 'x = \\frac{\\pi}{2}: \\quad \\sin\\frac{\\pi}{2} = 1', explanation: 'The sine function reaches its maximum value of 1 at \\(x = \\pi/2\\).' },
            { stepNumber: 3, description: 'Find the next zero and minimum', workingLatex: 'x = \\pi: \\quad \\sin \\pi = 0; \\quad x = \\frac{3\\pi}{2}: \\quad \\sin\\frac{3\\pi}{2} = -1', explanation: 'The curve returns to zero at \\(x = \\pi\\), then reaches its minimum value of \\(-1\\) at \\(x = 3\\pi/2\\).' },
            { stepNumber: 4, description: 'State the endpoint', workingLatex: 'x = 2\\pi: \\quad \\sin 2\\pi = 0', explanation: 'The curve completes one full cycle, returning to 0 at \\(x = 2\\pi\\). The period of \\(\\sin x\\) is \\(2\\pi\\).',
                    diagram: {
                        xMin: -0.5, xMax: 7, yMin: -1.5, yMax: 1.5,
                        xTicks: [1.571, 3.142, 4.712, 6.283], yTicks: [-1, 1],
                        curves: [
                            { points: sample((x) => Math.sin(x), 0, 6.2832, 60), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [0, 0], label: '0', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [1.5708, 1], label: '(\\frac{\\pi}{2},\\,1)', labelAnchor: 'n', color: '#d4775c', r: 4 },
                            { at: [3.1416, 0], label: '\\pi', labelAnchor: 'n', color: '#d4775c', r: 4 },
                            { at: [4.7124, -1], label: '(\\frac{3\\pi}{2},\\,-1)', labelAnchor: 's', color: '#d4775c', r: 4 },
                            { at: [6.2832, 0], label: '2\\pi', labelAnchor: 'nw', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Sine wave from \\(0\\) to \\(2\\pi\\); max 1, min -1.' }
    },
    {
        id: 'cg5-069', topicRef: 'cg5', topicTitle: 'Curve Sketching 69', difficulty: 'Foundation',
        questionText: 'Given the graph of \\( y = f(x) \\) passes through \\( (-1, 0) \\), \\( (0, 2) \\), \\( (3, 0) \\), sketch \\( y = 2f(x) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the transformation', workingLatex: 'y = 2f(x) \\implies \\text{vertical stretch, scale factor } 2', explanation: 'Multiplying \\(f(x)\\) by 2 stretches the graph vertically. All \\(y\\)-coordinates are doubled while \\(x\\)-coordinates remain unchanged.' },
            { stepNumber: 2, description: 'Transform the \\(x\\)-intercepts', workingLatex: '(-1, 0) \\to (-1, 2 \\times 0) = (-1, 0); \\quad (3, 0) \\to (3, 2 \\times 0) = (3, 0)', explanation: 'Points on the \\(x\\)-axis have \\(y = 0\\), and 2 times 0 is still 0. So \\(x\\)-intercepts (roots) are unchanged by a vertical stretch.' },
            { stepNumber: 3, description: 'Transform the \\(y\\)-intercept', workingLatex: '(0, 2) \\to (0, 2 \\times 2) = (0, 4)', explanation: 'The \\(y\\)-intercept doubles from \\((0, 2)\\) to \\((0, 4)\\). This is the key visible change when sketching the transformed graph.',
                    diagram: {
                        xMin: -2, xMax: 4, yMin: -1, yMax: 5,
                        xTicks: [-1, 1, 2, 3], yTicks: [1, 2, 3, 4],
                        curves: [
                            { points: sample(x => -4 / 3 * (x + 1) * (x - 3), -2, 4), color: '#0d9488', width: 2 }
                        ],
                        points: [
                            { at: [-1, 0], label: '(-1,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                            { at: [0, 4], label: '(0,\\,4)', labelAnchor: 'e', color: '#d4775c', r: 4 },
                            { at: [3, 0], label: '(3,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4 }
                        ]
                    } }
        ], finalAnswer: 'Same roots; \\(y\\)-int now \\((0, 4)\\); stretched vertically by 2.' }
    },
    {
        id: 'cg5-070', topicRef: 'cg5', topicTitle: 'Curve Sketching 70', difficulty: 'Foundation',
        questionText: '[PREREQ:See Differentiation module on stationary points before attempting this question] Sketch \\( y = x^3 - 6x^2 + 9x \\), showing all intercepts and stationary points. Classify each stationary point.',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor out \\(x\\).', workingLatex: 'y = x(x^2 - 6x + 9)', explanation: 'All three terms contain \\(x\\) as a common factor.' },
            { stepNumber: 2, description: 'Factorise the quadratic.', workingLatex: 'y = x(x - 3)^2', explanation: '\\(x^2 - 6x + 9\\) is a perfect square since \\((-3)^2 = 9\\) and \\(2 \\times (-3) = -6\\). So the roots are \\(x = 0\\) (single) and \\(x = 3\\) (repeated).' },
            { stepNumber: 3, description: 'Identify root behaviour.', workingLatex: 'x = 0: \\text{ crosses (single root)}; \\quad x = 3: \\text{ touches (repeated root)}', explanation: 'A single root means the curve crosses the \\(x\\)-axis. A repeated root means it touches and turns back.' },
            { stepNumber: 4, description: 'Find the \\(y\\)-intercept.', workingLatex: 'x = 0: \\quad y = 0(0-3)^2 = 0', explanation: 'The \\(y\\)-intercept is at the origin, coinciding with the root at \\(x = 0\\).' },
            { stepNumber: 5, description: 'Differentiate to find stationary points.', workingLatex: '\\frac{dy}{dx} = 3x^2 - 12x + 9', explanation: 'Differentiating term by term: \\(x^3\\) gives \\(3x^2\\), \\(-6x^2\\) gives \\(-12x\\), and \\(9x\\) gives \\(9\\).' },
            { stepNumber: 6, description: 'Set the derivative equal to zero.', workingLatex: '3x^2 - 12x + 9 = 0 \\implies 3(x^2 - 4x + 3) = 0 \\implies 3(x-1)(x-3) = 0', explanation: 'Factor out 3, then factorise the quadratic.' },
            { stepNumber: 7, description: 'Find the stationary \\(x\\)-values.', workingLatex: 'x = 1 \\quad \\text{or} \\quad x = 3', explanation: '' },
            { stepNumber: 8, description: 'Find the \\(y\\)-coordinates of each stationary point.', workingLatex: 'y(1) = 1 - 6 + 9 = 4; \\quad y(3) = 27 - 54 + 27 = 0', explanation: 'Stationary points at \\((1, 4)\\) and \\((3, 0)\\).' },
            { stepNumber: 9, description: 'Classify using the second derivative.', workingLatex: '\\frac{d^2y}{dx^2} = 6x - 12', explanation: 'Differentiate the first derivative to get the second derivative.' },
            { stepNumber: 10, description: 'Evaluate at each stationary point.', workingLatex: 'x = 1: \\; 6(1) - 12 = -6 < 0 \\; (\\text{maximum}); \\quad x = 3: \\; 6(3) - 12 = 6 > 0 \\; (\\text{minimum})', explanation: 'Negative second derivative means the curve is concave down — a maximum. Positive means concave up — a minimum.' },
            { stepNumber: 11, description: 'Describe the sketch.', workingLatex: '\\text{Positive cubic; crosses at } x = 0, \\text{ touches at } x = 3; \\quad \\text{max } (1, 4), \\text{ min } (3, 0)', explanation: 'The curve enters from the bottom-left, crosses the origin, rises to a maximum at \\((1, 4)\\), falls to a minimum at \\((3, 0)\\) where it touches the \\(x\\)-axis, then rises to the top-right.',
                diagram: {
                    xMin: -1, xMax: 5, yMin: -1, yMax: 6,
                    xTicks: [1, 2, 3, 4], yTicks: [1, 2, 3, 4, 5],
                    curves: [
                        { points: sample(x => x * x * x - 6 * x * x + 9 * x, -0.5, 4.2), color: '#0d9488', width: 2.5 }
                    ],
                    points: [
                        { at: [0, 0], label: '(0, 0)', labelAnchor: 'ne', color: '#d4775c', r: 4 },
                        { at: [1, 4], label: '(1, 4) max', labelAnchor: 's', color: '#d4775c', r: 4 },
                        { at: [3, 0], label: '(3, 0) min', labelAnchor: 'nw', color: '#d4775c', r: 4 }
                    ]
                } }
        ], finalAnswer: 'Cubic; roots at \\(x = 0\\) (crosses) and \\(x = 3\\) (touches); max at \\((1, 4)\\); min at \\((3, 0)\\).' }
    },
];
