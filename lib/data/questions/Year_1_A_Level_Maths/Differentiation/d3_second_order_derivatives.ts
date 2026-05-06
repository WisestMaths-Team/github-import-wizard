import { Question } from "@/lib/types";

/**
 * Topic: Set Notation for Inequalities
 * Ref:   a9
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
    {
        id: 'd3-001',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 01',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = x^4 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the function.',
                    workingLatex: 'y = x^4',
                    explanation: 'We need to differentiate this twice to find the second derivative.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule once.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^{4-1} = 4x^3',
                    explanation: 'Multiply by the index 4 and reduce the power by 1 to get 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power rule again.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 4 \\times 3x^{3-1} = 12x^2',
                    explanation: 'Differentiate \\(4x^3\\) by multiplying the coefficient 4 by the index 3 to get 12, and reducing the power to 2.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 \\)'
        }
    },
    {
        id: 'd3-002',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 02',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = 5x^3 - 2x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term.',
                    workingLatex: '5x^3 \\to 5 \\times 3x^{2} = 15x^2',
                    explanation: 'Multiply the coefficient 5 by the index 3, and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the second term.',
                    workingLatex: '-2x \\to -2',
                    explanation: 'The derivative of \\(-2x\\) is \\(-2\\), since the power of \\(x\\) is 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 15x^2 - 2',
                    explanation: 'Combining the results from the previous two steps gives the first derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate again for the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 30x',
                    explanation: 'Differentiating \\(15x^2\\) gives \\(30x\\). The constant \\(-2\\) vanishes on differentiation.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 30x \\)'
        }
    },
    {
        id: 'd3-003',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 03',
        difficulty: 'Foundation',
        questionText: 'Find \\( f\'\'(x) \\) when \\( f(x) = 3x^4 - 6x^2 + 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'polynomial', 'notation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term for f\'(x).',
                    workingLatex: "3x^4 \\to 12x^3, \\quad -6x^2 \\to -12x, \\quad 1 \\to 0",
                    explanation: 'Apply the power rule to each term. The constant 1 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first derivative.',
                    workingLatex: "f'(x) = 12x^3 - 12x",
                    explanation: 'Combining the results gives the first derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate f\'(x) term by term.',
                    workingLatex: "12x^3 \\to 36x^2, \\quad -12x \\to -12",
                    explanation: 'Apply the power rule again to each term of the first derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the second derivative.',
                    workingLatex: "f''(x) = 36x^2 - 12",
                    explanation: 'This is the second derivative of the original function.'
                }
            ],
            finalAnswer: "\\( f''(x) = 36x^2 - 12 \\)"
        }
    },
    {
        id: 'd3-004',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 04',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = 4x^5 - 3x^3 + 7x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term once.',
                    workingLatex: '4x^5 \\to 20x^4, \\quad -3x^3 \\to -9x^2, \\quad 7x \\to 7, \\quad -2 \\to 0',
                    explanation: 'Apply the power rule to every term. The constant \\(-2\\) vanishes.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 20x^4 - 9x^2 + 7',
                    explanation: 'Combine the differentiated terms to form dy/dx.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate each term again.',
                    workingLatex: '20x^4 \\to 80x^3, \\quad -9x^2 \\to -18x, \\quad 7 \\to 0',
                    explanation: 'Apply the power rule to each term of the first derivative. The constant 7 vanishes.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 80x^3 - 18x',
                    explanation: 'This is the required second derivative.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 80x^3 - 18x \\)'
        }
    },
    {
        id: 'd3-005',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 05',
        difficulty: 'Foundation',
        questionText: 'Find \\( f\'\'(x) \\) when \\( f(x) = x^{-2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the function in index form.',
                    workingLatex: 'f(x) = x^{-2}',
                    explanation: 'The function is already in index notation, ready to differentiate.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule once.',
                    workingLatex: "f'(x) = -2x^{-2-1} = -2x^{-3}",
                    explanation: 'Multiply by the index \\(-2\\) and reduce the power by 1 to get \\(-3\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power rule again.',
                    workingLatex: "f''(x) = (-2)(-3)x^{-3-1} = 6x^{-4}",
                    explanation: 'Differentiate \\(-2x^{-3}\\). The coefficient becomes \\((-2) \\times (-3) = 6\\) and the power decreases to \\(-4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite in fraction form.',
                    workingLatex: "f''(x) = \\frac{6}{x^4}",
                    explanation: 'A negative index means a reciprocal, so \\(x^{-4} = \\dfrac{1}{x^4}\\).'
                }
            ],
            finalAnswer: "\\( f''(x) = \\dfrac{6}{x^4} \\)"
        }
    },
    {
        id: 'd3-006',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 06',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = \\sqrt{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'fractional index', 'square root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\sqrt{x} \\) as \\( x^{1/2} \\).',
                    workingLatex: 'y = x^{1/2}',
                    explanation: 'Always convert surds to fractional powers before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{1}{2}x^{-1/2}',
                    explanation: 'Power rule: multiply by \\( \\tfrac{1}{2} \\) and reduce index to \\( -\\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\tfrac{1}{2} \\cdot \\left(-\\tfrac{1}{2}\\right) x^{-3/2} = -\\tfrac{1}{4}x^{-3/2}',
                    explanation: 'Differentiate \\( \\tfrac{1}{2}x^{-1/2} \\): reduce the index to \\( -\\tfrac{3}{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\frac{1}{4x^{3/2}}',
                    explanation: '\\( x^{-3/2} = \\dfrac{1}{x^{3/2}} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\dfrac{1}{4x^{3/2}} \\)'
        }
    },
    {
        id: 'd3-007',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 07',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = 6x^2 - \\dfrac{1}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'negative index', 'mixed terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: 'y = 6x^2 - x^{-1}',
                    explanation: 'Express \\(\\dfrac{1}{x}\\) as \\(x^{-1}\\) so the power rule can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the first term.',
                    workingLatex: '6x^2 \\to 12x',
                    explanation: 'Multiply the coefficient 6 by the index 2 to get 12, and reduce the power to 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the second term.',
                    workingLatex: '-x^{-1} \\to -(-1)x^{-2} = x^{-2}',
                    explanation: 'Multiply by the index \\(-1\\) and reduce the power to \\(-2\\). The two negatives give a positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 12x + x^{-2}',
                    explanation: 'Combine the differentiated terms.'
                },
                {
                    stepNumber: 5,
                    description: 'Differentiate dy/dx term by term.',
                    workingLatex: '12x \\to 12, \\quad x^{-2} \\to -2x^{-3}',
                    explanation: 'The derivative of \\(12x\\) is 12. For \\(x^{-2}\\), multiply by \\(-2\\) and reduce the power to \\(-3\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Write the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12 - 2x^{-3} = 12 - \\frac{2}{x^3}',
                    explanation: 'Rewrite \\(x^{-3}\\) as \\(\\dfrac{1}{x^3}\\) to express the answer in fraction form.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12 - \\dfrac{2}{x^3} \\)'
        }
    },
    {
        id: 'd3-008',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 08',
        difficulty: 'Foundation',
        questionText: 'Given \\( f(x) = 2x^3 - 9x^2 + 12x - 5 \\), find \\( f\'\'(x) \\) and hence find the value of \\( x \\) where \\( f\'\'(x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'solve', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term once.',
                    workingLatex: "2x^3 \\to 6x^2, \\quad -9x^2 \\to -18x, \\quad 12x \\to 12, \\quad -5 \\to 0",
                    explanation: 'Apply the power rule to each term. The constant \\(-5\\) vanishes.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first derivative.',
                    workingLatex: "f'(x) = 6x^2 - 18x + 12",
                    explanation: 'Combine the differentiated terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for f\'\'(x).',
                    workingLatex: "f''(x) = 12x - 18",
                    explanation: 'Differentiate \\(6x^2 \\to 12x\\) and \\(-18x \\to -18\\). The constant 12 vanishes.'
                },
                {
                    stepNumber: 4,
                    description: 'Set the second derivative to zero.',
                    workingLatex: "12x - 18 = 0",
                    explanation: 'To find where the second derivative is zero, set the expression equal to zero.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for x.',
                    workingLatex: "12x = 18 \\implies x = \\frac{18}{12} = \\frac{3}{2}",
                    explanation: 'Add 18 to both sides and divide by 12, then simplify the fraction.'
                }
            ],
            finalAnswer: "\\( f''(x) = 12x - 18 \\), so \\( f''(x) = 0 \\) when \\( x = \\dfrac{3}{2} \\)"
        }
    },
    {
        id: 'd3-009',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 09',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = (x + 2)(x - 3) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'expand brackets', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = x^2 - 3x + 2x - 6 = x^2 - x - 6',
                    explanation: 'Multiply each term in the first bracket by each term in the second, then collect like terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find dy/dx.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 1',
                    explanation: 'Differentiate each term: \\(x^2 \\to 2x\\), \\(-x \\to -1\\), and the constant \\(-6\\) vanishes.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2',
                    explanation: 'The derivative of \\(2x\\) is 2. The constant \\(-1\\) vanishes on differentiation.'
                },
                {
                    stepNumber: 4,
                    description: 'State the result.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2',
                    explanation: 'The second derivative is a constant, meaning the curve has constant concavity.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2 \\)'
        }
    },
    {
        id: 'd3-010',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 10',
        difficulty: 'Foundation',
        questionText: 'Find the second derivative of \\( y = \\dfrac{x^4 - 2x^2}{x} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify by dividing each term by x.',
                    workingLatex: 'y = \\frac{x^4}{x} - \\frac{2x^2}{x} = x^3 - 2x',
                    explanation: 'Divide each term in the numerator by \\(x\\) separately to simplify the expression.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find dy/dx.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 2',
                    explanation: 'Apply the power rule: \\(x^3 \\to 3x^2\\) and \\(-2x \\to -2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate dy/dx for the second derivative.',
                    workingLatex: '3x^2 \\to 6x, \\quad -2 \\to 0',
                    explanation: 'Differentiate each term of the first derivative. The constant \\(-2\\) vanishes.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
                    explanation: 'This is the required second derivative of the original expression.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x \\)'
        }
    },
    {
        id: 'd3-011',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 11',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( x = 2 \\), given that \\( y = x^3 - 5x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'evaluate at a point', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find dy/dx.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 5',
                    explanation: 'Apply the power rule: \\(x^3 \\to 3x^2\\) and \\(-5x \\to -5\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate again for the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
                    explanation: 'Differentiate \\(3x^2\\) to get \\(6x\\). The constant \\(-5\\) vanishes.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute x = 2.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=2} = 6(2)',
                    explanation: 'Replace \\(x\\) with 2 in the second derivative expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the result.',
                    workingLatex: '6(2) = 12',
                    explanation: 'Multiply 6 by 2 to obtain the value of the second derivative at \\(x = 2\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12 \\) when \\( x = 2 \\)'
        }
    },
    {
        id: 'd3-012',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 12',
        difficulty: 'Foundation',
        questionText: 'Given \\( f(x) = x^4 - 8x^2 \\), find \\( f\'\'(3) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'evaluate at a point', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term once.',
                    workingLatex: "x^4 \\to 4x^3, \\quad -8x^2 \\to -16x",
                    explanation: 'Apply the power rule to each term of \\(f(x)\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first derivative.',
                    workingLatex: "f'(x) = 4x^3 - 16x",
                    explanation: 'Combine the differentiated terms to form \\(f\'(x)\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for f\'\'(x).',
                    workingLatex: "f''(x) = 12x^2 - 16",
                    explanation: 'Differentiate \\(4x^3 \\to 12x^2\\) and \\(-16x \\to -16\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute x = 3.',
                    workingLatex: "f''(3) = 12(3)^2 - 16 = 12(9) - 16",
                    explanation: 'Replace \\(x\\) with 3 in the second derivative. Note that \\(3^2 = 9\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the result.',
                    workingLatex: "f''(3) = 108 - 16 = 92",
                    explanation: 'Multiply \\(12 \\times 9 = 108\\), then subtract 16 to get 92.'
                }
            ],
            finalAnswer: "\\( f''(3) = 92 \\)"
        }
    },
    {
        id: 'd3-013',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 13',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( x = -1 \\), given \\( y = 2x^4 - x^3 + 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'evaluate at a point', 'negative x value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term once.',
                    workingLatex: '2x^4 \\to 8x^3, \\quad -x^3 \\to -3x^2, \\quad 5 \\to 0',
                    explanation: 'Apply the power rule to each term. The constant 5 vanishes on differentiation.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 8x^3 - 3x^2',
                    explanation: 'Combine the differentiated terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 24x^2 - 6x',
                    explanation: 'Differentiate \\(8x^3 \\to 24x^2\\) and \\(-3x^2 \\to -6x\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute x = -1.',
                    workingLatex: '24(-1)^2 - 6(-1)',
                    explanation: 'Replace \\(x\\) with \\(-1\\) in the second derivative expression.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the result.',
                    workingLatex: '24(1) - (-6) = 24 + 6 = 30',
                    explanation: '\\((-1)^2 = 1\\) so the first term is 24. The second term \\(-6(-1) = +6\\). Adding gives 30.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 30 \\) when \\( x = -1 \\)'
        }
    },
    {
        id: 'd3-014',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 14',
        difficulty: 'Foundation',
        questionText: 'For the curve \\( y = x^3 - 6x^2 + 9x + 1 \\), find the coordinates of the stationary points and use the second derivative test to determine their nature.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'nature of stationary points', 'second derivative test'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) and solve.',
                    workingLatex: '3x^2 - 12x + 9 = 0 \\implies x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0',
                    explanation: 'Divide by 3, then factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinates.',
                    workingLatex: 'x=1: y = 1 - 6 + 9 + 1 = 5; \\quad x=3: y = 27 - 54 + 27 + 1 = 1',
                    explanation: 'Substitute each \\( x \\) into the original equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 12',
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the second derivative test.',
                    workingLatex: 'x=1: \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6(1) - 12 = -6 < 0 \\Rightarrow \\text{maximum} \\newline x=3: \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6(3) - 12 = 6 > 0 \\Rightarrow \\text{minimum}',
                    explanation: 'If \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} < 0 \\) at the point, it is a local maximum; if \\( > 0 \\), a local minimum.'
                }
            ],
            finalAnswer: 'Local maximum at \\( (1, 5) \\); local minimum at \\( (3, 1) \\)'
        }
    },
    {
        id: 'd3-015',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 15',
        difficulty: 'Foundation',
        questionText: 'Find the stationary point of \\( y = x^2 - 8x + 3 \\) and use the second derivative to determine its nature.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary point', 'nature', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 8',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to 0.',
                    workingLatex: '2x - 8 = 0 \\implies x = 4',
                    explanation: 'Solve the linear equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = 16 - 32 + 3 = -13',
                    explanation: 'Substitute \\( x = 4 \\) into the original curve.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative test.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2 > 0',
                    explanation: 'The second derivative is constant and positive, so the stationary point is a minimum.'
                }
            ],
            finalAnswer: 'Local minimum at \\( (4, -13) \\)'
        }
    },
    {
        id: 'd3-016',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 16',
        difficulty: 'Foundation',
        questionText: 'Find the stationary points of \\( y = 2x^3 - 3x^2 - 12x + 5 \\) and determine their nature using the second derivative test.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'nature', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 6x - 12',
                    explanation: 'Differentiate term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).',
                    workingLatex: '6x^2 - 6x - 12 = 0 \\implies x^2 - x - 2 = 0 \\implies (x-2)(x+1) = 0',
                    explanation: 'Divide by 6, then factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\)-coordinates at \\( x = 2 \\) and \\( x = -1 \\).',
                    workingLatex: 'x=2: y = 16 - 12 - 24 + 5 = -15; \\quad x=-1: y = -2 - 3 + 12 + 5 = 12',
                    explanation: 'Substitute each \\( x \\) back into \\( y \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x - 6',
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'Test each point.',
                    workingLatex: 'x=2: 12(2)-6 = 18 > 0 \\Rightarrow \\text{minimum} \\newline x=-1: 12(-1)-6 = -18 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Positive second derivative → minimum; negative → maximum.'
                }
            ],
            finalAnswer: 'Local minimum at \\( (2, -15) \\); local maximum at \\( (-1, 12) \\)'
        }
    },
    {
        id: 'd3-017',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 17',
        difficulty: 'Foundation',
        questionText: 'Show that the curve \\( y = x^3 \\) has a stationary point of inflection at the origin.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'point of inflection', 'show that', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Stationary points: set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).',
                    workingLatex: '3x^2 = 0 \\implies x = 0',
                    explanation: 'There is exactly one stationary point at \\( x = 0 \\), which gives \\( y = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
                    explanation: 'Differentiate \\(3x^2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the second derivative at \\( x = 0 \\).',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=0} = 0',
                    explanation: 'The second derivative is zero, so the test is inconclusive. Check behaviour either side: for \\(x < 0\\), \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 > 0 \\); for \\( x > 0 \\), \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} > 0 \\). The gradient does not change sign, confirming a point of inflection.'
                }
            ],
            finalAnswer: 'Stationary point of inflection at \\( (0, 0) \\)'
        }
    },
    {
        id: 'd3-018',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 18',
        difficulty: 'Foundation',
        questionText: 'Find the stationary point of \\( y = -x^2 + 6x - 4 \\) and determine its nature.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary point', 'maximum', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -2x + 6',
                    explanation: 'Differentiate \\(-x^2 + 6x - 4\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to 0.',
                    workingLatex: '-2x + 6 = 0 \\implies x = 3',
                    explanation: 'Solve for \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = -(9) + 18 - 4 = 5',
                    explanation: 'Substitute \\( x = 3 \\) into the original.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -2 < 0',
                    explanation: 'The second derivative is constant and negative, confirming a maximum.'
                }
            ],
            finalAnswer: 'Local maximum at \\( (3, 5) \\)'
        }
    },
    {
        id: 'd3-019',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 19',
        difficulty: 'Foundation',
        questionText: 'Find and classify the stationary points of \\( f(x) = x^4 - 4x^2 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'quartic', 'nature'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Find \\( f'(x) \\).",
                    workingLatex: "f'(x) = 4x^3 - 8x",
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: "Solve \\( f'(x) = 0 \\).",
                    workingLatex: '4x(x^2 - 2) = 0 \\implies x = 0,\\; x = \\sqrt{2},\\; x = -\\sqrt{2}',
                    explanation: 'Factorise: \\(4x^3 - 8x = 4x(x^2-2) = 0\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'f(0)=0; \\quad f(\\sqrt{2}) = 4 - 8 = -4; \\quad f(-\\sqrt{2}) = -4',
                    explanation: 'Substitute each \\( x \\) into \\( f(x) = x^4 - 4x^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: "Find \\( f''(x) \\).",
                    workingLatex: "f''(x) = 12x^2 - 8",
                    explanation: 'Differentiate \\(4x^3 - 8x\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the test.',
                    workingLatex: "f''(0) = -8 < 0 \\Rightarrow \\text{maximum} \\newline f''(\\pm\\sqrt{2}) = 12(2) - 8 = 16 > 0 \\Rightarrow \\text{minima}",
                    explanation: 'Substitute each \\( x \\) into \\( f\'\'(x) \\).'
                }
            ],
            finalAnswer: 'Local maximum at \\( (0, 0) \\); local minima at \\( (\\sqrt{2}, -4) \\) and \\( (-\\sqrt{2}, -4) \\)'
        }
    },
    {
        id: 'd3-020',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 20',
        difficulty: 'Foundation',
        questionText: 'Find the second derivative of \\( y = 3x^{1/3} \\) and write your answer without negative or fractional indices.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'fractional index', 'simplify'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule for dy/dx.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3 \\cdot \\tfrac{1}{3} x^{1/3 - 1}',
                    explanation: 'Bring down the power and reduce the index by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the first derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x^{-2/3}',
                    explanation: 'The coefficient simplifies to 1 and the index becomes \\(-\\tfrac{2}{3}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\tfrac{2}{3} x^{-2/3 - 1}',
                    explanation: 'Bring down the power \\(-\\tfrac{2}{3}\\) and reduce the index by 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\tfrac{2}{3}x^{-5/3}',
                    explanation: 'The index simplifies to \\(-\\tfrac{5}{3}\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Rewrite with a positive index.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\frac{2}{3x^{5/3}}',
                    explanation: 'Move \\(x^{-5/3}\\) to the denominator to eliminate the negative index.'
                },
                {
                    stepNumber: 6,
                    description: 'Express without fractional indices.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\frac{2}{3\\sqrt[3]{x^5}}',
                    explanation: 'Rewrite \\(x^{5/3}\\) as \\(\\sqrt[3]{x^5}\\) to remove the fractional index.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -\\dfrac{2}{3\\sqrt[3]{x^5}} \\)'
        }
    },
    {
        id: 'd3-021',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 21',
        difficulty: 'Foundation',
        questionText: 'Find the second derivative of \\( y = x(x^2 - 5) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'expand brackets', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = x \\cdot x^2 - x \\cdot 5',
                    explanation: 'Distribute \\(x\\) across each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the expanded expression.',
                    workingLatex: 'y = x^3 - 5x',
                    explanation: 'Combine to give a standard polynomial.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate to find dy/dx.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 5',
                    explanation: 'Apply the power rule to each term: \\(x^3\\) gives \\(3x^2\\) and \\(-5x\\) gives \\(-5\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate again for the second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
                    explanation: 'Differentiate \\(3x^2\\) to get \\(6x\\); the constant \\(-5\\) vanishes.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x \\)'
        }
    },
    {
        id: 'd3-022',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 22',
        difficulty: 'Foundation',
        questionText: 'Find the second derivative of \\( f(x) = \\dfrac{x^5 + 3x^3}{x^2} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into separate terms.',
                    workingLatex: 'f(x) = \\frac{x^5}{x^2} + \\frac{3x^3}{x^2}',
                    explanation: 'Write each term in the numerator as its own fraction over \\(x^2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    workingLatex: 'f(x) = x^3 + 3x',
                    explanation: 'Subtract the indices: \\(x^{5-2} = x^3\\) and \\(3x^{3-2} = 3x\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate to find f\'(x).',
                    workingLatex: "f'(x) = 3x^2 + 3",
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate again to find f\'\'(x).',
                    workingLatex: "f''(x) = 6x",
                    explanation: 'Differentiate \\(3x^2\\) to get \\(6x\\); the constant \\(3\\) vanishes.'
                }
            ],
            finalAnswer: "\\( f''(x) = 6x \\)"
        }
    },
    {
        id: 'd3-023',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 23',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 12x \\). Find the coordinates of both stationary points. Use the second derivative to determine whether each is a maximum or minimum.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'nature', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 3x^2 - 12 = 0 \\).',
                    workingLatex: 'x^2 = 4 \\implies x = \\pm 2',
                    explanation: 'Divide by 3 and take square roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\)-coordinates.',
                    workingLatex: 'x=2: y = 8 - 24 = -16; \\quad x=-2: y = -8 + 24 = 16',
                    explanation: 'Substitute into \\( y = x^3 - 12x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'Second derivative test.',
                    workingLatex: 'x=2: 6(2) = 12 > 0 \\Rightarrow \\text{minimum} \\newline x=-2: 6(-2) = -12 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Positive \\( \\Rightarrow \\) minimum; negative \\( \\Rightarrow \\) maximum.'
                }
            ],
            finalAnswer: 'Local minimum at \\( (2, -16) \\); local maximum at \\( (-2, 16) \\)'
        }
    },
    {
        id: 'd3-024',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 24',
        difficulty: 'Foundation',
        questionText: 'A function is defined as \\( f(x) = x^3 + px^2 + q \\), where \\( p \\) and \\( q \\) are constants. Given that \\( f\'\'(2) = 0 \\), find the value of \\( p \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'unknown constant', 'solve for p'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find f\'(x).',
                    workingLatex: "f'(x) = 3x^2 + 2px",
                    explanation: 'Apply the power rule term by term. The constant \\(q\\) differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate again to find f\'\'(x).',
                    workingLatex: "f''(x) = 6x + 2p",
                    explanation: 'Differentiate \\(3x^2\\) to get \\(6x\\) and \\(2px\\) to get \\(2p\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2 \\) into f\'\'(x).',
                    workingLatex: "f''(2) = 6(2) + 2p = 12 + 2p",
                    explanation: 'Replace \\(x\\) with 2 in the second derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Set equal to 0 and solve for p.',
                    workingLatex: '12 + 2p = 0 \\implies 2p = -12 \\implies p = -6',
                    explanation: 'Rearrange the equation to isolate \\(p\\).'
                }
            ],
            finalAnswer: '\\( p = -6 \\)'
        }
    },
    {
        id: 'd3-025',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 25',
        difficulty: 'Foundation',
        questionText: 'A curve has equation \\( y = ax^3 + bx \\). Given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) at \\( x = 1 \\) and \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -6 \\) at \\( x = 1 \\), find the values of \\( a \\) and \\( b \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'simultaneous equations', 'unknown constants'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3ax^2 + b',
                    explanation: 'Differentiate \\( y = ax^3 + bx \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) at \\( x = 1 \\).',
                    workingLatex: '3a + b = 0 \\quad \\cdots (1)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6ax',
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Use \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -6 \\) at \\( x = 1 \\).',
                    workingLatex: '6a = -6 \\implies a = -1 \\quad \\cdots (2)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Back-substitute \\( a = -1 \\) into equation (1).',
                    workingLatex: '3(-1) + b = 0 \\implies b = 3',
                    explanation: 'Solve for \\( b \\).'
                }
            ],
            finalAnswer: '\\( a = -1,\\; b = 3 \\)'
        }
    },
    {
        id: 'd3-026',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 26',
        difficulty: 'Foundation',
        questionText: 'For \\( y = x^4 - 2x^3 \\), find both stationary points and determine their nature.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'quartic', 'nature'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 6x^2',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 4x^3 - 6x^2 = 0 \\).',
                    workingLatex: '2x^2(2x - 3) = 0 \\implies x = 0 \\text{ or } x = \\tfrac{3}{2}',
                    explanation: 'Factorise by taking out \\( 2x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'x=0: y=0; \\quad x=\\tfrac{3}{2}: y = \\tfrac{81}{16} - 2 \\cdot \\tfrac{27}{8} = \\tfrac{81}{16} - \\tfrac{54}{8} = \\tfrac{81}{16} - \\tfrac{108}{16} = -\\tfrac{27}{16}',
                    explanation: 'Substitute each \\( x \\) into \\( y = x^4 - 2x^3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 12x',
                    explanation: 'Differentiate \\(4x^3 - 6x^2\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the test.',
                    workingLatex: 'x=0: 0 - 0 = 0 \\Rightarrow \\text{inconclusive (point of inflection)} \\newline x=\\tfrac{3}{2}: 12(\\tfrac{9}{4}) - 12(\\tfrac{3}{2}) = 27 - 18 = 9 > 0 \\Rightarrow \\text{minimum}',
                    explanation: 'At \\( x = 0 \\) the second derivative is 0; checking the sign of the first derivative either side confirms a point of inflection (not a turning point).'
                }
            ],
            finalAnswer: 'Point of inflection at \\( (0, 0) \\); local minimum at \\( \\left(\\dfrac{3}{2}, -\\dfrac{27}{16}\\right) \\)'
        }
    },
    {
        id: 'd3-027',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 27',
        difficulty: 'Foundation',
        questionText: 'Verify that \\( y = 4x^3 - 3x^4 \\) has a local maximum at \\( x = 1 \\) by finding \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) and evaluating it there.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'verify maximum', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^2 - 12x^3',
                    explanation: 'Differentiate term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Check \\( x = 1 \\) is indeed a stationary point.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\bigg|_{x=1} = 12 - 12 = 0 \\checkmark',
                    explanation: 'A stationary point requires \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 24x - 36x^2',
                    explanation: 'Differentiate \\(12x^2 - 12x^3\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate at \\( x = 1 \\).',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=1} = 24 - 36 = -12 < 0',
                    explanation: 'Since the second derivative is negative, the stationary point is a local maximum. ✓'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -12 < 0 \\) at \\( x = 1 \\), confirming a local maximum'
        }
    },
    {
        id: 'd3-028',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 28',
        difficulty: 'Foundation',
        questionText: 'A function is given by \\( f(x) = 2x^3 - 3x^2 - 36x + 10 \\).\n(a) Find \\( f\'\'(x) \\).\n(b) Find the value(s) of \\( x \\) for which \\( f\'\'(x) < 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'inequality', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate to find f\'(x).',
                    workingLatex: "f'(x) = 6x^2 - 6x - 36",
                    explanation: 'Apply the power rule to each term. The constant 10 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate again to find f\'\'(x).',
                    workingLatex: "f''(x) = 12x - 6",
                    explanation: 'Differentiate \\(6x^2\\) to get \\(12x\\), \\(-6x\\) to get \\(-6\\), and the constant \\(-36\\) vanishes.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set up the inequality.',
                    workingLatex: '12x - 6 < 0',
                    explanation: 'Substitute the expression for \\(f\'\'(x)\\) into the inequality.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the inequality for x.',
                    workingLatex: '12x < 6 \\implies x < \\tfrac{1}{2}',
                    explanation: 'Add 6 to both sides, then divide both sides by 12.'
                }
            ],
            finalAnswer: "(a) \\( f''(x) = 12x - 6 \\) \\newline (b) \\( x < \\dfrac{1}{2} \\)"
        }
    },
    {
        id: 'd3-029',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 29',
        difficulty: 'Foundation',
        questionText: 'Find and classify the stationary point of \\( y = x^2 e^0 + 4x - 7 \\). \\newline (Note: treat this as \\( y = x^2 + 4x - 7 \\).)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary point', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify: \\( e^0 = 1 \\), so \\( y = x^2 + 4x - 7 \\).',
                    workingLatex: 'y = x^2 + 4x - 7',
                    explanation: 'Any number to the power 0 equals 1.'
                },
                {
                    stepNumber: 2,
                    description: 'First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 4',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Set to 0.',
                    workingLatex: '2x + 4 = 0 \\implies x = -2',
                    explanation: 'Solve for \\(x\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 4 - 8 - 7 = -11',
                    explanation: 'Substitute \\( x = -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2 > 0',
                    explanation: 'Constant positive second derivative → minimum.'
                }
            ],
            finalAnswer: 'Local minimum at \\( (-2, -11) \\)'
        }
    },
    {
        id: 'd3-030',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 30',
        difficulty: 'Foundation',
        questionText: 'Given \\( y = 5x^2 - x^3 \\), find the range of values of \\( x \\) for which the curve is concave (i.e. \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} < 0 \\)).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'concavity', 'inequality', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term once.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 10x - 3x^2',
                    explanation: 'Using the power rule: the derivative of 5x^2 is 10x and the derivative of -x^3 is -3x^2.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate again for d²y/dx².',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 10 - 6x',
                    explanation: 'Differentiating the first derivative term by term: the derivative of 10x is 10 and the derivative of -3x^2 is -6x.'
                },
                {
                    stepNumber: 3,
                    description: 'Set d²y/dx² less than zero.',
                    workingLatex: '10 - 6x < 0',
                    explanation: 'The curve is concave where the second derivative is negative, so we set up this inequality.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange the inequality.',
                    workingLatex: '10 < 6x \\implies \\frac{10}{6} < x \\implies x > \\frac{5}{3}',
                    explanation: 'Add 6x to both sides, then divide both sides by 6. Since 6 is positive, the inequality sign does not flip.'
                }
            ],
            finalAnswer: '\\( x > \\dfrac{5}{3} \\)'
        }
    },
    {
        id: 'd3-031',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 31',
        difficulty: 'Foundation',
        questionText: 'A curve \\( C \\) has equation \\( y = x^3 - 3x^2 - 9x + 5 \\).\n(a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) and \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\).\n(b) Find the coordinates of the stationary points of \\( C \\).\n(c) Determine the nature of each stationary point.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'nature', 'cubic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 9',
                    explanation: 'Power rule applied term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 6',
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).',
                    workingLatex: '3x^2 - 6x - 9 = 0 \\implies x^2 - 2x - 3 = 0 \\implies (x-3)(x+1) = 0',
                    explanation: 'Divide by 3, then factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-coordinates.',
                    workingLatex: 'x=3: y = 27 - 27 - 27 + 5 = -22 \\newline x=-1: y = -1 - 3 + 9 + 5 = 10',
                    explanation: 'Substitute into the original equation.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Apply second derivative test.',
                    workingLatex: 'x=3: 6(3)-6 = 12 > 0 \\Rightarrow \\text{minimum} \\newline x=-1: 6(-1)-6 = -12 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Substitute into \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 6 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2-6x-9 \\), \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x-6 \\) \\newline (b) \\( (3, -22) \\) and \\( (-1, 10) \\) \\newline (c) Local minimum at \\( (3,-22) \\); local maximum at \\( (-1,10) \\)'
        }
    },
    {
        id: 'd3-032',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 32',
        difficulty: 'Foundation',
        questionText: 'A curve has equation \\( y = x^4 - 8x^2 + 3 \\).\n(a) Find all stationary points.\n(b) Use the second derivative to classify each one.\n(c) State the coordinates of the global minimum for \\( x \\geq 0 \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'quartic', 'global minimum', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) First derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 16x',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 4x^3 - 16x = 0 \\).',
                    workingLatex: '4x(x^2 - 4) = 0 \\implies x = 0,\\; x = 2,\\; x = -2',
                    explanation: 'Factorise \\( 4x(x-2)(x+2) = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'y(0) = 3; \\quad y(2) = 16 - 32 + 3 = -13; \\quad y(-2) = -13',
                    explanation: 'Substitute into \\( y = x^4 - 8x^2 + 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Second derivative.',
                    workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 16',
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'Classify.',
                    workingLatex: 'x=0: 0-16 = -16 < 0 \\Rightarrow \\text{maximum} \\newline x=\\pm 2: 48-16 = 32 > 0 \\Rightarrow \\text{minima}',
                    explanation: 'Apply the second derivative test at each stationary point.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Global minimum for \\( x \\geq 0 \\).',
                    workingLatex: 'x = 2,\\; y = -13',
                    explanation: 'The only minimum for \\( x \\geq 0 \\) occurs at \\( x = 2 \\).'
                }
            ],
            finalAnswer: '(a) Stationary points at \\( (0,3) \\), \\( (2,-13) \\), \\( (-2,-13) \\) \\newline (b) Maximum at \\( (0,3) \\); minima at \\( (2,-13) \\) and \\( (-2,-13) \\) \\newline (c) Global minimum for \\( x \\geq 0 \\) at \\( (2,-13) \\)'
        }
    },
    {
        id: 'd3-033',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 33',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = \\dfrac{k}{x^2} + 4x \\), where \\( k \\) is a positive constant, has a stationary point at \\( x = 2 \\).\n\na) Show that \\( k = 16 \\).\nb) Use the second derivative to confirm that this stationary point is a minimum.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'unknown constant', 'show that', 'minimum', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: 'f(x) = kx^{-2} + 4x',
                    explanation: '\\( \\dfrac{k}{x^2} = kx^{-2} \\).'
                },
                {
                    stepNumber: 2,
                    description: "(a) Find \\( f'(x) \\).",
                    workingLatex: "f'(x) = -2kx^{-3} + 4",
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: "Substitute \\( x = 2 \\) and set \\( f'(2) = 0 \\).",
                    workingLatex: '-2k(2)^{-3} + 4 = 0 \\implies -\\tfrac{2k}{8} + 4 = 0 \\implies -\\tfrac{k}{4} + 4 = 0',
                    explanation: 'Since there is a stationary point at \\( x = 2 \\), the derivative must equal zero there. Note \\( (2)^{-3} = \\tfrac{1}{8} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '\\tfrac{k}{4} = 4 \\implies k = 16 \\quad \\checkmark',
                    explanation: 'Rearranging gives \\( k = 16 \\) as required.'
                },
                {
                    stepNumber: 5,
                    description: "(b) Find \\( f''(x) \\).",
                    workingLatex: "f''(x) = 6kx^{-4}",
                    explanation: 'Differentiate \\( -2kx^{-3} + 4 \\): derivative of \\(-2kx^{-3}\\) is \\( 6kx^{-4} \\); constant vanishes.'
                },
                {
                    stepNumber: 6,
                    description: "Evaluate \\( f''(2) \\) with \\( k = 16 \\).",
                    workingLatex: "f''(2) = 6(16)(2)^{-4} = 96 \\cdot \\tfrac{1}{16} = 6 > 0",
                    explanation: 'Positive second derivative → minimum. ✓'
                }
            ],
            finalAnswer: 'a) \\( k = 16 \\). b) \\( f\'\'(2) = 6 > 0 \\), confirming a local minimum.'
        }
    },
    {
        id: 'd3-034',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 34',
        difficulty: 'Foundation',
        questionText: 'A curve \\( C \\) has equation \\( y = f(x) \\), where \\( f(x) = 2x^3 + 3x^2 - 12x + 1 \\).\n(a) Find \\( f\'(x) \\) and \\( f\'\'(x) \\).\n(b) Find the coordinates of the stationary points of \\( C \\).\n(c) Determine the nature of each stationary point using the second derivative.\n(d) Find the range of values of \\( x \\) for which \\( f\'\'(x) > 0 \\).',
        marks: 10,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'stationary points', 'nature', 'inequality', 'cubic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "(a) Find \\( f'(x) \\).",
                    workingLatex: "f'(x) = 6x^2 + 6x - 12",
                    explanation: 'Power rule applied term by term.'
                },
                {
                    stepNumber: 2,
                    description: "Find \\( f''(x) \\).",
                    workingLatex: "f''(x) = 12x + 6",
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 3,
                    description: "(b) Set \\( f'(x) = 0 \\).",
                    workingLatex: '6x^2 + 6x - 12 = 0 \\implies x^2 + x - 2 = 0 \\implies (x+2)(x-1) = 0',
                    explanation: 'Divide by 6, then factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-coordinates.',
                    workingLatex: 'f(1) = 2 + 3 - 12 + 1 = -6 \\newline f(-2) = -16 + 12 + 24 + 1 = 21',
                    explanation: 'Substitute \\( x = 1 \\) and \\( x = -2 \\) into \\( f(x) \\).'
                },
                {
                    stepNumber: 5,
                    description: "(c) Second derivative test.",
                    workingLatex: "f''(1) = 12 + 6 = 18 > 0 \\Rightarrow \\text{minimum} \\newline f''(-2) = -24 + 6 = -18 < 0 \\Rightarrow \\text{maximum}",
                    explanation: 'Substitute each \\( x \\) into \\( f\'\'(x) = 12x + 6 \\).'
                },
                {
                    stepNumber: 6,
                    description: "(d) Solve \\( f''(x) > 0 \\).",
                    workingLatex: '12x + 6 > 0 \\implies x > -\\tfrac{1}{2}',
                    explanation: 'Rearrange the inequality.'
                }
            ],
            finalAnswer: "(a) \\( f'(x) = 6x^2+6x-12 \\), \\( f''(x) = 12x+6 \\) \\newline (b) \\( (1,-6) \\) and \\( (-2,21) \\) \\newline (c) Minimum at \\( (1,-6) \\); maximum at \\( (-2,21) \\) \\newline (d) \\( x > -\\dfrac{1}{2} \\)"
        }
    },
    {
        id: 'd3-035',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 35',
        difficulty: 'Foundation',
        questionText: 'A manufacturer models the profit \\( P \\) (in thousands of pounds) from producing \\( x \\) units (in hundreds) as \\( P(x) = -x^3 + 6x^2 + 15x \\) for \\( 0 \\leq x \\leq 8 \\).\n(a) Find \\( P\'(x) \\) and \\( P\'\'(x) \\).\n(b) Find the value of \\( x \\) that gives a stationary point in \\( (0, 8) \\) and verify it is a maximum using the second derivative.\n(c) State the maximum profit.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'optimisation', 'maximum', 'real-world context', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "(a) Find \\( P'(x) \\).",
                    workingLatex: "P'(x) = -3x^2 + 12x + 15",
                    explanation: 'Differentiate term by term.'
                },
                {
                    stepNumber: 2,
                    description: "Find \\( P''(x) \\).",
                    workingLatex: "P''(x) = -6x + 12",
                    explanation: 'Differentiate the first derivative.'
                },
                {
                    stepNumber: 3,
                    description: "(b) Set \\( P'(x) = 0 \\).",
                    workingLatex: '-3x^2 + 12x + 15 = 0 \\implies x^2 - 4x - 5 = 0 \\implies (x-5)(x+1) = 0',
                    explanation: 'Divide by \\(-3\\) (flip signs), then factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Select the stationary point in \\( (0, 8) \\).',
                    workingLatex: 'x = 5 \\quad (x = -1 \\text{ is outside the domain})',
                    explanation: 'Only \\( x = 5 \\) lies in the interval \\( 0 \\leq x \\leq 8 \\).'
                },
                {
                    stepNumber: 5,
                    description: "Second derivative at \\( x = 5 \\).",
                    workingLatex: "P''(5) = -30 + 12 = -18 < 0",
                    explanation: 'Negative second derivative confirms a local maximum.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Maximum profit.',
                    workingLatex: 'P(5) = -(125) + 6(25) + 15(5) = -125 + 150 + 75 = 100',
                    explanation: 'Substitute \\( x = 5 \\) into \\( P(x) \\).'
                }
            ],
            finalAnswer: "(a) \\( P'(x) = -3x^2+12x+15 \\), \\( P''(x) = -6x+12 \\) \\newline (b) Maximum at \\( x = 5 \\) (\\( P''(5) = -18 < 0 \\)) \\newline (c) Maximum profit = £100\\,000"
        }
    },

    // TYPE H (36–42): Second derivative of functions with negative/fractional indices
    {
        id: 'd3-036',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 36',
        difficulty: 'Standard',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = \\dfrac{3}{x^2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite with a negative index.',
                    workingLatex: 'y = 3x^{-2}',
                    explanation: 'Rewrite the fraction as a negative power so the power rule can be applied: 3/x^2 = 3x^{-2}.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply power rule for dy/dx.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3 \\times (-2) \\, x^{-2-1} = -6x^{-3}',
                    explanation: 'Multiply the coefficient by the power and reduce the power by 1: 3 times -2 gives -6, and -2 minus 1 gives -3.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for d²y/dx².',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -6 \\times (-3) \\, x^{-3-1} = 18x^{-4}',
                    explanation: 'Applying the power rule to -6x^{-3}: multiply -6 by -3 to get 18, and reduce the power from -3 to -4.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with a positive index.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\dfrac{18}{x^4}',
                    explanation: 'Convert the negative index back to a fraction for a cleaner final answer.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\dfrac{18}{x^4} \\)"
        }
    },
    {
        id: 'd3-037',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 37',
        difficulty: 'Standard',
        questionText: 'Find \\( f\'\'(x) \\) when \\( f(x) = \\dfrac{4}{\\sqrt{x}} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'fractional index', 'root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: 'f(x) = 4x^{-1/2}',
                    explanation: 'Express the square root as a power: 1/sqrt(x) = x^{-1/2}, so 4/sqrt(x) = 4x^{-1/2}.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply power rule for f\'(x).',
                    workingLatex: "f'(x) = 4 \\times \\left(-\\tfrac{1}{2}\\right) x^{-1/2 - 1} = -2x^{-3/2}",
                    explanation: 'Multiply the coefficient 4 by the power -1/2 to get -2, and reduce the power by 1 to get -3/2.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for f\'\'(x).',
                    workingLatex: "f''(x) = -2 \\times \\left(-\\tfrac{3}{2}\\right) x^{-3/2 - 1} = 3x^{-5/2}",
                    explanation: 'Multiply -2 by -3/2 to get 3, and reduce the power from -3/2 to -5/2.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with a positive index.',
                    workingLatex: "f''(x) = \\dfrac{3}{x^{5/2}} = \\dfrac{3}{x^2\\sqrt{x}}",
                    explanation: 'Convert x^{-5/2} back to fractional form. Since x^{5/2} = x^2 times x^{1/2} = x^2 sqrt(x), the result follows.'
                }
            ],
            finalAnswer: "\\( f''(x) = \\dfrac{3}{x^2\\sqrt{x}} \\)"
        }
    },
    {
        id: 'd3-038',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 38',
        difficulty: 'Standard',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = 2x^3 + \\dfrac{5}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'mixed indices'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite 5/x as a negative index.',
                    workingLatex: 'y = 2x^3 + 5x^{-1}',
                    explanation: 'Express 5/x as 5x^{-1} so that the power rule can be applied to every term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply power rule for dy/dx.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 5x^{-2}',
                    explanation: 'Differentiate each term: 2x^3 gives 6x^2, and 5x^{-1} gives 5 times (-1) x^{-2} = -5x^{-2}.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for d²y/dx².',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x + 10x^{-3}',
                    explanation: 'Differentiate each term of dy/dx: 6x^2 gives 12x, and -5x^{-2} gives -5 times (-2) x^{-3} = 10x^{-3}.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with positive indices.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x + \\dfrac{10}{x^3}',
                    explanation: 'Convert 10x^{-3} back to fractional form for the final answer.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x + \\dfrac{10}{x^3} \\)"
        }
    },
    {
        id: 'd3-039',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 39',
        difficulty: 'Standard',
        questionText: 'Given \\( y = x^{3/2} + 4x^{1/2} \\), find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term once.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{3}{2}x^{1/2} + 4 \\times \\tfrac{1}{2} x^{-1/2} = \\tfrac{3}{2}x^{1/2} + 2x^{-1/2}',
                    explanation: 'Apply the power rule to x^{3/2} to get (3/2)x^{1/2}, and to 4x^{1/2} to get 2x^{-1/2}.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate again for d²y/dx².',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\tfrac{3}{2} \\times \\tfrac{1}{2} x^{-1/2} + 2 \\times \\left(-\\tfrac{1}{2}\\right) x^{-3/2} = \\tfrac{3}{4}x^{-1/2} - x^{-3/2}',
                    explanation: 'Differentiate each term of dy/dx using the power rule. The coefficient (3/2)(1/2) = 3/4 and the coefficient 2(-1/2) = -1.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite with positive indices.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\dfrac{3}{4\\sqrt{x}} - \\dfrac{1}{x\\sqrt{x}}',
                    explanation: 'Convert x^{-1/2} to 1/sqrt(x) and x^{-3/2} to 1/(x sqrt(x)) for a cleaner final form.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\dfrac{3}{4\\sqrt{x}} - \\dfrac{1}{x\\sqrt{x}} \\)"
        }
    },
    {
        id: 'd3-040',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 40',
        difficulty: 'Standard',
        questionText: 'Find the second derivative of \\( f(x) = \\dfrac{x^3 - 2x}{x^2} \\) for \\( x \\neq 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'simplify first', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify by dividing each term.',
                    workingLatex: 'f(x) = \\dfrac{x^3}{x^2} - \\dfrac{2x}{x^2} = x - 2x^{-1}',
                    explanation: 'Divide each numerator term by x^2 separately. This gives x and -2/x = -2x^{-1}.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply power rule for f\'(x).',
                    workingLatex: "f'(x) = 1 - 2 \\times (-1) x^{-2} = 1 + 2x^{-2}",
                    explanation: 'The derivative of x is 1. For -2x^{-1}, multiply -2 by -1 to get 2, and reduce the power to -2.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for f\'\'(x).',
                    workingLatex: "f''(x) = 2 \\times (-2) x^{-3} = -4x^{-3}",
                    explanation: 'The derivative of 1 is 0. For 2x^{-2}, multiply 2 by -2 to get -4, and reduce the power to -3.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with a positive index.',
                    workingLatex: "f''(x) = -\\dfrac{4}{x^3}",
                    explanation: 'Convert -4x^{-3} to fractional form for the final answer.'
                }
            ],
            finalAnswer: "\\( f''(x) = -\\dfrac{4}{x^3} \\)"
        }
    },
    {
        id: 'd3-041',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 41',
        difficulty: 'Standard',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) when \\( y = (x + 3)^2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'expand first', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the bracket.',
                    workingLatex: 'y = (x+3)^2 = x^2 + 6x + 9',
                    explanation: 'Use the identity (a + b)^2 = a^2 + 2ab + b^2 with a = x and b = 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term once.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 6',
                    explanation: 'The derivative of x^2 is 2x, the derivative of 6x is 6, and the constant 9 vanishes.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for d²y/dx².',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2',
                    explanation: 'The derivative of 2x is 2, and the constant 6 vanishes. The second derivative is a constant.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 2 \\)"
        }
    },
    {
        id: 'd3-042',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 42',
        difficulty: 'Standard',
        questionText: 'Find the second derivative of \\( y = \\sqrt{x}(x - 3) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'expand first', 'root', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand using index notation.',
                    workingLatex: 'y = x^{1/2} \\cdot x - 3 \\cdot x^{1/2} = x^{3/2} - 3x^{1/2}',
                    explanation: 'Write sqrt(x) as x^{1/2}. Then sqrt(x) times x = x^{1/2 + 1} = x^{3/2}, and sqrt(x) times -3 = -3x^{1/2}.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term for dy/dx.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{3}{2}x^{1/2} - 3 \\times \\tfrac{1}{2} x^{-1/2} = \\tfrac{3}{2}x^{1/2} - \\tfrac{3}{2}x^{-1/2}',
                    explanation: 'Apply the power rule: x^{3/2} gives (3/2)x^{1/2}, and -3x^{1/2} gives -3(1/2)x^{-1/2} = -(3/2)x^{-1/2}.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate again for d²y/dx².',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\tfrac{3}{2} \\times \\tfrac{1}{2} x^{-1/2} - \\tfrac{3}{2} \\times \\left(-\\tfrac{1}{2}\\right) x^{-3/2} = \\tfrac{3}{4}x^{-1/2} + \\tfrac{3}{4}x^{-3/2}',
                    explanation: 'Differentiate each term of dy/dx. The coefficient (3/2)(1/2) = 3/4 and -(3/2)(-1/2) = +3/4.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with positive indices.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\dfrac{3}{4\\sqrt{x}} + \\dfrac{3}{4x\\sqrt{x}}',
                    explanation: 'Convert x^{-1/2} to 1/sqrt(x) and x^{-3/2} to 1/(x sqrt(x)) for a tidier final answer.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = \\dfrac{3}{4\\sqrt{x}} + \\dfrac{3}{4x\\sqrt{x}} \\)"
        }
    },

    // TYPE I (43–48): Evaluation at specific points and parameter problems
    {
        id: 'd3-043',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 43',
        difficulty: 'Standard',
        questionText: 'Given \\( f(x) = x^4 - 2x^3 + 5x \\), find \\( f\'\'(1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'evaluate at point'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: "f'(x) = 4x^3 - 6x^2 + 5",
                    explanation: 'Differentiate each term using the power rule: the derivative of \\( x^4 \\) is \\( 4x^3 \\), the derivative of \\( -2x^3 \\) is \\( -6x^2 \\), and the derivative of \\( 5x \\) is \\( 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: "f''(x) = 12x^2 - 12x",
                    explanation: 'Differentiate \\( f\'(x) \\) term by term: the derivative of \\( 4x^3 \\) is \\( 12x^2 \\), the derivative of \\( -6x^2 \\) is \\( -12x \\), and the constant \\( 5 \\) differentiates to zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 1 \\).',
                    workingLatex: "f''(1) = 12(1)^2 - 12(1) = 12 - 12",
                    explanation: 'Replace \\( x \\) with \\( 1 \\) in the second derivative expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify to get the answer.',
                    workingLatex: "f''(1) = 0",
                    explanation: 'The terms cancel, giving a second derivative value of zero at \\( x = 1 \\).'
                }
            ],
            finalAnswer: "\\( f''(1) = 0 \\)"
        }
    },
    {
        id: 'd3-044',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 44',
        difficulty: 'Standard',
        questionText: 'Given \\( y = 3x^2 - 2\\sqrt{x} \\), find the value of \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) at \\( x = 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'evaluate at point', 'root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the square root.',
                    workingLatex: 'y = 3x^2 - 2x^{1/2}',
                    explanation: 'Express \\( \\sqrt{x} \\) as \\( x^{1/2} \\) so the power rule can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - x^{-1/2}',
                    explanation: 'The derivative of \\( 3x^2 \\) is \\( 6x \\). The derivative of \\( -2x^{1/2} \\) is \\( -2 \\cdot \\tfrac{1}{2}x^{-1/2} = -x^{-1/2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6 + \\tfrac{1}{2}x^{-3/2}',
                    explanation: 'The derivative of \\( 6x \\) is \\( 6 \\). The derivative of \\( -x^{-1/2} \\) is \\( -(-\\tfrac{1}{2})x^{-3/2} = \\tfrac{1}{2}x^{-3/2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 4 \\).',
                    workingLatex: '6 + \\tfrac{1}{2}(4)^{-3/2} = 6 + \\tfrac{1}{2} \\cdot \\tfrac{1}{8} = 6 + \\tfrac{1}{16} = \\tfrac{97}{16}',
                    explanation: 'Since \\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\), we have \\( (4)^{-3/2} = \\tfrac{1}{8} \\). Combining gives \\( \\tfrac{96 + 1}{16} = \\tfrac{97}{16} \\).'
                }
            ],
            finalAnswer: "\\( \\left.\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{x=4} = \\dfrac{97}{16} \\)"
        }
    },
    {
        id: 'd3-045',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 45',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = ax^3 + bx^2 \\). Given that \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x - 4 \\), find the values of \\( a \\) and \\( b \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'find parameters', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3ax^2 + 2bx',
                    explanation: 'Differentiate \\( ax^3 \\) to get \\( 3ax^2 \\) and \\( bx^2 \\) to get \\( 2bx \\) using the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6ax + 2b',
                    explanation: 'Differentiate again: the derivative of \\( 3ax^2 \\) is \\( 6ax \\) and the derivative of \\( 2bx \\) is \\( 2b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Compare coefficients.',
                    workingLatex: '6ax + 2b \\equiv 12x - 4',
                    explanation: 'Set the second derivative equal to the given expression and match the coefficient of \\( x \\) and the constant term on each side.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( a \\) and \\( b \\).',
                    workingLatex: '6a = 12 \\;\\Rightarrow\\; a = 2, \\quad 2b = -4 \\;\\Rightarrow\\; b = -2',
                    explanation: 'From the \\( x \\) coefficients, \\( 6a = 12 \\) gives \\( a = 2 \\). From the constants, \\( 2b = -4 \\) gives \\( b = -2 \\).'
                }
            ],
            finalAnswer: "\\( a = 2 \\) and \\( b = -2 \\)."
        }
    },
    {
        id: 'd3-046',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 46',
        difficulty: 'Standard',
        questionText: 'Given \\( f(x) = x^3 - kx^2 + 3x \\), find the value of \\( k \\) for which \\( f\'\'(2) = 0 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['second order derivative', 'find parameter', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: "f'(x) = 3x^2 - 2kx + 3",
                    explanation: 'Differentiate each term: the derivative of \\( x^3 \\) is \\( 3x^2 \\), the derivative of \\( -kx^2 \\) is \\( -2kx \\), and the derivative of \\( 3x \\) is \\( 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: "f''(x) = 6x - 2k",
                    explanation: 'Differentiate \\( f\'(x) \\) again: the derivative of \\( 3x^2 \\) is \\( 6x \\), the derivative of \\( -2kx \\) is \\( -2k \\), and the constant \\( 3 \\) gives zero.'
                },
                {
                    stepNumber: 3,
                    description: "Substitute \\( x = 2 \\) and set to zero.",
                    workingLatex: "f''(2) = 6(2) - 2k = 12 - 2k = 0",
                    explanation: 'Replace \\( x \\) with \\( 2 \\) in the second derivative and set the result equal to zero as required.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '2k = 12 \\;\\Rightarrow\\; k = 6',
                    explanation: 'Rearrange to isolate \\( k \\), giving \\( k = 6 \\).'
                }
            ],
            finalAnswer: "\\( k = 6 \\)."
        }
    },
    {
        id: 'd3-047',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 47',
        difficulty: 'Standard',
        questionText: 'For \\( y = 2x^3 + 5x^2 - 4x \\), find the value of \\( x \\) at which \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'inflection candidate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 + 10x - 4',
                    explanation: 'Differentiate each term: the derivative of \\( 2x^3 \\) is \\( 6x^2 \\), the derivative of \\( 5x^2 \\) is \\( 10x \\), and the derivative of \\( -4x \\) is \\( -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x + 10',
                    explanation: 'Differentiate again: the derivative of \\( 6x^2 \\) is \\( 12x \\), the derivative of \\( 10x \\) is \\( 10 \\), and the constant \\( -4 \\) gives zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Set second derivative to zero.',
                    workingLatex: '12x + 10 = 0 \\;\\Rightarrow\\; 12x = -10',
                    explanation: 'Set the second derivative equal to zero and rearrange.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = -\\dfrac{10}{12} = -\\dfrac{5}{6}',
                    explanation: 'Divide both sides by 12 and simplify the fraction to get \\( x = -\\tfrac{5}{6} \\).'
                }
            ],
            finalAnswer: "\\( x = -\\dfrac{5}{6} \\)."
        }
    },
    {
        id: 'd3-048',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 48',
        difficulty: 'Standard',
        questionText: 'Given \\( f(x) = x^4 - 4x^3 \\), find all values of \\( x \\) for which \\( f\'\'(x) = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['second order derivative', 'inflection candidate', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: "f'(x) = 4x^3 - 12x^2",
                    explanation: 'Differentiate each term: the derivative of \\( x^4 \\) is \\( 4x^3 \\) and the derivative of \\( -4x^3 \\) is \\( -12x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: "f''(x) = 12x^2 - 24x",
                    explanation: 'Differentiate again: the derivative of \\( 4x^3 \\) is \\( 12x^2 \\) and the derivative of \\( -12x^2 \\) is \\( -24x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set second derivative to zero.',
                    workingLatex: '12x^2 - 24x = 0',
                    explanation: 'We need to find all \\( x \\) values where the second derivative equals zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '12x(x - 2) = 0 \\;\\Rightarrow\\; x = 0 \\text{ or } x = 2',
                    explanation: 'Take out the common factor of \\( 12x \\). Each factor set to zero gives a solution.'
                }
            ],
            finalAnswer: "\\( x = 0 \\) or \\( x = 2 \\)."
        }
    },

    // TYPE J (49–54): Stationary points with classification
    {
        id: 'd3-049',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 49',
        difficulty: 'Standard',
        questionText: 'Find the stationary points of \\( y = x^3 - 12x + 5 \\) and use the second derivative to classify them.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'second derivative test', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set to zero.',
                    workingLatex: '3x^2 - 12 = 0 \\;\\Rightarrow\\; x^2 = 4 \\;\\Rightarrow\\; x = \\pm 2',
                    explanation: 'Solve for stationary points.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) at each.',
                    workingLatex: 'x = 2: \\; 8 - 24 + 5 = -11 \\\\ x = -2: \\; -8 + 24 + 5 = 21',
                    explanation: 'Substitute back.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
                    explanation: 'Differentiate once more.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the test.',
                    workingLatex: '\\left.\\tfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{x=2} = 12 > 0 \\; (\\text{min}) \\\\ \\left.\\tfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{x=-2} = -12 < 0 \\; (\\text{max})',
                    explanation: 'Positive → minimum, negative → maximum.'
                }
            ],
            finalAnswer: "Minimum at \\( (2, -11) \\); maximum at \\( (-2, 21) \\)."
        }
    },
    {
        id: 'd3-050',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 50',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = 2x^3 + 3x^2 - 36x + 1 \\). Find its stationary points and classify them using the second derivative.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'second derivative test', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 + 6x - 36',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for stationary points.',
                    workingLatex: '6(x^2 + x - 6) = 0 \\;\\Rightarrow\\; (x+3)(x-2) = 0',
                    explanation: 'Factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) at each.',
                    workingLatex: 'x = -3: \\; -54 + 27 + 108 + 1 = 82 \\\\ x = 2: \\; 16 + 12 - 72 + 1 = -43',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative test.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x + 6 \\\\ \\text{At } x = -3: -30 < 0 \\; (\\text{max}) \\\\ \\text{At } x = 2: 30 > 0 \\; (\\text{min})',
                    explanation: 'Classify each.'
                }
            ],
            finalAnswer: "Maximum at \\( (-3, 82) \\); minimum at \\( (2, -43) \\)."
        }
    },
    {
        id: 'd3-051',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 51',
        difficulty: 'Standard',
        questionText: 'Find the stationary points of \\( f(x) = x^3 - 6x^2 + 9x - 2 \\) and classify each using \\( f\'\'(x) \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'second derivative test', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Compute \\( f'(x) \\).",
                    workingLatex: "f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)",
                    explanation: 'Factorise after taking out 3.'
                },
                {
                    stepNumber: 2,
                    description: "Set \\( f'(x) = 0 \\).",
                    workingLatex: 'x = 1 \\text{ or } x = 3',
                    explanation: 'Two stationary points.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) values.',
                    workingLatex: 'f(1) = 1 - 6 + 9 - 2 = 2 \\\\ f(3) = 27 - 54 + 27 - 2 = -2',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: "Compute \\( f''(x) \\) and test.",
                    workingLatex: "f''(x) = 6x - 12 \\\\ f''(1) = -6 < 0 \\; (\\text{max}) \\\\ f''(3) = 6 > 0 \\; (\\text{min})",
                    explanation: 'Second derivative test.'
                }
            ],
            finalAnswer: "Maximum at \\( (1, 2) \\); minimum at \\( (3, -2) \\)."
        }
    },
    {
        id: 'd3-052',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 52',
        difficulty: 'Standard',
        questionText: 'Find the stationary points of \\( y = x^4 - 4x^3 + 4x^2 + 1 \\) and classify them.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'second derivative test', 'quartic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x^2 + 8x',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise and solve.',
                    workingLatex: '4x(x^2 - 3x + 2) = 0 \\;\\Rightarrow\\; 4x(x-1)(x-2) = 0',
                    explanation: 'Three stationary points: \\( x = 0, 1, 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) at each.',
                    workingLatex: 'y(0) = 1, \\quad y(1) = 1 - 4 + 4 + 1 = 2, \\quad y(2) = 16 - 32 + 16 + 1 = 1',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 24x + 8',
                    explanation: 'Differentiate once more.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the test.',
                    workingLatex: 'x=0: 8 > 0 \\; (\\text{min}) \\\\ x=1: -4 < 0 \\; (\\text{max}) \\\\ x=2: 8 > 0 \\; (\\text{min})',
                    explanation: 'Classify each.'
                }
            ],
            finalAnswer: "Minima at \\( (0, 1) \\) and \\( (2, 1) \\); maximum at \\( (1, 2) \\)."
        }
    },
    {
        id: 'd3-053',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 53',
        difficulty: 'Standard',
        questionText: 'For \\( y = x + \\dfrac{9}{x} \\), \\( x > 0 \\), find the stationary point and use the second derivative to show that it is a minimum.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'second derivative test', 'negative index', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite and differentiate.',
                    workingLatex: 'y = x + 9x^{-1} \\;\\Rightarrow\\; \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 1 - 9x^{-2}',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set to zero.',
                    workingLatex: '1 - \\dfrac{9}{x^2} = 0 \\;\\Rightarrow\\; x^2 = 9 \\;\\Rightarrow\\; x = 3 \\; (\\text{since } x > 0)',
                    explanation: 'Solve for \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y(3) = 3 + 3 = 6',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 18x^{-3} = \\dfrac{18}{x^3}',
                    explanation: 'Differentiate once more.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate at \\( x = 3 \\).',
                    workingLatex: '\\dfrac{18}{27} = \\dfrac{2}{3} > 0 \\; \\Rightarrow \\; \\text{minimum}',
                    explanation: 'Positive second derivative confirms a minimum.'
                }
            ],
            finalAnswer: "Stationary point at \\( (3, 6) \\); it is a minimum."
        }
    },
    {
        id: 'd3-054',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 54',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 3x \\). (a) Find the stationary points. (b) Classify each using the second derivative.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'second derivative test', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) First derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve.',
                    workingLatex: '3x^2 - 3 = 0 \\;\\Rightarrow\\; x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1',
                    explanation: 'Two stationary points.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y(1) = -2, \\quad y(-1) = 2',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: "(b) Second derivative.",
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x \\\\ x = 1: 6 > 0 \\; (\\text{min}) \\\\ x = -1: -6 < 0 \\; (\\text{max})',
                    explanation: 'Test each point.'
                }
            ],
            finalAnswer: "(a) \\( (1, -2) \\) and \\( (-1, 2) \\) \\newline (b) \\( (1, -2) \\) minimum, \\( (-1, 2) \\) maximum."
        }
    },

    // TYPE K (55–60): Concavity, inflection, second-derivative intervals
    {
        id: 'd3-055',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 55',
        difficulty: 'Standard',
        questionText: 'Find the range of values of \\( x \\) for which the curve \\( y = x^3 - 6x^2 + 5 \\) is concave up.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['concavity', 'second derivative', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x',
                    explanation: 'Differentiate each term: the derivative of \\( x^3 \\) is \\( 3x^2 \\), the derivative of \\( -6x^2 \\) is \\( -12x \\), and the constant \\( 5 \\) differentiates to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 12',
                    explanation: 'Differentiate again: the derivative of \\( 3x^2 \\) is \\( 6x \\) and the derivative of \\( -12x \\) is \\( -12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set up the concavity condition.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} > 0 \\;\\Rightarrow\\; 6x - 12 > 0',
                    explanation: 'A curve is concave up where the second derivative is positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the inequality.',
                    workingLatex: '6x > 12 \\;\\Rightarrow\\; x > 2',
                    explanation: 'Add 12 to both sides and divide by 6 to find that the curve is concave up for \\( x > 2 \\).'
                }
            ],
            finalAnswer: "Concave up for \\( x > 2 \\)."
        }
    },
    {
        id: 'd3-056',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 56',
        difficulty: 'Standard',
        questionText: 'Find the \\( x \\)-coordinate of the point of inflection of \\( y = x^3 - 9x^2 + 24x - 15 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['point of inflection', 'second derivative', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 18x + 24',
                    explanation: 'Differentiate each term: the derivative of \\( x^3 \\) is \\( 3x^2 \\), the derivative of \\( -9x^2 \\) is \\( -18x \\), the derivative of \\( 24x \\) is \\( 24 \\), and the constant \\( -15 \\) gives zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 18',
                    explanation: 'Differentiate again: the derivative of \\( 3x^2 \\) is \\( 6x \\), the derivative of \\( -18x \\) is \\( -18 \\), and the constant \\( 24 \\) gives zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Set second derivative to zero.',
                    workingLatex: '6x - 18 = 0 \\;\\Rightarrow\\; x = 3',
                    explanation: 'Solve for \\( x \\) to find the candidate point of inflection.'
                },
                {
                    stepNumber: 4,
                    description: 'Check for a sign change.',
                    workingLatex: "\\left.\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{x=2} = 12 - 18 = -6 < 0, \\quad \\left.\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\right|_{x=4} = 24 - 18 = 6 > 0",
                    explanation: 'The second derivative changes sign from negative to positive as \\( x \\) passes through 3, confirming it is a point of inflection.'
                }
            ],
            finalAnswer: "Point of inflection at \\( x = 3 \\)."
        }
    },
    {
        id: 'd3-057',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 57',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = x^4 - 6x^2 \\). Find the range of values of \\( x \\) for which the curve is concave down.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['concavity', 'second derivative', 'quartic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x',
                    explanation: 'Differentiate each term using the power rule: \\( x^4 \\to 4x^3 \\) and \\( -6x^2 \\to -12x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 12',
                    explanation: 'Differentiate the first derivative: \\( 4x^3 \\to 12x^2 \\) and \\( -12x \\to -12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set up the concavity inequality.',
                    workingLatex: '12x^2 - 12 < 0',
                    explanation: 'A curve is concave down where the second derivative is strictly negative.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the inequality.',
                    workingLatex: '12(x^2 - 1) < 0 \\;\\Rightarrow\\; x^2 < 1 \\;\\Rightarrow\\; -1 < x < 1',
                    explanation: 'Factor out 12, then solve \\( x^2 < 1 \\). Since \\( x^2 < 1 \\) means \\( x \\) lies strictly between \\( -1 \\) and \\( 1 \\).'
                }
            ],
            finalAnswer: "Concave down on \\( -1 < x < 1 \\)."
        }
    },
    {
        id: 'd3-058',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 58',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = 2x^3 - 9x^2 + 12x \\) has a point of inflection. Find its coordinates.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['point of inflection', 'second derivative', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the first derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 18x + 12',
                    explanation: 'Differentiate each term using the power rule: \\( 2x^3 \\to 6x^2 \\), \\( -9x^2 \\to -18x \\), and \\( 12x \\to 12 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x - 18',
                    explanation: 'Differentiate the first derivative: \\( 6x^2 \\to 12x \\), \\( -18x \\to -18 \\), and the constant 12 vanishes.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for candidate inflection point.',
                    workingLatex: '12x - 18 = 0 \\;\\Rightarrow\\; x = \\tfrac{3}{2}',
                    explanation: 'Set the second derivative equal to zero and solve for \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Verify the sign change.',
                    workingLatex: "\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=1} = 12 - 18 = -6 < 0, \\quad \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=2} = 24 - 18 = 6 > 0",
                    explanation: 'The second derivative changes sign from negative to positive across \\( x = \\tfrac{3}{2} \\), confirming it is a genuine point of inflection.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the y-coordinate.',
                    workingLatex: "y\\!\\left(\\tfrac{3}{2}\\right) = 2 \\cdot \\tfrac{27}{8} - 9 \\cdot \\tfrac{9}{4} + 12 \\cdot \\tfrac{3}{2} = \\tfrac{27}{4} - \\tfrac{81}{4} + 18 = -\\tfrac{54}{4} + 18 = \\tfrac{9}{2}",
                    explanation: 'Substitute \\( x = \\tfrac{3}{2} \\) into the original equation, evaluating each term as a fraction to find the exact y-value.'
                }
            ],
            finalAnswer: "Point of inflection at \\( \\left(\\tfrac{3}{2},\\, \\tfrac{9}{2}\\right) \\)."
        }
    },
    {
        id: 'd3-059',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 59',
        difficulty: 'Standard',
        questionText: 'Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 \\) is decreasing and concave up.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['decreasing', 'concavity', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x = 3x(x-2)',
                    explanation: 'Factorise.'
                },
                {
                    stepNumber: 2,
                    description: 'Decreasing when this is negative.',
                    workingLatex: '3x(x-2) < 0 \\;\\Rightarrow\\; 0 < x < 2',
                    explanation: 'Quadratic is negative between roots.'
                },
                {
                    stepNumber: 3,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 6',
                    explanation: 'Differentiate again.'
                },
                {
                    stepNumber: 4,
                    description: 'Concave up when this is positive.',
                    workingLatex: '6x - 6 > 0 \\;\\Rightarrow\\; x > 1',
                    explanation: 'Solve.'
                },
                {
                    stepNumber: 5,
                    description: 'Intersect the two conditions.',
                    workingLatex: '(0 < x < 2) \\cap (x > 1) \\;\\Rightarrow\\; 1 < x < 2',
                    explanation: 'Both conditions hold here.'
                }
            ],
            finalAnswer: "Decreasing and concave up on \\( 1 < x < 2 \\)."
        }
    },
    {
        id: 'd3-060',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 60',
        difficulty: 'Standard',
        questionText: 'Show that the curve \\( y = x^4 + 2 \\) has no point of inflection.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['point of inflection', 'second derivative', 'quartic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2',
                    explanation: 'Differentiate twice.'
                },
                {
                    stepNumber: 2,
                    description: 'Set to zero.',
                    workingLatex: '12x^2 = 0 \\;\\Rightarrow\\; x = 0',
                    explanation: 'Candidate point.'
                },
                {
                    stepNumber: 3,
                    description: 'Check the sign of the second derivative around \\( x = 0 \\).',
                    workingLatex: "f''(-1) = 12 > 0, \\quad f''(1) = 12 > 0",
                    explanation: 'The second derivative does not change sign across \\( x = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Conclusion.',
                    workingLatex: '\\text{No point of inflection at } x = 0 \\;\\checkmark',
                    explanation: 'For a point of inflection, the second derivative must change sign.'
                }
            ],
            finalAnswer: "No point of inflection — \\( f''(x) = 12x^2 \\geq 0 \\) everywhere."
        }
    },

    // TYPE L (61–65): Optimisation / modelling
    {
        id: 'd3-061',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 61',
        difficulty: 'Standard',
        questionText: 'A rectangular enclosure has perimeter 20 m. Its area \\( A \\) (in m²) is given by \\( A = x(10 - x) \\), where \\( x \\) is the length of one side. Find the value of \\( x \\) that maximises \\( A \\), and use the second derivative to justify that it is a maximum.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'second derivative test', 'modelling', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand.',
                    workingLatex: 'A = 10x - x^2',
                    explanation: 'Remove the brackets.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}A}{\\mathrm{d}x} = 10 - 2x',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Set to zero.',
                    workingLatex: '10 - 2x = 0 \\;\\Rightarrow\\; x = 5',
                    explanation: 'Solve.'
                },
                {
                    stepNumber: 4,
                    description: 'Second derivative test.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -2 < 0 \\;\\Rightarrow\\; \\text{maximum}',
                    explanation: 'Negative second derivative confirms a maximum.'
                }
            ],
            finalAnswer: "\\( x = 5 \\) m gives the maximum area (a square of side 5 m)."
        }
    },
    {
        id: 'd3-062',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 62',
        difficulty: 'Standard',
        questionText: 'The height of a projectile \\( h \\) metres after \\( t \\) seconds is \\( h = 25t - 5t^2 \\). (a) Find \\( \\dfrac{\\mathrm{d}h}{\\mathrm{d}t} \\) and \\( \\dfrac{\\mathrm{d}^2h}{\\mathrm{d}t^2} \\). (b) Find the time at which the height is maximum and state the maximum height. (c) Interpret the sign of \\( \\dfrac{\\mathrm{d}^2h}{\\mathrm{d}t^2} \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['modelling', 'projectile', 'acceleration', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate twice.',
                    workingLatex: '\\dfrac{\\mathrm{d}h}{\\mathrm{d}t} = 25 - 10t, \\quad \\dfrac{\\mathrm{d}^2h}{\\mathrm{d}t^2} = -10',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Maximum when velocity is zero.',
                    workingLatex: '25 - 10t = 0 \\;\\Rightarrow\\; t = 2.5',
                    explanation: 'Solve.'
                },
                {
                    stepNumber: 3,
                    description: 'Maximum height.',
                    workingLatex: 'h(2.5) = 62.5 - 31.25 = 31.25 \\text{ m}',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Interpretation.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2h}{\\mathrm{d}t^2} = -10 \\text{ m/s}^2',
                    explanation: 'The acceleration is a constant \\( -10 \\) m/s² (gravity acting downward).'
                }
            ],
            finalAnswer: "(a) \\( \\tfrac{\\mathrm{d}h}{\\mathrm{d}t} = 25 - 10t \\), \\( \\tfrac{\\mathrm{d}^2h}{\\mathrm{d}t^2} = -10 \\) \\newline (b) \\( t = 2.5 \\) s, max height 31.25 m \\newline (c) Acceleration is \\( -10 \\) m/s² (downward)."
        }
    },
    {
        id: 'd3-063',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 63',
        difficulty: 'Standard',
        questionText: 'An open-top box is made from a square sheet of side 12 cm by cutting a square of side \\( x \\) cm from each corner and folding up the sides. The volume is \\( V = x(12 - 2x)^2 \\) cm³. Find the value of \\( x \\) that maximises the volume and verify it is a maximum using the second derivative.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'modelling', 'second derivative test', 'challenge'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand.',
                    workingLatex: 'V = x(144 - 48x + 4x^2) = 4x^3 - 48x^2 + 144x',
                    explanation: 'Multiply out.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}V}{\\mathrm{d}x} = 12x^2 - 96x + 144',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Set to zero.',
                    workingLatex: '12(x^2 - 8x + 12) = 0 \\;\\Rightarrow\\; (x-2)(x-6) = 0',
                    explanation: 'Factorise.'
                },
                {
                    stepNumber: 4,
                    description: 'Valid solution.',
                    workingLatex: 'x = 2 \\; (\\text{since } 0 < x < 6)',
                    explanation: 'For a real box, \\( 12 - 2x > 0 \\), so \\( x < 6 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Second derivative test.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2V}{\\mathrm{d}x^2} = 24x - 96 \\\\ \\left.\\tfrac{\\mathrm{d}^2V}{\\mathrm{d}x^2}\\right|_{x=2} = 48 - 96 = -48 < 0',
                    explanation: 'Negative → local maximum.'
                }
            ],
            finalAnswer: "\\( x = 2 \\) cm gives the maximum volume; \\( V(2) = 128 \\) cm³."
        }
    },
    {
        id: 'd3-064',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 64',
        difficulty: 'Standard',
        questionText: 'The population \\( P \\) (in thousands) of a species \\( t \\) years after a study begins is modelled by \\( P = 20 + 6t - t^2 \\). (a) Find the time at which the population is greatest and its value. (b) State the sign of \\( \\dfrac{\\mathrm{d}^2P}{\\mathrm{d}t^2} \\) and interpret it.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['modelling', 'rate of change', 'second derivative', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}P}{\\mathrm{d}t} = 6 - 2t',
                    explanation: 'Rate of change of population.'
                },
                {
                    stepNumber: 2,
                    description: 'Set to zero.',
                    workingLatex: '6 - 2t = 0 \\;\\Rightarrow\\; t = 3',
                    explanation: 'Critical time.'
                },
                {
                    stepNumber: 3,
                    description: 'Maximum population.',
                    workingLatex: 'P(3) = 20 + 18 - 9 = 29',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2P}{\\mathrm{d}t^2} = -2 < 0',
                    explanation: 'Negative throughout.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpretation.',
                    workingLatex: '\\text{Rate of growth is always decreasing.}',
                    explanation: 'The population grows more slowly over time, then declines.'
                }
            ],
            finalAnswer: "(a) Maximum population is 29 thousand at \\( t = 3 \\) years. \\newline (b) \\( \\tfrac{\\mathrm{d}^2P}{\\mathrm{d}t^2} = -2 \\), the growth rate is always decreasing."
        }
    },
    {
        id: 'd3-065',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 65',
        difficulty: 'Standard',
        questionText: 'A cylinder has surface area \\( S = 2\\pi r^2 + \\dfrac{200}{r} \\) for \\( r > 0 \\). Find the value of \\( r \\) that minimises \\( S \\), and use the second derivative to confirm it is a minimum.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'second derivative test', 'cylinder', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite and differentiate.',
                    workingLatex: 'S = 2\\pi r^2 + 200 r^{-1} \\;\\Rightarrow\\; \\dfrac{\\mathrm{d}S}{\\mathrm{d}r} = 4\\pi r - 200 r^{-2}',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set to zero.',
                    workingLatex: '4\\pi r = \\dfrac{200}{r^2} \\;\\Rightarrow\\; r^3 = \\dfrac{50}{\\pi} \\;\\Rightarrow\\; r = \\sqrt[3]{\\dfrac{50}{\\pi}}',
                    explanation: 'Rearrange.'
                },
                {
                    stepNumber: 3,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2S}{\\mathrm{d}r^2} = 4\\pi + 400 r^{-3} = 4\\pi + \\dfrac{400}{r^3}',
                    explanation: 'Differentiate once more.'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm minimum.',
                    workingLatex: 'r > 0 \\;\\Rightarrow\\; \\dfrac{\\mathrm{d}^2S}{\\mathrm{d}r^2} > 0',
                    explanation: 'Positive for all positive \\( r \\), so the stationary point is a minimum.'
                }
            ],
            finalAnswer: "\\( r = \\sqrt[3]{\\dfrac{50}{\\pi}} \\) gives the minimum surface area."
        }
    },

    // TYPE M (66–70): Challenge exam-style
    {
        id: 'd3-066',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 66',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 3ax^2 + 3a^2 x \\), where \\( a \\) is a positive constant. (a) Find the stationary points of \\( C \\) in terms of \\( a \\). (b) Find the nature of each stationary point using the second derivative.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'parameter', 'second derivative test', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6ax + 3a^2',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set to zero and simplify.',
                    workingLatex: '3(x^2 - 2ax + a^2) = 0 \\;\\Rightarrow\\; (x - a)^2 = 0 \\;\\Rightarrow\\; x = a',
                    explanation: 'Repeated root.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y(a) = a^3 - 3a \\cdot a^2 + 3a^2 \\cdot a = a^3',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 6a',
                    explanation: 'Differentiate once more.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate at \\( x = a \\).',
                    workingLatex: '6a - 6a = 0',
                    explanation: 'Second derivative test is inconclusive.'
                },
                {
                    stepNumber: 6,
                    description: 'Check sign change around \\( x = a \\).',
                    workingLatex: "f'(a - \\epsilon) > 0, \\quad f'(a + \\epsilon) > 0",
                    explanation: 'Gradient is positive on both sides (the quadratic \\( (x-a)^2 \\) is always \\( \\geq 0 \\)), so this is a stationary point of inflection.'
                }
            ],
            finalAnswer: "(a) One stationary point at \\( (a, a^3) \\). \\newline (b) It is a stationary point of inflection."
        }
    },
    {
        id: 'd3-067',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 67',
        difficulty: 'Challenge',
        questionText: 'A function is defined by \\( f(x) = x^3 + px^2 + qx + 1 \\), where \\( p \\) and \\( q \\) are constants. The curve \\( y = f(x) \\) has a stationary point at \\( (2, -3) \\). (a) Find \\( p \\) and \\( q \\). (b) Determine the nature of the stationary point.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'find parameters', 'second derivative test', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Use \\( f(2) = -3 \\).',
                    workingLatex: '8 + 4p + 2q + 1 = -3 \\;\\Rightarrow\\; 4p + 2q = -12 \\;\\Rightarrow\\; 2p + q = -6',
                    explanation: 'First equation.'
                },
                {
                    stepNumber: 2,
                    description: "Use \\( f'(2) = 0 \\).",
                    workingLatex: "f'(x) = 3x^2 + 2px + q \\;\\Rightarrow\\; f'(2) = 12 + 4p + q = 0",
                    explanation: 'Stationary point condition.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the simultaneous equations.',
                    workingLatex: '\\begin{cases} 2p + q = -6 \\\\ 4p + q = -12 \\end{cases} \\;\\Rightarrow\\; 2p = -6 \\;\\Rightarrow\\; p = -3, \\; q = 0',
                    explanation: 'Subtract the first from the second.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Second derivative.',
                    workingLatex: "f''(x) = 6x + 2p = 6x - 6 \\\\ f''(2) = 12 - 6 = 6 > 0",
                    explanation: 'Positive, so minimum.'
                }
            ],
            finalAnswer: "(a) \\( p = -3,\\ q = 0 \\). \\newline (b) The stationary point is a minimum."
        }
    },
    {
        id: 'd3-068',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 68',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^4 - 4x^3 + 4x^2 \\). (a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) and \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\). (b) Find the stationary points and classify them. (c) Find the coordinates of any points of inflection.',
        marks: 10,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'points of inflection', 'quartic', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate twice.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x^2 + 8x, \\quad \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 24x + 8',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Factorise and solve \\( y\' = 0 \\).',
                    workingLatex: '4x(x^2 - 3x + 2) = 0 \\;\\Rightarrow\\; 4x(x-1)(x-2) = 0',
                    explanation: 'Three solutions: \\( x = 0, 1, 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) values.',
                    workingLatex: 'y(0) = 0, \\quad y(1) = 1 - 4 + 4 = 1, \\quad y(2) = 16 - 32 + 16 = 0',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the second derivative test.',
                    workingLatex: "y''(0) = 8 > 0 \\; (\\text{min}) \\\\ y''(1) = 12 - 24 + 8 = -4 < 0 \\; (\\text{max}) \\\\ y''(2) = 48 - 48 + 8 = 8 > 0 \\; (\\text{min})",
                    explanation: 'Classify each.'
                },
                {
                    stepNumber: 5,
                    description: "(c) Solve \\( y'' = 0 \\).",
                    workingLatex: '12x^2 - 24x + 8 = 0 \\;\\Rightarrow\\; 3x^2 - 6x + 2 = 0 \\;\\Rightarrow\\; x = \\dfrac{6 \\pm \\sqrt{12}}{6} = 1 \\pm \\dfrac{\\sqrt{3}}{3}',
                    explanation: 'Use the quadratic formula.'
                }
            ],
            finalAnswer: "(a) \\( y' = 4x^3 - 12x^2 + 8x \\), \\( y'' = 12x^2 - 24x + 8 \\) \\newline (b) Minima at \\( (0, 0) \\) and \\( (2, 0) \\); maximum at \\( (1, 1) \\) \\newline (c) Inflection at \\( x = 1 \\pm \\tfrac{\\sqrt{3}}{3} \\)."
        }
    },
    {
        id: 'd3-069',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 69',
        difficulty: 'Challenge',
        questionText: 'An open rectangular tank has a square base of side \\( x \\) metres and height \\( h \\) metres. Its volume is \\( 32 \\) m³. (a) Show that its external surface area is \\( S = x^2 + \\dfrac{128}{x} \\). (b) Find the value of \\( x \\) that minimises \\( S \\), using the second derivative to confirm it is a minimum.',
        marks: 9,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'second derivative test', 'challenge', 'modelling', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Volume condition.',
                    workingLatex: 'x^2 h = 32 \\;\\Rightarrow\\; h = \\dfrac{32}{x^2}',
                    explanation: 'Solve for \\( h \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Surface area (base + four sides, open top).',
                    workingLatex: 'S = x^2 + 4xh = x^2 + 4x \\cdot \\dfrac{32}{x^2} = x^2 + \\dfrac{128}{x} \\;\\checkmark',
                    explanation: 'As required.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate.',
                    workingLatex: 'S = x^2 + 128 x^{-1} \\;\\Rightarrow\\; \\dfrac{\\mathrm{d}S}{\\mathrm{d}x} = 2x - 128 x^{-2}',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '2x = \\dfrac{128}{x^2} \\;\\Rightarrow\\; x^3 = 64 \\;\\Rightarrow\\; x = 4',
                    explanation: 'Solve.'
                },
                {
                    stepNumber: 5,
                    description: 'Second derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}^2S}{\\mathrm{d}x^2} = 2 + 256 x^{-3}',
                    explanation: 'Differentiate once more.'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate at \\( x = 4 \\).',
                    workingLatex: '2 + \\dfrac{256}{64} = 2 + 4 = 6 > 0 \\; \\Rightarrow \\; \\text{minimum}',
                    explanation: 'Positive, so this is a minimum.'
                }
            ],
            finalAnswer: "(a) Shown. \\newline (b) \\( x = 4 \\) m gives the minimum surface area."
        }
    },
    {
        id: 'd3-070',
        topicRef: 'd3',
        topicTitle: 'Second Order Derivatives 70',
        difficulty: 'Challenge',
        questionText: 'A function is defined by \\( f(x) = 2x^3 - 15x^2 + 24x + 7 \\). (a) Find \\( f\'(x) \\) and \\( f\'\'(x) \\). (b) Find the coordinates of the stationary points. (c) Use the second derivative test to determine the nature of each. (d) State the range of values of \\( x \\) for which \\( f(x) \\) is concave up.',
        marks: 10,
        examStyle: true,
        yearCreated: 2026,
        tags: ['stationary points', 'concavity', 'second derivative test', 'cubic', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: "f'(x) = 6x^2 - 30x + 24, \\quad f''(x) = 12x - 30",
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: "(b) Solve \\( f'(x) = 0 \\).",
                    workingLatex: '6(x^2 - 5x + 4) = 0 \\;\\Rightarrow\\; (x-1)(x-4) = 0',
                    explanation: 'Factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) values.',
                    workingLatex: 'f(1) = 2 - 15 + 24 + 7 = 18 \\\\ f(4) = 128 - 240 + 96 + 7 = -9',
                    explanation: 'Substitute.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Second derivative test.',
                    workingLatex: "f''(1) = 12 - 30 = -18 < 0 \\; (\\text{max}) \\\\ f''(4) = 48 - 30 = 18 > 0 \\; (\\text{min})",
                    explanation: 'Classify each.'
                },
                {
                    stepNumber: 5,
                    description: "(d) Concave up where \\( f''(x) > 0 \\).",
                    workingLatex: '12x - 30 > 0 \\;\\Rightarrow\\; x > \\tfrac{5}{2}',
                    explanation: 'Solve the inequality.'
                }
            ],
            finalAnswer: "(a) \\( f'(x) = 6x^2 - 30x + 24 \\), \\( f''(x) = 12x - 30 \\) \\newline (b) \\( (1, 18) \\) and \\( (4, -9) \\) \\newline (c) Maximum at \\( (1, 18) \\); minimum at \\( (4, -9) \\) \\newline (d) Concave up for \\( x > \\tfrac{5}{2} \\)."
        }
    }
];

