import { Question } from "@/lib/types";

/**
 * Topic: Intersection of Graphs
 * Ref:   a6
 *
 * Add your questions to the array below.
 * ID convention: "a6-001", "a6-002", etc.
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
        id: 'a5-001',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 01',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{12} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 12.',
                    workingLatex: '\\sqrt{12} = \\sqrt{4 \\times 3}',
                    explanation: '4 is the largest square number that divides into 12.',
                },
                {
                    stepNumber: 2,
                    description: 'Split using the rule \\( \\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b} \\) and simplify.',
                    workingLatex: '\\sqrt{4} \\times \\sqrt{3} = 2\\sqrt{3}',
                    explanation: '\\( \\sqrt{4} = 2 \\), so the surd simplifies to \\( 2\\sqrt{3} \\).',
                }
            ],
            finalAnswer: '\\(2\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-002',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 02',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{18} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 18.',
                    workingLatex: '\\sqrt{18} = \\sqrt{9 \\times 2}',
                    explanation: '9 is the largest square number that divides into 18.',
                },
                {
                    stepNumber: 2,
                    description: 'Split and simplify.',
                    workingLatex: '\\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}',
                    explanation: '\\( \\sqrt{9} = 3 \\).',
                }
            ],
            finalAnswer: '\\(3\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-003',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 03',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{45} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 45.',
                    workingLatex: '\\sqrt{45} = \\sqrt{9 \\times 5}',
                    explanation: '9 is the largest square factor of 45.',
                },
                {
                    stepNumber: 2,
                    description: 'Split and simplify.',
                    workingLatex: '\\sqrt{9} \\times \\sqrt{5} = 3\\sqrt{5}',
                    explanation: '\\( \\sqrt{9} = 3 \\).',
                }
            ],
            finalAnswer: '\\(3\\sqrt{5}\\)',
        },
    },
    {
        id: 'a5-004',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 04',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{75} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 75.',
                    workingLatex: '\\sqrt{75} = \\sqrt{25 \\times 3}',
                    explanation: '25 is the largest square factor of 75.',
                },
                {
                    stepNumber: 2,
                    description: 'Split and simplify.',
                    workingLatex: '\\sqrt{25} \\times \\sqrt{3} = 5\\sqrt{3}',
                    explanation: '\\( \\sqrt{25} = 5 \\).',
                }
            ],
            finalAnswer: '\\(5\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-005',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 05',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{98} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 98.',
                    workingLatex: '\\sqrt{98} = \\sqrt{49 \\times 2}',
                    explanation: '49 is the largest square factor of 98.',
                },
                {
                    stepNumber: 2,
                    description: 'Split and simplify.',
                    workingLatex: '\\sqrt{49} \\times \\sqrt{2} = 7\\sqrt{2}',
                    explanation: '\\( \\sqrt{49} = 7 \\).',
                }
            ],
            finalAnswer: '\\(7\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-006',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 06',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{\\frac{7}{4}} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the rule \\( \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\).',
                    workingLatex: '\\frac{\\sqrt{7}}{\\sqrt{4}}',
                    explanation: 'Split the surd across the numerator and denominator.',
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the denominator.',
                    workingLatex: '\\frac{\\sqrt{7}}{2}',
                    explanation: '\\( \\sqrt{4} = 2 \\). The numerator \\( \\sqrt{7} \\) cannot be simplified further.',
                }
            ],
            finalAnswer: '\\(\\frac{\\sqrt{7}}{2}\\)',
        },
    },
    {
        id: 'a5-007',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 07',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{\\frac{9}{25}} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the rule \\( \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\).',
                    workingLatex: '\\frac{\\sqrt{9}}{\\sqrt{25}}',
                    explanation: 'Split the surd across the fraction.',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate both square roots.',
                    workingLatex: '\\frac{3}{5}',
                    explanation: '\\( \\sqrt{9} = 3 \\) and \\( \\sqrt{25} = 5 \\). Both are perfect squares, so the answer is rational.',
                }
            ],
            finalAnswer: '\\(\\frac{3}{5}\\)',
        },
    },
    {
        id: 'a5-008',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 08',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{\\frac{11}{16}} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'fractions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the surd across the fraction.',
                    workingLatex: '\\frac{\\sqrt{11}}{\\sqrt{16}}',
                    explanation: '\\( \\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the denominator.',
                    workingLatex: '\\frac{\\sqrt{11}}{4}',
                    explanation: '\\( \\sqrt{16} = 4 \\). The numerator stays as \\( \\sqrt{11} \\).',
                }
            ],
            finalAnswer: '\\(\\frac{\\sqrt{11}}{4}\\)',
        },
    },
    {
        id: 'a5-009',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 09',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( 3\\sqrt{2} \\times 5\\sqrt{2} \\). Give your answer as a whole number.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the whole-number parts together and the surd parts together.',
                    workingLatex: '(3 \\times 5) \\times (\\sqrt{2} \\times \\sqrt{2}) = 15 \\times \\sqrt{4}',
                    explanation: 'Use the rule \\( \\sqrt{a} \\times \\sqrt{a} = a \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '15 \\times 2 = 30',
                    explanation: '\\( \\sqrt{2} \\times \\sqrt{2} = 2 \\), so the surds disappear entirely.',
                }
            ],
            finalAnswer: '\\(30\\)',
        },
    },
    {
        id: 'a5-010',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 10',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( \\sqrt{6} \\times \\sqrt{6} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the key rule \\( (\\sqrt{a})^2 = a \\).',
                    workingLatex: '\\sqrt{6} \\times \\sqrt{6} = 6',
                    explanation: 'Squaring a surd removes the root sign. This follows directly from the definition of a square root.',
                }
            ],
            finalAnswer: '\\(6\\)',
        },
    },
    {
        id: 'a5-011',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 11',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( \\sqrt{3} \\times 4\\sqrt{3} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the surd parts and the number parts.',
                    workingLatex: '1 \\times 4 \\times (\\sqrt{3} \\times \\sqrt{3}) = 4 \\times 3 = 12',
                    explanation: '\\( \\sqrt{3} \\times \\sqrt{3} = 3 \\), then multiply by 4.',
                }
            ],
            finalAnswer: '\\(12\\)',
        },
    },
    {
        id: 'a5-012',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 12',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( 2\\sqrt{3} \\times 4\\sqrt{7} \\). Give your answer as a surd.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the whole-number parts together and the surd parts together.',
                    workingLatex: '(2 \\times 4) \\times (\\sqrt{3} \\times \\sqrt{7})',
                    explanation: 'Deal with the numbers and the surds separately.',
                },
                {
                    stepNumber: 2,
                    description: 'Simplify using \\( \\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab} \\).',
                    workingLatex: '8\\sqrt{21}',
                    explanation: '\\( 2 \\times 4 = 8 \\) and \\( \\sqrt{3} \\times \\sqrt{7} = \\sqrt{21} \\). Since 21 has no square factors, this is fully simplified.',
                }
            ],
            finalAnswer: '\\(8\\sqrt{21}\\)',
        },
    },
    {
        id: 'a5-013',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 13',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( (\\sqrt{5})^2 \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'squaring', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Squaring a square root cancels out the root.',
                    workingLatex: '(\\sqrt{5})^2 = 5',
                    explanation: 'By definition, \\( (\\sqrt{a})^2 = a \\). Squaring undoes the square root.',
                }
            ],
            finalAnswer: '\\(5\\)',
        },
    },
    {
        id: 'a5-014',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 14',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( (3\\sqrt{7})^2 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'squaring', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square both the number part and the surd part.',
                    workingLatex: '3^2 \\times (\\sqrt{7})^2 = 9 \\times 7',
                    explanation: '\\( (a\\sqrt{b})^2 = a^2 \\times b \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '63',
                    explanation: '\\( 9 \\times 7 = 63 \\).',
                }
            ],
            finalAnswer: '\\(63\\)',
        },
    },
    {
        id: 'a5-015',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 15',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( (2\\sqrt{13})^2 \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'squaring', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Square the coefficient and the surd separately.',
                    workingLatex: '2^2 \\times (\\sqrt{13})^2 = 4 \\times 13',
                    explanation: 'The square of \\( 2 \\) is 4, and squaring \\( \\sqrt{13} \\) gives 13.',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '52',
                    explanation: '\\( 4 \\times 13 = 52 \\).',
                }
            ],
            finalAnswer: '\\(52\\)',
        },
    },
    {
        id: 'a5-016',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 16',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( 3\\sqrt{6} \\times 2\\sqrt{6} \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the coefficients and the surds separately.',
                    workingLatex: '(3 \\times 2) \\times (\\sqrt{6} \\times \\sqrt{6}) = 6 \\times 6',
                    explanation: '\\( \\sqrt{6} \\times \\sqrt{6} = 6 \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '36',
                    explanation: '\\( 6 \\times 6 = 36 \\).',
                }
            ],
            finalAnswer: '\\(36\\)',
        },
    },
    {
        id: 'a5-017',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 17',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( 2\\sqrt{3} \\times 5\\sqrt{27} \\). Give your answer as a whole number.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'simplifying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the coefficients and the surds separately.',
                    workingLatex: '(2 \\times 5) \\times (\\sqrt{3} \\times \\sqrt{27}) = 10 \\times \\sqrt{81}',
                    explanation: '\\( \\sqrt{3} \\times \\sqrt{27} = \\sqrt{3 \\times 27} = \\sqrt{81} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '10 \\times 9 = 90',
                    explanation: '\\( \\sqrt{81} = 9 \\).',
                }
            ],
            finalAnswer: '\\(90\\)',
        },
    },
    {
        id: 'a5-018',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 18',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( 3\\sqrt{5} \\times 2\\sqrt{45} \\). Give your answer as a whole number.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'simplifying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the coefficients and the surds separately.',
                    workingLatex: '(3 \\times 2) \\times (\\sqrt{5} \\times \\sqrt{45}) = 6 \\times \\sqrt{225}',
                    explanation: '\\( \\sqrt{5} \\times \\sqrt{45} = \\sqrt{5 \\times 45} = \\sqrt{225} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '6 \\times 15 = 90',
                    explanation: '\\( \\sqrt{225} = 15 \\).',
                }
            ],
            finalAnswer: '\\(90\\)',
        },
    },
    {
        id: 'a5-019',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 19',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( \\frac{\\sqrt{10}}{6} \\times \\frac{12}{\\sqrt{5}} \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'fractions', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the fractions together.',
                    workingLatex: '\\frac{12\\sqrt{10}}{6\\sqrt{5}}',
                    explanation: 'Multiply numerators and denominators: \\( \\frac{\\sqrt{10} \\times 12}{6 \\times \\sqrt{5}} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the number part and the surd part separately.',
                    workingLatex: '\\frac{12}{6} \\times \\frac{\\sqrt{10}}{\\sqrt{5}} = 2 \\times \\sqrt{\\frac{10}{5}} = 2\\sqrt{2}',
                    explanation: '\\( \\frac{12}{6} = 2 \\) and \\( \\frac{\\sqrt{10}}{\\sqrt{5}} = \\sqrt{2} \\).',
                }
            ],
            finalAnswer: '\\(2\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-020',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 20',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( \\frac{\\sqrt{12}}{3} \\times \\frac{2}{\\sqrt{27}} \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'fractions', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the fractions together.',
                    workingLatex: '\\frac{2\\sqrt{12}}{3\\sqrt{27}}',
                    explanation: 'Multiply the numerators and the denominators.',
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the surd part.',
                    workingLatex: '\\frac{2}{3} \\times \\sqrt{\\frac{12}{27}} = \\frac{2}{3} \\times \\sqrt{\\frac{4}{9}} = \\frac{2}{3} \\times \\frac{2}{3}',
                    explanation: '\\( \\frac{12}{27} = \\frac{4}{9} \\), and \\( \\sqrt{\\frac{4}{9}} = \\frac{2}{3} \\).',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: '\\frac{4}{9}',
                    explanation: '\\( \\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9} \\).',
                }
            ],
            finalAnswer: '\\(\\frac{4}{9}\\)',
        },
    },
    {
        id: 'a5-021',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 21',
        difficulty: 'Foundation',
        questionText: 'Express \\( \\sqrt{48} + \\sqrt{27} \\) in the form \\( k\\sqrt{3} \\), where \\( k \\) is an integer.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'adding', 'form k root x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify each surd by finding the largest square factor.',
                    workingLatex: '\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3} \\quad \\text{and} \\quad \\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}',
                    explanation: '16 is the largest square factor of 48, and 9 is the largest square factor of 27.',
                },
                {
                    stepNumber: 2,
                    description: 'Add the like surds.',
                    workingLatex: '4\\sqrt{3} + 3\\sqrt{3} = 7\\sqrt{3}',
                    explanation: 'These are like surds (both \\( \\sqrt{3} \\)), so add the coefficients: \\( 4 + 3 = 7 \\).',
                }
            ],
            finalAnswer: '\\(7\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-022',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 22',
        difficulty: 'Foundation',
        questionText: 'Express \\( \\sqrt{50} - \\sqrt{8} \\) in the form \\( k\\sqrt{2} \\), where \\( k \\) is an integer.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'subtracting', 'form k root x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify each surd.',
                    workingLatex: '\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2} \\quad \\text{and} \\quad \\sqrt{8} = \\sqrt{4 \\times 2} = 2\\sqrt{2}',
                    explanation: '25 is the largest square factor of 50, and 4 is the largest square factor of 8.',
                },
                {
                    stepNumber: 2,
                    description: 'Subtract the like surds.',
                    workingLatex: '5\\sqrt{2} - 2\\sqrt{2} = 3\\sqrt{2}',
                    explanation: 'Subtract the coefficients: \\( 5 - 2 = 3 \\).',
                }
            ],
            finalAnswer: '\\(3\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-023',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 23',
        difficulty: 'Foundation',
        questionText: 'Express \\( 3\\sqrt{12} - 2\\sqrt{75} \\) in the form \\( k\\sqrt{3} \\), where \\( k \\) is an integer.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'subtracting', 'form k root x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify each surd.',
                    workingLatex: '3\\sqrt{12} = 3 \\times 2\\sqrt{3} = 6\\sqrt{3} \\quad \\text{and} \\quad 2\\sqrt{75} = 2 \\times 5\\sqrt{3} = 10\\sqrt{3}',
                    explanation: '\\( \\sqrt{12} = 2\\sqrt{3} \\) and \\( \\sqrt{75} = 5\\sqrt{3} \\). Then multiply by the coefficients outside.',
                },
                {
                    stepNumber: 2,
                    description: 'Subtract the like surds.',
                    workingLatex: '6\\sqrt{3} - 10\\sqrt{3} = -4\\sqrt{3}',
                    explanation: '\\( 6 - 10 = -4 \\). A negative answer is perfectly valid here.',
                }
            ],
            finalAnswer: '\\(-4\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-024',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 24',
        difficulty: 'Foundation',
        questionText: 'Express \\( 2\\sqrt{18} + 3\\sqrt{50} \\) in the form \\( k\\sqrt{2} \\), where \\( k \\) is an integer.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'adding', 'form k root x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify each surd.',
                    workingLatex: '2\\sqrt{18} = 2 \\times 3\\sqrt{2} = 6\\sqrt{2} \\quad \\text{and} \\quad 3\\sqrt{50} = 3 \\times 5\\sqrt{2} = 15\\sqrt{2}',
                    explanation: '\\( \\sqrt{18} = 3\\sqrt{2} \\) and \\( \\sqrt{50} = 5\\sqrt{2} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Add the like surds.',
                    workingLatex: '6\\sqrt{2} + 15\\sqrt{2} = 21\\sqrt{2}',
                    explanation: '\\( 6 + 15 = 21 \\).',
                }
            ],
            finalAnswer: '\\(21\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-025',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 25',
        difficulty: 'Foundation',
        questionText: 'Express \\( 5\\sqrt{28} + 3\\sqrt{63} - 2\\sqrt{7} \\) in the form \\( k\\sqrt{7} \\), where \\( k \\) is an integer.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'adding', 'subtracting', 'form k root x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify each surd.',
                    workingLatex: '5\\sqrt{28} = 5 \\times 2\\sqrt{7} = 10\\sqrt{7} \\quad \\text{and} \\quad 3\\sqrt{63} = 3 \\times 3\\sqrt{7} = 9\\sqrt{7}',
                    explanation: '\\( \\sqrt{28} = 2\\sqrt{7} \\) and \\( \\sqrt{63} = 3\\sqrt{7} \\). The third term is already in surd form.',
                },
                {
                    stepNumber: 2,
                    description: 'Combine the like surds.',
                    workingLatex: '10\\sqrt{7} + 9\\sqrt{7} - 2\\sqrt{7} = 17\\sqrt{7}',
                    explanation: '\\( 10 + 9 - 2 = 17 \\).',
                }
            ],
            finalAnswer: '\\(17\\sqrt{7}\\)',
        },
    },
    {
        id: 'a5-026',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 26',
        difficulty: 'Foundation',
        questionText: 'Express \\( 2\\sqrt{20} + 3\\sqrt{45} + \\sqrt{80} \\) in the form \\( k\\sqrt{5} \\), where \\( k \\) is an integer.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying', 'adding', 'form k root x'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify each surd.',
                    workingLatex: '2\\sqrt{20} = 2 \\times 2\\sqrt{5} = 4\\sqrt{5}, \\quad 3\\sqrt{45} = 3 \\times 3\\sqrt{5} = 9\\sqrt{5}, \\quad \\sqrt{80} = 4\\sqrt{5}',
                    explanation: '\\( \\sqrt{20} = 2\\sqrt{5} \\), \\( \\sqrt{45} = 3\\sqrt{5} \\), and \\( \\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Add the like surds.',
                    workingLatex: '4\\sqrt{5} + 9\\sqrt{5} + 4\\sqrt{5} = 17\\sqrt{5}',
                    explanation: '\\( 4 + 9 + 4 = 17 \\).',
                }
            ],
            finalAnswer: '\\(17\\sqrt{5}\\)',
        },
    },
    {
        id: 'a5-027',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 27',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (2 + \\sqrt{3})(4 + \\sqrt{3}) \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (2+\\sqrt{3})(4+\\sqrt{3}) &= 2(4+\\sqrt{3})+\\sqrt{3}(4+\\sqrt{3}) \\\\ &= 8+2\\sqrt{3}+4\\sqrt{3}+3 \\\\ &= 11 + 6\\sqrt{3} \\end{aligned}',
                    explanation: 'Distribute each term in the first bracket across the second. Then collect rational parts (\\(8+3=11\\)) and surd parts (\\(2\\sqrt{3}+4\\sqrt{3}=6\\sqrt{3}\\)).',
                }
            ],
            finalAnswer: '\\(11 + 6\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-028',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 28',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (5 + 2\\sqrt{7})(3 - \\sqrt{7}) \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (5+2\\sqrt{7})(3-\\sqrt{7}) &= 5(3-\\sqrt{7})+2\\sqrt{7}(3-\\sqrt{7}) \\\\ &= 15-5\\sqrt{7}+6\\sqrt{7}-2(7) \\\\ &= 15-14-5\\sqrt{7}+6\\sqrt{7} \\\\ &= 1 + \\sqrt{7} \\end{aligned}',
                    explanation: 'Distribute each term. Note \\(2\\sqrt{7} \\times \\sqrt{7} = 2 \\times 7 = 14\\). Then collect rational and surd parts.',
                }
            ],
            finalAnswer: '\\(1 + \\sqrt{7}\\)',
        },
    },
    {
        id: 'a5-029',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 29',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (\\sqrt{5} + 3)(\\sqrt{5} - 1) \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (\\sqrt{5}+3)(\\sqrt{5}-1) &= \\sqrt{5}(\\sqrt{5}-1)+3(\\sqrt{5}-1) \\\\ &= 5-\\sqrt{5}+3\\sqrt{5}-3 \\\\ &= 2 + 2\\sqrt{5} \\end{aligned}',
                    explanation: 'Distribute each term. Rational parts: \\(5-3=2\\). Surd parts: \\(-\\sqrt{5}+3\\sqrt{5}=2\\sqrt{5}\\).',
                }
            ],
            finalAnswer: '\\(2 + 2\\sqrt{5}\\)',
        },
    },
    {
        id: 'a5-030',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 30',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (\\sqrt{11} + 3)(\\sqrt{11} - 3) \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recognise this as the difference of two squares pattern: \\( (\\sqrt{a} + b)(\\sqrt{a} - b) = a - b^2 \\).',
                    workingLatex: '(\\sqrt{11})^2 - 3^2',
                    explanation: 'The two brackets are conjugates — one has a plus, the other has a minus — so the middle surd terms cancel.',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '11 - 9 = 2',
                    explanation: 'The result is a rational number with no surds remaining. This is the key idea behind rationalising denominators.',
                }
            ],
            finalAnswer: '\\(2\\)',
        },
    },
    {
        id: 'a5-031',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 31',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (7 - 2\\sqrt{3})(7 + 2\\sqrt{3}) \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the difference of two squares: \\( (a - b)(a + b) = a^2 - b^2 \\).',
                    workingLatex: '7^2 - (2\\sqrt{3})^2',
                    explanation: 'These are conjugate pairs, so the cross terms cancel.',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each square.',
                    workingLatex: '49 - 4 \\times 3 = 49 - 12 = 37',
                    explanation: '\\( (2\\sqrt{3})^2 = 4 \\times 3 = 12 \\).',
                }
            ],
            finalAnswer: '\\(37\\)',
        },
    },
    {
        id: 'a5-032',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 32',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (\\sqrt{3} + 2)^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'squaring'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (\\sqrt{3}+2)^2 &= (\\sqrt{3}+2)(\\sqrt{3}+2) \\\\ &= \\sqrt{3}(\\sqrt{3}+2)+2(\\sqrt{3}+2) \\\\ &= 3+2\\sqrt{3}+2\\sqrt{3}+4 \\\\ &= 7 + 4\\sqrt{3} \\end{aligned}',
                    explanation: 'Write the square as two identical brackets, then distribute each term.',
                }
            ],
            finalAnswer: '\\(7 + 4\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-033',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 33',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (2\\sqrt{5} - 3)^2 \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'squaring'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (2\\sqrt{5}-3)^2 &= (2\\sqrt{5}-3)(2\\sqrt{5}-3) \\\\ &= 2\\sqrt{5}(2\\sqrt{5}-3)-3(2\\sqrt{5}-3) \\\\ &= 4(5)-6\\sqrt{5}-6\\sqrt{5}+9 \\\\ &= 20-12\\sqrt{5}+9 \\\\ &= 29 - 12\\sqrt{5} \\end{aligned}',
                    explanation: 'Write the square as two identical brackets, then distribute each term. Note \\(2\\sqrt{5} \\times 2\\sqrt{5} = 4 \\times 5 = 20\\).',
                }
            ],
            finalAnswer: '\\(29 - 12\\sqrt{5}\\)',
        },
    },
    {
        id: 'a5-034',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 34',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (4 + 3\\sqrt{2})(1 - 2\\sqrt{2}) \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (4+3\\sqrt{2})(1-2\\sqrt{2}) &= 4(1-2\\sqrt{2})+3\\sqrt{2}(1-2\\sqrt{2}) \\\\ &= 4-8\\sqrt{2}+3\\sqrt{2}-6(2) \\\\ &= 4-8\\sqrt{2}+3\\sqrt{2}-12 \\\\ &= -8 - 5\\sqrt{2} \\end{aligned}',
                    explanation: 'Distribute each term. Note \\(3\\sqrt{2} \\times 2\\sqrt{2} = 6 \\times 2 = 12\\). Then collect rational and surd parts.',
                }
            ],
            finalAnswer: '\\(-8 - 5\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-035',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 35',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (3\\sqrt{2} + \\sqrt{5})(3\\sqrt{2} - \\sqrt{5}) \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'difference of two squares'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the difference of two squares: \\( (a+b)(a-b) = a^2 - b^2 \\).',
                    workingLatex: '(3\\sqrt{2})^2 - (\\sqrt{5})^2',
                    explanation: 'The brackets are conjugate pairs.',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each square.',
                    workingLatex: '9 \\times 2 - 5 = 18 - 5 = 13',
                    explanation: '\\( (3\\sqrt{2})^2 = 9 \\times 2 = 18 \\) and \\( (\\sqrt{5})^2 = 5 \\).',
                }
            ],
            finalAnswer: '\\(13\\)',
        },
    },
    {
        id: 'a5-036',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 36',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{200} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 200.',
                    workingLatex: '\\sqrt{200} = \\sqrt{100 \\times 2}',
                    explanation: '100 is the largest square factor of 200.',
                },
                {
                    stepNumber: 2,
                    description: 'Split and simplify.',
                    workingLatex: '\\sqrt{100} \\times \\sqrt{2} = 10\\sqrt{2}',
                    explanation: '\\( \\sqrt{100} = 10 \\).',
                }
            ],
            finalAnswer: '\\(10\\sqrt{2}\\)',
        },
    },
    {
        id: 'a5-037',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 37',
        difficulty: 'Foundation',
        questionText: 'Simplify: \\( \\sqrt{147} \\)',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the largest square number that is a factor of 147.',
                    workingLatex: '\\sqrt{147} = \\sqrt{49 \\times 3}',
                    explanation: '49 is the largest square factor of 147.',
                },
                {
                    stepNumber: 2,
                    description: 'Split and simplify.',
                    workingLatex: '\\sqrt{49} \\times \\sqrt{3} = 7\\sqrt{3}',
                    explanation: '\\( \\sqrt{49} = 7 \\).',
                }
            ],
            finalAnswer: '\\(7\\sqrt{3}\\)',
        },
    },
    {
        id: 'a5-038',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 38',
        difficulty: 'Foundation',
        questionText: 'Evaluate: \\( 4\\sqrt{3} \\times 2\\sqrt{27} \\)',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'multiplying', 'evaluating'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply the coefficients and the surds separately.',
                    workingLatex: '(4 \\times 2) \\times (\\sqrt{3} \\times \\sqrt{27}) = 8 \\times \\sqrt{81}',
                    explanation: '\\( \\sqrt{3} \\times \\sqrt{27} = \\sqrt{3 \\times 27} = \\sqrt{81} \\).',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate.',
                    workingLatex: '8 \\times 9 = 72',
                    explanation: '\\( \\sqrt{81} = 9 \\).',
                }
            ],
            finalAnswer: '\\(72\\)',
        },
    },
    {
        id: 'a5-039',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 39',
        difficulty: 'Foundation',
        questionText: 'Expand and simplify: \\( (1 + \\sqrt{6})(3 + 2\\sqrt{6}) \\)',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'expanding', 'simplifying'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand and simplify',
                    workingLatex: '\\begin{aligned} (1+\\sqrt{6})(3+2\\sqrt{6}) &= 1(3+2\\sqrt{6})+\\sqrt{6}(3+2\\sqrt{6}) \\\\ &= 3+2\\sqrt{6}+3\\sqrt{6}+2(6) \\\\ &= 3+2\\sqrt{6}+3\\sqrt{6}+12 \\\\ &= 15 + 5\\sqrt{6} \\end{aligned}',
                    explanation: 'Distribute each term. Note \\(\\sqrt{6} \\times 2\\sqrt{6} = 2 \\times 6 = 12\\). Then collect rational and surd parts.',
                }
            ],
            finalAnswer: '\\(15 + 5\\sqrt{6}\\)',
        },
    },
    {
        id: 'a5-040',
        topicRef: 'a5',
        topicTitle: 'Laws of Surds 40',
        difficulty: 'Foundation',
        questionText: 'Triangle \\( PQR \\) is right-angled at \\( Q \\). Side \\( PR \\) has length \\( 7\\sqrt{2} \\) cm and side \\( PQ \\) has length \\( \\sqrt{2} \\) cm. Find the length of side \\( QR \\) in the form \\( k\\sqrt{6} \\) cm, where \\( k \\) is an integer.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['surds', 'pythagoras', 'form k root x', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply Pythagoras\'s theorem: \\(PR^2 = PQ^2 + QR^2\\), so \\(QR^2 = PR^2 - PQ^2\\).',
                    workingLatex: 'QR^2 = (7\\sqrt{2})^2 - (\\sqrt{2})^2',
                    explanation: '\\( PR \\) is the hypotenuse (the side opposite the right angle).',
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each square.',
                    workingLatex: 'QR^2 = 49 \\times 2 - 1 \\times 2 = 98 - 2 = 96',
                    explanation: '\\( (7\\sqrt{2})^2 = 49 \\times 2 = 98 \\) and \\( (\\sqrt{2})^2 = 2 \\).',
                },
                {
                    stepNumber: 3,
                    description: 'Take the square root and simplify.',
                    workingLatex: 'QR = \\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6}',
                    explanation: '16 is the largest square factor of 96, and \\( \\sqrt{16} = 4 \\).',
                },
            ],
 finalAnswer: '\\(4\\sqrt{6}\\) cm',
        },
    },
];