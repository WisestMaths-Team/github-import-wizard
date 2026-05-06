import { Question } from "@/lib/types";

/**
 * Topic: Simultaneous Equations (Quadratic)
 * Ref:   ise4
 *
 * 45 questions — Foundation, Standard, and Challenge difficulty
 */
export const questions: Question[] = [

    // ── Foundation — Simultaneous Equations (Quadratic) Q1–Q12 ──────────────

    {
        id: 'ise4-001',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 01',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 2 \\) and \\( y = x^2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: 'x + 2 = x^2',
                    explanation: 'Since both expressions equal \\( y \\), set them equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - x - 2 = 0',
                    explanation: 'Subtract \\( x + 2 \\) from both sides so all terms are on one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 2)(x + 1) = 0 \\implies x = 2 \\text{ or } x = -1',
                    explanation: 'Find two numbers that multiply to \\( -2 \\) and add to \\( -1 \\): those are \\( -2 \\) and \\( +1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x + 2 \\).',
                    workingLatex: 'x = 2 \\implies y = 2 + 2 = 4 \\qquad x = -1 \\implies y = -1 + 2 = 1',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation to find \\( y \\).'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 4 \\) and \\( x = -1,\\; y = 1 \\)'
        }
    },

    {
        id: 'ise4-002',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 02',
        difficulty: 'Foundation',
        questionText: 'Show that the simultaneous equations \\( y = 2x + 1 \\) and \\( y = x^2 + 3 \\) have no real solutions.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '2x + 1 = x^2 + 3',
                    explanation: 'Both expressions equal \\( y \\), so set them equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 2x + 2 = 0',
                    explanation: 'Collect all terms on one side by subtracting \\( 2x + 1 \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the discriminant.',
                    workingLatex: 'b^2 - 4ac = (-2)^2 - 4(1)(2) = 4 - 8 = -4',
                    explanation: 'Here \\( a = 1 \\), \\( b = -2 \\), \\( c = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Interpret the discriminant.',
                    workingLatex: 'b^2 - 4ac = -4 < 0',
                    explanation: 'Since the discriminant is negative, the quadratic has no real roots, so the simultaneous equations have no real solutions. The line does not intersect the curve.'
                }
            ],
            finalAnswer: 'No real solutions (the discriminant is \\( -4 < 0 \\), so the line and curve do not intersect).'
        }
    },

    {
        id: 'ise4-003',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 03',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 3x - 1 \\) and \\( y = x^2 - x + 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '3x - 1 = x^2 - x + 3',
                    explanation: 'Set the two expressions for \\( y \\) equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 4x + 4 = 0',
                    explanation: 'Subtract \\( 3x - 1 \\) from both sides and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'This is a perfect square, so there is only one (repeated) solution. The line is tangent to the curve.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-value using \\( y = 3x - 1 \\).',
                    workingLatex: 'y = 3(2) - 1 = 5',
                    explanation: 'Substitute \\( x = 2 \\) into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 5 \\) (one repeated solution — the line is tangent to the curve).'
        }
    },

    {
        id: 'ise4-004',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 04',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 4 \\) and \\( x^2 + y^2 = 40 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x + 4 \\) into the circle equation.',
                    workingLatex: 'x^2 + (x + 4)^2 = 40',
                    explanation: 'Replace \\( y \\) in the second equation with \\( x + 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + x^2 + 8x + 16 = 40 \\implies 2x^2 + 8x - 24 = 0 \\implies x^2 + 4x - 12 = 0',
                    explanation: 'Expand \\( (x + 4)^2 \\), collect like terms, then divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x + 6)(x - 2) = 0 \\implies x = -6 \\text{ or } x = 2',
                    explanation: 'Find two numbers that multiply to \\( -12 \\) and add to \\( 4 \\): those are \\( 6 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x + 4 \\).',
                    workingLatex: 'x = -6 \\implies y = -6 + 4 = -2 \\qquad x = 2 \\implies y = 2 + 4 = 6',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Verify both solutions satisfy \\( x^2 + y^2 = 40 \\).',
                    workingLatex: '(-6)^2 + (-2)^2 = 36 + 4 = 40 \\checkmark \\qquad 2^2 + 6^2 = 4 + 36 = 40 \\checkmark',
                    explanation: 'Both pairs satisfy the circle equation.'
                }
            ],
            finalAnswer: '\\( x = -6,\\; y = -2 \\) and \\( x = 2,\\; y = 6 \\)'
        }
    },

    {
        id: 'ise4-005',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 05',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x \\) and \\( y = x^2 - 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '2x = x^2 - 3',
                    explanation: 'Both expressions equal \\( y \\), so set them equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 2x - 3 = 0',
                    explanation: 'Subtract \\( 2x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: 'Find two numbers that multiply to \\( -3 \\) and add to \\( -2 \\): those are \\( -3 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 2x \\).',
                    workingLatex: 'x = 3 \\implies y = 6 \\qquad x = -1 \\implies y = -2',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = 3,\\; y = 6 \\) and \\( x = -1,\\; y = -2 \\)'
        }
    },

    {
        id: 'ise4-006',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 06',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x - 1 \\) and \\( y = x^2 - 5x + 7 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: 'x - 1 = x^2 - 5x + 7',
                    explanation: 'Set the two expressions for \\( y \\) equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 6x + 8 = 0',
                    explanation: 'Subtract \\( x - 1 \\) from both sides and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 2)(x - 4) = 0 \\implies x = 2 \\text{ or } x = 4',
                    explanation: 'Find two numbers that multiply to \\( 8 \\) and add to \\( -6 \\): those are \\( -2 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x - 1 \\).',
                    workingLatex: 'x = 2 \\implies y = 1 \\qquad x = 4 \\implies y = 3',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 1 \\) and \\( x = 4,\\; y = 3 \\)'
        }
    },

    {
        id: 'ise4-007',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 07',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 5 \\) and \\( xy = 6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to make \\( y \\) the subject.',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Subtract \\( x \\) from both sides of \\( x + y = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the second equation.',
                    workingLatex: 'x(5 - x) = 6 \\implies 5x - x^2 = 6',
                    explanation: 'Replace \\( y \\) with \\( 5 - x \\) in \\( xy = 6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 5x + 6 = 0',
                    explanation: 'Multiply through by \\( -1 \\) and rearrange so the \\( x^2 \\) term is positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 2)(x - 3) = 0 \\implies x = 2 \\text{ or } x = 3',
                    explanation: 'Find two numbers that multiply to \\( 6 \\) and add to \\( -5 \\): those are \\( -2 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 5 - x \\).',
                    workingLatex: 'x = 2 \\implies y = 3 \\qquad x = 3 \\implies y = 2',
                    explanation: 'Substitute each \\( x \\)-value into the rearranged linear equation.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 3 \\) and \\( x = 3,\\; y = 2 \\)'
        }
    },

    {
        id: 'ise4-008',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 08',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 3 - x \\) and \\( y = x^2 + x - 5 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '3 - x = x^2 + x - 5',
                    explanation: 'Both expressions equal \\( y \\), so set them equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 + 2x - 8 = 0',
                    explanation: 'Add \\( x \\) and subtract \\( 3 \\) from both sides, then collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x + 4)(x - 2) = 0 \\implies x = -4 \\text{ or } x = 2',
                    explanation: 'Find two numbers that multiply to \\( -8 \\) and add to \\( 2 \\): those are \\( 4 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 3 - x \\).',
                    workingLatex: 'x = -4 \\implies y = 3 - (-4) = 7 \\qquad x = 2 \\implies y = 3 - 2 = 1',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = -4,\\; y = 7 \\) and \\( x = 2,\\; y = 1 \\)'
        }
    },

    {
        id: 'ise4-009',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 09',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x + 3 \\) and \\( y = x^2 + 2x - 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '2x + 3 = x^2 + 2x - 1',
                    explanation: 'Both expressions equal \\( y \\), so set them equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 4 = 0',
                    explanation: 'Subtract \\( 2x + 3 \\) from both sides. The \\( 2x \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x^2 = 4 \\implies x = 2 \\text{ or } x = -2',
                    explanation: 'This is a difference of two squares: \\( (x - 2)(x + 2) = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 2x + 3 \\).',
                    workingLatex: 'x = 2 \\implies y = 7 \\qquad x = -2 \\implies y = -1',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 7 \\) and \\( x = -2,\\; y = -1 \\)'
        }
    },

    {
        id: 'ise4-010',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 10',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 7 \\) and \\( x^2 + y^2 = 25 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to make \\( y \\) the subject.',
                    workingLatex: 'y = 7 - x',
                    explanation: 'Subtract \\( x \\) from both sides of \\( x + y = 7 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the second equation.',
                    workingLatex: 'x^2 + (7 - x)^2 = 25',
                    explanation: 'Replace \\( y \\) with \\( 7 - x \\) in \\( x^2 + y^2 = 25 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 49 - 14x + x^2 = 25 \\implies 2x^2 - 14x + 24 = 0 \\implies x^2 - 7x + 12 = 0',
                    explanation: 'Expand \\( (7 - x)^2 \\), collect like terms, then divide through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 3)(x - 4) = 0 \\implies x = 3 \\text{ or } x = 4',
                    explanation: 'Find two numbers that multiply to \\( 12 \\) and add to \\( -7 \\): those are \\( -3 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 7 - x \\).',
                    workingLatex: 'x = 3 \\implies y = 4 \\qquad x = 4 \\implies y = 3',
                    explanation: 'Substitute each \\( x \\)-value into the rearranged linear equation.'
                }
            ],
            finalAnswer: '\\( x = 3,\\; y = 4 \\) and \\( x = 4,\\; y = 3 \\)'
        }
    },

    {
        id: 'ise4-011',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 11',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 1 \\) and \\( y = 2x^2 - x - 1 \\). Give your answers in exact form.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: 'x + 1 = 2x^2 - x - 1',
                    explanation: 'Both expressions equal \\( y \\), so set them equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: '2x^2 - 2x - 2 = 0 \\implies x^2 - x - 1 = 0',
                    explanation: 'Subtract \\( x + 1 \\) from both sides, then divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 4}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}',
                    explanation: 'Here \\( a = 1 \\), \\( b = -1 \\), \\( c = -1 \\), so \\( b^2 - 4ac = 1 + 4 = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x + 1 \\).',
                    workingLatex: 'y = \\frac{1 + \\sqrt{5}}{2} + 1 = \\frac{3 + \\sqrt{5}}{2} \\qquad y = \\frac{1 - \\sqrt{5}}{2} + 1 = \\frac{3 - \\sqrt{5}}{2}',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation and simplify.'
                },
                {
                    stepNumber: 5,
                    description: 'Verify both solutions satisfy the quadratic equation \\( y = 2x^2 - x - 1 \\).',
                    workingLatex: 'x = \\tfrac{1+\\sqrt{5}}{2}:\\; 2\\!\\left(\\tfrac{1+\\sqrt{5}}{2}\\right)^{\\!2} - \\tfrac{1+\\sqrt{5}}{2} - 1 = \\tfrac{6+2\\sqrt{5}}{2} - \\tfrac{1+\\sqrt{5}}{2} - 1 = \\tfrac{3+\\sqrt{5}}{2} \\;\\checkmark',
                    explanation: 'Substituting the first \\( x \\)-value into the quadratic confirms it produces the same \\( y \\)-value. The same check works for the second pair.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{1 + \\sqrt{5}}{2},\\; y = \\dfrac{3 + \\sqrt{5}}{2} \\) and \\( x = \\dfrac{1 - \\sqrt{5}}{2},\\; y = \\dfrac{3 - \\sqrt{5}}{2} \\)'
        }
    },

    {
        id: 'ise4-012',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 12',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 4 - x \\) and \\( xy = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the product equation.',
                    workingLatex: 'x(4 - x) = 3',
                    explanation: 'Replace \\( y \\) with \\( 4 - x \\) in \\( xy = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and rearrange to form a quadratic equation equal to zero.',
                    workingLatex: '4x - x^2 = 3 \\implies x^2 - 4x + 3 = 0',
                    explanation: 'Rearrange so all terms are on one side with the \\( x^2 \\) term positive.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3',
                    explanation: 'Find two numbers that multiply to \\( 3 \\) and add to \\( -4 \\): those are \\( -1 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 4 - x \\).',
                    workingLatex: 'x = 1 \\implies y = 3 \\qquad x = 3 \\implies y = 1',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = 1,\\; y = 3 \\) and \\( x = 3,\\; y = 1 \\)'
        }
    },

    // ── Standard — Simultaneous Equations (Quadratic) Q13–Q24 ──────────────

    {
        id: 'ise4-013',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 13',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = 2x - 3 \\) and \\( x^2 + y^2 = 45 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x - 3 \\) into the circle equation.',
                    workingLatex: 'x^2 + (2x - 3)^2 = 45',
                    explanation: 'Replace \\( y \\) in the second equation with the expression from the first.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 4x^2 - 12x + 9 = 45 \\implies 5x^2 - 12x - 36 = 0',
                    explanation: 'Expand \\( (2x - 3)^2 = 4x^2 - 12x + 9 \\) and collect like terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{12 \\pm \\sqrt{144 + 720}}{10} = \\dfrac{12 \\pm \\sqrt{864}}{10} = \\dfrac{12 \\pm 12\\sqrt{6}}{10} = \\dfrac{6 \\pm 6\\sqrt{6}}{5}',
                    explanation: 'The discriminant is \\( 144 + 720 = 864 = 144 \\times 6 \\), so \\( \\sqrt{864} = 12\\sqrt{6} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 2x - 3 \\).',
                    workingLatex: 'y = 2 \\cdot \\dfrac{6 \\pm 6\\sqrt{6}}{5} - 3 = \\dfrac{12 \\pm 12\\sqrt{6}}{5} - \\dfrac{15}{5} = \\dfrac{-3 \\pm 12\\sqrt{6}}{5}',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'State the two solutions.',
                    workingLatex: '\\left(\\dfrac{6 + 6\\sqrt{6}}{5},\\; \\dfrac{-3 + 12\\sqrt{6}}{5}\\right) \\quad \\text{and} \\quad \\left(\\dfrac{6 - 6\\sqrt{6}}{5},\\; \\dfrac{-3 - 12\\sqrt{6}}{5}\\right)',
                    explanation: 'The line intersects the circle at two points.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{6 \\pm 6\\sqrt{6}}{5},\\; y = \\dfrac{-3 \\pm 12\\sqrt{6}}{5} \\)'
        }
    },

    {
        id: 'ise4-014',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 14',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 2x + y = 7 \\) and \\( x^2 - xy = 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 7 - 2x',
                    explanation: 'Express \\( y \\) in terms of \\( x \\) to substitute into the quadratic equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( x^2 - xy = 4 \\).',
                    workingLatex: 'x^2 - x(7 - 2x) = 4 \\implies x^2 - 7x + 2x^2 = 4',
                    explanation: 'Replace \\( y \\) with \\( 7 - 2x \\) and expand.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify to a quadratic in \\( x \\).',
                    workingLatex: '3x^2 - 7x - 4 = 0',
                    explanation: 'Collect like terms and move the constant to the left-hand side.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{7 \\pm \\sqrt{49 + 48}}{6} = \\dfrac{7 \\pm \\sqrt{97}}{6}',
                    explanation: 'The discriminant is \\( 49 + 48 = 97 \\), which is not a perfect square.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values.',
                    workingLatex: 'y = 7 - 2 \\cdot \\dfrac{7 \\pm \\sqrt{97}}{6} = 7 - \\dfrac{7 \\pm \\sqrt{97}}{3} = \\dfrac{21 - 7 \\mp \\sqrt{97}}{3} = \\dfrac{14 \\mp \\sqrt{97}}{3}',
                    explanation: 'Substitute each \\( x \\)-value back into \\( y = 7 - 2x \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{7 \\pm \\sqrt{97}}{6},\\; y = \\dfrac{14 \\mp \\sqrt{97}}{3} \\)'
        }
    },

    {
        id: 'ise4-015',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 15',
        difficulty: 'Standard',
        questionText: 'The line \\( y = x + k \\) passes through a point of intersection of \\( y = x^2 \\) and \\( y = 2x + 3 \\). Find the possible values of \\( k \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the points of intersection of \\( y = x^2 \\) and \\( y = 2x + 3 \\).',
                    workingLatex: 'x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0',
                    explanation: 'Set the two expressions for \\( y \\) equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise and solve.',
                    workingLatex: '(x - 3)(x + 1) = 0 \\implies x = 3 \\text{ or } x = -1',
                    explanation: 'The quadratic factorises neatly.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the \\( y \\)-coordinates.',
                    workingLatex: 'x = 3 \\implies y = 9; \\qquad x = -1 \\implies y = 1',
                    explanation: 'Substitute into \\( y = x^2 \\) to find the full coordinates: \\( (3, 9) \\) and \\( (-1, 1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute each point into \\( y = x + k \\) to find \\( k \\).',
                    workingLatex: '(3, 9): \\; 9 = 3 + k \\implies k = 6 \\qquad (-1, 1): \\; 1 = -1 + k \\implies k = 2',
                    explanation: 'Each intersection point gives a different value of \\( k \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the answer.',
                    workingLatex: 'k = 6 \\quad \\text{or} \\quad k = 2',
                    explanation: 'There are two possible values of \\( k \\), one for each intersection point.'
                }
            ],
            finalAnswer: '\\( k = 6 \\text{ or } k = 2 \\)'
        }
    },

    {
        id: 'ise4-016',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 16',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x - 2y = 1 \\) and \\( x^2 + y^2 = 29 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( x \\).',
                    workingLatex: 'x = 1 + 2y',
                    explanation: 'Express \\( x \\) in terms of \\( y \\) so we can substitute into the circle equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( x^2 + y^2 = 29 \\).',
                    workingLatex: '(1 + 2y)^2 + y^2 = 29 \\implies 1 + 4y + 4y^2 + y^2 = 29',
                    explanation: 'Expand \\( (1 + 2y)^2 \\) and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify to a quadratic in \\( y \\).',
                    workingLatex: '5y^2 + 4y - 28 = 0',
                    explanation: 'Combine like terms and subtract 29 from both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve using the quadratic formula.',
                    workingLatex: 'y = \\dfrac{-4 \\pm \\sqrt{16 + 560}}{10} = \\dfrac{-4 \\pm \\sqrt{576}}{10} = \\dfrac{-4 \\pm 24}{10}',
                    explanation: 'The discriminant is \\( 576 = 24^2 \\), giving integer solutions.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\) and \\( x \\) for each solution.',
                    workingLatex: 'y = \\dfrac{20}{10} = 2,\\; x = 5 \\qquad \\text{or} \\qquad y = \\dfrac{-28}{10} = -\\dfrac{14}{5},\\; x = 1 + 2\\!\\left(-\\dfrac{14}{5}\\right) = -\\dfrac{23}{5}',
                    explanation: 'Substitute each \\( y \\) back into \\( x = 1 + 2y \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the solutions.',
                    workingLatex: '(5,\\, 2) \\quad \\text{and} \\quad \\left(-\\dfrac{23}{5},\\, -\\dfrac{14}{5}\\right)',
                    explanation: 'The line meets the circle at two points.'
                }
            ],
            finalAnswer: '\\( (5,\\, 2) \\text{ and } \\left(-\\dfrac{23}{5},\\, -\\dfrac{14}{5}\\right) \\)'
        }
    },

    {
        id: 'ise4-017',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 17',
        difficulty: 'Standard',
        questionText: 'The line \\( y = 3x + c \\) is a tangent to the curve \\( y = x^2 + 1 \\). Find the value of \\( c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two equations equal to each other.',
                    workingLatex: 'x^2 + 1 = 3x + c \\implies x^2 - 3x + (1 - c) = 0',
                    explanation: 'At the point(s) of intersection, the \\( y \\)-values are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'State the tangency condition.',
                    workingLatex: '\\text{For a tangent, the discriminant } b^2 - 4ac = 0.',
                    explanation: 'A tangent touches the curve at exactly one point, so the quadratic has a repeated root.'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the discriminant.',
                    workingLatex: '(-3)^2 - 4(1)(1 - c) = 0 \\implies 9 - 4 + 4c = 0',
                    explanation: 'Here \\( a = 1 \\), \\( b = -3 \\), and the constant term is \\( 1 - c \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( c \\).',
                    workingLatex: '5 + 4c = 0 \\implies c = -\\dfrac{5}{4}',
                    explanation: 'Rearrange to find the value of \\( c \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify: the tangent touches at \\( x = \\frac{3}{2} \\).',
                    workingLatex: 'x^2 - 3x + \\dfrac{9}{4} = 0 \\implies \\left(x - \\dfrac{3}{2}\\right)^2 = 0 \\implies x = \\dfrac{3}{2}',
                    explanation: 'Substituting \\( c = -\\frac{5}{4} \\) confirms a repeated root, verifying tangency.'
                }
            ],
            finalAnswer: '\\( c = -\\dfrac{5}{4} \\)'
        }
    },

    {
        id: 'ise4-018',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 18',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x + y = 5 \\) and \\( x^2 - 2y^2 = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Express \\( y \\) in terms of \\( x \\) to substitute into the quadratic equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( x^2 - 2y^2 = 1 \\).',
                    workingLatex: 'x^2 - 2(5 - x)^2 = 1 \\implies x^2 - 2(25 - 10x + x^2) = 1',
                    explanation: 'Replace \\( y \\) and expand.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'x^2 - 50 + 20x - 2x^2 = 1 \\implies -x^2 + 20x - 51 = 0 \\implies x^2 - 20x + 51 = 0',
                    explanation: 'Collect like terms and multiply through by \\( -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the quadratic.',
                    workingLatex: 'x = \\dfrac{20 \\pm \\sqrt{400 - 204}}{2} = \\dfrac{20 \\pm \\sqrt{196}}{2} = \\dfrac{20 \\pm 14}{2}',
                    explanation: 'The discriminant is \\( 196 = 14^2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find both solutions.',
                    workingLatex: 'x = 17,\\; y = -12 \\qquad \\text{or} \\qquad x = 3,\\; y = 2',
                    explanation: 'Substitute each \\( x \\) back into \\( y = 5 - x \\).'
                }
            ],
            finalAnswer: '\\( (17,\\, -12) \\text{ and } (3,\\, 2) \\)'
        }
    },

    {
        id: 'ise4-019',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 19',
        difficulty: 'Standard',
        questionText: 'The line \\( y = mx + 1 \\) meets the curve \\( y = x^2 - 3x + 5 \\) at exactly one point. Find the possible values of \\( m \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the equations equal.',
                    workingLatex: 'mx + 1 = x^2 - 3x + 5 \\implies x^2 - (3 + m)x + 4 = 0',
                    explanation: 'At the point of intersection the \\( y \\)-values are equal. Rearrange to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the condition for exactly one point of intersection.',
                    workingLatex: 'b^2 - 4ac = 0',
                    explanation: 'Exactly one point means the discriminant equals zero (tangent condition).'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the discriminant.',
                    workingLatex: '(3 + m)^2 - 4(1)(4) = 0 \\implies (3 + m)^2 = 16',
                    explanation: 'Here \\( a = 1 \\), \\( b = -(3 + m) \\), \\( c = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( m \\).',
                    workingLatex: '3 + m = \\pm 4 \\implies m = 1 \\quad \\text{or} \\quad m = -7',
                    explanation: 'Take the square root of both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'State the answer.',
                    workingLatex: 'm = 1 \\quad \\text{or} \\quad m = -7',
                    explanation: 'Both values give a line tangent to the parabola.'
                }
            ],
            finalAnswer: '\\( m = 1 \\text{ or } m = -7 \\)'
        }
    },

    {
        id: 'ise4-020',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 20',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 3x - y = 4 \\) and \\( x^2 + y^2 = 26 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 3x - 4',
                    explanation: 'Express \\( y \\) in terms of \\( x \\) to substitute into the circle equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( x^2 + y^2 = 26 \\).',
                    workingLatex: 'x^2 + (3x - 4)^2 = 26 \\implies x^2 + 9x^2 - 24x + 16 = 26',
                    explanation: 'Expand \\( (3x - 4)^2 = 9x^2 - 24x + 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify to a quadratic.',
                    workingLatex: '10x^2 - 24x - 10 = 0 \\implies 5x^2 - 12x - 5 = 0',
                    explanation: 'Combine like terms and divide through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{12 \\pm \\sqrt{144 + 100}}{10} = \\dfrac{12 \\pm \\sqrt{244}}{10} = \\dfrac{12 \\pm 2\\sqrt{61}}{10} = \\dfrac{6 \\pm \\sqrt{61}}{5}',
                    explanation: 'The discriminant is \\( 244 = 4 \\times 61 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values.',
                    workingLatex: 'y = 3 \\cdot \\dfrac{6 \\pm \\sqrt{61}}{5} - 4 = \\dfrac{18 \\pm 3\\sqrt{61}}{5} - \\dfrac{20}{5} = \\dfrac{-2 \\pm 3\\sqrt{61}}{5}',
                    explanation: 'Substitute each \\( x \\) into \\( y = 3x - 4 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the solutions.',
                    workingLatex: '\\left(\\dfrac{6 + \\sqrt{61}}{5},\\; \\dfrac{-2 + 3\\sqrt{61}}{5}\\right) \\quad \\text{and} \\quad \\left(\\dfrac{6 - \\sqrt{61}}{5},\\; \\dfrac{-2 - 3\\sqrt{61}}{5}\\right)',
                    explanation: 'The line intersects the circle at two points.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{6 \\pm \\sqrt{61}}{5},\\; y = \\dfrac{-2 \\pm 3\\sqrt{61}}{5} \\)'
        }
    },

    {
        id: 'ise4-021',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 21',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = x + 2 \\) and \\( x^2 + y^2 - 6x - 4y = 3 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x + 2 \\) into the circle equation.',
                    workingLatex: 'x^2 + (x + 2)^2 - 6x - 4(x + 2) = 3',
                    explanation: 'Replace every \\( y \\) with \\( x + 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand all brackets.',
                    workingLatex: 'x^2 + x^2 + 4x + 4 - 6x - 4x - 8 = 3',
                    explanation: 'Expand \\( (x + 2)^2 = x^2 + 4x + 4 \\) and \\( 4(x + 2) = 4x + 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify to a quadratic.',
                    workingLatex: '2x^2 - 6x - 4 = 3 \\implies 2x^2 - 6x - 7 = 0',
                    explanation: 'Collect like terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{6 \\pm \\sqrt{36 + 56}}{4} = \\dfrac{6 \\pm \\sqrt{92}}{4} = \\dfrac{6 \\pm 2\\sqrt{23}}{4} = \\dfrac{3 \\pm \\sqrt{23}}{2}',
                    explanation: 'The discriminant is \\( 36 + 56 = 92 = 4 \\times 23 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the \\( y \\)-values using \\( y = x + 2 \\).',
                    workingLatex: 'y = \\dfrac{3 \\pm \\sqrt{23}}{2} + 2 = \\dfrac{7 \\pm \\sqrt{23}}{2}',
                    explanation: 'Add 2 to each \\( x \\)-value.'
                },
                {
                    stepNumber: 6,
                    description: 'State the solutions.',
                    workingLatex: '\\left(\\dfrac{3 + \\sqrt{23}}{2},\\; \\dfrac{7 + \\sqrt{23}}{2}\\right) \\quad \\text{and} \\quad \\left(\\dfrac{3 - \\sqrt{23}}{2},\\; \\dfrac{7 - \\sqrt{23}}{2}\\right)',
                    explanation: 'The line meets the circle at two points.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{3 \\pm \\sqrt{23}}{2},\\; y = \\dfrac{7 \\pm \\sqrt{23}}{2} \\)'
        }
    },

    {
        id: 'ise4-022',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 22',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the points where the line \\( y = 2x + 1 \\) meets the circle \\( x^2 + y^2 = 10 \\). Show that \\( 5x^2 + 4x - 9 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x + 1 \\) into the circle equation.',
                    workingLatex: 'x^2 + (2x + 1)^2 = 10',
                    explanation: 'Replace \\( y \\) with \\( 2x + 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify to show the required quadratic.',
                    workingLatex: 'x^2 + 4x^2 + 4x + 1 = 10 \\implies 5x^2 + 4x - 9 = 0',
                    explanation: 'Expand \\( (2x + 1)^2 = 4x^2 + 4x + 1 \\) and collect terms. This is the required result.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(5x + 9)(x - 1) = 0',
                    explanation: 'Find two numbers that multiply to \\( 5 \\times (-9) = -45 \\) and add to \\( 4 \\): these are \\( 9 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\) and find \\( y \\).',
                    workingLatex: 'x = 1,\\; y = 3 \\qquad \\text{or} \\qquad x = -\\dfrac{9}{5},\\; y = 2\\!\\left(-\\dfrac{9}{5}\\right) + 1 = -\\dfrac{13}{5}',
                    explanation: 'Substitute each \\( x \\)-value into \\( y = 2x + 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the coordinates.',
                    workingLatex: '(1,\\, 3) \\quad \\text{and} \\quad \\left(-\\dfrac{9}{5},\\, -\\dfrac{13}{5}\\right)',
                    explanation: 'The line meets the circle at two points.'
                }
            ],
            finalAnswer: '\\( (1,\\, 3) \\text{ and } \\left(-\\dfrac{9}{5},\\, -\\dfrac{13}{5}\\right) \\)'
        }
    },

    {
        id: 'ise4-023',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 23',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x + 2y = 10 \\) and \\( xy = 12 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( x \\).',
                    workingLatex: 'x = 10 - 2y',
                    explanation: 'Express \\( x \\) in terms of \\( y \\) by subtracting \\( 2y \\) from both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 12 \\).',
                    workingLatex: '(10 - 2y)y = 12 \\implies 10y - 2y^2 = 12',
                    explanation: 'Replace \\( x \\) in the product equation with \\( 10 - 2y \\) and expand.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange to standard form.',
                    workingLatex: '2y^2 - 10y + 12 = 0 \\implies y^2 - 5y + 6 = 0',
                    explanation: 'Move all terms to one side and divide through by 2 to simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '(y - 2)(y - 3) = 0 \\implies y = 2 \\text{ or } y = 3',
                    explanation: 'Find two numbers that multiply to 6 and add to \\( -5 \\): these are \\( -2 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( x \\)-values.',
                    workingLatex: 'y = 2 \\implies x = 10 - 4 = 6; \\qquad y = 3 \\implies x = 10 - 6 = 4',
                    explanation: 'Substitute each \\( y \\)-value back into \\( x = 10 - 2y \\) to find the matching \\( x \\).'
                }
            ],
            finalAnswer: '\\( (6,\\, 2) \\text{ and } (4,\\, 3) \\)'
        }
    },

    {
        id: 'ise4-024',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 24',
        difficulty: 'Standard',
        questionText: 'The line \\( y = x + k \\) is a tangent to the circle \\( x^2 + y^2 = 8 \\). Find the possible values of \\( k \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x + k \\) into the circle equation.',
                    workingLatex: 'x^2 + (x + k)^2 = 8 \\implies x^2 + x^2 + 2kx + k^2 = 8',
                    explanation: 'Replace \\( y \\) with \\( x + k \\) and expand the squared bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify to standard quadratic form.',
                    workingLatex: '2x^2 + 2kx + (k^2 - 8) = 0',
                    explanation: 'Collect like terms and move the constant to the left-hand side.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the tangency condition: discriminant equals zero.',
                    workingLatex: '(2k)^2 - 4(2)(k^2 - 8) = 0 \\implies 4k^2 - 8k^2 + 64 = 0',
                    explanation: 'For a tangent, the quadratic in \\( x \\) has exactly one repeated root, so \\( b^2 - 4ac = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '-4k^2 + 64 = 0 \\implies k^2 = 16 \\implies k = \\pm 4',
                    explanation: 'Rearrange to \\( 4k^2 = 64 \\), divide by 4, and take the square root of both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'State the answer.',
                    workingLatex: 'k = 4 \\quad \\text{or} \\quad k = -4',
                    explanation: 'There are two tangent lines with gradient 1, one above and one below the circle.'
                }
            ],
            finalAnswer: '\\( k = 4 \\text{ or } k = -4 \\)'
        }
    },

    // ─── STANDARD / CHALLENGE: Q25–Q35 (6–8 marks each, exam-style) ────────────

    {
        id: 'ise4-025',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 25',
        difficulty: 'Standard',
        questionText: 'The line \\( y = 2x + c \\) is tangent to the curve \\( y = x^2 - 4x + 7 \\). Find the value of \\( c \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two equations equal to each other.',
                    workingLatex: '2x + c = x^2 - 4x + 7',
                    explanation: 'At the point of tangency the \\( y \\)-values are equal, so we equate the right-hand sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to a standard quadratic in \\( x \\).',
                    workingLatex: 'x^2 - 6x + (7 - c) = 0',
                    explanation: 'Collecting all terms on one side gives a quadratic equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the tangency condition: the discriminant equals zero.',
                    workingLatex: 'b^2 - 4ac = 0 \\implies (-6)^2 - 4(1)(7 - c) = 0',
                    explanation: 'A tangent line touches the curve at exactly one point, so the quadratic has a repeated root, meaning \\( \\Delta = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and simplify.',
                    workingLatex: '36 - 28 + 4c = 0 \\implies 8 + 4c = 0',
                    explanation: 'Evaluating \\( 36 - 4(7 - c) = 36 - 28 + 4c \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( c \\).',
                    workingLatex: '4c = -8 \\implies c = -2',
                    explanation: 'Dividing both sides by 4 gives the required value.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the coordinates of the point of tangency.',
                    workingLatex: 'x^2 - 6x + 9 = 0 \\implies (x - 3)^2 = 0 \\implies x = 3,\\; y = 2(3) - 2 = 4',
                    explanation: 'Substituting \\( c = -2 \\) back into the quadratic gives a repeated root at \\( x = 3 \\), and \\( y = 4 \\), confirming the tangent touches the curve at \\( (3,\\, 4) \\).'
                }
            ],
            finalAnswer: '\\( c = -2 \\)'
        }
    },

    {
        id: 'ise4-026',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 26',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the points where the line \\( y = 3 - 2x \\) meets the circle \\( x^2 + y^2 = 5 \\). Verify your answers geometrically.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the circle equation.',
                    workingLatex: 'x^2 + (3 - 2x)^2 = 5',
                    explanation: 'Replace \\( y \\) in the circle equation with \\( 3 - 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 9 - 12x + 4x^2 = 5 \\implies 5x^2 - 12x + 4 = 0',
                    explanation: 'Expanding \\( (3 - 2x)^2 = 9 - 12x + 4x^2 \\) and collecting terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '5x^2 - 12x + 4 = (5x - 2)(x - 2) = 0',
                    explanation: 'We look for two factors of \\( 5 \\times 4 = 20 \\) that add to \\( -12 \\): these are \\( -10 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{2}{5} \\quad \\text{or} \\quad x = 2',
                    explanation: 'Setting each factor to zero gives the two \\( x \\)-values.'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values.',
                    workingLatex: 'x = \\tfrac{2}{5}: \\; y = 3 - \\tfrac{4}{5} = \\tfrac{11}{5} \\qquad x = 2: \\; y = 3 - 4 = -1',
                    explanation: 'Substituting each \\( x \\)-value back into \\( y = 3 - 2x \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the intersection points.',
                    workingLatex: '\\left(\\tfrac{2}{5},\\, \\tfrac{11}{5}\\right) \\quad \\text{and} \\quad (2,\\, -1)',
                    explanation: 'Writing the two solutions as coordinate pairs.'
                },
                {
                    stepNumber: 7,
                    description: 'Verify geometrically: check both points lie on the circle.',
                    workingLatex: '\\left(\\tfrac{2}{5}\\right)^2 + \\left(\\tfrac{11}{5}\\right)^2 = \\tfrac{4 + 121}{25} = 5 \\;\\checkmark \\qquad 2^2 + (-1)^2 = 4 + 1 = 5 \\;\\checkmark',
                    explanation: 'Substituting both points into \\( x^2 + y^2 \\) confirms each equals 5, so they lie on the circle of radius \\( \\sqrt{5} \\) centred at the origin.'
                }
            ],
            finalAnswer: '\\( \\left(\\dfrac{2}{5},\\, \\dfrac{11}{5}\\right) \\) and \\( (2,\\, -1) \\)'
        }
    },

    {
        id: 'ise4-027',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 27',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x^2 + y^2 = 25 \\) and \\( x - y = 1 \\). Show all your working.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to express \\( x \\) in terms of \\( y \\).',
                    workingLatex: 'x = y + 1',
                    explanation: 'Adding \\( y \\) to both sides of \\( x - y = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: '(y + 1)^2 + y^2 = 25',
                    explanation: 'Replacing \\( x \\) with \\( y + 1 \\) in \\( x^2 + y^2 = 25 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'y^2 + 2y + 1 + y^2 = 25 \\implies 2y^2 + 2y - 24 = 0 \\implies y^2 + y - 12 = 0',
                    explanation: 'Expanding, collecting like terms, and dividing through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve for \\( y \\).',
                    workingLatex: '(y + 4)(y - 3) = 0 \\implies y = -4 \\text{ or } y = 3',
                    explanation: 'We need two numbers that multiply to \\( -12 \\) and add to \\( 1 \\): these are \\( 4 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( x \\)-values.',
                    workingLatex: 'y = -4: \\; x = -3 \\qquad y = 3: \\; x = 4',
                    explanation: 'Using \\( x = y + 1 \\) for each value of \\( y \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the solutions as coordinate pairs.',
                    workingLatex: '(-3,\\, -4) \\quad \\text{and} \\quad (4,\\, 3)',
                    explanation: 'Both pairs satisfy both original equations.'
                }
            ],
            finalAnswer: '\\( (-3,\\, -4) \\) and \\( (4,\\, 3) \\)'
        }
    },

    {
        id: 'ise4-028',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 28',
        difficulty: 'Standard',
        questionText: 'The line \\( y = mx + 3 \\) meets the curve \\( y = 2x^2 + 1 \\) at two distinct points. Find the range of values of \\( m \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two equations equal.',
                    workingLatex: 'mx + 3 = 2x^2 + 1',
                    explanation: 'At intersection points the \\( y \\)-values are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to standard form.',
                    workingLatex: '2x^2 - mx - 2 = 0',
                    explanation: 'Moving all terms to one side: \\( 2x^2 - mx + 1 - 3 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Identify \\( a \\), \\( b \\), \\( c \\) for the discriminant.',
                    workingLatex: 'a = 2, \\quad b = -m, \\quad c = -2',
                    explanation: 'Comparing \\( 2x^2 - mx - 2 = 0 \\) with the standard form \\( ax^2 + bx + c = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'For two distinct intersections the discriminant must be positive.',
                    workingLatex: '\\Delta = (-m)^2 - 4(2)(-2) > 0 \\implies m^2 + 16 > 0',
                    explanation: 'Two distinct real roots require \\( b^2 - 4ac > 0 \\). Here \\( \\Delta = m^2 - 4(2)(-2) = m^2 + 16 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Analyse the inequality.',
                    workingLatex: 'm^2 \\geq 0 \\implies m^2 + 16 \\geq 16 > 0',
                    explanation: 'Since \\( m^2 \\) is non-negative for all real \\( m \\), the expression \\( m^2 + 16 \\) is always at least 16, which is strictly positive.'
                },
                {
                    stepNumber: 6,
                    description: 'State the conclusion.',
                    workingLatex: '\\Delta > 0 \\text{ for all } m \\in \\mathbb{R}',
                    explanation: 'The discriminant is always positive, so the line meets the curve at two distinct points for every real value of \\( m \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Write the final answer in set notation.',
                    workingLatex: 'm \\in \\mathbb{R}',
                    explanation: 'There are no restrictions on \\( m \\); all real values satisfy the condition.'
                }
            ],
            finalAnswer: '\\( m \\in \\mathbb{R} \\) (all real values of \\( m \\))'
        }
    },

    {
        id: 'ise4-029',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 29',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = x + k \\) meets the circle \\( x^2 + y^2 = 18 \\).\n\n(a) Show that the \\( x \\)-coordinates of any points of intersection satisfy \\( 2x^2 + 2kx + k^2 - 18 = 0 \\).\n\n(b) Find the values of \\( k \\) for which the line is a tangent to the circle.\n\n(c) For the positive value of \\( k \\), find the coordinates of the point of contact.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( y = x + k \\) into the circle equation.',
                    workingLatex: 'x^2 + (x + k)^2 = 18',
                    explanation: 'Replace \\( y \\) in \\( x^2 + y^2 = 18 \\) with \\( x + k \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Expand and simplify.',
                    workingLatex: 'x^2 + x^2 + 2kx + k^2 = 18 \\implies 2x^2 + 2kx + k^2 - 18 = 0',
                    explanation: 'Expanding \\( (x + k)^2 = x^2 + 2kx + k^2 \\), combining like terms, and rearranging gives the required result.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Apply the tangency condition \\( \\Delta = 0 \\).',
                    workingLatex: '(2k)^2 - 4(2)(k^2 - 18) = 0 \\implies 4k^2 - 8k^2 + 144 = 0',
                    explanation: 'For tangency, the discriminant of \\( 2x^2 + 2kx + (k^2 - 18) = 0 \\) must equal zero.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Solve for \\( k \\).',
                    workingLatex: '-4k^2 + 144 = 0 \\implies k^2 = 36 \\implies k = \\pm 6',
                    explanation: 'Rearranging and solving gives two values of \\( k \\).'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( k = 6 \\) into the quadratic from part (a).',
                    workingLatex: '2x^2 + 12x + (36 - 18) = 0 \\implies 2x^2 + 12x + 18 = 0',
                    explanation: 'Replacing \\( k \\) with 6 in \\( 2x^2 + 2kx + k^2 - 18 = 0 \\).'
                },
                {
                    stepNumber: 6,
                    description: '(c) Simplify and find the repeated root.',
                    workingLatex: 'x^2 + 6x + 9 = 0 \\implies (x + 3)^2 = 0 \\implies x = -3',
                    explanation: 'Dividing through by 2 and factorising the resulting perfect square.'
                },
                {
                    stepNumber: 7,
                    description: '(c) Find the \\( y \\)-coordinate.',
                    workingLatex: 'y = x + 6 = -3 + 6 = 3',
                    explanation: 'Substituting \\( x = -3 \\) into \\( y = x + k \\) with \\( k = 6 \\).'
                },
                {
                    stepNumber: 8,
                    description: '(c) State the point of contact and verify.',
                    workingLatex: '(-3,\\, 3) \\qquad \\text{Check: } (-3)^2 + 3^2 = 9 + 9 = 18 \\;\\checkmark',
                    explanation: 'The point of tangency when \\( k = 6 \\) is \\( (-3,\\, 3) \\), which lies on the circle as verified.'
                }
            ],
            finalAnswer: '\\( \\text{(a) Shown. (b) } k = 6 \\text{ or } k = -6 \\text{. (c) } (-3,\\, 3) \\)'
        }
    },

    {
        id: 'ise4-030',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 30',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 2x + y = 8 \\) and \\( x^2 + 2xy = 24 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 8 - 2x',
                    explanation: 'Subtracting \\( 2x \\) from both sides of \\( 2x + y = 8 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: 'x^2 + 2x(8 - 2x) = 24',
                    explanation: 'Replacing \\( y \\) with \\( 8 - 2x \\) in \\( x^2 + 2xy = 24 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 16x - 4x^2 = 24 \\implies -3x^2 + 16x - 24 = 0 \\implies 3x^2 - 16x + 24 = 0',
                    explanation: 'Expanding, collecting like terms, and multiplying through by \\( -1 \\) to make the leading coefficient positive.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the discriminant.',
                    workingLatex: '\\Delta = (-16)^2 - 4(3)(24) = 256 - 288 = -32',
                    explanation: 'Using \\( b^2 - 4ac \\) with \\( a = 3 \\), \\( b = -16 \\), \\( c = 24 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the discriminant.',
                    workingLatex: '\\Delta = -32 < 0',
                    explanation: 'Since the discriminant is negative, the quadratic equation has no real roots.'
                },
                {
                    stepNumber: 6,
                    description: 'State the conclusion.',
                    workingLatex: '\\text{No real solutions.}',
                    explanation: 'The simultaneous equations have no real solutions, meaning the line \\( 2x + y = 8 \\) does not intersect the curve \\( x^2 + 2xy = 24 \\).'
                }
            ],
            finalAnswer: '\\( \\text{No real solutions (the line does not meet the curve).} \\)'
        }
    },

    {
        id: 'ise4-031',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 31',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the points where the line \\( y = 4x - 5 \\) intersects the circle \\( (x - 2)^2 + (y - 3)^2 = 20 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 4x - 5 \\) into the circle equation.',
                    workingLatex: '(x - 2)^2 + (4x - 5 - 3)^2 = 20',
                    explanation: 'Replacing \\( y \\) with \\( 4x - 5 \\) in \\( (x - 2)^2 + (y - 3)^2 = 20 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the bracket and expand.',
                    workingLatex: '(x - 2)^2 + (4x - 8)^2 = 20',
                    explanation: 'Since \\( 4x - 5 - 3 = 4x - 8 \\). Note that \\( 4x - 8 = 4(x - 2) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factor and simplify.',
                    workingLatex: '(x - 2)^2 + 16(x - 2)^2 = 20 \\implies 17(x - 2)^2 = 20',
                    explanation: 'Combining the two terms gives \\( 17(x - 2)^2 = 20 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '(x - 2)^2 = \\frac{20}{17} \\implies x - 2 = \\pm\\sqrt{\\frac{20}{17}} = \\pm\\frac{2\\sqrt{5}}{\\sqrt{17}}',
                    explanation: 'Taking square roots of both sides and simplifying \\( \\sqrt{20} = 2\\sqrt{5} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the \\( x \\)-coordinates in rationalised form.',
                    workingLatex: 'x = 2 \\pm \\frac{2\\sqrt{85}}{17}',
                    explanation: 'Rationalising: \\( \\frac{2\\sqrt{5}}{\\sqrt{17}} = \\frac{2\\sqrt{5} \\cdot \\sqrt{17}}{17} = \\frac{2\\sqrt{85}}{17} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find the corresponding \\( y \\)-coordinates using \\( y = 4x - 5 \\).',
                    workingLatex: 'y = 4\\!\\left(2 \\pm \\frac{2\\sqrt{85}}{17}\\right) - 5 = 3 \\pm \\frac{8\\sqrt{85}}{17}',
                    explanation: 'Substituting back: \\( y = 8 \\pm \\frac{8\\sqrt{85}}{17} - 5 = 3 \\pm \\frac{8\\sqrt{85}}{17} \\).'
                },
                {
                    stepNumber: 7,
                    description: 'State the two intersection points.',
                    workingLatex: '\\left(2 + \\frac{2\\sqrt{85}}{17},\\; 3 + \\frac{8\\sqrt{85}}{17}\\right) \\quad \\text{and} \\quad \\left(2 - \\frac{2\\sqrt{85}}{17},\\; 3 - \\frac{8\\sqrt{85}}{17}\\right)',
                    explanation: 'These are the exact coordinates of the two intersection points.'
                }
            ],
            finalAnswer: '\\( \\left(2 + \\dfrac{2\\sqrt{85}}{17},\\; 3 + \\dfrac{8\\sqrt{85}}{17}\\right) \\) and \\( \\left(2 - \\dfrac{2\\sqrt{85}}{17},\\; 3 - \\dfrac{8\\sqrt{85}}{17}\\right) \\)'
        }
    },

    {
        id: 'ise4-032',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 32',
        difficulty: 'Challenge',
        questionText: '(a) Solve the simultaneous equations \\( y = x + 3 \\) and \\( y = x^2 + x - 1 \\).\n\n(b) Find the exact distance between the two intersection points.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set the two expressions for \\( y \\) equal.',
                    workingLatex: 'x + 3 = x^2 + x - 1',
                    explanation: 'Since both expressions equal \\( y \\), they equal each other at intersection points.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Simplify.',
                    workingLatex: '0 = x^2 - 4 \\implies x^2 = 4 \\implies x = \\pm 2',
                    explanation: 'Subtracting \\( x + 3 \\) from both sides: \\( x^2 + x - 1 - x - 3 = x^2 - 4 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(a) Find the \\( y \\)-coordinates.',
                    workingLatex: 'x = 2: \\; y = 5 \\qquad x = -2: \\; y = 1',
                    explanation: 'Using \\( y = x + 3 \\) for each \\( x \\)-value.'
                },
                {
                    stepNumber: 4,
                    description: '(a) State the intersection points.',
                    workingLatex: '(2,\\, 5) \\quad \\text{and} \\quad (-2,\\, 1)',
                    explanation: 'These are the two points where the line meets the parabola.'
                },
                {
                    stepNumber: 5,
                    description: '(a) Verify both points satisfy the quadratic equation.',
                    workingLatex: 'x = 2: \\; 4 + 2 - 1 = 5 \\;\\checkmark \\qquad x = -2: \\; 4 - 2 - 1 = 1 \\;\\checkmark',
                    explanation: 'Substituting each \\( x \\)-value into \\( y = x^2 + x - 1 \\) confirms both points lie on the parabola as well as on the line.'
                },
                {
                    stepNumber: 6,
                    description: '(b) Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(2 - (-2))^2 + (5 - 1)^2} = \\sqrt{4^2 + 4^2} = \\sqrt{16 + 16} = \\sqrt{32}',
                    explanation: 'Using \\( d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\) with the two points.'
                },
                {
                    stepNumber: 7,
                    description: '(b) Simplify the surd.',
                    workingLatex: '\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}',
                    explanation: 'Writing \\( \\sqrt{32} \\) in its simplest surd form by extracting the factor \\( 16 \\).'
                },
                {
                    stepNumber: 8,
                    description: '(b) State the exact distance.',
                    workingLatex: 'd = 4\\sqrt{2}',
                    explanation: 'The exact distance between the two intersection points is \\( 4\\sqrt{2} \\).'
                }
            ],
            finalAnswer: '\\( \\text{(a) } (2,\\, 5) \\text{ and } (-2,\\, 1) \\text{. (b) } 4\\sqrt{2} \\)'
        }
    },

    {
        id: 'ise4-033',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 33',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = x^2 + bx + c \\) passes through the points \\( (1,\\, 3) \\) and \\( (3,\\, 7) \\). By forming and solving a pair of simultaneous equations, find the values of \\( b \\) and \\( c \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( (1,\\, 3) \\) into the equation of the curve.',
                    workingLatex: '3 = 1 + b + c \\implies b + c = 2 \\quad \\cdots\\, (1)',
                    explanation: 'Setting \\( x = 1 \\) and \\( y = 3 \\) in \\( y = x^2 + bx + c \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (3,\\, 7) \\) into the equation of the curve.',
                    workingLatex: '7 = 9 + 3b + c \\implies 3b + c = -2 \\quad \\cdots\\, (2)',
                    explanation: 'Setting \\( x = 3 \\) and \\( y = 7 \\) in \\( y = x^2 + bx + c \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract equation (1) from equation (2).',
                    workingLatex: '(3b + c) - (b + c) = -2 - 2 \\implies 2b = -4',
                    explanation: 'Eliminating \\( c \\) by subtracting.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = -2',
                    explanation: 'Dividing both sides by 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute back to find \\( c \\).',
                    workingLatex: '-2 + c = 2 \\implies c = 4',
                    explanation: 'Using equation (1) with \\( b = -2 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Verify with the second point.',
                    workingLatex: 'y = 9 + 3(-2) + 4 = 9 - 6 + 4 = 7 \\;\\checkmark',
                    explanation: 'Checking \\( (3,\\, 7) \\) satisfies \\( y = x^2 - 2x + 4 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'State the equation of the curve.',
                    workingLatex: 'y = x^2 - 2x + 4',
                    explanation: 'Substituting the values \\( b = -2 \\) and \\( c = 4 \\) back into \\( y = x^2 + bx + c \\) gives the full equation of the curve.'
                }
            ],
            finalAnswer: '\\( b = -2 \\) and \\( c = 4 \\)'
        }
    },

    {
        id: 'ise4-034',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 34',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x^2 + xy = 10 \\) and \\( x + y = 5 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Subtracting \\( x \\) from both sides of \\( x + y = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: 'x^2 + x(5 - x) = 10',
                    explanation: 'Replacing \\( y \\) with \\( 5 - x \\) in \\( x^2 + xy = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 5x - x^2 = 10 \\implies 5x = 10',
                    explanation: 'The \\( x^2 \\) terms cancel, leaving a linear equation. This means the system has exactly one solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 2',
                    explanation: 'Dividing both sides by 5.'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 5 - 2 = 3',
                    explanation: 'Substituting \\( x = 2 \\) back into \\( y = 5 - x \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Verify the solution in both original equations.',
                    workingLatex: 'x^2 + xy = 4 + 6 = 10 \\;\\checkmark \\qquad x + y = 2 + 3 = 5 \\;\\checkmark',
                    explanation: 'Substituting \\( x = 2 \\) and \\( y = 3 \\) into both original equations confirms the solution is correct.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 3 \\)'
        }
    },

    {
        id: 'ise4-035',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 35',
        difficulty: 'Challenge',
        questionText: 'A circle has equation \\( x^2 + y^2 = 50 \\). The line \\( y = x + k \\) is a tangent to the circle.\n\n(a) Show that \\( k^2 = 100 \\).\n\n(b) Find both values of \\( k \\).\n\n(c) Find the coordinates of both points of tangency.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( y = x + k \\) into the circle equation.',
                    workingLatex: 'x^2 + (x + k)^2 = 50 \\implies x^2 + x^2 + 2kx + k^2 = 50',
                    explanation: 'Replacing \\( y \\) with \\( x + k \\) and expanding.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Simplify to standard quadratic form.',
                    workingLatex: '2x^2 + 2kx + k^2 - 50 = 0',
                    explanation: 'Collecting all terms on one side.'
                },
                {
                    stepNumber: 3,
                    description: '(a) Apply the tangency condition \\( \\Delta = 0 \\).',
                    workingLatex: '(2k)^2 - 4(2)(k^2 - 50) = 0 \\implies 4k^2 - 8k^2 + 400 = 0 \\implies -4k^2 + 400 = 0',
                    explanation: 'For tangency the quadratic in \\( x \\) has equal roots, so the discriminant is zero.'
                },
                {
                    stepNumber: 4,
                    description: '(a) Conclude the result.',
                    workingLatex: '4k^2 = 400 \\implies k^2 = 100',
                    explanation: 'Dividing both sides by 4 gives the required result.'
                },
                {
                    stepNumber: 5,
                    description: '(b) Solve \\( k^2 = 100 \\).',
                    workingLatex: 'k = 10 \\quad \\text{or} \\quad k = -10',
                    explanation: 'Taking square roots of both sides.'
                },
                {
                    stepNumber: 6,
                    description: '(c) For \\( k = 10 \\): find the point of tangency.',
                    workingLatex: '2x^2 + 20x + 50 = 0 \\implies x^2 + 10x + 25 = 0 \\implies (x + 5)^2 = 0 \\implies x = -5,\\; y = 5',
                    explanation: 'Substituting \\( k = 10 \\), dividing by 2, factorising the perfect square, and using \\( y = x + 10 \\).'
                },
                {
                    stepNumber: 7,
                    description: '(c) For \\( k = -10 \\): find the point of tangency.',
                    workingLatex: '2x^2 - 20x + 50 = 0 \\implies x^2 - 10x + 25 = 0 \\implies (x - 5)^2 = 0 \\implies x = 5,\\; y = 5 - 10 = -5',
                    explanation: 'Substituting \\( k = -10 \\), dividing by 2, factorising the perfect square, and using \\( y = x - 10 \\).'
                },
                {
                    stepNumber: 8,
                    description: '(c) State both points and verify they lie on the circle.',
                    workingLatex: '(-5)^2 + 5^2 = 50 \\;\\checkmark \\qquad 5^2 + (-5)^2 = 50 \\;\\checkmark',
                    explanation: 'Both tangent points \\( (-5,\\, 5) \\) and \\( (5,\\, -5) \\) satisfy \\( x^2 + y^2 = 50 \\), confirming they lie on the circle.'
                }
            ],
            finalAnswer: '(a) Shown. (b) \\( k = 10 \\) or \\( k = -10 \\). (c) \\( (-5,\\, 5) \\) and \\( (5,\\, -5) \\)'
        }
    },

    // ── Foundation — Simultaneous Equations (Quadratic) Q36–Q39 ──────────────

    {
        id: 'ise4-036',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 36',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 5 - x \\) and \\( y = x^2 - x - 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions for \\( y \\) equal to each other.',
                    workingLatex: '5 - x = x^2 - x - 1',
                    explanation: 'Both expressions equal \\( y \\), so equate them.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and rearrange.',
                    workingLatex: '5 = x^2 - 1 \\implies x^2 = 6',
                    explanation: 'The \\( -x \\) terms cancel, then add 1 to both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\sqrt{6} \\quad \\text{or} \\quad x = -\\sqrt{6}',
                    explanation: 'Taking square roots of both sides gives two values.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 5 - x \\).',
                    workingLatex: 'x = \\sqrt{6} \\implies y = 5 - \\sqrt{6} \\qquad x = -\\sqrt{6} \\implies y = 5 + \\sqrt{6}',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = \\sqrt{6},\\; y = 5 - \\sqrt{6} \\) and \\( x = -\\sqrt{6},\\; y = 5 + \\sqrt{6} \\)'
        }
    },

    {
        id: 'ise4-037',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 37',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x - 1 \\) and \\( y = x^2 - 4x + 5 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions for \\( y \\) equal.',
                    workingLatex: '2x - 1 = x^2 - 4x + 5',
                    explanation: 'Both expressions equal \\( y \\), so equate them.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 - 6x + 6 = 0',
                    explanation: 'Subtract \\( 2x - 1 \\) from both sides and collect like terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{6 \\pm \\sqrt{36 - 24}}{2} = \\dfrac{6 \\pm \\sqrt{12}}{2} = \\dfrac{6 \\pm 2\\sqrt{3}}{2} = 3 \\pm \\sqrt{3}',
                    explanation: 'Using \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\) with \\( a = 1 \\), \\( b = -6 \\), \\( c = 6 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 2x - 1 \\).',
                    workingLatex: 'x = 3 + \\sqrt{3} \\implies y = 5 + 2\\sqrt{3} \\qquad x = 3 - \\sqrt{3} \\implies y = 5 - 2\\sqrt{3}',
                    explanation: 'Substitute each \\( x \\)-value back into \\( y = 2x - 1 \\).'
                }
            ],
            finalAnswer: '\\( x = 3 + \\sqrt{3},\\; y = 5 + 2\\sqrt{3} \\) and \\( x = 3 - \\sqrt{3},\\; y = 5 - 2\\sqrt{3} \\)'
        }
    },

    {
        id: 'ise4-038',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 38',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 6 \\) and \\( xy = 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 6 - x',
                    explanation: 'Subtract \\( x \\) from both sides of \\( x + y = 6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 8 \\).',
                    workingLatex: 'x(6 - x) = 8 \\implies 6x - x^2 = 8',
                    explanation: 'Replace \\( y \\) with \\( 6 - x \\) and expand.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange and factorise.',
                    workingLatex: 'x^2 - 6x + 8 = 0 \\implies (x - 2)(x - 4) = 0',
                    explanation: 'Multiply through by \\( -1 \\) and factorise: two numbers that multiply to 8 and add to \\( -6 \\) are \\( -2 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values.',
                    workingLatex: 'x = 2 \\implies y = 4 \\qquad x = 4 \\implies y = 2',
                    explanation: 'Substitute each \\( x \\)-value back into \\( y = 6 - x \\).'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 4 \\) and \\( x = 4,\\; y = 2 \\)'
        }
    },

    {
        id: 'ise4-039',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 39',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 3 \\) and \\( x^2 + y^2 = 45 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x + 3 \\) into \\( x^2 + y^2 = 45 \\).',
                    workingLatex: 'x^2 + (x + 3)^2 = 45',
                    explanation: 'Replace \\( y \\) with \\( x + 3 \\) in the circle equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + x^2 + 6x + 9 = 45 \\implies 2x^2 + 6x - 36 = 0 \\implies x^2 + 3x - 18 = 0',
                    explanation: 'Expand \\( (x + 3)^2 \\), collect like terms, and divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: '(x + 6)(x - 3) = 0 \\implies x = -6 \\text{ or } x = 3',
                    explanation: 'Find two numbers that multiply to \\( -18 \\) and add to \\( 3 \\): those are \\( 6 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x + 3 \\).',
                    workingLatex: 'x = -6 \\implies y = -3 \\qquad x = 3 \\implies y = 6',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation.'
                }
            ],
            finalAnswer: '\\( x = -6,\\; y = -3 \\) and \\( x = 3,\\; y = 6 \\)'
        }
    },

    // ── Standard — Simultaneous Equations (Quadratic) Q40–Q43 ──────────────

    {
        id: 'ise4-040',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 40',
        difficulty: 'Standard',
        questionText: 'The line \\( y = 2x + k \\) is a tangent to the curve \\( y = x^2 + 2 \\). Find the value of \\( k \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions for \\( y \\) equal.',
                    workingLatex: 'x^2 + 2 = 2x + k \\implies x^2 - 2x + (2 - k) = 0',
                    explanation: 'At intersection points the \\( y \\)-values are equal; rearrange to standard form.'
                },
                {
                    stepNumber: 2,
                    description: 'State the tangency condition.',
                    workingLatex: '\\text{For tangency, } b^2 - 4ac = 0.',
                    explanation: 'A tangent meets the curve at exactly one point, so the discriminant equals zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the discriminant and set it equal to zero.',
                    workingLatex: '(-2)^2 - 4(1)(2 - k) = 0 \\implies 4 - 8 + 4k = 0',
                    explanation: 'Here \\( a = 1 \\), \\( b = -2 \\), \\( c = 2 - k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '-4 + 4k = 0 \\implies 4k = 4 \\implies k = 1',
                    explanation: 'Rearranging gives the required value of \\( k \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify: the tangent touches at \\( x = 1 \\).',
                    workingLatex: 'x^2 - 2x + 1 = 0 \\implies (x - 1)^2 = 0 \\implies x = 1',
                    explanation: 'Substituting \\( k = 1 \\) confirms a repeated root, verifying tangency.'
                }
            ],
            finalAnswer: '\\( k = 1 \\)'
        }
    },

    {
        id: 'ise4-041',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 41',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 2x - y = 3 \\) and \\( x^2 + y^2 = 14 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 2x - 3',
                    explanation: 'Subtract 3 and rearrange \\( 2x - y = 3 \\) to express \\( y \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( x^2 + y^2 = 14 \\).',
                    workingLatex: 'x^2 + (2x - 3)^2 = 14 \\implies x^2 + 4x^2 - 12x + 9 = 14',
                    explanation: 'Replace \\( y \\) with \\( 2x - 3 \\) and expand the square.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify to standard quadratic form.',
                    workingLatex: '5x^2 - 12x + 9 - 14 = 0 \\implies 5x^2 - 12x - 5 = 0',
                    explanation: 'Collect like terms on one side.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the discriminant and simplify the surd.',
                    workingLatex: 'b^2 - 4ac = (-12)^2 - 4(5)(-5) = 144 + 100 = 244 = 4 \\times 61',
                    explanation: 'Compute the discriminant first; \\( 244 = 4 \\times 61 \\), so \\( \\sqrt{244} = 2\\sqrt{61} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Apply the quadratic formula to find \\( x \\).',
                    workingLatex: 'x = \\dfrac{12 \\pm 2\\sqrt{61}}{10} = \\dfrac{6 \\pm \\sqrt{61}}{5}',
                    explanation: 'Using \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\) with \\( a = 5 \\), \\( b = -12 \\), \\( c = -5 \\), then cancelling the common factor of 2.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the corresponding \\( y \\)-values.',
                    workingLatex: 'y = 2x - 3 = 2 \\cdot \\dfrac{6 \\pm \\sqrt{61}}{5} - 3 = \\dfrac{12 \\pm 2\\sqrt{61} - 15}{5} = \\dfrac{-3 \\pm 2\\sqrt{61}}{5}',
                    explanation: 'Substitute each \\( x \\)-value into \\( y = 2x - 3 \\) and simplify over a common denominator.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{6 + \\sqrt{61}}{5},\\; y = \\dfrac{-3 + 2\\sqrt{61}}{5} \\) and \\( x = \\dfrac{6 - \\sqrt{61}}{5},\\; y = \\dfrac{-3 - 2\\sqrt{61}}{5} \\)'
        }
    },

    {
        id: 'ise4-042',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 42',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( y = x - 2 \\) and \\( x^2 + xy - 10 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x - 2 \\) into \\( x^2 + xy - 10 = 0 \\).',
                    workingLatex: 'x^2 + x(x - 2) - 10 = 0',
                    explanation: 'Replace \\( y \\) with \\( x - 2 \\) in the quadratic equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + x^2 - 2x - 10 = 0 \\implies 2x^2 - 2x - 10 = 0 \\implies x^2 - x - 5 = 0',
                    explanation: 'Expand, collect like terms, and divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{1 \\pm \\sqrt{1 + 20}}{2} = \\dfrac{1 \\pm \\sqrt{21}}{2}',
                    explanation: 'Using \\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\) with \\( a = 1 \\), \\( b = -1 \\), \\( c = -5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x - 2 \\).',
                    workingLatex: 'y = \\dfrac{1 \\pm \\sqrt{21}}{2} - 2 = \\dfrac{1 \\pm \\sqrt{21} - 4}{2} = \\dfrac{-3 \\pm \\sqrt{21}}{2}',
                    explanation: 'Substitute each \\( x \\)-value into \\( y = x - 2 \\), writing \\( 2 = \\frac{4}{2} \\) to combine over a common denominator.'
                },
                {
                    stepNumber: 5,
                    description: 'State both solution pairs.',
                    workingLatex: '\\left(\\dfrac{1 + \\sqrt{21}}{2},\\; \\dfrac{-3 + \\sqrt{21}}{2}\\right) \\quad \\text{and} \\quad \\left(\\dfrac{1 - \\sqrt{21}}{2},\\; \\dfrac{-3 - \\sqrt{21}}{2}\\right)',
                    explanation: 'Pair each \\( x \\)-value with its corresponding \\( y \\)-value to give the two intersection points.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{1 + \\sqrt{21}}{2},\\; y = \\dfrac{-3 + \\sqrt{21}}{2} \\) and \\( x = \\dfrac{1 - \\sqrt{21}}{2},\\; y = \\dfrac{-3 - \\sqrt{21}}{2} \\)'
        }
    },

    {
        id: 'ise4-043',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 43',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x + 3y = 7 \\) and \\( x^2 + y^2 = 13 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( x \\).',
                    workingLatex: 'x = 7 - 3y',
                    explanation: 'Subtract \\( 3y \\) from both sides of \\( x + 3y = 7 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( x^2 + y^2 = 13 \\).',
                    workingLatex: '(7 - 3y)^2 + y^2 = 13 \\implies 49 - 42y + 9y^2 + y^2 = 13',
                    explanation: 'Replace \\( x \\) with \\( 7 - 3y \\) and expand.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify to standard quadratic form.',
                    workingLatex: '10y^2 - 42y + 36 = 0 \\implies 5y^2 - 21y + 18 = 0',
                    explanation: 'Collect like terms, subtract 13, and divide through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve for \\( y \\).',
                    workingLatex: '(5y - 6)(y - 3) = 0 \\implies y = \\dfrac{6}{5} \\text{ or } y = 3',
                    explanation: 'Find factors of \\( 5 \\times 18 = 90 \\) that add to \\( -21 \\): those are \\( -6 \\) and \\( -15 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( x \\)-values using \\( x = 7 - 3y \\).',
                    workingLatex: 'y = \\dfrac{6}{5} \\implies x = 7 - \\dfrac{18}{5} = \\dfrac{35 - 18}{5} = \\dfrac{17}{5} \\qquad y = 3 \\implies x = 7 - 9 = -2',
                    explanation: 'Substitute each \\( y \\)-value back into the linear equation, writing \\( 7 = \\frac{35}{5} \\) for the first pair.'
                },
                {
                    stepNumber: 6,
                    description: 'Verify both solutions satisfy \\( x^2 + y^2 = 13 \\).',
                    workingLatex: '\\left(\\dfrac{17}{5}\\right)^{\\!2} + \\left(\\dfrac{6}{5}\\right)^{\\!2} = \\dfrac{289 + 36}{25} = \\dfrac{325}{25} = 13 \\;\\checkmark \\qquad (-2)^2 + 3^2 = 4 + 9 = 13 \\;\\checkmark',
                    explanation: 'Substituting both solution pairs into the circle equation confirms they are correct.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{17}{5},\\; y = \\dfrac{6}{5} \\) and \\( x = -2,\\; y = 3 \\)'
        }
    },

    // ── Challenge — Simultaneous Equations (Quadratic) Q44–Q45 ──────────────

    {
        id: 'ise4-044',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 44',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = mx - 1 \\) is a tangent to the circle \\( (x - 2)^2 + y^2 = 5 \\). Find the values of \\( m \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = mx - 1 \\) into the circle equation.',
                    workingLatex: '(x - 2)^2 + (mx - 1)^2 = 5',
                    explanation: 'Replace \\( y \\) with \\( mx - 1 \\) in \\( (x - 2)^2 + y^2 = 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and collect terms.',
                    workingLatex: 'x^2 - 4x + 4 + m^2x^2 - 2mx + 1 = 5 \\implies (1 + m^2)x^2 - (4 + 2m)x = 0',
                    explanation: 'Expand both brackets, collect like terms, and subtract 5 from both sides (note \\( 4 + 1 - 5 = 0 \\)).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic in \\( x \\).',
                    workingLatex: 'x\\bigl[(1 + m^2)x - (4 + 2m)\\bigr] = 0',
                    explanation: 'Factor out \\( x \\). The two roots are \\( x = 0 \\) and \\( x = \\dfrac{4 + 2m}{1 + m^2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the tangency condition: a repeated root.',
                    workingLatex: '\\text{Tangency requires a single intersection, so both roots must coincide: } \\dfrac{4 + 2m}{1 + m^2} = 0',
                    explanation: 'For the line to be tangent, the two roots must be equal. Since one root is \\( x = 0 \\), the other must also equal 0, so we need the numerator \\( 4 + 2m = 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( m \\).',
                    workingLatex: '4 + 2m = 0 \\implies 2m = -4 \\implies m = -2',
                    explanation: 'Solving the linear equation gives the single value of \\( m \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Verify using the perpendicular distance method.',
                    workingLatex: '\\text{Distance from } (2,\\, 0) \\text{ to } mx - y - 1 = 0\\!: \\quad d = \\dfrac{|2m - 1|}{\\sqrt{m^2 + 1}}',
                    explanation: 'The distance from the centre \\( (2,\\, 0) \\) to the line \\( mx - y - 1 = 0 \\) must equal the radius \\( \\sqrt{5} \\) for tangency.'
                },
                {
                    stepNumber: 7,
                    description: 'Confirm the result by solving the distance equation.',
                    workingLatex: '(2m - 1)^2 = 5(m^2 + 1) \\implies 4m^2 - 4m + 1 = 5m^2 + 5 \\implies m^2 + 4m + 4 = 0 \\implies (m + 2)^2 = 0 \\implies m = -2',
                    explanation: 'Squaring both sides and rearranging gives a perfect square, confirming the only value is \\( m = -2 \\).'
                }
            ],
            finalAnswer: '\\( m = -2 \\)'
        }
    },

    {
        id: 'ise4-045',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 45',
        difficulty: 'Challenge',
        questionText: '(a) Solve the simultaneous equations \\( y = x + 1 \\) and \\( y = x^2 - 2x + 3 \\).\n\n(b) Find the midpoint of the two intersection points.\n\n(c) Show that the perpendicular bisector of the line segment joining the two intersection points passes through the point \\( (3,\\, 1) \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set the two expressions for \\( y \\) equal.',
                    workingLatex: 'x + 1 = x^2 - 2x + 3',
                    explanation: 'Both expressions equal \\( y \\), so equate the right-hand sides.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Rearrange to standard quadratic form.',
                    workingLatex: 'x^2 - 3x + 2 = 0',
                    explanation: 'Subtract \\( x + 1 \\) from both sides: \\( x^2 - 2x + 3 - x - 1 = x^2 - 3x + 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(a) Factorise and solve for \\( x \\).',
                    workingLatex: '(x - 1)(x - 2) = 0 \\implies x = 1 \\text{ or } x = 2',
                    explanation: 'Find two numbers that multiply to 2 and add to \\( -3 \\): those are \\( -1 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(a) Find the corresponding \\( y \\)-values using \\( y = x + 1 \\).',
                    workingLatex: 'x = 1 \\implies y = 2 \\qquad x = 2 \\implies y = 3',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation. The intersection points are \\( (1,\\, 2) \\) and \\( (2,\\, 3) \\).'
                },
                {
                    stepNumber: 5,
                    description: '(b) Find the midpoint of \\( (1,\\, 2) \\) and \\( (2,\\, 3) \\).',
                    workingLatex: 'M = \\left(\\dfrac{1 + 2}{2},\\, \\dfrac{2 + 3}{2}\\right) = \\left(\\dfrac{3}{2},\\, \\dfrac{5}{2}\\right)',
                    explanation: 'Use the midpoint formula \\( M = \\left(\\frac{x_1 + x_2}{2},\\, \\frac{y_1 + y_2}{2}\\right) \\).'
                },
                {
                    stepNumber: 6,
                    description: '(c) Find the gradient of the line segment joining the two points.',
                    workingLatex: 'm = \\dfrac{3 - 2}{2 - 1} = 1',
                    explanation: 'The gradient of the chord equals the gradient of the line \\( y = x + 1 \\), as expected.'
                },
                {
                    stepNumber: 7,
                    description: '(c) Find the gradient and equation of the perpendicular bisector.',
                    workingLatex: 'm_{\\perp} = -1 \\qquad y - \\dfrac{5}{2} = -1\\!\\left(x - \\dfrac{3}{2}\\right) \\implies y = -x + \\dfrac{3}{2} + \\dfrac{5}{2} = -x + 4',
                    explanation: 'The perpendicular gradient is the negative reciprocal of 1. Use the point-gradient form with the midpoint.'
                },
                {
                    stepNumber: 8,
                    description: '(c) Verify that \\( (3,\\, 1) \\) lies on the perpendicular bisector.',
                    workingLatex: 'y = -(3) + 4 = 1 \\quad \\checkmark',
                    explanation: 'Substituting \\( x = 3 \\) into \\( y = -x + 4 \\) gives \\( y = 1 \\), confirming that \\( (3,\\, 1) \\) lies on the perpendicular bisector as required.'
                }
            ],
            finalAnswer: '(a) \\( (1,\\, 2) \\) and \\( (2,\\, 3) \\). (b) \\( \\left(\\dfrac{3}{2},\\, \\dfrac{5}{2}\\right) \\). (c) The perpendicular bisector is \\( y = -x + 4 \\); at \\( x = 3 \\), \\( y = 1 \\), so \\( (3,\\, 1) \\) lies on it.'
        }
    },

    // ── Foundation — Simultaneous Equations (Quadratic) Q46–Q48 ──────────────

    {
        id: 'ise4-046',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 46',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 3x \\) and \\( y = x^2 + 2x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '3x = x^2 + 2x',
                    explanation: 'Since both expressions equal \\( y \\), set them equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: 'x^2 + 2x - 3x = 0 \\implies x^2 - x = 0',
                    explanation: 'Subtract \\( 3x \\) from both sides to collect all terms on one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: 'x(x - 1) = 0 \\implies x = 0 \\text{ or } x = 1',
                    explanation: 'Take out a common factor of \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 3x \\).',
                    workingLatex: 'x = 0 \\implies y = 0 \\qquad x = 1 \\implies y = 3',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation to find \\( y \\).'
                }
            ],
            finalAnswer: '\\( x = 0,\\; y = 0 \\) and \\( x = 1,\\; y = 3 \\)'
        }
    },

    {
        id: 'ise4-047',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 47',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 1 - 2x \\) and \\( y = x^2 + 4x + 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute the linear equation into the quadratic equation.',
                    workingLatex: '1 - 2x = x^2 + 4x + 1',
                    explanation: 'Since both expressions equal \\( y \\), set them equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation equal to zero.',
                    workingLatex: '0 = x^2 + 4x + 1 - 1 + 2x \\implies x^2 + 6x = 0',
                    explanation: 'Move all terms to one side by subtracting \\( 1 - 2x \\) from both sides and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: 'x(x + 6) = 0 \\implies x = 0 \\text{ or } x = -6',
                    explanation: 'Take out a common factor of \\( x \\). Setting each factor equal to zero gives the two solutions.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 1 - 2x \\).',
                    workingLatex: 'x = 0 \\implies y = 1 - 2(0) = 1 \\qquad x = -6 \\implies y = 1 - 2(-6) = 1 + 12 = 13',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation to find \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the two solution pairs.',
                    workingLatex: '(0,\\, 1) \\quad \\text{and} \\quad (-6,\\, 13)',
                    explanation: 'The two points of intersection are \\( (0,\\, 1) \\) and \\( (-6,\\, 13) \\).'
                }
            ],
            finalAnswer: '\\( x = 0,\\; y = 1 \\) and \\( x = -6,\\; y = 13 \\)'
        }
    },

    {
        id: 'ise4-048',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 48',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x - y = 2 \\) and \\( x^2 + y^2 = 20 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to express \\( x \\) in terms of \\( y \\).',
                    workingLatex: 'x = y + 2',
                    explanation: 'Adding \\( y \\) to both sides gives \\( x \\) in terms of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: '(y + 2)^2 + y^2 = 20',
                    explanation: 'Replace \\( x \\) with \\( y + 2 \\) in \\( x^2 + y^2 = 20 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'y^2 + 4y + 4 + y^2 = 20 \\implies 2y^2 + 4y + 4 = 20 \\implies 2y^2 + 4y - 16 = 0 \\implies y^2 + 2y - 8 = 0',
                    explanation: 'Expand \\( (y + 2)^2 \\), collect like terms, subtract 20 from both sides, and divide through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve for \\( y \\).',
                    workingLatex: '(y + 4)(y - 2) = 0 \\implies y = -4 \\text{ or } y = 2',
                    explanation: 'Find two numbers that multiply to \\( -8 \\) and add to \\( 2 \\): those are \\( 4 \\) and \\( -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( x \\)-values using \\( x = y + 2 \\).',
                    workingLatex: 'y = -4 \\implies x = -2 \\qquad y = 2 \\implies x = 4',
                    explanation: 'Substitute each \\( y \\)-value back into \\( x = y + 2 \\).'
                }
            ],
            finalAnswer: '\\( x = -2,\\; y = -4 \\) and \\( x = 4,\\; y = 2 \\)'
        }
    },

    // ── Standard — Simultaneous Equations (Quadratic) Q49–Q52 ──────────────

    {
        id: 'ise4-049',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 49',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the points where the line \\( y = 3x + 2 \\) meets the circle \\( (x - 1)^2 + (y - 2)^2 = 10 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 3x + 2 \\) into the circle equation.',
                    workingLatex: '(x - 1)^2 + (3x + 2 - 2)^2 = 10',
                    explanation: 'Replace \\( y \\) with \\( 3x + 2 \\) in \\( (x - 1)^2 + (y - 2)^2 = 10 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify and expand.',
                    workingLatex: '(x - 1)^2 + (3x)^2 = 10 \\implies x^2 - 2x + 1 + 9x^2 = 10',
                    explanation: 'Note that \\( 3x + 2 - 2 = 3x \\). Expand both squared terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Form a quadratic equation and solve.',
                    workingLatex: '10x^2 - 2x + 1 = 10 \\implies 10x^2 - 2x - 9 = 0',
                    explanation: 'Collect like terms and subtract 10 from both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\dfrac{2 \\pm \\sqrt{4 + 360}}{20} = \\dfrac{2 \\pm \\sqrt{364}}{20} = \\dfrac{2 \\pm 2\\sqrt{91}}{20} = \\dfrac{1 \\pm \\sqrt{91}}{10}',
                    explanation: 'Using \\( a = 10 \\), \\( b = -2 \\), \\( c = -9 \\). The discriminant is \\( 4 + 360 = 364 = 4 \\times 91 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = 3x + 2 \\).',
                    workingLatex: 'y = 3 \\cdot \\dfrac{1 \\pm \\sqrt{91}}{10} + 2 = \\dfrac{3 \\pm 3\\sqrt{91}}{10} + \\dfrac{20}{10} = \\dfrac{23 \\pm 3\\sqrt{91}}{10}',
                    explanation: 'Substitute each \\( x \\)-value back into the linear equation and combine the fractions.'
                },
                {
                    stepNumber: 6,
                    description: 'State the two points of intersection.',
                    workingLatex: '\\left(\\dfrac{1 + \\sqrt{91}}{10},\\; \\dfrac{23 + 3\\sqrt{91}}{10}\\right) \\quad \\text{and} \\quad \\left(\\dfrac{1 - \\sqrt{91}}{10},\\; \\dfrac{23 - 3\\sqrt{91}}{10}\\right)',
                    explanation: 'Pair each \\( x \\)-value with its corresponding \\( y \\)-value to give the coordinates of the two intersection points.'
                }
            ],
            finalAnswer: '\\( \\left(\\dfrac{1 + \\sqrt{91}}{10},\\; \\dfrac{23 + 3\\sqrt{91}}{10}\\right) \\) and \\( \\left(\\dfrac{1 - \\sqrt{91}}{10},\\; \\dfrac{23 - 3\\sqrt{91}}{10}\\right) \\)'
        }
    },

    {
        id: 'ise4-050',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 50',
        difficulty: 'Standard',
        questionText: 'The line \\( y = kx + 2 \\) does not meet the curve \\( y = x^2 + 3 \\). Find the range of values of \\( k \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions for \\( y \\) equal.',
                    workingLatex: 'kx + 2 = x^2 + 3',
                    explanation: 'At points of intersection, \\( y = kx + 2 \\) and \\( y = x^2 + 3 \\) give the same \\( y \\)-value.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to a quadratic in \\( x \\).',
                    workingLatex: 'x^2 - kx + 1 = 0',
                    explanation: 'Subtract \\( kx + 2 \\) from both sides: \\( x^2 - kx + 3 - 2 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write down the discriminant.',
                    workingLatex: '\\Delta = (-k)^2 - 4(1)(1) = k^2 - 4',
                    explanation: 'For the quadratic \\( x^2 - kx + 1 = 0 \\), we have \\( a = 1 \\), \\( b = -k \\), \\( c = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the condition for no real solutions.',
                    workingLatex: 'k^2 - 4 < 0 \\implies k^2 < 4',
                    explanation: 'For the line not to meet the curve, the quadratic must have no real roots, so the discriminant must be negative.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve the inequality.',
                    workingLatex: '-2 < k < 2',
                    explanation: 'Taking the square root: \\( |k| < 2 \\), which gives \\( -2 < k < 2 \\).'
                }
            ],
            finalAnswer: '\\( -2 < k < 2 \\)'
        }
    },

    {
        id: 'ise4-051',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 51',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 2x + 3y = 12 \\) and \\( xy = 5 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to express \\( x \\) in terms of \\( y \\).',
                    workingLatex: 'x = \\dfrac{12 - 3y}{2}',
                    explanation: 'Subtract \\( 3y \\) from both sides and divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 5 \\).',
                    workingLatex: '\\dfrac{12 - 3y}{2} \\cdot y = 5 \\implies \\dfrac{y(12 - 3y)}{2} = 5',
                    explanation: 'Replace \\( x \\) with \\( \\dfrac{12 - 3y}{2} \\) in the product equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply through by 2 and expand.',
                    workingLatex: '12y - 3y^2 = 10 \\implies 3y^2 - 12y + 10 = 0',
                    explanation: 'Multiply both sides by 2, expand, and rearrange so the quadratic equals zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'y = \\dfrac{12 \\pm \\sqrt{144 - 120}}{6} = \\dfrac{12 \\pm \\sqrt{24}}{6} = \\dfrac{12 \\pm 2\\sqrt{6}}{6} = \\dfrac{6 \\pm \\sqrt{6}}{3}',
                    explanation: 'Using \\( a = 3 \\), \\( b = -12 \\), \\( c = 10 \\). The discriminant is \\( 144 - 120 = 24 = 4 \\times 6 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( x \\)-values using \\( x = \\dfrac{12 - 3y}{2} \\).',
                    workingLatex: 'x = \\dfrac{12 - 3 \\cdot \\dfrac{6 \\pm \\sqrt{6}}{3}}{2} = \\dfrac{12 - (6 \\pm \\sqrt{6})}{2} = \\dfrac{6 \\mp \\sqrt{6}}{2}',
                    explanation: 'Substitute each \\( y \\)-value back into the rearranged linear equation and simplify.'
                },
                {
                    stepNumber: 6,
                    description: 'State the two solution pairs.',
                    workingLatex: '\\left(\\dfrac{6 - \\sqrt{6}}{2},\\; \\dfrac{6 + \\sqrt{6}}{3}\\right) \\quad \\text{and} \\quad \\left(\\dfrac{6 + \\sqrt{6}}{2},\\; \\dfrac{6 - \\sqrt{6}}{3}\\right)',
                    explanation: 'Pair each \\( x \\)-value with its corresponding \\( y \\)-value. Note that the signs of the surd terms are opposite in each pair.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{6 - \\sqrt{6}}{2},\\; y = \\dfrac{6 + \\sqrt{6}}{3} \\) and \\( x = \\dfrac{6 + \\sqrt{6}}{2},\\; y = \\dfrac{6 - \\sqrt{6}}{3} \\)'
        }
    },

    {
        id: 'ise4-052',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 52',
        difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( x^2 + y^2 = 41 \\) and \\( x - y = 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation to express \\( x \\) in terms of \\( y \\).',
                    workingLatex: 'x = y + 3',
                    explanation: 'Adding \\( y \\) to both sides gives \\( x \\) in terms of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: '(y + 3)^2 + y^2 = 41',
                    explanation: 'Replace \\( x \\) with \\( y + 3 \\) in \\( x^2 + y^2 = 41 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'y^2 + 6y + 9 + y^2 = 41 \\implies 2y^2 + 6y + 9 = 41 \\implies 2y^2 + 6y - 32 = 0 \\implies y^2 + 3y - 16 = 0',
                    explanation: 'Expand \\( (y + 3)^2 \\), collect like terms, subtract 41 from both sides, and divide through by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'y = \\dfrac{-3 \\pm \\sqrt{9 + 64}}{2} = \\dfrac{-3 \\pm \\sqrt{73}}{2}',
                    explanation: 'Using \\( a = 1 \\), \\( b = 3 \\), \\( c = -16 \\). The discriminant is \\( 9 + 64 = 73 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the corresponding \\( x \\)-values using \\( x = y + 3 \\).',
                    workingLatex: 'x = \\dfrac{-3 \\pm \\sqrt{73}}{2} + 3 = \\dfrac{-3 \\pm \\sqrt{73} + 6}{2} = \\dfrac{3 \\pm \\sqrt{73}}{2}',
                    explanation: 'Substitute each \\( y \\)-value back into \\( x = y + 3 \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{3 + \\sqrt{73}}{2},\\; y = \\dfrac{-3 + \\sqrt{73}}{2} \\) and \\( x = \\dfrac{3 - \\sqrt{73}}{2},\\; y = \\dfrac{-3 - \\sqrt{73}}{2} \\)'
        }
    },

    // ── Challenge — Simultaneous Equations (Quadratic) Q53–Q55 ──────────────

    {
        id: 'ise4-053',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 53',
        difficulty: 'Challenge',
        questionText: 'The line \\( y = x + c \\) meets the circle \\( x^2 + y^2 = 2 \\).\n\n(a) Show that the \\( x \\)-coordinates of any points of intersection satisfy \\( 2x^2 + 2cx + c^2 - 2 = 0 \\).\n\n(b) Hence find the values of \\( c \\) for which the line is a tangent to the circle.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( y = x + c \\) into the circle equation.',
                    workingLatex: 'x^2 + (x + c)^2 = 2',
                    explanation: 'Replace \\( y \\) in \\( x^2 + y^2 = 2 \\) with \\( x + c \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Expand and simplify.',
                    workingLatex: 'x^2 + x^2 + 2cx + c^2 = 2 \\implies 2x^2 + 2cx + c^2 - 2 = 0',
                    explanation: 'Expanding \\( (x + c)^2 = x^2 + 2cx + c^2 \\), combining the two \\( x^2 \\) terms, and subtracting 2 from both sides gives the required result.'
                },
                {
                    stepNumber: 3,
                    description: '(a) Conclude the proof.',
                    workingLatex: '\\text{Hence the } x\\text{-coordinates satisfy } 2x^2 + 2cx + c^2 - 2 = 0 \\quad \\text{as required.}',
                    explanation: 'This completes part (a). The quadratic in \\( x \\) is in the required form with coefficients depending on \\( c \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Write down the discriminant of the quadratic.',
                    workingLatex: '\\Delta = (2c)^2 - 4(2)(c^2 - 2) = 4c^2 - 8c^2 + 16 = -4c^2 + 16',
                    explanation: 'For the quadratic \\( 2x^2 + 2cx + (c^2 - 2) = 0 \\), we have \\( a = 2 \\), \\( b = 2c \\), \\( c_{\\text{coeff}} = c^2 - 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: '(b) Apply the tangency condition \\( \\Delta = 0 \\).',
                    workingLatex: '-4c^2 + 16 = 0 \\implies 4c^2 = 16 \\implies c^2 = 4',
                    explanation: 'For the line to be a tangent, the quadratic must have exactly one repeated root, so the discriminant must equal zero.'
                },
                {
                    stepNumber: 6,
                    description: '(b) Solve for \\( c \\).',
                    workingLatex: 'c^2 = 4 \\implies c = \\pm 2',
                    explanation: 'Taking square roots of both sides gives two values of \\( c \\).'
                },
                {
                    stepNumber: 7,
                    description: '(b) State the final answer.',
                    workingLatex: 'c = 2 \\quad \\text{or} \\quad c = -2',
                    explanation: 'The line \\( y = x + 2 \\) and the line \\( y = x - 2 \\) are both tangent to the circle \\( x^2 + y^2 = 2 \\). These are the two parallel tangent lines with gradient 1.'
                }
            ],
            finalAnswer: '(a) Shown. (b) \\( c = 2 \\) or \\( c = -2 \\)'
        }
    },

    {
        id: 'ise4-054',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 54',
        difficulty: 'Challenge',
        questionText: 'The curve \\( y = ax^2 + bx + c \\) passes through the points \\( (-1,\\, 6) \\), \\( (0,\\, 3) \\), and \\( (2,\\, 3) \\). By forming and solving simultaneous equations, find the values of \\( a \\), \\( b \\), and \\( c \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( (0,\\, 3) \\) into the equation.',
                    workingLatex: '3 = a(0)^2 + b(0) + c \\implies c = 3',
                    explanation: 'Setting \\( x = 0 \\) and \\( y = 3 \\) immediately gives the value of \\( c \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (-1,\\, 6) \\) into the equation.',
                    workingLatex: '6 = a(-1)^2 + b(-1) + 3 \\implies a - b + 3 = 6 \\implies a - b = 3 \\quad \\cdots (1)',
                    explanation: 'Setting \\( x = -1 \\) and \\( y = 6 \\), and using \\( c = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( (2,\\, 3) \\) into the equation.',
                    workingLatex: '3 = a(2)^2 + b(2) + 3 \\implies 4a + 2b + 3 = 3 \\implies 4a + 2b = 0 \\implies 2a + b = 0 \\quad \\cdots (2)',
                    explanation: 'Setting \\( x = 2 \\) and \\( y = 3 \\), and using \\( c = 3 \\). Dividing through by 2 simplifies the equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve equations (1) and (2) simultaneously.',
                    workingLatex: '(1) + (2): \\quad (a - b) + (2a + b) = 3 + 0 \\implies 3a = 3 \\implies a = 1',
                    explanation: 'Adding the two equations eliminates \\( b \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( a = 1 \\) back to find \\( b \\).',
                    workingLatex: '2(1) + b = 0 \\implies b = -2',
                    explanation: 'Using equation (2) with \\( a = 1 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the final values.',
                    workingLatex: 'a = 1, \\quad b = -2, \\quad c = 3',
                    explanation: 'So the curve is \\( y = x^2 - 2x + 3 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Verify the solution by checking all three points.',
                    workingLatex: 'y(-1) = 1 + 2 + 3 = 6 \\; \\checkmark \\qquad y(0) = 3 \\; \\checkmark \\qquad y(2) = 4 - 4 + 3 = 3 \\; \\checkmark',
                    explanation: 'Substituting each given point into \\( y = x^2 - 2x + 3 \\) confirms the values of \\( a \\), \\( b \\), and \\( c \\) are correct.'
                }
            ],
            finalAnswer: '\\( a = 1 \\), \\( b = -2 \\), \\( c = 3 \\)'
        }
    },

    {
        id: 'ise4-055',
        topicRef: 'ise4',
        topicTitle: 'Simultaneous Equations (Quadratic) 55',
        difficulty: 'Challenge',
        questionText: '(a) Solve the simultaneous equations \\( y = 3 - x \\) and \\( x^2 + 2y^2 = 12 \\).\n\n(b) Find the exact distance between the two points of intersection.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( y = 3 - x \\) into the quadratic equation.',
                    workingLatex: 'x^2 + 2(3 - x)^2 = 12',
                    explanation: 'Replace \\( y \\) with \\( 3 - x \\) in \\( x^2 + 2y^2 = 12 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Expand and simplify.',
                    workingLatex: 'x^2 + 2(9 - 6x + x^2) = 12 \\implies x^2 + 18 - 12x + 2x^2 = 12 \\implies 3x^2 - 12x + 6 = 0',
                    explanation: 'Expand \\( (3 - x)^2 = 9 - 6x + x^2 \\), multiply by 2, collect like terms, and subtract 12.'
                },
                {
                    stepNumber: 3,
                    description: '(a) Divide by 3 and solve using the quadratic formula.',
                    workingLatex: 'x^2 - 4x + 2 = 0 \\implies x = \\dfrac{4 \\pm \\sqrt{16 - 8}}{2} = \\dfrac{4 \\pm \\sqrt{8}}{2} = \\dfrac{4 \\pm 2\\sqrt{2}}{2} = 2 \\pm \\sqrt{2}',
                    explanation: 'Dividing through by 3 gives a simpler quadratic. The discriminant is \\( 16 - 8 = 8 = 4 \\times 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(a) Find the corresponding \\( y \\)-values using \\( y = 3 - x \\).',
                    workingLatex: 'x = 2 + \\sqrt{2} \\implies y = 3 - (2 + \\sqrt{2}) = 1 - \\sqrt{2} \\qquad x = 2 - \\sqrt{2} \\implies y = 3 - (2 - \\sqrt{2}) = 1 + \\sqrt{2}',
                    explanation: 'Substitute each \\( x \\)-value back into \\( y = 3 - x \\).'
                },
                {
                    stepNumber: 5,
                    description: '(a) State the two points of intersection.',
                    workingLatex: '(2 + \\sqrt{2},\\; 1 - \\sqrt{2}) \\quad \\text{and} \\quad (2 - \\sqrt{2},\\; 1 + \\sqrt{2})',
                    explanation: 'Pair each \\( x \\)-value with its corresponding \\( y \\)-value to give the two intersection points.'
                },
                {
                    stepNumber: 6,
                    description: '(b) Calculate the differences in coordinates between the two points.',
                    workingLatex: '\\Delta x = (2 + \\sqrt{2}) - (2 - \\sqrt{2}) = 2\\sqrt{2} \\qquad \\Delta y = (1 - \\sqrt{2}) - (1 + \\sqrt{2}) = -2\\sqrt{2}',
                    explanation: 'Subtract the coordinates of the two intersection points.'
                },
                {
                    stepNumber: 7,
                    description: '(b) Square each difference.',
                    workingLatex: '(\\Delta x)^2 = (2\\sqrt{2})^2 = 8 \\qquad (\\Delta y)^2 = (-2\\sqrt{2})^2 = 8',
                    explanation: 'Square each coordinate difference in preparation for the distance formula.'
                },
                {
                    stepNumber: 8,
                    description: '(b) Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{8 + 8} = \\sqrt{16} = 4',
                    explanation: 'Sum the squared differences and take the square root to find the exact distance between the two points.'
                }
            ],
            finalAnswer: '(a) \\( (2 + \\sqrt{2},\\; 1 - \\sqrt{2}) \\) and \\( (2 - \\sqrt{2},\\; 1 + \\sqrt{2}) \\). (b) The exact distance is \\( 4 \\).'
        }
    },

];
