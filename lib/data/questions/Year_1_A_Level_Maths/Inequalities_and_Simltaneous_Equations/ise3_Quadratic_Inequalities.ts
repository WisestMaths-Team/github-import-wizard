import { Question } from "@/lib/types";

/** Helper: sample a function to generate curve points for CurveDiagramConfig */
function sample(f: (x: number) => number, xMin: number, xMax: number, n = 80): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        const y = f(x);
        if (isFinite(y)) pts.push([x, y]);
    }
    return pts;
}

/**
 * Topic: Quadratic Inequalities
 * Ref:   ise3
 *
 * 47 questions — Foundation, Standard, and Challenge difficulty
 */
export const questions: Question[] = [

    // ─── FOUNDATION: Q1–Q12 (2–3 marks each) ──────────────────────────────────

    {
        id: 'ise3-001',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 01',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 + 2x + 1 \\) and \\( y = 3x - 1 \\). Hence find the set of values of \\( x \\) for which \\( x^2 + 2x + 1 > 3x - 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -4, xMax: 4, yMin: -4, yMax: 12,
            xTicks: [-3, -2, -1, 0, 1, 2, 3],
            yTicks: [-2, 0, 2, 4, 6, 8, 10],
            curves: [
                { points: sample(x => x * x + 2 * x + 1, -4, 4), color: '#0d9488', width: 2.5, label: 'y = x^2 + 2x + 1', labelAt: [-2, 10] },
                { points: sample(x => 3 * x - 1, -4, 4), color: '#3b82f6', width: 2.5, label: 'y = 3x - 1', labelAt: [3, 5] }
            ],
            points: [],
            fills: [{ points: [...sample(x => x * x + 2 * x + 1, -4, 4, 30), ...sample(x => 3 * x - 1, 4, -4, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that all terms are on one side.',
                    workingLatex: 'x^2 + 2x + 1 > 3x - 1 \\implies x^2 - x + 2 > 0',
                    explanation: 'Subtract \\( 3x - 1 \\) from both sides to obtain a single quadratic expression.'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the discriminant.',
                    workingLatex: '\\Delta = (-1)^2 - 4(1)(2) = 1 - 8 = -7',
                    explanation: 'The discriminant is \\( b^2 - 4ac = 1 - 8 = -7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret the discriminant and the leading coefficient.',
                    workingLatex: '\\Delta = -7 < 0 \\text{ and } a = 1 > 0',
                    explanation: 'Since the discriminant is negative, the quadratic \\( x^2 - x + 2 \\) has no real roots. Since \\( a > 0 \\), the parabola is entirely above the \\( x \\)-axis, so \\( x^2 - x + 2 > 0 \\) for all real \\( x \\). The diagram confirms the parabola \\( y = x^2 + 2x + 1 \\) is always above the line \\( y = 3x - 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x \\in \\mathbb{R}',
                    explanation: 'The inequality holds for all real values of \\( x \\).',
                    diagram: {
            xMin: -4, xMax: 4, yMin: -4, yMax: 12,
            xTicks: [-3, -2, -1, 0, 1, 2, 3],
            yTicks: [-2, 0, 2, 4, 6, 8, 10],
            curves: [
                { points: sample(x => x * x + 2 * x + 1, -4, 4), color: '#0d9488', width: 2.5, label: 'y = x^2 + 2x + 1', labelAt: [-2, 10] },
                { points: sample(x => 3 * x - 1, -4, 4), color: '#3b82f6', width: 2.5, label: 'y = 3x - 1', labelAt: [3, 5] }
            ],
            points: [],
            fills: [{ points: [...sample(x => x * x + 2 * x + 1, -4, 4, 30), ...sample(x => 3 * x - 1, 4, -4, 30)], color: '#0d948844' }]
        }
                }
            ],
            finalAnswer: 'All real values of \\( x \\)'
        }
    },

    {
        id: 'ise3-002',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 02',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 9 < 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise using the difference of two squares.',
                    workingLatex: 'x^2 - 9 = (x - 3)(x + 3)',
                    explanation: 'Recognise \\( x^2 - 9 \\) as \\( x^2 - 3^2 \\), which factorises as \\( (x - 3)(x + 3) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '(x - 3)(x + 3) = 0 \\implies x = -3 \\text{ or } x = 3',
                    explanation: 'The critical values are \\( x = -3 \\) and \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch and determine where the curve is below the \\( x \\)-axis.',
                    workingLatex: 'y = (x - 3)(x + 3)',
                    explanation: 'The parabola opens upwards and is below the \\( x \\)-axis (i.e. \\( < 0 \\)) between the roots.',
                    diagram: {
                        xMin: -5, xMax: 5, yMin: -12, yMax: 8,
                        xTicks: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
                        yTicks: [-9, -6, -3, 0, 3, 6],
                        curves: [{ points: sample(x => x * x - 9, -4.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 9', labelAt: [-2, 5] }],
                        points: [
                            { at: [-3, 0], label: '(-3,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 0], label: '(3,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-3 < x < 3',
                    explanation: 'The inequality \\( x^2 - 9 < 0 \\) holds for the inner region between the roots.'
                }
            ],
            finalAnswer: '\\( -3 < x < 3 \\)'
        }
    },

    {
        id: 'ise3-003',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 03',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 - 2x \\) and \\( y = x + 4 \\). Hence find the values of \\( x \\) for which \\( x^2 - 2x \\leq x + 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 6, yMin: -3, yMax: 12,
            xTicks: [-2, -1, 0, 1, 2, 3, 4, 5],
            yTicks: [-2, 0, 2, 4, 6, 8, 10],
            curves: [
                { points: sample(x => x * x - 2 * x, -3, 6), color: '#0d9488', width: 2.5, label: 'y = x^2 - 2x', labelAt: [-2, 10] },
                { points: sample(x => x + 4, -3, 6), color: '#3b82f6', width: 2.5, label: 'y = x + 4', labelAt: [5, 6] }
            ],
            points: [
                { at: [-1, 3], label: '(-1,\\,3)', labelAnchor: 'se', color: '#d4775c', r: 4.5 },
                { at: [4, 8], label: '(4,\\,8)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => x + 4, -1, 4, 30), ...sample(x => x * x - 2 * x, -1, 4, 30).reverse()], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that all terms are on one side.',
                    workingLatex: 'x^2 - 2x \\leq x + 4 \\implies x^2 - 3x - 4 \\leq 0',
                    explanation: 'Subtract \\( x + 4 \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 4 = (x - 4)(x + 1)',
                    explanation: 'We need two numbers that multiply to give \\( -4 \\) and add to give \\( -3 \\). These are \\( -4 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values and determine the solution region.',
                    workingLatex: '(x - 4)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 4',
                    explanation: 'The critical values are \\( x = -1 \\) and \\( x = 4 \\). These are the \\( x \\)-coordinates where the two curves intersect. The parabola \\( y = x^2 - 2x \\) is on or below the line \\( y = x + 4 \\) between these values, as seen in the diagram.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-1 \\leq x \\leq 4',
                    explanation: 'The inequality \\( x^2 - 2x \\leq x + 4 \\) is satisfied for \\( -1 \\leq x \\leq 4 \\).',
                    diagram: {
            xMin: -3, xMax: 6, yMin: -3, yMax: 12,
            xTicks: [-2, -1, 0, 1, 2, 3, 4, 5],
            yTicks: [-2, 0, 2, 4, 6, 8, 10],
            curves: [
                { points: sample(x => x * x - 2 * x, -3, 6), color: '#0d9488', width: 2.5, label: 'y = x^2 - 2x', labelAt: [-2, 10] },
                { points: sample(x => x + 4, -3, 6), color: '#3b82f6', width: 2.5, label: 'y = x + 4', labelAt: [5, 6] }
            ],
            points: [
                { at: [-1, 3], label: '(-1,\\,3)', labelAnchor: 'se', color: '#d4775c', r: 4.5 },
                { at: [4, 8], label: '(4,\\,8)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => x + 4, -1, 4, 30), ...sample(x => x * x - 2 * x, -1, 4, 30).reverse()], color: '#0d948844' }]
        }
                }
            ],
            finalAnswer: '\\( -1 \\leq x \\leq 4 \\)'
        }
    },

    {
        id: 'ise3-004',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 04',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 4x \\leq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise by taking out \\( x \\).',
                    workingLatex: 'x^2 - 4x = x(x - 4)',
                    explanation: 'Both terms share a common factor of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: 'x(x - 4) = 0 \\implies x = 0 \\text{ or } x = 4',
                    explanation: 'The critical values are \\( x = 0 \\) and \\( x = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch and determine where the curve is on or below the \\( x \\)-axis.',
                    workingLatex: 'y = x(x - 4) \\leq 0',
                    explanation: 'The parabola opens upwards. It is on or below the \\( x \\)-axis (i.e. \\( \\leq 0 \\)) between the roots, including the endpoints.',
                    diagram: {
                        xMin: -2, xMax: 6, yMin: -6, yMax: 6,
                        xTicks: [-1, 0, 1, 2, 3, 4, 5],
                        yTicks: [-4, -2, 0, 2, 4],
                        curves: [{ points: sample(x => x * (x - 4), -1.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = x(x-4)', labelAt: [4.8, 4] }],
                        points: [
                            { at: [0, 0], label: '(0,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [4, 0], label: '(4,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '0 \\leq x \\leq 4',
                    explanation: 'The inequality \\( x^2 - 4x \\leq 0 \\) is satisfied between the roots, inclusive.'
                }
            ],
            finalAnswer: '\\( 0 \\leq x \\leq 4 \\)'
        }
    },

    {
        id: 'ise3-005',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 05',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = 2x + 3 \\) and \\( y = x^2 \\). Hence find the set of values of \\( x \\) for which \\( 2x + 3 > x^2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 5, yMin: -2, yMax: 14,
            xTicks: [-2, -1, 0, 1, 2, 3, 4],
            yTicks: [0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => x * x, -3, 5), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 12] },
                { points: sample(x => 2 * x + 3, -3, 5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 3', labelAt: [4, 8] }
            ],
            points: [
                { at: [-1, 1], label: '(-1,\\,1)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3, 9], label: '(3,\\,9)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => 2 * x + 3, -1, 3, 30), ...sample(x => x * x, -1, 3, 30).reverse()], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that all terms are on one side.',
                    workingLatex: '2x + 3 > x^2 \\implies 0 > x^2 - 2x - 3 \\implies x^2 - 2x - 3 < 0',
                    explanation: 'Rearrange so that the quadratic expression is on one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 2x - 3 = (x - 3)(x + 1)',
                    explanation: 'We need two numbers that multiply to give \\( -3 \\) and add to give \\( -2 \\). These are \\( -3 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values and determine the solution region.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 3',
                    explanation: 'The critical values are \\( x = -1 \\) and \\( x = 3 \\). These are the \\( x \\)-coordinates where the line and parabola intersect. The diagram shows the line \\( y = 2x + 3 \\) is above the parabola \\( y = x^2 \\) between these values.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-1 < x < 3',
                    explanation: 'The inequality \\( 2x + 3 > x^2 \\) is satisfied for \\( -1 < x < 3 \\).',
                    diagram: {
            xMin: -3, xMax: 5, yMin: -2, yMax: 14,
            xTicks: [-2, -1, 0, 1, 2, 3, 4],
            yTicks: [0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => x * x, -3, 5), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 12] },
                { points: sample(x => 2 * x + 3, -3, 5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 3', labelAt: [4, 8] }
            ],
            points: [
                { at: [-1, 1], label: '(-1,\\,1)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3, 9], label: '(3,\\,9)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => 2 * x + 3, -1, 3, 30), ...sample(x => x * x, -1, 3, 30).reverse()], color: '#0d948844' }]
        }
                }
            ],
            finalAnswer: '\\( -1 < x < 3 \\)'
        }
    },

    {
        id: 'ise3-006',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 06',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 + 3x \\leq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise by taking out \\( x \\).',
                    workingLatex: 'x^2 + 3x = x(x + 3)',
                    explanation: 'Both terms share a common factor of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: 'x(x + 3) = 0 \\implies x = 0 \\text{ or } x = -3',
                    explanation: 'The critical values are \\( x = -3 \\) and \\( x = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Determine where the curve is on or below the \\( x \\)-axis.',
                    workingLatex: 'y = x(x + 3) \\leq 0',
                    explanation: 'The parabola opens upwards. It is on or below the \\( x \\)-axis between the roots, including the endpoints.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-3 \\leq x \\leq 0',
                    explanation: 'The inequality \\( x^2 + 3x \\leq 0 \\) holds for \\( -3 \\leq x \\leq 0 \\).'
                }
            ],
            finalAnswer: '\\( -3 \\leq x \\leq 0 \\)'
        }
    },

    {
        id: 'ise3-007',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 07',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 + 1 \\) and \\( y = 2x + 4 \\). Hence find the values of \\( x \\) for which \\( x^2 + 1 \\geq 2x + 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 5, yMin: -2, yMax: 14,
            xTicks: [-2, -1, 0, 1, 2, 3, 4],
            yTicks: [0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => x * x + 1, -3, 5), color: '#0d9488', width: 2.5, label: 'y = x^2 + 1', labelAt: [-2, 12] },
                { points: sample(x => 2 * x + 4, -3, 5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 4', labelAt: [4, 9] }
            ],
            points: [
                { at: [-1, 2], label: '(-1,\\,2)', labelAnchor: 'se', color: '#d4775c', r: 4.5 },
                { at: [3, 10], label: '(3,\\,10)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => x * x + 1, -3, -1, 30), ...sample(x => 2 * x + 4, -3, -1, 30).reverse()], color: '#0d948844' },
                { points: [...sample(x => x * x + 1, 3, 5, 30), ...sample(x => 2 * x + 4, 3, 5, 30).reverse()], color: '#0d948844' }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that all terms are on one side.',
                    workingLatex: 'x^2 + 1 \\geq 2x + 4 \\implies x^2 - 2x - 3 \\geq 0',
                    explanation: 'Subtract \\( 2x + 4 \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 2x - 3 = (x - 3)(x + 1)',
                    explanation: 'We need two numbers that multiply to give \\( -3 \\) and add to give \\( -2 \\). These are \\( -3 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values and determine the solution region.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 3',
                    explanation: 'The critical values are \\( x = -1 \\) and \\( x = 3 \\). These are the \\( x \\)-coordinates where the two curves intersect. The diagram shows the parabola \\( y = x^2 + 1 \\) is on or above the line \\( y = 2x + 4 \\) in the two outer regions.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq -1 \\quad \\text{or} \\quad x \\geq 3',
                    explanation: 'The inequality \\( x^2 + 1 \\geq 2x + 4 \\) is satisfied for \\( x \\leq -1 \\) or \\( x \\geq 3 \\).',
                    diagram: {
            xMin: -3, xMax: 5, yMin: -2, yMax: 14,
            xTicks: [-2, -1, 0, 1, 2, 3, 4],
            yTicks: [0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => x * x + 1, -3, 5), color: '#0d9488', width: 2.5, label: 'y = x^2 + 1', labelAt: [-2, 12] },
                { points: sample(x => 2 * x + 4, -3, 5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 4', labelAt: [4, 9] }
            ],
            points: [
                { at: [-1, 2], label: '(-1,\\,2)', labelAnchor: 'se', color: '#d4775c', r: 4.5 },
                { at: [3, 10], label: '(3,\\,10)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => x * x + 1, -3, -1, 30), ...sample(x => 2 * x + 4, -3, -1, 30).reverse()], color: '#0d948844' },
                { points: [...sample(x => x * x + 1, 3, 5, 30), ...sample(x => 2 * x + 4, 3, 5, 30).reverse()], color: '#0d948844' }
            ]
        }
                }
            ],
            finalAnswer: '\\( x \\leq -1 \\) or \\( x \\geq 3 \\)'
        }
    },

    {
        id: 'ise3-008',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 08',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 16 \\geq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise using the difference of two squares.',
                    workingLatex: 'x^2 - 16 = (x - 4)(x + 4)',
                    explanation: 'Recognise \\( x^2 - 16 \\) as \\( x^2 - 4^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '(x - 4)(x + 4) = 0 \\implies x = -4 \\text{ or } x = 4',
                    explanation: 'The critical values are \\( x = -4 \\) and \\( x = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Determine where the curve is on or above the \\( x \\)-axis.',
                    workingLatex: 'y = (x - 4)(x + 4) \\geq 0',
                    explanation: 'The parabola opens upwards. It is on or above the \\( x \\)-axis in the two outer regions, including the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq -4 \\quad \\text{or} \\quad x \\geq 4',
                    explanation: 'The \\( \\geq \\) sign means the boundary values \\( x = -4 \\) and \\( x = 4 \\) are included.'
                }
            ],
            finalAnswer: '\\( x \\leq -4 \\) or \\( x \\geq 4 \\)'
        }
    },

    {
        id: 'ise3-009',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 09',
        difficulty: 'Foundation',
        questionText: 'Sketch the curves \\( y = x^2 - 4 \\) and \\( y = 3x \\) on the same axes. Hence find the values of \\( x \\) for which \\( x^2 - 4 > 3x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 6, yMin: -6, yMax: 16,
            xTicks: [-2, -1, 0, 1, 2, 3, 4, 5],
            yTicks: [-4, 0, 4, 8, 12],
            curves: [
                { points: sample(x => x * x - 4, -3, 6), color: '#0d9488', width: 2.5, label: 'y = x^2 - 4', labelAt: [-2, 14] },
                { points: sample(x => 3 * x, -3, 6), color: '#3b82f6', width: 2.5, label: 'y = 3x', labelAt: [5, 12] }
            ],
            points: [
                { at: [-1, -3], label: '(-1,\\,-3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [4, 12], label: '(4,\\,12)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => x * x - 4, -3, -1, 30), ...sample(x => 3 * x, -3, -1, 30).reverse()], color: '#0d948844' },
                { points: [...sample(x => x * x - 4, 4, 6, 30), ...sample(x => 3 * x, 4, 6, 30).reverse()], color: '#0d948844' }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch both curves on the same axes.',
                    workingLatex: 'y = x^2 - 4 \\quad \\text{and} \\quad y = 3x',
                    explanation: 'The parabola \\( y = x^2 - 4 \\) has vertex at \\( (0, -4) \\) and crosses the \\( x \\)-axis at \\( x = \\pm 2 \\). The line \\( y = 3x \\) passes through the origin with gradient 3. The diagram shows both curves.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange the inequality so that all terms are on one side.',
                    workingLatex: 'x^2 - 4 > 3x \\implies x^2 - 3x - 4 > 0',
                    explanation: 'Subtract \\( 3x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 4 = (x - 4)(x + 1)',
                    explanation: 'We need two numbers that multiply to give \\( -4 \\) and add to give \\( -3 \\). These are \\( -4 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the critical values and determine the solution region.',
                    workingLatex: '(x - 4)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 4',
                    explanation: 'The critical values are \\( x = -1 \\) and \\( x = 4 \\). These are the \\( x \\)-coordinates where the two curves intersect. The parabola \\( y = x^2 - 4 \\) is above the line \\( y = 3x \\) in the two outer regions.'
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: 'x < -1 \\quad \\text{or} \\quad x > 4',
                    explanation: 'The inequality \\( x^2 - 4 > 3x \\) is satisfied for \\( x < -1 \\) or \\( x > 4 \\).',
                    diagram: {
            xMin: -3, xMax: 6, yMin: -6, yMax: 16,
            xTicks: [-2, -1, 0, 1, 2, 3, 4, 5],
            yTicks: [-4, 0, 4, 8, 12],
            curves: [
                { points: sample(x => x * x - 4, -3, 6), color: '#0d9488', width: 2.5, label: 'y = x^2 - 4', labelAt: [-2, 14] },
                { points: sample(x => 3 * x, -3, 6), color: '#3b82f6', width: 2.5, label: 'y = 3x', labelAt: [5, 12] }
            ],
            points: [
                { at: [-1, -3], label: '(-1,\\,-3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [4, 12], label: '(4,\\,12)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => x * x - 4, -3, -1, 30), ...sample(x => 3 * x, -3, -1, 30).reverse()], color: '#0d948844' },
                { points: [...sample(x => x * x - 4, 4, 6, 30), ...sample(x => 3 * x, 4, 6, 30).reverse()], color: '#0d948844' }
            ]
        }
                }
            ],
            finalAnswer: '\\( x < -1 \\) or \\( x > 4 \\)'
        }
    },

    {
        id: 'ise3-010',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 10',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 2x^2 - 6x \\leq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise by taking out \\( 2x \\).',
                    workingLatex: '2x^2 - 6x = 2x(x - 3)',
                    explanation: 'Both terms share a common factor of \\( 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '2x(x - 3) = 0 \\implies x = 0 \\text{ or } x = 3',
                    explanation: 'The critical values are \\( x = 0 \\) and \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Determine where the curve is on or below the \\( x \\)-axis.',
                    workingLatex: 'y = 2x(x - 3) \\leq 0',
                    explanation: 'The parabola opens upwards (positive leading coefficient). It is on or below the \\( x \\)-axis between the roots, including the endpoints.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '0 \\leq x \\leq 3',
                    explanation: 'The inequality \\( 2x^2 - 6x \\leq 0 \\) is satisfied for \\( 0 \\leq x \\leq 3 \\).'
                }
            ],
            finalAnswer: '\\( 0 \\leq x \\leq 3 \\)'
        }
    },

    {
        id: 'ise3-011',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 11',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 - 4x + 3 \\) and \\( y = x - 1 \\). Hence find the set of values of \\( x \\) for which the parabola is below the line.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -1, xMax: 6, yMin: -2, yMax: 10,
            xTicks: [-1, 0, 1, 2, 3, 4, 5, 6],
            yTicks: [-2, 0, 2, 4, 6, 8, 10],
            curves: [
                { points: sample(x => x * x - 4 * x + 3, -1, 6), color: '#0d9488', width: 2.5, label: 'y = x^2 - 4x + 3', labelAt: [-2, 8] },
                { points: sample(x => x - 1, -1, 6), color: '#3b82f6', width: 2.5, label: 'y = x - 1', labelAt: [5.2, 1.2000000000000002] }
            ],
            points: [
                { at: [1, 0], label: '(1, 0)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 },
                { at: [4, 3], label: '(4, 3)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => x - 1, 1, 4, 30), ...sample(x => x * x - 4 * x + 3, 4, 1, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality from the diagram.',
                    workingLatex: 'x^2 - 4x + 3 < x - 1',
                    explanation: 'The parabola is below the line where \\( y_{\\text{parabola}} < y_{\\text{line}} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: 'x^2 - 4x + 3 - (x - 1) < 0 \\implies x^2 - 5x + 4 < 0',
                    explanation: 'Subtract \\( x - 1 \\) from both sides and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 5x + 4 = (x - 1)(x - 4)',
                    explanation: 'We need two numbers that multiply to \\( 4 \\) and add to \\( -5 \\). These are \\( -1 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection points and state the solution.',
                    workingLatex: '(x - 1)(x - 4) = 0 \\implies x = 1 \\text{ or } x = 4',
                    explanation: 'The curves intersect at \\( x = 1 \\) (where \\( y = 0 \\)) and \\( x = 4 \\) (where \\( y = 3 \\)). Since the combined quadratic is U-shaped, it is negative between the roots, so the parabola is below the line for \\( 1 < x < 4 \\).',
                    diagram: {
                        xMin: -1, xMax: 6, yMin: -2, yMax: 10,
                        xTicks: [-1, 0, 1, 2, 3, 4, 5, 6],
                        yTicks: [-2, 0, 2, 4, 6, 8, 10],
                        curves: [
                            { points: sample(x => x * x - 4 * x + 3, -1, 6), color: '#0d9488', width: 2.5, label: 'y = x^2-4x+3', labelAt: [-2, 8] },
                            { points: sample(x => x - 1, -1, 6), color: '#3b82f6', width: 2.5, label: 'y = x-1', labelAt: [5.2, 1.5] }
                        ],
                        points: [
                            { at: [1, 0], label: '(1,\\,0)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 },
                            { at: [4, 3], label: '(4,\\,3)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => x - 1, 1, 4, 30), ...sample(x => x * x - 4 * x + 3, 1, 4, 30).reverse()], color: '#0d948844' }]
                    }
                }
            ],
            finalAnswer: '\\( 1 < x < 4 \\)'
        }
    },

    {
        id: 'ise3-012',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 12',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 + 4x + 4 \\geq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + 4x + 4 = (x + 2)^2',
                    explanation: 'This is a perfect square: \\( (x + 2)^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the root.',
                    workingLatex: '(x + 2)^2 = 0 \\implies x = -2',
                    explanation: 'There is a single repeated root at \\( x = -2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Analyse the sign of \\( (x + 2)^2 \\).',
                    workingLatex: '(x + 2)^2 \\geq 0 \\text{ for all } x',
                    explanation: 'A square is always non-negative. Since the inequality is \\( \\geq 0 \\), it is satisfied for every real number, including \\( x = -2 \\) where it equals zero.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x \\in \\mathbb{R}',
                    explanation: 'The inequality \\( x^2 + 4x + 4 \\geq 0 \\) holds for all real values of \\( x \\).'
                }
            ],
            finalAnswer: '\\( x \\in \\mathbb{R} \\) (all real values of \\( x \\))'
        }
    },

    // ─── FOUNDATION: Q13–Q15 (3 marks each) ────────────────────────────────────

    {
        id: 'ise3-013',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 13',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 + 3 \\) and \\( y = 4x \\). Hence find the set of values of \\( x \\) for which \\( x^2 + 3 \\leq 4x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -1, xMax: 5, yMin: -1, yMax: 20,
            xTicks: [0, 1, 2, 3, 4, 5],
            yTicks: [0, 4, 8, 12, 16, 20],
            curves: [
                { points: sample(x => x * x + 3, -1, 5), color: '#0d9488', width: 2.5, label: 'y = x^2 + 3', labelAt: [-2, 19] },
                { points: sample(x => 4 * x, -0.5, 5), color: '#3b82f6', width: 2.5, label: 'y = 4x', labelAt: [4.5, 15] }
            ],
            points: [
                { at: [1, 4], label: '(1, 4)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 },
                { at: [3, 12], label: '(3, 12)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => 4 * x, 1, 3, 30), ...sample(x => x * x + 3, 3, 1, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality to standard form.',
                    workingLatex: 'x^2 + 3 \\leq 4x \\implies x^2 - 4x + 3 \\leq 0',
                    explanation: 'Subtract \\( 4x \\) from both sides. We need the parabola \\( y = x^2 + 3 \\) to be on or below the line \\( y = 4x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 4x + 3 = (x - 1)(x - 3)',
                    explanation: 'We need two numbers that multiply to \\( 3 \\) and add to \\( -4 \\). These are \\( -1 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3',
                    explanation: 'Setting each factor to zero gives the \\( x \\)-coordinates where the curves meet. At \\( x = 1 \\): \\( y = 4 \\). At \\( x = 3 \\): \\( y = 12 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution from the diagram.',
                    workingLatex: '1 \\leq x \\leq 3',
                    explanation: 'The parabola is on or below the line between the two intersection points. The inequality is \\( \\leq \\) so we include the endpoints.',
                    diagram: {
                        xMin: -1, xMax: 5, yMin: -1, yMax: 20,
                        xTicks: [-1, 0, 1, 2, 3, 4, 5],
                        yTicks: [0, 4, 8, 12, 16, 20],
                        curves: [
                            { points: sample(x => x * x + 3, -1, 5), color: '#0d9488', width: 2.5, label: 'y = x^2+3', labelAt: [-2, 19] },
                            { points: sample(x => 4 * x, -0.25, 5), color: '#3b82f6', width: 2.5, label: 'y = 4x', labelAt: [4.5, 15] }
                        ],
                        points: [
                            { at: [1, 4], label: '(1,\\,4)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 12], label: '(3,\\,12)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => 4 * x, 1, 3, 30), ...sample(x => x * x + 3, 1, 3, 30).reverse()], color: '#0d948844' }]
                    }
                }
            ],
            finalAnswer: '\\( 1 \\leq x \\leq 3 \\)',
        }
    },

    {
        id: 'ise3-014',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 14',
        difficulty: 'Foundation',
        questionText: 'Solve \\( x^2 \\geq 25 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so the right-hand side is zero.',
                    workingLatex: 'x^2 - 25 \\geq 0',
                    explanation: 'Subtract 25 from both sides to obtain a standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise as a difference of two squares.',
                    workingLatex: '(x - 5)(x + 5) \\geq 0',
                    explanation: 'Recognise \\( x^2 - 25 = (x - 5)(x + 5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: 'x = 5 \\text{ or } x = -5',
                    explanation: 'Setting each factor to zero gives the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Identify the regions where the product is non-negative.',
                    workingLatex: 'x \\leq -5 \\text{ or } x \\geq 5',
                    explanation: 'The parabola \\( y = x^2 - 25 \\) is U-shaped and is on or above the \\( x \\)-axis outside the roots. The inequality is \\( \\geq \\) so we include the endpoints.'
                }
            ],
            finalAnswer: '\\( x \\leq -5 \\text{ or } x \\geq 5 \\)',
        }
    },

    {
        id: 'ise3-015',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 15',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = -x^2 + 6x - 5 \\) and \\( y = x + 1 \\). Hence find the set of values of \\( x \\) for which the curve is above the line.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -1, xMax: 7, yMin: -5, yMax: 8,
            xTicks: [0, 1, 2, 3, 4, 5, 6],
            yTicks: [-4, -2, 0, 2, 4, 6, 8],
            curves: [
                { points: sample(x => -x * x + 6 * x - 5, -1, 7), color: '#0d9488', width: 2.5, label: 'y = -x^2 + 6x - 5', labelAt: [-2, -3] },
                { points: sample(x => x + 1, -1, 7), color: '#3b82f6', width: 2.5, label: 'y = x + 1', labelAt: [5.5, 4] }
            ],
            points: [
                { at: [2, 3], label: '(2, 3)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 },
                { at: [3, 4], label: '(3, 4)', labelAnchor: 'se', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => -x * x + 6 * x - 5, 2, 3, 30), ...sample(x => x + 1, 3, 2, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality from the diagram.',
                    workingLatex: '-x^2 + 6x - 5 > x + 1',
                    explanation: 'The curve is above the line where \\( y_{\\text{curve}} > y_{\\text{line}} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: '-x^2 + 6x - 5 - (x + 1) > 0 \\implies -x^2 + 5x - 6 > 0',
                    explanation: 'Subtract \\( x + 1 \\) from both sides and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply by \\( -1 \\) and reverse the inequality.',
                    workingLatex: 'x^2 - 5x + 6 < 0',
                    explanation: 'Multiplying both sides by \\( -1 \\) reverses the inequality sign, giving a positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 5x + 6 = (x - 2)(x - 3)',
                    explanation: 'We need two numbers that multiply to \\( 6 \\) and add to \\( -5 \\). These are \\( -2 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the intersection points and state the solution.',
                    workingLatex: '(x - 2)(x - 3) = 0 \\implies x = 2 \\text{ or } x = 3',
                    explanation: 'The curves intersect at \\( x = 2 \\) (where \\( y = 3 \\)) and \\( x = 3 \\) (where \\( y = 4 \\)). The U-shaped parabola \\( y = x^2 - 5x + 6 \\) is negative between the roots, so the original curve is above the line for \\( 2 < x < 3 \\).',
                    diagram: {
                        xMin: -1, xMax: 7, yMin: -3, yMax: 8,
                        xTicks: [-1, 0, 1, 2, 3, 4, 5, 6, 7],
                        yTicks: [-2, 0, 2, 4, 6, 8],
                        curves: [
                            { points: sample(x => -x * x + 6 * x - 5, -1, 7), color: '#0d9488', width: 2.5, label: 'y = -x^2+6x-5', labelAt: [-2, -2] },
                            { points: sample(x => x + 1, -1, 7), color: '#3b82f6', width: 2.5, label: 'y = x+1', labelAt: [5.5, 4] }
                        ],
                        points: [
                            { at: [2, 3], label: '(2,\\,3)', labelAnchor: 'se', color: '#d4775c', r: 4.5 },
                            { at: [3, 4], label: '(3,\\,4)', labelAnchor: 'sw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => -x * x + 6 * x - 5, 2, 3, 30), ...sample(x => x + 1, 2, 3, 30).reverse()], color: '#0d948844' }]
                    }
                }
            ],
            finalAnswer: '\\( 2 < x < 3 \\)',
        }
    },

    // ─── STANDARD: Q16–Q24 (4–5 marks each) ────────────────────────────────────

    {
        id: 'ise3-016',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 16',
        difficulty: 'Standard',
        questionText: 'Solve \\( -x^2 + 4x - 3 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by \\( -1 \\) and reverse the inequality.',
                    workingLatex: 'x^2 - 4x + 3 < 0',
                    explanation: 'Multiplying by a negative number reverses the inequality sign. This gives a positive leading coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 4x + 3 = (x - 1)(x - 3)',
                    explanation: 'We need two numbers that multiply to \\( 3 \\) and add to \\( -4 \\). These are \\( -1 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3',
                    explanation: 'Setting each factor to zero gives the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the parabola and identify the solution region.',
                    workingLatex: '1 < x < 3',
                    explanation: 'The parabola \\( y = x^2 - 4x + 3 \\) is U-shaped and is below the \\( x \\)-axis between the roots. Equivalently, the original \\( y = -x^2 + 4x - 3 \\) is an inverted parabola that is above the \\( x \\)-axis between \\( x = 1 \\) and \\( x = 3 \\).',
                    diagram: {
                        xMin: -1, xMax: 5, yMin: -4, yMax: 2,
                        xTicks: [-1, 0, 1, 2, 3, 4, 5],
                        yTicks: [-4, -3, -2, -1, 0, 1, 2],
                        curves: [{ points: sample(x => -x*x + 4*x - 3, -1, 5), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [1, 0], label: '(1, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [3, 0], label: '(3, 0)', labelAnchor: 'nw', color: '#d4775c' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( 1 < x < 3 \\)',
        }
    },

    {
        id: 'ise3-017',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 17',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 \\) and \\( y = 3x + 10 \\). Hence find the set of values of \\( x \\) for which \\( x^2 < 3x + 10 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -4, xMax: 7, yMin: -5, yMax: 30,
            xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
            yTicks: [0, 5, 10, 15, 20, 25],
            curves: [
                { points: sample(x => x * x, -4, 7), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 28] },
                { points: sample(x => 3 * x + 10, -4, 7), color: '#3b82f6', width: 2.5, label: 'y = 3x + 10', labelAt: [5.5, 22] }
            ],
            points: [
                { at: [-2, 4], label: '(-2, 4)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [5, 25], label: '(5, 25)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => 3 * x + 10, -2, 5, 30), ...sample(x => x * x, 5, -2, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality to standard form.',
                    workingLatex: 'x^2 < 3x + 10 \\implies x^2 - 3x - 10 < 0',
                    explanation: 'Subtract \\( 3x + 10 \\) from both sides. We need the parabola \\( y = x^2 \\) to be below the line \\( y = 3x + 10 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 10 = (x - 5)(x + 2)',
                    explanation: 'We need two numbers that multiply to \\( -10 \\) and add to \\( -3 \\). These are \\( -5 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 5)(x + 2) = 0 \\implies x = 5 \\text{ or } x = -2',
                    explanation: 'Setting each factor to zero gives the \\( x \\)-coordinates where the curves meet. At \\( x = -2 \\): \\( y = 4 \\). At \\( x = 5 \\): \\( y = 25 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Identify the solution region from the diagram.',
                    workingLatex: '-2 < x < 5',
                    explanation: 'The U-shaped quadratic \\( y = x^2 - 3x - 10 \\) is negative between the roots. From the diagram, the parabola \\( y = x^2 \\) lies below the line \\( y = 3x + 10 \\) between the two intersection points.',
                    diagram: {
                        xMin: -4, xMax: 7, yMin: -5, yMax: 30,
                        xTicks: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
                        yTicks: [0, 5, 10, 15, 20, 25, 30],
                        curves: [
                            { points: sample(x => x * x, -4, 7), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 28] },
                            { points: sample(x => 3 * x + 10, -4, 7), color: '#3b82f6', width: 2.5, label: 'y = 3x+10', labelAt: [6, 25] }
                        ],
                        points: [
                            { at: [-2, 4], label: '(-2,\\,4)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [5, 25], label: '(5,\\,25)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => 3 * x + 10, -2, 5, 30), ...sample(x => x * x, -2, 5, 30).reverse()], color: '#0d948844' }]
                    }
                }
            ],
            finalAnswer: '\\( -2 < x < 5 \\)',
        }
    },

    {
        id: 'ise3-018',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 18',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 < 3x + 10 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so the right-hand side is zero.',
                    workingLatex: 'x^2 - 3x - 10 < 0',
                    explanation: 'Subtract \\( 3x + 10 \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 10 = (x - 5)(x + 2)',
                    explanation: 'We need two numbers that multiply to \\( -10 \\) and add to \\( -3 \\). These are \\( -5 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: '(x - 5)(x + 2) = 0 \\implies x = 5 \\text{ or } x = -2',
                    explanation: 'Setting each factor to zero gives the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the parabola and identify the solution set.',
                    workingLatex: '-2 < x < 5',
                    explanation: 'The parabola \\( y = x^2 - 3x - 10 \\) is U-shaped. It is below the \\( x \\)-axis between its roots.',
                    diagram: {
                        xMin: -4, xMax: 7, yMin: -14, yMax: 10,
                        xTicks: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
                        yTicks: [-12, -8, -4, 0, 4, 8],
                        curves: [{ points: sample(x => x*x - 3*x - 10, -4, 7), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [-2, 0], label: '(-2, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [5, 0], label: '(5, 0)', labelAnchor: 'nw', color: '#d4775c' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( -2 < x < 5 \\)',
        }
    },

    {
        id: 'ise3-019',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 19',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = 2x^2 + x \\) and \\( y = 6 \\). Hence find the set of values of \\( x \\) for which \\( 2x^2 + x \\geq 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -4, xMax: 4, yMin: -2, yMax: 14,
            xTicks: [-3, -2, -1, 0, 1, 2, 3],
            yTicks: [-2, 0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => 2 * x * x + x, -3.5, 3.5), color: '#0d9488', width: 2.5, label: 'y = 2x^2 + x', labelAt: [-2, 12] },
                { points: sample(() => 6, -3.5, 3.5), color: '#3b82f6', width: 2.5, label: 'y = 6', labelAt: [3, 4] }
            ],
            points: [
                { at: [-2, 6], label: '(-2,\\,6)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [1.5, 6], label: '(\\tfrac{3}{2},\\,6)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => 2 * x * x + x, -3.5, -2, 30), ...sample(() => 6, -3.5, -2, 30).reverse()], color: '#0d948844' },
                { points: [...sample(x => 2 * x * x + x, 1.5, 3.5, 30), ...sample(() => 6, 1.5, 3.5, 30).reverse()], color: '#0d948844' }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: '2x^2 + x \\geq 6 \\implies 2x^2 + x - 6 \\geq 0',
                    explanation: 'Subtract 6 from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '2x^2 + x - 6 = (2x - 3)(x + 2)',
                    explanation: 'Check: \\( (2x - 3)(x + 2) = 2x^2 + 4x - 3x - 6 = 2x^2 + x - 6 \\). Correct.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(2x - 3)(x + 2) = 0 \\implies x = \\tfrac{3}{2} \\text{ or } x = -2',
                    explanation: 'Setting the factorised expression to zero gives the \\( x \\)-coordinates where the two curves meet. When \\( x = -2 \\), \\( y = 6 \\); when \\( x = \\frac{3}{2} \\), \\( y = 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Determine where the parabola is on or above the line from the diagram.',
                    workingLatex: '(2x - 3)(x + 2) \\geq 0',
                    explanation: 'From the diagram, the parabola \\( y = 2x^2 + x \\) is on or above the line \\( y = 6 \\) in the two outer regions: to the left of \\( x = -2 \\) and to the right of \\( x = \\frac{3}{2} \\).',
                    diagram: {
                        xMin: -4, xMax: 4, yMin: -2, yMax: 14,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3],
                        yTicks: [-2, 0, 2, 4, 6, 8, 10, 12],
                        curves: [
                            { points: sample(x => 2 * x * x + x, -3.5, 3.5), color: '#0d9488', width: 2.5, label: 'y = 2x^2 + x', labelAt: [-2, 12] },
                            { points: sample(() => 6, -3.5, 3.5), color: '#3b82f6', width: 2.5, label: 'y = 6', labelAt: [3, 4] }
                        ],
                        points: [
                            { at: [-2, 6], label: '(-2,\\,6)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [1.5, 6], label: '(\\tfrac{3}{2},\\,6)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [
                            { points: [...sample(x => 2 * x * x + x, -3.5, -2, 30), ...sample(() => 6, -3.5, -2, 30).reverse()], color: '#0d948844' },
                            { points: [...sample(x => 2 * x * x + x, 1.5, 3.5, 30), ...sample(() => 6, 1.5, 3.5, 30).reverse()], color: '#0d948844' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: 'x \\leq -2 \\quad \\text{or} \\quad x \\geq \\tfrac{3}{2}',
                    explanation: 'The inequality \\( 2x^2 + x \\geq 6 \\) is satisfied in the two outer regions where the parabola lies on or above the line, including the endpoints.'
                }
            ],
            finalAnswer: '\\( x \\leq -2 \\) or \\( x \\geq \\tfrac{3}{2} \\)'
        }
    },

    {
        id: 'ise3-020',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 20',
        difficulty: 'Standard',
        questionText: 'Solve \\( 6x^2 - x - 2 < 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '6x^2 - x - 2 = (2x + 1)(3x - 2)',
                    explanation: 'We need factors of \\( 6x^2 \\) and \\( -2 \\) that give a middle term of \\( -x \\). Check: \\( (2x + 1)(3x - 2) = 6x^2 - 4x + 3x - 2 = 6x^2 - x - 2 \\). Correct.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the critical values.',
                    workingLatex: '2x + 1 = 0 \\implies x = -\\tfrac{1}{2}, \\quad 3x - 2 = 0 \\implies x = \\tfrac{2}{3}',
                    explanation: 'Setting each factor to zero gives the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Consider the shape of the parabola.',
                    workingLatex: 'y = 6x^2 - x - 2',
                    explanation: 'The coefficient of \\( x^2 \\) is positive (\\( 6 > 0 \\)), so the parabola is U-shaped.'
                },
                {
                    stepNumber: 4,
                    description: 'Identify the solution set.',
                    workingLatex: '-\\tfrac{1}{2} < x < \\tfrac{2}{3}',
                    explanation: 'A U-shaped parabola is below the \\( x \\)-axis between its roots. Since the inequality is strict (\\( < \\)), the endpoints are excluded.'
                }
            ],
            finalAnswer: '\\( -\\tfrac{1}{2} < x < \\tfrac{2}{3} \\)',
        }
    },

    {
        id: 'ise3-021',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 21',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) for which \\( x^2 - 3x - 4 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 4 = (x - 4)(x + 1)',
                    explanation: 'We need two numbers that multiply to \\( -4 \\) and add to \\( -3 \\). These are \\( -4 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the critical values.',
                    workingLatex: '(x - 4)(x + 1) = 0 \\implies x = 4 \\text{ or } x = -1',
                    explanation: 'Setting each factor to zero gives the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Consider the shape of the parabola.',
                    workingLatex: 'y = x^2 - 3x - 4',
                    explanation: 'The coefficient of \\( x^2 \\) is positive, so the parabola is U-shaped.',
                    diagram: {
                        xMin: -3, xMax: 6, yMin: -8, yMax: 10,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
                        yTicks: [-8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
                        curves: [{ points: sample(x => x*x - 3*x - 4, -3, 6), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [-1, 0], label: '(-1, 0)', labelAnchor: 'ne', color: '#d4775c' },
                            { at: [4, 0], label: '(4, 0)', labelAnchor: 'nw', color: '#d4775c' }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'Identify the solution set.',
                    workingLatex: '\\{x : x < -1\\} \\cup \\{x : x > 4\\}',
                    explanation: 'The parabola is above the \\( x \\)-axis (positive) outside the roots. Since the inequality is strict (\\( > \\)), the roots are excluded.'
                }
            ],
            finalAnswer: '\\( \\{x : x < -1\\} \\cup \\{x : x > 4\\} \\)',
        }
    },

    {
        id: 'ise3-022',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 22',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) for which \\( 4x^2 - 12x + 9 \\leq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '4x^2 - 12x + 9 = (2x - 3)^2',
                    explanation: 'Recognise this as a perfect square: \\( (2x)^2 - 2 \\times 2x \\times 3 + 3^2 = (2x - 3)^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Note the key property of a square.',
                    workingLatex: '(2x - 3)^2 \\geq 0 \\text{ for all } x',
                    explanation: 'A square is always non-negative. It can never be strictly less than zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Determine when the square equals zero.',
                    workingLatex: '(2x - 3)^2 = 0 \\implies 2x - 3 = 0 \\implies x = \\tfrac{3}{2}',
                    explanation: 'The only value where \\( (2x - 3)^2 \\leq 0 \\) is when \\( (2x - 3)^2 = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x = \\tfrac{3}{2}',
                    explanation: 'The inequality \\( (2x - 3)^2 \\leq 0 \\) is satisfied only at the single point \\( x = \\tfrac{3}{2} \\), because the square is zero there and positive everywhere else.'
                }
            ],
            finalAnswer: '\\( x = \\tfrac{3}{2} \\)',
        }
    },

    {
        id: 'ise3-023',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 23',
        difficulty: 'Standard',
        questionText: 'Show that \\( x^2 + 4x + 5 > 0 \\) for all real values of \\( x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Complete the square.',
                    workingLatex: 'x^2 + 4x + 5 = (x + 2)^2 - 4 + 5 = (x + 2)^2 + 1',
                    explanation: 'Halve the coefficient of \\( x \\): half of 4 is 2. Write \\( (x + 2)^2 \\) and subtract \\( 2^2 = 4 \\), then add the constant term 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Note that the squared term is non-negative.',
                    workingLatex: '(x + 2)^2 \\geq 0 \\text{ for all real } x',
                    explanation: 'Any real number squared is always greater than or equal to zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 1 to both sides of the observation.',
                    workingLatex: '(x + 2)^2 + 1 \\geq 0 + 1 = 1',
                    explanation: 'Adding a positive constant to a non-negative quantity gives a strictly positive result.'
                },
                {
                    stepNumber: 4,
                    description: 'State the conclusion.',
                    workingLatex: '(x + 2)^2 + 1 \\geq 1 > 0',
                    explanation: 'Since \\( (x + 2)^2 + 1 \\geq 1 \\) and \\( 1 > 0 \\), we have \\( x^2 + 4x + 5 > 0 \\) for all real \\( x \\), as required.'
                }
            ],
            finalAnswer: '\\( (x + 2)^2 + 1 \\geq 1 > 0 \\text{ for all real } x \\text{, as required.} \\)',
        }
    },

    {
        id: 'ise3-024',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 24',
        difficulty: 'Standard',
        questionText: 'Show that \\( 2x^2 - 8x + 11 > 0 \\) for all real values of \\( x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out the coefficient of \\( x^2 \\) from the first two terms.',
                    workingLatex: '2x^2 - 8x + 11 = 2(x^2 - 4x) + 11',
                    explanation: 'Take out a factor of 2 from the \\( x^2 \\) and \\( x \\) terms to prepare for completing the square.'
                },
                {
                    stepNumber: 2,
                    description: 'Complete the square inside the bracket.',
                    workingLatex: '2(x^2 - 4x) + 11 = 2\\bigl((x - 2)^2 - 4\\bigr) + 11',
                    explanation: 'Halve the coefficient of \\( x \\) inside the bracket: half of \\( -4 \\) is \\( -2 \\). Write \\( (x - 2)^2 \\) and subtract \\( (-2)^2 = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: '2(x - 2)^2 - 8 + 11 = 2(x - 2)^2 + 3',
                    explanation: 'Distribute the 2 through the \\( -4 \\) to get \\( -8 \\), then combine with \\( +11 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Argue that the expression is always positive.',
                    workingLatex: '(x - 2)^2 \\geq 0 \\implies 2(x - 2)^2 \\geq 0 \\implies 2(x - 2)^2 + 3 \\geq 3',
                    explanation: 'The squared term is non-negative; multiplying by 2 keeps it non-negative; adding 3 ensures the whole expression is at least 3.'
                },
                {
                    stepNumber: 5,
                    description: 'State the conclusion.',
                    workingLatex: '2(x - 2)^2 + 3 \\geq 3 > 0',
                    explanation: 'Since \\( 2(x - 2)^2 + 3 \\geq 3 > 0 \\), we have \\( 2x^2 - 8x + 11 > 0 \\) for all real \\( x \\), as required.'
                }
            ],
            finalAnswer: '\\( 2(x - 2)^2 + 3 \\geq 3 > 0 \\text{ for all real } x \\text{, as required.} \\)',
        }
    },

    // ─── STANDARD (Q25–Q27): Combined / careful-algebra quadratic inequalities ──

    {
        id: 'ise3-025',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 25',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) which satisfy both \\( x^2 - 7x + 10 > 0 \\) and \\( 2x + 1 < 9 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic in the first inequality.',
                    workingLatex: 'x^2 - 7x + 10 = (x - 2)(x - 5)',
                    explanation: 'We need two numbers that multiply to \\( 10 \\) and add to \\( -7 \\): these are \\( -2 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( (x - 2)(x - 5) > 0 \\).',
                    workingLatex: 'x < 2 \\quad \\text{or} \\quad x > 5',
                    explanation: 'The parabola \\( y = (x-2)(x-5) \\) is U-shaped and positive (above the \\( x \\)-axis) outside the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the linear inequality \\( 2x + 1 < 9 \\).',
                    workingLatex: '2x < 8 \\implies x < 4',
                    explanation: 'Subtract 1 from both sides, then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection of the two solution sets.',
                    workingLatex: '(x < 2 \\text{ or } x > 5) \\;\\cap\\; (x < 4)',
                    explanation: 'We need values of \\( x \\) satisfying both inequalities simultaneously.'
                },
                {
                    stepNumber: 5,
                    description: 'Determine the final answer.',
                    workingLatex: 'x < 2',
                    explanation: 'The region \\( x > 5 \\) does not overlap with \\( x < 4 \\), so only \\( x < 2 \\) survives the intersection.',
                    diagram: {
                        xMin: -1, xMax: 7, yMin: -4, yMax: 12,
                        xTicks: [0, 1, 2, 3, 4, 5, 6],
                        yTicks: [0, 5, 10],
                        curves: [{ points: sample(x => (x - 2) * (x - 5), -1, 7), color: '#0d9488', width: 2.5, label: 'y = (x-2)(x-5)', labelAt: [6, 4] }],
                        points: [
                            { at: [2, 0], label: '2', labelAnchor: 'n', color: '#d4775c' },
                            { at: [5, 0], label: '5', labelAnchor: 'n', color: '#d4775c' },
                            { at: [4, 0], label: '4', labelAnchor: 's', color: '#2563eb' }
                        ],
                        lines: [{ from: [4, -4], to: [4, 12], color: '#2563eb', dashed: true, label: 'x = 4', labelAt: [4.3, 11] }]
                    }
                }
            ],
            finalAnswer: '\\( x < 2 \\)'
        }
    },

    {
        id: 'ise3-026',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 26',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) which satisfy both \\( x^2 - 4x - 5 < 0 \\) and \\( x > 2 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 4x - 5 = (x - 5)(x + 1)',
                    explanation: 'We need two numbers that multiply to \\( -5 \\) and add to \\( -4 \\): these are \\( -5 \\) and \\( +1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( (x - 5)(x + 1) < 0 \\).',
                    workingLatex: '-1 < x < 5',
                    explanation: 'The parabola \\( y = (x-5)(x+1) \\) is U-shaped and negative (below the \\( x \\)-axis) between the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'State the second inequality.',
                    workingLatex: 'x > 2',
                    explanation: 'This is already solved.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection of the two solution sets.',
                    workingLatex: '(-1 < x < 5) \\;\\cap\\; (x > 2)',
                    explanation: 'We need the overlap of both regions on the number line.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final answer.',
                    workingLatex: '2 < x < 5',
                    explanation: 'The more restrictive lower bound is \\( x > 2 \\) and the upper bound remains \\( x < 5 \\).'
                }
            ],
            finalAnswer: '\\( 2 < x < 5 \\)'
        }
    },

    {
        id: 'ise3-027',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 27',
        difficulty: 'Standard',
        questionText: 'Solve \\( (2x - 1)(x + 3) > (x + 3)(x - 2) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move everything to one side.',
                    workingLatex: '(2x - 1)(x + 3) - (x + 3)(x - 2) > 0',
                    explanation: 'Never divide both sides by an expression such as \\( (x + 3) \\) that could be zero or negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor out the common factor \\( (x + 3) \\).',
                    workingLatex: '(x + 3)\\bigl[(2x - 1) - (x - 2)\\bigr] > 0',
                    explanation: 'Both terms share the factor \\( (x + 3) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the bracket.',
                    workingLatex: '(2x - 1) - (x - 2) = 2x - 1 - x + 2 = x + 1',
                    explanation: 'Expand and collect like terms carefully.'
                },
                {
                    stepNumber: 4,
                    description: 'State the factorised inequality.',
                    workingLatex: '(x + 3)(x + 1) > 0',
                    explanation: 'The critical values are \\( x = -3 \\) and \\( x = -1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve using a sign diagram or sketch.',
                    workingLatex: 'x < -3 \\quad \\text{or} \\quad x > -1',
                    explanation: 'The parabola \\( y = (x+3)(x+1) \\) is U-shaped. The product is positive outside the roots.'
                }
            ],
            finalAnswer: '\\( x < -3 \\;\\text{ or }\\; x > -1 \\)'
        }
    },

    // ─── CHALLENGE (Q28–Q35): Discriminant, substitution, rational inequalities ─

    {
        id: 'ise3-028',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 28',
        difficulty: 'Challenge',
        questionText: 'Find the range of values of \\( k \\) for which the equation \\( x^2 + kx + 9 = 0 \\) has no real roots.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the condition for no real roots.',
                    workingLatex: '\\text{No real roots} \\iff b^2 - 4ac < 0',
                    explanation: 'A quadratic \\( ax^2 + bx + c = 0 \\) has no real roots when the discriminant is strictly negative.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify \\( a \\), \\( b \\), \\( c \\).',
                    workingLatex: 'a = 1, \\quad b = k, \\quad c = 9',
                    explanation: 'Read off the coefficients from \\( x^2 + kx + 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the discriminant inequality.',
                    workingLatex: 'k^2 - 4(1)(9) < 0 \\implies k^2 - 36 < 0',
                    explanation: 'Substitute into \\( b^2 - 4ac < 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(k - 6)(k + 6) < 0',
                    explanation: 'Difference of two squares: \\( k^2 - 36 = (k - 6)(k + 6) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve the inequality.',
                    workingLatex: '-6 < k < 6',
                    explanation: 'The product of two linear factors is negative between the roots.'
                }
            ],
            finalAnswer: '\\( -6 < k < 6 \\)'
        }
    },

    {
        id: 'ise3-029',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 29',
        difficulty: 'Challenge',
        questionText: 'Find the values of \\( k \\) for which \\( kx^2 + 4x + k > 0 \\) for all real values of \\( x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the conditions for a quadratic to be always positive.',
                    workingLatex: '\\text{Always positive} \\iff a > 0 \\text{ and } b^2 - 4ac < 0',
                    explanation: 'The parabola must open upwards and never touch or cross the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the first condition: positive leading coefficient.',
                    workingLatex: 'k > 0',
                    explanation: 'The coefficient of \\( x^2 \\) must be positive for the parabola to open upwards.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the discriminant condition.',
                    workingLatex: '4^2 - 4(k)(k) < 0 \\implies 16 - 4k^2 < 0',
                    explanation: 'Here \\( a = k \\), \\( b = 4 \\), \\( c = k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( 16 - 4k^2 < 0 \\).',
                    workingLatex: '4k^2 > 16 \\implies k^2 > 4 \\implies k < -2 \\text{ or } k > 2',
                    explanation: 'Rearrange and solve the quadratic inequality in \\( k \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Combine the two conditions.',
                    workingLatex: 'k > 0 \\;\\cap\\; (k < -2 \\text{ or } k > 2) \\implies k > 2',
                    explanation: 'The intersection of \\( k > 0 \\) with \\( k < -2 \\text{ or } k > 2 \\) is \\( k > 2 \\).'
                }
            ],
            finalAnswer: '\\( k > 2 \\)'
        }
    },

    {
        id: 'ise3-030',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 30',
        difficulty: 'Challenge',
        questionText: 'The equation \\( x^2 + (p - 3)x + p = 0 \\) has two distinct real roots. Find the range of values of \\( p \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the condition for two distinct real roots.',
                    workingLatex: 'b^2 - 4ac > 0',
                    explanation: 'The discriminant must be strictly positive for two distinct real roots.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the coefficients.',
                    workingLatex: 'a = 1, \\quad b = p - 3, \\quad c = p',
                    explanation: 'Read from the equation \\( x^2 + (p - 3)x + p = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write and expand the discriminant.',
                    workingLatex: '(p - 3)^2 - 4(1)(p) > 0 \\implies p^2 - 6p + 9 - 4p > 0',
                    explanation: 'Expand \\( (p - 3)^2 = p^2 - 6p + 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: 'p^2 - 10p + 9 > 0',
                    explanation: 'Combine like terms: \\( -6p - 4p = -10p \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise.',
                    workingLatex: '(p - 1)(p - 9) > 0',
                    explanation: 'Two numbers multiplying to \\( 9 \\) and adding to \\( -10 \\): \\( -1 \\) and \\( -9 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve the inequality.',
                    workingLatex: 'p < 1 \\quad \\text{or} \\quad p > 9',
                    explanation: 'The product of two linear factors is positive outside the roots.'
                }
            ],
            finalAnswer: '\\( p < 1 \\;\\text{ or }\\; p > 9 \\)'
        }
    },

    {
        id: 'ise3-031',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 31',
        difficulty: 'Challenge',
        questionText: 'Solve \\( x^4 - 5x^2 + 4 < 0 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the substitution \\( u = x^2 \\).',
                    workingLatex: 'u^2 - 5u + 4 < 0',
                    explanation: 'Replace \\( x^4 \\) with \\( u^2 \\) and \\( x^2 \\) with \\( u \\) to obtain a standard quadratic inequality.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic in \\( u \\).',
                    workingLatex: '(u - 1)(u - 4) < 0',
                    explanation: 'Two numbers multiplying to \\( 4 \\) and adding to \\( -5 \\): \\( -1 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( u \\).',
                    workingLatex: '1 < u < 4',
                    explanation: 'The product is negative between the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute back \\( u = x^2 \\).',
                    workingLatex: '1 < x^2 < 4',
                    explanation: 'Now solve these compound inequalities for \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( x^2 > 1 \\) and \\( x^2 < 4 \\) separately.',
                    workingLatex: 'x^2 > 1 \\implies x < -1 \\text{ or } x > 1; \\qquad x^2 < 4 \\implies -2 < x < 2',
                    explanation: 'Each inequality gives a region on the number line.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the intersection of both conditions.',
                    workingLatex: '-2 < x < -1 \\quad \\text{or} \\quad 1 < x < 2',
                    explanation: 'Combine the two conditions: \\( x \\) must satisfy both simultaneously.',
                    diagram: {
                        xMin: -3, xMax: 3, yMin: -3, yMax: 10,
                        xTicks: [-2, -1, 0, 1, 2],
                        yTicks: [0, 4, 8],
                        curves: [{ points: sample(x => x * x * x * x - 5 * x * x + 4, -3, 3), color: '#0d9488', width: 2.5, label: 'y = x^4 - 5x^2 + 4', labelAt: [-2, 8] }],
                        points: [
                            { at: [-2, 0], label: '-2', labelAnchor: 'n', color: '#d4775c' },
                            { at: [-1, 0], label: '-1', labelAnchor: 'n', color: '#d4775c' },
                            { at: [1, 0], label: '1', labelAnchor: 'n', color: '#d4775c' },
                            { at: [2, 0], label: '2', labelAnchor: 'n', color: '#d4775c' }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( -2 < x < -1 \\;\\text{ or }\\; 1 < x < 2 \\)'
        }
    },

    {
        id: 'ise3-032',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 32',
        difficulty: 'Challenge',
        questionText: 'Solve \\( \\dfrac{x + 1}{x - 2} > 0 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the critical values.',
                    workingLatex: 'x + 1 = 0 \\implies x = -1; \\qquad x - 2 = 0 \\implies x = 2',
                    explanation: 'The expression equals zero when \\( x = -1 \\) and is undefined when \\( x = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Draw up a sign table with three regions.',
                    workingLatex: '\\begin{array}{c|ccc} & x < -1 & -1 < x < 2 & x > 2 \\\\ \\hline x + 1 & - & + & + \\\\ x - 2 & - & - & + \\\\ \\hline \\dfrac{x+1}{x-2} & + & - & + \\end{array}',
                    explanation: 'Test the sign of each factor in each interval determined by the critical values.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify where the fraction is positive.',
                    workingLatex: '\\frac{x+1}{x-2} > 0 \\text{ when } x < -1 \\text{ or } x > 2',
                    explanation: 'The fraction is positive in the first and third regions of the sign table.'
                },
                {
                    stepNumber: 4,
                    description: 'Check the boundary values.',
                    workingLatex: 'x \\neq 2 \\text{ (undefined)}, \\quad x = -1 \\text{ gives } \\frac{0}{-3} = 0 \\text{ (not } > 0\\text{)}',
                    explanation: 'Since the inequality is strict (\\( > \\)), we exclude both critical values.'
                },
                {
                    stepNumber: 5,
                    description: 'State the final answer.',
                    workingLatex: 'x < -1 \\quad \\text{or} \\quad x > 2',
                    explanation: 'Both boundary points are excluded from the solution set.'
                }
            ],
            finalAnswer: '\\( x < -1 \\;\\text{ or }\\; x > 2 \\)'
        }
    },

    {
        id: 'ise3-033',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 33',
        difficulty: 'Challenge',
        questionText: 'Find the range of values of \\( a \\) for which \\( y = ax^2 + 6x + a \\) is always positive for all real values of \\( x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the conditions for \\( y \\) to be always positive.',
                    workingLatex: '\\text{Need: } a > 0 \\text{ (opens upwards) and } \\Delta < 0 \\text{ (no real roots)}',
                    explanation: 'An upward-opening parabola with no real roots lies entirely above the \\( x \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 6^2 - 4(a)(a) = 36 - 4a^2',
                    explanation: 'Here \\( b = 6 \\), and the leading coefficient and constant term are both \\( a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set up the discriminant inequality.',
                    workingLatex: '36 - 4a^2 < 0 \\implies 4a^2 > 36 \\implies a^2 > 9',
                    explanation: 'The discriminant must be negative for no real roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( a^2 > 9 \\).',
                    workingLatex: 'a < -3 \\quad \\text{or} \\quad a > 3',
                    explanation: 'Take square roots, remembering both the positive and negative possibilities.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine with the first condition \\( a > 0 \\).',
                    workingLatex: 'a > 0 \\;\\cap\\; (a < -3 \\text{ or } a > 3) \\implies a > 3',
                    explanation: 'Only \\( a > 3 \\) satisfies both \\( a > 0 \\) and \\( a^2 > 9 \\).'
                }
            ],
            finalAnswer: '\\( a > 3 \\)'
        }
    },

    {
        id: 'ise3-034',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 34',
        difficulty: 'Challenge',
        questionText: 'Solve simultaneously: \\( x^2 + 2x - 3 \\leq 0 \\) and \\( x^2 - x - 6 \\geq 0 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the first quadratic.',
                    workingLatex: 'x^2 + 2x - 3 = (x + 3)(x - 1)',
                    explanation: 'Two numbers multiplying to \\( -3 \\) and adding to \\( 2 \\): \\( +3 \\) and \\( -1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( (x + 3)(x - 1) \\leq 0 \\).',
                    workingLatex: '-3 \\leq x \\leq 1',
                    explanation: 'The U-shaped parabola is non-positive between (and including) the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the second quadratic.',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'Two numbers multiplying to \\( -6 \\) and adding to \\( -1 \\): \\( -3 \\) and \\( +2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( (x - 3)(x + 2) \\geq 0 \\).',
                    workingLatex: 'x \\leq -2 \\quad \\text{or} \\quad x \\geq 3',
                    explanation: 'The U-shaped parabola is non-negative outside (and including) the roots.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the intersection of the two solution sets.',
                    workingLatex: '(-3 \\leq x \\leq 1) \\;\\cap\\; (x \\leq -2 \\text{ or } x \\geq 3)',
                    explanation: 'The region \\( x \\geq 3 \\) does not overlap with \\( x \\leq 1 \\). The region \\( x \\leq -2 \\) overlaps with \\( -3 \\leq x \\leq 1 \\) giving \\( -3 \\leq x \\leq -2 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the solution.',
                    workingLatex: '-3 \\leq x \\leq -2',
                    explanation: 'This is the set of all values satisfying both inequalities simultaneously.'
                }
            ],
            finalAnswer: '\\( -3 \\leq x \\leq -2 \\)'
        }
    },

    {
        id: 'ise3-035',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 35',
        difficulty: 'Challenge',
        questionText: '(a) Solve \\( 2x^2 - 7x + 3 \\leq 0 \\).\n\n(b) Solve \\( 3x - 2 > x + 4 \\).\n\n(c) Hence find the set of values of \\( x \\) which satisfy both inequalities.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Factorise \\( 2x^2 - 7x + 3 \\).',
                    workingLatex: '2x^2 - 7x + 3 = (2x - 1)(x - 3)',
                    explanation: 'Find factors: \\( (2x - 1)(x - 3) = 2x^2 - 6x - x + 3 = 2x^2 - 7x + 3 \\). Correct.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Solve \\( (2x - 1)(x - 3) \\leq 0 \\).',
                    workingLatex: '\\tfrac{1}{2} \\leq x \\leq 3',
                    explanation: 'The parabola opens upwards, so it is non-positive between the roots \\( x = \\frac{1}{2} \\) and \\( x = 3 \\). Include the endpoints since the inequality is \\( \\leq \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Solve \\( 3x - 2 > x + 4 \\).',
                    workingLatex: '3x - x > 4 + 2 \\implies 2x > 6 \\implies x > 3',
                    explanation: 'Collect \\( x \\) terms on the left and constants on the right.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find the intersection of the two solution sets.',
                    workingLatex: '\\bigl(\\tfrac{1}{2} \\leq x \\leq 3\\bigr) \\;\\cap\\; (x > 3)',
                    explanation: 'We need values satisfying both part (a) and part (b).'
                },
                {
                    stepNumber: 5,
                    description: '(c) Determine the overlap.',
                    workingLatex: '\\text{No values of } x \\text{ satisfy both inequalities.}',
                    explanation: 'Part (a) requires \\( x \\leq 3 \\) while part (b) requires \\( x > 3 \\). These conditions are mutually exclusive, so there are no solutions.',
                    diagram: {
                        xMin: -1, xMax: 5, yMin: -4, yMax: 6,
                        xTicks: [0, 1, 2, 3, 4],
                        yTicks: [-2, 0, 2, 4, 6],
                        curves: [{ points: sample(x => 2 * x * x - 7 * x + 3, -1, 5), color: '#0d9488', width: 2.5, label: 'y = 2x^2 - 7x + 3', labelAt: [-2, 5] }],
                        points: [
                            { at: [0.5, 0], label: '1/2', labelAnchor: 'n', color: '#d4775c' },
                            { at: [3, 0], label: '3', labelAnchor: 'n', color: '#d4775c' }
                        ],
                        lines: [{ from: [3, -4], to: [3, 6], color: '#2563eb', dashed: true, label: 'x = 3', labelAt: [3.3, 5] }]
                    }
                }
            ],
            finalAnswer: '\\( \\text{No solution (empty set)} \\)'
        }
    },

    // ─── FOUNDATION: Q36–Q47 (2–3 marks each) ────────────────────────────────

    {
        id: 'ise3-036',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 36',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 3x - 10 > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 10 = (x - 5)(x + 2)',
                    explanation: 'We need two numbers that multiply to give \\( -10 \\) and add to give \\( -3 \\). These are \\( -5 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '(x - 5)(x + 2) = 0 \\implies x = 5 \\text{ or } x = -2',
                    explanation: 'The critical values are \\( x = -2 \\) and \\( x = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the parabola and determine where the curve is above the \\( x \\)-axis.',
                    workingLatex: 'y = (x - 5)(x + 2) > 0',
                    explanation: 'The parabola opens upwards and is above the \\( x \\)-axis (i.e. \\( > 0 \\)) in the two outer regions.',
                    diagram: {
                        xMin: -4, xMax: 7, yMin: -14, yMax: 10,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
                        yTicks: [-12, -8, -4, 0, 4, 8],
                        curves: [{ points: sample(x => (x - 5) * (x + 2), -3.5, 6.5), color: '#0d9488', width: 2.5, label: 'y = (x-5)(x+2)', labelAt: [5.8, 8] }],
                        points: [
                            { at: [-2, 0], label: '(-2,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [5, 0], label: '(5,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x < -2 \\quad \\text{or} \\quad x > 5',
                    explanation: 'The inequality \\( x^2 - 3x - 10 > 0 \\) is satisfied in the two outer regions.'
                }
            ],
            finalAnswer: '\\( x < -2 \\) or \\( x > 5 \\)'
        }
    },

    {
        id: 'ise3-037',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 37',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x + 5 \\) and \\( y = x^2 - x \\). Hence find the set of values of \\( x \\) for which \\( x + 5 > x^2 - x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 5, yMin: -2, yMax: 15,
            xTicks: [-2, -1, 0, 1, 2, 3, 4],
            yTicks: [0, 5, 10, 15],
            curves: [
                { points: sample(x => x * x - x, -3, 5), color: '#0d9488', width: 2.5, label: 'y = x^2 - x', labelAt: [-2, 13] },
                { points: sample(x => x + 5, -3, 5), color: '#3b82f6', width: 2.5, label: 'y = x + 5', labelAt: [4, 6.5] }
            ],
            points: [
                { at: [1 - Math.sqrt(6), 6 - Math.sqrt(6)], label: '(1\\!-\\!\\sqrt{6},\\,...)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [1 + Math.sqrt(6), 6 + Math.sqrt(6)], label: '(1\\!+\\!\\sqrt{6},\\,...)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => x + 5, 1 - Math.sqrt(6), 1 + Math.sqrt(6), 30), ...sample(x => x * x - x, 1 + Math.sqrt(6), 1 - Math.sqrt(6), 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality to standard form.',
                    workingLatex: 'x + 5 > x^2 - x \\implies 0 > x^2 - 2x - 5',
                    explanation: 'Subtract \\( x + 5 \\) from both sides: \\( x^2 - x - x - 5 < 0 \\), i.e. \\( x^2 - 2x - 5 < 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use the quadratic formula to find the roots.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 20}}{2} = \\frac{2 \\pm \\sqrt{24}}{2} = \\frac{2 \\pm 2\\sqrt{6}}{2} = 1 \\pm \\sqrt{6}',
                    explanation: 'The discriminant is \\( (-2)^2 - 4(1)(-5) = 4 + 20 = 24 \\). So the roots are \\( x = 1 - \\sqrt{6} \\) and \\( x = 1 + \\sqrt{6} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the solution from the diagram.',
                    workingLatex: '1 - \\sqrt{6} < x < 1 + \\sqrt{6}',
                    explanation: 'The U-shaped parabola \\( y = x^2 - 2x - 5 \\) is negative between its roots. From the diagram, the line \\( y = x + 5 \\) lies above the parabola \\( y = x^2 - x \\) between the intersection points.',
                    diagram: {
                        xMin: -3, xMax: 5, yMin: -3, yMax: 22,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
                        yTicks: [0, 4, 8, 12, 16, 20],
                        curves: [
                            { points: sample(x => x * x - x, -3, 5), color: '#0d9488', width: 2.5, label: 'y = x^2-x', labelAt: [-2, 14] },
                            { points: sample(x => x + 5, -3, 5), color: '#3b82f6', width: 2.5, label: 'y = x+5', labelAt: [4.2, 6.5] }
                        ],
                        points: [
                            { at: [-1.449, 3.551], label: '(1\\!-\\!\\sqrt{6},\\,...)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3.449, 8.449], label: '(1\\!+\\!\\sqrt{6},\\,...)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => x + 5, 1 - Math.sqrt(6), 1 + Math.sqrt(6), 30), ...sample(x => x * x - x, 1 - Math.sqrt(6), 1 + Math.sqrt(6), 30).reverse()], color: '#0d948844' }]
                    }
                }
            ],
            finalAnswer: '\\( 1 - \\sqrt{6} < x < 1 + \\sqrt{6} \\)'
        }
    },

    {
        id: 'ise3-038',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 38',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 + x - 12 < 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + x - 12 = (x + 4)(x - 3)',
                    explanation: 'We need two numbers that multiply to give \\( -12 \\) and add to give \\( 1 \\). These are \\( 4 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '(x + 4)(x - 3) = 0 \\implies x = -4 \\text{ or } x = 3',
                    explanation: 'The critical values are \\( x = -4 \\) and \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the parabola and determine where the curve is below the \\( x \\)-axis.',
                    workingLatex: 'y = (x + 4)(x - 3) < 0',
                    explanation: 'The parabola opens upwards and is below the \\( x \\)-axis (i.e. \\( < 0 \\)) between the roots.',
                    diagram: {
                        xMin: -6, xMax: 5, yMin: -14, yMax: 10,
                        xTicks: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4],
                        yTicks: [-12, -8, -4, 0, 4, 8],
                        curves: [{ points: sample(x => (x + 4) * (x - 3), -5.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = (x+4)(x-3)', labelAt: [3.5, 8] }],
                        points: [
                            { at: [-4, 0], label: '(-4,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 0], label: '(3,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-4 < x < 3',
                    explanation: 'The inequality \\( x^2 + x - 12 < 0 \\) holds for the inner region between the roots.'
                }
            ],
            finalAnswer: '\\( -4 < x < 3 \\)'
        }
    },

    {
        id: 'ise3-039',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 39',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 - 1 \\) and \\( y = 2x + 2 \\). Hence find the set of values of \\( x \\) for which \\( x^2 - 1 > 2x + 2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 5, yMin: -3, yMax: 14,
            xTicks: [-2, -1, 0, 1, 2, 3, 4],
            yTicks: [-2, 0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => x * x - 1, -2.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 1', labelAt: [-2, 13] },
                { points: sample(x => 2 * x + 2, -2.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 2', labelAt: [4, 7] }
            ],
            fills: [
                { points: [...sample(x => x * x - 1, -2.5, -1, 30), ...sample(x => 2 * x + 2, -1, -2.5, 30)], color: '#0d948844' },
                { points: [...sample(x => x * x - 1, 3, 4.5, 30), ...sample(x => 2 * x + 2, 4.5, 3, 30)], color: '#0d948844' }
            ],
            points: [
                { at: [-1, 0], label: '(-1,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3, 8], label: '(3,\\,8)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: 'x^2 - 1 > 2x + 2 \\implies x^2 - 2x - 3 > 0',
                    explanation: 'Subtract \\( 2x + 2 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 2x - 3 = (x - 3)(x + 1)',
                    explanation: 'We need two numbers that multiply to give \\( -3 \\) and add to give \\( -2 \\). These are \\( -3 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 3',
                    explanation: 'Setting the factorised expression to zero gives the \\( x \\)-coordinates where the two curves meet. When \\( x = -1 \\), \\( y = 0 \\); when \\( x = 3 \\), \\( y = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Determine where the parabola is above the line from the diagram.',
                    workingLatex: '(x - 3)(x + 1) > 0',
                    explanation: 'From the diagram, the parabola \\( y = x^2 - 1 \\) is above the line \\( y = 2x + 2 \\) in the two outer regions: to the left of \\( x = -1 \\) and to the right of \\( x = 3 \\).',
                    diagram: {
                        xMin: -3, xMax: 5, yMin: -3, yMax: 14,
                        xTicks: [-2, -1, 0, 1, 2, 3, 4],
                        yTicks: [-2, 0, 2, 4, 6, 8, 10, 12],
                        curves: [
                            { points: sample(x => x * x - 1, -2.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 1', labelAt: [-2, 13] },
                            { points: sample(x => 2 * x + 2, -2.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 2', labelAt: [4, 7] }
                        ],
                        fills: [
                            { points: [...sample(x => x * x - 1, -2.5, -1, 30), ...sample(x => 2 * x + 2, -1, -2.5, 30)], color: '#0d948844' },
                            { points: [...sample(x => x * x - 1, 3, 4.5, 30), ...sample(x => 2 * x + 2, 4.5, 3, 30)], color: '#0d948844' }
                        ],
                        points: [
                            { at: [-1, 0], label: '(-1,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 8], label: '(3,\\,8)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: 'x < -1 \\quad \\text{or} \\quad x > 3',
                    explanation: 'The inequality \\( x^2 - 1 > 2x + 2 \\) is satisfied in the two outer regions where the parabola lies above the line.'
                }
            ],
            finalAnswer: '\\( x < -1 \\) or \\( x > 3 \\)'
        }
    },

    {
        id: 'ise3-040',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 40',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 + 6x + 5 > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + 6x + 5 = (x + 1)(x + 5)',
                    explanation: 'We need two numbers that multiply to give \\( 5 \\) and add to give \\( 6 \\). These are \\( 1 \\) and \\( 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '(x + 1)(x + 5) = 0 \\implies x = -1 \\text{ or } x = -5',
                    explanation: 'The critical values are \\( x = -5 \\) and \\( x = -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Determine where the curve is above the \\( x \\)-axis.',
                    workingLatex: 'y = (x + 1)(x + 5) > 0',
                    explanation: 'The parabola opens upwards and is above the \\( x \\)-axis in the two outer regions (strict inequality, so roots are excluded).'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x < -5 \\quad \\text{or} \\quad x > -1',
                    explanation: 'The inequality \\( x^2 + 6x + 5 > 0 \\) is satisfied when \\( x < -5 \\) or \\( x > -1 \\).'
                }
            ],
            finalAnswer: '\\( x < -5 \\) or \\( x > -1 \\)'
        }
    },

    {
        id: 'ise3-041',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 41',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 + 2 \\) and \\( y = 3x + 4 \\). Hence find the set of values of \\( x \\) for which \\( x^2 + 2 \\leq 3x + 4 \\). Give your answer in surd form.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -2, xMax: 5, yMin: -1, yMax: 20,
            xTicks: [-1, 0, 1, 2, 3, 4],
            yTicks: [0, 4, 8, 12, 16],
            curves: [
                { points: sample(x => x * x + 2, -1.5, 4.8), color: '#0d9488', width: 2.5, label: 'y = x^2 + 2', labelAt: [-2, 18] },
                { points: sample(x => 3 * x + 4, -1.5, 4.8), color: '#3b82f6', width: 2.5, label: 'y = 3x + 4', labelAt: [4.2, 13.600000000000001] }
            ],
            points: [
                { at: [-0.56, 2.31], label: '(\\approx\\!-0.6,\\; 2.3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3.56, 14.69], label: '(\\approx 3.6,\\; 14.7)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => 3 * x + 4, (3 - Math.sqrt(17)) / 2, (3 + Math.sqrt(17)) / 2, 30), ...sample(x => x * x + 2, (3 + Math.sqrt(17)) / 2, (3 - Math.sqrt(17)) / 2, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: 'x^2 + 2 \\leq 3x + 4 \\implies x^2 - 3x - 2 \\leq 0',
                    explanation: 'Subtract \\( 3x + 4 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the quadratic formula to find the roots.',
                    workingLatex: 'x = \\frac{3 \\pm \\sqrt{9 + 8}}{2} = \\frac{3 \\pm \\sqrt{17}}{2}',
                    explanation: 'With \\( a = 1 \\), \\( b = -3 \\), \\( c = -2 \\), the discriminant is \\( 9 + 8 = 17 \\). Since 17 is not a perfect square, the roots are irrational.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the intersection points from the diagram.',
                    workingLatex: 'x = \\frac{3 - \\sqrt{17}}{2} \\approx -0.56 \\quad \\text{and} \\quad x = \\frac{3 + \\sqrt{17}}{2} \\approx 3.56',
                    explanation: 'These are the \\( x \\)-coordinates where the parabola and the line meet, as seen on the diagram.'
                },
                {
                    stepNumber: 4,
                    description: 'Determine where the parabola is on or below the line from the diagram.',
                    workingLatex: 'x^2 - 3x - 2 \\leq 0',
                    explanation: 'From the diagram, the parabola \\( y = x^2 + 2 \\) is on or below the line \\( y = 3x + 4 \\) between the two intersection points.',
                    diagram: {
                        xMin: -2, xMax: 5, yMin: -1, yMax: 20,
                        xTicks: [-1, 0, 1, 2, 3, 4],
                        yTicks: [0, 4, 8, 12, 16],
                        curves: [
                            { points: sample(x => x * x + 2, -1.5, 4.8), color: '#0d9488', width: 2.5, label: 'y = x^2 + 2', labelAt: [-2, 18] },
                            { points: sample(x => 3 * x + 4, -1.5, 4.8), color: '#3b82f6', width: 2.5, label: 'y = 3x + 4', labelAt: [4.2, 13.600000000000001] }
                        ],
                        points: [
                            { at: [-0.56, 2.31], label: '(\\approx\\!-0.6,\\; 2.3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3.56, 14.69], label: '(\\approx 3.6,\\; 14.7)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => 3 * x + 4, (3 - Math.sqrt(17)) / 2, (3 + Math.sqrt(17)) / 2, 30), ...sample(x => x * x + 2, (3 + Math.sqrt(17)) / 2, (3 - Math.sqrt(17)) / 2, 30)], color: '#0d948844' }]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: '\\frac{3 - \\sqrt{17}}{2} \\leq x \\leq \\frac{3 + \\sqrt{17}}{2}',
                    explanation: 'The inequality \\( x^2 + 2 \\leq 3x + 4 \\) is satisfied between the two intersection points, inclusive.'
                }
            ],
            finalAnswer: '\\( \\dfrac{3 - \\sqrt{17}}{2} \\leq x \\leq \\dfrac{3 + \\sqrt{17}}{2} \\)'
        }
    },

    {
        id: 'ise3-042',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 42',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 4x^2 - 1 > 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise using the difference of two squares.',
                    workingLatex: '4x^2 - 1 = (2x - 1)(2x + 1)',
                    explanation: 'Recognise \\( 4x^2 - 1 \\) as \\( (2x)^2 - 1^2 \\), which factorises as \\( (2x - 1)(2x + 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '(2x - 1)(2x + 1) = 0 \\implies x = \\tfrac{1}{2} \\text{ or } x = -\\tfrac{1}{2}',
                    explanation: 'The critical values are \\( x = -\\frac{1}{2} \\) and \\( x = \\frac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the parabola and determine where the curve is above the \\( x \\)-axis.',
                    workingLatex: 'y = (2x - 1)(2x + 1) > 0',
                    explanation: 'The parabola opens upwards and is above the \\( x \\)-axis in the two outer regions (strict inequality, so roots are excluded).',
                    diagram: {
                        xMin: -2, xMax: 2, yMin: -2, yMax: 6,
                        xTicks: [-1, 0, 1],
                        yTicks: [-1, 0, 1, 2, 3, 4, 5],
                        curves: [{ points: sample(x => (2 * x - 1) * (2 * x + 1), -1.5, 1.5), color: '#0d9488', width: 2.5, label: 'y = (2x-1)(2x+1)', labelAt: [1.2, 5] }],
                        points: [
                            { at: [-0.5, 0], label: '(-\\frac{1}{2},\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [0.5, 0], label: '(\\frac{1}{2},\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: 'x < -\\tfrac{1}{2} \\quad \\text{or} \\quad x > \\tfrac{1}{2}',
                    explanation: 'The inequality \\( 4x^2 - 1 > 0 \\) is satisfied when \\( x < -\\frac{1}{2} \\) or \\( x > \\frac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\( x < -\\dfrac{1}{2} \\) or \\( x > \\dfrac{1}{2} \\)'
        }
    },

    {
        id: 'ise3-043',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 43',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 \\) and \\( y = 4x - 3 \\). Hence find the values of \\( x \\) for which \\( y = x^2 \\) is strictly below \\( y = 4x - 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -1, xMax: 5, yMin: -3, yMax: 18,
            xTicks: [0, 1, 2, 3, 4],
            yTicks: [0, 4, 8, 12, 16],
            curves: [
                { points: sample(x => x * x, -0.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 14] },
                { points: sample(x => 4 * x - 3, -0.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 4x - 3', labelAt: [4.2, 12] }
            ],
            fills: [
                { points: [...sample(x => 4 * x - 3, 1, 3, 30), ...sample(x => x * x, 3, 1, 30)], color: '#0d948844' }
            ],
            points: [
                { at: [1, 1], label: '(1,\\,1)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3, 9], label: '(3,\\,9)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality by comparing the two curves.',
                    workingLatex: 'x^2 < 4x - 3',
                    explanation: 'We need the values of \\( x \\) where the parabola \\( y = x^2 \\) is strictly below the line \\( y = 4x - 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to get zero on one side.',
                    workingLatex: 'x^2 - 4x + 3 < 0',
                    explanation: 'Subtract \\( 4x - 3 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 4x + 3 = (x - 1)(x - 3)',
                    explanation: 'We need two numbers that multiply to give \\( 3 \\) and add to give \\( -4 \\). These are \\( -1 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3',
                    explanation: 'The curves intersect at \\( x = 1 \\) (where \\( y = 1 \\)) and \\( x = 3 \\) (where \\( y = 9 \\)), as shown on the diagram.'
                },
                {
                    stepNumber: 5,
                    description: 'Determine where the parabola is below the line using the diagram.',
                    workingLatex: '(x - 1)(x - 3) < 0',
                    explanation: 'From the diagram, the parabola \\( y = x^2 \\) lies below the line \\( y = 4x - 3 \\) between the two intersection points.',
                    diagram: {
                        xMin: -1, xMax: 5, yMin: -3, yMax: 18,
                        xTicks: [0, 1, 2, 3, 4],
                        yTicks: [0, 4, 8, 12, 16],
                        curves: [
                            { points: sample(x => x * x, -0.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 14] },
                            { points: sample(x => 4 * x - 3, -0.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 4x - 3', labelAt: [4.2, 12] }
                        ],
                        fills: [
                            { points: [...sample(x => 4 * x - 3, 1, 3, 30), ...sample(x => x * x, 3, 1, 30)], color: '#0d948844' }
                        ],
                        points: [
                            { at: [1, 1], label: '(1,\\,1)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 9], label: '(3,\\,9)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 6,
                    description: 'State the solution.',
                    workingLatex: '1 < x < 3',
                    explanation: 'The parabola \\( y = x^2 \\) is strictly below the line \\( y = 4x - 3 \\) for \\( 1 < x < 3 \\).'
                }
            ],
            finalAnswer: '\\( 1 < x < 3 \\)'
        }
    },

    {
        id: 'ise3-044',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 44',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5x^2 - 20x \\leq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise by taking out the common factor.',
                    workingLatex: '5x^2 - 20x = 5x(x - 4)',
                    explanation: 'Both terms share a common factor of \\( 5x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots.',
                    workingLatex: '5x(x - 4) = 0 \\implies x = 0 \\text{ or } x = 4',
                    explanation: 'The critical values are \\( x = 0 \\) and \\( x = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Determine where the curve is on or below the \\( x \\)-axis.',
                    workingLatex: 'y = 5x(x - 4) \\leq 0',
                    explanation: 'The parabola opens upwards (positive leading coefficient) and is on or below the \\( x \\)-axis between the roots, including the endpoints.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '0 \\leq x \\leq 4',
                    explanation: 'The inequality \\( 5x^2 - 20x \\leq 0 \\) is satisfied between the roots, inclusive.'
                }
            ],
            finalAnswer: '\\( 0 \\leq x \\leq 4 \\)'
        }
    },

    {
        id: 'ise3-045',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 45',
        difficulty: 'Standard',
        questionText: 'Sketch the curves \\( y = x^2 - 2x - 3 \\) and \\( y = 2x + 1 \\) on the same axes. Find the set of values of \\( x \\) for which the parabola is above the line. Give your answer in surd form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 7, yMin: -5, yMax: 20,
            xTicks: [-2, -1, 0, 1, 2, 3, 4, 5, 6],
            yTicks: [-4, 0, 4, 8, 12, 16],
            curves: [
                { points: sample(x => x * x - 2 * x - 3, -2.5, 6.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 2x - 3', labelAt: [-2, 12] },
                { points: sample(x => 2 * x + 1, -2.5, 6.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 1', labelAt: [6, 10] }
            ],
            fills: [
                { points: [...sample(x => x * x - 2 * x - 3, -2.5, 2 - 2 * Math.sqrt(2), 30), ...sample(x => 2 * x + 1, 2 - 2 * Math.sqrt(2), -2.5, 30)], color: '#0d948844' },
                { points: [...sample(x => x * x - 2 * x - 3, 2 + 2 * Math.sqrt(2), 6.5, 30), ...sample(x => 2 * x + 1, 6.5, 2 + 2 * Math.sqrt(2), 30)], color: '#0d948844' }
            ],
            points: [
                { at: [-0.83, -0.66], label: '(2-2\\sqrt{2},\\,5-4\\sqrt{2})', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [4.83, 10.66], label: '(2+2\\sqrt{2},\\,5+4\\sqrt{2})', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality by comparing the two curves.',
                    workingLatex: 'x^2 - 2x - 3 > 2x + 1',
                    explanation: 'We need the values of \\( x \\) where the parabola \\( y = x^2 - 2x - 3 \\) is strictly above the line \\( y = 2x + 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to get zero on one side.',
                    workingLatex: 'x^2 - 4x - 4 > 0',
                    explanation: 'Subtract \\( 2x + 1 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quadratic formula to find the roots.',
                    workingLatex: 'x = \\frac{4 \\pm \\sqrt{16 + 16}}{2} = \\frac{4 \\pm \\sqrt{32}}{2} = \\frac{4 \\pm 4\\sqrt{2}}{2} = 2 \\pm 2\\sqrt{2}',
                    explanation: 'With \\( a = 1 \\), \\( b = -4 \\), \\( c = -4 \\), the discriminant is \\( 16 + 16 = 32 \\). Since \\( \\sqrt{32} = 4\\sqrt{2} \\), the roots simplify to \\( 2 \\pm 2\\sqrt{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Identify the intersection points.',
                    workingLatex: 'x = 2 - 2\\sqrt{2} \\approx -0.83 \\quad \\text{and} \\quad x = 2 + 2\\sqrt{2} \\approx 4.83',
                    explanation: 'These are the \\( x \\)-coordinates where the parabola and the line meet.'
                },
                {
                    stepNumber: 5,
                    description: 'Determine where the parabola is above the line using the diagram.',
                    workingLatex: 'x^2 - 4x - 4 > 0',
                    explanation: 'Since the coefficient of \\( x^2 \\) is positive, the quadratic \\( x^2 - 4x - 4 \\) is positive in the two outer regions. From the diagram, the parabola lies above the line when \\( x < 2 - 2\\sqrt{2} \\) or \\( x > 2 + 2\\sqrt{2} \\).',
                    diagram: {
                        xMin: -3, xMax: 7, yMin: -5, yMax: 20,
                        xTicks: [-2, -1, 0, 1, 2, 3, 4, 5, 6],
                        yTicks: [-4, 0, 4, 8, 12, 16],
                        curves: [
                            { points: sample(x => x * x - 2 * x - 3, -2.5, 6.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 2x - 3', labelAt: [-2, 12] },
                            { points: sample(x => 2 * x + 1, -2.5, 6.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 1', labelAt: [6, 10] }
                        ],
                        fills: [
                            { points: [...sample(x => x * x - 2 * x - 3, -2.5, 2 - 2 * Math.sqrt(2), 30), ...sample(x => 2 * x + 1, 2 - 2 * Math.sqrt(2), -2.5, 30)], color: '#0d948844' },
                            { points: [...sample(x => x * x - 2 * x - 3, 2 + 2 * Math.sqrt(2), 6.5, 30), ...sample(x => 2 * x + 1, 6.5, 2 + 2 * Math.sqrt(2), 30)], color: '#0d948844' }
                        ],
                        points: [
                            { at: [-0.83, -0.66], label: '(2-2\\sqrt{2},\\,5-4\\sqrt{2})', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [4.83, 10.66], label: '(2+2\\sqrt{2},\\,5+4\\sqrt{2})', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 6,
                    description: 'State the solution.',
                    workingLatex: 'x < 2 - 2\\sqrt{2} \\quad \\text{or} \\quad x > 2 + 2\\sqrt{2}',
                    explanation: 'The parabola is above the line in the two outer regions beyond the intersection points.'
                }
            ],
            finalAnswer: '\\( x < 2 - 2\\sqrt{2} \\) or \\( x > 2 + 2\\sqrt{2} \\)'
        }
    },

    {
        id: 'ise3-046',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 46',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( x^2 - 12x + 36 > 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 12x + 36 = (x - 6)^2',
                    explanation: 'Recognise this as a perfect square: \\( (x - 6)^2 = x^2 - 12x + 36 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the repeated root.',
                    workingLatex: '(x - 6)^2 = 0 \\implies x = 6',
                    explanation: 'The quadratic has a single repeated root at \\( x = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Determine where \\( (x - 6)^2 > 0 \\).',
                    workingLatex: '(x - 6)^2 > 0 \\text{ for all } x \\neq 6',
                    explanation: 'A square is always non-negative, and it is strictly positive for all values except \\( x = 6 \\) where it equals zero. So the strict inequality \\( > 0 \\) is satisfied for all real \\( x \\) except \\( x = 6 \\).'
                }
            ],
            finalAnswer: '\\( x \\in \\mathbb{R},\\; x \\neq 6 \\)'
        }
    },

    {
        id: 'ise3-047',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 47',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = 6 - x^2 \\) and \\( y = x \\). Hence find the set of values of \\( x \\) for which \\( 6 - x^2 \\geq x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -5, xMax: 4, yMin: -4, yMax: 8,
            xTicks: [-4, -3, -2, -1, 0, 1, 2, 3],
            yTicks: [-2, 0, 2, 4, 6],
            curves: [
                { points: sample(x => 6 - x * x, -4, 3.5), color: '#0d9488', width: 2.5, label: 'y = 6 - x^2', labelAt: [-3.5, -3] },
                { points: sample(x => x, -4, 3.5), color: '#3b82f6', width: 2.5, label: 'y = x', labelAt: [3, 0] }
            ],
            fills: [
                { points: [...sample(x => 6 - x * x, -3, 2, 30), ...sample(x => x, 2, -3, 30)], color: '#0d948844' }
            ],
            points: [
                { at: [-3, -3], label: '(-3,\\,-3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [2, 2], label: '(2,\\,2)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: '6 - x^2 \\geq x \\implies -x^2 - x + 6 \\geq 0',
                    explanation: 'Subtract \\( x \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply both sides by \\( -1 \\) and reverse the inequality.',
                    workingLatex: 'x^2 + x - 6 \\leq 0',
                    explanation: 'Multiplying by a negative number reverses the inequality sign. This gives a positive leading coefficient, making it easier to analyse.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + x - 6 = (x + 3)(x - 2)',
                    explanation: 'We need two numbers that multiply to give \\( -6 \\) and add to give \\( 1 \\). These are \\( 3 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection points.',
                    workingLatex: '(x + 3)(x - 2) = 0 \\implies x = -3 \\text{ or } x = 2',
                    explanation: 'The curves intersect at \\( x = -3 \\) (where \\( y = -3 \\)) and \\( x = 2 \\) (where \\( y = 2 \\)), as shown on the diagram.'
                },
                {
                    stepNumber: 5,
                    description: 'Determine where the inverted parabola is on or above the line using the diagram.',
                    workingLatex: '(x + 3)(x - 2) \\leq 0',
                    explanation: 'From the diagram, the inverted parabola \\( y = 6 - x^2 \\) is on or above the line \\( y = x \\) between the two intersection points.',
                    diagram: {
                        xMin: -5, xMax: 4, yMin: -4, yMax: 8,
                        xTicks: [-4, -3, -2, -1, 0, 1, 2, 3],
                        yTicks: [-2, 0, 2, 4, 6],
                        curves: [
                            { points: sample(x => 6 - x * x, -4, 3.5), color: '#0d9488', width: 2.5, label: 'y = 6 - x^2', labelAt: [-3.5, -3] },
                            { points: sample(x => x, -4, 3.5), color: '#3b82f6', width: 2.5, label: 'y = x', labelAt: [3, 0] }
                        ],
                        fills: [
                            { points: [...sample(x => 6 - x * x, -3, 2, 30), ...sample(x => x, 2, -3, 30)], color: '#0d948844' }
                        ],
                        points: [
                            { at: [-3, -3], label: '(-3,\\,-3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [2, 2], label: '(2,\\,2)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 6,
                    description: 'State the solution.',
                    workingLatex: '-3 \\leq x \\leq 2',
                    explanation: 'The inequality \\( 6 - x^2 \\geq x \\) is satisfied between the two intersection points, inclusive.'
                }
            ],
            finalAnswer: '\\( -3 \\leq x \\leq 2 \\)'
        }
    },

    // ─── STANDARD: Q48–Q59 (4–5 marks each) ───────────────────────────────────

    {
        id: 'ise3-048',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 48',
        difficulty: 'Standard',
        questionText: 'Solve \\( -x^2 + 2x + 8 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by \\( -1 \\) and reverse the inequality.',
                    workingLatex: 'x^2 - 2x - 8 < 0',
                    explanation: 'Multiplying by a negative number reverses the inequality sign. This gives a positive leading coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 2x - 8 = (x - 4)(x + 2)',
                    explanation: 'We need two numbers that multiply to \\( -8 \\) and add to \\( -2 \\). These are \\( -4 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: '(x - 4)(x + 2) = 0 \\implies x = 4 \\text{ or } x = -2',
                    explanation: 'Setting each factor to zero gives the roots \\( x = 4 \\) and \\( x = -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the parabola and identify the solution region.',
                    workingLatex: '-2 < x < 4',
                    explanation: 'The parabola \\( y = x^2 - 2x - 8 \\) is U-shaped and is below the \\( x \\)-axis between the roots. Equivalently, the original \\( y = -x^2 + 2x + 8 \\) is an inverted parabola that is above the \\( x \\)-axis between \\( x = -2 \\) and \\( x = 4 \\).',
                    diagram: {
                        xMin: -4, xMax: 6, yMin: -6, yMax: 12,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
                        yTicks: [-4, 0, 4, 8],
                        curves: [{ points: sample(x => -x * x + 2 * x + 8, -3.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = -x^2 + 2x + 8', labelAt: [-2, 6] }],
                        points: [
                            { at: [-2, 0], label: '(-2,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [4, 0], label: '(4,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( -2 < x < 4 \\)'
        }
    },

    {
        id: 'ise3-049',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 49',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 - 2x \\) and \\( y = x + 4 \\). Hence find the values of \\( x \\) for which \\( x^2 - 2x > x + 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -3, xMax: 6, yMin: -3, yMax: 14,
            xTicks: [-2, -1, 0, 1, 2, 3, 4, 5],
            yTicks: [-2, 0, 2, 4, 6, 8, 10, 12],
            curves: [
                { points: sample(x => x * x - 2 * x, -2.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 2x', labelAt: [-2, 12] },
                { points: sample(x => x + 4, -2.5, 5.5), color: '#3b82f6', width: 2.5, label: 'y = x + 4', labelAt: [4.5, 6] }
            ],
            points: [
                { at: [-1, 3], label: '(-1,\\,3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [4, 8], label: '(4,\\,8)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => x * x - 2 * x, -2.5, -1, 30), ...sample(x => x + 4, -1, -2.5, 30)], color: '#0d948844' },
                { points: [...sample(x => x * x - 2 * x, 4, 5.5, 30), ...sample(x => x + 4, 5.5, 4, 30)], color: '#0d948844' }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: 'x^2 - 2x > x + 4 \\implies x^2 - 3x - 4 > 0',
                    explanation: 'Subtract \\( x + 4 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 3x - 4 = (x - 4)(x + 1)',
                    explanation: 'We need two numbers that multiply to give \\( -4 \\) and add to give \\( -3 \\). These are \\( -4 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 4)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 4',
                    explanation: 'Setting the factorised expression to zero gives the \\( x \\)-coordinates where the two curves meet. When \\( x = -1 \\), \\( y = 3 \\); when \\( x = 4 \\), \\( y = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Determine where the parabola is above the line from the diagram.',
                    workingLatex: '(x - 4)(x + 1) > 0',
                    explanation: 'From the diagram, the parabola \\( y = x^2 - 2x \\) is above the line \\( y = x + 4 \\) in the two outer regions: to the left of \\( x = -1 \\) and to the right of \\( x = 4 \\).',
                    diagram: {
                        xMin: -3, xMax: 6, yMin: -3, yMax: 14,
                        xTicks: [-2, -1, 0, 1, 2, 3, 4, 5],
                        yTicks: [-2, 0, 2, 4, 6, 8, 10, 12],
                        curves: [
                            { points: sample(x => x * x - 2 * x, -2.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - 2x', labelAt: [-2, 12] },
                            { points: sample(x => x + 4, -2.5, 5.5), color: '#3b82f6', width: 2.5, label: 'y = x + 4', labelAt: [4.5, 6] }
                        ],
                        points: [
                            { at: [-1, 3], label: '(-1,\\,3)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [4, 8], label: '(4,\\,8)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [
                            { points: [...sample(x => x * x - 2 * x, -2.5, -1, 30), ...sample(x => x + 4, -1, -2.5, 30)], color: '#0d948844' },
                            { points: [...sample(x => x * x - 2 * x, 4, 5.5, 30), ...sample(x => x + 4, 5.5, 4, 30)], color: '#0d948844' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: 'x < -1 \\quad \\text{or} \\quad x > 4',
                    explanation: 'The inequality \\( x^2 - 2x > x + 4 \\) is satisfied in the two outer regions where the parabola lies above the line.'
                }
            ],
            finalAnswer: '\\( x < -1 \\) or \\( x > 4 \\)'
        }
    },

    {
        id: 'ise3-050',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 50',
        difficulty: 'Standard',
        questionText: 'Solve \\( x^2 > 5x - 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so the right-hand side is zero.',
                    workingLatex: 'x^2 - 5x + 4 > 0',
                    explanation: 'Subtract \\( 5x - 4 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 5x + 4 = (x - 1)(x - 4)',
                    explanation: 'We need two numbers that multiply to \\( 4 \\) and add to \\( -5 \\). These are \\( -1 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: '(x - 1)(x - 4) = 0 \\implies x = 1 \\text{ or } x = 4',
                    explanation: 'Setting each factor to zero gives the roots \\( x = 1 \\) and \\( x = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Sketch the parabola and identify where the quadratic is positive.',
                    workingLatex: 'x < 1 \\quad \\text{or} \\quad x > 4',
                    explanation: 'The parabola \\( y = (x - 1)(x - 4) \\) is U-shaped and is above the \\( x \\)-axis (positive) outside the roots.',
                    diagram: {
                        xMin: -1, xMax: 6, yMin: -3, yMax: 8,
                        xTicks: [0, 1, 2, 3, 4, 5],
                        yTicks: [-2, 0, 2, 4, 6],
                        curves: [{ points: sample(x => (x - 1) * (x - 4), -0.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = (x-1)(x-4)', labelAt: [4.8, 4] }],
                        points: [
                            { at: [1, 0], label: '(1,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [4, 0], label: '(4,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( x < 1 \\;\\text{ or }\\; x > 4 \\)'
        }
    },

    {
        id: 'ise3-051',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 51',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 \\) and \\( y = 2x + 8 \\). Hence find the set of values of \\( x \\) for which \\( x^2 \\leq 2x + 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -4, xMax: 6, yMin: -3, yMax: 18,
            xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
            yTicks: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16],
            curves: [
                { points: sample(x => x * x, -3.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 16] },
                { points: sample(x => 2 * x + 8, -3.5, 5.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 8', labelAt: [4.5, 10] }
            ],
            points: [
                { at: [-2, 4], label: '(-2,\\,4)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [4, 16], label: '(4,\\,16)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [{ points: [...sample(x => 2 * x + 8, -2, 4, 30), ...sample(x => x * x, 4, -2, 30)], color: '#0d948844' }]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: 'x^2 \\leq 2x + 8 \\implies x^2 - 2x - 8 \\leq 0',
                    explanation: 'Subtract \\( 2x + 8 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - 2x - 8 = (x - 4)(x + 2)',
                    explanation: 'We need two numbers that multiply to give \\( -8 \\) and add to give \\( -2 \\). These are \\( -4 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 4)(x + 2) = 0 \\implies x = -2 \\text{ or } x = 4',
                    explanation: 'Setting the factorised expression to zero gives the \\( x \\)-coordinates where the two curves meet. When \\( x = -2 \\), \\( y = 4 \\); when \\( x = 4 \\), \\( y = 16 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Determine where the parabola is on or below the line from the diagram.',
                    workingLatex: '(x - 4)(x + 2) \\leq 0',
                    explanation: 'From the diagram, the parabola \\( y = x^2 \\) is on or below the line \\( y = 2x + 8 \\) between the two intersection points.',
                    diagram: {
                        xMin: -4, xMax: 6, yMin: -3, yMax: 18,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4, 5],
                        yTicks: [-2, 0, 2, 4, 6, 8, 10, 12, 14, 16],
                        curves: [
                            { points: sample(x => x * x, -3.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = x^2', labelAt: [-2, 16] },
                            { points: sample(x => 2 * x + 8, -3.5, 5.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 8', labelAt: [4.5, 10] }
                        ],
                        points: [
                            { at: [-2, 4], label: '(-2,\\,4)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [4, 16], label: '(4,\\,16)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [{ points: [...sample(x => 2 * x + 8, -2, 4, 30), ...sample(x => x * x, 4, -2, 30)], color: '#0d948844' }]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: '-2 \\leq x \\leq 4',
                    explanation: 'The inequality \\( x^2 \\leq 2x + 8 \\) is satisfied between the intersection points, including the endpoints.'
                }
            ],
            finalAnswer: '\\( -2 \\leq x \\leq 4 \\)'
        }
    },

    {
        id: 'ise3-052',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 52',
        difficulty: 'Standard',
        questionText: 'Solve \\( x(x + 6) < 7 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and rearrange so the right-hand side is zero.',
                    workingLatex: 'x^2 + 6x < 7 \\implies x^2 + 6x - 7 < 0',
                    explanation: 'Expand the left-hand side and subtract 7 from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + 6x - 7 = (x + 7)(x - 1)',
                    explanation: 'We need two numbers that multiply to \\( -7 \\) and add to \\( 6 \\). These are \\( 7 \\) and \\( -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: '(x + 7)(x - 1) = 0 \\implies x = -7 \\text{ or } x = 1',
                    explanation: 'Setting each factor to zero gives the roots \\( x = -7 \\) and \\( x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Identify the solution region.',
                    workingLatex: '-7 < x < 1',
                    explanation: 'The parabola \\( y = (x + 7)(x - 1) \\) is U-shaped and is below the \\( x \\)-axis (negative) between the roots.'
                }
            ],
            finalAnswer: '\\( -7 < x < 1 \\)'
        }
    },

    {
        id: 'ise3-053',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 53',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curve \\( y = x^2 - x - 6 \\) and the \\( x \\)-axis. Shade the region where \\( y < 0 \\) and find the corresponding values of \\( x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -4, xMax: 5, yMin: -8, yMax: 10,
            xTicks: [-3, -2, -1, 0, 1, 2, 3, 4],
            yTicks: [-6, -4, -2, 0, 2, 4, 6, 8],
            curves: [
                { points: sample(x => x * x - x - 6, -3.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - x - 6', labelAt: [-2, 8] },
                { points: sample(() => 0, -3.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 0', labelAt: [4, -2] }
            ],
            fills: [
                { points: [...sample(() => 0, -2, 3, 30), ...sample(x => x * x - x - 6, 3, -2, 30)], color: '#0d948844' }
            ],
            points: [
                { at: [-2, 0], label: '(-2,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3, 0], label: '(3,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'We need two numbers that multiply to give \\( -6 \\) and add to give \\( -1 \\). These are \\( -3 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the roots (where the curve crosses the \\( x \\)-axis).',
                    workingLatex: '(x - 3)(x + 2) = 0 \\implies x = -2 \\text{ or } x = 3',
                    explanation: 'Setting each factor to zero gives the \\( x \\)-intercepts at \\( x = -2 \\) and \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the region where the curve is below the \\( x \\)-axis.',
                    workingLatex: 'y < 0 \\implies (x - 3)(x + 2) < 0',
                    explanation: 'The parabola opens upwards (positive leading coefficient) so it lies below the \\( x \\)-axis between the roots. The shaded region is the area between the curve and the \\( x \\)-axis for \\( -2 < x < 3 \\).',
                    diagram: {
                        xMin: -4, xMax: 5, yMin: -8, yMax: 10,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4],
                        yTicks: [-6, -4, -2, 0, 2, 4, 6, 8],
                        curves: [
                            { points: sample(x => x * x - x - 6, -3.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 - x - 6', labelAt: [-2, 8] },
                            { points: sample(() => 0, -3.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 0', labelAt: [4, -2] }
                        ],
                        fills: [
                            { points: [...sample(() => 0, -2, 3, 30), ...sample(x => x * x - x - 6, 3, -2, 30)], color: '#0d948844' }
                        ],
                        points: [
                            { at: [-2, 0], label: '(-2,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 0], label: '(3,\\,0)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 4,
                    description: 'State the solution.',
                    workingLatex: '-2 < x < 3',
                    explanation: 'The curve \\( y = x^2 - x - 6 \\) is below the \\( x \\)-axis for \\( -2 < x < 3 \\).'
                }
            ],
            finalAnswer: '\\( -2 < x < 3 \\)'
        }
    },

    {
        id: 'ise3-054',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 54',
        difficulty: 'Standard',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 2x^2 + 7x - 4 > 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic.',
                    workingLatex: '2x^2 + 7x - 4 = (2x - 1)(x + 4)',
                    explanation: 'Check: \\( (2x - 1)(x + 4) = 2x^2 + 8x - x - 4 = 2x^2 + 7x - 4 \\). Correct.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the critical values.',
                    workingLatex: '(2x - 1)(x + 4) = 0 \\implies x = \\tfrac{1}{2} \\text{ or } x = -4',
                    explanation: 'Setting each factor to zero gives \\( 2x - 1 = 0 \\Rightarrow x = \\frac{1}{2} \\) and \\( x + 4 = 0 \\Rightarrow x = -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch the parabola and identify where the quadratic is positive.',
                    workingLatex: 'y = (2x - 1)(x + 4)',
                    explanation: 'The parabola is U-shaped (positive leading coefficient) and is above the \\( x \\)-axis outside the roots.'
                },
                {
                    stepNumber: 4,
                    description: 'State the solution as a set of values.',
                    workingLatex: '\\{x : x < -4 \\text{ or } x > \\tfrac{1}{2}\\}',
                    explanation: 'The quadratic is positive in the two outer regions, so the solution is \\( x < -4 \\) or \\( x > \\frac{1}{2} \\).'
                }
            ],
            finalAnswer: '\\( \\{x : x < -4 \\;\\text{ or }\\; x > \\tfrac{1}{2}\\} \\)'
        }
    },

    {
        id: 'ise3-055',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 55',
        difficulty: 'Standard',
        questionText: 'Show that \\( 3x^2 + 6x + 7 > 0 \\) for all real values of \\( x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out the coefficient of \\( x^2 \\) from the first two terms.',
                    workingLatex: '3x^2 + 6x + 7 = 3(x^2 + 2x) + 7',
                    explanation: 'Take out a factor of 3 from the \\( x^2 \\) and \\( x \\) terms to prepare for completing the square.'
                },
                {
                    stepNumber: 2,
                    description: 'Complete the square inside the bracket.',
                    workingLatex: '3(x^2 + 2x) + 7 = 3\\bigl((x + 1)^2 - 1\\bigr) + 7',
                    explanation: 'Halve the coefficient of \\( x \\) inside the bracket: half of \\( 2 \\) is \\( 1 \\). Write \\( (x + 1)^2 \\) and subtract \\( 1^2 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: '3(x + 1)^2 - 3 + 7 = 3(x + 1)^2 + 4',
                    explanation: 'Distribute the 3 through the \\( -1 \\) to get \\( -3 \\), then combine with \\( +7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Argue that the expression is always positive.',
                    workingLatex: '(x + 1)^2 \\geq 0 \\implies 3(x + 1)^2 \\geq 0 \\implies 3(x + 1)^2 + 4 \\geq 4',
                    explanation: 'The squared term is non-negative; multiplying by 3 keeps it non-negative; adding 4 ensures the whole expression is at least 4.'
                },
                {
                    stepNumber: 5,
                    description: 'State the conclusion.',
                    workingLatex: '3(x + 1)^2 + 4 \\geq 4 > 0',
                    explanation: 'Since \\( 3(x + 1)^2 + 4 \\geq 4 > 0 \\), we have \\( 3x^2 + 6x + 7 > 0 \\) for all real \\( x \\), as required.'
                }
            ],
            finalAnswer: '\\( 3(x + 1)^2 + 4 \\geq 4 > 0 \\) for all real \\( x \\), as required.'
        }
    },

    {
        id: 'ise3-056',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 56',
        difficulty: 'Standard',
        questionText: 'Show that \\( -x^2 + 2x - 5 < 0 \\) for all real values of \\( x \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor out \\( -1 \\) from the expression.',
                    workingLatex: '-x^2 + 2x - 5 = -(x^2 - 2x + 5)',
                    explanation: 'Take out a factor of \\( -1 \\) so we can complete the square on a positive quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Complete the square inside the bracket.',
                    workingLatex: 'x^2 - 2x + 5 = (x - 1)^2 - 1 + 5 = (x - 1)^2 + 4',
                    explanation: 'Halve the coefficient of \\( x \\): half of \\( -2 \\) is \\( -1 \\). Write \\( (x - 1)^2 \\) and subtract \\( (-1)^2 = 1 \\), then combine with \\( +5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite the original expression.',
                    workingLatex: '-x^2 + 2x - 5 = -\\bigl((x - 1)^2 + 4\\bigr) = -(x - 1)^2 - 4',
                    explanation: 'Distribute the negative sign through the bracket.'
                },
                {
                    stepNumber: 4,
                    description: 'Argue that the expression is always negative.',
                    workingLatex: '(x - 1)^2 \\geq 0 \\implies -(x - 1)^2 \\leq 0 \\implies -(x - 1)^2 - 4 \\leq -4',
                    explanation: 'The squared term is non-negative, so its negative is non-positive. Subtracting 4 makes the whole expression at most \\( -4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the conclusion.',
                    workingLatex: '-(x - 1)^2 - 4 \\leq -4 < 0',
                    explanation: 'Since \\( -(x - 1)^2 - 4 \\leq -4 < 0 \\), we have \\( -x^2 + 2x - 5 < 0 \\) for all real \\( x \\), as required.'
                }
            ],
            finalAnswer: '\\( -(x - 1)^2 - 4 \\leq -4 < 0 \\) for all real \\( x \\), as required.'
        }
    },

    {
        id: 'ise3-057',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 57',
        difficulty: 'Standard',
        questionText: 'On the same axes, sketch the curves \\( y = x^2 + x - 2 \\) and \\( y = 2x + 4 \\). Hence find the values of \\( x \\) for which \\( x^2 + x - 2 > 2x + 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        diagram: {
            xMin: -4, xMax: 5, yMin: -4, yMax: 16,
            xTicks: [-3, -2, -1, 0, 1, 2, 3, 4],
            yTicks: [-2, 0, 2, 4, 6, 8, 10, 12, 14],
            curves: [
                { points: sample(x => x * x + x - 2, -3.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 + x - 2', labelAt: [-2, 14] },
                { points: sample(x => 2 * x + 4, -3.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 4', labelAt: [4, 7] }
            ],
            points: [
                { at: [-2, 0], label: '(-2,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                { at: [3, 10], label: '(3,\\,10)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
            ],
            fills: [
                { points: [...sample(x => x * x + x - 2, -3.5, -2, 30), ...sample(x => 2 * x + 4, -2, -3.5, 30)], color: '#0d948844' },
                { points: [...sample(x => x * x + x - 2, 3, 4.5, 30), ...sample(x => 2 * x + 4, 4.5, 3, 30)], color: '#0d948844' }
            ]
        },
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality so that one side is zero.',
                    workingLatex: 'x^2 + x - 2 > 2x + 4 \\implies x^2 - x - 6 > 0',
                    explanation: 'Subtract \\( 2x + 4 \\) from both sides to collect all terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 - x - 6 = (x - 3)(x + 2)',
                    explanation: 'We need two numbers that multiply to give \\( -6 \\) and add to give \\( -1 \\). These are \\( -3 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intersection points.',
                    workingLatex: '(x - 3)(x + 2) = 0 \\implies x = -2 \\text{ or } x = 3',
                    explanation: 'Setting the factorised expression to zero gives the \\( x \\)-coordinates where the two curves meet. When \\( x = -2 \\), \\( y = 0 \\); when \\( x = 3 \\), \\( y = 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Determine where the parabola is above the line from the diagram.',
                    workingLatex: '(x - 3)(x + 2) > 0',
                    explanation: 'From the diagram, the parabola \\( y = x^2 + x - 2 \\) is above the line \\( y = 2x + 4 \\) in the two outer regions: to the left of \\( x = -2 \\) and to the right of \\( x = 3 \\).',
                    diagram: {
                        xMin: -4, xMax: 5, yMin: -4, yMax: 16,
                        xTicks: [-3, -2, -1, 0, 1, 2, 3, 4],
                        yTicks: [-2, 0, 2, 4, 6, 8, 10, 12, 14],
                        curves: [
                            { points: sample(x => x * x + x - 2, -3.5, 4.5), color: '#0d9488', width: 2.5, label: 'y = x^2 + x - 2', labelAt: [-2, 14] },
                            { points: sample(x => 2 * x + 4, -3.5, 4.5), color: '#3b82f6', width: 2.5, label: 'y = 2x + 4', labelAt: [4, 7] }
                        ],
                        points: [
                            { at: [-2, 0], label: '(-2,\\,0)', labelAnchor: 'ne', color: '#d4775c', r: 4.5 },
                            { at: [3, 10], label: '(3,\\,10)', labelAnchor: 'nw', color: '#d4775c', r: 4.5 }
                        ],
                        fills: [
                            { points: [...sample(x => x * x + x - 2, -3.5, -2, 30), ...sample(x => 2 * x + 4, -2, -3.5, 30)], color: '#0d948844' },
                            { points: [...sample(x => x * x + x - 2, 3, 4.5, 30), ...sample(x => 2 * x + 4, 4.5, 3, 30)], color: '#0d948844' }
                        ]
                    }
                },
                {
                    stepNumber: 5,
                    description: 'State the solution.',
                    workingLatex: 'x < -2 \\quad \\text{or} \\quad x > 3',
                    explanation: 'The inequality \\( x^2 + x - 2 > 2x + 4 \\) is satisfied in the two outer regions where the parabola lies above the line.'
                }
            ],
            finalAnswer: '\\( x < -2 \\) or \\( x > 3 \\)'
        }
    },

    {
        id: 'ise3-058',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 58',
        difficulty: 'Standard',
        questionText: 'Solve \\( (2x + 3)^2 \\leq 25 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and rearrange so the right-hand side is zero.',
                    workingLatex: '(2x + 3)^2 - 25 \\leq 0 \\implies 4x^2 + 12x + 9 - 25 \\leq 0 \\implies 4x^2 + 12x - 16 \\leq 0',
                    explanation: 'Subtract 25 from both sides, expand \\( (2x + 3)^2 \\), and simplify.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide through by 4 to simplify.',
                    workingLatex: 'x^2 + 3x - 4 \\leq 0',
                    explanation: 'Dividing both sides by the positive number 4 does not change the inequality direction.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: 'x^2 + 3x - 4 = (x + 4)(x - 1)',
                    explanation: 'We need two numbers that multiply to \\( -4 \\) and add to \\( 3 \\). These are \\( 4 \\) and \\( -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the critical values.',
                    workingLatex: '(x + 4)(x - 1) = 0 \\implies x = -4 \\text{ or } x = 1',
                    explanation: 'Setting each factor to zero gives the roots \\( x = -4 \\) and \\( x = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Identify the solution region.',
                    workingLatex: '-4 \\leq x \\leq 1',
                    explanation: 'The parabola \\( y = (x + 4)(x - 1) \\) is U-shaped and is on or below the \\( x \\)-axis between the roots. The inequality is \\( \\leq \\) so include the endpoints.'
                }
            ],
            finalAnswer: '\\( -4 \\leq x \\leq 1 \\)'
        }
    },

    {
        id: 'ise3-059',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 59',
        difficulty: 'Standard',
        questionText: 'Find the values of \\( x \\) satisfying both \\( x^2 - 9 > 0 \\) and \\( x < 5 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factorise the quadratic in the first inequality.',
                    workingLatex: 'x^2 - 9 = (x - 3)(x + 3)',
                    explanation: 'Recognise \\( x^2 - 9 \\) as a difference of two squares: \\( (x - 3)(x + 3) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( (x - 3)(x + 3) > 0 \\).',
                    workingLatex: 'x < -3 \\quad \\text{or} \\quad x > 3',
                    explanation: 'The parabola \\( y = (x - 3)(x + 3) \\) is U-shaped and is above the \\( x \\)-axis outside the roots.'
                },
                {
                    stepNumber: 3,
                    description: 'State the second inequality.',
                    workingLatex: 'x < 5',
                    explanation: 'This is already solved.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection of the two solution sets.',
                    workingLatex: '(x < -3 \\text{ or } x > 3) \\;\\cap\\; (x < 5)',
                    explanation: 'We need the values of \\( x \\) that satisfy both inequalities simultaneously.'
                },
                {
                    stepNumber: 5,
                    description: 'Determine the final answer.',
                    workingLatex: 'x < -3 \\quad \\text{or} \\quad 3 < x < 5',
                    explanation: 'The region \\( x < -3 \\) is entirely within \\( x < 5 \\), so it survives. The region \\( x > 3 \\) is restricted by \\( x < 5 \\) to give \\( 3 < x < 5 \\).'
                }
            ],
            finalAnswer: '\\( x < -3 \\;\\text{ or }\\; 3 < x < 5 \\)'
        }
    },

    // ─── STANDARD / CHALLENGE: Q60–Q70 (5–8 marks, exam-style) ──────────────────

    {
        id: 'ise3-060',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 60',
        difficulty: 'Challenge',
        questionText: 'Find the range of values of \\( k \\) for which the equation \\( x^2 - 2kx + k + 6 = 0 \\) has no real roots.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the discriminant condition for no real roots.',
                    workingLatex: '\\Delta < 0',
                    explanation: 'A quadratic \\( ax^2 + bx + c = 0 \\) has no real roots when its discriminant \\( b^2 - 4ac < 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify \\( a \\), \\( b \\), \\( c \\) and form the discriminant.',
                    workingLatex: 'a = 1,\\; b = -2k,\\; c = k + 6 \\implies \\Delta = (-2k)^2 - 4(1)(k + 6) = 4k^2 - 4k - 24',
                    explanation: 'Substitute the coefficients into the discriminant formula \\( b^2 - 4ac \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set up the inequality \\( \\Delta < 0 \\).',
                    workingLatex: '4k^2 - 4k - 24 < 0',
                    explanation: 'For no real roots we require \\( \\Delta < 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify by dividing through by 4.',
                    workingLatex: 'k^2 - k - 6 < 0',
                    explanation: 'Divide every term by 4 to obtain a simpler quadratic inequality.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise the quadratic in \\( k \\).',
                    workingLatex: '(k - 3)(k + 2) < 0',
                    explanation: 'We need two numbers that multiply to \\( -6 \\) and add to \\( -1 \\): these are \\( -3 \\) and \\( 2 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve the quadratic inequality.',
                    workingLatex: '-2 < k < 3',
                    explanation: 'The parabola \\( y = (k - 3)(k + 2) \\) opens upwards and is negative between its roots, so the solution is \\( -2 < k < 3 \\).'
                }
            ],
            finalAnswer: '\\( -2 < k < 3 \\)'
        }
    },

    {
        id: 'ise3-061',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 61',
        difficulty: 'Challenge',
        questionText: 'Find the values of \\( p \\) for which the inequality \\( px^2 + 8x + p < 0 \\) has solutions.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Consider the case \\( p = 0 \\).',
                    workingLatex: '0 \\cdot x^2 + 8x + 0 < 0 \\implies 8x < 0 \\implies x < 0',
                    explanation: 'When \\( p = 0 \\) the expression is linear and the inequality \\( 8x < 0 \\) has solutions, so \\( p = 0 \\) is valid.'
                },
                {
                    stepNumber: 2,
                    description: 'For \\( p \\neq 0 \\), compute the discriminant of \\( px^2 + 8x + p \\).',
                    workingLatex: '\\Delta = 8^2 - 4(p)(p) = 64 - 4p^2',
                    explanation: 'Using \\( b^2 - 4ac \\) with \\( a = p \\), \\( b = 8 \\), \\( c = p \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Case \\( p < 0 \\): the parabola opens downwards.',
                    workingLatex: 'p < 0 \\implies px^2 + 8x + p \\to -\\infty \\text{ as } x \\to \\pm\\infty',
                    explanation: 'When \\( p < 0 \\), the quadratic tends to \\( -\\infty \\) for large \\( |x| \\), so there are always values of \\( x \\) for which \\( px^2 + 8x + p < 0 \). Hence the inequality has solutions for all \\( p < 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Case \\( p > 0 \\): the parabola opens upwards.',
                    workingLatex: '\\text{Need } \\Delta > 0 \\implies 64 - 4p^2 > 0 \\implies p^2 < 16 \\implies -4 < p < 4',
                    explanation: 'For an upward-opening parabola to dip below the \\( x \\)-axis, the discriminant must be positive. Combined with \\( p > 0 \\), this gives \\( 0 < p < 4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Combine all cases.',
                    workingLatex: 'p < 0 \\;\\cup\\; p = 0 \\;\\cup\\; 0 < p < 4 \\;=\\; p < 4',
                    explanation: 'All negative values of \\( p \\) work (the parabola opens downwards and always dips below zero), \\( p = 0 \\) works (gives \\( 8x < 0 \\)), and \\( 0 < p < 4 \\) works (positive discriminant). Combining these: \\( p < 4 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the final answer.',
                    workingLatex: 'p < 4',
                    explanation: 'The inequality \\( px^2 + 8x + p < 0 \\) has solutions for all \\( p < 4 \\).'
                }
            ],
            finalAnswer: '\\( p < 4 \\)'
        }
    },

    {
        id: 'ise3-062',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 62',
        difficulty: 'Challenge',
        questionText: 'Solve the inequality \\( x^4 - 10x^2 + 9 \\leq 0 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the substitution \\( u = x^2 \\) to reduce to a quadratic.',
                    workingLatex: 'u^2 - 10u + 9 \\leq 0',
                    explanation: 'Let \\( u = x^2 \\). Then \\( x^4 = u^2 \\), so the inequality becomes \\( u^2 - 10u + 9 \\leq 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic in \\( u \\).',
                    workingLatex: '(u - 1)(u - 9) \\leq 0',
                    explanation: 'We need two numbers that multiply to 9 and add to \\( -10 \\): these are \\( -1 \\) and \\( -9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the quadratic inequality in \\( u \\).',
                    workingLatex: '1 \\leq u \\leq 9',
                    explanation: 'The parabola opens upwards, so it is non-positive between the roots. Hence \\( 1 \\leq u \\leq 9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute back \\( u = x^2 \\).',
                    workingLatex: '1 \\leq x^2 \\leq 9',
                    explanation: 'Replace \\( u \\) with \\( x^2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( x^2 \\geq 1 \\) and \\( x^2 \\leq 9 \\) separately.',
                    workingLatex: 'x^2 \\geq 1 \\implies x \\leq -1 \\text{ or } x \\geq 1; \\qquad x^2 \\leq 9 \\implies -3 \\leq x \\leq 3',
                    explanation: '\\( x^2 \\geq 1 \\) means \\( |x| \\geq 1 \\). \\( x^2 \\leq 9 \\) means \\( |x| \\leq 3 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find the intersection of the two conditions.',
                    workingLatex: '-3 \\leq x \\leq -1 \\quad \\text{or} \\quad 1 \\leq x \\leq 3',
                    explanation: 'Combining \\( (x \\leq -1 \\text{ or } x \\geq 1) \\) with \\( -3 \\leq x \\leq 3 \\) gives two intervals.',
                    diagram: {
                        xMin: -5, xMax: 5, yMin: -10, yMax: 20,
                        xTicks: [-3, -1, 0, 1, 3],
                        yTicks: [0, 9],
                        curves: [{ points: sample(x => x * x * x * x - 10 * x * x + 9, -4, 4), color: '#0d9488', width: 2.5, label: 'y = x^4 - 10x^2 + 9', labelAt: [-2, 15] }],
                        points: [
                            { at: [-3, 0], label: '(-3,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4.5 },
                            { at: [-1, 0], label: '(-1,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4.5 },
                            { at: [1, 0], label: '(1,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4.5 },
                            { at: [3, 0], label: '(3,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4.5 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( -3 \\leq x \\leq -1 \\) or \\( 1 \\leq x \\leq 3 \\)'
        }
    },

    {
        id: 'ise3-063',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 63',
        difficulty: 'Standard',
        questionText: 'Solve the inequality \\( \\dfrac{x - 3}{x + 1} \\leq 0 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the critical values.',
                    workingLatex: 'x - 3 = 0 \\implies x = 3; \\qquad x + 1 = 0 \\implies x = -1',
                    explanation: 'The critical values come from setting the numerator and denominator equal to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Note that \\( x = -1 \\) must be excluded.',
                    workingLatex: 'x \\neq -1',
                    explanation: 'The fraction is undefined when the denominator is zero, so \\( x = -1 \\) is not in the domain.'
                },
                {
                    stepNumber: 3,
                    description: 'Perform sign analysis on the three intervals.',
                    workingLatex: '\\begin{array}{c|ccc} & x < -1 & -1 < x < 3 & x > 3 \\\\ \\hline x - 3 & - & - & + \\\\ x + 1 & - & + & + \\\\ \\hline \\dfrac{x-3}{x+1} & + & - & + \\end{array}',
                    explanation: 'Test a value in each interval to determine the sign of the fraction. For \\( x < -1 \\): both factors negative, fraction positive. For \\( -1 < x < 3 \\): numerator negative, denominator positive, fraction negative. For \\( x > 3 \\): both positive, fraction positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Identify where the fraction is \\( \\leq 0 \\).',
                    workingLatex: '-1 < x \\leq 3',
                    explanation: 'The fraction is negative on \\( -1 < x < 3 \\) and equals zero at \\( x = 3 \\). We exclude \\( x = -1 \\) since the fraction is undefined there.'
                },
                {
                    stepNumber: 5,
                    description: 'State the final solution.',
                    workingLatex: '-1 < x \\leq 3',
                    explanation: 'The solution set is \\( -1 < x \\leq 3 \\).'
                }
            ],
            finalAnswer: '\\( -1 < x \\leq 3 \\)'
        }
    },

    {
        id: 'ise3-064',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 64',
        difficulty: 'Challenge',
        questionText: 'Find the range of values of \\( a \\) for which \\( ax^2 - 4x + a > 0 \\) for all real values of \\( x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the conditions for the quadratic to be positive for all \\( x \\).',
                    workingLatex: 'a > 0 \\quad \\text{and} \\quad \\Delta < 0',
                    explanation: 'For \\( ax^2 - 4x + a > 0 \\) for all \\( x \\), the parabola must open upwards (\\( a > 0 \\)) and must not touch or cross the \\( x \\)-axis (\\( \\Delta < 0 \\)).'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-4)^2 - 4(a)(a) = 16 - 4a^2',
                    explanation: 'Using \\( b^2 - 4ac \\) with \\( b = -4 \\), the leading coefficient \\( a \\), and the constant term \\( a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set \\( \\Delta < 0 \\).',
                    workingLatex: '16 - 4a^2 < 0 \\implies 4a^2 > 16 \\implies a^2 > 4',
                    explanation: 'Rearrange the inequality.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve \\( a^2 > 4 \\).',
                    workingLatex: 'a < -2 \\quad \\text{or} \\quad a > 2',
                    explanation: 'Take square roots: \\( |a| > 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Combine with the condition \\( a > 0 \\).',
                    workingLatex: 'a > 0 \\;\\cap\\; (a < -2 \\text{ or } a > 2) = a > 2',
                    explanation: 'Since \\( a > 0 \\) rules out \\( a < -2 \\), the only remaining condition is \\( a > 2 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the final answer.',
                    workingLatex: 'a > 2',
                    explanation: 'The quadratic \\( ax^2 - 4x + a \\) is positive for all real \\( x \\) when \\( a > 2 \\).'
                }
            ],
            finalAnswer: '\\( a > 2 \\)'
        }
    },

    {
        id: 'ise3-065',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 65',
        difficulty: 'Challenge',
        questionText: 'Solve the following inequalities simultaneously:\n\\( x^2 + 2x - 8 > 0 \\) and \\( x^2 - 4x - 5 < 0 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( x^2 + 2x - 8 > 0 \\). Factorise.',
                    workingLatex: 'x^2 + 2x - 8 = (x + 4)(x - 2) > 0',
                    explanation: 'Find two numbers that multiply to \\( -8 \\) and add to \\( 2 \\): these are \\( 4 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Determine the solution set for the first inequality.',
                    workingLatex: 'x < -4 \\quad \\text{or} \\quad x > 2',
                    explanation: 'The parabola opens upwards and is positive outside the roots \\( x = -4 \\) and \\( x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( x^2 - 4x - 5 < 0 \\). Factorise.',
                    workingLatex: 'x^2 - 4x - 5 = (x - 5)(x + 1) < 0',
                    explanation: 'Find two numbers that multiply to \\( -5 \\) and add to \\( -4 \\): these are \\( -5 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Determine the solution set for the second inequality.',
                    workingLatex: '-1 < x < 5',
                    explanation: 'The parabola opens upwards and is negative between the roots \\( x = -1 \\) and \\( x = 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the intersection of the two solution sets.',
                    workingLatex: '(x < -4 \\text{ or } x > 2) \\;\\cap\\; (-1 < x < 5)',
                    explanation: 'We need values of \\( x \\) satisfying both inequalities simultaneously.'
                },
                {
                    stepNumber: 6,
                    description: 'Determine the overlap.',
                    workingLatex: '2 < x < 5',
                    explanation: 'The region \\( x < -4 \\) does not overlap with \\( -1 < x < 5 \\). The region \\( x > 2 \\) overlaps with \\( -1 < x < 5 \\) to give \\( 2 < x < 5 \\).',
                    diagram: {
                        xMin: -6, xMax: 7, yMin: -12, yMax: 12,
                        xTicks: [-4, -1, 0, 2, 5],
                        yTicks: [-8, 0, 8],
                        curves: [
                            { points: sample(x => x * x + 2 * x - 8, -6, 5), color: '#0d9488', width: 2.5, label: 'y = x^2 + 2x - 8', labelAt: [-5.5, 8] },
                            { points: sample(x => x * x - 4 * x - 5, -2, 7), color: '#2563eb', width: 2.5, label: 'y = x^2 - 4x - 5', labelAt: [-2, 8] }
                        ],
                        points: [
                            { at: [-4, 0], label: '-4', labelAnchor: 'n', color: '#d4775c', r: 4.5 },
                            { at: [2, 0], label: '2', labelAnchor: 'n', color: '#d4775c', r: 4.5 },
                            { at: [-1, 0], label: '-1', labelAnchor: 's', color: '#2563eb', r: 4.5 },
                            { at: [5, 0], label: '5', labelAnchor: 's', color: '#2563eb', r: 4.5 }
                        ]
                    }
                }
            ],
            finalAnswer: '\\( 2 < x < 5 \\)'
        }
    },

    {
        id: 'ise3-066',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 66',
        difficulty: 'Challenge',
        questionText: '(a) Solve \\( x^2 - 6x + 8 < 0 \\).\n\n(b) Solve \\( x + 3 > 2x - 1 \\).\n\n(c) Find the set of values of \\( x \\) which satisfy both inequalities simultaneously.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Factorise \\( x^2 - 6x + 8 \\).',
                    workingLatex: 'x^2 - 6x + 8 = (x - 2)(x - 4)',
                    explanation: 'We need two numbers that multiply to 8 and add to \\( -6 \\): these are \\( -2 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Solve \\( (x - 2)(x - 4) < 0 \\).',
                    workingLatex: '2 < x < 4',
                    explanation: 'The parabola opens upwards and is negative between its roots \\( x = 2 \\) and \\( x = 4 \\).',
                    diagram: {
                        xMin: -1, xMax: 6, yMin: -2, yMax: 8,
                        xTicks: [0, 1, 2, 3, 4, 5],
                        yTicks: [0, 2, 4, 6, 8],
                        curves: [{ points: sample(x => (x - 2) * (x - 4), -0.5, 5.5), color: '#0d9488', width: 2.5, label: 'y = (x-2)(x-4)', labelAt: [4.8, 5] }],
                        points: [
                            { at: [2, 0], label: '(2,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4.5 },
                            { at: [4, 0], label: '(4,\\,0)', labelAnchor: 'n', color: '#d4775c', r: 4.5 }
                        ]
                    }
                },
                {
                    stepNumber: 3,
                    description: '(b) Solve the linear inequality \\( x + 3 > 2x - 1 \\).',
                    workingLatex: 'x + 3 > 2x - 1 \\implies 3 + 1 > 2x - x \\implies 4 > x',
                    explanation: 'Rearrange by collecting \\( x \\) terms on one side and constants on the other.'
                },
                {
                    stepNumber: 4,
                    description: '(b) State the solution.',
                    workingLatex: 'x < 4',
                    explanation: 'The linear inequality gives \\( x < 4 \\).'
                },
                {
                    stepNumber: 5,
                    description: '(c) Find the intersection of the two solution sets.',
                    workingLatex: '(2 < x < 4) \\;\\cap\\; (x < 4) = 2 < x < 4',
                    explanation: 'The set \\( 2 < x < 4 \\) is entirely contained within \\( x < 4 \\), so the intersection is just \\( 2 < x < 4 \\).'
                },
                {
                    stepNumber: 6,
                    description: '(c) State the final answer.',
                    workingLatex: '2 < x < 4',
                    explanation: 'Both inequalities are satisfied simultaneously when \\( 2 < x < 4 \\).'
                }
            ],
            finalAnswer: '\\( 2 < x < 4 \\)'
        }
    },

    {
        id: 'ise3-067',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 67',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = 2x + k \\) does not intersect the curve \\( y = x^2 + 3 \\). Find the range of values of \\( k \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two equations equal to find points of intersection.',
                    workingLatex: 'x^2 + 3 = 2x + k',
                    explanation: 'At intersection points, \\( y = x^2 + 3 \\) and \\( y = 2x + k \\) are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to a quadratic equation in \\( x \\).',
                    workingLatex: 'x^2 - 2x + 3 - k = 0',
                    explanation: 'Move all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'For no intersection, the quadratic must have no real roots.',
                    workingLatex: '\\Delta < 0',
                    explanation: 'The line does not intersect the curve when the resulting quadratic has no real solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-2)^2 - 4(1)(3 - k) = 4 - 12 + 4k = 4k - 8',
                    explanation: 'Using \\( b^2 - 4ac \\) with \\( a = 1 \\), \\( b = -2 \\), \\( c = 3 - k \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Set \\( \\Delta < 0 \\) and solve.',
                    workingLatex: '4k - 8 < 0 \\implies 4k < 8 \\implies k < 2',
                    explanation: 'Solve the linear inequality in \\( k \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the final answer.',
                    workingLatex: 'k < 2',
                    explanation: 'The line \\( y = 2x + k \\) does not intersect \\( y = x^2 + 3 \\) when \\( k < 2 \\).'
                }
            ],
            finalAnswer: '\\( k < 2 \\)'
        }
    },

    {
        id: 'ise3-068',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 68',
        difficulty: 'Challenge',
        questionText: 'Solve the inequality \\( \\dfrac{2x + 1}{x - 3} > 1 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange so one side is zero.',
                    workingLatex: '\\frac{2x + 1}{x - 3} - 1 > 0',
                    explanation: 'Subtract 1 from both sides to compare with zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Combine into a single fraction.',
                    workingLatex: '\\frac{2x + 1 - (x - 3)}{x - 3} > 0 \\implies \\frac{x + 4}{x - 3} > 0',
                    explanation: 'Write as a single fraction with common denominator \\( x - 3 \\). Simplify the numerator: \\( 2x + 1 - x + 3 = x + 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the critical values.',
                    workingLatex: 'x + 4 = 0 \\implies x = -4; \\qquad x - 3 = 0 \\implies x = 3',
                    explanation: 'Set the numerator and denominator equal to zero. Note \\( x = 3 \\) must be excluded from the domain.'
                },
                {
                    stepNumber: 4,
                    description: 'Perform sign analysis.',
                    workingLatex: '\\begin{array}{c|ccc} & x < -4 & -4 < x < 3 & x > 3 \\\\ \\hline x + 4 & - & + & + \\\\ x - 3 & - & - & + \\\\ \\hline \\dfrac{x+4}{x-3} & + & - & + \\end{array}',
                    explanation: 'Test a value in each region. For \\( x < -4 \\): both negative, quotient positive. For \\( -4 < x < 3 \\): numerator positive, denominator negative, quotient negative. For \\( x > 3 \\): both positive, quotient positive.'
                },
                {
                    stepNumber: 5,
                    description: 'Identify where the fraction is \\( > 0 \\).',
                    workingLatex: 'x < -4 \\quad \\text{or} \\quad x > 3',
                    explanation: 'The fraction is strictly positive in the regions \\( x < -4 \\) and \\( x > 3 \\). We do not include \\( x = -4 \\) (where the fraction equals zero, not \\( > 0 \\)) or \\( x = 3 \\) (undefined).'
                }
            ],
            finalAnswer: '\\( x < -4 \\) or \\( x > 3 \\)'
        }
    },

    {
        id: 'ise3-069',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 69',
        difficulty: 'Standard',
        questionText: 'Show that \\( x^2 + y^2 \\geq 2xy \\) for all real values of \\( x \\) and \\( y \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the inequality.',
                    workingLatex: 'x^2 + y^2 \\geq 2xy \\iff x^2 + y^2 - 2xy \\geq 0',
                    explanation: 'Subtract \\( 2xy \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Recognise the left-hand side as a perfect square.',
                    workingLatex: 'x^2 - 2xy + y^2 = (x - y)^2',
                    explanation: 'The expression \\( x^2 - 2xy + y^2 \\) is the expansion of \\( (x - y)^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the key property of a square.',
                    workingLatex: '(x - y)^2 \\geq 0 \\quad \\text{for all real } x, y',
                    explanation: 'Any real number squared is non-negative.'
                },
                {
                    stepNumber: 4,
                    description: 'Conclude the proof.',
                    workingLatex: '\\therefore\\; x^2 + y^2 - 2xy \\geq 0 \\implies x^2 + y^2 \\geq 2xy',
                    explanation: 'Since \\( (x - y)^2 \\geq 0 \\), it follows that \\( x^2 + y^2 \\geq 2xy \\) for all real \\( x \\) and \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Note when equality holds.',
                    workingLatex: '(x - y)^2 = 0 \\iff x = y',
                    explanation: 'Equality occurs precisely when \\( x = y \\). This completes the proof.'
                }
            ],
            finalAnswer: '\\( (x - y)^2 \\geq 0 \\) for all real \\( x, y \\), hence \\( x^2 + y^2 \\geq 2xy \\). \\(\\square\\)'
        }
    },

    {
        id: 'ise3-070',
        topicRef: 'ise3',
        topicTitle: 'Quadratic Inequalities 70',
        difficulty: 'Challenge',
        questionText: 'Given \\( f(x) = x^2 - (k + 3)x + (3k + 1) \\).\n\n(a) Find the discriminant of \\( f(x) \\) in terms of \\( k \\).\n\n(b) Find the values of \\( k \\) for which the equation \\( f(x) = 0 \\) has two distinct real roots.\n\n(c) Find the values of \\( k \\) for which \\( f(x) > 0 \\) for all real values of \\( x \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Identify the coefficients.',
                    workingLatex: 'a = 1,\\; b = -(k + 3),\\; c = 3k + 1',
                    explanation: 'Compare \\( f(x) = x^2 - (k+3)x + (3k+1) \\) with \\( ax^2 + bx + c \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Compute the discriminant.',
                    workingLatex: '\\Delta = b^2 - 4ac = (k + 3)^2 - 4(1)(3k + 1) = k^2 + 6k + 9 - 12k - 4 = k^2 - 6k + 5',
                    explanation: 'Expand \\( (k + 3)^2 = k^2 + 6k + 9 \\) and subtract \\( 4(3k + 1) = 12k + 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(a) Factorise the discriminant.',
                    workingLatex: '\\Delta = k^2 - 6k + 5 = (k - 1)(k - 5)',
                    explanation: 'Find two numbers that multiply to 5 and add to \\( -6 \\): these are \\( -1 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) For two distinct real roots, require \\( \\Delta > 0 \\).',
                    workingLatex: '(k - 1)(k - 5) > 0',
                    explanation: 'Two distinct real roots occur when the discriminant is strictly positive.'
                },
                {
                    stepNumber: 5,
                    description: '(b) Solve the quadratic inequality in \\( k \\).',
                    workingLatex: 'k < 1 \\quad \\text{or} \\quad k > 5',
                    explanation: 'The parabola \\( y = (k-1)(k-5) \\) opens upwards and is positive outside the roots.'
                },
                {
                    stepNumber: 6,
                    description: '(c) For \\( f(x) > 0 \\) for all \\( x \\), require \\( a > 0 \\) and \\( \\Delta < 0 \\).',
                    workingLatex: 'a = 1 > 0 \\;\\checkmark \\qquad (k - 1)(k - 5) < 0',
                    explanation: 'Since \\( a = 1 > 0 \\), the parabola opens upwards. For it to never touch or cross the \\( x \\)-axis, we need \\( \\Delta < 0 \\).'
                },
                {
                    stepNumber: 7,
                    description: '(c) Solve \\( (k - 1)(k - 5) < 0 \\).',
                    workingLatex: '1 < k < 5',
                    explanation: 'The product \\( (k-1)(k-5) \\) is negative between the roots \\( k = 1 \\) and \\( k = 5 \\). So \\( f(x) > 0 \\) for all \\( x \\) when \\( 1 < k < 5 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\Delta = (k - 1)(k - 5) \\); (b) \\( k < 1 \\) or \\( k > 5 \\); (c) \\( 1 < k < 5 \\)'
        }
    },

];
