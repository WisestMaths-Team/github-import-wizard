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

    // ─── TYPE A: Identify parallel lines (Q1–4) ───────────────────────────────

    {
        id: 'cg3-001',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 01',
        difficulty: 'Foundation',
        questionText: 'State which of the following lines are parallel to \\( y = 4x - 3 \\).\n\na) \\( 2y = 8x + 5 \\)\nb) \\( y - 4x + 1 = 0 \\)\nc) \\( 8y + 32x = 1 \\)\nd) \\( \\frac{1}{2}(y + 2) = 2x \\)\ne) \\( -12y - 3 = -48x \\)\nf) \\( 4y = x \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the condition for parallel lines.',
                    workingLatex: '\\text{Parallel lines have equal gradients. The gradient of } y = 4x - 3 \\text{ is } m = 4.',
                    explanation: 'A line in the form \\(y = mx + c\\) has gradient \\(m\\). Any line parallel to it must also have gradient \\(4\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange line a) into \\(y = mx + c\\).',
                    workingLatex: '2y = 8x + 5 \\implies y = \\frac{8}{2}x + \\frac{5}{2} = 4x + 2.5 \\quad m = 4 \\checkmark',
                    explanation: 'Divide every term by \\(2\\). The gradient is \\(4\\), which matches, so line a) is parallel.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange line b) into \\(y = mx + c\\).',
                    workingLatex: 'y - 4x + 1 = 0 \\implies y = 4x - 1 \\quad m = 4 \\checkmark',
                    explanation: 'Add \\(4x\\) and subtract \\(1\\) from both sides. The gradient is \\(4\\), so line b) is parallel.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange line c) into \\(y = mx + c\\).',
                    workingLatex: '8y + 32x = 1 \\implies 8y = -32x + 1 \\implies y = -4x + \\tfrac{1}{8} \\quad m = -4 \\times',
                    explanation: 'The gradient is \\(-4\\), not \\(4\\). A common mistake is confusing \\(-4\\) with \\(4\\); the sign matters.'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange line d) into \\(y = mx + c\\).',
                    workingLatex: '\\tfrac{1}{2}(y + 2) = 2x \\implies \\tfrac{1}{2}y + 1 = 2x \\implies \\tfrac{1}{2}y = 2x - 1 \\implies y = 4x - 2 \\quad m = 4 \\checkmark',
                    explanation: 'Expand the bracket, then multiply both sides by \\(2\\). The gradient is \\(4\\), so line d) is parallel.'
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange line e) into \\(y = mx + c\\).',
                    workingLatex: '-12y - 3 = -48x \\implies -12y = -48x + 3 \\implies y = \\frac{-48}{-12}x + \\frac{3}{-12} = 4x - \\tfrac{1}{4} \\quad m = 4 \\checkmark',
                    explanation: 'Divide every term by \\(-12\\). Be careful with signs when dividing by a negative number.'
                },
                {
                    stepNumber: 7,
                    description: 'Rearrange line f) into \\(y = mx + c\\).',
                    workingLatex: '4y = x \\implies y = \\tfrac{1}{4}x \\quad m = \\tfrac{1}{4} \\times',
                    explanation: 'The gradient is \\(\\frac{1}{4}\\), not \\(4\\). Do not confuse the coefficient of \\(x\\) in \\(4y = x\\) with the gradient.'
                }
            ],
            finalAnswer: 'Lines a), b), d) and e) are parallel to  y = 4x - 3 .'
        }
    },

    {
        id: 'cg3-002',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 02',
        difficulty: 'Foundation',
        questionText: 'State whether each pair of lines is parallel, perpendicular, or neither.\n\na) \\( y = 3x + 1 \\) and \\( y = 3x - 5 \\)\nb) \\( y = 2x + 4 \\) and \\( y = -\\dfrac{1}{2}x + 1 \\)\nc) \\( y = 5x - 2 \\) and \\( y = -5x + 2 \\)\nd) \\( 2x - 4y + 3 = 0 \\) and \\( x - 2y - 1 = 0 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the conditions for parallel and perpendicular.',
                    workingLatex: '\\text{Parallel: } m_1 = m_2. \\quad \\text{Perpendicular: } m_1 \\times m_2 = -1.',
                    explanation: 'Two lines are parallel if they share the same gradient. They are perpendicular if the product of their gradients is \\(-1\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Compare gradients for part a).',
                    workingLatex: 'y = 3x + 1 \\implies m_1 = 3, \\quad y = 3x - 5 \\implies m_2 = 3. \\quad m_1 = m_2 \\implies \\textbf{parallel}',
                    explanation: 'Both lines are already in \\(y = mx + c\\) form. The gradients are equal, so the lines are parallel.'
                },
                {
                    stepNumber: 3,
                    description: 'Compare gradients for part b).',
                    workingLatex: 'y = 2x + 4 \\implies m_1 = 2, \\quad y = -\\tfrac{1}{2}x + 1 \\implies m_2 = -\\tfrac{1}{2}. \\quad m_1 \\times m_2 = 2 \\times \\left(-\\tfrac{1}{2}\\right) = -1 \\implies \\textbf{perpendicular}',
                    explanation: 'The product of the gradients is \\(-1\\), confirming perpendicularity.'
                },
                {
                    stepNumber: 4,
                    description: 'Compare gradients for part c).',
                    workingLatex: 'y = 5x - 2 \\implies m_1 = 5, \\quad y = -5x + 2 \\implies m_2 = -5. \\quad m_1 \\times m_2 = 5 \\times (-5) = -25 \\ne -1 \\implies \\textbf{neither}',
                    explanation: 'The gradients are not equal, so not parallel. Their product is \\(-25\\), not \\(-1\\), so not perpendicular either. A common mistake is thinking that opposite signs automatically mean perpendicular.'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange the first line in part d).',
                    workingLatex: '2x - 4y + 3 = 0 \\implies -4y = -2x - 3 \\implies y = \\tfrac{-2}{-4}x + \\tfrac{-3}{-4} = \\tfrac{1}{2}x + \\tfrac{3}{4} \\implies m_1 = \\tfrac{1}{2}',
                    explanation: 'Isolate \\(y\\) by subtracting \\(2x\\) and \\(3\\) from both sides, then divide by \\(-4\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange the second line in part d).',
                    workingLatex: 'x - 2y - 1 = 0 \\implies -2y = -x + 1 \\implies y = \\tfrac{1}{2}x - \\tfrac{1}{2} \\implies m_2 = \\tfrac{1}{2}. \\quad m_1 = m_2 \\implies \\textbf{parallel}',
                    explanation: 'Both lines have gradient \\(\\frac{1}{2}\\), so they are parallel.'
                }
            ],
            finalAnswer: 'a) Parallel; b) Perpendicular; c) Neither; d) Parallel'
        }
    },

    {
        id: 'cg3-003',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 03',
        difficulty: 'Foundation',
        questionText: 'State whether each pair of lines is parallel, perpendicular, or neither.\n\na) \\( 3x + y - 4 = 0 \\) and \\( 6x + 2y + 1 = 0 \\)\nb) \\( 4x - y + 2 = 0 \\) and \\( x + 4y - 8 = 0 \\)\nc) \\( 2x + 5y - 10 = 0 \\) and \\( 5x - 2y + 3 = 0 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange line a), first equation.',
                    workingLatex: '3x + y - 4 = 0 \\implies y = -3x + 4 \\implies m_1 = -3',
                    explanation: 'Subtract \\(3x\\) and add \\(4\\) to both sides to isolate \\(y\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange line a), second equation.',
                    workingLatex: '6x + 2y + 1 = 0 \\implies 2y = -6x - 1 \\implies y = -3x - \\tfrac{1}{2} \\implies m_2 = -3. \\quad m_1 = m_2 \\implies \\textbf{parallel}',
                    explanation: 'Both gradients are \\(-3\\), so the lines are parallel.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange line b), first equation.',
                    workingLatex: '4x - y + 2 = 0 \\implies -y = -4x - 2 \\implies y = 4x + 2 \\implies m_1 = 4',
                    explanation: 'Isolate \\(y\\) and multiply both sides by \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange line b), second equation.',
                    workingLatex: 'x + 4y - 8 = 0 \\implies 4y = -x + 8 \\implies y = -\\tfrac{1}{4}x + 2 \\implies m_2 = -\\tfrac{1}{4}',
                    explanation: 'Divide every term by \\(4\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check if lines in b) are perpendicular.',
                    workingLatex: 'm_1 \\times m_2 = 4 \\times \\left(-\\tfrac{1}{4}\\right) = -1 \\implies \\textbf{perpendicular}',
                    explanation: 'The product of the gradients is \\(-1\\), confirming perpendicularity.'
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange line c), first equation.',
                    workingLatex: '2x + 5y - 10 = 0 \\implies 5y = -2x + 10 \\implies y = -\\tfrac{2}{5}x + 2 \\implies m_1 = -\\tfrac{2}{5}',
                    explanation: 'Divide every term by \\(5\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Rearrange line c), second equation.',
                    workingLatex: '5x - 2y + 3 = 0 \\implies -2y = -5x - 3 \\implies y = \\tfrac{5}{2}x + \\tfrac{3}{2} \\implies m_2 = \\tfrac{5}{2}',
                    explanation: 'Divide every term by \\(-2\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Check if lines in c) are perpendicular.',
                    workingLatex: 'm_1 \\times m_2 = \\left(-\\tfrac{2}{5}\\right) \\times \\tfrac{5}{2} = -\\tfrac{10}{10} = -1 \\implies \\textbf{perpendicular}',
                    explanation: 'The product of the gradients is \\(-1\\), so the lines are perpendicular.'
                }
            ],
            finalAnswer: 'a) Parallel; b) Perpendicular; c) Perpendicular'
        }
    },

    {
        id: 'cg3-004',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 04',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( k \\) so that the line \\( kx + 3y - 5 = 0 \\) is parallel to \\( y = 4x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of the given line.',
                    workingLatex: 'y = 4x - 2 \\implies m = 4',
                    explanation: 'The line \\(y = 4x - 2\\) is already in \\(y = mx + c\\) form, so the gradient is \\(4\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange \\(kx + 3y - 5 = 0\\) to find its gradient.',
                    workingLatex: 'kx + 3y - 5 = 0 \\implies 3y = -kx + 5 \\implies y = -\\dfrac{k}{3}x + \\dfrac{5}{3}',
                    explanation: 'Subtract \\(kx\\) and add \\(5\\), then divide every term by \\(3\\). The gradient is \\(-\\frac{k}{3}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set gradients equal for parallel lines.',
                    workingLatex: '-\\dfrac{k}{3} = 4',
                    explanation: 'Parallel lines have equal gradients, so set the gradient of the unknown line equal to \\(4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(k\\).',
                    workingLatex: '-k = 12 \\implies k = -12',
                    explanation: 'Multiply both sides by \\(3\\), then multiply by \\(-1\\). A common error is forgetting the negative sign.'
                }
            ],
            finalAnswer: ' k = -12 '
        }
    },

    // ─── TYPE B: Find equation of parallel line through a point (Q5–12) ───────

    {
        id: 'cg3-005',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 05',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line parallel to \\( y = 3x - 1 \\) that passes through \\( (2, 8) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of the parallel line.',
                    workingLatex: 'y = 3x - 1 \\implies m = 3',
                    explanation: 'Parallel lines share the same gradient. The given line has gradient \\(3\\), so the parallel line also has gradient \\(3\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Write the parallel line in \\(y = mx + c\\) form.',
                    workingLatex: 'y = 3x + c',
                    explanation: 'We know the gradient is \\(3\\) but need to find \\(c\\) using the given point.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((2, 8)\\) to find \\(c\\).',
                    workingLatex: '8 = 3(2) + c \\implies 8 = 6 + c \\implies c = 2',
                    explanation: 'Replace \\(x\\) with \\(2\\) and \\(y\\) with \\(8\\), then solve for \\(c\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the final equation.',
                    workingLatex: 'y = 3x + 2',
                    explanation: 'Substitute \\(c = 2\\) back into \\(y = 3x + c\\).'
                }
            ],
            finalAnswer: ' y = 3x + 2 '
        }
    },

    {
        id: 'cg3-006',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 06',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line parallel to \\( y = -2x + 5 \\) passing through \\( (3, 1) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of the parallel line.',
                    workingLatex: 'y = -2x + 5 \\implies m = -2',
                    explanation: 'The given line has gradient \\(-2\\). A parallel line has the same gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\((3, 1)\\) into \\(y = -2x + c\\).',
                    workingLatex: '1 = -2(3) + c \\implies 1 = -6 + c \\implies c = 7',
                    explanation: 'Replace \\(x\\) with \\(3\\) and \\(y\\) with \\(1\\), then solve for \\(c\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation in \\(y = mx + c\\) form.',
                    workingLatex: 'y = -2x + 7',
                    explanation: 'This is the equation of the parallel line. Now rearrange to the required form.'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange into \\(ax + by + c = 0\\).',
                    workingLatex: 'y = -2x + 7 \\implies 2x + y - 7 = 0',
                    explanation: 'Add \\(2x\\) to both sides and subtract \\(7\\) from both sides so all terms are on one side.'
                }
            ],
            finalAnswer: ' 2x + y - 7 = 0 '
        }
    },

    {
        id: 'cg3-007',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 07',
        difficulty: 'Foundation',
        questionText: 'Line \\( L \\) passes through \\( (0, 5) \\) and is parallel to \\( 3x - 6y + 4 = 0 \\). Find the equation of \\( L \\) in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '3x - 6y + 4 = 0 \\implies -6y = -3x - 4 \\implies y = \\dfrac{-3}{-6}x + \\dfrac{-4}{-6} = \\dfrac{1}{2}x + \\dfrac{2}{3}',
                    explanation: 'Subtract \\(3x\\) and \\(4\\) from both sides, then divide every term by \\(-6\\). The gradient is \\(\\frac{1}{2}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the gradient of the parallel line.',
                    workingLatex: 'm = \\dfrac{1}{2}',
                    explanation: 'Parallel lines have equal gradients, so line \\(L\\) also has gradient \\(\\frac{1}{2}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\((0, 5)\\) to find \\(c\\).',
                    workingLatex: '5 = \\dfrac{1}{2}(0) + c \\implies 5 = 0 + c \\implies c = 5',
                    explanation: 'The point \\((0, 5)\\) is on the \\(y\\)-axis, so \\(c = 5\\) directly. You can also see this because \\(x = 0\\) means the \\(y\\)-value is the \\(y\\)-intercept.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation of \\(L\\).',
                    workingLatex: 'y = \\dfrac{1}{2}x + 5',
                    explanation: 'Substitute \\(m = \\frac{1}{2}\\) and \\(c = 5\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = \\dfrac{1}{2}x + 5 '
        }
    },

    {
        id: 'cg3-008',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 08',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line parallel to \\( 5x + 2y - 6 = 0 \\) that passes through \\( (4, -3) \\). Give your answer in the form \\( ax + by + c = 0 \\), where \\( a \\), \\( b \\) and \\( c \\) are integers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '5x + 2y - 6 = 0 \\implies 2y = -5x + 6 \\implies y = -\\dfrac{5}{2}x + 3',
                    explanation: 'Subtract \\(5x\\) and add \\(6\\) to both sides, then divide every term by \\(2\\). The gradient is \\(-\\frac{5}{2}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the gradient of the parallel line.',
                    workingLatex: 'm = -\\dfrac{5}{2}',
                    explanation: 'Parallel lines have the same gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((4, -3)\\) into \\(y = -\\frac{5}{2}x + c\\).',
                    workingLatex: '-3 = -\\dfrac{5}{2}(4) + c \\implies -3 = -\\dfrac{20}{2} + c \\implies -3 = -10 + c',
                    explanation: 'Multiply \\(-\\frac{5}{2}\\) by \\(4\\) to get \\(-10\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = -3 + 10 = 7',
                    explanation: 'Add \\(10\\) to both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and rearrange.',
                    workingLatex: 'y = -\\dfrac{5}{2}x + 7 \\implies 2y = -5x + 14 \\implies 5x + 2y - 14 = 0',
                    explanation: 'Multiply every term by \\(2\\) to clear the fraction, then collect all terms on one side to give integer coefficients.'
                }
            ],
            finalAnswer: ' 5x + 2y - 14 = 0 '
        }
    },

    {
        id: 'cg3-009',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 09',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line parallel to \\( 4x - 3y + 9 = 0 \\) passing through \\( (-3, 2) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '4x - 3y + 9 = 0 \\implies -3y = -4x - 9 \\implies y = \\dfrac{4}{3}x + 3',
                    explanation: 'Subtract \\(4x\\) and \\(9\\) from both sides, then divide by \\(-3\\). The gradient is \\(\\frac{4}{3}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the gradient of the parallel line.',
                    workingLatex: 'm = \\dfrac{4}{3}',
                    explanation: 'Parallel lines have the same gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((-3, 2)\\) into \\(y = \\frac{4}{3}x + c\\).',
                    workingLatex: '2 = \\dfrac{4}{3}(-3) + c \\implies 2 = -\\dfrac{12}{3} + c \\implies 2 = -4 + c',
                    explanation: 'Multiply \\(\\frac{4}{3}\\) by \\(-3\\) to get \\(-4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 2 + 4 = 6',
                    explanation: 'Add \\(4\\) to both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and rearrange.',
                    workingLatex: 'y = \\dfrac{4}{3}x + 6 \\implies 3y = 4x + 18 \\implies 4x - 3y + 18 = 0',
                    explanation: 'Multiply every term by \\(3\\) to clear the fraction, then rearrange to \\(ax + by + c = 0\\) form.'
                }
            ],
            finalAnswer: ' 4x - 3y + 18 = 0 '
        }
    },

    {
        id: 'cg3-010',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 10',
        difficulty: 'Foundation',
        questionText: 'Line \\( P \\) passes through \\( (6, -1) \\) and is parallel to the line joining \\( (0, 3) \\) and \\( (4, 11) \\). Find the equation of \\( P \\) in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of the line joining \\((0, 3)\\) and \\((4, 11)\\).',
                    workingLatex: 'm = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{11 - 3}{4 - 0} = \\dfrac{8}{4} = 2',
                    explanation: 'Use the gradient formula with the two given points. The gradient is \\(2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'State the gradient of the parallel line.',
                    workingLatex: 'm_P = 2',
                    explanation: 'Line \\(P\\) is parallel, so it has the same gradient of \\(2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((6, -1)\\) into \\(y = 2x + c\\).',
                    workingLatex: '-1 = 2(6) + c \\implies -1 = 12 + c',
                    explanation: 'Replace \\(x\\) with \\(6\\) and \\(y\\) with \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = -1 - 12 = -13',
                    explanation: 'Subtract \\(12\\) from both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation of \\(P\\).',
                    workingLatex: 'y = 2x - 13',
                    explanation: 'Substitute \\(m = 2\\) and \\(c = -13\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = 2x - 13 '
        }
    },

    {
        id: 'cg3-011',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 11',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line parallel to \\( \\dfrac{x}{3} + \\dfrac{y}{2} = 1 \\) that passes through \\( (6, 5) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Clear the fractions in the given line.',
                    workingLatex: '\\dfrac{x}{3} + \\dfrac{y}{2} = 1 \\implies 2x + 3y = 6',
                    explanation: 'Multiply every term by \\(6\\) (the LCM of \\(3\\) and \\(2\\)) to clear the fractions.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to find the gradient.',
                    workingLatex: '3y = -2x + 6 \\implies y = -\\dfrac{2}{3}x + 2 \\implies m = -\\dfrac{2}{3}',
                    explanation: 'Subtract \\(2x\\) from both sides, then divide by \\(3\\). The gradient is \\(-\\frac{2}{3}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((6, 5)\\) into \\(y = -\\frac{2}{3}x + c\\).',
                    workingLatex: '5 = -\\dfrac{2}{3}(6) + c \\implies 5 = -\\dfrac{12}{3} + c \\implies 5 = -4 + c',
                    explanation: 'The parallel line has gradient \\(-\\frac{2}{3}\\). Substitute the point to find \\(c\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 5 + 4 = 9',
                    explanation: 'Add 4 to both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and rearrange.',
                    workingLatex: 'y = -\\dfrac{2}{3}x + 9 \\implies 3y = -2x + 27 \\implies 2x + 3y - 27 = 0',
                    explanation: 'Multiply every term by \\(3\\) to clear the fraction, then rearrange to \\(ax + by + c = 0\\) form.'
                }
            ],
            finalAnswer: ' 2x + 3y - 27 = 0 '
        }
    },

    {
        id: 'cg3-012',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 12',
        difficulty: 'Foundation',
        questionText: 'Two parallel lines each have gradient \\( \\frac{3}{2} \\). One passes through \\( (2, 4) \\) and the other through \\( (6, 3) \\). Find the equations of both lines in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find Line 1: substitute \\((2, 4)\\) into \\(y = \\frac{3}{2}x + c\\).',
                    workingLatex: '4 = \\dfrac{3}{2}(2) + c \\implies 4 = \\dfrac{6}{2} + c \\implies 4 = 3 + c',
                    explanation: 'Both lines have gradient \\(\\frac{3}{2}\\). Substitute the point for Line 1 to find its \\(y\\)-intercept.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\(c\\) for Line 1.',
                    workingLatex: 'c = 4 - 3 = 1 \\implies y = \\dfrac{3}{2}x + 1',
                    explanation: 'Subtract \\(3\\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange Line 1 into \\(ax + by + c = 0\\).',
                    workingLatex: 'y = \\dfrac{3}{2}x + 1 \\implies 2y = 3x + 2 \\implies 3x - 2y + 2 = 0',
                    explanation: 'Multiply every term by \\(2\\), then collect all terms on one side.'
                },
                {
                    stepNumber: 4,
                    description: 'Find Line 2: substitute \\((6, 3)\\) into \\(y = \\frac{3}{2}x + c\\).',
                    workingLatex: '3 = \\dfrac{3}{2}(6) + c \\implies 3 = \\dfrac{18}{2} + c \\implies 3 = 9 + c',
                    explanation: 'Now find the \\(y\\)-intercept for Line 2 using its point.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\(c\\) for Line 2.',
                    workingLatex: 'c = 3 - 9 = -6 \\implies y = \\dfrac{3}{2}x - 6',
                    explanation: 'Subtract \\(9\\) from both sides.'
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange Line 2 into \\(ax + by + c = 0\\).',
                    workingLatex: 'y = \\dfrac{3}{2}x - 6 \\implies 2y = 3x - 12 \\implies 3x - 2y - 12 = 0',
                    explanation: 'Multiply every term by \\(2\\), then collect all terms on one side.'
                }
            ],
            finalAnswer: 'Line 1: \\(3x - 2y + 2 = 0\\); Line 2: \\(3x - 2y - 12 = 0\\)'
        }
    },

    // ─── TYPE C: Find equation of perpendicular line through a point (Q13–22) ─

    {
        id: 'cg3-013',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 13',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( y = 2x - 1 \\) that passes through \\( (4, 3) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of the given line.',
                    workingLatex: 'y = 2x - 1 \\implies m = 2',
                    explanation: 'The line is already in \\(y = mx + c\\) form, so the gradient is \\(2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m} = -\\dfrac{1}{2}',
                    explanation: 'Perpendicular gradients are negative reciprocals, so \\(m_1 \\times m_2 = -1\\). Flip the fraction and change the sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((4, 3)\\) into \\(y = -\\frac{1}{2}x + c\\).',
                    workingLatex: '3 = -\\dfrac{1}{2}(4) + c \\implies 3 = -\\dfrac{4}{2} + c \\implies 3 = -2 + c',
                    explanation: 'Replace \\(x\\) with \\(4\\) and \\(y\\) with \\(3\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 3 + 2 = 5',
                    explanation: 'Add \\(2\\) to both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final equation.',
                    workingLatex: 'y = -\\dfrac{1}{2}x + 5',
                    explanation: 'Substitute \\(m = -\\frac{1}{2}\\) and \\(c = 5\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = -\\dfrac{1}{2}x + 5 '
        }
    },

    {
        id: 'cg3-014',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 14',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( y = -\\dfrac{1}{3}x + 4 \\) that passes through \\( (1, -2) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of the given line.',
                    workingLatex: 'y = -\\dfrac{1}{3}x + 4 \\implies m = -\\dfrac{1}{3}',
                    explanation: 'The line is already in \\(y = mx + c\\) form, so the gradient is \\(-\\frac{1}{3}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -1 \\div \\left(-\\dfrac{1}{3}\\right) = -1 \\times \\left(-\\dfrac{3}{1}\\right) = 3',
                    explanation: 'The negative reciprocal of \\(-\\frac{1}{3}\\) is \\(3\\). Flip the fraction and change the sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((1, -2)\\) into \\(y = 3x + c\\).',
                    workingLatex: '-2 = 3(1) + c \\implies -2 = 3 + c',
                    explanation: 'Replace \\(x\\) with \\(1\\) and \\(y\\) with \\(-2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = -2 - 3 = -5',
                    explanation: 'Subtract \\(3\\) from both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final equation.',
                    workingLatex: 'y = 3x - 5',
                    explanation: 'Substitute \\(m = 3\\) and \\(c = -5\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = 3x - 5 '
        }
    },

    {
        id: 'cg3-015',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 15',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( 4x - y + 3 = 0 \\) that passes through \\( (8, 1) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '4x - y + 3 = 0 \\implies -y = -4x - 3 \\implies y = 4x + 3 \\implies m = 4',
                    explanation: 'Subtract \\(4x\\) and \\(3\\) from both sides, then multiply by \\(-1\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m} = -\\dfrac{1}{4}',
                    explanation: 'The negative reciprocal of \\(4\\) is \\(-\\frac{1}{4}\\). Perpendicular gradients multiply to \\(-1\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((8, 1)\\) into \\(y = -\\frac{1}{4}x + c\\).',
                    workingLatex: '1 = -\\dfrac{1}{4}(8) + c \\implies 1 = -\\dfrac{8}{4} + c \\implies 1 = -2 + c',
                    explanation: 'Replace \\(x\\) with \\(8\\) and \\(y\\) with \\(1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 1 + 2 = 3',
                    explanation: 'Add \\(2\\) to both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and rearrange.',
                    workingLatex: 'y = -\\dfrac{1}{4}x + 3 \\implies 4y = -x + 12 \\implies x + 4y - 12 = 0',
                    explanation: 'Multiply every term by \\(4\\) to clear the fraction, then collect all terms on one side.'
                }
            ],
            finalAnswer: ' x + 4y - 12 = 0 '
        }
    },

    {
        id: 'cg3-016',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 16',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( 3x + 5y - 2 = 0 \\) that passes through \\( (-5, 4) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '3x + 5y - 2 = 0 \\implies 5y = -3x + 2 \\implies y = -\\dfrac{3}{5}x + \\dfrac{2}{5} \\implies m = -\\dfrac{3}{5}',
                    explanation: 'Subtract \\(3x\\) and add \\(2\\) to both sides, then divide by \\(5\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -1 \\div \\left(-\\dfrac{3}{5}\\right) = -1 \\times \\left(-\\dfrac{5}{3}\\right) = \\dfrac{5}{3}',
                    explanation: 'The negative reciprocal of \\(-\\frac{3}{5}\\) is \\(\\frac{5}{3}\\). Flip the fraction and change the sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((-5, 4)\\) into \\(y = \\frac{5}{3}x + c\\).',
                    workingLatex: '4 = \\dfrac{5}{3}(-5) + c \\implies 4 = -\\dfrac{25}{3} + c',
                    explanation: 'Replace \\(x\\) with \\(-5\\) and \\(y\\) with \\(4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 4 + \\dfrac{25}{3} = \\dfrac{12}{3} + \\dfrac{25}{3} = \\dfrac{37}{3}',
                    explanation: 'Write \\(4\\) as \\(\\frac{12}{3}\\) so you can add the fractions.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and rearrange.',
                    workingLatex: 'y = \\dfrac{5}{3}x + \\dfrac{37}{3} \\implies 3y = 5x + 37 \\implies 5x - 3y + 37 = 0',
                    explanation: 'Multiply every term by \\(3\\) to clear fractions, then collect all terms on one side.'
                }
            ],
            finalAnswer: ' 5x - 3y + 37 = 0 '
        }
    },

    {
        id: 'cg3-017',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 17',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( 2x + 6y - 3 = 0 \\) passing through \\( (3, -4) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '2x + 6y - 3 = 0 \\implies 6y = -2x + 3 \\implies y = -\\dfrac{2}{6}x + \\dfrac{3}{6} = -\\dfrac{1}{3}x + \\dfrac{1}{2}',
                    explanation: 'Subtract \\(2x\\) and add \\(3\\) to both sides, then divide by \\(6\\). The gradient is \\(-\\frac{1}{3}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -1 \\div \\left(-\\dfrac{1}{3}\\right) = -1 \\times (-3) = 3',
                    explanation: 'The negative reciprocal of \\(-\\frac{1}{3}\\) is \\(3\\). Flip the fraction and change the sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((3, -4)\\) into \\(y = 3x + c\\).',
                    workingLatex: '-4 = 3(3) + c \\implies -4 = 9 + c',
                    explanation: 'Replace \\(x\\) with \\(3\\) and \\(y\\) with \\(-4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = -4 - 9 = -13',
                    explanation: 'Subtract \\(9\\) from both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the final equation.',
                    workingLatex: 'y = 3x - 13',
                    explanation: 'Substitute \\(m = 3\\) and \\(c = -13\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = 3x - 13 '
        }
    },

    {
        id: 'cg3-018',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 18',
        difficulty: 'Foundation',
        questionText: 'Line \\( M \\) is perpendicular to the line joining \\( A(1, 5) \\) and \\( B(4, 11) \\), and passes through the midpoint of \\( AB \\). Find the equation of \\( M \\) in the form \\( y = mx + c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of \\(AB\\).',
                    workingLatex: 'm_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{11 - 5}{4 - 1} = \\dfrac{6}{3} = 2',
                    explanation: 'Use the gradient formula with \\(A(1, 5)\\) and \\(B(4, 11)\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m_{AB}} = -\\dfrac{1}{2}',
                    explanation: 'The negative reciprocal of \\(2\\) is \\(-\\frac{1}{2}\\). Line \\(M\\) is perpendicular to \\(AB\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the midpoint of \\(AB\\).',
                    workingLatex: '\\text{Midpoint} = \\left(\\dfrac{1+4}{2},\\ \\dfrac{5+11}{2}\\right) = \\left(\\dfrac{5}{2},\\ \\dfrac{16}{2}\\right) = \\left(\\dfrac{5}{2},\\ 8\\right)',
                    explanation: 'Use the midpoint formula: average the \\(x\\)-coordinates and average the \\(y\\)-coordinates.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute the midpoint into \\(y = -\\frac{1}{2}x + c\\).',
                    workingLatex: '8 = -\\dfrac{1}{2} \\times \\dfrac{5}{2} + c \\implies 8 = -\\dfrac{5}{4} + c',
                    explanation: 'Replace \\(x\\) with \\(\\frac{5}{2}\\) and \\(y\\) with \\(8\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 8 + \\dfrac{5}{4} = \\dfrac{32}{4} + \\dfrac{5}{4} = \\dfrac{37}{4}',
                    explanation: 'Write \\(8\\) as \\(\\frac{32}{4}\\) to add the fractions.'
                },
                {
                    stepNumber: 6,
                    description: 'Write the final equation.',
                    workingLatex: 'y = -\\dfrac{1}{2}x + \\dfrac{37}{4}',
                    explanation: 'Substitute \\(m = -\\frac{1}{2}\\) and \\(c = \\frac{37}{4}\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = -\\dfrac{1}{2}x + \\dfrac{37}{4} '
        }
    },

    {
        id: 'cg3-019',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 19',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( k \\) such that the line \\( kx - 2y + 5 = 0 \\) is perpendicular to \\( y = 4x - 1 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of \\(y = 4x - 1\\).',
                    workingLatex: 'y = 4x - 1 \\implies m_2 = 4',
                    explanation: 'The line is already in \\(y = mx + c\\) form, so the gradient is \\(4\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange \\(kx - 2y + 5 = 0\\) to find its gradient.',
                    workingLatex: 'kx - 2y + 5 = 0 \\implies -2y = -kx - 5 \\implies y = \\dfrac{k}{2}x + \\dfrac{5}{2} \\implies m_1 = \\dfrac{k}{2}',
                    explanation: 'Subtract \\(kx\\) and \\(5\\), then divide by \\(-2\\). The gradient is \\(\\frac{k}{2}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Set the product of gradients equal to -1.',
                    workingLatex: 'm_1 \\times m_2 = -1 \\implies \\dfrac{k}{2} \\times 4 = -1 \\implies 2k = -1',
                    explanation: 'For perpendicular lines, the product of gradients must equal \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(k\\).',
                    workingLatex: 'k = -\\dfrac{1}{2}',
                    explanation: 'Divide both sides by \\(2\\).'
                }
            ],
            finalAnswer: ' k = -\\dfrac{1}{2} '
        }
    },

    {
        id: 'cg3-020',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 20',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the line that is perpendicular to \\( 6x - 4y + 1 = 0 \\) and passes through the point \\( (3, 7) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '6x - 4y + 1 = 0 \\implies -4y = -6x - 1 \\implies y = \\dfrac{-6}{-4}x + \\dfrac{-1}{-4} = \\dfrac{3}{2}x + \\dfrac{1}{4}',
                    explanation: 'Subtract \\(6x\\) and \\(1\\) from both sides, then divide by \\(-4\\). The gradient is \\(\\frac{3}{2}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -1 \\div \\dfrac{3}{2} = -1 \\times \\dfrac{2}{3} = -\\dfrac{2}{3}',
                    explanation: 'The negative reciprocal of \\(\\frac{3}{2}\\) is \\(-\\frac{2}{3}\\). Flip the fraction and change the sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\((3, 7)\\) into \\(y = -\\frac{2}{3}x + c\\).',
                    workingLatex: '7 = -\\dfrac{2}{3}(3) + c \\implies 7 = -\\dfrac{6}{3} + c \\implies 7 = -2 + c',
                    explanation: 'Replace \\(x\\) with \\(3\\) and \\(y\\) with \\(7\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 7 + 2 = 9',
                    explanation: 'Add \\(2\\) to both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation and rearrange.',
                    workingLatex: 'y = -\\dfrac{2}{3}x + 9 \\implies 3y = -2x + 27 \\implies 2x + 3y - 27 = 0',
                    explanation: 'Multiply every term by \\(3\\) to clear the fraction, then collect all terms on one side.'
                }
            ],
            finalAnswer: ' 2x + 3y - 27 = 0 '
        }
    },

    {
        id: 'cg3-021',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 21',
        difficulty: 'Foundation',
        questionText: 'Line \\( Q \\) passes through \\( (a, b) \\) and is perpendicular to \\( 5x - 2y = 10 \\). Find an equation for \\( Q \\) in terms of \\( a \\) and \\( b \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the given line to find its gradient.',
                    workingLatex: '5x - 2y = 10 \\implies -2y = -5x + 10 \\implies y = \\dfrac{5}{2}x - 5 \\implies m = \\dfrac{5}{2}',
                    explanation: 'Subtract \\(5x\\) from both sides, then divide by \\(-2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -1 \\div \\dfrac{5}{2} = -1 \\times \\dfrac{2}{5} = -\\dfrac{2}{5}',
                    explanation: 'The negative reciprocal of \\(\\frac{5}{2}\\) is \\(-\\frac{2}{5}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation using point-slope form.',
                    workingLatex: 'y - b = -\\dfrac{2}{5}(x - a)',
                    explanation: 'Use \\(y - y_1 = m(x - x_1)\\) with the point \\((a, b)\\) and gradient \\(-\\frac{2}{5}\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply through by 5.',
                    workingLatex: '5(y - b) = -2(x - a) \\implies 5y - 5b = -2x + 2a',
                    explanation: 'Multiply every term by \\(5\\) to clear the fraction.'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange into a tidy form.',
                    workingLatex: '2x + 5y = 2a + 5b',
                    explanation: 'Add \\(2x\\) to both sides and add \\(5b\\) to both sides.'
                }
            ],
            finalAnswer: ' 2x + 5y = 2a + 5b '
        }
    },

    {
        id: 'cg3-022',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 22',
        difficulty: 'Foundation',
        questionText: 'The line \\( L_1 \\) has equation \\( y = \\dfrac{2}{3}x + 1 \\). Line \\( L_2 \\) is perpendicular to \\( L_1 \\) and intersects the \\( x \\)-axis at \\( x = 6 \\). Find the equation of \\( L_2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the gradient of \\(L_1\\).',
                    workingLatex: 'y = \\dfrac{2}{3}x + 1 \\implies m_1 = \\dfrac{2}{3}',
                    explanation: '\\(L_1\\) is already in \\(y = mx + c\\) form, so the gradient is \\(\\frac{2}{3}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the perpendicular gradient for \\(L_2\\).',
                    workingLatex: 'm_\\perp = -1 \\div \\dfrac{2}{3} = -1 \\times \\dfrac{3}{2} = -\\dfrac{3}{2}',
                    explanation: 'The negative reciprocal of \\(\\frac{2}{3}\\) is \\(-\\frac{3}{2}\\). Flip the fraction and change the sign.'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the point \\(L_2\\) passes through.',
                    workingLatex: '\\text{L}_2 \\text{ intersects the } x\\text{-axis at } x = 6 \\implies \\text{point is } (6,\\ 0)',
                    explanation: 'On the \\(x\\)-axis, \\(y = 0\\) always. So the point is \\((6, 0)\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\((6, 0)\\) into \\(y = -\\frac{3}{2}x + c\\).',
                    workingLatex: '0 = -\\dfrac{3}{2}(6) + c \\implies 0 = -\\dfrac{18}{2} + c \\implies 0 = -9 + c',
                    explanation: 'Replace \\(x\\) with \\(6\\) and \\(y\\) with \\(0\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 9',
                    explanation: 'Add \\(9\\) to both sides.'
                },
                {
                    stepNumber: 6,
                    description: 'Write the final equation.',
                    workingLatex: 'y = -\\dfrac{3}{2}x + 9',
                    explanation: 'Substitute \\(m = -\\frac{3}{2}\\) and \\(c = 9\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = -\\dfrac{3}{2}x + 9 '
        }
    },

    // ─── TYPE D: Perpendicular bisector (Q23–26) ─────────────────────────────

    {
        id: 'cg3-023',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 23',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the perpendicular bisector of the line segment joining \\( A(2, 6) \\) and \\( B(8, 2) \\). Give your answer in the form \\( y = mx + c \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the midpoint of \\(AB\\).',
                    workingLatex: '\\text{Midpoint} = \\left(\\dfrac{2+8}{2},\\ \\dfrac{6+2}{2}\\right) = \\left(\\dfrac{10}{2},\\ \\dfrac{8}{2}\\right) = (5,\\ 4)',
                    explanation: 'The perpendicular bisector passes through the midpoint. Average the \\(x\\)-coordinates and average the \\(y\\)-coordinates.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of \\(AB\\).',
                    workingLatex: 'm_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{2 - 6}{8 - 2} = \\dfrac{-4}{6} = -\\dfrac{2}{3}',
                    explanation: 'Use the gradient formula with \\(A(2, 6)\\) and \\(B(8, 2)\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -1 \\div \\left(-\\dfrac{2}{3}\\right) = -1 \\times \\left(-\\dfrac{3}{2}\\right) = \\dfrac{3}{2}',
                    explanation: 'The negative reciprocal of \\(-\\frac{2}{3}\\) is \\(\\frac{3}{2}\\). The perpendicular bisector has this gradient.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute the midpoint \\((5, 4)\\) into \\(y = \\frac{3}{2}x + c\\).',
                    workingLatex: '4 = \\dfrac{3}{2}(5) + c \\implies 4 = \\dfrac{15}{2} + c',
                    explanation: 'Replace \\(x\\) with \\(5\\) and \\(y\\) with \\(4\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\(c\\).',
                    workingLatex: 'c = 4 - \\dfrac{15}{2} = \\dfrac{8}{2} - \\dfrac{15}{2} = -\\dfrac{7}{2}',
                    explanation: 'Write \\(4\\) as \\(\\frac{8}{2}\\) to subtract the fractions.'
                },
                {
                    stepNumber: 6,
                    description: 'Write the final equation.',
                    workingLatex: 'y = \\dfrac{3}{2}x - \\dfrac{7}{2}',
                    explanation: 'Substitute \\(m = \\frac{3}{2}\\) and \\(c = -\\frac{7}{2}\\) into \\(y = mx + c\\).'
                }
            ],
            finalAnswer: ' y = \\dfrac{3}{2}x - \\dfrac{7}{2} '
        }
    },

    {
        id: 'cg3-024',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 24',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the perpendicular bisector of the segment joining \\( P(-2, 1) \\) and \\( Q(4, 7) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the midpoint of \\(PQ\\).',
                    workingLatex: 'M = \\left(\\dfrac{-2+4}{2},\\ \\dfrac{1+7}{2}\\right) = \\left(\\dfrac{2}{2},\\ \\dfrac{8}{2}\\right) = (1,\\ 4)',
                    explanation: 'The perpendicular bisector passes through the midpoint of the segment, so we find this first using the midpoint formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of \\(PQ\\).',
                    workingLatex: 'm_{PQ} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{7 - 1}{4 - (-2)} = \\dfrac{6}{6} = 1',
                    explanation: 'We need the gradient of PQ so we can find the perpendicular gradient for the bisector.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m_{PQ}} = -\\dfrac{1}{1} = -1',
                    explanation: 'The perpendicular gradient is the negative reciprocal. Since the gradient of \\(PQ\\) is \\(1\\), the perpendicular gradient is \\(-1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute midpoint into \\(y = mx + c\\).',
                    workingLatex: 'y = -x + c \\quad \\Rightarrow \\quad 4 = -(1) + c \\quad \\Rightarrow \\quad c = 5',
                    explanation: 'We substitute the midpoint \\((1, 4)\\) into \\(y = -x + c\\) to find the \\(y\\)-intercept.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation as \\(y = mx + c\\).',
                    workingLatex: 'y = -x + 5',
                    explanation: 'This is the equation of the perpendicular bisector in slope-intercept form.'
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange to \\(ax + by + c = 0\\).',
                    workingLatex: 'y = -x + 5 \\quad \\Rightarrow \\quad x + y - 5 = 0',
                    explanation: 'Move all terms to one side to give the required form.'
                }
            ],
            finalAnswer: ' x + y - 5 = 0 '
        }
    },

    {
        id: 'cg3-025',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 25',
        difficulty: 'Foundation',
        questionText: 'The perpendicular bisector of segment \\( CD \\) has equation \\( y = 2x - 3 \\). If \\( C = (1, 4) \\), find the coordinates of \\( D \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of \\(CD\\).',
                    workingLatex: '\\text{Perpendicular bisector gradient} = 2 \\quad \\Rightarrow \\quad m_{CD} = -\\dfrac{1}{2}',
                    explanation: 'The perpendicular bisector has gradient \\(2\\), so the line \\(CD\\) must have the negative reciprocal gradient, which is \\(-\\frac{1}{2}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set up the midpoint condition.',
                    workingLatex: '\\text{Let } M = (h,\\, k). \\text{ Since } M \\text{ lies on } y = 2x - 3: \\quad k = 2h - 3',
                    explanation: 'The midpoint of \\(CD\\) must lie on the perpendicular bisector, so its coordinates satisfy \\(y = 2x - 3\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the gradient from C to M.',
                    workingLatex: '\\dfrac{k - 4}{h - 1} = -\\dfrac{1}{2}',
                    explanation: 'The gradient from \\(C(1, 4)\\) to the midpoint \\(M(h, k)\\) must equal the gradient of \\(CD\\), which is \\(-\\frac{1}{2}\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cross-multiply.',
                    workingLatex: '2(k - 4) = -(h - 1) \\quad \\Rightarrow \\quad 2k - 8 = -h + 1',
                    explanation: 'Cross-multiplying removes the fractions so we can solve for \\(h\\) and \\(k\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\(k = 2h - 3\\).',
                    workingLatex: '2(2h - 3) - 8 = -h + 1 \\quad \\Rightarrow \\quad 4h - 6 - 8 = -h + 1 \\quad \\Rightarrow \\quad 4h - 14 = -h + 1',
                    explanation: 'Replace \\(k\\) with \\(2h - 3\\) from step 2 to get an equation in \\(h\\) only.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\(h\\) and \\(k\\).',
                    workingLatex: '5h = 15 \\quad \\Rightarrow \\quad h = 3, \\quad k = 2(3) - 3 = 3 \\quad \\Rightarrow \\quad M = (3,\\, 3)',
                    explanation: 'Add \\(h\\) to both sides and add \\(14\\) to both sides to isolate \\(h\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Find D using the midpoint formula.',
                    workingLatex: 'M = \\dfrac{C + D}{2} \\quad \\Rightarrow \\quad D = 2M - C = (2(3) - 1,\\, 2(3) - 4) = (5,\\, 2)',
                    explanation: 'Since \\(M\\) is the midpoint of \\(CD\\), we rearrange the midpoint formula to find \\(D\\). A common mistake is to forget to subtract \\(C\\) from \\(2M\\).'
                }
            ],
            finalAnswer: ' D = (5, 2) '
        }
    },

    {
        id: 'cg3-026',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 26',
        difficulty: 'Foundation',
        questionText: 'Find the equation of the perpendicular bisector of the segment joining \\( A(0, -3) \\) and \\( B(6, 5) \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the midpoint of \\(AB\\).',
                    workingLatex: 'M = \\left(\\dfrac{0+6}{2},\\ \\dfrac{-3+5}{2}\\right) = \\left(\\dfrac{6}{2},\\ \\dfrac{2}{2}\\right) = (3,\\ 1)',
                    explanation: 'The perpendicular bisector passes through the midpoint, so we compute it using the midpoint formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of \\(AB\\).',
                    workingLatex: 'm_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{5 - (-3)}{6 - 0} = \\dfrac{8}{6} = \\dfrac{4}{3}',
                    explanation: 'We need the gradient of \\(AB\\) to find the perpendicular gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m_{AB}} = -\\dfrac{1}{\\frac{4}{3}} = -\\dfrac{3}{4}',
                    explanation: 'The perpendicular gradient is the negative reciprocal of \\(\\frac{4}{3}\\). A common mistake is to only negate or only reciprocate.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\(M(3, 1)\\) into \\(y = mx + c\\).',
                    workingLatex: '1 = -\\dfrac{3}{4}(3) + c \\quad \\Rightarrow \\quad 1 = -\\dfrac{9}{4} + c \\quad \\Rightarrow \\quad c = 1 + \\dfrac{9}{4} = \\dfrac{13}{4}',
                    explanation: 'Substitute the midpoint coordinates to find \\(c\\). Be careful with the arithmetic when adding fractions.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation as \\(y = mx + c\\).',
                    workingLatex: 'y = -\\dfrac{3}{4}x + \\dfrac{13}{4}',
                    explanation: 'This is the perpendicular bisector in slope-intercept form.'
                },
                {
                    stepNumber: 6,
                    description: 'Rearrange to \\(ax + by + c = 0\\).',
                    workingLatex: '4y = -3x + 13 \\quad \\Rightarrow \\quad 3x + 4y - 13 = 0',
                    explanation: 'Multiply through by \\(4\\) to clear fractions, then rearrange so all terms are on one side.'
                }
            ],
            finalAnswer: ' 3x + 4y - 13 = 0 '
        }
    },

    // ─── TYPE E: Triangle / geometry problems (Q27–31) ───────────────────────

    {
        id: 'cg3-027',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 27',
        difficulty: 'Foundation',
        questionText: 'Triangle \\( PQR \\) has vertices \\( P(0, 4) \\), \\( Q(6, 0) \\) and \\( R(8, 3) \\).\n\n(a) Find the equations of sides \\( PQ \\) and \\( QR \\) in the form \\( y = mx + c \\).\n\n(b) Show that \\( PQ \\) and \\( QR \\) are perpendicular.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient of \\(PQ\\).',
                    workingLatex: 'm_{PQ} = \\dfrac{0 - 4}{6 - 0} = \\dfrac{-4}{6} = -\\dfrac{2}{3}',
                    explanation: 'Substitute \\(P(0, 4)\\) and \\(Q(6, 0)\\) into the gradient formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the equation of \\(PQ\\).',
                    workingLatex: 'y = -\\dfrac{2}{3}x + c \\quad \\Rightarrow \\quad 4 = -\\dfrac{2}{3}(0) + c \\quad \\Rightarrow \\quad c = 4 \\quad \\Rightarrow \\quad y = -\\dfrac{2}{3}x + 4',
                    explanation: 'Since \\(P\\) is on the \\(y\\)-axis, \\(c = 4\\) directly.'
                },
                {
                    stepNumber: 3,
                    description: '(a) Find the gradient of \\(QR\\).',
                    workingLatex: 'm_{QR} = \\dfrac{3 - 0}{8 - 6} = \\dfrac{3}{2}',
                    explanation: 'Substitute \\(Q(6, 0)\\) and \\(R(8, 3)\\) into the gradient formula.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the equation of \\(QR\\).',
                    workingLatex: 'y = \\dfrac{3}{2}x + c \\quad \\Rightarrow \\quad 0 = \\dfrac{3}{2}(6) + c \\quad \\Rightarrow \\quad 0 = 9 + c \\quad \\Rightarrow \\quad c = -9 \\quad \\Rightarrow \\quad y = \\dfrac{3}{2}x - 9',
                    explanation: 'Substitute \\(Q(6, 0)\\) to find \\(c\\).'
                },
                {
                    stepNumber: 5,
                    description: '(b) Find the product of the gradients of PQ and QR.',
                    workingLatex: 'm_{PQ} \\times m_{QR} = \\left(-\\dfrac{2}{3}\\right) \\times \\dfrac{3}{2} = -\\dfrac{6}{6} = -1',
                    explanation: 'For two lines to be perpendicular, the product of their gradients must equal \\(-1\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Conclude.',
                    workingLatex: 'm_{PQ} \\times m_{QR} = -1 \\quad \\Rightarrow \\quad PQ \\perp QR',
                    explanation: 'Since the product of the gradients is \\(-1\\), PQ and QR are perpendicular as required.'
                }
            ],
            finalAnswer: '(a) \\(PQ: y = -\\dfrac{2}{3}x + 4\\); \\(QR: y = \\dfrac{3}{2}x - 9\\). (b) \\(m_{PQ} \\times m_{QR} = -1\\), so PQ and QR are perpendicular.'
        }
    },

    {
        id: 'cg3-028',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 28',
        difficulty: 'Foundation',
        questionText: 'Triangle \\( ABC \\) has vertices \\( A(0, 0) \\), \\( B(4, 2) \\) and \\( C(2, 6) \\).\n\n(a) Find the equations of \\( AB \\), \\( BC \\) and \\( AC \\) in the form \\( y = mx + c \\).\n\n(b) What type of triangle is \\( ABC \\)? Justify your answer.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient of \\(AB\\).',
                    workingLatex: 'm_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{2 - 0}{4 - 0} = \\dfrac{2}{4} = \\dfrac{1}{2}',
                    explanation: 'Use the gradient formula with \\(A(0, 0)\\) and \\(B(4, 2)\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the equation of \\(AB\\).',
                    workingLatex: 'y = \\dfrac{1}{2}x + c \\quad \\Rightarrow \\quad 0 = \\dfrac{1}{2}(0) + c \\quad \\Rightarrow \\quad c = 0 \\quad \\Rightarrow \\quad y = \\dfrac{1}{2}x',
                    explanation: 'Since \\(A\\) is the origin, the \\(y\\)-intercept is \\(0\\).'
                },
                {
                    stepNumber: 3,
                    description: '(a) Find the gradient of \\(BC\\).',
                    workingLatex: 'm_{BC} = \\dfrac{6 - 2}{2 - 4} = \\dfrac{4}{-2} = -2',
                    explanation: 'Use the gradient formula with \\(B(4, 2)\\) and \\(C(2, 6)\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the equation of \\(BC\\).',
                    workingLatex: 'y = -2x + c \\quad \\Rightarrow \\quad 2 = -2(4) + c \\quad \\Rightarrow \\quad 2 = -8 + c \\quad \\Rightarrow \\quad c = 10 \\quad \\Rightarrow \\quad y = -2x + 10',
                    explanation: 'Substitute \\(B(4, 2)\\) to find \\(c\\).'
                },
                {
                    stepNumber: 5,
                    description: '(a) Find the gradient of \\(AC\\).',
                    workingLatex: 'm_{AC} = \\dfrac{6 - 0}{2 - 0} = \\dfrac{6}{2} = 3',
                    explanation: 'Use the gradient formula with \\(A(0, 0)\\) and \\(C(2, 6)\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find the equation of \\(AC\\).',
                    workingLatex: 'y = 3x + c \\quad \\Rightarrow \\quad 0 = 3(0) + c \\quad \\Rightarrow \\quad c = 0 \\quad \\Rightarrow \\quad y = 3x',
                    explanation: 'Since \\(A\\) is the origin, the \\(y\\)-intercept is \\(0\\).'
                },
                {
                    stepNumber: 7,
                    description: '(b) Check for perpendicular sides.',
                    workingLatex: 'm_{AB} \\times m_{BC} = \\dfrac{1}{2} \\times (-2) = -1',
                    explanation: 'The product of the gradients of \\(AB\\) and \\(BC\\) equals \\(-1\\), so \\(AB\\) is perpendicular to \\(BC\\).'
                },
                {
                    stepNumber: 8,
                    description: 'State the type of triangle.',
                    workingLatex: 'AB \\perp BC \\quad \\Rightarrow \\quad \\text{Triangle } ABC \\text{ is right-angled at } B.',
                    explanation: 'Since adjacent sides \\(AB\\) and \\(BC\\) are perpendicular, the triangle has a right angle at \\(B\\), where these sides meet.'
                }
            ],
            finalAnswer: '(a) \\(AB: y=\\frac{1}{2}x\\); \\(BC: y=-2x+10\\); \\(AC: y=3x\\). (b) Right-angled at B since \\(AB \\perp BC\\).'
        }
    },

    {
        id: 'cg3-029',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 29',
        difficulty: 'Foundation',
        questionText: 'Point \\( A = (2, 5) \\). The line \\( L \\) has equation \\( y = 3x - 4 \\). Find the equation of the line through \\( A \\) perpendicular to \\( L \\), and find where it meets \\( L \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_L = 3 \\quad \\Rightarrow \\quad m_\\perp = -\\dfrac{1}{3}',
                    explanation: 'The gradient of \\(L\\) is \\(3\\), so the perpendicular gradient is the negative reciprocal, \\(-\\frac{1}{3}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the equation through \\(A(2, 5)\\).',
                    workingLatex: 'y - 5 = -\\dfrac{1}{3}(x - 2)',
                    explanation: 'Use the point-slope form with the perpendicular gradient and point \\(A\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify.',
                    workingLatex: 'y - 5 = -\\dfrac{1}{3}x + \\dfrac{2}{3} \\quad \\Rightarrow \\quad y = -\\dfrac{1}{3}x + \\dfrac{2}{3} + 5 = -\\dfrac{1}{3}x + \\dfrac{17}{3}',
                    explanation: 'Convert \\(5\\) to \\(\\frac{15}{3}\\) and add: \\(\\frac{2}{3} + \\frac{15}{3} = \\frac{17}{3}\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set the two equations equal.',
                    workingLatex: '3x - 4 = -\\dfrac{1}{3}x + \\dfrac{17}{3}',
                    explanation: 'At the intersection, the \\(y\\)-values are equal, so we set \\(y = 3x - 4\\) equal to \\(y = -\\frac{1}{3}x + \\frac{17}{3}\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Multiply through by 3.',
                    workingLatex: '9x - 12 = -x + 17',
                    explanation: 'Multiply every term by \\(3\\) to clear the fractions.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\(x\\).',
                    workingLatex: '9x + x = 17 + 12 \\quad \\Rightarrow \\quad 10x = 29 \\quad \\Rightarrow \\quad x = \\dfrac{29}{10}',
                    explanation: 'Collect \\(x\\) terms on one side and constants on the other.'
                },
                {
                    stepNumber: 7,
                    description: 'Find \\(y\\).',
                    workingLatex: 'y = 3\\left(\\dfrac{29}{10}\\right) - 4 = \\dfrac{87}{10} - \\dfrac{40}{10} = \\dfrac{47}{10}',
                    explanation: 'Substitute \\(x = \\frac{29}{10}\\) into \\(y = 3x - 4\\) to find the \\(y\\)-coordinate of the intersection.'
                }
            ],
            finalAnswer: 'Perpendicular: \\(y = -\\dfrac{1}{3}x + \\dfrac{17}{3}\\); meets L at \\(\\left(\\dfrac{29}{10},\\ \\dfrac{47}{10}\\right)\\)'
        }
    },

    {
        id: 'cg3-030',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 30',
        difficulty: 'Foundation',
        questionText: 'Two lines are given: \\( L_1: 2x - y + 4 = 0 \\) and \\( L_2: x + 2y - 3 = 0 \\).\n\n(a) Show that \\( L_1 \\) and \\( L_2 \\) are perpendicular.\n\n(b) Find their point of intersection.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Rearrange \\(L_1\\) to find its gradient.',
                    workingLatex: '2x - y + 4 = 0 \\quad \\Rightarrow \\quad y = 2x + 4 \\quad \\Rightarrow \\quad m_1 = 2',
                    explanation: 'Isolate \\(y\\) to read off the gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange \\(L_2\\) to find its gradient.',
                    workingLatex: 'x + 2y - 3 = 0 \\quad \\Rightarrow \\quad 2y = -x + 3 \\quad \\Rightarrow \\quad y = -\\dfrac{1}{2}x + \\dfrac{3}{2} \\quad \\Rightarrow \\quad m_2 = -\\dfrac{1}{2}',
                    explanation: 'Isolate \\(y\\) to read off the gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Check the product of gradients.',
                    workingLatex: 'm_1 \\times m_2 = 2 \\times \\left(-\\dfrac{1}{2}\\right) = -1',
                    explanation: 'Since the product of the gradients equals \\(-1\\), the lines are perpendicular.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Rearrange \\(L_2\\) for \\(x\\).',
                    workingLatex: 'x + 2y - 3 = 0 \\quad \\Rightarrow \\quad x = 3 - 2y',
                    explanation: 'We will substitute this expression for \\(x\\) into \\(L_1\\) to solve simultaneously.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute into \\(L_1\\).',
                    workingLatex: '2(3 - 2y) - y + 4 = 0 \\quad \\Rightarrow \\quad 6 - 4y - y + 4 = 0',
                    explanation: 'Replace \\(x\\) with \\(3 - 2y\\) in the equation \\(2x - y + 4 = 0\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\(y\\).',
                    workingLatex: '10 - 5y = 0 \\quad \\Rightarrow \\quad 5y = 10 \\quad \\Rightarrow \\quad y = 2',
                    explanation: 'Collect like terms and solve.'
                },
                {
                    stepNumber: 7,
                    description: 'Find \\(x\\).',
                    workingLatex: 'x = 3 - 2(2) = 3 - 4 = -1',
                    explanation: 'Substitute \\(y = 2\\) back into \\(x = 3 - 2y\\).'
                }
            ],
            finalAnswer: '(a) Shown, gradients multiply to \\(-1\\); (b) Intersection at \\((-1, 2)\\)'
        }
    },

    // ─── TYPE F: Multi-part exam-style questions (Q31–35) ────────────────────

    {
        id: 'cg3-031',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 31',
        difficulty: 'Foundation',
        questionText: 'Line \\( L_1 \\) passes through \\( A(1, 3) \\) and \\( B(5, 11) \\).\n\n(a) Find the equation of \\( L_1 \\) in the form \\( y = mx + c \\).\n\n(b) Line \\( L_2 \\) is parallel to \\( L_1 \\) and passes through \\( C(3, -2) \\). Find the equation of \\( L_2 \\).\n\n(c) Line \\( L_3 \\) is perpendicular to \\( L_1 \\) and passes through \\( B \\). Find the equation of \\( L_3 \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient of \\(L_1\\).',
                    workingLatex: 'm = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{11 - 3}{5 - 1} = \\dfrac{8}{4} = 2',
                    explanation: 'Use the gradient formula with \\(A(1, 3)\\) and \\(B(5, 11)\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\(c\\) for \\(L_1\\).',
                    workingLatex: 'y = 2x + c \\quad \\Rightarrow \\quad 3 = 2(1) + c \\quad \\Rightarrow \\quad c = 1',
                    explanation: 'Substitute \\(A(1, 3)\\) into \\(y = 2x + c\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation of \\(L_1\\).',
                    workingLatex: 'L_1: \\quad y = 2x + 1',
                    explanation: 'This is the equation of \\(L_1\\) in slope-intercept form.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Use gradient \\(2\\) through \\(C(3, -2)\\).',
                    workingLatex: 'y = 2x + c \\quad \\Rightarrow \\quad -2 = 2(3) + c \\quad \\Rightarrow \\quad -2 = 6 + c \\quad \\Rightarrow \\quad c = -8',
                    explanation: 'Parallel lines have equal gradients, so \\(L_2\\) also has gradient \\(2\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation of \\(L_2\\).',
                    workingLatex: 'L_2: \\quad y = 2x - 8',
                    explanation: 'This is the equation of \\(L_2\\) in slope-intercept form.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m} = -\\dfrac{1}{2}',
                    explanation: 'The perpendicular gradient is the negative reciprocal of \\(2\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Substitute \\(B(5, 11)\\) into \\(y = -\\frac{1}{2}x + c\\).',
                    workingLatex: '11 = -\\dfrac{1}{2}(5) + c \\quad \\Rightarrow \\quad 11 = -\\dfrac{5}{2} + c \\quad \\Rightarrow \\quad c = 11 + \\dfrac{5}{2} = \\dfrac{27}{2}',
                    explanation: 'Convert \\(11\\) to \\(\\frac{22}{2}\\) then add: \\(\\frac{22}{2} + \\frac{5}{2} = \\frac{27}{2}\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Write the equation of \\(L_3\\).',
                    workingLatex: 'L_3: \\quad y = -\\dfrac{1}{2}x + \\dfrac{27}{2}',
                    explanation: 'This is the equation of \\(L_3\\) in slope-intercept form.'
                }
            ],
            finalAnswer: '(a)  y = 2x + 1 ; (b)  y = 2x - 8 ; (c)  y = -\\dfrac{1}{2}x + \\dfrac{27}{2} '
        }
    },

    {
        id: 'cg3-032',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 32',
        difficulty: 'Foundation',
        questionText: 'The line \\( L \\) has equation \\( 3x + 4y - 24 = 0 \\).\n\n(a) Find where \\( L \\) crosses the axes.\n\n(b) Find the equation of the line parallel to \\( L \\) that passes through \\( (4, -1) \\). Give your answer in the form \\( ax + by + c = 0 \\).\n\n(c) Find the equation of the line perpendicular to \\( L \\) that passes through \\( (0, 0) \\). Give your answer in the form \\( y = mx \\).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the \\(x\\)-intercept (set \\(y = 0\\)).',
                    workingLatex: '3x + 4(0) - 24 = 0 \\quad \\Rightarrow \\quad 3x = 24 \\quad \\Rightarrow \\quad x = 8',
                    explanation: 'To find where \\(L\\) crosses the \\(x\\)-axis, set \\(y = 0\\) and solve for \\(x\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the \\(y\\)-intercept (set \\(x = 0\\)).',
                    workingLatex: '3(0) + 4y - 24 = 0 \\quad \\Rightarrow \\quad 4y = 24 \\quad \\Rightarrow \\quad y = 6',
                    explanation: 'To find where \\(L\\) crosses the \\(y\\)-axis, set \\(x = 0\\) and solve for \\(y\\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Find the gradient of \\(L\\).',
                    workingLatex: '4y = -3x + 24 \\quad \\Rightarrow \\quad y = -\\dfrac{3}{4}x + 6 \\quad \\Rightarrow \\quad m = -\\dfrac{3}{4}',
                    explanation: 'Rearrange to \\(y = mx + c\\) form to read off the gradient.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\((4, -1)\\) into the parallel line.',
                    workingLatex: 'y = -\\dfrac{3}{4}x + c \\quad \\Rightarrow \\quad -1 = -\\dfrac{3}{4}(4) + c \\quad \\Rightarrow \\quad -1 = -3 + c \\quad \\Rightarrow \\quad c = 2',
                    explanation: 'The parallel line has the same gradient. Substitute the point to find \\(c\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange to \\(ax + by + c = 0\\).',
                    workingLatex: 'y = -\\dfrac{3}{4}x + 2 \\quad \\Rightarrow \\quad 4y = -3x + 8 \\quad \\Rightarrow \\quad 3x + 4y - 8 = 0',
                    explanation: 'Multiply through by \\(4\\) to clear fractions, then rearrange.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m} = -\\dfrac{1}{-\\frac{3}{4}} = \\dfrac{4}{3}',
                    explanation: 'The perpendicular gradient is the negative reciprocal of \\(-\\frac{3}{4}\\).'
                },
                {
                    stepNumber: 7,
                    description: 'Write the equation through \\((0, 0)\\).',
                    workingLatex: 'y = \\dfrac{4}{3}x + c \\quad \\Rightarrow \\quad 0 = \\dfrac{4}{3}(0) + c \\quad \\Rightarrow \\quad c = 0 \\quad \\Rightarrow \\quad y = \\dfrac{4}{3}x',
                    explanation: 'Since the line passes through the origin, \\(c = 0\\).'
                }
            ],
            finalAnswer: '(a) (8,0) and (0,6); (b) 3x+4y-8=0; (c) y=\\dfrac{4}{3}x'
        }
    },

    {
        id: 'cg3-033',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 33',
        difficulty: 'Foundation',
        questionText: 'The vertices of a quadrilateral are \\( A(0, 2) \\), \\( B(4, 4) \\), \\( C(6, 0) \\) and \\( D(2, -2) \\).\n\n(a) Find the gradients of all four sides.\n\n(b) Show that \\( ABCD \\) is a rectangle.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient of \\(AB\\).',
                    workingLatex: 'm_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{4 - 2}{4 - 0} = \\dfrac{2}{4} = \\dfrac{1}{2}',
                    explanation: 'Use the gradient formula with A(0, 2) and B(4, 4).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of \\(BC\\).',
                    workingLatex: 'm_{BC} = \\dfrac{0 - 4}{6 - 4} = \\dfrac{-4}{2} = -2',
                    explanation: 'Use the gradient formula with B(4, 4) and C(6, 0).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the gradient of \\(CD\\).',
                    workingLatex: 'm_{CD} = \\dfrac{-2 - 0}{2 - 6} = \\dfrac{-2}{-4} = \\dfrac{1}{2}',
                    explanation: 'Use the gradient formula with C(6, 0) and D(2, -2).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the gradient of \\(DA\\).',
                    workingLatex: 'm_{DA} = \\dfrac{2 - (-2)}{0 - 2} = \\dfrac{4}{-2} = -2',
                    explanation: 'Use the gradient formula with D(2, -2) and A(0, 2).'
                },
                {
                    stepNumber: 5,
                    description: '(b) Show opposite sides are parallel.',
                    workingLatex: 'm_{AB} = m_{CD} = \\dfrac{1}{2} \\quad \\text{and} \\quad m_{BC} = m_{DA} = -2',
                    explanation: 'AB is parallel to CD (same gradient) and BC is parallel to DA (same gradient), so ABCD is a parallelogram.'
                },
                {
                    stepNumber: 6,
                    description: 'Show adjacent sides are perpendicular.',
                    workingLatex: 'm_{AB} \\times m_{BC} = \\dfrac{1}{2} \\times (-2) = -1',
                    explanation: 'Since adjacent sides are perpendicular (product of gradients \\(= -1\\)), the parallelogram is a rectangle.'
                }
            ],
            finalAnswer: '(a)  m_{AB}=m_{CD}=\\frac{1}{2} ,  m_{BC}=m_{DA}=-2 ; (b) Opposite sides parallel and adjacent sides perpendicular, so ABCD is a rectangle.'
        }
    },

    {
        id: 'cg3-034',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 34',
        difficulty: 'Foundation',
        questionText: 'Line \\( L_1 \\) has equation \\( y = \\dfrac{1}{2}x + 3 \\). Line \\( L_2 \\) is perpendicular to \\( L_1 \\) and passes through \\( (4, 1) \\).\n\n(a) Find the equation of \\( L_2 \\) in the form \\( ax + by + c = 0 \\).\n\n(b) Find the coordinates of the point where \\( L_1 \\) and \\( L_2 \\) intersect.\n\n(c) Find the exact distance between the point \\( (4, 1) \\) and the intersection point.',
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the perpendicular gradient.',
                    workingLatex: 'm_{L_1} = \\dfrac{1}{2} \\quad \\Rightarrow \\quad m_\\perp = -\\dfrac{1}{\\frac{1}{2}} = -2',
                    explanation: 'The perpendicular gradient is the negative reciprocal of \\(\\frac{1}{2}\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute (4, 1) to find c.',
                    workingLatex: 'y = -2x + c \\quad \\Rightarrow \\quad 1 = -2(4) + c \\quad \\Rightarrow \\quad 1 = -8 + c \\quad \\Rightarrow \\quad c = 9',
                    explanation: 'Substitute the point \\((4, 1)\\) into \\(y = -2x + c\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange to \\(ax + by + c = 0\\).',
                    workingLatex: 'y = -2x + 9 \\quad \\Rightarrow \\quad 2x + y - 9 = 0',
                    explanation: 'Move all terms to one side.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Set the equations equal.',
                    workingLatex: '\\dfrac{1}{2}x + 3 = -2x + 9',
                    explanation: 'At the intersection, L1 and L2 have the same y-value.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\(x\\).',
                    workingLatex: '\\dfrac{1}{2}x + 2x = 9 - 3 \\quad \\Rightarrow \\quad \\dfrac{5}{2}x = 6 \\quad \\Rightarrow \\quad x = \\dfrac{12}{5}',
                    explanation: 'Collect \\(x\\) terms on one side. Add \\(2x\\) to both sides, then multiply by \\(\\frac{2}{5}\\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find \\(y\\).',
                    workingLatex: 'y = -2\\left(\\dfrac{12}{5}\\right) + 9 = -\\dfrac{24}{5} + \\dfrac{45}{5} = \\dfrac{21}{5}',
                    explanation: 'Substitute \\(x = \\frac{12}{5}\\) into \\(y = -2x + 9\\).'
                },
                {
                    stepNumber: 7,
                    description: '(c) Find the differences.',
                    workingLatex: '4 - \\dfrac{12}{5} = \\dfrac{20 - 12}{5} = \\dfrac{8}{5}, \\quad 1 - \\dfrac{21}{5} = \\dfrac{5 - 21}{5} = -\\dfrac{16}{5}',
                    explanation: 'Compute the horizontal and vertical differences between \\((4, 1)\\) and \\((\\frac{12}{5}, \\frac{21}{5})\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{\\left(\\dfrac{8}{5}\\right)^2 + \\left(-\\dfrac{16}{5}\\right)^2} = \\sqrt{\\dfrac{64}{25} + \\dfrac{256}{25}} = \\sqrt{\\dfrac{320}{25}} = \\dfrac{\\sqrt{320}}{5} = \\dfrac{8\\sqrt{5}}{5}',
                    explanation: 'Simplify: \\(320 = 64 \\times 5\\), so \\(\\sqrt{320} = 8\\sqrt{5}\\).'
                }
            ],
            finalAnswer: '(a) 2x+y-9=0; (b) \\left(\\dfrac{12}{5},\\ \\dfrac{21}{5}\\right); (c) \\dfrac{8\\sqrt{5}}{5}'
        }
    },

    {
        id: 'cg3-035',
        topicRef: 'CG3',
        topicTitle: 'Parallel and Perpendicular Lines 35',
        difficulty: 'Foundation',
        questionText: 'Points \\( A(2, 7) \\), \\( B(8, 5) \\) and \\( C(k, 1) \\) are given.\n\n(a) Find the equation of the perpendicular bisector of \\( AB \\).\n\n(b) Given that \\( C \\) lies on the perpendicular bisector of \\( AB \\), find the value of \\( k \\).\n\n(c) Find the exact distance \\( AC \\).',
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the midpoint of AB.',
                    workingLatex: 'M = \\left(\\dfrac{2+8}{2},\\ \\dfrac{7+5}{2}\\right) = \\left(\\dfrac{10}{2},\\ \\dfrac{12}{2}\\right) = (5,\\ 6)',
                    explanation: 'The perpendicular bisector passes through the midpoint of AB.'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of \\(AB\\).',
                    workingLatex: 'm_{AB} = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{5 - 7}{8 - 2} = \\dfrac{-2}{6} = -\\dfrac{1}{3}',
                    explanation: 'We need the gradient of \\(AB\\) to find the perpendicular gradient.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the perpendicular gradient.',
                    workingLatex: 'm_\\perp = -\\dfrac{1}{m_{AB}} = -\\dfrac{1}{-\\frac{1}{3}} = 3',
                    explanation: 'The perpendicular gradient is the negative reciprocal of \\(-\\frac{1}{3}\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\(M(5, 6)\\) into \\(y = 3x + c\\).',
                    workingLatex: '6 = 3(5) + c \\quad \\Rightarrow \\quad 6 = 15 + c \\quad \\Rightarrow \\quad c = -9',
                    explanation: 'Substitute the midpoint to find the \\(y\\)-intercept.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the perpendicular bisector.',
                    workingLatex: 'y = 3x - 9',
                    explanation: 'This is the equation of the perpendicular bisector of \\(AB\\).'
                },
                {
                    stepNumber: 6,
                    description: '(b) Substitute \\(C(k, 1)\\) into \\(y = 3x - 9\\).',
                    workingLatex: '1 = 3k - 9 \\quad \\Rightarrow \\quad 3k = 10 \\quad \\Rightarrow \\quad k = \\dfrac{10}{3}',
                    explanation: 'Since \\(C\\) lies on the perpendicular bisector, its coordinates must satisfy the equation.'
                },
                {
                    stepNumber: 7,
                    description: '(c) Find the horizontal difference.',
                    workingLatex: '\\dfrac{10}{3} - 2 = \\dfrac{10}{3} - \\dfrac{6}{3} = \\dfrac{4}{3}',
                    explanation: 'Find the difference in \\(x\\)-coordinates between \\(A(2, 7)\\) and \\(C(\\frac{10}{3}, 1)\\).'
                },
                {
                    stepNumber: 8,
                    description: 'Apply the distance formula.',
                    workingLatex: 'AC = \\sqrt{\\left(\\dfrac{4}{3}\\right)^2 + (1 - 7)^2} = \\sqrt{\\dfrac{16}{9} + 36} = \\sqrt{\\dfrac{16}{9} + \\dfrac{324}{9}} = \\sqrt{\\dfrac{340}{9}} = \\dfrac{\\sqrt{340}}{3} = \\dfrac{2\\sqrt{85}}{3}',
                    explanation: 'Simplify: \\(340 = 4 \\times 85\\), so \\(\\sqrt{340} = 2\\sqrt{85}\\).'
                }
            ],
            finalAnswer: '(a) y = 3x - 9; (b) k = \\dfrac{10}{3}; (c) AC = \\dfrac{2\\sqrt{85}}{3}'
        }
    },

    // ─── Q36–70: Additional Parallel & Perpendicular Lines ──────────────────

    {
        id: 'cg3-036', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 36', difficulty: 'Foundation',
        questionText: 'Find the equation of the line parallel to \\( y = 4x - 1 \\) that passes through \\( (2, 3) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the gradient.', workingLatex: 'm = 4', explanation: 'Parallel lines share the same gradient, so the required line also has gradient \\(4\\).' },
            { stepNumber: 2, description: 'Substitute \\((2, 3)\\) into \\(y = 4x + c\\).', workingLatex: '3 = 4(2) + c \\implies 3 = 8 + c \\implies c = -5', explanation: 'Substitute the point to find the \\(y\\)-intercept.' },
            { stepNumber: 3, description: 'Write the equation.', workingLatex: 'y = 4x - 5', explanation: '' }
        ], finalAnswer: 'y = 4x - 5' }
    },
    {
        id: 'cg3-037', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 37', difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( y = 3x + 2 \\) passing through \\( (6, 1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the perpendicular gradient.', workingLatex: 'm_\\perp = -\\dfrac{1}{3}', explanation: 'The gradient of \\(y = 3x + 2\\) is \\(3\\). The negative reciprocal is \\(-\\frac{1}{3}\\).' },
            { stepNumber: 2, description: 'Substitute \\((6, 1)\\) into \\(y = -\\frac{1}{3}x + c\\).', workingLatex: '1 = -\\dfrac{1}{3}(6) + c \\implies 1 = -2 + c \\implies c = 3', explanation: 'Substitute the point to find the \\(y\\)-intercept.' },
            { stepNumber: 3, description: 'Write the equation.', workingLatex: 'y = -\\dfrac{1}{3}x + 3', explanation: '' }
        ], finalAnswer: 'y = -\\frac{1}{3}x + 3' }
    },
    {
        id: 'cg3-038', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 38', difficulty: 'Foundation',
        questionText: 'Determine whether the lines \\( y = \\frac{2}{5}x + 1 \\) and \\( 2x - 5y + 10 = 0 \\) are parallel, perpendicular, or neither.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read the gradient of line 1.', workingLatex: 'm_1 = \\dfrac{2}{5}', explanation: 'The first line is already in \\(y = mx + c\\) form.' },
            { stepNumber: 2, description: 'Rearrange line 2 to find its gradient.', workingLatex: '2x - 5y + 10 = 0 \\implies 5y = 2x + 10 \\implies y = \\dfrac{2}{5}x + 2 \\implies m_2 = \\dfrac{2}{5}', explanation: 'Isolate y to read off the gradient.' },
            { stepNumber: 3, description: 'Compare the gradients.', workingLatex: 'm_1 = m_2 = \\dfrac{2}{5} \\implies \\text{parallel}', explanation: 'Since the gradients are equal, the lines are parallel. They are not the same line because their \\(y\\)-intercepts differ (\\(1\\) vs \\(2\\)).' }
        ], finalAnswer: 'Parallel' }
    },
    {
        id: 'cg3-039', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 39', difficulty: 'Foundation',
        questionText: 'Find the value of \\( k \\) if the lines \\( y = kx + 3 \\) and \\( y = -2x + 5 \\) are perpendicular.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up the perpendicularity condition.', workingLatex: 'm_1 \\times m_2 = -1 \\quad \\Rightarrow \\quad k \\times (-2) = -1', explanation: 'For perpendicular lines, the product of their gradients must equal \\(-1\\).' },
            { stepNumber: 2, description: 'Solve for \\(k\\).', workingLatex: '-2k = -1 \\quad \\Rightarrow \\quad k = \\dfrac{1}{2}', explanation: 'Divide both sides by \\(-2\\).' }
        ], finalAnswer: 'k = \\frac{1}{2}' }
    },
    {
        id: 'cg3-040', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 40', difficulty: 'Foundation',
        questionText: 'The line \\( L_1 \\) has equation \\( 3x + 4y = 12 \\). Find the equation of the line parallel to \\( L_1 \\) passing through the origin.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of \\(L_1\\).', workingLatex: '3x + 4y = 12 \\implies 4y = -3x + 12 \\implies y = -\\dfrac{3}{4}x + 3 \\implies m = -\\dfrac{3}{4}', explanation: 'Rearrange to \\(y = mx + c\\) form to read off the gradient.' },
            { stepNumber: 2, description: 'Write the parallel line through \\((0, 0)\\).', workingLatex: 'y = -\\dfrac{3}{4}x + c \\quad \\Rightarrow \\quad 0 = -\\dfrac{3}{4}(0) + c \\quad \\Rightarrow \\quad c = 0', explanation: 'Since the line passes through the origin, the \\(y\\)-intercept is \\(0\\).' },
            { stepNumber: 3, description: 'Write the equation.', workingLatex: 'y = -\\dfrac{3}{4}x', explanation: '' }
        ], finalAnswer: 'y = -\\frac{3}{4}x' }
    },
    {
        id: 'cg3-041', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 41', difficulty: 'Foundation',
        questionText: 'Find the equation of the line perpendicular to \\( 2x - 5y + 10 = 0 \\) passing through \\( (4, -1) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of the given line.', workingLatex: '2x - 5y + 10 = 0 \\implies 5y = 2x + 10 \\implies y = \\dfrac{2}{5}x + 2 \\implies m = \\dfrac{2}{5}', explanation: 'Rearrange to \\(y = mx + c\\) form.' },
            { stepNumber: 2, description: 'Find the perpendicular gradient.', workingLatex: 'm_\\perp = -\\dfrac{1}{\\frac{2}{5}} = -\\dfrac{5}{2}', explanation: 'The perpendicular gradient is the negative reciprocal of \\(\\frac{2}{5}\\).' },
            { stepNumber: 3, description: 'Substitute \\((4, -1)\\) into \\(y = -\\frac{5}{2}x + c\\).', workingLatex: '-1 = -\\dfrac{5}{2}(4) + c \\implies -1 = -10 + c \\implies c = 9', explanation: 'Substitute the point to find the \\(y\\)-intercept.' },
            { stepNumber: 4, description: 'Write the equation.', workingLatex: 'y = -\\dfrac{5}{2}x + 9', explanation: '' }
        ], finalAnswer: 'y = -\\frac{5}{2}x + 9' }
    },
    {
        id: 'cg3-042', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 42', difficulty: 'Foundation',
        questionText: 'Show that the lines \\( y = 5x - 3 \\) and \\( x + 5y = 20 \\) are perpendicular.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read the gradient of line 1.', workingLatex: 'm_1 = 5', explanation: 'The gradient of \\(y = 5x - 3\\) is \\(5\\).' },
            { stepNumber: 2, description: 'Find the gradient of line 2.', workingLatex: 'x + 5y = 20 \\implies 5y = -x + 20 \\implies y = -\\dfrac{1}{5}x + 4 \\implies m_2 = -\\dfrac{1}{5}', explanation: 'Rearrange to \\(y = mx + c\\) form.' },
            { stepNumber: 3, description: 'Check the product of gradients.', workingLatex: 'm_1 \\times m_2 = 5 \\times \\left(-\\dfrac{1}{5}\\right) = -1', explanation: 'Since the product equals \\(-1\\), the lines are perpendicular as required.' }
        ], finalAnswer: 'Product of gradients is -1, so perpendicular.' }
    },
    {
        id: 'cg3-043', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 43', difficulty: 'Foundation',
        questionText: 'Find the value of \\( p \\) such that the lines \\( px + 3y = 6 \\) and \\( 2x - y = 4 \\) are parallel.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of line 1.', workingLatex: 'px + 3y = 6 \\implies 3y = -px + 6 \\implies y = -\\dfrac{p}{3}x + 2 \\implies m_1 = -\\dfrac{p}{3}', explanation: 'Rearrange to \\(y = mx + c\\) form.' },
            { stepNumber: 2, description: 'Find the gradient of line 2.', workingLatex: '2x - y = 4 \\implies y = 2x - 4 \\implies m_2 = 2', explanation: 'Rearrange to \\(y = mx + c\\) form.' },
            { stepNumber: 3, description: 'Set gradients equal for parallel.', workingLatex: '-\\dfrac{p}{3} = 2 \\quad \\Rightarrow \\quad p = -6', explanation: 'For parallel lines the gradients must be equal. Multiply both sides by \\(-3\\).' }
        ], finalAnswer: 'p = -6' }
    },
    {
        id: 'cg3-044', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 44', difficulty: 'Foundation',
        questionText: 'The line \\( L \\) passes through \\( A(1, 5) \\) and \\( B(3, -1) \\). Find the equation of the line through \\( (4, 2) \\) perpendicular to \\( L \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of L.', workingLatex: 'm_L = \\dfrac{y_2 - y_1}{x_2 - x_1} = \\dfrac{-1 - 5}{3 - 1} = \\dfrac{-6}{2} = -3', explanation: 'Use the gradient formula with \\(A(1, 5)\\) and \\(B(3, -1)\\).' },
            { stepNumber: 2, description: 'Find the perpendicular gradient.', workingLatex: 'm_\\perp = -\\dfrac{1}{m_L} = -\\dfrac{1}{-3} = \\dfrac{1}{3}', explanation: 'The perpendicular gradient is the negative reciprocal of \\(-3\\).' },
            { stepNumber: 3, description: 'Substitute \\((4, 2)\\) into \\(y = \\frac{1}{3}x + c\\).', workingLatex: '2 = \\dfrac{1}{3}(4) + c \\implies 2 = \\dfrac{4}{3} + c \\implies c = 2 - \\dfrac{4}{3} = \\dfrac{2}{3}', explanation: 'Substitute the point to find the \\(y\\)-intercept. Convert \\(2\\) to \\(\\frac{6}{3}\\) before subtracting.' },
            { stepNumber: 4, description: 'Write the equation.', workingLatex: 'y = \\dfrac{1}{3}x + \\dfrac{2}{3}', explanation: '' }
        ], finalAnswer: 'y = \\frac{1}{3}x + \\frac{2}{3}' }
    },
    {
        id: 'cg3-045', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 45', difficulty: 'Foundation',
        questionText: 'Find the foot of the perpendicular from \\( P(3, 7) \\) to the line \\( y = 2x + 1 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Check whether \\(P\\) lies on the line.', workingLatex: 'y = 2(3) + 1 = 7', explanation: 'Substitute \\(x = 3\\) into \\(y = 2x + 1\\). Since we get \\(y = 7\\), which matches the \\(y\\)-coordinate of \\(P\\), the point \\(P\\) lies on the line.' },
            { stepNumber: 2, description: 'Conclude.', workingLatex: 'P(3,\\, 7) \\text{ lies on } y = 2x + 1', explanation: 'When the point lies on the line, the foot of the perpendicular is the point itself. No further calculation is needed.' }
        ], finalAnswer: 'P(3, 7) lies on the line, so the foot of the perpendicular is (3, 7).' }
    },
    {
        id: 'cg3-046', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 46', difficulty: 'Foundation',
        questionText: 'Find the foot of the perpendicular from \\( P(4, 5) \\) to the line \\( y = x + 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Check whether \\(P\\) lies on the line.', workingLatex: 'y = 4 + 1 = 5', explanation: 'Substitute \\(x = 4\\) into \\(y = x + 1\\). Since we get \\(y = 5\\), which matches the \\(y\\)-coordinate of \\(P\\), the point \\(P\\) lies on the line.' },
            { stepNumber: 2, description: 'Conclude.', workingLatex: 'P(4,\\, 5) \\text{ lies on } y = x + 1', explanation: 'When the point lies on the line, the foot of the perpendicular is the point itself. No further calculation is needed.' }
        ], finalAnswer: 'P(4, 5) lies on the line, so the foot of the perpendicular is (4, 5).' }
    },
    {
        id: 'cg3-047', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 47', difficulty: 'Foundation',
        questionText: 'Find the foot of the perpendicular from \\( P(1, 6) \\) to the line \\( y = 3x - 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the perpendicular gradient.', workingLatex: 'm = 3 \\quad \\Rightarrow \\quad m_\\perp = -\\dfrac{1}{3}', explanation: 'The gradient of \\(y = 3x - 2\\) is \\(3\\). The negative reciprocal is \\(-\\frac{1}{3}\\).' },
            { stepNumber: 2, description: 'Write the perpendicular through \\(P(1, 6)\\).', workingLatex: 'y - 6 = -\\dfrac{1}{3}(x - 1) \\quad \\Rightarrow \\quad y = -\\dfrac{1}{3}x + \\dfrac{1}{3} + 6 = -\\dfrac{1}{3}x + \\dfrac{19}{3}', explanation: 'Use point-slope form, then simplify. Convert \\(6\\) to \\(\\frac{18}{3}\\) and add \\(\\frac{1}{3}\\).' },
            { stepNumber: 3, description: 'Set the two equations equal.', workingLatex: '3x - 2 = -\\dfrac{1}{3}x + \\dfrac{19}{3}', explanation: 'At the intersection, the \\(y\\)-values are equal.' },
            { stepNumber: 4, description: 'Multiply through by \\(3\\).', workingLatex: '9x - 6 = -x + 19', explanation: 'Multiply every term by \\(3\\) to clear fractions.' },
            { stepNumber: 5, description: 'Solve for \\(x\\).', workingLatex: '9x + x = 19 + 6 \\quad \\Rightarrow \\quad 10x = 25 \\quad \\Rightarrow \\quad x = \\dfrac{5}{2}', explanation: 'Collect \\(x\\) terms on one side, constants on the other.' },
            { stepNumber: 6, description: 'Find \\(y\\).', workingLatex: 'y = 3\\left(\\dfrac{5}{2}\\right) - 2 = \\dfrac{15}{2} - 2 = \\dfrac{15}{2} - \\dfrac{4}{2} = \\dfrac{11}{2}', explanation: 'Substitute \\(x = \\frac{5}{2}\\) into \\(y = 3x - 2\\).' }
        ], finalAnswer: '\\left(\\frac{5}{2}, \\frac{11}{2}\\right)' }
    },
    {
        id: 'cg3-048', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 48', difficulty: 'Foundation',
        questionText: 'The line \\( L_1: y = -\\frac{3}{4}x + 6 \\) meets the x-axis at \\( A \\). Find the equation of the line through \\( A \\) perpendicular to \\( L_1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set \\(y = 0\\) to find \\(A\\).', workingLatex: '0 = -\\frac{3}{4}x + 6', explanation: 'The line meets the \\(x\\)-axis where \\(y = 0\\).' },
            { stepNumber: 2, description: 'Solve for \\(x\\).', workingLatex: '\\frac{3}{4}x = 6 \\implies x = 6 \\times \\frac{4}{3} = 8', explanation: 'Multiply both sides by \\(\\frac{4}{3}\\) to isolate \\(x\\).' },
            { stepNumber: 3, description: 'State the coordinates of A.', workingLatex: 'A = (8,\\, 0)', explanation: '' },
            { stepNumber: 4, description: 'Find the perpendicular gradient.', workingLatex: 'm_{L_1} = -\\frac{3}{4} \\implies m_{\\perp} = -\\frac{1}{-\\frac{3}{4}} = \\frac{4}{3}', explanation: 'The perpendicular gradient is the negative reciprocal: flip the fraction and change the sign.' },
            { stepNumber: 5, description: 'Write the equation using point-slope form.', workingLatex: 'y - 0 = \\frac{4}{3}(x - 8)', explanation: 'Use \\(y - y_1 = m(x - x_1)\\) with the point \\(A(8, 0)\\).' },
            { stepNumber: 6, description: 'Simplify.', workingLatex: 'y = \\frac{4}{3}x - \\frac{32}{3}', explanation: 'Distribute the gradient across the bracket.' }
        ], finalAnswer: 'y = \\frac{4}{3}x - \\frac{32}{3}' }
    },
    {
        id: 'cg3-049', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 49', difficulty: 'Foundation',
        questionText: 'Find the values of \\( k \\) for which \\( kx + 2y = 5 \\) is perpendicular to \\( 3x - 4y = 1 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of line 1.', workingLatex: 'kx + 2y = 5 \\implies 2y = -kx + 5 \\implies y = -\\frac{k}{2}x + \\frac{5}{2}', explanation: 'Rearrange to \\(y = mx + c\\) form. The gradient is \\(m_1 = -\\frac{k}{2}\\).' },
            { stepNumber: 2, description: 'Find the gradient of line 2.', workingLatex: '3x - 4y = 1 \\implies -4y = -3x + 1 \\implies y = \\frac{3}{4}x - \\frac{1}{4}', explanation: 'Rearrange to \\(y = mx + c\\) form. The gradient is \\(m_2 = \\frac{3}{4}\\).' },
            { stepNumber: 3, description: 'Set the product of gradients equal to \\(-1\\).', workingLatex: '-\\frac{k}{2} \\times \\frac{3}{4} = -1', explanation: 'For perpendicular lines, \\(m_1 \\times m_2 = -1\\).' },
            { stepNumber: 4, description: 'Simplify the left-hand side.', workingLatex: '-\\frac{3k}{8} = -1', explanation: 'Multiply the numerators and denominators.' },
            { stepNumber: 5, description: 'Solve for \\(k\\).', workingLatex: '\\frac{3k}{8} = 1 \\implies 3k = 8 \\implies k = \\frac{8}{3}', explanation: 'The negatives cancel, then multiply both sides by \\(8\\) and divide by \\(3\\).' }
        ], finalAnswer: 'k = \\frac{8}{3}' }
    },
    {
        id: 'cg3-050', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 50', difficulty: 'Foundation',
        questionText: 'A triangle has vertices \\( A(0, 0) \\), \\( B(6, 0) \\), \\( C(2, 4) \\). Find the equation of the altitude from \\( C \\) to \\( AB \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of \\(AB\\).', workingLatex: 'm_{AB} = \\frac{0 - 0}{6 - 0} = \\frac{0}{6} = 0', explanation: '\\(A\\) and \\(B\\) both have \\(y\\)-coordinate \\(0\\), so \\(AB\\) lies along the \\(x\\)-axis and is horizontal.' },
            { stepNumber: 2, description: 'Determine the perpendicular direction.', workingLatex: '\\text{Perpendicular to a horizontal line is vertical.}', explanation: 'A vertical line has undefined gradient and the equation x = constant.' },
            { stepNumber: 3, description: 'Write the altitude through C.', workingLatex: 'x = 2', explanation: 'The altitude passes through \\(C(2, 4)\\), so the vertical line through \\(C\\) is \\(x = 2\\).' }
        ], finalAnswer: 'x = 2' }
    },
    {
        id: 'cg3-051', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 51', difficulty: 'Foundation',
        questionText: 'Find the equation of the altitude from \\( A(0, 0) \\) to \\( BC \\) where \\( B(6, 0) \\) and \\( C(2, 4) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of \\(BC\\).', workingLatex: 'm_{BC} = \\frac{y_C - y_B}{x_C - x_B} = \\frac{4 - 0}{2 - 6} = \\frac{4}{-4} = -1', explanation: 'Substitute the coordinates of \\(B(6, 0)\\) and \\(C(2, 4)\\) into the gradient formula.' },
            { stepNumber: 2, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{-1} = 1', explanation: 'The negative reciprocal of \\(-1\\) is \\(1\\). A common mistake is forgetting to change the sign.' },
            { stepNumber: 3, description: 'Write the altitude through \\(A(0, 0)\\).', workingLatex: 'y - 0 = 1(x - 0) \\implies y = x', explanation: 'The line passes through the origin with gradient \\(1\\), giving \\(y = x\\).' }
        ], finalAnswer: 'y = x' }
    },
    {
        id: 'cg3-052', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 52', difficulty: 'Foundation',
        questionText: 'Find the perpendicular distance from \\( (2, -1) \\) to the line \\( 4x + 3y - 7 = 0 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the perpendicular distance formula.', workingLatex: 'd = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}', explanation: 'For a line \\(ax + by + c = 0\\) and a point \\((x_1, y_1)\\), this formula gives the shortest distance.' },
            { stepNumber: 2, description: 'Substitute the values.', workingLatex: 'd = \\frac{|4(2) + 3(-1) - 7|}{\\sqrt{4^2 + 3^2}}', explanation: 'Here \\(a = 4\\), \\(b = 3\\), \\(c = -7\\) and the point is \\((2, -1)\\).' },
            { stepNumber: 3, description: 'Evaluate the numerator.', workingLatex: '|8 - 3 - 7| = |-2| = 2', explanation: 'Take the absolute value of the result.' },
            { stepNumber: 4, description: 'Evaluate the denominator.', workingLatex: '\\sqrt{16 + 9} = \\sqrt{25} = 5', explanation: '' },
            { stepNumber: 5, description: 'State the distance.', workingLatex: 'd = \\frac{2}{5}', explanation: '' }
        ], finalAnswer: '\\frac{2}{5}' }
    },
    {
        id: 'cg3-053', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 53', difficulty: 'Foundation',
        questionText: 'The lines \\( y = 2x + c \\) and \\( y = 2x + d \\) are 3 units apart. Find \\( |c - d| \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite the lines in general form.', workingLatex: 'y = 2x + c \\implies 2x - y + c = 0 \\quad \\text{and} \\quad 2x - y + d = 0', explanation: 'Rearrange each line into \\(ax + by + c = 0\\) form so the distance formula can be applied.' },
            { stepNumber: 2, description: 'Apply the parallel lines distance formula.', workingLatex: '\\text{Distance} = \\frac{|c - d|}{\\sqrt{2^2 + (-1)^2}} = \\frac{|c - d|}{\\sqrt{5}}', explanation: 'For parallel lines \\(ax + by + c_1 = 0\\) and \\(ax + by + c_2 = 0\\), the distance is \\(\\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}\\).' },
            { stepNumber: 3, description: 'Set the distance equal to 3.', workingLatex: '\\frac{|c - d|}{\\sqrt{5}} = 3', explanation: '' },
            { stepNumber: 4, description: 'Solve for |c - d|.', workingLatex: '|c - d| = 3\\sqrt{5}', explanation: 'Multiply both sides by \\(\\sqrt{5}\\).' }
        ], finalAnswer: '|c - d| = 3\\sqrt{5}' }
    },
    {
        id: 'cg3-054', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 54', difficulty: 'Foundation',
        questionText: 'Find the equation of the line through \\( (5, -3) \\) parallel to \\( 2x + 7y = 14 \\). Give your answer in the form \\( ax + by + c = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of the given line.', workingLatex: '2x + 7y = 14 \\implies 7y = -2x + 14 \\implies y = -\\frac{2}{7}x + 2', explanation: 'Rearrange to \\(y = mx + c\\) form to read off the gradient \\(m = -\\frac{2}{7}\\).' },
            { stepNumber: 2, description: 'State the parallel gradient.', workingLatex: 'm = -\\frac{2}{7}', explanation: 'Parallel lines have the same gradient.' },
            { stepNumber: 3, description: 'Use point-slope form with \\((5, -3)\\).', workingLatex: 'y - (-3) = -\\frac{2}{7}(x - 5) \\implies y + 3 = -\\frac{2}{7}(x - 5)', explanation: 'Substitute the point and gradient into \\(y - y_1 = m(x - x_1)\\).' },
            { stepNumber: 4, description: 'Multiply through by \\(7\\).', workingLatex: '7y + 21 = -2(x - 5) = -2x + 10', explanation: 'Clear the fraction by multiplying every term by \\(7\\).' },
            { stepNumber: 5, description: 'Rearrange to \\(ax + by + c = 0\\).', workingLatex: '2x + 7y + 21 - 10 = 0 \\implies 2x + 7y + 11 = 0', explanation: 'Bring all terms to one side.' }
        ], finalAnswer: '2x + 7y + 11 = 0' }
    },
    {
        id: 'cg3-055', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 55', difficulty: 'Foundation',
        questionText: 'Two perpendicular lines meet at \\( (3, 4) \\). One has gradient 2. Find the equations of both lines.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the equation of Line 1.', workingLatex: 'y - 4 = 2(x - 3)', explanation: 'Use point-slope form with gradient \\(2\\) and the point \\((3, 4)\\).' },
            { stepNumber: 2, description: 'Simplify Line 1.', workingLatex: 'y - 4 = 2x - 6 \\implies y = 2x - 2', explanation: 'Expand the bracket and add 4 to both sides.' },
            { stepNumber: 3, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{2}', explanation: 'The negative reciprocal of \\(2\\) is \\(-\\frac{1}{2}\\).' },
            { stepNumber: 4, description: 'Write the equation of Line 2.', workingLatex: 'y - 4 = -\\frac{1}{2}(x - 3)', explanation: 'Use point-slope form with gradient \\(-\\frac{1}{2}\\) and the same point \\((3, 4)\\).' },
            { stepNumber: 5, description: 'Simplify Line 2.', workingLatex: 'y - 4 = -\\frac{1}{2}x + \\frac{3}{2} \\implies y = -\\frac{1}{2}x + \\frac{3}{2} + 4 = -\\frac{1}{2}x + \\frac{11}{2}', explanation: 'Expand and add \\(4 = \\frac{8}{2}\\) to get \\(\\frac{3}{2} + \\frac{8}{2} = \\frac{11}{2}\\).' }
        ], finalAnswer: 'y = 2x - 2 and y = -\\frac{1}{2}x + \\frac{11}{2}' }
    },
    {
        id: 'cg3-056', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 56', difficulty: 'Foundation',
        questionText: 'Show that the quadrilateral with vertices \\( A(0,1) \\), \\( B(4,3) \\), \\( C(3,5) \\), \\( D(-1,3) \\) is a rectangle.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of \\(AB\\).', workingLatex: 'm_{AB} = \\frac{3 - 1}{4 - 0} = \\frac{2}{4} = \\frac{1}{2}', explanation: 'Substitute \\(A(0,1)\\) and \\(B(4,3)\\) into the gradient formula.' },
            { stepNumber: 2, description: 'Find the gradient of \\(BC\\).', workingLatex: 'm_{BC} = \\frac{5 - 3}{3 - 4} = \\frac{2}{-1} = -2', explanation: 'Substitute \\(B(4,3)\\) and \\(C(3,5)\\) into the gradient formula.' },
            { stepNumber: 3, description: 'Check \\(AB\\) is perpendicular to \\(BC\\).', workingLatex: 'm_{AB} \\times m_{BC} = \\frac{1}{2} \\times (-2) = -1 \\checkmark', explanation: 'The product is \\(-1\\), so \\(AB\\) and \\(BC\\) are perpendicular.' },
            { stepNumber: 4, description: 'Find the gradient of \\(CD\\).', workingLatex: 'm_{CD} = \\frac{3 - 5}{-1 - 3} = \\frac{-2}{-4} = \\frac{1}{2}', explanation: 'Substitute \\(C(3,5)\\) and \\(D(-1,3)\\). Since \\(m_{CD} = m_{AB}\\), \\(CD\\) is parallel to \\(AB\\).' },
            { stepNumber: 5, description: 'Find the gradient of \\(DA\\).', workingLatex: 'm_{DA} = \\frac{1 - 3}{0 - (-1)} = \\frac{-2}{1} = -2', explanation: 'Substitute \\(D(-1,3)\\) and \\(A(0,1)\\). Since \\(m_{DA} = m_{BC}\\), \\(DA\\) is parallel to \\(BC\\).' },
            { stepNumber: 6, description: 'Conclude ABCD is a rectangle.', workingLatex: 'AB \\parallel CD,\\; BC \\parallel DA,\\; AB \\perp BC', explanation: 'Opposite sides are parallel and adjacent sides are perpendicular, so ABCD is a rectangle.' }
        ], finalAnswer: 'Opposite sides parallel, adjacent sides perpendicular: ABCD is a rectangle.' }
    },
    {
        id: 'cg3-057', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 57', difficulty: 'Foundation',
        questionText: 'The line \\( L \\) passes through \\( (0, 5) \\) perpendicular to \\( y = -\\frac{2}{3}x + 4 \\). Where does \\( L \\) cross the x-axis?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the perpendicular gradient.', workingLatex: 'm = -\\frac{2}{3} \\implies m_{\\perp} = -\\frac{1}{-\\frac{2}{3}} = \\frac{3}{2}', explanation: 'The negative reciprocal of \\(-\\frac{2}{3}\\) is \\(\\frac{3}{2}\\).' },
            { stepNumber: 2, description: 'Write the equation of L.', workingLatex: 'y - 5 = \\frac{3}{2}(x - 0) \\implies y = \\frac{3}{2}x + 5', explanation: '\\(L\\) passes through \\((0, 5)\\) with gradient \\(\\frac{3}{2}\\). Since the point is on the \\(y\\)-axis, \\(5\\) is the \\(y\\)-intercept.' },
            { stepNumber: 3, description: 'Set y = 0 to find the x-intercept.', workingLatex: '0 = \\frac{3}{2}x + 5', explanation: 'The line crosses the \\(x\\)-axis where \\(y = 0\\).' },
            { stepNumber: 4, description: 'Solve for \\(x\\).', workingLatex: '\\frac{3}{2}x = -5 \\implies x = -5 \\times \\frac{2}{3} = -\\frac{10}{3}', explanation: 'Multiply both sides by \\(\\frac{2}{3}\\).' }
        ], finalAnswer: '\\left(-\\frac{10}{3}, 0\\right)' }
    },
    {
        id: 'cg3-058', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 58', difficulty: 'Foundation',
        questionText: 'Find the equation of the perpendicular bisector of the segment from \\( (1, -3) \\) to \\( (5, 1) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the midpoint.', workingLatex: 'M = \\left(\\frac{1 + 5}{2},\\, \\frac{-3 + 1}{2}\\right) = \\left(\\frac{6}{2},\\, \\frac{-2}{2}\\right) = (3,\\, -1)', explanation: 'The perpendicular bisector passes through the midpoint of the segment.' },
            { stepNumber: 2, description: 'Find the gradient of the segment.', workingLatex: 'm = \\frac{1 - (-3)}{5 - 1} = \\frac{4}{4} = 1', explanation: 'Substitute the endpoints \\((1, -3)\\) and \\((5, 1)\\) into the gradient formula.' },
            { stepNumber: 3, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{1} = -1', explanation: 'The negative reciprocal of \\(1\\) is \\(-1\\).' },
            { stepNumber: 4, description: 'Write the equation through \\(M(3, -1)\\).', workingLatex: 'y - (-1) = -1(x - 3) \\implies y + 1 = -(x - 3)', explanation: 'Use point-slope form with the midpoint and perpendicular gradient.' },
            { stepNumber: 5, description: 'Simplify.', workingLatex: 'y + 1 = -x + 3 \\implies y = -x + 2', explanation: 'Subtract \\(1\\) from both sides.' }
        ], finalAnswer: 'y = -x + 2' }
    },
    {
        id: 'cg3-059', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 59', difficulty: 'Foundation',
        questionText: 'The line \\( y = mx + 3 \\) is parallel to the line joining \\( (1, 2) \\) and \\( (4, 8) \\). Find \\( m \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of the line joining the two points.', workingLatex: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2', explanation: 'Substitute \\((1, 2)\\) and \\((4, 8)\\) into the gradient formula.' },
            { stepNumber: 2, description: 'State the value of m.', workingLatex: 'm = 2', explanation: 'Parallel lines have the same gradient, so the gradient of \\(y = mx + 3\\) must also be \\(2\\).' }
        ], finalAnswer: 'm = 2' }
    },
    {
        id: 'cg3-060', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 60', difficulty: 'Foundation',
        questionText: 'Three lines have equations \\( L_1: y = 3x \\), \\( L_2: y = -\\frac{1}{3}x + 4 \\), \\( L_3: y = 3x - 5 \\). Which pairs are parallel? Which are perpendicular?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off the gradients.', workingLatex: 'm_1 = 3, \\quad m_2 = -\\frac{1}{3}, \\quad m_3 = 3', explanation: 'Each line is in \\(y = mx + c\\) form, so the gradient is the coefficient of \\(x\\).' },
            { stepNumber: 2, description: 'Check for parallel pairs.', workingLatex: 'm_1 = m_3 = 3 \\implies L_1 \\parallel L_3', explanation: '\\(L_1\\) and \\(L_3\\) have equal gradients, so they are parallel.' },
            { stepNumber: 3, description: 'Check \\(L_1\\) and \\(L_2\\) for perpendicularity.', workingLatex: 'm_1 \\times m_2 = 3 \\times \\left(-\\frac{1}{3}\\right) = -1 \\implies L_1 \\perp L_2', explanation: 'The product of the gradients is \\(-1\\), so they are perpendicular.' },
            { stepNumber: 4, description: 'Check \\(L_2\\) and \\(L_3\\) for perpendicularity.', workingLatex: 'm_2 \\times m_3 = -\\frac{1}{3} \\times 3 = -1 \\implies L_2 \\perp L_3', explanation: 'The product is again \\(-1\\), so \\(L_2\\) is also perpendicular to \\(L_3\\).' }
        ], finalAnswer: 'L1 parallel L3; L1 perp L2; L2 perp L3' }
    },
    {
        id: 'cg3-061', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 61', difficulty: 'Foundation',
        questionText: 'Find the reflection of the point \\( (5, 2) \\) in the line \\( y = x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the reflection rule for \\(y = x\\).', workingLatex: '\\text{Reflection in } y = x: \\quad (a, b) \\to (b, a)', explanation: 'Reflecting in the line \\(y = x\\) swaps the \\(x\\) and \\(y\\) coordinates.' },
            { stepNumber: 2, description: 'Apply the rule to \\((5, 2)\\).', workingLatex: '(5, 2) \\to (2, 5)', explanation: 'Swap \\(5\\) and \\(2\\) to get the reflected point.' }
        ], finalAnswer: '(2, 5)' }
    },
    {
        id: 'cg3-062', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 62', difficulty: 'Foundation',
        questionText: 'Find the value of \\( a \\) if the line \\( ax + 6y = 12 \\) is perpendicular to \\( 2x + 3y = 9 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of line 1.', workingLatex: 'ax + 6y = 12 \\implies 6y = -ax + 12 \\implies y = -\\frac{a}{6}x + 2', explanation: 'Rearrange to \\(y = mx + c\\) form. The gradient is \\(m_1 = -\\frac{a}{6}\\).' },
            { stepNumber: 2, description: 'Find the gradient of line 2.', workingLatex: '2x + 3y = 9 \\implies 3y = -2x + 9 \\implies y = -\\frac{2}{3}x + 3', explanation: 'Rearrange to \\(y = mx + c\\) form. The gradient is \\(m_2 = -\\frac{2}{3}\\).' },
            { stepNumber: 3, description: 'Set the product of gradients equal to \\(-1\\).', workingLatex: '\\left(-\\frac{a}{6}\\right) \\times \\left(-\\frac{2}{3}\\right) = -1', explanation: 'For perpendicular lines, \\(m_1 \\times m_2 = -1\\).' },
            { stepNumber: 4, description: 'Simplify the left-hand side.', workingLatex: '\\frac{2a}{18} = -1 \\implies \\frac{a}{9} = -1', explanation: 'The two negatives multiply to give a positive fraction.' },
            { stepNumber: 5, description: 'Solve for \\(a\\).', workingLatex: 'a = -9', explanation: 'Multiply both sides by \\(9\\).' }
        ], finalAnswer: 'a = -9' }
    },
    {
        id: 'cg3-063', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 63', difficulty: 'Foundation',
        questionText: 'A rhombus has vertices at \\( (0, 3) \\), \\( (4, 0) \\), \\( (0, -3) \\), \\( (-4, 0) \\). Show that its diagonals are perpendicular.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the diagonals.', workingLatex: '\\text{Diagonal 1: } (0, 3) \\text{ to } (0, -3); \\quad \\text{Diagonal 2: } (4, 0) \\text{ to } (-4, 0)', explanation: 'A rhombus has two diagonals connecting opposite vertices.' },
            { stepNumber: 2, description: 'Find the gradient of Diagonal 1.', workingLatex: 'm_1 = \\frac{3 - (-3)}{0 - 0} = \\frac{6}{0} = \\text{undefined}', explanation: 'The \\(x\\)-coordinates are the same, so this diagonal is vertical.' },
            { stepNumber: 3, description: 'Find the gradient of Diagonal 2.', workingLatex: 'm_2 = \\frac{0 - 0}{4 - (-4)} = \\frac{0}{8} = 0', explanation: 'The \\(y\\)-coordinates are the same, so this diagonal is horizontal.' },
            { stepNumber: 4, description: 'Conclude perpendicularity.', workingLatex: '\\text{Vertical} \\perp \\text{Horizontal}', explanation: 'A vertical line and a horizontal line are always perpendicular, so the diagonals are perpendicular.' }
        ], finalAnswer: 'One diagonal is vertical, the other horizontal: they are perpendicular.' }
    },
    {
        id: 'cg3-064', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 64', difficulty: 'Foundation',
        questionText: 'Find the area of the triangle formed by \\( y = 2x \\), \\( y = -\\frac{1}{2}x + 5 \\), and the x-axis.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the intersection of the two lines.', workingLatex: '2x = -\\frac{1}{2}x + 5', explanation: 'Set the two \\(y\\)-expressions equal to each other.' },
            { stepNumber: 2, description: 'Collect \\(x\\) terms.', workingLatex: '2x + \\frac{1}{2}x = 5 \\implies \\frac{5}{2}x = 5', explanation: 'Add \\(\\frac{1}{2}x\\) to both sides.' },
            { stepNumber: 3, description: 'Solve for \\(x\\) and \\(y\\).', workingLatex: 'x = 5 \\times \\frac{2}{5} = 2, \\quad y = 2(2) = 4', explanation: 'Substitute \\(x = 2\\) back into \\(y = 2x\\) to find \\(y\\).' },
            { stepNumber: 4, description: 'Find where \\(y = 2x\\) meets the \\(x\\)-axis.', workingLatex: '0 = 2x \\implies x = 0', explanation: 'Set \\(y = 0\\). This gives the origin \\((0, 0)\\).' },
            { stepNumber: 5, description: 'Find where \\(y = -\\frac{1}{2}x + 5\\) meets the \\(x\\)-axis.', workingLatex: '0 = -\\frac{1}{2}x + 5 \\implies \\frac{1}{2}x = 5 \\implies x = 10', explanation: 'Set \\(y = 0\\). This gives the point \\((10, 0)\\).' },
            { stepNumber: 6, description: 'Identify the triangle vertices.', workingLatex: '(0,\\, 0),\\; (10,\\, 0),\\; (2,\\, 4)', explanation: 'The base runs along the \\(x\\)-axis from \\((0, 0)\\) to \\((10, 0)\\), so the base \\(= 10\\) and height \\(= 4\\).' },
            { stepNumber: 7, description: 'Calculate the area.', workingLatex: '\\text{Area} = \\frac{1}{2} \\times 10 \\times 4 = 20', explanation: 'Use the formula Area \\(= \\frac{1}{2} \\times\\) base \\(\\times\\) height.' }
        ], finalAnswer: '20 square units' }
    },
    {
        id: 'cg3-065', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 65', difficulty: 'Foundation',
        questionText: 'The perpendicular from \\( A(0, 4) \\) to \\( y = 2x - 3 \\) meets the line at \\( B \\). Find the coordinates of \\( B \\) and the length \\( AB \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the perpendicular gradient.', workingLatex: 'm = 2 \\implies m_{\\perp} = -\\frac{1}{2}', explanation: 'The line \\(y = 2x - 3\\) has gradient \\(2\\). The negative reciprocal is \\(-\\frac{1}{2}\\).' },
            { stepNumber: 2, description: 'Write the perpendicular from \\(A\\).', workingLatex: 'y - 4 = -\\frac{1}{2}(x - 0) \\implies y = -\\frac{1}{2}x + 4', explanation: 'Use point-slope form with \\(A(0, 4)\\) and gradient \\(-\\frac{1}{2}\\).' },
            { stepNumber: 3, description: 'Set the two lines equal.', workingLatex: '2x - 3 = -\\frac{1}{2}x + 4', explanation: 'At point \\(B\\), the perpendicular meets the line \\(y = 2x - 3\\).' },
            { stepNumber: 4, description: 'Collect \\(x\\) terms.', workingLatex: '2x + \\frac{1}{2}x = 4 + 3 \\implies \\frac{5}{2}x = 7', explanation: 'Add \\(\\frac{1}{2}x\\) to both sides and add \\(3\\) to both sides.' },
            { stepNumber: 5, description: 'Solve for \\(x\\).', workingLatex: 'x = 7 \\times \\frac{2}{5} = \\frac{14}{5}', explanation: 'Multiply both sides by \\(\\frac{2}{5}\\).' },
            { stepNumber: 6, description: 'Find \\(y\\).', workingLatex: 'y = 2 \\times \\frac{14}{5} - 3 = \\frac{28}{5} - \\frac{15}{5} = \\frac{13}{5}', explanation: 'Substitute \\(x\\) into \\(y = 2x - 3\\).' },
            { stepNumber: 7, description: 'State the coordinates of B.', workingLatex: 'B = \\left(\\frac{14}{5},\\, \\frac{13}{5}\\right)', explanation: '' },
            { stepNumber: 8, description: 'Find AB using the distance formula.', workingLatex: 'AB = \\sqrt{\\left(\\frac{14}{5} - 0\\right)^2 + \\left(\\frac{13}{5} - 4\\right)^2} = \\sqrt{\\frac{196}{25} + \\left(-\\frac{7}{5}\\right)^2}', explanation: '\\(\\frac{13}{5} - 4 = \\frac{13}{5} - \\frac{20}{5} = -\\frac{7}{5}\\).' },
            { stepNumber: 9, description: 'Simplify the distance.', workingLatex: 'AB = \\sqrt{\\frac{196}{25} + \\frac{49}{25}} = \\sqrt{\\frac{245}{25}} = \\frac{\\sqrt{245}}{5} = \\frac{7\\sqrt{5}}{5}', explanation: '\\(245 = 49 \\times 5\\), so \\(\\sqrt{245} = 7\\sqrt{5}\\).' }
        ], finalAnswer: 'B = \\left(\\frac{14}{5}, \\frac{13}{5}\\right); AB = \\frac{7\\sqrt{5}}{5}' }
    },
    {
        id: 'cg3-066', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 66', difficulty: 'Foundation',
        questionText: 'The line \\( L_1 \\) has equation \\( 5x - y = 10 \\). The line \\( L_2 \\) is parallel to \\( L_1 \\) and passes through \\( (-1, 3) \\). Find where \\( L_2 \\) crosses the y-axis.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of \\(L_1\\).', workingLatex: '5x - y = 10 \\implies y = 5x - 10', explanation: 'Rearrange to \\(y = mx + c\\) form. The gradient is \\(m = 5\\).' },
            { stepNumber: 2, description: 'State the parallel gradient.', workingLatex: 'm = 5', explanation: 'Parallel lines share the same gradient.' },
            { stepNumber: 3, description: 'Write L2 using point-slope form.', workingLatex: 'y - 3 = 5(x - (-1)) \\implies y - 3 = 5(x + 1)', explanation: 'Use the point \\((-1, 3)\\) and gradient \\(5\\).' },
            { stepNumber: 4, description: 'Expand and simplify.', workingLatex: 'y - 3 = 5x + 5 \\implies y = 5x + 8', explanation: 'Add \\(3\\) to both sides.' },
            { stepNumber: 5, description: 'Find the y-axis crossing.', workingLatex: 'x = 0: \\quad y = 5(0) + 8 = 8', explanation: 'The \\(y\\)-intercept is the constant term \\(c = 8\\).' }
        ], finalAnswer: '(0, 8)' }
    },
    {
        id: 'cg3-067', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 67', difficulty: 'Foundation',
        questionText: 'Two lines are \\( L_1: y = ax + 3 \\) and \\( L_2: y = (2a+1)x - 5 \\). Find \\( a \\) if they are: (a) parallel; (b) perpendicular.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) State the parallel condition.', workingLatex: 'm_1 = m_2 \\implies a = 2a + 1', explanation: 'Parallel lines have equal gradients. \\(L_1\\) has gradient \\(a\\), \\(L_2\\) has gradient \\(2a + 1\\).' },
            { stepNumber: 2, description: 'Solve for \\(a\\).', workingLatex: 'a - 2a = 1 \\implies -a = 1 \\implies a = -1', explanation: 'Subtract \\(2a\\) from both sides.' },
            { stepNumber: 3, description: '(b) State the perpendicular condition.', workingLatex: 'm_1 \\times m_2 = -1 \\implies a(2a + 1) = -1', explanation: 'Perpendicular lines have gradients whose product is \\(-1\\).' },
            { stepNumber: 4, description: 'Expand and rearrange.', workingLatex: '2a^2 + a = -1 \\implies 2a^2 + a + 1 = 0', explanation: 'Add \\(1\\) to both sides to set the equation to zero.' },
            { stepNumber: 5, description: 'Calculate the discriminant.', workingLatex: '\\Delta = b^2 - 4ac = 1^2 - 4(2)(1) = 1 - 8 = -7', explanation: 'A negative discriminant means no real roots.' },
            { stepNumber: 6, description: 'State the conclusion.', workingLatex: '\\Delta < 0 \\implies \\text{no real solutions}', explanation: 'There is no real value of \\(a\\) for which the lines are perpendicular.' }
        ], finalAnswer: '(a) a = -1; (b) No real value of a.' }
    },
    {
        id: 'cg3-068', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 68', difficulty: 'Foundation',
        questionText: 'Find the equation of the line through the intersection of \\( y = x + 2 \\) and \\( y = 3x - 4 \\) that is perpendicular to \\( y = x + 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two equations equal.', workingLatex: 'x + 2 = 3x - 4', explanation: 'At the intersection, both \\(y\\)-values are equal.' },
            { stepNumber: 2, description: 'Solve for \\(x\\).', workingLatex: '2 + 4 = 3x - x \\implies 6 = 2x \\implies x = 3', explanation: 'Collect \\(x\\) terms on one side and constants on the other.' },
            { stepNumber: 3, description: 'Find \\(y\\).', workingLatex: 'y = 3 + 2 = 5', explanation: 'Substitute \\(x = 3\\) into \\(y = x + 2\\).' },
            { stepNumber: 4, description: 'State the gradient of \\(y = x + 2\\).', workingLatex: 'm = 1', explanation: 'The gradient is the coefficient of \\(x\\).' },
            { stepNumber: 5, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{1} = -1', explanation: 'The negative reciprocal of \\(1\\) is \\(-1\\).' },
            { stepNumber: 6, description: 'Write the equation through \\((3, 5)\\).', workingLatex: 'y - 5 = -1(x - 3) \\implies y - 5 = -x + 3', explanation: 'Use point-slope form with the intersection point.' },
            { stepNumber: 7, description: 'Simplify.', workingLatex: 'y = -x + 8', explanation: 'Add \\(5\\) to both sides.' }
        ], finalAnswer: 'y = -x + 8' }
    },
    {
        id: 'cg3-069', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 69', difficulty: 'Foundation',
        questionText: 'A line through \\( (2, 1) \\) is perpendicular to the line joining \\( (-1, 4) \\) and \\( (3, -2) \\). Find where it meets the y-axis.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient of the line joining the two points.', workingLatex: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-2 - 4}{3 - (-1)} = \\frac{-6}{4} = -\\frac{3}{2}', explanation: 'Substitute \\((-1, 4)\\) and \\((3, -2)\\) into the gradient formula.' },
            { stepNumber: 2, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{-\\frac{3}{2}} = \\frac{2}{3}', explanation: 'The negative reciprocal of \\(-\\frac{3}{2}\\) is \\(\\frac{2}{3}\\).' },
            { stepNumber: 3, description: 'Write the equation through \\((2, 1)\\).', workingLatex: 'y - 1 = \\frac{2}{3}(x - 2)', explanation: 'Use point-slope form with the point \\((2, 1)\\) and gradient \\(\\frac{2}{3}\\).' },
            { stepNumber: 4, description: 'Expand and simplify.', workingLatex: 'y - 1 = \\frac{2}{3}x - \\frac{4}{3} \\implies y = \\frac{2}{3}x - \\frac{4}{3} + 1 = \\frac{2}{3}x - \\frac{1}{3}', explanation: 'Add \\(1 = \\frac{3}{3}\\) to both sides: \\(-\\frac{4}{3} + \\frac{3}{3} = -\\frac{1}{3}\\).' },
            { stepNumber: 5, description: 'Find the \\(y\\)-intercept.', workingLatex: 'x = 0: \\quad y = \\frac{2}{3}(0) - \\frac{1}{3} = -\\frac{1}{3}', explanation: 'Substitute \\(x = 0\\) into the equation.' }
        ], finalAnswer: '\\left(0, -\\frac{1}{3}\\right)' }
    },
    {
        id: 'cg3-070', topicRef: 'CG3', topicTitle: 'Parallel and Perpendicular Lines 70', difficulty: 'Foundation',
        questionText: 'A triangle has vertices \\( P(1, 1) \\), \\( Q(5, 3) \\), \\( R(3, 7) \\). Find: (a) the equation of the altitude from \\( R \\); (b) the equation of the altitude from \\( P \\); (c) the orthocentre.',
        marks: 8, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Find the gradient of \\(PQ\\).', workingLatex: 'm_{PQ} = \\frac{y_Q - y_P}{x_Q - x_P} = \\frac{3 - 1}{5 - 1} = \\frac{2}{4} = \\frac{1}{2}', explanation: 'Substitute \\(P(1,1)\\) and \\(Q(5,3)\\) into the gradient formula.' },
            { stepNumber: 2, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{\\frac{1}{2}} = -2', explanation: 'The altitude from \\(R\\) is perpendicular to \\(PQ\\), so take the negative reciprocal.' },
            { stepNumber: 3, description: 'Write the altitude from \\(R\\).', workingLatex: 'y - 7 = -2(x - 3)', explanation: 'Use point-slope form with \\(R(3, 7)\\) and gradient \\(-2\\).' },
            { stepNumber: 4, description: 'Simplify the altitude from \\(R\\).', workingLatex: 'y - 7 = -2x + 6 \\implies y = -2x + 13', explanation: 'Expand and add \\(7\\) to both sides.' },
            { stepNumber: 5, description: '(b) Find the gradient of \\(QR\\).', workingLatex: 'm_{QR} = \\frac{y_R - y_Q}{x_R - x_Q} = \\frac{7 - 3}{3 - 5} = \\frac{4}{-2} = -2', explanation: 'Substitute \\(Q(5,3)\\) and \\(R(3,7)\\) into the gradient formula.' },
            { stepNumber: 6, description: 'Find the perpendicular gradient.', workingLatex: 'm_{\\perp} = -\\frac{1}{-2} = \\frac{1}{2}', explanation: 'The altitude from \\(P\\) is perpendicular to \\(QR\\).' },
            { stepNumber: 7, description: 'Write the altitude from \\(P\\).', workingLatex: 'y - 1 = \\frac{1}{2}(x - 1)', explanation: 'Use point-slope form with \\(P(1, 1)\\) and gradient \\(\\frac{1}{2}\\).' },
            { stepNumber: 8, description: 'Simplify the altitude from \\(P\\).', workingLatex: 'y - 1 = \\frac{1}{2}x - \\frac{1}{2} \\implies y = \\frac{1}{2}x + \\frac{1}{2}', explanation: 'Expand and add \\(1\\) to both sides.' },
            { stepNumber: 9, description: '(c) Set the two altitudes equal.', workingLatex: '-2x + 13 = \\frac{1}{2}x + \\frac{1}{2}', explanation: 'To find the orthocentre, solve the two altitude equations simultaneously.' },
            { stepNumber: 10, description: 'Collect x terms.', workingLatex: '-2x - \\frac{1}{2}x = \\frac{1}{2} - 13 \\implies -\\frac{5}{2}x = -\\frac{25}{2}', explanation: 'Move \\(x\\) terms to one side and constants to the other.' },
            { stepNumber: 11, description: 'Solve for \\(x\\).', workingLatex: 'x = \\frac{-\\frac{25}{2}}{-\\frac{5}{2}} = 5', explanation: 'Divide both sides by \\(-\\frac{5}{2}\\).' },
            { stepNumber: 12, description: 'Find \\(y\\).', workingLatex: 'y = -2(5) + 13 = -10 + 13 = 3', explanation: 'Substitute \\(x = 5\\) into the altitude from \\(R\\). The orthocentre \\((5, 3)\\) coincides with \\(Q\\) because the triangle is right-angled at \\(Q\\).' }
        ], finalAnswer: '(a) y = -2x + 13; (b) y = \\frac{1}{2}x + \\frac{1}{2}; (c) Orthocentre = (5, 3)' }
    },
];
