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

    // ── Challenge questions ──────────────────────────────────────────────────
    {
        id: 'el2-001',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\log_2(x^2 - 3x) = \\log_2(10) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Equate the arguments.',
                    workingLatex: 'x^2 - 3x = 10',
                    explanation: 'Since both sides have the same base logarithm, the arguments must be equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange into standard form.',
                    workingLatex: 'x^2 - 3x - 10 = 0',
                    explanation: 'Subtract 10 from both sides to form a quadratic equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 5)(x + 2) = 0 \\implies x = 5 \\text{ or } x = -2',
                    explanation: 'Find two numbers that multiply to -10 and add to -3.'
                },
                {
                    stepNumber: 4,
                    description: 'Check validity.',
                    workingLatex: 'x = 5{:}\\; 5^2 - 3(5) = 10 > 0 \\;\\checkmark \\qquad x = -2{:}\\; (-2)^2 - 3(-2) = 10 > 0 \\;\\checkmark',
                    explanation: 'The argument of a logarithm must be positive. Both solutions give \\( x^2 - 3x = 10 > 0 \\), so both are valid.'
                }
            ],
            finalAnswer: '\\( x = 5 \\) or \\( x = -2 \\)'
        }
    },
    {
        id: 'el2-002',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\log_a 2 = p \\) and \\( \\log_a 3 = q \\), express \\( \\log_a 72 \\) in terms of \\( p \\) and \\( q \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Prime factorise 72.',
                    workingLatex: '72 = 8 \\times 9 = 2^3 \\times 3^2',
                    explanation: 'Break 72 into its prime factors to express it in terms of 2 and 3.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the addition law.',
                    workingLatex: '\\log_a 72 = \\log_a(2^3 \\times 3^2) = \\log_a 2^3 + \\log_a 3^2',
                    explanation: 'The log of a product equals the sum of the logs.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power law.',
                    workingLatex: '= 3\\log_a 2 + 2\\log_a 3 = 3p + 2q',
                    explanation: 'Bring the powers down as coefficients using the power rule, then substitute \\( p \\) and \\( q \\).'
                }
            ],
            finalAnswer: '\\( 3p + 2q \\)'
        }
    },
    {
        id: 'el2-003',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write the following using logarithm notation: \\( 7^2 = 49 \\), \\( 4^{-2} = \\dfrac{1}{16} \\), and \\( 27^{\\frac{1}{3}} = 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( 7^2 = 49 \\).',
                    workingLatex: '\\log_7 49 = 2',
                    explanation: 'The base is 7 and it is raised to the power 2 to give 49, so \\( \\log_7 49 = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( 4^{-2} = \\frac{1}{16} \\).',
                    workingLatex: '\\log_4 \\frac{1}{16} = -2',
                    explanation: 'The base is 4 and the negative power gives a reciprocal: \\( 4^{-2} = \\frac{1}{16} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Convert \\( 27^{\\frac{1}{3}} = 3 \\).',
                    workingLatex: '\\log_{27} 3 = \\frac{1}{3}',
                    explanation: 'A fractional power of \\( \\frac{1}{3} \\) corresponds to the cube root, and \\( \\sqrt[3]{27} = 3 \\).'
                }
            ],
            finalAnswer: '\\( \\log_7 49 = 2 \\); \\( \\log_4 \\frac{1}{16} = -2 \\); \\( \\log_{27} 3 = \\frac{1}{3} \\)'
        }
    },
    {
        id: 'el2-004',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write the following using index notation (do not evaluate): \\( \\log_4 m = 3 \\), \\( \\ln p = 7 \\), and \\( \\log k = 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( \\log_4 m = 3 \\) to index form.',
                    workingLatex: '4^3 = m',
                    explanation: 'Using \\( \\log_a b = c \\Leftrightarrow a^c = b \\), the base 4 raised to the power 3 equals \\( m \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( \\ln p = 7 \\) to index form.',
                    workingLatex: 'e^7 = p',
                    explanation: 'The natural logarithm \\( \\ln \\) has base \\( e \\), so \\( \\ln p = 7 \\) becomes \\( e^7 = p \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Convert \\( \\log k = 5 \\) to index form.',
                    workingLatex: '10^5 = k',
                    explanation: 'When no base is written, \\( \\log \\) means \\( \\log_{10} \\), so \\( 10^5 = k \\).'
                }
            ],
            finalAnswer: '\\( 4^3 = m \\); \\( e^7 = p \\); \\( 10^5 = k \\)'
        }
    },
    {
        id: 'el2-005',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write the following using index notation: \\( \\log_a b = n \\), \\( \\ln q = r \\), and \\( \\log_6 w = z \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( \\log_a b = n \\) to index form.',
                    workingLatex: 'a^n = b',
                    explanation: 'This is the general form of the log-to-index conversion: base \\( a \\) raised to the power \\( n \\) equals \\( b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( \\ln q = r \\) to index form.',
                    workingLatex: 'e^r = q',
                    explanation: 'Since \\( \\ln \\) means \\( \\log_e \\), the base is \\( e \\), giving \\( e^r = q \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Convert \\( \\log_6 w = z \\) to index form.',
                    workingLatex: '6^z = w',
                    explanation: 'Base 6 raised to \\( z \\) gives \\( w \\).'
                }
            ],
            finalAnswer: '\\( a^n = b \\); \\( e^r = q \\); \\( 6^z = w \\)'
        }
    },
    // ── TYPE B: Evaluating logarithms ───────────────────────────────────────
    {
        id: 'el2-006',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the value of each of the following: \n\n (a) \\( \\log_2 32 \\) \n\n (b) \\( \\log_3 81 \\) \n\n (c) \\( \\log_5 5 \\) \n\n (d) \\( \\log_7 1 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): What power do you raise 2 to in order to get 32?',
                    workingLatex: '2^5 = 32 \\Rightarrow \\log_2 32 = 5',
                    explanation: '\\( 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 3^4 = 81 \\).',
                    workingLatex: '\\log_3 81 = 4',
                    explanation: '\\( 3^4 = 81 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\log_a a = 1 \\) for any valid base.',
                    workingLatex: '\\log_5 5 = 1',
                    explanation: 'Any number raised to the power 1 equals itself.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\log_a 1 = 0 \\) for any valid base.',
                    workingLatex: '\\log_7 1 = 0',
                    explanation: '\\( 7^0 = 1 \\).'
                }
            ],
            finalAnswer: '(a) \\( 5 \\) \\quad (b) \\( 4 \\) \\quad (c) \\( 1 \\) \\quad (d) \\( 0 \\)'
        }
    },
    {
        id: 'el2-007',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the value of each of the following: \n\n (a) \\( \\log_4 64 \\) \n\n (b) \\( \\log_6 36 \\) \n\n (c) \\( \\log_3 \\dfrac{1}{9} \\) \n\n (d) \\( \\log_2 \\dfrac{1}{8} \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( 4^3 = 64 \\).',
                    workingLatex: '\\log_4 64 = 3',
                    explanation: '\\( 4^3 = 64 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 6^2 = 36 \\).',
                    workingLatex: '\\log_6 36 = 2',
                    explanation: '\\( 6^2 = 36 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\frac{1}{9} = 3^{-2} \\).',
                    workingLatex: '\\log_3 \\frac{1}{9} = -2',
                    explanation: 'A negative logarithm comes from a reciprocal.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\frac{1}{8} = 2^{-3} \\).',
                    workingLatex: '\\log_2 \\frac{1}{8} = -3',
                    explanation: '\\( 2^{-3} = \\frac{1}{8} \\).'
                }
            ],
            finalAnswer: '(a) \\( 3 \\) \\quad (b) \\( 2 \\) \\quad (c) \\( -2 \\) \\quad (d) \\( -3 \\)'
        }
    },
    {
        id: 'el2-008',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the value of each of the following: \n\n (a) \\( \\log_9 3 \\) \n\n (b) \\( \\log_8 2 \\) \n\n (c) \\( \\log_{16} 4 \\) \n\n (d) \\( \\log_{32} 2 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( 3 = 9^{1/2} \\) (square root of 9).',
                    workingLatex: '\\log_9 3 = \\frac{1}{2}',
                    explanation: '\\( 9^{1/2} = \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( 2 = 8^{1/3} \\) (cube root of 8).',
                    workingLatex: '\\log_8 2 = \\frac{1}{3}',
                    explanation: '\\( 8^{1/3} = \\sqrt[3]{8} = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( 4 = 16^{1/2} \\).',
                    workingLatex: '\\log_{16} 4 = \\frac{1}{2}',
                    explanation: '\\( \\sqrt{16} = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( 2 = 32^{1/5} \\) (fifth root of 32).',
                    workingLatex: '\\log_{32} 2 = \\frac{1}{5}',
                    explanation: '\\( 32^{1/5} = \\sqrt[5]{32} = 2 \\) since \\( 2^5 = 32 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\frac{1}{2} \\) \\quad (b) \\( \\frac{1}{3} \\) \\quad (c) \\( \\frac{1}{2} \\) \\quad (d) \\( \\frac{1}{5} \\)'
        }
    },
    {
        id: 'el2-009',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Use a calculator to find each of the following, rounding to 3 decimal places: \n\n (a) \\( \\log 50 \\) \n\n (b) \\( \\log 0.4 \\) \n\n (c) \\( \\ln 5 \\) \n\n (d) \\( \\ln 100 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\log 50 = \\log_{10} 50 \\).',
                    workingLatex: '\\log 50 = 1.699',
                    explanation: '\\( 10^{1.699} \\approx 50 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\log 0.4 \\) — result is negative since \\( 0.4 < 1 \\).',
                    workingLatex: '\\log 0.4 = -0.398',
                    explanation: '\\( 10^{-0.398} \\approx 0.4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\ln 5 \\).',
                    workingLatex: '\\ln 5 = 1.609',
                    explanation: '\\( e^{1.609} \\approx 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\ln 100 \\).',
                    workingLatex: '\\ln 100 = 4.605',
                    explanation: '\\( e^{4.605} \\approx 100 \\).'
                }
            ],
            finalAnswer: '(a) \\( 1.699 \\) \\quad (b) \\( -0.398 \\) \\quad (c) \\( 1.609 \\) \\quad (d) \\( 4.605 \\)'
        }
    },
    {
        id: 'el2-010',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) (where \\( x > 0 \\)) in each of the following: \n\n (a) \\( \\log_x 64 = 3 \\) \n\n (b) \\( \\log_x 100 = 2 \\) \n\n (c) \\( \\log_x 625 = 4 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Convert to index form: \\( x^3 = 64 \\).',
                    workingLatex: 'x = \\sqrt[3]{64} = 4',
                    explanation: 'Taking the cube root of both sides gives \\( x = 4 \\), since \\( 4^3 = 64 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Convert to index form: \\( x^2 = 100 \\).',
                    workingLatex: 'x = \\sqrt{100} = 10',
                    explanation: 'Taking the positive square root gives \\( x = 10 \\), since \\( 10^2 = 100 \\) and we require \\( x > 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Convert to index form: \\( x^4 = 625 \\).',
                    workingLatex: 'x = \\sqrt[4]{625} = 5',
                    explanation: 'Taking the fourth root gives \\( x = 5 \\), since \\( 5^4 = 625 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = 4 \\) \\quad (b) \\( x = 10 \\) \\quad (c) \\( x = 5 \\)'
        }
    },
    {
        id: 'el2-011',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) (where \\( x > 0 \\)) by writing each equation in index notation: \n\n (a) \\( \\log_3 x = 4 \\) \n\n (b) \\( \\log_5 x = 3 \\) \n\n (c) \\( \\log_2 x = 6 \\) \n\n (d) \\( \\log_4 x = -1 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\log_3 x = 4 \\Rightarrow x = 3^4 \\).',
                    workingLatex: 'x = 81',
                    explanation: '\\( 3^4 = 81 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\log_5 x = 3 \\Rightarrow x = 5^3 \\).',
                    workingLatex: 'x = 125',
                    explanation: '\\( 5^3 = 125 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): \\( \\log_2 x = 6 \\Rightarrow x = 2^6 \\).',
                    workingLatex: 'x = 64',
                    explanation: '\\( 2^6 = 64 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): \\( \\log_4 x = -1 \\Rightarrow x = 4^{-1} \\).',
                    workingLatex: 'x = \\frac{1}{4}',
                    explanation: '\\( 4^{-1} = \\frac{1}{4} \\).'
                }
            ],
            finalAnswer: '(a) \\( 81 \\) \\quad (b) \\( 125 \\) \\quad (c) \\( 64 \\) \\quad (d) \\( \\frac{1}{4} \\)'
        }
    },
    // ── TYPE C: Key log facts – log_a 1 = 0, log_a a = 1 ───────────────────
    {
        id: 'el2-012',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Without a calculator, explain why \\( \\log_5 1 = 0 \\) and \\( \\log_5 5 = 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Explain why \\( \\log_5 1 = 0 \\).',
                    workingLatex: '5^0 = 1 \\Rightarrow \\log_5 1 = 0',
                    explanation: 'Any positive base raised to the power zero gives 1. This is a general rule: \\( \\log_a 1 = 0 \\) for all valid bases \\( a \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Explain why \\( \\log_5 5 = 1 \\).',
                    workingLatex: '5^1 = 5 \\Rightarrow \\log_5 5 = 1',
                    explanation: 'Any base raised to the power 1 equals itself. This is a general rule: \\( \\log_a a = 1 \\) for all valid bases \\( a \\).'
                }
            ],
            finalAnswer: '\\( \\log_5 1 = 0 \\) (since \\( 5^0=1 \\)) and \\( \\log_5 5 = 1 \\) (since \\( 5^1=5 \\)).'
        }
    },
    {
        id: 'el2-013',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'State the values of: \\( \\ln e \\), \\( \\ln 1 \\), and \\( \\ln e^5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate \\( \\ln e \\).',
                    workingLatex: '\\ln e = 1',
                    explanation: 'Since \\( \\ln \\) means \\( \\log_e \\), we have \\( \\log_e e = 1 \\) because \\( e^1 = e \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( \\ln 1 \\).',
                    workingLatex: '\\ln 1 = 0',
                    explanation: 'Any base raised to the power 0 gives 1, so \\( e^0 = 1 \\) and therefore \\( \\ln 1 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( \\ln e^5 \\).',
                    workingLatex: '\\ln e^5 = 5',
                    explanation: 'Using the inverse property \\( \\ln(e^x) = x \\), since \\( \\ln \\) and \\( e \\) are inverse functions.'
                }
            ],
            finalAnswer: '\\( \\ln e = 1 \\); \\( \\ln 1 = 0 \\); \\( \\ln e^5 = 5 \\).'
        }
    },
    // ── TYPE D: Inverse functions – solving e^x = k and ln x = k ────────────
    {
        id: 'el2-014',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^x = 7 \\), giving (i) an exact solution and (ii) a solution correct to 3 significant figures.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\ln \\) of both sides.',
                    workingLatex: '\\ln e^x = \\ln 7',
                    explanation: 'To isolate \\( x \\) from the exponent, apply the natural logarithm to both sides of the equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify using the inverse property.',
                    workingLatex: 'x = \\ln 7',
                    explanation: 'Since \\( \\ln \\) and \\( e \\) are inverse functions, \\( \\ln e^x = x \\). This gives the exact answer.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 7 \\approx 1.95',
                    explanation: 'Using a calculator, \\( \\ln 7 = 1.9459\\ldots \\), which rounds to 1.95 to three significant figures.'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 7 \\) \\quad (ii) \\( x \\approx 1.95 \\)'
        }
    },
    {
        id: 'el2-015',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( e^x = 15 \\) \n\n (b) \\( e^x = 0.3 \\) \n\n (c) \\( 3e^x = 24 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Apply ln to both sides.',
                    workingLatex: 'e^x = 15 \\Rightarrow \\ln(e^x) = \\ln 15',
                    explanation: 'Since the exponential function and the natural logarithm are inverses, applying \\( \\ln \\) to both sides will isolate \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Simplify and evaluate.',
                    workingLatex: 'x = \\ln 15 \\approx 2.71',
                    explanation: 'The exact answer is \\( x = \\ln 15 \\). Using a calculator, \\( \\ln 15 = 2.708\\ldots \\) which rounds to \\( 2.71 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Apply ln to both sides.',
                    workingLatex: 'e^x = 0.3 \\Rightarrow x = \\ln 0.3',
                    explanation: 'The same method applies. Since \\( 0.3 \\) is between 0 and 1, we expect \\( x \\) to be negative.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 0.3 \\approx -1.20',
                    explanation: '\\( \\ln 0.3 = -1.2039\\ldots \\) which rounds to \\( -1.20 \\) to 3 significant figures. The negative value confirms that \\( e \\) raised to a negative power gives a number less than 1.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Divide both sides by 3.',
                    workingLatex: '3e^x = 24 \\Rightarrow e^x = 8',
                    explanation: 'Before applying ln, we must isolate the exponential term by dividing both sides by the coefficient 3.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Apply ln and evaluate.',
                    workingLatex: 'x = \\ln 8 \\approx 2.08',
                    explanation: 'Now take ln of both sides. The exact answer is \\( x = \\ln 8 \\), and \\( \\ln 8 = 2.0794\\ldots \\) which rounds to \\( 2.08 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( x = \\ln 15 \\approx 2.71 \\) \\quad (b) \\( x = \\ln 0.3 \\approx -1.20 \\) \\quad (c) \\( x = \\ln 8 \\approx 2.08 \\)'
        }
    },
    {
        id: 'el2-016',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( e^x = 430 \\) \n\n (b) \\( 4e^x = 36 \\) \n\n (c) \\( e^x = 0.05 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Apply ln to both sides.',
                    workingLatex: 'e^x = 430 \\Rightarrow x = \\ln 430',
                    explanation: 'Taking the natural logarithm of both sides gives the exact solution immediately.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 430 \\approx 6.06',
                    explanation: 'Using a calculator, \\( \\ln 430 = 6.0638\\ldots \\) which rounds to \\( 6.06 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Divide both sides by 4.',
                    workingLatex: '4e^x = 36 \\Rightarrow e^x = 9',
                    explanation: 'We must isolate the exponential term before we can apply ln.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Apply ln and evaluate.',
                    workingLatex: 'x = \\ln 9 \\approx 2.20',
                    explanation: 'Taking ln of both sides gives \\( x = \\ln 9 \\). Using a calculator, \\( \\ln 9 = 2.1972\\ldots \\) which rounds to \\( 2.20 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Apply ln to both sides.',
                    workingLatex: 'e^x = 0.05 \\Rightarrow x = \\ln 0.05',
                    explanation: 'Since \\( 0.05 \\) is between 0 and 1, we expect \\( x \\) to be negative.'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 0.05 \\approx -3.00',
                    explanation: '\\( \\ln 0.05 = \\ln(1/20) = -2.9957\\ldots \\) which rounds to \\( -3.00 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( x = \\ln 430 \\approx 6.06 \\) \\quad (b) \\( x = \\ln 9 \\approx 2.20 \\) \\quad (c) \\( x = \\ln 0.05 \\approx -3.00 \\)'
        }
    },
    {
        id: 'el2-017',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x = 4 \\), giving (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Exponentiate both sides.',
                    workingLatex: 'e^{\\ln x} = e^4 \\Rightarrow x = e^4',
                    explanation: 'Raise \\( e \\) to the power of each side. Since \\( e \\) and \\( \\ln \\) are inverse functions, \\( e^{\\ln x} \\) simplifies to \\( x \\), giving the exact solution \\( x = e^4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = e^4 \\approx 54.6',
                    explanation: 'Using a calculator, \\( e^4 = 54.598\\ldots \\) which rounds to \\( 54.6 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(i) \\( x = e^4 \\) \\quad (ii) \\( x \\approx 54.6 \\)'
        }
    },
    {
        id: 'el2-018',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( \\ln x = 6 \\) \n\n (b) \\( \\ln x = 0.8 \\) \n\n (c) \\( 4\\ln x = 20 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Exponentiate both sides.',
                    workingLatex: '\\ln x = 6 \\Rightarrow x = e^6',
                    explanation: 'Raise \\( e \\) to the power of each side. Since \\( e \\) and \\( \\ln \\) are inverses, this gives the exact solution \\( x = e^6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Evaluate to 3 s.f.',
                    workingLatex: 'x = e^6 \\approx 403',
                    explanation: 'Using a calculator, \\( e^6 = 403.43\\ldots \\) which rounds to \\( 403 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Exponentiate both sides.',
                    workingLatex: '\\ln x = 0.8 \\Rightarrow x = e^{0.8}',
                    explanation: 'The same method applies. Raising \\( e \\) to the power \\( 0.8 \\) gives the exact answer.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Evaluate to 3 s.f.',
                    workingLatex: 'x = e^{0.8} \\approx 2.23',
                    explanation: 'Using a calculator, \\( e^{0.8} = 2.2255\\ldots \\) which rounds to \\( 2.23 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Divide both sides by 4.',
                    workingLatex: '4\\ln x = 20 \\Rightarrow \\ln x = 5',
                    explanation: 'We must isolate the \\( \\ln x \\) term before exponentiating. Dividing both sides by 4 gives \\( \\ln x = 5 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Exponentiate and evaluate.',
                    workingLatex: 'x = e^5 \\approx 148',
                    explanation: 'Raising \\( e \\) to both sides gives \\( x = e^5 \\). Using a calculator, \\( e^5 = 148.41\\ldots \\) which rounds to \\( 148 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( x = e^6 \\approx 403 \\) \\quad (b) \\( x = e^{0.8} \\approx 2.23 \\) \\quad (c) \\( x = e^5 \\approx 148 \\)'
        }
    },
    {
        id: 'el2-019',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( \\ln x = -2 \\) \n\n (b) \\( 5\\ln x = 30 \\) \n\n (c) \\( \\ln 3x = 7 \\)',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Exponentiate both sides.',
                    workingLatex: '\\ln x = -2 \\Rightarrow x = e^{-2}',
                    explanation: 'Raise \\( e \\) to the power of each side. Since \\( \\ln x = -2 \\) is negative, \\( x \\) must be between 0 and 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Evaluate to 3 s.f.',
                    workingLatex: 'x = e^{-2} = \\frac{1}{e^2} \\approx 0.135',
                    explanation: 'Using a calculator, \\( e^{-2} = 0.13533\\ldots \\) which rounds to \\( 0.135 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Divide both sides by 5.',
                    workingLatex: '5\\ln x = 30 \\Rightarrow \\ln x = 6',
                    explanation: 'Isolate the \\( \\ln x \\) term by dividing both sides by 5.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Exponentiate and evaluate.',
                    workingLatex: 'x = e^6 \\approx 403',
                    explanation: 'Raise \\( e \\) to both sides to get \\( x = e^6 \\), which rounds to \\( 403 \\) to 3 s.f.'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Exponentiate both sides.',
                    workingLatex: '\\ln 3x = 7 \\Rightarrow 3x = e^7',
                    explanation: 'The argument of \\( \\ln \\) is \\( 3x \\), so exponentiating gives \\( 3x = e^7 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Part (c): Divide by 3 and evaluate.',
                    workingLatex: 'x = \\frac{e^7}{3} \\approx 366',
                    explanation: 'Divide both sides by 3. \\( e^7/3 = 365.5 \\), which rounds to \\( 366 \\) to 3 s.f.'
                }
            ],
            finalAnswer: '(a) \\( x = e^{-2} \\approx 0.135 \\) \\quad (b) \\( x = e^6 \\approx 403 \\) \\quad (c) \\( x = \\dfrac{e^7}{3} \\approx 366 \\)'
        }
    },
    {
        id: 'el2-020',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve each equation, giving (i) an exact solution and (ii) a solution to 3 s.f.: \n\n (a) \\( \\ln(x - 1) = 3 \\) \n\n (b) \\( \\ln(2x + 1) = 5 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Exponentiate both sides.',
                    workingLatex: '\\ln(x - 1) = 3 \\Rightarrow x - 1 = e^3',
                    explanation: 'Raise \\( e \\) to the power of each side to undo the \\( \\ln \\). This gives \\( x - 1 = e^3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Solve for x and evaluate.',
                    workingLatex: 'x = e^3 + 1 \\approx 21.1',
                    explanation: 'Add 1 to both sides. \\( e^3 + 1 = 21.086\\ldots \\) which rounds to \\( 21.1 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Exponentiate both sides.',
                    workingLatex: '\\ln(2x + 1) = 5 \\Rightarrow 2x + 1 = e^5',
                    explanation: 'Raise \\( e \\) to the power of each side to undo the \\( \\ln \\). This gives \\( 2x + 1 = e^5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Solve for x and evaluate.',
                    workingLatex: 'x = \\frac{e^5 - 1}{2} \\approx 73.7',
                    explanation: 'Subtract 1, then divide by 2. \\( (e^5 - 1)/2 = 73.706\\ldots \\) which rounds to \\( 73.7 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( x = e^3 + 1 \\approx 21.1 \\) \\quad (b) \\( x = \\dfrac{e^5-1}{2} \\approx 73.7 \\)'
        }
    },
    // ── TYPE E: Inverse property – a^{log_a x} = x and log_a(a^x) = x ───────
    {
        id: 'el2-021',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Without a calculator, simplify: \n\n (a) \\( e^{\\ln 9} \\) \n\n (b) \\( \\ln(e^{12}) \\) \n\n (c) \\( e^{\\ln x} \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Apply the inverse property.',
                    workingLatex: 'e^{\\ln 9} = 9',
                    explanation: 'Since \\( e \\) and \\( \\ln \\) are inverse functions, \\( e^{\\ln a} = a \\) for any \\( a > 0 \\). Here \\( a = 9 \\), so \\( e^{\\ln 9} = 9 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\ln(e^{12}) \\) using the inverse property.',
                    workingLatex: '\\ln(e^{12}) = 12',
                    explanation: 'The inverse property states \\( \\ln(e^x) = x \\) for any real \\( x \\). Here \\( x = 12 \\), so \\( \\ln(e^{12}) = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Apply the inverse property.',
                    workingLatex: 'e^{\\ln x} = x',
                    explanation: 'This is the general form of the inverse property: \\( e^{\\ln x} = x \\) for any \\( x > 0 \\). It works because \\( e \\) and \\( \\ln \\) undo each other.'
                }
            ],
            finalAnswer: '(a) \\( 9 \\) \\quad (b) \\( 12 \\) \\quad (c) \\( x \\)'
        }
    },
    {
        id: 'el2-022',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'The graph of \\( y = \\ln x \\) is a reflection of \\( y = e^x \\) in the line \\( y = x \\). \n\n (a) State the coordinates where \\( y = \\ln x \\) crosses the \\( x \\)-axis. \n\n (b) State the equation of the asymptote of \\( y = \\ln x \\). \n\n (c) State the domain of \\( y = \\ln x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find where ln x = 0.',
                    workingLatex: '(1,\\ 0)',
                    explanation: 'The graph crosses the \\( x \\)-axis at \\( x = 1 \\) since \\( \\ln 1 = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Identify the asymptote.',
                    workingLatex: 'x = 0',
                    explanation: 'The graph approaches but never touches the y-axis. As \\( x \\) tends to 0 from above, \\( \\ln x \\) tends to negative infinity.'
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): State the domain.',
                    workingLatex: 'x > 0',
                    explanation: 'The natural logarithm \\( \\ln x \\) is only defined for positive values of \\( x \\). You cannot take the logarithm of zero or a negative number.'
                }
            ],
            finalAnswer: '(a) \\( (1, 0) \\). (b) \\( x = 0 \\). (c) \\( x > 0 \\).'
        }
    },
    // ── TYPE F: Writing y in terms of x using log relations ─────────────────
    {
        id: 'el2-023',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\log_3 x = 2 \\) and \\( \\log_3 y = 6 \\), write \\( y \\) in terms of \\( x \\) using index notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( \\log_3 x = 2 \\) to index form.',
                    workingLatex: 'x = 3^2 \\Rightarrow 3 = x^{1/2}',
                    explanation: 'From \\( \\log_3 x = 2 \\) we get \\( x = 3^2 \\). Rearranging gives \\( 3 = x^{1/2} \\), which lets us substitute into the expression for \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert \\( \\log_3 y = 6 \\) to index form.',
                    workingLatex: 'y = 3^6',
                    explanation: 'Converting \\( \\log_3 y = 6 \\) to index form gives \\( y = 3^6 \\). We now have \\( y \\) expressed as a power of 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( 3 = x^{1/2} \\) into \\( y = 3^6 \\).',
                    workingLatex: 'y = \\left(x^{1/2}\\right)^6 = x^3',
                    explanation: 'Use the power-of-a-power rule: multiply the indices \\( \\frac{1}{2} \\) and \\( 6 \\) to get \\( 3 \\), so \\( y = x^3 \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 \\)'
        }
    },
    {
        id: 'el2-024',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\log_2 x = 4 \\) and \\( \\log_2 y = 12 \\), write \\( y \\) in terms of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From \\( \\log_2 x = 4 \\): \\( x = 2^4 \\Rightarrow 2 = x^{1/4} \\).',
                    workingLatex: '2 = x^{1/4}',
                    explanation: 'Convert to index form: \\( x = 2^4 \\). Taking the fourth root gives \\( 2 = x^{1/4} \\), expressing the base 2 in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\log_2 y = 12 \\): \\( y = 2^{12} \\).',
                    workingLatex: 'y = 2^{12}',
                    explanation: 'Converting \\( \\log_2 y = 12 \\) to index form gives \\( y = 2^{12} \\). We now have \\( y \\) as a power of 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( 2 = x^{1/4} \\).',
                    workingLatex: 'y = \\left(x^{1/4}\\right)^{12} = x^{3}',
                    explanation: 'Replace 2 with \\( x^{1/4} \\) in \\( y = 2^{12} \\) to get \\( y = (x^{1/4})^{12} \\). By the power-of-a-power rule, multiply indices: \\( 12/4 = 3 \\), so \\( y = x^3 \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 \\)'
        }
    },
    {
        id: 'el2-025',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\ln x = 3 \\) and \\( \\ln y = 9 \\), write \\( y \\) in terms of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From \\( \\ln x = 3 \\): \\( x = e^3 \\Rightarrow e = x^{1/3} \\).',
                    workingLatex: 'e = x^{1/3}',
                    explanation: 'Convert to index form: \\( x = e^3 \\). Take the cube root to express \\( e \\) in terms of \\( x \\): \\( e = x^{1/3} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\ln y = 9 \\): \\( y = e^9 \\).',
                    workingLatex: 'y = e^9',
                    explanation: 'Converting \\( \\ln y = 9 \\) to index form gives \\( y = e^9 \\). We now have \\( y \\) expressed as a power of \\( e \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( e = x^{1/3} \\).',
                    workingLatex: 'y = \\left(x^{1/3}\\right)^9 = x^3',
                    explanation: 'Replace \\( e \\) with \\( x^{1/3} \\) in \\( y = e^9 \\) to get \\( y = (x^{1/3})^9 \\). By the power-of-a-power rule, multiply indices: \\( 9/3 = 3 \\), so \\( y = x^3 \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 \\)'
        }
    },
    {
        id: 'el2-026',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\ln x = 4 \\) and \\( \\ln y = 2 \\), write \\( y \\) in terms of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From \\( \\ln x = 4 \\): \\( x = e^4 \\Rightarrow e = x^{1/4} \\).',
                    workingLatex: 'e = x^{1/4}',
                    explanation: 'Convert to index form: \\( x = e^4 \\). Take the fourth root to express \\( e \\) in terms of \\( x \\): \\( e = x^{1/4} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\ln y = 2 \\): \\( y = e^2 \\).',
                    workingLatex: 'y = e^2',
                    explanation: 'Converting \\( \\ln y = 2 \\) to index form gives \\( y = e^2 \\). We now have \\( y \\) expressed as a power of \\( e \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( e = x^{1/4} \\).',
                    workingLatex: 'y = \\left(x^{1/4}\\right)^2 = x^{1/2} = \\sqrt{x}',
                    explanation: 'Replace \\( e \\) with \\( x^{1/4} \\) in \\( y = e^2 \\) to get \\( y = (x^{1/4})^2 \\). Multiply indices: \\( 2/4 = 1/2 \\), so \\( y = x^{1/2} = \\sqrt{x} \\).'
                }
            ],
            finalAnswer: '\\( y = \\sqrt{x} \\)'
        }
    },
    // ── TYPE G: Mixed solving – rearrange then apply log/exp ────────────────
    {
        id: 'el2-027',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 7e^x = 35 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 7.',
                    workingLatex: 'e^x = 5',
                    explanation: 'Divide both sides by 7 to isolate the exponential term before applying \\( \\ln \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: 'x = \\ln 5',
                    explanation: 'Taking the natural logarithm of both sides gives the exact solution \\( x = \\ln 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 5 \\approx 1.61',
                    explanation: 'Using a calculator, \\( \\ln 5 = 1.6094... \\) which rounds to \\( 1.61 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 5 \\) \\quad (ii) \\( x \\approx 1.61 \\)'
        }
    },
    {
        id: 'el2-028',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6\\ln x = 42 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 6.',
                    workingLatex: '\\ln x = 7',
                    explanation: 'Divide both sides by 6 to isolate the \\( \\ln x \\) term before exponentiating.'
                },
                {
                    stepNumber: 2,
                    description: 'Exponentiate both sides.',
                    workingLatex: 'x = e^7',
                    explanation: 'Raise \\( e \\) to the power of each side. Since \\( e \\) and \\( \\ln \\) are inverse functions, this gives the exact solution \\( x = e^7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = e^7 \\approx 1100',
                    explanation: 'Using a calculator, \\( e^7 = 1096.63... \\) The first three significant figures are 1, 0, 9 and the next digit is 6, so it rounds up to \\( 1100 \\) to 3 s.f.'
                }
            ],
            finalAnswer: '(i) \\( x = e^7 \\) \\quad (ii) \\( x \\approx 1100 \\) (3 s.f.)'
        }
    },
    {
        id: 'el2-029',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(5x) = 3 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Exponentiate both sides.',
                    workingLatex: '5x = e^3',
                    explanation: 'Apply \\( e \\) to both sides of \\( \\ln(5x) = 3 \\). Since \\( e^{\\ln(5x)} = 5x \\), this removes the logarithm.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 5.',
                    workingLatex: 'x = \\frac{e^3}{5}',
                    explanation: 'This is the exact solution for part (i).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\frac{e^3}{5} \\approx \\frac{20.09}{5} \\approx 4.02',
                    explanation: 'Use a calculator to find \\( e^3 \\approx 20.09 \\), then divide by 5 to get \\( 4.02 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(i) \\( x = \\dfrac{e^3}{5} \\) \\quad (ii) \\( x \\approx 4.02 \\)'
        }
    },
    {
        id: 'el2-030',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2e^{x+1} = 14 \\). Give (i) an exact solution and (ii) a solution to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 2.',
                    workingLatex: 'e^{x+1} = 7',
                    explanation: 'Isolate the exponential term by dividing \\( 2e^{x+1} = 14 \\) by 2 on both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Take natural log of both sides.',
                    workingLatex: 'x + 1 = \\ln 7',
                    explanation: 'Applying \\( \\ln \\) to both sides gives \\( \\ln e^{x+1} = x + 1 \\), since \\( \\ln \\) and \\( e \\) are inverse functions.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 1 from both sides.',
                    workingLatex: 'x = \\ln 7 - 1',
                    explanation: 'This is the exact solution for part (i).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\ln 7 - 1 \\approx 1.946 - 1 = 0.946',
                    explanation: 'Use a calculator to find \\( \\ln 7 \\approx 1.946 \\), then subtract 1 to get \\( 0.946 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 7 - 1 \\) \\quad (ii) \\( x \\approx 0.946 \\)'
        }
    },
    // ── TYPE H: Multi-part exam-style ───────────────────────────────────────
    {
        id: 'el2-031',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Sketch the graph of \\( y = \\ln x \\), labelling the \\( x \\)-intercept and the asymptote. \n\n \n\n (b) On the same axes, sketch \\( y = \\ln(x - 2) \\). State its \\( x \\)-intercept and asymptote.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find the \\( x \\)-intercept.',
                    workingLatex: '\\ln x = 0 \\Rightarrow x = 1 \\Rightarrow (1, 0)',
                    explanation: 'Set \\( y = 0 \\) and solve. Since \\( e^0 = 1 \\), the curve crosses the \\( x \\)-axis at \\( (1, 0) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Identify the asymptote.',
                    workingLatex: '\\text{Asymptote: } x = 0',
                    explanation: 'As \\( x \\to 0^+ \\), \\( \\ln x \\to -\\infty \\). The \\( y \\)-axis is a vertical asymptote, and the curve is only defined for \\( x > 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Identify the transformation.',
                    workingLatex: 'y = \\ln(x - 2) \\text{ is } y = \\ln x \\text{ translated 2 units right}',
                    explanation: 'Replacing \\( x \\) with \\( x - 2 \\) shifts every point on the graph 2 units to the right.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Find the new \\( x \\)-intercept.',
                    workingLatex: '\\ln(x - 2) = 0 \\Rightarrow x - 2 = 1 \\Rightarrow x = 3 \\Rightarrow (3, 0)',
                    explanation: 'Set \\( y = 0 \\) and solve. The \\( x \\)-intercept shifts from \\( (1, 0) \\) to \\( (3, 0) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): Find the new asymptote.',
                    workingLatex: '\\text{Asymptote: } x = 2',
                    explanation: 'The vertical asymptote shifts from \\( x = 0 \\) to \\( x = 2 \\). The function \\( \\ln(x - 2) \\) is undefined for \\( x \\leq 2 \\).'
                }
            ],
            finalAnswer: '(b) \\( x \\)-intercept \\( (3, 0) \\); asymptote \\( x = 2 \\).'
        }
    },
    {
        id: 'el2-032',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'The number of bacteria \\( N \\) in a culture after \\( t \\) hours satisfies \\( N = 200e^{0.3t} \\). \n\n (a) Find the initial number of bacteria. \n\n (b) Find the exact time when the number of bacteria reaches 2000. \n\n (c) Give the time to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Set \\( t = 0 \\).',
                    workingLatex: 'N(0) = 200e^0 = 200',
                    explanation: 'Initial count is \\( 200 \\) bacteria.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set \\( N = 2000 \\) and solve for \\( t \\).',
                    workingLatex: '200e^{0.3t} = 2000 \\Rightarrow e^{0.3t} = 10',
                    explanation: 'Divide by \\( 200 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.3t = \\ln 10 \\Rightarrow t = \\frac{\\ln 10}{0.3}',
                    explanation: 'Exact solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Evaluate to 3 s.f.',
                    workingLatex: 't = \\frac{\\ln 10}{0.3} \\approx 7.68 \\text{ hours}',
                    explanation: '\\( \\ln 10 \\approx 2.303 \\Rightarrow \\frac{2.303}{0.3} \\approx 7.68 \\).'
                }
            ],
            finalAnswer: '(a) \\( 200 \\). (b) \\( t = \\dfrac{\\ln 10}{0.3} \\). (c) \\( t \\approx 7.68 \\) hours.'
        }
    },
    {
        id: 'el2-033',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: 'A radioactive substance decays according to \\( M = 500e^{-0.04t} \\), where \\( M \\) is the mass in grams and \\( t \\) is the time in years. \n\n (a) State the initial mass. \n\n (b) Find the exact time for the mass to halve. \n\n (c) Give the half-life to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Initial mass at \\( t = 0 \\).',
                    workingLatex: 'M(0) = 500e^0 = 500 \\text{ g}',
                    explanation: 'The initial mass is \\( 500 \\) g.'
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Set \\( M = 250 \\) (half of 500).',
                    workingLatex: '500e^{-0.04t} = 250 \\Rightarrow e^{-0.04t} = 0.5',
                    explanation: 'Divide by \\( 500 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.04t = \\ln 0.5 = -\\ln 2 \\Rightarrow t = \\frac{\\ln 2}{0.04}',
                    explanation: 'Divide by \\( -0.04 \\). The half-life formula.'
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Evaluate.',
                    workingLatex: 't = \\frac{\\ln 2}{0.04} \\approx 17.3 \\text{ years}',
                    explanation: '\\( \\ln 2 \\approx 0.6931 \\Rightarrow \\frac{0.6931}{0.04} \\approx 17.3 \\).'
                }
            ],
            finalAnswer: '(a) \\( 500 \\) g. (b) \\( t = \\dfrac{\\ln 2}{0.04} \\). (c) \\( t \\approx 17.3 \\) years.'
        }
    },
    {
        id: 'el2-034',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Solve \\( e^{2x} = 50 \\), giving an exact answer and a decimal answer to 3 s.f. \n\n \n\n (b) Solve \\( \\ln(x^2) = 6 \\), giving exact answers.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Apply \\( \\ln \\) to both sides.',
                    workingLatex: '2x = \\ln 50 \\Rightarrow x = \\frac{\\ln 50}{2}',
                    explanation: 'Exact solution.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 'x = \\frac{\\ln 50}{2} \\approx \\frac{3.912}{2} \\approx 1.96',
                    explanation: '\\( \\ln 50 \\approx 3.912 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): \\( \\ln(x^2) = 6 \\Rightarrow x^2 = e^6 \\).',
                    workingLatex: 'x^2 = e^6',
                    explanation: 'Raise \\( e \\) to both sides.'
                },
                {
                    stepNumber: 4,
                    description: 'Take both square roots.',
                    workingLatex: 'x = \\pm e^3',
                    explanation: 'Both positive and negative values are valid since \\( \\ln(x^2) \\) is defined for \\( x \\neq 0 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = \\dfrac{\\ln 50}{2} \\approx 1.96 \\). (b) \\( x = \\pm e^3 \\).'
        }
    },
    {
        id: 'el2-035',
        topicRef: 'el2',
        topicTitle: 'Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Given that \\( \\log_5 x = p \\) and \\( \\log_5 y = 4p \\), write \\( y \\) in terms of \\( x \\). \n\n \n\n (b) Given that \\( \\ln x = 2 \\) and \\( \\ln y = -4 \\), write \\( y \\) in terms of \\( x \\). \n\n \n\n (c) Solve \\( e^{3x-1} = 8 \\), giving an exact answer.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): From \\( \\log_5 x = p \\): \\( x = 5^p \\Rightarrow 5 = x^{1/p} \\).',
                    workingLatex: '5 = x^{1/p}',
                    explanation: 'Express the base in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'From \\( \\log_5 y = 4p \\): \\( y = 5^{4p} \\). Substitute \\( 5 = x^{1/p} \\).',
                    workingLatex: 'y = \\left(x^{1/p}\\right)^{4p} = x^4',
                    explanation: '\\( \\frac{4p}{p} = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): From \\( \\ln x = 2 \\): \\( x = e^2 \\Rightarrow e = x^{1/2} \\).',
                    workingLatex: 'e = x^{1/2} = \\sqrt{x}',
                    explanation: 'Raise both sides of \\( x = e^2 \\) to \\( \\frac{1}{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'From \\( \\ln y = -4 \\): \\( y = e^{-4} \\). Substitute.',
                    workingLatex: 'y = \\left(x^{1/2}\\right)^{-4} = x^{-2} = \\frac{1}{x^2}',
                    explanation: '\\( \\frac{-4}{2} = -2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Apply \\( \\ln \\) to both sides.',
                    workingLatex: '3x - 1 = \\ln 8',
                    explanation: '\\( \\ln e^{3x-1} = 3x - 1 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '3x = \\ln 8 + 1 \\Rightarrow x = \\frac{\\ln 8 + 1}{3}',
                    explanation: 'Exact answer. Note: \\( \\ln 8 = 3\\ln 2 \\), so \\( x = \\frac{3\\ln 2 + 1}{3} = \\ln 2 + \\frac{1}{3} \\).'
                }
            ],
            finalAnswer: '(a) \\( y = x^4 \\). (b) \\( y = \\dfrac{1}{x^2} \\). (c) \\( x = \\dfrac{\\ln 8 + 1}{3} \\).'
        }
    },

    // ─── Q36–70: Additional Logarithms Questions ──────────────────────

    {
        id: 'el2-036', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_3(2x + 1) - \\log_3(x - 1) = 1 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the subtraction law.', workingLatex: '\\log_3\\left(\\frac{2x+1}{x-1}\\right) = 1', explanation: 'The difference of two logarithms with the same base equals the log of their quotient.' },
            { stepNumber: 2, description: 'Convert to exponential form.', workingLatex: '\\frac{2x+1}{x-1} = 3^1 = 3', explanation: 'Since \\( \\log \\) base \\( 3 \\) equals \\( 1 \\), the argument must equal \\( 3 \\).' },
            { stepNumber: 3, description: 'Solve the equation.', workingLatex: '2x + 1 = 3(x-1) = 3x - 3 \\implies 4 = x', explanation: 'Cross-multiply and collect terms to isolate \\( x \\).' },
            { stepNumber: 4, description: 'Check validity.', workingLatex: 'x = 4{:}\\; 2(4)+1 = 9 > 0,\\; 4-1 = 3 > 0 \\;\\checkmark', explanation: 'Both arguments of the original logarithms must be positive. At \\( x = 4 \\) both are, so the solution is valid.' }
        ], finalAnswer: '\\( x = 4 \\)' }
    },
    {
        id: 'el2-037', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Show that \\( \\log_4 8 = \\dfrac{3}{2} \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let the log equal \\( x \\).', workingLatex: '\\log_4 8 = x \\implies 4^x = 8', explanation: 'Convert from logarithmic to exponential form.' },
            { stepNumber: 2, description: 'Write both sides as powers of 2.', workingLatex: '(2^2)^x = 2^3 \\implies 2^{2x} = 2^3', explanation: 'Express \\( 4 = 2^2 \\) and \\( 8 = 2^3 \\), then apply the power-of-a-power rule.' },
            { stepNumber: 3, description: 'Equate exponents.', workingLatex: '2x = 3 \\implies x = \\frac{3}{2}', explanation: 'Since the bases are equal, the exponents must be equal. This confirms \\( \\log_4 8 = \\frac{3}{2} \\).' }
        ], finalAnswer: 'Shown: \\( \\log_4 8 = \\frac{3}{2} \\)' }
    },
    {
        id: 'el2-038', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_{10} 0.001 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express as a power of \\( 10 \\)', workingLatex: '0.001 = \\frac{1}{1000} = 10^{-3}', explanation: 'Rewrite the decimal as a fraction, then recognise that \\( 1000 = 10^3 \\), so \\( \\frac{1}{1000} = 10^{-3} \\).' },
            { stepNumber: 2, description: 'Apply the logarithm definition', workingLatex: '\\log_{10} 10^{-3} = -3', explanation: 'By definition, \\( \\log_{10} 10^k = k \\), so the answer is \\( -3 \\).' }
        ], finalAnswer: '\\( -3 \\)' }
    },
    {
        id: 'el2-039', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_5 \\frac{1}{25} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express as a power of \\( 5 \\)', workingLatex: '\\frac{1}{25} = 5^{-2}', explanation: 'Since \\( 25 = 5^2 \\), its reciprocal is \\( 5^{-2} \\).' },
            { stepNumber: 2, description: 'Apply the logarithm definition', workingLatex: '\\log_5 5^{-2} = -2', explanation: 'By the definition \\( \\log_b b^k = k \\), the answer is \\( -2 \\).' }
        ], finalAnswer: '\\( -2 \\)' }
    },
    {
        id: 'el2-040', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_5(x) + \\log_5(x + 4) = 1 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine using the addition law.', workingLatex: '\\log_5[x(x+4)] = 1', explanation: 'The sum of two logs with the same base equals the log of their product.' },
            { stepNumber: 2, description: 'Convert to exponential form.', workingLatex: 'x(x+4) = 5^1 = 5', explanation: 'If \\( \\log \\) base \\( 5 \\) of something equals \\( 1 \\), that something equals \\( 5 \\).' },
            { stepNumber: 3, description: 'Solve the quadratic.', workingLatex: 'x^2 + 4x - 5 = 0 \\implies (x+5)(x-1) = 0 \\implies x = -5 \\text{ or } x = 1', explanation: 'Expand and rearrange into standard form, then factorise.' },
            { stepNumber: 4, description: 'Reject the invalid solution.', workingLatex: 'x = -5{:}\\; \\log_5(-5) \\text{ is undefined} \\quad x = 1{:}\\; \\log_5(1) + \\log_5(5) = 0 + 1 = 1 \\;\\checkmark', explanation: '\\( x = -5 \\) gives a negative argument for log, so it is rejected. Only \\( x = 1 \\) is valid.' }
        ], finalAnswer: '\\( x = 1 \\)' }
    },
    {
        id: 'el2-041', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Prove that \\( \\log_a b = \\dfrac{1}{\\log_b a} \\) for \\( a, b > 0 \\), \\( a \\neq 1 \\), \\( b \\neq 1 \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let \\( \\log_a b = x \\).', workingLatex: 'a^x = b', explanation: 'Convert to exponential form.' },
            { stepNumber: 2, description: 'Take \\( \\log_b \\) of both sides.', workingLatex: '\\log_b a^x = \\log_b b \\implies x \\log_b a = 1', explanation: 'Apply \\( \\log_b \\). The right side gives \\( 1 \\), and the power rule brings \\( x \\) down.' },
            { stepNumber: 3, description: 'Solve for \\( x \\).', workingLatex: 'x = \\frac{1}{\\log_b a}', explanation: 'Divide both sides by \\( \\log_b a \\). Since \\( x = \\log_a b \\), this proves the result.' }
        ], finalAnswer: 'Proven: \\( \\log_a b = \\dfrac{1}{\\log_b a} \\)' }
    },
    {
        id: 'el2-042', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Simplify \\( \\log_2 5 \\times \\log_5 8 \\) to an exact value.',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the change of base formula.', workingLatex: '\\log_2 5 = \\frac{\\ln 5}{\\ln 2}, \\qquad \\log_5 8 = \\frac{\\ln 8}{\\ln 5}', explanation: 'Express both logarithms using natural logs.' },
            { stepNumber: 2, description: 'Multiply the fractions.', workingLatex: '\\frac{\\ln 5}{\\ln 2} \\times \\frac{\\ln 8}{\\ln 5} = \\frac{\\ln 8}{\\ln 2}', explanation: 'The \\( \\ln 5 \\) terms cancel in the numerator and denominator.' },
            { stepNumber: 3, description: 'Simplify.', workingLatex: '\\frac{\\ln 8}{\\ln 2} = \\log_2 8 = 3', explanation: 'This is just \\( \\log_2 8 \\) by change of base in reverse. Since \\( 2^3 = 8 \\), the answer is \\( 3 \\).' }
        ], finalAnswer: '\\( 3 \\)' }
    },
    {
        id: 'el2-043', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Given that \\( \\log_3 x = a \\), express \\( \\log_3(9x^2) \\) in terms of \\( a \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Separate the product.', workingLatex: '\\log_3(9x^2) = \\log_3 9 + \\log_3 x^2', explanation: 'Apply the addition law: the log of a product is the sum of the logs.' },
            { stepNumber: 2, description: 'Evaluate \\( \\log_3 9 \\) and apply the power rule.', workingLatex: '= 2 + 2\\log_3 x', explanation: 'Since \\( 3^2 = 9 \\), \\( \\log_3 9 = 2 \\). The power rule brings the exponent 2 down as a coefficient.' },
            { stepNumber: 3, description: 'Substitute \\( a \\).', workingLatex: '= 2 + 2a', explanation: 'Replace \\( \\log_3 x \\) with \\( a \\) as given in the question.' }
        ], finalAnswer: '\\( 2 + 2a \\)' }
    },
    {
        id: 'el2-044', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x = 5 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite in exponential form', workingLatex: '\\log_2 x = 5 \\implies x = 2^5', explanation: 'The definition of a logarithm states that \\(\\log_a b = c\\) means \\(a^c = b\\). Rewriting \\(\\log_2 x = 5\\) in exponential form gives \\(x = 2^5\\).' },
            { stepNumber: 2, description: 'Evaluate the power', workingLatex: 'x = 2^5 = 32', explanation: 'Calculate \\(2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32\\).' }
        ], finalAnswer: '\\( x = 32 \\)' }
    },
    {
        id: 'el2-045', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3 x = -2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite in exponential form', workingLatex: '\\log_3 x = -2 \\implies x = 3^{-2}', explanation: 'Using the definition of logarithms, \\(\\log_3 x = -2\\) means \\(x = 3^{-2}\\).' },
            { stepNumber: 2, description: 'Evaluate the negative power', workingLatex: 'x = 3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}', explanation: 'A negative exponent gives the reciprocal: \\(3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}\\).' }
        ], finalAnswer: '\\( x = \\frac{1}{9} \\)' }
    },
    {
        id: 'el2-046', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_x 49 = 2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite in exponential form', workingLatex: '\\log_x 49 = 2 \\implies x^2 = 49', explanation: 'Using the definition of logarithms, \\(\\log_x 49 = 2\\) means \\(x^2 = 49\\).' },
            { stepNumber: 2, description: 'Solve for the base', workingLatex: 'x = \\sqrt{49} = 7', explanation: 'Taking the positive square root gives \\(x = 7\\). We reject \\(x = -7\\) because logarithm bases must be positive.' }
        ], finalAnswer: '\\( x = 7 \\)' }
    },
    {
        id: 'el2-047', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Solve \\( 2\\log_5 x - \\log_5(x + 6) = 1 \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\log_5 x^2 - \\log_5(x+6) = 1', explanation: 'The coefficient 2 moves up as a power of \\( x \\) using the power rule.' },
            { stepNumber: 2, description: 'Apply the subtraction law.', workingLatex: '\\log_5\\left(\\frac{x^2}{x+6}\\right) = 1', explanation: 'The difference of logs equals the log of the quotient.' },
            { stepNumber: 3, description: 'Convert to exponential form.', workingLatex: '\\frac{x^2}{x+6} = 5', explanation: 'Log base 5 equals 1, so the argument equals \\( 5^1 = 5 \\).' },
            { stepNumber: 4, description: 'Solve the quadratic.', workingLatex: 'x^2 = 5(x+6) = 5x + 30 \\implies x^2 - 5x - 30 = 0', explanation: 'Cross-multiply and rearrange into standard form.' },
            { stepNumber: 5, description: 'Use the quadratic formula.', workingLatex: 'x = \\frac{5 \\pm \\sqrt{25 + 120}}{2} = \\frac{5 \\pm \\sqrt{145}}{2}', explanation: 'The discriminant is \\( 25 + 120 = 145 \\). This gives two possible values.' },
            { stepNumber: 6, description: 'Reject the negative root.', workingLatex: 'x = \\frac{5 + \\sqrt{145}}{2} \\approx 8.52', explanation: 'Since \\( \\log_5 x \\) requires \\( x > 0 \\), reject the negative root. Only the positive root is valid.' }
        ], finalAnswer: '\\( x = \\dfrac{5 + \\sqrt{145}}{2} \\)' }
    },
    {
        id: 'el2-048', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Standard',
        questionText: 'Show that \\( \\log_8 x = \\dfrac{\\log_2 x}{3} \\) and hence solve \\( \\log_2 x + \\log_8 x = 8 \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Prove the identity.', workingLatex: '\\log_8 x = \\frac{\\log_2 x}{\\log_2 8} = \\frac{\\log_2 x}{3}', explanation: 'Apply the change of base formula. Since \\(\\log_2 8 = 3\\), the denominator simplifies.' },
            { stepNumber: 2, description: 'Substitute into the equation.', workingLatex: '\\log_2 x + \\frac{\\log_2 x}{3} = 8', explanation: 'Replace \\(\\log_8 x\\) with \\(\\frac{\\log_2 x}{3}\\) in the original equation.' },
            { stepNumber: 3, description: 'Combine the terms.', workingLatex: '\\frac{3\\log_2 x + \\log_2 x}{3} = 8 \\implies \\frac{4\\log_2 x}{3} = 8', explanation: 'Write with a common denominator and simplify the numerator.' },
            { stepNumber: 4, description: 'Solve for \\( \\log_2 x \\).', workingLatex: '\\log_2 x = 8 \\times \\frac{3}{4} = 6', explanation: 'Multiply both sides by \\(\\frac{3}{4}\\).' },
            { stepNumber: 5, description: 'Find \\( x \\).', workingLatex: 'x = 2^6 = 64', explanation: 'Convert back from logarithmic to exponential form.' }
        ], finalAnswer: '\\( x = 64 \\)' }
    },
    {
        id: 'el2-049', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x = 2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite in exponential form', workingLatex: '\\ln x = 2 \\implies x = e^2', explanation: 'Since \\(\\ln x\\) means \\(\\log_e x\\), the equation \\(\\ln x = 2\\) is equivalent to \\(x = e^2\\).' },
            { stepNumber: 2, description: 'State the exact answer', workingLatex: 'x = e^2 \\approx 7.39', explanation: 'The exact answer is \\(x = e^2\\). As a decimal this is approximately 7.39, but the exact form is preferred.' }
        ], finalAnswer: '\\( x = e^2 \\)' }
    },
    {
        id: 'el2-050', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x = 10 \\). Give your answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take natural logs of both sides', workingLatex: '\\ln 2^x = \\ln 10', explanation: 'Since the variable is in the exponent, take natural logarithms of both sides to bring it down.' },
            { stepNumber: 2, description: 'Apply the power rule', workingLatex: 'x \\ln 2 = \\ln 10', explanation: 'Using the logarithm power rule \\(\\ln a^n = n \\ln a\\), the exponent \\(x\\) comes down as a multiplier.' },
            { stepNumber: 3, description: 'Solve for \\( x \\)', workingLatex: 'x = \\frac{\\ln 10}{\\ln 2} = 3.32', explanation: 'Divide both sides by \\(\\ln 2\\) and evaluate to 3 significant figures.' }
        ], finalAnswer: '\\( x = 3.32 \\)' }
    },
    {
        id: 'el2-051', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^x = 20 \\). Give your answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take natural logs of both sides', workingLatex: '\\ln 5^x = \\ln 20', explanation: 'Take natural logarithms of both sides to bring the exponent down.' },
            { stepNumber: 2, description: 'Apply the power rule', workingLatex: 'x \\ln 5 = \\ln 20', explanation: 'Using the power rule \\(\\ln a^n = n \\ln a\\), the exponent \\(x\\) becomes a coefficient.' },
            { stepNumber: 3, description: 'Solve for \\( x \\)', workingLatex: 'x = \\frac{\\ln 20}{\\ln 5} = \\frac{3.00}{1.609} = 1.86', explanation: 'Divide both sides by \\(\\ln 5\\) and evaluate to 3 significant figures.' }
        ], finalAnswer: '\\( x = 1.86 \\)' }
    },
    {
        id: 'el2-052', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{2x-1} = 15 \\). Give your answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take natural logs of both sides', workingLatex: '\\ln 3^{2x-1} = \\ln 15', explanation: 'Take natural logarithms of both sides to bring down the exponent.' },
            { stepNumber: 2, description: 'Apply the power rule', workingLatex: '(2x - 1) \\ln 3 = \\ln 15', explanation: 'Using the power rule \\(\\ln a^n = n \\ln a\\), the entire exponent \\((2x - 1)\\) becomes a coefficient.' },
            { stepNumber: 3, description: 'Isolate the bracket', workingLatex: '2x - 1 = \\frac{\\ln 15}{\\ln 3} = 2.465', explanation: 'Divide both sides by \\(\\ln 3\\) and evaluate the right-hand side.' },
            { stepNumber: 4, description: 'Solve for \\( x \\)', workingLatex: '2x = 3.465 \\implies x = 1.73', explanation: 'Add 1 to both sides to get \\(2x = 3.465\\), then divide by 2 to obtain \\(x = 1.73\\) (3 s.f.).' }
        ], finalAnswer: '\\( x = 1.73 \\)' }
    },
    {
        id: 'el2-053', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_8 2 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express \\( 8 \\) as a power of \\( 2 \\)', workingLatex: '8 = 2^3', explanation: 'Recognise that \\(8 = 2^3\\), so we can relate the base and the argument.' },
            { stepNumber: 2, description: 'Find the required exponent', workingLatex: '8^{1/3} = (2^3)^{1/3} = 2 \\implies \\log_8 2 = \\frac{1}{3}', explanation: 'Since \\(8^{1/3} = 2\\), the logarithm \\(\\log_8 2 = \\frac{1}{3}\\) by definition.' }
        ], finalAnswer: '\\( \\frac{1}{3} \\)' }
    },
    {
        id: 'el2-054', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_9 3 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express \\( 9 \\) as a power of \\( 3 \\)', workingLatex: '9 = 3^2', explanation: 'Recognise that \\(9 = 3^2\\), so the base and argument share a common prime factor.' },
            { stepNumber: 2, description: 'Find the required exponent', workingLatex: '9^{1/2} = (3^2)^{1/2} = 3 \\implies \\log_9 3 = \\frac{1}{2}', explanation: 'Since \\(9^{1/2} = 3\\), we have \\(\\log_9 3 = \\frac{1}{2}\\) by definition.' }
        ], finalAnswer: '\\( \\frac{1}{2} \\)' }
    },
    {
        id: 'el2-055', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\ln x \\). State the x-intercept and asymptote.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the x-intercept', workingLatex: '\\ln 1 = 0 \\implies x\\text{-intercept at } (1, 0)', explanation: 'Setting \\(y = 0\\) gives \\(\\ln x = 0\\), so \\(x = e^0 = 1\\). The curve crosses the x-axis at \\((1, 0)\\).' },
            { stepNumber: 2, description: 'Identify the asymptote', workingLatex: '\\text{Vertical asymptote: } x = 0', explanation: 'As \\(x \\to 0^+\\), \\(\\ln x \\to -\\infty\\). The y-axis (\\(x = 0\\)) is a vertical asymptote. The function is only defined for \\(x > 0\\).' },
            { stepNumber: 3, description: 'Describe the shape', workingLatex: 'y = \\ln x \\text{ is increasing for } x > 0', explanation: 'The curve passes through \\((1, 0)\\), increases without bound as \\(x\\) increases, and decreases without bound as \\(x\\) approaches 0 from the right.' }
        ], finalAnswer: '\\( x \\)-intercept \\((1,0)\\); asymptote \\( x = 0 \\)' }
    },
    {
        id: 'el2-056', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Sketch \\( y = \\log_{10} x \\) and \\( y = 10^x \\) on the same axes. What is the relationship?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Sketch \\( y = 10^x \\)', workingLatex: 'y = 10^x \\text{ passes through } (0, 1)', explanation: 'The exponential curve \\(y = 10^x\\) has a y-intercept at \\((0, 1)\\) and a horizontal asymptote \\(y = 0\\). It increases rapidly for positive \\(x\\).' },
            { stepNumber: 2, description: 'Sketch \\( y = \\log_{10} x \\)', workingLatex: 'y = \\log_{10} x \\text{ passes through } (1, 0)', explanation: 'The logarithmic curve \\(y = \\log_{10} x\\) has an x-intercept at \\((1, 0)\\) and a vertical asymptote \\(x = 0\\). It is the reflection of \\(y = 10^x\\) in the line \\(y = x\\).' },
            { stepNumber: 3, description: 'State the relationship', workingLatex: 'y = \\log_{10} x \\text{ and } y = 10^x \\text{ are inverses, reflected in } y = x', explanation: 'The two curves are inverse functions of each other, so they are reflections of one another in the line \\(y = x\\). Their graphs are symmetric about this line.' }
        ], finalAnswer: 'Inverse functions; reflections in \\( y = x \\)' }
    },
    {
        id: 'el2-057', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} = 8 \\). Give exact answer.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take \\( \\ln \\) of both sides', workingLatex: '\\ln(e^{2x}) = \\ln 8', explanation: 'Apply the natural logarithm to both sides to undo the exponential.' },
            { stepNumber: 2, description: 'Simplify using \\( \\ln \\) rules', workingLatex: '2x = \\ln 8 = \\ln 2^3 = 3\\ln 2', explanation: 'Since \\(\\ln\\) and \\(e\\) are inverse functions, \\(\\ln(e^{2x}) = 2x\\). Then write \\(8\\) as \\(2^3\\) and use the power rule to bring down the exponent.' },
            { stepNumber: 3, description: 'Solve for \\( x \\)', workingLatex: 'x = \\frac{3\\ln 2}{2}', explanation: 'Divide both sides by 2 to isolate \\(x\\).' }
        ], finalAnswer: '\\( x = \\frac{3\\ln 2}{2} \\)' }
    },
    {
        id: 'el2-058', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(2x + 1) = 3 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate both sides', workingLatex: 'e^{\\ln(2x+1)} = e^3', explanation: 'Raise \\(e\\) to the power of each side to undo the natural logarithm.' },
            { stepNumber: 2, description: 'Simplify left side', workingLatex: '2x + 1 = e^3', explanation: 'Since \\(e\\) and \\(\\ln\\) are inverse functions, \\(e^{\\ln(2x+1)}\\) simplifies to \\(2x + 1\\).' },
            { stepNumber: 3, description: 'Solve for \\( x \\)', workingLatex: '2x = e^3 - 1 \\implies x = \\frac{e^3 - 1}{2}', explanation: 'Subtract 1 from both sides, then divide by 2.' }
        ], finalAnswer: '\\( x = \\frac{e^3 - 1}{2} \\)' }
    },
    {
        id: 'el2-059', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2(x+3) + \\log_2(x-1) = 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine logs using addition law', workingLatex: '\\log_2[(x+3)(x-1)] = 3', explanation: 'The addition law states \\(\\log_a M + \\log_a N = \\log_a(MN)\\), so combine the two logarithms into one.' },
            { stepNumber: 2, description: 'Convert to exponential form', workingLatex: '(x+3)(x-1) = 2^3 = 8', explanation: 'Rewrite \\(\\log_2(\\text{expression}) = 3\\) in exponential form: the expression equals \\(2^3 = 8\\).' },
            { stepNumber: 3, description: 'Expand and rearrange', workingLatex: 'x^2 + 2x - 3 = 8 \\implies x^2 + 2x - 11 = 0', explanation: 'Expand the brackets to get \\(x^2 + 2x - 3\\), then subtract 8 from both sides.' },
            { stepNumber: 4, description: 'Solve the quadratic', workingLatex: 'x = \\frac{-2 \\pm \\sqrt{4 + 44}}{2} = \\frac{-2 \\pm \\sqrt{48}}{2} = -1 \\pm 2\\sqrt{3}', explanation: 'Apply the quadratic formula. The negative root gives \\(x < 0\\), but we need \\(x > 1\\) for both log arguments to be positive, so reject it.' }
        ], finalAnswer: '\\( x = -1 + 2\\sqrt{3} \\)' }
    },
    {
        id: 'el2-060', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\log_a a^5 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule', workingLatex: '\\log_a a^5 = 5\\log_a a = 5 \\times 1 = 5', explanation: 'The power rule brings the exponent down as a multiplier. Since \\(\\log_a(a) = 1\\), the result is simply 5.' }
        ], finalAnswer: '\\( 5 \\)' }
    },
    {
        id: 'el2-061', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'If \\( \\log_3 x = 2 \\) and \\( \\log_3 y = 4 \\), find \\( \\log_3(xy) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the addition law', workingLatex: '\\log_3(xy) = \\log_3 x + \\log_3 y', explanation: 'The addition law of logarithms states that \\(\\log_a(MN) = \\log_a M + \\log_a N\\).' },
            { stepNumber: 2, description: 'Substitute given values', workingLatex: '\\log_3 x + \\log_3 y = 2 + 4 = 6', explanation: 'Substitute the given values \\(\\log_3(x) = 2\\) and \\(\\log_3(y) = 4\\), then add.' }
        ], finalAnswer: '\\( 6 \\)' }
    },
    {
        id: 'el2-062', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( 10^{x-1} = 500 \\). Give answer to 3 s.f.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log base 10 of both sides', workingLatex: '\\log_{10}(10^{x-1}) = \\log_{10} 500', explanation: 'Apply log base 10 to both sides to bring down the exponent.' },
            { stepNumber: 2, description: 'Simplify the left side', workingLatex: 'x - 1 = \\log_{10} 500', explanation: 'Since \\(\\log_{10}(10^k) = k\\), the left side simplifies to \\(x - 1\\).' },
            { stepNumber: 3, description: 'Evaluate and solve for \\( x \\)', workingLatex: 'x - 1 = 2.699 \\implies x = 3.70', explanation: 'Use a calculator to find \\(\\log_{10}(500) = 2.699\\), then add 1 to both sides. Round to 3 s.f.' }
        ], finalAnswer: '\\( x = 3.70 \\)' }
    },
    {
        id: 'el2-063', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Express \\( 2\\log a + 3\\log b \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule', workingLatex: '2\\log a + 3\\log b = \\log a^2 + \\log b^3', explanation: 'Use the power rule to move each coefficient up as an exponent inside the logarithm.' },
            { stepNumber: 2, description: 'Apply the addition law', workingLatex: '\\log a^2 + \\log b^3 = \\log(a^2 b^3)', explanation: 'The addition law combines \\(\\log M + \\log N\\) into \\(\\log(MN)\\).' }
        ], finalAnswer: '\\( \\log(a^2 b^3) \\)' }
    },
    {
        id: 'el2-064', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Express \\( \\log 12 - \\log 4 + \\log 3 \\) as a single logarithm and evaluate.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply subtraction law', workingLatex: '\\log 12 - \\log 4 = \\log\\frac{12}{4} = \\log 3', explanation: 'The subtraction law states \\(\\log M - \\log N = \\log(M/N)\\). So \\(\\log 12 - \\log 4 = \\log 3\\).' },
            { stepNumber: 2, description: 'Apply addition law', workingLatex: '\\log 3 + \\log 3 = \\log(3 \\times 3) = \\log 9', explanation: 'Combine the two remaining logs using the addition law: \\(\\log 3 + \\log 3 = \\log 9\\).' }
        ], finalAnswer: '\\( \\log 9 \\)' }
    },
    {
        id: 'el2-065', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_5 x + \\log_5 4 = 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine using addition law', workingLatex: '\\log_5(4x) = 2', explanation: 'Use the addition law to combine the two logarithms into a single logarithm.' },
            { stepNumber: 2, description: 'Convert to exponential form', workingLatex: '4x = 5^2 = 25', explanation: 'Rewrite \\(\\log_5(4x) = 2\\) in exponential form: \\(4x = 5^2 = 25\\).' },
            { stepNumber: 3, description: 'Solve for \\( x \\)', workingLatex: 'x = \\frac{25}{4}', explanation: 'Divide both sides by 4.' }
        ], finalAnswer: '\\( x = \\frac{25}{4} \\)' }
    },
    {
        id: 'el2-066', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Given \\( \\log_2 3 = 1.585 \\), find \\( \\log_2 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise 12', workingLatex: '12 = 4 \\times 3 = 2^2 \\times 3', explanation: 'Write 12 as a product of factors involving 2 and 3, since we know \\(\\log_2\\) of both.' },
            { stepNumber: 2, description: 'Apply addition and power rules', workingLatex: '\\log_2 12 = \\log_2(2^2 \\times 3) = \\log_2 2^2 + \\log_2 3 = 2 + 1.585 = 3.585', explanation: 'Split using the addition law, then \\(\\log_2(2^2) = 2\\) by the power rule. Substitute the given value of \\(\\log_2(3)\\).' }
        ], finalAnswer: '\\( 3.585 \\)' }
    },
    {
        id: 'el2-067', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x + e^{-x} = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( u = e^x \\)', workingLatex: 'u + \\frac{1}{u} = 3', explanation: 'Let \\(u = e^x\\), so \\(e^{-x} = 1/u\\). This converts the equation into an algebraic form.' },
            { stepNumber: 2, description: 'Multiply through by \\( u \\)', workingLatex: 'u^2 + 1 = 3u \\implies u^2 - 3u + 1 = 0', explanation: 'Multiply every term by \\(u\\) to clear the fraction, then rearrange into standard quadratic form.' },
            { stepNumber: 3, description: 'Apply the quadratic formula', workingLatex: 'u = \\frac{3 \\pm \\sqrt{9 - 4}}{2} = \\frac{3 \\pm \\sqrt{5}}{2}', explanation: 'Use the quadratic formula with \\(a = 1\\), \\(b = -3\\), \\(c = 1\\).' },
            { stepNumber: 4, description: 'Check validity of solutions', workingLatex: 'u = \\frac{3 + \\sqrt{5}}{2} \\approx 2.618 > 0, \\quad u = \\frac{3 - \\sqrt{5}}{2} \\approx 0.382 > 0', explanation: 'Since \\(u = e^x\\) must be positive, both values are valid.' },
            { stepNumber: 5, description: 'Take \\( \\ln \\) to find \\( x \\)', workingLatex: 'x = \\ln\\left(\\frac{3 + \\sqrt{5}}{2}\\right) \\text{ or } x = \\ln\\left(\\frac{3 - \\sqrt{5}}{2}\\right)', explanation: 'Take the natural logarithm of each value of \\(u\\) to recover \\(x\\).' }
        ], finalAnswer: '\\( x = \\ln\\!\\left(\\frac{3 + \\sqrt{5}}{2}\\right) \\) or \\( x = \\ln\\!\\left(\\frac{3 - \\sqrt{5}}{2}\\right) \\)' }
    },
    {
        id: 'el2-068', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'The Richter scale: an earthquake of magnitude \\( M \\) has energy \\( E = 10^{1.5M+4.8} \\) joules. Find M when \\( E = 10^{12} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equate the exponents', workingLatex: '10^{1.5M + 4.8} = 10^{12} \\implies 1.5M + 4.8 = 12', explanation: 'Since the bases are both 10, the exponents must be equal.' },
            { stepNumber: 2, description: 'Isolate the \\( M \\) term', workingLatex: '1.5M = 12 - 4.8 = 7.2', explanation: 'Subtract 4.8 from both sides.' },
            { stepNumber: 3, description: 'Solve for \\( M \\)', workingLatex: 'M = \\frac{7.2}{1.5} = 4.8', explanation: 'Divide both sides by 1.5.' }
        ], finalAnswer: '\\( M = 4.8 \\)' }
    },
    {
        id: 'el2-069', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Use the change of base formula to evaluate \\( \\log_3 20 \\) to 3 s.f.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply change of base formula', workingLatex: '\\log_3 20 = \\frac{\\ln 20}{\\ln 3}', explanation: 'The change of base formula states \\(\\log_a b = \\frac{\\ln b}{\\ln a}\\).' },
            { stepNumber: 2, description: 'Evaluate with a calculator', workingLatex: '\\frac{\\ln 20}{\\ln 3} = \\frac{3.00}{1.099} = 2.73', explanation: 'Compute \\(\\ln 20\\) and \\(\\ln 3\\) on a calculator, then divide. Round to 3 significant figures.' }
        ], finalAnswer: '\\( 2.73 \\)' }
    },
    {
        id: 'el2-070', topicRef: 'el2', topicTitle: 'Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x + \\log_4 x = 6 \\). [Hint: use change of base.]',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change base of \\( \\log_4 x \\)', workingLatex: '\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}', explanation: 'Apply the change of base formula to rewrite \\(\\log_4 x\\) in terms of \\(\\log_2 x\\). Since \\(\\log_2 4 = 2\\), we get \\(\\log_2 x\\) divided by 2.' },
            { stepNumber: 2, description: 'Substitute and simplify', workingLatex: '\\log_2 x + \\frac{\\log_2 x}{2} = 6 \\implies \\frac{3}{2}\\log_2 x = 6', explanation: 'Replace \\(\\log_4 x\\) with the expression from step 1 and combine like terms.' },
            { stepNumber: 3, description: 'Solve for \\( \\log_2 x \\)', workingLatex: '\\log_2 x = 6 \\times \\frac{2}{3} = 4', explanation: 'Multiply both sides by \\(\\frac{2}{3}\\) to isolate \\(\\log_2 x\\).' },
            { stepNumber: 4, description: 'Convert to find \\( x \\)', workingLatex: 'x = 2^4 = 16', explanation: 'Rewrite \\(\\log_2 x = 4\\) in exponential form to get \\(x = 2^4 = 16\\).' }
        ], finalAnswer: '\\( x = 16 \\)' }
    },
];
