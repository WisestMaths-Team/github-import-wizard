import { Question } from "@/lib/types";

/**
 * Topic: The Derivative
 * Ref:   c3
 *
 * Add your questions to the array below.
 * ID convention: "c3-001", "c3-002", etc.
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
        id: 'd5-001',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 01',
        difficulty: 'Foundation',
        questionText: 'A particle moves along a straight line. Its displacement \\( s \\) metres from a fixed point after \\( t \\) seconds is given by \\( s = 4t^2 - 3t \\).\n(a) Find the velocity \\( v \\) as a function of \\( t \\).\n(b) Find the velocity when \\( t = 5 \\) seconds.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'displacement', 'differentiation', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) State the model equation.',
                    workingLatex: 's = 4t^2 - 3t',
                    explanation: 'The displacement of the particle is given as a function of time \\( t \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Recall velocity is the derivative of displacement.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t}',
                    explanation: 'Velocity measures the rate of change of displacement with respect to time.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate each term.',
                    workingLatex: 'v = 2 \\times 4t^{2-1} - 1 \\times 3t^{1-1} = 8t - 3',
                    explanation: 'Apply the power rule to each term: bring down the power and reduce it by one.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( t = 5 \\) into \\( v \\).',
                    workingLatex: 'v = 8(5) - 3 = 40 - 3 = 37',
                    explanation: 'Replace \\( t \\) with 5 in the velocity expression.'
                },
                {
                    stepNumber: 5,
                    description: 'State the answer with units.',
                    workingLatex: 'v = 37 \\text{ ms}^{-1}',
                    explanation: 'The velocity is 37 metres per second after 5 seconds. The positive value means the particle is moving in the positive direction.'
                }
            ],
            finalAnswer: '(a) \\( v = 8t - 3 \\) \\newline (b) \\( v = 37 \\text{ ms}^{-1} \\)'
        }
    },
    {
        id: 'd5-002',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 02',
        difficulty: 'Foundation',
        questionText: 'A particle\'s displacement is \\( s = t^3 - 6t^2 + 5 \\) metres after \\( t \\) seconds.\n(a) Find the velocity function.\n(b) Find the acceleration function.\n(c) Find the acceleration when \\( t = 4 \\) seconds.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'differentiation', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) State the displacement model.',
                    workingLatex: 's = t^3 - 6t^2 + 5',
                    explanation: 'The displacement is a cubic function of time.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 12t',
                    explanation: 'Apply the power rule to each term. The constant 5 differentiates to zero.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate velocity for acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t - 12',
                    explanation: 'Acceleration is the second derivative of displacement, or equivalently the derivative of velocity.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Substitute \\( t = 4 \\) into \\( a \\).',
                    workingLatex: 'a(4) = 6(4) - 12 = 24 - 12 = 12',
                    explanation: 'Replace \\( t \\) with 4 and evaluate.'
                },
                {
                    stepNumber: 5,
                    description: 'State the answer in context.',
                    workingLatex: 'a = 12 \\text{ ms}^{-2}',
                    explanation: 'The acceleration is 12 metres per second squared at \\( t = 4 \\). The positive value means the particle is speeding up in the positive direction.'
                }
            ],
            finalAnswer: '(a) \\( v = 3t^2 - 12t \\) \\newline (b) \\( a = 6t - 12 \\) \\newline (c) \\( a = 12 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-003',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 03',
        difficulty: 'Foundation',
        questionText: 'A stone is thrown upwards. Its height \\( h \\) metres above the ground after \\( t \\) seconds is \\( h = 20t - 5t^2 \\).\n(a) Find the velocity of the stone after \\( t \\) seconds.\n(b) Find the time at which the stone is momentarily stationary (at its maximum height).\n(c) Find the maximum height reached.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'maximum height', 'projectile', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) State the height model.',
                    workingLatex: 'h = 20t - 5t^2',
                    explanation: 'The height of the stone is given as a quadratic function of time.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}h}{\\mathrm{d}t} = 20 - 10t',
                    explanation: 'Velocity is the rate of change of height with respect to time. Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set velocity equal to zero.',
                    workingLatex: '20 - 10t = 0',
                    explanation: 'At the maximum height the stone is momentarily stationary, so its velocity is zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '10t = 20 \\implies t = 2 \\text{ s}',
                    explanation: 'The stone reaches its highest point after 2 seconds.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( t = 2 \\) into \\( h \\).',
                    workingLatex: 'h = 20(2) - 5(2)^2 = 40 - 20 = 20 \\text{ m}',
                    explanation: 'The maximum height reached by the stone is 20 metres above the ground.'
                }
            ],
            finalAnswer: '(a) \\( v = 20 - 10t \\) \\newline (b) \\( t = 2 \\) s \\newline (c) Maximum height \\( = 20 \\) m'
        }
    },
    {
        id: 'd5-004',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 04',
        difficulty: 'Foundation',
        questionText: 'A particle moves along a straight line. Its displacement \\( s \\) metres after \\( t \\) seconds is \\( s = t^3 - 9t^2 + 24t \\) for \\( t \\geq 0 \\).\n(a) Find the velocity function \\( v(t) \\).\n(b) Find the values of \\( t \\) at which the particle is momentarily at rest.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'particle at rest', 'kinematics', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) State the displacement model.',
                    workingLatex: 's = t^3 - 9t^2 + 24t',
                    explanation: 'The displacement is a cubic function of time for \\( t \\geq 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 18t + 24',
                    explanation: 'Apply the power rule to each term to obtain the velocity function.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set velocity equal to zero.',
                    workingLatex: '3t^2 - 18t + 24 = 0',
                    explanation: 'The particle is momentarily at rest when its velocity is zero.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide through by 3.',
                    workingLatex: 't^2 - 6t + 8 = 0',
                    explanation: 'Simplify the equation before factorising.'
                },
                {
                    stepNumber: 5,
                    description: 'Factorise and solve.',
                    workingLatex: '(t - 2)(t - 4) = 0 \\implies t = 2 \\text{ s or } t = 4 \\text{ s}',
                    explanation: 'Both values satisfy \\( t \\geq 0 \\), so the particle is momentarily at rest at \\( t = 2 \\) and \\( t = 4 \\) seconds.'
                }
            ],
            finalAnswer: '(a) \\( v = 3t^2 - 18t + 24 \\) \\newline (b) \\( t = 2 \\) s and \\( t = 4 \\) s'
        }
    },
    {
        id: 'd5-005',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 05',
        difficulty: 'Foundation',
        questionText: 'A motorbike starts from rest and travels along a straight road. After \\( t \\) seconds its displacement is \\( s = 3t^2 \\) metres.\n(a) Find the velocity after \\( t \\) seconds.\n(b) Find the velocity after 6 seconds.\n(c) Find the constant acceleration of the motorbike.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'constant acceleration', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) State the displacement model.',
                    workingLatex: 's = 3t^2',
                    explanation: 'The motorbike starts from rest, so \\( s = 0 \\) when \\( t = 0 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 6t',
                    explanation: 'Apply the power rule: bring down the 2 and multiply by the coefficient 3.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( t = 6 \\) into \\( v \\).',
                    workingLatex: 'v(6) = 6(6) = 36 \\text{ ms}^{-1}',
                    explanation: 'After 6 seconds the motorbike is travelling at 36 metres per second.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Differentiate velocity for acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6',
                    explanation: 'The derivative of \\( 6t \\) is 6, a constant.'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the result in context.',
                    workingLatex: 'a = 6 \\text{ ms}^{-2}',
                    explanation: 'The acceleration is constant at 6 metres per second squared, meaning the motorbike gains 6 ms\\(^{-1}\\) of speed every second.'
                }
            ],
            finalAnswer: '(a) \\( v = 6t \\) \\newline (b) \\( 36 \\text{ ms}^{-1} \\) \\newline (c) \\( a = 6 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-006',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 06',
        difficulty: 'Foundation',
        questionText: 'A particle\'s displacement in metres is given by \\( s = 2t^3 - 15t^2 + 36t \\) for \\( t \\geq 0 \\).\n(a) Find the velocity when \\( t = 3 \\).\n(b) Find the acceleration when \\( t = 3 \\).\n(c) Find the value of \\( t \\) when the acceleration is zero.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'kinematics', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 6t^2 - 30t + 36',
                    explanation: 'Differentiate \\( s \\).'
                },
                {
                    stepNumber: 2,
                    description: '(a) Substitute \\( t = 3 \\).',
                    workingLatex: 'v(3) = 6(9) - 30(3) + 36 = 54 - 90 + 36 = 0 \\text{ ms}^{-1}',
                    explanation: 'The particle is momentarily at rest at \\( t = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 12t - 30',
                    explanation: 'Differentiate \\( v \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( t = 3 \\).',
                    workingLatex: 'a(3) = 12(3) - 30 = 36 - 30 = 6 \\text{ ms}^{-2}',
                    explanation: 'Replace \\( t \\) with 3.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Set \\( a = 0 \\).',
                    workingLatex: '12t - 30 = 0 \\implies t = 2.5 \\text{ s}',
                    explanation: 'Solve the linear equation.'
                }
            ],
            finalAnswer: '(a) \\( 0 \\text{ ms}^{-1} \\) \\newline (b) \\( 6 \\text{ ms}^{-2} \\) \\newline (c) \\( t = 2.5 \\) s'
        }
    },
    {
        id: 'd5-007',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 07',
        difficulty: 'Foundation',
        questionText: 'A particle moves so that its displacement is \\( s = 5t - t^2 \\) metres for \\( 0 \\leq t \\leq 5 \\).\n(a) Find the velocity function.\n(b) Find the time when the particle changes direction.\n(c) Find the maximum displacement from the starting point.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'maximum displacement', 'changes direction', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate displacement.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 5 - 2t',
                    explanation: 'Differentiating each term using the power rule gives the velocity function.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set velocity equal to zero.',
                    workingLatex: '5 - 2t = 0',
                    explanation: 'A particle changes direction when its velocity passes through zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '2t = 5 \\implies t = 2.5 \\text{ s}',
                    explanation: 'The velocity is positive for \\( t < 2.5 \\) and negative for \\( t > 2.5 \\), confirming a direction change.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Substitute \\( t = 2.5 \\) into \\( s \\).',
                    workingLatex: 's = 5(2.5) - (2.5)^2 = 12.5 - 6.25 = 6.25 \\text{ m}',
                    explanation: 'The maximum displacement occurs at the turning point, giving \\( 6.25 \\) m from the start.'
                }
            ],
            finalAnswer: '(a) \\( v = 5 - 2t \\) \\newline (b) \\( t = 2.5 \\) s \\newline (c) Maximum displacement \\( = 6.25 \\) m'
        }
    },
    {
        id: 'd5-008',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 08',
        difficulty: 'Foundation',
        questionText: 'A ball is dropped from a height. Its velocity \\( v \\) ms\\(^{-1}\\) after \\( t \\) seconds is \\( v = 10t \\).\n(a) Find the acceleration of the ball.\n(b) Find the time taken for the ball to reach \\( 35 \\text{ ms}^{-1} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['acceleration', 'velocity', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write down the velocity function.',
                    workingLatex: 'v = 10t',
                    explanation: 'This is the given velocity in terms of time.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 10 \\text{ ms}^{-2}',
                    explanation: 'The derivative of \\( 10t \\) is \\( 10 \\). The acceleration is constant, approximating free-fall under gravity.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( v = 35 \\).',
                    workingLatex: '10t = 35',
                    explanation: 'Substitute the target velocity into the velocity equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( t \\).',
                    workingLatex: 't = \\frac{35}{10} = 3.5 \\text{ s}',
                    explanation: 'Divide both sides by \\( 10 \\) to isolate \\( t \\).'
                }
            ],
            finalAnswer: '(a) \\( a = 10 \\text{ ms}^{-2} \\) \\newline (b) \\( t = 3.5 \\) s'
        }
    },
    {
        id: 'd5-009',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 09',
        difficulty: 'Foundation',
        questionText: 'A particle\'s displacement is \\( s = t^3 - 4t^2 + 4t \\) metres after \\( t \\) seconds.\n(a) Find the velocity function.\n(b) Find the times when the particle is at rest.\n(c) Find the acceleration when \\( t = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'particle at rest', 'acceleration', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: 'v = 3t^2 - 8t + 4',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( v = 0 \\).',
                    workingLatex: '3t^2 - 8t + 4 = 0 \\implies (3t - 2)(t - 2) = 0 \\implies t = \\tfrac{2}{3} \\text{ or } t = 2',
                    explanation: 'Factorise the quadratic.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Acceleration function.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t - 8',
                    explanation: 'Differentiate \\( v \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate at \\( t = 1 \\).',
                    workingLatex: 'a(1) = 6(1) - 8 = -2 \\text{ ms}^{-2}',
                    explanation: 'The negative sign means the particle is decelerating at this instant.'
                }
            ],
            finalAnswer: '(a) \\( v = 3t^2 - 8t + 4 \\) \\newline (b) \\( t = \\tfrac{2}{3} \\) s and \\( t = 2 \\) s \\newline (c) \\( -2 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-010',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 10',
        difficulty: 'Foundation',
        questionText: 'A rectangular garden has length \\( x \\) m and width \\( y \\) m. The perimeter of the garden is \\( 60 \\) m.\n(a) Write \\( y \\) in terms of \\( x \\).\n(b) Write down an expression for the area \\( A \\) in terms of \\( x \\) only.\n(c) Use calculus to find the value of \\( x \\) that maximises the area, and find that maximum area.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'perimeter', 'maximum', 'rectangle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Use the perimeter condition.',
                    workingLatex: '2x + 2y = 60 \\implies y = 30 - x',
                    explanation: 'Rearrange the perimeter formula.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Area expression.',
                    workingLatex: 'A = xy = x(30 - x) = 30x - x^2',
                    explanation: 'Substitute \\( y = 30 - x \\) into \\( A = xy \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Differentiate and set to zero.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 30 - 2x = 0 \\implies x = 15',
                    explanation: 'Stationary point at \\( x = 15 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -2 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Negative second derivative confirms a maximum.'
                },
                {
                    stepNumber: 5,
                    description: 'Find maximum area.',
                    workingLatex: 'A = 15 \\times 15 = 225 \\text{ m}^2',
                    explanation: 'Substitute \\( x = 15 \\) and \\( y = 15 \\).'
                }
            ],
            finalAnswer: '(a) \\( y = 30 - x \\) \\newline (b) \\( A = 30x - x^2 \\) \\newline (c) Maximum area \\( = 225 \\text{ m}^2 \\) when \\( x = 15 \\)'
        }
    },
    {
        id: 'd5-011',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 11',
        difficulty: 'Foundation',
        questionText: 'A farmer uses \\( 80 \\) m of fencing to enclose a rectangular field on three sides (the fourth side is a wall). The width of the field is \\( x \\) m.\n(a) Show that the area of the field is \\( A = x(80 - 2x) \\).\n(b) Find the maximum possible area using calculus.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'fencing', 'three sides', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The three sides use \\( 2x + l = 80 \\), where \\( l \\) is the length.',
                    workingLatex: 'l = 80 - 2x \\implies A = x \\cdot l = x(80 - 2x)',
                    explanation: 'Two widths \\( x \\) and one length \\( l \\) make up the 80 m of fencing.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Expand and differentiate.',
                    workingLatex: 'A = 80x - 2x^2 \\implies \\frac{\\mathrm{d}A}{\\mathrm{d}x} = 80 - 4x',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Set to zero.',
                    workingLatex: '80 - 4x = 0 \\implies x = 20',
                    explanation: 'Stationary point at \\( x = 20 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm maximum and find area.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -4 < 0; \\quad A = 20(80 - 40) = 20 \\times 40 = 800 \\text{ m}^2',
                    explanation: 'Negative second derivative confirms maximum.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) Maximum area \\( = 800 \\text{ m}^2 \\) when \\( x = 20 \\)'
        }
    },
    {
        id: 'd5-012',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 12',
        difficulty: 'Foundation',
        questionText: 'A ball is thrown vertically upwards with an initial speed of \\( 25 \\) ms\\(^{-1}\\). After \\( t \\) seconds its height is \\( h = 25t - 5t^2 \\) metres.\n(a) Find the height after 1 second.\n(b) Use calculus to find the maximum height.\n(c) Find the time when the ball returns to ground level.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'maximum height', 'projectile', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( t = 1 \\).',
                    workingLatex: 'h(1) = 25 - 5 = 20 \\text{ m}',
                    explanation: 'Direct substitution.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Differentiate and set to zero.',
                    workingLatex: '\\frac{\\mathrm{d}h}{\\mathrm{d}t} = 25 - 10t = 0 \\implies t = 2.5 \\text{ s}',
                    explanation: 'Maximum height when velocity is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the maximum height.',
                    workingLatex: 'h(2.5) = 25(2.5) - 5(6.25) = 62.5 - 31.25 = 31.25 \\text{ m}',
                    explanation: 'Substitute \\( t = 2.5 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Set \\( h = 0 \\).',
                    workingLatex: '25t - 5t^2 = 0 \\implies 5t(5 - t) = 0 \\implies t = 0 \\text{ or } t = 5',
                    explanation: '\\( t = 0 \\) is the launch; \\( t = 5 \\) is when it lands.'
                }
            ],
            finalAnswer: '(a) \\( 20 \\) m \\newline (b) \\( 31.25 \\) m at \\( t = 2.5 \\) s \\newline (c) \\( t = 5 \\) s'
        }
    },
    {
        id: 'd5-013',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 13',
        difficulty: 'Foundation',
        questionText: 'A rectangular enclosure is to be made with \\( 120 \\) m of fencing, enclosing a field on all four sides. Find the dimensions that give the maximum area, and state that area.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'rectangle', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let the length be \\( x \\) and width be \\( y \\). Perimeter: \\( 2x + 2y = 120 \\).',
                    workingLatex: 'y = 60 - x',
                    explanation: 'Express \\( y \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Area in terms of \\( x \\).',
                    workingLatex: 'A = xy = x(60 - x) = 60x - x^2',
                    explanation: 'Substitute \\( y = 60 - x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate and set to zero.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 60 - 2x = 0 \\implies x = 30',
                    explanation: 'Stationary point at \\( x = 30 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm maximum and find dimensions.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -2 < 0; \\quad y = 30 \\text{ m}; \\quad A = 30^2 = 900 \\text{ m}^2',
                    explanation: 'Both sides equal 30 m — the optimal shape is a square.'
                }
            ],
            finalAnswer: 'Length \\( = \\) width \\( = 30 \\) m; maximum area \\( = 900 \\text{ m}^2 \\)'
        }
    },
    {
        id: 'd5-014',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 14',
        difficulty: 'Foundation',
        questionText: 'A child cuts equal squares of side \\( x \\) cm from each corner of a \\( 30 \\times 30 \\) cm piece of card and folds the sides up to make an open box.\n(a) Show that the volume of the box is \\( V = x(30 - 2x)^2 \\).\n(b) Find the value of \\( x \\) that maximises the volume.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'volume', 'open box', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) After cutting, the base has side \\( (30 - 2x) \\) cm and the height is \\( x \\) cm.',
                    workingLatex: 'V = x(30 - 2x)^2',
                    explanation: 'Volume = base area × height; the base is a square of side \\( (30 - 2x) \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Expand.',
                    workingLatex: 'V = x(900 - 120x + 4x^2) = 900x - 120x^2 + 4x^3',
                    explanation: 'Expand \\( (30-2x)^2 \\) first, then multiply by \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}x} = 900 - 240x + 12x^2',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero and simplify.',
                    workingLatex: '12x^2 - 240x + 900 = 0 \\implies x^2 - 20x + 75 = 0 \\implies (x-5)(x-15) = 0',
                    explanation: 'Divide by 12, then factorise.'
                },
                {
                    stepNumber: 5,
                    description: 'Identify the valid solution.',
                    workingLatex: 'x = 5 \\text{ or } x = 15; \\quad x = 15 \\text{ gives } (30 - 30) = 0 \\text{, so reject}',
                    explanation: '\\( x = 15 \\) gives zero base length — not a valid box. \\( x = 5 \\) gives a real box.'
                },
                {
                    stepNumber: 6,
                    description: 'Confirm maximum at \\( x = 5 \\).',
                    workingLatex: '\\frac{\\mathrm{d}^2V}{\\mathrm{d}x^2} = -240 + 24x; \\quad x=5: -240+120 = -120 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Negative second derivative confirms a maximum.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( x = 5 \\) cm maximises the volume.'
        }
    },
    {
        id: 'd5-015',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 15',
        difficulty: 'Foundation',
        questionText: 'A closed cylindrical can has radius \\( r \\) cm and height \\( h \\) cm. Its volume is \\( 250\\pi \\) cm\\(^3\\).\n(a) Show that the total surface area is \\( A = 2\\pi r^2 + \\dfrac{500\\pi}{r} \\).\n(b) Find the value of \\( r \\) that minimises \\( A \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'cylinder', 'surface area', 'minimum', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Volume: \\( \\pi r^2 h = 250\\pi \\).',
                    workingLatex: 'h = \\frac{250}{r^2}',
                    explanation: 'Rearrange to express \\( h \\) in terms of \\( r \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Surface area: two circles + curved surface.',
                    workingLatex: 'A = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot \\frac{250}{r^2} = 2\\pi r^2 + \\frac{500\\pi}{r}',
                    explanation: 'Substitute \\( h = \\dfrac{250}{r^2} \\) into the surface area formula.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Rewrite and differentiate.',
                    workingLatex: 'A = 2\\pi r^2 + 500\\pi r^{-1} \\implies \\frac{\\mathrm{d}A}{\\mathrm{d}r} = 4\\pi r - \\frac{500\\pi}{r^2}',
                    explanation: 'Convert \\( \\dfrac{1}{r} \\) to \\( r^{-1} \\) before differentiating.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '4\\pi r = \\frac{500\\pi}{r^2} \\implies 4r^3 = 500 \\implies r^3 = 125 \\implies r = 5 \\text{ cm}',
                    explanation: 'Multiply both sides by \\( r^2 \\) and solve for \\( r \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Confirm minimum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}r^2} = 4\\pi + \\frac{1000\\pi}{r^3}; \\quad r=5: 4\\pi + 8\\pi = 12\\pi > 0 \\Rightarrow \\text{minimum}',
                    explanation: 'Positive second derivative confirms a minimum.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( r = 5 \\) cm'
        }
    },
    {
        id: 'd5-016',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 16',
        difficulty: 'Foundation',
        questionText: 'A particle moves so that its velocity at time \\( t \\) seconds is \\( v = 3t^2 - 12t + 9 \\) ms\\(^{-1}\\).\n(a) Find the acceleration function.\n(b) Find the acceleration when the particle has zero velocity.\n(c) Find the minimum velocity.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'minimum velocity', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate \\( v \\) with respect to \\( t \\).',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t - 12',
                    explanation: 'Acceleration is the derivative of velocity.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Find when \\( v = 0 \\).',
                    workingLatex: '3t^2 - 12t + 9 = 0 \\implies (t-1)(t-3) = 0 \\implies t = 1 \\text{ or } t = 3',
                    explanation: 'Divide by 3 and factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Acceleration at \\( t = 1 \\) and \\( t = 3 \\).',
                    workingLatex: 'a(1) = 6-12 = -6 \\text{ ms}^{-2}; \\quad a(3) = 18-12 = 6 \\text{ ms}^{-2}',
                    explanation: 'Substitute each \\( t \\) into \\( a \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Minimum velocity: set \\( \\dfrac{\\mathrm{d}v}{\\mathrm{d}t} = 0 \\).',
                    workingLatex: '6t - 12 = 0 \\implies t = 2; \\quad v(2) = 12 - 24 + 9 = -3 \\text{ ms}^{-1}',
                    explanation: 'Find the turning point of \\( v \\). The negative value means the particle moves in reverse.'
                }
            ],
            finalAnswer: '(a) \\( a = 6t - 12 \\) \\newline (b) \\( -6 \\text{ ms}^{-2} \\) at \\( t=1 \\); \\( 6 \\text{ ms}^{-2} \\) at \\( t=3 \\) \\newline (c) Minimum velocity \\( = -3 \\text{ ms}^{-1} \\)'
        }
    },
    {
        id: 'd5-017',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 17',
        difficulty: 'Foundation',
        questionText: 'A square piece of metal of side 24 cm has squares of side \\( x \\) cm cut from each corner and is then folded into an open tray.\n(a) Write down an expression for the volume \\( V \\) of the tray.\n(b) Find the value of \\( x \\) that gives the maximum volume, and state this maximum volume.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'volume', 'open tray', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) After cutting, the base side is \\( (24 - 2x) \\) and the height is \\( x \\).',
                    workingLatex: 'V = x(24 - 2x)^2',
                    explanation: 'Volume = base area \\(\\times\\) height.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: 'V = x(576 - 96x + 4x^2) = 576x - 96x^2 + 4x^3',
                    explanation: 'Expand the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}x} = 576 - 192x + 12x^2',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero and solve.',
                    workingLatex: '12x^2 - 192x + 576 = 0 \\implies x^2 - 16x + 48 = 0 \\implies (x-4)(x-12) = 0',
                    explanation: 'Divide by 12 and factorise.'
                },
                {
                    stepNumber: 5,
                    description: 'Reject invalid root.',
                    workingLatex: 'x = 4 \\text{ or } x = 12; \\quad x = 12 \\text{ gives zero base — reject}',
                    explanation: '\\( x = 12 \\) gives \\( 24 - 24 = 0 \\) base — not a valid tray.'
                },
                {
                    stepNumber: 6,
                    description: 'Maximum volume at \\( x = 4 \\).',
                    workingLatex: 'V = 4(24-8)^2 = 4 \\times 256 = 1024 \\text{ cm}^3',
                    explanation: 'Substitute \\( x = 4 \\) and confirm it is a maximum (second derivative is negative).'
                }
            ],
            finalAnswer: '(a) \\( V = x(24 - 2x)^2 \\) \\newline (b) \\( x = 4 \\) cm; maximum volume \\( = 1024 \\text{ cm}^3 \\)'
        }
    },
    {
        id: 'd5-018',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 18',
        difficulty: 'Foundation',
        questionText: 'A rectangular sheet of cardboard measures \\( 20 \\) cm by \\( 12 \\) cm. Equal squares of side \\( x \\) cm are cut from each corner and the sides folded up to form an open box.\n(a) Show that the volume is \\( V = 4x^3 - 64x^2 + 240x \\).\n(b) Find the value of \\( x \\) that maximises the volume.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'volume', 'open box', 'show that', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) After cutting, the box has dimensions \\( (20-2x) \\times (12-2x) \\times x \\).',
                    workingLatex: 'V = x(20-2x)(12-2x)',
                    explanation: 'Length, width and height of the open box.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: 'V = x(240 - 40x - 24x + 4x^2) = x(240 - 64x + 4x^2) = 240x - 64x^2 + 4x^3',
                    explanation: 'Multiply out and simplify.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}x} = 240 - 128x + 12x^2',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '12x^2 - 128x + 240 = 0 \\implies 3x^2 - 32x + 60 = 0',
                    explanation: 'Divide through by 4 to simplify. This quadratic does not factorise neatly, so use the quadratic formula.'
                },
                {
                    stepNumber: 5,
                    description: 'Use the quadratic formula.',
                    workingLatex: 'x = \\frac{32 \\pm \\sqrt{1024 - 720}}{6} = \\frac{32 \\pm \\sqrt{304}}{6} \\approx \\frac{32 \\pm 17.44}{6}',
                    explanation: 'Apply the quadratic formula with \\( a = 3, b = -32, c = 60 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Select valid solution.',
                    workingLatex: 'x \\approx \\frac{32 - 17.44}{6} \\approx 2.43 \\text{ cm (to 3 s.f.)}; \\quad x \\approx 8.24 \\text{ rejected (} > 6\\text{)}',
                    explanation: 'The maximum allowed \\( x \\) is half the shortest side: \\( \\tfrac{12}{2} = 6 \\) cm. So \\( x \\approx 8.24 \\) is rejected.'
                }
            ],
            finalAnswer: '(a) Shown: \\( V = 4x^3 - 64x^2 + 240x \\) \\newline (b) \\( x \\approx 2.43 \\) cm'
        }
    },
    {
        id: 'd5-019',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 19',
        difficulty: 'Foundation',
        questionText: 'A cylindrical storage tank (open at the top) has radius \\( r \\) m and height \\( h \\) m. The volume must be \\( 16\\pi \\) m\\(^3\\).\n(a) Express \\( h \\) in terms of \\( r \\).\n(b) Show that the surface area (base + curved side) is \\( A = \\pi r^2 + \\dfrac{32\\pi}{r} \\).\n(c) Find the value of \\( r \\) that minimises the surface area.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'cylinder', 'surface area', 'minimum', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Use the volume formula.',
                    workingLatex: '\\pi r^2 h = 16\\pi \\implies h = \\frac{16}{r^2}',
                    explanation: 'Rearrange to make \\( h \\) the subject.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Surface area = base + curved side.',
                    workingLatex: 'A = \\pi r^2 + 2\\pi r h = \\pi r^2 + 2\\pi r \\cdot \\frac{16}{r^2} = \\pi r^2 + \\frac{32\\pi}{r}',
                    explanation: 'Substitute \\( h = \\dfrac{16}{r^2} \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}r} = 2\\pi r - \\frac{32\\pi}{r^2}',
                    explanation: '\\( \\dfrac{\\mathrm{d}}{\\mathrm{d}r}\\left(\\dfrac{32\\pi}{r}\\right) = -\\dfrac{32\\pi}{r^2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '2\\pi r = \\frac{32\\pi}{r^2} \\implies 2r^3 = 32 \\implies r^3 = 16 \\implies r = 2\\sqrt[3]{2} \\approx 2.52 \\text{ m}',
                    explanation: 'Multiply by \\( r^2 \\) and solve for \\( r \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Confirm minimum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}r^2} = 2\\pi + \\frac{64\\pi}{r^3} > 0 \\Rightarrow \\text{minimum}',
                    explanation: 'Both terms are positive, so the second derivative is always positive.'
                }
            ],
            finalAnswer: '(a) \\( h = \\dfrac{16}{r^2} \\) \\newline (b) Shown. \\newline (c) \\( r = 2\\sqrt[3]{2} \\approx 2.52 \\) m'
        }
    },
    {
        id: 'd5-020',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 20',
        difficulty: 'Foundation',
        questionText: 'A particle\'s displacement is \\( s = t^4 - 8t^2 \\) metres after \\( t \\) seconds for \\( t \\geq 0 \\).\n(a) Find the velocity and acceleration functions.\n(b) Find the values of \\( t \\) when the particle is at rest.\n(c) Find the acceleration at each of those times.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'particle at rest', 'kinematics', 'quartic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 4t^3 - 16t',
                    explanation: 'Differentiate \\( s \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 12t^2 - 16',
                    explanation: 'Differentiate \\( v \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( v = 0 \\).',
                    workingLatex: '4t^3 - 16t = 0 \\implies 4t(t^2 - 4) = 0 \\implies t = 0, \\; t = 2 \\; (t = -2 \\text{ rejected})',
                    explanation: 'For \\( t \\geq 0 \\), only \\( t = 0 \\) and \\( t = 2 \\) are valid.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Acceleration at rest times.',
                    workingLatex: 'a(0) = -16 \\text{ ms}^{-2}; \\quad a(2) = 12(4) - 16 = 32 \\text{ ms}^{-2}',
                    explanation: 'Substitute \\( t = 0 \\) and \\( t = 2 \\) into \\( a = 12t^2 - 16 \\).'
                }
            ],
            finalAnswer: '(a) \\( v = 4t^3 - 16t \\), \\( a = 12t^2 - 16 \\) \\newline (b) \\( t = 0 \\) and \\( t = 2 \\) s \\newline (c) \\( -16 \\text{ ms}^{-2} \\) and \\( 32 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-021',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 21',
        difficulty: 'Foundation',
        questionText: 'A wire of length \\( 48 \\) cm is bent to form a rectangle. Find the dimensions that maximise the area enclosed, and state that maximum area.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'rectangle', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let the length be \\( l \\) and width \\( w \\). Perimeter \\( = 2l + 2w = 48 \\).',
                    workingLatex: 'l = 24 - w',
                    explanation: 'Express one variable in terms of the other.'
                },
                {
                    stepNumber: 2,
                    description: 'Area.',
                    workingLatex: 'A = lw = w(24 - w) = 24w - w^2',
                    explanation: 'Substitute \\( l = 24 - w \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate and set to zero.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}w} = 24 - 2w = 0 \\implies w = 12 \\text{ cm}',
                    explanation: 'Maximum area stationary point.'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm maximum and state dimensions.',
                    workingLatex: 'l = 24 - 12 = 12 \\text{ cm}; \\quad A = 12 \\times 12 = 144 \\text{ cm}^2',
                    explanation: 'A square always gives the maximum area for a fixed perimeter.'
                }
            ],
            finalAnswer: 'Dimensions: \\( 12 \\) cm \\(\\times\\) \\( 12 \\) cm; maximum area \\( = 144 \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-022',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 22',
        difficulty: 'Foundation',
        questionText: 'A rectangular pen is built against a long straight wall (the wall forms one side). The pen uses \\( 100 \\) m of fencing for the remaining three sides, and the width of the pen (perpendicular to the wall) is \\( x \\) m.\n(a) Write down the length of the pen in terms of \\( x \\).\n(b) Show that the area is \\( A = 100x - 2x^2 \\).\n(c) Find the maximum area and the dimensions of the pen.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'fencing', 'three sides', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Three sides: two widths \\( x \\) and one length \\( l \\). So \\( 2x + l = 100 \\).',
                    workingLatex: 'l = 100 - 2x',
                    explanation: 'Rearrange to express \\( l \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Area.',
                    workingLatex: 'A = xl = x(100 - 2x) = 100x - 2x^2',
                    explanation: 'Substitute \\( l = 100 - 2x \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Differentiate and set to zero.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 100 - 4x = 0 \\implies x = 25 \\text{ m}',
                    explanation: 'Stationary point.'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -4 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Negative second derivative.'
                },
                {
                    stepNumber: 5,
                    description: 'Maximum area.',
                    workingLatex: 'l = 100 - 50 = 50 \\text{ m}; \\quad A = 25 \\times 50 = 1250 \\text{ m}^2',
                    explanation: '\\( x = 25 \\) m and \\( l = 50 \\) m.'
                }
            ],
            finalAnswer: '(a) \\( l = 100 - 2x \\) \\newline (b) Shown. \\newline (c) Width \\( = 25 \\) m, length \\( = 50 \\) m; max area \\( = 1250 \\text{ m}^2 \\)'
        }
    },
    {
        id: 'd5-023',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 23',
        difficulty: 'Foundation',
        questionText: 'A model rocket\'s height in metres after \\( t \\) seconds is \\( h = -2t^3 + 18t^2 + 5 \\) for \\( 0 \\leq t \\leq 10 \\).\n(a) Find the velocity \\( \\dfrac{\\mathrm{d}h}{\\mathrm{d}t} \\).\n(b) Find the times when the rocket is neither ascending nor descending.\n(c) Find the maximum height.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'maximum height', 'kinematics', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate height to find velocity.',
                    workingLatex: '\\frac{\\mathrm{d}h}{\\mathrm{d}t} = -6t^2 + 36t',
                    explanation: 'Velocity is the rate of change of height. Apply the power rule to each term of \\( h = -2t^3 + 18t^2 + 5 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set the velocity equal to zero.',
                    workingLatex: '-6t^2 + 36t = 0',
                    explanation: 'The rocket is neither ascending nor descending when the velocity is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise and solve for t.',
                    workingLatex: '-6t(t - 6) = 0 \\implies t = 0 \\text{ or } t = 6',
                    explanation: 'Take out a common factor of \\( -6t \\). Both solutions lie in the given domain \\( 0 \\leq t \\leq 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Identify which time gives the maximum.',
                    workingLatex: 't = 0 \\text{ is launch; } t = 6 \\text{ gives the peak}',
                    explanation: 'At \\( t = 0 \\) the rocket is at its starting height of 5 m. The maximum height occurs at \\( t = 6 \\) where the rocket stops rising and begins to descend.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute t = 6 into the height function.',
                    workingLatex: 'h(6) = -2(216) + 18(36) + 5 = -432 + 648 + 5 = 221 \\text{ m}',
                    explanation: 'Replace \\( t \\) with 6 in \\( h = -2t^3 + 18t^2 + 5 \\) to find the maximum height.'
                }
            ],
            finalAnswer: '(a) \\( v = -6t^2 + 36t \\) \\newline (b) \\( t = 0 \\) and \\( t = 6 \\) s \\newline (c) Maximum height \\( = 221 \\) m'
        }
    },
    {
        id: 'd5-024',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 24',
        difficulty: 'Foundation',
        questionText: 'A piece of wire 60 cm long is cut into two pieces. One piece is bent into a square of side \\( x \\) cm and the other into a rectangle of dimensions \\( 2x \\) cm by \\( y \\) cm.\n(a) Write an expression for \\( y \\) in terms of \\( x \\).\n(b) Find the total area \\( A \\) of both shapes in terms of \\( x \\).\n(c) Use calculus to find the value of \\( x \\) that minimises the total area.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'wire', 'minimum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Total wire: perimeter of square + perimeter of rectangle \\( = 60 \\).',
                    workingLatex: '4x + 2(2x + y) = 60 \\implies 4x + 4x + 2y = 60 \\implies y = 30 - 4x',
                    explanation: 'Perimeter of rectangle \\( = 2(2x + y) \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Total area.',
                    workingLatex: 'A = x^2 + 2x \\cdot y = x^2 + 2x(30 - 4x) = x^2 + 60x - 8x^2 = -7x^2 + 60x',
                    explanation: 'Area of square \\( = x^2 \\); area of rectangle \\( = 2xy \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = -14x + 60 = 0 \\implies x = \\frac{60}{14} = \\frac{30}{7} \\approx 4.29 \\text{ cm}',
                    explanation: 'Set derivative to zero and solve.'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm minimum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -14 < 0',
                    explanation: 'Wait — negative second derivative means this is a maximum, not a minimum! The area function is a downward parabola, so it has a maximum at \\( x = \\tfrac{30}{7} \\). For a minimum of a downward parabola on a restricted domain, check the endpoints. \\( x \\) must satisfy \\( y = 30 - 4x \\geq 0 \\), so \\( x \\leq 7.5 \\), and \\( x > 0 \\). The minimum area occurs at an endpoint of the domain.'
                },
                {
                    stepNumber: 5,
                    description: 'Check endpoints.',
                    workingLatex: 'A(0) = 0; \\quad A(7.5) = -7(56.25) + 60(7.5) = -393.75 + 450 = 56.25 \\text{ cm}^2',
                    explanation: 'The minimum total area is 0 cm\\(^2\\) (degenerate case at \\(x = 0\\)). Minimum non-degenerate area is at \\( x \\to 0^+ \\). The stationary point \\( x \\approx 4.29 \\) gives the maximum area of about \\( 128.6 \\text{ cm}^2 \\).'
                }
            ],
            finalAnswer: '(a) \\( y = 30 - 4x \\) \\newline (b) \\( A = -7x^2 + 60x \\) \\newline (c) The stationary point \\( x = \\tfrac{30}{7} \\) is a maximum (\\( \\approx 128.6 \\text{ cm}^2 \\)); area is minimised at the domain boundaries.'
        }
    },
    {
        id: 'd5-025',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 25',
        difficulty: 'Foundation',
        questionText: 'A closed rectangular box has a square base of side \\( x \\) cm and height \\( h \\) cm. The total surface area is \\( 150 \\) cm\\(^2\\).\n(a) Show that the volume is \\( V = \\dfrac{150x - 2x^3}{4} \\).\n(b) Find the value of \\( x \\) that maximises the volume.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'volume', 'box', 'surface area constraint', 'show that', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Surface area: 2 square faces + 4 rectangular faces.',
                    workingLatex: '2x^2 + 4xh = 150 \\implies h = \\frac{150 - 2x^2}{4x}',
                    explanation: 'Rearrange to express \\( h \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Volume.',
                    workingLatex: 'V = x^2 h = x^2 \\cdot \\frac{150 - 2x^2}{4x} = \\frac{x(150 - 2x^2)}{4} = \\frac{150x - 2x^3}{4}',
                    explanation: 'Substitute \\( h \\) into \\( V = x^2 h \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}x} = \\frac{150 - 6x^2}{4}',
                    explanation: 'Power rule applied inside the fraction.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '150 - 6x^2 = 0 \\implies x^2 = 25 \\implies x = 5 \\text{ cm}',
                    explanation: 'Take the positive root since \\( x > 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Confirm maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2V}{\\mathrm{d}x^2} = \\frac{-12x}{4} = -3x; \\quad x=5: -15 < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Negative second derivative at \\( x = 5 \\).'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( x = 5 \\) cm'
        }
    },
    {
        id: 'd5-026',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 26',
        difficulty: 'Foundation',
        questionText: 'A particle moves along a straight line. The displacement from the origin after \\( t \\) seconds is \\( s = 6t - t^2 \\) m for \\( 0 \\leq t \\leq 8 \\).\n(a) Find the velocity when \\( t = 1 \\).\n(b) Find the displacement at the instant when the particle is momentarily at rest.\n(c) Find the total distance travelled in the first 8 seconds.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'displacement', 'total distance', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 6 - 2t; \\quad v(1) = 6 - 2 = 4 \\text{ ms}^{-1}',
                    explanation: 'Power rule, then substitute \\( t = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Particle at rest: \\( v = 0 \\).',
                    workingLatex: '6 - 2t = 0 \\implies t = 3 \\text{ s}; \\quad s(3) = 18 - 9 = 9 \\text{ m}',
                    explanation: 'Substitute \\( t = 3 \\) into \\( s \\).'
                },
                {
                    stepNumber: 3,
                    description: '(c) After \\( t = 3 \\), the particle reverses. Find \\( s(8) \\).',
                    workingLatex: 's(8) = 48 - 64 = -16 \\text{ m}',
                    explanation: 'The particle is now 16 m on the other side of the origin.'
                },
                {
                    stepNumber: 4,
                    description: 'Total distance.',
                    workingLatex: 'd = 9 + (9 - (-16)) = 9 + 25 = 34 \\text{ m}',
                    explanation: 'Outward journey: 9 m. Return journey: from \\( s = 9 \\) to \\( s = -16 \\) is \\( 25 \\) m.'
                }
            ],
            finalAnswer: '(a) \\( 4 \\text{ ms}^{-1} \\) \\newline (b) \\( 9 \\) m from origin \\newline (c) Total distance \\( = 34 \\) m'
        }
    },
    {
        id: 'd5-027',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 27',
        difficulty: 'Foundation',
        questionText: 'An open-topped cylindrical bucket is to be made from a fixed area of metal \\( 300\\pi \\) cm\\(^2\\). The radius is \\( r \\) cm and the height is \\( h \\) cm.\n(a) Show that \\( h = \\dfrac{300 - r^2}{2r} \\).\n(b) Show that the volume is \\( V = \\dfrac{\\pi r}{2}(300 - r^2) \\).\n(c) Find the value of \\( r \\) that maximises the volume.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'cylinder', 'volume', 'surface area constraint', 'maximum', 'show that'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Surface area (open top): base + curved side.',
                    workingLatex: '\\pi r^2 + 2\\pi r h = 300\\pi \\implies r^2 + 2rh = 300 \\implies h = \\frac{300 - r^2}{2r}',
                    explanation: 'Rearrange to make \\( h \\) the subject.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Volume.',
                    workingLatex: 'V = \\pi r^2 h = \\pi r^2 \\cdot \\frac{300 - r^2}{2r} = \\frac{\\pi r(300 - r^2)}{2}',
                    explanation: 'Substitute \\( h \\) into \\( V = \\pi r^2 h \\) and simplify.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Expand and differentiate.',
                    workingLatex: 'V = \\frac{\\pi}{2}(300r - r^3) \\implies \\frac{\\mathrm{d}V}{\\mathrm{d}r} = \\frac{\\pi}{2}(300 - 3r^2)',
                    explanation: 'Power rule applied inside the bracket.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '300 - 3r^2 = 0 \\implies r^2 = 100 \\implies r = 10 \\text{ cm}',
                    explanation: 'Take the positive root.'
                },
                {
                    stepNumber: 5,
                    description: 'Confirm maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2V}{\\mathrm{d}r^2} = \\frac{\\pi}{2}(-6r); \\quad r=10: -30\\pi < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Negative second derivative.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) Shown. \\newline (c) \\( r = 10 \\) cm'
        }
    },
    {
        id: 'd5-028',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 28',
        difficulty: 'Foundation',
        questionText: 'A particle moves along the \\( x \\)-axis. Its displacement is \\( x = t^3 - 6t^2 + 12t - 3 \\) metres at time \\( t \\) seconds.\n(a) Find the velocity and acceleration functions.\n(b) Find the time when the acceleration is zero.\n(c) Show that the velocity is always positive for \\( t \\geq 0 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'show that', 'always positive', 'kinematics', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}x}{\\mathrm{d}t} = 3t^2 - 12t + 12',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t - 12',
                    explanation: 'Differentiate \\( v \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( a = 0 \\).',
                    workingLatex: '6t - 12 = 0 \\implies t = 2 \\text{ s}',
                    explanation: 'Solve the linear equation.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Factorise or complete the square for \\( v \\).',
                    workingLatex: 'v = 3t^2 - 12t + 12 = 3(t^2 - 4t + 4) = 3(t - 2)^2',
                    explanation: 'Recognise the perfect square.'
                },
                {
                    stepNumber: 5,
                    description: 'Conclude.',
                    workingLatex: 'v = 3(t-2)^2 \\geq 0 \\text{ for all } t',
                    explanation: 'A square is always \\( \\geq 0 \\), so velocity is never negative. At \\( t = 2 \\) it equals zero momentarily, but is positive otherwise.'
                }
            ],
            finalAnswer: '(a) \\( v = 3t^2-12t+12 \\), \\( a = 6t-12 \\) \\newline (b) \\( t = 2 \\) s \\newline (c) \\( v = 3(t-2)^2 \\geq 0 \\) for all \\( t \\geq 0 \\) ✓'
        }
    },
    {
        id: 'd5-029',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 29',
        difficulty: 'Foundation',
        questionText: 'A farmer needs to fence a rectangular area of \\( 200 \\) m\\(^2\\) on all four sides.\n(a) Let the width be \\( x \\) m. Write down the length in terms of \\( x \\).\n(b) Find an expression for the total length of fencing needed.\n(c) Use calculus to find the dimensions that minimise the fencing used.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'perimeter', 'fixed area', 'minimum', 'fencing'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Area = \\( x \\times l = 200 \\).',
                    workingLatex: 'l = \\frac{200}{x}',
                    explanation: 'Rearrange the area formula.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Total fencing.',
                    workingLatex: 'P = 2x + 2l = 2x + \\frac{400}{x}',
                    explanation: 'Substitute \\( l = \\dfrac{200}{x} \\) into the perimeter formula.'
                },
                {
                    stepNumber: 3,
                    description: '(c) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}x} = 2 - \\frac{400}{x^2}',
                    explanation: '\\( \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\dfrac{400}{x}\\right) = -\\dfrac{400}{x^2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '2 = \\frac{400}{x^2} \\implies x^2 = 200 \\implies x = 10\\sqrt{2} \\approx 14.1 \\text{ m}',
                    explanation: 'Solve for \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Confirm minimum and find length.',
                    workingLatex: '\\frac{\\mathrm{d}^2P}{\\mathrm{d}x^2} = \\frac{800}{x^3} > 0 \\Rightarrow \\text{minimum}; \\quad l = \\frac{200}{10\\sqrt{2}} = 10\\sqrt{2}',
                    explanation: 'The optimal shape is again a square.'
                }
            ],
            finalAnswer: '(a) \\( l = \\dfrac{200}{x} \\) \\newline (b) \\( P = 2x + \\dfrac{400}{x} \\) \\newline (c) Both dimensions \\( = 10\\sqrt{2} \\approx 14.1 \\) m; minimum fencing \\( = 40\\sqrt{2} \\approx 56.6 \\) m'
        }
    },
    {
        id: 'd5-030',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 30',
        difficulty: 'Foundation',
        questionText: 'A particle travels along a straight line. Its displacement \\( s \\) metres from a fixed point \\( O \\) after \\( t \\) seconds is \\( s = t^3 - 3t^2 - 9t + 2 \\) for \\( t \\geq 0 \\).\n(a) Find the velocity function and hence the times when the particle passes through \\( O \\) travelling in the positive direction.\n(b) Find the acceleration when \\( t = 4 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'passes through origin', 'direction', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Velocity.',
                    workingLatex: 'v = 3t^2 - 6t - 9 = 3(t^2 - 2t - 3) = 3(t-3)(t+1)',
                    explanation: 'Differentiate and factorise.'
                },
                {
                    stepNumber: 2,
                    description: 'Particle travels in positive direction when \\( v > 0 \\).',
                    workingLatex: '3(t-3)(t+1) > 0 \\implies t > 3 \\text{ (since } t \\geq 0\\text{)}',
                    explanation: 'For \\( t \\geq 0 \\): \\( (t+1) > 0 \\) always, so need \\( (t-3) > 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find when the particle is at \\( O \\): \\( s = 0 \\).',
                    workingLatex: 't^3 - 3t^2 - 9t + 2 = 0',
                    explanation: 'This cubic has no simple rational roots — find the time when the particle passes through \\( O \\) travelling in the positive direction numerically or note that the relevant portion is \\( t > 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Acceleration.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t - 6; \\quad a(4) = 24 - 6 = 18 \\text{ ms}^{-2}',
                    explanation: 'Differentiate \\( v \\) then substitute \\( t = 4 \\).'
                }
            ],
            finalAnswer: '(a) \\( v = 3(t-3)(t+1) \\); particle moves in positive direction for \\( t > 3 \\) \\newline (b) \\( a(4) = 18 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-031',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 31',
        difficulty: 'Foundation',
        questionText: 'A drinks can manufacturer designs a cylindrical can of volume \\( 330 \\) cm\\(^3\\). The radius is \\( r \\) cm and the height is \\( h \\) cm.\n(a) Show that the total surface area (including both circular ends) is \\( A = 2\\pi r^2 + \\dfrac{660}{r} \\).\n(b) Find the value of \\( r \\) that minimises the surface area, giving your answer to 3 significant figures.\n(c) Find the minimum surface area to 3 significant figures.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'cylinder', 'surface area', 'minimum', 'show that', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Volume: \\( \\pi r^2 h = 330 \\).',
                    workingLatex: 'h = \\frac{330}{\\pi r^2}',
                    explanation: 'Express \\( h \\) in terms of \\( r \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Surface area.',
                    workingLatex: 'A = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot \\frac{330}{\\pi r^2} = 2\\pi r^2 + \\frac{660}{r}',
                    explanation: 'Substitute \\( h \\) and simplify: \\( \\dfrac{2\\pi r \\times 330}{\\pi r^2} = \\dfrac{660}{r} \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}r} = 4\\pi r - \\frac{660}{r^2}',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '4\\pi r = \\frac{660}{r^2} \\implies r^3 = \\frac{660}{4\\pi} = \\frac{165}{\\pi} \\implies r = \\sqrt[3]{\\frac{165}{\\pi}} \\approx 3.74 \\text{ cm}',
                    explanation: 'Multiply by \\( r^2 \\) and solve for \\( r \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Confirm minimum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}r^2} = 4\\pi + \\frac{1320}{r^3} > 0 \\Rightarrow \\text{minimum}',
                    explanation: 'Both terms are positive.'
                },
                {
                    stepNumber: 6,
                    description: '(c) Minimum surface area.',
                    workingLatex: 'A \\approx 2\\pi(3.74)^2 + \\frac{660}{3.74} \\approx 87.9 + 176.5 \\approx 264 \\text{ cm}^2',
                    explanation: 'Substitute \\( r \\approx 3.74 \\) into \\( A \\).'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( r \\approx 3.74 \\) cm \\newline (c) Minimum surface area \\( \\approx 264 \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-032',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 32',
        difficulty: 'Foundation',
        questionText: 'A particle moves along a straight line so that its displacement \\( s \\) metres at time \\( t \\) seconds is \\( s = 2t^3 - 5t^2 + 4t \\) for \\( t \\geq 0 \\).\n(a) Find the velocity function and determine when the particle first comes to rest.\n(b) Find the acceleration at that instant.\n(c) Determine whether the particle is speeding up or slowing down just before it comes to rest.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'speeding up', 'slowing down', 'kinematics', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Velocity.',
                    workingLatex: 'v = 6t^2 - 10t + 4',
                    explanation: 'Differentiate \\( s \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Set \\( v = 0 \\).',
                    workingLatex: '6t^2 - 10t + 4 = 0 \\implies 3t^2 - 5t + 2 = 0 \\implies (3t - 2)(t - 1) = 0',
                    explanation: 'Divide by 2 and factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'First time at rest.',
                    workingLatex: 't = \\tfrac{2}{3} \\text{ s (earlier root)}',
                    explanation: '\\( t = \\tfrac{2}{3} < 1 \\), so the particle first comes to rest at \\( t = \\tfrac{2}{3} \\) s.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Acceleration.',
                    workingLatex: 'a = 12t - 10; \\quad a\\!\\left(\\tfrac{2}{3}\\right) = 8 - 10 = -2 \\text{ ms}^{-2}',
                    explanation: 'Differentiate \\( v \\) and substitute \\( t = \\tfrac{2}{3} \\).'
                },
                {
                    stepNumber: 5,
                    description: '(c) Just before \\( t = \\tfrac{2}{3} \\), check the sign of \\( v \\).',
                    workingLatex: 'v(0.5) = 6(0.25) - 10(0.5) + 4 = 1.5 - 5 + 4 = 0.5 > 0',
                    explanation: 'The particle is moving in the positive direction. The acceleration is \\(-2 \\text{ ms}^{-2}\\) (opposing the motion), so the particle is slowing down.'
                }
            ],
            finalAnswer: '(a) \\( v = 6t^2-10t+4 \\); first at rest at \\( t = \\tfrac{2}{3} \\) s \\newline (b) \\( a = -2 \\text{ ms}^{-2} \\) \\newline (c) Slowing down (velocity positive, acceleration negative)'
        }
    },
    {
        id: 'd5-033',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 33',
        difficulty: 'Foundation',
        questionText: 'An architect designs a Norman window consisting of a rectangle surmounted by a semicircle. The perimeter of the window (including the base) is \\( 6 \\) m and the width of the rectangle is \\( 2r \\) m.\n(a) Show that the height of the rectangular part is \\( h = 3 - r - \\dfrac{\\pi r}{2} \\).\n(b) Show that the total area is \\( A = 6r - 2r^2 - \\dfrac{\\pi r^2}{2} \\).\n(c) Find the value of \\( r \\) that maximises the area, giving your answer in exact form.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'area', 'Norman window', 'semicircle', 'show that', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Perimeter: base \\( + \\) two sides \\( + \\) semicircle arc.',
                    workingLatex: '2r + 2h + \\pi r = 6 \\implies 2h = 6 - 2r - \\pi r \\implies h = 3 - r - \\frac{\\pi r}{2}',
                    explanation: 'The semicircle arc has length \\( \\pi r \\) (half the circumference of a circle of radius \\( r \\)).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Total area = rectangle + semicircle.',
                    workingLatex: 'A = 2rh + \\frac{\\pi r^2}{2} = 2r\\!\\left(3 - r - \\frac{\\pi r}{2}\\right) + \\frac{\\pi r^2}{2}',
                    explanation: 'Substitute \\( h \\) into the area expression.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand.',
                    workingLatex: 'A = 6r - 2r^2 - \\pi r^2 + \\frac{\\pi r^2}{2} = 6r - 2r^2 - \\frac{\\pi r^2}{2}',
                    explanation: '\\( -\\pi r^2 + \\dfrac{\\pi r^2}{2} = -\\dfrac{\\pi r^2}{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}r} = 6 - 4r - \\pi r = 6 - r(4 + \\pi)',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 5,
                    description: 'Set to zero.',
                    workingLatex: 'r(4 + \\pi) = 6 \\implies r = \\frac{6}{4 + \\pi}',
                    explanation: 'This is the exact value.'
                },
                {
                    stepNumber: 6,
                    description: 'Confirm maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}r^2} = -(4 + \\pi) < 0 \\Rightarrow \\text{maximum}',
                    explanation: 'Negative second derivative.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) Shown. \\newline (c) \\( r = \\dfrac{6}{4 + \\pi} \\) m'
        }
    },
    {
        id: 'd5-034',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 34',
        difficulty: 'Foundation',
        questionText: 'A particle \\( P \\) moves along the \\( x \\)-axis. Its displacement from the origin \\( O \\) at time \\( t \\) seconds is \\( x = t^3 - 12t + 4 \\) metres for \\( t \\geq 0 \\).\n(a) Find \\( \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} \\) and \\( \\dfrac{\\mathrm{d}^2x}{\\mathrm{d}t^2} \\).\n(b) Find the times when \\( P \\) is at rest.\n(c) Find the position of \\( P \\) at each of those times.\n(d) Determine the direction \\( P \\) is travelling just after \\( t = 2 \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['velocity', 'acceleration', 'direction of motion', 'kinematics', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Velocity.',
                    workingLatex: '\\frac{\\mathrm{d}x}{\\mathrm{d}t} = 3t^2 - 12',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Acceleration.',
                    workingLatex: '\\frac{\\mathrm{d}^2x}{\\mathrm{d}t^2} = 6t',
                    explanation: 'Differentiate the velocity.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set velocity to zero.',
                    workingLatex: '3t^2 - 12 = 0 \\implies t^2 = 4 \\implies t = 2 \\text{ s (reject } t=-2\\text{)}',
                    explanation: 'Only \\( t = 2 \\) is valid for \\( t \\geq 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Position at \\( t = 2 \\).',
                    workingLatex: 'x(2) = 8 - 24 + 4 = -12 \\text{ m}',
                    explanation: 'Particle is 12 m on the negative side of \\( O \\).'
                },
                {
                    stepNumber: 5,
                    description: '(d) Just after \\( t = 2 \\), check the sign of \\( v \\) at, say, \\( t = 2.1 \\).',
                    workingLatex: 'v(2.1) = 3(4.41) - 12 = 13.23 - 12 = 1.23 > 0',
                    explanation: 'Positive velocity means the particle moves in the positive direction (towards \\( O \\) and beyond) just after \\( t = 2 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}x}{\\mathrm{d}t} = 3t^2 - 12 \\), \\( \\dfrac{\\mathrm{d}^2x}{\\mathrm{d}t^2} = 6t \\) \\newline (b) \\( t = 2 \\) s \\newline (c) \\( x = -12 \\) m \\newline (d) Positive direction'
        }
    },
    {
        id: 'd5-035',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 35',
        difficulty: 'Foundation',
        questionText: 'A company makes storage crates that are open-topped rectangular boxes. Each crate has a square base of side \\( x \\) m, height \\( h \\) m, and a volume of \\( 4 \\) m\\(^3\\).\n(a) Show that the surface area (base and four sides) is \\( A = x^2 + \\dfrac{16}{x} \\).\n(b) Use calculus to find the value of \\( x \\) that minimises the surface area.\n(c) Find the minimum surface area and the corresponding height.\n(d) Show that your answer is a minimum.',
        marks: 9,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'surface area', 'box', 'minimum', 'show that', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Volume: \\( x^2 h = 4 \\).',
                    workingLatex: 'h = \\frac{4}{x^2}',
                    explanation: 'Express \\( h \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Surface area: base + 4 sides.',
                    workingLatex: 'A = x^2 + 4xh = x^2 + 4x \\cdot \\frac{4}{x^2} = x^2 + \\frac{16}{x}',
                    explanation: 'Each side has area \\( xh \\); there are 4 sides.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 2x - \\frac{16}{x^2}',
                    explanation: '\\( \\dfrac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\dfrac{16}{x}\\right) = -\\dfrac{16}{x^2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Set to zero.',
                    workingLatex: '2x = \\frac{16}{x^2} \\implies 2x^3 = 16 \\implies x^3 = 8 \\implies x = 2 \\text{ m}',
                    explanation: 'Solve the equation.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Minimum surface area.',
                    workingLatex: 'A = 4 + \\frac{16}{2} = 4 + 8 = 12 \\text{ m}^2',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Corresponding height.',
                    workingLatex: 'h = \\frac{4}{4} = 1 \\text{ m}',
                    explanation: 'Substitute \\( x = 2 \\) into \\( h = \\dfrac{4}{x^2} \\).'
                },
                {
                    stepNumber: 7,
                    description: '(d) Second derivative test.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = 2 + \\frac{32}{x^3}; \\quad x=2: 2 + 4 = 6 > 0 \\Rightarrow \\text{minimum} \\checkmark',
                    explanation: 'Positive second derivative at \\( x = 2 \\) confirms a minimum.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( x = 2 \\) m \\newline (c) Minimum area \\( = 12 \\text{ m}^2 \\); height \\( = 1 \\) m \\newline (d) \\( \\dfrac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = 6 > 0 \\) at \\( x = 2 \\) ✓'
        }
    },
    {
        id: 'd5-036',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 36',
        difficulty: 'Foundation',
        questionText: 'A particle moves on a straight line with displacement \\( s = 2t^3 - 9t^2 + 12t \\) metres after \\( t \\) seconds.\n(a) Find the velocity \\( v \\).\n(b) Find the values of \\( t \\) at which the particle is instantaneously at rest.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['velocity', 'kinematics', 'at rest'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate displacement.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 6t^2 - 18t + 12',
                    explanation: 'Velocity is the derivative of displacement with respect to time. Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set velocity equal to zero.',
                    workingLatex: '6t^2 - 18t + 12 = 0',
                    explanation: 'The particle is instantaneously at rest when its velocity is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the quadratic.',
                    workingLatex: 't^2 - 3t + 2 = 0',
                    explanation: 'Divide every term by 6 to obtain a simpler monic quadratic.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and solve.',
                    workingLatex: '(t-1)(t-2) = 0 \\implies t = 1 \\text{ s or } t = 2 \\text{ s}',
                    explanation: 'The quadratic factorises into two linear factors, giving two times when the particle is momentarily at rest.'
                }
            ],
            finalAnswer: '(a) \\( v = 6t^2 - 18t + 12 \\) \\newline (b) \\( t = 1 \\) s and \\( t = 2 \\) s'
        }
    },
    {
        id: 'd5-037',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 37',
        difficulty: 'Foundation',
        questionText: 'A particle has velocity \\( v = 6t^2 - 4t + 1 \\) ms\\(^{-1}\\) at time \\( t \\) seconds. Find the acceleration when \\( t = 3 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['acceleration', 'kinematics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate velocity.',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 12t - 4',
                    explanation: 'Acceleration is the derivative of velocity with respect to time. Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute t = 3.',
                    workingLatex: 'a = 12(3) - 4',
                    explanation: 'Replace t with 3 in the acceleration expression.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the expression.',
                    workingLatex: 'a = 36 - 4 = 32',
                    explanation: 'Compute 12 times 3, then subtract 4.'
                },
                {
                    stepNumber: 4,
                    description: 'State with correct units.',
                    workingLatex: 'a = 32 \\text{ ms}^{-2}',
                    explanation: 'Since velocity was in metres per second and time in seconds, acceleration is in metres per second squared.'
                }
            ],
            finalAnswer: '\\( a = 32 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-038',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 38',
        difficulty: 'Standard',
        questionText: 'An open box is made by cutting equal squares of side \\( x \\) cm from the corners of a square sheet of card of side 12 cm and folding up the sides. The volume is \\( V = x(12 - 2x)^2 \\) cm\\(^3\\).\n(a) Find \\( \\dfrac{\\mathrm{d}V}{\\mathrm{d}x} \\).\n(b) Find the value of \\( x \\) that maximises \\( V \\) and the maximum volume.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'open box', 'maximum volume'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the volume expression.',
                    workingLatex: 'V = x(144 - 48x + 4x^2) = 144x - 48x^2 + 4x^3',
                    explanation: 'First expand (12 - 2x)^2 to get 144 - 48x + 4x^2, then multiply through by x so V is a polynomial ready to differentiate.'
                },
                {
                    stepNumber: 2,
                    description: '(a) Differentiate term by term.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}x} = 144 - 96x + 12x^2',
                    explanation: 'Apply the power rule to each term: 144x gives 144, -48x^2 gives -96x, and 4x^3 gives 12x^2.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set derivative to zero.',
                    workingLatex: '12x^2 - 96x + 144 = 0 \\implies x^2 - 8x + 12 = 0',
                    explanation: 'For a stationary point set dV/dx = 0, then divide every term by 12 to simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise and choose valid root.',
                    workingLatex: '(x-2)(x-6) = 0 \\implies x = 2 \\text{ (since } x = 6 \\text{ gives } V = 0)',
                    explanation: 'Both x = 2 and x = 6 solve the equation, but x = 6 would leave no card to fold up, giving zero volume. So x = 2 is the valid maximum.'
                },
                {
                    stepNumber: 5,
                    description: 'Calculate the maximum volume.',
                    workingLatex: 'V = 2(12 - 4)^2 = 2 \\cdot 64 = 128 \\text{ cm}^3',
                    explanation: 'Substitute x = 2 back into the original volume formula to find the maximum volume.'
                }
            ],
            finalAnswer: '(a) \\( 144 - 96x + 12x^2 \\) \\newline (b) \\( x = 2 \\) cm; \\( V_{\\max} = 128 \\text{ cm}^3 \\)'
        }
    },
    {
        id: 'd5-039',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 39',
        difficulty: 'Foundation',
        questionText: 'A small business has profit \\( P = -2x^2 + 80x - 200 \\) pounds when \\( x \\) units are sold per day. Find the value of \\( x \\) that maximises profit and the maximum profit.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'profit', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the profit function.',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}x} = -4x + 80',
                    explanation: 'Apply the power rule to each term to find the rate of change of profit with respect to units sold.'
                },
                {
                    stepNumber: 2,
                    description: 'Set derivative equal to zero.',
                    workingLatex: '-4x + 80 = 0 \\implies x = 20',
                    explanation: 'At a maximum or minimum the derivative is zero. Solving gives x = 20 units.'
                },
                {
                    stepNumber: 3,
                    description: 'Confirm it is a maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2P}{\\mathrm{d}x^2} = -4 < 0',
                    explanation: 'The second derivative is negative, confirming this stationary point is a maximum.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the maximum profit.',
                    workingLatex: 'P = -2(400) + 80(20) - 200 = -800 + 1600 - 200 = 600',
                    explanation: 'Substitute x = 20 back into the original profit equation and evaluate to find the maximum profit is 600 pounds.'
                }
            ],
            finalAnswer: '\\( x = 20 \\); maximum profit \\( = \\pounds 600 \\)'
        }
    },
    {
        id: 'd5-040',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 40',
        difficulty: 'Foundation',
        questionText: 'A rectangle has perimeter 40 m. Find the dimensions that give the maximum area, and state the maximum area.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'rectangle', 'maximum area'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express y in terms of x.',
                    workingLatex: '2x + 2y = 40 \\implies y = 20 - x',
                    explanation: 'Use the perimeter constraint to eliminate one variable so the area can be written in terms of x alone.'
                },
                {
                    stepNumber: 2,
                    description: 'Write area as a function of x.',
                    workingLatex: 'A = x(20 - x) = 20x - x^2',
                    explanation: 'Substitute the expression for y into the area formula A = xy and expand.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate and set to zero.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 20 - 2x = 0 \\implies x = 10',
                    explanation: 'Apply the power rule, then set the derivative to zero and solve for the stationary point.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the maximum area.',
                    workingLatex: 'A = 10 \\cdot 10 = 100 \\text{ m}^2',
                    explanation: 'When x = 10, y = 20 - 10 = 10, so the rectangle is a square of side 10 m with area 100 square metres.'
                }
            ],
            finalAnswer: '\\( 10 \\text{ m} \\times 10 \\text{ m} \\); area \\( = 100 \\text{ m}^2 \\)'
        }
    },
    {
        id: 'd5-041',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 41',
        difficulty: 'Standard',
        questionText: 'A closed cylindrical can has volume \\( 16\\pi \\) cm\\(^3\\). Find the radius and height that minimise the total surface area, and state the minimum surface area.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'cylinder', 'surface area', 'minimum', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the volume constraint.',
                    workingLatex: '\\pi r^2 h = 16\\pi \\implies h = \\frac{16}{r^2}',
                    explanation: 'Rearrange the volume formula to express h in terms of r so the surface area involves only one variable.'
                },
                {
                    stepNumber: 2,
                    description: 'Write surface area in terms of r.',
                    workingLatex: 'A = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + \\frac{32\\pi}{r}',
                    explanation: 'Substitute the expression for h into the total surface area formula for a closed cylinder (two circles plus the curved surface).'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate A with respect to r.',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}r} = 4\\pi r - \\frac{32\\pi}{r^2}',
                    explanation: 'Use the power rule, noting that 32pi/r = 32pi r^{-1} differentiates to -32pi r^{-2}.'
                },
                {
                    stepNumber: 4,
                    description: 'Set derivative to zero and solve.',
                    workingLatex: '4\\pi r = \\frac{32\\pi}{r^2} \\implies r^3 = 8 \\implies r = 2',
                    explanation: 'Multiply both sides by r^2 and divide by 4pi to obtain r^3 = 8, giving r = 2 cm.'
                },
                {
                    stepNumber: 5,
                    description: 'Find height and surface area.',
                    workingLatex: 'h = \\frac{16}{4} = 4; \\quad A = 8\\pi + 16\\pi = 24\\pi \\text{ cm}^2',
                    explanation: 'Substitute r = 2 to find h = 4 cm, then compute A = 2pi(4) + 32pi/2 = 8pi + 16pi = 24pi.'
                },
                {
                    stepNumber: 6,
                    description: 'Confirm this is a minimum.',
                    workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}r^2} = 4\\pi + \\frac{64\\pi}{r^3} > 0 \\Rightarrow \\text{min} \\checkmark',
                    explanation: 'The second derivative is always positive for r > 0, confirming the stationary point at r = 2 is indeed a minimum.'
                }
            ],
            finalAnswer: '\\( r = 2 \\) cm, \\( h = 4 \\) cm, \\( A_{\\min} = 24\\pi \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-042',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 42',
        difficulty: 'Foundation',
        questionText: 'A population of insects is modelled by \\( P = 50t - t^2 \\) (in thousands) for \\( 0 \\le t \\le 50 \\) days. Find the day on which the population is greatest and the maximum population.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rates of change', 'maximum', 'population'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the population model.',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 50 - 2t',
                    explanation: 'Apply the power rule to each term to find the rate of change of population with respect to time.'
                },
                {
                    stepNumber: 2,
                    description: 'Set derivative equal to zero.',
                    workingLatex: '50 - 2t = 0 \\implies t = 25',
                    explanation: 'The population is greatest at a stationary point where dP/dt = 0. Solving gives t = 25 days.'
                },
                {
                    stepNumber: 3,
                    description: 'Confirm it is a maximum.',
                    workingLatex: '\\frac{\\mathrm{d}^2P}{\\mathrm{d}t^2} = -2 < 0',
                    explanation: 'The second derivative is negative, confirming the stationary point is a maximum.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the maximum population.',
                    workingLatex: 'P = 50(25) - 25^2 = 1250 - 625 = 625 \\text{ thousand}',
                    explanation: 'Substitute t = 25 back into the original model and evaluate to find the greatest population is 625 thousand insects.'
                }
            ],
            finalAnswer: 'Day \\( t = 25 \\); maximum \\( P = 625{,}000 \\) insects'
        }
    },
    {
        id: 'd5-043',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 43',
        difficulty: 'Standard',
        questionText: 'The cost (in pounds) of producing \\( x \\) units is \\( C(x) = x^2 + 4x + 100 \\). The average cost per unit is \\( \\bar{C}(x) = \\dfrac{C(x)}{x} \\).\n(a) Write \\( \\bar{C}(x) \\) explicitly.\n(b) Find the value of \\( x \\) that minimises \\( \\bar{C} \\) and the minimum average cost.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['average cost', 'optimisation', 'minimum'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Divide by \\( x \\).', workingLatex: '\\bar{C}(x) = x + 4 + \\frac{100}{x}', explanation: 'Divide each term of \\( C(x) = x^2 + 4x + 100 \\) by \\( x \\) to obtain the average cost per unit.' },
                { stepNumber: 2, description: '(b) Differentiate.', workingLatex: '\\frac{\\mathrm{d}\\bar{C}}{\\mathrm{d}x} = 1 - \\frac{100}{x^2}', explanation: 'Rewrite \\( \\frac{100}{x} \\) as \\( 100x^{-1} \\) and apply the power rule. The derivative of \\( x \\) is 1, the constant 4 vanishes, and \\( 100x^{-1} \\) gives \\( -100x^{-2} \\).' },
                { stepNumber: 3, description: 'Set to zero.', workingLatex: '1 = \\frac{100}{x^2} \\implies x^2 = 100 \\implies x = 10', explanation: 'Setting the derivative equal to zero finds the stationary point. We take the positive root since \\( x \\) represents a number of units produced.' },
                { stepNumber: 4, description: 'Minimum average cost.', workingLatex: '\\bar{C}(10) = 10 + 4 + 10 = \\pounds 24', explanation: 'Substitute \\( x = 10 \\) back into the average cost function. The minimum average cost is 24 pounds per unit.' }
            ],
            finalAnswer: '(a) \\( \\bar{C} = x + 4 + \\dfrac{100}{x} \\) \\newline (b) \\( x = 10 \\); minimum \\( = \\pounds 24 \\)'
        }
    },
    {
        id: 'd5-044',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 44',
        difficulty: 'Foundation',
        questionText: 'The cost of producing \\( x \\) items is \\( C(x) = 0.03x^3 - x^2 + 50x + 100 \\) pounds. The marginal cost is \\( C\'(x) \\). Find the marginal cost when \\( x = 10 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['marginal cost', 'differentiation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the cost function.',
                    workingLatex: 'C(x) = 0.03x^3 - x^2 + 50x + 100',
                    explanation: 'This is the given cost function. The marginal cost is its derivative.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: 'C\'(x) = 3(0.03)x^2 - 2x + 50 = 0.09x^2 - 2x + 50',
                    explanation: 'Apply the power rule to each term. The constant 100 differentiates to zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 10 \\).',
                    workingLatex: 'C\'(10) = 0.09(100) - 2(10) + 50',
                    explanation: 'Replace \\( x \\) with 10 in the marginal cost expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the expression.',
                    workingLatex: 'C\'(10) = 9 - 20 + 50 = 39',
                    explanation: 'The marginal cost when producing 10 items is 39 pounds per item.'
                }
            ],
            finalAnswer: 'Marginal cost \\( = \\pounds 39 \\) per item'
        }
    },
    {
        id: 'd5-045',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 45',
        difficulty: 'Foundation',
        questionText: 'Water flows into a tank so that the volume after \\( t \\) seconds is \\( V = 20t - \\dfrac{1}{2}t^2 \\) litres. Find the rate at which water is flowing in when \\( t = 4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rates of change', 'water flow'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the volume function.',
                    workingLatex: 'V = 20t - \\tfrac{1}{2}t^2',
                    explanation: 'The rate of flow is the derivative of volume with respect to time.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 20 - t',
                    explanation: 'The derivative of 20t is 20 and the derivative of half t squared is t.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( t = 4 \\).',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}t} = 20 - 4 = 16',
                    explanation: 'Replace t with 4 in the rate expression.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer with units.',
                    workingLatex: '\\text{Rate of flow} = 16 \\text{ litres/s}',
                    explanation: 'Water is flowing in at 16 litres per second when t equals 4.'
                }
            ],
            finalAnswer: '\\( 16 \\) litres per second'
        }
    },
    {
        id: 'd5-046',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 46',
        difficulty: 'Standard',
        questionText: 'A particle moves with displacement \\( s = 12t - t^3 \\) metres after \\( t \\) seconds, for \\( t \\ge 0 \\). Find the maximum displacement and the time at which it occurs.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'maximum', 'displacement'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Velocity.', workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 12 - 3t^2', explanation: 'Differentiate the displacement function to find velocity. The derivative of \\( 12t \\) is 12 and the derivative of \\( t^3 \\) is \\( 3t^2 \\).' },
                { stepNumber: 2, description: 'Set \\( v = 0 \\).', workingLatex: '12 - 3t^2 = 0 \\implies t^2 = 4 \\implies t = 2', explanation: 'Maximum displacement occurs when the velocity is zero. We take the positive root \\( t = 2 \\) since \\( t \\ge 0 \\).' },
                { stepNumber: 3, description: 'Maximum displacement.', workingLatex: 's = 12(2) - 8 = 16 \\text{ m}', explanation: 'Substitute \\( t = 2 \\) back into the displacement equation. This gives \\( s = 24 - 8 = 16 \\) metres.' },
                { stepNumber: 4, description: 'Confirm maximum.', workingLatex: 'a = -6t; \\, a(2) = -12 < 0 \\Rightarrow \\text{max} \\checkmark', explanation: 'The acceleration is the derivative of velocity, giving \\( a = -6t \\). At \\( t = 2 \\) the acceleration is negative, confirming the stationary point is a maximum.' }
            ],
            finalAnswer: '\\( s_{\\max} = 16 \\) m at \\( t = 2 \\) s'
        }
    },
    {
        id: 'd5-047',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 47',
        difficulty: 'Foundation',
        questionText: 'A firm\'s revenue from selling \\( x \\) items is \\( R(x) = 200x - 0.5x^2 \\) pounds. Find the marginal revenue when \\( x = 20 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['marginal revenue', 'differentiation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the revenue function.',
                    workingLatex: 'R(x) = 200x - 0.5x^2',
                    explanation: 'The marginal revenue is the derivative of the revenue function.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: 'R\'(x) = 200 - x',
                    explanation: 'The derivative of 200x is 200 and the derivative of 0.5x squared is x.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 20 \\).',
                    workingLatex: 'R\'(20) = 200 - 20 = 180',
                    explanation: 'Replace x with 20 to find the marginal revenue at that output level.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer with units.',
                    workingLatex: '\\text{Marginal revenue} = \\pounds 180',
                    explanation: 'Selling one more item beyond 20 adds approximately 180 pounds of revenue.'
                }
            ],
            finalAnswer: 'Marginal revenue \\( = \\pounds 180 \\)'
        }
    },
    {
        id: 'd5-048',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 48',
        difficulty: 'Standard',
        questionText: 'A stone is dropped from a cliff. Its height above the ground after \\( t \\) seconds is \\( h = 80 - 5t^2 \\) metres.\n(a) Find the time taken for the stone to reach the ground.\n(b) Find the speed of the stone when it hits the ground.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'free fall', 'speed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set height equal to zero.',
                    workingLatex: '80 - 5t^2 = 0',
                    explanation: 'The stone reaches the ground when h equals 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( t \\).',
                    workingLatex: '5t^2 = 80 \\implies t^2 = 16 \\implies t = 4 \\text{ s}',
                    explanation: 'Take the positive square root since time must be non-negative.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Differentiate to find velocity.',
                    workingLatex: 'v = \\frac{\\mathrm{d}h}{\\mathrm{d}t} = -10t',
                    explanation: 'The velocity is the rate of change of height with respect to time.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( t = 4 \\) and find speed.',
                    workingLatex: 'v(4) = -10(4) = -40 \\Rightarrow \\text{speed} = |{-40}| = 40 \\text{ ms}^{-1}',
                    explanation: 'The negative sign indicates downward motion. Speed is the magnitude of the velocity.'
                }
            ],
            finalAnswer: '(a) \\( t = 4 \\) s \\newline (b) \\( 40 \\text{ ms}^{-1} \\)'
        }
    },
    {
        id: 'd5-049',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 49',
        difficulty: 'Standard',
        questionText: 'An open cylindrical container (no lid) has volume \\( 27\\pi \\) cm\\(^3\\). The radius is \\( r \\) cm and the height is \\( h \\) cm. Find the radius and height that minimise the surface area.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'open cylinder', 'surface area', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Volume.', workingLatex: '\\pi r^2 h = 27\\pi \\implies h = \\frac{27}{r^2}', explanation: 'Use the given volume to express the height in terms of the radius, so the surface area can be written as a function of one variable.' },
                { stepNumber: 2, description: 'Surface area (base + curved).', workingLatex: 'A = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{54\\pi}{r}', explanation: 'The open cylinder has a circular base and a curved side but no lid. Substituting the expression for h eliminates h from the formula.' },
                { stepNumber: 3, description: 'Differentiate.', workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}r} = 2\\pi r - \\frac{54\\pi}{r^2}', explanation: 'Differentiate the surface area with respect to the radius using the power rule, treating the second term as a negative power of r.' },
                { stepNumber: 4, description: 'Set to zero.', workingLatex: '2\\pi r = \\frac{54\\pi}{r^2} \\implies r^3 = 27 \\implies r = 3', explanation: 'Setting the derivative equal to zero finds the stationary point. Solving the resulting equation gives the radius that minimises the surface area.' },
                { stepNumber: 5, description: 'Find \\( h \\) and \\( A \\).', workingLatex: 'h = 3; \\quad A = 9\\pi + 18\\pi = 27\\pi \\text{ cm}^2', explanation: 'Substitute the optimal radius back into the expressions for h and A to obtain the dimensions and the minimum surface area.' }
            ],
            finalAnswer: '\\( r = 3 \\) cm, \\( h = 3 \\) cm, \\( A_{\\min} = 27\\pi \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-050',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 50',
        difficulty: 'Standard',
        questionText: 'A farmer has 60 m of fencing and wants to enclose a rectangular area against a long straight wall, using the wall as one side. Find the dimensions and the maximum area.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'fencing', 'maximum area', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Let width be \\( w \\), length parallel to wall be \\( L \\).', workingLatex: '2w + L = 60 \\implies L = 60 - 2w', explanation: 'The wall provides one side, so only three sides need fencing. Express the length in terms of the width to reduce to one variable.' },
                { stepNumber: 2, description: 'Area.', workingLatex: 'A = wL = w(60 - 2w) = 60w - 2w^2', explanation: 'Write the area as a function of w alone by substituting the expression for L. This gives a quadratic in w.' },
                { stepNumber: 3, description: 'Differentiate.', workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}w} = 60 - 4w = 0 \\implies w = 15', explanation: 'Differentiate the area with respect to w and set the derivative equal to zero to find the critical point.' },
                { stepNumber: 4, description: 'Find \\( L \\) and \\( A \\).', workingLatex: 'L = 30; \\quad A = 15 \\cdot 30 = 450 \\text{ m}^2', explanation: 'Substitute the optimal width back into the constraint to find the length, then calculate the maximum area.' },
                { stepNumber: 5, description: 'Confirm maximum.', workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}w^2} = -4 < 0 \\Rightarrow \\text{max} \\checkmark', explanation: 'The second derivative is negative, confirming that the stationary point is a maximum rather than a minimum.' }
            ],
            finalAnswer: '\\( w = 15 \\) m, \\( L = 30 \\) m, \\( A_{\\max} = 450 \\text{ m}^2 \\)'
        }
    },
    {
        id: 'd5-051',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 51',
        difficulty: 'Standard',
        questionText: 'A piece of wire of length 40 cm is cut into two pieces and each piece is bent into a square. Find the lengths so that the total area enclosed is a minimum.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'minimum area', 'two squares'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Let the squares have sides \\( x \\) and \\( y \\).', workingLatex: '4x + 4y = 40 \\implies y = 10 - x', explanation: 'Each square has perimeter 4 times its side length. Since the total wire is 40 cm, we can express y in terms of x.' },
                { stepNumber: 2, description: 'Total area.', workingLatex: 'S = x^2 + (10 - x)^2 = 2x^2 - 20x + 100', explanation: 'The total enclosed area is the sum of the two squares. Substituting y = 10 - x gives S as a function of x alone.' },
                { stepNumber: 3, description: 'Differentiate.', workingLatex: '\\frac{\\mathrm{d}S}{\\mathrm{d}x} = 4x - 20 = 0 \\implies x = 5', explanation: 'Setting the derivative equal to zero finds the stationary point. Solving gives x = 5, which is the side length that minimises the total area.' },
                { stepNumber: 4, description: 'Both pieces equal.', workingLatex: 'y = 5; \\, S = 25 + 25 = 50 \\text{ cm}^2', explanation: 'Cut into two equal pieces of 20 cm.' }
            ],
            finalAnswer: 'Cut into two equal 20 cm pieces; minimum area \\( = 50 \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-052',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 52',
        difficulty: 'Foundation',
        questionText: 'The power output of an engine is modelled by \\( P = 120t - 3t^2 \\) watts, where \\( t \\) is in seconds. Find the time at which the power is greatest and the maximum power.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['maximum', 'power', 'rates of change'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the power function.',
                    workingLatex: 'P = 120t - 3t^2',
                    explanation: 'To find the maximum, differentiate and set the derivative equal to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate with respect to \\( t \\).',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}t} = 120 - 6t',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Set the derivative to zero.',
                    workingLatex: '120 - 6t = 0 \\implies 6t = 120 \\implies t = 20',
                    explanation: 'Solving gives the time at which the power is stationary.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the maximum power.',
                    workingLatex: 'P(20) = 120(20) - 3(20)^2 = 2400 - 1200 = 1200 \\text{ W}',
                    explanation: 'Substitute t equals 20 back into the power function to find the greatest power output.'
                }
            ],
            finalAnswer: '\\( t = 20 \\) s, \\( P_{\\max} = 1200 \\) W'
        }
    },
    {
        id: 'd5-053',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 53',
        difficulty: 'Foundation',
        questionText: 'A tank is being drained. The volume after \\( t \\) seconds is \\( V = 400 - 20t + \\dfrac{t^2}{4} \\) litres. Find the rate at which the volume is changing at \\( t = 10 \\) s, and interpret the sign.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['rates of change', 'draining'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the volume function.',
                    workingLatex: 'V = 400 - 20t + \\tfrac{t^2}{4}',
                    explanation: 'The rate of change of volume is found by differentiating V with respect to t.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}t} = -20 + \\frac{t}{2}',
                    explanation: 'The constant 400 vanishes, negative 20t gives negative 20, and t squared over 4 gives t over 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( t = 10 \\).',
                    workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}t}\\bigg|_{t=10} = -20 + \\frac{10}{2} = -20 + 5 = -15',
                    explanation: 'Replace t with 10 in the rate expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Interpret the sign of the result.',
                    workingLatex: '\\text{Rate} = -15 \\text{ L/s (negative} \\Rightarrow \\text{volume decreasing)}',
                    explanation: 'The negative sign means the volume is decreasing. The tank is draining at 15 litres per second.'
                }
            ],
            finalAnswer: '\\( -15 \\) L/s; the tank is draining at 15 litres per second'
        }
    },
    {
        id: 'd5-054',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 54',
        difficulty: 'Standard',
        questionText: 'A closed rectangular box has a square base of side \\( x \\) cm, height \\( h \\) cm and volume \\( 27 \\) cm\\(^3\\).\n(a) Show that the surface area is \\( S = 2x^2 + \\dfrac{108}{x} \\).\n(b) Find the value of \\( x \\) that minimises \\( S \\), and find the minimum surface area.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'closed box', 'surface area', 'show that', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Volume.', workingLatex: 'x^2 h = 27 \\implies h = \\frac{27}{x^2}', explanation: 'The volume of the box is base area times height. Rearranging for h eliminates it from the surface area formula.' },
                { stepNumber: 2, description: 'Surface area: 2 squares + 4 sides.', workingLatex: 'S = 2x^2 + 4xh = 2x^2 + \\frac{108}{x} \\, \\checkmark', explanation: 'The closed box has two square faces of area x squared and four rectangular faces each of area xh. Substituting h = 27/x squared gives S in terms of x only, as required.' },
                { stepNumber: 3, description: '(b) Differentiate.', workingLatex: '\\frac{\\mathrm{d}S}{\\mathrm{d}x} = 4x - \\frac{108}{x^2}', explanation: 'Rewrite 108/x as 108 times x to the power negative 1 before differentiating. The power rule gives the derivative of each term.' },
                { stepNumber: 4, description: 'Set to zero.', workingLatex: '4x = \\frac{108}{x^2} \\implies x^3 = 27 \\implies x = 3', explanation: 'Setting the derivative to zero and multiplying through by x squared gives a cubic equation. Taking the cube root yields x = 3.' },
                { stepNumber: 5, description: 'Minimum surface area.', workingLatex: 'S = 2(9) + \\frac{108}{3} = 18 + 36 = 54 \\text{ cm}^2', explanation: 'Substituting x = 3 back into the surface area formula gives the minimum value. This is a minimum because the second derivative is positive at x = 3.' }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( x = 3 \\) cm; \\( S_{\\min} = 54 \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-055',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 55',
        difficulty: 'Standard',
        questionText: 'A particle\'s displacement is \\( s = t^3 - 12t^2 + 36t \\) metres after \\( t \\) seconds. Find the times at which the particle is momentarily at rest and the displacement at each.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'at rest'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Velocity.', workingLatex: 'v = 3t^2 - 24t + 36', explanation: 'Differentiate the displacement function term by term using the power rule to obtain the velocity, since velocity is the rate of change of displacement.'},
                { stepNumber: 2, description: 'Set \\( v = 0 \\).', workingLatex: 't^2 - 8t + 12 = 0 \\implies (t-2)(t-6) = 0', explanation: 'The particle is at rest when the velocity is zero. Divide through by 3 and factorise the resulting quadratic.' },
                { stepNumber: 3, description: 'Times.', workingLatex: 't = 2 \\text{ s or } t = 6 \\text{ s}', explanation: 'Read off the solutions from each factor. The particle is momentarily at rest at \\( t = 2 \\) and \\( t = 6 \\).' },
                { stepNumber: 4, description: 'Displacements.', workingLatex: 's(2) = 8 - 48 + 72 = 32; \\, s(6) = 216 - 432 + 216 = 0', explanation: 'Substitute each time back into the original displacement equation to find the position of the particle at each instant of rest.' }
            ],
            finalAnswer: '\\( t = 2 \\): \\( s = 32 \\) m; \\, \\( t = 6 \\): \\( s = 0 \\) m'
        }
    },
    {
        id: 'd5-056',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 56',
        difficulty: 'Foundation',
        questionText: 'In a free-fall model, distance fallen is \\( s = 4.9 t^2 \\) metres after \\( t \\) seconds. Find the speed of the falling object after 5 seconds.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'free fall', 'speed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the distance function.',
                    workingLatex: 's = 4.9t^2',
                    explanation: 'Speed is the rate of change of distance, so we need to differentiate.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate to find speed.',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 2(4.9)t = 9.8t',
                    explanation: 'Apply the power rule: bring down the exponent and reduce it by one.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( t = 5 \\).',
                    workingLatex: 'v = 9.8 \\times 5 = 49',
                    explanation: 'Replace t with 5 in the velocity expression.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer with units.',
                    workingLatex: 'v = 49 \\text{ ms}^{-1}',
                    explanation: 'The object is falling at 49 metres per second after 5 seconds.'
                }
            ],
            finalAnswer: '\\( 49 \\text{ ms}^{-1} \\)'
        }
    },
    {
        id: 'd5-057',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 57',
        difficulty: 'Foundation',
        questionText: 'A car has displacement \\( s = t^3 - 3t^2 - 9t + 5 \\) metres after \\( t \\) seconds, for \\( t \\ge 0 \\). Find the time at which the car is momentarily at rest.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'at rest'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find velocity',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 6t - 9',
                    explanation: 'Velocity is the rate of change of displacement with respect to time. Differentiate each term of s using the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set velocity equal to zero',
                    workingLatex: '3t^2 - 6t - 9 = 0',
                    explanation: 'The car is momentarily at rest when its velocity is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Factor out common factor',
                    workingLatex: '3(t^2 - 2t - 3) = 0',
                    explanation: 'Divide through by 3 to simplify the quadratic before factorising.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise the quadratic',
                    workingLatex: '3(t - 3)(t + 1) = 0',
                    explanation: 'We need two numbers that multiply to give -3 and add to give -2. These are -3 and +1.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve and reject invalid root',
                    workingLatex: 't = 3 \\text{ or } t = -1 \\quad \\Rightarrow \\quad t = 3 \\text{ (since } t \\ge 0)',
                    explanation: 'Since time must be non-negative, we reject t = -1. The car is momentarily at rest at t = 3 seconds.'
                }
            ],
            finalAnswer: '\\( t = 3 \\) s'
        }
    },
    {
        id: 'd5-058',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 58',
        difficulty: 'Standard',
        questionText: 'A farmer has 200 m of fencing to build a rectangular field bordered on one side by a straight river (no fence on the river side). Find the maximum area she can enclose.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'fencing', 'maximum area', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the fencing constraint',
                    workingLatex: '2x + y = 200 \\implies y = 200 - 2x',
                    explanation: 'Let x be the width and y the length along the river. Only three sides need fencing: two widths and one length. Rearrange for y.'
                },
                {
                    stepNumber: 2,
                    description: 'Write area in one variable',
                    workingLatex: 'A = xy = x(200 - 2x) = 200x - 2x^2',
                    explanation: 'Substitute the expression for y into the area formula to write A as a function of x alone.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate and set to zero',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 200 - 4x = 0 \\implies x = 50',
                    explanation: 'To find the maximum area, differentiate A with respect to x and set the derivative equal to zero. Solving gives x = 50.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate maximum area',
                    workingLatex: 'y = 200 - 2(50) = 100; \\quad A = 50 \\times 100 = 5000 \\text{ m}^2',
                    explanation: 'Substitute x = 50 back to find y = 100, then compute the area. The negative coefficient of x squared confirms this is a maximum.'
                }
            ],
            finalAnswer: '\\( x = 50 \\) m, \\( y = 100 \\) m, \\( A_{\\max} = 5000 \\text{ m}^2 \\)'
        }
    },
    {
        id: 'd5-059',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 59',
        difficulty: 'Foundation',
        questionText: 'A company\'s profit (in pounds) on \\( x \\) units sold is \\( P(x) = 60x - x^2 - 200 \\). Find the number of units that maximises profit and the maximum profit.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['profit', 'maximum'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the profit function',
                    workingLatex: 'P\'(x) = 60 - 2x',
                    explanation: 'Differentiate each term of P(x) with respect to x using the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the derivative to zero',
                    workingLatex: '60 - 2x = 0',
                    explanation: 'At a maximum or minimum, the derivative equals zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for x',
                    workingLatex: '2x = 60 \\implies x = 30',
                    explanation: 'Rearrange to find the number of units that gives a stationary point.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute to find maximum profit',
                    workingLatex: 'P(30) = 60(30) - (30)^2 - 200 = 1800 - 900 - 200 = 700',
                    explanation: 'Substitute x = 30 back into the profit function. The negative coefficient of x squared confirms this is a maximum.'
                }
            ],
            finalAnswer: '\\( x = 30 \\); maximum profit \\( = \\pounds 700 \\)'
        }
    },
    {
        id: 'd5-060',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 60',
        difficulty: 'Foundation',
        questionText: 'A firm\'s profit is \\( P(x) = 20x - 0.1x^2 - 50 \\) pounds, where \\( x \\) is the number of items sold. Find the marginal profit when \\( x = 40 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['marginal profit', 'differentiation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify marginal profit as the derivative',
                    workingLatex: '\\text{Marginal profit} = P\'(x)',
                    explanation: 'Marginal profit is the rate of change of profit with respect to items sold, so we need to differentiate P(x).'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the profit function',
                    workingLatex: 'P\'(x) = 20 - 0.2x',
                    explanation: 'Differentiate each term: the derivative of 20x is 20, the derivative of -0.1x^2 is -0.2x, and the constant -50 vanishes.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute x = 40',
                    workingLatex: 'P\'(40) = 20 - 0.2(40)',
                    explanation: 'Replace x with 40 in the marginal profit expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the expression',
                    workingLatex: 'P\'(40) = 20 - 8 = 12',
                    explanation: 'The marginal profit is 12 pounds per item, meaning each additional item sold around x = 40 adds roughly 12 pounds to total profit.'
                }
            ],
            finalAnswer: 'Marginal profit \\( = \\pounds 12 \\) per item'
        }
    },
    {
        id: 'd5-061',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 61',
        difficulty: 'Standard',
        questionText: 'A particle\'s displacement is \\( s = t^3 - 6t^2 + 9t + 2 \\) metres after \\( t \\) seconds. Find the acceleration at each instant the particle is momentarily at rest.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'acceleration', 'at rest'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find velocity',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 12t + 9',
                    explanation: 'Differentiate the displacement function term by term using the power rule to obtain the velocity.'
                },
                {
                    stepNumber: 2,
                    description: 'Set velocity to zero and solve',
                    workingLatex: '3t^2 - 12t + 9 = 0 \\implies t^2 - 4t + 3 = 0 \\implies (t-1)(t-3) = 0',
                    explanation: 'The particle is at rest when v = 0. Divide by 3 then factorise the quadratic to find t = 1 and t = 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate velocity for acceleration',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t - 12',
                    explanation: 'Acceleration is the derivative of velocity with respect to time.'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate acceleration at rest times',
                    workingLatex: 'a(1) = 6(1) - 12 = -6 \\text{ ms}^{-2}; \\quad a(3) = 6(3) - 12 = 6 \\text{ ms}^{-2}',
                    explanation: 'Substitute each rest time into the acceleration expression. At t = 1 the particle is decelerating, and at t = 3 it is accelerating.'
                }
            ],
            finalAnswer: '\\( a = -6 \\text{ ms}^{-2} \\) at \\( t = 1 \\); \\( a = 6 \\text{ ms}^{-2} \\) at \\( t = 3 \\)'
        }
    },
    {
        id: 'd5-062',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 62',
        difficulty: 'Standard',
        questionText: 'An open cylindrical container (no lid) has volume \\( 8\\pi \\) cm\\(^3\\). Find the radius and height that minimise the surface area, and the minimum surface area.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'open cylinder', 'surface area', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express h in terms of r',
                    workingLatex: '\\pi r^2 h = 8\\pi \\implies h = \\frac{8}{r^2}',
                    explanation: 'Use the volume formula for a cylinder and divide both sides by pi r squared to isolate h.'
                },
                {
                    stepNumber: 2,
                    description: 'Write surface area in terms of r',
                    workingLatex: 'A = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{16\\pi}{r}',
                    explanation: 'An open cylinder has one circular base and one curved side. Substitute h = 8/r squared into the surface area formula.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the surface area',
                    workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}r} = 2\\pi r - \\frac{16\\pi}{r^2}',
                    explanation: 'Differentiate each term with respect to r. The second term uses the rule for differentiating r to the power of negative one.'
                },
                {
                    stepNumber: 4,
                    description: 'Set derivative to zero and solve',
                    workingLatex: '2\\pi r - \\frac{16\\pi}{r^2} = 0 \\implies 2\\pi r^3 = 16\\pi \\implies r^3 = 8 \\implies r = 2',
                    explanation: 'Multiply through by r squared, cancel pi, then take the cube root to find the optimal radius.'
                },
                {
                    stepNumber: 5,
                    description: 'Find height and minimum area',
                    workingLatex: 'h = \\frac{8}{4} = 2; \\quad A = \\pi(4) + \\frac{16\\pi}{2} = 4\\pi + 8\\pi = 12\\pi \\text{ cm}^2',
                    explanation: 'Substitute r = 2 back to find h = 2, then calculate the total surface area.'
                }
            ],
            finalAnswer: '\\( r = 2 \\) cm, \\( h = 2 \\) cm, \\( A_{\\min} = 12\\pi \\text{ cm}^2 \\)'
        }
    },
    {
        id: 'd5-063',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 63',
        difficulty: 'Foundation',
        questionText: 'The temperature inside an oven \\( t \\) minutes after switching on is modelled by \\( T = 20 + 30t - t^2 \\) °C, for \\( 0 \\le t \\le 30 \\). Find the maximum temperature reached and the time at which it occurs.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['maximum', 'temperature', 'modelling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate the temperature model',
                    workingLatex: '\\frac{\\mathrm{d}T}{\\mathrm{d}t} = 30 - 2t',
                    explanation: 'Differentiate each term of T with respect to t using the power rule. The constant 20 disappears.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the derivative to zero',
                    workingLatex: '30 - 2t = 0',
                    explanation: 'At a maximum, the rate of change of temperature is zero.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for t',
                    workingLatex: '2t = 30 \\implies t = 15',
                    explanation: 'Rearrange to find the time at which the maximum temperature occurs.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute to find temperature',
                    workingLatex: 'T = 20 + 30(15) - (15)^2 = 20 + 450 - 225 = 245',
                    explanation: 'Substitute t = 15 into the original expression for T. The negative coefficient of t squared confirms this is a maximum.'
                }
            ],
            finalAnswer: '\\( T_{\\max} = 245 \\)°C at \\( t = 15 \\) min'
        }
    },
    {
        id: 'd5-064',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 64',
        difficulty: 'Standard',
        questionText: 'A ball is thrown upwards. Its height (in metres) above the ground after \\( t \\) seconds is \\( h = 2 + 10t - 5t^2 \\).\n(a) Find the maximum height reached.\n(b) Find the time at which the ball hits the ground.\n(c) Find the speed at which the ball hits the ground.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['kinematics', 'projectile', 'maximum height', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find when velocity is zero',
                    workingLatex: 'v = \\frac{\\mathrm{d}h}{\\mathrm{d}t} = 10 - 10t = 0 \\implies t = 1',
                    explanation: 'Differentiate h to get velocity. The ball reaches its maximum height when the velocity is zero, giving t = 1.'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the maximum height',
                    workingLatex: 'h(1) = 2 + 10(1) - 5(1)^2 = 2 + 10 - 5 = 7 \\text{ m}',
                    explanation: 'Substitute t = 1 into the height equation to find the maximum height reached.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set height equal to zero',
                    workingLatex: '2 + 10t - 5t^2 = 0 \\implies 5t^2 - 10t - 2 = 0',
                    explanation: 'The ball hits the ground when h = 0. Rearrange into standard quadratic form with positive leading coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Apply the quadratic formula',
                    workingLatex: 't = \\frac{10 \\pm \\sqrt{100 + 40}}{10} = \\frac{10 + \\sqrt{140}}{10} \\approx 2.183 \\text{ s}',
                    explanation: 'Use the quadratic formula with a = 5, b = -10, c = -2. Take the positive root since time must be positive.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Find speed at impact',
                    workingLatex: 'v(2.183) = 10 - 10(2.183) = -11.83; \\quad |v| \\approx 11.8 \\text{ ms}^{-1}',
                    explanation: 'Substitute the landing time into the velocity expression. The negative sign indicates downward motion; speed is the magnitude of velocity.'
                }
            ],
            finalAnswer: '(a) \\( 7 \\) m \\newline (b) \\( t \\approx 2.18 \\) s \\newline (c) \\( \\approx 11.8 \\text{ ms}^{-1} \\)'
        }
    },
    {
        id: 'd5-065',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 65',
        difficulty: 'Standard',
        questionText: 'A particle has displacement \\( s = t^3 - 3t \\) metres after \\( t \\) seconds. Find the minimum velocity for \\( t \\ge 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'minimum velocity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find velocity',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 3t^2 - 3',
                    explanation: 'Differentiate the displacement function with respect to t to obtain the velocity.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate velocity to find acceleration',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 6t',
                    explanation: 'To find the minimum of v, we need its derivative, which is the acceleration.'
                },
                {
                    stepNumber: 3,
                    description: 'Set acceleration to zero',
                    workingLatex: '6t = 0 \\implies t = 0',
                    explanation: 'A stationary point of v occurs where its derivative is zero. The only solution is t = 0.'
                },
                {
                    stepNumber: 4,
                    description: 'Confirm v is increasing for t > 0',
                    workingLatex: 'a = 6t \\ge 0 \\text{ for all } t \\ge 0',
                    explanation: 'Since the acceleration is non-negative for t at least 0, the velocity is increasing throughout the domain. So v is minimised at the boundary t = 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Calculate minimum velocity',
                    workingLatex: 'v(0) = 3(0)^2 - 3 = -3 \\text{ ms}^{-1}',
                    explanation: 'Substitute t = 0 into the velocity expression to find the minimum velocity.'
                }
            ],
            finalAnswer: '\\( v_{\\min} = -3 \\text{ ms}^{-1} \\) at \\( t = 0 \\)'
        }
    },
    {
        id: 'd5-066',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 66',
        difficulty: 'Standard',
        questionText: 'A manufacturer\'s total cost (in pounds) of producing \\( N \\) items per day is \\( C = 2N^2 + 10N + 800 \\). The average cost per item is \\( \\bar{C} = \\dfrac{C}{N} \\). Find the value of \\( N \\) that minimises the average cost and the minimum average cost.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['average cost', 'optimisation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the average cost function',
                    workingLatex: '\\bar{C} = \\frac{C}{N} = \\frac{2N^2 + 10N + 800}{N} = 2N + 10 + \\frac{800}{N}',
                    explanation: 'Divide the total cost by N to get the average cost per item. Simplify by dividing each term separately.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate the average cost',
                    workingLatex: '\\frac{\\mathrm{d}\\bar{C}}{\\mathrm{d}N} = 2 - \\frac{800}{N^2}',
                    explanation: 'Differentiate each term with respect to N. The term 800/N differentiates to -800/N squared.'
                },
                {
                    stepNumber: 3,
                    description: 'Set derivative to zero and solve',
                    workingLatex: '2 - \\frac{800}{N^2} = 0 \\implies N^2 = 400 \\implies N = 20',
                    explanation: 'Rearrange and solve for N. Take the positive root since N represents a quantity of items.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate minimum average cost',
                    workingLatex: '\\bar{C}(20) = 2(20) + 10 + \\frac{800}{20} = 40 + 10 + 40 = \\pounds 90',
                    explanation: 'Substitute N = 20 into the average cost function. The second derivative is positive, confirming this is a minimum.'
                }
            ],
            finalAnswer: '\\( N = 20 \\); minimum average cost \\( = \\pounds 90 \\)'
        }
    },
    {
        id: 'd5-067',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 67',
        difficulty: 'Standard',
        questionText: 'A rectangular postcard has area 100 cm\\(^2\\). Find the dimensions that minimise the perimeter and state the minimum perimeter.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['optimisation', 'minimum perimeter', 'rectangle'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Express y using the area constraint',
                    workingLatex: 'xy = 100 \\implies y = \\frac{100}{x}',
                    explanation: 'The area is fixed at 100 cm squared. Rearrange to write y in terms of x.'
                },
                {
                    stepNumber: 2,
                    description: 'Write perimeter in one variable',
                    workingLatex: 'P = 2x + 2y = 2x + \\frac{200}{x}',
                    explanation: 'Substitute the expression for y into the perimeter formula so P depends only on x.'
                },
                {
                    stepNumber: 3,
                    description: 'Differentiate the perimeter',
                    workingLatex: '\\frac{\\mathrm{d}P}{\\mathrm{d}x} = 2 - \\frac{200}{x^2}',
                    explanation: 'Differentiate each term with respect to x. The term 200/x differentiates to -200/x squared.'
                },
                {
                    stepNumber: 4,
                    description: 'Set derivative to zero and solve',
                    workingLatex: '2 = \\frac{200}{x^2} \\implies x^2 = 100 \\implies x = 10',
                    explanation: 'Rearrange and solve for x. Take the positive root since x is a length.'
                },
                {
                    stepNumber: 5,
                    description: 'Find y and minimum perimeter',
                    workingLatex: 'y = \\frac{100}{10} = 10; \\quad P = 2(10) + 2(10) = 40 \\text{ cm}',
                    explanation: 'Substitute x = 10 back to find y = 10. The optimal rectangle is a square, giving the minimum perimeter of 40 cm.'
                }
            ],
            finalAnswer: '\\( 10 \\times 10 \\) cm; minimum perimeter \\( = 40 \\) cm'
        }
    },
    {
        id: 'd5-068',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 68',
        difficulty: 'Foundation',
        questionText: 'A ball rolls down a slope. Its distance travelled is \\( s = 2t^2 + 3t \\) metres after \\( t \\) seconds.\n(a) Find the velocity after \\( t \\) seconds.\n(b) Find the velocity at \\( t = 3 \\).\n(c) Find the acceleration.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'velocity', 'acceleration'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate to find velocity',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 4t + 3',
                    explanation: 'Velocity is the derivative of displacement with respect to time. Differentiate each term using the power rule.'
                },
                {
                    stepNumber: 2,
                    description: '(b) Substitute t = 3 into velocity',
                    workingLatex: 'v(3) = 4(3) + 3 = 12 + 3',
                    explanation: 'Replace t with 3 in the velocity expression to find the velocity at that instant.'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the velocity at t = 3',
                    workingLatex: 'v(3) = 15 \\text{ ms}^{-1}',
                    explanation: 'The ball is travelling at 15 metres per second after 3 seconds.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Differentiate velocity for acceleration',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 4 \\text{ ms}^{-2}',
                    explanation: 'Acceleration is the derivative of velocity. Since v is linear in t, the acceleration is a constant 4 metres per second squared.'
                }
            ],
            finalAnswer: '(a) \\( v = 4t + 3 \\) \\newline (b) \\( 15 \\text{ ms}^{-1} \\) \\newline (c) \\( 4 \\text{ ms}^{-2} \\)'
        }
    },
    {
        id: 'd5-069',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 69',
        difficulty: 'Standard',
        questionText: 'A particle moves with displacement \\( s = 2t^2 - \\dfrac{t^3}{3} \\) metres for \\( t \\ge 0 \\). Find the maximum velocity.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['kinematics', 'maximum velocity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate to find velocity',
                    workingLatex: 'v = \\frac{\\mathrm{d}s}{\\mathrm{d}t} = 4t - t^2',
                    explanation: 'Differentiate the displacement function term by term using the power rule to find velocity.'
                },
                {
                    stepNumber: 2,
                    description: 'Set acceleration to zero for max v',
                    workingLatex: 'a = \\frac{\\mathrm{d}v}{\\mathrm{d}t} = 4 - 2t = 0 \\implies t = 2',
                    explanation: 'To find the maximum velocity, differentiate v to get acceleration and set it equal to zero. Solving gives t = 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Confirm this is a maximum',
                    workingLatex: '\\frac{\\mathrm{d}a}{\\mathrm{d}t} = -2 < 0 \\Rightarrow v \\text{ is max} \\checkmark',
                    explanation: 'The second derivative of v is negative, confirming that v has a maximum at t = 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate the maximum velocity',
                    workingLatex: 'v(2) = 4(2) - (2)^2 = 8 - 4 = 4 \\text{ ms}^{-1}',
                    explanation: 'Substitute t = 2 into the velocity expression to find the maximum velocity of 4 metres per second.'
                }
            ],
            finalAnswer: '\\( v_{\\max} = 4 \\text{ ms}^{-1} \\) at \\( t = 2 \\) s'
        }
    },
    {
        id: 'd5-070',
        topicRef: 'd5',
        topicTitle: 'Real-Life Problems 70',
        difficulty: 'Standard',
        questionText: 'An open-topped box has a rectangular base whose length is twice its width \\( w \\) cm, and height \\( h \\) cm. The volume is \\( 36 \\) cm\\(^3\\).\n(a) Show that the surface area is \\( S = 2w^2 + \\dfrac{108}{w} \\).\n(b) Find the value of \\( w \\) that minimises \\( S \\), and find the minimum surface area.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['optimisation', 'open box', 'surface area', 'show that', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Express h in terms of w',
                    workingLatex: '2w \\cdot w \\cdot h = 36 \\implies 2w^2 h = 36 \\implies h = \\frac{18}{w^2}',
                    explanation: 'The base has length 2w and width w. Use the volume formula and rearrange to isolate h.'
                },
                {
                    stepNumber: 2,
                    description: 'Write surface area expression',
                    workingLatex: 'S = 2w^2 + 2(2w)h + 2(w)h = 2w^2 + 6wh',
                    explanation: 'The open box has one base of area 2w squared, two sides of area 2wh each, and two sides of area wh each.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute h to complete the proof',
                    workingLatex: 'S = 2w^2 + 6w \\cdot \\frac{18}{w^2} = 2w^2 + \\frac{108}{w} \\, \\checkmark',
                    explanation: 'Replace h with 18 over w squared and simplify. This confirms the given result.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Differentiate the surface area',
                    workingLatex: '\\frac{\\mathrm{d}S}{\\mathrm{d}w} = 4w - \\frac{108}{w^2}',
                    explanation: 'Differentiate each term. The second term is 108 times w to the power -1, which differentiates to -108 over w squared.'
                },
                {
                    stepNumber: 5,
                    description: 'Set derivative to zero and solve',
                    workingLatex: '4w - \\frac{108}{w^2} = 0 \\implies 4w^3 = 108 \\implies w^3 = 27 \\implies w = 3',
                    explanation: 'Multiply through by w squared, then divide by 4 and take the cube root to find w = 3.'
                },
                {
                    stepNumber: 6,
                    description: 'Calculate minimum surface area',
                    workingLatex: 'S = 2(3)^2 + \\frac{108}{3} = 18 + 36 = 54 \\text{ cm}^2',
                    explanation: 'Substitute w = 3 into the surface area formula to find the minimum surface area.'
                },
                {
                    stepNumber: 7,
                    description: 'Verify this is a minimum',
                    workingLatex: '\\frac{\\mathrm{d}^2S}{\\mathrm{d}w^2} = 4 + \\frac{216}{w^3} > 0 \\Rightarrow \\text{min} \\checkmark',
                    explanation: 'The second derivative is positive for all positive w, confirming that the stationary point at w = 3 is indeed a minimum.'
                }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( w = 3 \\) cm; \\( S_{\\min} = 54 \\text{ cm}^2 \\)'
        }
    }
];