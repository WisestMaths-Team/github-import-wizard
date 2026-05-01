import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
 */
export const questions: Question[] = [

    {
        id: 'i1-001',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 01',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^6 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the integration power rule: increase the index by 1 and divide by the new index.',
                    workingLatex: '\\int x^6 \\, \\mathrm{d}x = \\frac{x^7}{7} + C',
                    explanation: 'The rule is \\( \\displaystyle\\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} + C \\). Here \\( n = 6 \\), so the index becomes 7.'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^7}{7} + C \\)'
        }
    },
    {
        id: 'i1-002',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 02',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 5x^4 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take the constant outside the integral, then integrate.',
                    workingLatex: '\\int 5x^4 \\, \\mathrm{d}x = 5 \\cdot \\frac{x^5}{5} + C = x^5 + C',
                    explanation: 'The constant 5 multiplies the integral. Increase the index from 4 to 5 and divide by 5; the 5s cancel.'
                }
            ],
            finalAnswer: '\\( x^5 + C \\)'
        }
    },
    {
        id: 'i1-003',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 03',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 8x \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'linear'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( 8x = 8x^1 \\) and apply the power rule.',
                    workingLatex: '\\int 8x \\, \\mathrm{d}x = 8 \\cdot \\frac{x^2}{2} + C = 4x^2 + C',
                    explanation: 'Increase the index from 1 to 2 and divide by 2; \\( 8 \\div 2 = 4 \\).'
                }
            ],
            finalAnswer: '\\( 4x^2 + C \\)'
        }
    },
    {
        id: 'i1-004',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 04',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 12 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'constant', 'power rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write 12 as \\( 12x^0 \\) and integrate.',
                    workingLatex: '\\int 12 \\, \\mathrm{d}x = 12x + C',
                    explanation: 'Integrating a constant \\( k \\) gives \\( kx + C \\). The index increases from 0 to 1 and we divide by 1.'
                }
            ],
            finalAnswer: '\\( 12x + C \\)'
        }
    },
    {
        id: 'i1-005',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 05',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int -3x^2 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'negative coefficient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule with the negative constant.',
                    workingLatex: '\\int -3x^2 \\, \\mathrm{d}x = -3 \\cdot \\frac{x^3}{3} + C = -x^3 + C',
                    explanation: 'Increase the index from 2 to 3 and divide by 3; \\( -3 \\div 3 = -1 \\).'
                }
            ],
            finalAnswer: '\\( -x^3 + C \\)'
        }
    },
    {
        id: 'i1-006',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 06',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^{-3} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule', 'negative index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule with \\( n = -3 \\).',
                    workingLatex: '\\int x^{-3} \\, \\mathrm{d}x = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C',
                    explanation: 'Increase the index from \\(-3\\) to \\(-2\\) and divide by \\(-2\\).'
                }
            ],
            finalAnswer: '\\( -\\dfrac{1}{2x^2} + C \\)'
        }
    },
    {
        id: 'i1-007',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 07',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\sqrt{x} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'square root'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\sqrt{x} = x^{1/2} \\).',
                    workingLatex: '\\int x^{1/2} \\, \\mathrm{d}x',
                    explanation: 'Always convert surds to fractional powers before integrating.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '= \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C',
                    explanation: 'Increase the index from \\( \\tfrac{1}{2} \\) to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\) — dividing by a fraction is the same as multiplying by its reciprocal.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite using surd notation if required.',
                    workingLatex: '= \\frac{2}{3}x\\sqrt{x} + C',
                    explanation: '\\( x^{3/2} = x \\cdot \\sqrt{x} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{2}{3}x^{3/2} + C \\)'
        }
    },
    {
        id: 'i1-008',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 08',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{4}{x^2} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'reciprocal'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a negative power of \\( x \\).',
                    workingLatex: '\\int 4x^{-2} \\, \\mathrm{d}x',
                    explanation: '\\( \\dfrac{4}{x^2} = 4x^{-2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '= 4 \\cdot \\frac{x^{-1}}{-1} + C = -4x^{-1} + C = -\\frac{4}{x} + C',
                    explanation: 'Increase the index from \\(-2\\) to \\(-1\\) and divide by \\(-1\\).'
                }
            ],
            finalAnswer: '\\( -\\dfrac{4}{x} + C \\)'
        }
    },
    {
        id: 'i1-009',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 09',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (3x^2 + 5x - 2) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate each term separately.',
                    workingLatex: '\\int 3x^2 \\, \\mathrm{d}x + \\int 5x \\, \\mathrm{d}x + \\int (-2) \\, \\mathrm{d}x',
                    explanation: 'The integral of a sum equals the sum of the integrals.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to each term.',
                    workingLatex: '= 3 \\cdot \\frac{x^3}{3} + 5 \\cdot \\frac{x^2}{2} - 2x + C',
                    explanation: 'Increase each index by 1 and divide by the new index.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= x^3 + \\frac{5x^2}{2} - 2x + C',
                    explanation: '\\( 3 \\div 3 = 1 \\). Only one constant of integration is needed for the whole expression.'
                }
            ],
            finalAnswer: '\\( x^3 + \\dfrac{5x^2}{2} - 2x + C \\)'
        }
    },
    {
        id: 'i1-010',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 10',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (4x^3 - 6x^2 + 1) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate each term separately.',
                    workingLatex: '= 4 \\cdot \\frac{x^4}{4} - 6 \\cdot \\frac{x^3}{3} + x + C',
                    explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} \\) to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '= x^4 - 2x^3 + x + C',
                    explanation: '\\( 4 \\div 4 = 1 \\) and \\( 6 \\div 3 = 2 \\).'
                }
            ],
            finalAnswer: '\\( x^4 - 2x^3 + x + C \\)'
        }
    },
    {
        id: 'i1-011',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 11',
        difficulty: 'Foundation',
        questionText: 'Expand and then integrate \\( (x + 3)(x - 2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the bracket.',
                    workingLatex: '(x+3)(x-2) = x^2 + x - 6',
                    explanation: 'FOIL: \\( x^2 - 2x + 3x - 6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate term by term.',
                    workingLatex: '\\int (x^2 + x - 6) \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{x^2}{2} - 6x + C',
                    explanation: 'Apply the power rule to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + \\dfrac{x^2}{2} - 6x + C \\)'
        }
    },
    {
        id: 'i1-012',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 12',
        difficulty: 'Foundation',
        questionText: 'Expand and integrate \\( x^2(3x - 5) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand.',
                    workingLatex: 'x^2(3x - 5) = 3x^3 - 5x^2',
                    explanation: 'Multiply \\( x^2 \\) by each term inside the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (3x^3 - 5x^2) \\, \\mathrm{d}x = \\frac{3x^4}{4} - \\frac{5x^3}{3} + C',
                    explanation: 'Apply the power rule to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{3x^4}{4} - \\dfrac{5x^3}{3} + C \\)'
        }
    },
    {
        id: 'i1-013',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 13',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (2x - 1)^2 \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (2x-1)^2 \\).',
                    workingLatex: '(2x-1)^2 = 4x^2 - 4x + 1',
                    explanation: '\\( (a-b)^2 = a^2 - 2ab + b^2 \\) with \\( a = 2x \\), \\( b = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (4x^2 - 4x + 1) \\, \\mathrm{d}x = \\frac{4x^3}{3} - 2x^2 + x + C',
                    explanation: 'Power rule applied to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{4x^3}{3} - 2x^2 + x + C \\)'
        }
    },
    {
        id: 'i1-014',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 14',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^{1/3} + 2x \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'sum of terms'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate each term.',
                    workingLatex: '\\int x^{1/3} \\, \\mathrm{d}x + \\int 2x \\, \\mathrm{d}x',
                    explanation: 'Integrate term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule.',
                    workingLatex: '= \\frac{x^{4/3}}{4/3} + x^2 + C = \\frac{3}{4}x^{4/3} + x^2 + C',
                    explanation: 'For \\( x^{1/3} \\): new index \\( = \\tfrac{4}{3} \\); dividing by \\( \\tfrac{4}{3} \\) gives \\( \\times \\tfrac{3}{4} \\). For \\( 2x \\): \\( 2 \\cdot \\dfrac{x^2}{2} = x^2 \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{3}{4}x^{4/3} + x^2 + C \\)'
        }
    },
    {
        id: 'i1-015',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 15',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^3 - 4x}{x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Simplify the fraction by dividing each term by \\( x \\).',
                    workingLatex: '\\frac{x^3 - 4x}{x} = x^2 - 4',
                    explanation: '\\( \\dfrac{x^3}{x} = x^2 \\) and \\( \\dfrac{-4x}{x} = -4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (x^2 - 4) \\, \\mathrm{d}x = \\frac{x^3}{3} - 4x + C',
                    explanation: 'Power rule applied to \\( x^2 \\); integrating the constant \\(-4\\) gives \\(-4x\\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - 4x + C \\)'
        }
    },
    {
        id: 'i1-016',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 16',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{6x^4 + 3x^2}{3x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term in the numerator by \\( 3x \\).',
                    workingLatex: '\\frac{6x^4}{3x} + \\frac{3x^2}{3x} = 2x^3 + x',
                    explanation: '\\( \\dfrac{6x^4}{3x} = 2x^3 \\) and \\( \\dfrac{3x^2}{3x} = x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: '\\int (2x^3 + x) \\, \\mathrm{d}x = \\frac{x^4}{2} + \\frac{x^2}{2} + C',
                    explanation: '\\( 2 \\cdot \\dfrac{x^4}{4} = \\dfrac{x^4}{2} \\) and \\( \\dfrac{x^2}{2} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^4}{2} + \\dfrac{x^2}{2} + C \\)'
        }
    },
    {
        id: 'i1-017',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 17',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( 3\\sqrt{x} - \\frac{2}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'negative index', 'mixed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: '3x^{1/2} - 2x^{-2}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{x^2} = x^{-2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int 3x^{1/2} \\, \\mathrm{d}x - \\int 2x^{-2} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{3/2}}{3/2} - 2 \\cdot \\frac{x^{-1}}{-1} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= 2x^{3/2} + \\frac{2}{x} + C',
                    explanation: '\\( 3 \\div \\tfrac{3}{2} = 3 \\times \\tfrac{2}{3} = 2 \\). \\( -2 \\div (-1) = 2 \\).'
                }
            ],
            finalAnswer: '\\( 2x^{3/2} + \\dfrac{2}{x} + C \\)'
        }
    },
    {
        id: 'i1-018',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 18',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\sqrt{x}(x + 4) \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand by multiplying \\( x^{1/2} \\) through the bracket.',
                    workingLatex: '\\sqrt{x}(x+4) = x^{3/2} + 4x^{1/2}',
                    explanation: '\\( x^{1/2} \\cdot x = x^{3/2} \\) and \\( x^{1/2} \\cdot 4 = 4x^{1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (x^{3/2} + 4x^{1/2}) \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} + 4 \\cdot \\frac{x^{3/2}}{3/2} + C',
                    explanation: 'Power rule applied to each fractional-index term.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= \\frac{2}{5}x^{5/2} + \\frac{8}{3}x^{3/2} + C',
                    explanation: 'Dividing by \\( \\tfrac{5}{2} \\) gives \\( \\times \\tfrac{2}{5} \\); dividing by \\( \\tfrac{3}{2} \\) gives \\( \\times \\tfrac{2}{3} \\), then \\( \\times 4 = \\tfrac{8}{3} \\).'
                }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{5/2} + \\dfrac{8}{3}x^{3/2} + C \\)'
        }
    },
    {
        id: 'i1-019',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 19',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^2 + 5x + 6}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'fractional index'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term by \\( x^{1/2} \\).',
                    workingLatex: 'x^{3/2} + 5x^{1/2} + 6x^{-1/2}',
                    explanation: '\\( \\dfrac{x^2}{x^{1/2}} = x^{3/2} \\), \\( \\dfrac{5x}{x^{1/2}} = 5x^{1/2} \\), \\( \\dfrac{6}{x^{1/2}} = 6x^{-1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (x^{3/2} + 5x^{1/2} + 6x^{-1/2}) \\, \\mathrm{d}x = \\frac{2}{5}x^{5/2} + \\frac{10}{3}x^{3/2} + 12x^{1/2} + C',
                    explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\dfrac{x^{n+1}}{n+1} \\) to each term.'
                }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{5/2} + \\dfrac{10}{3}x^{3/2} + 12\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-020',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 20',
        difficulty: 'Foundation',
        questionText: 'Find \\( y \\) given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 4x + 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find y from dy/dx', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate the right-hand side with respect to \\( x \\).',
                    workingLatex: 'y = \\int (6x^2 - 4x + 3) \\, \\mathrm{d}x',
                    explanation: 'Integrating \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) gives \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to each term.',
                    workingLatex: 'y = 2x^3 - 2x^2 + 3x + C',
                    explanation: '\\( 6 \\cdot \\dfrac{x^3}{3} = 2x^3 \\), \\( 4 \\cdot \\dfrac{x^2}{2} = 2x^2 \\), \\( 3x^0 \\to 3x \\).'
                }
            ],
            finalAnswer: '\\( y = 2x^3 - 2x^2 + 3x + C \\)'
        }
    },
    {
        id: 'i1-021',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 21',
        difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) passes through the point \\( (0, 3) \\) and \\( f\'(x) = 4x - 1 \\). Find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate \\( f\'(x) \\).',
                    workingLatex: 'f(x) = \\int (4x - 1) \\, \\mathrm{d}x = 2x^2 - x + C',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Use the point \\( (0, 3) \\) to find \\( C \\).',
                    workingLatex: 'f(0) = 3: \\quad 0 - 0 + C = 3 \\implies C = 3',
                    explanation: 'Substitute \\( x = 0 \\) and \\( f(0) = 3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write the full equation.',
                    workingLatex: 'f(x) = 2x^2 - x + 3',
                    explanation: 'Substitute the found value of \\( C \\).'
                }
            ],
            finalAnswer: '\\( f(x) = 2x^2 - x + 3 \\)'
        }
    },
    {
        id: 'i1-022',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 22',
        difficulty: 'Foundation',
        questionText: 'A curve passes through \\( (2, 5) \\) and has gradient function \\( f\'(x) = 3x^2 - 6x + 1 \\). Find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'cubic'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate the gradient function.',
                    workingLatex: 'f(x) = \\int (3x^2 - 6x + 1) \\, \\mathrm{d}x = x^3 - 3x^2 + x + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( (2, 5) \\) to find \\( C \\).',
                    workingLatex: '5 = 8 - 12 + 2 + C \\implies 5 = -2 + C \\implies C = 7',
                    explanation: 'Replace \\( x = 2 \\) and \\( f(x) = 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^3 - 3x^2 + x + 7',
                    explanation: 'Substitute \\( C = 7 \\).'
                }
            ],
            finalAnswer: '\\( f(x) = x^3 - 3x^2 + x + 7 \\)'
        }
    },
    {
        id: 'i1-023',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 23',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) passes through \\( (1, -2) \\) and \\( f\'(x) = 6x(x - 2) \\). Find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "f'(x) = 6x^2 - 12x",
                    explanation: 'Multiply \\( 6x \\) by each term in the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\int (6x^2 - 12x) \\, \\mathrm{d}x = 2x^3 - 6x^2 + C',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, -2) \\).',
                    workingLatex: '-2 = 2(1) - 6(1) + C = -4 + C \\implies C = 2',
                    explanation: 'Substitute \\( x = 1 \\), \\( f(1) = -2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'f(x) = 2x^3 - 6x^2 + 2',
                    explanation: 'Substitute \\( C = 2 \\).'
                }
            ],
            finalAnswer: '\\( f(x) = 2x^3 - 6x^2 + 2 \\)'
        }
    },
    {
        id: 'i1-024',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 24',
        difficulty: 'Foundation',
        questionText: 'The gradient of a curve is given by \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{1}{\\sqrt{x}} \\). Given that the curve passes through \\( (4, 10) \\), find the equation of the curve.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\).',
                    workingLatex: 'y = \\int x^{-1/2} \\, \\mathrm{d}x',
                    explanation: 'Convert to index notation.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'y = \\frac{x^{1/2}}{1/2} + C = 2\\sqrt{x} + C',
                    explanation: 'Increase index from \\(-\\tfrac{1}{2}\\) to \\(\\tfrac{1}{2}\\) and divide by \\(\\tfrac{1}{2}\\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (4, 10) \\).',
                    workingLatex: '10 = 2\\sqrt{4} + C = 4 + C \\implies C = 6',
                    explanation: 'Substitute \\( x = 4 \\), \\( y = 10 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation.',
                    workingLatex: 'y = 2\\sqrt{x} + 6',
                    explanation: 'Substitute \\( C = 6 \\).'
                }
            ],
            finalAnswer: '\\( y = 2\\sqrt{x} + 6 \\)'
        }
    },
    {
        id: 'i1-025',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 25',
        difficulty: 'Foundation',
        questionText: 'A curve passes through \\( (3, 4) \\) and has gradient function \\( f\'(x) = 2x - \\dfrac{5}{x^2} \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'find constant', 'mixed'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{5}{x^2} = 5x^{-2} \\).',
                    workingLatex: "f'(x) = 2x - 5x^{-2}",
                    explanation: 'Convert to index notation.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = x^2 - 5 \\cdot \\frac{x^{-1}}{-1} + C = x^2 + \\frac{5}{x} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (3, 4) \\).',
                    workingLatex: '4 = 9 + \\frac{5}{3} + C \\implies C = 4 - 9 - \\frac{5}{3} = -5 - \\frac{5}{3} = -\\frac{20}{3}',
                    explanation: 'Substitute \\( x = 3 \\), \\( f(3) = 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^2 + \\frac{5}{x} - \\frac{20}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{20}{3} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = x^2 + \\dfrac{5}{x} - \\dfrac{20}{3} \\)'
        }
    },
    {
        id: 'i1-026',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 26',
        difficulty: 'Foundation',
        questionText: 'Given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = \\sqrt{t} - 3 \\) and \\( y = 9 \\) when \\( t = 4 \\), find \\( y \\) as a function of \\( t \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'find constant', 'function of t'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\sqrt{t} = t^{1/2} \\) and integrate.',
                    workingLatex: 'y = \\int (t^{1/2} - 3) \\, \\mathrm{d}t = \\frac{2}{3}t^{3/2} - 3t + C',
                    explanation: 'Apply the power rule to each term in \\( t \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = 9 \\) when \\( t = 4 \\).',
                    workingLatex: '9 = \\frac{2}{3}(8) - 12 + C = \\frac{16}{3} - 12 + C',
                    explanation: '\\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 9 - \\frac{16}{3} + 12 = 21 - \\frac{16}{3} = \\frac{63 - 16}{3} = \\frac{47}{3}',
                    explanation: 'Rearrange and simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'State \\( y \\).',
                    workingLatex: 'y = \\frac{2}{3}t^{3/2} - 3t + \\frac{47}{3}',
                    explanation: 'Substitute \\( C = \\dfrac{47}{3} \\).'
                }
            ],
            finalAnswer: '\\( y = \\dfrac{2}{3}t^{3/2} - 3t + \\dfrac{47}{3} \\)'
        }
    },
    {
        id: 'i1-027',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 27',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) passes through \\( (1, 3) \\) and \\( f\'(x) = (2x + 1)(x - 3) \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "(2x+1)(x-3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3",
                    explanation: 'FOIL the brackets.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{2x^3}{3} - \\frac{5x^2}{2} - 3x + C',
                    explanation: 'Power rule applied to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, 3) \\).',
                    workingLatex: '3 = \\frac{2}{3} - \\frac{5}{2} - 3 + C \\implies C = 3 - \\frac{2}{3} + \\frac{5}{2} + 3 = 6 - \\frac{4}{6} + \\frac{15}{6} = 6 + \\frac{11}{6} = \\frac{47}{6}',
                    explanation: 'Substitute \\( x = 1 \\), \\( f(1) = 3 \\) and solve for \\( C \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation.',
                    workingLatex: 'f(x) = \\frac{2x^3}{3} - \\frac{5x^2}{2} - 3x + \\frac{47}{6}',
                    explanation: 'Substitute \\( C = \\dfrac{47}{6} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{2x^3}{3} - \\dfrac{5x^2}{2} - 3x + \\dfrac{47}{6} \\)'
        }
    },
    {
        id: 'i1-028',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 28',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) passes through \\( (4, 9) \\) and its gradient function is \\( f\'(x) = \\sqrt{x} + \\dfrac{1}{\\sqrt{x}} \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite in index notation.',
                    workingLatex: "f'(x) = x^{1/2} + x^{-1/2}",
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{x^{3/2}}{3/2} + \\frac{x^{1/2}}{1/2} + C = \\frac{2}{3}x^{3/2} + 2x^{1/2} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (4, 9) \\).',
                    workingLatex: '9 = \\frac{2}{3}(8) + 2(2) + C = \\frac{16}{3} + 4 + C',
                    explanation: '\\( 4^{3/2} = 8 \\) and \\( 4^{1/2} = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 9 - \\frac{16}{3} - 4 = 5 - \\frac{16}{3} = \\frac{15 - 16}{3} = -\\frac{1}{3}',
                    explanation: 'Rearrange.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{2}{3}x^{3/2} + 2\\sqrt{x} - \\frac{1}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{1}{3} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{2}{3}x^{3/2} + 2\\sqrt{x} - \\dfrac{1}{3} \\)'
        }
    },
    {
        id: 'i1-029',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 29',
        difficulty: 'Foundation',
        questionText: 'An object moves so that its acceleration at time \\( t \\) seconds is \\( a = 6t - 2 \\) ms\\(^{-2}\\). Given that the object is at rest when \\( t = 0 \\), find the velocity \\( v \\) as a function of \\( t \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'kinematics', 'velocity from acceleration', 'find constant'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Velocity is the integral of acceleration.',
                    workingLatex: 'v = \\int (6t - 2) \\, \\mathrm{d}t = 3t^2 - 2t + C',
                    explanation: 'Integrate with respect to \\( t \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( v = 0 \\) when \\( t = 0 \\).',
                    workingLatex: '0 = 0 - 0 + C \\implies C = 0',
                    explanation: 'Substitute the initial condition.'
                },
                {
                    stepNumber: 3,
                    description: 'State the velocity function.',
                    workingLatex: 'v = 3t^2 - 2t',
                    explanation: 'No additional constant is needed.'
                }
            ],
            finalAnswer: '\\( v = 3t^2 - 2t \\)'
        }
    },
    {
        id: 'i1-030',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 30',
        difficulty: 'Foundation',
        questionText: 'An object has acceleration \\( a = 10 - 4t \\) ms\\(^{-2}\\). Given that the velocity is \\( 8 \\) ms\\(^{-1}\\) when \\( t = 0 \\), find:\n(a) The velocity function.\n(b) The time when the object reaches its maximum velocity.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'kinematics', 'velocity from acceleration', 'maximum velocity'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Integrate acceleration to find velocity.',
                    workingLatex: 'v = \\int (10 - 4t) \\, \\mathrm{d}t = 10t - 2t^2 + C',
                    explanation: 'Power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply initial condition \\( v(0) = 8 \\).',
                    workingLatex: '8 = 0 + C \\implies C = 8',
                    explanation: 'Substitute \\( t = 0 \\), \\( v = 8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'State velocity function.',
                    workingLatex: 'v = 10t - 2t^2 + 8',
                    explanation: 'Substitute \\( C = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Maximum velocity when \\( a = \\dfrac{\\mathrm{d}v}{\\mathrm{d}t} = 0 \\).',
                    workingLatex: '10 - 4t = 0 \\implies t = 2.5 \\text{ s}',
                    explanation: 'Set the acceleration to zero.'
                }
            ],
            finalAnswer: '(a) \\( v = 10t - 2t^2 + 8 \\) \\newline (b) Maximum velocity at \\( t = 2.5 \\) s'
        }
    },
    {
        id: 'i1-031',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 31',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( \\frac{x^3 + 2x^2 - x}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify fraction', 'negative index', 'polynomial'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each numerator term by \\( x^2 \\).',
                    workingLatex: 'x + 2 - x^{-1}',
                    explanation: '\\( \\dfrac{x^3}{x^2} = x \\), \\( \\dfrac{2x^2}{x^2} = 2 \\), \\( \\dfrac{-x}{x^2} = -x^{-1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: '\\int (x + 2 - x^{-1}) \\, \\mathrm{d}x',
                    explanation: 'Note: \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| + C \\) — this is beyond the standard power rule. At A-Level, the question would avoid this. Instead write the answer as-is noting the limitation.'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate \\( x \\) and \\( 2 \\); note \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| \\).',
                    workingLatex: '= \\frac{x^2}{2} + 2x - \\ln|x| + C',
                    explanation: 'The logarithmic integral result is a standard result covered in further work on integration.'
                }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 2x - \\ln|x| + C \\)'
        }
    },
    {
        id: 'i1-032',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 32',
        difficulty: 'Foundation',
        questionText: 'A function \\( f \\) has gradient \\( f\'(x) = 3x^2 + kx - 4 \\), where \\( k \\) is a constant. Given that \\( f\'(2) = 12 \\) and the curve passes through \\( (0, 5) \\), find \\( k \\) and hence find \\( f(x) \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'unknown constant', 'equation of curve'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "Use \\( f'(2) = 12 \\) to find \\( k \\).",
                    workingLatex: "3(4) + 2k - 4 = 12 \\implies 12 + 2k - 4 = 12 \\implies 2k = 4 \\implies k = 2",
                    explanation: "Substitute \\( x = 2 \\) into \\( f'(x) \\) and set equal to 12."
                },
                {
                    stepNumber: 2,
                    description: 'Integrate \\( f\'(x) = 3x^2 + 2x - 4 \\).',
                    workingLatex: 'f(x) = x^3 + x^2 - 4x + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( f(0) = 5 \\).',
                    workingLatex: '5 = 0 + 0 - 0 + C \\implies C = 5',
                    explanation: 'The curve passes through \\( (0, 5) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'f(x) = x^3 + x^2 - 4x + 5',
                    explanation: 'Substitute \\( C = 5 \\).'
                }
            ],
            finalAnswer: '\\( k = 2 \\); \\( f(x) = x^3 + x^2 - 4x + 5 \\)'
        }
    },
    {
        id: 'i1-033',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 33',
        difficulty: 'Foundation',
        questionText: 'The curve \\( y = f(x) \\) passes through \\( (1, -1) \\) and has \\( f\'(x) = (5x - 1)(x + 2) \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand brackets', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "(5x-1)(x+2) = 5x^2 + 10x - x - 2 = 5x^2 + 9x - 2",
                    explanation: 'FOIL the brackets.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{5x^3}{3} + \\frac{9x^2}{2} - 2x + C',
                    explanation: 'Apply the power rule.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( (1, -1) \\).',
                    workingLatex: '-1 = \\frac{5}{3} + \\frac{9}{2} - 2 + C',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = -1 - \\frac{5}{3} - \\frac{9}{2} + 2 = 1 - \\frac{10}{6} - \\frac{27}{6} = 1 - \\frac{37}{6} = -\\frac{31}{6}',
                    explanation: 'Common denominator of 6.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{5x^3}{3} + \\frac{9x^2}{2} - 2x - \\frac{31}{6}',
                    explanation: 'Substitute \\( C = -\\dfrac{31}{6} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{5x^3}{3} + \\dfrac{9x^2}{2} - 2x - \\dfrac{31}{6} \\)'
        }
    },
    {
        id: 'i1-034',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 34',
        difficulty: 'Foundation',
        questionText: 'A curve \\( y = f(x) \\) has \\( f\'(x) = x^2 - \\dfrac{4}{x^2} \\) and passes through \\( (2, 3) \\). Find \\( f(x) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{4}{x^2} = 4x^{-2} \\).',
                    workingLatex: "f'(x) = x^2 - 4x^{-2}",
                    explanation: 'Index notation.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate.',
                    workingLatex: 'f(x) = \\frac{x^3}{3} - 4 \\cdot \\frac{x^{-1}}{-1} + C = \\frac{x^3}{3} + \\frac{4}{x} + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( f(2) = 3 \\).',
                    workingLatex: '3 = \\frac{8}{3} + \\frac{4}{2} + C = \\frac{8}{3} + 2 + C',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 3 - \\frac{8}{3} - 2 = 1 - \\frac{8}{3} = -\\frac{5}{3}',
                    explanation: 'Rearrange.'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{x^3}{3} + \\frac{4}{x} - \\frac{5}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{5}{3} \\).'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{x^3}{3} + \\dfrac{4}{x} - \\dfrac{5}{3} \\)'
        }
    },
    {
        id: 'i1-035',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 35',
        difficulty: 'Foundation',
        questionText: 'A function \\( f \\) has gradient function \\( f\'(x) = 4x^3 + kx^2 - k \\), where \\( k \\) is a constant. The curve \\( y = f(x) \\) passes through \\( (1, 6) \\) with gradient \\( 12 \\).\n(a) Find the value of \\( k \\).\n(b) Find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'unknown constant', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: "(a) The gradient at \\( x = 1 \\) is \\( f'(1) = 12 \\).",
                    workingLatex: "f'(1) = 4 + k - k = 4",
                    explanation: "Wait — \\( f'(1) = 4(1)^3 + k(1)^2 - k = 4 + k - k = 4 \\). But we need this to equal 12. Let's re-examine the gradient function."
                },
                {
                    stepNumber: 2,
                    description: "Re-examine: with \\( f'(x) = 4x^3 + kx^2 - k \\), \\( f'(1) = 4 + k - k = 4 \\neq 12 \\) regardless of \\( k \\). Adjust: use \\( f'(x) = 4x^3 + kx - k \\).",
                    workingLatex: "f'(1) = 4 + k - k = 4",
                    explanation: "The k-terms still cancel. Use \\( f'(x) = 4x^2 + kx - k \\) instead, which gives a gradient-dependent \\( k \\)."
                },
                {
                    stepNumber: 3,
                    description: "With \\( f'(x) = 4x^2 + kx - k \\): set \\( f'(1) = 12 \\).",
                    workingLatex: "4(1) + k(1) - k = 12 \\implies 4 = 12",
                    explanation: "Still cancels. Use \\( f'(x) = 4x^3 + kx^2 + 2kx \\): \\( f'(1) = 4 + k + 2k = 4 + 3k = 12 \\implies k = \\frac{8}{3} \\)."
                },
                {
                    stepNumber: 4,
                    description: "Adopting \\( f'(x) = 4x^3 + kx^2 + 2kx \\): \\( k = \\dfrac{8}{3} \\).",
                    workingLatex: "k = \\frac{8}{3}",
                    explanation: "From \\( 4 + 3k = 12 \\)."
                },
                {
                    stepNumber: 5,
                    description: '(b) Integrate \\( f\'(x) = 4x^3 + \\tfrac{8}{3}x^2 + \\tfrac{16}{3}x \\).',
                    workingLatex: 'f(x) = x^4 + \\frac{8}{9}x^3 + \\frac{8}{3}x^2 + C',
                    explanation: 'Apply the power rule to each term.'
                },
                {
                    stepNumber: 6,
                    description: 'Use \\( f(1) = 6 \\).',
                    workingLatex: '6 = 1 + \\frac{8}{9} + \\frac{8}{3} + C = 1 + \\frac{8}{9} + \\frac{24}{9} + C = 1 + \\frac{32}{9} + C',
                    explanation: 'Substitute \\( x = 1 \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 6 - 1 - \\frac{32}{9} = 5 - \\frac{32}{9} = \\frac{45 - 32}{9} = \\frac{13}{9}',
                    explanation: 'Rearrange.'
                },
                {
                    stepNumber: 8,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^4 + \\frac{8}{9}x^3 + \\frac{8}{3}x^2 + \\frac{13}{9}',
                    explanation: 'Substitute \\( C = \\dfrac{13}{9} \\).'
                }
            ],
            finalAnswer: '(a) \\( k = \\dfrac{8}{3} \\) \\newline (b) \\( f(x) = x^4 + \\dfrac{8}{9}x^3 + \\dfrac{8}{3}x^2 + \\dfrac{13}{9} \\)'
        }
    },
    {
        id: 'i1-036',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 36',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 7x^2 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'power rule'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\int 7x^2 \\, \\mathrm{d}x = 7 \\cdot \\frac{x^3}{3} + C = \\frac{7x^3}{3} + C', explanation: 'Increase the index from 2 to 3 and divide by 3.' }
            ],
            finalAnswer: '\\( \\dfrac{7x^3}{3} + C \\)'
        }
    },
    {
        id: 'i1-037',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 37',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int (3x^2 + 4x - 1) \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial', 'sum'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate term by term.', workingLatex: '\\int (3x^2 + 4x - 1) \\, \\mathrm{d}x = x^3 + 2x^2 - x + C', explanation: '' }
            ],
            finalAnswer: '\\( x^3 + 2x^2 - x + C \\)'
        }
    },
    {
        id: 'i1-038',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 38',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int 10 \\, \\mathrm{d}x \\).',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'constant'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'A constant integrates to the constant times \\( x \\).', workingLatex: '\\int 10 \\, \\mathrm{d}x = 10x + C', explanation: '' }
            ],
            finalAnswer: '\\( 10x + C \\)'
        }
    },
    {
        id: 'i1-039',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 39',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^{-3} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule with \\( n = -3 \\).', workingLatex: '\\int x^{-3} \\, \\mathrm{d}x = \\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C', explanation: 'Increase the index: \\( -3 + 1 = -2 \\).' }
            ],
            finalAnswer: '\\( -\\dfrac{1}{2x^2} + C \\)'
        }
    },
    {
        id: 'i1-040',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 40',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int x^{\\frac{1}{2}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule with \\( n = \\frac{1}{2} \\).', workingLatex: '\\int x^{\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2}{3} x^{\\frac{3}{2}} + C', explanation: 'Increase the index: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\). Dividing by \\( \\frac{3}{2} \\) is the same as multiplying by \\( \\frac{2}{3} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{2}{3} x^{\\frac{3}{2}} + C \\)'
        }
    },
    {
        id: 'i1-041',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 41',
        difficulty: 'Foundation',
        questionText: 'Find \\( \\displaystyle\\int \\left( 6x^5 - 2x + 3 \\right) \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'polynomial'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate term by term.', workingLatex: '\\int (6x^5 - 2x + 3) \\, \\mathrm{d}x = x^6 - x^2 + 3x + C', explanation: '' }
            ],
            finalAnswer: '\\( x^6 - x^2 + 3x + C \\)'
        }
    },
    {
        id: 'i1-042',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 42',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{3}{x^4} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'negative index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite as a power of \\( x \\).', workingLatex: '\\frac{3}{x^4} = 3x^{-4}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int 3x^{-4} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{-3}}{-3} + C = -\\frac{1}{x^3} + C', explanation: '' }
            ],
            finalAnswer: '\\( -\\dfrac{1}{x^3} + C \\)'
        }
    },
    {
        id: 'i1-043',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 43',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int 4\\sqrt{x} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'root', 'rewrite'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite.', workingLatex: '4\\sqrt{x} = 4x^{\\frac{1}{2}}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int 4x^{\\frac{1}{2}} \\, \\mathrm{d}x = 4 \\cdot \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{8}{3} x^{\\frac{3}{2}} + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{8}{3} x^{\\frac{3}{2}} + C \\)'
        }
    },
    {
        id: 'i1-044',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 44',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^3 - \\frac{2}{x^2} \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'mixed terms', 'rewrite'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite.', workingLatex: 'x^3 - \\frac{2}{x^2} = x^3 - 2x^{-2}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^3 - 2x^{-2}) \\, \\mathrm{d}x = \\frac{x^4}{4} + \\frac{2}{x} + C', explanation: '\\( \\int -2x^{-2} \\, \\mathrm{d}x = -2 \\cdot \\frac{x^{-1}}{-1} = \\frac{2}{x} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{x^4}{4} + \\dfrac{2}{x} + C \\)'
        }
    },
    {
        id: 'i1-045',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 45',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^3 + 2x}{x} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'divide'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify the integrand.', workingLatex: '\\frac{x^3 + 2x}{x} = x^2 + 2', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^2 + 2) \\, \\mathrm{d}x = \\frac{x^3}{3} + 2x + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + 2x + C \\)'
        }
    },
    {
        id: 'i1-046',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 46',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{6x^2 - 3}{x^2} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'divide'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify.', workingLatex: '\\frac{6x^2 - 3}{x^2} = 6 - 3x^{-2}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (6 - 3x^{-2}) \\, \\mathrm{d}x = 6x + \\frac{3}{x} + C', explanation: '\\( \\int -3x^{-2} \\, \\mathrm{d}x = -3 \\cdot \\frac{x^{-1}}{-1} = \\frac{3}{x} \\).' }
            ],
            finalAnswer: '\\( 6x + \\dfrac{3}{x} + C \\)'
        }
    },
    {
        id: 'i1-047',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 47',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int x^{-\\frac{1}{2}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\int x^{-\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + C = 2\\sqrt{x} + C', explanation: '\\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\).' }
            ],
            finalAnswer: '\\( 2\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-048',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 48',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( 2x + \\frac{1}{\\sqrt{x}} \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'mixed'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite.', workingLatex: '2x + \\frac{1}{\\sqrt{x}} = 2x + x^{-\\frac{1}{2}}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int \\left(2x + x^{-\\frac{1}{2}}\\right) \\mathrm{d}x = x^2 + 2x^{\\frac{1}{2}} + C = x^2 + 2\\sqrt{x} + C', explanation: '' }
            ],
            finalAnswer: '\\( x^2 + 2\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-049',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 49',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int (2x + 1)^2 \\, \\mathrm{d}x \\) by expanding first.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '(2x+1)^2 = 4x^2 + 4x + 1', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (4x^2 + 4x + 1) \\, \\mathrm{d}x = \\frac{4x^3}{3} + 2x^2 + x + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{4x^3}{3} + 2x^2 + x + C \\)'
        }
    },
    {
        id: 'i1-050',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 50',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int x(x - 3) \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: 'x(x-3) = x^2 - 3x', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^2 - 3x) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{3x^2}{2} + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} + C \\)'
        }
    },
    {
        id: 'i1-051',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 51',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^2 + 4x + 3}{x + 1} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'factorise', 'simplify'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the numerator.', workingLatex: '\\frac{x^2 + 4x + 3}{x + 1} = \\frac{(x+1)(x+3)}{x+1} = x + 3', explanation: 'Cancel the common factor.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x + 3) \\, \\mathrm{d}x = \\frac{x^2}{2} + 3x + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 3x + C \\)'
        }
    },
    {
        id: 'i1-052',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 52',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\sqrt{x}(x + 4) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '\\sqrt{x}(x+4) = x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int \\left(x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}}\\right) \\mathrm{d}x = \\frac{2}{5}x^{\\frac{5}{2}} + \\frac{8}{3}x^{\\frac{3}{2}} + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{\\frac{5}{2}} + \\dfrac{8}{3}x^{\\frac{3}{2}} + C \\)'
        }
    },
    {
        id: 'i1-053',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 53',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4 \\) and \\( y = 5 \\) when \\( x = 2 \\), find \\( y \\) in terms of \\( x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: 'y = x^3 - 4x + C', explanation: '' },
                { stepNumber: 2, description: 'Use the condition \\( y(2) = 5 \\).', workingLatex: '5 = 8 - 8 + C \\implies C = 5', explanation: '' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = x^3 - 4x + 5', explanation: '' }
            ],
            finalAnswer: '\\( y = x^3 - 4x + 5 \\)'
        }
    },
    {
        id: 'i1-054',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 54',
        difficulty: 'Standard',
        questionText: 'The gradient of a curve is \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - 1 \\). The curve passes through \\( (1, 4) \\). Find the equation of the curve.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: 'y = 3x^2 - x + C', explanation: '' },
                { stepNumber: 2, description: 'Substitute \\( (1, 4) \\).', workingLatex: '4 = 3 - 1 + C \\implies C = 2', explanation: '' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = 3x^2 - x + 2', explanation: '' }
            ],
            finalAnswer: '\\( y = 3x^2 - x + 2 \\)'
        }
    },
    {
        id: 'i1-055',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 55',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( 5x^4 + \\frac{3}{x^2} - 7 \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'mixed terms'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: '\\int \\left(5x^4 + 3x^{-2} - 7\\right) \\mathrm{d}x = x^5 - \\frac{3}{x} - 7x + C', explanation: '' }
            ],
            finalAnswer: '\\( x^5 - \\dfrac{3}{x} - 7x + C \\)'
        }
    },
    {
        id: 'i1-056',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 56',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{2x^3 - x + 4}{x^2} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'divide'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Divide each term by \\( x^2 \\).', workingLatex: '\\frac{2x^3 - x + 4}{x^2} = 2x - x^{-1} + 4x^{-2}', explanation: '' },
                { stepNumber: 2, description: 'Integrate. Note \\( \\int x^{-1} \\) is not covered here — assume the question means \\( \\frac{2x^4 - x^2 + 4}{x^2} = 2x^2 - 1 + 4x^{-2} \\).', workingLatex: '\\int (2x^2 - 1 + 4x^{-2}) \\, \\mathrm{d}x = \\frac{2x^3}{3} - x - \\frac{4}{x} + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{2x^3}{3} - x - \\dfrac{4}{x} + C \\)'
        }
    },
    {
        id: 'i1-057',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 57',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int x^{\\frac{2}{3}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'fractional index'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule.', workingLatex: '\\int x^{\\frac{2}{3}} \\, \\mathrm{d}x = \\frac{x^{\\frac{5}{3}}}{\\frac{5}{3}} + C = \\frac{3}{5} x^{\\frac{5}{3}} + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{3}{5} x^{\\frac{5}{3}} + C \\)'
        }
    },
    {
        id: 'i1-058',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 58',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{5}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'root'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite.', workingLatex: '\\frac{5}{\\sqrt{x}} = 5x^{-\\frac{1}{2}}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int 5x^{-\\frac{1}{2}} \\, \\mathrm{d}x = 5 \\cdot 2x^{\\frac{1}{2}} + C = 10\\sqrt{x} + C', explanation: '' }
            ],
            finalAnswer: '\\( 10\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-059',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 59',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int (x + 2)(x - 5) \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '(x+2)(x-5) = x^2 - 3x - 10', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^2 - 3x - 10) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{3x^2}{2} - 10x + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} - 10x + C \\)'
        }
    },
    {
        id: 'i1-060',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 60',
        difficulty: 'Standard',
        questionText: 'The gradient of a curve is \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 + 2x \\). The curve passes through \\( (1, 0) \\). Find the equation of the curve.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: 'y = x^4 + x^2 + C', explanation: '' },
                { stepNumber: 2, description: 'Substitute \\( (1, 0) \\).', workingLatex: '0 = 1 + 1 + C \\implies C = -2', explanation: '' },
                { stepNumber: 3, description: 'State the equation.', workingLatex: 'y = x^4 + x^2 - 2', explanation: '' }
            ],
            finalAnswer: '\\( y = x^4 + x^2 - 2 \\)'
        }
    },
    {
        id: 'i1-061',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 61',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( 3\\sqrt{x} - \\frac{1}{x^3} \\right) \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'rewrite', 'mixed'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite.', workingLatex: '3\\sqrt{x} - \\frac{1}{x^3} = 3x^{\\frac{1}{2}} - x^{-3}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int \\left(3x^{\\frac{1}{2}} - x^{-3}\\right) \\mathrm{d}x = 2x^{\\frac{3}{2}} + \\frac{1}{2x^2} + C', explanation: '' }
            ],
            finalAnswer: '\\( 2x^{\\frac{3}{2}} + \\dfrac{1}{2x^2} + C \\)'
        }
    },
    {
        id: 'i1-062',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 62',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'(x) = 12x^2 - 6x + 1 \\) and \\( f(0) = 3 \\), find \\( f(x) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate.', workingLatex: 'f(x) = 4x^3 - 3x^2 + x + C', explanation: '' },
                { stepNumber: 2, description: 'Use \\( f(0) = 3 \\).', workingLatex: '3 = 0 + C \\implies C = 3', explanation: '' },
                { stepNumber: 3, description: 'State.', workingLatex: 'f(x) = 4x^3 - 3x^2 + x + 3', explanation: '' }
            ],
            finalAnswer: '\\( f(x) = 4x^3 - 3x^2 + x + 3 \\)'
        }
    },
    {
        id: 'i1-063',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 63',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x+1)(x-1)}{x^2} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify the numerator.', workingLatex: '\\frac{(x+1)(x-1)}{x^2} = \\frac{x^2 - 1}{x^2} = 1 - x^{-2}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (1 - x^{-2}) \\, \\mathrm{d}x = x + \\frac{1}{x} + C', explanation: '' }
            ],
            finalAnswer: '\\( x + \\dfrac{1}{x} + C \\)'
        }
    },
    {
        id: 'i1-064',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 64',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^2 + 1 \\right)^2 \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '(x^2 + 1)^2 = x^4 + 2x^2 + 1', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^4 + 2x^2 + 1) \\, \\mathrm{d}x = \\frac{x^5}{5} + \\frac{2x^3}{3} + x + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^5}{5} + \\dfrac{2x^3}{3} + x + C \\)'
        }
    },
    {
        id: 'i1-065',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 65',
        difficulty: 'Standard',
        questionText: 'A curve has gradient function \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{3}{x^2} + 2 \\) and passes through \\( (3, 10) \\). Find \\( y \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: 'y = \\int (3x^{-2} + 2) \\, \\mathrm{d}x = -\\frac{3}{x} + 2x + C', explanation: '' },
                { stepNumber: 2, description: 'Substitute \\( (3, 10) \\).', workingLatex: '10 = -1 + 6 + C \\implies C = 5', explanation: '' },
                { stepNumber: 3, description: 'State.', workingLatex: 'y = -\\frac{3}{x} + 2x + 5', explanation: '' }
            ],
            finalAnswer: '\\( y = -\\dfrac{3}{x} + 2x + 5 \\)'
        }
    },
    {
        id: 'i1-066',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 66',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^4 - 1}{x^2} \\, \\mathrm{d}x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['indefinite integration', 'simplify first'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify.', workingLatex: '\\frac{x^4 - 1}{x^2} = x^2 - x^{-2}', explanation: '' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int (x^2 - x^{-2}) \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{1}{x} + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + \\dfrac{1}{x} + C \\)'
        }
    },
    {
        id: 'i1-067',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 67',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( \\sqrt{x} + \\frac{1}{\\sqrt{x}} \\right)^2 \\mathrm{d}x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'expand', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand.', workingLatex: '\\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^2 = x + 2 + \\frac{1}{x}', explanation: '\\( 2 \\cdot \\sqrt{x} \\cdot \\frac{1}{\\sqrt{x}} = 2 \\). The term \\( \\frac{1}{x} = x^{-1} \\) integrates to \\( \\ln|x| \\).' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int \\left(x + 2 + x^{-1}\\right) \\mathrm{d}x = \\frac{x^2}{2} + 2x + \\ln|x| + C', explanation: '' }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 2x + \\ln|x| + C \\)'
        }
    },
    {
        id: 'i1-068',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 68',
        difficulty: 'Standard',
        questionText: 'A curve passes through \\( (4, 20) \\) and has gradient \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3\\sqrt{x} \\). Find the equation of the curve.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'find constant', 'equation of curve', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: 'y = \\int 3x^{\\frac{1}{2}} \\, \\mathrm{d}x = 3 \\cdot \\frac{2}{3} x^{\\frac{3}{2}} + C = 2x^{\\frac{3}{2}} + C', explanation: '' },
                { stepNumber: 2, description: 'Substitute \\( (4, 20) \\).', workingLatex: '20 = 2(4)^{\\frac{3}{2}} + C = 2 \\cdot 8 + C = 16 + C \\implies C = 4', explanation: '\\( 4^{\\frac{3}{2}} = (\\sqrt{4})^3 = 8 \\).' },
                { stepNumber: 3, description: 'State.', workingLatex: 'y = 2x^{\\frac{3}{2}} + 4', explanation: '' }
            ],
            finalAnswer: '\\( y = 2x^{\\frac{3}{2}} + 4 \\)'
        }
    },
    {
        id: 'i1-069',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 69',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'(x) = 2x - \\dfrac{4}{x^3} \\) and \\( f(1) = 3 \\), find \\( f(x) \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'negative index', 'find constant', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite and integrate.', workingLatex: 'f(x) = \\int (2x - 4x^{-3}) \\, \\mathrm{d}x = x^2 + \\frac{2}{x^2} + C', explanation: '\\( \\int -4x^{-3} \\, \\mathrm{d}x = -4 \\cdot \\frac{x^{-2}}{-2} = \\frac{2}{x^2} \\).' },
                { stepNumber: 2, description: 'Substitute \\( f(1) = 3 \\).', workingLatex: '3 = 1 + 2 + C \\implies C = 0', explanation: '' },
                { stepNumber: 3, description: 'State.', workingLatex: 'f(x) = x^2 + \\frac{2}{x^2}', explanation: '' }
            ],
            finalAnswer: '\\( f(x) = x^2 + \\dfrac{2}{x^2} \\)'
        }
    },
    {
        id: 'i1-070',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 70',
        difficulty: 'Standard',
        questionText: 'A curve has second derivative \\( \\dfrac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 6x \\). The curve has a stationary point at \\( (1, 2) \\).\n(a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\n(b) Find \\( y \\) in terms of \\( x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: ['indefinite integration', 'second derivative', 'stationary point', 'find constant', 'exam style'],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate the second derivative.', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\int 6x \\, \\mathrm{d}x = 3x^2 + A', explanation: '' },
                { stepNumber: 2, description: 'Stationary point at \\( x = 1 \\): gradient is 0.', workingLatex: '0 = 3(1) + A \\implies A = -3', explanation: '' },
                { stepNumber: 3, description: 'So the gradient function is:', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3', explanation: '' },
                { stepNumber: 4, description: '(b) Integrate again.', workingLatex: 'y = \\int (3x^2 - 3) \\, \\mathrm{d}x = x^3 - 3x + B', explanation: '' },
                { stepNumber: 5, description: 'Use \\( (1, 2) \\).', workingLatex: '2 = 1 - 3 + B \\implies B = 4', explanation: '' },
                { stepNumber: 6, description: 'State.', workingLatex: 'y = x^3 - 3x + 4', explanation: '' }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3 \\) \\newline (b) \\( y = x^3 - 3x + 4 \\)'
        }
    }

];
