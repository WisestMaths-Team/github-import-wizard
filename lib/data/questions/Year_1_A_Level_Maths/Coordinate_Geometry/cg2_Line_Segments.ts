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
        id: 'cg2-001',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 01',
        difficulty: 'Foundation',
        questionText: 'Find both (i) the midpoint and (ii) the exact length of the segment from \\( (-2, 4) \\) to \\( (4, 12) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{-2 + 4}{2},\\ \\dfrac{4 + 12}{2}\\right) = (1,\\ 8)',
                    explanation: 'Using the midpoint formula: average the x-coordinates and average the y-coordinates separately.'
                },
                {
                    stepNumber: 2,
                    description: '(ii) Length:',
                    workingLatex: 'd = \\sqrt{(4 - (-2))^2 + (12 - 4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10',
                    explanation: 'The distance formula comes from Pythagoras applied to the horizontal and vertical differences. Note that \\(4 - (-2) = 6\\), not \\(2\\) — be careful with double negatives.'
                }
            ],
            finalAnswer: '(i) \\(M = (1, 8)\\); (ii) \\(d = 10\\)'
        }
    },

    {
        id: 'cg2-002',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 02',
        difficulty: 'Foundation',
        questionText: 'Find both (i) the midpoint and (ii) the exact length of the segment from \\( (3, -5) \\) to \\( (-3, 3) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{3 + (-3)}{2},\\ \\dfrac{-5 + 3}{2}\\right) = (0,\\ -1)',
                    explanation: 'Using the midpoint formula: average the x-coordinates and average the y-coordinates separately.'
                },
                {
                    stepNumber: 2,
                    description: '(ii) Length:',
                    workingLatex: 'd = \\sqrt{(-3 - 3)^2 + (3 - (-5))^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10',
                    explanation: 'Using the distance formula. Note that \\(3 - (-5) = 8\\), not \\(-2\\). Subtracting a negative is the same as adding.'
                }
            ],
            finalAnswer: '(i) \\(M = (0, -1)\\); (ii) \\(d = 10\\)'
        }
    },

    // ─── TYPE C: Length of segment of a given line between two x-values (Q11–16) ─

    {
        id: 'cg2-003',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 03',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment of the line \\( y = 3x + 1 \\) between \\( x = 2 \\) and \\( x = 5 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinates at each \\( x \\)-value.',
                    workingLatex: 'x = 2:\\; y = 3(2) + 1 = 7 \\qquad x = 5:\\; y = 3(5) + 1 = 16',
                    explanation: 'Substitute each x-value into the line equation to find the corresponding y-coordinate, giving the two endpoints.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the distance formula between \\( (2, 7) \\) and \\( (5, 16) \\).',
                    workingLatex: 'd = \\sqrt{(5 - 2)^2 + (16 - 7)^2} = \\sqrt{9 + 81} = \\sqrt{90} = 3\\sqrt{10}',
                    explanation: '\\(\\sqrt{90} = \\sqrt{9 \\times 10} = 3\\sqrt{10}\\).'
                }
            ],
            finalAnswer: '\\(d = 3\\sqrt{10}\\)'
        }
    },

    {
        id: 'cg2-004',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 04',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment of the line \\( y = -2x + 7 \\) between \\( x = 1 \\) and \\( x = 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the \\( y \\)-coordinates.',
                    workingLatex: 'x = 1:\\; y = -2(1) + 7 = 5 \\qquad x = 4:\\; y = -2(4) + 7 = -1',
                    explanation: 'Substitute each x-value into the equation to find the two endpoints of the segment.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the distance formula between \\( (1, 5) \\) and \\( (4, -1) \\).',
                    workingLatex: 'd = \\sqrt{(4 - 1)^2 + (-1 - 5)^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}',
                    explanation: '\\(\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}\\).'
                }
            ],
            finalAnswer: '\\(d = 3\\sqrt{5}\\)'
        }
    },

    {
        id: 'cg2-005',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 05',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint and exact length of the segment of \\( y = \\dfrac{1}{2}x - 3 \\) between \\( x = 2 \\) and \\( x = 10 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the endpoints.',
                    workingLatex: 'x = 2:\\; y = \\tfrac{1}{2}(2) - 3 = -2 \\qquad x = 10:\\; y = \\tfrac{1}{2}(10) - 3 = 2',
                    explanation: 'Points are \\( A(2, -2) \\) and \\( B(10, 2) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 10}{2},\\ \\dfrac{-2 + 2}{2}\\right) = (6,\\ 0)',
                    explanation: 'Using the midpoint formula. The y-coordinates cancel (\\(-2 + 2 = 0\\)), so the midpoint lies on the x-axis.'
                },
                {
                    stepNumber: 3,
                    description: 'Length:',
                    workingLatex: 'd = \\sqrt{(10 - 2)^2 + (2 - (-2))^2} = \\sqrt{64 + 16} = \\sqrt{80} = 4\\sqrt{5}',
                    explanation: '\\(\\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5}\\).'
                }
            ],
            finalAnswer: '\\(M = (6, 0) ;  d = 4\\sqrt{5}\\)'
        }
    },

    {
        id: 'cg2-006',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 06',
        difficulty: 'Foundation',
        questionText: 'Find the exact length of the segment of the line \\( 2x + y - 4 = 0 \\) between \\( x = 0 \\) and \\( x = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the line to \\( y = -2x + 4 \\), then find the endpoints.',
                    workingLatex: 'x = 0:\\; y = 4 \\qquad x = 3:\\; y = -2(3) + 4 = -2',
                    explanation: 'Rearrange the equation to make y the subject first, then substitute each x-value to find the endpoints.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the distance formula between \\( (0, 4) \\) and \\( (3, -2) \\).',
                    workingLatex: 'd = \\sqrt{(3 - 0)^2 + (-2 - 4)^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}',
                    explanation: 'Simplify the surd: find the largest perfect square factor of \\(45\\), which is \\(9\\).'
                }
            ],
            finalAnswer: '\\(d = 3\\sqrt{5}\\)'
        }
    },

    {
        id: 'cg2-007',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 07',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint and exact length of the segment of \\( x + 2y - 8 = 0 \\) between \\( x = 2 \\) and \\( x = 6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange: \\( y = \\dfrac{8 - x}{2} \\). Find endpoints.',
                    workingLatex: 'x = 2:\\; y = \\tfrac{6}{2} = 3 \\qquad x = 6:\\; y = \\tfrac{2}{2} = 1',
                    explanation: 'Points are \\( A(2, 3) \\) and \\( B(6, 1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 6}{2},\\ \\dfrac{3 + 1}{2}\\right) = (4,\\ 2)',
                    explanation: 'Using the midpoint formula: average the x-coordinates and average the y-coordinates.'
                },
                {
                    stepNumber: 3,
                    description: 'Length:',
                    workingLatex: 'd = \\sqrt{(6 - 2)^2 + (1 - 3)^2} = \\sqrt{16 + 4} = \\sqrt{20} = 2\\sqrt{5}',
                    explanation: '\\(\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}\\).'
                }
            ],
            finalAnswer: '\\(M = (4, 2) ;  d = 2\\sqrt{5}\\)'
        }
    },

    {
        id: 'cg2-008',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 08',
        difficulty: 'Foundation',
        questionText: 'Find the midpoint and exact length of the segment of \\( y = 4x - 3 \\) between \\( x = -1 \\) and \\( x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the endpoints.',
                    workingLatex: 'x = -1:\\; y = 4(-1) - 3 = -7 \\qquad x = 2:\\; y = 4(2) - 3 = 5',
                    explanation: 'Points are \\( A(-1, -7) \\) and \\( B(2, 5) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{-1 + 2}{2},\\ \\dfrac{-7 + 5}{2}\\right) = \\left(0.5,\\ -1\\right)',
                    explanation: 'Using the midpoint formula. The x-coordinate gives \\(1/2 = 0.5\\), which is fine to leave as a decimal or fraction.'
                },
                {
                    stepNumber: 3,
                    description: 'Length:',
                    workingLatex: 'd = \\sqrt{(2 - (-1))^2 + (5 - (-7))^2} = \\sqrt{9 + 144} = \\sqrt{153} = 3\\sqrt{17}',
                    explanation: '\\(\\sqrt{153} = \\sqrt{9 \\times 17} = 3\\sqrt{17}\\).'
                }
            ],
            finalAnswer: '\\(M = (0.5,\\ -1) ;  d = 3\\sqrt{17}\\)'
        }
    },

    // ─── TYPE D: Find missing endpoint given one endpoint and midpoint (Q17–20) ─

    {
        id: 'cg2-009',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 09',
        difficulty: 'Foundation',
        questionText: 'The midpoint of segment \\( AB \\) is \\( M(3, 6) \\). If \\( A = (1, 2) \\), find the coordinates of \\( B \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the midpoint formula in reverse: \\( x_B = 2 \\times x_M - x_A \\).',
                    workingLatex: 'x_B = 2(3) - 1 = 5',
                    explanation: 'Rearranging the midpoint formula: since the midpoint x-coordinate equals \\( (x_A + x_B)/2 \\), we get \\( x_B = 2x_M - x_A \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Similarly for \\( y \\):',
                    workingLatex: 'y_B = 2(6) - 2 = 10',
                    explanation: 'Same technique for the y-coordinate: \\( y_B = 2y_M - y_A \\).'
                }
            ],
            finalAnswer: '\\(B = (5, 10)\\)'
        }
    },

    {
        id: 'cg2-010',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 10',
        difficulty: 'Foundation',
        questionText: 'The midpoint of segment \\( PQ \\) is \\( M(-1, 4) \\). If \\( P = (3, 2) \\), find \\( Q \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( x_Q \\):',
                    workingLatex: 'x_Q = 2(-1) - 3 = -5',
                    explanation: 'Using the rearranged midpoint formula: \\( x_Q = 2x_M - x_P \\). A common mistake is to forget the factor of \\(2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( y_Q \\):',
                    workingLatex: 'y_Q = 2(4) - 2 = 6',
                    explanation: 'Same approach for the y-coordinate: \\( y_Q = 2y_M - y_P \\).'
                }
            ],
            finalAnswer: '\\(Q = (-5, 6)\\)'
        }
    },

    {
        id: 'cg2-011',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 11',
        difficulty: 'Foundation',
        questionText: 'Points \\( A(a, 1) \\) and \\( B(7, b) \\) both lie on the line \\( y = x - 2 \\). Find (i) the values of \\( a \\) and \\( b \\), (ii) the midpoint of \\( AB \\), and (iii) the exact length of \\( AB \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Substitute \\( y = 1 \\) into \\( y = x - 2 \\) to find \\( a \\).',
                    workingLatex: '1 = a - 2 \\quad\\quad \\Rightarrow \\quad\\quad a = 3',
                    explanation: 'Since \\(A(a, 1)\\) lies on the line, its coordinates must satisfy the equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 7 \\) to find \\( b \\).',
                    workingLatex: 'b = 7 - 2 = 5',
                    explanation: 'So \\(A = (3, 1)\\) and \\(B = (7, 5)\\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{3 + 7}{2},\\ \\dfrac{1 + 5}{2}\\right) = (5,\\ 3)',
                    explanation: 'Using the midpoint formula with the coordinates found in parts (i). You can verify that \\( (5, 3) \\) also lies on \\( y = x - 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{(7 - 3)^2 + (5 - 1)^2} = \\sqrt{16 + 16} = \\sqrt{32} = 4\\sqrt{2}',
                    explanation: '\\(\\sqrt{32} = \\sqrt{16 \\times 2} = 4\\sqrt{2}\\).'
                }
            ],
            finalAnswer: '(i) \\(a = 3,\\ b = 5\\); (ii) \\(M = (5, 3)\\); (iii) \\(d = 4\\sqrt{2}\\)'
        }
    },

    {
        id: 'cg2-012',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 12',
        difficulty: 'Foundation',
        questionText: 'Points \\( A(a, 1) \\) and \\( B(b, 7) \\) lie on the line \\( y = 3x - 5 \\). Find (i) the values of \\( a \\) and \\( b \\), (ii) the midpoint of \\( AB \\), (iii) the exact length of \\( AB \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Substitute \\( y = 1 \\) to find \\( a \\):',
                    workingLatex: '1 = 3a - 5 \\implies 3a = 6 \\implies a = 2',
                    explanation: 'Since \\( A(a, 1) \\) lies on the line, substitute \\( y = 1 \\) and solve for \\( x \\) to find \\( a \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( y = 7 \\) to find \\( b \\):',
                    workingLatex: '7 = 3b - 5 \\implies 3b = 12 \\implies b = 4',
                    explanation: 'Points: \\( A = (2, 1) \\), \\( B = (4, 7) \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{2 + 4}{2},\\ \\dfrac{1 + 7}{2}\\right) = (3,\\ 4)',
                    explanation: 'Using the midpoint formula with the coordinates found above.'
                },
                {
                    stepNumber: 4,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{(4 - 2)^2 + (7 - 1)^2} = \\sqrt{4 + 36} = \\sqrt{40} = 2\\sqrt{10}',
                    explanation: 'Simplify the surd: the largest perfect square factor of \\(40\\) is \\(4\\), so \\( \\sqrt{40} = 2\\sqrt{10} \\).'
                }
            ],
            finalAnswer: '(i) \\(a = 2,\\ b = 4\\); (ii) \\(M = (3, 4)\\); (iii) \\(d = 2\\sqrt{10}\\)'
        }
    },

    // ─── TYPE E: Find unknown coordinates on a line then compute midpoint/length (Q21–24) ─

    {
        id: 'cg2-013',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 13',
        difficulty: 'Foundation',
        questionText: 'Points \\( C(2, c) \\) and \\( D(d, 1) \\) lie on the line \\( y = 2x - 7 \\). Find (i) the values of \\( c \\) and \\( d \\), (ii) the midpoint of \\( CD \\), (iii) the exact length of \\( CD \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Find \\( c \\): substitute \\( x = 2 \\) into \\( y = 2x - 7 \\).',
                    workingLatex: 'c = 2(2) - 7 = 4 - 7 = -3',
                    explanation: 'Since \\( C(2, c) \\) lies on the line, substitute \\( x = 2 \\) directly into \\( y = 2x - 7 \\) to find the \\( y \\)-coordinate.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( d \\): substitute \\( y = 1 \\) into \\( y = 2x - 7 \\).',
                    workingLatex: '1 = 2d - 7 \\implies 2d = 8 \\implies d = 4',
                    explanation: 'Here we know \\( y = 1 \\), so substitute into the equation and solve for \\( x \\). This is the reverse of the previous step.'
                },
                {
                    stepNumber: 3,
                    description: '(ii) Midpoint of \\( C(2, -3) \\) and \\( D(4, 1) \\).',
                    workingLatex: 'M = \\left(\\dfrac{2 + 4}{2},\\ \\dfrac{-3 + 1}{2}\\right) = (3,\\ -1)',
                    explanation: 'Using the midpoint formula with the coordinates found in part (i).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) Length of \\( CD \\).',
                    workingLatex: 'CD = \\sqrt{(4-2)^2 + (1-(-3))^2} = \\sqrt{4 + 16} = \\sqrt{20} = 2\\sqrt{5}',
                    explanation: 'Note that \\( 1 - (-3) = 4 \\). Simplify the surd: \\( \\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5} \\).'
                }
            ],
            finalAnswer: '(i) \\(c = -3,\\ d = 4\\); (ii) \\(M = (3, -1)\\); (iii) \\(2\\sqrt{5}\\)'
        }
    },

    {
        id: 'cg2-014',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 14',
        difficulty: 'Foundation',
        questionText: 'Points \\( P(p, 5) \\) and \\( Q(7, q) \\) lie on the line \\( 3x - 2y - 1 = 0 \\). Find (i) \\( p \\) and \\( q \\), (ii) the midpoint of \\( PQ \\), (iii) the exact length of \\( PQ \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(i) Substitute \\( y = 5 \\) to find \\( p \\):',
                    workingLatex: '3p - 10 - 1 = 0 \\implies 3p = 11 \\implies p = \\dfrac{11}{3}',
                    explanation: 'Substitute \\( y = 5 \\) into the equation \\( 3x - 2y - 1 = 0 \\) and solve for \\( x \\). Fractional coordinates are perfectly valid.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 7 \\) to find \\( q \\):',
                    workingLatex: '21 - 2q - 1 = 0 \\implies 2q = 20 \\implies q = 10',
                    explanation: 'Points: \\( P = \\left(\\frac{11}{3}, 5\\right) \\), \\( Q = (7, 10) \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) Midpoint:',
                    workingLatex: 'M = \\left(\\dfrac{\\frac{11}{3} + 7}{2},\\ \\dfrac{5 + 10}{2}\\right) = \\left(\\dfrac{\\frac{32}{3}}{2},\\ \\dfrac{15}{2}\\right) = \\left(\\dfrac{16}{3},\\ \\dfrac{15}{2}\\right)',
                    explanation: 'When averaging fractions, convert to a common denominator first: \\( \\frac{11}{3} + 7 = \\frac{11}{3} + \\frac{21}{3} = \\frac{32}{3} \\), then divide by \\( 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) Length:',
                    workingLatex: 'd = \\sqrt{\\left(7 - \\tfrac{11}{3}\\right)^2 + (10 - 5)^2} = \\sqrt{\\left(\\tfrac{10}{3}\\right)^2 + 25} = \\sqrt{\\tfrac{100}{9} + \\tfrac{225}{9}} = \\sqrt{\\tfrac{325}{9}} = \\dfrac{5\\sqrt{13}}{3}',
                    explanation: 'Convert \\( 25 \\) to ninths \\( \\frac{225}{9} \\) so both terms share a denominator. Then \\( \\sqrt{325} = \\sqrt{25 \\times 13} = 5\\sqrt{13} \\).'
                }
            ],
            finalAnswer: '(i) \\(p = \\frac{11}{3},\\ q = 10\\); (ii) \\(M = \\left(\\frac{16}{3}, \\frac{15}{2}\\right)\\); (iii) \\(\\frac{5\\sqrt{13}}{3}\\)'
        }
    },

    {
        id: 'cg2-015',
        topicRef: 'CG2',
        topicTitle: 'Line Segments 15',
        difficulty: 'Foundation',
        questionText: 'The segment \\( CD \\) has midpoint \\( (2, -1) \\), gradient \\( \\dfrac{3}{4} \\) and length \\( 10 \\). Find the coordinates of \\( C \\) and \\( D \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'A gradient of \\( \\frac{3}{4} \\) means the displacement from midpoint to each end is of the form \\( (4k, 3k) \\) for some \\( k \\).',
                    workingLatex: '\\text{Half-displacement} = (4k,\\ 3k)',
                    explanation: 'The direction vector \\( (4, 3) \\) has magnitude \\( \\sqrt{16+9}=5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The full length is \\( 2 \\times 5|k| = 10 \\), so \\( |k| = 1 \\).',
                    workingLatex: '10|k| = 10 \\implies k = 1',
                    explanation: 'The full segment length is twice the half-length: \\( 2 \\times 5|k| = 10 \\), giving \\( |k| = 1 \\). We take \\( k = 1 \\) (choosing a direction).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( C \\) and \\( D \\) using midpoint \\( (2, -1) \\) and displacement \\( (4, 3) \\).',
                    workingLatex: 'C = (2 - 4,\\ -1 - 3) = (-2,\\ -4), \\quad D = (2 + 4,\\ -1 + 3) = (6,\\ 2)',
                    explanation: 'Subtract the displacement from the midpoint to get one endpoint, and add it to get the other.'
                },
                {
                    stepNumber: 4,
                    description: 'Verify length:',
                    workingLatex: 'd = \\sqrt{(6-(-2))^2 + (2-(-4))^2} = \\sqrt{64+36} = \\sqrt{100} = 10 \\checkmark',
                    explanation: 'Always verify your answer. The length matches the given value of 10, confirming the endpoints are correct.'
                }
            ],
            finalAnswer: '\\(C = (-2, -4)  and  D = (6, 2)\\)'
        }
    },

    // ─── Q36–70: Additional Line Segments Questions ──────────────────────

    {
        id: 'cg2-016', topicRef: 'CG2', topicTitle: 'Line Segments 16', difficulty: 'Foundation',
        questionText: 'Find the midpoint of \\( A(-3, 8) \\) and \\( B(5, -2) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply midpoint formula', workingLatex: 'M = \\left(\\frac{-3+5}{2}, \\frac{8+(-2)}{2}\\right) = (1, 3)', explanation: 'Average each coordinate.' }
        ], finalAnswer: '\\((1, 3)\\)' }
    },
    {
        id: 'cg2-017', topicRef: 'CG2', topicTitle: 'Line Segments 17', difficulty: 'Foundation',
        questionText: 'Find the distance between \\( P(-1, 4) \\) and \\( Q(5, -4) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'PQ = \\sqrt{(5-(-1))^2 + (-4-4)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10', explanation: 'Using the distance formula. Be careful: \\(5 - (-1) = 6\\), not \\(4\\). This is a \\(6\\text{-}8\\text{-}10\\) Pythagorean triple.' }
        ], finalAnswer: '\\(10\\)' }
    },
    {
        id: 'cg2-018', topicRef: 'CG2', topicTitle: 'Line Segments 18', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( A(2, k) \\) and \\( B(8, 3) \\) is \\( (5, 7) \\). Find \\( k \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use midpoint y-coordinate', workingLatex: '\\frac{k + 3}{2} = 7 \\implies k + 3 = 14 \\implies k = 11', explanation: 'Set the y-component of the midpoint formula equal to \\(7\\) and solve. Multiply both sides by \\(2\\) first to clear the fraction.' }
        ], finalAnswer: '\\(k = 11\\)' }
    },
    {
        id: 'cg2-019', topicRef: 'CG2', topicTitle: 'Line Segments 19', difficulty: 'Foundation',
        questionText: 'Find the length of the line segment from \\( (0, 0) \\) to \\( (7, 24) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{49 + 576} = \\sqrt{625} = 25', explanation: 'This is a \\(7\\text{-}24\\text{-}25\\) Pythagorean triple. When one endpoint is the origin, the formula simplifies to \\( \\sqrt{x^2 + y^2} \\).' }
        ], finalAnswer: '\\(25\\)' }
    },
    {
        id: 'cg2-020', topicRef: 'CG2', topicTitle: 'Line Segments 20', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( PQ \\) is \\( (3, -1) \\). If \\( P = (7, 5) \\), find \\( Q \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use midpoint formula backwards', workingLatex: '\\frac{7 + x}{2} = 3 \\implies x = -1; \\quad \\frac{5 + y}{2} = -1 \\implies y = -7', explanation: 'Rearranging the midpoint formula for each coordinate: set \\((x_P + x_Q)/2\\) equal to the midpoint coordinate and solve for the unknown.' }
        ], finalAnswer: '\\(Q = (-1, -7)\\)' }
    },
    {
        id: 'cg2-021', topicRef: 'CG2', topicTitle: 'Line Segments 21', difficulty: 'Foundation',
        questionText: 'Show that the triangle with vertices \\( A(1, 1) \\), \\( B(5, 1) \\), \\( C(3, 5) \\) is isosceles.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find lengths', workingLatex: 'AB = 4, \\quad AC = \\sqrt{4+16} = \\sqrt{20}, \\quad BC = \\sqrt{4+16} = \\sqrt{20}', explanation: '\\( AC = BC \\), so the triangle is isosceles.' }
        ], finalAnswer: '\\(AC = BC = \\sqrt{20}\\), so the triangle is isosceles.' }
    },
    {
        id: 'cg2-022', topicRef: 'CG2', topicTitle: 'Line Segments 22', difficulty: 'Foundation',
        questionText: 'Find the point that divides the line segment from \\( A(1, 2) \\) to \\( B(7, 8) \\) in the ratio \\( 1:2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the section formula. \\(P\\) divides \\(AB\\) in the ratio \\(1:2\\), so \\(P\\) is one-third of the way from \\(A\\) to \\(B\\).', workingLatex: 'P = \\left(\\frac{1(7) + 2(1)}{1+2},\\ \\frac{1(8) + 2(2)}{1+2}\\right)', explanation: 'For a point dividing \\(AB\\) in the ratio \\(m:n\\), use \\(P = \\left(\\frac{mx_2 + nx_1}{m+n},\\ \\frac{my_2 + ny_1}{m+n}\\right)\\).' },
            { stepNumber: 2, description: 'Simplify.', workingLatex: 'P = \\left(\\frac{7+2}{3},\\ \\frac{8+4}{3}\\right) = \\left(\\frac{9}{3},\\ \\frac{12}{3}\\right) = (3,\\ 4)', explanation: '' },
            { stepNumber: 3, description: 'Verify.', workingLatex: 'A(1,2) \\to P(3,4): (+2,+2); \\quad P(3,4) \\to B(7,8): (+4,+4). \\quad \\text{Ratio } 2:4 = 1:2 \\checkmark', explanation: 'The changes from \\(A\\) to \\(P\\) and from \\(P\\) to \\(B\\) are in the ratio \\(1:2\\), confirming our answer.' }
        ], finalAnswer: '\\(P = (3,\\ 4)\\)' }
    },
    {
        id: 'cg2-023', topicRef: 'CG2', topicTitle: 'Line Segments 23', difficulty: 'Foundation',
        questionText: 'Find the exact distance between \\( (-3, -5) \\) and \\( (9, 11) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{12^2 + 16^2} = \\sqrt{144+256} = \\sqrt{400} = 20', explanation: 'The differences are \\(9 - (-3) = 12\\) and \\(11 - (-5) = 16\\). This is a \\(12\\text{-}16\\text{-}20\\) triple (a multiple of \\(3\\text{-}4\\text{-}5\\)).' }
        ], finalAnswer: '\\(20\\)' }
    },
    {
        id: 'cg2-024', topicRef: 'CG2', topicTitle: 'Line Segments 24', difficulty: 'Foundation',
        questionText: 'The points \\( A(a, 3) \\) and \\( B(5, a) \\) are such that \\( AB = 5 \\). Find the possible values of \\( a \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up distance equation', workingLatex: '(5-a)^2 + (a-3)^2 = 25', explanation: 'Apply the distance formula and square both sides to eliminate the square root, since \\( AB = 5 \\) means \\( AB^2 = 25 \\).' },
            { stepNumber: 2, description: 'Expand and simplify', workingLatex: '25 - 10a + a^2 + a^2 - 6a + 9 = 25 \\implies 2a^2 - 16a + 9 = 0', explanation: 'Expand each squared bracket carefully and collect like terms. The \\(25\\) on each side cancels.' },
            { stepNumber: 3, description: 'Solve using quadratic formula', workingLatex: 'a = \\frac{16 \\pm \\sqrt{256-72}}{4} = \\frac{16 \\pm \\sqrt{184}}{4} = 4 \\pm \\frac{\\sqrt{46}}{2}', explanation: 'Apply the quadratic formula with \\( a=2 \\), \\( b=-16 \\), \\( c=9 \\). Two solutions exist because there are two points at distance \\(5\\) from \\( B(5,a) \\) with y-coordinate \\(3\\).' }
        ], finalAnswer: '\\(a = 4 \\pm \\frac{\\sqrt{46}}{2}\\)' }
    },
    {
        id: 'cg2-025', topicRef: 'CG2', topicTitle: 'Line Segments 25', difficulty: 'Foundation',
        questionText: 'Find the midpoint of the line segment joining \\( (2a, 3b) \\) and \\( (6a, -b) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint formula', workingLatex: 'M = \\left(\\frac{2a+6a}{2}, \\frac{3b+(-b)}{2}\\right) = (4a, b)', explanation: 'The midpoint formula works with algebraic expressions just as with numbers. Simplify: \\(8a/2 = 4a\\) and \\(2b/2 = b\\).' }
        ], finalAnswer: '\\((4a, b)\\)' }
    },
    {
        id: 'cg2-026', topicRef: 'CG2', topicTitle: 'Line Segments 26', difficulty: 'Foundation',
        questionText: 'Show that \\( A(0, 0) \\), \\( B(3, 4) \\), \\( C(8, 4) \\), \\( D(5, 0) \\) form a parallelogram by showing the diagonals bisect each other.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the diagonals of quadrilateral \\(ABCD\\).', workingLatex: '\\text{Diagonals: } AC \\text{ and } BD', explanation: 'In a quadrilateral \\( ABCD \\), the diagonals connect opposite vertices: \\( A \\) to \\( C \\) and \\( B \\) to \\( D \\). A key property of a parallelogram is that its diagonals bisect each other — they share the same midpoint.' },
            { stepNumber: 2, description: 'Find the midpoint of diagonal \\(AC\\), where \\( A(0,0) \\) and \\( C(8,4) \\).', workingLatex: 'M_{AC} = \\left(\\frac{0+8}{2},\\ \\frac{0+4}{2}\\right) = (4,\\ 2)', explanation: 'Using the midpoint formula: add the x-coordinates and divide by 2, then add the y-coordinates and divide by 2.' },
            { stepNumber: 3, description: 'Find the midpoint of diagonal \\(BD\\), where \\( B(3,4) \\) and \\( D(5,0) \\).', workingLatex: 'M_{BD} = \\left(\\frac{3+5}{2},\\ \\frac{4+0}{2}\\right) = (4,\\ 2)', explanation: 'Again applying the midpoint formula to the other diagonal.' },
            { stepNumber: 4, description: 'Compare the two midpoints.', workingLatex: 'M_{AC} = (4,\\ 2) = M_{BD}', explanation: 'Both diagonals have the same midpoint \\( (4, 2) \\), which means they bisect each other. This is the defining property of a parallelogram, so \\( ABCD \\) is a parallelogram.' }
        ], finalAnswer: 'Diagonals \\(AC\\) and \\(BD\\) both have midpoint \\((4, 2)\\), so they bisect each other, proving \\(ABCD\\) is a parallelogram.' }
    },
    {
        id: 'cg2-027', topicRef: 'CG2', topicTitle: 'Line Segments 27', difficulty: 'Foundation',
        questionText: 'Find the perimeter of the triangle with vertices \\( A(0, 0) \\), \\( B(4, 0) \\), \\( C(0, 3) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find all side lengths', workingLatex: 'AB = 4, \\quad AC = 3, \\quad BC = \\sqrt{16+9} = 5', explanation: '\\( AB \\) and \\( AC \\) lie along the axes, so their lengths are just the coordinate differences. Only \\( BC \\) requires the full distance formula. This is a \\(3\\text{-}4\\text{-}5\\) right triangle.' },
            { stepNumber: 2, description: 'Sum', workingLatex: 'P = 4 + 3 + 5 = 12', explanation: 'The perimeter is the sum of all three side lengths.' }
        ], finalAnswer: '\\(12\\)' }
    },
    {
        id: 'cg2-028', topicRef: 'CG2', topicTitle: 'Line Segments 28', difficulty: 'Foundation',
        questionText: 'The point \\( P \\) divides \\( AB \\) in the ratio \\( 3:1 \\), where \\( A = (2, -1) \\) and \\( B = (10, 7) \\). Find \\( P \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the section formula. \\(P\\) divides \\(AB\\) in the ratio \\(3:1\\), so \\(P\\) is three-quarters of the way from \\(A\\) to \\(B\\).', workingLatex: 'P = \\left(\\frac{3(10) + 1(2)}{3+1},\\ \\frac{3(7) + 1(-1)}{3+1}\\right)', explanation: 'For a point dividing \\(AB\\) in the ratio \\(m:n\\), use \\(P = \\left(\\frac{mx_2 + nx_1}{m+n},\\ \\frac{my_2 + ny_1}{m+n}\\right)\\).' },
            { stepNumber: 2, description: 'Simplify.', workingLatex: 'P = \\left(\\frac{30+2}{4},\\ \\frac{21-1}{4}\\right) = \\left(\\frac{32}{4},\\ \\frac{20}{4}\\right) = (8,\\ 5)', explanation: '' },
            { stepNumber: 3, description: 'Verify.', workingLatex: 'A(2,-1) \\to P(8,5): (+6,+6); \\quad P(8,5) \\to B(10,7): (+2,+2). \\quad \\text{Ratio } 6:2 = 3:1 \\checkmark', explanation: 'The changes from \\(A\\) to \\(P\\) and from \\(P\\) to \\(B\\) are in the ratio \\(3:1\\), confirming our answer.' }
        ], finalAnswer: '\\(P = (8,\\ 5)\\)' }
    },
    {
        id: 'cg2-029', topicRef: 'CG2', topicTitle: 'Line Segments 29', difficulty: 'Foundation',
        questionText: 'Find the distance from the origin to the point \\( (5, -12) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recall the distance formula.', workingLatex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}', explanation: 'The origin is the point \\( (0, 0) \\), so we use \\( A(0, 0) \\) and \\( B(5, -12) \\).' },
            { stepNumber: 2, description: 'Substitute the coordinates.', workingLatex: 'd = \\sqrt{(5 - 0)^2 + (-12 - 0)^2} = \\sqrt{5^2 + (-12)^2}', explanation: 'Subtract the x-coordinates and the y-coordinates separately, then square each difference.' },
            { stepNumber: 3, description: 'Evaluate the squares and add.', workingLatex: 'd = \\sqrt{25 + 144} = \\sqrt{169}', explanation: 'Note that \\( (-12)^2 = 144 \\), not \\(-144\\). Squaring always gives a positive result.' },
            { stepNumber: 4, description: 'Simplify the square root.', workingLatex: 'd = 13', explanation: '\\( 169 = 13 \\times 13 \\), so \\( \\sqrt{169} = 13 \\). This is a \\(5\\text{-}12\\text{-}13\\) Pythagorean triple.' }
        ], finalAnswer: '\\(13\\)' }
    },
    {
        id: 'cg2-030', topicRef: 'CG2', topicTitle: 'Line Segments 30', difficulty: 'Foundation',
        questionText: 'The endpoints of a diameter of a circle are \\( A(-2, 3) \\) and \\( B(6, -1) \\). Find the centre and radius of the circle.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Centre = midpoint', workingLatex: 'C = \\left(\\frac{-2+6}{2}, \\frac{3+(-1)}{2}\\right) = (2, 1)', explanation: 'The centre of a circle lies at the midpoint of any diameter.' },
            { stepNumber: 2, description: 'Radius = half diameter length', workingLatex: 'AB = \\sqrt{64+16} = \\sqrt{80} = 4\\sqrt{5}, \\quad r = 2\\sqrt{5}', explanation: 'Find the full diameter length using the distance formula, then halve it. Simplify: \\( \\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5} \\).' }
        ], finalAnswer: 'Centre \\((2, 1)\\), radius \\(2\\sqrt{5}\\)' }
    },
    {
        id: 'cg2-031', topicRef: 'CG2', topicTitle: 'Line Segments 31', difficulty: 'Foundation',
        questionText: 'Prove that the triangle with vertices \\( (1, 1) \\), \\( (4, 5) \\), \\( (7, 1) \\) is isosceles but not equilateral.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find all lengths', workingLatex: 'AB = \\sqrt{9+16} = 5, \\quad BC = \\sqrt{9+16} = 5, \\quad AC = 6', explanation: 'Use the distance formula for each pair. \\( AC \\) is horizontal (same y-coordinates), so its length is simply the difference in x-coordinates.' },
            { stepNumber: 2, description: 'Conclusion', workingLatex: 'AB = BC = 5 \\neq AC = 6', explanation: 'Two sides equal so isosceles, but not all equal so not equilateral.' }
        ], finalAnswer: '\\(AB = BC = 5\\), \\(AC = 6\\). Isosceles but not equilateral.' }
    },
    {
        id: 'cg2-032', topicRef: 'CG2', topicTitle: 'Line Segments 32', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( AB \\) is \\( M(4, -2) \\) and \\( A = (1, 3) \\). Find \\( B \\) and the length \\( AB \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find \\(B\\)', workingLatex: 'B = (2(4)-1, 2(-2)-3) = (7, -7)', explanation: 'Rearranging the midpoint formula: \\(x_B = 2x_M - x_A\\) and \\(y_B = 2y_M - y_A\\).' },
            { stepNumber: 2, description: 'Length', workingLatex: 'AB = \\sqrt{36+100} = \\sqrt{136} = 2\\sqrt{34}', explanation: 'Apply the distance formula between \\( A(1, 3) \\) and \\( B(7, -7) \\). Simplify: \\( \\sqrt{136} = \\sqrt{4 \\times 34} = 2\\sqrt{34} \\).' }
        ], finalAnswer: '\\(B = (7, -7)\\), \\(AB = 2\\sqrt{34}\\)' }
    },
    {
        id: 'cg2-033', topicRef: 'CG2', topicTitle: 'Line Segments 33', difficulty: 'Foundation',
        questionText: 'Find the point that divides \\( A(0, 0) \\) to \\( B(12, 8) \\) in the ratio \\( 2:1 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Section formula', workingLatex: 'P = \\left(\\frac{2(12)}{3}, \\frac{2(8)}{3}\\right) = (8, \\tfrac{16}{3})', explanation: 'The ratio \\(2:1\\) means \\(P\\) is two-thirds of the way from \\(A\\) to \\(B\\). Since \\(A\\) is the origin, each coordinate of \\(P\\) is simply \\(\\frac{2}{3}\\) of the corresponding coordinate of \\(B\\).' }
        ], finalAnswer: '\\(\\left(8, \\frac{16}{3}\\right)\\)' }
    },
    {
        id: 'cg2-034', topicRef: 'CG2', topicTitle: 'Line Segments 34', difficulty: 'Foundation',
        questionText: 'Show that the points \\( A(2, 3) \\), \\( B(5, 7) \\), \\( C(9, 4) \\) form a right-angled triangle at \\( B \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find lengths squared', workingLatex: 'AB^2 = 3^2+4^2 = 25, \\quad BC^2 = 4^2+(-3)^2 = 25, \\quad AC^2 = 7^2+1^2 = 50', explanation: 'Working with squared lengths avoids square roots and lets us check Pythagoras directly.' },
            { stepNumber: 2, description: 'Check Pythagoras', workingLatex: 'AB^2 + BC^2 = 25 + 25 = 50 = AC^2', explanation: 'Since the two shorter sides meet at \\(B\\) and their squares add to the square of \\(AC\\), the right angle is at \\(B\\).' },
            { stepNumber: 3, description: 'Check perpendicular gradients', workingLatex: 'm_{AB} = \\frac{4}{3}, \\quad m_{BC} = \\frac{-3}{4}, \\quad m_{AB} \\times m_{BC} = -1', explanation: 'The gradients are negative reciprocals, so \\(AB\\) is perpendicular to \\(BC\\). This confirms the right angle at \\(B\\).' }
        ], finalAnswer: 'Right-angled at \\(B\\), with \\(AB = BC = 5\\) and \\(AC = 5\\sqrt{2}\\).' }
    },
    {
        id: 'cg2-035', topicRef: 'CG2', topicTitle: 'Line Segments 35', difficulty: 'Foundation',
        questionText: 'Find the distance between \\( A(1, -2) \\) and \\( B(-3, 1) \\). Leave your answer as a surd.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'AB = \\sqrt{(-3-1)^2 + (1-(-2))^2} = \\sqrt{16+9} = 5', explanation: 'Note that \\((-3-1)^2 = 16\\) and \\((1-(-2))^2 = 9\\). The answer is a whole number (\\(3\\text{-}4\\text{-}5\\) triple), so no surd is needed despite the question asking for one.' }
        ], finalAnswer: '\\(5\\)' }
    },
    {
        id: 'cg2-036', topicRef: 'CG2', topicTitle: 'Line Segments 36', difficulty: 'Foundation',
        questionText: 'M is the midpoint of \\( AB \\) where \\( A = (-4, 6) \\) and \\( B = (2, -8) \\). Find the gradient of \\( AB \\) and the equation of the perpendicular bisector.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoint', workingLatex: 'M = (-1, -1)', explanation: 'Using the midpoint formula: average the x-coordinates and average the y-coordinates separately.' },
            { stepNumber: 2, description: 'Gradient of \\(AB\\)', workingLatex: 'm = \\frac{-8-6}{2-(-4)} = \\frac{-14}{6} = -\\frac{7}{3}', explanation: 'Gradient = rise over run. Be careful with double negatives: \\(2 - (-4) = 6\\), not \\(2\\).' },
            { stepNumber: 3, description: 'Perpendicular bisector', workingLatex: 'm_{\\perp} = \\frac{3}{7}; \\quad y + 1 = \\frac{3}{7}(x + 1) \\implies 7y = 3x - 4', explanation: 'The perpendicular gradient is the negative reciprocal. Then use \\(y - y_1 = m(x - x_1)\\) with the midpoint as \\((x_1, y_1)\\).' }
        ], finalAnswer: 'Gradient of \\(AB\\): \\(-\\frac{7}{3}\\); perpendicular bisector: \\(3x - 7y - 4 = 0\\)' }
    },
    {
        id: 'cg2-037', topicRef: 'CG2', topicTitle: 'Line Segments 37', difficulty: 'Foundation',
        questionText: 'The three vertices of a triangle are \\( A(0, 0) \\), \\( B(8, 0) \\) and \\( C(4, 6) \\). A median of a triangle is a line segment from a vertex to the midpoint of the opposite side. Find the lengths of the three medians.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Midpoints of sides', workingLatex: 'M_{BC} = (6, 3), \\quad M_{AC} = (2, 3), \\quad M_{AB} = (4, 0)', explanation: 'A median connects a vertex to the midpoint of the opposite side, so first find all three midpoints.' },
            { stepNumber: 2, description: 'Median from \\(A\\)', workingLatex: 'AM_{BC} = \\sqrt{36+9} = \\sqrt{45} = 3\\sqrt{5}', explanation: 'Distance from \\( A(0,0) \\) to \\( M_{BC}(6,3) \\). Simplify: \\(\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}\\).' },
            { stepNumber: 3, description: 'Median from \\(B\\)', workingLatex: 'BM_{AC} = \\sqrt{36+9} = 3\\sqrt{5}', explanation: 'Distance from \\( B(8,0) \\) to \\( M_{AC}(2,3) \\). Two medians have equal length, reflecting the symmetry of the triangle.' },
            { stepNumber: 4, description: 'Median from \\(C\\)', workingLatex: 'CM_{AB} = \\sqrt{0+36} = 6', explanation: 'Distance from \\( C(4,6) \\) to \\( M_{AB}(4,0) \\). Since they share the same x-coordinate, the distance is simply the difference in y-coordinates.' }
        ], finalAnswer: '\\(3\\sqrt{5}, 3\\sqrt{5}, 6\\)' }
    },
    {
        id: 'cg2-038', topicRef: 'CG2', topicTitle: 'Line Segments 38', difficulty: 'Foundation',
        questionText: 'A line segment has endpoints \\( (1, 5) \\) and \\( (9, 1) \\). Find the point that is \\( \\frac{3}{4} \\) of the way from the first to the second endpoint.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use ratio 3:1', workingLatex: 'P = \\left(1 + \\frac{3}{4}(9-1), 5 + \\frac{3}{4}(1-5)\\right) = (7, 2)', explanation: 'Being \\(\\frac{3}{4}\\) of the way along is equivalent to dividing the segment in the ratio \\(3:1\\). Add \\(\\frac{3}{4}\\) of the change in each coordinate to the starting point.' }
        ], finalAnswer: '(7, 2)' }
    },
    {
        id: 'cg2-039', topicRef: 'CG2', topicTitle: 'Line Segments 39', difficulty: 'Foundation',
        questionText: 'The distance from \\( (k, 2k) \\) to \\( (3, 1) \\) is \\( \\sqrt{13} \\). Find the possible values of \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equation', workingLatex: '(k-3)^2 + (2k-1)^2 = 13', explanation: 'Apply the distance formula and square both sides to remove the square root. Since \\(d = \\sqrt{13}\\), squaring gives \\(d^2 = 13\\).' },
            { stepNumber: 2, description: 'Expand', workingLatex: 'k^2 - 6k + 9 + 4k^2 - 4k + 1 = 13 \\implies 5k^2 - 10k - 3 = 0', explanation: 'Expand each bracket carefully, then collect like terms and move everything to one side.' },
            { stepNumber: 3, description: 'Solve', workingLatex: 'k = \\frac{10 \\pm \\sqrt{100+60}}{10} = 1 \\pm \\frac{2\\sqrt{10}}{5}', explanation: 'Use the quadratic formula. Two solutions arise because two points at distance \\(\\sqrt{13}\\) from \\((3,1)\\) lie on the line \\(y = 2x\\).' }
        ], finalAnswer: '\\(k = 1 \\pm \\frac{2\\sqrt{10}}{5}\\)' }
    },
    {
        id: 'cg2-040', topicRef: 'CG2', topicTitle: 'Line Segments 40', difficulty: 'Foundation',
        questionText: 'The centroid of a triangle is the point where all three medians intersect. A median is a line from a vertex to the midpoint of the opposite side. Find the coordinates of the centroid of the triangle with vertices \\( A(2, 1) \\), \\( B(8, 3) \\) and \\( C(5, 8) \\).',
        marks: 7, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the midpoint of \\(BC\\).', workingLatex: 'M_{BC} = \\left(\\frac{8+5}{2},\\ \\frac{3+8}{2}\\right) = \\left(\\frac{13}{2},\\ \\frac{11}{2}\\right)', explanation: 'The median from \\(A\\) goes to the midpoint of the opposite side \\(BC\\).' },
            { stepNumber: 2, description: 'Find the gradient of the median from \\(A(2, 1)\\) to this midpoint.', workingLatex: 'm_1 = \\frac{\\frac{11}{2} - 1}{\\frac{13}{2} - 2} = \\frac{\\frac{9}{2}}{\\frac{9}{2}} = 1', explanation: '' },
            { stepNumber: 3, description: 'Equation of the median from \\(A\\).', workingLatex: 'y - 1 = 1(x - 2) \\quad \\Rightarrow \\quad y = x - 1 \\quad (1)', explanation: '' },
            { stepNumber: 4, description: 'Find the midpoint of \\(AC\\).', workingLatex: 'M_{AC} = \\left(\\frac{2+5}{2},\\ \\frac{1+8}{2}\\right) = \\left(\\frac{7}{2},\\ \\frac{9}{2}\\right)', explanation: 'The median from \\(B\\) goes to the midpoint of \\(AC\\).' },
            { stepNumber: 5, description: 'Find the gradient of the median from \\(B(8, 3)\\) to this midpoint.', workingLatex: 'm_2 = \\frac{\\frac{9}{2} - 3}{\\frac{7}{2} - 8} = \\frac{\\frac{3}{2}}{-\\frac{9}{2}} = -\\frac{1}{3}', explanation: '' },
            { stepNumber: 6, description: 'Equation of the median from \\(B\\).', workingLatex: 'y - 3 = -\\tfrac{1}{3}(x - 8) \\quad \\Rightarrow \\quad y = -\\tfrac{1}{3}x + \\tfrac{8}{3} + 3 = -\\tfrac{1}{3}x + \\tfrac{17}{3} \\quad (2)', explanation: '' },
            { stepNumber: 7, description: 'Find the centroid by solving (1) and (2) simultaneously.', workingLatex: 'x - 1 = -\\tfrac{1}{3}x + \\tfrac{17}{3} \\quad \\Rightarrow \\quad x + \\tfrac{1}{3}x = \\tfrac{17}{3} + 1 \\quad \\Rightarrow \\quad \\tfrac{4}{3}x = \\tfrac{20}{3} \\quad \\Rightarrow \\quad x = 5', explanation: '' },
            { stepNumber: 8, description: 'Find the y-coordinate.', workingLatex: 'y = 5 - 1 = 4', explanation: 'Substituting \\(x = 5\\) into equation (1).' },
            { stepNumber: 9, description: 'State the centroid.', workingLatex: 'G = (5,\\ 4)', explanation: 'The centroid is the point where the two medians intersect.' }
        ], finalAnswer: '\\(G = (5,\\ 4)\\)' }
    },
    {
        id: 'cg2-041', topicRef: 'CG2', topicTitle: 'Line Segments 41', difficulty: 'Foundation',
        questionText: 'The points \\( A(1, 2) \\) and \\( B(7, 10) \\) are the endpoints of a diameter of a circle. Find the equation of the circle.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Centre', workingLatex: 'C = (4, 6)', explanation: 'Midpoint of \\(AB\\).' },
            { stepNumber: 2, description: 'Radius', workingLatex: 'r = \\frac{1}{2}\\sqrt{36+64} = \\frac{1}{2}(10) = 5', explanation: 'The radius is half the diameter length. Find the full distance \\(AB\\) first, then halve it.' },
            { stepNumber: 3, description: 'Equation', workingLatex: '(x-4)^2 + (y-6)^2 = 25', explanation: 'The standard circle equation is \\((x-a)^2 + (y-b)^2 = r^2\\), where \\((a,b)\\) is the centre. Remember to write \\(r^2\\), not \\(r\\), on the right side.' }
        ], finalAnswer: '\\((x-4)^2 + (y-6)^2 = 25\\)' }
    },
    {
        id: 'cg2-042', topicRef: 'CG2', topicTitle: 'Line Segments 42', difficulty: 'Foundation',
        questionText: 'Find the shortest distance between the parallel lines \\( y = 2x + 1 \\) and \\( y = 2x + 6 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Pick a point on the first line.', workingLatex: '\\text{When } x = 0: \\quad y = 2(0) + 1 = 1 \\quad \\Rightarrow \\quad A = (0,\\ 1)', explanation: 'Choose a convenient point on \\(y = 2x + 1\\). Setting \\(x = 0\\) gives the y-intercept.' },
            { stepNumber: 2, description: 'Find the gradient of the perpendicular from \\(A\\) to the second line.', workingLatex: '\\text{Gradient of lines} = 2, \\quad \\text{perpendicular gradient} = -\\frac{1}{2}', explanation: 'The shortest distance between parallel lines is measured along the perpendicular. The perpendicular gradient is the negative reciprocal of \\(2\\).' },
            { stepNumber: 3, description: 'Write the equation of the perpendicular through \\(A(0, 1)\\).', workingLatex: 'y - 1 = -\\tfrac{1}{2}(x - 0) \\quad \\Rightarrow \\quad y = -\\tfrac{1}{2}x + 1', explanation: 'Using \\(y - y_1 = m(x - x_1)\\) with the perpendicular gradient through the chosen point.' },
            { stepNumber: 4, description: 'Find where the perpendicular meets the second line \\(y = 2x + 6\\).', workingLatex: '-\\tfrac{1}{2}x + 1 = 2x + 6 \\quad \\Rightarrow \\quad -\\tfrac{1}{2}x - 2x = 5 \\quad \\Rightarrow \\quad -\\tfrac{5}{2}x = 5 \\quad \\Rightarrow \\quad x = -2', explanation: 'Solve simultaneously by setting the two expressions for \\(y\\) equal to each other.' },
            { stepNumber: 5, description: 'Find the y-coordinate of the intersection point \\(B\\).', workingLatex: 'y = 2(-2) + 6 = 2 \\quad \\Rightarrow \\quad B = (-2,\\ 2)', explanation: 'Substitute \\(x = -2\\) back into either line equation to find \\(y\\).' },
            { stepNumber: 6, description: 'Find the distance from \\(A(0, 1)\\) to \\(B(-2, 2)\\).', workingLatex: 'd = \\sqrt{(-2-0)^2 + (2-1)^2} = \\sqrt{4 + 1} = \\sqrt{5}', explanation: 'This is the perpendicular distance between the two parallel lines.' }
        ], finalAnswer: '\\(\\sqrt{5}\\)' }
    },
    {
        id: 'cg2-043', topicRef: 'CG2', topicTitle: 'Line Segments 43', difficulty: 'Foundation',
        questionText: 'A quadrilateral has vertices \\( A(0, 0) \\), \\( B(5, 0) \\), \\( C(7, 4) \\), \\( D(2, 4) \\). Find the lengths of its diagonals.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Diagonal \\(AC\\)', workingLatex: 'AC = \\sqrt{49+16} = \\sqrt{65}', explanation: 'Distance from \\(A(0,0)\\) to \\(C(7,4)\\). Since \\(65\\) has no perfect square factors other than \\(1\\), \\(\\sqrt{65}\\) is already in simplest surd form.' },
            { stepNumber: 2, description: 'Diagonal \\(BD\\)', workingLatex: 'BD = \\sqrt{9+16} = 5', explanation: 'Distance from \\(B(5,0)\\) to \\(D(2,4)\\). This is a \\(3\\text{-}4\\text{-}5\\) Pythagorean triple.' }
        ], finalAnswer: '\\(AC = \\sqrt{65}\\), \\(BD = 5\\)' }
    },
    {
        id: 'cg2-044', topicRef: 'CG2', topicTitle: 'Line Segments 44', difficulty: 'Foundation',
        questionText: 'The point \\( P \\) divides \\( AB \\) externally in the ratio \\( 3:1 \\), where \\( A = (2, 4) \\) and \\( B = (6, 8) \\). Find \\( P \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Understand what external division means.', workingLatex: 'AP:PB = 3:1, \\quad \\text{P is outside segment AB}', explanation: '\\(P\\) lies on the line through \\(A\\) and \\(B\\), but beyond \\(B\\) (not between \\(A\\) and \\(B\\)). Since \\(AP:PB = 3:1\\) and \\(AB\\) is the part inside, we have \\(AP = 3k\\) and \\(PB = k\\), so \\(AB = AP - PB = 2k\\). This means \\(B\\) is the midpoint of \\(AP\\) — or equivalently, \\(P\\) is such that \\(AB = 2k\\) and \\(BP = k\\).' },
            { stepNumber: 2, description: 'Find the direction from \\(A\\) to \\(B\\).', workingLatex: '\\overrightarrow{AB} = B - A = (6-2,\\ 8-4) = (4,\\ 4)', explanation: 'The vector from \\(A\\) to \\(B\\) tells us the direction of the line.' },
            { stepNumber: 3, description: 'Find the length \\(AB\\).', workingLatex: 'AB = \\sqrt{4^2 + 4^2} = \\sqrt{32} = 4\\sqrt{2}', explanation: '' },
            { stepNumber: 4, description: 'Since \\(AP:PB = 3:1\\), find \\(AP\\).', workingLatex: 'AB = AP - PB = 3k - k = 2k \\quad \\Rightarrow \\quad k = \\frac{AB}{2} = 2\\sqrt{2}', explanation: 'So \\(AP = 3k = 6\\sqrt{2}\\) and \\(PB = k = 2\\sqrt{2}\\).' },
            { stepNumber: 5, description: '\\(P\\) is at distance \\(AP\\) from \\(A\\) in the direction \\(A\\) to \\(B\\). This is three-halves of the way from \\(A\\) through \\(B\\).', workingLatex: 'P = A + \\frac{3}{2} \\cdot \\overrightarrow{AB} = (2,\\ 4) + \\frac{3}{2}(4,\\ 4) = (2,\\ 4) + (6,\\ 6) = (8,\\ 10)', explanation: 'Since \\(AP = 3k\\) and \\(AB = 2k\\), the ratio \\(AP/AB = 3/2\\). So \\(P\\) is \\(\\frac{3}{2}\\) of the way from \\(A\\) in the direction of \\(B\\) — going past \\(B\\).' },
            { stepNumber: 6, description: 'Verify.', workingLatex: 'AP = \\sqrt{(8-2)^2 + (10-4)^2} = \\sqrt{36+36} = 6\\sqrt{2}, \\quad PB = \\sqrt{(8-6)^2 + (10-8)^2} = \\sqrt{4+4} = 2\\sqrt{2}', explanation: '\\(AP:PB = 6\\sqrt{2} : 2\\sqrt{2} = 3:1\\) and \\(P(8,10)\\) is beyond \\(B(6,8)\\) on the line. Confirmed.' }
        ], finalAnswer: '\\(P = (8,\\ 10)\\)' }
    },
    {
        id: 'cg2-045', topicRef: 'CG2', topicTitle: 'Line Segments 45', difficulty: 'Foundation',
        questionText: 'The midpoint of \\( AB \\) is \\( (0, 0) \\). If \\( A = (3a, -2b) \\), express \\( B \\) in terms of \\( a \\) and \\( b \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use midpoint \\(= (0,0)\\)', workingLatex: 'B = (-3a, 2b)', explanation: 'Since midpoint is the origin, \\(B\\) is the negative of \\(A\\).' }
        ], finalAnswer: '\\(B = (-3a, 2b)\\)' }
    },
    {
        id: 'cg2-046', topicRef: 'CG2', topicTitle: 'Line Segments 46', difficulty: 'Foundation',
        questionText: 'Find the area of the triangle with vertices \\( (0, 0) \\), \\( (6, 0) \\), \\( (3, 8) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Area formula', workingLatex: '\\text{Area} = \\frac{1}{2} \\times 6 \\times 8 = 24', explanation: 'Base \\(= 6\\) along the x-axis, height \\(= 8\\).' }
        ], finalAnswer: '\\(24\\) square units' }
    },
    {
        id: 'cg2-047', topicRef: 'CG2', topicTitle: 'Line Segments 47', difficulty: 'Foundation',
        questionText: 'Show that \\( A(-1, 2) \\), \\( B(3, 0) \\), \\( C(5, 4) \\), \\( D(1, 6) \\) form a square.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the length \\(AB\\), where \\(A(-1, 2)\\) and \\(B(3, 0)\\).', workingLatex: 'AB = \\sqrt{(3-(-1))^2 + (0-2)^2} = \\sqrt{4^2 + (-2)^2} = \\sqrt{16+4} = \\sqrt{20}', explanation: 'Substitute the coordinates into the distance formula. Remember \\((-1)\\) subtracted gives \\(3-(-1) = 4\\).' },
            { stepNumber: 2, description: 'Find the length \\(BC\\), where \\(B(3, 0)\\) and \\(C(5, 4)\\).', workingLatex: 'BC = \\sqrt{(5-3)^2 + (4-0)^2} = \\sqrt{2^2 + 4^2} = \\sqrt{4+16} = \\sqrt{20}', explanation: '' },
            { stepNumber: 3, description: 'Find the length \\(CD\\), where \\(C(5, 4)\\) and \\(D(1, 6)\\).', workingLatex: 'CD = \\sqrt{(1-5)^2 + (6-4)^2} = \\sqrt{(-4)^2 + 2^2} = \\sqrt{16+4} = \\sqrt{20}', explanation: '' },
            { stepNumber: 4, description: 'Find the length \\(DA\\), where \\(D(1, 6)\\) and \\(A(-1, 2)\\).', workingLatex: 'DA = \\sqrt{(-1-1)^2 + (2-6)^2} = \\sqrt{(-2)^2 + (-4)^2} = \\sqrt{4+16} = \\sqrt{20}', explanation: 'All four sides equal \\(\\sqrt{20}\\), so the shape is at least a rhombus. To prove it is a square, we need a right angle.' },
            { stepNumber: 5, description: 'Find the gradient of \\(AB\\).', workingLatex: 'm_{AB} = \\frac{0-2}{3-(-1)} = \\frac{-2}{4} = -\\frac{1}{2}', explanation: 'Use gradient \\(= (y_2 - y_1)/(x_2 - x_1)\\).' },
            { stepNumber: 6, description: 'Find the gradient of \\(BC\\).', workingLatex: 'm_{BC} = \\frac{4-0}{5-3} = \\frac{4}{2} = 2', explanation: '' },
            { stepNumber: 7, description: 'Check whether \\(AB\\) and \\(BC\\) are perpendicular.', workingLatex: 'm_{AB} \\times m_{BC} = -\\tfrac{1}{2} \\times 2 = -1 \\quad \\checkmark', explanation: 'Since the product of the gradients is \\(-1\\), \\(AB\\) and \\(BC\\) are perpendicular. Combined with all four sides being equal, \\(ABCD\\) is a square.' }
        ], finalAnswer: 'All sides are \\(\\sqrt{20}\\) and adjacent sides are perpendicular, so \\(ABCD\\) is a square.' }
    },
    {
        id: 'cg2-048', topicRef: 'CG2', topicTitle: 'Line Segments 48', difficulty: 'Foundation',
        questionText: '[PREREQ:Requires knowledge of the Trigonometry module] Find the length of the line segment from \\( (\\cos\\theta, \\sin\\theta) \\) to \\( (-\\cos\\theta, -\\sin\\theta) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Distance formula', workingLatex: 'd = \\sqrt{(2\\cos\\theta)^2 + (2\\sin\\theta)^2} = 2\\sqrt{\\cos^2\\theta + \\sin^2\\theta} = 2', explanation: 'Using the Pythagorean identity.' }
        ], finalAnswer: '\\(2\\)' }
    },
    {
        id: 'cg2-049', topicRef: 'CG2', topicTitle: 'Line Segments 49', difficulty: 'Foundation',
        questionText: 'The line segment \\( AB \\) has length 10. \\( A = (1, 2) \\) and \\( B \\) lies on the x-axis. Find the possible coordinates of \\( B \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let \\(B = (x, 0)\\)', workingLatex: '(x-1)^2 + 4 = 100 \\implies (x-1)^2 = 96', explanation: 'Since \\(B\\) is on the x-axis, its y-coordinate is \\(0\\). Substitute into the distance formula squared: \\((x-1)^2 + (0-2)^2 = 10^2\\).' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'x = 1 \\pm 4\\sqrt{6}', explanation: 'Take the square root of both sides: \\(\\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6}\\). Two solutions arise since \\(B\\) could be on either side of \\(A\\).' }
        ], finalAnswer: '\\(B = (1 + 4\\sqrt{6}, 0)\\) or \\(B = (1 - 4\\sqrt{6}, 0)\\)' }
    },
    {
        id: 'cg2-050', topicRef: 'CG2', topicTitle: 'Line Segments 50', difficulty: 'Foundation',
        questionText: 'A triangle has vertices \\( P(2, 1) \\), \\( Q(8, 1) \\), \\( R(5, 7) \\). The centroid of a triangle is the point where all three medians meet. A median is a line from a vertex to the midpoint of the opposite side. Find: (a) the perimeter; (b) the area; (c) the coordinates of the centroid.',
        marks: 9, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Find \\(PQ\\). \\(P\\) and \\(Q\\) have the same y-coordinate, so \\(PQ\\) is horizontal.', workingLatex: 'PQ = |8 - 2| = 6', explanation: 'When two points share the same y-coordinate, the distance is simply the difference in x-coordinates.' },
            { stepNumber: 2, description: 'Find PR, where P(2, 1) and R(5, 7).', workingLatex: 'PR = \\sqrt{(5-2)^2 + (7-1)^2} = \\sqrt{3^2 + 6^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}', explanation: 'Simplify the surd: \\(\\sqrt{45} = \\sqrt{9 \\times 5} = 3\\sqrt{5}\\).' },
            { stepNumber: 3, description: 'Find QR, where Q(8, 1) and R(5, 7).', workingLatex: 'QR = \\sqrt{(5-8)^2 + (7-1)^2} = \\sqrt{(-3)^2 + 6^2} = \\sqrt{9 + 36} = \\sqrt{45} = 3\\sqrt{5}', explanation: '' },
            { stepNumber: 4, description: 'Perimeter.', workingLatex: '\\text{Perimeter} = 6 + 3\\sqrt{5} + 3\\sqrt{5} = 6 + 6\\sqrt{5}', explanation: 'Collect the like surds: \\(3\\sqrt{5} + 3\\sqrt{5} = 6\\sqrt{5}\\).' },
            { stepNumber: 5, description: '(b) Area. Use base \\(PQ\\) and perpendicular height from \\(R\\).', workingLatex: '\\text{Base} = PQ = 6, \\quad \\text{Height} = 7 - 1 = 6', explanation: '\\(PQ\\) lies on the line \\(y = 1\\). The height is the vertical distance from \\(R(5, 7)\\) down to this line.' },
            { stepNumber: 6, description: 'Calculate the area.', workingLatex: '\\text{Area} = \\tfrac{1}{2} \\times 6 \\times 6 = 18', explanation: '' },
            { stepNumber: 7, description: '(c) To find the centroid from first principles, find two medians and their intersection. First, find the midpoint of \\(QR\\).', workingLatex: 'M_{QR} = \\left(\\frac{8+5}{2},\\ \\frac{1+7}{2}\\right) = \\left(\\frac{13}{2},\\ 4\\right)', explanation: 'The median from \\(P\\) goes to the midpoint of the opposite side \\(QR\\).' },
            { stepNumber: 8, description: 'Find the equation of the median from \\(P(2, 1)\\) to the midpoint of \\(QR\\).', workingLatex: 'm = \\frac{4 - 1}{\\frac{13}{2} - 2} = \\frac{3}{\\frac{9}{2}} = \\frac{3 \\times 2}{9} = \\frac{2}{3}', explanation: 'Gradient of the median from \\(P\\).' },
            { stepNumber: 9, description: 'Equation of this median.', workingLatex: 'y - 1 = \\tfrac{2}{3}(x - 2) \\quad \\Rightarrow \\quad y = \\tfrac{2}{3}x - \\tfrac{1}{3} \\quad (1)', explanation: '' },
            { stepNumber: 10, description: 'Now find the midpoint of \\(PQ\\).', workingLatex: 'M_{PQ} = \\left(\\frac{2+8}{2},\\ \\frac{1+1}{2}\\right) = (5,\\ 1)', explanation: 'The median from \\(R\\) goes to the midpoint of \\(PQ\\).' },
            { stepNumber: 11, description: 'Find the equation of the median from \\(R(5, 7)\\) to the midpoint of \\(PQ\\), \\((5, 1)\\).', workingLatex: 'x = 5', explanation: 'Both points have \\(x = 5\\), so this median is a vertical line.' },
            { stepNumber: 12, description: 'Find the centroid by solving (1) and the vertical median simultaneously.', workingLatex: 'x = 5: \\quad y = \\tfrac{2}{3}(5) - \\tfrac{1}{3} = \\tfrac{10}{3} - \\tfrac{1}{3} = \\tfrac{9}{3} = 3', explanation: 'Substitute \\(x = 5\\) into equation (1).' },
            { stepNumber: 13, description: 'State the centroid.', workingLatex: 'G = (5,\\ 3)', explanation: 'The centroid is the point where the two medians intersect.' }
        ], finalAnswer: '(a) \\(6 + 6\\sqrt{5}\\); (b) \\(18\\); (c) \\((5, 3)\\)' }
    },

    // ─── CHALLENGE QUESTIONS (Q51–70) ─────────────────────────────────────────

    { id: 'cg2-051', topicRef: 'CG2', topicTitle: 'Line Segments 51', difficulty: 'Challenge', questionText: 'The points \\( A(2, 5) \\), \\( B(8, 1) \\) and \\( C(k, 9) \\) are such that \\( AB = AC \\). Find the possible values of \\( k \\).', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Set \\(AB = AC\\) and square both sides to avoid square roots.', workingLatex: '\\begin{aligned} AB^2 &= (8-2)^2 + (1-5)^2 = 36 + 16 = 52 \\\\ AC^2 &= (k-2)^2 + (9-5)^2 = (k-2)^2 + 16 \\end{aligned}', explanation: 'Squaring both sides is valid since distances are positive.' }, { stepNumber: 2, description: 'Set \\(AB^2 = AC^2\\) and solve for \\(k\\).', workingLatex: '\\begin{aligned} (k-2)^2 + 16 &= 52 \\\\ (k-2)^2 &= 36 \\\\ k - 2 &= \\pm 6 \\\\ k &= 8 \\text{ or } k = -4 \\end{aligned}', explanation: 'Take the square root of both sides, remembering both positive and negative roots.' } ], finalAnswer: '\\(k = 8\\) or \\(k = -4\\)' } },

    { id: 'cg2-052', topicRef: 'CG2', topicTitle: 'Line Segments 52', difficulty: 'Challenge', questionText: 'The line segment \\( AB \\) has midpoint \\( M(3, 7) \\). The point \\( A \\) has coordinates \\( (-1, 2) \\). The point \\( C \\) divides \\( AB \\) in the ratio \\( 1:3 \\). Find the coordinates of \\( C \\).', marks: 5, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Use the midpoint to find \\(B\\).', workingLatex: '\\begin{aligned} \\frac{-1 + x_B}{2} &= 3 \\implies x_B = 7 \\\\ \\frac{2 + y_B}{2} &= 7 \\implies y_B = 12 \\end{aligned}', explanation: 'Rearrange the midpoint formula to find \\(B\\).' }, { stepNumber: 2, description: '\\(C\\) divides \\(AB\\) in the ratio \\(1:3\\), so \\(C\\) is \\(\\frac{1}{4}\\) of the way from \\(A\\) to \\(B\\).', workingLatex: '\\begin{aligned} C &= A + \\frac{1}{4}(B - A) \\\\ &= (-1, 2) + \\frac{1}{4}(8, 10) = (1,\\; 4.5) \\end{aligned}', explanation: 'The ratio \\(1:3\\) means \\(C\\) is \\(\\frac{1}{4}\\) of the way along.' } ], finalAnswer: '\\(C = (1,\\; 4.5)\\)' } },

    { id: 'cg2-053', topicRef: 'CG2', topicTitle: 'Line Segments 53', difficulty: 'Challenge', questionText: 'Show that the triangle with vertices \\( A(1, 1) \\), \\( B(4, 5) \\) and \\( C(7, 1) \\) is isosceles, and find the area.', marks: 5, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the length \\(AB\\).', workingLatex: 'AB = \\sqrt{(4-1)^2 + (5-1)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5', explanation: 'Substitute the coordinates of \\(A(1,1)\\) and \\(B(4,5)\\) into the distance formula.' }, { stepNumber: 2, description: 'Find the length \\(BC\\).', workingLatex: 'BC = \\sqrt{(7-4)^2 + (1-5)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5', explanation: 'Substitute the coordinates of \\(B(4,5)\\) and \\(C(7,1)\\) into the distance formula.' }, { stepNumber: 3, description: 'Find the length \\(AC\\).', workingLatex: 'AC = \\sqrt{(7-1)^2 + (1-1)^2} = \\sqrt{6^2 + 0^2} = \\sqrt{36} = 6', explanation: '\\(A\\) and \\(C\\) share the same \\(y\\)-coordinate, so \\(AC\\) is horizontal.' }, { stepNumber: 4, description: 'Conclude the triangle is isosceles.', workingLatex: 'AB = BC = 5 \\neq AC = 6', explanation: 'Two sides are equal, so triangle \\(ABC\\) is isosceles.' }, { stepNumber: 5, description: 'Find the area.', workingLatex: '\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 4 = 12', explanation: 'Use \\(AC = 6\\) as the base (horizontal). The height is the vertical distance from \\(B\\) to the line \\(AC\\), which is \\(5 - 1 = 4\\).' } ], finalAnswer: 'Isosceles (\\(AB = BC = 5\\)); area = \\(12\\) square units' } },

    { id: 'cg2-054', topicRef: 'CG2', topicTitle: 'Line Segments 54', difficulty: 'Challenge', questionText: 'The distance from \\( (a, 2a) \\) to \\( (3, -1) \\) is \\( \\sqrt{50} \\). Find the possible values of \\( a \\).', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Write the distance formula with the given coordinates and square both sides.', workingLatex: '\\sqrt{(a-3)^2 + (2a-(-1))^2} = \\sqrt{50}', explanation: 'Substitute \\((a, 2a)\\) and \\((3, -1)\\) into the distance formula. Note that \\(2a - (-1) = 2a + 1\\).' }, { stepNumber: 2, description: 'Square both sides and expand each bracket.', workingLatex: '\\begin{aligned} (a-3)^2 + (2a+1)^2 &= 50 \\\\ (a^2 - 6a + 9) + (4a^2 + 4a + 1) &= 50 \\end{aligned}', explanation: 'Squaring removes the square root. Expand each squared bracket fully.' }, { stepNumber: 3, description: 'Collect like terms to form a quadratic equation.', workingLatex: '\\begin{aligned} 5a^2 - 2a + 10 &= 50 \\\\ 5a^2 - 2a - 40 &= 0 \\end{aligned}', explanation: 'Combine \\(a^2 + 4a^2 = 5a^2\\), \\(-6a + 4a = -2a\\), and \\(9 + 1 = 10\\). Then subtract 50 from both sides.' }, { stepNumber: 4, description: 'Solve the quadratic using the quadratic formula.', workingLatex: '\\begin{aligned} a &= \\frac{-(-2) \\pm \\sqrt{(-2)^2 - 4(5)(-40)}}{2(5)} \\\\ &= \\frac{2 \\pm \\sqrt{4 + 800}}{10} \\\\ &= \\frac{2 \\pm \\sqrt{804}}{10} = \\frac{2 \\pm 2\\sqrt{201}}{10} = \\frac{1 \\pm \\sqrt{201}}{5} \\end{aligned}', explanation: 'Apply the quadratic formula with \\(a = 5\\), \\(b = -2\\), \\(c = -40\\). Simplify \\(\\sqrt{804} = \\sqrt{4 \\times 201} = 2\\sqrt{201}\\), then cancel the common factor of 2.' } ], finalAnswer: '\\(a = \\frac{1 + \\sqrt{201}}{5}\\) or \\(a = \\frac{1 - \\sqrt{201}}{5}\\)' } },

    { id: 'cg2-055', topicRef: 'CG2', topicTitle: 'Line Segments 55', difficulty: 'Challenge', questionText: 'The points \\( P(0, 3) \\), \\( Q(4, 0) \\) and \\( R(0, -5) \\) form a triangle. A median is a line segment from a vertex to the midpoint of the opposite side. Find the length of the median from \\( Q \\).', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Identify the midpoint of the opposite side \\(PR\\).', workingLatex: 'M = \\left(\\frac{0+0}{2},\\ \\frac{3+(-5)}{2}\\right) = \\left(\\frac{0}{2},\\ \\frac{-2}{2}\\right) = (0,\\ -1)', explanation: 'The median from \\(Q\\) goes to the midpoint of \\(PR\\). Substitute \\(P(0,3)\\) and \\(R(0,-5)\\) into the midpoint formula.' }, { stepNumber: 2, description: 'Find the distance \\(QM\\).', workingLatex: 'QM = \\sqrt{(0-4)^2 + (-1-0)^2} = \\sqrt{(-4)^2 + (-1)^2} = \\sqrt{16 + 1} = \\sqrt{17}', explanation: 'Substitute the coordinates of \\(Q(4,0)\\) and \\(M(0,-1)\\) into the distance formula.' } ], finalAnswer: '\\(\\sqrt{17}\\)' } },

    { id: 'cg2-056', topicRef: 'CG2', topicTitle: 'Line Segments 56', difficulty: 'Challenge', questionText: 'The points \\( A(1, 3) \\) and \\( B(7, 11) \\) are the endpoints of a diameter of a circle. Find the centre and radius.', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the centre as the midpoint of the diameter.', workingLatex: 'C = \\left(\\frac{1+7}{2},\\ \\frac{3+11}{2}\\right) = \\left(\\frac{8}{2},\\ \\frac{14}{2}\\right) = (4,\\ 7)', explanation: 'The centre of a circle is at the midpoint of any diameter. Substitute \\(A(1,3)\\) and \\(B(7,11)\\) into the midpoint formula.' }, { stepNumber: 2, description: 'Find the diameter length \\(AB\\).', workingLatex: 'AB = \\sqrt{(7-1)^2 + (11-3)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10', explanation: 'Substitute the coordinates of \\(A(1,3)\\) and \\(B(7,11)\\) into the distance formula.' }, { stepNumber: 3, description: 'Find the radius.', workingLatex: 'r = \\frac{AB}{2} = \\frac{10}{2} = 5', explanation: 'The radius is half the diameter.' } ], finalAnswer: 'Centre \\((4, 7)\\), radius \\(5\\)' } },

    { id: 'cg2-057', topicRef: 'CG2', topicTitle: 'Line Segments 57', difficulty: 'Challenge', questionText: 'The point \\( P \\) divides \\( AB \\) in the ratio \\( 2:5 \\), where \\( A = (-3, 4) \\) and \\( B = (11, -10) \\). Find \\( P \\).', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: '\\(P\\) divides \\(AB\\) in the ratio \\(2:5\\), so \\(P\\) is \\(\\frac{2}{7}\\) of the way from \\(A\\) to \\(B\\).', workingLatex: '\\overrightarrow{AB} = B - A = (11 - (-3),\\; -10 - 4) = (14,\\; -14)', explanation: 'Find the direction from \\(A\\) to \\(B\\). The total ratio is \\(2 + 5 = 7\\) parts, and \\(P\\) is \\(2\\) parts along.' }, { stepNumber: 2, description: 'Find \\(P\\) by adding \\(\\frac{2}{7}\\) of the direction vector to \\(A\\).', workingLatex: '\\begin{aligned} P &= A + \\frac{2}{7} \\cdot \\overrightarrow{AB} \\\\ &= (-3,\\; 4) + \\frac{2}{7}(14,\\; -14) \\\\ &= (-3,\\; 4) + (4,\\; -4) \\\\ &= (1,\\; 0) \\end{aligned}', explanation: 'Multiply each component of the direction vector by \\(\\frac{2}{7}\\), then add to \\(A\\).' }, { stepNumber: 3, description: 'Verify.', workingLatex: 'A(-3,4) \\to P(1,0): (+4,-4); \\quad P(1,0) \\to B(11,-10): (+10,-10). \\quad \\text{Ratio } 4:10 = 2:5 \\; \\checkmark', explanation: 'The changes from \\(A\\) to \\(P\\) and \\(P\\) to \\(B\\) are in the ratio \\(2:5\\), confirming the answer.' } ], finalAnswer: '\\(P = (1,\\; 0)\\)' } },

    { id: 'cg2-058', topicRef: 'CG2', topicTitle: 'Line Segments 58', difficulty: 'Challenge', questionText: 'A quadrilateral has vertices \\( A(0, 0) \\), \\( B(5, 0) \\), \\( C(7, 4) \\), \\( D(2, 4) \\). Show it is a parallelogram and find its diagonal lengths.', marks: 6, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Show opposite sides are equal.', workingLatex: 'AB = DC = 5, \\quad AD = BC = \\sqrt{20}', explanation: '\\( AB = DC \\) and \\( AD = BC \\), so it is a parallelogram.' }, { stepNumber: 2, description: 'Find diagonals.', workingLatex: 'AC = \\sqrt{65}, \\quad BD = 5', explanation: 'The diagonals are not equal, confirming it is not a rectangle.' } ], finalAnswer: 'Parallelogram; \\(AC = \\sqrt{65}\\), \\(BD = 5\\)' } },

    { id: 'cg2-059', topicRef: 'CG2', topicTitle: 'Line Segments 59', difficulty: 'Challenge', questionText: 'The points \\( A(3, 1) \\) and \\( B(9, 9) \\) are joined. \\( C \\) divides \\( AB \\) in ratio \\( 1:2 \\) and \\( D \\) divides \\( AB \\) in ratio \\( 2:1 \\). Find \\( CD \\).', marks: 5, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the direction from \\(A\\) to \\(B\\).', workingLatex: '\\overrightarrow{AB} = B - A = (9 - 3,\\; 9 - 1) = (6,\\; 8)', explanation: '' }, { stepNumber: 2, description: '\\(C\\) divides \\(AB\\) in ratio \\(1:2\\), so \\(C\\) is \\(\\frac{1}{3}\\) of the way from \\(A\\) to \\(B\\).', workingLatex: '\\begin{aligned} C &= A + \\frac{1}{3} \\cdot \\overrightarrow{AB} \\\\ &= (3,\\; 1) + \\frac{1}{3}(6,\\; 8) \\\\ &= (3,\\; 1) + (2,\\; \\tfrac{8}{3}) = \\left(5,\\; \\tfrac{11}{3}\\right) \\end{aligned}', explanation: 'The ratio \\(1:2\\) means \\(1\\) part out of \\(3\\) total, so multiply the direction by \\(\\frac{1}{3}\\).' }, { stepNumber: 3, description: '\\(D\\) divides \\(AB\\) in ratio \\(2:1\\), so \\(D\\) is \\(\\frac{2}{3}\\) of the way from \\(A\\) to \\(B\\).', workingLatex: '\\begin{aligned} D &= A + \\frac{2}{3} \\cdot \\overrightarrow{AB} \\\\ &= (3,\\; 1) + \\frac{2}{3}(6,\\; 8) \\\\ &= (3,\\; 1) + (4,\\; \\tfrac{16}{3}) = \\left(7,\\; \\tfrac{19}{3}\\right) \\end{aligned}', explanation: 'The ratio \\(2:1\\) means \\(2\\) parts out of \\(3\\) total, so multiply the direction by \\(\\frac{2}{3}\\).' }, { stepNumber: 4, description: 'Find the distance \\(CD\\).', workingLatex: 'CD = \\sqrt{(7-5)^2 + \\left(\\tfrac{19}{3} - \\tfrac{11}{3}\\right)^2} = \\sqrt{2^2 + \\left(\\tfrac{8}{3}\\right)^2} = \\sqrt{4 + \\tfrac{64}{9}} = \\sqrt{\\tfrac{36 + 64}{9}} = \\sqrt{\\tfrac{100}{9}} = \\tfrac{10}{3}', explanation: '\\(C\\) and \\(D\\) are the two trisection points of \\(AB\\), so the distance between them is one-third of the total length \\(AB\\).' } ], finalAnswer: '\\(CD = \\frac{10}{3}\\)' } },

    { id: 'cg2-060', topicRef: 'CG2', topicTitle: 'Line Segments 60', difficulty: 'Challenge', questionText: 'The vertices of triangle \\( PQR \\) are \\( P(-2, 6) \\), \\( Q(4, 2) \\) and \\( R(0, -4) \\). The centroid of a triangle is the point where all three medians intersect. A median is a line segment from a vertex to the midpoint of the opposite side. Find the centroid.', marks: 7, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the midpoint of \\(QR\\).', workingLatex: 'M_{QR} = \\left(\\frac{4+0}{2},\\ \\frac{2+(-4)}{2}\\right) = (2,\\ -1)', explanation: 'The median from \\(P\\) goes to the midpoint of the opposite side \\(QR\\).' }, { stepNumber: 2, description: 'Find the gradient of the median from \\(P(-2, 6)\\) to this midpoint \\((2, -1)\\).', workingLatex: 'm_1 = \\frac{-1 - 6}{2 - (-2)} = \\frac{-7}{4}', explanation: '' }, { stepNumber: 3, description: 'Equation of the median from P.', workingLatex: 'y - 6 = -\\tfrac{7}{4}(x - (-2)) \\quad \\Rightarrow \\quad y - 6 = -\\tfrac{7}{4}(x + 2) \\quad \\Rightarrow \\quad y = -\\tfrac{7}{4}x - \\tfrac{7}{2} + 6 = -\\tfrac{7}{4}x + \\tfrac{5}{2} \\quad (1)', explanation: '' }, { stepNumber: 4, description: 'Find the midpoint of \\(PQ\\).', workingLatex: 'M_{PQ} = \\left(\\frac{-2+4}{2},\\ \\frac{6+2}{2}\\right) = (1,\\ 4)', explanation: 'The median from \\(R\\) goes to the midpoint of \\(PQ\\).' }, { stepNumber: 5, description: 'Find the gradient of the median from \\(R(0, -4)\\) to this midpoint \\((1, 4)\\).', workingLatex: 'm_2 = \\frac{4 - (-4)}{1 - 0} = \\frac{8}{1} = 8', explanation: '' }, { stepNumber: 6, description: 'Equation of the median from R.', workingLatex: 'y - (-4) = 8(x - 0) \\quad \\Rightarrow \\quad y = 8x - 4 \\quad (2)', explanation: '' }, { stepNumber: 7, description: 'Find the centroid by solving (1) and (2) simultaneously.', workingLatex: '8x - 4 = -\\tfrac{7}{4}x + \\tfrac{5}{2} \\quad \\Rightarrow \\quad 8x + \\tfrac{7}{4}x = \\tfrac{5}{2} + 4 \\quad \\Rightarrow \\quad \\tfrac{39}{4}x = \\tfrac{13}{2} \\quad \\Rightarrow \\quad x = \\tfrac{13}{2} \\times \\tfrac{4}{39} = \\tfrac{2}{3}', explanation: '' }, { stepNumber: 8, description: 'Find the y-coordinate.', workingLatex: 'y = 8\\left(\\tfrac{2}{3}\\right) - 4 = \\tfrac{16}{3} - 4 = \\tfrac{16}{3} - \\tfrac{12}{3} = \\tfrac{4}{3}', explanation: 'Substituting \\(x = \\frac{2}{3}\\) into equation (2).' }, { stepNumber: 9, description: 'State the centroid.', workingLatex: 'G = \\left(\\frac{2}{3},\\ \\frac{4}{3}\\right)', explanation: 'The centroid is the point where the two medians intersect.' } ], finalAnswer: '\\(G = \\left(\\frac{2}{3},\\; \\frac{4}{3}\\right)\\)' } },

    { id: 'cg2-061', topicRef: 'CG2', topicTitle: 'Line Segments 61', difficulty: 'Challenge', questionText: 'A circle has centre \\( C(3, 4) \\) and passes through \\( A(0, 0) \\). Does \\( B(6, 8) \\) lie inside, on, or outside the circle?', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the radius by calculating the distance \\(CA\\).', workingLatex: 'r = CA = \\sqrt{(3-0)^2 + (4-0)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5', explanation: 'The radius is the distance from the centre \\(C(3, 4)\\) to the point \\(A(0, 0)\\) on the circle.' }, { stepNumber: 2, description: 'Find the distance \\(CB\\).', workingLatex: 'CB = \\sqrt{(6-3)^2 + (8-4)^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5', explanation: 'Substitute the coordinates of \\(C(3, 4)\\) and \\(B(6, 8)\\) into the distance formula.' }, { stepNumber: 3, description: 'Compare \\(CB\\) with the radius.', workingLatex: 'CB = 5 = r', explanation: 'Since \\(CB = r\\), the point \\(B\\) lies exactly on the circle. If \\(CB < r\\) it would be inside, and if \\(CB > r\\) it would be outside.' } ], finalAnswer: '\\(B\\) lies on the circle' } },

    { id: 'cg2-062', topicRef: 'CG2', topicTitle: 'Line Segments 62', difficulty: 'Challenge', questionText: 'The points \\( A(2, -1) \\), \\( B(6, 3) \\) and \\( C(10, -1) \\) form a triangle. Find the equation of the perpendicular bisector of \\( AC \\) and verify it passes through \\( B \\).', marks: 5, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: '\\(AC\\) is horizontal (gradient \\(0\\)), so the perpendicular bisector is vertical through the midpoint.', workingLatex: 'M_{AC} = (6,\\; -1), \\quad \\text{perpendicular bisector: } x = 6', explanation: 'The perpendicular to a horizontal line is vertical.' }, { stepNumber: 2, description: 'Verify \\(B(6, 3)\\) lies on \\(x = 6\\).', workingLatex: 'B \\text{ has } x = 6 \\quad \\checkmark', explanation: '\\(B\\) is equidistant from \\(A\\) and \\(C\\), confirming the triangle is isosceles.' } ], finalAnswer: 'Perpendicular bisector: \\(x = 6\\); \\(B\\) lies on it' } },

    { id: 'cg2-063', topicRef: 'CG2', topicTitle: 'Line Segments 63', difficulty: 'Challenge', questionText: '\\( AB \\) has \\( A = (1, 4) \\) and \\( B = (7, -2) \\). The point \\( P \\) lies on \\( AB \\) such that \\( AP = 2 \\). Find \\( P \\).', marks: 5, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the direction vector from A to B.', workingLatex: '\\overrightarrow{AB} = B - A = (7 - 1,\\; -2 - 4) = (6,\\; -6)', explanation: 'Subtract the coordinates of A from B to get the direction of the line.' }, { stepNumber: 2, description: 'Find the length of AB.', workingLatex: '|\\overrightarrow{AB}| = \\sqrt{6^2 + (-6)^2} = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}', explanation: 'The magnitude of the direction vector gives the full length from A to B.' }, { stepNumber: 3, description: 'Find the unit direction vector. A unit vector has length 1 and is found by dividing the direction vector by its magnitude.', workingLatex: '\\hat{u} = \\frac{\\overrightarrow{AB}}{|\\overrightarrow{AB}|} = \\frac{(6,\\; -6)}{6\\sqrt{2}} = \\left(\\frac{6}{6\\sqrt{2}},\\; \\frac{-6}{6\\sqrt{2}}\\right) = \\left(\\frac{1}{\\sqrt{2}},\\; -\\frac{1}{\\sqrt{2}}\\right)', explanation: 'Divide each component of the direction vector by the magnitude. This gives a vector of length 1 pointing from A toward B.' }, { stepNumber: 4, description: 'P is at distance 2 from A along this direction. Multiply the unit vector by 2 and add to A.', workingLatex: '\\begin{aligned} P &= A + 2\\hat{u} \\\\ &= (1,\\; 4) + 2\\left(\\frac{1}{\\sqrt{2}},\\; -\\frac{1}{\\sqrt{2}}\\right) \\\\ &= (1,\\; 4) + \\left(\\frac{2}{\\sqrt{2}},\\; -\\frac{2}{\\sqrt{2}}\\right) \\\\ &= (1,\\; 4) + (\\sqrt{2},\\; -\\sqrt{2}) \\\\ &= (1 + \\sqrt{2},\\; 4 - \\sqrt{2}) \\end{aligned}', explanation: 'Since the unit vector has length 1, multiplying by 2 gives a vector of length 2 in the direction A to B. Simplify \\(\\frac{2}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}\\).' } ], finalAnswer: '\\(P = \\left(1 + \\sqrt{2},\\; 4 - \\sqrt{2}\\right)\\)' } },

    { id: 'cg2-064', topicRef: 'CG2', topicTitle: 'Line Segments 64', difficulty: 'Challenge', questionText: 'Prove that \\( A(1, 1) \\), \\( B(5, 3) \\) and \\( C(-3, -1) \\) are collinear.', marks: 3, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Show the gradients are equal.', workingLatex: 'm_{AB} = \\frac{1}{2}, \\quad m_{AC} = \\frac{1}{2}', explanation: 'Two segments sharing a common point with equal gradients means all three points are collinear.' } ], finalAnswer: '\\(m_{AB} = m_{AC} = \\frac{1}{2}\\), so \\(A\\), \\(B\\), \\(C\\) are collinear' } },

    { id: 'cg2-065', topicRef: 'CG2', topicTitle: 'Line Segments 65', difficulty: 'Challenge', questionText: 'The points \\( A(0, 6) \\), \\( B(8, 0) \\) and \\( C(3, h) \\) form a right angle at \\( C \\). Find \\( h \\).', marks: 5, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the gradient of \\(CA\\).', workingLatex: 'm_{CA} = \\frac{6 - h}{0 - 3} = \\frac{6 - h}{-3} = \\frac{h - 6}{3}', explanation: 'Substitute the coordinates of \\(C(3, h)\\) and \\(A(0, 6)\\) into the gradient formula \\(m = \\frac{y_2 - y_1}{x_2 - x_1}\\).' }, { stepNumber: 2, description: 'Find the gradient of \\(CB\\).', workingLatex: 'm_{CB} = \\frac{0 - h}{8 - 3} = \\frac{-h}{5}', explanation: 'Substitute the coordinates of \\(C(3, h)\\) and \\(B(8, 0)\\) into the gradient formula.' }, { stepNumber: 3, description: 'Apply the perpendicularity condition \\(m_{CA} \\times m_{CB} = -1\\).', workingLatex: '\\frac{h - 6}{3} \\times \\frac{-h}{5} = -1', explanation: 'For a right angle at \\(C\\), the two lines meeting at \\(C\\) must be perpendicular, so the product of their gradients equals \\(-1\\).' }, { stepNumber: 4, description: 'Multiply out and rearrange.', workingLatex: '\\begin{aligned} \\frac{(h - 6)(-h)}{15} &= -1 \\\\ -h(h - 6) &= -15 \\\\ -h^2 + 6h &= -15 \\\\ h^2 - 6h - 15 &= 0 \\end{aligned}', explanation: 'Multiply both sides by \\(15\\), expand, and rearrange into standard quadratic form.' }, { stepNumber: 5, description: 'Solve the quadratic using the quadratic formula.', workingLatex: '\\begin{aligned} h &= \\frac{6 \\pm \\sqrt{(-6)^2 - 4(1)(-15)}}{2(1)} \\\\ &= \\frac{6 \\pm \\sqrt{36 + 60}}{2} \\\\ &= \\frac{6 \\pm \\sqrt{96}}{2} \\\\ &= \\frac{6 \\pm 4\\sqrt{6}}{2} \\\\ &= 3 \\pm 2\\sqrt{6} \\end{aligned}', explanation: 'Both solutions are geometrically valid — they correspond to two possible positions of \\(C\\), one above and one below the line \\(AB\\).' } ], finalAnswer: '\\(h = 3 + 2\\sqrt{6}\\) or \\(h = 3 - 2\\sqrt{6}\\)' } },

    { id: 'cg2-066', topicRef: 'CG2', topicTitle: 'Line Segments 66', difficulty: 'Challenge', questionText: 'The midpoints of the sides of triangle \\( A(0,0) \\), \\( B(8,0) \\), \\( C(4,6) \\) form a smaller triangle (called the medial triangle). Find the ratio of the area of the medial triangle to the area of triangle \\( ABC \\).', marks: 6, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the midpoint of \\(AB\\), where \\(A(0,0)\\) and \\(B(8,0)\\).', workingLatex: 'M_{AB} = \\left(\\frac{0+8}{2},\\ \\frac{0+0}{2}\\right) = (4,\\ 0)', explanation: '' }, { stepNumber: 2, description: 'Find the midpoint of \\(BC\\), where \\(B(8,0)\\) and \\(C(4,6)\\).', workingLatex: 'M_{BC} = \\left(\\frac{8+4}{2},\\ \\frac{0+6}{2}\\right) = (6,\\ 3)', explanation: '' }, { stepNumber: 3, description: 'Find the midpoint of \\(AC\\), where \\(A(0,0)\\) and \\(C(4,6)\\).', workingLatex: 'M_{AC} = \\left(\\frac{0+4}{2},\\ \\frac{0+6}{2}\\right) = (2,\\ 3)', explanation: 'These three midpoints \\((4,0)\\), \\((6,3)\\) and \\((2,3)\\) form the medial triangle.' }, { stepNumber: 4, description: 'Find the area of triangle \\(ABC\\). Use \\(AB\\) as the base.', workingLatex: '\\text{Base } AB = 8, \\quad \\text{Height} = 6 \\quad (\\text{vertical distance from } C \\text{ to the } x\\text{-axis})', explanation: '\\(A\\) and \\(B\\) both lie on the x-axis, so \\(AB = 8\\). The height is the y-coordinate of \\(C\\).' }, { stepNumber: 5, description: 'Calculate the area of \\(ABC\\).', workingLatex: '\\text{Area}_{ABC} = \\frac{1}{2} \\times 8 \\times 6 = 24', explanation: '' }, { stepNumber: 6, description: 'Find the area of the medial triangle with vertices \\((4,0)\\), \\((6,3)\\), \\((2,3)\\). Use the coordinate area formula.', workingLatex: '\\begin{aligned} \\text{Area} &= \\frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)| \\\\ &= \\frac{1}{2} |4(3 - 3) + 6(3 - 0) + 2(0 - 3)| \\\\ &= \\frac{1}{2} |0 + 18 - 6| \\\\ &= \\frac{1}{2} \\times 12 = 6 \\end{aligned}', explanation: 'The coordinate (shoelace) formula finds the area of a triangle from its vertices without needing to identify a base and height.' }, { stepNumber: 7, description: 'Find the ratio.', workingLatex: '\\frac{\\text{Area}_{\\text{medial}}}{\\text{Area}_{ABC}} = \\frac{6}{24} = \\frac{1}{4}', explanation: 'The medial triangle has one-quarter the area of the original triangle. This is true for any triangle — it is a general result.' } ], finalAnswer: '\\(\\frac{1}{4}\\)' } },

    { id: 'cg2-067', topicRef: 'CG2', topicTitle: 'Line Segments 67', difficulty: 'Challenge', questionText: 'The segment from \\( A(2, 3) \\) to \\( B(10, 7) \\) is extended beyond \\( B \\) to \\( C \\) such that \\( BC = \\frac{1}{2}AB \\). Find \\( C \\).', marks: 4, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Move half the direction vector beyond \\(B\\).', workingLatex: 'C = B + \\frac{1}{2}(B - A) = (10, 7) + (4, 2) = (14,\\; 9)', explanation: 'Since \\(BC = \\frac{1}{2}AB\\), add half of \\(\\vec{AB} = (8, 4)\\) to \\(B\\).' } ], finalAnswer: '\\(C = (14,\\; 9)\\)' } },

    { id: 'cg2-068', topicRef: 'CG2', topicTitle: 'Line Segments 68', difficulty: 'Challenge', questionText: 'A rhombus \\( ABCD \\) has \\( A = (1, 0) \\) and \\( C = (7, 8) \\). Given that \\( B \\) lies on the \\( x \\)-axis, find \\( B \\) and \\( D \\).', marks: 8, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'In a rhombus, the diagonals bisect each other. Find the midpoint \\(M\\) of diagonal \\(AC\\).', workingLatex: 'M = \\left(\\frac{1+7}{2},\\ \\frac{0+8}{2}\\right) = (4,\\ 4)', explanation: '\\(M\\) is the midpoint of \\(AC\\), and since the diagonals of a rhombus bisect each other, \\(M\\) is also the midpoint of \\(BD\\).' }, { stepNumber: 2, description: 'In a rhombus, the diagonals are perpendicular. Find the gradient of \\(AC\\).', workingLatex: 'm_{AC} = \\frac{8 - 0}{7 - 1} = \\frac{8}{6} = \\frac{4}{3}', explanation: 'Substitute \\(A(1, 0)\\) and \\(C(7, 8)\\) into the gradient formula.' }, { stepNumber: 3, description: 'Find the gradient of \\(BD\\). Since \\(BD\\) is perpendicular to \\(AC\\), use the negative reciprocal.', workingLatex: 'm_{BD} = -\\frac{1}{m_{AC}} = -\\frac{1}{\\frac{4}{3}} = -\\frac{3}{4}', explanation: 'Perpendicular gradients multiply to \\(-1\\), so flip the fraction and change the sign.' }, { stepNumber: 4, description: 'Write the equation of line \\(BD\\) through \\(M(4, 4)\\) with gradient \\(-\\frac{3}{4}\\).', workingLatex: 'y - 4 = -\\frac{3}{4}(x - 4) \\quad \\Rightarrow \\quad y - 4 = -\\frac{3}{4}x + 3 \\quad \\Rightarrow \\quad y = -\\frac{3}{4}x + 7', explanation: 'Using \\(y - y_1 = m(x - x_1)\\) with the perpendicular gradient through the midpoint.' }, { stepNumber: 5, description: '\\(B\\) lies on the x-axis, so \\(y = 0\\). Substitute into the equation of \\(BD\\).', workingLatex: '0 = -\\frac{3}{4}x + 7 \\quad \\Rightarrow \\quad \\frac{3}{4}x = 7 \\quad \\Rightarrow \\quad x = 7 \\times \\frac{4}{3} = \\frac{28}{3}', explanation: 'Rearrange to solve for \\(x\\): multiply both sides by \\(\\frac{4}{3}\\).' }, { stepNumber: 6, description: 'State the coordinates of \\(B\\).', workingLatex: 'B = \\left(\\frac{28}{3},\\ 0\\right)', explanation: '' }, { stepNumber: 7, description: 'Since \\(M\\) is the midpoint of \\(BD\\), use \\(D = 2M - B\\) to find \\(D\\).', workingLatex: '\\begin{aligned} x_D &= 2(4) - \\frac{28}{3} = 8 - \\frac{28}{3} = \\frac{24 - 28}{3} = -\\frac{4}{3} \\\\ y_D &= 2(4) - 0 = 8 \\end{aligned}', explanation: 'If \\(M\\) is the midpoint of \\(BD\\), then \\(M = \\frac{B + D}{2}\\), so \\(D = 2M - B\\). Apply this to each coordinate separately.' }, { stepNumber: 8, description: 'State the coordinates of \\(D\\).', workingLatex: 'D = \\left(-\\frac{4}{3},\\ 8\\right)', explanation: '' } ], finalAnswer: '\\(B = \\left(\\frac{28}{3},\\ 0\\right)\\), \\(D = \\left(-\\frac{4}{3},\\ 8\\right)\\)' } },

    { id: 'cg2-069', topicRef: 'CG2', topicTitle: 'Line Segments 69', difficulty: 'Challenge', questionText: 'Triangle \\( ABC \\) has \\( A = (0, 0) \\), \\( B = (12, 0) \\) and \\( C = (4, 8) \\). The centroid of a triangle is the point where all three medians intersect. A median is a line segment from a vertex to the midpoint of the opposite side. Verify that the centroid divides each median in the ratio \\( 2:1 \\) (measured from the vertex).', marks: 8, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the centroid by finding two medians and solving simultaneously. First, find the midpoint of \\(BC\\).', workingLatex: 'M_{BC} = \\left(\\frac{12+4}{2},\\ \\frac{0+8}{2}\\right) = (8,\\ 4)', explanation: 'The median from \\(A\\) goes to the midpoint of the opposite side \\(BC\\).' }, { stepNumber: 2, description: 'Find the equation of the median from \\(A(0, 0)\\) to the midpoint \\((8, 4)\\).', workingLatex: 'm = \\frac{4 - 0}{8 - 0} = \\frac{1}{2} \\quad \\Rightarrow \\quad y = \\frac{1}{2}x \\quad (1)', explanation: 'The line passes through the origin, so the equation is simply \\(y = mx\\).' }, { stepNumber: 3, description: 'Find the midpoint of \\(AB\\).', workingLatex: 'M_{AB} = \\left(\\frac{0+12}{2},\\ \\frac{0+0}{2}\\right) = (6,\\ 0)', explanation: 'The median from \\(C\\) goes to the midpoint of \\(AB\\).' }, { stepNumber: 4, description: 'Find the equation of the median from \\(C(4, 8)\\) to the midpoint \\((6, 0)\\).', workingLatex: 'm = \\frac{0 - 8}{6 - 4} = \\frac{-8}{2} = -4 \\quad \\Rightarrow \\quad y - 0 = -4(x - 6) \\quad \\Rightarrow \\quad y = -4x + 24 \\quad (2)', explanation: '' }, { stepNumber: 5, description: 'Find the centroid \\(G\\) by solving (1) and (2) simultaneously.', workingLatex: '\\frac{1}{2}x = -4x + 24 \\quad \\Rightarrow \\quad \\frac{1}{2}x + 4x = 24 \\quad \\Rightarrow \\quad \\frac{9}{2}x = 24 \\quad \\Rightarrow \\quad x = \\frac{48}{9} = \\frac{16}{3}', explanation: '' }, { stepNumber: 6, description: 'Find the y-coordinate.', workingLatex: 'y = \\frac{1}{2} \\times \\frac{16}{3} = \\frac{8}{3} \\quad \\Rightarrow \\quad G = \\left(\\frac{16}{3},\\ \\frac{8}{3}\\right)', explanation: 'Substitute \\(x = \\frac{16}{3}\\) into equation (1).' }, { stepNumber: 7, description: 'Now verify the \\(2:1\\) ratio. Find the distance \\(AG\\) (from vertex \\(A\\) to centroid \\(G\\)).', workingLatex: 'AG = \\sqrt{\\left(\\frac{16}{3}\\right)^2 + \\left(\\frac{8}{3}\\right)^2} = \\sqrt{\\frac{256 + 64}{9}} = \\sqrt{\\frac{320}{9}} = \\frac{\\sqrt{320}}{3} = \\frac{8\\sqrt{5}}{3}', explanation: 'Simplify: \\(\\sqrt{320} = \\sqrt{64 \\times 5} = 8\\sqrt{5}\\).' }, { stepNumber: 8, description: 'Find the distance from \\(G\\) to the midpoint of \\(BC\\) (the other end of the median).', workingLatex: 'GM_{BC} = \\sqrt{\\left(8 - \\frac{16}{3}\\right)^2 + \\left(4 - \\frac{8}{3}\\right)^2} = \\sqrt{\\left(\\frac{8}{3}\\right)^2 + \\left(\\frac{4}{3}\\right)^2} = \\sqrt{\\frac{64 + 16}{9}} = \\sqrt{\\frac{80}{9}} = \\frac{4\\sqrt{5}}{3}', explanation: 'Simplify: \\(8 - \\frac{16}{3} = \\frac{24 - 16}{3} = \\frac{8}{3}\\) and \\(4 - \\frac{8}{3} = \\frac{12 - 8}{3} = \\frac{4}{3}\\). Then \\(\\sqrt{80} = 4\\sqrt{5}\\).' }, { stepNumber: 9, description: 'Check the ratio.', workingLatex: '\\frac{AG}{GM_{BC}} = \\frac{\\frac{8\\sqrt{5}}{3}}{\\frac{4\\sqrt{5}}{3}} = \\frac{8\\sqrt{5}}{4\\sqrt{5}} = 2', explanation: 'The \\(\\sqrt{5}\\) and the \\(\\frac{1}{3}\\) both cancel, leaving exactly \\(2\\). So \\(AG : GM_{BC} = 2 : 1\\), confirming the centroid divides the median from \\(A\\) in the ratio \\(2:1\\) from the vertex.' } ], finalAnswer: 'Verified: \\(AG : GM_{BC} = 2 : 1\\). The centroid divides each median in the ratio \\(2:1\\) from the vertex.' } },

    { id: 'cg2-070', topicRef: 'CG2', topicTitle: 'Line Segments 70', difficulty: 'Challenge', questionText: 'A triangle has vertices \\( A(2, -3) \\), \\( B(8, 5) \\) and \\( C(-4, 1) \\). The perpendicular bisector of side \\( AB \\) meets the perpendicular bisector of side \\( AC \\) at point \\( P \\). Find the coordinates of \\( P \\) and show that \\( PA = PB = PC \\).', marks: 8, examStyle: true, yearCreated: 2026, tags: [], workedSolution: { steps: [ { stepNumber: 1, description: 'Find the midpoint and gradient of \\(AB\\).', workingLatex: 'M_{AB} = \\left(\\frac{2+8}{2},\\ \\frac{-3+5}{2}\\right) = (5,\\ 1), \\quad m_{AB} = \\frac{5-(-3)}{8-2} = \\frac{8}{6} = \\frac{4}{3}', explanation: '' }, { stepNumber: 2, description: 'The perpendicular bisector of \\(AB\\) passes through the midpoint with the negative reciprocal gradient.', workingLatex: 'm_{\\perp} = -\\frac{3}{4} \\quad \\Rightarrow \\quad y - 1 = -\\frac{3}{4}(x - 5) \\quad \\Rightarrow \\quad y = -\\frac{3}{4}x + \\frac{19}{4} \\quad (1)', explanation: '' }, { stepNumber: 3, description: 'Find the midpoint and gradient of \\(AC\\).', workingLatex: 'M_{AC} = \\left(\\frac{2+(-4)}{2},\\ \\frac{-3+1}{2}\\right) = (-1,\\ -1), \\quad m_{AC} = \\frac{1-(-3)}{-4-2} = \\frac{4}{-6} = -\\frac{2}{3}', explanation: '' }, { stepNumber: 4, description: 'The perpendicular bisector of \\(AC\\).', workingLatex: 'm_{\\perp} = \\frac{3}{2} \\quad \\Rightarrow \\quad y - (-1) = \\frac{3}{2}(x - (-1)) \\quad \\Rightarrow \\quad y = \\frac{3}{2}x + \\frac{1}{2} \\quad (2)', explanation: '' }, { stepNumber: 5, description: 'Solve (1) and (2) simultaneously to find \\(P\\).', workingLatex: '-\\frac{3}{4}x + \\frac{19}{4} = \\frac{3}{2}x + \\frac{1}{2} \\quad \\Rightarrow \\quad \\frac{19}{4} - \\frac{1}{2} = \\frac{3}{2}x + \\frac{3}{4}x \\quad \\Rightarrow \\quad \\frac{17}{4} = \\frac{9}{4}x \\quad \\Rightarrow \\quad x = \\frac{17}{9}', explanation: '' }, { stepNumber: 6, description: 'Find the y-coordinate.', workingLatex: 'y = \\frac{3}{2} \\times \\frac{17}{9} + \\frac{1}{2} = \\frac{17}{6} + \\frac{3}{6} = \\frac{20}{6} = \\frac{10}{3}', explanation: 'Substituting into equation (2).' }, { stepNumber: 7, description: 'So \\(P = \\left(\\frac{17}{9},\\ \\frac{10}{3}\\right)\\). Now verify \\(PA = PB = PC\\).', workingLatex: '\\begin{aligned} PA^2 &= \\left(\\frac{17}{9} - 2\\right)^2 + \\left(\\frac{10}{3} - (-3)\\right)^2 = \\left(-\\frac{1}{9}\\right)^2 + \\left(\\frac{19}{3}\\right)^2 = \\frac{1}{81} + \\frac{361}{9} = \\frac{1 + 3249}{81} = \\frac{3250}{81} \\end{aligned}', explanation: 'Convert \\(\\frac{361}{9}\\) to eighty-firsts: \\(\\frac{361 \\times 9}{81} = \\frac{3249}{81}\\).' }, { stepNumber: 8, description: 'Find \\(PB^2\\).', workingLatex: '\\begin{aligned} PB^2 &= \\left(\\frac{17}{9} - 8\\right)^2 + \\left(\\frac{10}{3} - 5\\right)^2 = \\left(-\\frac{55}{9}\\right)^2 + \\left(-\\frac{5}{3}\\right)^2 = \\frac{3025}{81} + \\frac{25}{9} = \\frac{3025 + 225}{81} = \\frac{3250}{81} \\end{aligned}', explanation: '\\(PA^2 = PB^2\\), so \\(PA = PB\\). This must be true because \\(P\\) lies on the perpendicular bisector of \\(AB\\).' }, { stepNumber: 9, description: 'Find \\(PC^2\\).', workingLatex: '\\begin{aligned} PC^2 &= \\left(\\frac{17}{9} - (-4)\\right)^2 + \\left(\\frac{10}{3} - 1\\right)^2 = \\left(\\frac{53}{9}\\right)^2 + \\left(\\frac{7}{3}\\right)^2 = \\frac{2809}{81} + \\frac{49}{9} = \\frac{2809 + 441}{81} = \\frac{3250}{81} \\end{aligned}', explanation: '\\(PA^2 = PB^2 = PC^2 = \\frac{3250}{81}\\), so \\(PA = PB = PC\\). The point \\(P\\) is equidistant from all three vertices — it is the circumcentre of the triangle.' } ], finalAnswer: '\\(P = \\left(\\frac{17}{9},\\ \\frac{10}{3}\\right)\\). \\(PA = PB = PC = \\frac{\\sqrt{3250}}{9}\\).' } },
];
