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
    // TYPE A (Q1–5): Exam-style modelling questions
    {
        id: 'el5-001',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'A radioactive isotope has a half-life of 12 hours. A sample initially has mass 500 g. The mass \\( M \\) grams remaining after \\( t \\) hours is modelled by \\( M = 500e^{-kt} \\).\n\n(a) Find the exact value of \\( k \\). (3 marks)\n\n(b) Find the time at which the mass first drops below 10 g. Give your answer to 3 significant figures. (3 marks)\n\n(c) Find the rate of decay when \\( t = 24 \\). Give your answer to 3 significant figures. (2 marks)',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Use the half-life condition: when \\( t = 12 \\), \\( M = 250 \\).',
                    workingLatex: '250 = 500e^{-12k}',
                    explanation: 'After one half-life (12 hours), half the original mass remains, so \\( M = 250 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Solve for \\( k \\).',
                    workingLatex: 'e^{-12k} = \\frac{1}{2} \\implies -12k = \\ln\\tfrac{1}{2} = -\\ln 2 \\implies k = \\frac{\\ln 2}{12}',
                    explanation: 'Divide both sides by 500, take natural logs, then isolate \\( k \\). The exact value is \\( k = \\frac{\\ln 2}{12} \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( M < 10 \\) and solve for \\( t \\).',
                    workingLatex: '500e^{-\\frac{\\ln 2}{12}t} < 10 \\implies e^{-\\frac{\\ln 2}{12}t} < \\frac{1}{50}',
                    explanation: 'Substitute the expression for \\( k \\) and divide both sides by 500.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Take natural logs and solve.',
                    workingLatex: '-\\frac{\\ln 2}{12}t < \\ln\\tfrac{1}{50} \\implies t > \\frac{12\\ln 50}{\\ln 2} \\approx 67.7 \\text{ hours}',
                    explanation: 'Take \\( \\ln \\) of both sides. The inequality reverses when dividing by the negative coefficient. Evaluate to get \\( t \\approx 67.7 \\) hours.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Differentiate to find the rate of decay.',
                    workingLatex: '\\frac{dM}{dt} = -500 \\cdot \\frac{\\ln 2}{12} \\cdot e^{-\\frac{\\ln 2}{12}t}',
                    explanation: 'Differentiate \\( M = 500e^{-kt} \\) with respect to \\( t \\) using \\( k = \\frac{\\ln 2}{12} \\).'
                },
                {
                    stepNumber: 6,
                    description: '(c) Substitute \\( t = 24 \\) and evaluate.',
                    workingLatex: '\\frac{dM}{dt}\\bigg|_{t=24} = -500 \\cdot \\frac{\\ln 2}{12} \\cdot e^{-2\\ln 2} = -500 \\cdot \\frac{\\ln 2}{12} \\cdot \\frac{1}{4} = -\\frac{125\\ln 2}{12} \\approx -7.22 \\text{ g/hour}',
                    explanation: 'When \\( t = 24 \\), the exponent is \\( -2\\ln 2 = \\ln\\frac{1}{4} \\), so \\( e^{-2\\ln 2} = \\frac{1}{4} \\). The rate of decay is approximately \\( -7.22 \\) g/hour.'
                }
            ],
            finalAnswer: '(a) \\( k = \\frac{\\ln 2}{12} \\) \\quad (b) \\( t \\approx 67.7 \\) hours \\quad (c) \\( \\frac{dM}{dt} \\approx -7.22 \\) g/hour'
        }
    },
    {
        id: 'el5-002',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'Two bacteria colonies are observed. Colony A starts with 200 bacteria and grows at a rate of \\( 0.05 \\) per hour. Colony B starts with 500 bacteria and decays at a rate of \\( 0.03 \\) per hour. Both are modelled using exponential functions of the form \\( N = N_0 e^{\\pm rt} \\).\n\n(a) Write down the exponential models for colonies A and B. (2 marks)\n\n(b) Find the time at which the two populations are equal. Give your answer to 3 significant figures. (3 marks)\n\n(c) Find the combined population at the time found in part (b). Give your answer to the nearest whole number. (2 marks)',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the model for colony A (growth).',
                    workingLatex: 'N_A = 200e^{0.05t}',
                    explanation: 'Colony A starts at 200 and grows, so the exponent is positive with rate \\( 0.05 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Write the model for colony B (decay).',
                    workingLatex: 'N_B = 500e^{-0.03t}',
                    explanation: 'Colony B starts at 500 and decays, so the exponent is negative with rate \\( 0.03 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( N_A = N_B \\) and solve.',
                    workingLatex: '200e^{0.05t} = 500e^{-0.03t}',
                    explanation: 'Equate the two models to find the time when the populations are the same.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Divide and take logarithms.',
                    workingLatex: '\\frac{e^{0.05t}}{e^{-0.03t}} = \\frac{500}{200} \\implies e^{0.08t} = 2.5 \\implies 0.08t = \\ln 2.5 \\implies t = \\frac{\\ln 2.5}{0.08} \\approx 11.5 \\text{ hours}',
                    explanation: 'Divide both sides by \\( e^{-0.03t} \\) and by 200. Use the index law \\( e^{0.05t} \\div e^{-0.03t} = e^{0.08t} \\). Then take \\( \\ln \\) of both sides.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( t = 11.45 \\) into either model.',
                    workingLatex: 'N_A = 200e^{0.05 \\times 11.45} = 200e^{0.5726} \\approx 200 \\times 1.7728 \\approx 354',
                    explanation: 'Substitute the exact value of \\( t \\) into the model for colony A (or B). The combined population is \\( 2 \\times 354 = 709 \\) (since both are equal at this time).'
                }
            ],
            finalAnswer: '(a) \\( N_A = 200e^{0.05t},\\; N_B = 500e^{-0.03t} \\) \\quad (b) \\( t \\approx 11.5 \\) hours \\quad (c) Combined population \\( \\approx 709 \\)'
        }
    },
    {
        id: 'el5-003',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'A car is bought for \\( \\pounds 25000 \\). Its value \\( V \\) pounds after \\( t \\) years is modelled by \\( V = 25000e^{-kt} \\). After 3 years the car is worth \\( \\pounds 16000 \\).\n\n(a) Find the value of \\( k \\) to 3 significant figures. (2 marks)\n\n(b) Find the time at which the value of the car first drops below \\( \\pounds 5000 \\). Give your answer to 3 significant figures. (3 marks)\n\n(c) A second car, also bought for \\( \\pounds 25000 \\), depreciates at a fixed rate of 20% per year. Determine which car is worth more after 5 years. (2 marks)',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 3 \\), \\( V = 16000 \\) and solve for \\( k \\).',
                    workingLatex: '16000 = 25000e^{-3k} \\implies e^{-3k} = \\frac{16}{25} \\implies -3k = \\ln\\frac{16}{25}',
                    explanation: 'Divide both sides by 25000 to isolate the exponential term, then take natural logs.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Evaluate \\( k \\).',
                    workingLatex: 'k = -\\frac{1}{3}\\ln\\frac{16}{25} = \\frac{1}{3}\\ln\\frac{25}{16} \\approx 0.149',
                    explanation: 'Divide by \\( -3 \\) and simplify. Using a calculator, \\( k \\approx 0.149 \\) to 3 s.f.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( V < 5000 \\) and solve for \\( t \\).',
                    workingLatex: '25000e^{-0.149t} < 5000 \\implies e^{-0.149t} < \\frac{1}{5}',
                    explanation: 'Divide both sides by 25000.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Take logs and solve.',
                    workingLatex: '-0.149t < \\ln\\frac{1}{5} = -\\ln 5 \\implies t > \\frac{\\ln 5}{0.149} \\approx 10.8 \\text{ years}',
                    explanation: 'Take \\( \\ln \\) of both sides. Dividing by \\( -0.149 \\) reverses the inequality. The value drops below \\( \\pounds 5000 \\) after approximately \\( 10.8 \\) years.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Find the value of car 1 after 5 years.',
                    workingLatex: 'V_1 = 25000e^{-0.149 \\times 5} = 25000e^{-0.745} \\approx 25000 \\times 0.4746 \\approx \\pounds 11870',
                    explanation: 'Substitute \\( t = 5 \\) into the exponential model for the first car.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Find the value of car 2 after 5 years and compare.',
                    workingLatex: 'V_2 = 25000 \\times 0.8^5 = 25000 \\times 0.32768 = \\pounds 8192',
                    explanation: 'The second car retains 80% of its value each year, so \\( V_2 = 25000 \\times 0.8^5 \\). Since \\( \\pounds 11870 > \\pounds 8192 \\), the first car is worth more after 5 years.'
                }
            ],
            finalAnswer: '(a) \\( k \\approx 0.149 \\) \\quad (b) \\( t \\approx 10.8 \\) years \\quad (c) Car 1 (\\( \\pounds 11870 \\)) is worth more than Car 2 (\\( \\pounds 8192 \\))'
        }
    },
    {
        id: 'el5-004',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'Newton\'s law of cooling states that the temperature \\( T\\,^\\circ\\text{C} \\) of an object at time \\( t \\) minutes is given by \\( T = 20 + Ae^{-kt} \\), where 20 is the room temperature. A cup of tea is initially at \\( 95\\,^\\circ\\text{C} \\). After 5 minutes it has cooled to \\( 70\\,^\\circ\\text{C} \\).\n\n(a) Find the value of \\( A \\). (1 mark)\n\n(b) Show that \\( k = \\frac{1}{5}\\ln\\frac{15}{10} \\). (3 marks)\n\n(c) Find the temperature of the tea when \\( t = 15 \\). Give your answer to 3 significant figures. (2 marks)\n\n(d) Find the time at which the temperature reaches \\( 30\\,^\\circ\\text{C} \\). Give your answer to 3 significant figures. (2 marks)',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Use the initial condition \\( T = 95 \\) when \\( t = 0 \\).',
                    workingLatex: '95 = 20 + Ae^0 \\implies A = 95 - 20 = 75',
                    explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so \\( A = T_0 - 20 = 75 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Use the condition \\( T = 70 \\) when \\( t = 5 \\).',
                    workingLatex: '70 = 20 + 75e^{-5k} \\implies 50 = 75e^{-5k} \\implies e^{-5k} = \\frac{50}{75} = \\frac{2}{3}',
                    explanation: 'Subtract 20 from both sides, then divide by 75 to isolate the exponential.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Take logs and solve for \\( k \\).',
                    workingLatex: '-5k = \\ln\\frac{2}{3} = -\\ln\\frac{3}{2} \\implies k = \\frac{1}{5}\\ln\\frac{3}{2} = \\frac{1}{5}\\ln\\frac{15}{10}',
                    explanation: 'Take \\( \\ln \\) of both sides and divide by \\( -5 \\). Note that \\( \\frac{3}{2} = \\frac{15}{10} \\), confirming the required result.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Substitute \\( t = 15 \\) into the model.',
                    workingLatex: 'T = 20 + 75e^{-15 \\times \\frac{1}{5}\\ln\\frac{3}{2}} = 20 + 75e^{-3\\ln\\frac{3}{2}} = 20 + 75\\left(\\frac{3}{2}\\right)^{-3} = 20 + 75 \\times \\frac{8}{27} \\approx 42.2\\,^\\circ\\text{C}',
                    explanation: 'Use the law \\( e^{a\\ln b} = b^a \\). So \\( e^{-3\\ln\\frac{3}{2}} = \\left(\\frac{3}{2}\\right)^{-3} = \\frac{8}{27} \\). The temperature after 15 minutes is approximately \\( 42.2\\,^\\circ\\text{C} \\).'
                },
                {
                    stepNumber: 5,
                    description: '(d) Set \\( T = 30 \\) and solve for \\( t \\).',
                    workingLatex: '30 = 20 + 75e^{-kt} \\implies 10 = 75e^{-kt} \\implies e^{-kt} = \\frac{2}{15}',
                    explanation: 'Subtract 20 from both sides and divide by 75.'
                },
                {
                    stepNumber: 6,
                    description: '(d) Take logs and evaluate.',
                    workingLatex: '-kt = \\ln\\frac{2}{15} \\implies t = \\frac{-\\ln\\frac{2}{15}}{\\frac{1}{5}\\ln\\frac{3}{2}} = \\frac{5\\ln\\frac{15}{2}}{\\ln\\frac{3}{2}} \\approx 24.9 \\text{ minutes}',
                    explanation: 'Divide by \\( -k \\) where \\( k = \\frac{1}{5}\\ln\\frac{3}{2} \\). The tea reaches \\( 30\\,^\\circ\\text{C} \\) after approximately \\( 24.9 \\) minutes.'
                }
            ],
            finalAnswer: '(a) \\( A = 75 \\) \\quad (b) Shown \\quad (c) \\( T \\approx 42.2\\,^\\circ\\text{C} \\) \\quad (d) \\( t \\approx 24.9 \\) minutes'
        }
    },
    {
        id: 'el5-005',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'A drug is administered to a patient. The concentration \\( C \\) mg/L in the bloodstream after \\( t \\) hours is modelled by \\( C = 12(1 - e^{-0.2t}) \\).\n\n(a) Find \\( C(0) \\) and explain what this value represents in context. (2 marks)\n\n(b) Find the limiting concentration as \\( t \\to \\infty \\). (2 marks)\n\n(c) Find the time at which the concentration reaches 90% of its limiting value. Give your answer to 3 significant figures. (3 marks)',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\).',
                    workingLatex: 'C(0) = 12(1 - e^{0}) = 12(1 - 1) = 0',
                    explanation: 'When \\( t = 0 \\), \\( e^{-0.2 \\times 0} = e^0 = 1 \\), so \\( C = 0 \\). This means there is no drug in the bloodstream at the moment of administration.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Interpret the result.',
                    workingLatex: 'C(0) = 0 \\text{ mg/L}',
                    explanation: 'The initial concentration is zero because the drug has not yet been absorbed into the bloodstream at \\( t = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Find the limiting value as \\( t \\to \\infty \\).',
                    workingLatex: '\\lim_{t \\to \\infty} C = 12(1 - e^{-\\infty}) = 12(1 - 0) = 12 \\text{ mg/L}',
                    explanation: 'As \\( t \\to \\infty \\), \\( e^{-0.2t} \\to 0 \\), so the concentration approaches \\( 12 \\) mg/L. This is the maximum concentration the drug can reach.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find 90% of the limiting concentration.',
                    workingLatex: '0.9 \\times 12 = 10.8 \\text{ mg/L}',
                    explanation: '90% of the limiting value of 12 is \\( 10.8 \\) mg/L.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Set \\( C = 10.8 \\) and solve.',
                    workingLatex: '10.8 = 12(1 - e^{-0.2t}) \\implies 1 - e^{-0.2t} = 0.9 \\implies e^{-0.2t} = 0.1',
                    explanation: 'Divide both sides by 12, then rearrange to isolate the exponential term.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Take logs and evaluate.',
                    workingLatex: '-0.2t = \\ln 0.1 = -\\ln 10 \\implies t = \\frac{\\ln 10}{0.2} = 5\\ln 10 \\approx 11.5 \\text{ hours}',
                    explanation: 'Take \\( \\ln \\) of both sides and divide by \\( -0.2 \\). The concentration reaches 90% of its limiting value after approximately \\( 11.5 \\) hours.'
                }
            ],
            finalAnswer: '(a) \\( C(0) = 0 \\) mg/L (no drug absorbed yet) \\quad (b) Limiting concentration \\( = 12 \\) mg/L \\quad (c) \\( t = 5\\ln 10 \\approx 11.5 \\) hours'
        }
    },
    {
        id: 'el5-006',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'An investment of \\( \\pounds P \\) is placed in an account that pays continuous compound interest at a rate of \\( r\\% \\) per annum. The value \\( V \\) of the investment after \\( t \\) years is modelled by \\( V = Pe^{kt} \\), where \\( k = \\frac{r}{100} \\).\n\nThe investment doubles in value in exactly 8 years.\n\n(a) Show that \\( r = \\frac{\\ln 2}{8} \\times 100 \\).\n\n(b) Find the value of \\( r \\) to 3 significant figures.\n\n(c) Find how long it takes for the investment to triple in value. Give your answer to 3 significant figures.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set \\( V = 2P \\) when \\( t = 8 \\) and substitute into the model.',
                    workingLatex: '2P = Pe^{8k}',
                    explanation: 'The investment doubles, so \\( V = 2P \\). Substitute \\( t = 8 \\) into \\( V = Pe^{kt} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( P \\) and take natural logarithms.',
                    workingLatex: 'e^{8k} = 2 \\Rightarrow 8k = \\ln 2 \\Rightarrow k = \\frac{\\ln 2}{8}',
                    explanation: 'Cancel \\( P \\) from both sides, then apply \\( \\ln \\) to isolate \\( k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Express \\( r \\) in terms of \\( k \\).',
                    workingLatex: 'r = 100k = \\frac{\\ln 2}{8} \\times 100',
                    explanation: 'Since \\( k = \\frac{r}{100} \\), we have \\( r = 100k = \\frac{\\ln 2}{8} \\times 100 \\) as required.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Evaluate \\( r \\) to 3 significant figures.',
                    workingLatex: 'r = \\frac{0.6931\\ldots}{8} \\times 100 = 8.6643\\ldots \\approx 8.66',
                    explanation: 'Use \\( \\ln 2 \\approx 0.6931 \\). Divide by 8 and multiply by 100 to get \\( r \\approx 8.66 \\).'
                },
                {
                    stepNumber: 5,
                    description: '(c) Set \\( V = 3P \\) and solve for \\( t \\).',
                    workingLatex: '3P = Pe^{kt} \\Rightarrow e^{kt} = 3 \\Rightarrow kt = \\ln 3',
                    explanation: 'For the investment to triple, set \\( V = 3P \\). Divide by \\( P \\) and take \\( \\ln \\) of both sides.'
                },
                {
                    stepNumber: 6,
                    description: 'Substitute \\( k = \\frac{\\ln 2}{8} \\) and solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 3}{k} = \\frac{\\ln 3}{\\frac{\\ln 2}{8}} = \\frac{8\\ln 3}{\\ln 2}',
                    explanation: 'Rearrange to make \\( t \\) the subject by dividing both sides by \\( k \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Evaluate to 3 significant figures.',
                    workingLatex: 't = \\frac{8 \\times 1.0986}{0.6931} = \\frac{8.7890}{0.6931} \\approx 12.7 \\text{ years}',
                    explanation: 'Calculate using \\( \\ln 3 \\approx 1.0986 \\) and \\( \\ln 2 \\approx 0.6931 \\). The investment triples after approximately 12.7 years.'
                }
            ],
            finalAnswer: '(a) Shown \\quad (b) \\( r \\approx 8.66 \\) \\quad (c) \\( t \\approx 12.7 \\) years'
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
                    description: 'Set \\( P = 500 \\) and isolate the exponential.',
                    workingLatex: '150e^{0.06t} = 500 \\Rightarrow e^{0.06t} = \\frac{500}{150} = \\frac{10}{3}',
                    explanation: 'Substitute \\( P = 500 \\) into the model. Divide both sides by 150 to isolate the exponential term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '0.06t = \\ln\\!\\left(\\frac{10}{3}\\right)',
                    explanation: 'Taking the natural logarithm of both sides removes the exponential, since \\( \\ln(e^{0.06t}) = 0.06t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 0.06 \\).',
                    workingLatex: 't = \\frac{\\ln(10/3)}{0.06}',
                    explanation: 'Isolate \\( t \\) by dividing both sides of the equation by \\( 0.06 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 't = \\frac{1.2040}{0.06} \\approx 20.1 \\text{ days}',
                    explanation: 'Use a calculator to find \\( \\ln(10/3) \\approx 1.2040 \\). Divide by \\( 0.06 \\) to get \\( t \\approx 20.1 \\) days to 3 significant figures.'
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
                    description: 'Set \\( M = 200 \\) and isolate the exponential.',
                    workingLatex: '800e^{-0.04t} = 200 \\Rightarrow e^{-0.04t} = \\frac{200}{800} = 0.25',
                    explanation: 'Substitute \\( M = 200 \\) into the model and divide both sides by 800 to isolate the exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.04t = \\ln(0.25) = -\\ln 4',
                    explanation: 'Taking \\( \\ln \\) of both sides gives \\( -0.04t = \\ln(0.25) \\). Since \\( 0.25 = \\frac{1}{4} \\), this equals \\( -\\ln 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( -0.04 \\).',
                    workingLatex: 't = \\frac{\\ln 4}{0.04}',
                    explanation: 'The negatives on both sides cancel, leaving \\( t = \\frac{\\ln 4}{0.04} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 't = \\frac{1.3863}{0.04} \\approx 34.7 \\text{ years}',
                    explanation: 'Use a calculator to find \\( \\ln 4 \\approx 1.3863 \\). Divide by \\( 0.04 \\) to get \\( t \\approx 34.7 \\) years.'
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
                    explanation: 'We need \\( A > 1500 \\). Substitute into the model and divide both sides by 1000 to isolate the exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log(1.025) > \\log(1.5)',
                    explanation: 'Apply logarithms to both sides. The power rule gives \\( \\log(1.025^t) = t\\log(1.025) \\). Since \\( \\log(1.025) > 0 \\), the inequality direction is preserved.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't > \\frac{\\log(1.5)}{\\log(1.025)} \\approx \\frac{0.17609}{0.01072} \\approx 16.4',
                    explanation: 'Divide both sides by \\( \\log(1.025) \\). Use a calculator to evaluate the fraction.'
                },
                {
                    stepNumber: 4,
                    description: 'State the number of complete years.',
                    workingLatex: 't = 17 \\text{ complete years}',
                    explanation: 'Since \\( t \\) must be a whole number of years and \\( t > 16.4 \\), the first complete year is \\( t = 17 \\).'
                }
            ],
            finalAnswer: '\\( 17 \\) complete years'
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
                    explanation: 'We need \\( V < 5000 \\). Substitute into the model and divide both sides by 12000 to isolate the exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\log \\) of both sides. Note: \\( \\log(0.88) < 0 \\), so the inequality reverses.',
                    workingLatex: 't\\log(0.88) < \\log\\!\\left(\\frac{5}{12}\\right) \\Rightarrow t > \\frac{\\log(5/12)}{\\log(0.88)}',
                    explanation: 'Apply \\( \\log \\) to both sides, giving \\( t\\log(0.88) < \\log(5/12) \\). Since \\( \\log(0.88) < 0 \\), dividing by it reverses the inequality.'
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
            finalAnswer: '\\( 7 \\) complete years'
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
                    description: 'Set \\( C = 1 \\) and isolate the exponential.',
                    workingLatex: '8e^{-0.35t} = 1 \\Rightarrow e^{-0.35t} = \\frac{1}{8}',
                    explanation: 'Substitute \\( C = 1 \\) into the model and divide both sides by 8 to isolate the exponential term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.35t = \\ln\\!\\left(\\frac{1}{8}\\right) = -\\ln 8',
                    explanation: 'Taking \\( \\ln \\) of both sides gives \\( -0.35t = \\ln(1/8) \\). Using the log law \\( \\ln(1/a) = -\\ln a \\), this equals \\( -\\ln 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( -0.35 \\).',
                    workingLatex: 't = \\frac{\\ln 8}{0.35}',
                    explanation: 'The negatives on both sides cancel, leaving \\( t = \\frac{\\ln 8}{0.35} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 't = \\frac{2.0794}{0.35} \\approx 5.94 \\text{ hours}',
                    explanation: 'Use a calculator to find \\( \\ln 8 \\approx 2.0794 \\). Divide by \\( 0.35 \\) to get \\( t \\approx 5.94 \\) hours.'
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
                    workingLatex: '180e^{-0.08t} + 20 = 60 \\Rightarrow 180e^{-0.08t} = 40 \\Rightarrow e^{-0.08t} = \\frac{2}{9}',
                    explanation: 'Substitute \\( T = 60 \\). Subtract 20 from both sides to get \\( 180e^{-0.08t} = 40 \\), then divide by 180 to isolate the exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '-0.08t = \\ln\\!\\left(\\frac{2}{9}\\right)',
                    explanation: 'Taking \\( \\ln \\) of both sides removes the exponential, since \\( \\ln(e^{-0.08t}) = -0.08t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( -0.08 \\).',
                    workingLatex: 't = \\frac{-\\ln(2/9)}{0.08} = \\frac{\\ln(9/2)}{0.08}',
                    explanation: 'Dividing by \\( -0.08 \\) gives a positive result. Note \\( -\\ln(2/9) = \\ln(9/2) \\) by the log reciprocal rule.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate to 3 s.f.',
                    workingLatex: 't = \\frac{1.5041}{0.08} \\approx 18.8 \\text{ min}',
                    explanation: 'Use a calculator to find \\( \\ln(9/2) \\approx 1.5041 \\). Divide by \\( 0.08 \\) to get \\( t \\approx 18.8 \\) minutes.'
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
                    explanation: 'We need \\( V > 1\\,000\\,000 \\). Substitute into the model and divide both sides by 500 to isolate the exponential.'
                },
                {
                    stepNumber: 2,
                    description: 'Take \\( \\log \\) of both sides.',
                    workingLatex: 't\\log 3 > \\log 2000',
                    explanation: 'Apply logarithms to both sides. The power rule gives \\( \\log(3^t) = t\\log 3 \\). Since \\( \\log 3 > 0 \\), the inequality direction is preserved.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't > \\frac{\\log 2000}{\\log 3} \\approx \\frac{3.3010}{0.4771} \\approx 6.92',
                    explanation: 'Divide both sides by \\( \\log 3 \\). Use a calculator to evaluate the fraction.'
                },
                {
                    stepNumber: 4,
                    description: 'State the number of complete days.',
                    workingLatex: 't = 7 \\text{ complete days}',
                    explanation: 'Since \\( t \\) must be a whole number of days and \\( t > 6.92 \\), the first complete day is \\( t = 7 \\).'
                }
            ],
            finalAnswer: '\\( 7 \\) complete days'
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
                    explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so \\( P = A \\). Since the initial population is 80, we have \\( A = 80 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 5, P = 200 \\).',
                    workingLatex: '80e^{5k} = 200 \\Rightarrow e^{5k} = \\frac{200}{80} = 2.5',
                    explanation: 'With \\( A = 80 \\), substitute the second data point. Divide both sides by 80 to isolate the exponential.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) to both sides.',
                    workingLatex: '5k = \\ln(2.5)',
                    explanation: 'Taking \\( \\ln \\) of both sides removes the exponential, giving \\( 5k = \\ln(2.5) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 5 and evaluate.',
                    workingLatex: 'k = \\frac{\\ln(2.5)}{5} \\approx \\frac{0.9163}{5} \\approx 0.183',
                    explanation: 'Use a calculator to find \\( \\ln(2.5) \\approx 0.9163 \\). Divide by 5 to get \\( k \\approx 0.183 \\) to 3 significant figures.'
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
                    workingLatex: 'M = Ae^{k \\times 0} = Ae^0 = A',
                    explanation: 'When \\( t = 0 \\), the exponential term \\( e^{k \\times 0} = e^0 = 1 \\), so \\( M = A \\). Since the initial mass is 600 g, we have \\( A = 600 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 10, M = 350 \\).',
                    workingLatex: '600e^{10k} = 350',
                    explanation: 'Substitute the second data point into the model \\( M = 600e^{kt} \\) to form an equation in \\( k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Isolate the exponential term.',
                    workingLatex: 'e^{10k} = \\frac{350}{600} = \\frac{7}{12}',
                    explanation: 'Divide both sides by 600 to isolate \\( e^{10k} \\). The fraction \\( \\frac{7}{12} \\) is less than 1, which is consistent with decay.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve for \\( k \\).',
                    workingLatex: '10k = \\ln\\!\\left(\\frac{7}{12}\\right) \\Rightarrow k = \\frac{\\ln(7/12)}{10} \\approx \\frac{-0.5390}{10} \\approx -0.0539',
                    explanation: 'Taking the natural logarithm of both sides gives \\( 10k = \\ln(7/12) \\). Dividing by 10 yields \\( k \\approx -0.0539 \\). The negative value confirms exponential decay.'
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
                    description: '(a) At \\( t = 0 \\): find \\( F_0 \\).',
                    workingLatex: 'F = F_0 e^{g \\times 0} = F_0 e^0 = F_0',
                    explanation: 'When \\( t = 0 \\), the exponential term equals 1, so \\( F = F_0 \\). The initial area is 3 mm², giving \\( F_0 = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( t = 8, F = 18 \\).',
                    workingLatex: '3e^{8g} = 18 \\Rightarrow e^{8g} = 6',
                    explanation: 'Substitute the second data point and divide both sides by 3 to isolate the exponential term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) and solve for \\( g \\).',
                    workingLatex: '8g = \\ln 6 \\Rightarrow g = \\frac{\\ln 6}{8} \\approx \\frac{1.7918}{8} \\approx 0.224',
                    explanation: 'Take the natural logarithm of both sides to get \\( 8g = \\ln 6 \\), then divide by 8. The positive value of \\( g \\) confirms growth.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( t = 15 \\).',
                    workingLatex: 'F = 3e^{0.224 \\times 15} = 3e^{3.36} \\approx 3 \\times 28.79 \\approx 86.4 \\text{ mm}^2',
                    explanation: 'Use the values \\( F_0 = 3 \\) and \\( g \\approx 0.224 \\) found in part (a). Evaluate \\( e^{3.36} \\approx 28.79 \\), then multiply by 3 to get approximately 86.4 mm².'
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
                    explanation: 'Substitute \\( t = 2, N = 5000 \\) and \\( t = 6, N = 25000 \\) into \\( N = N_0 e^{kt} \\) to obtain two simultaneous equations.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide the second equation by the first to eliminate \\( N_0 \\).',
                    workingLatex: '\\frac{N_0 e^{6k}}{N_0 e^{2k}} = \\frac{25000}{5000} \\Rightarrow e^{4k} = 5',
                    explanation: '\\( N_0 \\) cancels and by the index law \\( e^{6k} \\div e^{2k} = e^{4k} \\). The right-hand side simplifies to \\( 25000 \\div 5000 = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '4k = \\ln 5 \\Rightarrow k = \\frac{\\ln 5}{4} \\approx \\frac{1.6094}{4} \\approx 0.402',
                    explanation: 'Take the natural logarithm of both sides to get \\( 4k = \\ln 5 \\). Divide by 4 and evaluate with a calculator to find \\( k \\approx 0.402 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute back to find \\( N_0 \\).',
                    workingLatex: 'N_0 = \\frac{5000}{e^{2 \\times 0.402}} = \\frac{5000}{e^{0.804}} \\approx \\frac{5000}{2.234} \\approx 2240',
                    explanation: 'Rearrange the first equation \\( N_0 e^{2k} = 5000 \\) to give \\( N_0 = 5000 \\div e^{0.804} \\). Evaluate \\( e^{0.804} \\approx 2.234 \\) and divide to get \\( N_0 \\approx 2240 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify using the second equation.',
                    workingLatex: 'N_0 e^{6k} = 2240 \\times e^{2.412} \\approx 2240 \\times 11.16 \\approx 25\\,000 \\; \\checkmark',
                    explanation: 'Substituting \\( N_0 \\approx 2240 \\) and \\( k \\approx 0.402 \\) into the second equation confirms the answer, since it gives approximately 25 000 as required.'
                }
            ],
            finalAnswer: '\\( N_0 \\approx 2240 \\), \\( k \\approx 0.402 \\) (to 3 s.f.)'
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
                    explanation: 'The half-life of 15 years means the substance halves in that time. Substitute \\( t = 15 \\) and \\( A = \\frac{1}{2}A_0 \\) into the model, then divide both sides by \\( A_0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply \\( \\ln \\).',
                    workingLatex: '15k = \\ln\\!\\left(\\frac{1}{2}\\right) = -\\ln 2 \\Rightarrow k = -\\frac{\\ln 2}{15}',
                    explanation: 'Take \\( \\ln \\) of both sides. Use the log law \\( \\ln(\\frac{1}{2}) = -\\ln 2 \\) to get \\( 15k = -\\ln 2 \\), then divide by 15 to complete the proof.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Evaluate numerically.',
                    workingLatex: 'k = -\\frac{\\ln 2}{15} \\approx -\\frac{0.6931}{15} \\approx -0.0462',
                    explanation: 'Use a calculator to find \\( \\ln 2 \\approx 0.6931 \\), then divide by 15. The negative value confirms this models decay, as expected for a radioactive substance.'
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
                    explanation: 'Half-life of 20 years means activity halves from 640 to 320 when \\( t = 20 \\). Divide both sides by 640, take \\( \\ln \\), and use \\( \\ln(0.5) = -\\ln 2 \\) to find \\( k \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 30 \\) into the model.',
                    workingLatex: 'A = 640e^{-0.0347 \\times 30} = 640e^{-1.041} \\approx 640 \\times 0.3536 \\approx 226 \\text{ Bq}',
                    explanation: 'Substitute \\( t = 30 \\) and evaluate \\( e^{-1.041} \\approx 0.3536 \\) using a calculator. Multiply by 640 to get approximately 226 Bq.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( A = 50 \\) and solve.',
                    workingLatex: '640e^{-0.0347t} = 50 \\Rightarrow e^{-0.0347t} = \\frac{50}{640} \\approx 0.07813',
                    explanation: 'Set the activity equal to 50 Bq and divide both sides by 640 to isolate the exponential. The small value indicates significant decay.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: 't = \\frac{\\ln(50/640)}{-0.0347} = \\frac{-2.5507}{-0.0347} \\approx 73.5 \\text{ years}',
                    explanation: 'Take \\( \\ln \\) of both sides and divide by \\( -0.0347 \\). Both numerator and denominator are negative, so \\( t \\) is positive. The activity falls below 50 Bq after approximately 73.5 years.'
                }
            ],
            finalAnswer: '(a) \\( k \\approx -0.0347 \\) \\quad (b) \\approx 226 \\text{ Bq} \\quad (c) \\approx 73.5 \\text{ years}'
        }
    },
    {
        id: 'el5-020',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'The mass \\( m_A \\) grams of radioactive substance A remaining after \\( t \\) hours is modelled by \\( m_A = 100e^{-0.1t} \\). A second substance B has mass \\( m_B \\) grams that grows according to \\( m_B = 20e^{0.05t} \\).\n\n(a) Sketch both curves on the same axes for \\( t \\geq 0 \\), labelling the intercepts with the vertical axis.\n\n(b) Find the time \\( t \\) at which \\( m_A = m_B \\). Give your answer to 3 significant figures.\n\n(c) Find the rate of change of \\( m_A - m_B \\) at \\( t = 0 \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the vertical-axis intercepts by substituting \\( t = 0 \\).',
                    workingLatex: 'm_A(0) = 100e^0 = 100, \\quad m_B(0) = 20e^0 = 20',
                    explanation: 'When \\( t = 0 \\), substance A starts at 100 g (decaying curve) and substance B starts at 20 g (growing curve). Sketch A as a decreasing exponential from 100 and B as an increasing exponential from 20.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( m_A = m_B \\) and isolate the exponential.',
                    workingLatex: '100e^{-0.1t} = 20e^{0.05t}',
                    explanation: 'Equate the two mass expressions to find the time at which both substances have equal mass.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 20e^{-0.1t} \\).',
                    workingLatex: '\\frac{100}{20} = \\frac{e^{0.05t}}{e^{-0.1t}} \\Rightarrow 5 = e^{0.05t + 0.1t} = e^{0.15t}',
                    explanation: 'Divide both sides by \\( 20e^{-0.1t} \\). Using index laws, \\( e^{0.05t} \\div e^{-0.1t} = e^{0.15t} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take natural logarithms and solve for \\( t \\).',
                    workingLatex: '0.15t = \\ln 5 \\Rightarrow t = \\frac{\\ln 5}{0.15} = \\frac{1.6094}{0.15} \\approx 10.7 \\text{ hours}',
                    explanation: 'Apply \\( \\ln \\) to both sides, then divide by 0.15. The masses are equal after approximately 10.7 hours.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Differentiate \\( m_A - m_B \\) with respect to \\( t \\).',
                    workingLatex: '\\frac{d}{dt}(m_A - m_B) = \\frac{d}{dt}(100e^{-0.1t} - 20e^{0.05t}) = -10e^{-0.1t} - e^{0.05t}',
                    explanation: 'Differentiate each term separately. The derivative of \\( 100e^{-0.1t} \\) is \\( -10e^{-0.1t} \\) and the derivative of \\( -20e^{0.05t} \\) is \\( -e^{0.05t} \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Substitute \\( t = 0 \\).',
                    workingLatex: '\\frac{d}{dt}(m_A - m_B)\\bigg|_{t=0} = -10e^0 - e^0 = -10 - 1 = -11',
                    explanation: 'When \\( t = 0 \\), both exponential terms equal 1. The rate of change of the difference is \\( -11 \\) g per hour, meaning the gap is closing at 11 g/hour.'
                }
            ],
            finalAnswer: '(a) Sketch shown with intercepts 100 and 20 \\quad (b) \\( t \\approx 10.7 \\) hours \\quad (c) \\( -11 \\) g/hour'
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
                    explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so \\( T = 22 - 16(1) = 6 \\). The initial temperature of the room is 6°C.'
                },
                {
                    stepNumber: 2,
                    description: '(b) As \\( t \\to \\infty \\), \\( e^{-0.05t} \\to 0 \\).',
                    workingLatex: 'T \\to 22 - 16(0) = 22\\,^\\circ\\!\\text{C}',
                    explanation: 'The temperature approaches 22°C but never quite reaches it. As time increases, the exponential term decays towards zero.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Note \\( e^{-0.05t} > 0 \\) for all finite \\( t \\).',
                    workingLatex: 'T = 22 - 16e^{-0.05t} < 22',
                    explanation: 'Since \\( e^{-0.05t} \\) is always positive, the term \\( 16e^{-0.05t} \\) is always positive, so \\( T \\) is always less than 22.'
                },
                {
                    stepNumber: 4,
                    description: 'State the upper limit.',
                    workingLatex: '\\text{Upper limit} = 22\\,^\\circ\\!\\text{C}',
                    explanation: 'The upper limit is 22°C. The model prevents the temperature from ever reaching or exceeding this value, which represents the thermostat setting.'
                }
            ],
            finalAnswer: '(a) \\( 6\\,^\\circ\\!\\text{C} \\) \\quad (b) \\( T \\to 22\\,^\\circ\\!\\text{C} \\) \\quad (c) Upper limit is \\( 22\\,^\\circ\\!\\text{C} \\)'
        }
    },
    {
        id: 'el5-022',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'A lake contains \\( P \\) fish at time \\( t \\) years. The population is modelled by\n\\[ P = \\frac{800}{1 + 3e^{-0.2t}} \\]\n\n(a) Find the number of fish in the lake at \\( t = 0 \\).\n\n(b) Find the limiting population as \\( t \\to \\infty \\).\n\n(c) Find the value of \\( t \\) when \\( P = 600 \\). Give your answer to 3 significant figures.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\) into the model.',
                    workingLatex: 'P = \\frac{800}{1 + 3e^{0}} = \\frac{800}{1 + 3} = \\frac{800}{4} = 200',
                    explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so the denominator is \\( 1 + 3 = 4 \\). The initial population is 200 fish.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Consider the behaviour as \\( t \\to \\infty \\).',
                    workingLatex: '\\text{As } t \\to \\infty, \\; e^{-0.2t} \\to 0, \\; \\text{so } P \\to \\frac{800}{1 + 0} = 800',
                    explanation: 'As \\( t \\) becomes very large, \\( e^{-0.2t} \\to 0 \\), so the denominator approaches 1. The limiting population is 800 fish.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( P = 600 \\) and rearrange.',
                    workingLatex: '600 = \\frac{800}{1 + 3e^{-0.2t}} \\Rightarrow 1 + 3e^{-0.2t} = \\frac{800}{600} = \\frac{4}{3}',
                    explanation: 'Substitute \\( P = 600 \\) and multiply both sides by the denominator, then divide both sides by 600.'
                },
                {
                    stepNumber: 4,
                    description: 'Isolate the exponential term.',
                    workingLatex: '3e^{-0.2t} = \\frac{4}{3} - 1 = \\frac{1}{3} \\Rightarrow e^{-0.2t} = \\frac{1}{9}',
                    explanation: 'Subtract 1 from both sides, then divide by 3 to isolate \\( e^{-0.2t} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take natural logarithms and solve for \\( t \\).',
                    workingLatex: '-0.2t = \\ln\\!\\left(\\frac{1}{9}\\right) = -\\ln 9 \\Rightarrow t = \\frac{\\ln 9}{0.2}',
                    explanation: 'Apply \\( \\ln \\) to both sides. Since \\( \\ln(1/9) = -\\ln 9 \\), divide both sides by \\( -0.2 \\) to get \\( t \\) positive.'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate to 3 significant figures.',
                    workingLatex: 't = \\frac{\\ln 9}{0.2} = \\frac{2.1972}{0.2} \\approx 11.0 \\text{ years}',
                    explanation: 'Calculate \\( \\ln 9 \\approx 2.1972 \\). Divide by 0.2 to get \\( t \\approx 11.0 \\) years.'
                }
            ],
            finalAnswer: '(a) 200 fish \\quad (b) 800 fish \\quad (c) \\( t \\approx 11.0 \\) years'
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
                    explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so \\( V = 2000 + 11000 = 13000 \\). The car was purchased for £13 000.'
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
                    explanation: 'Subtract 2000 from both sides to get \\( 11000e^{-0.2t} = 2000 \\), then divide by 11000 to isolate the exponential term.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '-0.2t = \\ln\\!\\left(\\frac{2}{11}\\right) \\Rightarrow t = \\frac{-\\ln(2/11)}{0.2} = \\frac{\\ln(11/2)}{0.2} \\approx \\frac{1.7047}{0.2} \\approx 8.52',
                    explanation: 'Take \\( \\ln \\) of both sides and divide by \\( -0.2 \\). Use \\( -\\ln(2/11) = \\ln(11/2) \\approx 1.7047 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the answer.',
                    workingLatex: 't \\approx 8.52 \\Rightarrow \\text{9 complete years}',
                    explanation: 'Since \\( t \\approx 8.52 \\), the car is still worth more than £4000 at \\( t = 8 \\). It first drops below £4000 during year 9, so the answer is after 9 complete years.'
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
                    explanation: 'The value 10 is the initial area of the fire when first observed. When \\( t = 0 \\), \\( e^0 = 1 \\), so \\( H = 10 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 2, H = 40 \\).',
                    workingLatex: '10e^{2b} = 40 \\Rightarrow e^{2b} = 4',
                    explanation: 'Substitute the data point and divide both sides by 10 to isolate the exponential term.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply \\( \\ln \\) and solve for \\( b \\).',
                    workingLatex: '2b = \\ln 4 \\Rightarrow b = \\frac{\\ln 4}{2} \\approx \\frac{1.3863}{2} \\approx 0.693',
                    explanation: 'Take the natural logarithm of both sides to get \\( 2b = \\ln 4 \\), then divide by 2. The positive value of \\( b \\) confirms the fire is spreading.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Substitute \\( t = 5 \\) into the model.',
                    workingLatex: 'H = 10e^{0.693 \\times 5} = 10e^{3.466}',
                    explanation: 'Use the values found in parts (a) and (b). The exponent is \\( 0.693 \\times 5 = 3.466 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the area.',
                    workingLatex: 'H = 10 \\times 32.0 \\approx 320 \\text{ hectares}',
                    explanation: 'Use a calculator to find \\( e^{3.466} \\approx 32.0 \\). Multiply by 10 to get approximately 320 hectares.'
                }
            ],
            finalAnswer: '(a) 10 hectares is the initial area \\quad (b) \\( b \\approx 0.693 \\) \\quad (c) \\( \\approx 320 \\) hectares'
        }
    },
    {
        id: 'el5-025',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'Carbon-14 decays exponentially with a half-life of 5730 years. A fossil is found to contain 15% of its original Carbon-14.\n\nEstimate the age of the fossil. Give your answer to 3 significant figures.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the exponential decay model.',
                    workingLatex: 'N = N_0 e^{-kt}',
                    explanation: 'Let \\( N_0 \\) be the original amount of Carbon-14 and \\( N \\) be the amount remaining after \\( t \\) years.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the half-life to find \\( k \\).',
                    workingLatex: '\\frac{N_0}{2} = N_0 e^{-5730k} \\Rightarrow e^{-5730k} = \\frac{1}{2} \\Rightarrow -5730k = \\ln\\!\\left(\\frac{1}{2}\\right) = -\\ln 2',
                    explanation: 'After one half-life (5730 years), half the original amount remains. Take \\( \\ln \\) of both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( k \\).',
                    workingLatex: 'k = \\frac{\\ln 2}{5730} \\approx 1.2097 \\times 10^{-4}',
                    explanation: 'Divide both sides by \\( -5730 \\) to obtain the decay constant.'
                },
                {
                    stepNumber: 4,
                    description: 'Set \\( N = 0.15N_0 \\) (15% remaining) and solve for \\( t \\).',
                    workingLatex: '0.15N_0 = N_0 e^{-kt} \\Rightarrow e^{-kt} = 0.15',
                    explanation: 'The fossil has 15% of its original Carbon-14, so \\( N = 0.15N_0 \\). Divide both sides by \\( N_0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take natural logarithms.',
                    workingLatex: '-kt = \\ln(0.15) \\Rightarrow t = \\frac{-\\ln(0.15)}{k} = \\frac{\\ln(0.15)}{-k}',
                    explanation: 'Apply \\( \\ln \\) to both sides, then divide by \\( -k \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Substitute \\( k = \\frac{\\ln 2}{5730} \\) and evaluate.',
                    workingLatex: 't = \\frac{-\\ln(0.15)}{\\frac{\\ln 2}{5730}} = \\frac{5730 \\times (-\\ln 0.15)}{\\ln 2} = \\frac{5730 \\times 1.8971}{0.6931} \\approx 15\\,700 \\text{ years}',
                    explanation: 'Calculate \\( -\\ln(0.15) \\approx 1.8971 \\). Multiply by 5730 and divide by \\( \\ln 2 \\approx 0.6931 \\). The fossil is approximately 15 700 years old.'
                }
            ],
            finalAnswer: 'The fossil is approximately \\( 15\\,700 \\) years old.'
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
                    explanation: '\\( B_1 \\) has the larger initial population. Substitute \\( t = 0 \\) into each model: \\( B_1(0) = 400 \\) and \\( B_2(0) = 100 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( B_1 = B_2 \\).',
                    workingLatex: '400e^{0.03t} = 100e^{0.08t}',
                    explanation: 'To find when the populations are equal, set the two model expressions equal to each other and solve for \\( t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 100e^{0.03t} \\).',
                    workingLatex: '4 = e^{0.05t}',
                    explanation: '\\( 400 \\div 100 = 4 \\) on the left, and by the index law \\( e^{0.08t} \\div e^{0.03t} = e^{(0.08-0.03)t} = e^{0.05t} \\) on the right.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '0.05t = \\ln 4 \\Rightarrow t = \\frac{\\ln 4}{0.05} \\approx \\frac{1.3863}{0.05} \\approx 27.7 \\text{ hours}',
                    explanation: 'Take \\( \\ln \\) of both sides to get \\( 0.05t = \\ln 4 \\), then divide by 0.05. The two populations are equal after approximately 27.7 hours.'
                }
            ],
            finalAnswer: '(a) \\( B_1 \\) is larger initially (400 vs 100) \\quad (b) \\( t \\approx 27.7 \\) hours'
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
                    explanation: 'Substitute \\( t = 0 \\) into each model. Car A starts at £20 000 and Car B at £15 000, so Car A costs more initially.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( V_A = V_B \\).',
                    workingLatex: '20000e^{-0.1t} = 15000e^{-0.06t}',
                    explanation: 'Set the two depreciation models equal to each other and solve for \\( t \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by \\( 15000e^{-0.1t} \\).',
                    workingLatex: '\\frac{20000}{15000} = e^{(-0.06+0.1)t} \\Rightarrow \\frac{4}{3} = e^{0.04t}',
                    explanation: '\\( 20000 \\div 15000 = \\frac{4}{3} \\) on the left. On the right, \\( e^{-0.06t} \\div e^{-0.1t} = e^{(-0.06+0.1)t} = e^{0.04t} \\) by index laws.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply \\( \\ln \\) and solve.',
                    workingLatex: '0.04t = \\ln\\!\\left(\\frac{4}{3}\\right) \\Rightarrow t = \\frac{\\ln(4/3)}{0.04} \\approx \\frac{0.2877}{0.04} \\approx 7.19 \\text{ years}',
                    explanation: 'Take \\( \\ln \\) of both sides to get \\( 0.04t = \\ln(4/3) \\approx 0.2877 \\). Divide by 0.04 to find \\( t \\approx 7.19 \\) years.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the result.',
                    workingLatex: 'V_B > V_A \\text{ for } t > 7.19',
                    explanation: 'After approximately 7.19 years, Car B is worth more than Car A. Car A depreciates faster (rate \\( 0.1 \\) vs \\( 0.06 \\)), so its value eventually drops below that of Car B.'
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
                    explanation: 'For \\( y = Ae^{kt} \\), the derivative is \\( kAe^{kt} \\). Here \\( k = 0.04 \\) and \\( A = 600 \\), giving a coefficient of \\( 0.04 \\times 600 = 24 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( t = 5 \\).',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}t}\\bigg|_{t=5} = 24e^{0.2} \\approx 24 \\times 1.2214 \\approx 29.3 \\text{ fish/year}',
                    explanation: 'Substitute \\( t = 5 \\). Calculate \\( e^{0.2} \\approx 1.2214 \\) and multiply by 24 to get approximately 29.3 fish per year.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Form the ratio \\( \\dfrac{\\mathrm{d}P/\\mathrm{d}t}{P} \\).',
                    workingLatex: '\\frac{\\mathrm{d}P/\\mathrm{d}t}{P} = \\frac{24e^{0.04t}}{600e^{0.04t}}',
                    explanation: 'To show proportionality, divide the rate of change by the population. If this ratio is constant (independent of \\( t \\)), the rate is proportional to \\( P \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel and simplify.',
                    workingLatex: '\\frac{24}{600} = 0.04 = k',
                    explanation: 'The \\( e^{0.04t} \\) factors cancel completely, leaving the constant \\( 0.04 \\). This equals \\( k \\), confirming \\( \\frac{\\mathrm{d}P}{\\mathrm{d}t} = kP \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the conclusion.',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 0.04P',
                    explanation: 'Since the ratio is the constant \\( 0.04 \\), we can write \\( \\frac{\\mathrm{d}P}{\\mathrm{d}t} = 0.04P \\), proving the rate of growth is directly proportional to the population. \\checkmark'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}P}{\\mathrm{d}t} = 24e^{0.04t} \\) \\quad (b) \\( \\approx 29.3 \\) fish/year'
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
        id: 'el5-036',
        topicRef: 'el5',
        topicTitle: 'Modelling Exponential Growth and Decay',
        difficulty: 'Standard',
        questionText: 'A rumour spreads through a school. The number \\( N \\) of people who have heard the rumour after \\( t \\) hours is modelled by\n\\[ N = \\frac{500}{1 + 24e^{-0.3t}} \\]\n\n(a) How many people knew the rumour initially?\n\n(b) Find the maximum number of people who will eventually hear the rumour.\n\n(c) Find the time at which 400 people have heard the rumour. Give your answer to 3 significant figures.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 0 \\) into the model.',
                    workingLatex: 'N = \\frac{500}{1 + 24e^{0}} = \\frac{500}{1 + 24} = \\frac{500}{25} = 20',
                    explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so the denominator is \\( 1 + 24 = 25 \\). Initially 20 people knew the rumour.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Consider the behaviour as \\( t \\to \\infty \\).',
                    workingLatex: '\\text{As } t \\to \\infty, \\; e^{-0.3t} \\to 0, \\; \\text{so } N \\to \\frac{500}{1 + 0} = 500',
                    explanation: 'As \\( t \\) becomes very large, \\( e^{-0.3t} \\to 0 \\). The denominator tends to 1, so \\( N \\to 500 \\). The maximum number who will hear the rumour is 500.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( N = 400 \\) and rearrange.',
                    workingLatex: '400 = \\frac{500}{1 + 24e^{-0.3t}} \\Rightarrow 1 + 24e^{-0.3t} = \\frac{500}{400} = \\frac{5}{4}',
                    explanation: 'Substitute \\( N = 400 \\). Cross-multiply to get \\( 400(1 + 24e^{-0.3t}) = 500 \\), then divide both sides by 400.'
                },
                {
                    stepNumber: 4,
                    description: 'Isolate the exponential term.',
                    workingLatex: '24e^{-0.3t} = \\frac{5}{4} - 1 = \\frac{1}{4} \\Rightarrow e^{-0.3t} = \\frac{1}{96}',
                    explanation: 'Subtract 1 from both sides, then divide by 24 to isolate \\( e^{-0.3t} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take natural logarithms.',
                    workingLatex: '-0.3t = \\ln\\!\\left(\\frac{1}{96}\\right) = -\\ln 96',
                    explanation: 'Apply \\( \\ln \\) to both sides. Use the property \\( \\ln(1/96) = -\\ln 96 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{\\ln 96}{0.3} = \\frac{4.5643}{0.3} \\approx 15.2 \\text{ hours}',
                    explanation: 'Divide both sides by \\( -0.3 \\). Calculate \\( \\ln 96 \\approx 4.5643 \\). The rumour reaches 400 people after approximately 15.2 hours.'
                }
            ],
            finalAnswer: '(a) 20 people \\quad (b) 500 people \\quad (c) \\( t \\approx 15.2 \\) hours'
        }
    },
    {
        id: 'el5-037', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'A lake is polluted. The concentration \\( C \\) mg/L of pollutant at time \\( t \\) days satisfies \\( C = 50e^{-0.02t} + 5 \\). (a) Find \\( C(0) \\). (b) Find the background (long-term) concentration. (c) Find when \\( C \\) first drops below 10 mg/L.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 0 \\) into the model', workingLatex: 'C(0) = 50e^{0} + 5 = 50 + 5 = 55', explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so the initial concentration is \\( 50(1) + 5 = 55 \\) mg/L.' },
            { stepNumber: 2, description: '(b) Consider the limit as \\( t \\to \\infty \\)', workingLatex: '\\lim_{t \\to \\infty} C = 50 \\times 0 + 5 = 5', explanation: 'As \\( t \\to \\infty \\), \\( e^{-0.02t} \\to 0 \\), so the concentration tends to \\( 5 \\) mg/L. This is the background concentration.' },
            { stepNumber: 3, description: '(c) Set \\( C = 10 \\) and isolate the exponential', workingLatex: '10 = 50e^{-0.02t} + 5 \\implies 5 = 50e^{-0.02t}', explanation: 'Subtract 5 from both sides to isolate the exponential term.' },
            { stepNumber: 4, description: 'Divide both sides by 50', workingLatex: 'e^{-0.02t} = \\frac{5}{50} = 0.1', explanation: 'Divide both sides by 50 to get \\( e^{-0.02t} = 0.1 \\).' },
            { stepNumber: 5, description: 'Take natural logarithms', workingLatex: '-0.02t = \\ln(0.1) = -\\ln 10', explanation: 'Apply \\( \\ln \\) to both sides. Note that \\( \\ln(0.1) = -\\ln 10 \\).' },
            { stepNumber: 6, description: 'Solve for \\( t \\)', workingLatex: 't = \\frac{\\ln 10}{0.02} = \\frac{2.3026}{0.02} = 115.1', explanation: 'Divide both sides by \\( -0.02 \\) to obtain \\( t = \\frac{\\ln 10}{0.02} \\approx 115.1 \\) days.' },
            { stepNumber: 7, description: 'State the conclusion', workingLatex: 't \\approx 115 \\text{ days}', explanation: 'The concentration first drops below 10 mg/L after approximately 115 days.' }
        ], finalAnswer: '(a) \\( 55 \\) mg/L \\quad (b) \\( 5 \\) mg/L \\quad (c) \\( t = \\frac{\\ln 10}{0.02} \\approx 115 \\) days' }
    },
    {
        id: 'el5-038', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'Two radioactive isotopes decay simultaneously. Isotope X has mass \\( m_X = 200e^{-0.1t} \\) grams, and isotope Y has mass \\( m_Y = 300e^{-0.05t} \\) grams, where \\( t \\) is time in hours. (a) Find when the mass of X is half its initial value. (b) Find when the masses of X and Y are equal. (c) Show that Y always has a larger mass than X for \\( t > 0 \\).',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Find the initial mass of X and set up the half-mass equation', workingLatex: '100 = 200e^{-0.1t}', explanation: 'The initial mass of X is \\( 200 \\) g. Half of this is \\( 100 \\) g. Set \\( m_X = 100 \\).' },
            { stepNumber: 2, description: 'Solve for \\( t \\)', workingLatex: 'e^{-0.1t} = 0.5 \\implies -0.1t = \\ln 0.5 = -\\ln 2 \\implies t = \\frac{\\ln 2}{0.1} = 10\\ln 2 \\approx 6.93', explanation: 'Divide by 200, take \\( \\ln \\) of both sides, then divide by \\( -0.1 \\). The half-life of X is \\( 10\\ln 2 \\approx 6.93 \\) hours.' },
            { stepNumber: 3, description: '(b) Set \\( m_X = m_Y \\) and simplify', workingLatex: '200e^{-0.1t} = 300e^{-0.05t}', explanation: 'For the masses to be equal, set the two expressions equal to each other.' },
            { stepNumber: 4, description: 'Divide both sides by \\( e^{-0.1t} \\)', workingLatex: '200 = 300e^{-0.05t + 0.1t} = 300e^{0.05t}', explanation: 'Dividing by \\( e^{-0.1t} \\) gives \\( 200 = 300e^{0.05t} \\).' },
            { stepNumber: 5, description: 'Isolate the exponential and solve', workingLatex: 'e^{0.05t} = \\frac{200}{300} = \\frac{2}{3} \\implies 0.05t = \\ln\\!\\left(\\frac{2}{3}\\right) \\implies t = \\frac{\\ln(2/3)}{0.05} = 20\\ln\\!\\left(\\frac{2}{3}\\right)', explanation: 'Divide by 300, take \\( \\ln \\), then divide by 0.05.' },
            { stepNumber: 6, description: 'Evaluate \\( t \\)', workingLatex: 't = 20\\ln\\!\\left(\\frac{2}{3}\\right) = 20 \\times (-0.4055) = -8.11', explanation: 'Since \\( \\ln(2/3) < 0 \\), we get \\( t < 0 \\). This means the masses were equal before \\( t = 0 \\); they are never equal for \\( t > 0 \\).' },
            { stepNumber: 7, description: '(c) Show \\( m_Y > m_X \\) for all \\( t > 0 \\)', workingLatex: '\\frac{m_Y}{m_X} = \\frac{300e^{-0.05t}}{200e^{-0.1t}} = \\frac{3}{2}e^{0.05t} > 1 \\text{ for all } t > 0', explanation: 'The ratio \\( \\frac{m_Y}{m_X} = \\frac{3}{2}e^{0.05t} \\). Since \\( e^{0.05t} > 1 \\) for \\( t > 0 \\) and \\( \\frac{3}{2} > 1 \\), the ratio is always greater than 1, so \\( m_Y > m_X \\) for all \\( t > 0 \\).' }
        ], finalAnswer: '(a) \\( t = 10\\ln 2 \\approx 6.93 \\) hours \\quad (b) Never equal for \\( t > 0 \\) \\quad (c) Shown: \\( \\frac{m_Y}{m_X} = \\frac{3}{2}e^{0.05t} > 1 \\)' }
    },
    {
        id: 'el5-039', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'A phone depreciates in value according to the model \\( V = 800e^{-kt} \\), where \\( V \\) is in pounds and \\( t \\) is in years. After 2 years, the phone is worth \\( \\pounds 320 \\). (a) Find the exact value of \\( k \\). (b) Find \\( V \\) after 5 years. (c) After how many years is the phone worth less than \\( \\pounds 50 \\)?',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 2 \\), \\( V = 320 \\)', workingLatex: '320 = 800e^{-2k} \\implies e^{-2k} = \\frac{320}{800} = 0.4', explanation: 'Substitute the known values and divide both sides by 800 to isolate the exponential.' },
            { stepNumber: 2, description: 'Take natural logarithms and solve for \\( k \\)', workingLatex: '-2k = \\ln(0.4) \\implies k = -\\frac{\\ln(0.4)}{2} = \\frac{\\ln(5/2)}{2}', explanation: 'Apply \\( \\ln \\) to both sides and divide by \\( -2 \\). Since \\( \\ln(0.4) = \\ln(2/5) = -\\ln(5/2) \\), we get \\( k = \\frac{\\ln(5/2)}{2} \\).' },
            { stepNumber: 3, description: 'Evaluate \\( k \\)', workingLatex: 'k = \\frac{\\ln 2.5}{2} = \\frac{0.9163}{2} = 0.4581', explanation: 'The exact value is \\( k = \\frac{1}{2}\\ln\\frac{5}{2} \\approx 0.458 \\).' },
            { stepNumber: 4, description: '(b) Substitute \\( t = 5 \\) into the model', workingLatex: 'V = 800e^{-5k} = 800e^{-5 \\times 0.4581} = 800e^{-2.2907}', explanation: 'Substitute \\( t = 5 \\) and the value of \\( k \\) found in part (a).' },
            { stepNumber: 5, description: 'Evaluate the value after 5 years', workingLatex: 'V = 800 \\times 0.1012 = 80.9 \\approx \\pounds 80.90', explanation: 'Using a calculator, \\( e^{-2.2907} \\approx 0.1012 \\), so the phone is worth approximately \\( \\pounds 80.90 \\) after 5 years.' },
            { stepNumber: 6, description: '(c) Set \\( V < 50 \\) and solve the inequality', workingLatex: '800e^{-kt} < 50 \\implies e^{-kt} < \\frac{50}{800} = \\frac{1}{16}', explanation: 'Divide both sides by 800 to isolate the exponential.' },
            { stepNumber: 7, description: 'Take logarithms and solve for \\( t \\)', workingLatex: '-kt < \\ln\\!\\left(\\frac{1}{16}\\right) = -\\ln 16 \\implies t > \\frac{\\ln 16}{k} = \\frac{\\ln 16}{\\frac{1}{2}\\ln\\frac{5}{2}} = \\frac{2\\ln 16}{\\ln 2.5} \\approx \\frac{5.545}{0.916} \\approx 6.05', explanation: 'Dividing by \\( -k \\) reverses the inequality. The phone is worth less than \\( \\pounds 50 \\) after approximately \\( 6.05 \\) years, i.e. after about 6 years and 1 month.' }
        ], finalAnswer: '(a) \\( k = \\frac{1}{2}\\ln\\frac{5}{2} \\approx 0.458 \\) \\quad (b) \\( \\pounds 80.90 \\) \\quad (c) After approximately \\( 6.05 \\) years' }
    },
    {
        id: 'el5-040', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'A tree grows according to the model \\( h = 20(1 - e^{-0.1t}) \\) metres, where \\( t \\) is the number of years after planting. (a) Find \\( h(0) \\) and interpret your answer. (b) Find the maximum height the tree can reach. (c) Find when \\( h = 15 \\) m. (d) Find the rate of growth when \\( t = 10 \\).',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 0 \\)', workingLatex: 'h(0) = 20(1 - e^{0}) = 20(1 - 1) = 0', explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so \\( h = 0 \\). This means the tree has zero height at the time of planting (it is planted as a seed or seedling at ground level).' },
            { stepNumber: 2, description: '(b) Find the limiting height as \\( t \\to \\infty \\)', workingLatex: '\\lim_{t \\to \\infty} h = 20(1 - 0) = 20 \\text{ m}', explanation: 'As \\( t \\to \\infty \\), \\( e^{-0.1t} \\to 0 \\), so the maximum height the tree can reach is \\( 20 \\) metres.' },
            { stepNumber: 3, description: '(c) Set \\( h = 15 \\) and isolate the exponential', workingLatex: '15 = 20(1 - e^{-0.1t}) \\implies \\frac{15}{20} = 1 - e^{-0.1t} \\implies e^{-0.1t} = 1 - 0.75 = 0.25', explanation: 'Divide by 20 and rearrange to isolate \\( e^{-0.1t} \\).' },
            { stepNumber: 4, description: 'Take logarithms and solve for \\( t \\)', workingLatex: '-0.1t = \\ln(0.25) = \\ln\\!\\left(\\frac{1}{4}\\right) = -\\ln 4 \\implies t = \\frac{\\ln 4}{0.1} = 10\\ln 4 \\approx 13.86', explanation: 'Apply \\( \\ln \\) to both sides and divide by \\( -0.1 \\). The tree reaches 15 m after approximately \\( 13.9 \\) years.' },
            { stepNumber: 5, description: '(d) Differentiate \\( h \\) with respect to \\( t \\)', workingLatex: '\\frac{dh}{dt} = 20 \\times 0.1 \\times e^{-0.1t} = 2e^{-0.1t}', explanation: 'Differentiate \\( h = 20(1 - e^{-0.1t}) \\) using the chain rule: the derivative of \\( -e^{-0.1t} \\) is \\( 0.1e^{-0.1t} \\).' },
            { stepNumber: 6, description: 'Substitute \\( t = 10 \\)', workingLatex: '\\frac{dh}{dt}\\bigg|_{t=10} = 2e^{-0.1 \\times 10} = 2e^{-1} = \\frac{2}{e}', explanation: 'Substitute \\( t = 10 \\) into the derivative.' },
            { stepNumber: 7, description: 'Evaluate the rate of growth', workingLatex: '\\frac{dh}{dt} = \\frac{2}{e} \\approx 0.736 \\text{ m/year}', explanation: 'The tree is growing at approximately \\( 0.736 \\) metres per year when \\( t = 10 \\).' }
        ], finalAnswer: '(a) \\( 0 \\) m (planted at ground level) \\quad (b) \\( 20 \\) m \\quad (c) \\( t = 10\\ln 4 \\approx 13.9 \\) years \\quad (d) \\( \\frac{2}{e} \\approx 0.736 \\) m/year' }
    },
    {
        id: 'el5-041', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'An investment grows at 3% compound interest per year. How long until it doubles?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up the doubling equation', workingLatex: '1.03^n = 2', explanation: 'At 3% compound interest per year, the investment is multiplied by \\( 1.03 \\) each year. We need \\( 1.03^n = 2 \\) for doubling.' },
            { stepNumber: 2, description: 'Take logarithms of both sides', workingLatex: 'n \\ln 1.03 = \\ln 2', explanation: 'Apply \\( \\ln \\) to both sides and use the power rule \\( \\ln(a^n) = n\\ln a \\).' },
            { stepNumber: 3, description: 'Solve for \\( n \\)', workingLatex: 'n = \\frac{\\ln 2}{\\ln 1.03} \\approx \\frac{0.6931}{0.02956} \\approx 23.4', explanation: 'Since \\( n \\) must be a whole number of complete years, we round up to \\( n = 24 \\).' },
            { stepNumber: 4, description: 'State the answer', workingLatex: 'n = 24 \\text{ years}', explanation: 'The investment first doubles after 24 complete years. We round up because after 23 years it has not yet fully doubled.' }
        ], finalAnswer: 'Approximately \\( 24 \\) years' }
    },
    {
        id: 'el5-042', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The temperature of a cooling body is \\( T = 15 + 70e^{-0.03t} \\). Find the initial temperature and the temperature after 30 minutes.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( t = 0 \\) for initial temp', workingLatex: 'T = 15 + 70e^{0} = 15 + 70 = 85^{\\circ}', explanation: 'When \\( t = 0 \\), \\( e^0 = 1 \\), so the initial temperature is \\( 15 + 70 = 85^{\\circ} \\).' },
            { stepNumber: 2, description: 'Substitute \\( t = 30 \\)', workingLatex: 'T = 15 + 70e^{-0.03 \\times 30} = 15 + 70e^{-0.9}', explanation: 'Replace \\( t \\) with 30 to find the temperature after 30 minutes.' },
            { stepNumber: 3, description: 'Evaluate the exponential', workingLatex: 'e^{-0.9} \\approx 0.4066', explanation: 'Using a calculator, \\( e^{-0.9} \\approx 0.4066 \\).' },
            { stepNumber: 4, description: 'Calculate the temperature', workingLatex: 'T = 15 + 70 \\times 0.4066 = 15 + 28.5 = 43.5^{\\circ}', explanation: 'The temperature after 30 minutes is approximately \\( 43.5^{\\circ} \\). The 15 represents the ambient temperature that the body cools towards.' }
        ], finalAnswer: 'Initial: \\( 85^{\\circ} \\); after 30 min: \\( 43.5^{\\circ} \\)' }
    },
    {
        id: 'el5-043', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'The temperature \\( T \\)°C of a metal bar is modelled by \\( T = T_s + (T_0 - T_s)e^{-kt} \\), where \\( T_s \\) is the surrounding temperature and \\( T_0 \\) is the initial temperature. A bar at 400°C is placed in a room at 25°C. After 10 minutes, \\( T = 250 \\)°C. (a) Find the exact value of \\( k \\). (b) Find when \\( T = 50 \\)°C. (c) Find the rate of cooling at \\( t = 10 \\).',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Write the model with the given values', workingLatex: 'T = 25 + (400 - 25)e^{-kt} = 25 + 375e^{-kt}', explanation: 'Substitute \\( T_s = 25 \\) and \\( T_0 = 400 \\) into the Newton cooling model.' },
            { stepNumber: 2, description: 'Substitute \\( t = 10 \\), \\( T = 250 \\) and isolate the exponential', workingLatex: '250 = 25 + 375e^{-10k} \\implies 225 = 375e^{-10k} \\implies e^{-10k} = \\frac{225}{375} = \\frac{3}{5}', explanation: 'Subtract 25 from both sides, then divide by 375 to isolate \\( e^{-10k} \\).' },
            { stepNumber: 3, description: 'Take natural logarithms and solve for \\( k \\)', workingLatex: '-10k = \\ln\\!\\left(\\frac{3}{5}\\right) \\implies k = -\\frac{1}{10}\\ln\\!\\left(\\frac{3}{5}\\right) = \\frac{1}{10}\\ln\\!\\left(\\frac{5}{3}\\right)', explanation: 'Apply \\( \\ln \\) to both sides and divide by \\( -10 \\). The exact value is \\( k = \\frac{1}{10}\\ln\\frac{5}{3} \\approx 0.0511 \\).' },
            { stepNumber: 4, description: '(b) Set \\( T = 50 \\) and isolate the exponential', workingLatex: '50 = 25 + 375e^{-kt} \\implies 25 = 375e^{-kt} \\implies e^{-kt} = \\frac{25}{375} = \\frac{1}{15}', explanation: 'Subtract 25, then divide by 375 to get \\( e^{-kt} = \\frac{1}{15} \\).' },
            { stepNumber: 5, description: 'Solve for \\( t \\)', workingLatex: '-kt = \\ln\\!\\left(\\frac{1}{15}\\right) = -\\ln 15 \\implies t = \\frac{\\ln 15}{k} = \\frac{\\ln 15}{\\frac{1}{10}\\ln\\frac{5}{3}} = \\frac{10\\ln 15}{\\ln\\frac{5}{3}}', explanation: 'Substitute the exact value of \\( k \\) and simplify.' },
            { stepNumber: 6, description: 'Evaluate \\( t \\)', workingLatex: 't = \\frac{10 \\times 2.708}{0.5108} = \\frac{27.08}{0.5108} \\approx 53.0 \\text{ minutes}', explanation: 'The bar cools to 50°C after approximately 53 minutes.' },
            { stepNumber: 7, description: '(c) Differentiate and evaluate at \\( t = 10 \\)', workingLatex: '\\frac{dT}{dt} = -375k \\cdot e^{-kt} \\implies \\frac{dT}{dt}\\bigg|_{t=10} = -375k \\cdot \\frac{3}{5} = -225k = -225 \\times \\frac{1}{10}\\ln\\!\\left(\\frac{5}{3}\\right) = -22.5\\ln\\!\\left(\\frac{5}{3}\\right) \\approx -11.5', explanation: 'Differentiate \\( T = 25 + 375e^{-kt} \\) to get \\( \\frac{dT}{dt} = -375ke^{-kt} \\). At \\( t = 10 \\), \\( e^{-10k} = \\frac{3}{5} \\) from part (a). The rate of cooling is approximately \\( -11.5 \\)°C per minute.' }
        ], finalAnswer: '(a) \\( k = \\frac{1}{10}\\ln\\frac{5}{3} \\approx 0.0511 \\) \\quad (b) \\( t = \\frac{10\\ln 15}{\\ln(5/3)} \\approx 53.0 \\) min \\quad (c) \\( -22.5\\ln\\frac{5}{3} \\approx -11.5 \\)°C/min' }
    },
    {
        id: 'el5-044', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A substance decays so that \\( m = m_0 e^{-kt} \\). After 8 hours, 75% remains. Find \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up the decay equation at \\( t = 8 \\).', workingLatex: '0.75m_0 = m_0 e^{-8k}', explanation: '75% remaining means \\( m = 0.75m_0 \\). Substitute \\( t = 8 \\) into the decay model.' },
            { stepNumber: 2, description: 'Cancel \\( m_0 \\) and simplify.', workingLatex: '0.75 = e^{-8k}', explanation: 'Divide both sides by \\( m_0 \\) to isolate the exponential term.' },
            { stepNumber: 3, description: 'Take the natural logarithm of both sides.', workingLatex: '-8k = \\ln 0.75', explanation: 'Applying \\( \\ln \\) to both sides converts the exponential equation into a linear one.' },
            { stepNumber: 4, description: 'Solve for \\( k \\).', workingLatex: 'k = \\frac{-\\ln 0.75}{8} = \\frac{0.2877}{8} = 0.0360', explanation: 'Divide by \\( -8 \\) and evaluate. Since \\( \\ln 0.75 \\) is negative, \\( k \\) comes out positive as expected for decay.' }
        ], finalAnswer: '\\( k = 0.0360 \\)' }
    },
    {
        id: 'el5-045', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The number of fish in a lake is modelled by \\( N = \\frac{2000}{1 + 9e^{-0.5t}} \\). Find: (a) N when t = 0; (b) N as t approaches infinity.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 0 \\) into the model.', workingLatex: 'N = \\frac{2000}{1 + 9e^{0}} = \\frac{2000}{1 + 9}', explanation: 'When \\( t = 0 \\), \\( e^{0} = 1 \\), so the denominator becomes \\( 1 + 9 = 10 \\).' },
            { stepNumber: 2, description: '(a) Evaluate the fraction.', workingLatex: 'N = \\frac{2000}{10} = 200', explanation: 'The initial fish population is 200.' },
            { stepNumber: 3, description: '(b) Consider the limit as \\( t \\to \\infty \\).', workingLatex: 'e^{-0.5t} \\to 0 \\implies N \\to \\frac{2000}{1 + 0} = 2000', explanation: 'As \\( t \\to \\infty \\), the exponential term \\( e^{-0.5t} \\to 0 \\), so the denominator approaches 1.' },
            { stepNumber: 4, description: '(b) State the carrying capacity.', workingLatex: 'N_{\\max} = 2000', explanation: 'The limiting value of 2000 represents the carrying capacity of the lake.' }
        ], finalAnswer: '(a) 200 \\quad (b) 2000' }
    },
    {
        id: 'el5-046', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Carbon-14 has a half-life of 5730 years. A sample has 40% of its original C-14. How old is it?',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the decay model using half-life.', workingLatex: 'm = m_0 e^{-kt}', explanation: 'Radioactive decay follows an exponential model. We need to find \\( k \\) from the half-life.' },
            { stepNumber: 2, description: 'Find \\( k \\) from the half-life.', workingLatex: '0.5 = e^{-5730k} \\implies k = \\frac{\\ln 2}{5730} = 0.000121', explanation: 'At the half-life, half the substance remains. Taking \\( \\ln \\) of both sides gives \\( k = \\frac{\\ln 2}{5730} \\).' },
            { stepNumber: 3, description: 'Set up equation with 40% remaining.', workingLatex: '0.4 = e^{-0.000121t}', explanation: '40% of the original C-14 remains, so \\( \\frac{m}{m_0} = 0.4 \\).' },
            { stepNumber: 4, description: 'Take \\( \\ln \\) of both sides.', workingLatex: '\\ln 0.4 = -0.000121t', explanation: 'Apply the natural logarithm to convert the exponential equation to a linear one.' },
            { stepNumber: 5, description: 'Solve for \\( t \\).', workingLatex: 't = \\frac{-\\ln 0.4}{0.000121} = \\frac{0.9163}{0.000121} = 7573 \\text{ years}', explanation: 'Divide both sides by \\( -0.000121 \\) to obtain the age of the sample.' }
        ], finalAnswer: 'Approximately 7573 years old' }
    },
    {
        id: 'el5-047', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A drug is eliminated from the body so that the amount \\( A \\) mg after \\( t \\) hours is \\( A = 400e^{-0.2t} \\). Find when less than 50 mg remains.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set \\( A = 50 \\) in the model.', workingLatex: '50 = 400e^{-0.2t}', explanation: 'We want the time when the amount drops to 50 mg, so substitute \\( A = 50 \\).' },
            { stepNumber: 2, description: 'Divide both sides by 400.', workingLatex: 'e^{-0.2t} = \\frac{50}{400} = 0.125', explanation: 'Isolate the exponential term by dividing both sides by the initial amount.' },
            { stepNumber: 3, description: 'Take \\( \\ln \\) of both sides.', workingLatex: '-0.2t = \\ln 0.125', explanation: 'Apply the natural logarithm to remove the exponential.' },
            { stepNumber: 4, description: 'Solve for \\( t \\).', workingLatex: 't = \\frac{-\\ln 0.125}{0.2} = \\frac{2.079}{0.2} = 10.4 \\text{ hours}', explanation: 'Divide by \\( -0.2 \\). Less than 50 mg remains after approximately 10.4 hours.' }
        ], finalAnswer: 'After \\( 10.4 \\) hours' }
    },
    {
        id: 'el5-048', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The value of a painting increases according to \\( V = 500e^{0.08t} \\). Find: (a) the value after 10 years; (b) when it reaches \\( \\pounds 2000 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 10 \\) into the model.', workingLatex: 'V = 500e^{0.08 \\times 10} = 500e^{0.8}', explanation: 'Replace \\( t \\) with 10 to find the value after 10 years.' },
            { stepNumber: 2, description: '(a) Evaluate the expression.', workingLatex: 'V = 500 \\times 2.226 = 1113', explanation: 'Use a calculator to find \\( e^{0.8} \\approx 2.226 \\). The painting is worth \\( \\pounds 1113 \\) after 10 years.' },
            { stepNumber: 3, description: '(b) Set \\( V = 2000 \\) and isolate the exponential.', workingLatex: '2000 = 500e^{0.08t} \\implies e^{0.08t} = 4', explanation: 'Divide both sides by 500 to isolate \\( e^{0.08t} \\).' },
            { stepNumber: 4, description: '(b) Take \\( \\ln \\) and solve for \\( t \\).', workingLatex: '0.08t = \\ln 4 \\implies t = \\frac{\\ln 4}{0.08} = \\frac{1.386}{0.08} = 17.3', explanation: 'Apply \\( \\ln \\) to both sides, then divide by 0.08. The painting reaches \\( \\pounds 2000 \\) after approximately 17.3 years.' }
        ], finalAnswer: '(a) \\( \\pounds 1113 \\) \\quad (b) \\( 17.3 \\) years' }
    },
    {
        id: 'el5-049', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A cup of tea cools from \\( 90^\\circ \\)C in a room at \\( 20^\\circ \\)C. After 5 minutes it is \\( 70^\\circ \\)C. Find \\( k \\) in \\( T = 20 + 70e^{-kt} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( T = 70 \\) and \\( t = 5 \\).', workingLatex: '70 = 20 + 70e^{-5k}', explanation: 'Use the known data point: after 5 minutes the temperature is \\( 70^{\\circ} \\)C.' },
            { stepNumber: 2, description: 'Isolate the exponential term.', workingLatex: '50 = 70e^{-5k} \\implies e^{-5k} = \\frac{5}{7}', explanation: 'Subtract 20 from both sides to get 50, then divide by 70 to isolate \\( e^{-5k} \\).' },
            { stepNumber: 3, description: 'Take \\( \\ln \\) of both sides.', workingLatex: '-5k = \\ln\\!\\left(\\frac{5}{7}\\right)', explanation: 'Apply the natural logarithm to convert the exponential into a linear equation in \\( k \\).' },
            { stepNumber: 4, description: 'Solve for \\( k \\).', workingLatex: 'k = \\frac{-\\ln(5/7)}{5} = \\frac{0.3365}{5} = 0.0673', explanation: 'Divide by \\( -5 \\). Since \\( \\ln(5/7) \\) is negative, \\( k \\) is positive, confirming cooling.' }
        ], finalAnswer: '\\( k = 0.0673 \\)' }
    },
    {
        id: 'el5-050', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The spread of a rumour is modelled by \\( N = 500(1 - e^{-0.1t}) \\) where \\( N \\) is the number who have heard it after \\( t \\) hours. Find: (a) N after 5 hours; (b) when 400 people have heard it.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 5 \\) into the model.', workingLatex: 'N = 500(1 - e^{-0.1 \\times 5}) = 500(1 - e^{-0.5})', explanation: 'Replace \\( t \\) with 5 to find the number who have heard after 5 hours.' },
            { stepNumber: 2, description: '(a) Evaluate the expression.', workingLatex: 'N = 500(1 - 0.6065) = 500 \\times 0.3935 = 197', explanation: 'Use a calculator to find \\( e^{-0.5} \\approx 0.6065 \\). After 5 hours, approximately 197 people have heard the rumour.' },
            { stepNumber: 3, description: '(b) Set \\( N = 400 \\) and isolate the exponential.', workingLatex: '400 = 500(1 - e^{-0.1t}) \\implies 1 - e^{-0.1t} = 0.8', explanation: 'Divide both sides by 500 to get 0.8, then rearrange.' },
            { stepNumber: 4, description: '(b) Rearrange for the exponential term.', workingLatex: 'e^{-0.1t} = 1 - 0.8 = 0.2', explanation: 'Subtract from 1 to isolate the exponential: \\( e^{-0.1t} = 0.2 \\).' },
            { stepNumber: 5, description: '(b) Take \\( \\ln \\) and solve for \\( t \\).', workingLatex: '-0.1t = \\ln 0.2 \\implies t = \\frac{-\\ln 0.2}{0.1} = \\frac{\\ln 5}{0.1} = 16.1', explanation: 'Apply \\( \\ln \\) and divide by \\( -0.1 \\). Note that \\( -\\ln 0.2 = \\ln 5 \\). It takes approximately 16.1 hours.' }
        ], finalAnswer: '(a) 197 people \\quad (b) \\( 16.1 \\) hours' }
    },
    {
        id: 'el5-051', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A machine loses 12% of its value each year. After how many years is it worth less than a quarter of its original value?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the depreciation model.', workingLatex: 'V = V_0 \\times 0.88^{n}', explanation: 'Losing 12% each year means retaining 88%, so the value after \\( n \\) years is \\( V_0 \\times 0.88^{n} \\).' },
            { stepNumber: 2, description: 'Set up the inequality for one quarter.', workingLatex: '0.88^{n} < 0.25', explanation: 'We need the value to be less than a quarter of its original, so \\( 0.88^{n} < 0.25 \\).' },
            { stepNumber: 3, description: 'Take logarithms of both sides.', workingLatex: 'n \\ln 0.88 < \\ln 0.25', explanation: 'Take \\( \\ln \\) of both sides. Since \\( \\ln 0.88 < 0 \\), dividing reverses the inequality.' },
            { stepNumber: 4, description: 'Solve for \\( n \\) and round up.', workingLatex: 'n > \\frac{\\ln 0.25}{\\ln 0.88} = \\frac{-1.386}{-0.1278} = 10.8', explanation: 'Since \\( n \\) must be a whole number of years and we need \\( n > 10.8 \\), round up to \\( n = 11 \\).' }
        ], finalAnswer: 'After 11 years' }
    },
    {
        id: 'el5-052', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'A medicine is absorbed into the bloodstream and eliminated at a rate proportional to the concentration present, so that \\( \\frac{dC}{dt} = -0.15C \\). Initially the concentration is \\( C = 200 \\) mg. (a) Write the solution in the form \\( C = C_0 e^{-kt} \\). (b) Find the half-life of the medicine. (c) A second dose of 200 mg is given at \\( t = 5 \\) hours. Write an expression for \\( C \\) when \\( t > 5 \\).',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Identify the parameters from the differential equation.', workingLatex: '\\frac{dC}{dt} = -0.15C \\implies k = 0.15, \\quad C_0 = 200', explanation: 'The differential equation \\( \\frac{dC}{dt} = -kC \\) has solution \\( C = C_0 e^{-kt} \\). Here \\( k = 0.15 \\) and \\( C_0 = 200 \\).' },
            { stepNumber: 2, description: '(a) Write the solution.', workingLatex: 'C = 200e^{-0.15t}', explanation: 'Substituting the values of \\( C_0 \\) and \\( k \\) into the general solution gives the particular solution.' },
            { stepNumber: 3, description: '(b) Set \\( C = 100 \\) (half the initial concentration) and solve.', workingLatex: '100 = 200e^{-0.15t} \\implies e^{-0.15t} = 0.5', explanation: 'The half-life is the time taken for the concentration to halve from 200 to 100 mg.' },
            { stepNumber: 4, description: '(b) Take natural logarithms and solve for \\( t \\).', workingLatex: '-0.15t = \\ln 0.5 \\implies t = \\frac{-\\ln 0.5}{0.15} = \\frac{\\ln 2}{0.15} = 4.62 \\text{ hours}', explanation: 'Apply \\( \\ln \\) to both sides and divide by \\( -0.15 \\). Note that \\( -\\ln 0.5 = \\ln 2 \\approx 0.6931 \\).' },
            { stepNumber: 5, description: '(c) Find the concentration just before the second dose at \\( t = 5 \\).', workingLatex: 'C(5) = 200e^{-0.15 \\times 5} = 200e^{-0.75} = 200 \\times 0.4724 = 94.5 \\text{ mg}', explanation: 'Substitute \\( t = 5 \\) into the solution to find the remaining concentration from the first dose.' },
            { stepNumber: 6, description: '(c) Add the second dose and write the new expression.', workingLatex: 'C = (94.5 + 200)e^{-0.15(t-5)} = 294.5\\,e^{-0.15(t-5)}, \\quad t > 5', explanation: 'At \\( t = 5 \\), the total concentration becomes \\( 94.5 + 200 = 294.5 \\) mg. For \\( t > 5 \\) the decay restarts from this new initial value with \\( (t - 5) \\) measuring time since the second dose.' },
            { stepNumber: 7, description: '(c) Alternatively, express in terms of the original exponentials.', workingLatex: 'C = 200e^{-0.15t} + 200e^{-0.15(t-5)}, \\quad t > 5', explanation: 'This equivalent form shows the contribution from each dose separately: the first dose decays from \\( t = 0 \\) and the second from \\( t = 5 \\).' }
        ], finalAnswer: '(a) \\( C = 200e^{-0.15t} \\) \\quad (b) Half-life \\( = \\frac{\\ln 2}{0.15} \\approx 4.62 \\) hours \\quad (c) \\( C = 200e^{-0.15t} + 200e^{-0.15(t-5)} \\) for \\( t > 5 \\)' }
    },
    {
        id: 'el5-053', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'Two towns are modelled as follows. Town A has a population of 5000 growing at 3% per year. Town B has a population of 8000 growing at 1% per year. (a) Write exponential models for the population of each town after \\( t \\) years. (b) Find the value of \\( t \\) when the population of Town A overtakes Town B. (c) Find the combined population of both towns at that time.',
        marks: 8, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Write the exponential model for Town A.', workingLatex: 'P_A = 5000 \\times 1.03^t', explanation: 'A 3% annual growth means multiplying by 1.03 each year, so after \\( t \\) years the population is \\( 5000 \\times 1.03^t \\).' },
            { stepNumber: 2, description: '(a) Write the exponential model for Town B.', workingLatex: 'P_B = 8000 \\times 1.01^t', explanation: 'A 1% annual growth means multiplying by 1.01 each year, so after \\( t \\) years the population is \\( 8000 \\times 1.01^t \\).' },
            { stepNumber: 3, description: '(b) Set \\( P_A = P_B \\) and simplify.', workingLatex: '5000 \\times 1.03^t = 8000 \\times 1.01^t \\implies \\frac{1.03^t}{1.01^t} = \\frac{8000}{5000} = 1.6', explanation: 'Divide both sides by \\( 5000 \\times 1.01^t \\) to collect the exponential terms on one side.' },
            { stepNumber: 4, description: '(b) Express as a single exponential and take logarithms.', workingLatex: '\\left(\\frac{1.03}{1.01}\\right)^t = 1.6 \\implies t \\ln\\!\\left(\\frac{1.03}{1.01}\\right) = \\ln 1.6', explanation: 'Use the index law \\( \\frac{a^t}{b^t} = \\left(\\frac{a}{b}\\right)^t \\), then take \\( \\ln \\) of both sides.' },
            { stepNumber: 5, description: '(b) Solve for \\( t \\).', workingLatex: 't = \\frac{\\ln 1.6}{\\ln 1.03 - \\ln 1.01} = \\frac{0.4700}{0.02956 - 0.009950} = \\frac{0.4700}{0.01961} = 23.97', explanation: 'Evaluate the logarithms and divide. Town A overtakes Town B after approximately 24 years.' },
            { stepNumber: 6, description: '(c) Calculate each population at \\( t = 24 \\).', workingLatex: 'P_A = 5000 \\times 1.03^{24} = 5000 \\times 2.033 = 10163', explanation: 'Substitute \\( t = 24 \\) into the model for Town A. Use a calculator to find \\( 1.03^{24} \\approx 2.033 \\).' },
            { stepNumber: 7, description: '(c) Find Town B population and add.', workingLatex: 'P_B = 8000 \\times 1.01^{24} = 8000 \\times 1.270 = 10160 \\quad \\Rightarrow \\quad P_A + P_B = 10163 + 10160 = 20323', explanation: 'Substitute \\( t = 24 \\) into the model for Town B. The combined population is approximately 20 323.' }
        ], finalAnswer: '(a) \\( P_A = 5000 \\times 1.03^t \\), \\( P_B = 8000 \\times 1.01^t \\) \\quad (b) \\( t \\approx 24 \\) years \\quad (c) Combined population \\( \\approx 20\\,323 \\)' }
    },
    {
        id: 'el5-054', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Show that if \\( y = Ae^{kt} \\), then \\( \\ln y \\) is a linear function of \\( t \\). State the gradient and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take \\( \\ln \\) of both sides.', workingLatex: '\\ln y = \\ln(Ae^{kt})', explanation: 'Apply the natural logarithm to both sides of the equation \\( y = Ae^{kt} \\).' },
            { stepNumber: 2, description: 'Apply the logarithm product rule.', workingLatex: '\\ln y = \\ln A + \\ln(e^{kt}) = \\ln A + kt', explanation: 'Use the rule \\( \\ln(ab) = \\ln a + \\ln b \\) and the fact that \\( \\ln(e^{kt}) = kt \\).' },
            { stepNumber: 3, description: 'Identify the gradient and intercept.', workingLatex: '\\ln y = kt + \\ln A', explanation: 'This is in the form \\( Y = mX + c \\), where the gradient is \\( k \\) and the \\( y \\)-intercept is \\( \\ln A \\). This confirms \\( \\ln y \\) is linear in \\( t \\).' }
        ], finalAnswer: 'Gradient \\( = k \\), \\( y \\)-intercept \\( = \\ln A \\)' }
    },
    {
        id: 'el5-055', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'The number of infected people in an epidemic is modelled by \\( N = \\frac{10000}{1 + 999e^{-0.5t}} \\) where \\( t \\) is the number of days after the outbreak begins. (a) Find \\( N(0) \\). (b) State the maximum number of people who can be infected. (c) Find the time at which \\( N = 5000 \\) (the tipping point). (d) Find \\( N(14) \\) to the nearest integer.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( t = 0 \\) into the model.', workingLatex: 'N(0) = \\frac{10000}{1 + 999e^{0}} = \\frac{10000}{1 + 999} = \\frac{10000}{1000} = 10', explanation: 'When \\( t = 0 \\), \\( e^{0} = 1 \\), so the denominator is \\( 1 + 999 = 1000 \\). Initially 10 people are infected.' },
            { stepNumber: 2, description: '(b) Consider the behaviour as \\( t \\to \\infty \\).', workingLatex: 'e^{-0.5t} \\to 0 \\text{ as } t \\to \\infty \\implies N \\to \\frac{10000}{1 + 0} = 10000', explanation: 'As \\( t \\) increases, \\( e^{-0.5t} \\to 0 \\), so the denominator approaches 1. The maximum number infected is 10 000.' },
            { stepNumber: 3, description: '(c) Set \\( N = 5000 \\) and rearrange.', workingLatex: '5000 = \\frac{10000}{1 + 999e^{-0.5t}} \\implies 1 + 999e^{-0.5t} = 2', explanation: 'Cross-multiply: \\( 5000(1 + 999e^{-0.5t}) = 10000 \\), then divide by 5000 to get \\( 1 + 999e^{-0.5t} = 2 \\).' },
            { stepNumber: 4, description: '(c) Isolate the exponential and solve.', workingLatex: '999e^{-0.5t} = 1 \\implies e^{-0.5t} = \\frac{1}{999}', explanation: 'Subtract 1 from both sides, then divide by 999 to isolate the exponential term.' },
            { stepNumber: 5, description: '(c) Take natural logarithms.', workingLatex: '-0.5t = \\ln\\!\\left(\\frac{1}{999}\\right) = -\\ln 999 \\implies t = 2\\ln 999 = 2 \\times 6.907 = 13.8 \\text{ days}', explanation: 'Apply \\( \\ln \\) and divide by \\( -0.5 \\). The tipping point occurs at approximately 13.8 days.' },
            { stepNumber: 6, description: '(d) Substitute \\( t = 14 \\) into the model.', workingLatex: 'N(14) = \\frac{10000}{1 + 999e^{-0.5 \\times 14}} = \\frac{10000}{1 + 999e^{-7}}', explanation: 'Replace \\( t \\) with 14. We need to evaluate \\( e^{-7} \\).' },
            { stepNumber: 7, description: '(d) Evaluate the expression.', workingLatex: 'e^{-7} \\approx 0.000912 \\implies N(14) = \\frac{10000}{1 + 999 \\times 0.000912} = \\frac{10000}{1.9111} = 5233', explanation: 'Use a calculator to find \\( e^{-7} \\approx 0.000912 \\). Multiply by 999 and add 1, then divide 10000 by the result to get \\( N(14) \\approx 5233 \\).' }
        ], finalAnswer: '(a) \\( N(0) = 10 \\) \\quad (b) Maximum \\( = 10\\,000 \\) \\quad (c) \\( t = 2\\ln 999 \\approx 13.8 \\) days \\quad (d) \\( N(14) \\approx 5233 \\)' }
    },
    {
        id: 'el5-056', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A town has population 8000 growing at 1.5% per year. In how many years will it exceed 10000?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the growth model and set up equation.', workingLatex: '8000 \\times 1.015^{n} = 10000', explanation: 'A 1.5% annual growth means multiplying by 1.015 each year. Set the population equal to 10000.' },
            { stepNumber: 2, description: 'Divide both sides by 8000.', workingLatex: '1.015^{n} = \\frac{10000}{8000} = 1.25', explanation: 'Isolate the exponential term by dividing both sides by the initial population.' },
            { stepNumber: 3, description: 'Take logarithms of both sides.', workingLatex: 'n \\ln 1.015 = \\ln 1.25', explanation: 'Apply \\( \\ln \\) to both sides and use the power rule \\( \\ln(a^{n}) = n \\ln a \\).' },
            { stepNumber: 4, description: 'Solve for \\( n \\).', workingLatex: 'n = \\frac{\\ln 1.25}{\\ln 1.015} = \\frac{0.2231}{0.01489} = 15.0', explanation: 'Divide \\( \\ln 1.25 \\) by \\( \\ln 1.015 \\). The population exceeds 10000 after 15 years.' }
        ], finalAnswer: '15 years' }
    },
    {
        id: 'el5-057', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Two populations: \\( P_1 = 3000e^{0.02t} \\) and \\( P_2 = 5000e^{-0.01t} \\). When are they equal?',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two populations equal.', workingLatex: '3000e^{0.02t} = 5000e^{-0.01t}', explanation: 'We need to find \\( t \\) when \\( P_1 = P_2 \\).' },
            { stepNumber: 2, description: 'Divide both sides by \\( 3000e^{-0.01t} \\).', workingLatex: 'e^{0.02t-(-0.01t)} = \\frac{5000}{3000}', explanation: 'Dividing exponentials means subtracting exponents, giving \\( e^{0.03t} \\) on the left.' },
            { stepNumber: 3, description: 'Simplify the fraction.', workingLatex: 'e^{0.03t} = \\frac{5}{3}', explanation: 'Cancel the common factor of 1000 from numerator and denominator.' },
            { stepNumber: 4, description: 'Take natural logarithms.', workingLatex: '0.03t = \\ln\\!\\left(\\frac{5}{3}\\right)', explanation: 'Applying \\( \\ln \\) removes the exponential on the left.' },
            { stepNumber: 5, description: 'Solve for \\( t \\).', workingLatex: 't = \\frac{\\ln(5/3)}{0.03} = \\frac{0.5108}{0.03} = 17.0', explanation: 'Evaluate \\( \\ln(5/3) \\approx 0.5108 \\) and divide by 0.03 to obtain \\( t = 17.0 \\) years.' }
        ], finalAnswer: '\\( t = 17.0 \\) years' }
    },
    {
        id: 'el5-058', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A lake contains 100 kg of pollutant. Each year 20% is removed naturally. How long until less than 10 kg remains?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the decay model.', workingLatex: 'P = 100 \\times 0.8^n', explanation: 'Each year 20% is removed so 80% remains. After \\( n \\) years the amount is \\( 100 \\times 0.8^n \\).' },
            { stepNumber: 2, description: 'Set up the inequality.', workingLatex: '100 \\times 0.8^n < 10 \\implies 0.8^n < 0.1', explanation: 'Divide both sides by 100 to isolate the exponential term.' },
            { stepNumber: 3, description: 'Take logarithms of both sides.', workingLatex: 'n \\ln 0.8 < \\ln 0.1', explanation: 'Since \\( \\ln 0.8 < 0 \\), the inequality reverses when we divide by it.' },
            { stepNumber: 4, description: 'Solve for \\( n \\).', workingLatex: 'n > \\frac{\\ln 0.1}{\\ln 0.8} = \\frac{-2.303}{-0.2231} = 10.3', explanation: 'Since \\( n \\) must be a whole number of years and we need strictly less than 10 kg, round up to \\( n = 11 \\).' }
        ], finalAnswer: 'After 11 years' }
    },
    {
        id: 'el5-059', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The temperature of a freezer item placed in a room is \\( T = 22 - 40e^{-0.05t} \\). Find when T = 10.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( T = 10 \\).', workingLatex: '10 = 22 - 40e^{-0.05t}', explanation: 'Replace \\( T \\) with 10 in the model equation.' },
            { stepNumber: 2, description: 'Rearrange for the exponential.', workingLatex: '40e^{-0.05t} = 12 \\implies e^{-0.05t} = 0.3', explanation: 'Subtract 10 from 22 to get 12, then divide both sides by 40.' },
            { stepNumber: 3, description: 'Take natural logarithms.', workingLatex: '-0.05t = \\ln 0.3', explanation: 'Applying \\( \\ln \\) to both sides removes the exponential.' },
            { stepNumber: 4, description: 'Solve for \\( t \\).', workingLatex: 't = \\frac{-\\ln 0.3}{0.05} = \\frac{1.204}{0.05} = 24.1', explanation: 'Evaluate \\( -\\ln 0.3 \\approx 1.204 \\) and divide by 0.05 to get \\( t = 24.1 \\) minutes.' }
        ], finalAnswer: '\\( t = 24.1 \\) minutes' }
    },
    {
        id: 'el5-060', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'A capacitor discharges according to the model \\( Q = Q_0 e^{-t/(RC)} \\), where \\( Q \\) is the charge in microcoulombs, \\( R = 1000 \\, \\Omega \\), \\( C = 0.002 \\) F, and \\( Q_0 = 5 \\, \\mu\\text{C} \\). (a) Find the charge remaining after 3 seconds. (b) Find the time constant \\( RC \\) and interpret its meaning. (c) Find the time at which \\( Q < 0.5 \\, \\mu\\text{C} \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Calculate the time constant \\( RC \\).', workingLatex: 'RC = 1000 \\times 0.002 = 2 \\text{ seconds}', explanation: 'Multiply \\( R \\) and \\( C \\) to find the time constant. Here \\( RC = 2 \\) seconds.' },
            { stepNumber: 2, description: '(a) Substitute \\( t = 3 \\) into the model.', workingLatex: 'Q = 5e^{-3/2} = 5e^{-1.5} = 5 \\times 0.2231 = 1.12 \\, \\mu\\text{C}', explanation: 'Replace \\( t \\) with 3 and \\( RC \\) with 2. Use a calculator to find \\( e^{-1.5} \\approx 0.2231 \\).' },
            { stepNumber: 3, description: '(b) State and interpret the time constant.', workingLatex: 'RC = 2 \\text{ seconds}', explanation: 'The time constant \\( RC = 2 \\) seconds is the time taken for the charge to fall to \\( e^{-1} \\approx 36.8\\% \\) of its initial value. It characterises how quickly the capacitor discharges.' },
            { stepNumber: 4, description: '(b) Verify the interpretation numerically.', workingLatex: 'Q(2) = 5e^{-2/2} = 5e^{-1} = 5 \\times 0.3679 = 1.84 \\, \\mu\\text{C}', explanation: 'At \\( t = RC = 2 \\), the charge is \\( 5e^{-1} \\approx 1.84 \\, \\mu\\text{C} \\), which is \\( 36.8\\% \\) of \\( 5 \\, \\mu\\text{C} \\), confirming the interpretation.' },
            { stepNumber: 5, description: '(c) Set \\( Q < 0.5 \\) and isolate the exponential.', workingLatex: '5e^{-t/2} < 0.5 \\implies e^{-t/2} < 0.1', explanation: 'Divide both sides by 5 to isolate the exponential term.' },
            { stepNumber: 6, description: '(c) Take natural logarithms and solve for \\( t \\).', workingLatex: '-\\frac{t}{2} < \\ln 0.1 = -\\ln 10 \\implies t > 2\\ln 10 = 2 \\times 2.303 = 4.61 \\text{ seconds}', explanation: 'Apply \\( \\ln \\) to both sides. Since we divide by a negative number, the inequality reverses. The charge drops below \\( 0.5 \\, \\mu\\text{C} \\) after approximately 4.61 seconds.' }
        ], finalAnswer: '(a) \\( Q = 5e^{-1.5} \\approx 1.12 \\, \\mu\\text{C} \\) \\quad (b) \\( RC = 2 \\) s (time to fall to \\( 36.8\\% \\) of initial charge) \\quad (c) \\( t > 2\\ln 10 \\approx 4.61 \\) seconds' }
    },
    {
        id: 'el5-061', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A rumour spreads so that after \\( t \\) hours, the fraction who know is \\( f = 1 - e^{-0.3t} \\). After how many hours do 90% know?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set \\( f = 0.9 \\).', workingLatex: '0.9 = 1 - e^{-0.3t}', explanation: '90% as a decimal is 0.9. Substitute into the model.' },
            { stepNumber: 2, description: 'Isolate the exponential.', workingLatex: 'e^{-0.3t} = 0.1', explanation: 'Rearrange by subtracting 0.9 from 1 to get \\( e^{-0.3t} = 0.1 \\).' },
            { stepNumber: 3, description: 'Take logarithms and solve.', workingLatex: 't = \\frac{-\\ln 0.1}{0.3} = \\frac{\\ln 10}{0.3} = 7.68', explanation: 'Since \\( -\\ln 0.1 = \\ln 10 \\approx 2.303 \\), dividing by 0.3 gives \\( t = 7.68 \\) hours.' }
        ], finalAnswer: '\\( t = 7.68 \\) hours' }
    },
    {
        id: 'el5-062', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Light intensity decreases with depth: \\( I = I_0 e^{-0.4d} \\) where \\( d \\) is in metres. At what depth is the intensity 1% of the surface value?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set \\( I = 0.01 I_0 \\).', workingLatex: '0.01 I_0 = I_0 e^{-0.4d}', explanation: '1% of the surface value means \\( I / I_0 = 0.01 \\).' },
            { stepNumber: 2, description: 'Cancel \\( I_0 \\) and take logarithms.', workingLatex: '-0.4d = \\ln 0.01', explanation: 'Divide both sides by \\( I_0 \\) and apply \\( \\ln \\) to remove the exponential.' },
            { stepNumber: 3, description: 'Solve for \\( d \\).', workingLatex: 'd = \\frac{-\\ln 0.01}{0.4} = \\frac{4.605}{0.4} = 11.5', explanation: 'Evaluate \\( -\\ln 0.01 = \\ln 100 \\approx 4.605 \\) and divide by 0.4 to get \\( d = 11.5 \\) metres.' }
        ], finalAnswer: '\\( d = 11.5 \\) metres' }
    },
    {
        id: 'el5-063', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The rate of decay of a substance is proportional to the amount present. Write the differential equation and its solution.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the differential equation.', workingLatex: '\\frac{dm}{dt} = -km', explanation: 'The rate of change is proportional to \\( m \\), with a negative sign because the substance is decaying. Here \\( k > 0 \\) is the decay constant.' },
            { stepNumber: 2, description: 'State the general solution.', workingLatex: 'm = m_0 e^{-kt}', explanation: 'Separating variables and integrating gives the standard exponential decay formula, where \\( m_0 \\) is the initial mass at \\( t = 0 \\).' },
            { stepNumber: 3, description: 'Verify the initial condition.', workingLatex: 'm(0) = m_0 e^{0} = m_0', explanation: 'When \\( t = 0 \\) the formula correctly returns the initial mass \\( m_0 \\).' }
        ], finalAnswer: '\\( \\frac{dm}{dt} = -km \\); solution \\( m = m_0 e^{-kt} \\)' }
    },
    {
        id: 'el5-064', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Standard',
        questionText: 'Oil leaks from a damaged tanker at a rate \\( R = 100e^{-0.05t} \\) litres per hour, where \\( t \\) is the time in hours since the leak began. (a) Find the initial leak rate. (b) After what time does the leak rate drop below 10 litres per hour? (c) The total amount of oil leaked in the first \\( T \\) hours is given by \\( A = 2000(1 - e^{-0.05T}) \\). Find the total amount leaked in the first 24 hours. (d) Find the maximum possible total leak.',
        marks: 7, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Find the initial leak rate by substituting \\( t = 0 \\).', workingLatex: 'R(0) = 100e^{0} = 100 \\text{ litres per hour}', explanation: 'When \\( t = 0 \\), \\( e^{0} = 1 \\), so the initial leak rate is 100 litres per hour.' },
            { stepNumber: 2, description: '(b) Set \\( R = 10 \\) and solve for \\( t \\).', workingLatex: '100e^{-0.05t} = 10 \\implies e^{-0.05t} = 0.1', explanation: 'Divide both sides by 100 to isolate the exponential term.' },
            { stepNumber: 3, description: '(b) Take natural logarithms.', workingLatex: '-0.05t = \\ln 0.1 = -\\ln 10 \\implies t = \\frac{\\ln 10}{0.05} = \\frac{2.303}{0.05} = 46.1 \\text{ hours}', explanation: 'Apply \\( \\ln \\) and divide by \\( -0.05 \\). The leak rate drops below 10 litres per hour after approximately 46.1 hours.' },
            { stepNumber: 4, description: '(c) Substitute \\( T = 24 \\) into the total amount formula.', workingLatex: 'A = 2000(1 - e^{-0.05 \\times 24}) = 2000(1 - e^{-1.2})', explanation: 'Replace \\( T \\) with 24 in the formula for total oil leaked.' },
            { stepNumber: 5, description: '(c) Evaluate the expression.', workingLatex: 'A = 2000(1 - 0.3012) = 2000 \\times 0.6988 = 1398 \\text{ litres}', explanation: 'Use a calculator to find \\( e^{-1.2} \\approx 0.3012 \\). Subtract from 1 and multiply by 2000 to get approximately 1398 litres leaked in the first 24 hours.' },
            { stepNumber: 6, description: '(d) Find the maximum total leak as \\( T \\to \\infty \\).', workingLatex: 'A_{\\max} = \\lim_{T \\to \\infty} 2000(1 - e^{-0.05T}) = 2000(1 - 0) = 2000 \\text{ litres}', explanation: 'As \\( T \\to \\infty \\), \\( e^{-0.05T} \\to 0 \\), so the maximum possible total leak is 2000 litres. This is the total capacity that can ever leak at this decreasing rate.' },
            { stepNumber: 7, description: '(d) Interpret the result in context.', workingLatex: 'A_{\\max} = \\frac{100}{0.05} = 2000 \\text{ litres}', explanation: 'Alternatively, note that \\( A_{\\max} = \\frac{R_0}{k} = \\frac{100}{0.05} = 2000 \\), which equals the initial rate divided by the decay constant. Even if the leak continues indefinitely, at most 2000 litres will escape.' }
        ], finalAnswer: '(a) 100 litres/hour \\quad (b) \\( t = 20\\ln 10 \\approx 46.1 \\) hours \\quad (c) \\( \\approx 1398 \\) litres \\quad (d) Maximum \\( = 2000 \\) litres' }
    },
    {
        id: 'el5-065', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'The charge on a capacitor builds up: \\( Q = Q_0(1 - e^{-t/RC}) \\). If \\( Q_0 = 100 \\), \\( RC = 5 \\), find Q after 10 seconds.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute the given values.', workingLatex: 'Q = 100\\bigl(1 - e^{-10/5}\\bigr) = 100(1 - e^{-2})', explanation: 'Replace \\( Q_0 \\) with 100, \\( t \\) with 10, and \\( RC \\) with 5.' },
            { stepNumber: 2, description: 'Evaluate \\( e^{-2} \\).', workingLatex: 'e^{-2} \\approx 0.1353', explanation: 'Use a calculator to find \\( e^{-2} \\approx 0.1353 \\).' },
            { stepNumber: 3, description: 'Calculate \\( Q \\).', workingLatex: 'Q = 100(1 - 0.1353) = 100 \\times 0.8647 = 86.5', explanation: 'Subtract 0.1353 from 1 and multiply by 100 to get \\( Q = 86.5 \\) units.' }
        ], finalAnswer: '\\( Q = 86.5 \\) units' }
    },
    {
        id: 'el5-066', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Data suggests \\( y = ab^x \\). When \\( x = 0, y = 3 \\) and when \\( x = 4, y = 48 \\). Find \\( a \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( x = 0 \\).', workingLatex: 'y = ab^0 = a \\implies a = 3', explanation: 'Since \\( b^0 = 1 \\), the equation reduces to \\( y = a \\), so \\( a = 3 \\).' },
            { stepNumber: 2, description: 'Substitute \\( x = 4 \\) with \\( a = 3 \\).', workingLatex: '3b^4 = 48', explanation: 'Replace \\( a \\) with 3 and \\( y \\) with 48 in the model.' },
            { stepNumber: 3, description: 'Solve for \\( b^4 \\).', workingLatex: 'b^4 = \\frac{48}{3} = 16', explanation: 'Divide both sides by 3 to isolate \\( b^4 \\).' },
            { stepNumber: 4, description: 'Find \\( b \\).', workingLatex: 'b = 16^{1/4} = 2', explanation: 'Take the fourth root of 16. Since \\( 2^4 = 16 \\), we have \\( b = 2 \\).' }
        ], finalAnswer: '\\( a = 3 \\), \\( b = 2 \\)' }
    },
    {
        id: 'el5-067', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A ball bounces to 80% of its previous height. Dropped from 2 m, after how many bounces is it below 0.5 m?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the geometric model.', workingLatex: 'h = 2 \\times 0.8^n', explanation: 'Each bounce reaches 80% of the previous height, so after \\( n \\) bounces the height is \\( 2 \\times 0.8^n \\).' },
            { stepNumber: 2, description: 'Set up the inequality.', workingLatex: '2 \\times 0.8^n < 0.5 \\implies 0.8^n < 0.25', explanation: 'Divide both sides by 2 to isolate the exponential expression.' },
            { stepNumber: 3, description: 'Take logarithms of both sides.', workingLatex: 'n \\ln 0.8 < \\ln 0.25', explanation: 'Since \\( \\ln 0.8 < 0 \\), the inequality reverses when dividing by it.' },
            { stepNumber: 4, description: 'Solve for \\( n \\).', workingLatex: 'n > \\frac{\\ln 0.25}{\\ln 0.8} = \\frac{-1.386}{-0.2231} = 6.21', explanation: 'Since \\( n \\) must be a whole number and we need the height strictly below 0.5 m, round up to \\( n = 7 \\).' }
        ], finalAnswer: 'After 7 bounces' }
    },
    {
        id: 'el5-068', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Show that a quantity with constant percentage growth rate \\( r\\% \\) per unit time can be written as \\( Q = Q_0 e^{kt} \\) where \\( k = \\ln(1 + r/100) \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the discrete growth model.', workingLatex: 'Q = Q_0(1 + r/100)^t', explanation: 'A constant percentage growth rate of \\( r\\% \\) means the quantity is multiplied by \\( (1 + r/100) \\) each unit of time.' },
            { stepNumber: 2, description: 'Rewrite the base using \\( e \\).', workingLatex: '(1 + r/100)^t = e^{t \\ln(1 + r/100)}', explanation: 'Use the identity \\( a^t = e^{t \\ln a} \\) with \\( a = 1 + r/100 \\).' },
            { stepNumber: 3, description: 'Define \\( k \\) and conclude.', workingLatex: 'Q = Q_0 e^{kt} \\quad \\text{where } k = \\ln(1 + r/100)', explanation: 'Setting \\( k = \\ln(1 + r/100) \\) gives the required exponential form, as required.' }
        ], finalAnswer: 'Shown: \\( k = \\ln(1 + r/100) \\)' }
    },
    {
        id: 'el5-069', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'Bacteria grow from 100 to 300 in 6 hours. Assuming exponential growth \\( N = 100e^{kt} \\), find:\n\n(a) \\( k \\)\n\n(b) the population after 10 hours.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute \\( N = 300 \\), \\( t = 6 \\).', workingLatex: '300 = 100e^{6k}', explanation: 'Use the known data point: when \\( t = 6 \\), the population is 300.' },
            { stepNumber: 2, description: '(a) Isolate the exponential.', workingLatex: 'e^{6k} = 3', explanation: 'Divide both sides by 100.' },
            { stepNumber: 3, description: '(a) Solve for \\( k \\).', workingLatex: 'k = \\frac{\\ln 3}{6} = \\frac{1.099}{6} = 0.183', explanation: 'Take \\( \\ln \\) of both sides and divide by 6 to find \\( k \\approx 0.183 \\).' },
            { stepNumber: 4, description: '(b) Substitute \\( t = 10 \\).', workingLatex: 'N = 100e^{0.183 \\times 10} = 100e^{1.83}', explanation: 'Use the value of \\( k \\) found in part (a) and set \\( t = 10 \\).' },
            { stepNumber: 5, description: '(b) Evaluate.', workingLatex: 'N = 100 \\times 6.23 = 623', explanation: 'Use a calculator to find \\( e^{1.83} \\approx 6.23 \\), giving a population of 623 bacteria.' }
        ], finalAnswer: '(a) \\( k \\approx 0.183 \\) \\quad (b) \\( 623 \\) bacteria' }
    },
    {
        id: 'el5-070', topicRef: 'el5', topicTitle: 'Modelling Growth/Decay', difficulty: 'Foundation',
        questionText: 'A radioactive element has decay constant \\( k = 0.005 \\) per year. Find: (a) the half-life; (b) the time for 90% to decay; (c) the percentage remaining after 100 years.',
        marks: 7, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Use the half-life formula.', workingLatex: 't_{1/2} = \\frac{\\ln 2}{k}', explanation: 'The half-life is the time for the quantity to halve. Setting \\( e^{-kt} = 0.5 \\) gives \\( t = \\ln 2 / k \\).' },
            { stepNumber: 2, description: '(a) Substitute \\( k = 0.005 \\).', workingLatex: 't_{1/2} = \\frac{0.6931}{0.005} = 138.6 \\text{ years}', explanation: 'Evaluate \\( \\ln 2 \\approx 0.6931 \\) and divide by 0.005.' },
            { stepNumber: 3, description: '(b) Set up equation for 90% decay.', workingLatex: 'e^{-0.005t} = 0.1', explanation: 'If 90% has decayed then 10% remains, so \\( e^{-0.005t} = 0.1 \\).' },
            { stepNumber: 4, description: '(b) Solve for \\( t \\).', workingLatex: 't = \\frac{-\\ln 0.1}{0.005} = \\frac{\\ln 10}{0.005} = \\frac{2.303}{0.005} = 460.5 \\text{ years}', explanation: 'Take \\( \\ln \\) of both sides and divide by \\( -0.005 \\). Note \\( -\\ln 0.1 = \\ln 10 \\).' },
            { stepNumber: 5, description: '(c) Substitute \\( t = 100 \\).', workingLatex: 'e^{-0.005 \\times 100} = e^{-0.5}', explanation: 'Replace \\( t \\) with 100 in the decay formula \\( e^{-kt} \\).' },
            { stepNumber: 6, description: '(c) Evaluate the remaining fraction.', workingLatex: 'e^{-0.5} = 0.6065 = 60.7\\%', explanation: 'Use a calculator to find \\( e^{-0.5} \\approx 0.6065 \\), meaning about 60.7% of the element remains.' },
            { stepNumber: 7, description: '(c) State the answer.', workingLatex: '\\text{Percentage remaining} = 60.7\\%', explanation: 'After 100 years approximately 60.7% of the original amount of the radioactive element is still present.' }
        ], finalAnswer: '(a) 138.6 years (b) 460.5 years (c) 60.7\\%' }
    },
];
