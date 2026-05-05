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

    // TYPE A (Q1–5): Challenging exam-style questions on laws of logarithms
    {
        id: 'el3-001',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\log_2(x - 1) + \\log_2(x + 3) = 5 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the product law to combine the two logarithms.',
                    workingLatex: '\\log_2(x - 1) + \\log_2(x + 3) = \\log_2\\bigl((x - 1)(x + 3)\\bigr)',
                    explanation: 'Using \\( \\log_a m + \\log_a n = \\log_a(mn) \\), we combine the left-hand side into a single logarithm.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite the equation in exponential form.',
                    workingLatex: '(x - 1)(x + 3) = 2^5 = 32',
                    explanation: 'Since \\( \\log_2 A = 5 \\) means \\( A = 2^5 \\), we convert the logarithmic equation into an algebraic one.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and rearrange into a quadratic equation.',
                    workingLatex: 'x^2 + 2x - 3 = 32 \\implies x^2 + 2x - 35 = 0',
                    explanation: 'Expanding the product gives \\( x^2 + 3x - x - 3 = x^2 + 2x - 3 \\). Subtracting 32 from both sides yields the standard quadratic form.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve the quadratic.',
                    workingLatex: '(x + 7)(x - 5) = 0 \\implies x = -7 \\text{ or } x = 5',
                    explanation: 'We need two numbers that multiply to \\( -35 \\) and add to \\( 2 \\). These are \\( 7 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check the validity of each solution against the domain.',
                    workingLatex: 'x = -7: \\quad x - 1 = -8 < 0 \\quad \\text{(invalid)} \\qquad x = 5: \\quad x - 1 = 4 > 0,\\; x + 3 = 8 > 0 \\quad \\text{(valid)}',
                    explanation: 'The arguments of both logarithms must be strictly positive. When \\( x = -7 \\), \\( x - 1 = -8 \\) is negative, so this root is rejected. When \\( x = 5 \\), both arguments are positive, so this is the valid solution.'
                }
            ],
            finalAnswer: '\\( x = 5 \\)'
        }
    },
    {
        id: 'el3-002',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\log_a 3 = p \\), express \\( \\log_a\\!\\left(\\dfrac{27}{a^2}\\right) \\) in terms of \\( p \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law to split the logarithm.',
                    workingLatex: '\\log_a\\!\\left(\\frac{27}{a^2}\\right) = \\log_a 27 - \\log_a a^2',
                    explanation: 'Using \\( \\log_a\\!\\left(\\frac{m}{n}\\right) = \\log_a m - \\log_a n \\), we separate the fraction into two terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite \\( 27 \\) as a power of 3.',
                    workingLatex: '\\log_a 27 = \\log_a 3^3',
                    explanation: 'Recognising that \\( 27 = 3^3 \\) allows us to use the power law in the next step.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power law to bring down the exponent.',
                    workingLatex: '\\log_a 3^3 = 3\\log_a 3 = 3p',
                    explanation: 'The power law \\( \\log_a m^k = k\\log_a m \\) brings the exponent to the front. We then substitute \\( \\log_a 3 = p \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify \\( \\log_a a^2 \\) using the identity \\( \\log_a a = 1 \\).',
                    workingLatex: '\\log_a a^2 = 2\\log_a a = 2 \\times 1 = 2',
                    explanation: 'Applying the power law first and then the fundamental identity \\( \\log_a a = 1 \\) gives the value 2.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine the results.',
                    workingLatex: '\\log_a\\!\\left(\\frac{27}{a^2}\\right) = 3p - 2',
                    explanation: 'Substituting the simplified expressions back gives the final answer in terms of \\( p \\).'
                }
            ],
            finalAnswer: '\\( 3p - 2 \\)'
        }
    },
    {
        id: 'el3-003',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\log_3 x + \\log_9 x = 5 \\). Give your answer as an exact value.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert \\( \\log_9 x \\) to base 3 using the change of base relationship.',
                    workingLatex: '9 = 3^2 \\implies \\log_9 x = \\frac{\\log_3 x}{\\log_3 9} = \\frac{\\log_3 x}{2}',
                    explanation: 'Since \\( 9 = 3^2 \\), we apply the change of base formula \\( \\log_9 x = \\frac{\\log_3 x}{\\log_3 9} \\). Because \\( \\log_3 9 = 2 \\), this simplifies to \\( \\frac{\\log_3 x}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the original equation.',
                    workingLatex: '\\log_3 x + \\frac{\\log_3 x}{2} = 5',
                    explanation: 'Replacing \\( \\log_9 x \\) with \\( \\frac{\\log_3 x}{2} \\) gives an equation entirely in terms of \\( \\log_3 x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Let \\( y = \\log_3 x \\) and solve the linear equation.',
                    workingLatex: 'y + \\frac{y}{2} = 5 \\implies \\frac{3y}{2} = 5 \\implies y = \\frac{10}{3}',
                    explanation: 'Combining the terms on the left gives \\( \\frac{3y}{2} = 5 \\). Multiplying both sides by \\( \\frac{2}{3} \\) yields \\( y = \\frac{10}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Convert back to find \\( x \\).',
                    workingLatex: '\\log_3 x = \\frac{10}{3} \\implies x = 3^{10/3}',
                    explanation: 'Since \\( \\log_3 x = \\frac{10}{3} \\), converting to exponential form gives \\( x = 3^{10/3} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify the answer is valid.',
                    workingLatex: 'x = 3^{10/3} > 0 \\quad \\checkmark',
                    explanation: 'The argument of both logarithms must be positive. Since \\( 3^{10/3} > 0 \\), the solution is valid.'
                }
            ],
            finalAnswer: '\\( x = 3^{10/3} \\)'
        }
    },
    {
        id: 'el3-004',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Prove that \\( \\log_a b \\cdot \\log_b c \\cdot \\log_c a = 1 \\) for all valid bases \\( a \\), \\( b \\), \\( c \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the change of base formula.',
                    workingLatex: '\\log_a b = \\frac{\\ln b}{\\ln a}, \\quad \\log_b c = \\frac{\\ln c}{\\ln b}, \\quad \\log_c a = \\frac{\\ln a}{\\ln c}',
                    explanation: 'Each logarithm can be expressed as a ratio of natural logarithms using the change of base formula \\( \\log_p q = \\frac{\\ln q}{\\ln p} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply the three expressions together.',
                    workingLatex: '\\log_a b \\cdot \\log_b c \\cdot \\log_c a = \\frac{\\ln b}{\\ln a} \\cdot \\frac{\\ln c}{\\ln b} \\cdot \\frac{\\ln a}{\\ln c}',
                    explanation: 'We substitute each logarithm with its change-of-base equivalent and write the product as a single fraction.'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel matching terms in the numerator and denominator.',
                    workingLatex: '\\frac{\\ln b \\cdot \\ln c \\cdot \\ln a}{\\ln a \\cdot \\ln b \\cdot \\ln c}',
                    explanation: 'The numerator contains \\( \\ln b \\cdot \\ln c \\cdot \\ln a \\) and the denominator contains the same three factors, so every term cancels.'
                },
                {
                    stepNumber: 4,
                    description: 'Conclude the proof.',
                    workingLatex: '\\frac{\\ln b \\cdot \\ln c \\cdot \\ln a}{\\ln a \\cdot \\ln b \\cdot \\ln c} = 1 \\qquad \\square',
                    explanation: 'Since the numerator and denominator are identical, the product equals 1, completing the proof.'
                }
            ],
            finalAnswer: '\\( \\log_a b \\cdot \\log_b c \\cdot \\log_c a = 1 \\quad \\square \\)'
        }
    },
    {
        id: 'el3-005',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Solve \\( 3^{2x+1} = 4^{x-2} \\), giving your answer to 3 significant figures.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take logarithms of both sides.',
                    workingLatex: '\\ln\\bigl(3^{2x+1}\\bigr) = \\ln\\bigl(4^{x-2}\\bigr)',
                    explanation: 'Since the variable appears in the exponents on both sides, we take natural logarithms of both sides to bring the exponents down.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to bring the exponents to the front.',
                    workingLatex: '(2x + 1)\\ln 3 = (x - 2)\\ln 4',
                    explanation: 'Using \\( \\ln a^n = n \\ln a \\), the exponents become coefficients. This converts the exponential equation into a linear equation in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand both sides.',
                    workingLatex: '2x\\ln 3 + \\ln 3 = x\\ln 4 - 2\\ln 4',
                    explanation: 'Distributing the logarithmic constants across the brackets separates the terms involving \\( x \\) from the constant terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect terms in \\( x \\) on one side.',
                    workingLatex: '2x\\ln 3 - x\\ln 4 = -2\\ln 4 - \\ln 3',
                    explanation: 'Moving all \\( x \\)-terms to the left and all constant terms to the right prepares the equation for factorising.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise and solve for \\( x \\).',
                    workingLatex: 'x(2\\ln 3 - \\ln 4) = -2\\ln 4 - \\ln 3 \\implies x = \\frac{-2\\ln 4 - \\ln 3}{2\\ln 3 - \\ln 4}',
                    explanation: 'Factoring \\( x \\) from the left-hand side and dividing both sides by \\( (2\\ln 3 - \\ln 4) \\) isolates \\( x \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate numerically to 3 significant figures.',
                    workingLatex: 'x = \\frac{-2(1.3863) - 1.0986}{2(1.0986) - 1.3863} = \\frac{-3.8712}{0.8109} = -4.77 \\text{ (3 s.f.)}',
                    explanation: 'Substituting \\( \\ln 3 \\approx 1.0986 \\) and \\( \\ln 4 \\approx 1.3863 \\) and computing the division gives \\( x \\approx -4.77 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x = -4.77 \\)'
        }
    },
    {
        id: 'el3-006',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Show that \\( \\dfrac{\\log 8 + \\log 27}{\\log 6} = 3 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express \\( 8 \\) and \\( 27 \\) as prime powers.',
                    workingLatex: '8 = 2^3, \\quad 27 = 3^3',
                    explanation: 'Recognising \\( 8 \\) and \\( 27 \\) as perfect cubes is the key first step.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to rewrite \\( \\log 8 \\) and \\( \\log 27 \\).',
                    workingLatex: '\\log 8 = \\log 2^3 = 3\\log 2, \\quad \\log 27 = \\log 3^3 = 3\\log 3',
                    explanation: 'Using \\( \\log a^n = n\\log a \\), each logarithm can be written with a coefficient of \\( 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add the two logarithms in the numerator.',
                    workingLatex: '\\log 8 + \\log 27 = 3\\log 2 + 3\\log 3 = 3(\\log 2 + \\log 3)',
                    explanation: 'Factor out the common coefficient \\( 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Use the product law to simplify \\( \\log 2 + \\log 3 \\).',
                    workingLatex: '\\log 2 + \\log 3 = \\log(2 \\times 3) = \\log 6',
                    explanation: 'The product law \\( \\log a + \\log b = \\log(ab) \\) combines the two logs into \\( \\log 6 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute back and simplify the fraction.',
                    workingLatex: '\\frac{\\log 8 + \\log 27}{\\log 6} = \\frac{3\\log 6}{\\log 6} = 3',
                    explanation: 'The \\( \\log 6 \\) terms cancel, leaving \\( 3 \\) as required.'
                }
            ],
            finalAnswer: '\\( 3 \\) (as required)'
        }
    },
    {
        id: 'el3-007',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Solve \\( \\log_5(2x + 3) - \\log_5(x - 1) = 2 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law to combine the left-hand side into a single logarithm.',
                    workingLatex: '\\log_5(2x + 3) - \\log_5(x - 1) = \\log_5\\!\\left(\\frac{2x + 3}{x - 1}\\right)',
                    explanation: 'The quotient law \\( \\log_a M - \\log_a N = \\log_a\\!\\left(\\frac{M}{N}\\right) \\) combines the two logarithms.'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite the equation in exponential form.',
                    workingLatex: '\\frac{2x + 3}{x - 1} = 5^2 = 25',
                    explanation: 'If \\( \\log_5 A = 2 \\) then \\( A = 5^2 = 25 \\). This removes the logarithm.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply both sides by \\( (x - 1) \\) and expand.',
                    workingLatex: '2x + 3 = 25(x - 1) = 25x - 25',
                    explanation: 'Clear the fraction by multiplying both sides by \\( (x - 1) \\), then expand the right-hand side.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the linear equation for \\( x \\).',
                    workingLatex: '2x + 3 = 25x - 25 \\implies 28 = 23x \\implies x = \\frac{28}{23}',
                    explanation: 'Rearrange by collecting \\( x \\) terms on one side and constants on the other, then divide.'
                },
                {
                    stepNumber: 5,
                    description: 'Check the solution is valid by verifying the arguments of the original logarithms are positive.',
                    workingLatex: '2\\!\\left(\\frac{28}{23}\\right) + 3 = \\frac{125}{23} > 0, \\quad \\frac{28}{23} - 1 = \\frac{5}{23} > 0',
                    explanation: 'Both arguments are positive, so \\( x = \\frac{28}{23} \\) is a valid solution. Logarithms are only defined for positive arguments, so this check is essential.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{28}{23} \\)'
        }
    },
    {
        id: 'el3-008',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\log_2 x = a \\) and \\( \\log_2 y = b \\), express \\( \\log_2\\!\\left(\\dfrac{x^3\\sqrt{y}}{8}\\right) \\) in terms of \\( a \\) and \\( b \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law to separate the fraction inside the logarithm.',
                    workingLatex: '\\log_2\\!\\left(\\frac{x^3\\sqrt{y}}{8}\\right) = \\log_2(x^3\\sqrt{y}) - \\log_2 8',
                    explanation: 'Using \\( \\log\\!\\left(\\frac{A}{B}\\right) = \\log A - \\log B \\), split the expression into a difference.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the product law to \\( \\log_2(x^3\\sqrt{y}) \\).',
                    workingLatex: '\\log_2(x^3\\sqrt{y}) = \\log_2(x^3) + \\log_2(\\sqrt{y})',
                    explanation: 'The product law \\( \\log(AB) = \\log A + \\log B \\) separates the two factors.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power law to each term.',
                    workingLatex: '\\log_2(x^3) = 3\\log_2 x = 3a, \\quad \\log_2(\\sqrt{y}) = \\log_2(y^{1/2}) = \\tfrac{1}{2}\\log_2 y = \\tfrac{1}{2}b',
                    explanation: 'Using \\( \\log(M^n) = n\\log M \\), bring down the exponents and substitute \\( \\log_2 x = a \\) and \\( \\log_2 y = b \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( \\log_2 8 \\) and combine all terms.',
                    workingLatex: '\\log_2 8 = \\log_2 2^3 = 3, \\quad \\text{so } 3a + \\tfrac{1}{2}b - 3',
                    explanation: 'Since \\( 8 = 2^3 \\), we have \\( \\log_2 8 = 3 \\). Combining gives the final expression in terms of \\( a \\) and \\( b \\).'
                }
            ],
            finalAnswer: '\\( 3a + \\dfrac{1}{2}b - 3 \\)'
        }
    },
    {
        id: 'el3-009',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Solve \\( 2\\log_3 x - \\log_3(4x - 3) = 0 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the power law to rewrite \\( 2\\log_3 x \\).',
                    workingLatex: '2\\log_3 x = \\log_3(x^2)',
                    explanation: 'The power law \\( n\\log_a M = \\log_a(M^n) \\) moves the coefficient \\( 2 \\) to become the exponent of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Combine using the quotient law and set equal to zero.',
                    workingLatex: '\\log_3(x^2) - \\log_3(4x - 3) = \\log_3\\!\\left(\\frac{x^2}{4x - 3}\\right) = 0',
                    explanation: 'The quotient law combines the difference into a single logarithm.'
                },
                {
                    stepNumber: 3,
                    description: 'Convert from logarithmic to exponential form.',
                    workingLatex: '\\frac{x^2}{4x - 3} = 3^0 = 1',
                    explanation: 'If \\( \\log_3 A = 0 \\) then \\( A = 3^0 = 1 \\). This removes the logarithm entirely.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the resulting quadratic equation.',
                    workingLatex: 'x^2 = 4x - 3 \\implies x^2 - 4x + 3 = 0 \\implies (x - 1)(x - 3) = 0',
                    explanation: 'Multiply both sides by \\( (4x - 3) \\), rearrange to standard form, and factorise.'
                },
                {
                    stepNumber: 5,
                    description: 'Find solutions and check validity.',
                    workingLatex: 'x = 1 \\text{ or } x = 3',
                    explanation: 'Check: when \\( x = 1 \\), \\( \\log_3 1 = 0 \\) and \\( 4(1) - 3 = 1 > 0 \\), valid. When \\( x = 3 \\), \\( \\log_3 9 = 2 \\) and \\( 4(3) - 3 = 9 > 0 \\), valid. Both solutions satisfy the original equation and give positive arguments.'
                }
            ],
            finalAnswer: '\\( x = 1 \\) or \\( x = 3 \\)'
        }
    },
    {
        id: 'el3-010',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Find the exact value of \\( \\log_4 8 + \\log_8 4 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express \\( 4 \\) and \\( 8 \\) as powers of \\( 2 \\).',
                    workingLatex: '4 = 2^2, \\quad 8 = 2^3',
                    explanation: 'Both bases are powers of \\( 2 \\), which allows us to use the change of base approach.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( \\log_4 8 \\) using the change of base formula.',
                    workingLatex: '\\log_4 8 = \\frac{\\log 8}{\\log 4} = \\frac{\\log 2^3}{\\log 2^2} = \\frac{3\\log 2}{2\\log 2} = \\frac{3}{2}',
                    explanation: 'Apply the change of base formula \\( \\log_a b = \\frac{\\log b}{\\log a} \\), then use the power law \\( \\log 2^n = n\\log 2 \\). The \\( \\log 2 \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( \\log_8 4 \\) using the change of base formula.',
                    workingLatex: '\\log_8 4 = \\frac{\\log 4}{\\log 8} = \\frac{\\log 2^2}{\\log 2^3} = \\frac{2\\log 2}{3\\log 2} = \\frac{2}{3}',
                    explanation: 'The same method gives \\( \\log_8 4 = \\frac{2}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add the two results.',
                    workingLatex: '\\log_4 8 + \\log_8 4 = \\frac{3}{2} + \\frac{2}{3} = \\frac{9}{6} + \\frac{4}{6} = \\frac{13}{6}',
                    explanation: 'Find a common denominator of \\( 6 \\) and add the fractions.'
                }
            ],
            finalAnswer: '\\( \\dfrac{13}{6} \\)'
        }
    },
    // TYPE D (Q11–14): Combining all three laws — simplify expressions into a single log
    {
        id: 'el3-011',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write \\( \\log_4 3 + \\log_4 5 - \\log_4 15 \\) as a single logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the first two terms using the product law.',
                    workingLatex: '\\log_4 3 + \\log_4 5 = \\log_4(15)',
                    explanation: 'The product law gives \\( \\log_4 3 + \\log_4 5 = \\log_4(3 \\times 5) = \\log_4(15) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the quotient law to subtract the third term.',
                    workingLatex: '\\log_4(15) - \\log_4(15) = \\log_4\\!\\left(\\frac{15}{15}\\right)',
                    explanation: 'The quotient law gives \\( \\log_a A - \\log_a B = \\log_a\\!\\left(\\frac{A}{B}\\right) \\). Here both arguments are 15, so we get \\( \\log_4\\!\\left(\\frac{15}{15}\\right) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the fraction.',
                    workingLatex: '\\log_4\\!\\left(\\frac{15}{15}\\right) = \\log_4(1)',
                    explanation: '\\( \\frac{15}{15} = 1 \\), so the expression reduces to \\( \\log_4(1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( \\log_4(1) \\).',
                    workingLatex: '\\log_4(1) = 0',
                    explanation: 'The logarithm of 1 in any base is always 0, since \\( 4^0 = 1 \\).'
                }
            ],
            finalAnswer: '\\( 0 \\)'
        }
    },
    {
        id: 'el3-012',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write \\( 2\\log_{10} 5 + \\log_{10} 4 \\) as a single logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to the first term.',
                    workingLatex: '2\\log_{10} 5 = \\log_{10}(5^2) = \\log_{10}(25)',
                    explanation: 'The coefficient 2 becomes the exponent of 5. Since \\( 5^2 = 25 \\), this gives \\( \\log_{10}(25) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Combine using the product law.',
                    workingLatex: '\\log_{10}(25) + \\log_{10}(4) = \\log_{10}(25 \\times 4)',
                    explanation: 'Both terms are now single logarithms with base 10, so the product law combines them into \\( \\log_{10}(25 \\times 4) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply the arguments.',
                    workingLatex: '\\log_{10}(25 \\times 4) = \\log_{10}(100)',
                    explanation: '\\( 25 \\times 4 = 100 \\). Notice that 100 is a power of 10.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( \\log_{10}(100) \\).',
                    workingLatex: '\\log_{10}(100) = \\log_{10}(10^2) = 2',
                    explanation: 'Since \\( 100 = 10^2 \\), we have \\( \\log_{10}(10^2) = 2 \\) by the definition of a logarithm.'
                }
            ],
            finalAnswer: '\\( 2 \\)'
        }
    },
    {
        id: 'el3-013',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write \\( \\log_2 12 - 2\\log_2 3 + \\log_2 6 \\) as a single logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to the middle term.',
                    workingLatex: '2\\log_2 3 = \\log_2(3^2) = \\log_2 9',
                    explanation: 'The coefficient 2 moves to become the exponent of 3. Since \\( 3^2 = 9 \\), this gives \\( \\log_2 9 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite the full expression with the substitution.',
                    workingLatex: '\\log_2 12 - \\log_2 9 + \\log_2 6',
                    explanation: 'Replace \\( 2\\log_2 3 \\) with \\( \\log_2 9 \\). All three terms are now single logarithms with the same base, ready to combine.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quotient law to the first two terms.',
                    workingLatex: '\\log_2\\!\\left(\\frac{12}{9}\\right) + \\log_2 6 = \\log_2\\!\\left(\\frac{4}{3}\\right) + \\log_2 6',
                    explanation: 'The quotient law gives \\( \\log_2 12 - \\log_2 9 = \\log_2\\!\\left(\\frac{12}{9}\\right) \\). Simplify the fraction: \\( \\frac{12}{9} = \\frac{4}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the product law to combine the remaining terms.',
                    workingLatex: '\\log_2\\!\\left(\\frac{4}{3} \\times 6\\right) = \\log_2(8)',
                    explanation: 'The product law gives \\( \\log_2\\!\\left(\\frac{4}{3}\\right) + \\log_2 6 = \\log_2\\!\\left(\\frac{4}{3} \\times 6\\right) \\). Computing: \\( \\frac{4}{3} \\times 6 = 8 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate \\( \\log_2 8 \\).',
                    workingLatex: '\\log_2(8) = \\log_2(2^3) = 3',
                    explanation: 'Since \\( 8 = 2^3 \\), we have \\( \\log_2(2^3) = 3 \\) by the definition of a logarithm.'
                }
            ],
            finalAnswer: '\\( 3 \\)'
        }
    },
    {
        id: 'el3-014',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Write \\( 3\\ln 2 - \\ln 4 \\) as a single natural logarithm.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to \\( 3\\ln 2 \\).',
                    workingLatex: '3\\ln 2 = \\ln(2^3)',
                    explanation: 'The coefficient 3 moves to become the exponent of the argument. This gives \\( \\ln(2^3) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 2^3 \\).',
                    workingLatex: '\\ln(2^3) = \\ln 8',
                    explanation: '\\( 2^3 = 8 \\), so the expression becomes \\( \\ln 8 - \\ln 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\ln 8 - \\ln 4 = \\ln\\!\\left(\\frac{8}{4}\\right)',
                    explanation: 'The quotient law states \\( \\ln a - \\ln b = \\ln\\!\\left(\\frac{a}{b}\\right) \\). Subtracting the logs means dividing their arguments.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the fraction.',
                    workingLatex: '\\ln\\!\\left(\\frac{8}{4}\\right) = \\ln 2',
                    explanation: '\\( 8 \\div 4 = 2 \\). This gives the final answer as a single natural logarithm.'
                }
            ],
            finalAnswer: '\\( \\ln 2 \\)'
        }
    },
    // TYPE E (Q15–18): Expanding a single log using the laws in reverse
    {
        id: 'el3-015',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'The graph of \\( y = 2\\log_{10} x \\) can be transformed into the graph of \\( y = 1 + 2\\log_{10} x \\) by a translation.\n\n(a) Show that \\( \\log_{10}(10x^2) = 1 + 2\\log_{10} x \\).\n\n(b) Hence show that the graph of \\( y = 2\\log_{10} x \\) can also be transformed into the graph of \\( y = 1 + 2\\log_{10} x \\) by means of a stretch, and describe the stretch fully.\n\n(c) The curve \\( y = 1 + 2\\log_{10} x \\) intersects the curve \\( y = \\log_{10}(x^2 + 1) \\) at the point \\( P \\). Given that the \\( x \\)-coordinate of \\( P \\) is positive, find the gradient of the line \\( OP \\), where \\( O \\) is the origin. Give your answer in the form \\( \\log_{10}\\!\\left(\\dfrac{a}{b}\\right) \\), where \\( a \\) and \\( b \\) are integers.',
        marks: 11,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Expand \\( \\log_{10}(10x^2) \\).',
                    workingLatex: '\\log_{10}(10x^2) = \\log_{10} 10 + \\log_{10} x^2 = 1 + 2\\log_{10} x',
                    explanation: 'Apply the product law to split the log, then use \\( \\log_{10} 10 = 1 \\) and the power law on \\( \\log_{10} x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Identify the stretch.',
                    workingLatex: 'y = 2\\log_{10} x \\quad \\to \\quad y = \\log_{10}(10x^2) = 2\\log_{10}(\\sqrt{10}\\, x)',
                    explanation: 'Since \\( 10x^2 = (\\sqrt{10}\\, x)^2 \\), replacing \\( x \\) with \\( \\sqrt{10}\\, x \\) in \\( y = 2\\log_{10} x \\) gives \\( y = 1 + 2\\log_{10} x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Describe the stretch.',
                    workingLatex: '\\text{Horizontal stretch, scale factor } \\frac{1}{\\sqrt{10}} \\text{, about the } y\\text{-axis}',
                    explanation: 'Replacing \\( x \\) by \\( \\sqrt{10}\\, x \\) is equivalent to a horizontal stretch with scale factor \\( \\frac{1}{\\sqrt{10}} \\) (since \\( x \\to \\frac{x}{\\sqrt{10}} \\)).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Set the curves equal.',
                    workingLatex: '1 + 2\\log_{10} x = \\log_{10}(x^2 + 1) \\implies \\log_{10}(10x^2) = \\log_{10}(x^2 + 1)',
                    explanation: 'Use part (a) to rewrite the left side, then equate the arguments since both sides are \\( \\log_{10} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '10x^2 = x^2 + 1 \\implies 9x^2 = 1 \\implies x = \\frac{1}{3}',
                    explanation: 'Since \\( x > 0 \\), take the positive root. So \\( P \\) has \\( x = \\frac{1}{3} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find \\( y \\) at \\( P \\).',
                    workingLatex: 'y = \\log_{10}\\!\\left(\\frac{1}{9} + 1\\right) = \\log_{10}\\!\\left(\\frac{10}{9}\\right)',
                    explanation: 'Substitute \\( x = \\frac{1}{3} \\) into \\( y = \\log_{10}(x^2 + 1) \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Find the gradient of \\( OP \\).',
                    workingLatex: '\\text{gradient} = \\frac{y}{x} = \\frac{\\log_{10}(10/9)}{1/3} = 3\\log_{10}\\!\\left(\\frac{10}{9}\\right) = \\log_{10}\\!\\left(\\frac{10}{9}\\right)^3 = \\log_{10}\\!\\left(\\frac{1000}{729}\\right)',
                    explanation: 'Divide \\( y \\) by \\( x \\), then use the power law to bring the 3 inside as an exponent. Since \\( 10^3 = 1000 \\) and \\( 9^3 = 729 \\), the answer is in the required form.'
                }
            ],
            finalAnswer: '(a) Shown \\quad (b) Horizontal stretch, scale factor \\( \\frac{1}{\\sqrt{10}} \\) \\quad (c) \\( \\log_{10}\\!\\left(\\frac{1000}{729}\\right) \\)'
        }
    },
    {
        id: 'el3-016',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Express \\( \\ln(x^2 y) \\) in terms of \\( \\ln x \\) and \\( \\ln y \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the product law.',
                    workingLatex: '\\ln(x^2 y) = \\ln(x^2) + \\ln(y)',
                    explanation: 'The product inside the log splits into addition.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to \\( \\ln(x^2) \\).',
                    workingLatex: '2\\ln x + \\ln y',
                    explanation: 'The power 2 comes down as a coefficient.'
                }
            ],
            finalAnswer: '\\( 2\\ln x + \\ln y \\)'
        }
    },
    {
        id: 'el3-017',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Express \\( \\log_{10}\\!\\left(\\dfrac{100}{x^4}\\right) \\) in a simplified form using \\( \\log_{10} x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\log_{10}\\!\\left(\\frac{100}{x^4}\\right) = \\log_{10}(100) - \\log_{10}(x^4)',
                    explanation: 'The fraction splits into subtraction of logs.'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( \\log_{10}(100) \\).',
                    workingLatex: '\\log_{10}(100) = 2',
                    explanation: '\\( 10^2 = 100 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power law to \\( \\log_{10}(x^4) \\).',
                    workingLatex: '2 - 4\\log_{10} x',
                    explanation: 'The power 4 comes down as a coefficient.'
                }
            ],
            finalAnswer: '\\( 2 - 4\\log_{10} x \\)'
        }
    },
    {
        id: 'el3-018',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Express \\( \\ln\\!\\left(\\dfrac{\\sqrt{x}}{e^2}\\right) \\) in a simplified form.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\ln\\!\\left(\\frac{\\sqrt{x}}{e^2}\\right) = \\ln(\\sqrt{x}) - \\ln(e^2)',
                    explanation: 'Numerator and denominator split into subtraction.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\sqrt{x} = x^{1/2} \\) and apply the power law.',
                    workingLatex: '\\frac{1}{2}\\ln x - \\ln(e^2)',
                    explanation: 'A square root is a half-power.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( \\ln(e^2) \\) using \\( \\ln(e^n) = n \\).',
                    workingLatex: '\\frac{1}{2}\\ln x - 2',
                    explanation: '\\( \\ln(e^2) = 2 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{1}{2}\\ln x - 2 \\)'
        }
    },
    // TYPE F (Q19–22): Solving equations using the laws of logs
    {
        id: 'el3-019',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3 x + \\log_3 4 = \\log_3 28 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law to combine the left-hand side.',
                    workingLatex: '\\log_3(4x) = \\log_3 28',
                    explanation: 'Both sides are now a single log with the same base.'
                },
                {
                    stepNumber: 2,
                    description: 'Since the logs are equal, the arguments must be equal.',
                    workingLatex: '4x = 28',
                    explanation: 'If \\( \\log_a A = \\log_a B \\), then \\( A = B \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 7',
                    explanation: 'Divide both sides by 4.'
                }
            ],
            finalAnswer: '\\( x = 7 \\)'
        }
    },
    {
        id: 'el3-020',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x - \\log_2 5 = \\log_2 6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the quotient law on the left-hand side.',
                    workingLatex: '\\log_2\\!\\left(\\frac{x}{5}\\right) = \\log_2 6',
                    explanation: 'Combining the two log terms using the quotient law.'
                },
                {
                    stepNumber: 2,
                    description: 'Equate the arguments.',
                    workingLatex: '\\frac{x}{5} = 6',
                    explanation: 'If the logs are equal with the same base, the arguments are equal.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\) by multiplying both sides by 5.',
                    workingLatex: 'x = 30',
                    explanation: 'Multiplying both sides of \\( \\frac{x}{5} = 6 \\) by 5 gives \\( x = 30 \\).'
                }
            ],
            finalAnswer: '\\( x = 30 \\)'
        }
    },
    {
        id: 'el3-021',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\log_5 x = \\log_5 36 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power law to the left side.',
                    workingLatex: '\\log_5(x^2) = \\log_5 36',
                    explanation: 'The coefficient 2 becomes the exponent of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate arguments.',
                    workingLatex: 'x^2 = 36',
                    explanation: 'Logs with the same base and equal values have equal arguments.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve, noting \\( x > 0 \\) since you cannot take the log of a negative number.',
                    workingLatex: 'x = 6',
                    explanation: '\\( x = \\pm 6 \\) from the square root, but \\( x > 0 \\) so \\( x = 6 \\).'
                }
            ],
            finalAnswer: '\\( x = 6 \\)'
        }
    },
    {
        id: 'el3-022',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_4 x + \\log_4(x - 3) = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law to combine the left-hand side.',
                    workingLatex: '\\log_4[x(x-3)] = 1',
                    explanation: 'Adding logs with the same base multiplies the arguments.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert the right-hand side: \\( 1 = \\log_4 4 \\).',
                    workingLatex: '\\log_4[x(x-3)] = \\log_4 4',
                    explanation: 'Writing 1 as a log so both sides have the same form.'
                },
                {
                    stepNumber: 3,
                    description: 'Equate the arguments of the logarithms.',
                    workingLatex: 'x(x-3) = 4',
                    explanation: 'Since both sides are \\( \\log_4 \\) of something, the arguments must be equal.'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and rearrange into a quadratic equation.',
                    workingLatex: 'x^2 - 3x - 4 = 0',
                    explanation: 'Expanding \\( x(x-3) = 4 \\) gives \\( x^2 - 3x = 4 \\), then subtract 4 from both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x-4)(x+1) = 0',
                    explanation: 'We need two numbers that multiply to \\( -4 \\) and add to \\( -3 \\): these are \\( -4 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve and reject any invalid solutions.',
                    workingLatex: 'x = 4 \\text{ or } x = -1',
                    explanation: 'Setting each factor to zero gives \\( x = 4 \\) or \\( x = -1 \\). Since \\( \\log_4(-1) \\) is undefined, reject \\( x = -1 \\).'
                }
            ],
            finalAnswer: '\\( x = 4 \\)'
        }
    },
    // TYPE G (Q23–26): Using logs to solve exponential equations
    {
        id: 'el3-023',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = 50 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log_{10}(3^x) = \\log_{10} 50',
                    explanation: 'Taking the same log of both sides preserves the equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to bring \\( x \\) down.',
                    workingLatex: 'x\\log_{10} 3 = \\log_{10} 50',
                    explanation: 'The power law allows us to move the unknown from the exponent.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{\\log_{10} 50}{\\log_{10} 3} \\approx 3.56',
                    explanation: 'Using a calculator: \\( \\frac{1.69897}{0.47712} \\approx 3.56 \\).'
                }
            ],
            finalAnswer: '\\( x \\approx 3.56 \\)'
        }
    },
    {
        id: 'el3-024',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5^{2x} = 80 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log_{10}(5^{2x}) = \\log_{10} 80',
                    explanation: 'Applying the same log operation to each side.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law.',
                    workingLatex: '2x\\log_{10} 5 = \\log_{10} 80',
                    explanation: 'The exponent \\( 2x \\) comes down as a coefficient.'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( x \\) by dividing both sides.',
                    workingLatex: 'x = \\frac{\\log_{10} 80}{2\\log_{10} 5}',
                    explanation: 'Divide both sides by \\( 2\\log_{10} 5 \\) to isolate \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate using a calculator.',
                    workingLatex: 'x = \\frac{1.9031}{1.3979} \\approx 1.36',
                    explanation: 'Computing \\( \\log_{10} 80 \\approx 1.9031 \\) and \\( 2\\log_{10} 5 \\approx 1.3979 \\), then dividing gives \\( x \\approx 1.36 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 1.36 \\)'
        }
    },
    {
        id: 'el3-025',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4^x = 7^{x-1} \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(4^x) = \\log(7^{x-1})',
                    explanation: 'Apply the same log to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each side.',
                    workingLatex: 'x\\log 4 = (x-1)\\log 7',
                    explanation: 'The exponents come down as coefficients.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the right-hand side.',
                    workingLatex: 'x\\log 4 = x\\log 7 - \\log 7',
                    explanation: 'Distributing \\( \\log 7 \\) across the bracket \\( (x - 1) \\) gives two terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect all \\( x \\) terms on one side.',
                    workingLatex: 'x\\log 4 - x\\log 7 = -\\log 7',
                    explanation: 'Subtract \\( x\\log 7 \\) from both sides so that all terms involving \\( x \\) are on the left.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x \\) and isolate it.',
                    workingLatex: 'x(\\log 4 - \\log 7) = -\\log 7 \\Rightarrow x = \\frac{-\\log 7}{\\log 4 - \\log 7}',
                    explanation: 'Factor out \\( x \\) on the left, then divide both sides by \\( (\\log 4 - \\log 7) \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate using a calculator.',
                    workingLatex: 'x = \\frac{\\log 7}{\\log 7 - \\log 4} \\approx \\frac{0.8451}{0.2430} \\approx 3.48',
                    explanation: 'Negating numerator and denominator gives a positive fraction. Computing \\( \\log 7 \\approx 0.8451 \\) and \\( \\log 7 - \\log 4 \\approx 0.2430 \\), so \\( x \\approx 3.48 \\).'
                }
            ],
            finalAnswer: '\\( x \\approx 3.48 \\)'
        }
    },
    {
        id: 'el3-026',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{x+3} = 5^x \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log(2^{x+3}) = \\log(5^x)',
                    explanation: 'Taking logarithms of both sides is valid because \\( \\log \\) is a one-to-one function, so the equation is preserved.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each side.',
                    workingLatex: '(x+3)\\log 2 = x\\log 5',
                    explanation: 'The exponent \\( (x+3) \\) comes down on the left and the exponent \\( x \\) comes down on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x\\log 2 + 3\\log 2 = x\\log 5',
                    explanation: 'Distributing \\( \\log 2 \\) across \\( (x + 3) \\) gives two terms on the left.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect \\( x \\) terms and factorise.',
                    workingLatex: '3\\log 2 = x\\log 5 - x\\log 2 = x(\\log 5 - \\log 2)',
                    explanation: 'Move \\( x\\log 2 \\) to the right and factor out \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Divide to isolate \\( x \\).',
                    workingLatex: 'x = \\frac{3\\log 2}{\\log 5 - \\log 2}',
                    explanation: 'Divide both sides by \\( (\\log 5 - \\log 2) \\). Note that \\( \\log 5 - \\log 2 = \\log\\frac{5}{2} \\) by the quotient law.'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate using a calculator.',
                    workingLatex: 'x = \\frac{3 \\times 0.3010}{0.3979} \\approx \\frac{0.9031}{0.3979} \\approx 2.27',
                    explanation: 'Computing \\( 3\\log 2 \\approx 0.9031 \\) and \\( \\log 5 - \\log 2 \\approx 0.3979 \\), then dividing gives \\( x \\approx 2.27 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.27 \\)'
        }
    },
    // TYPE H (Q27–30): Changing the base / evaluating using the change of base formula
    {
        id: 'el3-027',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'The curve \\( C_1 \\) has equation \\( y = 7^x \\) and the curve \\( C_2 \\) has equation \\( y = 7^{2x} - 12 \\).\n\n(a) By forming and solving a quadratic equation, prove that \\( C_1 \\) and \\( C_2 \\) intersect at exactly one point. State the \\( y \\)-coordinate of this point.\n\n(b) Use logarithms to find the \\( x \\)-coordinate of the point of intersection, giving your answer to 3 significant figures.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set the curves equal.',
                    workingLatex: '7^x = 7^{2x} - 12',
                    explanation: 'At the intersection, the \\( y \\)-values are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( u = 7^x \\).',
                    workingLatex: 'u = u^2 - 12 \\implies u^2 - u - 12 = 0',
                    explanation: 'Since \\( 7^{2x} = (7^x)^2 \\), let \\( u = 7^x \\) to form a quadratic.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(u - 4)(u + 3) = 0 \\implies u = 4 \\text{ or } u = -3',
                    explanation: 'Find two numbers that multiply to \\( -12 \\) and add to \\( -1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Reject the invalid root.',
                    workingLatex: '7^x > 0 \\text{ for all } x, \\text{ so } u = -3 \\text{ is impossible. Hence } u = 4.',
                    explanation: 'An exponential is always positive, so only \\( u = 4 \\) is valid. The \\( y \\)-coordinate is \\( 4 \\).'
                },
                {
                    stepNumber: 5,
                    description: '(b) Solve \\( 7^x = 4 \\) using logarithms.',
                    workingLatex: 'x = \\frac{\\log 4}{\\log 7} = \\frac{0.6021}{0.8451} \\approx 0.712',
                    explanation: 'Take \\( \\log_{10} \\) of both sides and apply the power law. Evaluate to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( y = 4 \\); exactly one intersection \\quad (b) \\( x \\approx 0.712 \\)'
        }
    },
    {
        id: 'el3-028',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\log_6 100 \\) to 3 significant figures, using the change of base formula.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the change of base formula with base 10.',
                    workingLatex: '\\log_6 100 = \\frac{\\log_{10} 100}{\\log_{10} 6}',
                    explanation: 'The change of base formula rewrites the base 6 logarithm using base 10 logs that a calculator can evaluate.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify \\( \\log_{10} 100 \\) and evaluate.',
                    workingLatex: '\\frac{2}{\\log_{10} 6} = \\frac{2}{0.7782} \\approx 2.57',
                    explanation: 'Since \\( 10^2 = 100 \\), we have \\( \\log_{10} 100 = 2 \\). Then \\( \\log_{10} 6 \\approx 0.7782 \\), so dividing gives \\( 2.57 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( \\log_6 100 \\approx 2.57 \\)'
        }
    },
    {
        id: 'el3-029',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\log_2 x = a \\) and \\( \\log_2 y = b \\), express each of the following in terms of \\( a \\) and \\( b \\):\n\n(a) \\( \\log_2(x^2 y^3) \\)\n\n(b) \\( \\log_2\\!\\left(\\dfrac{\\sqrt{x}}{4y}\\right) \\)\n\n(c) \\( \\log_4(xy) \\)',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply product and power laws.',
                    workingLatex: '\\log_2(x^2 y^3) = \\log_2 x^2 + \\log_2 y^3 = 2\\log_2 x + 3\\log_2 y = 2a + 3b',
                    explanation: 'Split the product using the addition law, then bring down the exponents using the power law.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Apply the quotient law.',
                    workingLatex: '\\log_2\\!\\left(\\frac{\\sqrt{x}}{4y}\\right) = \\log_2 \\sqrt{x} - \\log_2(4y)',
                    explanation: 'The quotient law splits a fraction inside a log into a subtraction.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand each part.',
                    workingLatex: '= \\tfrac{1}{2}\\log_2 x - (\\log_2 4 + \\log_2 y) = \\tfrac{1}{2}a - 2 - b',
                    explanation: 'Use the power law on \\( \\sqrt{x} = x^{1/2} \\), the product law on \\( 4y \\), and note that \\( \\log_2 4 = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Change base from 4 to 2.',
                    workingLatex: '\\log_4(xy) = \\frac{\\log_2(xy)}{\\log_2 4} = \\frac{\\log_2 x + \\log_2 y}{2} = \\frac{a + b}{2}',
                    explanation: 'Apply the change of base formula. Since \\( \\log_2 4 = 2 \\), the denominator is \\( 2 \\). The numerator uses the product law.'
                }
            ],
            finalAnswer: '(a) \\( 2a + 3b \\) \\quad (b) \\( \\frac{1}{2}a - b - 2 \\) \\quad (c) \\( \\frac{a+b}{2} \\)'
        }
    },
    {
        id: 'el3-030',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_x 125 = \\dfrac{3}{2} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write in index form.',
                    workingLatex: 'x^{3/2} = 125',
                    explanation: '\\( \\log_x 125 = \\frac{3}{2} \\) means \\( x^{3/2} = 125 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Raise both sides to the power \\( \\frac{2}{3} \\) to isolate \\( x \\).',
                    workingLatex: 'x = 125^{2/3}',
                    explanation: 'The reciprocal power cancels the \\( \\frac{3}{2} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'x = (\\sqrt[3]{125})^2 = 5^2 = 25',
                    explanation: 'Cube root of 125 is 5, and 5² = 25.'
                }
            ],
            finalAnswer: '\\( x = 25 \\)'
        }
    },
    // TYPE I (Q31–35): Exam-style multi-part questions
    {
        id: 'el3-031',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Write \\( \\log_3 6 + \\log_3 7 - \\log_3 14 \\) as a single integer.\n\n (b) Hence, or otherwise, solve \\( \\log_3 6 + \\log_3 7 = \\log_3(2y + 14) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the product law to the first two terms.',
                    workingLatex: '\\log_3 6 + \\log_3 7 = \\log_3(6 \\times 7) = \\log_3 42',
                    explanation: 'The product law states \\( \\log_a x + \\log_a y = \\log_a(xy) \\). Multiplying gives \\( 6 \\times 7 = 42 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\log_3 42 - \\log_3 14 = \\log_3\\!\\left(\\frac{42}{14}\\right) = \\log_3 3',
                    explanation: 'Subtracting logarithms divides the arguments: \\( 42 \\div 14 = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate \\( \\log_3 3 \\).',
                    workingLatex: '\\log_3 3 = 1',
                    explanation: 'Since \\( 3^1 = 3 \\), the logarithm base 3 of 3 equals 1. This completes part (a).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Rewrite the left side using the result from (a).',
                    workingLatex: '\\log_3 42 = \\log_3(2y + 14)',
                    explanation: 'From step 1, \\( \\log_3 6 + \\log_3 7 = \\log_3 42 \\). Substitute this into the equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Equate the arguments.',
                    workingLatex: '2y + 14 = 42',
                    explanation: 'If \\( \\log_3 A = \\log_3 B \\) then \\( A = B \\). So the arguments must be equal.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( y \\).',
                    workingLatex: '2y = 42 - 14 = 28 \\Rightarrow y = 14',
                    explanation: 'Subtract 14 from both sides, then divide by 2.'
                }
            ],
            finalAnswer: '(a) \\( 1 \\) \\quad (b) \\( y = 14 \\)'
        }
    },
    {
        id: 'el3-032',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Show that \\( \\log_a(x^3 y^2) = 3\\log_a x + 2\\log_a y \\).\n\n (b) Given that \\( \\log_5 x = 2 \\) and \\( \\log_5 y = 3 \\), find the value of \\( \\log_5(x^3 y^2) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the product law.',
                    workingLatex: '\\log_a(x^3 y^2) = \\log_a(x^3) + \\log_a(y^2)',
                    explanation: 'The product law states \\( \\log_a(mn) = \\log_a m + \\log_a n \\). The product \\( x^3 y^2 \\) splits into a sum of two logarithms.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each term.',
                    workingLatex: '= 3\\log_a x + 2\\log_a y',
                    explanation: 'The power law \\( \\log_a(m^n) = n\\log_a m \\) brings the exponents 3 and 2 down as coefficients. This completes the proof for part (a).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Write \\( \\log_5(x^3 y^2) \\) using part (a).',
                    workingLatex: '\\log_5(x^3 y^2) = 3\\log_5 x + 2\\log_5 y',
                    explanation: 'Replace base \\( a \\) with 5 in the identity proved in part (a).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute the given values.',
                    workingLatex: '= 3(2) + 2(3)',
                    explanation: 'We are given \\( \\log_5 x = 2 \\) and \\( \\log_5 y = 3 \\). Substitute these into the expression.'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the arithmetic.',
                    workingLatex: '= 6 + 6 = 12',
                    explanation: 'Multiply: \\( 3 \\times 2 = 6 \\) and \\( 2 \\times 3 = 6 \\). Then add to get 12.'
                }
            ],
            finalAnswer: '(b) \\( \\log_5(x^3 y^2) = 12 \\)'
        }
    },
    {
        id: 'el3-033',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2(3x + 5) - \\log_2(x - 1) = 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the left side using the quotient law.',
                    workingLatex: '\\log_2\\!\\left(\\frac{3x+5}{x-1}\\right) = 3',
                    explanation: 'The quotient law \\( \\log_a m - \\log_a n = \\log_a\\frac{m}{n} \\) combines the two logs into one.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert 3 to logarithmic form.',
                    workingLatex: '\\log_2\\!\\left(\\frac{3x+5}{x-1}\\right) = \\log_2 8',
                    explanation: 'Since \\( 2^3 = 8 \\), we can write \\( 3 = \\log_2 8 \\). Now both sides are base-2 logarithms.'
                },
                {
                    stepNumber: 3,
                    description: 'Equate arguments.',
                    workingLatex: '\\frac{3x+5}{x-1} = 8',
                    explanation: 'If \\( \\log_2 A = \\log_2 B \\) then \\( A = B \\). Remove the logarithms to get an algebraic equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve the resulting linear equation.',
                    workingLatex: '3x + 5 = 8(x-1) = 8x - 8 \\Rightarrow 13 = 5x \\Rightarrow x = \\frac{13}{5}',
                    explanation: 'Multiply both sides by \\( (x-1) \\), expand \\( 8(x-1) = 8x - 8 \\), then collect \\( x \\) terms and divide.'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity: \\( x - 1 = \\frac{8}{5} > 0 \\) \\checkmark',
                    workingLatex: 'x = \\frac{13}{5} = 2.6',
                    explanation: 'Both logarithm arguments must be positive. Both are satisfied.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{13}{5} \\)'
        }
    },
    {
        id: 'el3-034',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: 'The population \\( P \\) of a city after \\( t \\) years satisfies \\( P = 500\\,000 \\times 1.03^t \\).\n\n (a) Find the population when \\( t = 0 \\).\n\n (b) Find the value of \\( t \\) when the population first exceeds \\( 700\\,000 \\). Give your answer to 3 significant figures.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'P = 500\\,000 \\times 1.03^0 = 500\\,000 \\times 1 = 500\\,000',
                    explanation: 'Any number raised to the power 0 is 1.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set up the equation with \\( P = 700\\,000 \\).',
                    workingLatex: '500\\,000 \\times 1.03^t = 700\\,000',
                    explanation: 'Substitute the target population into the model to find the corresponding time \\( t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate the exponential term.',
                    workingLatex: '1.03^t = \\frac{700\\,000}{500\\,000} = 1.4',
                    explanation: 'Divide both sides by 500 000 to isolate \\( 1.03^t \\). The fraction simplifies to 1.4.'
                },
                {
                    stepNumber: 4,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: 't\\log_{10}(1.03) = \\log_{10}(1.4)',
                    explanation: 'Apply the power law to move \\( t \\) from the exponent.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\log_{10}(1.4)}{\\log_{10}(1.03)} \\approx \\frac{0.14613}{0.01284} \\approx 11.4',
                    explanation: 'Divide both sides by \\( \\log_{10}(1.03) \\). The population first exceeds 700 000 after approximately 11.4 years.'
                }
            ],
            finalAnswer: '(a) \\( 500\\,000 \\) \\quad (b) \\( t \\approx 11.4 \\) years'
        }
    },
    {
        id: 'el3-035',
        topicRef: 'el3',
        topicTitle: 'Laws of Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Given that \\( y = \\log_3(x^2 + 5x) - \\log_3(x) \\), express \\( y \\) as a single logarithm.\n\n (b) Find the value of \\( x \\) when \\( y = 2 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the quotient law.',
                    workingLatex: 'y = \\log_3\\!\\left(\\frac{x^2+5x}{x}\\right)',
                    explanation: 'The quotient law states \\( \\log_a m - \\log_a n = \\log_a\\frac{m}{n} \\). Combine into a single logarithm.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the numerator.',
                    workingLatex: 'y = \\log_3\\!\\left(\\frac{x(x+5)}{x}\\right)',
                    explanation: 'Factor out \\( x \\) from \\( x^2 + 5x \\) to get \\( x(x+5) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel the common factor.',
                    workingLatex: 'y = \\log_3(x+5)',
                    explanation: 'Cancel the \\( x \\) in the numerator and denominator. This is valid provided \\( x > 0 \\), which is required for \\( \\log_3(x) \\) to be defined.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( y = 2 \\).',
                    workingLatex: '\\log_3(x+5) = 2',
                    explanation: 'Replace \\( y \\) with 2 in the simplified expression from part (a).'
                },
                {
                    stepNumber: 5,
                    description: 'Convert to index form.',
                    workingLatex: 'x + 5 = 3^2 = 9',
                    explanation: 'Using \\( \\log_3(x+5) = 2 \\Leftrightarrow x + 5 = 3^2 \\). Evaluate \\( 3^2 = 9 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 9 - 5 = 4',
                    explanation: 'Subtract 5 from both sides to find \\( x = 4 \\).'
                }
            ],
            finalAnswer: '(a) \\( y = \\log_3(x+5) \\) \\quad (b) \\( x = 4 \\)'
        }
    },

    // ─── Q36–70: Additional Laws of Logarithms ──────────────────────

    {
        id: 'el3-036', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_2(x^2) = \\log_2(5x - 6) \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'State the condition for equating arguments.', workingLatex: '\\log_2(x^2) = \\log_2(5x-6) \\implies x^2 = 5x - 6', explanation: 'Since \\( \\log_b f(x) = \\log_b g(x) \\implies f(x) = g(x) \\) when both arguments are positive, we equate the arguments.' },
            { stepNumber: 2, description: 'Rearrange into standard quadratic form.', workingLatex: 'x^2 - 5x + 6 = 0', explanation: 'Subtract \\( 5x - 6 \\) from both sides to obtain a quadratic equation equal to zero.' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(x - 2)(x - 3) = 0', explanation: 'We need two numbers that multiply to \\( 6 \\) and add to \\( -5 \\). These are \\( -2 \\) and \\( -3 \\).' },
            { stepNumber: 4, description: 'Solve for \\( x \\).', workingLatex: 'x = 2 \\quad \\text{or} \\quad x = 3', explanation: 'Set each factor equal to zero to find the two candidate solutions.' },
            { stepNumber: 5, description: 'Check validity of both solutions.', workingLatex: 'x = 2: \\; x^2 = 4 > 0,\\; 5(2)-6 = 4 > 0 \\;\\checkmark \\qquad x = 3: \\; x^2 = 9 > 0,\\; 5(3)-6 = 9 > 0 \\;\\checkmark', explanation: 'Both arguments of the logarithms must be positive. Both \\( x = 2 \\) and \\( x = 3 \\) satisfy this requirement, so both are valid solutions.' }
        ], finalAnswer: '\\( x = 2 \\) or \\( x = 3 \\)' }
    },
    {
        id: 'el3-037', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'Show that \\( \\log_{a^2} x = \\frac{1}{2}\\log_a x \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the change of base formula to the left-hand side.', workingLatex: '\\log_{a^2} x = \\frac{\\log_a x}{\\log_a a^2}', explanation: 'The change of base formula states \\( \\log_b c = \\frac{\\log_a c}{\\log_a b} \\). Apply this with base \\( a \\).' },
            { stepNumber: 2, description: 'Simplify the denominator using the power law.', workingLatex: '\\log_a a^2 = 2\\log_a a', explanation: 'Apply the power law \\( \\log_a a^n = n\\log_a a \\) to bring the exponent down as a coefficient.' },
            { stepNumber: 3, description: 'Use the identity \\( \\log_a a = 1 \\).', workingLatex: '2\\log_a a = 2 \\times 1 = 2', explanation: 'Since \\( \\log_a a = 1 \\) for any valid base \\( a \\), the denominator simplifies to \\( 2 \\).' },
            { stepNumber: 4, description: 'Write the final result.', workingLatex: '\\log_{a^2} x = \\frac{\\log_a x}{2} = \\frac{1}{2}\\log_a x \\quad \\square', explanation: 'Substituting the simplified denominator completes the proof: \\( \\log_{a^2} x = \\frac{1}{2}\\log_a x \\) as required.' }
        ], finalAnswer: '\\( \\log_{a^2} x = \\frac{1}{2}\\log_a x \\) (shown)' }
    },
    {
        id: 'el3-038', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'Solve \\( \\log(x + 2) + \\log(x - 1) = 1 \\), where \\( \\log \\) denotes \\( \\log_{10} \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine the two logarithms using the product law.', workingLatex: '\\log\\bigl((x+2)(x-1)\\bigr) = 1', explanation: 'The product law states \\( \\log a + \\log b = \\log(ab) \\). Combine the left-hand side into a single logarithm.' },
            { stepNumber: 2, description: 'Rewrite in exponential form.', workingLatex: '(x+2)(x-1) = 10^1 = 10', explanation: 'Since \\( \\log_{10} y = 1 \\) means \\( y = 10 \\), the argument of the logarithm equals \\( 10 \\).' },
            { stepNumber: 3, description: 'Expand and rearrange into a quadratic.', workingLatex: 'x^2 + x - 2 = 10 \\implies x^2 + x - 12 = 0', explanation: 'Expand \\( (x+2)(x-1) = x^2 + x - 2 \\), then subtract \\( 10 \\) from both sides.' },
            { stepNumber: 4, description: 'Factorise the quadratic.', workingLatex: '(x+4)(x-3) = 0 \\implies x = -4 \\;\\text{ or }\\; x = 3', explanation: 'Find two numbers that multiply to \\( -12 \\) and add to \\( 1 \\). These are \\( 4 \\) and \\( -3 \\).' },
            { stepNumber: 5, description: 'Check validity of each solution.', workingLatex: 'x = -4:\\; x-1 = -5 < 0 \\;\\text{(invalid)} \\qquad x = 3:\\; x+2 = 5 > 0,\\; x-1 = 2 > 0 \\;\\checkmark', explanation: 'Both \\( x + 2 \\) and \\( x - 1 \\) must be positive. When \\( x = -4 \\), \\( x - 1 = -5 < 0 \\), so reject \\( x = -4 \\). Only \\( x = 3 \\) is valid.' }
        ], finalAnswer: '\\( x = 3 \\)' }
    },
    {
        id: 'el3-039', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'Given that \\( \\log_2 3 = k \\), express \\( \\log_8 9 \\) in terms of \\( k \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the change of base formula.', workingLatex: '\\log_8 9 = \\frac{\\log_2 9}{\\log_2 8}', explanation: 'Use the change of base formula \\( \\log_b c = \\frac{\\log_a c}{\\log_a b} \\) to convert to base \\( 2 \\).' },
            { stepNumber: 2, description: 'Simplify the denominator.', workingLatex: '\\log_2 8 = \\log_2 2^3 = 3', explanation: 'Since \\( 8 = 2^3 \\), we have \\( \\log_2 2^3 = 3 \\).' },
            { stepNumber: 3, description: 'Simplify the numerator using the power law.', workingLatex: '\\log_2 9 = \\log_2 3^2 = 2\\log_2 3 = 2k', explanation: 'Write \\( 9 = 3^2 \\), then apply the power law \\( \\log_a x^n = n\\log_a x \\) and substitute \\( \\log_2 3 = k \\).' },
            { stepNumber: 4, description: 'Combine the results.', workingLatex: '\\log_8 9 = \\frac{2k}{3}', explanation: 'Divide the simplified numerator by the simplified denominator to obtain the final answer.' }
        ], finalAnswer: '\\( \\dfrac{2k}{3} \\)' }
    },
    {
        id: 'el3-040', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'Solve \\( \\ln x + \\ln(2x - 1) = \\ln(5x + 3) \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine the left-hand side using the product law.', workingLatex: '\\ln\\bigl(x(2x-1)\\bigr) = \\ln(5x+3)', explanation: 'Apply the product law \\( \\ln a + \\ln b = \\ln(ab) \\) to combine the two logarithms on the left.' },
            { stepNumber: 2, description: 'Equate the arguments.', workingLatex: 'x(2x-1) = 5x + 3', explanation: 'Since \\( \\ln f(x) = \\ln g(x) \\implies f(x) = g(x) \\) when both arguments are positive, we equate them.' },
            { stepNumber: 3, description: 'Expand and rearrange into a quadratic.', workingLatex: '2x^2 - x = 5x + 3 \\implies 2x^2 - 6x - 3 = 0', explanation: 'Expand the left-hand side and collect all terms on one side to form a quadratic equation.' },
            { stepNumber: 4, description: 'Solve using the quadratic formula.', workingLatex: 'x = \\frac{6 \\pm \\sqrt{36 + 24}}{4} = \\frac{6 \\pm \\sqrt{60}}{4} = \\frac{6 \\pm 2\\sqrt{15}}{4} = \\frac{3 \\pm \\sqrt{15}}{2}', explanation: 'Apply the quadratic formula with \\( a = 2 \\), \\( b = -6 \\), \\( c = -3 \\). Simplify \\( \\sqrt{60} = 2\\sqrt{15} \\) and cancel the common factor.' },
            { stepNumber: 5, description: 'Check validity of each solution.', workingLatex: '\\frac{3 - \\sqrt{15}}{2} \\approx \\frac{3 - 3.873}{2} \\approx -0.44 < 0 \\;\\text{(invalid)} \\qquad \\frac{3 + \\sqrt{15}}{2} \\approx 3.44 > 0 \\;\\checkmark', explanation: 'We need \\( x > 0 \\), \\( 2x - 1 > 0 \\), and \\( 5x + 3 > 0 \\). The negative root fails \\( x > 0 \\), so it is rejected. Only \\( x = \\frac{3 + \\sqrt{15}}{2} \\) is valid.' }
        ], finalAnswer: '\\( x = \\dfrac{3 + \\sqrt{15}}{2} \\)' }
    },
    {
        id: 'el3-041', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'It is given that \\( \\log_{10} x = p \\) and \\( \\log_{10} y = q \\).\n\n(a) Express \\( \\log_{10}\\!\\left(\\dfrac{100x^3}{\\sqrt{y}}\\right) \\) in terms of \\( p \\) and \\( q \\).\n\n(b) Given further that \\( p = 2 \\) and \\( q = 3 \\), find the value of this expression.\n\n(c) Express \\( x \\) in terms of \\( y \\) given that \\( 2p = q + 1 \\).',
        marks: 9, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Expand using log laws.', workingLatex: '\\log_{10}\\!\\left(\\frac{100x^3}{\\sqrt{y}}\\right) = \\log_{10} 100 + \\log_{10} x^3 - \\log_{10} y^{1/2}', explanation: 'Apply the product and quotient laws to split the expression into three separate terms.' },
            { stepNumber: 2, description: 'Simplify each term.', workingLatex: '= 2 + 3p - \\tfrac{1}{2}q', explanation: 'Since \\( \\log_{10} 100 = 2 \\), the power law gives \\( 3p \\) and \\( \\frac{1}{2}q \\).' },
            { stepNumber: 3, description: '(b) Substitute \\( p = 2 \\), \\( q = 3 \\).', workingLatex: '2 + 3(2) - \\tfrac{1}{2}(3) = 2 + 6 - 1.5 = 6.5', explanation: 'Direct substitution and arithmetic.' },
            { stepNumber: 4, description: '(c) Use the condition \\( 2p = q + 1 \\).', workingLatex: '2\\log_{10} x = \\log_{10} y + 1 \\implies \\log_{10} x^2 = \\log_{10} y + \\log_{10} 10', explanation: 'Substitute \\( p = \\log_{10} x \\) and \\( q = \\log_{10} y \\), and write \\( 1 = \\log_{10} 10 \\).' },
            { stepNumber: 5, description: 'Combine and solve for \\( x \\).', workingLatex: '\\log_{10} x^2 = \\log_{10}(10y) \\implies x^2 = 10y \\implies x = \\sqrt{10y}', explanation: 'Equate the arguments, then take the positive square root (since \\( x > 0 \\) for \\( \\log_{10} x \\) to be defined).' }
        ], finalAnswer: '(a) \\( 2 + 3p - \\frac{1}{2}q \\) \\quad (b) \\( 6.5 \\) \\quad (c) \\( x = \\sqrt{10y} \\)' }
    },
    {
        id: 'el3-042', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Express \\( \\log\\frac{x^3}{y^2} \\) in terms of \\( \\log x \\) and \\( \\log y \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the quotient rule.', workingLatex: '\\log\\frac{x^3}{y^2} = \\log x^3 - \\log y^2', explanation: 'The quotient law splits a log of a fraction into a subtraction of two logarithms.' },
            { stepNumber: 2, description: 'Apply the power rule to each term.', workingLatex: '\\log x^3 - \\log y^2 = 3\\log x - 2\\log y', explanation: 'Bring each exponent down as a coefficient using the power law \\( \\log a^n = n\\log a \\).' }
        ], finalAnswer: '\\( 3\\log x - 2\\log y \\)' }
    },
    {
        id: 'el3-043', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations:\n\n\\( \\log_2 x + \\log_2 y = 5 \\)\n\n\\( \\log_2 x - \\log_2 y = 1 \\)',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the two equations.', workingLatex: '2\\log_2 x = 6 \\implies \\log_2 x = 3', explanation: 'Adding eliminates the \\( \\log_2 y \\) terms, leaving a single equation in \\( \\log_2 x \\).' },
            { stepNumber: 2, description: 'Solve for \\( x \\).', workingLatex: 'x = 2^3 = 8', explanation: 'Convert from logarithmic to exponential form.' },
            { stepNumber: 3, description: 'Subtract the equations.', workingLatex: '2\\log_2 y = 4 \\implies \\log_2 y = 2', explanation: 'Subtracting the second equation from the first eliminates \\( \\log_2 x \\).' },
            { stepNumber: 4, description: 'Solve for \\( y \\).', workingLatex: 'y = 2^2 = 4', explanation: 'Convert from logarithmic to exponential form.' },
            { stepNumber: 5, description: 'Verify the solution.', workingLatex: '\\log_2 8 + \\log_2 4 = 3 + 2 = 5 \\;\\checkmark \\qquad \\log_2 8 - \\log_2 4 = 3 - 2 = 1 \\;\\checkmark', explanation: 'Both original equations are satisfied, confirming the solution.' }
        ], finalAnswer: '\\( x = 8 \\), \\( y = 4 \\)' }
    },
    {
        id: 'el3-044', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Given \\( \\log 2 = 0.301 \\) and \\( \\log 3 = 0.477 \\), find \\( \\log 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express 12 as a product of primes', workingLatex: '12 = 4 \\times 3 = 2^2 \\times 3', explanation: 'Break \\( 12 \\) into prime factors so we can use the given values of \\( \\log 2 \\) and \\( \\log 3 \\).' },
            { stepNumber: 2, description: 'Apply the product and power rules', workingLatex: '\\log 12 = \\log(2^2 \\times 3) = 2\\log 2 + \\log 3', explanation: 'Using \\( \\log(ab) = \\log a + \\log b \\) and \\( \\log a^n = n\\log a \\).' },
            { stepNumber: 3, description: 'Substitute the given values', workingLatex: '2(0.301) + 0.477 = 0.602 + 0.477 = 1.079', explanation: 'Substitute \\( \\log 2 = 0.301 \\) and \\( \\log 3 = 0.477 \\) and evaluate.' }
        ], finalAnswer: '\\( 1.079 \\)' }
    },
    {
        id: 'el3-045', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Given \\( \\log 2 = 0.301 \\) and \\( \\log 3 = 0.477 \\), find \\( \\log 1.5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Express 1.5 as a fraction', workingLatex: '1.5 = \\frac{3}{2}', explanation: 'Write \\( 1.5 \\) as \\( \\frac{3}{2} \\) so we can use the given log values.' },
            { stepNumber: 2, description: 'Apply the quotient rule', workingLatex: '\\log 1.5 = \\log\\frac{3}{2} = \\log 3 - \\log 2', explanation: 'The quotient rule states \\( \\log\\frac{a}{b} = \\log a - \\log b \\).' },
            { stepNumber: 3, description: 'Substitute and evaluate', workingLatex: '\\log 3 - \\log 2 = 0.477 - 0.301 = 0.176', explanation: 'Substitute the given values and compute the difference.' }
        ], finalAnswer: '\\( 0.176 \\)' }
    },
    {
        id: 'el3-046', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log x + \\log(x + 3) = 1 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine using the product rule', workingLatex: '\\log x + \\log(x+3) = \\log[x(x+3)]', explanation: 'The product rule states \\( \\log a + \\log b = \\log(ab) \\).' },
            { stepNumber: 2, description: 'Convert to exponential form', workingLatex: '\\log[x(x+3)] = 1 \\implies x(x+3) = 10', explanation: 'Since \\( \\log_{10} y = 1 \\) means \\( y = 10 \\), we remove the logarithm.' },
            { stepNumber: 3, description: 'Expand and rearrange', workingLatex: 'x^2 + 3x - 10 = 0', explanation: 'Expand \\( x(x+3) = 10 \\) and move all terms to one side.' },
            { stepNumber: 4, description: 'Factorise the quadratic', workingLatex: '(x+5)(x-2) = 0 \\implies x = -5 \\text{ or } x = 2', explanation: 'Find two numbers that multiply to \\( -10 \\) and add to \\( 3 \\): these are \\( 5 \\) and \\( -2 \\).' },
            { stepNumber: 5, description: 'Reject the invalid solution', workingLatex: 'x = 2', explanation: 'We need \\( x > 0 \\) for \\( \\log x \\) to be defined, so reject \\( x = -5 \\).' }
        ], finalAnswer: '\\( x = 2 \\)' }
    },
    {
        id: 'el3-047', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x - \\log_2(x - 3) = 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the quotient rule', workingLatex: '\\log_2 x - \\log_2(x-3) = \\log_2\\frac{x}{x-3}', explanation: 'The quotient rule states \\( \\log_a m - \\log_a n = \\log_a\\frac{m}{n} \\).' },
            { stepNumber: 2, description: 'Convert to exponential form', workingLatex: '\\log_2\\frac{x}{x-3} = 2 \\implies \\frac{x}{x-3} = 2^2 = 4', explanation: 'Since \\( \\log_2 y = 2 \\) means \\( y = 4 \\), we remove the logarithm.' },
            { stepNumber: 3, description: 'Multiply both sides by \\( (x-3) \\)', workingLatex: 'x = 4(x-3) = 4x - 12', explanation: 'Clear the fraction by multiplying both sides by \\( x - 3 \\).' },
            { stepNumber: 4, description: 'Solve the linear equation', workingLatex: 'x - 4x = -12 \\implies -3x = -12 \\implies x = 4', explanation: 'Rearrange and divide by \\( -3 \\). Check: \\( x - 3 = 1 > 0 \\), so the log argument is valid.' }
        ], finalAnswer: '\\( x = 4 \\)' }
    },
    {
        id: 'el3-048', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Write \\( \\ln a + 2\\ln b - 3\\ln c \\) as a single logarithm.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule to each term', workingLatex: '\\ln a + \\ln b^2 - \\ln c^3', explanation: 'Use \\( n\\ln x = \\ln x^n \\) to bring the coefficients inside as powers.' },
            { stepNumber: 2, description: 'Combine using product and quotient rules', workingLatex: '\\ln\\frac{ab^2}{c^3}', explanation: 'Adding logs multiplies arguments; subtracting logs divides them.' }
        ], finalAnswer: '\\( \\ln\\frac{ab^2}{c^3} \\)' }
    },
    {
        id: 'el3-049', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Show that \\( \\log_a b = \\frac{1}{\\log_b a} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply change of base to \\( \\log_a b \\)', workingLatex: '\\log_a b = \\frac{\\ln b}{\\ln a}', explanation: 'The change of base formula gives \\( \\log_a b = \\frac{\\ln b}{\\ln a} \\).' },
            { stepNumber: 2, description: 'Apply change of base to \\( \\log_b a \\)', workingLatex: '\\log_b a = \\frac{\\ln a}{\\ln b}', explanation: 'Similarly, \\( \\log_b a = \\frac{\\ln a}{\\ln b} \\).' },
            { stepNumber: 3, description: 'Take the reciprocal and compare', workingLatex: '\\frac{1}{\\log_b a} = \\frac{1}{\\frac{\\ln a}{\\ln b}} = \\frac{\\ln b}{\\ln a} = \\log_a b \\quad \\checkmark', explanation: 'The reciprocal of \\( \\frac{\\ln a}{\\ln b} \\) is \\( \\frac{\\ln b}{\\ln a} \\), which equals \\( \\log_a b \\). Hence shown.' }
        ], finalAnswer: '\\( \\text{Shown} \\)' }
    },
    {
        id: 'el3-050', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\ln x = \\ln(x + 6) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule to the LHS', workingLatex: '2\\ln x = \\ln x^2', explanation: 'Use \\( n\\ln x = \\ln x^n \\) to rewrite the left-hand side.' },
            { stepNumber: 2, description: 'Equate the arguments', workingLatex: '\\ln x^2 = \\ln(x+6) \\implies x^2 = x + 6', explanation: 'If \\( \\ln A = \\ln B \\) then \\( A = B \\), since \\( \\ln \\) is a one-to-one function.' },
            { stepNumber: 3, description: 'Rearrange into a quadratic', workingLatex: 'x^2 - x - 6 = 0', explanation: 'Move all terms to one side to form a standard quadratic equation.' },
            { stepNumber: 4, description: 'Factorise and solve', workingLatex: '(x-3)(x+2) = 0 \\implies x = 3 \\text{ or } x = -2', explanation: 'Find two numbers that multiply to \\( -6 \\) and add to \\( -1 \\): these are \\( -3 \\) and \\( 2 \\).' },
            { stepNumber: 5, description: 'Reject the invalid solution', workingLatex: 'x = 3', explanation: 'We need \\( x > 0 \\) for \\( \\ln x \\) to be defined, so reject \\( x = -2 \\).' }
        ], finalAnswer: '\\( x = 3 \\)' }
    },
    {
        id: 'el3-051', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\frac{\\log 8}{\\log 2} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite \\( \\log 8 \\) using the power rule', workingLatex: '\\log 8 = \\log 2^3 = 3\\log 2', explanation: 'Since \\( 8 = 2^3 \\), we can write \\( \\log 8 = 3\\log 2 \\).' },
            { stepNumber: 2, description: 'Cancel \\( \\log 2 \\)', workingLatex: '\\frac{3\\log 2}{\\log 2} = 3', explanation: 'The \\( \\log 2 \\) factors cancel. Alternatively, recognise this as \\( \\log_2 8 = 3 \\) by the change of base formula.' }
        ], finalAnswer: '\\( 3 \\)' }
    },
    {
        id: 'el3-052', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\log_2 8 + \\log_2 4 - \\log_2 16 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate each logarithm', workingLatex: '\\log_2 8 = 3, \\quad \\log_2 4 = 2, \\quad \\log_2 16 = 4', explanation: 'Since \\( 2^3 = 8 \\), \\( 2^2 = 4 \\), and \\( 2^4 = 16 \\).' },
            { stepNumber: 2, description: 'Compute the result', workingLatex: '3 + 2 - 4 = 1', explanation: 'Substitute and simplify. Alternatively, combine first: \\( \\log_2\\frac{8 \\times 4}{16} = \\log_2 2 = 1 \\).' }
        ], finalAnswer: '\\( 1 \\)' }
    },
    {
        id: 'el3-053', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Express \\( \\log(x^2 - 1) - \\log(x + 1) \\) as a single simplified logarithm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the quotient rule', workingLatex: '\\log(x^2 - 1) - \\log(x+1) = \\log\\frac{x^2 - 1}{x+1}', explanation: 'The quotient rule states \\( \\log A - \\log B = \\log\\frac{A}{B} \\).' },
            { stepNumber: 2, description: 'Factorise the numerator', workingLatex: '\\log\\frac{(x-1)(x+1)}{x+1}', explanation: 'Recognise \\( x^2 - 1 \\) as a difference of two squares: \\( (x-1)(x+1) \\).' },
            { stepNumber: 3, description: 'Cancel the common factor', workingLatex: '\\log(x-1)', explanation: 'The \\( (x+1) \\) factors cancel, provided \\( x \\neq -1 \\), leaving \\( \\log(x-1) \\).' }
        ], finalAnswer: '\\( \\log(x - 1) \\)' }
    },
    {
        id: 'el3-054', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3(2x + 1) = 3 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert to exponential form', workingLatex: '2x + 1 = 3^3 = 27', explanation: 'If \\( \\log_3 y = 3 \\) then \\( y = 3^3 = 27 \\).' },
            { stepNumber: 2, description: 'Solve for \\( x \\)', workingLatex: '2x = 27 - 1 = 26', explanation: 'Subtract 1 from both sides to isolate the term containing \\( x \\).' },
            { stepNumber: 3, description: 'Divide by 2', workingLatex: 'x = \\frac{26}{2} = 13', explanation: 'Divide both sides by 2. Check: \\( 2(13) + 1 = 27 = 3^3 \\), confirming the answer.' }
        ], finalAnswer: '\\( x = 13 \\)' }
    },
    {
        id: 'el3-055', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_5(x^2) = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert to exponential form', workingLatex: 'x^2 = 5^4 = 625', explanation: 'If \\( \\log_5(x^2) = 4 \\) then \\( x^2 = 5^4 = 625 \\).' },
            { stepNumber: 2, description: 'Take the square root', workingLatex: 'x = \\pm\\sqrt{625} = \\pm 25', explanation: 'Remember to include both the positive and negative square roots.' },
            { stepNumber: 3, description: 'Check both solutions are valid', workingLatex: 'x = 25 \\text{ or } x = -25', explanation: 'Both are valid because the argument of the log is \\( x^2 \\), which is positive for both values.' }
        ], finalAnswer: '\\( x = 25 \\) or \\( x = -25 \\)' }
    },
    {
        id: 'el3-056', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Show that \\( \\log_a x^n = n\\log_a x \\) using the definition of logarithm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let \\( \\log_a x = k \\)', workingLatex: '\\log_a x = k \\implies a^k = x', explanation: 'By definition, if \\( \\log_a x = k \\) then \\( a^k = x \\).' },
            { stepNumber: 2, description: 'Raise both sides to the power \\( n \\)', workingLatex: 'x^n = (a^k)^n = a^{kn}', explanation: 'Using the index law \\( (a^k)^n = a^{kn} \\), we express \\( x^n \\) as a power of \\( a \\).' },
            { stepNumber: 3, description: 'Take \\( \\log_a \\) of both sides', workingLatex: '\\log_a x^n = kn = n \\cdot k = n\\log_a x \\quad \\checkmark', explanation: 'Since \\( x^n = a^{kn} \\), we have \\( \\log_a x^n = kn \\). Substituting \\( k = \\log_a x \\) gives the result.' }
        ], finalAnswer: '\\( \\text{Shown} \\)' }
    },
    {
        id: 'el3-057', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2 x + \\log_2(x + 2) = 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine logs using the addition law', workingLatex: '\\log_2[x(x+2)] = 3', explanation: 'Using \\( \\log_a m + \\log_a n = \\log_a(mn) \\), combine the two logarithms into one.' },
            { stepNumber: 2, description: 'Convert to exponential form', workingLatex: 'x(x+2) = 2^3 = 8', explanation: 'If \\( \\log_2 A = 3 \\) then \\( A = 8 \\). Expand to get \\( x^2 + 2x = 8 \\).' },
            { stepNumber: 3, description: 'Rearrange into a quadratic equation', workingLatex: 'x^2 + 2x - 8 = 0', explanation: 'Subtract 8 from both sides to set the equation equal to zero.' },
            { stepNumber: 4, description: 'Factorise and reject the invalid root', workingLatex: '(x+4)(x-2) = 0 \\implies x = -4 \\text{ or } x = 2', explanation: 'Reject \\( x = -4 \\) because the argument of a logarithm must be positive. Therefore \\( x = 2 \\).' }
        ], finalAnswer: '\\( x = 2 \\)' }
    },
    {
        id: 'el3-058', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Given \\( \\log_a 2 = p \\) and \\( \\log_a 5 = q \\), express \\( \\log_a 20 \\) in terms of \\( p \\) and \\( q \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 20 as a product of prime factors', workingLatex: '20 = 4 \\times 5 = 2^2 \\times 5', explanation: 'Express 20 in terms of 2 and 5, since we know \\( \\log_a 2 \\) and \\( \\log_a 5 \\).' },
            { stepNumber: 2, description: 'Apply the product and power laws', workingLatex: '\\log_a 20 = \\log_a(2^2 \\times 5) = 2\\log_a 2 + \\log_a 5', explanation: 'Use \\( \\log_a(mn) = \\log_a m + \\log_a n \\) and \\( \\log_a m^k = k\\log_a m \\).' },
            { stepNumber: 3, description: 'Substitute \\( p \\) and \\( q \\)', workingLatex: '2p + q', explanation: 'Replace \\( \\log_a 2 \\) with \\( p \\) and \\( \\log_a 5 \\) with \\( q \\).' }
        ], finalAnswer: '\\( 2p + q \\)' }
    },
    {
        id: 'el3-059', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log(x + 1) - \\log x = \\log 3 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the subtraction law on the LHS', workingLatex: '\\log\\frac{x+1}{x} = \\log 3', explanation: 'Using \\( \\log m - \\log n = \\log\\frac{m}{n} \\), combine the left-hand side into a single logarithm.' },
            { stepNumber: 2, description: 'Equate the arguments of the logarithms', workingLatex: '\\frac{x+1}{x} = 3', explanation: 'Since the logs are equal, the arguments must be equal.' },
            { stepNumber: 3, description: 'Solve the resulting linear equation', workingLatex: 'x + 1 = 3x \\implies 1 = 2x \\implies x = \\frac{1}{2}', explanation: 'Multiply both sides by \\( x \\), then rearrange. Check: \\( x = \\frac{1}{2} > 0 \\), so the solution is valid.' }
        ], finalAnswer: '\\( x = \\frac{1}{2} \\)' }
    },
    {
        id: 'el3-060', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Simplify \\( \\log_3 27 + \\log_3 9 - \\log_3 3 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Evaluate each logarithm individually', workingLatex: '\\log_3 27 = 3, \\quad \\log_3 9 = 2, \\quad \\log_3 3 = 1', explanation: 'Since \\( 3^3 = 27 \\), \\( 3^2 = 9 \\), and \\( 3^1 = 3 \\).' },
            { stepNumber: 2, description: 'Combine the results', workingLatex: '3 + 2 - 1 = 4', explanation: 'Add and subtract the values to obtain the final answer.' }
        ], finalAnswer: '\\( 4 \\)' }
    },
    {
        id: 'el3-061', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'If \\( \\ln a = 2 \\) and \\( \\ln b = 5 \\), find \\( \\ln(a^2 b) \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power and product laws', workingLatex: '\\ln(a^2 b) = 2\\ln a + \\ln b', explanation: 'Using \\( \\ln(mn) = \\ln m + \\ln n \\) and \\( \\ln m^k = k\\ln m \\).' },
            { stepNumber: 2, description: 'Substitute the given values', workingLatex: '2(2) + 5 = 4 + 5 = 9', explanation: 'Replace \\( \\ln a = 2 \\) and \\( \\ln b = 5 \\) and evaluate.' }
        ], finalAnswer: '\\( 9 \\)' }
    },
    {
        id: 'el3-062', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{x+3} = 5^{x-1} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take natural logarithms of both sides', workingLatex: '(x+3)\\ln 2 = (x-1)\\ln 5', explanation: 'Apply \\( \\ln \\) to both sides and use the power rule \\( \\ln a^n = n\\ln a \\).' },
            { stepNumber: 2, description: 'Expand both sides', workingLatex: 'x\\ln 2 + 3\\ln 2 = x\\ln 5 - \\ln 5', explanation: 'Distribute the brackets on each side.' },
            { stepNumber: 3, description: 'Collect \\( x \\) terms on one side', workingLatex: 'x\\ln 2 - x\\ln 5 = -\\ln 5 - 3\\ln 2', explanation: 'Move all terms containing \\( x \\) to the left and constant terms to the right.' },
            { stepNumber: 4, description: 'Factorise and solve for \\( x \\)', workingLatex: 'x(\\ln 2 - \\ln 5) = -(\\ln 5 + 3\\ln 2) \\implies x = \\frac{\\ln 5 + 3\\ln 2}{\\ln 5 - \\ln 2} = \\frac{3.688...}{0.916...} = 4.03', explanation: 'Divide both sides by \\( (\\ln 2 - \\ln 5) \\), noting the sign change. Evaluate to 3 significant figures.' }
        ], finalAnswer: '\\( x = 4.03 \\)' }
    },
    {
        id: 'el3-063', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Prove that \\( \\log_a b \\times \\log_b c = \\log_a c \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the change of base formula to each log', workingLatex: '\\log_a b = \\frac{\\ln b}{\\ln a}, \\quad \\log_b c = \\frac{\\ln c}{\\ln b}', explanation: 'The change of base formula states \\( \\log_a b = \\frac{\\ln b}{\\ln a} \\).' },
            { stepNumber: 2, description: 'Multiply the two fractions', workingLatex: '\\frac{\\ln b}{\\ln a} \\times \\frac{\\ln c}{\\ln b} = \\frac{\\ln c}{\\ln a}', explanation: 'The \\( \\ln b \\) in the numerator and denominator cancel.' },
            { stepNumber: 3, description: 'Recognise the result as \\( \\log_a c \\)', workingLatex: '\\frac{\\ln c}{\\ln a} = \\log_a c', explanation: 'By the change of base formula in reverse, this equals \\( \\log_a c \\) as required.' }
        ], finalAnswer: '\\( \\text{Proven} \\)' }
    },
    {
        id: 'el3-064', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Express \\( \\log\\left(\\frac{100x^3}{y}\\right) \\) in terms of \\( \\log x \\) and \\( \\log y \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the quotient and product laws', workingLatex: '\\log\\left(\\frac{100x^3}{y}\\right) = \\log 100 + \\log x^3 - \\log y', explanation: 'Use \\( \\log\\frac{m}{n} = \\log m - \\log n \\) and \\( \\log(mn) = \\log m + \\log n \\).' },
            { stepNumber: 2, description: 'Apply the power rule and evaluate \\( \\log 100 \\)', workingLatex: '\\log 100 + 3\\log x - \\log y', explanation: 'Use \\( \\log x^3 = 3\\log x \\). Also \\( \\log 100 = 2 \\) since \\( 10^2 = 100 \\).' },
            { stepNumber: 3, description: 'Write the final expression', workingLatex: '2 + 3\\log x - \\log y', explanation: 'Substitute \\( \\log 100 = 2 \\) to give the answer in the required form.' }
        ], finalAnswer: '\\( 2 + 3\\log x - \\log y \\)' }
    },
    {
        id: 'el3-065', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_4 x + \\log_4(x - 6) = 2 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine logs using the addition law', workingLatex: '\\log_4[x(x-6)] = 2', explanation: 'Using \\( \\log_a m + \\log_a n = \\log_a(mn) \\), combine the two logarithms.' },
            { stepNumber: 2, description: 'Convert to exponential form', workingLatex: 'x(x-6) = 4^2 = 16', explanation: 'If \\( \\log_4 A = 2 \\) then \\( A = 16 \\).' },
            { stepNumber: 3, description: 'Expand and rearrange into a quadratic', workingLatex: 'x^2 - 6x - 16 = 0', explanation: 'Expand \\( x(x-6) = x^2 - 6x \\) and subtract 16 from both sides.' },
            { stepNumber: 4, description: 'Factorise and reject the invalid root', workingLatex: '(x-8)(x+2) = 0 \\implies x = 8 \\text{ or } x = -2', explanation: 'Reject \\( x = -2 \\) because \\( x - 6 \\) must be positive for the logarithm to be defined. Therefore \\( x = 8 \\).' }
        ], finalAnswer: '\\( x = 8 \\)' }
    },
    {
        id: 'el3-066', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Write \\( \\frac{1}{2}\\log 9 + \\frac{1}{3}\\log 8 \\) as a single logarithm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule to each term', workingLatex: '\\log 9^{1/2} + \\log 8^{1/3}', explanation: 'Using \\( k\\log m = \\log m^k \\), rewrite each term as a single logarithm.' },
            { stepNumber: 2, description: 'Simplify the arguments', workingLatex: '\\log 3 + \\log 2', explanation: 'Since \\( 9^{1/2} = 3 \\) and \\( 8^{1/3} = 2 \\).' },
            { stepNumber: 3, description: 'Combine using the addition law', workingLatex: '\\log(3 \\times 2) = \\log 6', explanation: 'Using \\( \\log m + \\log n = \\log(mn) \\), combine into a single logarithm.' }
        ], finalAnswer: '\\( \\log 6 \\)' }
    },
    {
        id: 'el3-067', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Given \\( \\log_a 2 = x \\), express \\( \\log_a 32 \\) in terms of \\( x \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write 32 as a power of 2', workingLatex: '32 = 2^5', explanation: 'Recognise that \\( 2^5 = 32 \\).' },
            { stepNumber: 2, description: 'Apply the power rule and substitute', workingLatex: '\\log_a 32 = \\log_a 2^5 = 5\\log_a 2 = 5x', explanation: 'Using \\( \\log_a m^k = k\\log_a m \\), then replace \\( \\log_a 2 \\) with \\( x \\).' }
        ], finalAnswer: '\\( 5x \\)' }
    },
    {
        id: 'el3-068', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(3x) - \\ln(x - 1) = \\ln 5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the subtraction law on the LHS', workingLatex: '\\ln\\frac{3x}{x-1} = \\ln 5', explanation: 'Using \\( \\ln m - \\ln n = \\ln\\frac{m}{n} \\), combine the left-hand side.' },
            { stepNumber: 2, description: 'Equate the arguments', workingLatex: '\\frac{3x}{x-1} = 5', explanation: 'Since the natural logarithms are equal, the arguments must be equal.' },
            { stepNumber: 3, description: 'Solve the resulting equation', workingLatex: '3x = 5(x-1) = 5x - 5 \\implies 2x = 5 \\implies x = 2.5', explanation: 'Cross-multiply and rearrange. Check: \\( x = 2.5 > 1 \\), so \\( x - 1 > 0 \\) and the solution is valid.' }
        ], finalAnswer: '\\( x = 2.5 \\)' }
    },
    {
        id: 'el3-069', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Show that \\( \\log_2 3 \\times \\log_3 4 \\times \\log_4 8 = 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the chain rule to the first pair', workingLatex: '\\log_2 3 \\times \\log_3 4 = \\log_2 4', explanation: 'Using the identity \\( \\log_a b \\times \\log_b c = \\log_a c \\), with \\( a=2 \\), \\( b=3 \\), \\( c=4 \\).' },
            { stepNumber: 2, description: 'Multiply the result by the third factor', workingLatex: '\\log_2 4 \\times \\log_4 8 = \\log_2 8', explanation: 'Apply the same identity again with \\( a=2 \\), \\( b=4 \\), \\( c=8 \\).' },
            { stepNumber: 3, description: 'Evaluate \\( \\log_2 8 \\)', workingLatex: '\\log_2 8 = 3', explanation: 'Since \\( 2^3 = 8 \\), we have \\( \\log_2 8 = 3 \\) as required.' }
        ], finalAnswer: '\\( \\text{Shown: equals } 3 \\)' }
    },
    {
        id: 'el3-070', topicRef: 'el3', topicTitle: 'Laws of Logarithms', difficulty: 'Foundation',
        questionText: 'Solve \\( (\\log x)^2 - 5\\log x + 6 = 0 \\). (Base 10)',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Introduce a substitution \\( u = \\log x \\)', workingLatex: 'u^2 - 5u + 6 = 0', explanation: 'Let \\( u = \\log x \\) to convert the equation into a standard quadratic in \\( u \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(u-2)(u-3) = 0', explanation: 'Find two numbers that multiply to 6 and add to \\( -5 \\): these are \\( -2 \\) and \\( -3 \\).' },
            { stepNumber: 3, description: 'Solve for \\( u \\)', workingLatex: 'u = 2 \\quad \\text{or} \\quad u = 3', explanation: 'Set each factor equal to zero.' },
            { stepNumber: 4, description: 'Convert back using \\( \\log x = 2 \\)', workingLatex: '\\log x = 2 \\implies x = 10^2 = 100', explanation: 'If \\( \\log x = 2 \\) then \\( x = 10^2 = 100 \\).' },
            { stepNumber: 5, description: 'Convert back using \\( \\log x = 3 \\)', workingLatex: '\\log x = 3 \\implies x = 10^3 = 1000', explanation: 'If \\( \\log x = 3 \\) then \\( x = 10^3 = 1000 \\). Both solutions are valid since \\( x > 0 \\).' }
        ], finalAnswer: '\\( x = 100 \\text{ or } x = 1000 \\)' }
    },
];
