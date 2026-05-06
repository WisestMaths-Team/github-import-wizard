import { Question } from "@/lib/types";

/** Helper: sample a function to generate curve points for CurveDiagramConfig */
function sample(f: (x: number) => number, xMin: number, xMax: number, n = 80): Array<[number, number]> {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i < n; i++) {
        const x = xMin + (i / (n - 1)) * (xMax - xMin);
        const y = f(x);
        if (isFinite(y)) pts.push([x, y]);
    }
    return pts;
}

/**
 * Topic: Using Logarithmic Graphs
 * Ref:   el6
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
        topicTitle: 'Using Logarithmic Graphs 01',
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
                    explanation: 'We apply \\( \\log_{10} \\) to both sides of the equation so that we can use logarithm laws to bring the power \\( n \\) down.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the product law and power law.',
                    workingLatex: '\\log y = \\log a + \\log(x^n) = \\log a + n\\log x',
                    explanation: 'The product law gives \\( \\log(ax^n) = \\log a + \\log(x^n) \\), and the power law gives \\( \\log(x^n) = n\\log x \\). Combining yields \\( \\log y = \\log a + n\\log x \\).'
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
        topicTitle: 'Using Logarithmic Graphs 02',
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
                    explanation: 'For \\( y = ax^n \\), the linearised form is \\( \\log y = n\\log x + \\log a \\), so the gradient of the straight line equals \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept equals \\( \\log a \\).',
                    workingLatex: '\\log a = 0.5',
                    explanation: 'The vertical intercept of the graph of \\( \\log y \\) against \\( \\log x \\) corresponds to \\( \\log a \\) in the linearised equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( a \\) by raising 10 to the power 0.5.',
                    workingLatex: 'a = 10^{0.5} = \\sqrt{10} \\approx 3.16',
                    explanation: 'Since \\( \\log a = 0.5 \\), we apply the inverse operation \\( 10^{0.5} \\) to obtain \\( a \\approx 3.16 \\).',
                    diagram: {
                        xMin: -0.5, xMax: 2.5, yMin: -1, yMax: 8,
                        xLabel: '\\log x', yLabel: '\\log y',
                        xTicks: [0, 0.5, 1, 1.5, 2],
                        yTicks: [0, 2, 4, 6, 8],
                        curves: [{ points: sample(x => 3*x + 0.5, -0.3, 2.3), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [0, 0.5], label: '(0, 0.5)', labelAnchor: 'e', color: '#d4775c' }
                        ],
                        lines: [{ from: [0.3, 1.4], to: [1.3, 4.4], color: '#888', dashed: true, label: 'gradient = 3', labelAt: [1.4, 3] }]
                    }
                }
            ],
            finalAnswer: '\\( n = 3 \\), \\( a = 10^{0.5} \\approx 3.16 \\)'
        }
    },
    {
        id: 'el6-003',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 03',
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
                    description: 'Write the linearised form of \\( y = ax^n \\).',
                    workingLatex: '\\log y = n\\log x + \\log a',
                    explanation: 'Taking \\( \\log_{10} \\) of both sides of \\( y = ax^n \\) gives a straight-line equation in \\( \\log y \\) against \\( \\log x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient of the straight line.',
                    workingLatex: 'n = \\frac{3.2 - 1.2}{2 - 0} = \\frac{2.0}{2} = 1',
                    explanation: 'Using the two given points, the gradient equals the change in \\( \\log y \\) divided by the change in \\( \\log x \\), which gives \\( n \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Read off \\( \\log a \\) from the vertical intercept.',
                    workingLatex: '\\log a = 1.2',
                    explanation: 'The point \\( (0, 1.2) \\) lies on the \\( \\log y \\)-axis (where \\( \\log x = 0 \\)), so the intercept is \\( \\log a = 1.2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( a \\).',
                    workingLatex: 'a = 10^{1.2} \\approx 15.8',
                    explanation: 'Raising 10 to the power 1.2 gives \\( a \\approx 15.8 \\).'
                }
            ],
            finalAnswer: '\\( n = 1 \\), \\( a \\approx 15.8 \\)'
        }
    },
    {
        id: 'el6-004',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 04',
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
                    description: 'Write the linearised equation.',
                    workingLatex: '\\log y = n\\log x + \\log a',
                    explanation: 'For \\( y = ax^n \\), taking \\( \\log_{10} \\) of both sides gives a linear relation between \\( \\log y \\) and \\( \\log x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the gradient \\( n \\).',
                    workingLatex: 'n = \\frac{4.0 - 2.6}{3 - 1} = \\frac{1.4}{2} = 0.7',
                    explanation: 'The gradient equals the change in \\( \\log y \\) divided by the change in \\( \\log x \\), using the two given points.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\) using point \\( (1, 2.6) \\).',
                    workingLatex: '\\log a = 2.6 - 0.7 \\times 1 = 1.9',
                    explanation: 'Substituting \\( \\log x = 1 \\) and \\( \\log y = 2.6 \\) into \\( \\log y = n\\log x + \\log a \\) and rearranging gives \\( \\log a = 1.9 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( a \\).',
                    workingLatex: 'a = 10^{1.9} \\approx 79.4',
                    explanation: 'Raising 10 to the power 1.9 gives \\( a \\approx 79.4 \\) to 3 significant figures.'
                }
            ],
            finalAnswer: '\\( n = 0.7 \\), \\( a \\approx 79.4 \\)'
        }
    },
    {
        id: 'el6-005',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 05',
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
                    description: 'Convert the data to \\( \\log x \\) and \\( \\log y \\).',
                    workingLatex: '\\log 4 \\approx 0.602, \\; \\log 24 \\approx 1.380 \\qquad \\log 25 \\approx 1.398, \\; \\log 375 \\approx 2.574',
                    explanation: 'Taking \\( \\log_{10} \\) of the \\( x \\) and \\( y \\) values for two data points that will be used to find the gradient.'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the gradient \\( n \\).',
                    workingLatex: 'n = \\frac{2.574 - 1.380}{1.398 - 0.602} = \\frac{1.194}{0.796} \\approx 1.50',
                    explanation: 'The gradient of \\( \\log y \\) against \\( \\log x \\) equals \\( n \\). Using the first and last points gives the most accurate estimate.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log a \\) by substituting a point.',
                    workingLatex: '\\log a = 1.380 - 1.50 \\times 0.602 = 1.380 - 0.903 = 0.477',
                    explanation: 'Substituting \\( (\\log 4, \\log 24) = (0.602, 1.380) \\) into \\( \\log y = n\\log x + \\log a \\) and rearranging for \\( \\log a \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( a \\).',
                    workingLatex: 'a = 10^{0.477} \\approx 3',
                    explanation: 'Raising 10 to the power 0.477 gives \\( a \\approx 3 \\), so the relationship is \\( y = 3x^{1.5} \\).',
                    diagram: {
                        xMin: 0, xMax: 1.6, yMin: 0, yMax: 3,
                        xLabel: '\\log x', yLabel: '\\log y',
                        xTicks: [0, 0.4, 0.8, 1.2, 1.6],
                        yTicks: [0, 1, 2, 3],
                        curves: [{ points: sample(x => 1.5*x + 0.477, 0, 1.5), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [0.602, 1.380], label: '(0.60, 1.38)', labelAnchor: 'n', color: '#d4775c' },
                            { at: [0.954, 1.908], label: '(0.95, 1.91)', labelAnchor: 'n', color: '#d4775c' },
                            { at: [1.204, 2.283], label: '(1.20, 2.28)', labelAnchor: 'n', color: '#d4775c' },
                            { at: [1.398, 2.574], label: '(1.40, 2.57)', labelAnchor: 'n', color: '#d4775c' }
                        ],
                        lines: [{ from: [0.4, 1.077], to: [1.2, 2.277], color: '#888', dashed: true, label: 'gradient = 1.5', labelAt: [1.25, 1.8] }]
                    }
                }
            ],
            finalAnswer: '\\( n \\approx 1.5 \\), \\( a \\approx 3 \\), so \\( y \\approx 3x^{1.5} \\)'
        }
    },
    {
        id: 'el6-006',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 06',
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
                    explanation: 'For the model \\( h = ar^n \\), the linearised form is \\( \\log h = n\\log r + \\log a \\), so the gradient of the graph equals \\( n \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( a \\) from the vertical intercept.',
                    workingLatex: '\\log a = 3 \\Rightarrow a = 10^3 = 1000',
                    explanation: 'The vertical intercept of the linearised graph equals \\( \\log a \\). Raising 10 to the power 3 gives \\( a = 1000 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the relationship.',
                    workingLatex: 'h = 1000r^{-2} = \\frac{1000}{r^2}',
                    explanation: 'Substituting \\( a = 1000 \\) and \\( n = -2 \\) into \\( h = ar^n \\) gives the final relationship between height and radius.'
                }
            ],
            finalAnswer: '\\( h = \\dfrac{1000}{r^2} \\)'
        }
    },
    // TYPE B (Q7–12): Converting y = kb^x to linear form log y = x log b + log k
    {
        id: 'el6-007',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 07',
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
                    explanation: 'We apply \\( \\log_{10} \\) to both sides of \\( y = kb^x \\) so we can use log laws to simplify the right-hand side.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the product and power laws.',
                    workingLatex: '\\log y = \\log k + \\log(b^x) = \\log k + x\\log b',
                    explanation: 'The product law splits \\( \\log(kb^x) \\) into \\( \\log k + \\log(b^x) \\), and the power law brings the exponent \\( x \\) down as a multiplier.'
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
        topicTitle: 'Using Logarithmic Graphs 08',
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
                    description: 'Identify that the gradient equals \\( \\log b \\).',
                    workingLatex: '\\log b = 0.3',
                    explanation: 'For \\( y = kb^x \\), the linearised form is \\( \\log y = x\\log b + \\log k \\). The gradient of the graph equals \\( \\log b = 0.3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( b \\).',
                    workingLatex: 'b = 10^{0.3} \\approx 2.00',
                    explanation: 'Raising 10 to the power 0.3 gives \\( b \\approx 2.00 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( k \\) from the vertical intercept.',
                    workingLatex: '\\log k = 1.7 \\Rightarrow k = 10^{1.7} \\approx 50.1',
                    explanation: 'The vertical intercept of the graph equals \\( \\log k = 1.7 \\). Raising 10 to this power gives \\( k = 10^{1.7} \\approx 50.1 \\).'
                }
            ],
            finalAnswer: '\\( b \\approx 2.00 \\), \\( k \\approx 50.1 \\)'
        }
    },
    {
        id: 'el6-009',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 09',
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
                    workingLatex: '\\log b = \\frac{3.5 - 2}{5 - 0} = \\frac{1.5}{5} = 0.3',
                    explanation: 'The gradient of \\( \\log y \\) against \\( x \\) equals \\( \\log b \\). Using the two given points, \\( \\log b = (3.5 - 2)/(5 - 0) = 0.3 \\), so \\( b = 10^{0.3} \\approx 2.00 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'The vertical intercept gives \\( \\log k \\).',
                    workingLatex: '\\log k = 2 \\Rightarrow k = 10^2 = 100',
                    explanation: 'The point \\( (0, 2) \\) lies on the \\( \\log y \\)-axis (where \\( x = 0 \\)), so \\( \\log k = 2 \\). Therefore \\( k = 10^2 = 100 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\) from \\( \\log b = 0.3 \\).',
                    workingLatex: 'b = 10^{0.3} \\approx 2.00',
                    explanation: 'Raising 10 to the power 0.3 gives \\( b \\approx 2.00 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the full model.',
                    workingLatex: 'y = 100 \\times 2^x',
                    explanation: 'Substituting \\( k = 100 \\) and \\( b \\approx 2.00 \\) into \\( y = kb^x \\) gives the final exponential model.',
                    diagram: {
                        xMin: -1, xMax: 6, yMin: 0, yMax: 4,
                        xLabel: 'x', yLabel: '\\log y',
                        xTicks: [0, 1, 2, 3, 4, 5],
                        yTicks: [0, 1, 2, 3, 4],
                        curves: [{ points: sample(x => 0.3*x + 2, -0.5, 5.5), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [0, 2], label: '(0, 2)', labelAnchor: 'e', color: '#d4775c' },
                            { at: [5, 3.5], label: '(5, 3.5)', labelAnchor: 'w', color: '#d4775c' }
                        ],
                        lines: [{ from: [1, 2.3], to: [4, 3.2], color: '#888', dashed: true, label: 'gradient = 0.3', labelAt: [4.2, 2.8] }]
                    }
                }
            ],
            finalAnswer: '\\( b \\approx 2.00 \\), \\( k = 100 \\), so \\( y = 100 \\times 2^x \\)'
        }
    },
    {
        id: 'el6-010',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 10',
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
                    workingLatex: '\\log b = \\frac{2.8 - 1.4}{6 - 2} = \\frac{1.4}{4} = 0.35',
                    explanation: 'The gradient of \\( \\log y \\) against \\( x \\) equals \\( \\log b \\). Using the two points gives \\( \\log b = (2.8 - 1.4)/(6 - 2) = 0.35 \\), hence \\( b = 10^{0.35} \\approx 2.24 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log k \\) using point \\( (2, 1.4) \\).',
                    workingLatex: '1.4 = 0.35 \\times 2 + \\log k \\Rightarrow \\log k = 1.4 - 0.7 = 0.7',
                    explanation: 'Substituting \\( x = 2 \\) and \\( \\log y = 1.4 \\) into \\( \\log y = x\\log b + \\log k \\) and rearranging gives \\( \\log k = 0.7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( b \\) and \\( k \\).',
                    workingLatex: 'b = 10^{0.35} \\approx 2.24, \\quad k = 10^{0.7} \\approx 5.01',
                    explanation: 'Raising 10 to the power of each log value gives \\( b \\approx 2.24 \\) and \\( k \\approx 5.01 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the full model.',
                    workingLatex: 'y \\approx 5.01 \\times 2.24^x',
                    explanation: 'Substituting the values of \\( k \\) and \\( b \\) into \\( y = kb^x \\) gives the exponential relationship.'
                }
            ],
            finalAnswer: '\\( b \\approx 2.24 \\), \\( k \\approx 5.01 \\), so \\( y \\approx 5.01 \\times 2.24^x \\)'
        }
    },
    {
        id: 'el6-011',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 11',
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
                    explanation: 'Taking \\( \\ln \\) of both sides and applying the product and power laws gives \\( \\ln y = \\ln k + cx \\). This is linear in \\( \\ln y \\) against \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Read off the gradient \\( c \\).',
                    workingLatex: 'c = 0.4',
                    explanation: 'The gradient of the graph of \\( \\ln y \\) against \\( x \\) equals \\( c \\), so \\( c = 0.4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( k \\) from the vertical intercept.',
                    workingLatex: '\\ln k = 3 \\Rightarrow k = e^3 \\approx 20.1',
                    explanation: 'The vertical intercept equals \\( \\ln k = 3 \\). Applying the exponential function gives \\( k = e^3 \\approx 20.1 \\).'
                }
            ],
            finalAnswer: '\\( c = 0.4 \\), \\( k = e^3 \\approx 20.1 \\)'
        }
    },
    {
        id: 'el6-012',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 12',
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
                    explanation: 'For \\( y = ke^{cx} \\), the linearised form is \\( \\ln y = cx + \\ln k \\). The gradient of \\( \\ln y \\) against \\( x \\) equals \\( c \\), giving \\( c = (3.9 - 1.5)/4 = 0.6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Read off \\( \\ln k \\) from the vertical intercept.',
                    workingLatex: '\\ln k = 1.5',
                    explanation: 'The point \\( (0, 1.5) \\) lies on the \\( \\ln y \\)-axis (where \\( x = 0 \\)), so the vertical intercept is \\( \\ln k = 1.5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( k \\).',
                    workingLatex: 'k = e^{1.5} \\approx 4.48',
                    explanation: 'Applying the exponential function to both sides gives \\( k = e^{1.5} \\approx 4.48 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the full model.',
                    workingLatex: 'y = 4.48e^{0.6x}',
                    explanation: 'Substituting \\( k \\approx 4.48 \\) and \\( c = 0.6 \\) into \\( y = ke^{cx} \\) gives the exponential relationship.',
                    diagram: {
                        xMin: -1, xMax: 5, yMin: 0, yMax: 5,
                        xLabel: 'x', yLabel: '\\ln y',
                        xTicks: [0, 1, 2, 3, 4],
                        yTicks: [0, 1, 2, 3, 4, 5],
                        curves: [{ points: sample(x => 0.6*x + 1.5, -0.5, 4.5), color: '#0d9488', width: 2.5 }],
                        points: [
                            { at: [0, 1.5], label: '(0, 1.5)', labelAnchor: 'e', color: '#d4775c' },
                            { at: [4, 3.9], label: '(4, 3.9)', labelAnchor: 'w', color: '#d4775c' }
                        ],
                        lines: [{ from: [0.5, 1.8], to: [3.5, 3.6], color: '#888', dashed: true, label: 'gradient = 0.6', labelAt: [3.7, 3.0] }]
                    }
                }
            ],
            finalAnswer: '\\( c = 0.6 \\), \\( k \\approx 4.48 \\), so \\( y \\approx 4.48e^{0.6x} \\)'
        }
    },
    // TYPE C (Q13–17): Reading values from given tables and plotting log graphs
    {
        id: 'el6-013',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 13',
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
                    explanation: 'Use a calculator to find \\( \\log_{10} \\) of each \\( y \\)-value to 3 decimal places. These values will form the vertical axis of the linearised graph.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Find the gradient using two points, e.g. \\( (1, 0.778) \\) and \\( (7, 2.875) \\).',
                    workingLatex: '\\log b = \\frac{2.875 - 0.778}{7 - 1} = \\frac{2.097}{6} \\approx 0.350',
                    explanation: 'For \\( y = kb^t \\), the linearised form is \\( \\log y = t\\log b + \\log k \\). The gradient equals \\( \\log b \\approx 0.350 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the vertical intercept (where \\( t = 0 \\)).',
                    workingLatex: '\\log k = 0.778 - 0.350 \\times 1 = 0.428',
                    explanation: 'Substituting \\( t = 1 \\) and \\( \\log y = 0.778 \\) into \\( \\log y = t\\log b + \\log k \\) gives \\( \\log k = 0.778 - 0.350 = 0.428 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find \\( b \\) from \\( \\log b \\).',
                    workingLatex: 'b = 10^{0.350} \\approx 2.24',
                    explanation: 'Raising 10 to the power 0.350 gives \\( b \\approx 2.24 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( k \\) from \\( \\log k \\).',
                    workingLatex: 'k = 10^{0.428} \\approx 2.68',
                    explanation: 'Raising 10 to the power 0.428 gives \\( k \\approx 2.68 \\). The model is therefore \\( y \\approx 2.68 \\times 2.24^t \\).'
                }
            ],
            finalAnswer: '(b) Gradient \\( \\approx 0.350 \\), intercept \\( \\approx 0.428 \\) \\quad (c) \\( k \\approx 2.68 \\), \\( b \\approx 2.24 \\)'
        }
    },
    {
        id: 'el6-014',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 14',
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
                    explanation: 'Apply \\( \\log_{10} \\) to each \\( x \\) and \\( y \\) value in the table. These transformed coordinates will be plotted to give a straight-line graph.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Calculate the gradient using the first and last points.',
                    workingLatex: 'n = \\frac{2.433 - 1.079}{1.204 - 0.301} = \\frac{1.354}{0.903} \\approx 1.50',
                    explanation: 'The gradient of \\( \\log y \\) against \\( \\log x \\) equals the power \\( n \\). Using the first and last data points gives the most accurate estimate of \\( n \\approx 1.50 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find the intercept.',
                    workingLatex: '\\log a = 1.079 - 1.50 \\times 0.301 = 1.079 - 0.452 = 0.627',
                    explanation: 'Substituting \\( (\\log x, \\log y) = (0.301, 1.079) \\) into \\( \\log y = n\\log x + \\log a \\) and rearranging gives \\( \\log a = 1.079 - 1.50 \\times 0.301 = 0.627 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Solve for \\( a \\).',
                    workingLatex: 'a = 10^{0.627} \\approx 4.24',
                    explanation: 'Raising 10 to the power 0.627 gives \\( a \\approx 4.24 \\) to 3 significant figures.'
                },
                {
                    stepNumber: 5,
                    description: 'Write the full model.',
                    workingLatex: 'y \\approx 4.24x^{1.5}',
                    explanation: 'Substituting \\( a \\approx 4.24 \\) and \\( n \\approx 1.50 \\) into \\( y = ax^n \\) gives the power-law relationship.'
                }
            ],
            finalAnswer: '(c) \\( n \\approx 1.50 \\), \\( a \\approx 4.24 \\), so \\( y \\approx 4.24x^{1.5} \\)'
        }
    },
    {
        id: 'el6-015',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 15',
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
                    explanation: 'Apply \\( \\log_{10} \\) to each \\( x \\)-value in the table. These transformed values will be plotted on the vertical axis of the linearised graph.'
                },
                {
                    stepNumber: 2,
                    description: '(c) Gradient using points \\( (10, 2.699) \\) and \\( (80, 1.193) \\).',
                    workingLatex: '\\log b = \\frac{1.193 - 2.699}{80 - 10} = \\frac{-1.506}{70} \\approx -0.02151',
                    explanation: 'The gradient of the \\( \\log x \\) against \\( t \\) line equals \\( \\log b \\). Use the two endpoints to calculate this. The negative value confirms radioactive decay.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( \\log k \\) from the intercept.',
                    workingLatex: '\\log k = 2.699 - (-0.02151)(10) = 2.699 + 0.2151 = 2.914 \\Rightarrow k = 10^{2.914} \\approx 821',
                    explanation: 'Substitute \\( (10, 2.699) \\) and \\( \\log b \\approx -0.02151 \\) into \\( \\log x = t\\log b + \\log k \\). Rearrange to find \\( \\log k \\), then raise 10 to this power.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( b \\) from \\( \\log b \\).',
                    workingLatex: 'b = 10^{-0.02151} \\approx 0.951',
                    explanation: 'Raise \\( 10 \\) to the power of the gradient. Since \\( b < 1 \\), this confirms the substance is undergoing exponential decay.',
                    diagram: {
                        xMin: 0, xMax: 90, yMin: 0.8, yMax: 3.2,
                        xLabel: 't', yLabel: '\\log x',
                        xTicks: [10, 20, 30, 40, 50, 60, 70, 80],
                        yTicks: [1, 1.5, 2, 2.5, 3],
                        curves: [{ points: sample((t) => -0.02151 * t + 2.914, 0, 90), color: '#0d9488', label: '\\text{Line of best fit}', labelAt: [45, 2.8] }],
                        lines: [],
                        points: [
                            { at: [10, 2.699], color: '#d4775c', label: '(10,\\,2.70)', labelAnchor: 'nw', r: 4 },
                            { at: [20, 2.398], color: '#d4775c', label: '(20,\\,2.40)', labelAnchor: 'nw', r: 4 },
                            { at: [40, 1.796], color: '#d4775c', label: '(40,\\,1.80)', labelAnchor: 'nw', r: 4 },
                            { at: [80, 1.193], color: '#d4775c', label: '(80,\\,1.19)', labelAnchor: 'nw', r: 4 },
                        ],
                    }
                }
            ],
            finalAnswer: '(c) \\( k \\approx 821 \\), \\( b \\approx 0.951 \\)'
        }
    },
    // TYPE D (Q16–20): Using the model to predict values / find x from y
    {
        id: 'el6-016',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 16',
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
                    explanation: 'The gradient of the line gives \\( n = 2 \\) and the vertical intercept gives \\( \\log a = 0.6 \\), so \\( a = 10^{0.6} \\approx 3.98 \\). This recovers the original model \\( y = ax^n \\).'
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
                    explanation: 'Replace \\( \\log y \\) with \\( \\log 200 \\approx 2.301 \\), subtract 0.6 and divide by 2 to find \\( \\log x \\). Then raise 10 to this power to find \\( x \\approx 7.09 \\).'
                }
            ],
            finalAnswer: '(a) \\( y \\approx 99.5 \\) \\quad (b) \\( x \\approx 7.09 \\)'
        }
    },
    {
        id: 'el6-017',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 17',
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
                    explanation: 'Replace \\( x \\) with 3 in the linearised equation \\( \\log y = 0.2x + 1.3 \\), then raise 10 to both sides to find \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( y = 1000 \\).',
                    workingLatex: '\\log(1000) = 0.2x + 1.3 \\Rightarrow 3 = 0.2x + 1.3 \\Rightarrow 0.2x = 1.7 \\Rightarrow x = 8.5',
                    explanation: 'Since \\( \\log 1000 = 3 \\), substitute into the left-hand side. Then subtract 1.3 from both sides and divide by 0.2 to isolate \\( x \\).'
                }
            ],
            finalAnswer: '(a) \\( y \\approx 79.4 \\) \\quad (b) \\( x = 8.5 \\)'
        }
    },
    {
        id: 'el6-018',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 18',
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
                    explanation: 'For the model \\( S = at^b \\), the linearised form is \\( \\log S = b\\log t + \\log a \\), so the gradient of the line equals the power \\( b \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log a \\) using point \\( (0.5, 2.1) \\).',
                    workingLatex: '2.1 = 1.2 \\times 0.5 + \\log a \\Rightarrow \\log a = 2.1 - 0.6 = 1.5 \\Rightarrow a = 10^{1.5} \\approx 31.6',
                    explanation: 'Substitute the point \\( (0.5, 2.1) \\) and \\( b = 1.2 \\) into \\( \\log S = b\\log t + \\log a \\). Rearrange to find \\( \\log a = 1.5 \\), then \\( a = 10^{1.5} \\approx 31.6 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Predict at \\( t = 20 \\).',
                    workingLatex: 'S = 31.6 \\times 20^{1.2} \\approx 31.6 \\times 36.4 \\approx 1150',
                    explanation: 'Substitute \\( t = 20 \\). Since \\( 1.2 \\times \\log 20 = 1.2 \\times 1.301 = 1.561 \\), we get \\( 20^{1.2} = 10^{1.561} \\approx 36.4 \\). Then \\( S \\approx 31.6 \\times 36.4 \\approx 1150 \\).'
                }
            ],
            finalAnswer: '(a) \\( b = 1.2 \\), \\( a \\approx 31.6 \\) \\quad (b) \\( \\approx 1150 \\) subscribers'
        }
    },
    {
        id: 'el6-019',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 19',
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
                    explanation: 'The point \\( (0, 4.3) \\) is the vertical intercept of the \\( \\log V \\) against \\( t \\) graph. Since the intercept equals \\( \\log p \\), we have \\( p = 10^{4.3} \\approx 19\\,953 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Gradient gives \\( \\log q \\).',
                    workingLatex: '\\log q = \\frac{3.1 - 4.3}{10 - 0} = \\frac{-1.2}{10} = -0.12 \\Rightarrow q = 10^{-0.12} \\approx 0.759',
                    explanation: 'The gradient of the \\( \\log V \\) against \\( t \\) line equals \\( \\log q \\). The negative gradient confirms depreciation (\\( q < 1 \\)), so \\( q = 10^{-0.12} \\approx 0.759 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( t = 7 \\).',
                    workingLatex: 'V = 19\\,953 \\times 0.759^7 \\approx 19\\,953 \\times 0.145 \\approx £2893',
                    explanation: 'Use \\( \\log V = -0.12(7) + 4.3 = 3.46 \\), giving \\( V = 10^{3.46} \\approx £2880 \\). Or directly: \\( 0.759^7 \\approx 0.145 \\), giving \\( V \\approx £2893 \\).'
                }
            ],
            finalAnswer: '(a) \\( p \\approx 19\\,953 \\), \\( q \\approx 0.759 \\) \\quad (b) \\( \\approx £2890 \\)'
        }
    },
    {
        id: 'el6-020',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 20',
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
                    explanation: 'In the linearised form \\( \\log P = n\\log V + \\log k \\), the gradient equals \\( n \\). The negative value indicates an inverse relationship between pressure and volume.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\log k \\) using point \\( (0.5, 3.8) \\).',
                    workingLatex: '3.8 = -1.4(0.5) + \\log k \\Rightarrow \\log k = 3.8 + 0.7 = 4.5 \\Rightarrow k = 10^{4.5} \\approx 31\\,623',
                    explanation: 'Substitute the known point into \\( \\log P = n\\log V + \\log k \\) and rearrange to find \\( \\log k = 4.5 \\). Then raise 10 to this power.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( V = 0.2 \\).',
                    workingLatex: '\\log P = -1.4\\log(0.2) + 4.5 = -1.4(-0.699) + 4.5 = 0.979 + 4.5 = 5.479 \\Rightarrow P = 10^{5.479} \\approx 301\\,000',
                    explanation: 'Substitute \\( V = 0.2 \\) into the linearised equation. Note \\( \\log 0.2 = -\\log 5 \\approx -0.699 \\). Evaluate to find \\( \\log P \\), then raise 10 to this power.'
                }
            ],
            finalAnswer: '(a) \\( n = -1.4 \\), \\( k \\approx 31\\,623 \\) \\quad (b) \\( P \\approx 301\\,000 \\) Pa'
        }
    },
    // TYPE E (Q21–24): Sketching log-linearised graphs
    {
        id: 'el6-021',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 21',
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
                    explanation: 'Apply the product law: \\( \\log(5 \\times 4^x) = \\log 5 + \\log(4^x) \\). Then the power law brings \\( x \\) down: \\( \\log(4^x) = x\\log 4 \\).'
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
                    explanation: 'The gradient is \\( \\log 4 \\) and the vertical intercept is \\( \\log 5 \\). Use a calculator to express these as decimals to 3 significant figures.',
                    diagram: {
                        xMin: -0.5, xMax: 5, yMin: 0, yMax: 4,
                        xLabel: 'x', yLabel: '\\log y',
                        xTicks: [0, 1, 2, 3, 4],
                        yTicks: [0.5, 1, 1.5, 2, 2.5, 3, 3.5],
                        curves: [{ points: sample((x) => 0.602 * x + 0.699, -0.5, 5), color: '#0d9488', label: '\\log y = (\\log 4)x + \\log 5', labelAt: [1.5, 3.5] }],
                        lines: [],
                        points: [
                            { at: [0, 0.699], color: '#d4775c', label: '(0,\\,\\log 5)', labelAnchor: 'ne', r: 4 },
                        ],
                    }
                }
            ],
            finalAnswer: '(b) Gradient \\( = \\log 4 \\approx 0.602 \\); vertical intercept \\( = \\log 5 \\approx 0.699 \\)'
        }
    },
    {
        id: 'el6-022',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 22',
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
                    explanation: 'Apply \\( \\log \\) to both sides: \\( \\log(2m^{0.4}) = \\log 2 + \\log(m^{0.4}) = \\log 2 + 0.4\\log m \\) using the product and power laws.'
                },
                {
                    stepNumber: 2,
                    description: '(b) State gradient and intercept.',
                    workingLatex: '\\text{Gradient} = 0.4 \\qquad \\text{Intercept} = \\log 2 \\approx 0.301',
                    explanation: 'Comparing \\( \\log h = 0.4\\log m + \\log 2 \\) with \\( Y = mX + c \\), the gradient is 0.4 and the vertical intercept is \\( \\log 2 \\approx 0.301 \\).'
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
        topicTitle: 'Using Logarithmic Graphs 23',
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
        topicTitle: 'Using Logarithmic Graphs 24',
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
                    explanation: 'Comparing \\( \\ln p = 0.3t + \\ln 50 \\) with \\( Y = mX + c \\), the gradient is 0.3 (the coefficient of \\( t \\)) and the vertical intercept is \\( \\ln 50 \\approx 3.91 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\ln p = 0.3t + \\ln 50 \\) \\quad (b) Gradient \\( = 0.3 \\); intercept \\( = \\ln 50 \\approx 3.91 \\)'
        }
    },
    // TYPE F (Q25–28): Two models on the same log graph — finding intersection
    {
        id: 'el6-025',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 25',
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
                    explanation: 'When the populations are equal, their \\( \\ln P \\) values are equal (since \\( \\ln \\) is one-to-one). Set the two right-hand sides equal to each other.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '0.3t = 3 \\Rightarrow t = 10',
                    explanation: 'Add \\( 0.1t \\) to both sides and subtract 4 to get \\( 0.3t = 3 \\). Dividing by 0.3 gives \\( t = 10 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Find the common \\( \\ln P \\) and then \\( P \\).',
                    workingLatex: '\\ln P = 0.2(10) + 4 = 6 \\Rightarrow P = e^6 \\approx 403',
                    explanation: 'Substitute \\( t = 10 \\) into Population A (or B). Then exponentiate to find \\( P = e^6 \\approx 403 \\) to 3 s.f.'
                }
            ],
            finalAnswer: '(a) \\( t = 10 \\) \\quad (b) \\( P = e^6 \\approx 403 \\)'
        }
    },
    {
        id: 'el6-026',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 26',
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
                    explanation: 'Setting \\( t = 0 \\) gives \\( \\log S \\) as the constant term in each equation. Then raise 10 to this power to recover the actual subscriber count.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set the two equations equal.',
                    workingLatex: '0.08t + 2 = -0.04t + 3.5',
                    explanation: 'When both blogs have the same subscribers, their \\( \\log S \\) values must be equal since \\( \\log \\) is a one-to-one function. Set the right-hand sides equal.'
                },
                {
                    stepNumber: 3,
                    description: 'Collect \\( t \\) terms and solve.',
                    workingLatex: '0.12t = 1.5 \\Rightarrow t = 12.5',
                    explanation: 'Add \\( 0.04t \\) to both sides and subtract 2 from both sides to get \\( 0.12t = 1.5 \\). Dividing by 0.12 gives \\( t = 12.5 \\) days.'
                }
            ],
            finalAnswer: '(a) Blog A: 100 subscribers; Blog B: \\( \\approx 3162 \\) subscribers \\quad (b) Day 12.5 (i.e. during day 13)'
        }
    },
    {
        id: 'el6-027',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 27',
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
                    description: '(a) Find initial populations at \\( t = 0 \\).',
                    workingLatex: '\\text{Deer: } N = e^5 \\approx 148 \\qquad \\text{Wolves: } N = e^3 \\approx 20',
                    explanation: 'Setting \\( t = 0 \\) gives \\( \\ln N \\) as the constant term in each equation. Exponentiate to find \\( N = e^5 \\approx 148 \\) deer and \\( N = e^3 \\approx 20 \\) wolves.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( \\ln N \\) values equal.',
                    workingLatex: '0.15t + 5 = 0.25t + 3 \\Rightarrow 2 = 0.1t \\Rightarrow t = 20',
                    explanation: 'The wolves overtake the deer when the two \\( \\ln N \\) lines intersect. Equate and rearrange: subtract \\( 0.15t \\) and 3 from both sides to get \\( 2 = 0.1t \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Find each population at \\( t = 20 \\).',
                    workingLatex: '\\ln N = 0.15(20) + 5 = 8 \\Rightarrow N = e^8 \\approx 2981',
                    explanation: 'Substitute \\( t = 20 \\) into either equation. Both give \\( \\ln N = 8 \\), so \\( N = e^8 \\approx 2981 \\). This is the population of each species at the crossover.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the combined population.',
                    workingLatex: '2 \\times e^8 \\approx 2 \\times 2981 = 5962',
                    explanation: 'Since both species have population \\( e^8 \\approx 2981 \\) at the intersection, the combined total is \\( 2 \\times 2981 = 5962 \\).',
                    diagram: {
                        xMin: 0, xMax: 30, yMin: 2, yMax: 10,
                        xLabel: 't', yLabel: '\\ln N',
                        xTicks: [5, 10, 15, 20, 25, 30],
                        yTicks: [3, 4, 5, 6, 7, 8, 9],
                        curves: [
                            { points: sample((t) => 0.15 * t + 5, 0, 30), color: '#0d9488', label: '\\text{Deer: } \\ln N = 0.15t + 5', labelAt: [1, 9.5] },
                            { points: sample((t) => 0.25 * t + 3, 0, 30), color: '#3b82f6', label: '\\text{Wolves: } \\ln N = 0.25t + 3', labelAt: [1, 2.5] },
                        ],
                        lines: [],
                        points: [
                            { at: [20, 8], color: '#d4775c', label: '(20,\\,8)', labelAnchor: 'sw', r: 5 },
                        ],
                    }
                }
            ],
            finalAnswer: '(a) Deer \\approx 148, Wolves \\approx 20 \\quad (b) \\( t = 20 \\) years \\quad (c) \\approx 5962'
        }
    },
    {
        id: 'el6-028',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 28',
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
                    explanation: 'The gradient of the \\( \\log y \\) against \\( \\log x \\) line equals \\( n \\) in the model \\( y = ax^n \\). Use the two given points to calculate \\( n = 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find the intercept.',
                    workingLatex: '\\log a = 1.0 - 2(0.4) = 1.0 - 0.8 = 0.2',
                    explanation: 'Substitute \\( (\\log x, \\log y) = (0.4, 1.0) \\) and \\( n = 2 \\) into \\( \\log y = n\\log x + \\log a \\). Rearrange to find \\( \\log a = 0.2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the line equation.',
                    workingLatex: '\\log y = 2\\log x + 0.2',
                    explanation: 'Combine the gradient \\( n = 2 \\) and intercept \\( \\log a = 0.2 \\) into the linearised form \\( \\log y = n\\log x + \\log a \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Convert back to original form.',
                    workingLatex: 'a = 10^{0.2} \\approx 1.58 \\Rightarrow y \\approx 1.58x^2',
                    explanation: 'Since \\( \\log a = 0.2 \\), raise 10 to this power to get \\( a \\approx 1.58 \\). Substituting \\( n = 2 \\) and \\( a \\approx 1.58 \\) into \\( y = ax^n \\) gives the model.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( x = 50 \\).',
                    workingLatex: 'y = 10^{0.2} \\times 50^2 \\approx 1.585 \\times 2500 \\approx 3960',
                    explanation: 'Using the exact value \\( a = 10^{0.2} \\approx 1.585 \\) avoids premature rounding. Alternatively, \\( \\log y = 2(1.699) + 0.2 = 3.598 \\), giving \\( y = 10^{3.598} \\approx 3960 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\log y = 2\\log x + 0.2 \\) \\quad (b) \\( y \\approx 1.58x^2 \\) \\quad (c) \\( y \\approx 3960 \\)'
        }
    },
    // TYPE G (Q29–32): Limitations and interpretation
    {
        id: 'el6-029',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 29',
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
        topicTitle: 'Using Logarithmic Graphs 30',
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
        topicTitle: 'Using Logarithmic Graphs 31',
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
                    workingLatex: 'p = 9.38 \\times 60^{0.677} \\approx 9.38 \\times 16.0 \\approx 150',
                    explanation: '\\( 60^{0.677} \\approx 16.0 \\) since \\( 0.677 \\times \\log 60 = 0.677 \\times 1.778 = 1.204 \\) and \\( 10^{1.204} \\approx 16.0 \\).'
                }
            ],
            finalAnswer: '(c) \\( b \\approx 0.677 \\), \\( a \\approx 9.38 \\) \\quad (d) \\( \\approx 150 \\) employees'
        }
    },
    {
        id: 'el6-032',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 32',
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
        topicTitle: 'Using Logarithmic Graphs 33',
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
                    workingLatex: 'p = 2.00 \\times 15^{1.72} \\approx 2.00 \\times 105 \\approx 211 \\text{ thousand}',
                    explanation: 'Since \\( 1.72 \\times \\log 15 = 1.72 \\times 1.176 = 2.023 \\), we get \\( 15^{1.72} = 10^{2.023} \\approx 105 \\).'
                },
                {
                    stepNumber: 5,
                    description: '(d) Describe a limitation.',
                    workingLatex: 'p \\to \\infty \\text{ as } t \\to \\infty',
                    explanation: 'Nutrients in the petri dish would eventually be exhausted, limiting growth. The model ignores resource constraints.'
                }
            ],
            finalAnswer: '(b) \\( b \\approx 1.72 \\), \\( a \\approx 2.00 \\) \\quad (c) \\( \\approx 211\\,000 \\) bacteria \\quad (d) Nutrient depletion would slow/stop growth — the model allows unlimited increase.'
        }
    },
    {
        id: 'el6-034',
        topicRef: 'el6',
        topicTitle: 'Using Logarithmic Graphs 34',
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
        topicTitle: 'Using Logarithmic Graphs 35',
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
                    explanation: 'The model predicts the rabbit population tends to zero. In reality, if foxes decline too, the rabbits might recover. The model ignores predator–prey interactions and other ecological factors.',
                    diagram: {
                        xMin: 0, xMax: 35, yMin: 0, yMax: 9,
                        xLabel: 't', yLabel: '\\ln N',
                        xTicks: [5, 10, 15, 20, 25, 30, 35],
                        yTicks: [1, 2, 3, 4, 5, 6, 7, 8],
                        curves: [
                            { points: sample((t) => -0.08 * t + 8, 0, 35), color: '#0d9488', label: '\\text{Rabbits: } \\ln R = -0.08t + 8', labelAt: [1, 8.5] },
                            { points: sample((t) => 0.12 * t + 4, 0, 35), color: '#3b82f6', label: '\\text{Foxes: } \\ln F = 0.12t + 4', labelAt: [1, 3.5] },
                        ],
                        lines: [],
                        points: [
                            { at: [20, 6.4], color: '#d4775c', label: '(20,\\,6.4)', labelAnchor: 'sw', r: 5 },
                        ],
                    }
                }
            ],
            finalAnswer: '(a) Rabbits \\approx 2\\,981\\,000; Foxes \\approx 54\\,600 \\quad (b) \\( t = 20 \\) years \\quad (c) \\approx 1\\,202\\,000 \\quad (d) The model predicts \\( R \\to 0 \\), which may be unrealistic — it ignores ecological interactions that could allow recovery.'
        }
    },

    // ─── Q36–70: Additional Using Logarithmic Graphs ──────────────────────

    {
        id: 'el6-036', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 36', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) is a straight line with gradient 2 and y-intercept 0.5. Write down the equation connecting \\( y \\) and \\( x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the line equation.', workingLatex: '\\log y = 2\\log x + 0.5', explanation: 'The gradient is 2 and the \\( y \\)-intercept is 0.5, so the straight-line equation on the log–log graph is \\( \\log y = 2\\log x + 0.5 \\).' },
            { stepNumber: 2, description: 'Rewrite using log laws.', workingLatex: '\\log y = \\log x^2 + \\log 10^{0.5}', explanation: 'Use \\( n\\log x = \\log x^n \\) and rewrite the constant as \\( 0.5 = \\log 10^{0.5} \\) so that both terms are single logarithms.' },
            { stepNumber: 3, description: 'Remove the logarithm.', workingLatex: 'y = 10^{0.5} \\cdot x^2 = \\sqrt{10}\\, x^2 \\approx 3.16x^2', explanation: 'Since \\( \\log y = \\log(\\sqrt{10}\\, x^2) \\), equate the arguments to obtain the final relationship between \\( y \\) and \\( x \\).' }
        ], finalAnswer: '\\( y = \\sqrt{10}\\, x^2 \\approx 3.16x^2 \\)' }
    },
    {
        id: 'el6-037', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 37', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) is a straight line with gradient 0.2 and y-intercept 1. Find \\( k \\) and \\( b \\) in \\( y = kb^x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the line equation.', workingLatex: '\\log y = 0.2x + 1', explanation: 'The gradient is 0.2 and the \\( y \\)-intercept is 1, giving \\( \\log y = 0.2x + 1 \\).' },
            { stepNumber: 2, description: 'Identify \\( k \\) from the intercept.', workingLatex: '\\log k = 1 \\implies k = 10^1 = 10', explanation: 'The intercept of the linearised graph equals \\( \\log k \\), so raise 10 to that power to find \\( k \\).' },
            { stepNumber: 3, description: 'Identify \\( b \\) from the gradient.', workingLatex: '\\log b = 0.2 \\implies b = 10^{0.2} \\approx 1.585', explanation: 'The gradient of the linearised graph equals \\( \\log b \\), so \\( b = 10^{0.2} \\approx 1.585 \\).' }
        ], finalAnswer: '\\( k = 10 \\), \\( b \\approx 1.585 \\)' }
    },
    {
        id: 'el6-038', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 38', difficulty: 'Foundation',
        questionText: 'Explain why plotting \\( \\log y \\) against \\( \\log x \\) for data following \\( y = ax^n \\) gives a straight line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides.', workingLatex: '\\log y = \\log(ax^n) = \\log a + n\\log x', explanation: 'Apply \\( \\log \\) to both sides of \\( y = ax^n \\) and use the product and power rules for logarithms.' },
            { stepNumber: 2, description: 'Rearrange into linear form.', workingLatex: '\\log y = n\\log x + \\log a', explanation: 'This has the form \\( Y = mX + c \\) where \\( Y = \\log y \\), \\( X = \\log x \\), \\( m = n \\), and \\( c = \\log a \\).' },
            { stepNumber: 3, description: 'Conclude linearity.', workingLatex: '\\text{Gradient} = n, \\quad \\text{Intercept} = \\log a', explanation: 'Since the equation is linear in \\( \\log x \\), the graph of \\( \\log y \\) against \\( \\log x \\) is a straight line with gradient \\( n \\) and vertical intercept \\( \\log a \\).' }
        ], finalAnswer: '\\( \\log y = n\\log x + \\log a \\); this is linear in \\( \\log x \\), so the graph is a straight line with gradient \\( n \\) and intercept \\( \\log a \\).' }
    },
    {
        id: 'el6-039', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 39', difficulty: 'Foundation',
        questionText: 'Explain why plotting \\( \\log y \\) against \\( x \\) for data following \\( y = kb^x \\) gives a straight line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides.', workingLatex: '\\log y = \\log(kb^x) = \\log k + x\\log b', explanation: 'Apply \\( \\log \\) to both sides of \\( y = kb^x \\) and use the product and power rules for logarithms.' },
            { stepNumber: 2, description: 'Rearrange into linear form.', workingLatex: '\\log y = (\\log b)\\, x + \\log k', explanation: 'This has the form \\( Y = mX + c \\) where \\( Y = \\log y \\), \\( X = x \\), \\( m = \\log b \\), and \\( c = \\log k \\).' },
            { stepNumber: 3, description: 'Conclude linearity.', workingLatex: '\\text{Gradient} = \\log b, \\quad \\text{Intercept} = \\log k', explanation: 'Since the equation is linear in \\( x \\), the graph of \\( \\log y \\) against \\( x \\) is a straight line with gradient \\( \\log b \\) and vertical intercept \\( \\log k \\).' }
        ], finalAnswer: '\\( \\log y = (\\log b)x + \\log k \\); this is linear in \\( x \\), so the graph is a straight line with gradient \\( \\log b \\) and intercept \\( \\log k \\).' }
    },
    {
        id: 'el6-040', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 40', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln y \\) against \\( x \\) has gradient 0.5 and passes through \\( (0, 2) \\). Find the equation in the form \\( y = ke^{cx} \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the line equation.', workingLatex: '\\ln y = 0.5x + 2', explanation: 'The gradient is 0.5 and the line passes through \\( (0, 2) \\), so the \\( \\ln y \\)-intercept is 2.' },
            { stepNumber: 2, description: 'Exponentiate both sides.', workingLatex: 'y = e^{0.5x + 2} = e^2 \\cdot e^{0.5x}', explanation: 'Raise \\( e \\) to both sides and use the index law \\( e^{a+b} = e^a \\cdot e^b \\) to separate the constant from the variable part.' },
            { stepNumber: 3, description: 'State \\( k \\) and \\( c \\).', workingLatex: 'k = e^2 \\approx 7.39, \\quad c = 0.5', explanation: 'Comparing \\( y = e^2 \\cdot e^{0.5x} \\) with \\( y = ke^{cx} \\) gives \\( k = e^2 \\) and \\( c = 0.5 \\).' }
        ], finalAnswer: '\\( y = e^2 \\cdot e^{0.5x} \\); \\( k = e^2 \\approx 7.39 \\), \\( c = 0.5 \\)' }
    },
    {
        id: 'el6-041', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 41', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) passes through \\( (0.5, 1.2) \\) and \\( (2.0, 3.0) \\). Find \\( a \\) and \\( n \\) in \\( y = ax^n \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient \\( n \\).', workingLatex: 'n = \\frac{3.0 - 1.2}{2.0 - 0.5} = \\frac{1.8}{1.5} = 1.2', explanation: 'The gradient of the line on a \\( \\log y \\) vs \\( \\log x \\) graph equals \\( n \\). Use the two given points to compute it.' },
            { stepNumber: 2, description: 'Substitute to find \\( \\log a \\).', workingLatex: '1.2 = 1.2(0.5) + \\log a \\implies \\log a = 0.6', explanation: 'Substitute \\( (0.5, 1.2) \\) into \\( \\log y = n\\log x + \\log a \\) and solve for \\( \\log a \\).' },
            { stepNumber: 3, description: 'Convert to find \\( a \\).', workingLatex: 'a = 10^{0.6} \\approx 3.98', explanation: 'Raise 10 to the power 0.6 to obtain \\( a \\).' },
            { stepNumber: 4, description: 'State the model.', workingLatex: 'y = 3.98\\, x^{1.2}', explanation: 'Substituting \\( a \\approx 3.98 \\) and \\( n = 1.2 \\) into \\( y = ax^n \\) gives the final model.' }
        ], finalAnswer: '\\( n = 1.2 \\), \\( a \\approx 3.98 \\); model is \\( y = 3.98\\, x^{1.2} \\)' }
    },
    {
        id: 'el6-042', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 42', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) passes through \\( (0, 1.5) \\) and \\( (4, 3.5) \\). Find \\( k \\) and \\( b \\) in \\( y = kb^x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find the gradient \\( \\log b \\).', workingLatex: '\\log b = \\frac{3.5 - 1.5}{4 - 0} = \\frac{2.0}{4} = 0.5', explanation: 'The gradient of the line on a \\( \\log y \\) vs \\( x \\) graph equals \\( \\log b \\). Use the two given points to compute it.' },
            { stepNumber: 2, description: 'Convert to find \\( b \\).', workingLatex: 'b = 10^{0.5} = \\sqrt{10} \\approx 3.16', explanation: 'Raise 10 to the power 0.5 to obtain \\( b \\).' },
            { stepNumber: 3, description: 'Find \\( k \\) from the intercept.', workingLatex: '\\log k = 1.5 \\implies k = 10^{1.5} \\approx 31.6', explanation: 'The point \\( (0, 1.5) \\) gives the \\( y \\)-intercept of the linear graph, which equals \\( \\log k \\). Raise 10 to that power.' },
            { stepNumber: 4, description: 'State the model.', workingLatex: 'y = 31.6 \\times (\\sqrt{10})^x', explanation: 'Substituting \\( k \\approx 31.6 \\) and \\( b \\approx 3.16 \\) into \\( y = kb^x \\) gives the final model.' }
        ], finalAnswer: '\\( k \\approx 31.6 \\), \\( b \\approx 3.16 \\); model is \\( y = 31.6 \\times (\\sqrt{10})^x \\)' }
    },
    {
        id: 'el6-043', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 43', difficulty: 'Foundation',
        questionText: 'Data: \\( x = 2, y = 20 \\); \\( x = 5, y = 125 \\). Verify these satisfy \\( y = ax^n \\) and find \\( a \\) and \\( n \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take logs of both data points', workingLatex: '\\log 20 = 1.301, \\log 2 = 0.301; \\quad \\log 125 = 2.097, \\log 5 = 0.699', explanation: 'Taking \\( \\log \\) of both \\( x \\) and \\( y \\) values converts the power relationship into a linear one of the form \\( \\log y = n\\log x + \\log a \\).' },
            { stepNumber: 2, description: 'Find the gradient n', workingLatex: 'n = \\frac{2.097 - 1.301}{0.699 - 0.301} = \\frac{0.796}{0.398} = 2.0', explanation: 'The gradient of the line on a \\( \\log y \\) against \\( \\log x \\) graph gives the power \\( n \\).' },
            { stepNumber: 3, description: 'Use intercept to find a', workingLatex: '\\log a = 1.301 - 2(0.301) = 0.699', explanation: 'Substituting one data point into \\( \\log y = n\\log x + \\log a \\) and rearranging gives \\( \\log a \\).' },
            { stepNumber: 4, description: 'Convert to find a', workingLatex: 'a = 10^{0.699} = 5', explanation: 'Raising 10 to the power of \\( \\log a \\) recovers the value of \\( a \\).' }
        ], finalAnswer: '\\( y = 5x^2 \\)' }
    },
    {
        id: 'el6-044', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 44', difficulty: 'Foundation',
        questionText: 'Data: \\( x = 1, y = 6 \\); \\( x = 3, y = 54 \\). These satisfy \\( y = kb^x \\). Find \\( k \\) and \\( b \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute data points', workingLatex: '6 = kb; \\quad 54 = kb^3', explanation: 'Substituting \\( x = 1 \\) and \\( x = 3 \\) into \\( y = kb^x \\) gives two simultaneous equations.' },
            { stepNumber: 2, description: 'Divide to eliminate k', workingLatex: '\\frac{54}{6} = \\frac{kb^3}{kb} = b^2 \\implies b^2 = 9', explanation: 'Dividing the second equation by the first eliminates \\( k \\), leaving an equation in \\( b \\) alone.' },
            { stepNumber: 3, description: 'Solve for b', workingLatex: 'b = 3', explanation: 'Taking the positive square root gives \\( b = 3 \\), since the base of an exponential must be positive.' },
            { stepNumber: 4, description: 'Find k', workingLatex: 'k = \\frac{6}{3} = 2', explanation: 'Substituting \\( b = 3 \\) back into the first equation \\( 6 = kb \\) gives \\( k = 2 \\).' }
        ], finalAnswer: '\\( k = 2, b = 3 \\); \\( y = 2 \\times 3^x \\)' }
    },
    {
        id: 'el6-045', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 45', difficulty: 'Foundation',
        questionText: 'The equation \\( \\log y = 0.3x + 1.2 \\) relates \\( x \\) and \\( y \\). Find \\( y \\) when \\( x = 5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute x = 5', workingLatex: '\\log y = 0.3(5) + 1.2 = 1.5 + 1.2 = 2.7', explanation: 'Substituting \\( x = 5 \\) into the given linear equation for \\( \\log y \\).' },
            { stepNumber: 2, description: 'Raise 10 to both sides', workingLatex: 'y = 10^{2.7}', explanation: 'Since \\( \\log y = 2.7 \\), we exponentiate with base 10 to recover \\( y \\).' },
            { stepNumber: 3, description: 'Evaluate', workingLatex: 'y = 501', explanation: 'Using a calculator, \\( 10^{2.7} \\approx 501 \\) to 3 significant figures.' }
        ], finalAnswer: '\\( y = 501 \\)' }
    },
    {
        id: 'el6-046', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 46', difficulty: 'Foundation',
        questionText: 'The equation \\( \\log y = 1.5\\log x + 0.8 \\) relates \\( x \\) and \\( y \\). Find \\( y \\) when \\( x = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute x = 4', workingLatex: '\\log y = 1.5\\log 4 + 0.8 = 1.5(0.602) + 0.8', explanation: 'Substituting \\( x = 4 \\) and using \\( \\log 4 = 0.602 \\).' },
            { stepNumber: 2, description: 'Simplify', workingLatex: '\\log y = 0.903 + 0.8 = 1.703', explanation: 'Evaluating the arithmetic gives the value of \\( \\log y \\).' },
            { stepNumber: 3, description: 'Find y', workingLatex: 'y = 10^{1.703} = 50.4', explanation: 'Exponentiating with base 10 gives \\( y \\approx 50.4 \\) to 3 significant figures.' }
        ], finalAnswer: '\\( y = 50.4 \\)' }
    },
    {
        id: 'el6-047', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 47', difficulty: 'Foundation',
        questionText: 'Given \\( \\ln y = 2x + 3 \\), express \\( y \\) in the form \\( y = Ae^{Bx} \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Exponentiate both sides', workingLatex: 'y = e^{2x+3}', explanation: 'Since \\( \\ln y = 2x + 3 \\), raising \\( e \\) to both sides gives \\( y = e^{2x+3} \\).' },
            { stepNumber: 2, description: 'Split using index laws', workingLatex: 'y = e^3 \\cdot e^{2x}', explanation: 'Using \\( e^{a+b} = e^a \\cdot e^b \\), we identify \\( A = e^3 \\) and \\( B = 2 \\).' }
        ], finalAnswer: '\\( y = e^3 e^{2x} \\); \\( A = e^3, B = 2 \\)' }
    },
    {
        id: 'el6-048', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 48', difficulty: 'Foundation',
        questionText: 'A straight line on a \\( \\log y \\) vs \\( \\log x \\) graph has equation \\( \\log y = -2\\log x + 3 \\). Write \\( y \\) as a function of \\( x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite using log laws', workingLatex: '\\log y = \\log x^{-2} + \\log 10^3', explanation: 'The coefficient \\( -2 \\) becomes the power of \\( x \\), and the intercept 3 means \\( \\log a = 3 \\) so \\( a = 1000 \\).' },
            { stepNumber: 2, description: 'Combine into single log', workingLatex: '\\log y = \\log\\frac{1000}{x^2}', explanation: 'Using \\( \\log A + \\log B = \\log(AB) \\) combines both terms into one logarithm.' },
            { stepNumber: 3, description: 'Remove logs', workingLatex: 'y = \\frac{1000}{x^2}', explanation: 'Since \\( \\log y = \\log\\frac{1000}{x^2} \\), the arguments must be equal.' }
        ], finalAnswer: '\\( y = \\frac{1000}{x^2} \\)' }
    },
    {
        id: 'el6-049', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 49', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 3 \\times 2^x \\) is plotted as \\( \\log y \\) against \\( x \\). Find the gradient and y-intercept of the resulting line.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides', workingLatex: '\\log y = \\log(3 \\times 2^x)', explanation: 'Taking \\( \\log \\) of both sides linearises the exponential relationship.' },
            { stepNumber: 2, description: 'Apply log laws', workingLatex: '\\log y = \\log 3 + x\\log 2', explanation: 'Using \\( \\log(ab) = \\log a + \\log b \\) and \\( \\log a^n = n\\log a \\) separates the terms.' },
            { stepNumber: 3, description: 'Evaluate constants', workingLatex: '\\log y = 0.477 + 0.301x', explanation: 'Comparing with \\( Y = mx + c \\), the gradient is \\( \\log 2 = 0.301 \\) and the intercept is \\( \\log 3 = 0.477 \\).',
                diagram: {
                    xMin: -1, xMax: 6, yMin: -0.5, yMax: 3,
                    xLabel: 'x', yLabel: '\\log y',
                    xTicks: [0, 1, 2, 3, 4, 5],
                    yTicks: [0, 0.5, 1, 1.5, 2, 2.5],
                    curves: [{ points: sample(x => 0.301 * x + 0.477, -0.5, 5.5), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [0, 0.477], label: '(0, log 3)', labelAnchor: 'e', color: '#d4775c' }
                    ],
                    lines: [{ from: [1, 0.778], to: [3, 1.38], color: '#888', dashed: true, label: 'gradient = log 2', labelAt: [3.2, 1.1] }]
                }
            }
        ], finalAnswer: 'Gradient \\( = 0.301 \\), y-intercept \\( = 0.477 \\)' }
    },
    {
        id: 'el6-050', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 50', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 5x^3 \\) is plotted as \\( \\log y \\) against \\( \\log x \\). Find the gradient and y-intercept.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides', workingLatex: '\\log y = \\log(5x^3)', explanation: 'Taking \\( \\log \\) of both sides linearises the power relationship.' },
            { stepNumber: 2, description: 'Apply log laws', workingLatex: '\\log y = \\log 5 + 3\\log x', explanation: 'Using \\( \\log(ab) = \\log a + \\log b \\) and \\( \\log x^n = n\\log x \\) separates the terms.' },
            { stepNumber: 3, description: 'Evaluate constants', workingLatex: '\\log y = 3\\log x + 0.699', explanation: 'Comparing with \\( Y = mX + c \\), the gradient is 3 and the intercept is \\( \\log 5 = 0.699 \\).',
                diagram: {
                    xMin: -0.5, xMax: 2.5, yMin: -1, yMax: 8,
                    xLabel: '\\log x', yLabel: '\\log y',
                    xTicks: [0, 0.5, 1, 1.5, 2],
                    yTicks: [0, 2, 4, 6, 8],
                    curves: [{ points: sample(x => 3 * x + 0.699, -0.2, 2.3), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [0, 0.699], label: '(0, log 5)', labelAnchor: 'e', color: '#d4775c' }
                    ],
                    lines: [{ from: [0.5, 2.199], to: [1.5, 5.199], color: '#888', dashed: true, label: 'gradient = 3', labelAt: [1.6, 4.5] }]
                }
            }
        ], finalAnswer: 'Gradient \\( = 3 \\), y-intercept \\( = 0.699 \\)' }
    },
    {
        id: 'el6-051', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 51', difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( \\log x \\) and gets gradient 0.5 and intercept 1. What is the relationship?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the log equation', workingLatex: '\\log y = 0.5\\log x + 1', explanation: 'The gradient gives the power \\( n = 0.5 \\) and the intercept gives \\( \\log a = 1 \\).' },
            { stepNumber: 2, description: 'Find a from intercept', workingLatex: 'a = 10^1 = 10', explanation: 'Since \\( \\log a = 1 \\), we have \\( a = 10 \\).' },
            { stepNumber: 3, description: 'Write relationship', workingLatex: 'y = 10 \\cdot x^{0.5} = 10\\sqrt{x}', explanation: 'Substituting \\( a = 10 \\) and \\( n = 0.5 \\) into \\( y = ax^n \\) gives the final relationship.' }
        ], finalAnswer: '\\( y = 10\\sqrt{x} \\)' }
    },
    {
        id: 'el6-052', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 52', difficulty: 'Foundation',
        questionText: 'A student plots \\( \\log y \\) against \\( x \\) and gets a straight line. Another plots \\( \\log y \\) against \\( \\log x \\) and gets a curve. What type of relationship does the data follow?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify the linear graph', workingLatex: '\\log y = mx + c', explanation: 'A straight line on a \\( \\log y \\) vs \\( x \\) graph indicates an exponential model, since taking logs of \\( y = kb^x \\) gives a linear equation in \\( x \\).' },
            { stepNumber: 2, description: 'State the relationship', workingLatex: 'y = kb^x', explanation: 'The curve on the \\( \\log y \\) vs \\( \\log x \\) plot confirms it is not a power law, so the data follows an exponential relationship.' }
        ], finalAnswer: 'Exponential: \\( y = kb^x \\)' }
    },
    {
        id: 'el6-053', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 53', difficulty: 'Foundation',
        questionText: 'Given the line \\( \\log y = -0.5\\log x + 2 \\), find \\( x \\) when \\( y = 50 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute y = 50', workingLatex: '\\log 50 = -0.5\\log x + 2', explanation: 'Replacing \\( y \\) with 50 in the given equation.' },
            { stepNumber: 2, description: 'Evaluate log 50', workingLatex: '1.699 = -0.5\\log x + 2', explanation: 'Using \\( \\log 50 = 1.699 \\) gives a linear equation in \\( \\log x \\).' },
            { stepNumber: 3, description: 'Rearrange for log x', workingLatex: '-0.5\\log x = 1.699 - 2 = -0.301 \\implies \\log x = 0.602', explanation: 'Subtracting 2 from both sides and dividing by \\( -0.5 \\) isolates \\( \\log x \\).' },
            { stepNumber: 4, description: 'Find x', workingLatex: 'x = 10^{0.602} = 4', explanation: 'Exponentiating with base 10 gives \\( x = 4 \\).' }
        ], finalAnswer: '\\( x = 4 \\)' }
    },
    {
        id: 'el6-054', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 54', difficulty: 'Foundation',
        questionText: 'Given \\( \\log y = 0.4x + 0.8 \\), find \\( x \\) when \\( y = 1000 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find log y', workingLatex: '\\log 1000 = 3', explanation: 'Since \\( 1000 = 10^3 \\), we have \\( \\log 1000 = 3 \\).' },
            { stepNumber: 2, description: 'Substitute into equation', workingLatex: '3 = 0.4x + 0.8', explanation: 'Replacing \\( \\log y \\) with 3 in the given linear equation.' },
            { stepNumber: 3, description: 'Solve for x', workingLatex: '0.4x = 2.2 \\implies x = 5.5', explanation: 'Subtracting 0.8 and dividing by 0.4 gives \\( x = 5.5 \\).' }
        ], finalAnswer: '\\( x = 5.5 \\)' }
    },
    {
        id: 'el6-055', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 55', difficulty: 'Foundation',
        questionText: 'The speed \\( v \\) and distance \\( d \\) of planets satisfy \\( v = kd^n \\). A plot of \\( \\log v \\) against \\( \\log d \\) gives gradient \\( -0.5 \\) and intercept \\( 2.1 \\). Find \\( k \\) and \\( n \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Identify n from gradient', workingLatex: 'n = -0.5', explanation: 'On a \\( \\log v \\) vs \\( \\log d \\) graph, the gradient equals the power \\( n \\).' },
            { stepNumber: 2, description: 'Identify log k from intercept', workingLatex: '\\log k = 2.1', explanation: 'The y-intercept of the line equals \\( \\log k \\).' },
            { stepNumber: 3, description: 'Find k', workingLatex: 'k = 10^{2.1} = 126', explanation: 'Exponentiating gives \\( k \\approx 126 \\) to 3 significant figures.' }
        ], finalAnswer: '\\( n = -0.5 \\), \\( k = 126 \\)' }
    },
    {
        id: 'el6-056', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 56', difficulty: 'Foundation',
        questionText: 'A relationship \\( y = 4e^{-0.3x} \\) is plotted as \\( \\ln y \\) against \\( x \\). State the gradient and intercept.',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take ln of both sides', workingLatex: '\\ln y = \\ln 4 + \\ln(e^{-0.3x}) = \\ln 4 - 0.3x', explanation: 'Using \\( \\ln(ab) = \\ln a + \\ln b \\) and \\( \\ln e^k = k \\) linearises the equation.' },
            { stepNumber: 2, description: 'Identify gradient and intercept', workingLatex: '\\ln y = -0.3x + 1.386', explanation: 'Comparing with \\( Y = mx + c \\), the gradient is \\( -0.3 \\) and the y-intercept is \\( \\ln 4 = 1.386 \\).',
                diagram: {
                    xMin: -1, xMax: 8, yMin: -1.5, yMax: 2,
                    xLabel: 'x', yLabel: '\\ln y',
                    xTicks: [0, 2, 4, 6, 8],
                    yTicks: [-1, 0, 1, 2],
                    curves: [{ points: sample(x => -0.3 * x + 1.386, -0.5, 7.5), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [0, 1.386], label: '(0, ln 4)', labelAnchor: 'e', color: '#d4775c' }
                    ],
                    lines: [{ from: [1, 1.086], to: [4, 0.186], color: '#888', dashed: true, label: 'gradient = -0.3', labelAt: [4.2, 0.4] }]
                }
            }
        ], finalAnswer: 'Gradient \\( = -0.3 \\), intercept \\( = \\ln 4 = 1.386 \\)' }
    },
    {
        id: 'el6-057', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 57', difficulty: 'Foundation',
        questionText: 'Two points on a \\( \\ln y \\) vs \\( x \\) graph are \\( (2, 3.4) \\) and \\( (8, 6.4) \\). Find \\( k \\) and \\( c \\) in \\( y = ke^{cx} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write linearised form', workingLatex: '\\ln y = cx + \\ln k', explanation: 'Taking \\( \\ln \\) of \\( y = ke^{cx} \\) gives a linear equation in \\( x \\) with gradient \\( c \\) and intercept \\( \\ln k \\).' },
            { stepNumber: 2, description: 'Find gradient c', workingLatex: 'c = \\frac{6.4 - 3.4}{8 - 2} = \\frac{3}{6} = 0.5', explanation: 'The gradient of the line through the two points gives the value of \\( c \\).' },
            { stepNumber: 3, description: 'Substitute to find ln k', workingLatex: '3.4 = 0.5(2) + \\ln k \\implies \\ln k = 3.4 - 1 = 2.4', explanation: 'Substituting the point \\( (2, 3.4) \\) into the linear equation and solving for \\( \\ln k \\).' },
            { stepNumber: 4, description: 'Exponentiate to find k', workingLatex: 'k = e^{2.4} = 11.0', explanation: 'Raising \\( e \\) to the power of 2.4 gives \\( k \\approx 11.0 \\) to 3 significant figures.' }
        ], finalAnswer: '\\( k = 11.0 \\), \\( c = 0.5 \\)' }
    },
    {
        id: 'el6-058', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 58', difficulty: 'Foundation',
        questionText: 'A decay process has data: \\( t = 0, y = 100 \\); \\( t = 10, y = 37 \\). Find the equation \\( y = Ae^{-kt} \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find A using t = 0', workingLatex: 'y(0) = Ae^{0} = A = 100', explanation: 'When \\( t = 0 \\), \\( e^{0} = 1 \\), so the initial value gives \\( A = 100 \\) directly.' },
            { stepNumber: 2, description: 'Substitute second data point', workingLatex: '37 = 100e^{-10k}', explanation: 'Substituting \\( t = 10 \\) and \\( y = 37 \\) into the equation with \\( A = 100 \\).' },
            { stepNumber: 3, description: 'Isolate the exponential', workingLatex: 'e^{-10k} = 0.37', explanation: 'Dividing both sides by 100 isolates the exponential term.' },
            { stepNumber: 4, description: 'Take ln and solve for k', workingLatex: '-10k = \\ln 0.37 \\implies k = \\frac{-\\ln 0.37}{10} = 0.0994', explanation: 'Taking the natural logarithm of both sides and dividing by \\( -10 \\) gives \\( k = 0.0994 \\).' }
        ], finalAnswer: '\\( y = 100e^{-0.0994t} \\)' }
    },
    {
        id: 'el6-059', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 59', difficulty: 'Foundation',
        questionText: 'Which graph type would you plot to test if data follows: (a) \\( y = ax^n \\); (b) \\( y = kb^x \\); (c) \\( y = ke^{cx} \\)?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Power law linearisation', workingLatex: 'y = ax^n \\implies \\log y = n\\log x + \\log a', explanation: 'Taking \\( \\log \\) of a power law gives a linear relationship between \\( \\log y \\) and \\( \\log x \\).' },
            { stepNumber: 2, description: 'Exponential (base b) linearisation', workingLatex: 'y = kb^x \\implies \\log y = x\\log b + \\log k', explanation: 'Taking \\( \\log \\) of an exponential in base \\( b \\) gives a linear relationship between \\( \\log y \\) and \\( x \\).' },
            { stepNumber: 3, description: 'Natural exponential linearisation', workingLatex: 'y = ke^{cx} \\implies \\ln y = cx + \\ln k', explanation: 'Taking \\( \\ln \\) of a natural exponential gives a linear relationship between \\( \\ln y \\) and \\( x \\).' }
        ], finalAnswer: '(a) \\( \\log y \\) vs \\( \\log x \\); (b) \\( \\log y \\) vs \\( x \\); (c) \\( \\ln y \\) vs \\( x \\)' }
    },
    {
        id: 'el6-060', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 60', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) gives gradient 3 and passes through \\( (1, 2) \\). Find the equation and evaluate \\( y \\) when \\( x = 10 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write line equation with gradient', workingLatex: '\\log y = 3\\log x + c', explanation: 'The gradient of the \\( \\log y \\) vs \\( \\log x \\) graph gives the power \\( n = 3 \\).' },
            { stepNumber: 2, description: 'Find intercept c', workingLatex: '2 = 3(1) + c \\implies c = -1', explanation: 'Substituting the point \\( (1, 2) \\) into the equation to find \\( c = -1 \\).' },
            { stepNumber: 3, description: 'Convert to power form', workingLatex: '\\log y = 3\\log x - 1 \\implies y = 10^{-1} \\cdot x^3 = 0.1x^3', explanation: 'Since \\( c = \\log a = -1 \\), we have \\( a = 10^{-1} = 0.1 \\), giving \\( y = 0.1x^3 \\).' },
            { stepNumber: 4, description: 'Evaluate y when x = 10', workingLatex: 'y = 0.1 \\times 10^3 = 0.1 \\times 1000 = 100', explanation: 'Substituting \\( x = 10 \\) into the equation gives \\( y = 100 \\).' }
        ], finalAnswer: '\\( y = 0.1x^3 \\); \\( y(10) = 100 \\)' }
    },
    {
        id: 'el6-061', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 61', difficulty: 'Foundation',
        questionText: 'Convert \\( y = 7 \\times 5^x \\) into the form \\( \\log y = mx + c \\) and state \\( m \\) and \\( c \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides', workingLatex: '\\log y = \\log(7 \\times 5^x) = \\log 7 + x\\log 5', explanation: 'Applying \\( \\log(ab) = \\log a + \\log b \\) and \\( \\log(5^x) = x\\log 5 \\) separates the equation into linear form.' },
            { stepNumber: 2, description: 'Evaluate constants', workingLatex: '\\log y = 0.699x + 0.845', explanation: 'So \\( m = \\log 5 = 0.699 \\) and \\( c = \\log 7 = 0.845 \\).' }
        ], finalAnswer: '\\( m = 0.699 \\), \\( c = 0.845 \\)' }
    },
    {
        id: 'el6-062', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 62', difficulty: 'Foundation',
        questionText: 'Convert \\( y = 8x^{2.5} \\) into the form \\( \\log y = n\\log x + \\log a \\) and state \\( n \\) and \\( \\log a \\).',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both sides', workingLatex: '\\log y = \\log(8x^{2.5}) = \\log 8 + 2.5\\log x', explanation: 'Applying \\( \\log(ab) = \\log a + \\log b \\) and \\( \\log(x^n) = n\\log x \\) linearises the power equation.' },
            { stepNumber: 2, description: 'Identify n and log a', workingLatex: '\\log y = 2.5\\log x + 0.903', explanation: 'Comparing with the required form gives \\( n = 2.5 \\) and \\( \\log a = \\log 8 = 0.903 \\).' }
        ], finalAnswer: '\\( n = 2.5 \\), \\( \\log a = 0.903 \\)' }
    },
    {
        id: 'el6-063', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 63', difficulty: 'Foundation',
        questionText: 'The line \\( \\log y = 2\\log x + 0.3 \\) intersects the line \\( \\log y = 3 \\). Find the value of \\( x \\) at the intersection.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set equations equal', workingLatex: '2\\log x + 0.3 = 3', explanation: 'At the intersection, both expressions for \\( \\log y \\) are equal.' },
            { stepNumber: 2, description: 'Solve for log x', workingLatex: '2\\log x = 2.7 \\implies \\log x = 1.35', explanation: 'Subtracting 0.3 from both sides and dividing by 2 isolates \\( \\log x \\).' },
            { stepNumber: 3, description: 'Find x', workingLatex: 'x = 10^{1.35} = 22.4', explanation: 'Exponentiating with base 10 gives \\( x \\approx 22.4 \\) to 3 significant figures.' }
        ], finalAnswer: '\\( x = 22.4 \\)' }
    },
    {
        id: 'el6-064', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 64', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log P \\) against \\( \\log V \\) for a gas gives a straight line with gradient \\( -1.4 \\) and intercept 2.5. Find \\( P \\) when \\( V = 10 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the linear equation', workingLatex: '\\log P = -1.4\\log V + 2.5', explanation: 'The gradient is \\( -1.4 \\) and the y-intercept is 2.5 on the \\( \\log P \\) vs \\( \\log V \\) graph.' },
            { stepNumber: 2, description: 'Substitute V = 10', workingLatex: '\\log P = -1.4\\log 10 + 2.5 = -1.4 + 2.5 = 1.1', explanation: 'Since \\( \\log 10 = 1 \\), substituting gives \\( \\log P = 1.1 \\).' },
            { stepNumber: 3, description: 'Find P', workingLatex: 'P = 10^{1.1} = 12.6', explanation: 'Exponentiating with base 10 gives \\( P \\approx 12.6 \\) to 3 significant figures.' }
        ], finalAnswer: '\\( P = 12.6 \\)' }
    },
    {
        id: 'el6-065', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 65', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( x \\) has equation \\( \\log y = -0.15x + 4 \\). Find the half-life (when y = half initial value).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find initial value at x = 0', workingLatex: '\\log y_0 = -0.15(0) + 4 = 4 \\implies y_0 = 10^4 = 10000', explanation: 'Substituting \\( x = 0 \\) into the equation gives the initial value \\( y_0 = 10000 \\).' },
            { stepNumber: 2, description: 'Find half the initial value', workingLatex: '\\frac{y_0}{2} = 5000', explanation: 'The half-life is the value of \\( x \\) at which \\( y \\) falls to half of 10000, i.e. 5000.' },
            { stepNumber: 3, description: 'Set up equation for half-life', workingLatex: '\\log 5000 = -0.15x + 4', explanation: 'Substituting \\( y = 5000 \\) into the linear equation to find the corresponding \\( x \\).' },
            { stepNumber: 4, description: 'Solve for x', workingLatex: '3.699 = -0.15x + 4 \\implies -0.15x = -0.301 \\implies x = 2.01', explanation: 'Rearranging gives \\( x = 2.01 \\) as the half-life.',
                diagram: {
                    xMin: -2, xMax: 30, yMin: -1, yMax: 5,
                    xLabel: 'x', yLabel: '\\log y',
                    xTicks: [0, 5, 10, 15, 20, 25],
                    yTicks: [0, 1, 2, 3, 4],
                    curves: [{ points: sample(x => -0.15 * x + 4, -1, 28), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [0, 4], label: '(0, 4)', labelAnchor: 'e', color: '#d4775c' },
                        { at: [2.01, 3.699], label: 'half-life', labelAnchor: 'n', color: '#d4775c' }
                    ],
                    lines: [{ from: [0, 4], to: [26.67, 0], color: '#888', dashed: true, label: 'gradient = -0.15', labelAt: [15, 2.5] }]
                }
            }
        ], finalAnswer: 'Half-life \\( = 2.01 \\) units' }
    },
    {
        id: 'el6-066', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 66', difficulty: 'Foundation',
        questionText: 'Show that \\( y = 2x^3 \\) and \\( y = 8x \\) intersect when \\( x = 2 \\) by using logarithmic methods.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Take log of both equations', workingLatex: '\\log(2x^3) = \\log(8x)', explanation: 'At the intersection \\( y \\) values are equal, so we can equate and take logs of both sides.' },
            { stepNumber: 2, description: 'Expand using log laws', workingLatex: '\\log 2 + 3\\log x = \\log 8 + \\log x', explanation: 'Applying \\( \\log(ab) = \\log a + \\log b \\) and \\( \\log(x^n) = n\\log x \\) to both sides.' },
            { stepNumber: 3, description: 'Solve for x', workingLatex: '2\\log x = \\log 8 - \\log 2 = \\log 4 \\implies \\log x = \\frac{\\log 4}{2} = \\log 2 \\implies x = 2', explanation: 'Collecting \\( \\log x \\) terms and simplifying confirms \\( x = 2 \\) as required.' }
        ], finalAnswer: '\\( x = 2 \\) (verified)' }
    },
    {
        id: 'el6-067', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 67', difficulty: 'Foundation',
        questionText: 'The time \\( t \\) (s) for a pendulum to swing depends on length \\( l \\) (m): \\( t = al^n \\). A plot of \\( \\log t \\) vs \\( \\log l \\) gives gradient 0.5 and intercept 0.3. Find \\( a \\) and \\( n \\), and find \\( t \\) when \\( l = 4 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write linearised equation', workingLatex: '\\log t = n\\log l + \\log a', explanation: 'Taking \\( \\log \\) of \\( t = al^n \\) gives a linear equation in \\( \\log l \\) with gradient \\( n \\) and intercept \\( \\log a \\).' },
            { stepNumber: 2, description: 'Identify n from gradient', workingLatex: 'n = 0.5', explanation: 'The gradient of the \\( \\log t \\) vs \\( \\log l \\) graph equals the power \\( n \\).' },
            { stepNumber: 3, description: 'Find a from intercept', workingLatex: '\\log a = 0.3 \\implies a = 10^{0.3} = 2.0', explanation: 'The y-intercept equals \\( \\log a \\), so \\( a = 10^{0.3} \\approx 2.0 \\).' },
            { stepNumber: 4, description: 'Write the equation', workingLatex: 't = 2l^{0.5} = 2\\sqrt{l}', explanation: 'Substituting \\( a = 2 \\) and \\( n = 0.5 \\) gives the model equation.' },
            { stepNumber: 5, description: 'Evaluate t when l = 4', workingLatex: 't = 2\\sqrt{4} = 2 \\times 2 = 4 \\text{ s}', explanation: 'Substituting \\( l = 4 \\) into the equation gives \\( t = 4 \\) seconds.' }
        ], finalAnswer: '\\( a = 2 \\), \\( n = 0.5 \\); \\( t(4) = 4 \\) s' }
    },
    {
        id: 'el6-068', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 68', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\ln N \\) against \\( t \\) has equation \\( \\ln N = 0.2t + 5 \\). Find: (a) the initial value; (b) the doubling time.',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) Substitute t = 0', workingLatex: '\\ln N = 0.2(0) + 5 = 5', explanation: 'At \\( t = 0 \\) the equation reduces to \\( \\ln N = 5 \\).' },
            { stepNumber: 2, description: 'Exponentiate to find N', workingLatex: 'N = e^5 = 148.4', explanation: 'Raising \\( e \\) to the power 5 gives the initial population \\( N_0 \\approx 148.4 \\).' },
            { stepNumber: 3, description: '(b) Set up doubling equation', workingLatex: '\\ln(2N_0) = 0.2t_d + 5', explanation: 'The doubling time \\( t_d \\) is when \\( N = 2N_0 \\), so we substitute this into the linear equation.' },
            { stepNumber: 4, description: 'Simplify using log laws', workingLatex: '\\ln 2 + \\ln N_0 = 0.2t_d + 5 \\implies \\ln 2 + 5 = 0.2t_d + 5', explanation: 'Since \\( \\ln N_0 = 5 \\), the equation simplifies by cancelling the 5 on both sides.' },
            { stepNumber: 5, description: 'Solve for doubling time', workingLatex: 't_d = \\frac{\\ln 2}{0.2} = \\frac{0.693}{0.2} = 3.47', explanation: 'Dividing \\( \\ln 2 \\) by the growth rate 0.2 gives the doubling time.' }
        ], finalAnswer: '(a) \\( N_0 = 148.4 \\); (b) doubling time \\( = 3.47 \\) time units' }
    },
    {
        id: 'el6-069', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 69', difficulty: 'Foundation',
        questionText: 'Two models are proposed for data: Model A \\( y = ax^n \\) and Model B \\( y = kb^x \\). Plotting \\( \\log y \\) vs \\( \\log x \\) gives a curve but \\( \\log y \\) vs \\( x \\) gives a line. Which model fits?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Eliminate Model A', workingLatex: 'y = ax^n \\implies \\log y \\text{ vs } \\log x \\text{ is a curve (not straight)}', explanation: 'If Model A were correct, \\( \\log y \\) vs \\( \\log x \\) would be a straight line, but the data shows a curve.' },
            { stepNumber: 2, description: 'Confirm Model B', workingLatex: 'y = kb^x \\implies \\log y = x\\log b + \\log k \\text{ (straight line)}', explanation: 'A straight line on the \\( \\log y \\) vs \\( x \\) plot confirms the data follows the exponential model \\( y = kb^x \\).' }
        ], finalAnswer: 'Model B: \\( y = kb^x \\)' }
    },
    {
        id: 'el6-070', topicRef: 'el6', topicTitle: 'Using Logarithmic Graphs 70', difficulty: 'Foundation',
        questionText: 'A graph of \\( \\log y \\) against \\( \\log x \\) passes through \\( (0, 1.5) \\) and \\( (2, 4.5) \\). Find the equation \\( y = ax^n \\), then find: (a) \\( y \\) when \\( x = 100 \\); (b) \\( x \\) when \\( y = 1000 \\).',
        marks: 6, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find gradient n', workingLatex: 'n = \\frac{4.5 - 1.5}{2 - 0} = \\frac{3}{2} = 1.5', explanation: 'The gradient of the \\( \\log y \\) vs \\( \\log x \\) line gives the power \\( n = 1.5 \\).' },
            { stepNumber: 2, description: 'Find a from y-intercept', workingLatex: '\\log a = 1.5 \\implies a = 10^{1.5} \\approx 31.6', explanation: 'The y-intercept is \\( \\log a = 1.5 \\) (the value when \\( \\log x = 0 \\)), so \\( a \\approx 31.6 \\).' },
            { stepNumber: 3, description: 'Write the power equation', workingLatex: 'y = 31.6x^{1.5}', explanation: 'Combining the values of \\( a \\) and \\( n \\) gives the full equation.' },
            { stepNumber: 4, description: '(a) Substitute x = 100', workingLatex: 'y = 31.6 \\times 100^{1.5} = 31.6 \\times 1000 = 31600', explanation: 'Since \\( 100^{1.5} = (10^2)^{1.5} = 10^3 = 1000 \\), we get \\( y = 31600 \\).' },
            { stepNumber: 5, description: '(b) Substitute y = 1000', workingLatex: '1000 = 31.6x^{1.5} \\implies x^{1.5} = 31.6', explanation: 'Dividing both sides by 31.6 isolates the power of \\( x \\).' },
            { stepNumber: 6, description: 'Solve for x', workingLatex: 'x = 31.6^{2/3} = (10^{1.5})^{2/3} = 10^1 = 10.0', explanation: 'Raising both sides to the power \\( \\frac{2}{3} \\) (the reciprocal of 1.5) gives \\( x = 10 \\).',
                diagram: {
                    xMin: -0.5, xMax: 3, yMin: -0.5, yMax: 6,
                    xLabel: '\\log x', yLabel: '\\log y',
                    xTicks: [0, 0.5, 1, 1.5, 2, 2.5],
                    yTicks: [0, 1, 2, 3, 4, 5],
                    curves: [{ points: sample(x => 1.5 * x + 1.5, -0.3, 2.8), color: '#0d9488', width: 2.5 }],
                    points: [
                        { at: [0, 1.5], label: '(0, 1.5)', labelAnchor: 'w', color: '#d4775c' },
                        { at: [2, 4.5], label: '(2, 4.5)', labelAnchor: 'w', color: '#d4775c' },
                        { at: [0.5, 2.3], color: '#d4775c' },
                        { at: [1, 3.0], color: '#d4775c' },
                        { at: [1.5, 3.7], color: '#d4775c' },
                        { at: [2.5, 5.2], color: '#d4775c' }
                    ],
                    lines: [{ from: [0.5, 2.25], to: [1.5, 3.75], color: '#888', dashed: true, label: 'gradient = 1.5', labelAt: [1.6, 3.2] }]
                }
            }
        ], finalAnswer: '\\( y = 31.6x^{1.5} \\); (a) \\( y = 31600 \\); (b) \\( x = 10 \\)' }
    },
];
