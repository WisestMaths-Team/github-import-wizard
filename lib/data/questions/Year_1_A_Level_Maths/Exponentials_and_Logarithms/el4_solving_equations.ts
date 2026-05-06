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

    // TYPE A (Q1–6): Solving a^x = b by taking logs of both sides
    {
        id: 'el4-001',
        topicRef: 'el4',
        topicTitle: 'Solving Equations',
        difficulty: 'Standard',
        questionText: 'Solve the equation \\( 5^{x+1} = 3^{2x-1} \\), giving your answer to 3 significant figures.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\ln \\) of both sides.',
                    workingLatex: '\\ln(5^{x+1}) = \\ln(3^{2x-1})',
                    explanation: 'Since the bases are different, we take natural logarithms of both sides so that the power law can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law \\( \\ln(a^n) = n\\ln a \\) to both sides.',
                    workingLatex: '(x+1)\\ln 5 = (2x-1)\\ln 3',
                    explanation: 'The exponents are brought down as coefficients of \\( \\ln 5 \\) and \\( \\ln 3 \\) respectively.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand both sides.',
                    workingLatex: 'x\\ln 5 + \\ln 5 = 2x\\ln 3 - \\ln 3',
                    explanation: 'Distribute the logarithmic terms across the brackets on each side.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect all \\( x \\) terms on one side.',
                    workingLatex: 'x\\ln 5 - 2x\\ln 3 = -\\ln 3 - \\ln 5',
                    explanation: 'Move the \\( x \\) terms to the left and the constant terms to the right.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x \\) on the left-hand side.',
                    workingLatex: 'x(\\ln 5 - 2\\ln 3) = -(\\ln 3 + \\ln 5)',
                    explanation: 'Factor out \\( x \\) and simplify the right-hand side.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( x \\) and evaluate.',
                    workingLatex: 'x = \\frac{-(\\ln 3 + \\ln 5)}{\\ln 5 - 2\\ln 3} = \\frac{-(1.0986 + 1.6094)}{1.6094 - 2.1972} = \\frac{-2.7081}{-0.5878} \\approx 4.61',
                    explanation: 'Divide both sides by \\( (\\ln 5 - 2\\ln 3) \\) and use a calculator to evaluate to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 4.61 \\)'
        }
    },
    {
        id: 'el4-002',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3^x = 70 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(3^x) = \\log 70',
                    explanation: 'Since the variable \\( x \\) is in the exponent, we take \\( \\log_{10} \\) of both sides so that the power law of logarithms can be used to bring it down.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law \\( \\log(a^n) = n\\log a \\).',
                    workingLatex: 'x\\log 3 = \\log 70',
                    explanation: 'The power law states that \\( \\log(a^n) = n\\log a \\). Here the exponent \\( x \\) is brought down as a coefficient of \\( \\log 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( \\log 3 \\) and evaluate.',
                    workingLatex: 'x = \\frac{\\log 70}{\\log 3} \\approx \\frac{1.8451}{0.4771} \\approx 3.87',
                    explanation: 'Dividing both sides by \\( \\log 3 \\) isolates \\( x \\). Using a calculator, \\( \\log 70 \\approx 1.8451 \\) and \\( \\log 3 \\approx 0.4771 \\), giving \\( x \\approx 3.87 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 3.87 \\)'
        }
    },
    {
        id: 'el4-003',
        topicRef: 'el4',
        topicTitle: 'Solving Equations',
        difficulty: 'Standard',
        questionText: 'Solve the equation \\( e^x + 12e^{-x} = 7 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply every term by \\( e^x \\) to clear the negative exponent.',
                    workingLatex: 'e^x \\cdot e^x + 12e^{-x} \\cdot e^x = 7 \\cdot e^x',
                    explanation: 'Multiplying by \\( e^x \\) eliminates the \\( e^{-x} \\) term and produces a quadratic structure.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify to obtain a quadratic in \\( e^x \\).',
                    workingLatex: 'e^{2x} + 12 = 7e^x',
                    explanation: 'Using \\( e^x \\cdot e^x = e^{2x} \\) and \\( e^{-x} \\cdot e^x = e^0 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Rearrange into standard quadratic form.',
                    workingLatex: 'e^{2x} - 7e^x + 12 = 0',
                    explanation: 'Move all terms to one side. Let \\( u = e^x \\) so the equation becomes \\( u^2 - 7u + 12 = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(e^x - 3)(e^x - 4) = 0',
                    explanation: 'We need two numbers that multiply to give 12 and add to give \\( -7 \\). These are \\( -3 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve \\( e^x - 3 = 0 \\).',
                    workingLatex: 'e^x = 3 \\Rightarrow x = \\ln 3',
                    explanation: 'Take the natural logarithm of both sides. Since \\( 3 > 0 \\), this solution is valid.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve \\( e^x - 4 = 0 \\).',
                    workingLatex: 'e^x = 4 \\Rightarrow x = \\ln 4',
                    explanation: 'Take the natural logarithm of both sides. Since \\( 4 > 0 \\), this solution is also valid.'
                },
                {
                    stepNumber: 7,
                    description: 'State the two solutions.',
                    workingLatex: 'x = \\ln 3 \\quad \\text{or} \\quad x = \\ln 4',
                    explanation: 'Both values are exact. Note that \\( e^x \\) is always positive, so both solutions from the factorisation are valid.'
                }
            ],
            finalAnswer: '\\( x = \\ln 3 \\) or \\( x = \\ln 4 \\)'
        }
    },
    {
        id: 'el4-004',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{3x} = 100 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(2^{3x}) = \\log 100',
                    explanation: 'Since the unknown \\( x \\) appears in the exponent, we apply \\( \\log_{10} \\) to both sides so that the power law can bring it down as a coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law \\( \\log(a^n) = n\\log a \\).',
                    workingLatex: '3x\\log 2 = 2',
                    explanation: 'On the left, the exponent \\( 3x \\) is brought down as a coefficient. On the right, \\( \\log_{10} 100 = 2 \\) because \\( 10^2 = 100 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 3\\log 2 \\) and evaluate.',
                    workingLatex: 'x = \\frac{2}{3\\log 2} = \\frac{2}{3 \\times 0.3010} \\approx \\frac{2}{0.9031} \\approx 2.21',
                    explanation: 'Isolating \\( x \\) requires dividing by the coefficient \\( 3\\log 2 \\). Using a calculator, \\( \\log 2 \\approx 0.3010 \\), so \\( 3\\log 2 \\approx 0.9031 \\), giving \\( x \\approx 2.21 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.21 \\)'
        }
    },
    {
        id: 'el4-005',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4^{x-1} = 30 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(4^{x-1}) = \\log 30',
                    explanation: 'Since the variable \\( x \\) is trapped in the exponent, we take \\( \\log_{10} \\) of both sides so that the power law can be applied to bring the exponent down.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law \\( \\log(a^n) = n\\log a \\).',
                    workingLatex: '(x-1)\\log 4 = \\log 30',
                    explanation: 'The entire exponent \\( (x-1) \\) is brought down as a factor multiplying \\( \\log 4 \\). This converts the exponential equation into a linear equation in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( \\log 4 \\) to find \\( x - 1 \\).',
                    workingLatex: 'x - 1 = \\frac{\\log 30}{\\log 4} \\approx \\frac{1.4771}{0.6021} \\approx 2.453',
                    explanation: 'Dividing both sides by \\( \\log 4 \\) isolates \\( x - 1 \\). Using a calculator, \\( \\log 30 \\approx 1.4771 \\) and \\( \\log 4 \\approx 0.6021 \\), so \\( x - 1 \\approx 2.453 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add 1 to both sides to find \\( x \\).',
                    workingLatex: 'x \\approx 2.453 + 1 = 3.45',
                    explanation: 'Adding 1 to both sides gives \\( x \\approx 3.453 \\), which rounds to \\( 3.45 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 3.45 \\)'
        }
    },
    {
        id: 'el4-006',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 6^{2x+1} = 200 \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(6^{2x+1}) = \\log 200',
                    explanation: 'Since the unknown \\( x \\) is in the exponent, we take \\( \\log_{10} \\) of both sides. This allows us to use the power law to bring the exponent down as a coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law \\( \\log(a^n) = n\\log a \\).',
                    workingLatex: '(2x+1)\\log 6 = \\log 200',
                    explanation: 'The entire exponent \\( (2x+1) \\) is brought down as a factor multiplying \\( \\log 6 \\). This transforms the exponential equation into a linear equation in \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( \\log 6 \\).',
                    workingLatex: '2x + 1 = \\frac{\\log 200}{\\log 6} \\approx \\frac{2.3010}{0.7782} \\approx 2.957',
                    explanation: 'Dividing by \\( \\log 6 \\) isolates the linear expression \\( 2x + 1 \\). Using a calculator, \\( \\log 200 \\approx 2.3010 \\) and \\( \\log 6 \\approx 0.7782 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract 1 from both sides.',
                    workingLatex: '2x = 2.957 - 1 = 1.957',
                    explanation: 'Subtracting 1 from both sides isolates the term \\( 2x \\) on the left-hand side.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide both sides by 2 to find \\( x \\).',
                    workingLatex: 'x = \\frac{1.957}{2} \\approx 0.979',
                    explanation: 'Dividing by 2 gives \\( x \\approx 0.979 \\) to 3 significant figures, which completes the solution.'
                }
            ],
            finalAnswer: '\\( x \\approx 0.979 \\)'
        }
    },
    // TYPE B (Q7–10): Equations with a^x on both sides (different bases)
    {
        id: 'el4-007',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5^x = 2^{x+3} \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(5^x) = \\log(2^{x+3})',
                    explanation: 'Since the bases on each side are different, we cannot equate exponents directly. Taking \\( \\log_{10} \\) of both sides allows us to use the power law to bring both exponents down.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law to each side.',
                    workingLatex: 'x\\log 5 = (x+3)\\log 2',
                    explanation: 'On the left, the exponent \\( x \\) becomes a coefficient of \\( \\log 5 \\). On the right, the exponent \\( (x+3) \\) becomes a coefficient of \\( \\log 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the right-hand side.',
                    workingLatex: 'x\\log 5 = x\\log 2 + 3\\log 2',
                    explanation: 'Distribute \\( \\log 2 \\) across the bracket \\( (x+3) \\) to obtain two separate terms on the right-hand side.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect all \\( x \\) terms on the left.',
                    workingLatex: 'x\\log 5 - x\\log 2 = 3\\log 2',
                    explanation: 'Subtract \\( x\\log 2 \\) from both sides so that all terms involving \\( x \\) are on the left and the constant term is on the right.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x \\) on the left-hand side.',
                    workingLatex: 'x(\\log 5 - \\log 2) = 3\\log 2',
                    explanation: 'Factor out \\( x \\) from both terms on the left. Note that \\( \\log 5 - \\log 2 = \\log\\!\\left(\\frac{5}{2}\\right) = \\log 2.5 \\) by the quotient law.'
                },
                {
                    stepNumber: 6,
                    description: 'Divide both sides by \\( (\\log 5 - \\log 2) \\) and evaluate.',
                    workingLatex: 'x = \\frac{3\\log 2}{\\log 5 - \\log 2} = \\frac{3\\log 2}{\\log 2.5} \\approx \\frac{0.9031}{0.3979} \\approx 2.27',
                    explanation: 'Using a calculator, \\( 3\\log 2 \\approx 0.9031 \\) and \\( \\log 2.5 \\approx 0.3979 \\), so \\( x \\approx 2.27 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.27 \\)'
        }
    },
    {
        id: 'el4-008',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+2} = 7^x \\), giving your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log(3^{x+2}) = \\log(7^x)',
                    explanation: 'Since the bases are different (3 and 7), we cannot equate exponents directly. Taking \\( \\log_{10} \\) of both sides allows us to apply the power law.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power law \\( \\log(a^n) = n\\log a \\) to both sides.',
                    workingLatex: '(x+2)\\log 3 = x\\log 7',
                    explanation: 'On the left, the exponent \\( (x+2) \\) becomes a coefficient of \\( \\log 3 \\). On the right, the exponent \\( x \\) becomes a coefficient of \\( \\log 7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x\\log 3 + 2\\log 3 = x\\log 7',
                    explanation: 'Distribute \\( \\log 3 \\) across the bracket \\( (x+2) \\) to produce two separate terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Collect all \\( x \\) terms on one side.',
                    workingLatex: '2\\log 3 = x\\log 7 - x\\log 3',
                    explanation: 'Subtract \\( x\\log 3 \\) from both sides so that the constant term \\( 2\\log 3 \\) is isolated on the left and the \\( x \\) terms are on the right.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise \\( x \\) on the right-hand side.',
                    workingLatex: '2\\log 3 = x(\\log 7 - \\log 3)',
                    explanation: 'Factor out \\( x \\) from both terms on the right. By the quotient law, \\( \\log 7 - \\log 3 = \\log\\!\\left(\\frac{7}{3}\\right) \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Divide both sides by \\( (\\log 7 - \\log 3) \\) and evaluate.',
                    workingLatex: 'x = \\frac{2\\log 3}{\\log 7 - \\log 3} = \\frac{2\\log 3}{\\log(7/3)} \\approx \\frac{0.9542}{0.3679} \\approx 2.59',
                    explanation: 'Using a calculator, \\( 2\\log 3 \\approx 0.9542 \\) and \\( \\log(7/3) \\approx 0.3679 \\), giving \\( x \\approx 2.59 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 2.59 \\)'
        }
    },
    // TYPE C (Q9–12): Solving log_a(x) = k (convert to index form)
    {
        id: 'el4-009',
        topicRef: 'el4',
        topicTitle: 'Solving Equations',
        difficulty: 'Standard',
        questionText: 'Solve the equation \\( \\log_2(x + 3) + \\log_2(x - 1) = 5 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the addition law \\( \\log_a P + \\log_a Q = \\log_a(PQ) \\) to combine the two logarithms.',
                    workingLatex: '\\log_2\\bigl((x+3)(x-1)\\bigr) = 5',
                    explanation: 'Both logarithms have the same base 2, so the product rule applies.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form using \\( \\log_a b = c \\Leftrightarrow a^c = b \\).',
                    workingLatex: '(x+3)(x-1) = 2^5 = 32',
                    explanation: 'The base is 2 and the power is 5, so the argument equals \\( 32 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the left-hand side.',
                    workingLatex: 'x^2 + 2x - 3 = 32',
                    explanation: 'Multiply out the brackets: \\( x \\cdot x + x \\cdot (-1) + 3 \\cdot x + 3 \\cdot (-1) = x^2 + 2x - 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Rearrange into standard quadratic form.',
                    workingLatex: 'x^2 + 2x - 35 = 0',
                    explanation: 'Subtract 32 from both sides to set the equation equal to zero.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x + 7)(x - 5) = 0',
                    explanation: 'We need two numbers that multiply to give \\( -35 \\) and add to give \\( 2 \\). These are \\( 7 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve each factor and check validity of each solution.',
                    workingLatex: 'x = -7 \\quad \\text{or} \\quad x = 5',
                    explanation: 'For \\( x = -7 \\), we get \\( x - 1 = -8 \\) which is negative, so \\( \\log_2(x-1) \\) is undefined. This solution must be rejected. For \\( x = 5 \\), both \\( x + 3 = 8 > 0 \\) and \\( x - 1 = 4 > 0 \\), so this solution is valid.'
                },
                {
                    stepNumber: 7,
                    description: 'Verify the valid solution by substituting back.',
                    workingLatex: '\\log_2(8) + \\log_2(4) = 3 + 2 = 5 \\; \\checkmark',
                    explanation: 'Substituting \\( x = 5 \\) gives \\( \\log_2 8 + \\log_2 4 = 3 + 2 = 5 \\), confirming the answer is correct.'
                }
            ],
            finalAnswer: '\\( x = 5 \\)'
        }
    },
    {
        id: 'el4-010',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( x \\) given that \\( \\log_5(x + 2) = 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert to index form.',
                    workingLatex: '5^3 = x + 2',
                    explanation: 'If \\( \\log_a b = c \\) then \\( a^c = b \\). Here the base is 5, the power is 3, and the argument is \\( x+2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate \\( 5^3 \\).',
                    workingLatex: '125 = x + 2',
                    explanation: '\\( 5^3 = 5 \\times 5 \\times 5 = 125 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 125 - 2 = 123',
                    explanation: 'Subtract 2 from both sides.'
                }
            ],
            finalAnswer: '\\( x = 123 \\)'
        }
    },
    {
        id: 'el4-011',
        topicRef: 'el4',
        topicTitle: 'Solving Equations',
        difficulty: 'Standard',
        questionText: 'The curves \\( y = 3^x \\) and \\( y = 4 \\cdot 3^{-x} + 3 \\) intersect at the point \\( P \\) where \\( x > 0 \\). Find the exact coordinates of \\( P \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the two expressions for \\( y \\) equal to each other at the point of intersection.',
                    workingLatex: '3^x = 4 \\cdot 3^{-x} + 3',
                    explanation: 'At the intersection point \\( P \\), the \\( y \\)-values of both curves are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply every term by \\( 3^x \\) to eliminate the negative exponent.',
                    workingLatex: '(3^x)^2 = 4 + 3 \\cdot 3^x',
                    explanation: 'Multiplying \\( 3^{-x} \\) by \\( 3^x \\) gives \\( 3^0 = 1 \\), and \\( 3^x \\cdot 3^x = 3^{2x} = (3^x)^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Let \\( u = 3^x \\) and rearrange into a quadratic equation.',
                    workingLatex: 'u^2 - 3u - 4 = 0',
                    explanation: 'Substituting \\( u = 3^x \\) converts the exponential equation into a standard quadratic.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(u - 4)(u + 1) = 0',
                    explanation: 'We need two numbers that multiply to give \\( -4 \\) and add to give \\( -3 \\). These are \\( -4 \\) and \\( 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( u \\) and reject invalid solutions.',
                    workingLatex: 'u = 4 \\quad \\text{or} \\quad u = -1',
                    explanation: 'Since \\( u = 3^x > 0 \\) for all real \\( x \\), the solution \\( u = -1 \\) is impossible and must be rejected.'
                },
                {
                    stepNumber: 6,
                    description: 'Find the \\( x \\)-coordinate using \\( 3^x = 4 \\).',
                    workingLatex: 'x = \\log_3 4',
                    explanation: 'Taking \\( \\log_3 \\) of both sides gives the exact value. Note that \\( \\log_3 4 > 0 \\), satisfying the condition \\( x > 0 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Find the \\( y \\)-coordinate by substituting into \\( y = 3^x \\).',
                    workingLatex: 'y = 3^x = 4',
                    explanation: 'Since \\( 3^x = 4 \\), the \\( y \\)-coordinate is simply 4. Therefore \\( P \\) has coordinates \\( (\\log_3 4,\\, 4) \\).'
                }
            ],
            finalAnswer: '\\( P = (\\log_3 4,\\, 4) \\)'
        }
    },
    {
        id: 'el4-012',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 5\\log_{10}(x) = 3 \\), giving your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 5.',
                    workingLatex: '\\log_{10}(x) = \\frac{3}{5} = 0.6',
                    explanation: 'Before converting to index form, we need to isolate the logarithm on one side. Dividing both sides by 5 gives \\( \\log_{10}(x) = 0.6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form using \\( \\log_a b = c \\Leftrightarrow a^c = b \\).',
                    workingLatex: 'x = 10^{0.6}',
                    explanation: 'Since \\( \\log_{10}(x) = 0.6 \\), converting to index form means raising 10 to the power 0.6. The base is 10 and the exponent is 0.6, so \\( x = 10^{0.6} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate using a calculator.',
                    workingLatex: 'x = 10^{0.6} \\approx 3.98',
                    explanation: 'Using a calculator, \\( 10^{0.6} \\approx 3.981 \\), which rounds to \\( 3.98 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( x \\approx 3.98 \\)'
        }
    },
    // TYPE D (Q13–17): Solving equations with e^x and ln x
    {
        id: 'el4-013',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4e^x = 60 \\), giving (i) an exact answer and (ii) an answer to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 4 to isolate \\( e^x \\).',
                    workingLatex: 'e^x = 15',
                    explanation: 'Before taking logarithms, we must isolate the exponential term. Dividing both sides by 4 gives \\( e^x = \\frac{60}{4} = 15 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\ln \\) of both sides.',
                    workingLatex: '\\ln(e^x) = \\ln 15',
                    explanation: 'Applying \\( \\ln \\) to both sides allows us to use the fact that \\( \\ln \\) and \\( e \\) are inverse functions, so \\( \\ln(e^x) = x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the left-hand side to obtain the exact answer.',
                    workingLatex: 'x = \\ln 15',
                    explanation: 'Since \\( \\ln(e^x) = x \\), the exact answer is \\( x = \\ln 15 \\). This is part (i) of the answer.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate to 3 significant figures.',
                    workingLatex: 'x = \\ln 15 \\approx 2.71',
                    explanation: 'Using a calculator, \\( \\ln 15 \\approx 2.708 \\), which rounds to \\( 2.71 \\) to 3 significant figures. This is part (ii) of the answer.'
                }
            ],
            finalAnswer: '(i) \\( x = \\ln 15 \\) \\quad (ii) \\( x \\approx 2.71 \\)'
        }
    },
    {
        id: 'el4-014',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^{0.5x} + 3 = 10 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 3 from both sides to isolate the exponential.',
                    workingLatex: 'e^{0.5x} = 7',
                    explanation: 'Before taking logarithms, we must isolate the exponential term on one side. Subtracting 3 from both sides gives \\( e^{0.5x} = 10 - 3 = 7 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\ln \\) of both sides.',
                    workingLatex: '0.5x = \\ln 7',
                    explanation: 'Taking the natural logarithm of both sides and using the inverse relationship \\( \\ln(e^{0.5x}) = 0.5x \\) simplifies the left-hand side to \\( 0.5x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply both sides by 2 to find \\( x \\).',
                    workingLatex: 'x = 2\\ln 7',
                    explanation: 'Dividing by 0.5 is the same as multiplying by 2, which gives the exact answer \\( x = 2\\ln 7 \\).'
                }
            ],
            finalAnswer: '\\( x = 2\\ln 7 \\)'
        }
    },
    {
        id: 'el4-015',
        topicRef: 'el4',
        topicTitle: 'Solving Equations',
        difficulty: 'Standard',
        questionText: 'Solve the equation \\( 2\\ln(x + 3) - \\ln x = \\ln 16 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the power law \\( n\\ln a = \\ln(a^n) \\) on the first term.',
                    workingLatex: '\\ln(x+3)^2 - \\ln x = \\ln 16',
                    explanation: 'The coefficient 2 becomes an exponent inside the logarithm.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the subtraction law \\( \\ln A - \\ln B = \\ln\\!\\left(\\frac{A}{B}\\right) \\) to combine the left-hand side.',
                    workingLatex: '\\ln\\!\\left(\\frac{(x+3)^2}{x}\\right) = \\ln 16',
                    explanation: 'The two logarithms are combined into a single logarithm using the quotient rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Since \\( \\ln \\) is a one-to-one function, the arguments must be equal.',
                    workingLatex: '\\frac{(x+3)^2}{x} = 16',
                    explanation: 'If \\( \\ln P = \\ln Q \\) then \\( P = Q \\). This removes the logarithms from the equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply both sides by \\( x \\) and expand.',
                    workingLatex: '(x+3)^2 = 16x \\Rightarrow x^2 + 6x + 9 = 16x',
                    explanation: 'Expand \\( (x+3)^2 \\) using the identity \\( (a+b)^2 = a^2 + 2ab + b^2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Rearrange into standard quadratic form and factorise.',
                    workingLatex: 'x^2 - 10x + 9 = 0 \\Rightarrow (x - 1)(x - 9) = 0',
                    explanation: 'We need two numbers that multiply to give \\( 9 \\) and add to give \\( -10 \\). These are \\( -1 \\) and \\( -9 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve and verify both solutions are valid.',
                    workingLatex: 'x = 1 \\quad \\text{or} \\quad x = 9',
                    explanation: 'Both solutions must satisfy \\( x > 0 \\) (so that \\( \\ln x \\) is defined) and \\( x + 3 > 0 \\). Since \\( x = 1 \\) and \\( x = 9 \\) are both positive, both solutions are valid.'
                }
            ],
            finalAnswer: '\\( x = 1 \\) or \\( x = 9 \\)'
        }
    },
    {
        id: 'el4-016',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(3x) = 5 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( e^{\\square} \\) to both sides to remove the \\( \\ln \\).',
                    workingLatex: 'e^{\\ln(3x)} = e^5',
                    explanation: 'Exponentiating both sides is the inverse operation of \\( \\ln \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the left-hand side.',
                    workingLatex: '3x = e^5',
                    explanation: 'Since \\( e^{\\ln(3x)} = 3x \\), the logarithm and exponential cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{e^5}{3}',
                    explanation: 'Divide both sides by 3 to isolate \\( x \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^5}{3} \\)'
        }
    },
    {
        id: 'el4-017',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 4\\ln(2x - 1) = 12 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide both sides by 4 to isolate \\( \\ln \\).',
                    workingLatex: '\\ln(2x-1) = 3',
                    explanation: 'Before exponentiating, we need the logarithm on its own. Dividing both sides by 4 gives \\( \\ln(2x-1) = \\frac{12}{4} = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Exponentiate both sides using \\( e^{\\square} \\).',
                    workingLatex: '2x - 1 = e^3',
                    explanation: 'Applying \\( e^{\\square} \\) to both sides removes the \\( \\ln \\), since \\( e^{\\ln(2x-1)} = 2x - 1 \\). The right-hand side becomes \\( e^3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add 1 to both sides.',
                    workingLatex: '2x = e^3 + 1',
                    explanation: 'Adding 1 to both sides isolates the term \\( 2x \\) on the left-hand side.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide both sides by 2 to find \\( x \\).',
                    workingLatex: 'x = \\frac{e^3 + 1}{2}',
                    explanation: 'Dividing by 2 gives the exact answer. This is left in terms of \\( e \\) as the question asks for an exact value.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^3 + 1}{2} \\)'
        }
    },
    // TYPE E (Q18–21): Give answers in terms of ln
    {
        id: 'el4-018',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^{3x} = 27 \\), giving your answer in terms of \\( \\ln 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '3x = \\ln 27',
                    explanation: 'Taking the natural logarithm of both sides removes the exponential, since \\( \\ln(e^{3x}) = 3x \\) by the inverse function property.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\ln 27 \\) in terms of \\( \\ln 3 \\).',
                    workingLatex: '\\ln 27 = \\ln(3^3) = 3\\ln 3',
                    explanation: 'Since \\( 27 = 3^3 \\), the power law for logarithms gives \\( \\ln(3^3) = 3\\ln 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '3x = 3\\ln 3 \\Rightarrow x = \\ln 3',
                    explanation: 'Divide both sides by 3 to isolate \\( x \\). The factor of 3 cancels, leaving \\( x = \\ln 3 \\).'
                }
            ],
            finalAnswer: '\\( x = \\ln 3 \\)'
        }
    },
    {
        id: 'el4-019',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x - 1} = 9 \\), giving your answer in terms of \\( \\ln 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '2x - 1 = \\ln 9',
                    explanation: 'Taking the natural logarithm of both sides gives \\( \\ln(e^{2x-1}) = 2x - 1 \\), since \\( \\ln \\) and \\( e \\) are inverse functions.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( \\ln 9 \\) in terms of \\( \\ln 3 \\).',
                    workingLatex: '\\ln 9 = \\ln(3^2) = 2\\ln 3',
                    explanation: 'Since \\( 9 = 3^2 \\), the power law for logarithms gives \\( \\ln(3^2) = 2\\ln 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '2x - 1 = 2\\ln 3 \\Rightarrow x = \\frac{1 + 2\\ln 3}{2}',
                    explanation: 'Add 1 to both sides to get \\( 2x = 1 + 2\\ln 3 \\), then divide both sides by 2 to isolate \\( x \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{1 + 2\\ln 3}{2} \\)'
        }
    },
    // TYPE F (Q20–23): Solving with logs on both sides (using laws to combine)
    {
        id: 'el4-020',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln 5 + \\ln x = 7 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the product law to combine the left side.',
                    workingLatex: '\\ln(5x) = 7',
                    explanation: 'The product law states \\( \\ln a + \\ln b = \\ln(ab) \\), so \\( \\ln 5 + \\ln x = \\ln(5x) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '5x = e^7',
                    explanation: 'Exponentiating both sides removes the logarithm, since \\( e^{\\ln(5x)} = 5x \\) by the inverse function property.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = \\frac{e^7}{5}',
                    explanation: 'Divide both sides by 5 to isolate \\( x \\), giving the exact answer in terms of \\( e \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^7}{5} \\)'
        }
    },
    {
        id: 'el4-021',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(4x) + \\ln(3x) = 10 \\), giving your answer as an exact value.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the left side using the product law.',
                    workingLatex: '\\ln(12x^2) = 10',
                    explanation: '\\( \\ln(4x) + \\ln(3x) = \\ln(4x \\cdot 3x) = \\ln(12x^2) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '12x^2 = e^{10}',
                    explanation: 'Exponentiating both sides removes the logarithm, since \\( e^{\\ln(12x^2)} = 12x^2 \\) by the inverse function property.'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate \\( x^2 \\).',
                    workingLatex: 'x^2 = \\frac{e^{10}}{12}',
                    explanation: 'Divide both sides by 12 to isolate \\( x^2 \\) on the left-hand side.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the positive square root.',
                    workingLatex: 'x = \\sqrt{\\frac{e^{10}}{12}} = \\frac{e^5}{\\sqrt{12}} = \\frac{e^5}{2\\sqrt{3}}',
                    explanation: 'We take \\( x > 0 \\) only, since \\( \\ln(4x) \\) requires \\( x > 0 \\). Note \\( \\sqrt{e^{10}} = e^5 \\) and \\( \\sqrt{12} = 2\\sqrt{3} \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{e^5}{2\\sqrt{3}} \\)'
        }
    },
    {
        id: 'el4-022',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(x - 3) - \\ln(2x) = 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the quotient law.',
                    workingLatex: '\\ln\\!\\left(\\frac{x-3}{2x}\\right) = 0',
                    explanation: 'The quotient law states \\( \\ln a - \\ln b = \\ln(a/b) \\), so subtracting the logarithms combines them into a single log of the fraction.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: '\\frac{x-3}{2x} = e^0 = 1',
                    explanation: 'Exponentiating both sides gives \\( e^{\\ln(\\ldots)} \\) on the left, which cancels the log. On the right, \\( e^0 = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve the resulting equation.',
                    workingLatex: 'x - 3 = 2x \\Rightarrow -3 = x',
                    explanation: 'Multiply both sides by \\( 2x \\), then rearrange.'
                },
                {
                    stepNumber: 4,
                    description: 'Check validity: \\( x = -3 \\) gives \\( \\ln(-3-3) \\) — argument is negative. Reject.',
                    workingLatex: '\\text{No valid solution}',
                    explanation: 'Both \\( x-3 \\) and \\( 2x \\) must be positive. \\( x = -3 \\) fails both conditions.'
                }
            ],
            finalAnswer: 'No solution (the value \\( x = -3 \\) is invalid as the log arguments would be negative).'
        }
    },
    {
        id: 'el4-023',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( 3\\ln x + 5\\ln x = 2 \\), giving your answer as an exact value.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Collect the \\( \\ln x \\) terms on the left.',
                    workingLatex: '8\\ln x = 2',
                    explanation: 'Both terms share the common factor \\( \\ln x \\), so \\( 3\\ln x + 5\\ln x = (3+5)\\ln x = 8\\ln x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 8.',
                    workingLatex: '\\ln x = \\frac{1}{4}',
                    explanation: 'Dividing both sides by 8 isolates the logarithm, giving \\( \\ln x = \\frac{2}{8} = \\frac{1}{4} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( e^{\\square} \\) to both sides.',
                    workingLatex: 'x = e^{1/4}',
                    explanation: 'Exponentiating both sides removes the logarithm, since \\( e^{\\ln x} = x \\) by the inverse function property.'
                }
            ],
            finalAnswer: '\\( x = e^{1/4} \\)'
        }
    },
    // TYPE G (Q24–27): Quadratics in e^x
    {
        id: 'el4-024',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( e^{2x} - 5e^x + 6 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise \\( e^{2x} = (e^x)^2 \\) and substitute \\( y = e^x \\).',
                    workingLatex: 'y^2 - 5y + 6 = 0',
                    explanation: 'Setting \\( y = e^x \\) turns the equation into a standard quadratic in \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(y-2)(y-3) = 0',
                    explanation: 'We need two numbers that multiply to 6 and add to \\( -5 \\): these are \\( -2 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( y \\).',
                    workingLatex: 'y = 2 \\quad \\text{or} \\quad y = 3',
                    explanation: 'Setting each factor equal to zero gives \\( y - 2 = 0 \\) or \\( y - 3 = 0 \\), so \\( y = 2 \\) or \\( y = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Back-substitute \\( y = e^x \\) and check validity.',
                    workingLatex: 'e^x = 2 \\quad \\text{or} \\quad e^x = 3',
                    explanation: 'Since \\( e^x > 0 \\) for all real \\( x \\), both positive values of \\( y \\) are valid.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply \\( \\ln \\) to solve each equation.',
                    workingLatex: 'x = \\ln 2 \\quad \\text{or} \\quad x = \\ln 3',
                    explanation: 'Taking the natural logarithm of both sides gives the exact solutions.'
                }
            ],
            finalAnswer: '\\( x = \\ln 2 \\) or \\( x = \\ln 3 \\)'
        }
    },
    {
        id: 'el4-025',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( e^{2x} - 7e^x + 12 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = e^x \\) so \\( e^{2x} = y^2 \\).',
                    workingLatex: 'y^2 - 7y + 12 = 0',
                    explanation: 'Substitution reduces this to a standard quadratic in \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(y-3)(y-4) = 0',
                    explanation: 'We need two numbers that multiply to 12 and add to \\( -7 \\): these are \\( -3 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( y \\).',
                    workingLatex: 'y = 3 \\quad \\text{or} \\quad y = 4',
                    explanation: 'Setting each factor equal to zero gives \\( y - 3 = 0 \\) or \\( y - 4 = 0 \\), so \\( y = 3 \\) or \\( y = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Back-substitute \\( y = e^x \\).',
                    workingLatex: 'e^x = 3 \\quad \\text{or} \\quad e^x = 4',
                    explanation: 'Both values are positive, so both are valid since \\( e^x > 0 \\) always.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply \\( \\ln \\) to each equation.',
                    workingLatex: 'x = \\ln 3 \\quad \\text{or} \\quad x = \\ln 4',
                    explanation: 'Taking the natural logarithm of both sides gives the exact solutions.'
                }
            ],
            finalAnswer: '\\( x = \\ln 3 \\) or \\( x = \\ln 4 \\)'
        }
    },
    {
        id: 'el4-026',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( 2e^{2x} - 7e^x + 3 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = e^x \\).',
                    workingLatex: '2y^2 - 7y + 3 = 0',
                    explanation: 'Replacing \\( e^{2x} \\) with \\( y^2 \\) and \\( e^x \\) with \\( y \\) transforms the equation into a standard quadratic in \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(2y - 1)(y - 3) = 0',
                    explanation: 'Check: \\( (2y-1)(y-3) = 2y^2 - 6y - y + 3 = 2y^2 - 7y + 3 \\). This confirms the factorisation.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( y \\).',
                    workingLatex: 'y = \\frac{1}{2} \\quad \\text{or} \\quad y = 3',
                    explanation: 'Setting \\( 2y - 1 = 0 \\) gives \\( y = \\frac{1}{2} \\), and setting \\( y - 3 = 0 \\) gives \\( y = 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Back-substitute \\( y = e^x \\) and check validity.',
                    workingLatex: 'e^x = \\frac{1}{2} \\quad \\text{or} \\quad e^x = 3',
                    explanation: 'Both values of \\( y \\) are positive, so both are valid since \\( e^x > 0 \\) always.'
                },
                {
                    stepNumber: 5,
                    description: 'Apply \\( \\ln \\) and simplify.',
                    workingLatex: 'x = \\ln\\frac{1}{2} = -\\ln 2 \\quad \\text{or} \\quad x = \\ln 3',
                    explanation: '\\( \\ln\\frac{1}{2} = \\ln(2^{-1}) = -\\ln 2 \\) by the power law for logarithms.'
                }
            ],
            finalAnswer: '\\( x = -\\ln 2 \\) or \\( x = \\ln 3 \\)'
        }
    },
    {
        id: 'el4-027',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Find the exact solutions of \\( 3e^{2x} + 10e^x + 3 = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = e^x \\).',
                    workingLatex: '3y^2 + 10y + 3 = 0',
                    explanation: 'Replacing \\( e^{2x} \\) with \\( y^2 \\) and \\( e^x \\) with \\( y \\) gives a standard quadratic.'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(3y + 1)(y + 3) = 0',
                    explanation: 'Check: \\( (3y+1)(y+3) = 3y^2 + 9y + y + 3 = 3y^2 + 10y + 3 \\). This confirms the factorisation.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( y \\).',
                    workingLatex: 'y = -\\frac{1}{3} \\quad \\text{or} \\quad y = -3',
                    explanation: 'Setting \\( 3y + 1 = 0 \\) gives \\( y = -\\frac{1}{3} \\), and setting \\( y + 3 = 0 \\) gives \\( y = -3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Back-substitute \\( y = e^x \\).',
                    workingLatex: 'e^x = -\\frac{1}{3} \\quad \\text{or} \\quad e^x = -3',
                    explanation: 'Replace \\( y \\) with \\( e^x \\) to obtain two exponential equations.'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity of each solution.',
                    workingLatex: '\\text{No real solutions}',
                    explanation: '\\( e^x > 0 \\) for all real \\( x \\), so neither negative value is achievable. Both solutions are rejected.'
                }
            ],
            finalAnswer: 'No real solutions.'
        }
    },
    // TYPE H (Q28–30): Solving simultaneous equations with logs/exponentials
    {
        id: 'el4-028',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( 3^x = 9^y \\) and \\( 2x + y = 5 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( 9^y \\) using base 3.',
                    workingLatex: '9^y = (3^2)^y = 3^{2y}',
                    explanation: 'Since \\( 9 = 3^2 \\), the power law gives \\( 9^y = 3^{2y} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Equate the exponents.',
                    workingLatex: '3^x = 3^{2y} \\Rightarrow x = 2y',
                    explanation: 'Since both sides have the same base 3, the exponents must be equal. This gives the linear equation \\( x = 2y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2y \\) into the second equation.',
                    workingLatex: '2(2y) + y = 5 \\Rightarrow 4y + y = 5',
                    explanation: 'Replace \\( x \\) with \\( 2y \\) in \\( 2x + y = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( y \\).',
                    workingLatex: '5y = 5 \\Rightarrow y = 1',
                    explanation: 'Combining like terms gives \\( 5y = 5 \\). Dividing both sides by 5 yields \\( y = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( x \\).',
                    workingLatex: 'x = 2y = 2(1) = 2',
                    explanation: 'Substitute \\( y = 1 \\) back into \\( x = 2y \\).'
                }
            ],
            finalAnswer: '\\( x = 2, \\; y = 1 \\)'
        }
    },
    {
        id: 'el4-029',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( \\log_2 x = 1 + \\log_2 y \\) and \\( x = 3y - 4 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the first equation using the quotient law.',
                    workingLatex: '\\log_2 x - \\log_2 y = 1 \\Rightarrow \\log_2\\!\\left(\\frac{x}{y}\\right) = 1',
                    explanation: 'Subtract \\( \\log_2 y \\) from both sides, then apply the quotient law \\( \\log_2 x - \\log_2 y = \\log_2(x/y) \\) to combine into a single logarithm.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form.',
                    workingLatex: '\\frac{x}{y} = 2^1 = 2 \\Rightarrow x = 2y',
                    explanation: 'If \\( \\log_2(x/y) = 1 \\), then \\( x/y = 2^1 = 2 \\) by the definition of logarithms. Multiplying both sides by \\( y \\) gives \\( x = 2y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2y \\) into the second equation.',
                    workingLatex: '2y = 3y - 4 \\Rightarrow y = 4',
                    explanation: 'Replace \\( x \\) with \\( 2y \\) in the second equation, then subtract \\( 2y \\) from both sides to find \\( -y = -4 \\), giving \\( y = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( x \\).',
                    workingLatex: 'x = 2(4) = 8',
                    explanation: 'Substitute \\( y = 4 \\) back into \\( x = 2y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity of the solution.',
                    workingLatex: '\\log_2 8 = 3, \\quad 1 + \\log_2 4 = 1 + 2 = 3 \\quad \\checkmark',
                    explanation: 'Both \\( x = 8 \\) and \\( y = 4 \\) are positive, so the log arguments are valid. The original equation is satisfied.'
                }
            ],
            finalAnswer: '\\( x = 8, \\; y = 4 \\)'
        }
    },
    // TYPE I (Q30–33): Modelling with logarithms — exponential growth and decay
    {
        id: 'el4-030',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'A population of rabbits is modelled by \\( P = 120e^{0.04t} \\), where \\( P \\) is the population and \\( t \\) is the time in years.\n\n (a) Find the initial population.\n\n (b) Find the value of \\( t \\) when the population reaches 300. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'P = 120e^{0.04 \\times 0} = 120e^0 = 120',
                    explanation: 'When \\( t = 0 \\), the exponent is zero. Since \\( e^0 = 1 \\), the initial population is simply the coefficient, \\( P = 120 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( P = 300 \\).',
                    workingLatex: '120e^{0.04t} = 300',
                    explanation: 'We want to find when \\( P = 300 \\), so substitute this value into the model equation and solve for \\( t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate the exponential term.',
                    workingLatex: 'e^{0.04t} = \\frac{300}{120} = 2.5',
                    explanation: 'Divide both sides by 120 to isolate the exponential term. Simplifying the fraction gives \\( \\frac{300}{120} = 2.5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.04t = \\ln(2.5)',
                    explanation: '\\( \\ln(e^{0.04t}) = 0.04t \\) since \\( \\ln \\) and \\( e \\) are inverse functions.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln(2.5)}{0.04} \\approx \\frac{0.9163}{0.04} \\approx 22.9',
                    explanation: 'Divide by 0.04 and evaluate to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( P = 120 \\) \\quad (b) \\( t \\approx 22.9 \\) years'
        }
    },
    {
        id: 'el4-031',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'The temperature \\( T \\) (°C) of a cooling drink is modelled by \\( T = 80e^{-0.05t} + 20 \\), where \\( t \\) is the time in minutes.\n\n (a) State the initial temperature.\n\n (b) Find the time at which the drink reaches 40°C. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'T = 80e^0 + 20 = 80 + 20 = 100',
                    explanation: 'When \\( t = 0 \\), the exponent is zero. Since \\( e^0 = 1 \\), the exponential term equals 80, so the initial temperature is \\( 80 + 20 = 100 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( T = 40 \\).',
                    workingLatex: '80e^{-0.05t} + 20 = 40',
                    explanation: 'We want to find when \\( T = 40 \\), so substitute this value into the model equation and solve for \\( t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate the exponential term.',
                    workingLatex: '80e^{-0.05t} = 20 \\Rightarrow e^{-0.05t} = 0.25',
                    explanation: 'Subtract 20 from both sides to get \\( 80e^{-0.05t} = 20 \\), then divide both sides by 80 to isolate the exponential.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.05t = \\ln(0.25) = \\ln\\!\\left(\\frac{1}{4}\\right) = -\\ln 4',
                    explanation: 'Taking the natural logarithm of both sides gives \\( -0.05t = \\ln(0.25) \\). Using the power law, \\( \\ln(0.25) = \\ln(4^{-1}) = -\\ln 4 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 4}{0.05} \\approx \\frac{1.3863}{0.05} \\approx 27.7',
                    explanation: 'The negative signs cancel. Evaluate to 3 significant figures.'
                }
            ],
            finalAnswer: '(a) \\( 100\\,^\\circ\\!\\text{C} \\) \\quad (b) \\( t \\approx 27.7 \\) minutes'
        }
    },
    // TYPE J (Q32–35): Exam-style multi-part
    {
        id: 'el4-032',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Show that the equation \\( e^{2x} - 4e^x = 5 \\) can be written as \\( (e^x - 5)(e^x + 1) = 0 \\).\n\n (b) Hence solve \\( e^{2x} - 4e^x = 5 \\), giving any exact solutions.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Rearrange: subtract 5 from both sides.',
                    workingLatex: 'e^{2x} - 4e^x - 5 = 0',
                    explanation: 'Move all terms to one side to obtain a quadratic expression equal to zero. This is the standard form needed for factorisation.'
                },
                {
                    stepNumber: 2,
                    description: 'Let \\( y = e^x \\) and factorise \\( y^2 - 4y - 5 \\).',
                    workingLatex: '(y-5)(y+1) = 0',
                    explanation: 'The numbers \\( -5 \\) and \\( +1 \\) multiply to \\( -5 \\) and add to \\( -4 \\). Replacing \\( y \\) gives \\( (e^x - 5)(e^x + 1) = 0 \\) as required.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set each factor equal to zero.',
                    workingLatex: 'e^x = 5 \\quad \\text{or} \\quad e^x = -1',
                    explanation: 'From \\( (e^x - 5)(e^x + 1) = 0 \\), either \\( e^x - 5 = 0 \\) or \\( e^x + 1 = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Reject the invalid solution.',
                    workingLatex: 'e^x = -1 \\text{ has no real solution}',
                    explanation: '\\( e^x > 0 \\) for all real \\( x \\), so \\( e^x = -1 \\) is impossible.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve the valid equation.',
                    workingLatex: 'e^x = 5 \\Rightarrow x = \\ln 5',
                    explanation: 'Taking the natural logarithm of both sides gives the exact solution.'
                }
            ],
            finalAnswer: '\\( x = \\ln 5 \\)'
        }
    },
    {
        id: 'el4-033',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3(x+6) - \\log_3 x = 2 \\), giving your answer as an exact value.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Apply the quotient law.',
                    workingLatex: '\\log_3\\!\\left(\\frac{x+6}{x}\\right) = 2',
                    explanation: 'The quotient law states \\( \\log_3 a - \\log_3 b = \\log_3(a/b) \\), so the two log terms combine into a single logarithm.'
                },
                {
                    stepNumber: 2,
                    description: 'Convert to index form.',
                    workingLatex: '\\frac{x+6}{x} = 3^2 = 9',
                    explanation: 'By the definition of logarithms, if \\( \\log_3(\\text{something}) = 2 \\), then that something equals \\( 3^2 = 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply both sides by \\( x \\).',
                    workingLatex: 'x + 6 = 9x',
                    explanation: 'Multiply both sides by \\( x \\) to clear the fraction, giving a linear equation in \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Solve for \\( x \\).',
                    workingLatex: '6 = 8x \\Rightarrow x = \\frac{6}{8} = \\frac{3}{4}',
                    explanation: 'Subtract \\( x \\) from both sides to get \\( 6 = 8x \\), then divide both sides by 8 and simplify the fraction.'
                },
                {
                    stepNumber: 5,
                    description: 'Check validity: \\( x = \\frac{3}{4} > 0 \\) \\checkmark',
                    workingLatex: '\\log_3\\!\\left(\\frac{3}{4} + 6\\right) - \\log_3\\!\\left(\\frac{3}{4}\\right) = \\log_3\\!\\left(\\frac{27}{4} \\times \\frac{4}{3}\\right) = \\log_3 9 = 2 \\checkmark',
                    explanation: 'Both log arguments are positive and the equation is satisfied.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{3}{4} \\)'
        }
    },
    {
        id: 'el4-034',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: 'The value \\( V \\) (£) of a car after \\( t \\) years is modelled by \\( V = 18000 \\times 0.85^t \\).\n\n (a) Write down the initial value of the car.\n\n (b) Find the number of complete years for the car to first be worth less than £6000.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'V = 18000 \\times 0.85^0 = 18000',
                    explanation: 'When \\( t = 0 \\), the power \\( 0.85^0 = 1 \\), so the initial value is simply the coefficient, \\( V = 18000 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( V < 6000 \\) and solve.',
                    workingLatex: '18000 \\times 0.85^t < 6000 \\Rightarrow 0.85^t < \\frac{1}{3}',
                    explanation: 'Divide both sides by 18000 to isolate the exponential term. Since 18000 is positive, the direction of the inequality is unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log(0.85) < \\log\\!\\left(\\frac{1}{3}\\right)',
                    explanation: 'Taking \\( \\log \\) of both sides allows us to bring the exponent \\( t \\) down using the power law: \\( \\log(0.85^t) = t\\log(0.85) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( \\log(0.85) \\). Note: \\( \\log(0.85) < 0 \\) so the inequality reverses.',
                    workingLatex: 't > \\frac{\\log(1/3)}{\\log(0.85)} = \\frac{-0.4771}{-0.0706} \\approx 6.76',
                    explanation: 'Dividing by a negative number reverses the inequality sign.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the result.',
                    workingLatex: 't = 7 \\text{ complete years}',
                    explanation: 'The first complete year for which \\( t > 6.76 \\) is \\( t = 7 \\).'
                }
            ],
            finalAnswer: '(a) £18 000 \\quad (b) After \\( 7 \\) complete years'
        }
    },
    {
        id: 'el4-035',
        topicRef: 'el4',
        topicTitle: 'Solving Equations Involving Logarithms',
        difficulty: 'Foundation',
        questionText: '(a) Solve \\( \\ln(x^2 - 2x) = \\ln(8 - x^2) \\).\n\n (b) Verify that both solutions are valid by checking that the logarithm arguments are positive.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Since both sides are \\( \\ln \\) of the same base, equate the arguments.',
                    workingLatex: 'x^2 - 2x = 8 - x^2',
                    explanation: 'If \\( \\ln A = \\ln B \\) then \\( A = B \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange into standard quadratic form.',
                    workingLatex: '2x^2 - 2x - 8 = 0 \\Rightarrow x^2 - x - 4 = 0',
                    explanation: 'Move all terms to one side and divide by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve using the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 16}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}',
                    explanation: '\\( a=1, b=-1, c=-4 \\): discriminant \\( = 1 + 16 = 17 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the two solutions numerically.',
                    workingLatex: 'x = \\frac{1 + \\sqrt{17}}{2} \\approx 2.56 \\quad \\text{or} \\quad x = \\frac{1 - \\sqrt{17}}{2} \\approx -1.56',
                    explanation: 'Use a calculator to find \\( \\sqrt{17} \\approx 4.123 \\), giving the two decimal approximations needed for the validity check.'
                },
                {
                    stepNumber: 5,
                    description: '(b) Check \\( x \\approx 2.56 \\) gives positive arguments.',
                    workingLatex: 'x^2 - 2x \\approx 6.55 - 5.12 = 1.43 > 0 \\quad \\text{and} \\quad 8 - x^2 \\approx 8 - 6.55 = 1.45 > 0',
                    explanation: 'Both logarithm arguments are positive when \\( x = \\frac{1 + \\sqrt{17}}{2} \\), so this solution is valid.'
                },
                {
                    stepNumber: 6,
                    description: '(b) Check \\( x \\approx -1.56 \\) gives positive arguments.',
                    workingLatex: 'x^2 - 2x \\approx 2.43 + 3.12 = 5.55 > 0 \\quad \\text{and} \\quad 8 - x^2 \\approx 8 - 2.43 = 5.57 > 0',
                    explanation: 'Both logarithm arguments are also positive when \\( x = \\frac{1 - \\sqrt{17}}{2} \\), so this solution is valid too. Both solutions are accepted.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{1 + \\sqrt{17}}{2} \\) or \\( x = \\dfrac{1 - \\sqrt{17}}{2} \\)'
        }
    },

    // ─── Q36–70: Additional Solving Equations ──────────────────────

    {
        id: 'el4-036', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x = 64 \\).',
        marks: 1, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recognise \\( 64 \\) as a power of \\( 2 \\).', workingLatex: '2^x = 2^6 \\implies x = 6', explanation: 'Since \\( 64 = 2^6 \\), the bases match so we equate exponents directly.' }
        ], finalAnswer: '\\( x = 6 \\)' }
    },
    {
        id: 'el4-037', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Show that the equation \\( 2^{2x+1} - 15 \\cdot 2^x + 7 = 0 \\) can be written in the form \\( 2u^2 - 15u + 7 = 0 \\), where \\( u = 2^x \\). Hence solve the equation \\( 2^{2x+1} - 15 \\cdot 2^x + 7 = 0 \\), giving your answers to 3 significant figures where appropriate.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite \\( 2^{2x+1} \\) using index laws.', workingLatex: '2^{2x+1} = 2 \\cdot 2^{2x} = 2 \\cdot (2^x)^2', explanation: 'Using the rule \\( a^{m+n} = a^m \\cdot a^n \\), we split the exponent to separate out \\( 2^{2x} \\), which equals \\( (2^x)^2 \\).' },
            { stepNumber: 2, description: 'Substitute \\( u = 2^x \\) into the equation.', workingLatex: '2u^2 - 15u + 7 = 0', explanation: 'Replacing \\( (2^x)^2 \\) with \\( u^2 \\) and \\( 2^x \\) with \\( u \\) gives the required quadratic form.' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(2u - 1)(u - 7) = 0', explanation: 'We need two numbers whose product is \\( 2 \\times 7 = 14 \\) and whose sum is \\( -15 \\). These are \\( -1 \\) and \\( -14 \\), giving factors \\( (2u - 1)(u - 7) \\).' },
            { stepNumber: 4, description: 'Solve for \\( u \\).', workingLatex: 'u = \\frac{1}{2} \\quad \\text{or} \\quad u = 7', explanation: 'Set each factor equal to zero and solve.' },
            { stepNumber: 5, description: 'Substitute back \\( u = 2^x \\) and solve \\( 2^x = \\frac{1}{2} \\).', workingLatex: '2^x = \\frac{1}{2} = 2^{-1} \\implies x = -1', explanation: 'Since \\( \\frac{1}{2} = 2^{-1} \\), equating exponents gives \\( x = -1 \\) exactly.' },
            { stepNumber: 6, description: 'Solve \\( 2^x = 7 \\) by taking logarithms.', workingLatex: 'x = \\frac{\\ln 7}{\\ln 2} = 2.807... = 2.81 \\text{ (3 s.f.)}', explanation: 'Taking natural logarithms of both sides and applying the power rule gives \\( x \\ln 2 = \\ln 7 \\). Dividing and evaluating gives \\( x = 2.81 \\) to 3 significant figures.' },
            { stepNumber: 7, description: 'State both solutions.', workingLatex: 'x = -1 \\quad \\text{or} \\quad x = 2.81', explanation: 'Both values of \\( u \\) were positive, so both give valid solutions for \\( x \\).' }
        ], finalAnswer: '\\( x = -1 \\) or \\( x = 2.81 \\)' }
    },
    {
        id: 'el4-038', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 5^{x-1} = 25 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite \\( 25 \\) as a power of \\( 5 \\).', workingLatex: '5^{x-1} = 5^2', explanation: 'Since \\( 25 = 5^2 \\), both sides now share the same base.' },
            { stepNumber: 2, description: 'Equate the exponents and solve.', workingLatex: 'x - 1 = 2 \\implies x = 3', explanation: 'When the bases are equal, the exponents must be equal.' }
        ], finalAnswer: '\\( x = 3 \\)' }
    },
    {
        id: 'el4-039', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_3(x^2 + 3x) = \\log_3(2x + 6) \\). Show that one of the solutions must be rejected.',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equate the arguments of the logarithms.', workingLatex: 'x^2 + 3x = 2x + 6', explanation: 'Since \\( \\log_3 A = \\log_3 B \\implies A = B \\), we can set the arguments equal provided both are positive.' },
            { stepNumber: 2, description: 'Rearrange into standard quadratic form.', workingLatex: 'x^2 + 3x - 2x - 6 = 0 \\implies x^2 + x - 6 = 0', explanation: 'Subtract \\( 2x + 6 \\) from both sides and collect like terms.' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(x + 3)(x - 2) = 0', explanation: 'We need two numbers that multiply to \\( -6 \\) and add to \\( 1 \\), which are \\( 3 \\) and \\( -2 \\).' },
            { stepNumber: 4, description: 'Find the candidate solutions.', workingLatex: 'x = -3 \\quad \\text{or} \\quad x = 2', explanation: 'Set each factor equal to zero.' },
            { stepNumber: 5, description: 'Check validity of \\( x = -3 \\).', workingLatex: 'x^2 + 3x = 9 - 9 = 0 \\quad \\text{and} \\quad 2x + 6 = -6 + 6 = 0', explanation: 'When \\( x = -3 \\), both arguments equal \\( 0 \\). Since \\( \\log_3(0) \\) is undefined, this solution must be rejected.' },
            { stepNumber: 6, description: 'Check validity of \\( x = 2 \\).', workingLatex: 'x^2 + 3x = 4 + 6 = 10 > 0 \\quad \\text{and} \\quad 2x + 6 = 4 + 6 = 10 > 0', explanation: 'When \\( x = 2 \\), both arguments are \\( 10 \\), which is positive, so this solution is valid.' }
        ], finalAnswer: '\\( x = 2 \\)' }
    },
    {
        id: 'el4-040', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 4e^x - 12 = 0 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add \\( 12 \\) to both sides.', workingLatex: '4e^x = 12', explanation: 'Isolate the exponential term by moving the constant.' },
            { stepNumber: 2, description: 'Divide both sides by \\( 4 \\).', workingLatex: 'e^x = 3', explanation: 'This gives the exponential expression on its own.' },
            { stepNumber: 3, description: 'Take natural logarithms of both sides.', workingLatex: 'x = \\ln 3', explanation: 'Since \\( \\ln \\) is the inverse of \\( e \\), we get \\( x = \\ln 3 \\).' }
        ], finalAnswer: '\\( x = \\ln 3 \\)' }
    },
    {
        id: 'el4-041', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'A radioactive substance decays so that its mass \\( m \\) grams after \\( t \\) hours is given by \\( m = 80e^{-kt} \\), where \\( k \\) is a positive constant. After 5 hours the mass is 50 grams. (a) Find the exact value of \\( k \\). (b) Find the time at which the mass reaches 10 grams, giving your answer to 3 significant figures.',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( m = 50 \\) and \\( t = 5 \\) into the equation.', workingLatex: '50 = 80e^{-5k}', explanation: 'Use the given information that after 5 hours the mass is 50 grams.' },
            { stepNumber: 2, description: 'Isolate the exponential term.', workingLatex: 'e^{-5k} = \\frac{50}{80} = \\frac{5}{8}', explanation: 'Divide both sides by 80 and simplify the fraction.' },
            { stepNumber: 3, description: 'Take natural logarithms of both sides.', workingLatex: '-5k = \\ln\\frac{5}{8}', explanation: 'Applying \\( \\ln \\) to both sides converts the exponential equation into a linear equation in \\( k \\).' },
            { stepNumber: 4, description: 'Solve for \\( k \\) in exact form.', workingLatex: 'k = -\\frac{1}{5}\\ln\\frac{5}{8} = \\frac{1}{5}\\ln\\frac{8}{5}', explanation: 'Divide both sides by \\( -5 \\). Since \\( -\\ln\\frac{5}{8} = \\ln\\frac{8}{5} \\), the answer can be written with a positive logarithm.' },
            { stepNumber: 5, description: '(b) Set up the equation for the target mass.', workingLatex: '10 = 80e^{-kt}', explanation: 'Substitute \\( m = 10 \\) into the original equation to find the time when the mass reaches 10 grams.' },
            { stepNumber: 6, description: 'Isolate the exponential.', workingLatex: 'e^{-kt} = \\frac{10}{80} = \\frac{1}{8}', explanation: 'Divide both sides by 80 and simplify the fraction.' },
            { stepNumber: 7, description: 'Take natural logarithms and rearrange for \\( t \\).', workingLatex: '-kt = \\ln\\frac{1}{8} = -\\ln 8 \\implies t = \\frac{\\ln 8}{k}', explanation: 'Apply \\( \\ln \\) to both sides and rearrange for \\( t \\).' },
            { stepNumber: 8, description: 'Substitute the exact value of \\( k \\) and evaluate.', workingLatex: 't = \\frac{\\ln 8}{\\frac{1}{5}\\ln\\frac{8}{5}} = \\frac{5\\ln 8}{\\ln\\frac{8}{5}} = \\frac{5 \\times 2.0794...}{0.4700...} = 22.1 \\text{ (3 s.f.)}', explanation: 'Substitute \\( k = \\frac{1}{5}\\ln\\frac{8}{5} \\) and evaluate using a calculator, giving the answer to 3 significant figures.' }
        ], finalAnswer: '(a) \\( k = \\frac{1}{5}\\ln\\frac{8}{5} \\); (b) \\( t = 22.1 \\) hours' }
    },
    {
        id: 'el4-042', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^{2x} - 5 \\times 2^x + 4 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( u = 2^x \\).', workingLatex: 'u^2 - 5u + 4 = 0', explanation: 'Since \\( 2^{2x} = (2^x)^2 \\), the equation becomes a quadratic in \\( u \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic.', workingLatex: '(u - 1)(u - 4) = 0', explanation: 'We need two numbers that multiply to \\( 4 \\) and add to \\( -5 \\), which are \\( -1 \\) and \\( -4 \\).' },
            { stepNumber: 3, description: 'Find the values of \\( u \\).', workingLatex: 'u = 1 \\quad \\text{or} \\quad u = 4', explanation: 'Set each factor equal to zero. Both values are positive, which is necessary since \\( u = 2^x > 0 \\) for all \\( x \\).' },
            { stepNumber: 4, description: 'Solve \\( 2^x = 1 \\) for \\( x \\).', workingLatex: '2^x = 1 = 2^0 \\implies x = 0', explanation: 'Since \\( 2^0 = 1 \\), equating the exponents gives \\( x = 0 \\).' },
            { stepNumber: 5, description: 'Solve \\( 2^x = 4 \\) for \\( x \\).', workingLatex: '2^x = 4 = 2^2 \\implies x = 2', explanation: 'Since \\( 4 = 2^2 \\), equating the exponents gives \\( x = 2 \\).' }
        ], finalAnswer: '\\( x = 0 \\) or \\( x = 2 \\)' }
    },
    {
        id: 'el4-043', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 4e^x + 3 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( u = e^x \\).', workingLatex: 'u^2 - 4u + 3 = 0', explanation: 'Since \\( e^{2x} = (e^x)^2 \\), the equation becomes a quadratic in \\( u \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic.', workingLatex: '(u - 1)(u - 3) = 0', explanation: 'We need two numbers that multiply to \\( 3 \\) and add to \\( -4 \\), which are \\( -1 \\) and \\( -3 \\).' },
            { stepNumber: 3, description: 'Find the values of \\( u \\).', workingLatex: 'u = 1 \\quad \\text{or} \\quad u = 3', explanation: 'Both values are positive, so both are valid since \\( e^x > 0 \\).' },
            { stepNumber: 4, description: 'Substitute back and solve for \\( x \\).', workingLatex: 'e^x = 1 \\implies x = \\ln 1 = 0', explanation: 'Taking the natural logarithm of both sides gives \\( x = \\ln 1 = 0 \\), since \\( \\ln 1 = 0 \\).' },
            { stepNumber: 5, description: 'Solve the second equation for \\( x \\).', workingLatex: 'e^x = 3 \\implies x = \\ln 3', explanation: 'Taking the natural logarithm of both sides gives \\( x = \\ln 3 \\). Since \\( 3 > 0 \\), this is a valid solution.' }
        ], finalAnswer: '\\( x = 0 \\) or \\( x = \\ln 3 \\)' }
    },
    {
        id: 'el4-044', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_2(x + 3) = 4 \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert from logarithmic to exponential form.', workingLatex: 'x + 3 = 2^4 = 16', explanation: 'If \\( \\log_2 A = B \\) then \\( A = 2^B \\).' },
            { stepNumber: 2, description: 'Solve for \\( x \\).', workingLatex: 'x = 16 - 3 = 13', explanation: 'Subtract \\( 3 \\) from both sides.' }
        ], finalAnswer: '\\( x = 13 \\)' }
    },
    {
        id: 'el4-045', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_3 x + \\log_3(x + 6) = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the addition rule for logarithms.', workingLatex: '\\log_3[x(x+6)] = 3', explanation: 'The rule \\( \\log_a A + \\log_a B = \\log_a(AB) \\) combines the two terms.' },
            { stepNumber: 2, description: 'Convert to exponential form.', workingLatex: 'x(x + 6) = 3^3 = 27', explanation: 'If \\( \\log_3 A = 3 \\) then \\( A = 3^3 = 27 \\).' },
            { stepNumber: 3, description: 'Expand and rearrange into standard form.', workingLatex: 'x^2 + 6x - 27 = 0', explanation: 'Move all terms to one side to form a quadratic equation.' },
            { stepNumber: 4, description: 'Factorise the quadratic.', workingLatex: '(x + 9)(x - 3) = 0', explanation: 'We need two numbers that multiply to \\( -27 \\) and add to \\( 6 \\), which are \\( 9 \\) and \\( -3 \\).' },
            { stepNumber: 5, description: 'Choose the valid solution.', workingLatex: 'x = 3', explanation: 'Reject \\( x = -9 \\) because the argument of a logarithm must be positive, and \\( \\log_3(-9) \\) is undefined.' }
        ], finalAnswer: '\\( x = 3 \\)' }
    },
    {
        id: 'el4-046', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 7^x = 3^{x+2} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take natural logarithms of both sides.', workingLatex: 'x \\ln 7 = (x + 2) \\ln 3', explanation: 'Apply the power rule to bring the exponents down as coefficients.' },
            { stepNumber: 2, description: 'Expand the right-hand side.', workingLatex: 'x \\ln 7 = x \\ln 3 + 2 \\ln 3', explanation: 'Distribute \\( \\ln 3 \\) across the bracket.' },
            { stepNumber: 3, description: 'Collect \\( x \\) terms on one side.', workingLatex: 'x(\\ln 7 - \\ln 3) = 2 \\ln 3', explanation: 'Subtract \\( x \\ln 3 \\) from both sides and factor out \\( x \\) to isolate it on the left-hand side.' },
            { stepNumber: 4, description: 'Divide and evaluate.', workingLatex: 'x = \\frac{2 \\ln 3}{\\ln 7 - \\ln 3} = \\frac{2.197}{0.847} = 2.59', explanation: 'Divide both sides by \\( (\\ln 7 - \\ln 3) \\), then use a calculator to evaluate and round to 3 significant figures.' }
        ], finalAnswer: '\\( x = 2.59 \\)' }
    },
    {
        id: 'el4-047', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 2 \\times 3^x = 5 \\times 2^x \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide both sides by \\( 2 \\times 2^x \\).', workingLatex: '\\frac{3^x}{2^x} = \\frac{5}{2}', explanation: 'Group the exponentials on one side and the constants on the other.' },
            { stepNumber: 2, description: 'Simplify to a single exponential.', workingLatex: '\\left(\\frac{3}{2}\\right)^x = 2.5', explanation: 'Use the rule \\( \\frac{a^x}{b^x} = \\left(\\frac{a}{b}\\right)^x \\).' },
            { stepNumber: 3, description: 'Take natural logarithms of both sides.', workingLatex: 'x \\ln 1.5 = \\ln 2.5', explanation: 'Apply \\( \\ln \\) to both sides. The power rule \\( \\ln(a^x) = x \\ln a \\) brings the exponent \\( x \\) down as a coefficient of \\( \\ln 1.5 \\).' },
            { stepNumber: 4, description: 'Divide and evaluate.', workingLatex: 'x = \\frac{\\ln 2.5}{\\ln 1.5} = \\frac{0.916}{0.405} = 2.26', explanation: 'Divide both sides by \\( \\ln 1.5 \\), then use a calculator to evaluate and round to 3 significant figures.' }
        ], finalAnswer: '\\( x = 2.26 \\)' }
    },
    {
        id: 'el4-048', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x - 6e^{-x} = 1 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply every term by \\( e^x \\).', workingLatex: 'e^{2x} - e^x - 6 = 0', explanation: 'This eliminates the \\( e^{-x} \\) term since \\( e^x \\cdot e^{-x} = 1 \\).' },
            { stepNumber: 2, description: 'Substitute \\( u = e^x \\).', workingLatex: 'u^2 - u - 6 = 0', explanation: 'Since \\( e^{2x} = (e^x)^2 \\), this becomes a quadratic in \\( u \\).' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(u - 3)(u + 2) = 0', explanation: 'We need two numbers that multiply to \\( -6 \\) and add to \\( -1 \\), which are \\( -3 \\) and \\( 2 \\).' },
            { stepNumber: 4, description: 'Find valid values of \\( u \\).', workingLatex: 'u = 3', explanation: 'Reject \\( u = -2 \\) since \\( e^x > 0 \\) for all \\( x \\). Only \\( u = 3 \\) is valid.' },
            { stepNumber: 5, description: 'Substitute back and solve for \\( x \\).', workingLatex: 'e^x = 3 \\implies x = \\ln 3', explanation: 'Substituting \\( u = 3 \\) back gives \\( e^x = 3 \\). Taking the natural logarithm of both sides yields \\( x = \\ln 3 \\).' }
        ], finalAnswer: '\\( x = \\ln 3 \\)' }
    },
    {
        id: 'el4-049', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log_5(2x - 1) - \\log_5(x + 2) = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the subtraction rule for logarithms.', workingLatex: '\\log_5\\frac{2x-1}{x+2} = 1', explanation: 'The rule \\( \\log_a A - \\log_a B = \\log_a\\frac{A}{B} \\) combines the two terms.' },
            { stepNumber: 2, description: 'Convert to exponential form.', workingLatex: '\\frac{2x-1}{x+2} = 5^1 = 5', explanation: 'If \\( \\log_5 A = 1 \\) then \\( A = 5 \\).' },
            { stepNumber: 3, description: 'Cross-multiply and solve for \\( x \\).', workingLatex: '2x - 1 = 5(x + 2) \\implies 2x - 1 = 5x + 10 \\implies -3x = 11 \\implies x = -\\frac{11}{3}', explanation: 'Multiply both sides by \\( (x + 2) \\), expand the bracket on the right, then collect all \\( x \\) terms on one side and solve.' },
            { stepNumber: 4, description: 'Check validity of the solution.', workingLatex: '2\\left(-\\frac{11}{3}\\right) - 1 = -\\frac{25}{3} < 0', explanation: 'The argument \\( 2x - 1 \\) is negative, so \\( \\log_5(2x-1) \\) is undefined. There is no valid solution.' }
        ], finalAnswer: 'No solution' }
    },
    {
        id: 'el4-050', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'A population grows according to \\( P = 500e^{0.03t} \\). Find \\( t \\) when \\( P = 1000 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( P = 1000 \\) and divide by \\( 500 \\).', workingLatex: '1000 = 500e^{0.03t} \\implies e^{0.03t} = 2', explanation: 'Isolate the exponential by dividing both sides by \\( 500 \\).' },
            { stepNumber: 2, description: 'Take natural logarithms of both sides.', workingLatex: '0.03t = \\ln 2', explanation: 'Since \\( \\ln e^{0.03t} = 0.03t \\), the logarithm and exponential cancel.' },
            { stepNumber: 3, description: 'Divide both sides by \\( 0.03 \\).', workingLatex: 't = \\frac{\\ln 2}{0.03} = 23.1', explanation: 'Evaluate using a calculator and round to 3 significant figures.' }
        ], finalAnswer: '\\( t = 23.1 \\) years' }
    },
    {
        id: 'el4-051', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( 4^x + 4^{1-x} = 5 \\).',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite \\( 4^{1-x} \\) using index laws.', workingLatex: '4^{1-x} = \\frac{4^1}{4^x} = \\frac{4}{4^x}', explanation: 'Using \\( a^{m-n} = \\frac{a^m}{a^n} \\), rewrite the second term to reveal a common structure.' },
            { stepNumber: 2, description: 'Multiply every term by \\( 4^x \\) to clear the fraction.', workingLatex: '(4^x)^2 + 4 = 5 \\cdot 4^x', explanation: 'Multiplying through by \\( 4^x \\) gives \\( 4^x \\cdot 4^x = (4^x)^2 \\) on the left, \\( 4 \\) in the middle, and \\( 5 \\cdot 4^x \\) on the right.' },
            { stepNumber: 3, description: 'Let \\( u = 4^x \\) and rearrange into standard form.', workingLatex: 'u^2 - 5u + 4 = 0', explanation: 'Substituting \\( u = 4^x \\) and moving all terms to one side gives a quadratic equation in \\( u \\).' },
            { stepNumber: 4, description: 'Factorise the quadratic.', workingLatex: '(u - 1)(u - 4) = 0', explanation: 'We need two numbers that multiply to \\( 4 \\) and add to \\( -5 \\), which are \\( -1 \\) and \\( -4 \\).' },
            { stepNumber: 5, description: 'Solve for \\( u \\).', workingLatex: 'u = 1 \\quad \\text{or} \\quad u = 4', explanation: 'Both values are positive, so both are valid since \\( 4^x > 0 \\) for all \\( x \\).' },
            { stepNumber: 6, description: 'Solve \\( 4^x = 1 \\).', workingLatex: '4^x = 4^0 \\implies x = 0', explanation: 'Since \\( 4^0 = 1 \\), equating exponents gives \\( x = 0 \\).' },
            { stepNumber: 7, description: 'Solve \\( 4^x = 4 \\).', workingLatex: '4^x = 4^1 \\implies x = 1', explanation: 'Since \\( 4 = 4^1 \\), equating the exponents gives \\( x = 1 \\). This completes the solution with two valid values.' }
        ], finalAnswer: '\\( x = 0 \\) or \\( x = 1 \\)' }
    },
    {
        id: 'el4-052', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 9^x = 3^{x+4} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite \\(9\\) as \\(3^2\\)', workingLatex: '(3^2)^x = 3^{x+4} \\implies 3^{2x} = 3^{x+4}', explanation: 'Since \\(9 = 3^2\\), rewrite the left-hand side so both sides have the same base.' },
            { stepNumber: 2, description: 'Equate the exponents', workingLatex: '2x = x + 4', explanation: 'When the bases are equal, the exponents must be equal.' },
            { stepNumber: 3, description: 'Solve for \\(x\\)', workingLatex: '2x - x = 4 \\implies x = 4', explanation: 'Subtract \\(x\\) from both sides to find \\(x = 4\\).' }
        ], finalAnswer: '\\(x = 4\\)' }
    },
    {
        id: 'el4-053', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 5e^{2x} - 3e^x = 2 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\(u = e^x\\)', workingLatex: '5u^2 - 3u = 2', explanation: 'Replace \\(e^x\\) with \\(u\\) and \\(e^{2x}\\) with \\(u^2\\) to obtain a quadratic.' },
            { stepNumber: 2, description: 'Rearrange to standard form', workingLatex: '5u^2 - 3u - 2 = 0', explanation: 'Move all terms to one side.' },
            { stepNumber: 3, description: 'Factorise the quadratic', workingLatex: '(5u + 2)(u - 1) = 0', explanation: 'Factor to find \\(u = -\\frac{2}{5}\\) or \\(u = 1\\).' },
            { stepNumber: 4, description: 'Reject the invalid solution', workingLatex: 'u = -\\tfrac{2}{5} \\text{ is rejected since } e^x > 0', explanation: 'The exponential function is always positive, so \\(u = -\\frac{2}{5}\\) is not valid.' },
            { stepNumber: 5, description: 'Back-substitute for \\(x\\)', workingLatex: 'e^x = 1 \\implies x = 0', explanation: 'Since \\(e^0 = 1\\), the only solution is \\(x = 0\\).' }
        ], finalAnswer: '\\(x = 0\\)' }
    },
    {
        id: 'el4-054', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln x + \\ln(x - 2) = \\ln 15 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the addition law for logarithms', workingLatex: '\\ln[x(x - 2)] = \\ln 15', explanation: 'The product rule \\(\\ln a + \\ln b = \\ln(ab)\\) combines the two logarithms on the left.' },
            { stepNumber: 2, description: 'Remove the logarithms', workingLatex: 'x(x - 2) = 15', explanation: 'Since the natural logs are equal, their arguments must be equal.' },
            { stepNumber: 3, description: 'Expand and rearrange', workingLatex: 'x^2 - 2x - 15 = 0', explanation: 'Rearrange into standard quadratic form.' },
            { stepNumber: 4, description: 'Factorise and solve', workingLatex: '(x - 5)(x + 3) = 0 \\implies x = 5', explanation: 'Reject \\(x = -3\\) because \\(\\ln x\\) requires \\(x > 0\\), and \\(x - 2 > 0\\) requires \\(x > 2\\).' }
        ], finalAnswer: '\\(x = 5\\)' }
    },
    {
        id: 'el4-055', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'The half-life of a substance is 10 hours. If \\( m = m_0 e^{-kt} \\), find \\( k \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up the half-life condition', workingLatex: 'm_0 e^{-10k} = \\frac{m_0}{2} \\implies e^{-10k} = \\frac{1}{2}', explanation: 'At \\(t = 10\\), the mass is half the original, so divide both sides by \\(m_0\\).' },
            { stepNumber: 2, description: 'Take the natural logarithm', workingLatex: '-10k = \\ln \\frac{1}{2} = -\\ln 2', explanation: 'Apply \\(\\ln\\) to both sides and use \\(\\ln\\frac{1}{2} = -\\ln 2\\).' },
            { stepNumber: 3, description: 'Solve for \\(k\\)', workingLatex: 'k = \\frac{\\ln 2}{10} \\approx 0.0693', explanation: 'Divide both sides by \\(-10\\) to isolate \\(k\\).' }
        ], finalAnswer: '\\(k = \\frac{\\ln 2}{10} \\approx 0.0693\\)' }
    },
    {
        id: 'el4-056', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\log_3 x = \\log_3(5x + 6) \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule to the LHS', workingLatex: '\\log_3 x^2 = \\log_3(5x + 6)', explanation: 'Using \\(n\\log_a x = \\log_a x^n\\), rewrite \\(2\\log_3 x\\) as \\(\\log_3 x^2\\).' },
            { stepNumber: 2, description: 'Remove the logarithms', workingLatex: 'x^2 = 5x + 6', explanation: 'Since both sides are \\(\\log_3\\) of something, set the arguments equal.' },
            { stepNumber: 3, description: 'Rearrange into a quadratic', workingLatex: 'x^2 - 5x - 6 = 0', explanation: 'Subtract \\(5x + 6\\) from both sides.' },
            { stepNumber: 4, description: 'Factorise and solve', workingLatex: '(x - 6)(x + 1) = 0 \\implies x = 6', explanation: 'Reject \\(x = -1\\) because \\(\\log_3 x\\) requires \\(x > 0\\).' }
        ], finalAnswer: '\\(x = 6\\)' }
    },
    {
        id: 'el4-057', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 3^{x+1} = 4^{x-1} \\). Give answer to 3 s.f.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take natural logarithm of both sides', workingLatex: '(x+1)\\ln 3 = (x-1)\\ln 4', explanation: 'Taking \\(\\ln\\) of both sides and applying the power rule \\(\\ln a^n = n\\ln a\\) brings the exponents down as coefficients.' },
            { stepNumber: 2, description: 'Expand the brackets', workingLatex: 'x\\ln 3 + \\ln 3 = x\\ln 4 - \\ln 4', explanation: 'Distribute \\(\\ln 3\\) and \\(\\ln 4\\) across their respective brackets to separate the \\(x\\) terms from the constants.' },
            { stepNumber: 3, description: 'Collect \\(x\\) terms on one side', workingLatex: 'x\\ln 3 - x\\ln 4 = -\\ln 4 - \\ln 3 \\implies x(\\ln 3 - \\ln 4) = -(\\ln 4 + \\ln 3)', explanation: 'Move all terms containing \\(x\\) to the left and all constant terms to the right, then factor out \\(x\\).' },
            { stepNumber: 4, description: 'Solve for \\(x\\) and evaluate', workingLatex: 'x = \\frac{-(\\ln 4 + \\ln 3)}{\\ln 3 - \\ln 4} = \\frac{\\ln 12}{\\ln(4/3)} = 8.64', explanation: 'Negate numerator and denominator to obtain \\(\\frac{\\ln 12}{\\ln(4/3)}\\), using \\(\\ln 4 + \\ln 3 = \\ln 12\\). Evaluating gives \\(x = 8.64\\) to 3 significant figures.' }
        ], finalAnswer: '\\(x = 8.64\\)' }
    },
    {
        id: 'el4-058', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( e^x + 2e^{-x} = 3 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply every term by \\(e^x\\)', workingLatex: 'e^{2x} + 2 = 3e^x', explanation: 'Multiplying through by \\(e^x\\) eliminates the \\(e^{-x}\\) term.' },
            { stepNumber: 2, description: 'Rearrange to standard form', workingLatex: 'e^{2x} - 3e^x + 2 = 0', explanation: 'Move all terms to one side to form a quadratic in \\(e^x\\).' },
            { stepNumber: 3, description: 'Factorise the quadratic', workingLatex: '(e^x - 1)(e^x - 2) = 0', explanation: 'This factorises as a standard quadratic with \\(e^x\\) playing the role of the variable.' },
            { stepNumber: 4, description: 'Solve \\(e^x = 1\\)', workingLatex: 'e^x = 1 \\implies x = 0', explanation: 'Since \\(e^0 = 1\\), this gives \\(x = 0\\).' },
            { stepNumber: 5, description: 'Solve \\(e^x = 2\\)', workingLatex: 'e^x = 2 \\implies x = \\ln 2', explanation: 'Take the natural logarithm of both sides to get \\(x = \\ln 2\\). Both solutions are valid since \\(e^x\\) is always positive.' }
        ], finalAnswer: '\\(x = 0\\) or \\(x = \\ln 2\\)' }
    },
    {
        id: 'el4-059', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( \\log(x + 5) + \\log(x - 2) = \\log 18 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the addition law for logarithms', workingLatex: '\\log[(x + 5)(x - 2)] = \\log 18', explanation: 'The product rule \\(\\log a + \\log b = \\log(ab)\\) combines the left-hand side.' },
            { stepNumber: 2, description: 'Remove the logarithms', workingLatex: '(x + 5)(x - 2) = 18', explanation: 'Since the logs are equal, their arguments must be equal.' },
            { stepNumber: 3, description: 'Expand and rearrange', workingLatex: 'x^2 + 3x - 10 = 18 \\implies x^2 + 3x - 28 = 0', explanation: 'Expand the brackets and subtract 18 from both sides.' },
            { stepNumber: 4, description: 'Factorise and solve', workingLatex: '(x + 7)(x - 4) = 0 \\implies x = 4', explanation: 'Reject \\(x = -7\\) because \\(\\log(x - 2)\\) requires \\(x > 2\\).' }
        ], finalAnswer: '\\(x = 4\\)' }
    },
    {
        id: 'el4-060', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 2^x + 2^{x+2} = 40 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factor out \\(2^x\\)', workingLatex: '2^x(1 + 2^2) = 40 \\implies 5 \\cdot 2^x = 40', explanation: 'Rewrite \\(2^{x+2}\\) as \\(2^x \\cdot 4\\), then factor out \\(2^x\\).' },
            { stepNumber: 2, description: 'Solve for \\(2^x\\)', workingLatex: '2^x = 8', explanation: 'Divide both sides by 5 to isolate the exponential term \\(2^x\\).' },
            { stepNumber: 3, description: 'Find \\(x\\)', workingLatex: '2^x = 2^3 \\implies x = 3', explanation: 'Since \\(8 = 2^3\\), the exponents must be equal.' }
        ], finalAnswer: '\\(x = 3\\)' }
    },
    {
        id: 'el4-061', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_2 x + \\log_4 x + \\log_8 x = 11 \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the change of base formula to express each logarithm in base 2.', workingLatex: '\\log_4 x = \\frac{\\log_2 x}{\\log_2 4} = \\frac{\\log_2 x}{2}, \\qquad \\log_8 x = \\frac{\\log_2 x}{\\log_2 8} = \\frac{\\log_2 x}{3}', explanation: 'The change of base formula \\( \\log_a x = \\frac{\\log_b x}{\\log_b a} \\) converts all terms to base 2, since \\( 4 = 2^2 \\) and \\( 8 = 2^3 \\).' },
            { stepNumber: 2, description: 'Substitute into the original equation.', workingLatex: '\\log_2 x + \\frac{\\log_2 x}{2} + \\frac{\\log_2 x}{3} = 11', explanation: 'Replace each logarithm with its base-2 equivalent.' },
            { stepNumber: 3, description: 'Let \\( y = \\log_2 x \\) and combine the fractions.', workingLatex: 'y + \\frac{y}{2} + \\frac{y}{3} = 11', explanation: 'Introducing \\( y = \\log_2 x \\) simplifies the notation. The left-hand side has a common denominator of 6.' },
            { stepNumber: 4, description: 'Add the fractions with common denominator 6.', workingLatex: '\\frac{6y + 3y + 2y}{6} = 11 \\implies \\frac{11y}{6} = 11', explanation: 'Multiply each term by the appropriate factor to achieve denominator 6, then combine.' },
            { stepNumber: 5, description: 'Solve for \\( y \\).', workingLatex: '11y = 66 \\implies y = 6', explanation: 'Multiply both sides by 6, then divide by 11.' },
            { stepNumber: 6, description: 'Convert back to \\( x \\).', workingLatex: '\\log_2 x = 6 \\implies x = 2^6 = 64', explanation: 'Since \\( y = \\log_2 x = 6 \\), converting to exponential form gives \\( x = 64 \\).' }
        ], finalAnswer: '\\( x = 64 \\)' }
    },
    {
        id: 'el4-062', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( \\ln(x^2) = 6 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the identity for \\( \\ln(x^2) \\).', workingLatex: '\\ln(x^2) = 2\\ln|x| = 6', explanation: 'Since \\( \\ln(x^2) = 2\\ln|x| \\) (valid for all \\( x \\neq 0 \\)), we can simplify.' },
            { stepNumber: 2, description: 'Divide both sides by 2.', workingLatex: '\\ln|x| = 3', explanation: 'Dividing both sides by 2 isolates \\( \\ln|x| \\), giving a simpler equation to exponentiate.' },
            { stepNumber: 3, description: 'Exponentiate both sides.', workingLatex: '|x| = e^3', explanation: 'Apply \\( e \\) to both sides to undo the natural logarithm.' },
            { stepNumber: 4, description: 'State both solutions.', workingLatex: 'x = e^3 \\text{ or } x = -e^3', explanation: 'Since \\( |x| = e^3 \\), both the positive and negative values are valid solutions.' }
        ], finalAnswer: '\\( x = e^3 \\) or \\( x = -e^3 \\)' }
    },
    {
        id: 'el4-063', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'An investment of \\( \\pounds 2000 \\) grows to \\( \\pounds 3000 \\) at 4% compound interest. Find the number of years.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up the compound interest equation', workingLatex: '2000 \\times 1.04^n = 3000', explanation: 'The compound interest formula gives the value after \\(n\\) years at 4% growth.' },
            { stepNumber: 2, description: 'Isolate the exponential term', workingLatex: '1.04^n = 1.5', explanation: 'Divide both sides by 2000 to isolate \\(1.04^n\\). The ratio \\(\\frac{3000}{2000} = 1.5\\) represents the growth factor.' },
            { stepNumber: 3, description: 'Take logarithms of both sides', workingLatex: 'n\\ln 1.04 = \\ln 1.5', explanation: 'Apply \\(\\ln\\) to both sides and use the power rule to bring \\(n\\) down.' },
            { stepNumber: 4, description: 'Solve for \\(n\\) and interpret', workingLatex: 'n = \\frac{\\ln 1.5}{\\ln 1.04} = \\frac{0.405}{0.0392} = 10.3', explanation: 'Since \\(n\\) must be a whole number of years and \\(10.3\\) years is needed, round up to 11.' }
        ], finalAnswer: '\\(11\\) years (round up)' }
    },
    {
        id: 'el4-064', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve simultaneously: \\( \\log_2 x + \\log_2 y = 5 \\) and \\( \\log_2 x - \\log_2 y = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the two equations', workingLatex: '2\\log_2 x = 6 \\implies \\log_2 x = 3', explanation: 'Adding eliminates \\(\\log_2 y\\), leaving an equation in \\(\\log_2 x\\) alone.' },
            { stepNumber: 2, description: 'Find \\(x\\)', workingLatex: 'x = 2^3 = 8', explanation: 'Convert from logarithmic to exponential form: if \\(\\log_2 x = 3\\), then \\(x = 2^3 = 8\\).' },
            { stepNumber: 3, description: 'Subtract the two equations', workingLatex: '2\\log_2 y = 4 \\implies \\log_2 y = 2', explanation: 'Subtracting eliminates \\(\\log_2 x\\), leaving an equation in \\(\\log_2 y\\) alone.' },
            { stepNumber: 4, description: 'Find \\(y\\)', workingLatex: 'y = 2^2 = 4', explanation: 'Convert from logarithmic to exponential form: if \\(\\log_2 y = 2\\), then \\(y = 2^2 = 4\\). Both values satisfy the original equations.' }
        ], finalAnswer: '\\(x = 8\\), \\(y = 4\\)' }
    },
    {
        id: 'el4-065', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} + 3e^x - 10 = 0 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\(u = e^x\\)', workingLatex: 'u^2 + 3u - 10 = 0', explanation: 'Replace \\(e^x\\) with \\(u\\) and \\(e^{2x}\\) with \\(u^2\\) to form a quadratic.' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(u + 5)(u - 2) = 0', explanation: 'Factor to find \\(u = -5\\) or \\(u = 2\\).' },
            { stepNumber: 3, description: 'Reject the invalid solution', workingLatex: 'u = -5 \\text{ is rejected since } e^x > 0', explanation: 'The exponential function is always positive, so \\(u = -5\\) is not valid.' },
            { stepNumber: 4, description: 'Accept the valid solution', workingLatex: 'u = 2 \\implies e^x = 2', explanation: 'Only \\(u = 2\\) gives a valid value for \\(e^x\\).' },
            { stepNumber: 5, description: 'Solve for \\(x\\)', workingLatex: 'x = \\ln 2', explanation: 'Take the natural logarithm of both sides to obtain \\(x = \\ln 2\\). This is the only solution to the original equation.' }
        ], finalAnswer: '\\(x = \\ln 2\\)' }
    },
    {
        id: 'el4-066', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( (\\log x)^2 = \\log x^4 \\). (Base 10)',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule to the RHS', workingLatex: '(\\log x)^2 = 4\\log x', explanation: 'Using \\(\\log x^4 = 4\\log x\\), simplify the right-hand side.' },
            { stepNumber: 2, description: 'Rearrange and factorise', workingLatex: '(\\log x)^2 - 4\\log x = 0 \\implies \\log x(\\log x - 4) = 0', explanation: 'Subtract \\(4\\log x\\) from both sides, then factor out \\(\\log x\\).' },
            { stepNumber: 3, description: 'Solve \\(\\log x = 0\\)', workingLatex: '\\log x = 0 \\implies x = 10^0 = 1', explanation: 'Convert from logarithmic to exponential form. Since \\(10^0 = 1\\), the first solution is \\(x = 1\\).' },
            { stepNumber: 4, description: 'Solve \\(\\log x = 4\\)', workingLatex: '\\log x = 4 \\implies x = 10^4 = 10000', explanation: 'Convert from logarithmic to exponential form. Since \\(10^4 = 10000\\), the second solution is \\(x = 10000\\).' }
        ], finalAnswer: '\\(x = 1\\) or \\(x = 10000\\)' }
    },
    {
        id: 'el4-067', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( 2\\ln(x + 1) - \\ln x = \\ln 4 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the power rule to the first term', workingLatex: '\\ln(x + 1)^2 - \\ln x = \\ln 4', explanation: 'Rewrite \\(2\\ln(x+1)\\) as \\(\\ln(x+1)^2\\) using the power rule.' },
            { stepNumber: 2, description: 'Use the subtraction law', workingLatex: '\\ln\\frac{(x+1)^2}{x} = \\ln 4', explanation: 'Apply \\(\\ln a - \\ln b = \\ln\\frac{a}{b}\\) to combine into a single logarithm.' },
            { stepNumber: 3, description: 'Remove the logarithms', workingLatex: '\\frac{(x+1)^2}{x} = 4', explanation: 'Since both sides are equal logarithms, their arguments must be equal. This removes the \\(\\ln\\) from each side.' },
            { stepNumber: 4, description: 'Multiply through and solve', workingLatex: '(x+1)^2 = 4x \\implies x^2 + 2x + 1 = 4x \\implies x^2 - 2x + 1 = 0 \\implies (x - 1)^2 = 0', explanation: 'Multiply both sides by \\(x\\) and expand. The resulting quadratic is a perfect square, giving the repeated root \\(x = 1\\). This is valid since \\(x = 1 > 0\\).' }
        ], finalAnswer: '\\(x = 1\\)' }
    },
    {
        id: 'el4-068', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'A cooling object has temperature \\( T = 25 + 60e^{-0.04t} \\). Find when \\( T = 40 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\(T = 40\\)', workingLatex: '40 = 25 + 60e^{-0.04t} \\implies 15 = 60e^{-0.04t}', explanation: 'Subtract 25 from both sides to isolate the exponential term.' },
            { stepNumber: 2, description: 'Divide both sides by 60', workingLatex: 'e^{-0.04t} = 0.25', explanation: 'Dividing gives \\(\\frac{15}{60} = 0.25\\), which isolates the exponential on the left-hand side.' },
            { stepNumber: 3, description: 'Take the natural logarithm', workingLatex: '-0.04t = \\ln 0.25 = -1.386...', explanation: 'Apply \\(\\ln\\) to both sides. Since \\(\\ln(e^k) = k\\), the left-hand side simplifies to \\(-0.04t\\).' },
            { stepNumber: 4, description: 'Solve for \\(t\\)', workingLatex: 't = \\frac{-1.386}{-0.04} = 34.7', explanation: 'Divide both sides by \\(-0.04\\) and the two negatives cancel, giving \\(t \\approx 34.7\\) minutes.' }
        ], finalAnswer: '\\(t = 34.7\\) minutes' }
    },
    {
        id: 'el4-069', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Find the exact solution of \\( 3^x = 2 \\times 5^x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Divide both sides by \\( 5^x \\).', workingLatex: '\\frac{3^x}{5^x} = 2', explanation: 'Dividing by \\( 5^x \\) collects all the \\( x \\)-terms on one side.' },
            { stepNumber: 2, description: 'Rewrite using index laws.', workingLatex: '\\left(\\frac{3}{5}\\right)^x = 2', explanation: 'Since \\( \\frac{3^x}{5^x} = \\left(\\frac{3}{5}\\right)^x \\).' },
            { stepNumber: 3, description: 'Take natural logarithms of both sides.', workingLatex: 'x \\ln\\left(\\frac{3}{5}\\right) = \\ln 2', explanation: 'Using the power rule \\( \\ln a^x = x \\ln a \\).' },
            { stepNumber: 4, description: 'Solve for \\( x \\).', workingLatex: 'x = \\frac{\\ln 2}{\\ln(3/5)} = \\frac{\\ln 2}{\\ln 3 - \\ln 5}', explanation: 'Divide both sides by \\( \\ln(3/5) \\). Note that \\( \\ln(3/5) = \\ln 3 - \\ln 5 \\).' }
        ], finalAnswer: '\\( x = \\frac{\\ln 2}{\\ln 3 - \\ln 5} \\)' }
    },
    {
        id: 'el4-070', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Foundation',
        questionText: 'Solve \\( e^{2x} - 5e^x = -6 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add 6 to both sides.', workingLatex: 'e^{2x} - 5e^x + 6 = 0', explanation: 'Rearranging into standard form with zero on the right.' },
            { stepNumber: 2, description: 'Substitute \\( u = e^x \\).', workingLatex: 'u^2 - 5u + 6 = 0', explanation: 'Since \\( e^{2x} = (e^x)^2 = u^2 \\), this is a quadratic in \\( u \\).' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(u - 2)(u - 3) = 0', explanation: 'We need two numbers that multiply to 6 and add to \\( -5 \\).' },
            { stepNumber: 4, description: 'Solve for \\( u \\).', workingLatex: 'u = 2 \\quad \\text{or} \\quad u = 3', explanation: 'Both values are positive, so both are valid since \\( u = e^x > 0 \\).' },
            { stepNumber: 5, description: 'Back-substitute and solve for \\( x \\).', workingLatex: 'e^x = 2 \\implies x = \\ln 2 \\quad \\text{or} \\quad e^x = 3 \\implies x = \\ln 3', explanation: 'Take natural logarithms of both equations.' }
        ], finalAnswer: '\\( x = \\ln 2 \\) or \\( x = \\ln 3 \\)' }
    },
    {
        id: 'el4-071', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( 3^{2x} - 10 \\cdot 3^x + 9 = 0 \\). Give exact answers.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recognise that \\( 3^{2x} = (3^x)^2 \\).', workingLatex: '(3^x)^2 - 10 \\cdot 3^x + 9 = 0', explanation: 'Using the index law \\( a^{mn} = (a^n)^m \\), we rewrite \\( 3^{2x} \\) as \\( (3^x)^2 \\) to reveal the quadratic structure.' },
            { stepNumber: 2, description: 'Substitute \\( u = 3^x \\).', workingLatex: 'u^2 - 10u + 9 = 0', explanation: 'Letting \\( u = 3^x \\) converts the exponential equation into a standard quadratic in \\( u \\).' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(u - 1)(u - 9) = 0', explanation: 'We need two numbers that multiply to 9 and add to \\( -10 \\). These are \\( -1 \\) and \\( -9 \\).' },
            { stepNumber: 4, description: 'Solve for \\( u \\).', workingLatex: 'u = 1 \\quad \\text{or} \\quad u = 9', explanation: 'Setting each factor equal to zero gives two solutions. Both are positive, consistent with \\( u = 3^x > 0 \\).' },
            { stepNumber: 5, description: 'Back-substitute and solve \\( 3^x = 1 \\).', workingLatex: '3^x = 1 \\implies x = 0', explanation: 'Since \\( 3^0 = 1 \\), equating gives \\( x = 0 \\).' },
            { stepNumber: 6, description: 'Solve \\( 3^x = 9 \\).', workingLatex: '3^x = 9 = 3^2 \\implies x = 2', explanation: 'Recognising \\( 9 = 3^2 \\) and equating exponents gives \\( x = 2 \\).' },
            { stepNumber: 7, description: 'State both solutions.', workingLatex: 'x = 0 \\quad \\text{or} \\quad x = 2', explanation: 'Both values are valid since \\( 3^x > 0 \\) for all real \\( x \\), and neither produces any contradictions.' }
        ], finalAnswer: '\\( x = 0 \\) or \\( x = 2 \\)' }
    },
    {
        id: 'el4-072', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( 2^{x+1} + 2^{3-x} = 17 \\).',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite each term using index laws.', workingLatex: '2 \\cdot 2^x + \\frac{8}{2^x} = 17', explanation: '\\( 2^{x+1} = 2 \\cdot 2^x \\) and \\( 2^{3-x} = 2^3 \\cdot 2^{-x} = \\frac{8}{2^x} \\).' },
            { stepNumber: 2, description: 'Let \\( u = 2^x \\) and multiply through by \\( u \\).', workingLatex: '2u^2 + 8 = 17u', explanation: 'Multiplying every term by \\( u \\) eliminates the fraction.' },
            { stepNumber: 3, description: 'Rearrange into standard quadratic form.', workingLatex: '2u^2 - 17u + 8 = 0', explanation: 'Subtract \\( 17u \\) from both sides so the right-hand side is zero.' },
            { stepNumber: 4, description: 'Factorise the quadratic.', workingLatex: '(2u - 1)(u - 8) = 0', explanation: 'Check: \\( 2u \\cdot u = 2u^2 \\), \\( (-1)(- 8) = 8 \\), and \\( -16u - u = -17u \\).' },
            { stepNumber: 5, description: 'Solve for \\( u \\).', workingLatex: 'u = \\frac{1}{2} \\quad \\text{or} \\quad u = 8', explanation: 'Both values are positive so both are valid for \\( u = 2^x \\).' },
            { stepNumber: 6, description: 'Back-substitute and solve \\( 2^x = \\frac{1}{2} \\).', workingLatex: '2^x = 2^{-1} \\implies x = -1', explanation: 'Since \\( \\frac{1}{2} = 2^{-1} \\), equating exponents gives \\( x = -1 \\).' },
            { stepNumber: 7, description: 'Solve \\( 2^x = 8 \\).', workingLatex: '2^x = 2^3 \\implies x = 3', explanation: 'Since \\( 8 = 2^3 \\), equating exponents gives \\( x = 3 \\).' },
            { stepNumber: 8, description: 'State both solutions.', workingLatex: 'x = -1 \\quad \\text{or} \\quad x = 3', explanation: 'Both solutions are valid. They can be verified by substituting back into the original equation \\( 2^{x+1} + 2^{3-x} = 17 \\).' }
        ], finalAnswer: '\\( x = -1 \\) or \\( x = 3 \\)' }
    },
    {
        id: 'el4-073', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'The equation \\( 5^{2x} + 5^{x+1} = k \\) has exactly one real solution. Find the range of values of \\( k \\).',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite using index laws.', workingLatex: '(5^x)^2 + 5 \\cdot 5^x = k', explanation: 'Since \\( 5^{2x} = (5^x)^2 \\) and \\( 5^{x+1} = 5 \\cdot 5^x \\), the equation has a quadratic structure in \\( 5^x \\).' },
            { stepNumber: 2, description: 'Substitute \\( u = 5^x \\) and rearrange.', workingLatex: 'u^2 + 5u - k = 0', explanation: 'Setting \\( u = 5^x \\) and subtracting \\( k \\) from both sides gives a quadratic in \\( u \\). Note \\( u > 0 \\) since \\( 5^x \\) is always positive.' },
            { stepNumber: 3, description: 'Apply the quadratic formula.', workingLatex: 'u = \\frac{-5 \\pm \\sqrt{25 + 4k}}{2}', explanation: 'Here \\( a = 1 \\), \\( b = 5 \\), \\( c = -k \\), so the discriminant is \\( 25 + 4k \\).' },
            { stepNumber: 4, description: 'Require \\( u > 0 \\), so reject the negative root.', workingLatex: 'u = \\frac{-5 + \\sqrt{25 + 4k}}{2}', explanation: 'The root \\( u = \\frac{-5 - \\sqrt{25 + 4k}}{2} \\) is always negative, so we discard it.' },
            { stepNumber: 5, description: 'Require the remaining root to be positive.', workingLatex: '\\frac{-5 + \\sqrt{25 + 4k}}{2} > 0 \\implies \\sqrt{25 + 4k} > 5', explanation: 'For the equation to have a solution, the single remaining root must be positive.' },
            { stepNumber: 6, description: 'Solve the inequality for \\( k \\).', workingLatex: '25 + 4k > 25 \\implies 4k > 0 \\implies k > 0', explanation: 'Squaring both sides (valid since both sides are positive) and simplifying gives \\( k > 0 \\).' },
            { stepNumber: 7, description: 'State the final answer.', workingLatex: 'k > 0', explanation: 'For any \\( k > 0 \\) there is exactly one positive value of \\( u \\), hence exactly one real value of \\( x = \\log_5 u \\).' }
        ], finalAnswer: '\\( k > 0 \\)' }
    },
    {
        id: 'el4-074', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_2(x+1) + \\log_2(x+7) = \\log_2(x+3) + \\log_2(x+5) \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the product rule for logarithms to the left-hand side.', workingLatex: '\\log_2[(x+1)(x+7)] = \\log_2(x+3) + \\log_2(x+5)', explanation: '\\( \\log_a m + \\log_a n = \\log_a(mn) \\).' },
            { stepNumber: 2, description: 'Apply the product rule to the right-hand side.', workingLatex: '\\log_2[(x+1)(x+7)] = \\log_2[(x+3)(x+5)]', explanation: 'Using the same product rule on the right-hand side.' },
            { stepNumber: 3, description: 'Since the logarithms are equal, equate the arguments.', workingLatex: '(x+1)(x+7) = (x+3)(x+5)', explanation: 'If \\( \\log_a A = \\log_a B \\) then \\( A = B \\).' },
            { stepNumber: 4, description: 'Expand both sides.', workingLatex: 'x^2 + 8x + 7 = x^2 + 8x + 15', explanation: 'Multiply out the brackets on each side.' },
            { stepNumber: 5, description: 'Simplify.', workingLatex: '7 = 15', explanation: 'This is a contradiction.' },
            { stepNumber: 6, description: 'Conclude that there is no solution.', workingLatex: '\\text{No solution}', explanation: 'The equation is inconsistent, so no value of \\( x \\) satisfies it.' }
        ], finalAnswer: 'No solution' }
    },
    {
        id: 'el4-075', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve the simultaneous equations \\( 2\\log_3 x - \\log_3 y = 2 \\) and \\( x - 3y + 4 = 0 \\).',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use logarithm laws on the first equation.', workingLatex: '\\log_3 x^2 - \\log_3 y = 2 \\implies \\log_3 \\frac{x^2}{y} = 2', explanation: '\\( 2\\log_3 x = \\log_3 x^2 \\) and \\( \\log_a m - \\log_a n = \\log_a \\frac{m}{n} \\).' },
            { stepNumber: 2, description: 'Remove the logarithm.', workingLatex: '\\frac{x^2}{y} = 3^2 = 9 \\implies y = \\frac{x^2}{9}', explanation: 'If \\( \\log_3 A = 2 \\) then \\( A = 3^2 = 9 \\). Rearrange to make \\( y \\) the subject.' },
            { stepNumber: 3, description: 'Substitute into the second equation \\( x - 3y + 4 = 0 \\).', workingLatex: 'x - 3 \\cdot \\frac{x^2}{9} + 4 = 0 \\implies x - \\frac{x^2}{3} + 4 = 0', explanation: 'Replace \\( y \\) with \\( \\frac{x^2}{9} \\) and simplify \\( 3 \\times \\frac{x^2}{9} = \\frac{x^2}{3} \\).' },
            { stepNumber: 4, description: 'Multiply through by 3.', workingLatex: '3x - x^2 + 12 = 0 \\implies x^2 - 3x - 12 = 0', explanation: 'Multiplying every term by 3 clears the fraction, then rearrange into standard form.' },
            { stepNumber: 5, description: 'Apply the quadratic formula.', workingLatex: 'x = \\frac{3 \\pm \\sqrt{9 + 48}}{2} = \\frac{3 \\pm \\sqrt{57}}{2}', explanation: 'With \\( a = 1 \\), \\( b = -3 \\), \\( c = -12 \\), the discriminant is \\( 9 + 48 = 57 \\).' },
            { stepNumber: 6, description: 'Determine valid solutions. Since \\( x > 0 \\) and \\( y > 0 \\) for the logarithms to be defined, reject the negative root.', workingLatex: 'x = \\frac{3 + \\sqrt{57}}{2}', explanation: '\\( \\frac{3 - \\sqrt{57}}{2} < 0 \\) since \\( \\sqrt{57} > 7 \\), so this root is rejected.' },
            { stepNumber: 7, description: 'Find \\( y \\) by substituting back.', workingLatex: 'y = \\frac{x^2}{9} = \\frac{1}{9}\\left(\\frac{3 + \\sqrt{57}}{2}\\right)^2 = \\frac{66 + 6\\sqrt{57}}{36} = \\frac{11 + \\sqrt{57}}{6}', explanation: 'Expanding: \\( (3+\\sqrt{57})^2 = 9 + 6\\sqrt{57} + 57 = 66 + 6\\sqrt{57} \\). Then simplify the fraction.' },
            { stepNumber: 8, description: 'State the solution.', workingLatex: 'x = \\frac{3 + \\sqrt{57}}{2}, \\quad y = \\frac{11 + \\sqrt{57}}{6}', explanation: 'Both values satisfy \\( x > 0 \\) and \\( y > 0 \\), so the logarithms in the original equation are well defined.' }
        ], finalAnswer: '\\( x = \\frac{3 + \\sqrt{57}}{2}, \\quad y = \\frac{11 + \\sqrt{57}}{6} \\)' }
    },
    {
        id: 'el4-076', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Show that the equation \\( 4^x - 2^{x+1} = 48 \\) can be written as \\( u^2 - 2u - 48 = 0 \\), where \\( u = 2^x \\). Hence solve the equation, giving your answer to 3 significant figures.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite \\( 4^x \\) in terms of base 2.', workingLatex: '4^x = (2^2)^x = (2^x)^2 = u^2', explanation: 'Since \\( 4 = 2^2 \\), we can write \\( 4^x \\) as \\( (2^x)^2 \\).' },
            { stepNumber: 2, description: 'Rewrite \\( 2^{x+1} \\) in terms of \\( u \\).', workingLatex: '2^{x+1} = 2 \\cdot 2^x = 2u', explanation: 'Using the index law \\( 2^{x+1} = 2^1 \\cdot 2^x \\).' },
            { stepNumber: 3, description: 'Substitute into the equation.', workingLatex: 'u^2 - 2u = 48 \\implies u^2 - 2u - 48 = 0', explanation: 'This confirms the required quadratic form.' },
            { stepNumber: 4, description: 'Factorise the quadratic.', workingLatex: '(u - 8)(u + 6) = 0', explanation: 'We need two numbers that multiply to \\( -48 \\) and add to \\( -2 \\).' },
            { stepNumber: 5, description: 'Solve for \\( u \\).', workingLatex: 'u = 8 \\quad \\text{or} \\quad u = -6', explanation: 'Since \\( u = 2^x > 0 \\) for all real \\( x \\), we reject \\( u = -6 \\).' },
            { stepNumber: 6, description: 'Solve for \\( x \\).', workingLatex: '2^x = 8 \\implies x = \\log_2 8 = 3', explanation: 'Since \\( 2^3 = 8 \\), \\( x = 3 \\) exactly.' },
            { stepNumber: 7, description: 'State the final answer to 3 s.f.', workingLatex: 'x = 3.00', explanation: 'The answer is exact so 3 s.f. gives \\( x = 3.00 \\).' }
        ], finalAnswer: '\\( x = 3.00 \\)' }
    },
    {
        id: 'el4-077', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'A radioactive substance decays according to \\( m = m_0 e^{-kt} \\), where \\( m \\) grams is the mass at time \\( t \\) hours. After 10 hours, the mass has halved. After a further 5 hours, the mass is 200 g.\n(a) Find the exact value of \\( k \\).\n(b) Find the exact value of \\( m_0 \\).',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the half-life condition at \\( t = 10 \\).', workingLatex: 'm_0 e^{-10k} = \\tfrac{1}{2} m_0', explanation: 'After 10 hours the mass is half the initial mass. Substituting \\( t = 10 \\) and \\( m = \\frac{1}{2}m_0 \\) into the model.' },
            { stepNumber: 2, description: 'Cancel \\( m_0 \\) and isolate the exponential.', workingLatex: 'e^{-10k} = \\tfrac{1}{2}', explanation: 'Since \\( m_0 > 0 \\), we can divide both sides by \\( m_0 \\) to obtain an equation in \\( k \\) alone.' },
            { stepNumber: 3, description: 'Take natural logarithms and solve for \\( k \\).', workingLatex: '-10k = \\ln \\tfrac{1}{2} = -\\ln 2 \\implies k = \\frac{\\ln 2}{10}', explanation: 'Applying \\( \\ln \\) to both sides and using \\( \\ln\\frac{1}{2} = -\\ln 2 \\). Dividing by \\( -10 \\) gives the exact value of \\( k \\).' },
            { stepNumber: 4, description: 'Set up the equation at \\( t = 15 \\).', workingLatex: 'm_0 e^{-15k} = 200', explanation: 'After a further 5 hours means \\( t = 10 + 5 = 15 \\). Substituting \\( t = 15 \\) and \\( m = 200 \\) into the model.' },
            { stepNumber: 5, description: 'Express \\( e^{-15k} \\) using the value of \\( k \\).', workingLatex: 'e^{-15k} = e^{-15 \\cdot \\frac{\\ln 2}{10}} = e^{-\\frac{3}{2}\\ln 2}', explanation: 'Substituting \\( k = \\frac{\\ln 2}{10} \\) gives an exponent of \\( -\\frac{3}{2}\\ln 2 \\).' },
            { stepNumber: 6, description: 'Simplify the exponential expression.', workingLatex: 'e^{-\\frac{3}{2}\\ln 2} = 2^{-3/2} = \\frac{1}{2\\sqrt{2}}', explanation: 'Using the identity \\( e^{a \\ln b} = b^a \\), so \\( e^{-\\frac{3}{2}\\ln 2} = 2^{-3/2} = \\frac{1}{2^{3/2}} = \\frac{1}{2\\sqrt{2}} \\).' },
            { stepNumber: 7, description: 'Solve for \\( m_0 \\).', workingLatex: 'm_0 \\cdot \\frac{1}{2\\sqrt{2}} = 200 \\implies m_0 = 200 \\times 2\\sqrt{2} = 400\\sqrt{2}', explanation: 'Multiply both sides by \\( 2\\sqrt{2} \\) to isolate \\( m_0 \\).' },
            { stepNumber: 8, description: 'State the exact answers.', workingLatex: 'k = \\frac{\\ln 2}{10}, \\quad m_0 = 400\\sqrt{2}', explanation: 'Both values are left in exact form as required by the question.' }
        ], finalAnswer: '\\( k = \\frac{\\ln 2}{10} \\), \\( m_0 = 400\\sqrt{2} \\) g' }
    },
    {
        id: 'el4-078', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Find the exact solutions of \\( e^{2x} + 3 = 4e^x \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange to standard form.', workingLatex: 'e^{2x} - 4e^x + 3 = 0', explanation: 'Subtract \\( 4e^x \\) from both sides.' },
            { stepNumber: 2, description: 'Recognise the quadratic in \\( e^x \\).', workingLatex: '\\text{Let } u = e^x: \\quad u^2 - 4u + 3 = 0', explanation: 'Since \\( e^{2x} = (e^x)^2 \\), this is a quadratic in \\( e^x \\).' },
            { stepNumber: 3, description: 'Factorise.', workingLatex: '(u - 1)(u - 3) = 0', explanation: 'We need two numbers that multiply to 3 and add to \\( -4 \\).' },
            { stepNumber: 4, description: 'Solve for \\( u \\).', workingLatex: 'u = 1 \\quad \\text{or} \\quad u = 3', explanation: 'Both values are positive so both are valid.' },
            { stepNumber: 5, description: 'Solve \\( e^x = 1 \\).', workingLatex: 'e^x = 1 \\implies x = \\ln 1 = 0', explanation: 'Since \\( e^0 = 1 \\), we have \\( x = 0 \\).' },
            { stepNumber: 6, description: 'Solve \\( e^x = 3 \\).', workingLatex: 'e^x = 3 \\implies x = \\ln 3', explanation: 'Take natural logarithms of both sides to obtain \\( x = \\ln 3 \\).' }
        ], finalAnswer: '\\( x = 0 \\) or \\( x = \\ln 3 \\)' }
    },
    {
        id: 'el4-079', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_3(x - 2) + \\log_9(x - 2) = 3 \\).',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Change \\( \\log_9 \\) to base 3.', workingLatex: '\\log_9(x - 2) = \\frac{\\log_3(x - 2)}{\\log_3 9} = \\frac{\\log_3(x - 2)}{2}', explanation: 'Using the change of base rule, since \\( 9 = 3^2 \\).' },
            { stepNumber: 2, description: 'Substitute back into the equation.', workingLatex: '\\log_3(x - 2) + \\frac{\\log_3(x - 2)}{2} = 3', explanation: 'Replace \\( \\log_9(x - 2) \\) with the equivalent base 3 expression.' },
            { stepNumber: 3, description: 'Combine the terms.', workingLatex: '\\frac{3}{2} \\log_3(x - 2) = 3', explanation: 'Add the coefficients: \\( 1 + \\frac{1}{2} = \\frac{3}{2} \\).' },
            { stepNumber: 4, description: 'Solve for \\( \\log_3(x - 2) \\).', workingLatex: '\\log_3(x - 2) = 3 \\times \\frac{2}{3} = 2', explanation: 'Divide both sides by \\( \\frac{3}{2} \\).' },
            { stepNumber: 5, description: 'Convert from logarithmic to exponential form.', workingLatex: 'x - 2 = 3^2 = 9', explanation: 'If \\( \\log_3(x - 2) = 2 \\) then \\( x - 2 = 3^2 \\).' },
            { stepNumber: 6, description: 'Solve for \\( x \\).', workingLatex: 'x = 11', explanation: 'Add 2 to both sides.' },
            { stepNumber: 7, description: 'Verify the solution is valid.', workingLatex: 'x - 2 = 9 > 0 \\quad \\checkmark', explanation: 'The argument of both logarithms must be positive, which is satisfied.' }
        ], finalAnswer: '\\( x = 11 \\)' }
    },
    {
        id: 'el4-080', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'The curves \\( y = e^{2x} \\) and \\( y = 5e^x - 6 \\) intersect at two points. Find the exact coordinates of both points of intersection.',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions equal.', workingLatex: 'e^{2x} = 5e^x - 6', explanation: 'At the points of intersection, the \\( y \\)-values are equal.' },
            { stepNumber: 2, description: 'Rearrange to standard form.', workingLatex: 'e^{2x} - 5e^x + 6 = 0', explanation: 'Subtract \\( 5e^x \\) and add 6 to both sides.' },
            { stepNumber: 3, description: 'Substitute \\( u = e^x \\).', workingLatex: 'u^2 - 5u + 6 = 0', explanation: 'This is a quadratic in \\( e^x \\).' },
            { stepNumber: 4, description: 'Factorise.', workingLatex: '(u - 2)(u - 3) = 0', explanation: 'We need two numbers that multiply to 6 and add to \\( -5 \\).' },
            { stepNumber: 5, description: 'Solve for \\( u \\) and back-substitute.', workingLatex: 'u = 2 \\implies e^x = 2 \\implies x = \\ln 2', explanation: 'Both values of \\( u \\) are positive so both are valid. The first gives \\( x = \\ln 2 \\).' },
            { stepNumber: 6, description: 'Solve the second equation.', workingLatex: 'u = 3 \\implies e^x = 3 \\implies x = \\ln 3', explanation: 'Taking natural logarithms of \\( e^x = 3 \\) gives the second solution \\( x = \\ln 3 \\).' },
            { stepNumber: 7, description: 'Find the \\( y \\)-coordinates.', workingLatex: 'x = \\ln 2: \\; y = e^{2\\ln 2} = (e^{\\ln 2})^2 = 4 \\qquad x = \\ln 3: \\; y = e^{2\\ln 3} = (e^{\\ln 3})^2 = 9', explanation: 'Substitute each \\( x \\)-value back into \\( y = e^{2x} \\). Using \\( e^{\\ln a} = a \\), we get \\( y = 4 \\) and \\( y = 9 \\).' },
            { stepNumber: 8, description: 'State the coordinates.', workingLatex: '(\\ln 2,\\, 4) \\quad \\text{and} \\quad (\\ln 3,\\, 9)', explanation: 'Both points lie on both curves, which can be verified by substitution into \\( y = 5e^x - 6 \\).' }
        ], finalAnswer: '\\( (\\ln 2,\\, 4) \\) and \\( (\\ln 3,\\, 9) \\)' }
    },
    {
        id: 'el4-081', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'The temperature \\( T \\) °C of a liquid cooling in a room at \\( 20 \\)°C is modelled by \\( T = 20 + Ae^{-kt} \\), where \\( t \\) is the time in minutes after the liquid is placed in the room.\nAt \\( t = 0 \\), \\( T = 80 \\). At \\( t = 10 \\), \\( T = 50 \\).\n(a) Find the value of \\( A \\).\n(b) Find the exact value of \\( k \\).\n(c) Find the time when \\( T = 30 \\), giving your answer to 3 significant figures.',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( t = 0 \\) and \\( T = 80 \\) into the model to find \\( A \\).', workingLatex: '80 = 20 + Ae^{0} \\implies 80 = 20 + A \\implies A = 60', explanation: 'Since \\( e^0 = 1 \\), we get \\( A \\) directly.' },
            { stepNumber: 2, description: 'Write the model with the known value of \\( A \\).', workingLatex: 'T = 20 + 60e^{-kt}', explanation: 'Substituting \\( A = 60 \\) into the original model.' },
            { stepNumber: 3, description: 'Substitute \\( t = 10 \\) and \\( T = 50 \\) to form an equation in \\( k \\).', workingLatex: '50 = 20 + 60e^{-10k} \\implies 30 = 60e^{-10k} \\implies e^{-10k} = \\frac{1}{2}', explanation: 'Subtract 20 from both sides, then divide by 60.' },
            { stepNumber: 4, description: 'Take natural logarithms and solve for \\( k \\).', workingLatex: '-10k = \\ln\\frac{1}{2} = -\\ln 2 \\implies k = \\frac{\\ln 2}{10}', explanation: 'Applying \\( \\ln \\) to both sides and using \\( \\ln\\frac{1}{2} = -\\ln 2 \\). Dividing by \\( -10 \\) gives the exact value of \\( k \\).' },
            { stepNumber: 5, description: 'For part (c), set \\( T = 30 \\) and substitute into the model.', workingLatex: '30 = 20 + 60e^{-kt} \\implies 10 = 60e^{-kt} \\implies e^{-kt} = \\frac{1}{6}', explanation: 'Subtract 20 from both sides, then divide by 60.' },
            { stepNumber: 6, description: 'Take natural logarithms to solve for \\( t \\).', workingLatex: '-kt = \\ln\\frac{1}{6} = -\\ln 6 \\implies t = \\frac{\\ln 6}{k}', explanation: 'Applying \\( \\ln \\) to both sides and using \\( \\ln\\frac{1}{6} = -\\ln 6 \\). Dividing by \\( -k \\) gives \\( t \\) in terms of \\( k \\).' },
            { stepNumber: 7, description: 'Substitute the value of \\( k \\).', workingLatex: 't = \\frac{\\ln 6}{\\frac{\\ln 2}{10}} = \\frac{10\\ln 6}{\\ln 2}', explanation: 'Substituting \\( k = \\frac{\\ln 2}{10} \\) from part (b) gives the exact expression for \\( t \\).' },
            { stepNumber: 8, description: 'Evaluate to 3 significant figures.', workingLatex: 't = \\frac{10 \\times 1.7918}{0.6931} \\approx 25.9 \\text{ minutes}', explanation: 'Using \\( \\ln 6 \\approx 1.7918 \\) and \\( \\ln 2 \\approx 0.6931 \\). The result is \\( 25.85 \\ldots \\), which rounds to \\( 25.9 \\) to 3 s.f.' }
        ], finalAnswer: '\\( A = 60 \\), \\( k = \\frac{\\ln 2}{10} \\), \\( t \\approx 25.9 \\) minutes' }
    },
    {
        id: 'el4-082', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( 9^x - 4(3^x) - 21 = 0 \\), giving your answer in exact form.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recognise that \\( 9^x = (3^x)^2 \\).', workingLatex: '9^x = (3^2)^x = (3^x)^2', explanation: 'Since \\( 9 = 3^2 \\), we can rewrite \\( 9^x \\) as a power of \\( 3^x \\).' },
            { stepNumber: 2, description: 'Let \\( u = 3^x \\) and substitute.', workingLatex: 'u^2 - 4u - 21 = 0', explanation: 'This converts the exponential equation into a standard quadratic in \\( u \\).' },
            { stepNumber: 3, description: 'Factorise the quadratic.', workingLatex: '(u - 7)(u + 3) = 0', explanation: 'We need two numbers that multiply to \\( -21 \\) and add to \\( -4 \\): these are \\( -7 \\) and \\( 3 \\).' },
            { stepNumber: 4, description: 'Solve for \\( u \\).', workingLatex: 'u = 7 \\quad \\text{or} \\quad u = -3', explanation: 'Setting each factor equal to zero gives two possible values of \\( u \\).' },
            { stepNumber: 5, description: 'Reject \\( u = -3 \\) since \\( 3^x > 0 \\) for all real \\( x \\).', workingLatex: 'u = 3^x = -3 \\text{ has no solution}', explanation: 'An exponential function is always positive, so the negative root is extraneous.' },
            { stepNumber: 6, description: 'Solve \\( 3^x = 7 \\) by taking logarithms.', workingLatex: 'x \\ln 3 = \\ln 7 \\implies x = \\frac{\\ln 7}{\\ln 3}', explanation: 'Take natural logarithms of both sides and divide by \\( \\ln 3 \\).' },
            { stepNumber: 7, description: 'Express using change of base.', workingLatex: 'x = \\log_3 7 = \\frac{\\ln 7}{\\ln 3}', explanation: 'Using \\( \\log_a b = \\frac{\\ln b}{\\ln a} \\), this is equivalently \\( \\log_3 7 \\).' }
        ], finalAnswer: '\\( x = \\log_3 7 = \\frac{\\ln 7}{\\ln 3} \\)' }
    },
    {
        id: 'el4-083', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Given that \\( \\log_2 a = s \\) and \\( \\log_2 b = t \\), solve the equation \\( 8^s = 4^t \\) for \\( s \\) in terms of \\( t \\), and hence express \\( a \\) as a power of \\( b \\).',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write \\( 8 \\) as a power of \\( 2 \\).', workingLatex: '8^s = (2^3)^s = 2^{3s}', explanation: 'Since \\( 8 = 2^3 \\), applying the power-of-a-power rule gives \\( 8^s = 2^{3s} \\).' },
            { stepNumber: 2, description: 'Write \\( 4 \\) as a power of \\( 2 \\).', workingLatex: '4^t = (2^2)^t = 2^{2t}', explanation: 'Since \\( 4 = 2^2 \\), we get \\( 4^t = 2^{2t} \\). Both sides now have the same base.' },
            { stepNumber: 3, description: 'Equate the exponents.', workingLatex: '2^{3s} = 2^{2t} \\implies 3s = 2t', explanation: 'If \\( 2^A = 2^B \\) then \\( A = B \\), since the exponential function is one-to-one.' },
            { stepNumber: 4, description: 'Solve for \\( s \\) in terms of \\( t \\).', workingLatex: 's = \\frac{2t}{3}', explanation: 'Divide both sides of \\( 3s = 2t \\) by 3 to isolate \\( s \\).' },
            { stepNumber: 5, description: 'Express \\( a \\) and \\( b \\) using the given logarithms.', workingLatex: 'a = 2^s \\quad \\text{and} \\quad b = 2^t', explanation: 'Since \\( \\log_2 a = s \\) means \\( a = 2^s \\) by the definition of a logarithm, and similarly \\( \\log_2 b = t \\) gives \\( b = 2^t \\).' },
            { stepNumber: 6, description: 'Substitute \\( s = \\frac{2t}{3} \\) into \\( a = 2^s \\).', workingLatex: 'a = 2^{\\frac{2t}{3}} = \\left(2^t\\right)^{\\frac{2}{3}}', explanation: 'Using the index law \\( a^{mn} = (a^m)^n \\), we rewrite \\( 2^{\\frac{2t}{3}} \\) as \\( (2^t)^{\\frac{2}{3}} \\).' },
            { stepNumber: 7, description: 'Replace \\( 2^t \\) with \\( b \\).', workingLatex: 'a = b^{\\frac{2}{3}}', explanation: 'Since \\( b = 2^t \\), substituting gives \\( a = b^{2/3} \\).' },
            { stepNumber: 8, description: 'State both results.', workingLatex: 's = \\frac{2t}{3}, \\quad a = b^{\\frac{2}{3}}', explanation: 'We have expressed \\( s \\) in terms of \\( t \\) and \\( a \\) as a power of \\( b \\), as required.' }
        ], finalAnswer: '\\( s = \\frac{2t}{3} \\) and \\( a = b^{\\frac{2}{3}} \\)' }
    },
    {
        id: 'el4-084', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'Solve \\( \\log_5(3x - 1) + \\log_5(x + 2) = 1 + \\log_5(x + 1) \\).',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Combine the left-hand side using the product rule for logarithms.', workingLatex: '\\log_5[(3x - 1)(x + 2)] = 1 + \\log_5(x + 1)', explanation: '\\( \\log_a m + \\log_a n = \\log_a(mn) \\).' },
            { stepNumber: 2, description: 'Rewrite the constant \\( 1 \\) as \\( \\log_5 5 \\) and combine the right-hand side.', workingLatex: '\\log_5[(3x - 1)(x + 2)] = \\log_5 5 + \\log_5(x + 1) = \\log_5[5(x + 1)]', explanation: 'Since \\( \\log_5 5 = 1 \\).' },
            { stepNumber: 3, description: 'Since the logarithms are equal, equate the arguments.', workingLatex: '(3x - 1)(x + 2) = 5(x + 1)', explanation: 'If \\( \\log_a A = \\log_a B \\) then \\( A = B \\), provided \\( A, B > 0 \\).' },
            { stepNumber: 4, description: 'Expand and simplify.', workingLatex: '3x^2 + 6x - x - 2 = 5x + 5 \\implies 3x^2 + 5x - 2 = 5x + 5', explanation: 'Expand \\( (3x - 1)(x + 2) = 3x^2 + 5x - 2 \\) and \\( 5(x + 1) = 5x + 5 \\).' },
            { stepNumber: 5, description: 'Rearrange to form a simpler equation.', workingLatex: '3x^2 - 7 = 0 \\implies x^2 = \\frac{7}{3}', explanation: 'The \\( 5x \\) terms cancel.' },
            { stepNumber: 6, description: 'Solve for \\( x \\).', workingLatex: 'x = \\pm\\sqrt{\\frac{7}{3}} = \\pm\\frac{\\sqrt{21}}{3}', explanation: 'Take the square root of both sides. Rationalise by writing \\( \\sqrt{\\frac{7}{3}} = \\frac{\\sqrt{21}}{3} \\).' },
            { stepNumber: 7, description: 'Check validity: each logarithm argument must be positive. For \\( x = -\\frac{\\sqrt{21}}{3} \\approx -1.53 \\), we have \\( 3x - 1 < 0 \\), so reject the negative root.', workingLatex: 'x = \\frac{\\sqrt{21}}{3}', explanation: 'Only the positive root gives valid (positive) arguments for all three logarithms.' }
        ], finalAnswer: '\\( x = \\frac{\\sqrt{21}}{3} \\)' }
    },
    {
        id: 'el4-085', topicRef: 'el4', topicTitle: 'Solving Equations', difficulty: 'Standard',
        questionText: 'The number of bacteria in a culture is modelled by \\( N = N_0 \\cdot 2^{t/d} \\), where \\( N_0 \\) is the initial population, \\( t \\) is the time in hours, and \\( d \\) is the doubling time in hours. Initially there are 500 bacteria. After 8 hours there are 4000.\n(a) Find the doubling time \\( d \\).\n(b) Find how long until the population exceeds 1 000 000.\n(c) State a limitation of this model.',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( N_0 = 500 \\), \\( t = 8 \\), \\( N = 4000 \\) into the model.', workingLatex: '4000 = 500 \\cdot 2^{8/d} \\implies 2^{8/d} = 8', explanation: 'Dividing both sides by 500.' },
            { stepNumber: 2, description: 'Write \\( 8 \\) as a power of \\( 2 \\) and equate exponents.', workingLatex: '2^{8/d} = 2^3 \\implies \\frac{8}{d} = 3 \\implies d = \\frac{8}{3}', explanation: 'The doubling time is \\( \\frac{8}{3} \\) hours, or 2 hours 40 minutes.' },
            { stepNumber: 3, description: 'Write the model with known values for part (b).', workingLatex: 'N = 500 \\cdot 2^{3t/8}', explanation: 'Substituting \\( N_0 = 500 \\) and \\( d = \\frac{8}{3} \\), so \\( \\frac{t}{d} = \\frac{3t}{8} \\).' },
            { stepNumber: 4, description: 'Set \\( N > 1\\,000\\,000 \\) and solve the inequality.', workingLatex: '500 \\cdot 2^{3t/8} > 1\\,000\\,000 \\implies 2^{3t/8} > 2000', explanation: 'Dividing both sides by 500.' },
            { stepNumber: 5, description: 'Take \\( \\log_2 \\) of both sides.', workingLatex: '\\frac{3t}{8} > \\log_2 2000 = \\frac{\\ln 2000}{\\ln 2} \\approx 10.966', explanation: 'Using the change of base formula.' },
            { stepNumber: 6, description: 'Solve for \\( t \\).', workingLatex: 't > \\frac{8 \\times 10.966}{3} \\approx 29.2 \\text{ hours}', explanation: 'The population exceeds 1 million after approximately 29.2 hours.' },
            { stepNumber: 7, description: 'State a limitation of the model.', workingLatex: '\\text{The model assumes unlimited exponential growth.}', explanation: 'In practice, resources (food, space) are finite, so the growth rate would eventually slow. The model does not account for limiting factors such as competition or disease.' },
            { stepNumber: 8, description: 'Summarise all answers.', workingLatex: 'd = \\frac{8}{3}, \\quad t > 29.2, \\quad \\text{limitation stated}', explanation: 'Part (a): \\( d = \\frac{8}{3} \\) hours. Part (b): the population exceeds 1 million after approximately 29.2 hours. Part (c): the model ignores finite resources and other limiting factors.' }
        ], finalAnswer: '\\( d = \\frac{8}{3} \\) hours; \\( t > 29.2 \\) hours; limitation: the model assumes unlimited growth, ignoring finite resources' }
    },
];
