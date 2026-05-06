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
        id: 'd2-001',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 01',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = x^5 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the power rule',
                    workingLatex: '\\text{If } y = x^n, \\text{ then } \\frac{\\mathrm{d}y}{\\mathrm{d}x} = nx^{n-1}',
                    explanation: 'The power rule says to multiply by the index and then reduce the index by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to x^5',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 5x^{5-1}',
                    explanation: 'Multiply by the index 5 and reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the exponent',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 5x^4',
                    explanation: 'Since 5 - 1 = 4, the derivative is 5x^4.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 5x^4 \\)'
        }
    },
    {
        id: 'd2-002',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 02',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = x^7 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule to x^7',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 7x^{7-1}',
                    explanation: 'Multiply by the index 7 and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the exponent',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 7x^6',
                    explanation: 'Since 7 - 1 = 6, the derivative is 7x^6.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 7x^6 \\)'
        }
    },
    {
        id: 'd2-003',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 03',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 6x^4 \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule to 6x^4',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6 \\times 4x^{4-1}',
                    explanation: 'Multiply the coefficient 6 by the index 4, and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the coefficient and exponent',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 24x^3',
                    explanation: 'Since 6 times 4 = 24 and 4 - 1 = 3, the derivative is 24x^3.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 24x^3 \\)'
        }
    },
    {
        id: 'd2-004',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 04',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\sqrt{x} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'fractional index', 'square root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the square root as a fractional power.',
                    workingLatex: 'y = x^{1/2}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\). Always convert roots to fractional powers before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{1}{2}x^{-1/2}',
                    explanation: 'Multiply by \\( \\tfrac{1}{2} \\) and reduce the index to \\( \\tfrac{1}{2} - 1 = -\\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite using a surd if required.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{1}{2\\sqrt{x}}',
                    explanation: '\\( x^{-1/2} = \\dfrac{1}{\\sqrt{x}} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{1}{2\\sqrt{x}} \\)'
        }
    },
    {
        id: 'd2-005',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 05',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\dfrac{1}{x^3} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'negative index', 'reciprocal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of \\( x \\).',
                    workingLatex: 'y = x^{-3}',
                    explanation: '\\( \\dfrac{1}{x^3} = x^{-3} \\). Convert before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -3x^{-4}',
                    explanation: 'Multiply by \\(-3\\) and reduce the index: \\(-3 - 1 = -4\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write in fraction form.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -\\frac{3}{x^4}',
                    explanation: '\\( x^{-4} = \\dfrac{1}{x^4} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{3}{x^4} \\)'
        }
    },
    {
        id: 'd2-006',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 06',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 5x^3 - 4x^2 + 7x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term 5x^3',
                    workingLatex: '5x^3 \\longrightarrow 5 \\times 3x^{2} = 15x^2',
                    explanation: 'Multiply the coefficient 5 by the index 3, and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the second term -4x^2',
                    workingLatex: '-4x^2 \\longrightarrow -4 \\times 2x^{1} = -8x',
                    explanation: 'Multiply the coefficient -4 by the index 2, and reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate 7x and the constant',
                    workingLatex: '7x \\longrightarrow 7, \\qquad -2 \\longrightarrow 0',
                    explanation: 'The derivative of 7x is 7. The derivative of any constant is 0.'
                },
                {
                    stepNumber: 4,
                    description: 'Combine all differentiated terms',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 15x^2 - 8x + 7',
                    explanation: 'Collect the results from each term into a single expression.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 15x^2 - 8x + 7 \\)'
        }
    },
    {
        id: 'd2-007',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 07',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = 2x^4 - 9x^2 + 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term 2x^4',
                    workingLatex: '2x^4 \\longrightarrow 2 \\times 4x^{3} = 8x^3',
                    explanation: 'Multiply the coefficient 2 by the index 4, and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the second term -9x^2',
                    workingLatex: '-9x^2 \\longrightarrow -9 \\times 2x^{1} = -18x',
                    explanation: 'Multiply the coefficient -9 by the index 2, and reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the constant term',
                    workingLatex: '1 \\longrightarrow 0',
                    explanation: 'The derivative of any constant is 0.'
                },
                {
                    stepNumber: 4,
                    description: 'Combine all differentiated terms',
                    workingLatex: "f'(x) = 8x^3 - 18x",
                    explanation: 'Collect the results from each term into a single expression.'
                }
            ],
            finalAnswer: "\\( f'(x) = 8x^3 - 18x \\)"
        }
    },
    {
        id: 'd2-008',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 08',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) when \\( y = 3x^{-2} + 5x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term 3x^{-2}',
                    workingLatex: '3x^{-2} \\longrightarrow 3 \\times (-2)x^{-3} = -6x^{-3}',
                    explanation: 'Multiply the coefficient 3 by the index -2, and reduce the power by 1 to get -3.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the second term 5x',
                    workingLatex: '5x \\longrightarrow 5',
                    explanation: 'The derivative of 5x is simply 5, since 5x^1 becomes 5x^0 = 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine and rewrite in fraction form',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -6x^{-3} + 5 = -\\frac{6}{x^3} + 5',
                    explanation: 'Rewrite the negative index as a fraction: x^{-3} = \\frac{1}{x^3}.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{6}{x^3} + 5 \\)'
        }
    },
    {
        id: 'd2-009',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 09',
        difficulty: 'Foundation',
        questionText: 'Expand and differentiate \\( y = x(x - 3)^2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (x-3)^2 \\) first.',
                    workingLatex: '(x-3)^2 = x^2 - 6x + 9',
                    explanation: 'Square the bracket before multiplying.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by \\( x \\).',
                    workingLatex: 'y = x(x^2 - 6x + 9) = x^3 - 6x^2 + 9x',
                    explanation: 'Distribute the \\( x \\) across every term.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9',
                    explanation: 'Apply the power rule to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9 \\)'
        }
    },
    {
        id: 'd2-010',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 10',
        difficulty: 'Foundation',
        questionText: 'Expand and differentiate \\( y = (2x + 1)(x - 4) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets using FOIL',
                    workingLatex: 'y = 2x^2 - 8x + x - 4',
                    explanation: 'Multiply each term in the first bracket by each term in the second: 2x times x, 2x times -4, 1 times x, 1 times -4.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify by collecting like terms',
                    workingLatex: 'y = 2x^2 - 7x - 4',
                    explanation: 'Combine the x terms: -8x + x = -7x.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate 2x^2 term by term',
                    workingLatex: '2x^2 \\longrightarrow 2 \\times 2x = 4x',
                    explanation: 'Multiply the coefficient 2 by the index 2, and reduce the power by 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate remaining terms',
                    workingLatex: '-7x \\longrightarrow -7, \\qquad -4 \\longrightarrow 0',
                    explanation: 'The derivative of -7x is -7. The derivative of the constant -4 is 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final derivative',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 7',
                    explanation: 'Combine the differentiated terms into a single expression.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 7 \\)'
        }
    },
    {
        id: 'd2-011',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 11',
        difficulty: 'Foundation',
        questionText: 'Find \\( f\'(x) \\) for \\( f(x) = \\dfrac{x^3 + 4x}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into separate terms',
                    workingLatex: 'f(x) = \\frac{x^3}{x} + \\frac{4x}{x}',
                    explanation: 'Divide each term in the numerator by x separately. Always simplify before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term',
                    workingLatex: 'f(x) = x^2 + 4',
                    explanation: 'x^3 divided by x gives x^2, and 4x divided by x gives 4.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate x^2',
                    workingLatex: "x^2 \\longrightarrow 2x",
                    explanation: 'Apply the power rule: multiply by 2 and reduce the power by 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate the constant',
                    workingLatex: "4 \\longrightarrow 0",
                    explanation: 'The derivative of any constant is 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final derivative',
                    workingLatex: "f'(x) = 2x",
                    explanation: 'Combine the results to get the final answer.'
                }
            ],
            finalAnswer: "\\( f'(x) = 2x \\)"
        }
    },
    {
        id: 'd2-012',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 12',
        difficulty: 'Foundation',
        questionText: 'Simplify and differentiate \\( y = \\dfrac{x^4 - 3x^2}{x^2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into separate terms',
                    workingLatex: 'y = \\frac{x^4}{x^2} - \\frac{3x^2}{x^2}',
                    explanation: 'Divide each term in the numerator by x^2 separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term',
                    workingLatex: 'y = x^2 - 3',
                    explanation: 'x^4 divided by x^2 gives x^2, and 3x^2 divided by x^2 gives 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate x^2',
                    workingLatex: 'x^2 \\longrightarrow 2x',
                    explanation: 'Apply the power rule: multiply by 2 and reduce the power by 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate the constant',
                    workingLatex: '-3 \\longrightarrow 0',
                    explanation: 'The derivative of the constant -3 is 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final derivative',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x',
                    explanation: 'Combine the results to get the final answer.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x \\)'
        }
    },
    {
        id: 'd2-013',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 13',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 4\\sqrt{x} - \\dfrac{2}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'fractional index', 'negative index', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: 'y = 4x^{1/2} - 2x^{-1}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{x} = x^{-1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4 \\cdot \\tfrac{1}{2} x^{-1/2} - 2(-1)x^{-2} = 2x^{-1/2} + 2x^{-2}',
                    explanation: 'Apply the power rule to each term separately.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in standard form.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{2}{\\sqrt{x}} + \\frac{2}{x^2}',
                    explanation: 'Convert negative/fractional indices back to fractions or surds.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{2}{\\sqrt{x}} + \\dfrac{2}{x^2} \\)'
        }
    },
    {
        id: 'd2-014',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 14',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = 3x^2 - 5x + 1 \\) at \\( x = 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at a point', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate 3x^2',
                    workingLatex: '3x^2 \\longrightarrow 3 \\times 2x = 6x',
                    explanation: 'Multiply the coefficient 3 by the index 2, and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate -5x and the constant',
                    workingLatex: '-5x \\longrightarrow -5, \\qquad 1 \\longrightarrow 0',
                    explanation: 'The derivative of -5x is -5. The derivative of the constant 1 is 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full derivative',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - 5',
                    explanation: 'Combine the differentiated terms into a single expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute x = 2 into the derivative',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\bigg|_{x=2} = 6(2) - 5',
                    explanation: 'To find the gradient at a point, substitute the x-value into the derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the expression',
                    workingLatex: '= 12 - 5 = 7',
                    explanation: 'The gradient of the curve at x = 2 is 7.'
                }
            ],
            finalAnswer: 'Gradient \\( = 7 \\)'
        }
    },
    {
        id: 'd2-015',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 15',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of the curve \\( y = 2x^3 - x \\) at the point \\( (1, 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at a point', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}(2x^3) = 2 \\times 3x^{2} = 6x^2',
                    explanation: 'Multiply the coefficient 2 by the power 3, then reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the second term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}(-x) = -1',
                    explanation: 'The derivative of \\(-x\\) is \\(-1\\), since \\(x = x^1\\) gives \\(1 \\times x^{0} = 1\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 1',
                    explanation: 'Combine the differentiated terms into a single expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 1 \\).',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\bigg|_{x=1} = 6(1)^2 - 1 = 6 - 1 = 5',
                    explanation: 'Replace \\(x\\) with 1 in the derivative to find the gradient at the point \\((1, 1)\\).'
                }
            ],
            finalAnswer: 'Gradient \\( = 5 \\)'
        }
    },
    {
        id: 'd2-016',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 16',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( f(x) = 2\\sqrt{x} \\) at the point \\( (9, 6) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'fractional index', 'gradient at a point'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: 'f(x) = 2x^{1/2}',
                    explanation: 'Convert the square root to a fractional power before differentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: "f'(x) = 2 \\cdot \\tfrac{1}{2} x^{\\frac{1}{2}-1} = x^{-1/2}",
                    explanation: 'Multiply the coefficient 2 by the index \\(\\tfrac{1}{2}\\), then reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in surd form.',
                    workingLatex: "f'(x) = \\frac{1}{\\sqrt{x}}",
                    explanation: '\\(x^{-1/2} = \\dfrac{1}{\\sqrt{x}}\\). Converting back makes substitution easier.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 9 \\).',
                    workingLatex: "f'(9) = \\frac{1}{\\sqrt{9}} = \\frac{1}{3}",
                    explanation: '\\(\\sqrt{9} = 3\\), so the gradient at the point \\((9, 6)\\) is \\(\\tfrac{1}{3}\\).'
                }
            ],
            finalAnswer: 'Gradient \\( = \\dfrac{1}{3} \\)'
        }
    },
    {
        id: 'd2-017',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 17',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = x^4 - 3x^2 + 2 \\) when \\( x = -1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at a point', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term.',
                    workingLatex: 'x^4 \\longrightarrow 4x^3',
                    explanation: 'Multiply by the index 4 and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the remaining terms.',
                    workingLatex: '-3x^2 \\longrightarrow -6x, \\qquad 2 \\longrightarrow 0',
                    explanation: 'The derivative of \\(-3x^2\\) is \\(-6x\\). The constant 2 differentiates to 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 6x',
                    explanation: 'Combine the differentiated terms into a single expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = -1 \\).',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\bigg|_{x=-1} = 4(-1)^3 - 6(-1) = -4 + 6 = 2',
                    explanation: 'Be careful with negative values: \\((-1)^3 = -1\\) and \\(-6 \\times -1 = 6\\).'
                }
            ],
            finalAnswer: 'Gradient \\( = 2 \\)'
        }
    },
    {
        id: 'd2-018',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 18',
        difficulty: 'Foundation',
        questionText: 'Find the coordinates of the point on \\( y = x^2 - 6x + 5 \\) where the gradient is \\( 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary point', 'gradient equals zero'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 6',
                    explanation: 'Apply the power rule to \\(x^2\\) and \\(-6x\\); the constant 5 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the derivative equal to 0.',
                    workingLatex: '2x - 6 = 0',
                    explanation: 'A gradient of 0 means the tangent is horizontal at that point.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = 6 \\implies x = 3',
                    explanation: 'Add 6 to both sides, then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = (3)^2 - 6(3) + 5 = 9 - 18 + 5 = -4',
                    explanation: 'Substitute \\(x = 3\\) back into the original equation for \\(y\\), not the derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'State the coordinates.',
                    workingLatex: '(3,\\ -4)',
                    explanation: 'The stationary point is at \\((3, -4)\\).'
                }
            ],
            finalAnswer: '\\( (3,\\ -4) \\)'
        }
    },
    {
        id: 'd2-019',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 19',
        difficulty: 'Foundation',
        questionText: 'Find the coordinates of the points on \\( y = x^3 - 3x \\) where the gradient is \\( 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'cubic', 'gradient equals zero'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3',
                    explanation: 'The derivative of \\(x^3\\) is \\(3x^2\\) and the derivative of \\(-3x\\) is \\(-3\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set the derivative equal to 0.',
                    workingLatex: '3x^2 - 3 = 0',
                    explanation: 'At a stationary point the gradient is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '3x^2 = 3 \\implies x^2 = 1 \\implies x = \\pm 1',
                    explanation: 'Divide both sides by 3, then take the square root to get two solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) when \\( x = 1 \\).',
                    workingLatex: 'y = (1)^3 - 3(1) = 1 - 3 = -2',
                    explanation: 'Substitute \\(x = 1\\) into the original equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\) when \\( x = -1 \\).',
                    workingLatex: 'y = (-1)^3 - 3(-1) = -1 + 3 = 2',
                    explanation: 'Substitute \\(x = -1\\) into the original equation.'
                }
            ],
            finalAnswer: '\\( (1,\\ -2) \\) and \\( (-1,\\ 2) \\)'
        }
    },
    {
        id: 'd2-020',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 20',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the tangent to \\( y = x^2 + 3x \\) at the point \\( (1, 4) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'equation of line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find the gradient function.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 3',
                    explanation: 'The derivative gives the gradient of the tangent at any point.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 1 \\) into the derivative.',
                    workingLatex: 'm = 2(1) + 3 = 5',
                    explanation: 'The gradient of the tangent at the point \\((1, 4)\\) is 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the line equation.',
                    workingLatex: 'y - 4 = 5(x - 1)',
                    explanation: 'Use the point-gradient form \\(y - y_1 = m(x - x_1)\\) with \\(m = 5\\) and \\((1, 4)\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange to \\( y = mx + c \\).',
                    workingLatex: 'y = 5x - 5 + 4 = 5x - 1',
                    explanation: 'Expand and simplify to get the equation in the required form.'
                }
            ],
            finalAnswer: '\\( y = 5x - 1 \\)'
        }
    },
    {
        id: 'd2-021',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 21',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the tangent to \\( y = 2x^3 - 5 \\) at the point \\( (1, -3) \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\), and \\( c \\) are integers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'equation of line', 'integer form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2',
                    explanation: 'Apply the power rule to \\( 2x^3 \\); the constant \\(-5\\) differentiates to \\(0\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient at \\( x = 1 \\).',
                    workingLatex: 'm = 6(1)^2 = 6',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equation of tangent.',
                    workingLatex: 'y - (-3) = 6(x - 1) \\implies y = 6x - 9',
                    explanation: 'Use point-slope form and expand.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange to the required form.',
                    workingLatex: '6x - y - 9 = 0',
                    explanation: 'Move everything to one side so coefficients are integers.'
                }
            ],
            finalAnswer: '\\( 6x - y - 9 = 0 \\)'
        }
    },
    {
        id: 'd2-022',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 22',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the normal to \\( y = x^2 - 4x + 3 \\) at the point \\( (3, 0) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'equation of line', 'perpendicular gradient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find the gradient of the curve.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 4',
                    explanation: 'The derivative gives the gradient of the tangent at any point.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of the tangent at \\( x = 3 \\).',
                    workingLatex: 'm_{\\text{tangent}} = 2(3) - 4 = 2',
                    explanation: 'Substitute \\( x = 3 \\) into the derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the gradient of the normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\frac{1}{2}',
                    explanation: 'The normal is perpendicular to the tangent, so its gradient is the negative reciprocal: \\( -\\dfrac{1}{m} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation of the normal through \\( (3, 0) \\).',
                    workingLatex: 'y - 0 = -\\tfrac{1}{2}(x - 3) \\implies y = -\\tfrac{1}{2}x + \\tfrac{3}{2}',
                    explanation: 'Use \\( y - y_1 = m(x - x_1) \\) with the normal gradient and the given point.'
                }
            ],
            finalAnswer: '\\( y = -\\dfrac{1}{2}x + \\dfrac{3}{2} \\)'
        }
    },
    {
        id: 'd2-023',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 23',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the normal to \\( y = x^3 - 2x + 1 \\) at the point \\( (2, 5) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'equation of line', 'integer form'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 2',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of tangent at \\( x = 2 \\).',
                    workingLatex: 'm_{\\text{tangent}} = 3(4) - 2 = 10',
                    explanation: '\\( 3(2)^2 - 2 = 12 - 2 = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\frac{1}{10}',
                    explanation: 'Negative reciprocal of \\( 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of normal through \\( (2, 5) \\).',
                    workingLatex: 'y - 5 = -\\tfrac{1}{10}(x - 2) \\implies 10y - 50 = -(x - 2) \\implies x + 10y - 52 = 0',
                    explanation: 'Multiply through by 10 to clear the fraction, then rearrange.'
                }
            ],
            finalAnswer: '\\( x + 10y - 52 = 0 \\)'
        }
    },
    {
        id: 'd2-024',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 24',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = (x+2)(x-5) \\) and find the value of \\( x \\) where \\( f\'(x) = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'solve for x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'f(x) = x^2 - 5x + 2x - 10 = x^2 - 3x - 10',
                    explanation: 'Multiply each term in the first bracket by each term in the second and collect like terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate term by term.',
                    workingLatex: "f'(x) = 2x - 3",
                    explanation: 'The derivative of \\(x^2\\) is \\(2x\\), the derivative of \\(-3x\\) is \\(-3\\), and the constant differentiates to 0.'
                },
                {
                    stepNumber: 3,
                    description: "Set \\( f'(x) = 3 \\).",
                    workingLatex: '2x - 3 = 3',
                    explanation: 'We need to find the value of \\(x\\) where the gradient equals 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = 6 \\implies x = 3',
                    explanation: 'Add 3 to both sides, then divide by 2.'
                }
            ],
            finalAnswer: '\\( x = 3 \\)'
        }
    },
    {
        id: 'd2-025',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 25',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\dfrac{x^3 - 5x^2 + 2x}{x} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into separate terms.',
                    workingLatex: 'y = \\frac{x^3}{x} - \\frac{5x^2}{x} + \\frac{2x}{x}',
                    explanation: 'Divide each term in the numerator by \\(x\\) separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    workingLatex: 'y = x^2 - 5x + 2',
                    explanation: '\\(\\tfrac{x^3}{x} = x^2\\), \\(\\tfrac{5x^2}{x} = 5x\\), and \\(\\tfrac{2x}{x} = 2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate \\( x^2 \\) and \\( -5x \\).',
                    workingLatex: 'x^2 \\longrightarrow 2x, \\qquad -5x \\longrightarrow -5',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the final derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 5',
                    explanation: 'The constant 2 differentiates to 0, so the derivative is \\(2x - 5\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 5 \\)'
        }
    },
    {
        id: 'd2-026',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 26',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) when \\( y = \\dfrac{3x^3 + x}{\\sqrt{x}} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'fractional index', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the denominator as a power.',
                    workingLatex: '\\sqrt{x} = x^{1/2}',
                    explanation: 'Express the square root as a fractional index so we can use index laws.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide each numerator term by \\( x^{1/2} \\).',
                    workingLatex: 'y = \\frac{3x^3}{x^{1/2}} + \\frac{x}{x^{1/2}} = 3x^{5/2} + x^{1/2}',
                    explanation: 'Use the index law \\(\\tfrac{x^a}{x^b} = x^{a-b}\\): \\(3 - \\tfrac{1}{2} = \\tfrac{5}{2}\\) and \\(1 - \\tfrac{1}{2} = \\tfrac{1}{2}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the first term.',
                    workingLatex: '3x^{5/2} \\longrightarrow 3 \\times \\tfrac{5}{2} x^{3/2} = \\tfrac{15}{2}x^{3/2}',
                    explanation: 'Multiply the coefficient 3 by the index \\(\\tfrac{5}{2}\\), then reduce the power by 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate the second term.',
                    workingLatex: 'x^{1/2} \\longrightarrow \\tfrac{1}{2}x^{-1/2}',
                    explanation: 'Multiply by the index \\(\\tfrac{1}{2}\\) and reduce the power by 1.'
                },
                {
                    stepNumber: 5,
                    description: 'Rewrite in surd form.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{15}{2}x\\sqrt{x} + \\frac{1}{2\\sqrt{x}}',
                    explanation: '\\(x^{3/2} = x\\sqrt{x}\\) and \\(x^{-1/2} = \\tfrac{1}{\\sqrt{x}}\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{15x\\sqrt{x}}{2} + \\dfrac{1}{2\\sqrt{x}} \\)'
        }
    },
    {
        id: 'd2-027',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 27',
        difficulty: 'Foundation',
        questionText: 'Expand then differentiate \\( y = (3x - 1)^2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the square.',
                    workingLatex: '(3x-1)^2 = (3x)^2 - 2(3x)(1) + 1^2 = 9x^2 - 6x + 1',
                    explanation: 'Use \\((a - b)^2 = a^2 - 2ab + b^2\\) with \\(a = 3x\\) and \\(b = 1\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate \\( 9x^2 \\).',
                    workingLatex: '9x^2 \\longrightarrow 9 \\times 2x = 18x',
                    explanation: 'Multiply the coefficient 9 by the index 2, then reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the remaining terms.',
                    workingLatex: '-6x \\longrightarrow -6, \\qquad 1 \\longrightarrow 0',
                    explanation: 'The derivative of \\(-6x\\) is \\(-6\\). The constant 1 differentiates to 0.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the final derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 18x - 6',
                    explanation: 'Combine the differentiated terms into a single expression.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 18x - 6 \\)'
        }
    },
    {
        id: 'd2-028',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 28',
        difficulty: 'Foundation',
        questionText: 'Find the gradient of \\( y = \\dfrac{x^2 - 4}{x} \\) at the point \\( (-2, 0) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify fraction', 'gradient at a point'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into separate terms.',
                    workingLatex: 'y = \\frac{x^2}{x} - \\frac{4}{x}',
                    explanation: 'Divide each term in the numerator by \\(x\\) separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify using index notation.',
                    workingLatex: 'y = x - 4x^{-1}',
                    explanation: '\\(\\tfrac{x^2}{x} = x\\) and \\(\\tfrac{4}{x} = 4x^{-1}\\). Rewriting makes differentiation straightforward.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the first term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}(x) = 1',
                    explanation: 'The derivative of \\(x\\) is 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate the second term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}(-4x^{-1}) = -4 \\times (-1)x^{-2} = 4x^{-2}',
                    explanation: 'Multiply the coefficient \\(-4\\) by the index \\(-1\\), then reduce the power by 1.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the full derivative.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 1 + \\frac{4}{x^2}',
                    explanation: 'Rewrite \\(4x^{-2}\\) as \\(\\tfrac{4}{x^2}\\) for easier substitution.'
                },
                {
                    stepNumber: 6,
                    description: 'Substitute \\( x = -2 \\).',
                    workingLatex: '1 + \\frac{4}{(-2)^2} = 1 + \\frac{4}{4} = 1 + 1 = 2',
                    explanation: '\\((-2)^2 = 4\\), so the gradient at \\((-2, 0)\\) is 2.'
                }
            ],
            finalAnswer: 'Gradient \\( = 2 \\)'
        }
    },
    {
        id: 'd2-029',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 29',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = \\sqrt{x}\\,(x - 4) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand brackets', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the square root as a power.',
                    workingLatex: 'y = x^{1/2}(x - 4)',
                    explanation: 'Replace \\( \\sqrt{x} \\) with \\( x^{1/2} \\) so the expression can be expanded using index laws.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = x^{1/2} \\cdot x - x^{1/2} \\cdot 4 = x^{3/2} - 4x^{1/2}',
                    explanation: 'Multiply \\( x^{1/2} \\) by each term, using \\( x^{1/2} \\cdot x = x^{1/2+1} = x^{3/2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the first term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}\\bigl(x^{3/2}\\bigr) = \\tfrac{3}{2}x^{1/2}',
                    explanation: 'Bring down the power \\( \\tfrac{3}{2} \\) and reduce the index by 1 to get \\( \\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate the second term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}\\bigl(-4x^{1/2}\\bigr) = -4 \\cdot \\tfrac{1}{2}x^{-1/2} = -2x^{-1/2}',
                    explanation: 'Bring down the power \\( \\tfrac{1}{2} \\) and reduce the index by 1 to get \\( -\\tfrac{1}{2} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Combine and rewrite with surds.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{3}{2}\\sqrt{x} - \\frac{2}{\\sqrt{x}}',
                    explanation: 'Replace \\( x^{1/2} \\) with \\( \\sqrt{x} \\) and \\( x^{-1/2} \\) with \\( \\dfrac{1}{\\sqrt{x}} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{3\\sqrt{x}}{2} - \\dfrac{2}{\\sqrt{x}} \\)'
        }
    },
    {
        id: 'd2-030',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 30',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the tangent to \\( y = (x-1)(x+3) \\) at the point \\( (2, 5) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'expand brackets', 'equation of line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = x^2 + 2x - 3',
                    explanation: '\\( (x-1)(x+3) = x^2 + 3x - x - 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 2',
                    explanation: 'Power rule applied term by term.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = 2 \\).',
                    workingLatex: 'm = 2(2) + 2 = 6',
                    explanation: 'Substitute \\( x = 2 \\) into the derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of tangent through \\( (2, 5) \\).',
                    workingLatex: 'y - 5 = 6(x - 2) \\implies y = 6x - 7',
                    explanation: 'Expand and rearrange to \\( y = mx + c \\).'
                }
            ],
            finalAnswer: '\\( y = 6x - 7 \\)'
        }
    },
    {
        id: 'd2-031',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 31',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the normal to \\( y = 4\\sqrt{x} \\) at the point \\( (4, 8) \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\), and \\( c \\) are integers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'fractional index', 'equation of line'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write as a power of \\( x \\) and differentiate.',
                    workingLatex: 'y = 4x^{1/2} \\implies \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x^{-1/2} = \\frac{2}{\\sqrt{x}}',
                    explanation: 'Apply the power rule to \\( 4x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of tangent at \\( x = 4 \\).',
                    workingLatex: 'm_{\\text{tangent}} = \\frac{2}{\\sqrt{4}} = \\frac{2}{2} = 1',
                    explanation: 'Substitute \\( x = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -1',
                    explanation: 'Negative reciprocal of \\(1\\) is \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of normal through \\( (4, 8) \\).',
                    workingLatex: 'y - 8 = -1(x - 4) \\implies y = -x + 12',
                    explanation: 'Point-slope form with \\( m = -1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange to integer form.',
                    workingLatex: 'x + y - 12 = 0',
                    explanation: 'Add \\( x \\) and subtract \\( 12 \\) from both sides.'
                }
            ],
            finalAnswer: '\\( x + y - 12 = 0 \\)'
        }
    },
    {
        id: 'd2-032',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 32',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 4x + 3 \\).\n(a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\n(b) Show that the point \\( P(2, 3) \\) lies on \\( C \\).\n(c) Find the equation of the tangent to \\( C \\) at \\( P \\), giving your answer in the form \\( y = mx + c \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'show that', 'cubic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( x = 2 \\) into \\( y = x^3 - 4x + 3 \\).',
                    workingLatex: 'y = (2)^3 - 4(2) + 3 = 8 - 8 + 3 = 3 \\checkmark',
                    explanation: 'The point \\( (2, 3) \\) satisfies the equation, so it lies on \\( C \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Gradient at \\( P(2, 3) \\).',
                    workingLatex: 'm = 3(2)^2 - 4 = 12 - 4 = 8',
                    explanation: 'Substitute \\( x = 2 \\) into the derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the tangent equation.',
                    workingLatex: 'y - 3 = 8(x - 2) \\implies y = 8x - 13',
                    explanation: 'Use point-slope form and rearrange.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4 \\) \nb) \\( y = 8 - 8 + 3 = 3 \\) ✓ \nc) \\( y = 8x - 13 \\)'
        }
    },
    {
        id: 'd2-033',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 33',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = 2x^2 - 7x + 4 \\).\n(a) Find the gradient of \\( C \\) at the point \\( A(3, 1) \\).\n(b) Hence find the equation of the normal to \\( C \\) at \\( A \\), giving your answer in the form \\( ax + by + c = 0 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'quadratic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 7',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient at \\( x = 3 \\).',
                    workingLatex: 'm_{\\text{tangent}} = 4(3) - 7 = 5',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\frac{1}{5}',
                    explanation: 'The normal gradient is the negative reciprocal.'
                },
                {
                    stepNumber: 4,
                    description: 'Equation of normal through \\( (3, 1) \\).',
                    workingLatex: 'y - 1 = -\\tfrac{1}{5}(x - 3) \\implies 5y - 5 = -(x - 3) \\implies x + 5y - 8 = 0',
                    explanation: 'Multiply through by 5 to clear the fraction, then rearrange.'
                }
            ],
            finalAnswer: '(a) Gradient \\( = 5 \\) \nb) \\( x + 5y - 8 = 0 \\)'
        }
    },
    {
        id: 'd2-034',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 34',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = x^3 - 6x^2 + 9x + 2 \\).\n(a) Find \\( f\'(x) \\).\n(b) Find the coordinates of the two stationary points of the curve \\( y = f(x) \\).\n(c) Find the equation of the tangent to the curve at the point where \\( x = 4 \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'tangent', 'cubic', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "(a) Differentiate \\( f(x) \\).",
                    workingLatex: "f'(x) = 3x^2 - 12x + 9",
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: "(b) Set \\( f'(x) = 0 \\).",
                    workingLatex: '3x^2 - 12x + 9 = 0 \\implies x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0',
                    explanation: 'Divide through by 3, then factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'So \\( x = 1 \\) or \\( x = 3 \\). Find the \\( y \\)-coordinates.',
                    workingLatex: 'f(1) = 1 - 6 + 9 + 2 = 6; \\quad f(3) = 27 - 54 + 27 + 2 = 2',
                    explanation: 'Substitute each \\( x \\) back into \\( f(x) \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Gradient at \\( x = 4 \\).',
                    workingLatex: "f'(4) = 3(16) - 12(4) + 9 = 48 - 48 + 9 = 9",
                    explanation: 'Substitute \\( x = 4 \\) into \\( f\'(x) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Point on curve when \\( x = 4 \\).',
                    workingLatex: 'f(4) = 64 - 96 + 36 + 2 = 6',
                    explanation: 'Substitute into \\( f(x) \\) to find the \\( y \\)-coordinate.'
                },
                {
                    stepNumber: 6,
                    description: 'Tangent at \\( (4, 6) \\) with gradient \\( 9 \\).',
                    workingLatex: 'y - 6 = 9(x - 4) \\implies y = 9x - 30',
                    explanation: 'Use point-slope form and rearrange.'
                }
            ],
            finalAnswer: "(a) \\( f'(x) = 3x^2 - 12x + 9 \\) \nb) \\( (1,\\, 6) \\) and \\( (3,\\, 2) \\) \nc) \\( y = 9x - 30 \\)"
        }
    },
    {
        id: 'd2-035',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 35',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = f(x) \\), where \\( f(x) = \\dfrac{x^3 - 4x}{\\sqrt{x}} \\) for \\( x > 0 \\).\n(a) Show that \\( f(x) \\) can be written in the form \\( ax^p + bx^q \\), stating the values of \\( a \\), \\( p \\), \\( b \\), and \\( q \\).\n(b) Find \\( f\'(x) \\).\n(c) Find the equation of the tangent to \\( C \\) at the point where \\( x = 4 \\), giving your answer in the form \\( y = mx + c \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'fractional index', 'simplify', 'tangent', 'exam style', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write \\( \\sqrt{x} = x^{1/2} \\) and divide each term.',
                    workingLatex: 'f(x) = \\frac{x^3}{x^{1/2}} - \\frac{4x}{x^{1/2}} = x^{5/2} - 4x^{1/2}',
                    explanation: 'Use \\( \\dfrac{x^a}{x^b} = x^{a-b} \\): \\( x^{3-1/2} = x^{5/2} \\) and \\( x^{1-1/2} = x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the constants.',
                    workingLatex: 'a = 1,\\ p = \\tfrac{5}{2},\\ b = -4,\\ q = \\tfrac{1}{2}',
                    explanation: 'Match the form \\( ax^p + bx^q \\).'
                },
                {
                    stepNumber: 3,
                    description: "(b) Differentiate \\( f(x) = x^{5/2} - 4x^{1/2} \\).",
                    workingLatex: "f'(x) = \\tfrac{5}{2}x^{3/2} - 4 \\cdot \\tfrac{1}{2}x^{-1/2} = \\tfrac{5}{2}x^{3/2} - \\frac{2}{\\sqrt{x}}",
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find the \\( y \\)-coordinate when \\( x = 4 \\).',
                    workingLatex: 'f(4) = 4^{5/2} - 4 \\cdot 4^{1/2} = 32 - 8 = 24',
                    explanation: '\\( 4^{5/2} = (\\sqrt{4})^5 = 2^5 = 32 \\) and \\( 4^{1/2} = 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: "Gradient at \\( x = 4 \\).",
                    workingLatex: "f'(4) = \\tfrac{5}{2}(4)^{3/2} - \\frac{2}{\\sqrt{4}} = \\tfrac{5}{2}(8) - 1 = 20 - 1 = 19",
                    explanation: '\\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Tangent through \\( (4, 24) \\) with gradient \\( 19 \\).',
                    workingLatex: 'y - 24 = 19(x - 4) \\implies y = 19x - 52',
                    explanation: 'Point-slope form, expanded and rearranged.'
                }
            ],
            finalAnswer: "(a) \\( f(x) = x^{5/2} - 4x^{1/2} \\); \\( a=1, p=\\tfrac{5}{2}, b=-4, q=\\tfrac{1}{2} \\) \nb) \\( f'(x) = \\dfrac{5}{2}x^{3/2} - \\dfrac{2}{\\sqrt{x}} \\) \nc) \\( y = 19x - 52 \\)"
        }
    },

    // TYPE H (36–42): More power rule — negative and fractional indices
    {
        id: 'd2-036',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 36',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = \\dfrac{5}{x^2} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite with a negative index.',
                    workingLatex: 'y = 5x^{-2}',
                    explanation: 'Write \\( \\dfrac{5}{x^2} \\) as \\( 5x^{-2} \\) so the power rule can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 5 \\cdot (-2)\\, x^{-3} = -10x^{-3}',
                    explanation: 'Multiply the coefficient by the index \\( -2 \\) and reduce the power by 1 to get \\( -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite with a positive index.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{10}{x^3}',
                    explanation: 'Express the negative power as a fraction: \\( x^{-3} = \\dfrac{1}{x^3} \\).'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{10}{x^3} \\)"
        }
    },
    {
        id: 'd2-037',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 37',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = \\dfrac{2}{\\sqrt{x}} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'fractional index', 'root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a power of \\( x \\).',
                    workingLatex: 'f(x) = 2x^{-1/2}',
                    explanation: 'Use \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\), so \\( \\dfrac{2}{\\sqrt{x}} = 2x^{-1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: "f'(x) = 2 \\cdot \\left(-\\tfrac{1}{2}\\right) x^{-1/2 - 1} = -x^{-3/2}",
                    explanation: 'Multiply the coefficient 2 by the index \\( -\\tfrac{1}{2} \\) to get \\( -1 \\), and reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Express as a fraction.',
                    workingLatex: "f'(x) = -\\dfrac{1}{x^{3/2}}",
                    explanation: 'A negative index means the term moves to the denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with a surd.',
                    workingLatex: "f'(x) = -\\dfrac{1}{x\\sqrt{x}}",
                    explanation: '\\( x^{3/2} = x^1 \\cdot x^{1/2} = x\\sqrt{x} \\).'
                }
            ],
            finalAnswer: "\\( f'(x) = -\\dfrac{1}{x\\sqrt{x}} \\)"
        }
    },
    {
        id: 'd2-038',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 38',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = 3\\sqrt[3]{x} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'cube root', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using a fractional index.',
                    workingLatex: 'y = 3x^{1/3}',
                    explanation: '\\( \\sqrt[3]{x} = x^{1/3} \\), so \\( 3\\sqrt[3]{x} = 3x^{1/3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3 \\cdot \\tfrac{1}{3}\\, x^{1/3 - 1} = x^{-2/3}',
                    explanation: 'Multiply the coefficient 3 by the index \\( \\tfrac{1}{3} \\) to get 1, and reduce the power by 1 to get \\( -\\tfrac{2}{3} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite with a surd.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{1}{x^{2/3}} = \\dfrac{1}{\\sqrt[3]{x^2}}',
                    explanation: 'Express the negative fractional power as a cube-root denominator.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{1}{\\sqrt[3]{x^2}} \\)"
        }
    },
    {
        id: 'd2-039',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 39',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = 6x^{2/3} - 4x^{-1} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'power rule', 'mixed indices'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the first term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}\\bigl(6x^{2/3}\\bigr) = 6 \\cdot \\tfrac{2}{3}\\, x^{-1/3} = 4x^{-1/3}',
                    explanation: 'Multiply the coefficient 6 by the index \\( \\tfrac{2}{3} \\) to get 4, and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the second term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}\\bigl(-4x^{-1}\\bigr) = -4 \\cdot (-1)\\, x^{-2} = 4x^{-2}',
                    explanation: 'Multiply the coefficient \\( -4 \\) by the index \\( -1 \\) to get \\( +4 \\), and reduce the power by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine and simplify.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^{-1/3} + 4x^{-2} = \\dfrac{4}{\\sqrt[3]{x}} + \\dfrac{4}{x^2}',
                    explanation: 'Rewrite the negative indices as fractions with positive powers.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{4}{\\sqrt[3]{x}} + \\dfrac{4}{x^2} \\)"
        }
    },
    {
        id: 'd2-040',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 40',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = \\dfrac{x^2 + 1}{x^3} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify first', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into separate terms.',
                    workingLatex: 'f(x) = \\dfrac{x^2}{x^3} + \\dfrac{1}{x^3}',
                    explanation: 'Divide each numerator term by \\( x^3 \\) separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify using index laws.',
                    workingLatex: 'f(x) = x^{2-3} + x^{-3} = x^{-1} + x^{-3}',
                    explanation: 'Use \\( \\dfrac{x^a}{x^b} = x^{a-b} \\) to write each term as a power of \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: "f'(x) = (-1)x^{-2} + (-3)x^{-4} = -x^{-2} - 3x^{-4}",
                    explanation: 'Apply the power rule to each term: bring down the index and reduce it by 1.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with positive indices.',
                    workingLatex: "f'(x) = -\\dfrac{1}{x^2} - \\dfrac{3}{x^4}",
                    explanation: 'Express each negative power as a fraction.'
                }
            ],
            finalAnswer: "\\( f'(x) = -\\dfrac{1}{x^2} - \\dfrac{3}{x^4} \\)"
        }
    },
    {
        id: 'd2-041',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 41',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = \\dfrac{2x^{3/2} - 5}{\\sqrt{x}} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify first', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the fraction into two terms.',
                    workingLatex: 'y = \\dfrac{2x^{3/2}}{x^{1/2}} - \\dfrac{5}{x^{1/2}}',
                    explanation: 'Write \\( \\sqrt{x} = x^{1/2} \\) and divide each numerator term separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify using index laws.',
                    workingLatex: 'y = 2x^{3/2 - 1/2} - 5x^{-1/2} = 2x - 5x^{-1/2}',
                    explanation: '\\( \\dfrac{x^{3/2}}{x^{1/2}} = x^{1} \\) and \\( \\dfrac{1}{x^{1/2}} = x^{-1/2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the first term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}(2x) = 2',
                    explanation: 'The derivative of \\( 2x \\) is simply 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate the second term.',
                    workingLatex: '\\frac{\\mathrm{d}}{\\mathrm{d}x}(-5x^{-1/2}) = \\tfrac{5}{2}x^{-3/2}',
                    explanation: 'Multiply \\( -5 \\) by \\( -\\tfrac{1}{2} \\) to get \\( +\\tfrac{5}{2} \\), and reduce the power by 1.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine and rewrite with surds.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2 + \\dfrac{5}{2x\\sqrt{x}}',
                    explanation: '\\( x^{-3/2} = \\dfrac{1}{x\\sqrt{x}} \\), so \\( \\tfrac{5}{2}x^{-3/2} = \\dfrac{5}{2x\\sqrt{x}} \\).'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2 + \\dfrac{5}{2x\\sqrt{x}} \\)"
        }
    },
    {
        id: 'd2-042',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 42',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = (x^2 - 3)(x + 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand first', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: 'y = x^2(x+1) - 3(x+1) = x^3 + x^2 - 3x - 3',
                    explanation: 'Multiply each term in the first bracket by \\( (x+1) \\) and collect the result.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2x - 3 + 0',
                    explanation: 'Apply the power rule to \\( x^3 \\), \\( x^2 \\), and \\( -3x \\). The constant \\( -3 \\) differentiates to zero.'
                },
                {
                    stepNumber: 3,
                    description: 'State the derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2x - 3',
                    explanation: 'No further simplification is needed.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2x - 3 \\)"
        }
    },

    // TYPE I (43–48): Expand-then-differentiate with harder products
    {
        id: 'd2-043',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 43',
        difficulty: 'Standard',
        questionText: 'Expand and differentiate \\( y = (2x - 1)^2 (x + 3) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand first', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (2x - 1)^2 \\) first.',
                    workingLatex: '(2x-1)^2 = (2x)^2 - 2(2x)(1) + 1^2 = 4x^2 - 4x + 1',
                    explanation: 'Use the identity \\( (a - b)^2 = a^2 - 2ab + b^2 \\) with \\( a = 2x \\) and \\( b = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply by \\( (x + 3) \\).',
                    workingLatex: '(4x^2 - 4x + 1)(x + 3) = 4x^3 + 12x^2 - 4x^2 - 12x + x + 3',
                    explanation: 'Multiply each term in the first bracket by each term in the second bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Collect like terms.',
                    workingLatex: 'y = 4x^3 + 8x^2 - 11x + 3',
                    explanation: 'Combine \\( 12x^2 - 4x^2 = 8x^2 \\) and \\( -12x + x = -11x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^2 + 16x - 11',
                    explanation: 'Apply the power rule to each term: \\( 4x^3 \\to 12x^2 \\), \\( 8x^2 \\to 16x \\), \\( -11x \\to -11 \\). The constant vanishes.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^2 + 16x - 11 \\)"
        }
    },
    {
        id: 'd2-044',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 44',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = \\sqrt{x}(x^2 - 4) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand first', 'root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\sqrt{x} \\) as a power.',
                    workingLatex: '\\sqrt{x} = x^{1/2}',
                    explanation: 'Express the square root using index notation so the power rule can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the product.',
                    workingLatex: 'y = x^{1/2} \\cdot x^2 - 4x^{1/2} = x^{5/2} - 4x^{1/2}',
                    explanation: 'Use the index law \\( x^a \\cdot x^b = x^{a+b} \\). Here \\( \\tfrac{1}{2} + 2 = \\tfrac{5}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{5}{2}x^{3/2} - \\tfrac{1}{2} \\cdot 4x^{-1/2} = \\tfrac{5}{2}x^{3/2} - 2x^{-1/2}',
                    explanation: 'Apply the power rule: bring down the power and reduce the index by one.'
                },
                {
                    stepNumber: 4,
                    description: 'Convert back to surd form.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{5}{2}x\\sqrt{x} - \\dfrac{2}{\\sqrt{x}}',
                    explanation: 'Rewrite \\( x^{3/2} = x\\sqrt{x} \\) and \\( x^{-1/2} = \\dfrac{1}{\\sqrt{x}} \\).'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{5}{2}x\\sqrt{x} - \\dfrac{2}{\\sqrt{x}} \\)"
        }
    },
    {
        id: 'd2-045',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 45',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = \\dfrac{(x + 2)(x - 1)}{x^2} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify first', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the numerator.',
                    workingLatex: '(x+2)(x-1) = x^2 + x - 2',
                    explanation: 'Multiply out the brackets in the numerator before dividing.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide each term by \\( x^2 \\).',
                    workingLatex: 'f(x) = \\dfrac{x^2}{x^2} + \\dfrac{x}{x^2} - \\dfrac{2}{x^2} = 1 + x^{-1} - 2x^{-2}',
                    explanation: 'Split the fraction and write each quotient as a power of \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: "f'(x) = -x^{-2} + 4x^{-3}",
                    explanation: 'The constant 1 differentiates to zero. Apply the power rule: \\( x^{-1} \\to -x^{-2} \\) and \\( -2x^{-2} \\to 4x^{-3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with positive powers.',
                    workingLatex: "f'(x) = -\\dfrac{1}{x^2} + \\dfrac{4}{x^3}",
                    explanation: 'Express the answer using fractions rather than negative indices.'
                }
            ],
            finalAnswer: "\\( f'(x) = -\\dfrac{1}{x^2} + \\dfrac{4}{x^3} \\)"
        }
    },
    {
        id: 'd2-046',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 46',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = \\left( x + \\dfrac{1}{x} \\right)^2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand first', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand using the square identity.',
                    workingLatex: '\\left(x + \\dfrac{1}{x}\\right)^2 = x^2 + 2 \\cdot x \\cdot \\dfrac{1}{x} + \\dfrac{1}{x^2}',
                    explanation: 'Apply \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = x \\) and \\( b = \\dfrac{1}{x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify to index form.',
                    workingLatex: 'y = x^2 + 2 + x^{-2}',
                    explanation: 'The middle term simplifies because \\( x \\cdot \\dfrac{1}{x} = 1 \\), so \\( 2ab = 2 \\). Rewrite \\( \\dfrac{1}{x^2} = x^{-2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 0 - 2x^{-3}',
                    explanation: 'Apply the power rule to each term. The constant 2 differentiates to zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite with positive powers.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - \\dfrac{2}{x^3}',
                    explanation: 'Express \\( -2x^{-3} \\) as \\( -\\dfrac{2}{x^3} \\) for a cleaner final answer.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - \\dfrac{2}{x^3} \\)"
        }
    },
    {
        id: 'd2-047',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 47',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( y = \\dfrac{(\\sqrt{x} + 1)^2}{x} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'simplify first', 'root', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the numerator.',
                    workingLatex: '(\\sqrt{x} + 1)^2 = x + 2\\sqrt{x} + 1',
                    explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sqrt{x} \\) and \\( b = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide each term by \\( x \\).',
                    workingLatex: 'y = \\dfrac{x}{x} + \\dfrac{2\\sqrt{x}}{x} + \\dfrac{1}{x} = 1 + 2x^{-1/2} + x^{-1}',
                    explanation: 'Split the fraction and simplify. Note \\( \\dfrac{\\sqrt{x}}{x} = x^{1/2 - 1} = x^{-1/2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 + 2 \\cdot (-\\tfrac{1}{2})x^{-3/2} + (-1)x^{-2} = -x^{-3/2} - x^{-2}',
                    explanation: 'The constant differentiates to zero. Apply the power rule to the remaining terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Rewrite in surd form.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{1}{x\\sqrt{x}} - \\dfrac{1}{x^2}',
                    explanation: 'Express \\( x^{-3/2} = \\dfrac{1}{x\\sqrt{x}} \\) and \\( x^{-2} = \\dfrac{1}{x^2} \\).'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -\\dfrac{1}{x\\sqrt{x}} - \\dfrac{1}{x^2} \\)"
        }
    },
    {
        id: 'd2-048',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 48',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = (x^2 + 2x)(x - 3) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'expand first', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply out the brackets.',
                    workingLatex: 'f(x) = x^2(x - 3) + 2x(x - 3) = x^3 - 3x^2 + 2x^2 - 6x',
                    explanation: 'Distribute each term in the first bracket across the second bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Collect like terms.',
                    workingLatex: 'f(x) = x^3 - x^2 - 6x',
                    explanation: 'Combine \\( -3x^2 + 2x^2 = -x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate term by term.',
                    workingLatex: "f'(x) = 3x^2 - 2x - 6",
                    explanation: 'Apply the power rule: \\( x^3 \\to 3x^2 \\), \\( -x^2 \\to -2x \\), \\( -6x \\to -6 \\).'
                }
            ],
            finalAnswer: "\\( f'(x) = 3x^2 - 2x - 6 \\)"
        }
    },

    // TYPE J (49–53): Gradient at a point — harder functions
    {
        id: 'd2-049',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 49',
        difficulty: 'Standard',
        questionText: 'Find the gradient of the curve \\( y = x^3 - 2x^2 + 5 \\) at the point where \\( x = -1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at point', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4x',
                    explanation: 'Apply the power rule: \\( x^3 \\to 3x^2 \\), \\( -2x^2 \\to -4x \\). The constant 5 vanishes.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = -1 \\).',
                    workingLatex: '3(-1)^2 - 4(-1) = 3(1) - (-4)',
                    explanation: 'Replace \\( x \\) with \\( -1 \\). Remember \\( (-1)^2 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the expression.',
                    workingLatex: '3 + 4 = 7',
                    explanation: 'The gradient of the curve at \\( x = -1 \\) is 7.'
                }
            ],
            finalAnswer: "Gradient at \\( x = -1 \\) is \\( 7 \\)."
        }
    },
    {
        id: 'd2-050',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 50',
        difficulty: 'Standard',
        questionText: 'Find the gradient of \\( y = \\dfrac{4}{x} + x^2 \\) at the point where \\( x = 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at point', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite in index form.',
                    workingLatex: 'y = 4x^{-1} + x^2',
                    explanation: 'Write \\( \\dfrac{4}{x} \\) as \\( 4x^{-1} \\) so the power rule can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -4x^{-2} + 2x',
                    explanation: 'Apply the power rule: \\( 4x^{-1} \\to -4x^{-2} \\) and \\( x^2 \\to 2x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2 \\).',
                    workingLatex: '-4(2)^{-2} + 2(2) = -\\dfrac{4}{4} + 4',
                    explanation: 'Replace \\( x \\) with 2 in the derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify to find the gradient.',
                    workingLatex: '-1 + 4 = 3',
                    explanation: 'The gradient of the curve at \\( x = 2 \\) is 3.'
                }
            ],
            finalAnswer: "Gradient at \\( x = 2 \\) is \\( 3 \\)."
        }
    },
    {
        id: 'd2-051',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 51',
        difficulty: 'Standard',
        questionText: 'Find the gradient of \\( f(x) = \\sqrt{x}(x + 2) \\) at the point where \\( x = 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient at point', 'root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite and expand the product.',
                    workingLatex: 'f(x) = x^{1/2} \\cdot x + 2x^{1/2} = x^{3/2} + 2x^{1/2}',
                    explanation: 'Write \\( \\sqrt{x} = x^{1/2} \\), then use the index law \\( x^{1/2} \\cdot x = x^{3/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate term by term.',
                    workingLatex: "f'(x) = \\tfrac{3}{2}x^{1/2} + \\tfrac{1}{2} \\cdot 2x^{-1/2} = \\tfrac{3}{2}\\sqrt{x} + \\dfrac{1}{\\sqrt{x}}",
                    explanation: 'Apply the power rule to each term and simplify. Note \\( x^{1/2} = \\sqrt{x} \\) and \\( x^{-1/2} = \\dfrac{1}{\\sqrt{x}} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 4 \\).',
                    workingLatex: "f'(4) = \\tfrac{3}{2}\\sqrt{4} + \\dfrac{1}{\\sqrt{4}} = \\tfrac{3}{2}(2) + \\tfrac{1}{2}",
                    explanation: 'Replace \\( x \\) with 4. Since \\( \\sqrt{4} = 2 \\), substitute this value throughout.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the gradient.',
                    workingLatex: "f'(4) = 3 + \\tfrac{1}{2} = \\tfrac{7}{2}",
                    explanation: 'The gradient of the curve at \\( x = 4 \\) is \\( \\dfrac{7}{2} \\).'
                }
            ],
            finalAnswer: "Gradient at \\( x = 4 \\) is \\( \\dfrac{7}{2} \\)."
        }
    },
    {
        id: 'd2-052',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 52',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 4x \\). Find the values of \\( x \\) at which the gradient of \\( C \\) is \\( 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient equals value', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4',
                    explanation: 'Apply the power rule: \\( x^3 \\to 3x^2 \\) and \\( -4x \\to -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set gradient equal to 8.',
                    workingLatex: '3x^2 - 4 = 8',
                    explanation: 'The gradient equals the derivative, so set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange for \\( x^2 \\).',
                    workingLatex: '3x^2 = 12 \\;\\Rightarrow\\; x^2 = 4',
                    explanation: 'Add 4 to both sides, then divide by 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\pm 2',
                    explanation: 'Take the square root of both sides. There are two solutions since \\( x^2 = 4 \\) gives both \\( x = 2 \\) and \\( x = -2 \\).'
                }
            ],
            finalAnswer: "\\( x = 2 \\) or \\( x = -2 \\)."
        }
    },
    {
        id: 'd2-053',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 53',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the point on \\( y = 2x^2 - 3x + 1 \\) where the gradient is \\( 5 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient equals value', 'coordinates'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 3',
                    explanation: 'Apply the power rule: \\( 2x^2 \\to 4x \\), \\( -3x \\to -3 \\). The constant vanishes.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the derivative equal to 5.',
                    workingLatex: '4x - 3 = 5 \\;\\Rightarrow\\; 4x = 8 \\;\\Rightarrow\\; x = 2',
                    explanation: 'The gradient is 5, so solve \\( 4x - 3 = 5 \\). Add 3 then divide by 4.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = 2(2)^2 - 3(2) + 1 = 8 - 6 + 1 = 3',
                    explanation: 'Substitute \\( x = 2 \\) into the original equation to find the corresponding \\( y \\)-value.'
                },
                {
                    stepNumber: 4,
                    description: 'State the coordinates.',
                    workingLatex: '(2,\\; 3)',
                    explanation: 'The point on the curve where the gradient is 5 has coordinates \\( (2, 3) \\).'
                }
            ],
            finalAnswer: "Point is \\( (2, 3) \\)."
        }
    },

    // TYPE K (54–58): Tangents and normals
    {
        id: 'd2-054',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 54',
        difficulty: 'Standard',
        questionText: 'Find the equation of the tangent to \\( y = x^3 - 2x \\) at the point \\( (2, 4) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate term by term.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 2',
                    explanation: 'Apply the power rule: \\( x^3 \\to 3x^2 \\) and \\( -2x \\to -2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient at \\( x = 2 \\).',
                    workingLatex: '3(2)^2 - 2 = 12 - 2 = 10',
                    explanation: 'Substitute \\( x = 2 \\) into the derivative. The tangent at \\( (2, 4) \\) has gradient 10.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the tangent equation.',
                    workingLatex: 'y - 4 = 10(x - 2)',
                    explanation: 'Use the point-slope form \\( y - y_1 = m(x - x_1) \\) with \\( m = 10 \\) and the point \\( (2, 4) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange to \\( y = mx + c \\).',
                    workingLatex: 'y = 10x - 20 + 4 = 10x - 16',
                    explanation: 'Expand and simplify to obtain the equation of the tangent in the required form.'
                }
            ],
            finalAnswer: "\\( y = 10x - 16 \\)"
        }
    },
    {
        id: 'd2-055',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 55',
        difficulty: 'Standard',
        questionText: 'Find the equation of the tangent to \\( y = \\dfrac{6}{x} \\) at the point where \\( x = 3 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'negative index', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = \\dfrac{6}{3} = 2 \\;\\Rightarrow\\; (3, 2)',
                    explanation: 'Substitute \\( x = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: 'y = 6x^{-1} \\;\\Rightarrow\\; \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = -6x^{-2} = -\\dfrac{6}{x^2}',
                    explanation: 'Use the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = 3 \\).',
                    workingLatex: '-\\dfrac{6}{9} = -\\dfrac{2}{3}',
                    explanation: 'Evaluate the derivative.'
                },
                {
                    stepNumber: 4,
                    description: 'Tangent equation.',
                    workingLatex: 'y - 2 = -\\tfrac{2}{3}(x - 3) \\;\\Rightarrow\\; y = -\\tfrac{2}{3}x + 4',
                    explanation: 'Point-slope, then rearrange.'
                }
            ],
            finalAnswer: "\\( y = -\\dfrac{2}{3}x + 4 \\)"
        }
    },
    {
        id: 'd2-056',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 56',
        difficulty: 'Standard',
        questionText: 'Find the equation of the normal to \\( y = x^2 + 2x - 3 \\) at the point \\( (1, 0) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 2',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient of tangent at \\( (1,0) \\).',
                    workingLatex: '2(1) + 2 = 4',
                    explanation: 'Evaluate the derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient of normal.',
                    workingLatex: 'm_{\\text{normal}} = -\\dfrac{1}{4}',
                    explanation: 'Perpendicular: \\( m_1 m_2 = -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Normal equation.',
                    workingLatex: 'y - 0 = -\\tfrac{1}{4}(x - 1) \\;\\Rightarrow\\; y = -\\tfrac{1}{4}x + \\tfrac{1}{4}',
                    explanation: 'Point-slope, then rearrange.'
                }
            ],
            finalAnswer: "\\( y = -\\dfrac{1}{4}x + \\dfrac{1}{4} \\)"
        }
    },
    {
        id: 'd2-057',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 57',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = \\sqrt{x} \\). Find the equation of the tangent to \\( C \\) at the point where \\( x = 9 \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'tangent', 'root', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = \\sqrt{9} = 3 \\;\\Rightarrow\\; (9, 3)',
                    explanation: 'Substitute \\( x = 9 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: 'y = x^{1/2} \\;\\Rightarrow\\; \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\tfrac{1}{2}x^{-1/2} = \\dfrac{1}{2\\sqrt{x}}',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Gradient at \\( x = 9 \\).',
                    workingLatex: '\\dfrac{1}{2 \\cdot 3} = \\tfrac{1}{6}',
                    explanation: 'Evaluate.'
                },
                {
                    stepNumber: 4,
                    description: 'Tangent equation.',
                    workingLatex: 'y - 3 = \\tfrac{1}{6}(x - 9) \\;\\Rightarrow\\; y = \\tfrac{1}{6}x + \\tfrac{3}{2}',
                    explanation: 'Point-slope, then rearrange.'
                }
            ],
            finalAnswer: "\\( y = \\dfrac{1}{6}x + \\dfrac{3}{2} \\)"
        }
    },
    {
        id: 'd2-058',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 58',
        difficulty: 'Standard',
        questionText: 'Find the equation of the normal to \\( y = 2x^3 - 3x^2 + 1 \\) at the point where \\( x = 1 \\). Give your answer in the form \\( ax + by + c = 0 \\) with integer coefficients.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'normal', 'cubic', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = 2 - 3 + 1 = 0 \\;\\Rightarrow\\; (1, 0)',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 6x',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Tangent gradient at \\( x = 1 \\).',
                    workingLatex: '6 - 6 = 0',
                    explanation: 'The tangent is horizontal.'
                },
                {
                    stepNumber: 4,
                    description: 'Normal is vertical.',
                    workingLatex: 'x = 1 \\;\\Leftrightarrow\\; x - 1 = 0',
                    explanation: 'A line perpendicular to a horizontal tangent is vertical.'
                }
            ],
            finalAnswer: "\\( x - 1 = 0 \\)"
        }
    },

    // TYPE L (59–63): Stationary points and gradient conditions
    {
        id: 'd2-059',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 59',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the stationary point of \\( y = x^2 - 8x + 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary point', 'quadratic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 8',
                    explanation: 'Apply the power rule to each term. The constant 5 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set gradient to zero.',
                    workingLatex: '2x - 8 = 0',
                    explanation: 'At a stationary point the gradient is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x = 8 \\;\\Rightarrow\\; x = 4',
                    explanation: 'Add 8 to both sides and divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = (4)^2 - 8(4) + 5 = 16 - 32 + 5 = -11',
                    explanation: 'Substitute \\( x = 4 \\) into the original equation to find the \\( y \\)-coordinate.'
                }
            ],
            finalAnswer: "Stationary point at \\( (4, -11) \\)."
        }
    },
    {
        id: 'd2-060',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 60',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the stationary points of \\( f(x) = x^3 - 3x^2 - 9x + 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: "f'(x) = 3x^2 - 6x - 9",
                    explanation: 'Apply the power rule to each term. The constant 1 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: "Set \\( f'(x) = 0 \\).",
                    workingLatex: '3x^2 - 6x - 9 = 0',
                    explanation: 'At a stationary point the gradient is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify and factorise.',
                    workingLatex: 'x^2 - 2x - 3 = 0 \\;\\Rightarrow\\; (x-3)(x+1) = 0',
                    explanation: 'Divide every term by 3, then factorise the quadratic.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 3 \\quad \\text{or} \\quad x = -1',
                    explanation: 'Set each factor equal to zero.'
                },
                {
                    stepNumber: 5,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: 'x = 3: \\; f(3) = 27 - 27 - 27 + 1 = -26 \\\\ x = -1: \\; f(-1) = -1 - 3 + 9 + 1 = 6',
                    explanation: 'Substitute each \\( x \\)-value back into \\( f(x) \\) to find the \\( y \\)-coordinates.'
                }
            ],
            finalAnswer: "Stationary points at \\( (3, -26) \\) and \\( (-1, 6) \\)."
        }
    },
    {
        id: 'd2-061',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 61',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = 2x^3 + 3x^2 - 12x + 5 \\) has two stationary points. Find their \\( x \\)-coordinates.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 + 6x - 12',
                    explanation: 'Apply the power rule to each term. The constant 5 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set gradient to zero.',
                    workingLatex: '6x^2 + 6x - 12 = 0',
                    explanation: 'At a stationary point the gradient is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify by dividing by 6.',
                    workingLatex: 'x^2 + x - 2 = 0',
                    explanation: 'Divide every term by 6 to make factorising easier.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '(x + 2)(x - 1) = 0 \\;\\Rightarrow\\; x = -2 \\text{ or } x = 1',
                    explanation: 'Set each factor equal to zero to find the two \\( x \\)-coordinates.'
                }
            ],
            finalAnswer: "\\( x = -2 \\) and \\( x = 1 \\)."
        }
    },
    {
        id: 'd2-062',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 62',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = 4x^3 - 12x + 7 \\) has a tangent parallel to the \\( x \\)-axis. Find the \\( y \\)-coordinates of the points where this occurs.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'horizontal tangent'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^2 - 12',
                    explanation: 'Apply the power rule to each term. The constant 7 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set gradient to zero.',
                    workingLatex: '12x^2 - 12 = 0',
                    explanation: 'A tangent parallel to the \\( x \\)-axis has gradient 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '12x^2 = 12 \\;\\Rightarrow\\; x^2 = 1 \\;\\Rightarrow\\; x = \\pm 1',
                    explanation: 'Add 12 to both sides, divide by 12, then take the square root.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) when \\( x = 1 \\).',
                    workingLatex: 'y = 4(1)^3 - 12(1) + 7 = 4 - 12 + 7 = -1',
                    explanation: 'Substitute \\( x = 1 \\) into the original equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\) when \\( x = -1 \\).',
                    workingLatex: 'y = 4(-1)^3 - 12(-1) + 7 = -4 + 12 + 7 = 15',
                    explanation: 'Substitute \\( x = -1 \\) into the original equation.'
                }
            ],
            finalAnswer: "\\( y = -1 \\) and \\( y = 15 \\)."
        }
    },
    {
        id: 'd2-063',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 63',
        difficulty: 'Standard',
        questionText: 'Find the values of \\( x \\) for which the curve \\( y = x^3 - 3x^2 + 4 \\) has gradient \\( 9 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['differentiation', 'gradient equals value', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x',
                    explanation: 'Apply the power rule to each term. The constant 4 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to 9.',
                    workingLatex: '3x^2 - 6x = 9',
                    explanation: 'The gradient is given as 9, so set the derivative equal to 9.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange to standard form.',
                    workingLatex: '3x^2 - 6x - 9 = 0 \\;\\Rightarrow\\; x^2 - 2x - 3 = 0',
                    explanation: 'Subtract 9 from both sides, then divide every term by 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\;\\Rightarrow\\; x = 3 \\text{ or } x = -1',
                    explanation: 'Set each factor equal to zero to obtain the two solutions.'
                }
            ],
            finalAnswer: "\\( x = 3 \\) or \\( x = -1 \\)."
        }
    },

    // TYPE M (64–67): Rate of change and modelling
    {
        id: 'd2-064',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 64',
        difficulty: 'Standard',
        questionText: 'The volume \\( V \\) cm\\( ^3 \\) of a cube of side \\( x \\) cm is \\( V = x^3 \\). Find \\( \\dfrac{\\mathrm{d}V}{\\mathrm{d}x} \\) and evaluate it when \\( x = 5 \\). Interpret your answer.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'rate of change', 'interpretation', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}V}{\\mathrm{d}x} = 3x^2',
                    explanation: 'Apply the power rule: bring down the index 3 and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 5 \\).',
                    workingLatex: '3(5)^2 = 3 \\times 25 = 75',
                    explanation: 'Square 5 to get 25, then multiply by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'State the units.',
                    workingLatex: '\\dfrac{\\mathrm{d}V}{\\mathrm{d}x}\\bigg|_{x=5} = 75 \\text{ cm}^3 / \\text{cm}',
                    explanation: 'The derivative has units of cm cubed per cm.'
                },
                {
                    stepNumber: 4,
                    description: 'Interpret.',
                    workingLatex: '\\text{Rate of change of volume w.r.t. side length is } 75',
                    explanation: 'When the side is 5 cm, the volume is increasing at 75 cm cubed per unit increase in side length.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}V}{\\mathrm{d}x} = 3x^2 \\); at \\( x = 5 \\) it equals \\( 75 \\) cm³ per cm."
        }
    },
    {
        id: 'd2-065',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 65',
        difficulty: 'Standard',
        questionText: 'The displacement \\( s \\) metres of a particle at time \\( t \\) seconds is \\( s = t^3 - 6t^2 + 9t \\). Find the velocity when \\( t = 2 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'rate of change', 'velocity', 'mechanics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the velocity formula.',
                    workingLatex: 'v = \\dfrac{\\mathrm{d}s}{\\mathrm{d}t}',
                    explanation: 'Velocity is the rate of change of displacement with respect to time.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: 'v = 3t^2 - 12t + 9',
                    explanation: 'Apply the power rule to each term of \\( s = t^3 - 6t^2 + 9t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( t = 2 \\).',
                    workingLatex: 'v = 3(2)^2 - 12(2) + 9 = 3(4) - 24 + 9',
                    explanation: 'Replace \\( t \\) with 2 and evaluate each term.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify.',
                    workingLatex: '= 12 - 24 + 9 = -3',
                    explanation: 'The negative sign indicates the particle is moving in the negative direction.'
                }
            ],
            finalAnswer: "Velocity at \\( t = 2 \\) is \\( -3 \\) m/s."
        }
    },
    {
        id: 'd2-066',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 66',
        difficulty: 'Standard',
        questionText: 'The cost \\( C \\) (in £) of producing \\( x \\) widgets is \\( C = 200 + 5x + 0.01x^2 \\). Find the marginal cost \\( \\dfrac{\\mathrm{d}C}{\\mathrm{d}x} \\) when \\( x = 100 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'rate of change', 'marginal cost', 'modelling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\dfrac{\\mathrm{d}C}{\\mathrm{d}x} = 0 + 5 + 0.02x',
                    explanation: 'The constant 200 differentiates to 0, \\( 5x \\) gives 5, and \\( 0.01x^2 \\) gives \\( 0.02x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the derivative.',
                    workingLatex: '\\dfrac{\\mathrm{d}C}{\\mathrm{d}x} = 5 + 0.02x',
                    explanation: 'Combine to write the marginal cost function.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 100 \\).',
                    workingLatex: '5 + 0.02(100) = 5 + 2 = 7',
                    explanation: 'The marginal cost when producing 100 widgets is 7 pounds per additional widget.'
                }
            ],
            finalAnswer: "Marginal cost is £7 per widget."
        }
    },
    {
        id: 'd2-067',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 67',
        difficulty: 'Standard',
        questionText: 'A spherical balloon has volume \\( V = \\dfrac{4}{3}\\pi r^3 \\) cm\\( ^3 \\), where \\( r \\) is its radius in cm. Find \\( \\dfrac{\\mathrm{d}V}{\\mathrm{d}r} \\) and evaluate it when \\( r = 10 \\).',
        marks: 3,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'rate of change', 'sphere', 'modelling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate with respect to \\( r \\).',
                    workingLatex: '\\dfrac{\\mathrm{d}V}{\\mathrm{d}r} = \\dfrac{4}{3}\\pi \\cdot 3r^2',
                    explanation: 'Apply the power rule: multiply by the index 3 and reduce the power by 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '= 4\\pi r^2',
                    explanation: 'The 3 in the numerator cancels with the \\( \\frac{1}{3} \\) coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( r = 10 \\).',
                    workingLatex: '4\\pi (10)^2 = 4\\pi \\times 100 = 400\\pi',
                    explanation: 'Square 10 to get 100, then multiply by \\( 4\\pi \\).'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}V}{\\mathrm{d}r} = 4\\pi r^2 \\); at \\( r = 10 \\) it equals \\( 400\\pi \\) cm³ per cm."
        }
    },

    // TYPE N (68–70): Challenge exam-style
    {
        id: 'd2-068',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 68',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 6x^2 + 11x - 4 \\).\n\na) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\nb) The tangent at the point \\( P \\) on \\( C \\) is parallel to the line \\( y = 2x + 1 \\). Find the \\( x \\)-coordinates of the possible positions of \\( P \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'parallel tangent', 'cubic', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 11',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Parallel to \\( y = 2x + 1 \\) means gradient is 2.',
                    workingLatex: '3x^2 - 12x + 11 = 2',
                    explanation: 'Set derivative equal to the target gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange.',
                    workingLatex: '3x^2 - 12x + 9 = 0 \\;\\Rightarrow\\; x^2 - 4x + 3 = 0',
                    explanation: 'Divide by 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '(x - 1)(x - 3) = 0 \\;\\Rightarrow\\; x = 1 \\text{ or } x = 3',
                    explanation: 'Two possible positions.'
                }
            ],
            finalAnswer: "(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 11 \\) \nb) \\( x = 1 \\) or \\( x = 3 \\)."
        }
    },
    {
        id: 'd2-069',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 69',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = 2\\sqrt{x} + \\dfrac{8}{\\sqrt{x}} \\) for \\( x > 0 \\).\n\na) Show that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{x - 4}{x\\sqrt{x}} \\).\nb) Find the coordinates of the stationary point of \\( C \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'show that', 'stationary point', 'root', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write with fractional indices.',
                    workingLatex: 'y = 2x^{1/2} + 8x^{-1/2}',
                    explanation: 'Prepare each term for the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = x^{-1/2} - 4x^{-3/2}',
                    explanation: 'Multiply each term by its index and reduce by 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor out \\( x^{-3/2} \\).',
                    workingLatex: '= x^{-3/2}(x - 4) = \\dfrac{x - 4}{x\\sqrt{x}} \\checkmark',
                    explanation: 'Matches the required form.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Stationary when numerator is zero.',
                    workingLatex: 'x - 4 = 0 \\;\\Rightarrow\\; x = 4',
                    explanation: 'Denominator non-zero for \\( x > 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2\\sqrt{4} + \\dfrac{8}{\\sqrt{4}} = 4 + 4 = 8',
                    explanation: 'Substitute back.'
                }
            ],
            finalAnswer: "(a) Shown. \nb) Stationary point at \\( (4, 8) \\)."
        }
    },
    {
        id: 'd2-070',
        topicRef: 'd2',
        topicTitle: 'Differentiating y = f(x) 70',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 3x^2 - 24x + 1 \\).\n\na) Find the coordinates of the two stationary points of \\( C \\).\nb) Find the equation of the tangent to \\( C \\) at the point where \\( x = 0 \\), giving your answer in the form \\( y = mx + c \\).\nc) Determine the values of \\( x \\) for which \\( C \\) has gradient greater than 0.',
        marks: 9,
        examStyle: true,
        yearCreated: 2026,
        tags: ['differentiation', 'stationary points', 'tangent', 'increasing', 'challenge', 'exam-style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 24',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve gradient = 0.',
                    workingLatex: '3(x^2 - 2x - 8) = 0 \\;\\Rightarrow\\; (x-4)(x+2) = 0',
                    explanation: 'Factor out 3, then factorise the quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Compute \\( y \\) values.',
                    workingLatex: 'x = 4: \\; 64 - 48 - 96 + 1 = -79 \\\\ x = -2: \\; -8 - 12 + 48 + 1 = 29',
                    explanation: 'Substitute into the original equation.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Tangent at \\( x = 0 \\).',
                    workingLatex: 'y(0) = 1, \\quad \\dfrac{\\mathrm{d}y}{\\mathrm{d}x}(0) = -24',
                    explanation: 'Evaluate the curve and gradient at 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Tangent equation.',
                    workingLatex: 'y - 1 = -24(x - 0) \\;\\Rightarrow\\; y = -24x + 1',
                    explanation: 'Point-slope form.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Curve increasing where derivative > 0.',
                    workingLatex: '(x-4)(x+2) > 0 \\;\\Rightarrow\\; x < -2 \\text{ or } x > 4',
                    explanation: 'Quadratic positive outside its roots.'
                }
            ],
            finalAnswer: "(a) \\( (-2, 29) \\) and \\( (4, -79) \\) \nb) \\( y = -24x + 1 \\) \nc) \\( x < -2 \\) or \\( x > 4 \\)."
        }
    }
];


