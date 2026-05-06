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

    // ── Type A: Direct proportion y ∝ x (Q1–Q8) ──────────────────────────────

    {
        id: 'cg4-001',
        topicRef: 'cg4',
        topicTitle: 'Proportion 01',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x \\) and that \\( y = 45 \\) when \\( x = 9 \\), find \\( y \\) when \\( x = 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the proportionality statement as an equation.',
                    workingLatex: 'y = kx',
                    explanation: '\\( y \\propto x \\) means \\( y = kx \\) for some constant \\( k \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the known values to find \\( k \\).',
                    workingLatex: '45 = k \\times 9 \\implies k = 5',
                    explanation: 'Divide both sides by 9.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the equation and substitute \\( x = 5 \\).',
                    workingLatex: 'y = 5x \\implies y = 5 \\times 5 = 25',
                    explanation: 'Use the complete equation to find the required value.'
                }
            ],
            finalAnswer: '\\( y = 25 \\)'
        }
    },

    {
        id: 'cg4-002',
        topicRef: 'cg4',
        topicTitle: 'Proportion 02',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x \\) and that \\( y = 36 \\) when \\( x = 4 \\), find the value of \\( x \\) when \\( y = 63 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = kx \\) and substitute the known pair.',
                    workingLatex: '36 = k \\times 4 \\implies k = 9',
                    explanation: 'The constant of proportionality is 9.'
                },
                {
                    stepNumber: 2,
                    description: 'Form the equation.',
                    workingLatex: 'y = 9x',
                    explanation: 'Now we can use any value of \\( x \\) or \\( y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( y = 63 \\) and solve for \\( x \\).',
                    workingLatex: '63 = 9x \\implies x = 7',
                    explanation: 'Divide both sides by 9.'
                }
            ],
            finalAnswer: '\\( x = 7 \\)'
        }
    },

    {
        id: 'cg4-003',
        topicRef: 'cg4',
        topicTitle: 'Proportion 03',
        difficulty: 'Foundation',
        questionText: 'A car uses petrol directly proportional to the distance it travels. It uses 6 litres to travel 48 km. How many litres does it use to travel 200 km?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( P \\) litres of petrol and \\( d \\) km distance. Write \\( P = kd \\).',
                    workingLatex: '6 = k \\times 48 \\implies k = \\frac{6}{48} = \\frac{1}{8}',
                    explanation: 'Find the constant of proportionality.'
                },
                {
                    stepNumber: 2,
                    description: 'Write the equation.',
                    workingLatex: 'P = \\frac{1}{8}\\,d',
                    explanation: 'The car uses 1 litre per 8 km.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( d = 200 \\).',
                    workingLatex: 'P = \\frac{200}{8} = 25 \\text{ litres}',
                    explanation: 'Multiply the distance by the rate.'
                }
            ],
            finalAnswer: '\\( 25 \\) litres'
        }
    },

    {
        id: 'cg4-004',
        topicRef: 'cg4',
        topicTitle: 'Proportion 04',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x \\), that \\( y = 15 \\) when \\( x = a \\), and that \\( y = a \\) when \\( x = 60 \\), find the positive value of \\( a \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = kx \\) and use the first pair.',
                    workingLatex: '15 = ka \\implies k = \\frac{15}{a}',
                    explanation: 'Express \\( k \\) in terms of \\( a \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the second pair \\( y = a,\\, x = 60 \\).',
                    workingLatex: 'a = k \\times 60 = \\frac{15}{a} \\times 60 = \\frac{900}{a}',
                    explanation: 'Replace \\( k \\) with the expression found above.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve \\( a^2 = 900 \\).',
                    workingLatex: 'a^2 = 900 \\implies a = 30 \\quad (a > 0)',
                    explanation: 'Take the positive square root.'
                }
            ],
            finalAnswer: '\\( a = 30 \\)'
        }
    },

    {
        id: 'cg4-005',
        topicRef: 'cg4',
        topicTitle: 'Proportion 05',
        difficulty: 'Foundation',
        questionText: 'A plumber charges a call-out fee of £0 plus an amount directly proportional to the number of hours worked. She charges £84 for 3 hours. How much does she charge for 7 hours?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( C \\) = charge (£) and \\( h \\) = hours. Write \\( C = kh \\).',
                    workingLatex: '84 = k \\times 3 \\implies k = 28',
                    explanation: 'She charges £28 per hour.'
                },
                {
                    stepNumber: 2,
                    description: 'Form the equation.',
                    workingLatex: 'C = 28h',
                    explanation: 'The constant of proportionality is 28.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( h = 7 \\).',
                    workingLatex: 'C = 28 \\times 7 = £196',
                    explanation: 'Multiply hours by the rate.'
                }
            ],
            finalAnswer: '\\( £196 \\)'
        }
    },

    {
        id: 'cg4-006',
        topicRef: 'cg4',
        topicTitle: 'Proportion 06',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x \\), \\( y = 30 \\) when \\( x = 12 \\), and \\( y = 75 \\) when \\( x = a \\), find \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\) using the first known pair.',
                    workingLatex: 'k = \\frac{30}{12} = \\frac{5}{2}',
                    explanation: 'The constant of proportionality is \\( \\frac{5}{2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = 75 \\) to find \\( a \\).',
                    workingLatex: '75 = \\frac{5}{2} \\times a \\implies a = \\frac{75 \\times 2}{5} = 30',
                    explanation: 'Multiply both sides by \\( \\frac{2}{5} \\).'
                }
            ],
            finalAnswer: '\\( a = 30 \\)'
        }
    },

    {
        id: 'cg4-007',
        topicRef: 'cg4',
        topicTitle: 'Proportion 07',
        difficulty: 'Foundation',
        questionText: 'The cost \\( C \\) of printing leaflets is directly proportional to the number printed, \\( n \\). It costs £12 to print 80 leaflets. Find the cost of printing 350 leaflets.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( C = kn \\) and find \\( k \\).',
                    workingLatex: '12 = k \\times 80 \\implies k = \\frac{12}{80} = 0.15',
                    explanation: 'Each leaflet costs £0.15 to print.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( n = 350 \\).',
                    workingLatex: 'C = 0.15 \\times 350 = £52.50',
                    explanation: 'Multiply number of leaflets by cost per leaflet.'
                }
            ],
            finalAnswer: '\\( £52.50 \\)'
        }
    },

    {
        id: 'cg4-008',
        topicRef: 'cg4',
        topicTitle: 'Proportion 08',
        difficulty: 'Foundation',
        questionText: 'The extension \\( e \\) cm of a spring is directly proportional to the force \\( F \\) N applied to it. The spring extends 6 cm when a force of 15 N is applied.\n\na) Find the equation connecting \\( e \\) and \\( F \\).\n\nb) Find the extension when a force of 40 N is applied.\n\nc) Find the force needed to extend the spring by 9 cm.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( e = kF \\) and substitute the known values.',
                    workingLatex: '6 = k \\times 15 \\implies k = \\frac{6}{15} = \\frac{2}{5}',
                    explanation: 'Find the constant of proportionality.'
                },
                {
                    stepNumber: 2,
                    description: 'State the equation (part a).',
                    workingLatex: 'e = \\frac{2}{5}F',
                    explanation: 'This is the complete relationship between \\( e \\) and \\( F \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: substitute \\( F = 40 \\).',
                    workingLatex: 'e = \\frac{2}{5} \\times 40 = 16 \\text{ cm}',
                    explanation: 'The spring extends 16 cm.'
                },
                {
                    stepNumber: 4,
                    description: 'Part c: substitute \\( e = 9 \\) and solve for \\( F \\).',
                    workingLatex: '9 = \\frac{2}{5}F \\implies F = \\frac{9 \\times 5}{2} = 22.5 \\text{ N}',
                    explanation: 'Multiply both sides by \\( \\frac{5}{2} \\).'
                }
            ],
            finalAnswer: 'a) \\( e = \\frac{2}{5}F \\) \\quad b) \\( 16 \\) cm \\quad c) \\( 22.5 \\) N'
        }
    },

    // ── Type B: Inverse proportion y ∝ 1/x (Q9–Q15) ─────────────────────────

    {
        id: 'cg4-009',
        topicRef: 'cg4',
        topicTitle: 'Proportion 09',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\) is inversely proportional to \\( x \\), and that \\( y = 8 \\) when \\( x = 5 \\), find \\( y \\) when \\( x = 20 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the inverse proportion equation.',
                    workingLatex: 'y = \\frac{k}{x}',
                    explanation: '\\( y \\propto \\frac{1}{x} \\) is equivalent to \\( y = \\frac{k}{x} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( k \\) using the known pair.',
                    workingLatex: '8 = \\frac{k}{5} \\implies k = 40',
                    explanation: 'Multiply both sides by 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 20 \\).',
                    workingLatex: 'y = \\frac{40}{20} = 2',
                    explanation: 'When \\( x \\) increases by a factor of 4, \\( y \\) decreases by a factor of 4.'
                }
            ],
            finalAnswer: '\\( y = 2 \\)'
        }
    },

    {
        id: 'cg4-010',
        topicRef: 'cg4',
        topicTitle: 'Proportion 10',
        difficulty: 'Foundation',
        questionText: 'Given that \\( x \\) and \\( y \\) are inversely proportional, \\( y = 4 \\) when \\( x = 15 \\), and \\( y = a \\) when \\( x = 3 \\), find \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: 'k = xy = 4 \\times 15 = 60',
                    explanation: 'For inverse proportion, \\( xy = k \\) is constant.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 3 \\).',
                    workingLatex: 'a = \\frac{60}{3} = 20',
                    explanation: 'Divide the constant by the new \\( x \\)-value.'
                }
            ],
            finalAnswer: '\\( a = 20 \\)'
        }
    },

    {
        id: 'cg4-011',
        topicRef: 'cg4',
        topicTitle: 'Proportion 11',
        difficulty: 'Foundation',
        questionText: 'The time \\( t \\) hours to complete a journey is inversely proportional to the average speed \\( v \\) km/h. A journey takes 3 hours at 80 km/h. How long does it take at 60 km/h?',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( t = \\frac{k}{v} \\) and find \\( k \\).',
                    workingLatex: 'k = t \\times v = 3 \\times 80 = 240',
                    explanation: 'The constant \\( k \\) equals distance (240 km).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( v = 60 \\).',
                    workingLatex: 't = \\frac{240}{60} = 4 \\text{ hours}',
                    explanation: 'A lower speed means a longer journey time.'
                }
            ],
            finalAnswer: '\\( 4 \\) hours'
        }
    },

    {
        id: 'cg4-012',
        topicRef: 'cg4',
        topicTitle: 'Proportion 12',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\dfrac{1}{x} \\), that \\( y = 9 \\) when \\( x = 4 \\), and that \\( y = 36 \\) when \\( x = a \\), find \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the constant \\( k = xy \\).',
                    workingLatex: 'k = 9 \\times 4 = 36',
                    explanation: 'For inverse proportion \\( xy \\) is always equal to \\( k \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use the second pair to find \\( a \\).',
                    workingLatex: '36 \\times a = 36 \\implies a = 1',
                    explanation: 'Divide both sides by 36.'
                }
            ],
            finalAnswer: '\\( a = 1 \\)'
        }
    },

    {
        id: 'cg4-013',
        topicRef: 'cg4',
        topicTitle: 'Proportion 13',
        difficulty: 'Foundation',
        questionText: 'The number of days \\( d \\) needed to build a wall is inversely proportional to the number of workers \\( w \\). With 6 workers the job takes 10 days.\n\na) How many days would 4 workers take?\n\nb) How many workers are needed to complete the job in 5 days?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: 'k = d \\times w = 10 \\times 6 = 60',
                    explanation: 'The constant represents the total worker-days needed.'
                },
                {
                    stepNumber: 2,
                    description: 'Part a: substitute \\( w = 4 \\).',
                    workingLatex: 'd = \\frac{60}{4} = 15 \\text{ days}',
                    explanation: 'Fewer workers means more days.'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: substitute \\( d = 5 \\).',
                    workingLatex: 'w = \\frac{60}{5} = 12 \\text{ workers}',
                    explanation: 'More workers means fewer days.'
                }
            ],
            finalAnswer: 'a) \\( 15 \\) days \\quad b) \\( 12 \\) workers'
        }
    },

    {
        id: 'cg4-014',
        topicRef: 'cg4',
        topicTitle: 'Proportion 14',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\dfrac{1}{x} \\), \\( y = a \\) when \\( x = a \\), and \\( y = 2 \\) when \\( x = 18 \\) (with \\( a > 0 \\)), find \\( a \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the inverse proportion relationship.',
                    workingLatex: 'y = \\frac{k}{x} \\implies xy = k',
                    explanation: 'For inverse proportion, the product \\(xy\\) is constant.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the first pair: \\(y = a\\) when \\(x = a\\).',
                    workingLatex: 'k = a \\times a = a^2',
                    explanation: 'Since both \\(x\\) and \\(y\\) equal \\(a\\), the constant is \\(a^2\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the second pair: \\(y = 2\\) when \\(x = 18\\).',
                    workingLatex: 'k = 18 \\times 2 = 36',
                    explanation: 'Substituting the second pair gives a numerical value for \\(k\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set the two expressions for \\(k\\) equal and solve.',
                    workingLatex: 'a^2 = 36 \\implies a = 6',
                    explanation: 'Take the positive square root since \\(a > 0\\).'
                }
            ],
            finalAnswer: '\\(a = 6\\)'
        }
    },

    {
        id: 'cg4-015',
        topicRef: 'cg4',
        topicTitle: 'Proportion 15',
        difficulty: 'Foundation',
        questionText: 'The volume \\( V \\) of a fixed mass of gas is inversely proportional to the pressure \\( P \\). When \\( P = 250 \\) Pa the volume is \\( 4 \\) m³. Find the pressure when the volume is \\( 2.5 \\) m³.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( V = \\frac{k}{P} \\) and find \\( k \\).',
                    workingLatex: 'k = VP = 4 \\times 250 = 1000',
                    explanation: '\\( k \\) is the constant product of volume and pressure.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( V = 2.5 \\).',
                    workingLatex: 'P = \\frac{1000}{2.5} = 400 \\text{ Pa}',
                    explanation: 'Reducing the volume increases the pressure, since they are inversely proportional.'
                }
            ],
            finalAnswer: '\\( P = 400 \\) Pa'
        }
    },

    // ── Type C: Direct proportion y ∝ x² (Q16–Q21) ───────────────────────────

    {
        id: 'cg4-016',
        topicRef: 'cg4',
        topicTitle: 'Proportion 16',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x^2 \\) and that \\( y = 75 \\) when \\( x = 5 \\), find \\( y \\) when \\( x = 4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = kx^2 \\) and substitute.',
                    workingLatex: '75 = k \\times 25 \\implies k = 3',
                    explanation: 'Divide both sides by \\( 5^2 = 25 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 4 \\).',
                    workingLatex: 'y = 3 \\times 16 = 48',
                    explanation: 'Square \\( x \\) first, then multiply by \\( k \\).'
                }
            ],
            finalAnswer: '\\( y = 48 \\)'
        }
    },

    {
        id: 'cg4-017',
        topicRef: 'cg4',
        topicTitle: 'Proportion 17',
        difficulty: 'Foundation',
        questionText: 'The surface area \\( A \\) cm² of a sphere is directly proportional to the square of its radius \\( r \\) cm. When \\( r = 3 \\), \\( A = 36\\pi \\). Find \\( A \\) when \\( r = 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( A = kr^2 \\) and substitute \\( r=3, A=36\\pi \\).',
                    workingLatex: '36\\pi = k \\times 9 \\implies k = 4\\pi',
                    explanation: 'Divide both sides by 9.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( r = 5 \\).',
                    workingLatex: 'A = 4\\pi \\times 25 = 100\\pi \\text{ cm}^2',
                    explanation: 'The surface area of a sphere is indeed \\( 4\\pi r^2 \\).'
                }
            ],
            finalAnswer: '\\( A = 100\\pi \\) cm²'
        }
    },

    {
        id: 'cg4-018',
        topicRef: 'cg4',
        topicTitle: 'Proportion 18',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x^2 \\) and \\( y = 20 \\) when \\( x = 2 \\), find the value of \\( x \\) (with \\( x > 0 \\)) when \\( y = 125 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: '20 = k \\times 4 \\implies k = 5',
                    explanation: 'Divide both sides by \\( 2^2 = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( y = 125 \\).',
                    workingLatex: '125 = 5x^2 \\implies x^2 = 25',
                    explanation: 'Divide both sides by 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the positive square root.',
                    workingLatex: 'x = 5',
                    explanation: 'Since \\( x > 0 \\), take the positive root only.'
                }
            ],
            finalAnswer: '\\( x = 5 \\)'
        }
    },

    {
        id: 'cg4-019',
        topicRef: 'cg4',
        topicTitle: 'Proportion 19',
        difficulty: 'Foundation',
        questionText: 'The braking distance \\( d \\) metres of a car is directly proportional to the square of its speed \\( v \\) km/h. At 30 km/h the braking distance is 9 m.\n\na) Find the equation connecting \\( d \\) and \\( v \\).\n\nb) Find the braking distance at 50 km/h.\n\nc) Find the speed at which the braking distance is 36 m.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( d = kv^2 \\) and find \\( k \\).',
                    workingLatex: '9 = k \\times 900 \\implies k = \\frac{9}{900} = \\frac{1}{100}',
                    explanation: 'Substitute \\( d=9, v=30 \\) and divide.'
                },
                {
                    stepNumber: 2,
                    description: 'Part a: state the equation.',
                    workingLatex: 'd = \\frac{v^2}{100}',
                    explanation: 'This is the proportionality equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: substitute \\( v = 50 \\).',
                    workingLatex: 'd = \\frac{2500}{100} = 25 \\text{ m}',
                    explanation: 'The braking distance is 25 m at 50 km/h.'
                },
                {
                    stepNumber: 4,
                    description: 'Part c: substitute \\( d = 36 \\) and solve.',
                    workingLatex: '36 = \\frac{v^2}{100} \\implies v^2 = 3600 \\implies v = 60 \\text{ km/h}',
                    explanation: 'Take the positive square root (speed is positive).'
                }
            ],
            finalAnswer: 'a) \\( d = \\frac{v^2}{100} \\) \\quad b) \\( 25 \\) m \\quad c) \\( 60 \\) km/h'
        }
    },

    {
        id: 'cg4-020',
        topicRef: 'cg4',
        topicTitle: 'Proportion 20',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto x^2 \\) and \\( y = 12 \\) when \\( x = 2 \\), sketch the graph of \\( y \\) against \\( x \\) for \\( x \\geq 0 \\) and find \\( y \\) when \\( x = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: '12 = k \\times 4 \\implies k = 3',
                    explanation: 'Substitute the known values.'
                },
                {
                    stepNumber: 2,
                    description: 'State the equation.',
                    workingLatex: 'y = 3x^2',
                    explanation: 'This is a parabola through the origin.'
                },
                {
                    stepNumber: 3,
                    description: 'Describe the sketch.',
                    workingLatex: '\\text{Graph: parabola through } (0,0),\\ (1,3),\\ (2,12),\\ (3,27)',
                    explanation: 'The curve starts at the origin, opens upward, passes through the points listed.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) when \\( x = 3 \\).',
                    workingLatex: 'y = 3 \\times 9 = 27',
                    explanation: 'Square \\( x \\) then multiply by \\( k \\).'
                }
            ],
            finalAnswer: '\\( y = 27 \\) when \\( x = 3 \\); graph is a parabola through the origin.'
        }
    },

    {
        id: 'cg4-021',
        topicRef: 'cg4',
        topicTitle: 'Proportion 21',
        difficulty: 'Foundation',
        questionText: 'The power \\( P \\) watts dissipated in a resistor is directly proportional to the square of the current \\( I \\) amps. When \\( I = 3 \\) A, \\( P = 45 \\) W. Find \\( P \\) when \\( I = 5 \\) A.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( P = kI^2 \\) and find \\( k \\).',
                    workingLatex: '45 = k \\times 9 \\implies k = 5',
                    explanation: '\\( 3^2 = 9 \\); divide both sides by 9.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( I = 5 \\).',
                    workingLatex: 'P = 5 \\times 25 = 125 \\text{ W}',
                    explanation: 'The power dissipated is 125 W.'
                }
            ],
            finalAnswer: '\\( P = 125 \\) W'
        }
    },

    // ── Type D: Inverse proportion y ∝ 1/x² (Q22–Q26) ────────────────────────

    {
        id: 'cg4-022',
        topicRef: 'cg4',
        topicTitle: 'Proportion 22',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\dfrac{1}{x^2} \\) and that \\( y = 16 \\) when \\( x = 3 \\), find \\( y \\) when \\( x = 6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = \\frac{k}{x^2} \\) and find \\( k \\).',
                    workingLatex: '16 = \\frac{k}{9} \\implies k = 144',
                    explanation: 'Multiply both sides by \\( 3^2 = 9 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 6 \\).',
                    workingLatex: 'y = \\frac{144}{36} = 4',
                    explanation: 'When \\( x \\) doubles, \\( y \\) decreases by a factor of 4.'
                }
            ],
            finalAnswer: '\\( y = 4 \\)'
        }
    },

    {
        id: 'cg4-023',
        topicRef: 'cg4',
        topicTitle: 'Proportion 23',
        difficulty: 'Foundation',
        questionText: 'The intensity \\( I \\) of light from a lamp is inversely proportional to the square of the distance \\( d \\) metres from the lamp. At \\( d = 2 \\) m, \\( I = 50 \\) lux. Find \\( I \\) when \\( d = 5 \\) m.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( I = \\frac{k}{d^2} \\) and find \\( k \\).',
                    workingLatex: '50 = \\frac{k}{4} \\implies k = 200',
                    explanation: 'Multiply both sides by \\( 2^2 = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( d = 5 \\).',
                    workingLatex: 'I = \\frac{200}{25} = 8 \\text{ lux}',
                    explanation: 'The intensity decreases sharply as distance increases.'
                }
            ],
            finalAnswer: '\\( I = 8 \\) lux'
        }
    },

    {
        id: 'cg4-024',
        topicRef: 'cg4',
        topicTitle: 'Proportion 24',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\dfrac{1}{x^2} \\), \\( y = 25 \\) when \\( x = 2 \\), find the positive value of \\( x \\) when \\( y = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: 'k = 25 \\times 4 = 100',
                    explanation: '\\( k = y \\cdot x^2 = 25 \\times 2^2 = 100 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( y = 1 \\).',
                    workingLatex: '1 = \\frac{100}{x^2} \\implies x^2 = 100',
                    explanation: 'Multiply both sides by \\( x^2 \\) and rearrange.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the positive square root.',
                    workingLatex: 'x = 10',
                    explanation: 'Since \\( x > 0 \\) we take the positive root.'
                }
            ],
            finalAnswer: '\\( x = 10 \\)'
        }
    },

    {
        id: 'cg4-025',
        topicRef: 'cg4',
        topicTitle: 'Proportion 25',
        difficulty: 'Foundation',
        questionText: 'The gravitational force \\( F \\) N between two objects is inversely proportional to the square of the distance \\( r \\) m between them. When \\( r = 3 \\) m, \\( F = 20 \\) N. Find the force when \\( r = 6 \\) m, and state the effect of doubling the distance on the force.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( F = \\frac{k}{r^2} \\) and find \\( k \\).',
                    workingLatex: '20 = \\frac{k}{9} \\implies k = 180',
                    explanation: 'Multiply both sides by 9.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( F \\) when \\( r = 6 \\).',
                    workingLatex: 'F = \\frac{180}{36} = 5 \\text{ N}',
                    explanation: 'The force is 5 N when the distance is 6 m.'
                },
                {
                    stepNumber: 3,
                    description: 'State the effect of doubling the distance (\\( r \\to 2r \\)).',
                    workingLatex: 'F_{\\text{new}} = \\frac{k}{(2r)^2} = \\frac{k}{4r^2} = \\frac{F_{\\text{old}}}{4}',
                    explanation: 'Doubling the distance reduces the force by a factor of 4. We can verify: \\(F\\) went from 20 N at \\(r = 3\\) to 5 N at \\(r = 6\\), and \\(20 \\div 4 = 5\\).'
                }
            ],
            finalAnswer: '\\( F = 5 \\) N when \\( r = 6 \\) m; doubling the distance reduces the force to \\( \\frac{1}{4} \\) of its original value.'
        }
    },

    {
        id: 'cg4-026',
        topicRef: 'cg4',
        topicTitle: 'Proportion 26',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\dfrac{1}{x^2} \\), \\( y = 9 \\) when \\( x = 4 \\), and \\( y = a \\) when \\( x = 12 \\), find \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: 'k = 9 \\times 16 = 144',
                    explanation: '\\( k = y \\cdot x^2 = 9 \\times 4^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 12 \\).',
                    workingLatex: 'a = \\frac{144}{144} = 1',
                    explanation: '\\( 12^2 = 144 \\), so \\( a = \\frac{144}{144} = 1 \\).'
                }
            ],
            finalAnswer: '\\( a = 1 \\)'
        }
    },

    // ── Type E: y ∝ √x and algebraic proofs (Q27–Q31) ────────────────────────

    {
        id: 'cg4-027',
        topicRef: 'cg4',
        topicTitle: 'Proportion 27',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\sqrt{x} \\) and that \\( y = 15 \\) when \\( x = 25 \\), find \\( y \\) when \\( x = 64 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( y = k\\sqrt{x} \\) and find \\( k \\).',
                    workingLatex: '15 = k\\sqrt{25} = 5k \\implies k = 3',
                    explanation: '\\( \\sqrt{25} = 5 \\); divide both sides by 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 64 \\).',
                    workingLatex: 'y = 3\\sqrt{64} = 3 \\times 8 = 24',
                    explanation: '\\( \\sqrt{64} = 8 \\).'
                }
            ],
            finalAnswer: '\\( y = 24 \\)'
        }
    },

    {
        id: 'cg4-028',
        topicRef: 'cg4',
        topicTitle: 'Proportion 28',
        difficulty: 'Foundation',
        questionText: 'Given that \\( y \\propto \\sqrt{x} \\) and \\( y = 6 \\) when \\( x = 9 \\), find the exact value of \\( x \\) when \\( y = 10 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: '6 = k\\sqrt{9} = 3k \\implies k = 2',
                    explanation: 'Divide both sides by \\( \\sqrt{9} = 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( y = 10 \\).',
                    workingLatex: '10 = 2\\sqrt{x} \\implies \\sqrt{x} = 5',
                    explanation: 'Divide both sides by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Square both sides.',
                    workingLatex: 'x = 25',
                    explanation: '\\( (\\sqrt{x})^2 = x \\).'
                }
            ],
            finalAnswer: '\\( x = 25 \\)'
        }
    },

    {
        id: 'cg4-029',
        topicRef: 'cg4',
        topicTitle: 'Proportion 29',
        difficulty: 'Foundation',
        questionText: 'Prove that if \\( y \\propto x \\) and \\( z \\propto y^2 \\), then \\( z \\propto x^2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write equations for each proportionality.',
                    workingLatex: 'y = k_1 x \\quad \\text{and} \\quad z = k_2 y^2',
                    explanation: 'Replace each \\( \\propto \\) with \\( = k \\cdot \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the expression for \\( y \\) into the equation for \\( z \\).',
                    workingLatex: 'z = k_2 (k_1 x)^2 = k_2 k_1^2 x^2',
                    explanation: 'Expand the bracket: \\( (k_1 x)^2 = k_1^2 x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Identify the combined constant.',
                    workingLatex: 'z = K x^2 \\quad \\text{where } K = k_1^2 k_2 \\text{ is a constant}',
                    explanation: 'Since \\( K \\) is a product of constants it is itself a constant, so \\( z \\propto x^2 \\). \\( \\square \\)'
                }
            ],
            finalAnswer: 'Proved: \\( z \\propto x^2 \\)'
        }
    },

    {
        id: 'cg4-030',
        topicRef: 'cg4',
        topicTitle: 'Proportion 30',
        difficulty: 'Foundation',
        questionText: 'Prove that if \\( y \\propto \\dfrac{1}{x} \\) and \\( z \\propto \\dfrac{1}{y} \\), then \\( z \\propto x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write equations for each relationship.',
                    workingLatex: 'y = \\frac{k_1}{x} \\quad \\text{and} \\quad z = \\frac{k_2}{y}',
                    explanation: 'Express each proportionality as an equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( y \\) into the expression for \\( z \\).',
                    workingLatex: 'z = \\frac{k_2}{\\dfrac{k_1}{x}} = \\frac{k_2 x}{k_1}',
                    explanation: 'Dividing by a fraction is multiplying by its reciprocal.'
                },
                {
                    stepNumber: 3,
                    description: 'Write in the form \\( z = Kx \\).',
                    workingLatex: 'z = \\frac{k_2}{k_1} \\cdot x = Kx \\quad \\text{where } K = \\frac{k_2}{k_1}',
                    explanation: 'Since \\( K \\) is a constant, \\( z \\propto x \\). \\( \\square \\)'
                }
            ],
            finalAnswer: 'Proved: \\( z \\propto x \\)'
        }
    },

    {
        id: 'cg4-031',
        topicRef: 'cg4',
        topicTitle: 'Proportion 31',
        difficulty: 'Foundation',
        questionText: 'The period \\( T \\) seconds of a pendulum is directly proportional to the square root of its length \\( L \\) cm. A pendulum of length 100 cm has a period of 2 s. Find the length needed to give a period of 3 s.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( T = k\\sqrt{L} \\) and find \\( k \\).',
                    workingLatex: '2 = k\\sqrt{100} = 10k \\implies k = 0.2',
                    explanation: '\\( \\sqrt{100} = 10 \\); divide both sides by 10.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( T = 3 \\) and solve for \\( L \\).',
                    workingLatex: '3 = 0.2\\sqrt{L} \\implies \\sqrt{L} = 15 \\implies L = 225 \\text{ cm}',
                    explanation: 'Divide by 0.2 then square both sides.'
                }
            ],
            finalAnswer: '\\( L = 225 \\) cm'
        }
    },

    // ── Type F: Multi-part exam-style (Q32–Q35) ───────────────────────────────

    {
        id: 'cg4-032',
        topicRef: 'cg4',
        topicTitle: 'Proportion 32',
        difficulty: 'Foundation',
        questionText: 'The resistance \\( R \\) ohms of a wire is directly proportional to its length \\( l \\) m and inversely proportional to the square of its diameter \\( d \\) mm, so \\( R \\propto \\dfrac{l}{d^2} \\). A wire of length 5 m and diameter 2 mm has resistance 10 Ω.\n\na) Find the equation connecting \\( R \\), \\( l \\), and \\( d \\).\n\nb) Find the resistance of a wire of length 20 m and diameter 4 mm.\n\nc) A wire has length 3 m, resistance 7.5 Ω. Find its diameter.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( R = \\frac{kl}{d^2} \\) and substitute the known values.',
                    workingLatex: '10 = \\frac{k \\times 5}{4} \\implies 10 = \\frac{5k}{4} \\implies k = 8',
                    explanation: '\\( d^2 = 4 \\); multiply both sides by 4, then divide by 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Part a: state the equation.',
                    workingLatex: 'R = \\frac{8l}{d^2}',
                    explanation: 'This combines direct and inverse proportion.'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: substitute \\( l = 20, d = 4 \\).',
                    workingLatex: 'R = \\frac{8 \\times 20}{16} = \\frac{160}{16} = 10 \\ \\Omega',
                    explanation: 'Doubling length doubles R; doubling diameter quarters R — net effect: unchanged.'
                },
                {
                    stepNumber: 4,
                    description: 'Part c: substitute \\( l = 3, R = 7.5 \\) and solve for \\( d \\).',
                    workingLatex: '7.5 = \\frac{8 \\times 3}{d^2} = \\frac{24}{d^2} \\implies d^2 = \\frac{24}{7.5} = 3.2 \\implies d = \\sqrt{3.2} = \\frac{4\\sqrt{5}}{5} \\approx 1.79 \\text{ mm}',
                    explanation: 'Take the positive square root.'
                }
            ],
            finalAnswer: 'a) \\( R = \\dfrac{8l}{d^2} \\) \\quad b) \\( 10 \\) Ω \\quad c) \\( d = \\sqrt{3.2} \\approx 1.79 \\) mm'
        }
    },

    {
        id: 'cg4-033',
        topicRef: 'cg4',
        topicTitle: 'Proportion 33',
        difficulty: 'Foundation',
        questionText: 'The variable \\( y \\) is directly proportional to \\( x^2 \\). When \\( x = 2 \\), \\( y = 28 \\).\n\na) Find \\( y \\) when \\( x = 5 \\).\n\nb) Find the exact values of \\( x \\) when \\( y = 63 \\).\n\nc) Show that when \\( x \\) is tripled, \\( y \\) increases by a factor of 9.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\).',
                    workingLatex: '28 = k \\times 4 \\implies k = 7',
                    explanation: 'So \\( y = 7x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part a: substitute \\( x = 5 \\).',
                    workingLatex: 'y = 7 \\times 25 = 175',
                    explanation: '\\( 5^2 = 25 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: substitute \\( y = 63 \\).',
                    workingLatex: '63 = 7x^2 \\implies x^2 = 9 \\implies x = \\pm 3',
                    explanation: 'Both positive and negative roots are valid.'
                },
                {
                    stepNumber: 4,
                    description: 'Part c: replace \\( x \\) with \\( 3x \\).',
                    workingLatex: 'y_{\\text{new}} = 7(3x)^2 = 7 \\times 9x^2 = 9 \\times 7x^2 = 9y',
                    explanation: '\\( (3x)^2 = 9x^2 \\), so \\( y \\) is multiplied by 9. \\( \\square \\)'
                }
            ],
            finalAnswer: 'a) \\( y = 175 \\) \\quad b) \\( x = \\pm 3 \\) \\quad c) shown'
        }
    },

    {
        id: 'cg4-034',
        topicRef: 'cg4',
        topicTitle: 'Proportion 34',
        difficulty: 'Foundation',
        questionText: 'The variable \\( P \\) is inversely proportional to \\( Q \\). When \\( Q = 5 \\), \\( P = 12 \\). The variable \\( R \\) is directly proportional to \\( Q^2 \\). When \\( Q = 2 \\), \\( R = 20 \\).\n\na) Express \\( P \\) in terms of \\( Q \\).\n\nb) Express \\( R \\) in terms of \\( Q \\).\n\nc) Find the value of \\( Q \\) for which \\( P = R \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: find \\( k_1 \\) from \\( P = \\frac{k_1}{Q} \\).',
                    workingLatex: '12 = \\frac{k_1}{5} \\implies k_1 = 60 \\implies P = \\frac{60}{Q}',
                    explanation: 'Multiply both sides by 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Part b: find \\( k_2 \\) from \\( R = k_2 Q^2 \\).',
                    workingLatex: '20 = k_2 \\times 4 \\implies k_2 = 5 \\implies R = 5Q^2',
                    explanation: 'Divide both sides by \\( 2^2 = 4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part c: set \\( P = R \\) and solve.',
                    workingLatex: '\\frac{60}{Q} = 5Q^2 \\implies 60 = 5Q^3 \\implies Q^3 = 12',
                    explanation: 'Multiply both sides by \\( Q \\) (assuming \\( Q \\neq 0 \\)), then divide by 5.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the exact value of \\( Q \\).',
                    workingLatex: 'Q = \\sqrt[3]{12}',
                    explanation: 'Take the cube root of both sides. \\( Q = \\sqrt[3]{12} \\approx 2.29 \\).'
                }
            ],
            finalAnswer: 'a) \\( P = \\dfrac{60}{Q} \\) \\quad b) \\( R = 5Q^2 \\) \\quad c) \\( Q = \\sqrt[3]{12} \\)'
        }
    },

    {
        id: 'cg4-035',
        topicRef: 'cg4',
        topicTitle: 'Proportion 35',
        difficulty: 'Foundation',
        questionText: 'The variable \\( y \\) is inversely proportional to the square of \\( x \\). When \\( x = 2 \\), \\( y = 50 \\).\n\na) Find the value of \\( y \\) when \\( x = 10 \\).\n\nb) Find the exact values of \\( x \\) when \\( y = 8 \\).\n\nc) Show that when \\( x \\) is halved, \\( y \\) increases by a factor of 4.\n\nd) Given that \\( z \\propto y \\) and \\( z = 30 \\) when \\( y = 50 \\), find \\( z \\) when \\( x = 5 \\).',
        marks: 10,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find \\( k \\): write \\( y = \\frac{k}{x^2} \\).',
                    workingLatex: '50 = \\frac{k}{4} \\implies k = 200',
                    explanation: 'Multiply both sides by \\( 2^2 = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part a: substitute \\( x = 10 \\).',
                    workingLatex: 'y = \\frac{200}{100} = 2',
                    explanation: '\\( 10^2 = 100 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Part b: substitute \\( y = 8 \\) and solve.',
                    workingLatex: '8 = \\frac{200}{x^2} \\implies x^2 = 25 \\implies x = \\pm 5',
                    explanation: 'Divide 200 by 8 to get \\( x^2 = 25 \\), then take square roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Part c: replace \\( x \\) with \\( \\frac{x}{2} \\).',
                    workingLatex: 'y_{\\text{new}} = \\frac{200}{\\left(\\frac{x}{2}\\right)^2} = \\frac{200}{\\frac{x^2}{4}} = \\frac{800}{x^2} = 4 \\times \\frac{200}{x^2} = 4y',
                    explanation: 'Halving \\( x \\) quarters \\( x^2 \\), which quadruples \\( y \\). \\( \\square \\)'
                },
                {
                    stepNumber: 5,
                    description: 'Part d: find \\( m \\) from \\( z = my \\).',
                    workingLatex: '30 = m \\times 50 \\implies m = \\frac{3}{5}',
                    explanation: 'Divide both sides by 50.'
                },
                {
                    stepNumber: 6,
                    description: 'Find \\( y \\) when \\( x = 5 \\), then find \\( z \\).',
                    workingLatex: 'y = \\frac{200}{25} = 8 \\implies z = \\frac{3}{5} \\times 8 = \\frac{24}{5} = 4.8',
                    explanation: '\\( 5^2 = 25 \\); multiply by \\( m \\).'
                }
            ],
            finalAnswer: 'a) \\( y = 2 \\) \\quad b) \\( x = \\pm 5 \\) \\quad c) shown \\quad d) \\( z = 4.8 \\)'
        }
    },

    // ─── Q36–50: Additional Proportion Questions ──────────────────────

    {
        id: 'cg4-036', topicRef: 'cg4', topicTitle: 'Proportion 36', difficulty: 'Foundation',
        questionText: 'Given that \\( y \\) is directly proportional to \\( x \\) and \\( y = 15 \\) when \\( x = 5 \\), find \\( y \\) when \\( x = 8 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = kx \\implies 15 = 5k \\implies k = 3', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 3 \\times 8 = 24', explanation: '' }
        ], finalAnswer: 'y = 24' }
    },
    {
        id: 'cg4-037', topicRef: 'cg4', topicTitle: 'Proportion 37', difficulty: 'Foundation',
        questionText: 'Given that \\( y \\) is inversely proportional to \\( x \\) and \\( y = 6 \\) when \\( x = 4 \\), find \\( y \\) when \\( x = 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = \\frac{k}{x} \\implies 6 = \\frac{k}{4} \\implies k = 24', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = \\frac{24}{12} = 2', explanation: '' }
        ], finalAnswer: 'y = 2' }
    },
    {
        id: 'cg4-038', topicRef: 'cg4', topicTitle: 'Proportion 38', difficulty: 'Foundation',
        questionText: '\\( y \\) is proportional to \\( x^2 \\). When \\( x = 3 \\), \\( y = 36 \\). Find \\( y \\) when \\( x = 5 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = kx^2 \\implies 36 = 9k \\implies k = 4', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 4 \\times 25 = 100', explanation: '' }
        ], finalAnswer: 'y = 100' }
    },
    {
        id: 'cg4-039', topicRef: 'cg4', topicTitle: 'Proportion 39', difficulty: 'Foundation',
        questionText: '\\( y \\) is inversely proportional to \\( \\sqrt{x} \\). When \\( x = 9 \\), \\( y = 4 \\). Find \\( y \\) when \\( x = 16 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = \\frac{k}{\\sqrt{x}} \\implies 4 = \\frac{k}{3} \\implies k = 12', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = \\frac{12}{\\sqrt{16}} = \\frac{12}{4} = 3', explanation: '' }
        ], finalAnswer: 'y = 3' }
    },
    {
        id: 'cg4-040', topicRef: 'cg4', topicTitle: 'Proportion 40', difficulty: 'Foundation',
        questionText: 'The cost \\( C \\) of fuel is directly proportional to the volume \\( V \\) litres bought. If 25 litres costs \\( \\pounds 37.50 \\), find the cost of 40 litres.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'C = kV \\implies 37.50 = 25k \\implies k = 1.50', explanation: '' },
            { stepNumber: 2, description: 'Find C', workingLatex: 'C = 1.50 \\times 40 = 60', explanation: '' }
        ], finalAnswer: '\\pounds 60' }
    },
    {
        id: 'cg4-041', topicRef: 'cg4', topicTitle: 'Proportion 41', difficulty: 'Foundation',
        questionText: '\\( y \\) is proportional to \\( x^3 \\). When \\( x = 2 \\), \\( y = 40 \\). Find \\( x \\) when \\( y = 135 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = kx^3 \\implies 40 = 8k \\implies k = 5', explanation: '' },
            { stepNumber: 2, description: 'Find x', workingLatex: '135 = 5x^3 \\implies x^3 = 27 \\implies x = 3', explanation: '' }
        ], finalAnswer: 'x = 3' }
    },
    {
        id: 'cg4-042', topicRef: 'cg4', topicTitle: 'Proportion 42', difficulty: 'Foundation',
        questionText: 'The time \\( T \\) to travel a fixed distance is inversely proportional to speed \\( s \\). At 60 km/h the journey takes 2 hours. How long at 80 km/h?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'T = \\frac{k}{s} \\implies 2 = \\frac{k}{60} \\implies k = 120', explanation: '' },
            { stepNumber: 2, description: 'Find T', workingLatex: 'T = \\frac{120}{80} = 1.5 \\text{ hours}', explanation: '' }
        ], finalAnswer: '1.5 hours (1 hour 30 minutes)' }
    },
    {
        id: 'cg4-043', topicRef: 'cg4', topicTitle: 'Proportion 43', difficulty: 'Foundation',
        questionText: '\\( P \\) is proportional to \\( \\sqrt{Q} \\). When \\( Q = 25 \\), \\( P = 10 \\). Find \\( Q \\) when \\( P = 14 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'P = k\\sqrt{Q} \\implies 10 = 5k \\implies k = 2', explanation: '' },
            { stepNumber: 2, description: 'Find Q', workingLatex: '14 = 2\\sqrt{Q} \\implies \\sqrt{Q} = 7 \\implies Q = 49', explanation: '' }
        ], finalAnswer: 'Q = 49' }
    },
    {
        id: 'cg4-044', topicRef: 'cg4', topicTitle: 'Proportion 44', difficulty: 'Foundation',
        questionText: '\\( y \\) is inversely proportional to \\( x^2 \\). When \\( x = 2 \\), \\( y = 5 \\). Find \\( y \\) when \\( x = 10 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = \\frac{k}{x^2} \\implies 5 = \\frac{k}{4} \\implies k = 20', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = \\frac{20}{100} = 0.2', explanation: '' }
        ], finalAnswer: 'y = 0.2' }
    },
    {
        id: 'cg4-045', topicRef: 'cg4', topicTitle: 'Proportion 45', difficulty: 'Foundation',
        questionText: 'If \\( x \\) is doubled, what happens to \\( y \\) when: (a) \\( y \\propto x \\); (b) \\( y \\propto x^2 \\); (c) \\( y \\propto \\frac{1}{x} \\)?',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: '(a) \\( y = kx \\)', workingLatex: 'y_{\\text{new}} = k(2x) = 2kx = 2y', explanation: '\\( y \\) doubles.' },
            { stepNumber: 2, description: '(b) \\( y = kx^2 \\)', workingLatex: 'y_{\\text{new}} = k(2x)^2 = 4kx^2 = 4y', explanation: '\\( y \\) quadruples.' },
            { stepNumber: 3, description: '(c) \\( y = \\frac{k}{x} \\)', workingLatex: 'y_{\\text{new}} = \\frac{k}{2x} = \\frac{y}{2}', explanation: '\\( y \\) halves.' }
        ], finalAnswer: '(a) doubles; (b) quadruples; (c) halves' }
    },
    {
        id: 'cg4-046', topicRef: 'cg4', topicTitle: 'Proportion 46', difficulty: 'Foundation',
        questionText: 'The weight \\( W \\) of a sphere is proportional to the cube of its radius \\( r \\). A sphere of radius 3 cm weighs 108 g. Find the weight of a sphere of radius 5 cm.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'W = kr^3 \\implies 108 = 27k \\implies k = 4', explanation: '' },
            { stepNumber: 2, description: 'Find W', workingLatex: 'W = 4 \\times 125 = 500 \\text{ g}', explanation: '' }
        ], finalAnswer: '500 g' }
    },
    {
        id: 'cg4-047', topicRef: 'cg4', topicTitle: 'Proportion 47', difficulty: 'Foundation',
        questionText: '\\( y \\) is directly proportional to \\( (x + 1)^2 \\). When \\( x = 2 \\), \\( y = 27 \\). Find \\( y \\) when \\( x = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'y = k(x+1)^2 \\implies 27 = 9k \\implies k = 3', explanation: '' },
            { stepNumber: 2, description: 'Find y', workingLatex: 'y = 3 \\times 25 = 75', explanation: '' }
        ], finalAnswer: 'y = 75' }
    },
    {
        id: 'cg4-048', topicRef: 'cg4', topicTitle: 'Proportion 48', difficulty: 'Foundation',
        questionText: 'The intensity \\( I \\) of light is inversely proportional to the square of the distance \\( d \\) from the source. At 2 m, \\( I = 100 \\). Find \\( I \\) at 5 m.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: 'I = \\frac{k}{d^2} \\implies 100 = \\frac{k}{4} \\implies k = 400', explanation: '' },
            { stepNumber: 2, description: 'Find I', workingLatex: 'I = \\frac{400}{25} = 16', explanation: '' }
        ], finalAnswer: 'I = 16' }
    },
    {
        id: 'cg4-049', topicRef: 'cg4', topicTitle: 'Proportion 49', difficulty: 'Foundation',
        questionText: 'Given \\( y = \\frac{k}{x} \\) and \\( y = 8 \\) when \\( x = 3 \\), find the value of \\( x \\) when \\( y = x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Find k', workingLatex: '8 = \\frac{k}{3} \\implies k = 24', explanation: '' },
            { stepNumber: 2, description: 'Set \\( y = x \\)', workingLatex: 'x = \\frac{24}{x} \\implies x^2 = 24 \\implies x = \\sqrt{24} = 2\\sqrt{6}', explanation: 'Taking positive root.' }
        ], finalAnswer: 'x = 2\\sqrt{6}' }
    },
    {
        id: 'cg4-050', topicRef: 'cg4', topicTitle: 'Proportion 50', difficulty: 'Foundation',
        questionText: '\\( y \\) is proportional to \\( x^n \\). When \\( x \\) is tripled, \\( y \\) is multiplied by 9. Find \\( n \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up', workingLatex: 'y = kx^n; \\quad k(3x)^n = 9kx^n \\implies 3^n = 9', explanation: '' },
            { stepNumber: 2, description: 'Solve', workingLatex: '3^n = 3^2 \\implies n = 2', explanation: '' }
        ], finalAnswer: 'n = 2' }
    },
];
