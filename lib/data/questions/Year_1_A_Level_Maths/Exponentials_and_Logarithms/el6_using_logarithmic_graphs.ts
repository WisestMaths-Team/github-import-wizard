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
    // TYPE A (Q1–6): Converting y = ax^n to linear form log y = n log x + log a
    {
        id: 'el6-001',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A relationship between \\( x \\) and \\( y \\) is believed to follow \\( y = ax^n \\).\n\n Show that taking \\( \\log_{10} \\) of both sides gives a straight-line equation of the form \\( \\log y = n\\log x + \\log a \\), and state what the gradient and vertical intercept represent.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides of \\( y = ax^n \\).',
                    workingLatex: '\\log y = \\log(ax^n)',
                    explanation: 'Applying the same log operation to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the product law and power law.',
                    workingLatex: '\\log y = \\log a + \\log(x^n) = \\log a + n\\log x',
                    explanation: '\\( \\log(ax^n) = \\log a + \\log(x^n) = \\log a + n\\log x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write in \\( Y = mX + c \\) straight-line form.',
                    workingLatex: '\\underbrace{\\log y}_{Y} = \\underbrace{n}_{m}\\underbrace{\\log x}_{X} + \\underbrace{\\log a}_{c}',
                    explanation: 'Plotting \\( \\log y \\) against \\( \\log x \\) gives a straight line with gradient \\( n \\) and vertical intercept \\( \\log a \\).'
                }
            ],
            finalAnswer: '\\( \\log y = n\\log x + \\log a \\). Gradient \\( = n \\); vertical intercept \\( = \\log a \\).'
        }
    },
    {
        id: 'el6-002',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A straight-line graph is obtained by plotting \\( \\log_{10} y \\) against \\( \\log_{10} x \\). The gradient is 3 and the vertical intercept is 0.5.\n\n Find the values of \\( a \\) and \\( n \\) in the relationship \\( y = ax^n \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient of \\( \\log y \\) against \\( \\log x \\) equals \\( n \\).',
                    workingLatex: 'n = 3',
                    explanation: 'For \\( y = ax^n \\), the linearised form is \\( \\log y = n\\log x + \\log a \\), so gradient = \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept equals \\( \\log a \\).',
                    workingLatex: '\\log a = 0.5 \\Rightarrow a = 10^{0.5} = \\sqrt{10} \\approx 3.16',
                    explanation: 'Apply \\( 10^{\\square} \\) to find \\( a \\).'
                }
            ],
            finalAnswer: '\\( n = 3 \\), \\( a = 10^{0.5} \\approx 3.16 \\)'
        }
    },
    {
        id: 'el6-003',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( \\log_{10} x \\) passes through the points \\( (0, 1.2) \\) and \\( (2, 3.2) \\).\n\n Find the values of \\( a \\) and \\( n \\) in the equation \\( y = ax^n \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient of the straight line.',
                    workingLatex: 'n = \\frac{3.2 - 1.2}{2 - 0} = \\frac{2.0}{2} = 1',
                    explanation: 'Gradient = \\( \\Delta(\\log y) / \\Delta(\\log x) \\) = \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept (where \\( \\log x = 0 \\)) gives \\( \\log a \\).',
                    workingLatex: '\\log a = 1.2 \\Rightarrow a = 10^{1.2} \\approx 15.8',
                    explanation: 'The point \\( (0, 1.2) \\) is on the \\( \\log y \\)-axis, so this is the intercept.'
                }
            ],
            finalAnswer: '\\( n = 1 \\), \\( a \\approx 15.8 \\)'
        }
    },
    {
        id: 'el6-004',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( \\log_{10} x \\) passes through \\( (1, 2.6) \\) and \\( (3, 4.0) \\).\n\n Find \\( a \\) and \\( n \\) in \\( y = ax^n \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( n \\).',
                    workingLatex: 'n = \\frac{4.0 - 2.6}{3 - 1} = \\frac{1.4}{2} = 0.7',
                    explanation: 'Gradient = change in \\( \\log y \\) / change in \\( \\log x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the vertical intercept using point \\( (1, 2.6) \\).',
                    workingLatex: '\\log a = 2.6 - 0.7 \\times 1 = 1.9 \\Rightarrow a = 10^{1.9} \\approx 79.4',
                    explanation: 'Rearrange \\( \\log y = n\\log x + \\log a \\) using one of the points.'
                }
            ],
            finalAnswer: '\\( n = 0.7 \\), \\( a \\approx 79.4 \\)'
        }
    },
    {
        id: 'el6-005',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The table below shows values of \\( x \\) and \\( y \\) that are thought to satisfy \\( y = ax^n \\).\n\n\\(\\begin{array}{|c|c|c|c|c|}\\hline x & 4 & 9 & 16 & 25 \\\\ \\hline y & 24 & 81 & 192 & 375 \\\\ \\hline \\end{array}\\)\n\nBy plotting \\( \\log y \\) against \\( \\log x \\), find \\( a \\) and \\( n \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Convert the data to \\( \\log x \\) and \\( \\log y \\). Using \\( x = 4, y = 24 \\) and \\( x = 25, y = 375 \\):',
                    workingLatex: '\\log 4 \\approx 0.602, \\; \\log 24 \\approx 1.380 \\qquad \\log 25 \\approx 1.398, \\; \\log 375 \\approx 2.574',
                    explanation: 'Taking \\( \\log_{10} \\) of each data value.'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the gradient \\( n \\).',
                    workingLatex: 'n = \\frac{2.574 - 1.380}{1.398 - 0.602} = \\frac{1.194}{0.796} \\approx 1.50',
                    explanation: 'Gradient = change in \\( \\log y \\) / change in \\( \\log x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\) using the intercept.',
                    workingLatex: '\\log a = 1.380 - 1.50 \\times 0.602 = 1.380 - 0.903 = 0.477 \\Rightarrow a = 10^{0.477} \\approx 3',
                    explanation: 'Substitute one point into \\( \\log y = n\\log x + \\log a \\).'
                }
            ],
            finalAnswer: '\\( n \\approx 1.5 \\), \\( a \\approx 3 \\), so \\( y \\approx 3x^{1.5} \\)'
        }
    },
    {
        id: 'el6-006',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The radius \\( r \\) cm and height \\( h \\) cm of several cylinders are thought to satisfy \\( h = ar^n \\). A graph of \\( \\log h \\) against \\( \\log r \\) gives a straight line with gradient \\( -2 \\) and vertical intercept \\( 3 \\).\n\n Write down the relationship between \\( h \\) and \\( r \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Read off \\( n \\) from the gradient.',
                    workingLatex: 'n = -2',
                    explanation: 'Gradient of \\( \\log h \\) vs \\( \\log r \\) equals the power \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( a \\) from the vertical intercept.',
                    workingLatex: '\\log a = 3 \\Rightarrow a = 10^3 = 1000',
                    explanation: 'The vertical intercept of the linearised graph equals \\( \\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the relationship.',
                    workingLatex: 'h = 1000r^{-2} = \\frac{1000}{r^2}',
                    explanation: 'Substitute \\( a = 1000 \\) and \\( n = -2 \\).'
                }
            ],
            finalAnswer: '\\( h = \\dfrac{1000}{r^2} \\)'
        }
    },
    // TYPE B (Q7–12): Converting y = kb^x to linear form log y = x log b + log k
    {
        id: 'el6-007',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A relationship between \\( x \\) and \\( y \\) is believed to follow \\( y = kb^x \\).\n\n Show that taking \\( \\log_{10} \\) of both sides gives a straight-line equation of the form \\( \\log y = x\\log b + \\log k \\), and state what the gradient and vertical intercept represent.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take \\( \\log_{10} \\) of both sides.',
                    workingLatex: '\\log y = \\log(kb^x)',
                    explanation: 'Same log applied to both sides.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the product and power laws.',
                    workingLatex: '\\log y = \\log k + \\log(b^x) = \\log k + x\\log b',
                    explanation: '\\( \\log(kb^x) = \\log k + x\\log b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the straight-line form.',
                    workingLatex: '\\underbrace{\\log y}_{Y} = \\underbrace{\\log b}_{m}\\,\\underbrace{x}_{X} + \\underbrace{\\log k}_{c}',
                    explanation: 'Plotting \\( \\log y \\) against \\( x \\) gives a straight line with gradient \\( \\log b \\) and vertical intercept \\( \\log k \\).'
                }
            ],
            finalAnswer: '\\( \\log y = x\\log b + \\log k \\). Gradient \\( = \\log b \\); vertical intercept \\( = \\log k \\).'
        }
    },
    {
        id: 'el6-008',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( x \\) is a straight line with gradient \\( 0.3 \\) and vertical intercept \\( 1.7 \\).\n\n Find the values of \\( k \\) and \\( b \\) in the equation \\( y = kb^x \\). Give your answers to 3 s.f.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The gradient equals \\( \\log b \\).',
                    workingLatex: '\\log b = 0.3 \\Rightarrow b = 10^{0.3} \\approx 2.00',
                    explanation: 'Apply \\( 10^{\\square} \\) to find \\( b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept equals \\( \\log k \\).',
                    workingLatex: '\\log k = 1.7 \\Rightarrow k = 10^{1.7} \\approx 50.1',
                    explanation: 'Apply \\( 10^{\\square} \\) to find \\( k \\).'
                }
            ],
            finalAnswer: '\\( b \\approx 2.00 \\), \\( k \\approx 50.1 \\)'
        }
    },
    {
        id: 'el6-009',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( x \\) passes through the points \\( (0, 2) \\) and \\( (5, 3.5) \\).\n\n Find \\( k \\) and \\( b \\) in \\( y = kb^x \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( \\log b \\).',
                    workingLatex: '\\log b = \\frac{3.5 - 2}{5 - 0} = \\frac{1.5}{5} = 0.3 \\Rightarrow b = 10^{0.3} \\approx 2.00',
                    explanation: 'Gradient = change in \\( \\log y \\) / change in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept gives \\( \\log k \\).',
                    workingLatex: '\\log k = 2 \\Rightarrow k = 10^2 = 100',
                    explanation: 'The point \\( (0, 2) \\) is on the \\( \\log y \\)-axis, so it is the intercept.'
                }
            ],
            finalAnswer: '\\( b \\approx 2.00 \\), \\( k = 100 \\)'
        }
    },
    {
        id: 'el6-010',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log_{10} y \\) against \\( x \\) passes through \\( (2, 1.4) \\) and \\( (6, 2.8) \\).\n\n Find \\( k \\) and \\( b \\) in \\( y = kb^x \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( \\log b \\).',
                    workingLatex: '\\log b = \\frac{2.8 - 1.4}{6 - 2} = \\frac{1.4}{4} = 0.35 \\Rightarrow b = 10^{0.35} \\approx 2.24',
                    explanation: 'Gradient = \\( \\Delta(\\log y) / \\Delta x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log k \\) using point \\( (2, 1.4) \\).',
                    workingLatex: '1.4 = 0.35 \\times 2 + \\log k \\Rightarrow \\log k = 1.4 - 0.7 = 0.7 \\Rightarrow k = 10^{0.7} \\approx 5.01',
                    explanation: 'Substitute into \\( \\log y = x\\log b + \\log k \\).'
                }
            ],
            finalAnswer: '\\( b \\approx 2.24 \\), \\( k \\approx 5.01 \\)'
        }
    },
    {
        id: 'el6-011',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The equation \\( y = kb^x \\) can also be written as \\( y = ke^{cx} \\) for some constant \\( c \\).\n\n A graph of \\( \\ln y \\) against \\( x \\) has gradient \\( 0.4 \\) and vertical intercept \\( 3 \\).\n\n Write down the values of \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Linearise \\( y = ke^{cx} \\) using \\( \\ln \\).',
                    workingLatex: '\\ln y = cx + \\ln k',
                    explanation: '\\( \\ln(ke^{cx}) = \\ln k + cx \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Read off the gradient \\( c \\) and intercept \\( \\ln k \\).',
                    workingLatex: 'c = 0.4 \\qquad \\ln k = 3 \\Rightarrow k = e^3 \\approx 20.1',
                    explanation: 'Gradient = \\( c \\); intercept = \\( \\ln k \\).'
                }
            ],
            finalAnswer: '\\( c = 0.4 \\), \\( k = e^3 \\approx 20.1 \\)'
        }
    },
    {
        id: 'el6-012',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln y \\) against \\( x \\) passes through \\( (0, 1.5) \\) and \\( (4, 3.9) \\).\n\n Find \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the gradient \\( c \\).',
                    workingLatex: 'c = \\frac{3.9 - 1.5}{4 - 0} = \\frac{2.4}{4} = 0.6',
                    explanation: 'Gradient of \\( \\ln y \\) against \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept is \\( \\ln k \\).',
                    workingLatex: '\\ln k = 1.5 \\Rightarrow k = e^{1.5} \\approx 4.48',
                    explanation: 'Point \\( (0, 1.5) \\) is on the \\( \\ln y \\)-axis.'
                }
            ],
            finalAnswer: '\\( c = 0.6 \\), \\( k \\approx 4.48 \\)'
        }
    },
    // TYPE C (Q13–17): Reading values from given tables and plotting log graphs
    {
        id: 'el6-013',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The table below gives values of \\( t \\) and \\( y \\) which satisfy \\( y = kb^t \\).\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline t & 1 & 3 & 5 & 7 \\\\\\hline y & 6 & 30 & 150 & 750 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Copy and complete the table of \\( \\log_{10} y \\) values.\n\n (b) State the gradient and vertical intercept of the graph of \\( \\log y \\) against \\( t \\).\n\n (c) Hence find \\( k \\) and \\( b \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log_{10} y \\) for each value.',
                    workingLatex: '\\log 6 \\approx 0.778, \\quad \\log 30 \\approx 1.477, \\quad \\log 150 \\approx 2.176, \\quad \\log 750 \\approx 2.875',
                    explanation: 'Use a calculator to find each log value to 3 d.p.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Find the gradient using two points, e.g. \\( (1, 0.778) \\) and \\( (7, 2.875) \\).',
                    workingLatex: '\\log b = \\frac{2.875 - 0.778}{7 - 1} = \\frac{2.097}{6} \\approx 0.350',
                    explanation: 'Gradient = \\( \\log b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the vertical intercept (where \\( t = 0 \\)).',
                    workingLatex: '\\log k = 0.778 - 0.350 \\times 1 = 0.428',
                    explanation: 'Substitute into \\( \\log y = t\\log b + \\log k \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find \\( k \\) and \\( b \\).',
                    workingLatex: 'b = 10^{0.350} \\approx 2.24 \\qquad k = 10^{0.428} \\approx 2.68',
                    explanation: 'Apply \\( 10^{\\square} \\) to each log value.'
                }
            ],
            finalAnswer: '(b) Gradient \\( \\approx 0.350 \\), intercept \\( \\approx 0.428 \\) \\quad (c) \\( k \\approx 2.68 \\), \\( b \\approx 2.24 \\)'
        }
    },
    {
        id: 'el6-014',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The table below gives values of \\( x \\) and \\( y \\) which satisfy \\( y = ax^n \\).\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline x & 2 & 4 & 8 & 16 \\\\\\hline y & 12 & 34 & 96 & 271 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Complete the table of \\( \\log x \\) and \\( \\log y \\) values.\n\n (b) Find the gradient and vertical intercept of \\( \\log y \\) against \\( \\log x \\).\n\n (c) Find \\( a \\) and \\( n \\) to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log x \\) and \\( \\log y \\).',
                    workingLatex: '\\begin{array}{c|c|c|c|c} \\log x & 0.301 & 0.602 & 0.903 & 1.204 \\\\ \\log y & 1.079 & 1.531 & 1.982 & 2.433 \\end{array}',
                    explanation: 'Take \\( \\log_{10} \\) of each value.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Calculate the gradient using the first and last points.',
                    workingLatex: 'n = \\frac{2.433 - 1.079}{1.204 - 0.301} = \\frac{1.354}{0.903} \\approx 1.50',
                    explanation: 'Gradient of \\( \\log y \\) vs \\( \\log x \\) = \\( n \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intercept.',
                    workingLatex: '\\log a = 1.079 - 1.50 \\times 0.301 = 1.079 - 0.452 = 0.627',
                    explanation: 'Substitute the first point.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find \\( a \\) and \\( n \\).',
                    workingLatex: 'n \\approx 1.50, \\quad a = 10^{0.627} \\approx 4.24',
                    explanation: '\\( 10^{0.627} \\approx 4.24 \\).'
                }
            ],
            finalAnswer: '(c) \\( n \\approx 1.50 \\), \\( a \\approx 4.24 \\), so \\( y \\approx 4.24x^{1.5} \\)'
        }
    },
    {
        id: 'el6-015',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The activity \\( x \\) (Bq) of a radioactive substance at time \\( t \\) (days) satisfies \\( x = kb^t \\). The measurements are:\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline t & 10 & 20 & 40 & 80 \\\\\\hline x & 500 & 250 & 62.5 & 15.6 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Find \\( \\log_{10} x \\) for each value of \\( t \\).\n\n (b) Plot \\( \\log x \\) against \\( t \\) and draw a line of best fit.\n\n (c) Find \\( k \\) and \\( b \\). Give your answers to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log x \\) for each value.',
                    workingLatex: '\\log 500 \\approx 2.699, \\quad \\log 250 \\approx 2.398, \\quad \\log 62.5 \\approx 1.796, \\quad \\log 15.6 \\approx 1.193',
                    explanation: 'Use a calculator.'
                },
                {
                    stepNumber: 2,
                    description: '(c) Gradient using points \\( (10, 2.699) \\) and \\( (80, 1.193) \\).',
                    workingLatex: '\\log b = \\frac{1.193 - 2.699}{80 - 10} = \\frac{-1.506}{70} \\approx -0.02151',
                    explanation: 'Gradient = \\( \\log b \\); negative as this is decay.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log k \\) from the intercept.',
                    workingLatex: '\\log k = 2.699 - (-0.02151)(10) = 2.699 + 0.2151 = 2.914 \\Rightarrow k = 10^{2.914} \\approx 821',
                    explanation: 'Substitute the first point into \\( \\log x = t\\log b + \\log k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( b \\).',
                    workingLatex: 'b = 10^{-0.02151} \\approx 0.951',
                    explanation: '\\( b < 1 \\) confirms this is decay.'
                }
            ],
            finalAnswer: '(c) \\( k \\approx 821 \\), \\( b \\approx 0.951 \\)'
        }
    },
    // TYPE D (Q16–20): Using the model to predict values / find x from y
    {
        id: 'el6-016',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) gives a straight line with equation \\( \\log y = 2\\log x + 0.6 \\).\n\n (a) Find \\( y \\) when \\( x = 5 \\).\n\n (b) Find \\( x \\) when \\( y = 200 \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'First identify \\( a \\) and \\( n \\).',
                    workingLatex: 'n = 2, \\quad a = 10^{0.6} \\approx 3.98, \\quad \\text{so } y \\approx 3.98x^2',
                    explanation: 'Reading gradient and intercept from the line equation.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Substitute \\( x = 5 \\).',
                    workingLatex: 'y \\approx 3.98 \\times 25 = 99.5',
                    explanation: 'Or substitute into the log equation: \\( \\log y = 2\\log 5 + 0.6 = 2(0.699) + 0.6 = 1.998 \\Rightarrow y = 10^{1.998} \\approx 99.5 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( y = 200 \\) and solve.',
                    workingLatex: '\\log 200 = 2\\log x + 0.6 \\Rightarrow 2.301 = 2\\log x + 0.6 \\Rightarrow \\log x = \\frac{1.701}{2} = 0.8505 \\Rightarrow x = 10^{0.8505} \\approx 7.09',
                    explanation: 'Substitute \\( \\log y = \\log 200 \\) and solve for \\( \\log x \\).'
                }
            ],
            finalAnswer: '(a) \\( y \\approx 99.5 \\) \\quad (b) \\( x \\approx 7.09 \\)'
        }
    },
    {
        id: 'el6-017',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) gives the equation \\( \\log y = 0.2x + 1.3 \\).\n\n (a) Find \\( y \\) when \\( x = 3 \\).\n\n (b) Find \\( x \\) when \\( y = 1000 \\). Give your answers to 3 s.f.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( x = 3 \\).',
                    workingLatex: '\\log y = 0.2(3) + 1.3 = 0.6 + 1.3 = 1.9 \\Rightarrow y = 10^{1.9} \\approx 79.4',
                    explanation: 'Direct substitution into the linearised equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( y = 1000 \\).',
                    workingLatex: '\\log(1000) = 0.2x + 1.3 \\Rightarrow 3 = 0.2x + 1.3 \\Rightarrow 0.2x = 1.7 \\Rightarrow x = 8.5',
                    explanation: '\\( \\log 1000 = 3 \\). Solve the resulting linear equation.'
                }
            ],
            finalAnswer: '(a) \\( y \\approx 79.4 \\) \\quad (b) \\( x = 8.5 \\)'
        }
    },
    {
        id: 'el6-018',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The number of subscribers \\( S \\) to a blog after \\( t \\) weeks satisfies \\( S = at^b \\). A graph of \\( \\log S \\) against \\( \\log t \\) is a straight line passing through \\( (0.5, 2.1) \\) and \\( (1.5, 3.3) \\).\n\n (a) Find \\( a \\) and \\( b \\).\n\n (b) Predict the number of subscribers after 20 weeks.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient \\( b \\).',
                    workingLatex: 'b = \\frac{3.3 - 2.1}{1.5 - 0.5} = \\frac{1.2}{1.0} = 1.2',
                    explanation: 'Gradient = \\( n = b \\) in this model.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log a \\) using point \\( (0.5, 2.1) \\).',
                    workingLatex: '2.1 = 1.2 \\times 0.5 + \\log a \\Rightarrow \\log a = 2.1 - 0.6 = 1.5 \\Rightarrow a = 10^{1.5} \\approx 31.6',
                    explanation: 'Substitute into \\( \\log S = b\\log t + \\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Predict at \\( t = 20 \\).',
                    workingLatex: 'S = 31.6 \\times 20^{1.2} \\approx 31.6 \\times 27.11 \\approx 857',
                    explanation: '\\( 20^{1.2} \\approx 27.11 \\); evaluate using a calculator.'
                }
            ],
            finalAnswer: '(a) \\( b = 1.2 \\), \\( a \\approx 31.6 \\) \\quad (b) \\approx 857 \\text{ subscribers}'
        }
    },
    {
        id: 'el6-019',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The value £\\( V \\) of a machine \\( t \\) years after purchase satisfies \\( V = pq^t \\). A graph of \\( \\log V \\) against \\( t \\) passes through \\( (0, 4.3) \\) and \\( (10, 3.1) \\).\n\n (a) Find \\( p \\) and \\( q \\) to 3 s.f.\n\n (b) Find the value of the machine after 7 years.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Vertical intercept gives \\( \\log p \\).',
                    workingLatex: '\\log p = 4.3 \\Rightarrow p = 10^{4.3} \\approx 19\\,953',
                    explanation: 'Point \\( (0, 4.3) \\) is on the \\( \\log V \\)-axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient gives \\( \\log q \\).',
                    workingLatex: '\\log q = \\frac{3.1 - 4.3}{10 - 0} = \\frac{-1.2}{10} = -0.12 \\Rightarrow q = 10^{-0.12} \\approx 0.759',
                    explanation: 'Gradient = \\( \\log q \\); negative since this is depreciation.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( t = 7 \\).',
                    workingLatex: 'V = 19\\,953 \\times 0.759^7 \\approx 19\\,953 \\times 0.1796 \\approx £3584',
                    explanation: 'Or use \\( \\log V = -0.12(7) + 4.3 = 3.46 \\Rightarrow V = 10^{3.46} \\approx £2884 \\). Using exact values: \\( V \\approx £3584 \\).'
                }
            ],
            finalAnswer: '(a) \\( p \\approx 19\\,953 \\), \\( q \\approx 0.759 \\) \\quad (b) \\approx £3584'
        }
    },
    {
        id: 'el6-020',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The pressure \\( P \\) (Pa) and volume \\( V \\) (m³) of a gas satisfy \\( P = kV^n \\). A graph of \\( \\log P \\) against \\( \\log V \\) has gradient \\( -1.4 \\) and passes through the point \\( (0.5, 3.8) \\).\n\n (a) Find \\( k \\) and \\( n \\).\n\n (b) Find \\( P \\) when \\( V = 0.2 \\). Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient = \\( n \\).',
                    workingLatex: 'n = -1.4',
                    explanation: 'Read directly from the gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log k \\) using point \\( (0.5, 3.8) \\).',
                    workingLatex: '3.8 = -1.4(0.5) + \\log k \\Rightarrow \\log k = 3.8 + 0.7 = 4.5 \\Rightarrow k = 10^{4.5} \\approx 31\\,623',
                    explanation: 'Substitute into the linearised equation.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( V = 0.2 \\).',
                    workingLatex: '\\log P = -1.4\\log(0.2) + 4.5 = -1.4(-0.699) + 4.5 = 0.979 + 4.5 = 5.479 \\Rightarrow P = 10^{5.479} \\approx 301\\,000',
                    explanation: '\\( \\log 0.2 = \\log(1/5) = -\\log 5 \\approx -0.699 \\).'
                }
            ],
            finalAnswer: '(a) \\( n = -1.4 \\), \\( k \\approx 31\\,623 \\) \\quad (b) \\( P \\approx 301\\,000 \\) Pa'
        }
    },
    // TYPE E (Q21–24): Sketching log-linearised graphs
    {
        id: 'el6-021',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The relationship between \\( x \\) and \\( y \\) is \\( y = 5 \\times 4^x \\).\n\n (a) Show that a graph of \\( \\log y \\) against \\( x \\) will be a straight line.\n\n (b) State the gradient and vertical intercept of this straight line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log_{10} \\) of \\( y = 5 \\times 4^x \\).',
                    workingLatex: '\\log y = \\log 5 + x\\log 4',
                    explanation: 'Using the product law and power law.'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the straight-line form.',
                    workingLatex: '\\log y = (\\log 4)x + \\log 5',
                    explanation: 'This is \\( Y = mX + c \\) where \\( Y = \\log y \\) and \\( X = x \\). Since \\( m \\) and \\( c \\) are constants, this is a straight line. \\checkmark'
                },
                {
                    stepNumber: 3,
                    description: '(b) State gradient and intercept.',
                    workingLatex: '\\text{Gradient} = \\log 4 \\approx 0.602 \\qquad \\text{Intercept} = \\log 5 \\approx 0.699',
                    explanation: 'Evaluate numerically.'
                }
            ],
            finalAnswer: '(b) Gradient \\( = \\log 4 \\approx 0.602 \\); vertical intercept \\( = \\log 5 \\approx 0.699 \\)'
        }
    },
    {
        id: 'el6-022',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The height \\( h \\) (m) and mass \\( m \\) (kg) of several trees satisfy \\( h = 2m^{0.4} \\).\n\n (a) Write the equation in linear form suitable for plotting \\( \\log h \\) against \\( \\log m \\).\n\n (b) State the gradient and vertical intercept.\n\n (c) Describe the graph of \\( h \\) against \\( m \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log h = 0.4\\log m + \\log 2',
                    explanation: 'Using the power law and product law.'
                },
                {
                    stepNumber: 2,
                    description: '(b) State gradient and intercept.',
                    workingLatex: '\\text{Gradient} = 0.4 \\qquad \\text{Intercept} = \\log 2 \\approx 0.301',
                    explanation: 'Read directly from the linearised equation.'
                },
                {
                    stepNumber: 3,
                    description: '(c) The original graph \\( h = 2m^{0.4} \\) is a curve.',
                    workingLatex: 'h = 2m^{0.4} \\text{ — a power curve passing through } (1, 2)',
                    explanation: 'Since \\( 0 < n < 1 \\), the curve is concave (increasing but at a decreasing rate).'
                }
            ],
            finalAnswer: '(a) \\( \\log h = 0.4\\log m + \\log 2 \\) \\quad (b) Gradient \\( 0.4 \\); intercept \\( \\approx 0.301 \\) \\quad (c) An increasing concave power curve.'
        }
    },
    {
        id: 'el6-023',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A tank is being filled with water. After \\( s \\) seconds the height \\( h \\) mm of water satisfies \\( h = 3 \\times 2^s \\).\n\n (a) Write this in linear form for a graph of \\( \\log h \\) against \\( s \\).\n\n (b) Explain which graph — \\( h \\) against \\( s \\) or \\( \\log h \\) against \\( s \\) — is more useful for calculations.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log \\) of \\( h = 3 \\times 2^s \\).',
                    workingLatex: '\\log h = s\\log 2 + \\log 3',
                    explanation: '\\( \\log(3 \\times 2^s) = \\log 3 + s\\log 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Compare the two graphs.',
                    workingLatex: '\\log h \\text{ vs } s \\text{ is a straight line; } h \\text{ vs } s \\text{ is an exponential curve.}',
                    explanation: 'A straight line is easier to work with: gradient and intercept can be read off directly, and the line of best fit is more reliable. Reading values off a straight line is more accurate than off a curve.'
                }
            ],
            finalAnswer: '(a) \\( \\log h = s\\log 2 + \\log 3 \\) \\quad (b) The graph of \\( \\log h \\) against \\( s \\) is more useful — it is a straight line, making values and the line of best fit easier to determine.'
        }
    },
    {
        id: 'el6-024',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The population \\( p \\) of bacteria after \\( t \\) hours satisfies \\( p = 50e^{0.3t} \\).\n\n (a) Write this in linear form for a graph of \\( \\ln p \\) against \\( t \\).\n\n (b) State the gradient and vertical intercept of the straight-line graph.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\ln \\) of both sides.',
                    workingLatex: '\\ln p = \\ln(50e^{0.3t}) = \\ln 50 + 0.3t',
                    explanation: 'Using the product law: \\( \\ln(50e^{0.3t}) = \\ln 50 + \\ln(e^{0.3t}) = \\ln 50 + 0.3t \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Identify gradient and intercept.',
                    workingLatex: '\\text{Gradient} = 0.3 \\qquad \\text{Intercept} = \\ln 50 \\approx 3.91',
                    explanation: 'Gradient = coefficient of \\( t \\); intercept = \\( \\ln k \\).'
                }
            ],
            finalAnswer: '(a) \\( \\ln p = 0.3t + \\ln 50 \\) \\quad (b) Gradient \\( = 0.3 \\); intercept \\( = \\ln 50 \\approx 3.91 \\)'
        }
    },
    // TYPE F (Q25–28): Two models on the same log graph — finding intersection
    {
        id: 'el6-025',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'Two populations are modelled by \\( \\ln P \\) against \\( t \\) graphs.\n\n Population A: \\( \\ln P = 0.2t + 4 \\)\n\n Population B: \\( \\ln P = -0.1t + 7 \\)\n\n (a) Find the time \\( t \\) when the populations are equal.\n\n (b) Find the common population at this time. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The populations are equal when the lines intersect.',
                    workingLatex: '0.2t + 4 = -0.1t + 7',
                    explanation: 'Set the two expressions for \\( \\ln P \\) equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '0.3t = 3 \\Rightarrow t = 10',
                    explanation: 'Collect \\( t \\) terms and divide.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Find the common \\( \\ln P \\) and then \\( P \\).',
                    workingLatex: '\\ln P = 0.2(10) + 4 = 6 \\Rightarrow P = e^6 \\approx 403',
                    explanation: 'Substitute \\( t = 10 \\) into either equation.'
                }
            ],
            finalAnswer: '(a) \\( t = 10 \\) \\quad (b) \\( P = e^6 \\approx 403 \\)'
        }
    },
    {
        id: 'el6-026',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'Two rival blogs have subscriber counts modelled as follows (where \\( t \\) is days):\n\n Blog A (growing): \\( \\log S = 0.08t + 2 \\)\n\n Blog B (declining): \\( \\log S = -0.04t + 3.5 \\)\n\n (a) Find the number of subscribers each blog starts with.\n\n (b) Find the day on which both blogs have the same number of subscribers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\), find each initial subscriber count.',
                    workingLatex: '\\text{Blog A: } \\log S = 2 \\Rightarrow S = 100 \\qquad \\text{Blog B: } \\log S = 3.5 \\Rightarrow S = 10^{3.5} \\approx 3162',
                    explanation: 'Substitute \\( t = 0 \\) into each equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set the two equations equal.',
                    workingLatex: '0.08t + 2 = -0.04t + 3.5 \\Rightarrow 0.12t = 1.5 \\Rightarrow t = 12.5',
                    explanation: 'Equal \\( \\log S \\) values mean equal \\( S \\) values.'
                }
            ],
            finalAnswer: '(a) Blog A: 100 subscribers; Blog B: \\approx 3162 subscribers \\quad (b) Day 12.5 (i.e. during day 13)'
        }
    },
    {
        id: 'el6-027',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'Two animal populations on an island are modelled by \\( \\ln N \\) against \\( t \\) (years) graphs:\n\n Deer: \\( \\ln N = 0.15t + 5 \\)\n\n Wolves: \\( \\ln N = 0.25t + 3 \\)\n\n (a) Find the initial population of each species.\n\n (b) Find the year \\( t \\) when the wolf population overtakes the deer population.\n\n (c) Find the combined population at this point. Give your answer to the nearest whole number.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) At \\( t = 0 \\).',
                    workingLatex: '\\text{Deer: } N = e^5 \\approx 148 \\qquad \\text{Wolves: } N = e^3 \\approx 20',
                    explanation: 'Substitute \\( t = 0 \\) into each equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( \\ln N \\) values equal.',
                    workingLatex: '0.15t + 5 = 0.25t + 3 \\Rightarrow 2 = 0.1t \\Rightarrow t = 20',
                    explanation: 'The wolves overtake the deer when the lines intersect.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Find each population at \\( t = 20 \\).',
                    workingLatex: '\\ln N = 0.15(20) + 5 = 8 \\Rightarrow N = e^8 \\approx 2981',
                    explanation: 'Both models give the same \\( N \\) at the intersection.'
                },
                {
                    stepNumber: 4,
                    description: 'Combined population.',
                    workingLatex: '2 \\times e^8 \\approx 2 \\times 2981 = 5962',
                    explanation: 'Both species have the same population at the intersection.'
                }
            ],
            finalAnswer: '(a) Deer \\approx 148, Wolves \\approx 20 \\quad (b) \\( t = 20 \\) years \\quad (c) \\approx 5962'
        }
    },
    {
        id: 'el6-028',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) is a straight line passing through \\( (0.4, 1.0) \\) and \\( (1.2, 2.6) \\).\n\n (a) Find the equation of the line.\n\n (b) Hence write down the equation relating \\( y \\) and \\( x \\) in the form \\( y = ax^n \\).\n\n (c) Find \\( y \\) when \\( x = 50 \\). Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find the gradient.',
                    workingLatex: 'n = \\frac{2.6 - 1.0}{1.2 - 0.4} = \\frac{1.6}{0.8} = 2',
                    explanation: 'Gradient = \\( n \\) in \\( y = ax^n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the intercept.',
                    workingLatex: '\\log a = 1.0 - 2(0.4) = 1.0 - 0.8 = 0.2',
                    explanation: 'Substitute point \\( (0.4, 1.0) \\) into \\( \\log y = n\\log x + \\log a \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the line equation.',
                    workingLatex: '\\log y = 2\\log x + 0.2',
                    explanation: 'Straight-line equation in log form.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Convert back to original form.',
                    workingLatex: 'a = 10^{0.2} \\approx 1.58 \\Rightarrow y \\approx 1.58x^2',
                    explanation: 'Apply \\( 10^{\\square} \\) to the intercept.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( x = 50 \\).',
                    workingLatex: 'y \\approx 1.58 \\times 50^2 = 1.58 \\times 2500 = 3950',
                    explanation: 'Or use \\( \\log y = 2\\log 50 + 0.2 = 2(1.699) + 0.2 = 3.598 \\Rightarrow y = 10^{3.598} \\approx 3960 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\log y = 2\\log x + 0.2 \\) \\quad (b) \\( y \\approx 1.58x^2 \\) \\quad (c) \\( y \\approx 3950 \\)'
        }
    },
    // TYPE G (Q29–32): Limitations and interpretation
    {
        id: 'el6-029',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A model \\( y = 10 \\times 3^x \\) is used to predict the number of users \\( y \\) of a social network after \\( x \\) months.\n\n (a) Write the model in the form \\( \\log y = mx + c \\).\n\n (b) Describe one limitation of this model over a long time period.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Take \\( \\log \\) of both sides.',
                    workingLatex: '\\log y = x\\log 3 + \\log 10 = (\\log 3)x + 1',
                    explanation: '\\( \\log 10 = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Describe the limitation.',
                    workingLatex: '\\text{As } x \\to \\infty, \\; y \\to \\infty',
                    explanation: 'The model predicts unlimited user growth. In reality, the number of users is capped by the world\'s population and growth slows as the market saturates.'
                }
            ],
            finalAnswer: '(a) \\( \\log y = (\\log 3)x + 1 \\) \\quad (b) The model predicts unlimited growth, which is unrealistic — user numbers would saturate once the available population is reached.'
        }
    },
    {
        id: 'el6-030',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( \\log x \\) for a data set and obtains a straight line. They conclude the data follows \\( y = ax^n \\).\n\n Another student plots \\( \\log y \\) against \\( x \\) for the same data and also obtains a straight line. They conclude the data follows \\( y = kb^x \\).\n\n (a) Explain how both students can be correct.\n\n (b) Describe how you would distinguish between the two models experimentally.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Both linearisations can sometimes give approximate straight lines for finite data sets with noise.',
                    workingLatex: '\\text{If } y = ax^n: \\log y = n\\log x + \\log a \\qquad \\text{If } y = kb^x: \\log y = x\\log b + \\log k',
                    explanation: 'For limited data ranges, either model might appear linear.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Plot both graphs and assess goodness of fit.',
                    workingLatex: '\\text{Plot } \\log y \\text{ vs } \\log x \\text{ AND } \\log y \\text{ vs } x; \\text{ the better straight line identifies the model.}',
                    explanation: 'The model whose linearised graph fits the data more closely (e.g. has points closer to the line of best fit) is the more appropriate model. The residuals should be examined.'
                }
            ],
            finalAnswer: '(a) With limited data, both transforms may approximate a straight line. (b) Plot both linearised graphs and choose the one whose points lie closer to a straight line of best fit.'
        }
    },
    // TYPE H (Q31–35): Exam-style multi-part questions
    {
        id: 'el6-031',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The number of employees \\( p \\) in a company \\( t \\) years after it was founded is modelled by \\( p = at^b \\). The table of values below is given:\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|c|}\\hline t & 2 & 5 & 10 & 20 & 40 \\\\\\hline p & 15 & 28 & 45 & 72 & 114 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Copy and complete a table of \\( \\log t \\) and \\( \\log p \\) values to 3 d.p.\n\n (b) Plot a linear graph and draw a line of best fit.\n\n (c) Find the values of \\( a \\) and \\( b \\).\n\n (d) Predict the number of employees after 60 years.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log t \\) and \\( \\log p \\).',
                    workingLatex: '\\begin{array}{c|c|c|c|c|c} \\log t & 0.301 & 0.699 & 1.000 & 1.301 & 1.602 \\\\ \\log p & 1.176 & 1.447 & 1.653 & 1.857 & 2.057 \\end{array}',
                    explanation: 'Take \\( \\log_{10} \\) of each value of \\( t \\) and \\( p \\).'
                },
                {
                    stepNumber: 2,
                    description: '(c) Gradient using first and last points.',
                    workingLatex: 'b = \\frac{2.057 - 1.176}{1.602 - 0.301} = \\frac{0.881}{1.301} \\approx 0.677',
                    explanation: 'Gradient = \\( b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\).',
                    workingLatex: '\\log a = 1.176 - 0.677(0.301) = 1.176 - 0.204 = 0.972 \\Rightarrow a = 10^{0.972} \\approx 9.38',
                    explanation: 'Substitute the first data point.'
                },
                {
                    stepNumber: 4,
                    description: '(d) Predict at \\( t = 60 \\).',
                    workingLatex: 'p = 9.38 \\times 60^{0.677} \\approx 9.38 \\times 13.55 \\approx 127',
                    explanation: '\\( 60^{0.677} \\approx 13.55 \\); evaluate using a calculator.'
                }
            ],
            finalAnswer: '(c) \\( b \\approx 0.677 \\), \\( a \\approx 9.38 \\) \\quad (d) \\approx 127 \\text{ employees}'
        }
    },
    {
        id: 'el6-032',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The value £\\( V \\) of a piece of equipment \\( t \\) years old is modelled by \\( V = pq^t \\). A graph of \\( \\log V \\) against \\( t \\) has gradient \\( -\\frac{1}{5} \\) and passes through \\( (0, 4) \\).\n\n (a) Find \\( p \\) and \\( q \\) to 3 s.f.\n\n (b) Find the age at which the equipment is worth less than £1000.\n\n (c) Write an equation for the linear graph and state the axes that should be plotted.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Vertical intercept gives \\( \\log p \\).',
                    workingLatex: '\\log p = 4 \\Rightarrow p = 10^4 = 10\\,000',
                    explanation: 'The intercept of \\( \\log V \\) axis.'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient gives \\( \\log q \\).',
                    workingLatex: '\\log q = -0.2 \\Rightarrow q = 10^{-0.2} \\approx 0.631',
                    explanation: 'Gradient = \\( \\log q \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( V = 1000 \\) and use the linear graph.',
                    workingLatex: '\\log(1000) = -0.2t + 4 \\Rightarrow 3 = -0.2t + 4 \\Rightarrow 0.2t = 1 \\Rightarrow t = 5',
                    explanation: 'Substitute \\( \\log V = 3 \\) into the line equation.'
                },
                {
                    stepNumber: 4,
                    description: '(c) The linear equation.',
                    workingLatex: '\\log V = -0.2t + 4 \\quad \\text{Plot } \\log V \\text{ against } t',
                    explanation: 'Plot \\( \\log_{10} V \\) on the vertical axis and \\( t \\) on the horizontal axis.'
                }
            ],
            finalAnswer: '(a) \\( p = 10\\,000 \\), \\( q \\approx 0.631 \\) \\quad (b) After \\( t = 5 \\) years \\quad (c) \\( \\log V = -0.2t + 4 \\); plot \\( \\log V \\) against \\( t \\)'
        }
    },
    {
        id: 'el6-033',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The number of bacteria \\( p \\) (in thousands) in a petri dish after \\( t \\) days satisfies \\( p = at^b \\). Observations give:\n\n\n\n \\(\\begin{array}{|c|c|c|c|c|}\\hline t & 1 & 3 & 6 & 9 \\\\\\hline p & 2 & 14 & 44 & 88 \\\\\\hline\\end{array}\\)\n\n\n\n (a) Plot a linear graph of \\( \\log p \\) against \\( \\log t \\) using the data.\n\n (b) Find \\( a \\) and \\( b \\) to 3 s.f.\n\n (c) Predict the number of bacteria after 15 days.\n\n (d) Describe one reason why the model may not be appropriate after many days.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( \\log t \\) and \\( \\log p \\).',
                    workingLatex: '\\begin{array}{c|c|c|c|c} \\log t & 0 & 0.477 & 0.778 & 0.954 \\\\ \\log p & 0.301 & 1.146 & 1.643 & 1.944 \\end{array}',
                    explanation: 'Take \\( \\log_{10} \\) of each value.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Gradient using first and last points.',
                    workingLatex: 'b = \\frac{1.944 - 0.301}{0.954 - 0} = \\frac{1.643}{0.954} \\approx 1.72',
                    explanation: 'Gradient = \\( b \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\) at \\( \\log t = 0 \\).',
                    workingLatex: '\\log a = 0.301 \\Rightarrow a = 10^{0.301} \\approx 2.00',
                    explanation: 'When \\( \\log t = 0 \\) (i.e. \\( t = 1 \\)), \\( \\log p = \\log a \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Predict at \\( t = 15 \\).',
                    workingLatex: 'p = 2.00 \\times 15^{1.72} \\approx 2.00 \\times 108 \\approx 216 \\text{ thousand}',
                    explanation: '\\( 15^{1.72} \\approx 108 \\); evaluate using a calculator.'
                },
                {
                    stepNumber: 5,
                    description: '(d) Describe a limitation.',
                    workingLatex: 'p \\to \\infty \\text{ as } t \\to \\infty',
                    explanation: 'Nutrients in the petri dish would eventually be exhausted, limiting growth. The model ignores resource constraints.'
                }
            ],
            finalAnswer: '(b) \\( b \\approx 1.72 \\), \\( a \\approx 2.00 \\) \\quad (c) \\approx 216\\,000 \\text{ bacteria} \\quad (d) Nutrient depletion would slow/stop growth — the model allows unlimited increase.'
        }
    },
    {
        id: 'el6-034',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'A scientist measures the speed \\( v \\) (m/s) of a chemical reaction at temperature \\( T \\) (K). She believes \\( v = aT^n \\). A graph of \\( \\log v \\) against \\( \\log T \\) gives a straight line with equation \\( \\log v = 2.5\\log T - 5.4 \\).\n\n (a) Find \\( a \\) and \\( n \\) to 3 s.f.\n\n (b) Find \\( v \\) when \\( T = 400 \\) K.\n\n (c) Find \\( T \\) when \\( v = 80 \\). Give your answer to 3 s.f.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Read off \\( n \\) and find \\( a \\).',
                    workingLatex: 'n = 2.5 \\qquad \\log a = -5.4 \\Rightarrow a = 10^{-5.4} \\approx 3.98 \\times 10^{-6}',
                    explanation: 'Gradient = \\( n \\); intercept = \\( \\log a \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute \\( T = 400 \\).',
                    workingLatex: '\\log v = 2.5\\log(400) - 5.4 = 2.5(2.602) - 5.4 = 6.505 - 5.4 = 1.105 \\Rightarrow v = 10^{1.105} \\approx 12.7 \\text{ m/s}',
                    explanation: '\\( \\log 400 \\approx 2.602 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Set \\( v = 80 \\) and solve.',
                    workingLatex: '\\log 80 = 2.5\\log T - 5.4 \\Rightarrow 1.903 = 2.5\\log T - 5.4 \\Rightarrow 2.5\\log T = 7.303 \\Rightarrow \\log T = 2.921 \\Rightarrow T = 10^{2.921} \\approx 834 \\text{ K}',
                    explanation: '\\( \\log 80 \\approx 1.903 \\). Solve for \\( \\log T \\) then apply \\( 10^{\\square} \\).'
                }
            ],
            finalAnswer: '(a) \\( n = 2.5 \\), \\( a \\approx 3.98 \\times 10^{-6} \\) \\quad (b) \\( v \\approx 12.7 \\) m/s \\quad (c) \\( T \\approx 834 \\) K'
        }
    },
    {
        id: 'el6-035',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs',
        difficulty: 'Foundation',
        questionText: 'The populations (in thousands) of rabbits \\( R \\) and foxes \\( F \\) on an island are modelled by straight-line graphs of \\( \\ln N \\) against \\( t \\) (years):\n\n Rabbits: \\( \\ln R = -0.08t + 8 \\)\n\n Foxes: \\( \\ln F = 0.12t + 4 \\)\n\n (a) Find the initial population of each species. Give your answers to 3 s.f.\n\n (b) Find the year \\( t \\) when both populations are equal.\n\n (c) Find the combined population at this time. Give your answer to 3 s.f.\n\n (d) Explain why the rabbit model may not be appropriate for large \\( t \\).',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Initial populations at \\( t = 0 \\).',
                    workingLatex: '\\ln R = 8 \\Rightarrow R = e^8 \\approx 2981 \\text{ thousand} \\qquad \\ln F = 4 \\Rightarrow F = e^4 \\approx 54.6 \\text{ thousand}',
                    explanation: 'Substitute \\( t = 0 \\) into each equation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set the two \\( \\ln N \\) expressions equal.',
                    workingLatex: '-0.08t + 8 = 0.12t + 4 \\Rightarrow 4 = 0.2t \\Rightarrow t = 20',
                    explanation: 'Equal \\( \\ln N \\) values imply equal \\( N \\) values.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Find the common population at \\( t = 20 \\).',
                    workingLatex: '\\ln N = -0.08(20) + 8 = -1.6 + 8 = 6.4 \\Rightarrow N = e^{6.4} \\approx 601 \\text{ thousand}',
                    explanation: 'Substitute \\( t = 20 \\) into either equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Combined population.',
                    workingLatex: '2 \\times 601 \\approx 1202 \\text{ thousand} \\approx 1\\,200\\,000',
                    explanation: 'Both populations are equal at this point.'
                },
                {
                    stepNumber: 5,
                    description: '(d) Limitation of the rabbit model.',
                    workingLatex: '\\text{As } t \\to \\infty, \\; \\ln R \\to -\\infty, \\text{ so } R \\to 0',
                    explanation: 'The model predicts the rabbit population tends to zero. In reality, if foxes decline too, the rabbits might recover. The model ignores predator–prey interactions and other ecological factors.'
                }
            ],
            finalAnswer: '(a) Rabbits \\approx 2\\,981\\,000; Foxes \\approx 54\\,600 \\quad (b) \\( t = 20 \\) years \\quad (c) \\approx 1\\,202\\,000 \\quad (d) The model predicts \\( R \\to 0 \\), which may be unrealistic — it ignores ecological interactions that could allow recovery.'
        }
    },

    // ─── Q36–70: Additional Using Logarithmic Graphs ──────────────────────

    {
        id: 'el6-036', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) is a straight line with gradient 2 and y-intercept 0.5. Write down the equation connecting \\( y \\) and \\( x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line equation', workingLatex: '\\log y = 2\\log x + 0.5', explanation: '' },
            { stepNumber: 2, description: 'Convert', workingLatex: '\\log y = \\log x^2 + \\log 10^{0.5} \\implies y = \\sqrt{10} \\cdot x^2 \\approx 3.16x^2', explanation: '' }
        ], finalAnswer: 'y = \\sqrt{10} \\cdot x^2' }
    },
    {
        id: 'el6-037', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) is a straight line with gradient 0.2 and y-intercept 1. Find \\( k \\) and \\( b \\) in \\( y = kb^x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line equation', workingLatex: '\\log y = 0.2x + 1', explanation: '' },
            { stepNumber: 2, description: 'Convert', workingLatex: 'k = 10^1 = 10; \\quad b = 10^{0.2} \\approx 1.585', explanation: '' }
        ], finalAnswer: 'k = 10, b = 1.585' }
    },
    {
        id: 'el6-038', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Explain why plotting \\( \\log y \\) against \\( \\log x \\) for data following \\( y = ax^n \\) gives a straight line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides', workingLatex: '\\log y = \\log(ax^n) = \\log a + n\\log x', explanation: '' },
            { stepNumber: 2, description: 'This is linear', workingLatex: '\\log y = n\\log x + \\log a', explanation: 'Compare with Y = mX + c where Y = log y, X = log x, m = n, c = log a.' }
        ], finalAnswer: 'Linear form: log y = n log x + log a; gradient n, intercept log a' }
    },
    {
        id: 'el6-039', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Explain why plotting \\( \\log y \\) against \\( x \\) for data following \\( y = kb^x \\) gives a straight line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = \\log k + x\\log b', explanation: '' },
            { stepNumber: 2, description: 'Linear in x', workingLatex: '\\text{Gradient} = \\log b, \\quad \\text{intercept} = \\log k', explanation: '' }
        ], finalAnswer: 'Linear form: log y = (log b)x + log k' }
    },
    {
        id: 'el6-040', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln y \\) against \\( x \\) has gradient 0.5 and passes through \\( (0, 2) \\). Find the equation in the form \\( y = ke^{cx} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Line equation', workingLatex: '\\ln y = 0.5x + 2', explanation: '' },
            { stepNumber: 2, description: 'Exponentiate', workingLatex: 'y = e^{0.5x + 2} = e^2 \\cdot e^{0.5x} \\approx 7.39e^{0.5x}', explanation: '' }
        ], finalAnswer: 'y = e^2 \\cdot e^{0.5x}; k = e^2, c = 0.5' }
    },
    {
        id: 'el6-041', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) passes through \\( (0.5, 1.2) \\) and \\( (2.0, 3.0) \\). Find \\( a \\) and \\( n \\) in \\( y = ax^n \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: 'n = \\frac{3.0 - 1.2}{2.0 - 0.5} = \\frac{1.8}{1.5} = 1.2', explanation: '' },
            { stepNumber: 2, description: 'Find log a', workingLatex: '1.2 = 1.2(0.5) + \\log a \\implies \\log a = 0.6 \\implies a = 10^{0.6} = 3.98', explanation: '' }
        ], finalAnswer: 'n = 1.2, a = 3.98' }
    },
    {
        id: 'el6-042', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) passes through \\( (0, 1.5) \\) and \\( (4, 3.5) \\). Find \\( k \\) and \\( b \\) in \\( y = kb^x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient', workingLatex: '\\log b = \\frac{3.5 - 1.5}{4} = 0.5 \\implies b = 10^{0.5} = \\sqrt{10} \\approx 3.16', explanation: '' },
            { stepNumber: 2, description: 'k from intercept', workingLatex: 'k = 10^{1.5} \\approx 31.6', explanation: '' }
        ], finalAnswer: 'k = 31.6, b = 3.16' }
    },
    {
        id: 'el6-043', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Data: \\( x = 2, y = 20 \\); \\( x = 5, y = 125 \\). Verify these satisfy \\( y = ax^n \\) and find \\( a \\) and \\( n \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs', workingLatex: '\\log 20 = 1.301, \\log 2 = 0.301; \\quad \\log 125 = 2.097, \\log 5 = 0.699', explanation: '' },
            { stepNumber: 2, description: 'Gradient', workingLatex: 'n = \\frac{2.097 - 1.301}{0.699 - 0.301} = \\frac{0.796}{0.398} = 2.0', explanation: '' },
            { stepNumber: 3, description: 'Find a', workingLatex: '\\log a = 1.301 - 2(0.301) = 0.699 \\implies a = 5', explanation: '' }
        ], finalAnswer: 'y = 5x^2' }
    },
    {
        id: 'el6-044', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Data: \\( x = 1, y = 6 \\); \\( x = 3, y = 54 \\). These satisfy \\( y = kb^x \\). Find \\( k \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equations', workingLatex: '6 = kb; \\quad 54 = kb^3', explanation: '' },
            { stepNumber: 2, description: 'Divide', workingLatex: '\\frac{54}{6} = b^2 \\implies b = 3', explanation: '' },
            { stepNumber: 3, description: 'Find k', workingLatex: 'k = \\frac{6}{3} = 2', explanation: '' }
        ], finalAnswer: 'k = 2, b = 3; y = 2 \\times 3^x' }
    },
    {
        id: 'el6-045', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'The equation \\( \\log y = 0.3x + 1.2 \\) relates \\( x \\) and \\( y \\). Find \\( y \\) when \\( x = 5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '\\log y = 0.3(5) + 1.2 = 2.7', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 10^{2.7} = 501', explanation: '' }
        ], finalAnswer: 'y = 501' }
    },
    {
        id: 'el6-046', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'The equation \\( \\log y = 1.5\\log x + 0.8 \\) relates \\( x \\) and \\( y \\). Find \\( y \\) when \\( x = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '\\log y = 1.5\\log 4 + 0.8 = 1.5(0.602) + 0.8 = 1.703', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 10^{1.703} = 50.4', explanation: '' }
        ], finalAnswer: 'y = 50.4' }
    },
    {
        id: 'el6-047', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Given \\( \\ln y = 2x + 3 \\), express \\( y \\) in the form \\( y = Ae^{Bx} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate', workingLatex: 'y = e^{2x+3} = e^3 \\cdot e^{2x}', explanation: '' }
        ], finalAnswer: 'y = e^3 e^{2x}; A = e^3, B = 2' }
    },
    {
        id: 'el6-048', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A straight line on a \\( \\log y \\) vs \\( \\log x \\) graph has equation \\( \\log y = -2\\log x + 3 \\). Write \\( y \\) as a function of \\( x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Convert', workingLatex: '\\log y = \\log x^{-2} + \\log 10^3 = \\log\\frac{1000}{x^2}', explanation: '' }
        ], finalAnswer: 'y = 1000/x^2' }
    },
    {
        id: 'el6-049', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 3 \\times 2^x \\) is plotted as \\( \\log y \\) against \\( x \\). Find the gradient and y-intercept of the resulting line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = \\log 3 + x\\log 2 = 0.477 + 0.301x', explanation: '' }
        ], finalAnswer: 'Gradient = 0.301, y-intercept = 0.477' }
    },
    {
        id: 'el6-050', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 5x^3 \\) is plotted as \\( \\log y \\) against \\( \\log x \\). Find the gradient and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = 3\\log x + \\log 5 = 3\\log x + 0.699', explanation: '' }
        ], finalAnswer: 'Gradient = 3, y-intercept = 0.699' }
    },
    {
        id: 'el6-051', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( \\log x \\) and gets gradient 0.5 and intercept 1. What is the relationship?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Form equation', workingLatex: '\\log y = 0.5\\log x + 1 \\implies y = 10 \\cdot x^{0.5} = 10\\sqrt{x}', explanation: '' }
        ], finalAnswer: 'y = 10 sqrt(x)' }
    },
    {
        id: 'el6-052', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( x \\) and gets a straight line. Another plots \\( \\log y \\) against \\( \\log x \\) and gets a curve. What type of relationship does the data follow?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Analyse', workingLatex: 'y = kb^x', explanation: 'Straight line on log y vs x means exponential relationship, not power.' }
        ], finalAnswer: 'Exponential: y = kb^x' }
    },
    {
        id: 'el6-053', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Given the line \\( \\log y = -0.5\\log x + 2 \\), find \\( x \\) when \\( y = 50 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '\\log 50 = -0.5\\log x + 2 \\implies 1.699 = -0.5\\log x + 2', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '\\log x = \\frac{2 - 1.699}{0.5} = 0.602 \\implies x = 4', explanation: '' }
        ], finalAnswer: 'x = 4' }
    },
    {
        id: 'el6-054', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Given \\( \\log y = 0.4x + 0.8 \\), find \\( x \\) when \\( y = 1000 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute', workingLatex: '3 = 0.4x + 0.8 \\implies x = \\frac{2.2}{0.4} = 5.5', explanation: 'log 1000 = 3.' }
        ], finalAnswer: 'x = 5.5' }
    },
    {
        id: 'el6-055', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'The speed \\( v \\) and distance \\( d \\) of planets satisfy \\( v = kd^n \\). A plot of \\( \\log v \\) against \\( \\log d \\) gives gradient \\( -0.5 \\) and intercept \\( 2.1 \\). Find \\( k \\) and \\( n \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off', workingLatex: 'n = -0.5; \\quad k = 10^{2.1} = 126', explanation: '' }
        ], finalAnswer: 'n = -0.5, k = 126' }
    },
    {
        id: 'el6-056', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 4e^{-0.3x} \\) is plotted as \\( \\ln y \\) against \\( x \\). State the gradient and intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln', workingLatex: '\\ln y = \\ln 4 - 0.3x = -0.3x + 1.386', explanation: '' }
        ], finalAnswer: 'Gradient = -0.3, intercept = ln 4 = 1.386' }
    },
    {
        id: 'el6-057', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Two points on a \\( \\ln y \\) vs \\( x \\) graph are \\( (2, 3.4) \\) and \\( (8, 6.4) \\). Find \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Gradient c', workingLatex: 'c = \\frac{6.4 - 3.4}{8 - 2} = 0.5', explanation: '' },
            { stepNumber: 2, description: 'Find ln k', workingLatex: '3.4 = 0.5(2) + \\ln k \\implies \\ln k = 2.4 \\implies k = e^{2.4} = 11.0', explanation: '' }
        ], finalAnswer: 'k = 11.0, c = 0.5' }
    },
    {
        id: 'el6-058', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A decay process has data: \\( t = 0, y = 100 \\); \\( t = 10, y = 37 \\). Find the equation \\( y = Ae^{-kt} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'A = 100 (from t=0)', workingLatex: 'A = 100', explanation: '' },
            { stepNumber: 2, description: 'Find k', workingLatex: '37 = 100e^{-10k} \\implies k = \\frac{-\\ln 0.37}{10} = 0.0994', explanation: '' }
        ], finalAnswer: 'y = 100e^{-0.0994t}' }
    },
    {
        id: 'el6-059', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Which graph type would you plot to test if data follows: (a) \\( y = ax^n \\); (b) \\( y = kb^x \\); (c) \\( y = ke^{cx} \\)?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify', workingLatex: '(a) \\log y \\text{ vs } \\log x; \\quad (b) \\log y \\text{ vs } x; \\quad (c) \\ln y \\text{ vs } x', explanation: '' }
        ], finalAnswer: '(a) log y vs log x; (b) log y vs x; (c) ln y vs x' }
    },
    {
        id: 'el6-060', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) gives gradient 3 and passes through \\( (1, 2) \\). Find the equation and evaluate \\( y \\) when \\( x = 10 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equation', workingLatex: '\\log y = 3\\log x + c; \\quad 2 = 3(1) + c \\implies c = -1', explanation: '' },
            { stepNumber: 2, description: 'So y = 0.1x^3', workingLatex: 'x = 10: y = 0.1 \\times 1000 = 100', explanation: '' }
        ], finalAnswer: 'y = 0.1x^3; y(10) = 100' }
    },
    {
        id: 'el6-061', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Convert \\( y = 7 \\times 5^x \\) into the form \\( \\log y = mx + c \\) and state \\( m \\) and \\( c \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = x\\log 5 + \\log 7 = 0.699x + 0.845', explanation: '' }
        ], finalAnswer: 'm = 0.699, c = 0.845' }
    },
    {
        id: 'el6-062', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Convert \\( y = 8x^{2.5} \\) into the form \\( \\log y = n\\log x + \\log a \\) and state \\( n \\) and \\( \\log a \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log', workingLatex: '\\log y = 2.5\\log x + \\log 8 = 2.5\\log x + 0.903', explanation: '' }
        ], finalAnswer: 'n = 2.5, log a = 0.903' }
    },
    {
        id: 'el6-063', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'The line \\( \\log y = 2\\log x + 0.3 \\) intersects the line \\( \\log y = 3 \\). Find the value of \\( x \\) at the intersection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equal', workingLatex: '3 = 2\\log x + 0.3 \\implies \\log x = 1.35 \\implies x = 22.4', explanation: '' }
        ], finalAnswer: 'x = 22.4' }
    },
    {
        id: 'el6-064', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log P \\) against \\( \\log V \\) for a gas gives a straight line with gradient \\( -1.4 \\) and intercept 2.5. Find \\( P \\) when \\( V = 10 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Equation', workingLatex: '\\log P = -1.4\\log 10 + 2.5 = -1.4 + 2.5 = 1.1', explanation: '' },
            { stepNumber: 2, description: 'Find P', workingLatex: 'P = 10^{1.1} = 12.6', explanation: '' }
        ], finalAnswer: 'P = 12.6' }
    },
    {
        id: 'el6-065', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) has equation \\( \\log y = -0.15x + 4 \\). Find the half-life (when y = half initial value).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Initial value at x=0', workingLatex: '\\log y_0 = 4 \\implies y_0 = 10000', explanation: '' },
            { stepNumber: 2, description: 'Half value', workingLatex: '\\log 5000 = -0.15x + 4 \\implies 3.699 = -0.15x + 4 \\implies x = 2.01', explanation: '' }
        ], finalAnswer: 'Half-life = 2.01 units' }
    },
    {
        id: 'el6-066', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Show that \\( y = 2x^3 \\) and \\( y = 8x \\) intersect when \\( x = 2 \\) by using logarithmic methods.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both', workingLatex: '\\log 2 + 3\\log x = \\log 8 + \\log x', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '2\\log x = \\log 4 \\implies \\log x = \\log 2 \\implies x = 2', explanation: '' }
        ], finalAnswer: 'x = 2 (verified)' }
    },
    {
        id: 'el6-067', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'The time \\( t \\) (s) for a pendulum to swing depends on length \\( l \\) (m): \\( t = al^n \\). A plot of \\( \\log t \\) vs \\( \\log l \\) gives gradient 0.5 and intercept 0.3. Find \\( a \\) and \\( n \\), and find \\( t \\) when \\( l = 4 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Read off', workingLatex: 'n = 0.5, \\quad a = 10^{0.3} = 2.0', explanation: '' },
            { stepNumber: 2, description: 'Find t at l=4', workingLatex: 't = 2\\sqrt{4} = 4 \\text{ s}', explanation: '' }
        ], finalAnswer: 'a = 2, n = 0.5; t(4) = 4 s' }
    },
    {
        id: 'el6-068', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln N \\) against \\( t \\) has equation \\( \\ln N = 0.2t + 5 \\). Find: (a) the initial value; (b) the doubling time.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) t = 0', workingLatex: '\\ln N = 5 \\implies N = e^5 = 148.4', explanation: '' },
            { stepNumber: 2, description: '(b) When N doubles', workingLatex: '\\ln(2N_0) = 0.2t + 5 \\implies \\ln 2 = 0.2(t - 0) \\implies t = \\frac{\\ln 2}{0.2} = 3.47', explanation: '' }
        ], finalAnswer: '(a) 148.4 (b) 3.47 time units' }
    },
    {
        id: 'el6-069', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'Two models are proposed for data: Model A \\( y = ax^n \\) and Model B \\( y = kb^x \\). Plotting \\( \\log y \\) vs \\( \\log x \\) gives a curve but \\( \\log y \\) vs \\( x \\) gives a line. Which model fits?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Analysis', workingLatex: '\\text{Model B fits: } y = kb^x', explanation: 'Straight line on log y vs x means exponential.' }
        ], finalAnswer: 'Model B: y = kb^x' }
    },
    {
        id: 'el6-070', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) passes through \\( (0, 1.5) \\) and \\( (2, 4.5) \\). Find the equation \\( y = ax^n \\), then find: (a) \\( y \\) when \\( x = 100 \\); (b) \\( x \\) when \\( y = 1000 \\).',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find n', workingLatex: 'n = \\frac{4.5 - 1.5}{2 - 0} = 1.5', explanation: '' },
            { stepNumber: 2, description: 'Find a', workingLatex: '\\log a = 1.5 \\implies a = 10^{1.5} \\approx 31.6', explanation: '' },
            { stepNumber: 3, description: '(a) x = 100', workingLatex: 'y = 31.6 \\times 100^{1.5} = 31.6 \\times 1000 = 31600', explanation: '' },
            { stepNumber: 4, description: '(b) y = 1000', workingLatex: '1000 = 31.6x^{1.5} \\implies x^{1.5} = 31.6 \\implies x = 31.6^{2/3} = 10.0', explanation: '' }
        ], finalAnswer: 'y = 31.6x^{1.5}; (a) 31600 (b) x = 10' }
    },
];
