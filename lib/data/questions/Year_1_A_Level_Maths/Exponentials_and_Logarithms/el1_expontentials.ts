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


    // ── TYPE A: Properties and key features of y = a^x ──────────────────────
    {
        id: 'el1-001',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'State two key features that all graphs of the form \\( y = a^x \\) (where \\( a > 1 \\)) have in common.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All exponential graphs pass through the point \\( (0, 1) \\).',
                    workingLatex: 'a^0 = 1 \\text{ for any } a > 0',
                    explanation: 'Any positive number raised to the power zero equals 1, so substituting \\( x = 0 \\) into \\( y = a^x \\) always gives \\( y = 1 \\). Every graph of this form shares the \\( y \\)-intercept \\( (0, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The graph has a horizontal asymptote at \\( y = 0 \\).',
                    workingLatex: '\\text{As } x \\to -\\infty,\\quad y \\to 0',
                    explanation: 'As \\( x \\) becomes very large and negative, \\( a^x \\) becomes very small but stays positive. The curve approaches the \\( x \\)-axis but never touches or crosses it.'
                }
            ],
            finalAnswer: '(1) All pass through \\( (0, 1) \\). (2) The \\( x \\)-axis (\\( y = 0 \\)) is an asymptote.'
        }
    },


    {
        id: 'el1-002',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Describe the difference in shape between the graph of \\( y = 4^x \\) and the graph of \\( y = 2^x \\) for \\( x > 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Both graphs are increasing and pass through \\( (0, 1) \\).',
                    workingLatex: '4^0 = 1 \\quad \\text{and} \\quad 2^0 = 1',
                    explanation: 'Since both bases are greater than 1, both graphs are increasing. They share the same \\( y \\)-intercept at \\( (0, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since \\( 4 > 2 \\), the graph of \\( y = 4^x \\) grows more steeply (faster) than \\( y = 2^x \\) for \\( x > 0 \\).',
                    workingLatex: '4^x > 2^x \\text{ for all } x > 0',
                    explanation: 'A larger base produces a steeper curve for positive \\( x \\). The gap between the two graphs widens rapidly as \\( x \\) increases.'
                },
                {
                    stepNumber: 3,
                    description: 'Compare specific values to illustrate.',
                    workingLatex: 'x = 2{:}\\quad 4^2 = 16,\\quad 2^2 = 4',
                    explanation: 'At \\( x = 2 \\), \\( y = 4^x \\) is already four times larger than \\( y = 2^x \\). This concrete example shows how quickly the steeper curve pulls away.'
                }
            ],
            finalAnswer: 'Both pass through \\( (0,1) \\) and are increasing, but \\( y = 4^x \\) is steeper (grows faster) than \\( y = 2^x \\) for \\( x > 0 \\).'
        }
    },


    {
        id: 'el1-003',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Describe the graph of \\( y = \\left(\\dfrac{1}{3}\\right)^x \\). In particular, state its \\( y \\)-intercept, whether it is increasing or decreasing, and the equation of its asymptote.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-intercept by setting \\( x = 0 \\).',
                    workingLatex: '\\left(\\frac{1}{3}\\right)^0 = 1',
                    explanation: 'Any number raised to the power zero equals 1, so the graph crosses the \\( y \\)-axis at \\( (0, 1) \\). This is true for all exponential graphs \\( y = a^x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Since the base \\( \\frac{1}{3} < 1 \\), the function is decreasing.',
                    workingLatex: '\\text{As } x \\text{ increases, } \\left(\\frac{1}{3}\\right)^x \\text{ decreases towards } 0',
                    explanation: 'When the base is between 0 and 1, raising it to a larger power produces a smaller result. For example, \\( (1/3)^2 = 1/9 \\) is smaller than \\( (1/3)^1 = 1/3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'The asymptote is the \\( x \\)-axis.',
                    workingLatex: '\\text{As } x \\to \\infty,\\quad y \\to 0',
                    explanation: 'As \\( x \\) gets larger, the outputs get closer to zero but remain positive. The line \\( y = 0 \\) is a horizontal asymptote that the curve never touches.'
                }
            ],
            finalAnswer: '\\( y \\)-intercept \\( (0, 1) \\); decreasing; asymptote \\( y = 0 \\).'
        }
    },


    {
        id: 'el1-004',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Explain why \\( y = \\left(\\dfrac{1}{5}\\right)^x \\) can also be written as \\( y = 5^{-x} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the fraction as a power of 5.',
                    workingLatex: '\\frac{1}{5} = 5^{-1}',
                    explanation: 'The reciprocal of any number \\( a \\) can be written as \\( a^{-1} \\). This is the key index law: \\( a^{-n} = \\frac{1}{a^n} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power-of-a-power rule.',
                    workingLatex: '\\left(\\frac{1}{5}\\right)^x = \\left(5^{-1}\\right)^x = 5^{-1 \\times x} = 5^{-x}',
                    explanation: 'Using the index law \\( (a^m)^n = a^{mn} \\), we multiply the exponents \\( -1 \\) and \\( x \\) to get \\( -x \\). This confirms the two expressions are equivalent.'
                }
            ],
            finalAnswer: '\\( \\left(\\frac{1}{5}\\right)^x = 5^{-x} \\) because raising the reciprocal to the power \\( x \\) is the same as raising 5 to the power \\( -x \\).'
        }
    },


    {
        id: 'el1-005',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = 3^x \\) onto \\( y = 3^{-x} \\). What does this tell you about the relationship between the graphs of \\( y = 3^x \\) and \\( y = \\left(\\frac{1}{3}\\right)^x \\)?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Replacing \\( x \\) with \\( -x \\) reflects the graph in the \\( y \\)-axis.',
                    workingLatex: 'y = 3^{-x} \\text{ is a reflection of } y = 3^x \\text{ in the } y\\text{-axis}',
                    explanation: 'Replacing \\( x \\) with \\( -x \\) in any function reflects its graph in the \\( y \\)-axis. Every point \\( (a, b) \\) on \\( y = 3^x \\) maps to \\( (-a, b) \\) on \\( y = 3^{-x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite \\( 3^{-x} \\) as \\( \\left(\\frac{1}{3}\\right)^x \\).',
                    workingLatex: '3^{-x} = \\frac{1}{3^x} = \\left(\\frac{1}{3}\\right)^x',
                    explanation: 'Using the negative exponent rule, \\( 3^{-x} = (3^{-1})^x = (1/3)^x \\). This shows the two expressions represent the same function.'
                },
                {
                    stepNumber: 3,
                    description: 'State the relationship between the two graphs.',
                    workingLatex: 'y = 3^x \\text{ and } y = \\left(\\frac{1}{3}\\right)^x \\text{ are reflections in the } y\\text{-axis}',
                    explanation: 'Since \\( y = (1/3)^x \\) is the same as \\( y = 3^{-x} \\), and \\( y = 3^{-x} \\) is a reflection of \\( y = 3^x \\) in the \\( y \\)-axis, the two original graphs are mirror images of each other about the \\( y \\)-axis.'
                }
            ],
            finalAnswer: 'Reflection in the \\( y \\)-axis. The graphs of \\( y = 3^x \\) and \\( y = \\left(\\frac{1}{3}\\right)^x \\) are reflections of each other in the \\( y \\)-axis.'
        }
    },


    // ── TYPE B: Evaluating and sketching y = a^x ────────────────────────────
    {
        id: 'el1-006',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'For the function \\( f(x) = 2^x \\), evaluate \\( f(0) \\), \\( f(3) \\), \\( f(-2) \\), and \\( f\\!\\left(\\frac{1}{2}\\right) \\). Give exact answers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate \\( f(0) \\).',
                    workingLatex: 'f(0) = 2^0 = 1',
                    explanation: 'Any base to the power zero is 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( f(3) \\).',
                    workingLatex: 'f(3) = 2^3 = 8',
                    explanation: '\\( 2 \\times 2 \\times 2 = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( f(-2) \\).',
                    workingLatex: 'f(-2) = 2^{-2} = \\frac{1}{4}',
                    explanation: '\\( 2^{-2} = \\frac{1}{2^2} = \\frac{1}{4} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( f\\!\\left(\\frac{1}{2}\\right) \\).',
                    workingLatex: 'f\\!\\left(\\frac{1}{2}\\right) = 2^{\\frac{1}{2}} = \\sqrt{2}',
                    explanation: 'A power of \\( \\frac{1}{2} \\) means square root.'
                }
            ],
            finalAnswer: '\\( f(0) = 1,\\ f(3) = 8,\\ f(-2) = \\frac{1}{4},\\ f\\!\\left(\\frac{1}{2}\\right) = \\sqrt{2} \\)'
        }
    },


    {
        id: 'el1-007',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch the graphs of \\( y = 5^x \\) and \\( y = 5^{-x} \\) for \\( -3 \\leq x \\leq 3 \\). Label the \\( y \\)-intercept and asymptote of each graph.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Both graphs pass through \\( (0, 1) \\).',
                    workingLatex: '5^0 = 1 \\quad \\text{and} \\quad 5^{-0} = 1',
                    explanation: 'Setting \\( x = 0 \\) in both functions gives \\( y = 1 \\). This is the common \\( y \\)-intercept and the point where the two curves cross.'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = 5^x \\): increasing curve.',
                    workingLatex: '\\text{Asymptote: } y = 0 \\text{ (left side)}',
                    explanation: 'For \\( x > 0 \\) the curve rises steeply; for \\( x < 0 \\) it approaches the \\( x \\)-axis from above. Label the asymptote \\( y = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = 5^{-x} \\): decreasing curve.',
                    workingLatex: '\\text{Asymptote: } y = 0 \\text{ (right side)}',
                    explanation: 'This curve is the mirror image of \\( y = 5^x \\) reflected in the \\( y \\)-axis. It falls steeply for \\( x > 0 \\) and approaches \\( y = 0 \\) from above.'
                },
                {
                    stepNumber: 4,
                    description: 'Label key features on the sketch.',
                    workingLatex: '\\text{Label: } (0,1),\\quad y = 0,\\quad y = 5^x \\text{ and } y = 5^{-x}',
                    explanation: 'Mark the shared \\( y \\)-intercept \\( (0, 1) \\), the horizontal asymptote \\( y = 0 \\) for both curves, and label each curve clearly. The two graphs form a symmetric pair about the \\( y \\)-axis.'
                }
            ],
            finalAnswer: 'Both curves pass through \\( (0,1) \\) with asymptote \\( y=0 \\). \\( y=5^x \\) increases; \\( y=5^{-x} \\) decreases (its mirror image).'
        }
    },


    {
        id: 'el1-008',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = 1.8^x \\). \n\n (a) State the coordinates of the point where the graph crosses the \\( y \\)-axis. \n\n (b) Is the graph increasing or decreasing? \n\n (c) Sketch the graph.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( x = 0 \\).',
                    workingLatex: 'f(0) = 1.8^0 = 1 \\Rightarrow (0,\\ 1)',
                    explanation: 'All exponential graphs of the form \\( a^x \\) cross the \\( y \\)-axis at 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Since the base \\( 1.8 > 1 \\), the graph is increasing.',
                    workingLatex: 'a = 1.8 > 1 \\Rightarrow \\text{increasing}',
                    explanation: 'When the base is greater than 1, multiplying by that base repeatedly makes the value larger. So the function grows as \\( x \\) increases.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Sketch a smooth upward curve through \\( (0,1) \\), rising to the right and approaching \\( y=0 \\) to the left.',
                    workingLatex: '\\text{Asymptote: } y = 0; \\quad \\text{passes through } (-1,\\ \\tfrac{1}{1.8}) \\text{ and } (1,\\ 1.8)',
                    explanation: 'Draw a smooth curve through \\( (0, 1) \\) that rises to the right and flattens towards \\( y = 0 \\) on the left. Since \\( 1.8 \\) is not much greater than 1, the curve rises more gently than, say, \\( y = 5^x \\).'
                }
            ],
            finalAnswer: '(a) \\( (0, 1) \\). (b) Increasing. (c) Smooth upward curve with asymptote \\( y = 0 \\).'
        }
    },


    // ── TYPE D: Matching equations to graphs ────────────────────────────────
    {
        id: 'el1-009',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Three graphs are shown. Match each of the following functions to the correct graph: \\( y = e^x \\), \\( y = 2e^x \\), \\( y = e^{2x} \\). Justify your answers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-intercept of each function.',
                    workingLatex: 'y = 2e^0 = 2; \\quad y = e^0 = 1; \\quad y = e^{2(0)} = 1',
                    explanation: 'Setting \\( x = 0 \\) shows that \\( y = 2e^x \\) has \\( y \\)-intercept 2, while the other two both have \\( y \\)-intercept 1. The graph with \\( y \\)-intercept 2 must be \\( y = 2e^x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Compare growth rates of the remaining two.',
                    workingLatex: 'e^{2x} = (e^x)^2 \\text{ so it grows faster for } x > 0',
                    explanation: 'Both \\( y = e^x \\) and \\( y = e^{2x} \\) pass through \\( (0,1) \\), but \\( e^{2x} \\) squares the value of \\( e^x \\), making it much steeper. The steeper graph is \\( y = e^{2x} \\) and the shallower one is \\( y = e^x \\).'
                }
            ],
            finalAnswer: 'Graph with \\( y \\)-intercept 2 → \\( y = 2e^x \\). Steepest remaining graph → \\( y = e^{2x} \\). Remaining → \\( y = e^x \\).'
        }
    },


    {
        id: 'el1-010',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) onto \\( y = e^x + 3 \\). State the \\( y \\)-intercept and asymptote of \\( y = e^x + 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = e^x \\to y = e^x + 3 \\quad \\text{(translation } +3 \\text{ in } y\\text{-direction)}',
                    explanation: 'Adding 3 outside the function shifts every point on the graph up by 3 units. This is a vertical translation of \\( +3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0: \\quad y = e^0 + 3 = 1 + 3 = 4',
                    explanation: 'Substituting \\( x = 0 \\) gives the \\( y \\)-intercept \\( (0, 4) \\). The original intercept \\( (0,1) \\) has moved up by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the asymptote.',
                    workingLatex: '\\text{As } x \\to -\\infty, \\quad e^x \\to 0 \\Rightarrow y \\to 3',
                    explanation: 'The original asymptote \\( y = 0 \\) is shifted up by 3, giving the new asymptote \\( y = 3 \\). The curve approaches but never reaches this value.'
                }
            ],
            finalAnswer: 'Vertical translation \\( +3 \\). \\( y \\)-intercept \\( (0, 4) \\); asymptote \\( y = 3 \\).'
        }
    },


    {
        id: 'el1-011',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) onto \\( y = e^{x-2} \\). State the \\( y \\)-intercept and the asymptote of \\( y = e^{x-2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the transformation.',
                    workingLatex: 'y = e^x \\to y = e^{x-2} \\quad \\text{(translation } +2 \\text{ in } x\\text{-direction)}',
                    explanation: 'Replacing \\( x \\) with \\( x - 2 \\) inside the exponent shifts the entire graph 2 units to the right. This is a horizontal translation.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\( y \\)-intercept.',
                    workingLatex: 'x = 0: \\quad y = e^{0-2} = e^{-2} = \\frac{1}{e^2}',
                    explanation: 'Substituting \\( x = 0 \\) gives the \\( y \\)-intercept at \\( \\left(0, \\frac{1}{e^2}\\right) \\). This is much smaller than the original intercept of 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the asymptote.',
                    workingLatex: '\\text{As } x \\to -\\infty, \\quad y \\to 0',
                    explanation: 'A horizontal translation does not move the horizontal asymptote. The asymptote remains \\( y = 0 \\) since the exponential still tends to zero for large negative \\( x \\).'
                }
            ],
            finalAnswer: 'Horizontal translation \\( +2 \\). \\( y \\)-intercept \\( \\left(0, \\dfrac{1}{e^2}\\right) \\); asymptote \\( y = 0 \\).'
        }
    },


    {
        id: 'el1-012',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'On the same axes, sketch \\( y = e^x \\), \\( y = e^x - 1 \\), and \\( y = -e^x \\). Label all \\( y \\)-intercepts and asymptotes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Sketch \\( y = e^x \\).',
                    workingLatex: 'y\\text{-intercept: } (0,1); \\quad \\text{asymptote: } y = 0',
                    explanation: 'This is the standard exponential curve. It is always increasing, passes through \\( (0,1) \\), and approaches the \\( x \\)-axis from above as \\( x \\to -\\infty \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Sketch \\( y = e^x - 1 \\).',
                    workingLatex: 'y\\text{-intercept: } e^0 - 1 = 0 \\Rightarrow (0,0); \\quad \\text{asymptote: } y = -1',
                    explanation: 'This is a vertical translation of \\( y = e^x \\) down by 1 unit. The \\( y \\)-intercept moves from \\( (0,1) \\) to \\( (0,0) \\), so the curve passes through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Sketch \\( y = -e^x \\).',
                    workingLatex: 'y\\text{-intercept: } -e^0 = -1 \\Rightarrow (0,-1); \\quad \\text{asymptote: } y = 0',
                    explanation: 'This is a reflection of \\( y = e^x \\) in the \\( x \\)-axis. The curve lies entirely below the \\( x \\)-axis, is always decreasing, and approaches \\( y = 0 \\) from below as \\( x \\to -\\infty \\).'
                }
            ],
            finalAnswer: '\\( y=e^x \\): \\( (0,1) \\), asymptote \\( y=0 \\). \\( y=e^x-1 \\): \\( (0,0) \\), asymptote \\( y=-1 \\). \\( y=-e^x \\): \\( (0,-1) \\), asymptote \\( y=0 \\).'
        }
    },


    // ── TYPE F: Sketching y = Ae^kx with transformations ────────────────────
    {
        id: 'el1-013',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'Sketch the graph of \\( y = 2e^{-x} \\), labelling the \\( y \\)-intercept and asymptote. Describe the two transformations from \\( y = e^x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Transformation 1: reflection in the \\( y \\)-axis.',
                    workingLatex: 'y = e^x \\to y = e^{-x} \\quad \\text{(reflection in } y\\text{-axis)}',
                    explanation: 'Replacing \\( x \\) with \\( -x \\) reflects the graph in the \\( y \\)-axis. The result is a decreasing exponential that falls from left to right.'
                },
                {
                    stepNumber: 2,
                    description: 'Transformation 2: vertical stretch, scale factor 2.',
                    workingLatex: 'y = e^{-x} \\to y = 2e^{-x} \\quad \\text{(vertical stretch, scale factor 2)}',
                    explanation: 'Multiplying by 2 doubles all \\( y \\)-values. The shape is preserved but the curve is stretched away from the \\( x \\)-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-intercept and asymptote.',
                    workingLatex: 'y\\text{-intercept: } 2e^0 = 2 \\Rightarrow (0,\\ 2); \\quad \\text{asymptote: } y = 0',
                    explanation: 'At \\( x = 0 \\), \\( y = 2e^0 = 2 \\). As \\( x \\to \\infty \\), \\( e^{-x} \\to 0 \\) so \\( y \\to 0 \\). The asymptote is \\( y = 0 \\).'
                }
            ],
            finalAnswer: '\\( y \\)-intercept \\( (0, 2) \\); asymptote \\( y = 0 \\). Transformations: reflection in \\( y \\)-axis, then vertical stretch factor 2.'
        }
    },


    {
        id: 'el1-014',
        topicRef: 'el1',
        topicTitle: 'Exponentials',
        difficulty: 'Foundation',
        questionText: 'For the graph of \\( y = 5e^{2x} - 3 \\): \n\n (a) State the asymptote. \n\n (b) Find the \\( y \\)-intercept. \n\n (c) State the range of the function.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find the asymptote.',
                    workingLatex: '\\text{As } x \\to -\\infty, \\quad 5e^{2x} \\to 0 \\Rightarrow y \\to -3',
                    explanation: 'The term \\( 5e^{2x} \\) tends to zero as \\( x \\to -\\infty \\), so \\( y \\) approaches \\( -3 \\). The \\( -3 \\) shifts the asymptote from \\( y = 0 \\) to \\( y = -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set \\( x = 0 \\).',
                    workingLatex: 'y = 5e^0 - 3 = 5 \\times 1 - 3 = 2 \\Rightarrow (0,\\ 2)',
                    explanation: 'Substituting \\( x = 0 \\) and using \\( e^0 = 1 \\) gives \\( y = 5 - 3 = 2 \\). The \\( y \\)-intercept is \\( (0, 2) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Determine the range.',
                    workingLatex: '5e^{2x} > 0 \\text{ for all } x \\Rightarrow y = 5e^{2x} - 3 > -3',
                    explanation: 'Since \\( e^{2x} \\) is always positive, \\( 5e^{2x} \\) is always positive, so \\( y \\) is always greater than \\( -3 \\). The range is \\( y > -3 \\), or equivalently \\( (-3, \\infty) \\).'
                }
            ],
            finalAnswer: '(a) \\( y = -3 \\). (b) \\( (0, 2) \\). (c) \\( y > -3 \\).'
        }
    },



    // ─── Q36–70: Additional Exponentials Questions ──────────────────────

    {
        id: 'el1-015', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 2^5 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate the power.', workingLatex: '2^5 = 32', explanation: '\\( 2^5 \\) means 2 multiplied by itself 5 times: \\( 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32 \\).' }
        ], finalAnswer: '\\( 32 \\)' }
    },


    {
        id: 'el1-016', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( 3^2 \\times 3^4 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the index law for multiplication.', workingLatex: '3^2 \\times 3^4 = 3^{2+4} = 3^6', explanation: 'When multiplying powers with the same base, add the indices: \\( a^m \\times a^n = a^{m+n} \\).' },
            { stepNumber: 2, description: 'Evaluate the result.', workingLatex: '3^6 = 729', explanation: '\\( 3^6 = 3 \\times 3 \\times 3 \\times 3 \\times 3 \\times 3 = 729 \\).' }
        ], finalAnswer: '\\( 3^6 = 729 \\)' }
    },


    {
        id: 'el1-017', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{5^7}{5^3} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the index law for division.', workingLatex: '\\frac{5^7}{5^3} = 5^{7-3} = 5^4', explanation: 'When dividing powers with the same base, subtract the indices: \\( a^m \\div a^n = a^{m-n} \\).' },
            { stepNumber: 2, description: 'Evaluate the result.', workingLatex: '5^4 = 625', explanation: '\\( 5^4 = 5 \\times 5 \\times 5 \\times 5 = 625 \\).' }
        ], finalAnswer: '\\( 5^4 = 625 \\)' }
    },


    {
        id: 'el1-018', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 4^{-2} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the negative index rule.', workingLatex: '4^{-2} = \\frac{1}{4^2}', explanation: 'A negative index means the reciprocal: \\( a^{-n} = \\frac{1}{a^n} \\).' },
            { stepNumber: 2, description: 'Evaluate the denominator.', workingLatex: '\\frac{1}{4^2} = \\frac{1}{16}', explanation: '\\( 4^2 = 16 \\), so the answer is \\( \\frac{1}{16} \\).' }
        ], finalAnswer: '\\( \\frac{1}{16} \\)' }
    },


    {
        id: 'el1-019', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 8^{\\frac{2}{3}} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Interpret the fractional index.', workingLatex: '8^{2/3} = (8^{1/3})^2', explanation: 'A fractional index \\( a^{m/n} \\) means take the \\( n \\)-th root first, then raise to the power \\( m \\). Here, take the cube root of 8, then square.' },
            { stepNumber: 2, description: 'Evaluate step by step.', workingLatex: '(8^{1/3})^2 = 2^2 = 4', explanation: 'The cube root of 8 is 2. Squaring gives \\( 2^2 = 4 \\).' }
        ], finalAnswer: '\\( 4 \\)' }
    },


    {
        id: 'el1-020', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 2^x \\) for \\( -3 \\leq x \\leq 3 \\). State the y-intercept and asymptote.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the \\( y \\)-intercept.', workingLatex: 'x = 0{:}\\quad y = 2^0 = 1 \\Rightarrow (0,\\,1)', explanation: 'Setting \\( x = 0 \\) gives the \\( y \\)-intercept. Since any positive number to the power 0 is 1, the graph passes through \\( (0, 1) \\).' },
            { stepNumber: 2, description: 'Identify the asymptote.', workingLatex: '\\text{As } x \\to -\\infty,\\quad 2^x \\to 0 \\Rightarrow \\text{asymptote: } y = 0', explanation: 'As \\( x \\) becomes very negative, \\( 2^x \\) approaches 0 but never reaches it. The \\( x \\)-axis is a horizontal asymptote.' },
            { stepNumber: 3, description: 'Describe the shape of the curve.', workingLatex: '2^{-3} = \\tfrac{1}{8},\\quad 2^3 = 8', explanation: 'The curve is always positive and increases steeply for positive \\( x \\). Plot key points such as \\( (-3, \\frac{1}{8}) \\) and \\( (3, 8) \\) to guide the sketch.' }
        ], finalAnswer: '\\( y \\)-intercept \\( (0, 1) \\); asymptote \\( y = 0 \\).' }
    },


    {
        id: 'el1-021', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = 3^{-x} \\). Describe the transformation from \\( y = 3^x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite with a negative exponent.', workingLatex: 'y = 3^{-x} = \\left(\\frac{1}{3}\\right)^x', explanation: 'Replacing \\( x \\) with \\( -x \\) in the exponent is equivalent to writing the base as its reciprocal.' },
            { stepNumber: 2, description: 'Describe the transformation.', workingLatex: 'y = 3^{-x} \\text{ is a reflection of } y = 3^x \\text{ in the } y\\text{-axis}', explanation: 'Replacing \\( x \\) by \\( -x \\) reflects a graph in the \\( y \\)-axis. Every point \\( (a, b) \\) on \\( y = 3^x \\) maps to \\( (-a, b) \\) on \\( y = 3^{-x} \\).' },
            { stepNumber: 3, description: 'Key features for the sketch.', workingLatex: 'y\\text{-int: } (0, 1);\\quad \\text{asymptote: } y = 0;\\quad \\text{decreasing}', explanation: 'The curve still passes through \\( (0, 1) \\) and has asymptote \\( y = 0 \\), but it is now a decreasing exponential (decay) rather than increasing.' }
        ], finalAnswer: 'Reflection in the \\( y \\)-axis; exponential decay.' }
    },


    {
        id: 'el1-022', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x = 16 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 16 as a power of 2.', workingLatex: '16 = 2^4', explanation: 'Recognise that 16 is a power of 2, since \\( 2 \\times 2 \\times 2 \\times 2 = 16 \\).' },
            { stepNumber: 2, description: 'Equate exponents and solve.', workingLatex: '2^x = 2^4 \\implies x = 4', explanation: 'Since the bases are equal, the exponents must be equal.' }
        ], finalAnswer: '\\( x = 4 \\)' }
    },


    {
        id: 'el1-023', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = \\frac{1}{27} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write \\( \\frac{1}{27} \\) as a power of 3.', workingLatex: '\\frac{1}{27} = \\frac{1}{3^3} = 3^{-3}', explanation: 'Since \\( 27 = 3^3 \\), the reciprocal is \\( 3^{-3} \\).' },
            { stepNumber: 2, description: 'Equate exponents and solve.', workingLatex: '3^x = 3^{-3} \\implies x = -3', explanation: 'The bases are equal, so equate the exponents to find \\( x \\).' }
        ], finalAnswer: '\\( x = -3 \\)' }
    },


    {
        id: 'el1-024', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^{2x} = 125 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 125 as a power of 5.', workingLatex: '125 = 5^3', explanation: 'Recognise that \\( 5 \\times 5 \\times 5 = 125 \\), so \\( 125 = 5^3 \\).' },
            { stepNumber: 2, description: 'Equate the exponents.', workingLatex: '5^{2x} = 5^3 \\implies 2x = 3', explanation: 'Since both sides have base 5, the exponents must be equal.' },
            { stepNumber: 3, description: 'Solve for \\( x \\).', workingLatex: 'x = \\frac{3}{2}', explanation: 'Divide both sides by 2 to isolate \\( x \\).' }
        ], finalAnswer: '\\( x = \\frac{3}{2} \\)' }
    },


    {
        id: 'el1-025', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'The value of an investment is modelled by \\( V = 1000 \\times 1.05^t \\) where \\( t \\) is years. Find the value after 10 years.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( t = 10 \\) into the model.', workingLatex: 'V = 1000 \\times 1.05^{10}', explanation: 'Replace \\( t \\) with 10 in the given formula.' },
            { stepNumber: 2, description: 'Evaluate using a calculator.', workingLatex: 'V = 1000 \\times 1.6289 = 1628.89', explanation: 'Use a calculator to find \\( 1.05^{10} \\approx 1.6289 \\), then multiply by 1000.' }
        ], finalAnswer: '\\( £1628.89 \\)' }
    },


    {
        id: 'el1-026', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Write \\( e^3 \\) to 3 significant figures.',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate using a calculator', workingLatex: 'e^3 = 20.0855... = 20.1', explanation: 'Use the \\( e^x \\) button on your calculator and round to 3 significant figures.' }
        ], finalAnswer: '\\( 20.1 \\)' }
    },


    {
        id: 'el1-027', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = e^x \\) and \\( y = e^{-x} \\) on the same axes. State their point of intersection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two curves equal', workingLatex: 'e^x = e^{-x}', explanation: 'At the point of intersection the y-values are equal.' },
            { stepNumber: 2, description: 'Multiply both sides by \\( e^x \\)', workingLatex: 'e^{2x} = 1', explanation: 'Multiply both sides by \\( e^x \\) to eliminate the negative exponent.' },
            { stepNumber: 3, description: 'Solve for \\( x \\) and find \\( y \\)', workingLatex: '2x = 0 \\implies x = 0,\\quad y = e^0 = 1', explanation: 'Since \\( e^0 = 1 \\), we have \\( x = 0 \\) and substituting back gives \\( y = 1 \\).' }
        ], finalAnswer: 'Intersection at \\( (0, 1) \\)' }
    },


    {
        id: 'el1-028', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( e^{2x} \\times e^{3x} \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the indices', workingLatex: 'e^{2x} \\times e^{3x} = e^{2x+3x} = e^{5x}', explanation: 'When multiplying terms with the same base, add the exponents: \\( a^m \\times a^n = a^{m+n} \\).' }
        ], finalAnswer: '\\( e^{5x} \\)' }
    },


    {
        id: 'el1-029', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{e^{4x}}{e^x} \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Subtract the indices', workingLatex: '\\frac{e^{4x}}{e^x} = e^{4x-x} = e^{3x}', explanation: 'When dividing terms with the same base, subtract the exponents: \\( a^m \\div a^n = a^{m-n} \\).' }
        ], finalAnswer: '\\( e^{3x} \\)' }
    },


    {
        id: 'el1-030', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'A population of bacteria doubles every 3 hours. Starting with 500 bacteria, find the population after 12 hours.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the number of doublings', workingLatex: '\\frac{12}{3} = 4 \\text{ doublings}', explanation: 'The bacteria double every 3 hours, so in 12 hours there are 4 doubling periods.' },
            { stepNumber: 2, description: 'Write the population formula', workingLatex: 'P = 500 \\times 2^4', explanation: 'Each doubling multiplies the population by 2, so after 4 doublings we multiply by \\( 2^4 \\).' },
            { stepNumber: 3, description: 'Evaluate', workingLatex: 'P = 500 \\times 16 = 8000', explanation: '\\( 2^4 = 16 \\), and \\( 500 \\times 16 = 8000 \\).' }
        ], finalAnswer: '\\( 8000 \\) bacteria' }
    },


    {
        id: 'el1-031', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 4^x = 8 \\). Give your answer as a fraction.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write both sides as powers of 2', workingLatex: '4^x = 8 \\implies (2^2)^x = 2^3', explanation: 'Since \\( 4 = 2^2 \\) and \\( 8 = 2^3 \\), rewrite both sides with base 2.' },
            { stepNumber: 2, description: 'Simplify the left-hand side', workingLatex: '2^{2x} = 2^3', explanation: 'Apply the power rule \\( (a^m)^n = a^{mn} \\) to get \\( 2^{2x} \\).' },
            { stepNumber: 3, description: 'Equate exponents and solve', workingLatex: '2x = 3 \\implies x = \\frac{3}{2}', explanation: 'The bases are equal, so set the exponents equal and divide by 2.' }
        ], finalAnswer: '\\( x = \\frac{3}{2} \\)' }
    },


    {
        id: 'el1-032', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 9^x = 27 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write both sides as powers of 3', workingLatex: '9^x = 27 \\implies (3^2)^x = 3^3', explanation: 'Since \\( 9 = 3^2 \\) and \\( 27 = 3^3 \\), rewrite both sides with base 3.' },
            { stepNumber: 2, description: 'Simplify the left-hand side', workingLatex: '3^{2x} = 3^3', explanation: 'Apply the power rule \\( (a^m)^n = a^{mn} \\) to get \\( 3^{2x} \\).' },
            { stepNumber: 3, description: 'Equate exponents and solve', workingLatex: '2x = 3 \\implies x = \\frac{3}{2}', explanation: 'The bases are equal, so set the exponents equal and divide by 2.' }
        ], finalAnswer: '\\( x = \\frac{3}{2} \\)' }
    },


    {
        id: 'el1-033', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{2x} = 64 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 64 as a power of 2.', workingLatex: '64 = 2^6', explanation: 'Recognise that \\( 2^6 = 64 \\), so the equation becomes \\( 2^{2x} = 2^6 \\).' },
            { stepNumber: 2, description: 'Equate the exponents.', workingLatex: '2x = 6 \\implies x = 3', explanation: 'Since the bases are equal, the exponents must be equal.' }
        ], finalAnswer: '\\( x = 3 \\)' }
    },


    {
        id: 'el1-034', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\dfrac{2^5 \\times 2^3}{2^6} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine the numerator.', workingLatex: '2^5 \\times 2^3 = 2^{5+3} = 2^8', explanation: 'When multiplying powers with the same base, add the exponents.' },
            { stepNumber: 2, description: 'Divide by the denominator.', workingLatex: '\\frac{2^8}{2^6} = 2^{8-6} = 2^2 = 4', explanation: 'When dividing powers with the same base, subtract the exponents.' }
        ], finalAnswer: '\\( 4 \\)' }
    },


    {
        id: 'el1-035', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Describe the transformation that maps \\( y = e^x \\) to \\( y = 2e^x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the transformation', workingLatex: 'y = 2e^x = 2f(x)', explanation: 'Multiplying the whole function by 2 is a vertical stretch with scale factor 2.' },
            { stepNumber: 2, description: 'State the effect on key features', workingLatex: '\\text{y-intercept: } 2e^0 = 2', explanation: 'The y-intercept moves from \\( (0, 1) \\) to \\( (0, 2) \\). The asymptote \\( y = 0 \\) is unchanged.' }
        ], finalAnswer: 'Vertical stretch, scale factor 2' }
    },


    {
        id: 'el1-036', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'A radioactive substance decays so that the mass \\( m \\) grams after \\( t \\) years is \\( m = 200e^{-0.1t} \\). Find the mass after 5 years.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( t = 5 \\) into the model', workingLatex: 'm = 200e^{-0.1 \\times 5} = 200e^{-0.5}', explanation: 'Replace \\( t \\) with 5 in the exponential decay formula.' },
            { stepNumber: 2, description: 'Evaluate the expression', workingLatex: 'm = 200 \\times 0.6065 = 121.3 \\text{ g}', explanation: 'Use a calculator to find \\( e^{-0.5} \\approx 0.6065 \\), then multiply by 200.' }
        ], finalAnswer: '\\( 121.3 \\) g' }
    },


    {
        id: 'el1-037', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Evaluate \\( 27^{\\frac{1}{3}} + 16^{\\frac{1}{4}} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate each', workingLatex: '3 + 2 = 5', explanation: 'Cube root of 27 is 3; fourth root of 16 is 2.' }
        ], finalAnswer: '\\( 5 \\)' }
    },


    {
        id: 'el1-038', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( (2^3)^4 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply indices', workingLatex: '(2^3)^4 = 2^{3 \\times 4} = 2^{12} = 4096', explanation: 'Using the power rule \\( (a^m)^n = a^{mn} \\), multiply the indices 3 and 4.' }
        ], finalAnswer: '\\( 2^{12} = 4096 \\)' }
    },


    {
        id: 'el1-039', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'The graph of \\( y = a \\times b^x \\) passes through \\( (0, 3) \\) and \\( (2, 48) \\). Find \\( a \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute the point \\( (0, 3) \\)', workingLatex: 'a \\times b^0 = 3 \\implies a = 3', explanation: 'Since \\( b^0 = 1 \\) for any base, we immediately find \\( a = 3 \\).' },
            { stepNumber: 2, description: 'Substitute the point \\( (2, 48) \\)', workingLatex: '3b^2 = 48', explanation: 'Replace \\( a \\) with 3 and use the second point to form an equation in \\( b \\).' },
            { stepNumber: 3, description: 'Solve for \\( b \\)', workingLatex: 'b^2 = 16 \\implies b = 4', explanation: 'Divide both sides by 3, then take the positive square root since \\( b \\) must be positive for an exponential.' }
        ], finalAnswer: '\\( a = 3, \\, b = 4 \\)' }
    },


    {
        id: 'el1-040', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{x+1} = 32 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express 32 as a power of 2', workingLatex: '2^{x+1} = 2^5', explanation: 'Recognise that \\( 32 = 2^5 \\) so both sides have the same base.' },
            { stepNumber: 2, description: 'Equate the exponents and solve', workingLatex: 'x + 1 = 5 \\implies x = 4', explanation: 'When the bases are equal, the exponents must be equal. Subtract 1 from both sides.' }
        ], finalAnswer: '\\( x = 4 \\)' }
    },


    {
        id: 'el1-041', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'The temperature \\( T \\) of a cooling object is modelled by \\( T = 20 + 80e^{-0.05t} \\). Find: (a) the initial temperature; (b) the temperature after 20 minutes; (c) the long-term temperature.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 0 \\)', workingLatex: 'T = 20 + 80e^{0} = 20 + 80 = 100^\\circ', explanation: 'When \\( t = 0 \\), the exponential term \\( e^0 = 1 \\), so the initial temperature is \\( 20 + 80 = 100 \\) degrees.' },
            { stepNumber: 2, description: '(b) Substitute \\( t = 20 \\)', workingLatex: 'T = 20 + 80e^{-0.05 \\times 20} = 20 + 80e^{-1}', explanation: 'Replace \\( t \\) with 20 in the model to get \\( e^{-1} \\).' },
            { stepNumber: 3, description: '(b) Evaluate the expression', workingLatex: 'T = 20 + 80 \\times 0.3679 = 20 + 29.4 = 49.4^\\circ', explanation: 'Use a calculator to find \\( e^{-1} \\approx 0.3679 \\), then multiply by 80 and add 20.' },
            { stepNumber: 4, description: '(c) Consider \\( t \\) approaching infinity', workingLatex: 'e^{-0.05t} \\to 0 \\implies T \\to 20 + 0 = 20^\\circ', explanation: 'As \\( t \\) increases without bound, the exponential term decays to zero, leaving the constant 20 which represents the room temperature.' }
        ], finalAnswer: '(a) \\( 100 \\) degrees (b) \\( 49.4 \\) degrees (c) \\( 20 \\) degrees' }
    },


    {
        id: 'el1-042', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{e^{3x} \\times e^{2x}}{e^{4x}} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine the numerator', workingLatex: 'e^{3x} \\times e^{2x} = e^{3x+2x} = e^{5x}', explanation: 'Use the index law \\( a^m \\times a^n = a^{m+n} \\) to add the exponents in the numerator.' },
            { stepNumber: 2, description: 'Divide by the denominator', workingLatex: '\\frac{e^{5x}}{e^{4x}} = e^{5x-4x} = e^{x}', explanation: 'Use the index law \\( a^m \\div a^n = a^{m-n} \\) to subtract the exponents.' }
        ], finalAnswer: '\\( e^x \\)' }
    },

    {
        id: 'el1-043', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'Solve \\( 8^x = 4^{x+3} \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write both sides as powers of 2.',
                    workingLatex: '8^x = (2^3)^x = 2^{3x} \\qquad 4^{x+3} = (2^2)^{x+3} = 2^{2(x+3)}',
                    explanation: 'Express 8 as \\( 2^3 \\) and 4 as \\( 2^2 \\), then apply the power-of-a-power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the right-hand exponent.',
                    workingLatex: '2^{3x} = 2^{2x+6}',
                    explanation: 'Distribute the 2 across the bracket to get \\( 2x + 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Equate exponents and solve.',
                    workingLatex: '3x = 2x + 6 \\implies x = 6',
                    explanation: 'Since the bases are equal, set the exponents equal and solve for \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Verify the answer.',
                    workingLatex: '8^6 = 262144 \\qquad 4^9 = 262144 \\quad \\checkmark',
                    explanation: 'Substituting \\( x = 6 \\) gives \\( 8^6 \\) on the left and \\( 4^9 \\) on the right; both equal 262144.'
                }
            ],
            finalAnswer: '\\( x = 6 \\)'
        }
    },

    {
        id: 'el1-044', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'Solve \\( 27^{x-1} = 9^{2x} \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write both sides as powers of 3.',
                    workingLatex: '27^{x-1} = (3^3)^{x-1} = 3^{3(x-1)} \\qquad 9^{2x} = (3^2)^{2x} = 3^{4x}',
                    explanation: 'Express 27 as \\( 3^3 \\) and 9 as \\( 3^2 \\), then use the power-of-a-power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the left-hand exponent.',
                    workingLatex: '3^{3x - 3} = 3^{4x}',
                    explanation: 'Distribute the 3 across the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Equate exponents and solve.',
                    workingLatex: '3x - 3 = 4x \\implies -3 = x',
                    explanation: 'Subtract \\( 3x \\) from both sides to isolate \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Verify the answer.',
                    workingLatex: '27^{-4} = \\frac{1}{27^4} = \\frac{1}{531441} \\qquad 9^{-6} = \\frac{1}{9^6} = \\frac{1}{531441} \\quad \\checkmark',
                    explanation: 'Substituting \\( x = -3 \\) gives \\( 27^{-4} \\) and \\( 9^{-6} \\); both equal \\( 1/531441 \\).'
                }
            ],
            finalAnswer: '\\( x = -3 \\)'
        }
    },

    {
        id: 'el1-045', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'Simplify \\( \\dfrac{4^{2x} \\times 8^x}{2^{3x+1}} \\), giving your answer as a power of 2.',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write each term as a power of 2.',
                    workingLatex: '4^{2x} = (2^2)^{2x} = 2^{4x} \\qquad 8^x = (2^3)^x = 2^{3x}',
                    explanation: 'Express 4 as \\( 2^2 \\) and 8 as \\( 2^3 \\), then apply the power-of-a-power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Combine the numerator.',
                    workingLatex: '2^{4x} \\times 2^{3x} = 2^{7x}',
                    explanation: 'Add the exponents when multiplying powers with the same base.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by the denominator.',
                    workingLatex: '\\frac{2^{7x}}{2^{3x+1}} = 2^{7x - (3x+1)} = 2^{4x - 1}',
                    explanation: 'Subtract the exponents when dividing. Be careful with the bracket: \\( 7x - 3x - 1 = 4x - 1 \\).'
                }
            ],
            finalAnswer: '\\( 2^{4x-1} \\)'
        }
    },

    {
        id: 'el1-046', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'The graph of \\( y = a \\times b^x \\) passes through \\( (1, 6) \\) and \\( (3, 54) \\). Find the values of \\( a \\) and \\( b \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up two simultaneous equations.',
                    workingLatex: 'ab = 6 \\qquad ab^3 = 54',
                    explanation: 'Substitute each point into \\( y = ab^x \\) to form two equations.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide the second equation by the first.',
                    workingLatex: '\\frac{ab^3}{ab} = \\frac{54}{6} \\implies b^2 = 9',
                    explanation: 'The \\( a \\) cancels and one power of \\( b \\) cancels, leaving \\( b^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = 3 \\quad (b > 0 \\text{ for an exponential})',
                    explanation: 'Take the positive square root since the base of an exponential must be positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( a \\) by substitution.',
                    workingLatex: 'a \\times 3 = 6 \\implies a = 2',
                    explanation: 'Substitute \\( b = 3 \\) back into the first equation and solve for \\( a \\).'
                }
            ],
            finalAnswer: '\\( a = 2 \\), \\( b = 3 \\)'
        }
    },

    {
        id: 'el1-047', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'A colony of bacteria has initial population 200. The population triples every 4 hours.\n(a) Write down a model of the form \\( P = P_0 \\times k^t \\), where \\( t \\) is the number of 4-hour periods.\n(b) Find the population after 20 hours.\n(c) After how many 4-hour periods does the population first exceed one million?',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Identify the model.',
                    workingLatex: 'P = 200 \\times 3^t',
                    explanation: 'The initial population is 200 and it triples each period, so \\( k = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Find the number of periods in 20 hours.',
                    workingLatex: 't = \\frac{20}{4} = 5',
                    explanation: 'Each period is 4 hours, so 20 hours is 5 periods.'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the population.',
                    workingLatex: 'P = 200 \\times 3^5 = 200 \\times 243 = 48600',
                    explanation: 'Substitute \\( t = 5 \\) and evaluate \\( 3^5 = 243 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Set up the inequality.',
                    workingLatex: '200 \\times 3^t > 1000000 \\implies 3^t > 5000',
                    explanation: 'Divide both sides by 200 to isolate the exponential term.'
                },
                {
                    stepNumber: 5,
                    description: 'Test values of \\( t \\) systematically.',
                    workingLatex: '3^7 = 2187, \\quad 3^8 = 6561 > 5000',
                    explanation: '\\( 3^7 = 2187 \\) which is less than 5000, but \\( 3^8 = 6561 \\) which exceeds 5000. So the population first exceeds one million after 8 periods (32 hours).'
                }
            ],
            finalAnswer: '(a) \\( P = 200 \\times 3^t \\) \\newline (b) \\( 48600 \\) \\newline (c) After 8 periods (32 hours)'
        }
    },

    {
        id: 'el1-048', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'Show that \\( \\dfrac{9^{x+1} - 9^x}{9^x - 9^{x-1}} = \\dfrac{9}{1} \\) for all values of \\( x \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Factor \\( 9^x \\) from the numerator.',
                    workingLatex: '9^{x+1} - 9^x = 9^x(9 - 1) = 8 \\times 9^x',
                    explanation: 'Using the index law \\( 9^{x+1} = 9 \\times 9^x \\), factor out \\( 9^x \\) from both terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Factor \\( 9^{x-1} \\) from the denominator.',
                    workingLatex: '9^x - 9^{x-1} = 9^{x-1}(9 - 1) = 8 \\times 9^{x-1}',
                    explanation: 'Using \\( 9^x = 9 \\times 9^{x-1} \\), factor out \\( 9^{x-1} \\) from both terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the fraction.',
                    workingLatex: '\\frac{8 \\times 9^x}{8 \\times 9^{x-1}} = \\frac{9^x}{9^{x-1}} = 9^{x-(x-1)} = 9^1 = 9',
                    explanation: 'The 8s cancel, then subtract the exponents to get \\( 9^1 = 9 \\), which is independent of \\( x \\).'
                }
            ],
            finalAnswer: 'Shown: the expression simplifies to \\( 9 \\) for all \\( x \\).'
        }
    },

    {
        id: 'el1-049', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'Solve \\( 25^x - 6 \\times 5^x + 5 = 0 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( 25^x \\) as a power of \\( 5^x \\).',
                    workingLatex: '25^x = (5^2)^x = (5^x)^2',
                    explanation: 'Recognise that \\( 25 = 5^2 \\), so \\( 25^x = (5^x)^2 \\). This creates a quadratic in \\( 5^x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Let \\( u = 5^x \\) and form a quadratic.',
                    workingLatex: 'u^2 - 6u + 5 = 0',
                    explanation: 'Substituting \\( u = 5^x \\) turns the exponential equation into a standard quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(u - 1)(u - 5) = 0 \\implies u = 1 \\text{ or } u = 5',
                    explanation: 'Find two numbers that multiply to 5 and add to \\( -6 \\): these are \\( -1 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\) in each case.',
                    workingLatex: '5^x = 1 \\implies x = 0 \\qquad 5^x = 5 \\implies x = 1',
                    explanation: 'Since \\( 5^0 = 1 \\) and \\( 5^1 = 5 \\), both values of \\( u \\) give integer solutions for \\( x \\).'
                }
            ],
            finalAnswer: '\\( x = 0 \\) or \\( x = 1 \\)'
        }
    },

    {
        id: 'el1-050', topicRef: 'el1', topicTitle: 'Exponentials', difficulty: 'Standard',
        questionText: 'A radioactive substance has a half-life of 5 years. An initial sample has mass 400 g.\n(a) Write a model of the form \\( m = m_0 \\times k^t \\), where \\( t \\) is in 5-year periods.\n(b) Find the mass after 20 years.\n(c) After how many 5-year periods is the mass first below 1 g?',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set up the decay model.',
                    workingLatex: 'm = 400 \\times \\left(\\frac{1}{2}\\right)^t',
                    explanation: 'Half-life means the mass halves each period, so \\( k = 1/2 \\) and the initial mass \\( m_0 = 400 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Find the number of periods.',
                    workingLatex: 't = \\frac{20}{5} = 4',
                    explanation: '20 years divided by the 5-year period length gives 4 periods.'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the mass.',
                    workingLatex: 'm = 400 \\times \\left(\\frac{1}{2}\\right)^4 = 400 \\times \\frac{1}{16} = 25 \\text{ g}',
                    explanation: 'Evaluate \\( (1/2)^4 = 1/16 \\), then multiply by 400.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Set up the inequality.',
                    workingLatex: '400 \\times \\left(\\frac{1}{2}\\right)^t < 1 \\implies \\left(\\frac{1}{2}\\right)^t < \\frac{1}{400}',
                    explanation: 'Divide both sides by 400 to isolate the exponential term.'
                },
                {
                    stepNumber: 5,
                    description: 'Test values of \\( t \\) systematically.',
                    workingLatex: '\\left(\\frac{1}{2}\\right)^8 = \\frac{1}{256}, \\quad \\left(\\frac{1}{2}\\right)^9 = \\frac{1}{512} < \\frac{1}{400}',
                    explanation: '\\( 1/256 > 1/400 \\) so \\( t = 8 \\) is not enough, but \\( 1/512 < 1/400 \\) so \\( t = 9 \\) works. The mass drops below 1 g after 9 periods (45 years).'
                }
            ],
            finalAnswer: '(a) \\( m = 400 \\times \\left(\\frac{1}{2}\\right)^t \\) \\newline (b) \\( 25 \\) g \\newline (c) After 9 periods (45 years)'
        }
    },
];
