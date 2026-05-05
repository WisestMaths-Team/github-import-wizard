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
    // TYPE A (Q1–6): Substituting into a given model (read off value at given time)
    {
        id: 'el5-001',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A colony of bacteria is modelled by \\( B = 200e^{0.05t} \\), where \\( B \\) is the number of bacteria and \\( t \\) is the time in hours.\n\n (a) Write down the initial number of bacteria.\n\n (b) Predict the number of bacteria after 10 hours. Give your answer to the nearest whole number.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'B = 200e^{0.05 \\times 0} = 200e^0 = 200',
                    explanation: '\\( e^0 = 1 \\), so the initial number of bacteria is 200.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 10 \\).',
                    workingLatex: 'B = 200e^{0.05 \\times 10} = 200e^{0.5} \\approx 200 \\times 1.6487 \\approx 330',
                    explanation: 'Use a calculator to evaluate \\( e^{0.5} \\). Round to the nearest whole number.'
                }
            ],
            finalAnswer: '(a) 200 bacteria \\quad (b) 330 bacteria'
        }
    },
    {
        id: 'el5-002',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The mass \\( M \\) (grams) of a radioactive sample after \\( t \\) years is given by \\( M = 500e^{-0.03t} \\).\n\n (a) State the initial mass.\n\n (b) Find the mass remaining after 20 years. Give your answer to 3 significant figures.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'M = 500e^0 = 500 \\text{ grams}',
                    explanation: 'The initial mass is 500 g.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 20 \\).',
                    workingLatex: 'M = 500e^{-0.03 \\times 20} = 500e^{-0.6} \\approx 500 \\times 0.5488 \\approx 274 \\text{ g}',
                    explanation: 'Use a calculator to evaluate \\( e^{-0.6} \\).'
                }
            ],
            finalAnswer: '(a) 500 g \\quad (b) 274 g'
        }
    },
    {
        id: 'el5-003',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'An oven is preheating. Its temperature \\( T\\,^\\circ\\!\\text{C} \\) after \\( t \\) minutes is given by \\( T = 220 - 200e^{-0.1t} \\).\n\n (a) What was the initial temperature of the oven?\n\n (b) What is the temperature after 8 minutes? Give your answer to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'T = 220 - 200e^0 = 220 - 200 = 20\\,^\\circ\\!\\text{C}',
                    explanation: 'The oven starts at room temperature, 20°C.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 8 \\).',
                    workingLatex: 'T = 220 - 200e^{-0.8} \\approx 220 - 200 \\times 0.4493 \\approx 220 - 89.9 \\approx 130\\,^\\circ\\!\\text{C}',
                    explanation: 'Evaluate \\( e^{-0.8} \\approx 0.4493 \\) using a calculator.'
                }
            ],
            finalAnswer: '(a) \\( 20\\,^\\circ\\!\\text{C} \\) \\quad (b) \\( 130\\,^\\circ\\!\\text{C} \\)'
        }
    },
    {
        id: 'el5-004',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The value \\( V \\) (£) of a motorbike \\( t \\) years after purchase is modelled by \\( V = 8000e^{-0.15t} \\).\n\n (a) State the purchase price.\n\n (b) Find the value after 4 years. Give your answer to the nearest pound.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'V = 8000e^0 = £8000',
                    explanation: 'The initial purchase price is £8000.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 4 \\).',
                    workingLatex: 'V = 8000e^{-0.6} \\approx 8000 \\times 0.5488 \\approx £4390',
                    explanation: 'Evaluate \\( e^{-0.6} \\approx 0.5488 \\).'
                }
            ],
            finalAnswer: '(a) £8000 \\quad (b) £4390'
        }
    },
    {
        id: 'el5-005',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A savings account earns compound interest. The amount \\( A \\) (£) after \\( t \\) years is modelled by \\( A = 2500 \\times 1.04^t \\).\n\n (a) Write down the initial amount invested.\n\n (b) Find the amount in the account after 6 years. Give your answer to the nearest penny.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'A = 2500 \\times 1.04^0 = 2500 \\times 1 = £2500',
                    explanation: 'Any number to the power 0 is 1.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 6 \\).',
                    workingLatex: 'A = 2500 \\times 1.04^6 \\approx 2500 \\times 1.2653 \\approx £3163.22',
                    explanation: 'Evaluate \\( 1.04^6 \\) using a calculator.'
                }
            ],
            finalAnswer: '(a) £2500 \\quad (b) £3163.22'
        }
    },
    {
        id: 'el5-006',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A drug concentration \\( C \\) (mg/litre) in a patient\'s bloodstream after \\( t \\) hours is modelled by \\( C = 4e^{-0.2t} \\).\n\n (a) State the initial concentration.\n\n (b) Find the concentration after 3 hours. Give your answer to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'C = 4e^0 = 4 \\text{ mg/litre}',
                    explanation: 'The initial concentration is 4 mg per litre of blood.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 3 \\).',
                    workingLatex: 'C = 4e^{-0.6} \\approx 4 \\times 0.5488 \\approx 2.20 \\text{ mg/litre}',
                    explanation: 'Evaluate \\( e^{-0.6} \\approx 0.5488 \\).'
                }
            ],
            finalAnswer: '(a) 4 mg/litre \\quad (b) 2.20 mg/litre'
        }
    },
    // TYPE B (Q7–13): Solving for time t (applying ln to find when a condition is met)
    {
        id: 'el5-007',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A population of insects is modelled by \\( P = 150e^{0.06t} \\), where \\( t \\) is the time in days.\n\n Find the value of \\( t \\) when the population first reaches 500. Give your answer to 3 significant figures.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( P = 500 \\) and solve.',
                    workingLatex: '150e^{0.06t} = 500 \\Rightarrow e^{0.06t} = \\frac{500}{150} = \\frac{10}{3}',
                    explanation: 'Divide both sides by 150.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.06t = \\ln\\!\\left(\\frac{10}{3}\\right)',
                    explanation: '\\( \\ln(e^{0.06t}) = 0.06t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln(10/3)}{0.06} \\approx \\frac{1.2040}{0.06} \\approx 20.1 \\text{ days}',
                    explanation: 'Evaluate using a calculator.'
                }
            ],
            finalAnswer: '\\( t \\approx 20.1 \\) days'
        }
    },
    {
        id: 'el5-008',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The mass \\( M \\) grams of a substance decays according to \\( M = 800e^{-0.04t} \\), where \\( t \\) is in years.\n\n Find the time taken for the mass to reduce to 200 g. Give your answer to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( M = 200 \\).',
                    workingLatex: '800e^{-0.04t} = 200 \\Rightarrow e^{-0.04t} = \\frac{200}{800} = 0.25',
                    explanation: 'Divide both sides by 800.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\).',
                    workingLatex: '-0.04t = \\ln(0.25) = -\\ln 4',
                    explanation: '\\( 0.25 = \\frac{1}{4} \\), so \\( \\ln(0.25) = -\\ln 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 4}{0.04} \\approx \\frac{1.3863}{0.04} \\approx 34.7 \\text{ years}',
                    explanation: 'The negatives cancel.'
                }
            ],
            finalAnswer: '\\( t \\approx 34.7 \\) years'
        }
    },
    {
        id: 'el5-009',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A savings account is modelled by \\( A = 1000 \\times 1.025^t \\), where \\( A \\) is the amount (£) and \\( t \\) is the number of years.\n\n Find the number of complete years required for the account to exceed £1500.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality.',
                    workingLatex: '1000 \\times 1.025^t > 1500 \\Rightarrow 1.025^t > 1.5',
                    explanation: 'Divide both sides by 1000.'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log(1.025) > \\log(1.5)',
                    explanation: 'Since \\( \\log(1.025) > 0 \\), the inequality direction stays the same.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't > \\frac{\\log(1.5)}{\\log(1.025)} \\approx \\frac{0.17609}{0.01072} \\approx 16.4',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 4,
                    description: 'State the number of complete years.',
                    workingLatex: 't = 17 \\text{ complete years}',
                    explanation: 'The first complete year for which \\( t > 16.4 \\) is \\( t = 17 \\).'
                }
            ],
            finalAnswer: '17 complete years'
        }
    },
    {
        id: 'el5-010',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A car depreciates in value according to \\( V = 12000 \\times 0.88^t \\), where \\( V \\) is the value (£) and \\( t \\) is the time in years.\n\n Find the number of complete years before the car is worth less than £5000.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality.',
                    workingLatex: '12000 \\times 0.88^t < 5000 \\Rightarrow 0.88^t < \\frac{5000}{12000} = \\frac{5}{12}',
                    explanation: 'Divide both sides by 12000.'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\log \\) of both sides. Note: \\( \\log(0.88) < 0 \\), so the inequality reverses.',
                    workingLatex: 't\\log(0.88) < \\log\\!\\left(\\frac{5}{12}\\right) \\Rightarrow t > \\frac{\\log(5/12)}{\\log(0.88)}',
                    explanation: 'Dividing by a negative number reverses the inequality.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 't > \\frac{\\log(5/12)}{\\log(0.88)} \\approx \\frac{-0.3802}{-0.05552} \\approx 6.85',
                    explanation: 'Both numerator and denominator are negative, so \\( t > 6.85 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 't = 7 \\text{ complete years}',
                    explanation: 'After 7 complete years the car is first worth less than £5000.'
                }
            ],
            finalAnswer: '7 complete years'
        }
    },
    {
        id: 'el5-011',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A drug concentration \\( C \\) mg/litre decays according to \\( C = 8e^{-0.35t} \\), where \\( t \\) is in hours.\n\n Find the time at which the concentration first falls below 1 mg/litre. Give your answer to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( C = 1 \\) and solve.',
                    workingLatex: '8e^{-0.35t} = 1 \\Rightarrow e^{-0.35t} = \\frac{1}{8}',
                    explanation: 'Divide both sides by 8.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\).',
                    workingLatex: '-0.35t = \\ln\\!\\left(\\frac{1}{8}\\right) = -\\ln 8',
                    explanation: '\\( \\ln(1/8) = -\\ln 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 8}{0.35} \\approx \\frac{2.0794}{0.35} \\approx 5.94 \\text{ hours}',
                    explanation: 'The negatives cancel; evaluate using a calculator.'
                }
            ],
            finalAnswer: '\\( t \\approx 5.94 \\) hours'
        }
    },
    {
        id: 'el5-012',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'An oven cools after being switched off. Its temperature \\( T\\,^\\circ\\!\\text{C} \\) after \\( t \\) minutes satisfies \\( T = 180e^{-0.08t} + 20 \\).\n\n Find the time for the oven to cool to 60°C. Give your answer to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set \\( T = 60 \\) and isolate the exponential.',
                    workingLatex: '180e^{-0.08t} + 20 = 60 \\Rightarrow 180e^{-0.08t} = 40 \\Rightarrow e^{-0.08t} = \\frac{40}{180} = \\frac{2}{9}',
                    explanation: 'Subtract 20, then divide by 180.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\).',
                    workingLatex: '-0.08t = \\ln\\!\\left(\\frac{2}{9}\\right)',
                    explanation: '\\( \\ln(e^{-0.08t}) = -0.08t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{-\\ln(2/9)}{0.08} = \\frac{\\ln(9/2)}{0.08} \\approx \\frac{1.5041}{0.08} \\approx 18.8 \\text{ min}',
                    explanation: '\\( -\\ln(2/9) = \\ln(9/2) \\).'
                }
            ],
            finalAnswer: '\\( t \\approx 18.8 \\) minutes'
        }
    },
    {
        id: 'el5-013',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The number of views \\( V \\) of a viral video after \\( t \\) days is modelled by \\( V = 500 \\times 3^t \\).\n\n Find the number of complete days before the video exceeds 1 000 000 views.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the inequality.',
                    workingLatex: '500 \\times 3^t > 1\\,000\\,000 \\Rightarrow 3^t > 2000',
                    explanation: 'Divide both sides by 500.'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log 3 > \\log 2000',
                    explanation: '\\( \\log(3^t) = t\\log 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve.',
                    workingLatex: 't > \\frac{\\log 2000}{\\log 3} \\approx \\frac{3.3010}{0.4771} \\approx 6.92',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 4,
                    description: 'State the number of complete days.',
                    workingLatex: 't = 7 \\text{ complete days}',
                    explanation: 'The first complete day for which \\( t > 6.92 \\) is \\( t = 7 \\).'
                }
            ],
            finalAnswer: '7 complete days'
        }
    },
    // TYPE C (Q14–18): Finding the constants A and k from given information
    {
        id: 'el5-014',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A population \\( P \\) of rabbits is modelled by \\( P = Ae^{kt} \\). Initially there are 80 rabbits. After 5 years there are 200 rabbits.\n\n Find the values of \\( A \\) and \\( k \\). Give \\( k \\) to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( t = 0 \\) to find \\( A \\).',
                    workingLatex: 'P = Ae^0 = A = 80',
                    explanation: '\\( e^0 = 1 \\), so \\( A = 80 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 5, P = 200 \\).',
                    workingLatex: '80e^{5k} = 200 \\Rightarrow e^{5k} = \\frac{200}{80} = 2.5',
                    explanation: 'Divide both sides by 80.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) and solve for \\( k \\).',
                    workingLatex: '5k = \\ln(2.5) \\Rightarrow k = \\frac{\\ln(2.5)}{5} \\approx \\frac{0.9163}{5} \\approx 0.183',
                    explanation: 'Divide both sides by 5.'
                }
            ],
            finalAnswer: '\\( A = 80 \\), \\( k \\approx 0.183 \\)'
        }
    },
    {
        id: 'el5-015',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The mass \\( M \\) grams of a substance decays according to \\( M = Ae^{kt} \\). The initial mass is 600 g and after 10 years the mass is 350 g.\n\n Find \\( A \\) and \\( k \\). Give \\( k \\) to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use \\( t = 0 \\) to find \\( A \\).',
                    workingLatex: 'M = Ae^0 = A = 600',
                    explanation: 'The initial mass gives \\( A \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 10, M = 350 \\).',
                    workingLatex: '600e^{10k} = 350 \\Rightarrow e^{10k} = \\frac{350}{600} = \\frac{7}{12}',
                    explanation: 'Divide both sides by 600.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '10k = \\ln\\!\\left(\\frac{7}{12}\\right) \\Rightarrow k = \\frac{\\ln(7/12)}{10} \\approx \\frac{-0.5390}{10} \\approx -0.0539',
                    explanation: 'The negative value of \\( k \\) confirms this is decay.'
                }
            ],
            finalAnswer: '\\( A = 600 \\), \\( k \\approx -0.0539 \\)'
        }
    },
    {
        id: 'el5-016',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A fungus grows according to \\( F = F_0 e^{gt} \\). Initially it covers 3 mm². After 8 hours it covers 18 mm².\n\n (a) Find \\( F_0 \\) and \\( g \\). Give \\( g \\) to 3 s.f.\n\n (b) Predict the area covered after 15 hours.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\): \\( F_0 = 3 \\).',
                    workingLatex: 'F_0 = 3 \\text{ mm}^2',
                    explanation: 'Initial area gives \\( F_0 \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 8, F = 18 \\).',
                    workingLatex: '3e^{8g} = 18 \\Rightarrow e^{8g} = 6',
                    explanation: 'Divide by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) and solve for \\( g \\).',
                    workingLatex: 'g = \\frac{\\ln 6}{8} \\approx \\frac{1.7918}{8} \\approx 0.224',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( t = 15 \\).',
                    workingLatex: 'F = 3e^{0.224 \\times 15} = 3e^{3.36} \\approx 3 \\times 28.79 \\approx 86.4 \\text{ mm}^2',
                    explanation: 'Use the values found in part (a).'
                }
            ],
            finalAnswer: '(a) \\( F_0 = 3 \\), \\( g \\approx 0.224 \\) \\quad (b) \\approx 86.4 \\text{ mm}^2'
        }
    },
    {
        id: 'el5-017',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The number of users \\( N \\) of a new app after \\( t \\) months satisfies \\( N = N_0 e^{kt} \\). After 2 months there are 5000 users and after 6 months there are 25000 users.\n\n Find the values of \\( N_0 \\) and \\( k \\). Give your answers to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write two equations using the given data.',
                    workingLatex: 'N_0 e^{2k} = 5000 \\quad \\text{and} \\quad N_0 e^{6k} = 25000',
                    explanation: 'Substitute each data point into the model.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide the second equation by the first to eliminate \\( N_0 \\).',
                    workingLatex: '\\frac{N_0 e^{6k}}{N_0 e^{2k}} = \\frac{25000}{5000} \\Rightarrow e^{4k} = 5',
                    explanation: '\\( e^{6k}/e^{2k} = e^{4k} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '4k = \\ln 5 \\Rightarrow k = \\frac{\\ln 5}{4} \\approx \\frac{1.6094}{4} \\approx 0.402',
                    explanation: 'Apply \\( \\ln \\) then divide by 4.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute back to find \\( N_0 \\).',
                    workingLatex: 'N_0 = \\frac{5000}{e^{2 \\times 0.402}} = \\frac{5000}{e^{0.804}} \\approx \\frac{5000}{2.234} \\approx 2240',
                    explanation: 'Use the first equation with the found value of \\( k \\).'
                }
            ],
            finalAnswer: '\\( N_0 \\approx 2240 \\), \\( k \\approx 0.402 \\)'
        }
    },
    // TYPE D (Q18–22): Half-life problems
    {
        id: 'el5-018',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A radioactive substance has a half-life of 15 years. Its decay is modelled by \\( A = A_0 e^{kt} \\).\n\n (a) Show that \\( k = -\\dfrac{\\ln 2}{15} \\).\n\n (b) Find the value of \\( k \\) to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The half-life means that when \\( t = 15 \\), \\( A = \\frac{1}{2}A_0 \\).',
                    workingLatex: 'A_0 e^{15k} = \\frac{1}{2}A_0 \\Rightarrow e^{15k} = \\frac{1}{2}',
                    explanation: 'Divide both sides by \\( A_0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\).',
                    workingLatex: '15k = \\ln\\!\\left(\\frac{1}{2}\\right) = -\\ln 2 \\Rightarrow k = -\\frac{\\ln 2}{15}',
                    explanation: 'This completes the proof. \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: '(b) Evaluate numerically.',
                    workingLatex: 'k = -\\frac{\\ln 2}{15} \\approx -\\frac{0.6931}{15} \\approx -0.0462',
                    explanation: 'Use a calculator.'
                }
            ],
            finalAnswer: '(b) \\( k \\approx -0.0462 \\)'
        }
    },
    {
        id: 'el5-019',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A radioactive substance has a half-life of 20 years and an initial activity of 640 Bq. Its activity is modelled by \\( A = A_0 e^{kt} \\).\n\n (a) Find \\( k \\) to 3 s.f.\n\n (b) Find the activity after 30 years.\n\n (c) After how many years does the activity first fall below 50 Bq? Give your answer to 3 s.f.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Use the half-life condition: \\( A = 320 \\) when \\( t = 20 \\).',
                    workingLatex: '640e^{20k} = 320 \\Rightarrow e^{20k} = 0.5 \\Rightarrow k = \\frac{\\ln(0.5)}{20} = -\\frac{\\ln 2}{20} \\approx -0.0347',
                    explanation: '\\( \\ln(0.5) = -\\ln 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 30, A_0 = 640, k \\approx -0.0347 \\).',
                    workingLatex: 'A = 640e^{-0.0347 \\times 30} = 640e^{-1.041} \\approx 640 \\times 0.3536 \\approx 226 \\text{ Bq}',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( A = 50 \\) and solve.',
                    workingLatex: '640e^{-0.0347t} = 50 \\Rightarrow e^{-0.0347t} = \\frac{50}{640} \\approx 0.07813',
                    explanation: 'Divide both sides by 640.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: 't = \\frac{\\ln(50/640)}{-0.0347} = \\frac{-2.5507}{-0.0347} \\approx 73.5 \\text{ years}',
                    explanation: 'Both numerator and denominator are negative; \\( t > 0 \\).'
                }
            ],
            finalAnswer: '(a) \\( k \\approx -0.0347 \\) \\quad (b) \\approx 226 \\text{ Bq} \\quad (c) \\approx 73.5 \\text{ years}'
        }
    },
    {
        id: 'el5-020',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A substance has a half-life of 8 years. The initial activity is 1000 Bq.\n\n After how many years is the substance reduced to a quarter of its original activity?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise that a quarter of the original activity means two half-lives have passed.',
                    workingLatex: '\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}',
                    explanation: 'After one half-life: ½. After two half-lives: ¼.'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the time for two half-lives.',
                    workingLatex: '2 \\times 8 = 16 \\text{ years}',
                    explanation: 'Each half-life is 8 years.'
                }
            ],
            finalAnswer: '16 years'
        }
    },
    // TYPE E (Q21–25): Describing features and limitations of models
    {
        id: 'el5-021',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The temperature \\( T\\,^\\circ\\!\\text{C} \\) of a room \\( t \\) minutes after the heating is turned on is modelled by \\( T = 22 - 16e^{-0.05t} \\).\n\n (a) State the initial temperature of the room.\n\n (b) Explain what happens to \\( T \\) as \\( t \\to \\infty \\).\n\n (c) Explain why this model has an upper limit and state what it is.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'T = 22 - 16e^0 = 22 - 16 = 6\\,^\\circ\\!\\text{C}',
                    explanation: 'The room starts at 6°C.'
                },
                {
                    stepNumber: 2,
                    description: '(b) As \\( t \\to \\infty \\), \\( e^{-0.05t} \\to 0 \\).',
                    workingLatex: 'T \\to 22 - 16(0) = 22\\,^\\circ\\!\\text{C}',
                    explanation: 'The temperature approaches 22°C but never quite reaches it.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Since \\( e^{-0.05t} > 0 \\) for all finite \\( t \\), the temperature never reaches 22°C.',
                    workingLatex: 'T < 22\\,^\\circ\\!\\text{C} \\text{ for all finite } t',
                    explanation: 'The upper limit is 22°C. The model prevents the temperature ever exceeding this.'
                }
            ],
            finalAnswer: '(a) \\( 6\\,^\\circ\\!\\text{C} \\) \\quad (b) \\( T \\to 22\\,^\\circ\\!\\text{C} \\) \\quad (c) Upper limit is \\( 22\\,^\\circ\\!\\text{C} \\)'
        }
    },
    {
        id: 'el5-022',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The penguin population \\( P \\) of an island is modelled by \\( P = 3000e^{0.02t} \\), where \\( t \\) is the number of years after a survey.\n\n (a) State the initial population.\n\n (b) Explain why this model may not be appropriate for large values of \\( t \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'P = 3000e^0 = 3000',
                    explanation: 'The initial population is 3000 penguins.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Evaluate for a large \\( t \\), e.g. \\( t = 200 \\).',
                    workingLatex: 'P = 3000e^{0.02 \\times 200} = 3000e^4 \\approx 163\\,794',
                    explanation: 'After 200 years the model predicts over 163 000 penguins.'
                },
                {
                    stepNumber: 3,
                    description: 'Explain the limitation.',
                    workingLatex: '\\text{The model allows } P \\to \\infty \\text{ but island resources are finite.}',
                    explanation: 'In reality, food supply, predators and habitat would limit growth. The model ignores these factors and is unrealistic in the long term.'
                }
            ],
            finalAnswer: '(a) 3000 \\quad (b) The model allows unlimited growth, which is unrealistic — food supply and habitat would limit the population in reality.'
        }
    },
    {
        id: 'el5-023',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A car\'s value (£) \\( t \\) years after purchase is modelled by \\( V = 2000 + 11000e^{-0.2t} \\).\n\n (a) State the purchase price.\n\n (b) Explain the significance of the value 2000 in the model.\n\n (c) After how many complete years is the car worth less than £4000? Give your answer to 3 s.f.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'V = 2000 + 11000e^0 = 2000 + 11000 = £13000',
                    explanation: 'The car was purchased for £13 000.'
                },
                {
                    stepNumber: 2,
                    description: '(b) As \\( t \\to \\infty \\), \\( e^{-0.2t} \\to 0 \\), so \\( V \\to 2000 \\).',
                    workingLatex: 'V \\to £2000',
                    explanation: 'The 2000 represents the scrap/minimum value — the car will never be worth less than £2000 according to this model.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( V = 4000 \\).',
                    workingLatex: '2000 + 11000e^{-0.2t} = 4000 \\Rightarrow 11000e^{-0.2t} = 2000 \\Rightarrow e^{-0.2t} = \\frac{2}{11}',
                    explanation: 'Subtract 2000 then divide by 11000.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '-0.2t = \\ln\\!\\left(\\frac{2}{11}\\right) \\Rightarrow t = \\frac{-\\ln(2/11)}{0.2} = \\frac{\\ln(11/2)}{0.2} \\approx \\frac{1.7047}{0.2} \\approx 8.52',
                    explanation: 'Use a calculator; the car is worth less than £4000 after 9 complete years.'
                }
            ],
            finalAnswer: '(a) £13 000 \\quad (b) £2000 is the minimum value as \\( t \\to \\infty \\) \\quad (c) After 9 complete years'
        }
    },
    {
        id: 'el5-024',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A forest fire spreads so that the burnt area \\( H \\) hectares after \\( t \\) hours satisfies \\( H = 10e^{bt} \\).\n\n (a) Interpret the value 10 in this model.\n\n (b) After 2 hours the burnt area is 40 hectares. Find the value of \\( b \\).\n\n (c) Find the area burned after 5 hours. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'H = 10e^0 = 10 \\text{ hectares}',
                    explanation: 'The value 10 is the initial area of the fire when first observed.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 2, H = 40 \\).',
                    workingLatex: '10e^{2b} = 40 \\Rightarrow e^{2b} = 4 \\Rightarrow 2b = \\ln 4 \\Rightarrow b = \\frac{\\ln 4}{2} \\approx 0.693',
                    explanation: 'Divide by 10, apply ln, then divide by 2.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Substitute \\( t = 5 \\).',
                    workingLatex: 'H = 10e^{0.693 \\times 5} = 10e^{3.466} \\approx 10 \\times 32.0 \\approx 320 \\text{ hectares}',
                    explanation: 'Evaluate using a calculator.'
                }
            ],
            finalAnswer: '(a) 10 hectares is the initial area \\quad (b) \\( b \\approx 0.693 \\) \\quad (c) \\approx 320 \\text{ hectares}'
        }
    },
    {
        id: 'el5-025',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'Describe one limitation of using the model \\( H = 10e^{0.693t} \\) to predict the area burned by a forest fire over a long period.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Consider what happens as \\( t \\) gets large.',
                    workingLatex: '\\text{As } t \\to \\infty, \\; H \\to \\infty',
                    explanation: 'The model predicts an infinitely large burnt area.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the real-world constraint.',
                    workingLatex: '\\text{In reality, the fire is bounded by the total area of the forest.}',
                    explanation: 'Once all the forest is burned, the model is no longer valid. It also ignores firefighting efforts, rainfall, and natural firebreaks.'
                }
            ],
            finalAnswer: 'The model predicts unlimited growth, but the fire is constrained by the finite size of the forest. Other real-world factors (e.g. rainfall, firefighting) are also ignored.'
        }
    },
    // TYPE F (Q26–30): Comparing two models
    {
        id: 'el5-026',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'Two populations of bacteria are modelled by \\( B_1 = 400e^{0.03t} \\) and \\( B_2 = 100e^{0.08t} \\), where \\( t \\) is in hours.\n\n (a) Which population is larger initially?\n\n (b) Find the time at which both populations are equal. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\): \\( B_1 = 400 \\) and \\( B_2 = 100 \\).',
                    workingLatex: 'B_1(0) = 400 > B_2(0) = 100',
                    explanation: '\\( B_1 \\) has the larger initial population.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( B_1 = B_2 \\).',
                    workingLatex: '400e^{0.03t} = 100e^{0.08t}',
                    explanation: 'Find \\( t \\) when the populations are equal.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 100e^{0.03t} \\).',
                    workingLatex: '4 = e^{0.05t}',
                    explanation: '\\( e^{0.08t}/e^{0.03t} = e^{0.05t} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '0.05t = \\ln 4 \\Rightarrow t = \\frac{\\ln 4}{0.05} \\approx \\frac{1.3863}{0.05} \\approx 27.7 \\text{ hours}',
                    explanation: 'Evaluate using a calculator.'
                }
            ],
            finalAnswer: '(a) \\( B_1 \\) is larger initially \\quad (b) \\( t \\approx 27.7 \\) hours'
        }
    },
    {
        id: 'el5-027',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'Two cars depreciate as follows: Car A: \\( V = 20000e^{-0.1t} \\); Car B: \\( V = 15000e^{-0.06t} \\), where \\( t \\) is in years.\n\n (a) Which car costs more initially?\n\n (b) After how many years are both cars worth the same amount? Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\): Car A = £20 000, Car B = £15 000.',
                    workingLatex: 'V_A(0) = £20\\,000 > V_B(0) = £15\\,000',
                    explanation: 'Car A costs more initially.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( V_A = V_B \\).',
                    workingLatex: '20000e^{-0.1t} = 15000e^{-0.06t}',
                    explanation: 'Find when the values are equal.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 15000e^{-0.1t} \\).',
                    workingLatex: '\\frac{20000}{15000} = e^{(-0.06+0.1)t} \\Rightarrow \\frac{4}{3} = e^{0.04t}',
                    explanation: '\\( e^{-0.06t}/e^{-0.1t} = e^{0.04t} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '0.04t = \\ln\\!\\left(\\frac{4}{3}\\right) \\Rightarrow t = \\frac{\\ln(4/3)}{0.04} \\approx \\frac{0.2877}{0.04} \\approx 7.19 \\text{ years}',
                    explanation: 'Evaluate using a calculator.'
                }
            ],
            finalAnswer: '(a) Car A \\quad (b) \\( t \\approx 7.19 \\) years'
        }
    },
    // TYPE G (Q28–31): Gradient interpretation and rate of change
    {
        id: 'el5-028',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A population of fish is modelled by \\( P = 600e^{0.04t} \\), where \\( t \\) is in years.\n\n (a) Find the rate of growth \\( \\dfrac{\\mathrm{d}P}{\\mathrm{d}t} \\) in terms of \\( t \\).\n\n (b) Evaluate the rate of growth when \\( t = 5 \\). Give your answer to 3 s.f.\n\n (c) Show that the rate of growth is proportional to the population.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate \\( P = 600e^{0.04t} \\).',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 0.04 \\times 600e^{0.04t} = 24e^{0.04t}',
                    explanation: 'For \\( y = Ae^{kt} \\), the gradient is \\( kAe^{kt} \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 5 \\).',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}t}\\bigg|_{t=5} = 24e^{0.2} \\approx 24 \\times 1.2214 \\approx 29.3 \\text{ fish/year}',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Show the ratio \\( \\dfrac{\\mathrm{d}P/\\mathrm{d}t}{P} \\) is constant.',
                    workingLatex: '\\frac{\\mathrm{d}P/\\mathrm{d}t}{P} = \\frac{24e^{0.04t}}{600e^{0.04t}} = \\frac{24}{600} = 0.04',
                    explanation: 'The ratio is the constant 0.04, so the rate of growth is proportional to \\( P \\). \\checkmark'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}P}{\\mathrm{d}t} = 24e^{0.04t} \\) \\quad (b) \\approx 29.3 \\text{ fish/year}'
        }
    },
    {
        id: 'el5-029',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A radioactive substance decays according to \\( M = 250e^{-0.05t} \\) grams, where \\( t \\) is in years.\n\n (a) Find the rate of decay \\( \\dfrac{\\mathrm{d}M}{\\mathrm{d}t} \\).\n\n (b) Find the rate of decay when \\( t = 10 \\). Give your answer to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}M}{\\mathrm{d}t} = -0.05 \\times 250e^{-0.05t} = -12.5e^{-0.05t}',
                    explanation: 'The negative sign confirms the mass is decreasing.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 10 \\).',
                    workingLatex: '\\frac{\\mathrm{d}M}{\\mathrm{d}t}\\bigg|_{t=10} = -12.5e^{-0.5} \\approx -12.5 \\times 0.6065 \\approx -7.58 \\text{ g/year}',
                    explanation: 'The substance is losing about 7.58 g per year at \\( t = 10 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}M}{\\mathrm{d}t} = -12.5e^{-0.05t} \\) \\quad (b) \\approx -7.58 \\text{ g/year}'
        }
    },
    // TYPE H (Q30–35): Exam-style multi-part questions
    {
        id: 'el5-030',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: '£500 is invested in an account paying 2.5% compound interest per year. No further deposits or withdrawals are made.\n\n (a) Write a model for the amount \\( A \\) (£) in the account after \\( t \\) years.\n\n (b) Find the amount after 10 years. Give your answer to the nearest penny.\n\n (c) Find the number of complete years before the account holds more than £800.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Each year the amount is multiplied by 1.025.',
                    workingLatex: 'A = 500 \\times 1.025^t',
                    explanation: '1.025 = 1 + 2.5% interest rate.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 10 \\).',
                    workingLatex: 'A = 500 \\times 1.025^{10} \\approx 500 \\times 1.2801 \\approx £640.04',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set up the inequality.',
                    workingLatex: '500 \\times 1.025^t > 800 \\Rightarrow 1.025^t > 1.6',
                    explanation: 'Divide both sides by 500.'
                },
                {
                    stepNumber: 4,
                    description: 'Take logs and solve.',
                    workingLatex: 't > \\frac{\\log 1.6}{\\log 1.025} \\approx \\frac{0.20412}{0.01072} \\approx 19.0 \\text{ years}',
                    explanation: 'So after 20 complete years the account first exceeds £800.'
                }
            ],
            finalAnswer: '(a) \\( A = 500 \\times 1.025^t \\) \\quad (b) £640.04 \\quad (c) 20 complete years'
        }
    },
    {
        id: 'el5-031',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A patient is given a dose of medicine. The concentration \\( C \\) mg/litre in their bloodstream after \\( t \\) hours satisfies \\( C = Ae^{kt} \\). Initially the concentration is 5 mg/litre. After 4 hours it is 2 mg/litre.\n\n (a) Find \\( A \\) and \\( k \\). Give \\( k \\) to 3 s.f.\n\n (b) Find the concentration after 6 hours. Give your answer to 3 s.f.\n\n (c) The medicine is effective when \\( C \\geq 0.5 \\) mg/litre. Find the length of time for which the medicine is effective.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\): \\( A = 5 \\).',
                    workingLatex: 'A = 5',
                    explanation: 'Initial condition gives \\( A \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 4, C = 2 \\).',
                    workingLatex: '5e^{4k} = 2 \\Rightarrow e^{4k} = 0.4 \\Rightarrow k = \\frac{\\ln(0.4)}{4} \\approx \\frac{-0.9163}{4} \\approx -0.229',
                    explanation: 'Divide by 5, apply \\( \\ln \\), divide by 4.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( t = 6 \\).',
                    workingLatex: 'C = 5e^{-0.229 \\times 6} = 5e^{-1.375} \\approx 5 \\times 0.2527 \\approx 1.26 \\text{ mg/litre}',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Set \\( C = 0.5 \\) and solve.',
                    workingLatex: '5e^{-0.229t} = 0.5 \\Rightarrow e^{-0.229t} = 0.1 \\Rightarrow -0.229t = \\ln(0.1)',
                    explanation: 'Divide by 5, apply \\( \\ln \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{-\\ln(0.1)}{0.229} = \\frac{\\ln 10}{0.229} \\approx \\frac{2.3026}{0.229} \\approx 10.1 \\text{ hours}',
                    explanation: 'The medicine is effective for approximately 10.1 hours.'
                }
            ],
            finalAnswer: '(a) \\( A = 5, \\; k \\approx -0.229 \\) \\quad (b) \\approx 1.26 \\text{ mg/litre} \\quad (c) \\approx 10.1 \\text{ hours}'
        }
    },
    {
        id: 'el5-032',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A radioactive isotope has a half-life of 25 years. A sample initially has an activity of 480 Bq. The activity is modelled by \\( A = 480e^{kt} \\).\n\n (a) Show that \\( k = -\\dfrac{\\ln 2}{25} \\).\n\n (b) Find the activity after 50 years.\n\n (c) Find the original activity if the activity after 10 years is 300 Bq. Give your answer to 3 s.f.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) After one half-life (\\( t = 25 \\)), the activity is halved: \\( A = 240 \\).',
                    workingLatex: '480e^{25k} = 240 \\Rightarrow e^{25k} = \\frac{1}{2} \\Rightarrow 25k = -\\ln 2 \\Rightarrow k = -\\frac{\\ln 2}{25} \\checkmark',
                    explanation: 'This proves the given expression for \\( k \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 50 \\) (two half-lives).',
                    workingLatex: 'A = 480 \\times \\left(\\frac{1}{2}\\right)^2 = 480 \\times \\frac{1}{4} = 120 \\text{ Bq}',
                    explanation: 'After two half-lives, the activity is ¼ of the original.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Let the original activity be \\( A_0 \\). Substitute \\( t = 10, A = 300 \\).',
                    workingLatex: 'A_0 e^{-\\frac{\\ln 2}{25} \\times 10} = 300 \\Rightarrow A_0 e^{-0.2773} = 300',
                    explanation: 'Use \\( k = -\\ln 2 / 25 \\approx -0.02773 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( A_0 \\).',
                    workingLatex: 'A_0 = \\frac{300}{e^{-0.2773}} = 300e^{0.2773} \\approx 300 \\times 1.3195 \\approx 396 \\text{ Bq}',
                    explanation: 'Divide by \\( e^{-0.2773} \\) or multiply by \\( e^{0.2773} \\).'
                }
            ],
            finalAnswer: '(b) 120 Bq \\quad (c) \\approx 396 Bq'
        }
    },
    {
        id: 'el5-033',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A town\'s population \\( P \\) is modelled by \\( P = 45000e^{0.012t} \\), where \\( t \\) is the number of years after 2020.\n\n (a) Estimate the population in 2030.\n\n (b) Estimate the year in which the population first exceeds 60 000.\n\n (c) Give one reason why the model may not be reliable in the long term.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) In 2030, \\( t = 10 \\).',
                    workingLatex: 'P = 45000e^{0.12} \\approx 45000 \\times 1.1275 \\approx 50\\,737',
                    explanation: 'Substitute \\( t = 10 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( P = 60000 \\) and solve.',
                    workingLatex: '45000e^{0.012t} = 60000 \\Rightarrow e^{0.012t} = \\frac{4}{3}',
                    explanation: 'Divide both sides by 45000.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) and solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln(4/3)}{0.012} \\approx \\frac{0.2877}{0.012} \\approx 24.0',
                    explanation: '\\( t \\approx 24 \\) years after 2020 = year 2044.'
                },
                {
                    stepNumber: 4,
                    description: '(c) State a limitation.',
                    workingLatex: '\\text{Population growth depends on factors like migration, birth rate, and economic conditions.}',
                    explanation: 'These factors are not constant and cannot be captured by a single exponential model over a long period.'
                }
            ],
            finalAnswer: '(a) \\approx 50\\,737 \\quad (b) 2044 \\quad (c) e.g. Assumes a constant growth rate; ignores migration and changes in birth/death rates.'
        }
    },
    {
        id: 'el5-034',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'The number of subscribers \\( S \\) to a YouTube channel after \\( t \\) weeks satisfies \\( S = S_0 e^{kt} \\). After 3 weeks there are 8000 subscribers and after 9 weeks there are 50000 subscribers.\n\n (a) Find \\( S_0 \\) and \\( k \\). Give \\( k \\) to 3 s.f.\n\n (b) Predict the number of subscribers after 15 weeks.\n\n (c) Describe one limitation of this model.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write two equations.',
                    workingLatex: 'S_0 e^{3k} = 8000 \\quad \\text{and} \\quad S_0 e^{9k} = 50000',
                    explanation: 'Using each data point in the model.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide to eliminate \\( S_0 \\).',
                    workingLatex: 'e^{6k} = \\frac{50000}{8000} = 6.25 \\Rightarrow 6k = \\ln(6.25) \\Rightarrow k = \\frac{\\ln(6.25)}{6} \\approx \\frac{1.8326}{6} \\approx 0.305',
                    explanation: '\\( e^{9k}/e^{3k} = e^{6k} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( S_0 \\) from the first equation.',
                    workingLatex: 'S_0 = \\frac{8000}{e^{3 \\times 0.305}} = \\frac{8000}{e^{0.916}} \\approx \\frac{8000}{2.499} \\approx 3202',
                    explanation: 'Substitute \\( k \\) into the first equation.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( t = 15 \\).',
                    workingLatex: 'S = 3202 \\times e^{0.305 \\times 15} = 3202 e^{4.575} \\approx 3202 \\times 97.1 \\approx 311\\,000',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 5,
                    description: '(c) State a limitation.',
                    workingLatex: '\\text{The model allows } S \\to \\infty \\text{ but growth will slow as the channel becomes saturated.}',
                    explanation: 'In reality subscriber growth slows as the potential audience is reached.'
                }
            ],
            finalAnswer: '(a) \\( S_0 \\approx 3202, \\; k \\approx 0.305 \\) \\quad (b) \\approx 311\\,000 \\text{ subscribers} \\quad (c) Unlimited growth is unrealistic; growth slows as the audience saturates.'
        }
    },
    {
        id: 'el5-035',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Foundation',
        questionText: 'A Newton\'s Law of Cooling model gives the temperature \\( T\\,^\\circ\\!\\text{C} \\) of a hot drink after \\( t \\) minutes as \\( T = 65e^{-0.04t} + 20 \\).\n\n (a) State the initial temperature.\n\n (b) Find the temperature after 10 minutes. Give your answer to 3 s.f.\n\n (c) Find the time at which the drink cools to 35°C. Give your answer to 3 s.f.\n\n (d) Explain what the value 20 represents and state the long-term behaviour of \\( T \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'T = 65e^0 + 20 = 65 + 20 = 85\\,^\\circ\\!\\text{C}',
                    explanation: 'The drink starts at 85°C.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 10 \\).',
                    workingLatex: 'T = 65e^{-0.4} + 20 \\approx 65 \\times 0.6703 + 20 \\approx 43.6 + 20 = 63.6\\,^\\circ\\!\\text{C}',
                    explanation: 'Evaluate \\( e^{-0.4} \\approx 0.6703 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( T = 35 \\) and isolate the exponential.',
                    workingLatex: '65e^{-0.04t} + 20 = 35 \\Rightarrow 65e^{-0.04t} = 15 \\Rightarrow e^{-0.04t} = \\frac{15}{65} = \\frac{3}{13}',
                    explanation: 'Subtract 20 then divide by 65.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '-0.04t = \\ln\\!\\left(\\frac{3}{13}\\right) \\Rightarrow t = \\frac{-\\ln(3/13)}{0.04} = \\frac{\\ln(13/3)}{0.04} \\approx \\frac{1.4663}{0.04} \\approx 36.7 \\text{ min}',
                    explanation: 'Evaluate using a calculator.'
                },
                {
                    stepNumber: 5,
                    description: '(d) As \\( t \\to \\infty \\), \\( e^{-0.04t} \\to 0 \\) so \\( T \\to 20\\,^\\circ\\!\\text{C} \\).',
                    workingLatex: 'T \\to 20\\,^\\circ\\!\\text{C}',
                    explanation: 'The value 20 represents the room temperature — the drink cools towards the ambient temperature but never falls below it.'
                }
            ],
            finalAnswer: '(a) \\( 85\\,^\\circ\\!\\text{C} \\) \\quad (b) \\( 63.6\\,^\\circ\\!\\text{C} \\) \\quad (c) \\( t \\approx 36.7 \\) min \\quad (d) 20°C is room temperature; \\( T \\to 20\\,^\\circ\\!\\text{C} \\) as \\( t \\to \\infty \\)'
        }
    },

    // ─── Q36–70: Additional Modelling Questions ──────────────────────

    {
        id: 'el5-036', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A colony of bacteria doubles every 4 hours. Starting with 200, find the population after 20 hours.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Number of doublings', workingLatex: '20 \\div 4 = 5', explanation: '' },
            { stepNumber: 2, description: 'Calculate', workingLatex: 'P = 200 \\times 2^5 = 6400', explanation: '' }
        ], finalAnswer: '6400 bacteria' }
    },
    {
        id: 'el5-037', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A radioactive substance has half-life 5 years. If the initial mass is 80 g, find the mass after 15 years.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Number of half-lives', workingLatex: '15 \\div 5 = 3', explanation: '' },
            { stepNumber: 2, description: 'Calculate', workingLatex: 'm = 80 \\times \\left(\\frac{1}{2}\\right)^3 = 10 \\text{ g}', explanation: '' }
        ], finalAnswer: '10 g' }
    },
    {
        id: 'el5-038', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A population is modelled by \\( P = 1000e^{0.05t} \\). Find: (a) the initial population; (b) the population after 10 years.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 0', workingLatex: 'P = 1000e^0 = 1000', explanation: '' },
            { stepNumber: 2, description: '(b) t = 10', workingLatex: 'P = 1000e^{0.5} = 1000 \\times 1.649 = 1649', explanation: '' }
        ], finalAnswer: '(a) 1000 (b) 1649' }
    },
    {
        id: 'el5-039', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The mass of a substance decays according to \\( m = 50e^{-0.1t} \\). Find when the mass is 25 g.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '25 = 50e^{-0.1t} \\implies e^{-0.1t} = 0.5', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 't = \\frac{\\ln 2}{0.1} = 6.93', explanation: '' }
        ], finalAnswer: 't = 6.93 units' }
    },
    {
        id: 'el5-040', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A car depreciates at 15% per year. Its initial value is \\( \\pounds 20000 \\). Find its value after 5 years.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Model', workingLatex: 'V = 20000 \\times 0.85^5 = 20000 \\times 0.4437 = 8874', explanation: '' }
        ], finalAnswer: '8874 pounds' }
    },
    {
        id: 'el5-041', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'An investment grows at 3% compound interest per year. How long until it doubles?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up', workingLatex: '1.03^n = 2', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'n = \\frac{\\ln 2}{\\ln 1.03} = \\frac{0.693}{0.0296} = 23.4', explanation: '' }
        ], finalAnswer: 'Approximately 24 years' }
    },
    {
        id: 'el5-042', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The temperature of a cooling body is \\( T = 15 + 70e^{-0.03t} \\). Find the initial temperature and the temperature after 30 minutes.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 't = 0', workingLatex: 'T = 15 + 70 = 85^\\circ', explanation: '' },
            { stepNumber: 2, description: 't = 30', workingLatex: 'T = 15 + 70e^{-0.9} = 15 + 70(0.4066) = 43.5^\\circ', explanation: '' }
        ], finalAnswer: 'Initial: 85 degrees; after 30 min: 43.5 degrees' }
    },
    {
        id: 'el5-043', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A population of 5000 increases at 2% per year. Write a model and find the population after 20 years.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Model', workingLatex: 'P = 5000 \\times 1.02^{20} = 5000 \\times 1.486 = 7430', explanation: '' }
        ], finalAnswer: 'P = 5000 x 1.02^t; after 20 years: 7430' }
    },
    {
        id: 'el5-044', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A substance decays so that \\( m = m_0 e^{-kt} \\). After 8 hours, 75% remains. Find \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '0.75 = e^{-8k} \\implies -8k = \\ln 0.75', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'k = \\frac{-\\ln 0.75}{8} = \\frac{0.2877}{8} = 0.0360', explanation: '' }
        ], finalAnswer: 'k = 0.0360' }
    },
    {
        id: 'el5-045', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The number of fish in a lake is modelled by \\( N = \\frac{2000}{1 + 9e^{-0.5t}} \\). Find: (a) N when t = 0; (b) N as t approaches infinity.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 0', workingLatex: 'N = \\frac{2000}{1 + 9} = 200', explanation: '' },
            { stepNumber: 2, description: '(b) As t -> infinity', workingLatex: 'e^{-0.5t} \\to 0 \\implies N \\to \\frac{2000}{1} = 2000', explanation: 'Carrying capacity.' }
        ], finalAnswer: '(a) 200 (b) 2000' }
    },
    {
        id: 'el5-046', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Carbon-14 has a half-life of 5730 years. A sample has 40% of its original C-14. How old is it?',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'k = \\frac{\\ln 2}{5730} = 0.000121', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '0.4 = e^{-0.000121t} \\implies t = \\frac{-\\ln 0.4}{0.000121} = 7573 \\text{ years}', explanation: '' }
        ], finalAnswer: 'Approximately 7573 years old' }
    },
    {
        id: 'el5-047', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A drug is eliminated from the body so that the amount \\( A \\) mg after \\( t \\) hours is \\( A = 400e^{-0.2t} \\). Find when less than 50 mg remains.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solve', workingLatex: '50 = 400e^{-0.2t} \\implies e^{-0.2t} = 0.125', explanation: '' },
            { stepNumber: 2, description: 'Take ln', workingLatex: 't = \\frac{-\\ln 0.125}{0.2} = \\frac{2.079}{0.2} = 10.4 \\text{ hours}', explanation: '' }
        ], finalAnswer: 'After 10.4 hours' }
    },
    {
        id: 'el5-048', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The value of a painting increases according to \\( V = 500e^{0.08t} \\). Find: (a) the value after 10 years; (b) when it reaches \\( \\pounds 2000 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 10', workingLatex: 'V = 500e^{0.8} = 500 \\times 2.226 = 1113', explanation: '' },
            { stepNumber: 2, description: '(b) Solve', workingLatex: '2000 = 500e^{0.08t} \\implies e^{0.08t} = 4 \\implies t = \\frac{\\ln 4}{0.08} = 17.3', explanation: '' }
        ], finalAnswer: '(a) 1113 pounds (b) 17.3 years' }
    },
    {
        id: 'el5-049', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A cup of tea cools from \\( 90^\\circ \\)C in a room at \\( 20^\\circ \\)C. After 5 minutes it is \\( 70^\\circ \\)C. Find \\( k \\) in \\( T = 20 + 70e^{-kt} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute T = 70, t = 5', workingLatex: '70 = 20 + 70e^{-5k} \\implies 50 = 70e^{-5k} \\implies e^{-5k} = \\frac{5}{7}', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'k = \\frac{-\\ln(5/7)}{5} = \\frac{0.3365}{5} = 0.0673', explanation: '' }
        ], finalAnswer: 'k = 0.0673' }
    },
    {
        id: 'el5-050', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The spread of a rumour is modelled by \\( N = 500(1 - e^{-0.1t}) \\) where \\( N \\) is the number who have heard it after \\( t \\) hours. Find: (a) N after 5 hours; (b) when 400 people have heard it.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 5', workingLatex: 'N = 500(1 - e^{-0.5}) = 500(1 - 0.6065) = 197', explanation: '' },
            { stepNumber: 2, description: '(b) N = 400', workingLatex: '400 = 500(1 - e^{-0.1t}) \\implies e^{-0.1t} = 0.2 \\implies t = \\frac{\\ln 5}{0.1} = 16.1', explanation: '' }
        ], finalAnswer: '(a) 197 people (b) 16.1 hours' }
    },
    {
        id: 'el5-051', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A machine loses 12% of its value each year. After how many years is it worth less than a quarter of its original value?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Model', workingLatex: '0.88^n < 0.25', explanation: '' },
            { stepNumber: 2, description: 'Take logs', workingLatex: 'n > \\frac{\\ln 0.25}{\\ln 0.88} = \\frac{-1.386}{-0.1278} = 10.8', explanation: '' }
        ], finalAnswer: 'After 11 years' }
    },
    {
        id: 'el5-052', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The pressure \\( P \\) at height \\( h \\) km is modelled by \\( P = 101e^{-0.12h} \\). Find the pressure at 10 km.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: 'P = 101e^{-1.2} = 101 \\times 0.3012 = 30.4 \\text{ kPa}', explanation: '' }
        ], finalAnswer: '30.4 kPa' }
    },
    {
        id: 'el5-053', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The number of cases of a disease grows according to \\( N = 50e^{0.15t} \\). How long until there are 500 cases?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solve', workingLatex: '500 = 50e^{0.15t} \\implies e^{0.15t} = 10 \\implies t = \\frac{\\ln 10}{0.15} = 15.4 \\text{ days}', explanation: '' }
        ], finalAnswer: '15.4 days' }
    },
    {
        id: 'el5-054', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Show that if \\( y = Ae^{kt} \\), then \\( \\ln y \\) is a linear function of \\( t \\). State the gradient and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '\\ln y = \\ln A + kt', explanation: 'Linear in t with gradient k and y-intercept ln A.' }
        ], finalAnswer: 'Gradient = k, y-intercept = ln A' }
    },
    {
        id: 'el5-055', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A capacitor discharges: \\( V = 12e^{-t/RC} \\) where \\( R = 1000 \\), \\( C = 0.001 \\). Find \\( V \\) after 2 seconds.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'RC = 1', workingLatex: 'V = 12e^{-2/1} = 12e^{-2} = 12 \\times 0.1353 = 1.62 \\text{ V}', explanation: '' }
        ], finalAnswer: '1.62 V' }
    },
    {
        id: 'el5-056', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A town has population 8000 growing at 1.5% per year. In how many years will it exceed 10000?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solve', workingLatex: '8000 \\times 1.015^n = 10000 \\implies 1.015^n = 1.25', explanation: '' },
            { stepNumber: 2, description: 'Take logs', workingLatex: 'n = \\frac{\\ln 1.25}{\\ln 1.015} = 15.0', explanation: '' }
        ], finalAnswer: '15 years' }
    },
    {
        id: 'el5-057', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Two populations: \\( P_1 = 3000e^{0.02t} \\) and \\( P_2 = 5000e^{-0.01t} \\). When are they equal?',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equal', workingLatex: '3000e^{0.02t} = 5000e^{-0.01t}', explanation: '' },
            { stepNumber: 2, description: 'Rearrange', workingLatex: 'e^{0.03t} = \\frac{5}{3} \\implies t = \\frac{\\ln(5/3)}{0.03} = 17.0', explanation: '' }
        ], finalAnswer: 't = 17.0 years' }
    },
    {
        id: 'el5-058', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A lake contains 100 kg of pollutant. Each year 20% is removed naturally. How long until less than 10 kg remains?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Model', workingLatex: '100 \\times 0.8^n < 10 \\implies 0.8^n < 0.1', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'n > \\frac{\\ln 0.1}{\\ln 0.8} = \\frac{-2.303}{-0.2231} = 10.3', explanation: '' }
        ], finalAnswer: 'After 11 years' }
    },
    {
        id: 'el5-059', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The temperature of a freezer item placed in a room is \\( T = 22 - 40e^{-0.05t} \\). Find when T = 10.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '10 = 22 - 40e^{-0.05t} \\implies 40e^{-0.05t} = 12 \\implies e^{-0.05t} = 0.3', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 't = \\frac{-\\ln 0.3}{0.05} = \\frac{1.204}{0.05} = 24.1 \\text{ min}', explanation: '' }
        ], finalAnswer: 't = 24.1 minutes' }
    },
    {
        id: 'el5-060', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A savings account pays 5% interest compounded annually. Find the annual equivalent rate if compounded continuously.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Continuous equivalent', workingLatex: 'e^r = 1.05 \\implies r = \\ln 1.05 = 0.04879', explanation: '' }
        ], finalAnswer: 'r = 4.88% continuous rate' }
    },
    {
        id: 'el5-061', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A rumour spreads so that after \\( t \\) hours, the fraction who know is \\( f = 1 - e^{-0.3t} \\). After how many hours do 90% know?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solve', workingLatex: '0.9 = 1 - e^{-0.3t} \\implies e^{-0.3t} = 0.1 \\implies t = \\frac{\\ln 10}{0.3} = 7.68', explanation: '' }
        ], finalAnswer: 't = 7.68 hours' }
    },
    {
        id: 'el5-062', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Light intensity decreases with depth: \\( I = I_0 e^{-0.4d} \\) where \\( d \\) is in metres. At what depth is the intensity 1% of the surface value?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Solve', workingLatex: '0.01 = e^{-0.4d} \\implies d = \\frac{-\\ln 0.01}{0.4} = \\frac{4.605}{0.4} = 11.5 \\text{ m}', explanation: '' }
        ], finalAnswer: 'd = 11.5 metres' }
    },
    {
        id: 'el5-063', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The rate of decay of a substance is proportional to the amount present. Write the differential equation and its solution.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Differential equation', workingLatex: '\\frac{dm}{dt} = -km', explanation: '' },
            { stepNumber: 2, description: 'Solution', workingLatex: 'm = m_0 e^{-kt}', explanation: 'Where m_0 is the initial mass.' }
        ], finalAnswer: 'dm/dt = -km; solution m = m_0 e^{-kt}' }
    },
    {
        id: 'el5-064', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'House prices increase by 6% per year. A house costs \\( \\pounds 200000 \\) now. What will it cost in 8 years?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Calculate', workingLatex: 'V = 200000 \\times 1.06^8 = 200000 \\times 1.594 = 318800', explanation: '' }
        ], finalAnswer: '318800 pounds' }
    },
    {
        id: 'el5-065', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The charge on a capacitor builds up: \\( Q = Q_0(1 - e^{-t/RC}) \\). If \\( Q_0 = 100 \\), \\( RC = 5 \\), find Q after 10 seconds.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: 'Q = 100(1 - e^{-2}) = 100(1 - 0.1353) = 86.5 \\mu\\text{C}', explanation: '' }
        ], finalAnswer: '86.5 units' }
    },
    {
        id: 'el5-066', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Data suggests \\( y = ab^x \\). When \\( x = 0, y = 3 \\) and when \\( x = 4, y = 48 \\). Find \\( a \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'x = 0 gives a', workingLatex: 'a = 3', explanation: '' },
            { stepNumber: 2, description: 'x = 4', workingLatex: '3b^4 = 48 \\implies b^4 = 16 \\implies b = 2', explanation: '' }
        ], finalAnswer: 'a = 3, b = 2' }
    },
    {
        id: 'el5-067', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A ball bounces to 80% of its previous height. Dropped from 2 m, after how many bounces is it below 0.5 m?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Model', workingLatex: '2 \\times 0.8^n < 0.5 \\implies 0.8^n < 0.25', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: 'n > \\frac{\\ln 0.25}{\\ln 0.8} = \\frac{-1.386}{-0.2231} = 6.21', explanation: '' }
        ], finalAnswer: 'After 7 bounces' }
    },
    {
        id: 'el5-068', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Show that a quantity with constant percentage growth rate \\( r\\% \\) per unit time can be written as \\( Q = Q_0 e^{kt} \\) where \\( k = \\ln(1 + r/100) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Start from discrete', workingLatex: 'Q = Q_0(1 + r/100)^t = Q_0 e^{t\\ln(1+r/100)} = Q_0 e^{kt}', explanation: 'With k = ln(1+r/100).' }
        ], finalAnswer: 'Shown: k = ln(1 + r/100)' }
    },
    {
        id: 'el5-069', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Bacteria grow from 100 to 300 in 6 hours. Assuming exponential growth \\( N = 100e^{kt} \\), find: (a) k; (b) the population after 10 hours.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Find k', workingLatex: '300 = 100e^{6k} \\implies k = \\frac{\\ln 3}{6} = 0.183', explanation: '' },
            { stepNumber: 2, description: '(b) t = 10', workingLatex: 'N = 100e^{1.83} = 100 \\times 6.23 = 623', explanation: '' }
        ], finalAnswer: '(a) k = 0.183 (b) 623 bacteria' }
    },
    {
        id: 'el5-070', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A radioactive element has decay constant \\( k = 0.005 \\) per year. Find: (a) the half-life; (b) the time for 90% to decay; (c) the percentage remaining after 100 years.',
        marks: 7, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Half-life', workingLatex: 't_{1/2} = \\frac{\\ln 2}{0.005} = 138.6 \\text{ years}', explanation: '' },
            { stepNumber: 2, description: '(b) 10% remaining', workingLatex: '0.1 = e^{-0.005t} \\implies t = \\frac{\\ln 10}{0.005} = 460.5 \\text{ years}', explanation: '' },
            { stepNumber: 3, description: '(c) After 100 years', workingLatex: 'e^{-0.5} = 0.6065 = 60.7\\%', explanation: '' }
        ], finalAnswer: '(a) 138.6 years (b) 460.5 years (c) 60.7%' }
    },
];
