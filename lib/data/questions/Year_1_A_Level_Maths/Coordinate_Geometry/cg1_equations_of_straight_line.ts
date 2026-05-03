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

    // ─── TYPE A: Gradient and y-intercept from y = mx + c (Q1–5) ─────────────

    {
        id: 'cg1-001',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 01',
        difficulty: 'Foundation',
        questionText: 'Write down the gradient and \\( y \\)-intercept of the line \\( y = 3x - 7 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare with \\( y = mx + c \\).',
                    workingLatex: 'y = 3x - 7 \\implies m = 3,\\ c = -7',
                    explanation: 'The coefficient of \\( x \\) is the gradient; the constant is the \\( y \\)-intercept.'
                }
            ],
            finalAnswer: 'Gradient = \\(3\\), y-intercept = \\((0, -7)\\)'
        }
    },

    {
        id: 'cg1-002',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 02',
        difficulty: 'Foundation',
        questionText: 'Write down the gradient and \\( y \\)-intercept of the line \\( y = -2x + 5 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare with \\( y = mx + c \\).',
                    workingLatex: 'y = -2x + 5 \\implies m = -2,\\ c = 5',
                    explanation: 'The gradient is the coefficient of \\( x \\), which is negative here.'
                }
            ],
            finalAnswer: 'Gradient = \\(-2\\), y-intercept = \\((0, 5)\\)'
        }
    },

    {
        id: 'cg1-003',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 03',
        difficulty: 'Foundation',
        questionText: 'Write down the gradient and \\( y \\)-intercept of the line \\( y = \\dfrac{1}{3}x + 4 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare with \\( y = mx + c \\).',
                    workingLatex: 'm = \\tfrac{1}{3},\\quad c = 4',
                    explanation: 'The gradient is the fraction \\( \\frac{1}{3} \\) and the \\( y \\)-intercept is \\(4\\).'
                }
            ],
            finalAnswer: 'Gradient = \\(\\dfrac{1}{3}\\), y-intercept = \\((0, 4)\\)'
        }
    },

    // ─── TYPE B: Write equation given gradient and y-intercept (Q4–6) ─────────

    {
        id: 'cg1-004',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 04',
        difficulty: 'Foundation',
        questionText: 'Write down the equation of the straight line with gradient \\( 4 \\) and \\( y \\)-intercept \\( (0, -1) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( m = 4 \\) and \\( c = -1 \\) into \\( y = mx + c \\).',
                    workingLatex: 'y = 4x - 1',
                    explanation: 'Direct substitution gives the equation.'
                }
            ],
            finalAnswer: '\\(y = 4x - 1\\)'
        }
    },

    {
        id: 'cg1-005',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 05',
        difficulty: 'Foundation',
        questionText: 'Write down the equation of the straight line with gradient \\( -\\dfrac{2}{3} \\) and \\( y \\)-intercept \\( (0, 6) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( m = -\\frac{2}{3} \\) and \\( c = 6 \\).',
                    workingLatex: 'y = -\\dfrac{2}{3}x + 6',
                    explanation: 'Direct substitution.'
                }
            ],
            finalAnswer: '\\(y = -\\dfrac{2}{3}x + 6\\)'
        }
    },

    {
        id: 'cg1-006',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 06',
        difficulty: 'Foundation',
        questionText: 'Write down the equation of the straight line with gradient \\( 0.5 \\) and \\( y \\)-intercept \\( (0, -3) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( m = 0.5 \\) and \\( c = -3 \\).',
                    workingLatex: 'y = 0.5x - 3',
                    explanation: 'Direct substitution gives the equation.'
                }
            ],
            finalAnswer: '\\(y = 0.5x - 3\\)'
        }
    },

    // ─── TYPE C: Equation from two points — form y − y₁ = m(x − x₁) (Q7–12) ──

    {
        id: 'cg1-007',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 07',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line that passes through the points \\( (2, 5) \\) and \\( (6, 13) \\). Write your answer in the form \\( y - y_1 = m(x - x_1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient and write the equation.',
                    workingLatex: '\\begin{aligned} m &= \\dfrac{13 - 5}{6 - 2} = \\dfrac{8}{4} = 2 \\end{aligned}',
                    explanation: 'Use \\( m = \\frac{y_2 - y_1}{x_2 - x_1} \\). Then substitute into \\( y - y_1 = m(x - x_1) \\) using either point.'
                }
            ],
            finalAnswer: '\\(y - 5 = 2(x - 2)\\) or equivalently \\(y - 13 = 2(x - 6)\\)',
            commonMistakes: ['Both answers are equally valid — you can use either point in the formula.'],
        }
    },

    {
        id: 'cg1-008',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 08',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line passing through \\( (1, 7) \\) and \\( (4, 1) \\). Write your answer in the form \\( y - y_1 = m(x - x_1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient and write the equation.',
                    workingLatex: '\\begin{aligned} m &= \\dfrac{1 - 7}{4 - 1} = \\dfrac{-6}{3} = -2 \\end{aligned}',
                    explanation: 'The gradient is negative, meaning the line slopes downward. Substitute into \\( y - y_1 = m(x - x_1) \\) using either point.'
                }
            ],
            finalAnswer: '\\(y - 7 = -2(x - 1)\\) or equivalently \\(y - 1 = -2(x - 4)\\)',
            commonMistakes: ['Both answers are equally valid — you can use either point in the formula.'],
        }
    },

    {
        id: 'cg1-009',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 09',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line passing through \\( (-2, 3) \\) and \\( (4, 15) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient.',
                    workingLatex: 'm = \\dfrac{15 - 3}{4 - (-2)} = \\dfrac{12}{6} = 2',
                    explanation: 'Take care with the negative \\( x \\)-coordinate in the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = 2x + c \\) and substitute in \\( (4, 15) \\).',
                    workingLatex: '15 = 2(4) + c \\implies c = 7',
                    explanation: 'You can substitute either point to find \\( c \\) — both give the same result.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full equation.',
                    workingLatex: 'y = 2x + 7',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = 2x + 7\\)',
            commonMistakes: ['Either point can be substituted to find \\(c\\). Using \\((-2, 3)\\): \\(3 = 2(-2) + c \\implies c = 7\\) gives the same answer.'],
        }
    },

    {
        id: 'cg1-010',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 10',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line passing through \\( (0, -4) \\) and \\( (5, 6) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Since one point is \\( (0, -4) \\), the \\( y \\)-intercept is \\( c = -4 \\).',
                    workingLatex: 'c = -4',
                    explanation: 'When \\( x = 0 \\), the point is on the \\( y \\)-axis, so \\( c \\) is read directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient.',
                    workingLatex: 'm = \\dfrac{6 - (-4)}{5 - 0} = \\dfrac{10}{5} = 2',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = 2x - 4',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = 2x - 4\\)'
        }
    },

    {
        id: 'cg1-011',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 11',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line passing through \\( (-3, -1) \\) and \\( (6, 8) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient.',
                    workingLatex: 'm = \\dfrac{8 - (-1)}{6 - (-3)} = \\dfrac{9}{9} = 1',
                    explanation: 'Both differences are \\(9\\), giving a gradient of \\(1\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = x + c \\) and substitute \\( (6, 8) \\).',
                    workingLatex: '8 = 6 + c \\implies c = 2',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = x + 2',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = x + 2\\)'
        }
    },

    {
        id: 'cg1-012',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 12',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line passing through \\( (-5, 11) \\) and \\( (3, -5) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient.',
                    workingLatex: 'm = \\dfrac{-5 - 11}{3 - (-5)} = \\dfrac{-16}{8} = -2',
                    explanation: 'The line has a negative gradient — it slopes downward left to right.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = -2x + c \\) and substitute \\( (3, -5) \\).',
                    workingLatex: '-5 = -2(3) + c \\implies -5 = -6 + c \\implies c = 1',
                    explanation: 'You can substitute either point to find \\( c \\) — both give the same result.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = -2x + 1',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = -2x + 1\\)',
            commonMistakes: ['Either point can be substituted to find \\(c\\). Using \\((-5, 11)\\): \\(11 = -2(-5) + c \\implies c = 1\\) gives the same answer.'],
        }
    },

    // ─── TYPE D: Convert to ax + by + c = 0 (Q13–17) ─────────────────────────

    {
        id: 'cg1-013',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 13',
        difficulty: 'Foundation',
        questionText: 'Write the equation \\( y = 3x - 4 \\) in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\) and \\( c \\) are integers.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Move all terms to one side.',
                    workingLatex: 'y = 3x - 4 \\quad\\quad \\Rightarrow \\quad\\quad y - 3x + 4 = 0',
                    explanation: 'Move all terms to one side. Multiplying through by \\(-1\\) gives the equivalent form \\(3x - y - 4 = 0\\).'
                }
            ],
            finalAnswer: '\\(y - 3x + 4 = 0\\), or equivalently \\(3x - y - 4 = 0\\)',
            commonMistakes: ['Both forms are equally valid. Multiplying through by \\(-1\\) gives the other form. Convention is usually to make the \\(x\\) coefficient positive, but both are correct.'],
        }
    },

    {
        id: 'cg1-014',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 14',
        difficulty: 'Foundation',
        questionText: 'Write the equation \\( y = \\dfrac{1}{2}x + 3 \\) in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\) and \\( c \\) are integers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply by \\(2\\) to clear the fraction, then rearrange.',
                    workingLatex: 'y = \\dfrac{1}{2}x + 3 \\quad\\quad \\Rightarrow \\quad\\quad 2y = x + 6 \\quad\\quad \\Rightarrow \\quad\\quad x - 2y + 6 = 0',
                    explanation: 'Multiply through by \\(2\\) first, then move all terms to one side.'
                }
            ],
            finalAnswer: '\\(x - 2y + 6 = 0\\) or equivalently \\(-x + 2y - 6 = 0\\)',
            commonMistakes: ['Both forms are equally valid. Multiplying through by \\(-1\\) gives the other form.'],
        }
    },

    {
        id: 'cg1-015',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 15',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line that passes through the point \\( (3, -8) \\) and has gradient \\( -\\dfrac{5}{2} \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\) and \\( c \\) are integers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the equation and rearrange.',
                    workingLatex: 'y + 8 = -\\dfrac{5}{2}(x - 3) \\quad\\quad \\Rightarrow \\quad\\quad 2y + 16 = -5x + 15 \\quad\\quad \\Rightarrow \\quad\\quad 5x + 2y + 1 = 0',
                    explanation: 'Substitute into \\(y - y_1 = m(x - x_1)\\), multiply by \\(2\\) to clear the fraction, then collect all terms on one side.'
                }
            ],
            finalAnswer: '\\(5x + 2y + 1 = 0\\) or equivalently \\(-5x - 2y - 1 = 0\\)',
            commonMistakes: ['Both forms are equally valid. Multiplying through by \\(-1\\) gives the other form.'],
        }
    },

    {
        id: 'cg1-016',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 16',
        difficulty: 'Foundation',
        questionText: 'Write the equation \\( 4y - 2x + 8 = 0 \\) in the form \\( y = mx + c \\). State the gradient and \\( y \\)-intercept.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( 2x \\) to both sides and subtract \\(8\\).',
                    workingLatex: '4y = 2x - 8',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Divide every term by \\(4\\).',
                    workingLatex: 'y = \\dfrac{1}{2}x - 2',
                    explanation: 'The equation is now in \\( y = mx + c \\) form.'
                }
            ],
            finalAnswer: '\\(y = \\dfrac{1}{2}x - 2\\); gradient = \\(\\dfrac{1}{2}\\), y-intercept = \\((0, -2)\\)'
        }
    },

    {
        id: 'cg1-017',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 17',
        difficulty: 'Foundation',
        questionText: 'Find the gradient and \\( y \\)-intercept of the line \\( 3x + 6y - 12 = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange to make \\( y \\) the subject.',
                    workingLatex: '6y = -3x + 12 \\implies y = -\\dfrac{1}{2}x + 2',
                    explanation: 'Subtract \\(3x\\), add \\(12\\) to both sides, then divide by \\(6\\).'
                }
            ],
            finalAnswer: 'Gradient = \\(-\\dfrac{1}{2}\\), y-intercept = \\((0, 2)\\)'
        }
    },

    // ─── TYPE E: Equation from gradient and one point — y = mx + c (Q18–22) ──

    {
        id: 'cg1-018',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 18',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the straight line that passes through the point \\( (5, 3) \\) and has gradient \\( 2 \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = 2x + c \\) and substitute \\( (5, 3) \\).',
                    workingLatex: '3 = 2(5) + c \\implies 3 = 10 + c \\implies c = -7',
                    explanation: 'Substituting the given point allows us to find \\( c \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the final equation.',
                    workingLatex: 'y = 2x - 7',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = 2x - 7\\)'
        }
    },

    {
        id: 'cg1-019',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 19',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the straight line with gradient \\( -3 \\) passing through \\( (2, 4) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = -3x + c \\) and substitute \\( (2, 4) \\).',
                    workingLatex: '4 = -3(2) + c \\implies 4 = -6 + c \\implies c = 10',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Write the final equation.',
                    workingLatex: 'y = -3x + 10',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = -3x + 10\\)'
        }
    },

    {
        id: 'cg1-020',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 20',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the straight line with gradient \\( \\dfrac{3}{4} \\) passing through \\( (-4, 1) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = \\frac{3}{4}x + c \\) and substitute \\( (-4, 1) \\).',
                    workingLatex: '1 = \\dfrac{3}{4}(-4) + c \\implies 1 = -3 + c \\implies c = 4',
                    explanation: 'Be careful with the negative \\( x \\)-value.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the final equation.',
                    workingLatex: 'y = \\dfrac{3}{4}x + 4',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = \\dfrac{3}{4}x + 4\\)'
        }
    },

    // ─── TYPE F: Verify whether a point lies on a line (Q21–23) ──────────────

    {
        id: 'cg1-021',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 21',
        difficulty: 'Foundation',
        questionText: 'A straight line has equation \\( y = 5x - 3 \\). State whether or not the point \\( (2, 7) \\) lies on the line. Show your working.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( x = 2 \\) into the equation.',
                    workingLatex: 'y = 5(2) - 3 = 10 - 3 = 7',
                    explanation: 'The calculated \\( y \\)-value matches the given \\( y \\)-coordinate.'
                },
                {
                    stepNumber: 2,
                    description: 'State the conclusion.',
                    workingLatex: '7 = 7 \\implies (2, 7) \\text{ lies on the line.}',
                    explanation: ''
                }
            ],
            finalAnswer: 'Yes, \\((2, 7)\\) lies on the line.'
        }
    },

    {
        id: 'cg1-022',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 22',
        difficulty: 'Foundation',
        questionText: 'A line passes through the points \\( (1, 3) \\) and \\( (4, 9) \\). Does the point \\( (10, 21) \\) also lie on the line? Show full working.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of the line.',
                    workingLatex: 'm = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find the equation: use \\( y = 2x + c \\) with \\( (1, 3) \\).',
                    workingLatex: '3 = 2(1) + c \\implies c = 1 \\implies y = 2x + 1',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Test \\( (10, 21) \\).',
                    workingLatex: '2(10) + 1 = 21 \\checkmark',
                    explanation: 'The point satisfies the equation.'
                }
            ],
            finalAnswer: 'Yes, \\((10, 21)\\) lies on the line.'
        }
    },

    {
        id: 'cg1-023',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 23',
        difficulty: 'Foundation',
        questionText: 'A straight line has gradient \\( -4 \\) and passes through \\( (1, 5) \\). State which of the following points lie on the line: \\( (2, 1) \\), \\( (0, 9) \\), \\( (-1, 9) \\), \\( (3, -3) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the equation of the line.',
                    workingLatex: 'y = -4x + c;\\ 5 = -4(1) + c \\implies c = 9 \\implies y = -4x + 9',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Test each point by substituting the \\( x \\)-value.',
                    workingLatex: 'x=2:\\; -4(2)+9=1\\checkmark\\quad x=0:\\; 9\\checkmark\\quad x=-1:\\; 13\\ne9\\quad x=3:\\; -3\\checkmark',
                    explanation: 'Points with \\( x=2 \\), \\( x=0 \\) and \\( x=3 \\) satisfy the equation; \\( (-1, 9) \\) does not.'
                }
            ],
            finalAnswer: '\\((2, 1)\\), \\((0, 9)\\) and \\((3, -3)\\) lie on the line. \\((-1, 9)\\) does not.'
        }
    },

    // ─── TYPE G: Midpoint of a line segment (Q24–27) ─────────────────────────

    {
        id: 'cg1-024',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 24',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint of the line segment joining \\( A(2, 6) \\) and \\( B(8, 14) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the midpoint formula: \\( M = \\left(\\dfrac{x_A + x_B}{2},\\ \\dfrac{y_A + y_B}{2}\\right) \\).',
                    workingLatex: 'M = \\left(\\dfrac{2 + 8}{2},\\ \\dfrac{6 + 14}{2}\\right) = (5, 10)',
                    explanation: 'Add the coordinates and halve each.'
                }
            ],
            finalAnswer: '\\(M = (5, 10)\\)'
        }
    },

    {
        id: 'cg1-025',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 25',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint of the line segment joining \\( P(-3, 7) \\) and \\( Q(5, -1) \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the midpoint formula.',
                    workingLatex: 'M = \\left(\\dfrac{-3 + 5}{2},\\ \\dfrac{7 + (-1)}{2}\\right) = \\left(1,\\ 3\\right)',
                    explanation: 'Take care with the negative values.'
                }
            ],
            finalAnswer: '\\(M = (1, 3)\\)'
        }
    },

    {
        id: 'cg1-026',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 26',
        difficulty: 'Foundation',
        questionText: 'The midpoint of the line segment \\( AB \\) is \\( M(4, -1) \\). If \\( A = (1, 3) \\), find the coordinates of \\( B \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the midpoint formula in reverse. If \\( M = \\left(\\frac{x_A + x_B}{2}, \\frac{y_A + y_B}{2}\\right) \\), then:',
                    workingLatex: '\\dfrac{1 + x_B}{2} = 4 \\implies x_B = 7',
                    explanation: 'Multiply both sides by \\(2\\) and solve.'
                },
                {
                    stepNumber: 2,
                    description: 'Similarly for the \\( y \\)-coordinate:',
                    workingLatex: '\\dfrac{3 + y_B}{2} = -1 \\implies y_B = -5',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(B = (7, -5)\\)'
        }
    },

    {
        id: 'cg1-027',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 27',
        difficulty: 'Foundation',
        questionText: 'Points \\( C(a, 5) \\) and \\( D(6, b) \\) lie on the line \\( 2x - y + 1 = 0 \\). Find the midpoint of \\( CD \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( a \\): substitute \\( y = 5 \\) into \\( 2x - y + 1 = 0 \\).',
                    workingLatex: '2a - 5 + 1 = 0 \\implies 2a = 4 \\implies a = 2',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( b \\): substitute \\( x = 6 \\) into \\( 2x - y + 1 = 0 \\).',
                    workingLatex: '12 - b + 1 = 0 \\implies b = 13',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Apply the midpoint formula with \\( C = (2, 5) \\) and \\( D = (6, 13) \\).',
                    workingLatex: 'M = \\left(\\dfrac{2 + 6}{2},\\ \\dfrac{5 + 13}{2}\\right) = (4, 9)',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(M = (4, 9)\\)'
        }
    },

    // ─── TYPE H: Real-world / modelling straight line context (Q28–30) ────────

    {
        id: 'cg1-028',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 28',
        difficulty: 'Foundation',
        questionText: 'A taxi charges a fixed fee of £2 plus £1.50 per kilometre travelled.\n\n(a) Write an equation in the form \\( C = mk + c \\), where \\( C \\) is the total cost in pounds and \\( k \\) is the distance in kilometres.\n\n(b) Find the cost of a 12 km journey.\n\n(c) A journey costs £14. How far did the taxi travel?',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The fixed fee is \\( c = 2 \\) and the rate per km is \\( m = 1.5 \\).',
                    workingLatex: 'C = 1.5k + 2',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( k = 12 \\).',
                    workingLatex: 'C = 1.5(12) + 2 = 18 + 2 = 20',
                    explanation: 'The journey costs £20.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( C = 14 \\) and solve for \\( k \\).',
                    workingLatex: '14 = 1.5k + 2 \\implies 1.5k = 12 \\implies k = 8',
                    explanation: 'The taxi travelled \\(8\\) km.'
                }
            ],
            finalAnswer: '(a) \\(C = 1.5k + 2\\); (b) £20; (c) 8 km'
        }
    },

    {
        id: 'cg1-029',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 29',
        difficulty: 'Foundation',
        questionText: 'A candle is 20 cm tall when lit. It burns at a constant rate and is 12 cm tall after 4 hours.\n\n(a) Write an equation for the height \\( h \\) (in cm) after \\( t \\) hours.\n\n(b) How tall is the candle after 6 hours?\n\n(c) After how many hours does the candle burn out (reach height 0)?',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the rate of burning (gradient): the candle loses \\( 20 - 12 = 8 \\) cm in \\(4\\) hours.',
                    workingLatex: 'm = -\\dfrac{8}{4} = -2 \\text{ cm/hour}',
                    explanation: 'Negative because height decreases over time.'
                },
                {
                    stepNumber: 2,
                    description: '(a) The initial height is \\(20\\) cm, so \\( c = 20 \\).',
                    workingLatex: 'h = -2t + 20',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( t = 6 \\).',
                    workingLatex: 'h = -2(6) + 20 = 8 \\text{ cm}',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: '(c) Set \\( h = 0 \\).',
                    workingLatex: '0 = -2t + 20 \\implies t = 10 \\text{ hours}',
                    explanation: 'The candle burns out after \\(10\\) hours.'
                }
            ],
            finalAnswer: '(a) \\(h = -2t + 20\\); (b) 8 cm; (c) after 10 hours'
        }
    },

    {
        id: 'cg1-030',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 30',
        difficulty: 'Foundation',
        questionText: 'Two phone contracts are available:\n\n- Contract A: £10 per month plus 5p per minute of calls.\n- Contract B: £25 per month with unlimited calls.\n\n(a) Write equations for the monthly cost \\( C_A \\) and \\( C_B \\) in terms of minutes used \\( m \\).\n\n(b) Find the number of minutes at which both contracts cost the same.\n\n(c) Which contract is cheaper if you use 400 minutes per month?',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the two equations (costs in pounds).',
                    workingLatex: 'C_A = 0.05m + 10, \\quad C_B = 25',
                    explanation: '5p \\(= £0.05\\) per minute.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( C_A = C_B \\) and solve.',
                    workingLatex: '0.05m + 10 = 25 \\implies 0.05m = 15 \\implies m = 300',
                    explanation: 'Both contracts cost the same at \\(300\\) minutes.'
                },
                {
                    stepNumber: 3,
                    description: '(c) At \\(400\\) minutes, compare costs.',
                    workingLatex: 'C_A = 0.05(400) + 10 = £30; \\quad C_B = £25',
                    explanation: 'Contract B is cheaper above \\(300\\) minutes.'
                }
            ],
            finalAnswer: '(a) \\(C_A = 0.05m + 10\\), \\(C_B = 25\\); (b) 300 minutes; (c) Contract B'
        }
    },

    // ─── TYPE I: Parallel and perpendicular lines (Q31–33) ───────────────────

    {
        id: 'cg1-031',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 31',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line that is parallel to \\( y = 3x - 5 \\) and passes through the point \\( (2, 7) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Parallel lines have the same gradient. Here \\( m = 3 \\).',
                    workingLatex: 'y = 3x + c',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (2, 7) \\) to find \\( c \\).',
                    workingLatex: '7 = 3(2) + c \\implies c = 1',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = 3x + 1',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = 3x + 1\\)'
        }
    },

    {
        id: 'cg1-032',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 32',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( y = 2x + 1 \\) that passes through the point \\( (4, 3) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of the original line is \\( 2 \\). Perpendicular lines satisfy \\( m_1 \\times m_2 = -1 \\).',
                    workingLatex: 'm_2 = -\\dfrac{1}{2}',
                    explanation: 'The perpendicular gradient is the negative reciprocal.'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = -\\frac{1}{2}x + c \\) and substitute \\( (4, 3) \\).',
                    workingLatex: '3 = -\\dfrac{1}{2}(4) + c \\implies 3 = -2 + c \\implies c = 5',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation.',
                    workingLatex: 'y = -\\dfrac{1}{2}x + 5',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = -\\dfrac{1}{2}x + 5\\)'
        }
    },

    {
        id: 'cg1-033',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 33',
        difficulty: 'Foundation',
        questionText: 'Line \\( L_1 \\) passes through \\( (0, 4) \\) and \\( (3, 10) \\). Line \\( L_2 \\) is perpendicular to \\( L_1 \\) and passes through \\( (6, 1) \\). Find the equation of \\( L_2 \\) in the form \\( y = mx + c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of \\( L_1 \\).',
                    workingLatex: 'm_1 = \\dfrac{10 - 4}{3 - 0} = \\dfrac{6}{3} = 2',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: 'The gradient of \\( L_2 \\) is the negative reciprocal.',
                    workingLatex: 'm_2 = -\\dfrac{1}{2}',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( y = -\\frac{1}{2}x + c \\) and substitute \\( (6, 1) \\).',
                    workingLatex: '1 = -\\dfrac{1}{2}(6) + c \\implies 1 = -3 + c \\implies c = 4',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation.',
                    workingLatex: 'y = -\\dfrac{1}{2}x + 4',
                    explanation: ''
                }
            ],
            finalAnswer: '\\(y = -\\dfrac{1}{2}x + 4\\)'
        }
    },

    // ─── TYPE J: Multi-part exam-style questions (Q34–35) ────────────────────

    {
        id: 'cg1-034',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 34',
        difficulty: 'Foundation',
        questionText: 'The line \\( L \\) passes through the points \\( A(1, 5) \\) and \\( B(7, 2) \\).\n\n(a) Find the gradient of \\( L \\).\n\n(b) Find the equation of \\( L \\) in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\) and \\( c \\) are integers.\n\n(c) The point \\( C \\) lies on \\( L \\) and has \\( x \\)-coordinate 13. Find the \\( y \\)-coordinate of \\( C \\).\n\n(d) Find the midpoint of \\( AB \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient.',
                    workingLatex: 'm = \\dfrac{2 - 5}{7 - 1} = \\dfrac{-3}{6} = -\\dfrac{1}{2}',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '(b) Find the equation. Use \\( y = -\\frac{1}{2}x + c \\) with \\( (1, 5) \\).',
                    workingLatex: '5 = -\\tfrac{1}{2}(1) + c \\implies c = \\tfrac{11}{2}',
                    explanation: ''
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by \\(2\\) and rearrange into \\( ax + by + c = 0 \\).',
                    workingLatex: '2y = -x + 11 \\quad\\quad \\Rightarrow \\quad\\quad x + 2y - 11 = 0',
                    explanation: ''
                },
                {
                    stepNumber: 4,
                    description: '(c) Substitute \\( x = 13 \\) into \\( x + 2y - 11 = 0 \\).',
                    workingLatex: '13 + 2y - 11 = 0 \\implies 2y = -2 \\implies y = -1',
                    explanation: ''
                },
                {
                    stepNumber: 5,
                    description: '(d) Apply the midpoint formula.',
                    workingLatex: 'M = \\left(\\dfrac{1+7}{2},\\ \\dfrac{5+2}{2}\\right) = \\left(4,\\ 3.5\\right)',
                    explanation: ''
                }
            ],
            finalAnswer: '(a) \\(-\\dfrac{1}{2}\\); (b) \\(x + 2y - 11 = 0\\); (c) \\(y = -1\\); (d) \\(M = (4,\\ 3.5)\\)'
        }
    },

    {
        id: 'cg1-035',
        topicRef: 'CG1',
        topicTitle: 'Equation of a Straight Line 35',
        difficulty: 'Foundation',
        questionText: 'The points \\( P(2, k) \\) and \\( Q(6, 1) \\) lie on the line \\( 3x + 4y - 10 = 0 \\).\n\n(a) Find the value of \\( k \\).\n\n(b) Find the midpoint \\( M \\) of \\( PQ \\).\n\n(c) Find the equation of the line through \\( M \\) that is perpendicular to \\( PQ \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( P(2, k) \\) into \\( 3x + 4y - 10 = 0 \\).',
                    workingLatex: '3(2) + 4k - 10 = 0 \\implies 6 + 4k - 10 = 0 \\implies 4k = 4 \\implies k = 1',
                    explanation: ''
                },
                {
                    stepNumber: 2,
                    description: '(b) Now \\( P = (2, 1) \\) and \\( Q = (6, 1) \\). Find the midpoint.',
                    workingLatex: 'M = \\left(\\dfrac{2+6}{2},\\ \\dfrac{1+1}{2}\\right) = (4, 1)',
                    explanation: 'Both points have the same \\( y \\)-coordinate, so \\( PQ \\) is horizontal.'
                },
                {
                    stepNumber: 3,
                    description: '(c) The gradient of \\( PQ \\): since \\( P \\) and \\( Q \\) have the same \\( y \\)-value, \\( m_{PQ} = 0 \\). The perpendicular is vertical.',
                    workingLatex: 'x = 4',
                    explanation: 'A line perpendicular to a horizontal line is vertical, passing through \\( x = 4 \\).'
                }
            ],
            finalAnswer: '(a) \\(k = 1\\); (b) \\(M = (4, 1)\\); (c) \\(x = 4\\) (a vertical line)'
        }
    },

    // ─── Q36–70: Additional Equations of Straight Lines ──────────────────────

    {
        id: 'cg1-036', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 36', difficulty: 'Foundation',
        questionText: 'Find the equation of the line with gradient \\( 3 \\) passing through the point \\( (1, 5) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use \\(y - y_1 = m(x - x_1)\\)', workingLatex: 'y - 5 = 3(x - 1) = 3x - 3', explanation: 'Substitute gradient and point.' },
            { stepNumber: 2, description: 'Rearrange', workingLatex: 'y = 3x + 2', explanation: 'Add \\(5\\) to both sides.' }
        ], finalAnswer: '\\(y = 3x + 2\\)' }
    },
    {
        id: 'cg1-037', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 37', difficulty: 'Foundation',
        questionText: 'Find the equation of the line passing through \\( (2, 7) \\) and \\( (6, 3) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find gradient', workingLatex: 'm = \\frac{3 - 7}{6 - 2} = \\frac{-4}{4} = -1', explanation: 'Change in \\(y\\) over change in \\(x\\).' },
            { stepNumber: 2, description: 'Use point-slope form', workingLatex: 'y - 7 = -1(x - 2) \\implies y = -x + 9', explanation: 'Substitute into \\(y - y_1 = m(x - x_1)\\) using either point.' }
        ], finalAnswer: '\\(y = -x + 9\\)', commonMistakes: ['Using either point gives the same final equation. With \\((6,3)\\): \\(y - 3 = -1(x - 6) \\implies y = -x + 9\\).'] }
    },
    {
        id: 'cg1-038', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 38', difficulty: 'Foundation',
        questionText: 'Find the gradient of the line \\( 5x + 2y - 8 = 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange to \\(y = mx + c\\)', workingLatex: '2y = -5x + 8 \\implies y = -\\frac{5}{2}x + 4', explanation: 'Isolate \\(y\\).' }
        ], finalAnswer: '\\(-\\frac{5}{2}\\)' }
    },
    {
        id: 'cg1-039', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 39', difficulty: 'Foundation',
        questionText: 'A line has gradient \\( \\frac{2}{3} \\) and passes through \\( (-3, 1) \\). Find where it crosses the y-axis.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find equation', workingLatex: 'y - 1 = \\frac{2}{3}(x + 3) = \\frac{2}{3}x + 2', explanation: 'Point-slope form.' },
            { stepNumber: 2, description: 'Simplify', workingLatex: 'y = \\frac{2}{3}x + 3', explanation: '\\(y\\)-intercept is \\((0, 3)\\).' }
        ], finalAnswer: '\\((0, 3)\\)' }
    },
    {
        id: 'cg1-040', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 40', difficulty: 'Foundation',
        questionText: 'Find the equation of the line through \\( (0, -2) \\) and \\( (4, 6) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find gradient', workingLatex: 'm = \\frac{6 - (-2)}{4 - 0} = \\frac{8}{4} = 2', explanation: 'Either point can be used in the gradient formula.' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y = 2x - 2 \\quad\\quad \\Rightarrow \\quad\\quad 2x - y - 2 = 0', explanation: 'Rearrange to standard form.' }
        ], finalAnswer: '\\(2x - y - 2 = 0\\) or equivalently \\(-2x + y + 2 = 0\\)', commonMistakes: ['Both forms are equally valid. Multiplying through by \\(-1\\) gives the other form.'] }
    },
    {
        id: 'cg1-041', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 41', difficulty: 'Foundation',
        questionText: 'Find the midpoint of \\( A(3, -1) \\) and \\( B(7, 5) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply midpoint formula', workingLatex: 'M = \\left(\\frac{3+7}{2}, \\frac{-1+5}{2}\\right) = (5, 2)', explanation: 'Average the coordinates.' }
        ], finalAnswer: '\\((5, 2)\\)' }
    },
    {
        id: 'cg1-042', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 42', difficulty: 'Foundation',
        questionText: 'Find the distance between \\( P(1, 3) \\) and \\( Q(4, 7) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply distance formula', workingLatex: 'PQ = \\sqrt{(4-1)^2 + (7-3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5', explanation: '' }
        ], finalAnswer: '\\(5\\)' }
    },
    {
        id: 'cg1-043', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 43', difficulty: 'Foundation',
        questionText: 'The line \\( L \\) passes through \\( (1, 4) \\) and is parallel to \\( y = 2x - 3 \\). Find the equation of \\( L \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Parallel lines have equal gradients', workingLatex: 'm = 2', explanation: 'Same gradient as \\(y = 2x - 3\\).' },
            { stepNumber: 2, description: 'Use point-slope', workingLatex: 'y - 4 = 2(x - 1) \\implies y = 2x + 2', explanation: '' }
        ], finalAnswer: '\\(y = 2x + 2\\)' }
    },
    {
        id: 'cg1-044', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 44', difficulty: 'Foundation',
        questionText: 'The line \\( L \\) passes through \\( (3, 1) \\) and is perpendicular to \\( y = \\frac{1}{2}x + 5 \\). Find the equation of \\( L \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Perpendicular gradient', workingLatex: 'm = -\\frac{1}{\\frac{1}{2}} = -2', explanation: 'Negative reciprocal.' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y - 1 = -2(x - 3) \\implies y = -2x + 7', explanation: '' }
        ], finalAnswer: '\\(y = -2x + 7\\)' }
    },
    {
        id: 'cg1-045', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 45', difficulty: 'Foundation',
        questionText: 'Find where the lines \\( y = 3x - 1 \\) and \\( y = -x + 7 \\) intersect.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equal', workingLatex: '3x - 1 = -x + 7 \\implies 4x = 8 \\implies x = 2', explanation: '' },
            { stepNumber: 2, description: 'Find \\(y\\)', workingLatex: 'y = 3(2) - 1 = 5', explanation: '' }
        ], finalAnswer: '\\((2, 5)\\)' }
    },
    {
        id: 'cg1-046', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 46', difficulty: 'Foundation',
        questionText: 'Show that the points \\( A(1, 2) \\), \\( B(3, 6) \\) and \\( C(5, 10) \\) are collinear.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of \\(AB\\)', workingLatex: 'm_{AB} = \\frac{6-2}{3-1} = 2', explanation: '' },
            { stepNumber: 2, description: 'Gradient of \\(BC\\)', workingLatex: 'm_{BC} = \\frac{10-6}{5-3} = 2', explanation: 'Equal gradients and shared point \\(B\\) means collinear.' }
        ], finalAnswer: 'Gradients are equal so A, B, C are collinear.' }
    },
    {
        id: 'cg1-047', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 47', difficulty: 'Foundation',
        questionText: 'Find the equation of the perpendicular bisector of the line segment joining \\( A(2, 4) \\) and \\( B(6, 0) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint', workingLatex: 'M = (4, 2)', explanation: '' },
            { stepNumber: 2, description: 'Gradient of \\(AB\\)', workingLatex: 'm_{AB} = \\frac{0-4}{6-2} = -1', explanation: '' },
            { stepNumber: 3, description: 'Perpendicular gradient and equation', workingLatex: 'm_{\\perp} = 1; \\quad y - 2 = 1(x - 4) \\implies y = x - 2', explanation: '' }
        ], finalAnswer: '\\(y = x - 2\\)' }
    },
    {
        id: 'cg1-048', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 48', difficulty: 'Foundation',
        questionText: 'A line passes through \\( (-1, 5) \\) with gradient \\( -4 \\). Find where it crosses the x-axis.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equation', workingLatex: 'y - 5 = -4(x + 1) \\implies y = -4x + 1', explanation: '' },
            { stepNumber: 2, description: 'Set \\(y = 0\\)', workingLatex: '0 = -4x + 1 \\implies x = \\frac{1}{4}', explanation: '' }
        ], finalAnswer: '\\(\\left(\\frac{1}{4}, 0\\right)\\)' }
    },
    {
        id: 'cg1-049', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 49', difficulty: 'Foundation',
        questionText: 'Find the value of \\( k \\) if the line through \\( (2, 3) \\) and \\( (k, 7) \\) has gradient \\( \\frac{4}{3} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up gradient equation', workingLatex: '\\frac{7-3}{k-2} = \\frac{4}{3}', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\frac{4}{k-2} = \\frac{4}{3} \\implies k - 2 = 3 \\implies k = 5', explanation: '' }
        ], finalAnswer: '\\(k = 5\\)' }
    },
    {
        id: 'cg1-050', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 50', difficulty: 'Foundation',
        questionText: 'The line \\( 3x - 2y + 6 = 0 \\) meets the x-axis at \\( A \\) and the y-axis at \\( B \\). Find the area of triangle \\( OAB \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find \\(A\\) (\\(y = 0\\))', workingLatex: '3x + 6 = 0 \\implies x = -2, \\quad A = (-2, 0)', explanation: '' },
            { stepNumber: 2, description: 'Find \\(B\\) (\\(x = 0\\))', workingLatex: '-2y + 6 = 0 \\implies y = 3, \\quad B = (0, 3)', explanation: '' },
            { stepNumber: 3, description: 'Area', workingLatex: '\\text{Area} = \\frac{1}{2} \\times 2 \\times 3 = 3', explanation: 'Base \\(= 2\\), height \\(= 3\\).' }
        ], finalAnswer: '\\(3\\) square units' }
    },
    {
        id: 'cg1-051', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 51', difficulty: 'Foundation',
        questionText: 'Find the equation of the line through \\( (-2, 5) \\) and \\( (4, -1) \\) in the form \\( ax + by + c = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: 'm = \\frac{-1-5}{4-(-2)} = \\frac{-6}{6} = -1', explanation: 'Either point can be used in the gradient formula.' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y - 5 = -(x + 2) \\quad\\quad \\Rightarrow \\quad\\quad x + y - 3 = 0', explanation: 'Either point can be used in \\(y - y_1 = m(x - x_1)\\). Using \\((4, -1)\\): \\(y + 1 = -(x - 4) \\Rightarrow x + y - 3 = 0\\) gives the same result.' }
        ], finalAnswer: '\\(x + y - 3 = 0\\) or equivalently \\(-x - y + 3 = 0\\)', commonMistakes: ['Both forms are equally valid. Multiplying through by \\(-1\\) gives the other form. Either point gives the same equation.'] }
    },
    {
        id: 'cg1-052', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 52', difficulty: 'Foundation',
        questionText: 'Find the gradient of a line perpendicular to \\( 4x - 3y + 12 = 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find original gradient', workingLatex: '3y = 4x + 12 \\implies m = \\frac{4}{3}', explanation: '' },
            { stepNumber: 2, description: 'Perpendicular gradient', workingLatex: 'm_{\\perp} = -\\frac{3}{4}', explanation: 'Negative reciprocal.' }
        ], finalAnswer: '\\(-\\frac{3}{4}\\)' }
    },
    {
        id: 'cg1-053', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 53', difficulty: 'Foundation',
        questionText: 'A triangle has vertices \\( A(0, 0) \\), \\( B(6, 0) \\) and \\( C(3, 4) \\). Find the equation of the median from \\( C \\).\n\n(A median of a triangle is a line segment joining a vertex to the midpoint of the opposite side.)',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the midpoint of the opposite side \\(AB\\), then find the line through \\(C\\) and that midpoint.', workingLatex: '\\begin{aligned} M &= \\left(\\frac{0+6}{2},\\ \\frac{0+0}{2}\\right) = (3,\\ 0) \\end{aligned}', explanation: 'The median from \\(C\\) goes to the midpoint of \\(AB\\).' },
            { stepNumber: 2, description: 'The line through \\(C(3, 4)\\) and \\(M(3, 0)\\) is vertical since both points have the same \\(x\\)-coordinate.', workingLatex: 'x = 3', explanation: 'When two points share the same \\(x\\)-coordinate, the line between them is vertical.' }
        ], finalAnswer: '\\(x = 3\\)' }
    },
    {
        id: 'cg1-054', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 54', difficulty: 'Foundation',
        questionText: 'The line \\( y = 2x + k \\) is a tangent to the circle \\( x^2 + y^2 = 5 \\). Find the possible values of \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute the equation of the line into the equation of the circle.', workingLatex: 'x^2 + (2x+k)^2 = 5 \\quad\\quad \\Rightarrow \\quad\\quad 5x^2 + 4kx + k^2 - 5 = 0', explanation: 'Replace \\(y\\) in the circle equation with \\(2x + k\\) and expand to get a quadratic in \\(x\\).' },
            { stepNumber: 2, description: 'A line is tangent to a circle when it touches the circle at exactly one point. This means the quadratic formed by substituting the line into the circle must have exactly one solution — so the discriminant must equal zero.', workingLatex: '\\begin{aligned} b^2 - 4ac &= 0 \\\\ (4k)^2 - 4(5)(k^2-5) &= 0 \\\\ 16k^2 - 20k^2 + 100 &= 0 \\\\ -4k^2 + 100 &= 0 \\\\ k^2 &= 25 \\\\ k &= \\pm 5 \\end{aligned}', explanation: 'If the discriminant were positive, the line would cross the circle at two points (a secant). If negative, the line would miss the circle entirely. Only when the discriminant is zero does the line touch the circle at exactly one point (a tangent).' }
        ], finalAnswer: '\\(k = 5\\) or \\(k = -5\\)' }
    },
    {
        id: 'cg1-055', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 55', difficulty: 'Foundation',
        questionText: 'Find the distance from the origin to the line \\( 3x + 4y - 10 = 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\frac{|3(0) + 4(0) - 10|}{\\sqrt{9+16}} = \\frac{10}{5} = 2', explanation: '' }
        ], finalAnswer: '\\(2\\)' }
    },
    {
        id: 'cg1-056', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 56', difficulty: 'Foundation',
        questionText: 'Find the equation of the line with x-intercept 4 and y-intercept -3.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Two points: \\((4, 0)\\) and \\((0, -3)\\)', workingLatex: 'm = \\frac{-3-0}{0-4} = \\frac{3}{4}', explanation: '' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y = \\frac{3}{4}x - 3', explanation: '\\(y\\)-intercept is \\(-3\\).' }
        ], finalAnswer: '\\(y = \\frac{3}{4}x - 3\\)' }
    },
    {
        id: 'cg1-057', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 57', difficulty: 'Foundation',
        questionText: 'Determine whether the lines \\( 2x + 3y = 6 \\) and \\( 4x + 6y = 5 \\) are parallel, perpendicular, or neither.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find gradients', workingLatex: 'm_1 = -\\frac{2}{3}, \\quad m_2 = -\\frac{4}{6} = -\\frac{2}{3}', explanation: 'Equal gradients means parallel.' }
        ], finalAnswer: 'Parallel' }
    },
    {
        id: 'cg1-058', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 58', difficulty: 'Foundation',
        questionText: 'The line \\( L_1 \\) has equation \\( y = 3x - 2 \\). The line \\( L_2 \\) passes through \\( (6, 1) \\) and is perpendicular to \\( L_1 \\). Find where \\( L_1 \\) and \\( L_2 \\) intersect.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of \\(L_2\\).', workingLatex: 'm_2 = -\\frac{1}{3}', explanation: 'Perpendicular lines have gradients that are negative reciprocals of each other. Since \\(L_1\\) has gradient \\(3\\), \\(L_2\\) has gradient \\(-\\frac{1}{3}\\).' },
            { stepNumber: 2, description: 'Find the equation of \\(L_2\\).', workingLatex: 'y - 1 = -\\frac{1}{3}(x - 6) \\quad\\quad \\Rightarrow \\quad\\quad y = -\\frac{1}{3}x + 3', explanation: 'Substitute the gradient and the point \\((6, 1)\\) into \\(y - y_1 = m(x - x_1)\\), then simplify.' },
            { stepNumber: 3, description: 'Set the two equations equal to find the \\(x\\)-coordinate of intersection.', workingLatex: '\\begin{aligned} 3x - 2 &= -\\frac{1}{3}x + 3 \\\\ 3x + \\frac{1}{3}x &= 5 \\\\ \\frac{10}{3}x &= 5 \\\\ x &= \\frac{3}{2} \\end{aligned}', explanation: 'At the point of intersection, both lines have the same \\(y\\)-value, so set the right-hand sides equal and solve for \\(x\\).' },
            { stepNumber: 4, description: 'Substitute \\(x = \\frac{3}{2}\\) back into either equation to find \\(y\\).', workingLatex: '\\begin{aligned} y &= 3\\left(\\frac{3}{2}\\right) - 2 \\\\ &= \\frac{9}{2} - 2 \\\\ &= \\frac{5}{2} \\end{aligned}', explanation: 'Substituting into \\(L_1\\): \\(y = 3x - 2\\). You could equally use \\(L_2\\) and get the same result.' }
        ], finalAnswer: '\\(\\left(\\frac{3}{2},\\ \\frac{5}{2}\\right)\\)' }
    },
    {
        id: 'cg1-059', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 59', difficulty: 'Foundation',
        questionText: 'A line passes through \\( (a, 2a) \\) and \\( (3a, 5a) \\). Find the equation of the line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: 'm = \\frac{5a - 2a}{3a - a} = \\frac{3a}{2a} = \\frac{3}{2}', explanation: 'The \\(a\\) cancels.' },
            { stepNumber: 2, description: 'Equation', workingLatex: 'y - 2a = \\frac{3}{2}(x - a) \\implies 2y - 4a = 3x - 3a \\implies 3x - 2y + a = 0', explanation: 'Cannot eliminate \\(a\\) fully without more info, so express using \\(a\\).' }
        ], finalAnswer: '\\(y = \\frac{3}{2}x + \\frac{a}{2}\\)' }
    },
    {
        id: 'cg1-060', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 60', difficulty: 'Foundation',
        questionText: 'Find the equation of the line through \\( (5, -2) \\) that makes an angle of \\( 45° \\) with the positive x-axis.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient from the angle.', workingLatex: 'm = \\tan 45° = 1', explanation: 'The gradient of a line is equal to the tangent of the angle it makes with the positive \\(x\\)-axis. Since \\(\\tan 45° = 1\\), the gradient is \\(1\\).' },
            { stepNumber: 2, description: 'Substitute the gradient and the point into the equation of a straight line.', workingLatex: 'y - (-2) = 1(x - 5) \\quad\\quad \\Rightarrow \\quad\\quad y + 2 = x - 5 \\quad\\quad \\Rightarrow \\quad\\quad y = x - 7', explanation: 'Using \\(y - y_1 = m(x - x_1)\\) with \\(m = 1\\) and \\((5, -2)\\), then simplify.' }
        ], finalAnswer: '\\(y = x - 7\\)' }
    },
    {
        id: 'cg1-061', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 61', difficulty: 'Foundation',
        questionText: 'The vertices of a quadrilateral are \\( A(0,0) \\), \\( B(4,0) \\), \\( C(5,3) \\), \\( D(1,3) \\). Show that \\( ABCD \\) is a parallelogram.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient of \\(AB\\) and \\(DC\\)', workingLatex: 'm_{AB} = 0, \\quad m_{DC} = \\frac{3-3}{5-1} = 0', explanation: '\\(AB\\) and \\(DC\\) are parallel (both horizontal).' },
            { stepNumber: 2, description: 'Gradient of \\(AD\\) and \\(BC\\)', workingLatex: 'm_{AD} = \\frac{3}{1} = 3, \\quad m_{BC} = \\frac{3}{1} = 3', explanation: '\\(AD\\) and \\(BC\\) are parallel. Both pairs parallel, so parallelogram.' }
        ], finalAnswer: 'Both pairs of opposite sides are parallel, so ABCD is a parallelogram.' }
    },
    {
        id: 'cg1-062', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 62', difficulty: 'Foundation',
        questionText: 'Find the reflection of the point \\( (3, 7) \\) in the line \\( y = x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Reflecting a point in the line \\(y = x\\) swaps the \\(x\\)- and \\(y\\)-coordinates.', workingLatex: '(3, 7) \\to (7, 3)', explanation: 'The line \\(y = x\\) acts as a mirror. Every point \\((a, b)\\) reflects to \\((b, a)\\), because the line \\(y = x\\) is the set of all points where \\(x = y\\). Swapping the coordinates reflects the point across this line.' }
        ], finalAnswer: '\\((7, 3)\\)' }
    },
    {
        id: 'cg1-063', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 63', difficulty: 'Foundation',
        questionText: 'The line \\( y = mx + 4 \\) passes through \\( (2, 10) \\). Find \\( m \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Since the point \\((2, 10)\\) lies on the line, substitute \\(x = 2\\) and \\(y = 10\\) into the equation and solve for \\(m\\).', workingLatex: '10 = 2m + 4 \\quad\\quad \\Rightarrow \\quad\\quad 2m = 6 \\quad\\quad \\Rightarrow \\quad\\quad m = 3', explanation: 'If a point lies on a line, its coordinates must satisfy the equation of that line. Substituting gives a simple linear equation in \\(m\\).' }
        ], finalAnswer: '\\(m = 3\\)' }
    },
    {
        id: 'cg1-064', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 64', difficulty: 'Foundation',
        questionText: 'Find the equation of the line that is equidistant from \\( A(1, 3) \\) and \\( B(5, 7) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the midpoint of \\(AB\\).', workingLatex: 'M = \\left(\\frac{1+5}{2},\\ \\frac{3+7}{2}\\right) = (3,\\ 5)', explanation: 'The line equidistant from two points is the perpendicular bisector of the line segment joining them. It passes through the midpoint of \\(AB\\).' },
            { stepNumber: 2, description: 'Find the gradient of \\(AB\\).', workingLatex: 'm_{AB} = \\frac{7-3}{5-1} = \\frac{4}{4} = 1', explanation: 'We need this to find the gradient of the perpendicular bisector.' },
            { stepNumber: 3, description: 'The perpendicular bisector has a gradient that is the negative reciprocal of \\(m_{AB}\\). Use this with the midpoint to find the equation.', workingLatex: 'm_{\\perp} = -1 \\quad\\quad \\Rightarrow \\quad\\quad y - 5 = -(x - 3) \\quad\\quad \\Rightarrow \\quad\\quad y = -x + 8', explanation: 'The perpendicular bisector passes through \\(M(3, 5)\\) with gradient \\(-1\\). Every point on this line is equidistant from \\(A\\) and \\(B\\).' }
        ], finalAnswer: '\\(y = -x + 8\\)' }
    },
    {
        id: 'cg1-065', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 65', difficulty: 'Foundation',
        questionText: 'Find the area of the triangle with vertices \\( (0, 0) \\), \\( (5, 0) \\) and \\( (2, 6) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the base and height of the triangle.', workingLatex: '\\begin{aligned} \\text{Area} &= \\frac{1}{2} \\times \\text{base} \\times \\text{height} \\\\ &= \\frac{1}{2} \\times 5 \\times 6 \\\\ &= 15 \\end{aligned}', explanation: 'Two vertices \\((0,0)\\) and \\((5,0)\\) lie on the \\(x\\)-axis, so the base is the distance between them: \\(5\\). The height is the perpendicular distance from the third vertex \\((2,6)\\) to the \\(x\\)-axis, which is its \\(y\\)-coordinate: \\(6\\).' }
        ], finalAnswer: '\\(15\\) square units' }
    },
    {
        id: 'cg1-066', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 66', difficulty: 'Foundation',
        questionText: 'The point \\( (p, 2p+1) \\) lies on the line \\( 3x - y + 5 = 0 \\). Find \\( p \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '3p - (2p+1) + 5 = 0 \\implies p + 4 = 0 \\implies p = -4', explanation: '' }
        ], finalAnswer: '\\(p = -4\\)' }
    },
    {
        id: 'cg1-067', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 67', difficulty: 'Foundation',
        questionText: 'Two lines have equations \\( y = 2x + 1 \\) and \\( y = -\\frac{1}{2}x + 6 \\). Show they are perpendicular and find their point of intersection.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Check perpendicular', workingLatex: 'm_1 \\times m_2 = 2 \\times (-\\tfrac{1}{2}) = -1 \\checkmark', explanation: 'Product of gradients is \\(-1\\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2x + 1 = -\\frac{1}{2}x + 6 \\implies \\frac{5}{2}x = 5 \\implies x = 2, y = 5', explanation: '' }
        ], finalAnswer: 'Perpendicular; intersection at \\((2, 5)\\)' }
    },
    {
        id: 'cg1-068', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 68', difficulty: 'Foundation',
        questionText: 'A line has equation \\( \\frac{x}{3} + \\frac{y}{5} = 1 \\). Find the gradient and the y-intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange', workingLatex: 'y = 5 - \\frac{5x}{3} = -\\frac{5}{3}x + 5', explanation: '' }
        ], finalAnswer: 'Gradient = \\(-\\frac{5}{3}\\), y-intercept = \\((0, 5)\\)' }
    },
    {
        id: 'cg1-069', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 69', difficulty: 'Foundation',
        questionText: 'Find the shortest distance from \\( P(4, 1) \\) to the line \\( y = 2x + 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'The shortest distance from a point to a line is along the perpendicular. Find the equation of the line through \\(P(4, 1)\\) that is perpendicular to \\(y = 2x + 3\\).', workingLatex: '\\begin{aligned} m_{\\perp} &= -\\frac{1}{2} \\\\ y - 1 &= -\\frac{1}{2}(x - 4) \\\\ y &= -\\frac{1}{2}x + 3 \\end{aligned}', explanation: 'The given line has gradient \\(2\\), so the perpendicular has gradient \\(-\\frac{1}{2}\\) (negative reciprocal). Substitute \\(P(4, 1)\\) to find the equation.' },
            { stepNumber: 2, description: 'Find the point of intersection between the original line and the perpendicular line by solving simultaneously.', workingLatex: '\\begin{aligned} 2x + 3 &= -\\frac{1}{2}x + 3 \\\\ 2x + \\frac{1}{2}x &= 0 \\\\ \\frac{5}{2}x &= 0 \\\\ x &= 0 \\end{aligned}', explanation: 'Set the two equations equal. The \\(+3\\) cancels from both sides.' },
            { stepNumber: 3, description: 'Find the \\(y\\)-coordinate of the intersection point.', workingLatex: 'y = 2(0) + 3 = 3', explanation: 'Substitute \\(x = 0\\) into either equation. The intersection point is \\((0, 3)\\).' },
            { stepNumber: 4, description: 'Calculate the distance from \\(P(4, 1)\\) to the intersection point \\((0, 3)\\).', workingLatex: '\\begin{aligned} d &= \\sqrt{(4-0)^2 + (1-3)^2} \\\\ &= \\sqrt{16 + 4} \\\\ &= \\sqrt{20} \\\\ &= 2\\sqrt{5} \\end{aligned}', explanation: 'Use the distance formula \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\). This is the shortest distance because it is measured along the perpendicular.' }
        ], finalAnswer: '\\(2\\sqrt{5}\\)' }
    },
    {
        id: 'cg1-070', topicRef: 'CG1', topicTitle: 'Equation of a Straight Line 70', difficulty: 'Foundation',
        questionText: 'The line \\( L \\) passes through \\( A(1, -3) \\) and \\( B(5, 5) \\). Find: (a) the equation of \\( L \\); (b) the length of \\( AB \\); (c) the equation of the perpendicular bisector of \\( AB \\).',
        marks: 7, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Find the gradient of \\(L\\).', workingLatex: 'm = \\frac{5-(-3)}{5-1} = \\frac{8}{4} = 2', explanation: 'Use \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\). Take care with the negative: \\(5 - (-3) = 8\\).' },
            { stepNumber: 2, description: 'Write the equation of \\(L\\).', workingLatex: 'y - (-3) = 2(x - 1) \\quad\\quad \\Rightarrow \\quad\\quad y + 3 = 2x - 2 \\quad\\quad \\Rightarrow \\quad\\quad y = 2x - 5', explanation: 'Substitute the gradient and either point into \\(y - y_1 = m(x - x_1)\\), then simplify. Using \\(B(5, 5)\\) gives the same result.' },
            { stepNumber: 3, description: '(b) Find the length of \\(AB\\).', workingLatex: '\\begin{aligned} AB &= \\sqrt{(5-1)^2 + (5-(-3))^2} \\\\ &= \\sqrt{16 + 64} \\\\ &= \\sqrt{80} = 4\\sqrt{5} \\end{aligned}', explanation: 'Use the distance formula \\(d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\\). Simplify \\(\\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5}\\).' },
            { stepNumber: 4, description: '(c) Find the midpoint of \\(AB\\).', workingLatex: 'M = \\left(\\frac{1+5}{2},\\ \\frac{-3+5}{2}\\right) = (3,\\ 1)', explanation: 'The perpendicular bisector passes through the midpoint of \\(AB\\).' },
            { stepNumber: 5, description: 'Find the equation of the perpendicular bisector.', workingLatex: 'm_{\\perp} = -\\frac{1}{2} \\quad\\quad \\Rightarrow \\quad\\quad y - 1 = -\\frac{1}{2}(x - 3) \\quad\\quad \\Rightarrow \\quad\\quad y = -\\frac{1}{2}x + \\frac{5}{2}', explanation: 'The perpendicular bisector has gradient \\(-\\frac{1}{2}\\) (negative reciprocal of \\(2\\)) and passes through \\(M(3, 1)\\). Substitute into \\(y - y_1 = m(x - x_1)\\) and simplify.' }
        ], finalAnswer: '(a) \\(y = 2x - 5\\); (b) \\(4\\sqrt{5}\\); (c) \\(y = -\\frac{1}{2}x + \\frac{5}{2}\\)' }
    },
];
