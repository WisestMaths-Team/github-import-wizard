import { Question } from "@/lib/types";

/**
 * Topic: Indefinite Integration
 * Ref:   i1
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
        tags: [],
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
        tags: [],
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
        tags: [],
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
        tags: [],
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
        tags: [],
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the power rule with \\( n = -3 \\).',
                    workingLatex: '\\int x^{-3} \\, \\mathrm{d}x = \\frac{x^{-2}}{-2} + C',
                    explanation: 'Increase the index from \\(-3\\) to \\(-2\\) and divide by the new index \\(-2\\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rewrite with a positive power in the denominator.',
                    workingLatex: '= -\\frac{1}{2x^2} + C',
                    explanation: 'Using \\( x^{-2} = \\dfrac{1}{x^2} \\), the answer is written in a simpler form.'
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
        tags: [],
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
        tags: [],
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
        tags: [],
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the integral into separate terms.',
                    workingLatex: '\\int 4x^3 \\, \\mathrm{d}x - \\int 6x^2 \\, \\mathrm{d}x + \\int 1 \\, \\mathrm{d}x',
                    explanation: 'The integral of a sum or difference equals the sum or difference of the integrals.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to each term.',
                    workingLatex: '= 4 \\cdot \\frac{x^4}{4} - 6 \\cdot \\frac{x^3}{3} + x + C',
                    explanation: 'Increase each index by 1 and divide by the new index. The constant 1 integrates to \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the coefficients.',
                    workingLatex: '= x^4 - 2x^3 + x + C',
                    explanation: '\\( 4 \\div 4 = 1 \\) and \\( 6 \\div 3 = 2 \\). Only one constant of integration is needed.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the brackets.',
                    workingLatex: '(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6',
                    explanation: 'Use FOIL or multiply each term in the first bracket by each term in the second.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term using the power rule.',
                    workingLatex: '\\int (x^2 + x - 6) \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{x^2}{2} - 6x + C',
                    explanation: 'Increase each index by 1 and divide by the new index. The constant \\(-6\\) integrates to \\(-6x\\).'
                },
                {
                    stepNumber: 3,
                    description: 'State the final answer.',
                    workingLatex: '= \\frac{x^3}{3} + \\frac{x^2}{2} - 6x + C',
                    explanation: 'No further simplification is needed. Remember to include the constant of integration.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the expression.',
                    workingLatex: 'x^2(3x - 5) = 3x^3 - 5x^2',
                    explanation: 'Multiply \\( x^2 \\) by each term inside the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term using the power rule.',
                    workingLatex: '\\int (3x^3 - 5x^2) \\, \\mathrm{d}x = 3 \\cdot \\frac{x^4}{4} - 5 \\cdot \\frac{x^3}{3} + C',
                    explanation: 'Increase each index by 1 and divide by the new index.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the coefficients.',
                    workingLatex: '= \\frac{3x^4}{4} - \\frac{5x^3}{3} + C',
                    explanation: 'The fractions \\( \\tfrac{3}{4} \\) and \\( \\tfrac{5}{3} \\) are already in simplest form.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (2x-1)^2 \\).',
                    workingLatex: '(2x-1)^2 = 4x^2 - 4x + 1',
                    explanation: 'Apply \\( (a-b)^2 = a^2 - 2ab + b^2 \\) with \\( a = 2x \\) and \\( b = 1 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term using the power rule.',
                    workingLatex: '\\int (4x^2 - 4x + 1) \\, \\mathrm{d}x = 4 \\cdot \\frac{x^3}{3} - 4 \\cdot \\frac{x^2}{2} + x + C',
                    explanation: 'Increase each index by 1 and divide by the new index.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the coefficients.',
                    workingLatex: '= \\frac{4x^3}{3} - 2x^2 + x + C',
                    explanation: '\\( \\tfrac{4}{2} = 2 \\). The other coefficients are already in simplest form.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Split the integral into separate terms.',
                    workingLatex: '\\int x^{1/3} \\, \\mathrm{d}x + \\int 2x \\, \\mathrm{d}x',
                    explanation: 'The integral of a sum equals the sum of the integrals.'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to the first term.',
                    workingLatex: '\\int x^{1/3} \\, \\mathrm{d}x = \\frac{x^{4/3}}{4/3} = \\frac{3}{4}x^{4/3}',
                    explanation: 'The new index is \\( \\tfrac{1}{3} + 1 = \\tfrac{4}{3} \\). Dividing by \\( \\tfrac{4}{3} \\) is the same as multiplying by \\( \\tfrac{3}{4} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the power rule to the second term and combine.',
                    workingLatex: '\\int 2x \\, \\mathrm{d}x = x^2 \\quad \\Rightarrow \\quad \\frac{3}{4}x^{4/3} + x^2 + C',
                    explanation: 'For \\( 2x \\): \\( 2 \\cdot \\dfrac{x^2}{2} = x^2 \\). Combine both results and add the constant of integration.'
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
        tags: [],
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
                    description: 'Integrate \\( x^2 \\) using the power rule.',
                    workingLatex: '\\int x^2 \\, \\mathrm{d}x = \\frac{x^3}{3}',
                    explanation: 'Increase the index from 2 to 3 and divide by the new index 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate the constant and combine.',
                    workingLatex: '\\int (x^2 - 4) \\, \\mathrm{d}x = \\frac{x^3}{3} - 4x + C',
                    explanation: 'The integral of \\( -4 \\) with respect to \\( x \\) is \\( -4x \\). Combine both results and include the constant of integration.'
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
        tags: [],
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
                    description: 'Integrate each term using the power rule.',
                    workingLatex: '\\int (2x^3 + x) \\, \\mathrm{d}x = 2 \\cdot \\frac{x^4}{4} + \\frac{x^2}{2} + C',
                    explanation: 'For \\( 2x^3 \\), increase the index to 4 and divide by 4. For \\( x \\), increase the index to 2 and divide by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= \\frac{x^4}{2} + \\frac{x^2}{2} + C',
                    explanation: '\\( 2 \\cdot \\dfrac{x^4}{4} = \\dfrac{x^4}{2} \\). Include the constant of integration \\( C \\).'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite using index notation.',
                    workingLatex: '3x^{1/2} - 2x^{-2}',
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{x^2} = x^{-2} \\). This allows us to apply the power rule directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate the first term.',
                    workingLatex: '\\int 3x^{1/2} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{3/2}}{3/2} = 2x^{3/2}',
                    explanation: 'Increase the index from \\( \\tfrac{1}{2} \\) to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\). Then \\( 3 \\times \\tfrac{2}{3} = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate the second term.',
                    workingLatex: '\\int -2x^{-2} \\, \\mathrm{d}x = -2 \\cdot \\frac{x^{-1}}{-1} = \\frac{2}{x}',
                    explanation: 'Increase the index from \\( -2 \\) to \\( -1 \\) and divide by \\( -1 \\). Then \\( -2 \\div (-1) = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Combine the results.',
                    workingLatex: '2x^{3/2} + \\frac{2}{x} + C',
                    explanation: 'Add the two integrals together and include the constant of integration \\( C \\).'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand by multiplying \\( x^{1/2} \\) through the bracket.',
                    workingLatex: '\\sqrt{x}(x+4) = x^{3/2} + 4x^{1/2}',
                    explanation: '\\( x^{1/2} \\cdot x = x^{3/2} \\) and \\( x^{1/2} \\cdot 4 = 4x^{1/2} \\). Use the index law \\( x^a \\cdot x^b = x^{a+b} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate the first term.',
                    workingLatex: '\\int x^{3/2} \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} = \\frac{2}{5}x^{5/2}',
                    explanation: 'Increase the index from \\( \\tfrac{3}{2} \\) to \\( \\tfrac{5}{2} \\) and divide by \\( \\tfrac{5}{2} \\), which is the same as multiplying by \\( \\tfrac{2}{5} \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate the second term.',
                    workingLatex: '\\int 4x^{1/2} \\, \\mathrm{d}x = 4 \\cdot \\frac{x^{3/2}}{3/2} = \\frac{8}{3}x^{3/2}',
                    explanation: 'Increase the index from \\( \\tfrac{1}{2} \\) to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\). Then \\( 4 \\times \\tfrac{2}{3} = \\tfrac{8}{3} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Combine the results.',
                    workingLatex: '\\frac{2}{5}x^{5/2} + \\frac{8}{3}x^{3/2} + C',
                    explanation: 'Add the two integrals together and include the constant of integration \\( C \\).'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each term in the numerator by \\( x^{1/2} \\).',
                    workingLatex: '\\frac{x^2 + 5x + 6}{\\sqrt{x}} = x^{3/2} + 5x^{1/2} + 6x^{-1/2}',
                    explanation: '\\( \\dfrac{x^2}{x^{1/2}} = x^{3/2} \\), \\( \\dfrac{5x}{x^{1/2}} = 5x^{1/2} \\), \\( \\dfrac{6}{x^{1/2}} = 6x^{-1/2} \\). Subtract \\( \\tfrac{1}{2} \\) from each index.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate the first term.',
                    workingLatex: '\\int x^{3/2} \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} = \\frac{2}{5}x^{5/2}',
                    explanation: 'Increase the index from \\( \\tfrac{3}{2} \\) to \\( \\tfrac{5}{2} \\) and divide by the new index.'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate the remaining terms.',
                    workingLatex: '\\int 5x^{1/2} \\, \\mathrm{d}x = \\frac{10}{3}x^{3/2}, \\quad \\int 6x^{-1/2} \\, \\mathrm{d}x = 12x^{1/2}',
                    explanation: 'For \\( 5x^{1/2} \\): \\( 5 \\times \\tfrac{2}{3} = \\tfrac{10}{3} \\). For \\( 6x^{-1/2} \\): \\( 6 \\times \\tfrac{1}{1/2} = 12 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Combine all terms.',
                    workingLatex: '\\frac{2}{5}x^{5/2} + \\frac{10}{3}x^{3/2} + 12x^{1/2} + C',
                    explanation: 'Write all three integrated terms together with the constant of integration \\( C \\). Note that \\( x^{1/2} = \\sqrt{x} \\).'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate the right-hand side with respect to \\( x \\).',
                    workingLatex: 'y = \\int (6x^2 - 4x + 3) \\, \\mathrm{d}x',
                    explanation: 'Since \\( y \\) is the integral of \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\), we integrate each term of \\( 6x^2 - 4x + 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the power rule to each term.',
                    workingLatex: 'y = 6 \\cdot \\frac{x^3}{3} - 4 \\cdot \\frac{x^2}{2} + 3x + C',
                    explanation: 'Increase each power by 1 and divide by the new power. The constant 3 integrates to \\( 3x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: 'y = 2x^3 - 2x^2 + 3x + C',
                    explanation: '\\( \\dfrac{6}{3} = 2 \\) and \\( \\dfrac{4}{2} = 2 \\). Remember to include the constant of integration \\( C \\).'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set up the integral.',
                    workingLatex: 'f(x) = \\int (4x - 1) \\, \\mathrm{d}x',
                    explanation: 'To recover \\( f(x) \\) from \\( f\'(x) \\), we integrate the gradient function.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term using the power rule.',
                    workingLatex: 'f(x) = 2x^2 - x + C',
                    explanation: '\\( \\int 4x \\, \\mathrm{d}x = 4 \\cdot \\dfrac{x^2}{2} = 2x^2 \\) and \\( \\int -1 \\, \\mathrm{d}x = -x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (0, 3) \\) to find \\( C \\).',
                    workingLatex: 'f(0) = 3: \\quad 0 - 0 + C = 3 \\implies C = 3',
                    explanation: 'Substitute \\( x = 0 \\) and \\( f(0) = 3 \\) into the expression. Every term except \\( C \\) vanishes.'
                },
                {
                    stepNumber: 4,
                    description: 'Write the full equation.',
                    workingLatex: 'f(x) = 2x^2 - x + 3',
                    explanation: 'Replace \\( C \\) with 3 to obtain the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Integrate the gradient function.',
                    workingLatex: 'f(x) = \\int (3x^2 - 6x + 1) \\, \\mathrm{d}x = x^3 - 3x^2 + x + C',
                    explanation: 'Apply the power rule: \\( 3 \\cdot \\dfrac{x^3}{3} = x^3 \\), \\( 6 \\cdot \\dfrac{x^2}{2} = 3x^2 \\), and \\( \\int 1 \\, \\mathrm{d}x = x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute the point \\( (2, 5) \\) to find \\( C \\).',
                    workingLatex: '5 = 8 - 12 + 2 + C \\implies 5 = -2 + C \\implies C = 7',
                    explanation: 'Evaluate \\( f(2) = 2^3 - 3(2^2) + 2 + C = 8 - 12 + 2 + C = -2 + C \\). Setting this equal to 5 gives \\( C = 7 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Verify the substitution.',
                    workingLatex: 'f(2) = 8 - 12 + 2 + 7 = 5 \\; \\checkmark',
                    explanation: 'Check that the answer satisfies \\( f(2) = 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^3 - 3x^2 + x + 7',
                    explanation: 'Substitute \\( C = 7 \\) to write the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: "f'(x) = 6x^2 - 12x",
                    explanation: 'Distribute \\( 6x \\) across the bracket: \\( 6x \\cdot x = 6x^2 \\) and \\( 6x \\cdot (-2) = -12x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: 'f(x) = \\int (6x^2 - 12x) \\, \\mathrm{d}x = 2x^3 - 6x^2 + C',
                    explanation: '\\( 6 \\cdot \\dfrac{x^3}{3} = 2x^3 \\) and \\( 12 \\cdot \\dfrac{x^2}{2} = 6x^2 \\). Include the constant of integration.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, -2) \\) to find \\( C \\).',
                    workingLatex: '-2 = 2(1) - 6(1) + C = -4 + C \\implies C = 2',
                    explanation: 'Substitute \\( x = 1 \\) and \\( f(1) = -2 \\). Then \\( -2 = 2 - 6 + C = -4 + C \\), so \\( C = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer.',
                    workingLatex: 'f(x) = 2x^3 - 6x^2 + 2',
                    explanation: 'Replace \\( C \\) with 2 to obtain the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{1}{\\sqrt{x}} \\) in index form and set up the integral.',
                    workingLatex: 'y = \\int x^{-1/2} \\, \\mathrm{d}x',
                    explanation: 'Write \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\) so that the power rule can be applied directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate using the power rule.',
                    workingLatex: 'y = \\frac{x^{1/2}}{1/2} + C = 2\\sqrt{x} + C',
                    explanation: 'Increase the index from \\( -\\tfrac{1}{2} \\) to \\( \\tfrac{1}{2} \\) and divide by \\( \\tfrac{1}{2} \\), which is the same as multiplying by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (4, 10) \\) to find \\( C \\).',
                    workingLatex: '10 = 2\\sqrt{4} + C = 4 + C \\implies C = 6',
                    explanation: 'Substitute \\( x = 4 \\) and \\( y = 10 \\). Since \\( \\sqrt{4} = 2 \\), we get \\( 10 = 4 + C \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write the equation of the curve.',
                    workingLatex: 'y = 2\\sqrt{x} + 6',
                    explanation: 'Replace \\( C \\) with 6 to obtain the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{5}{x^2} \\) in index form.',
                    workingLatex: "f'(x) = 2x - 5x^{-2}",
                    explanation: 'Write \\( \\dfrac{5}{x^2} = 5x^{-2} \\) so that the power rule can be applied.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate \\( 2x \\).',
                    workingLatex: '\\int 2x \\, \\mathrm{d}x = x^2',
                    explanation: 'Increase the index from 1 to 2 and divide by 2, giving \\( 2 \\cdot \\dfrac{x^2}{2} = x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate \\( -5x^{-2} \\) and combine.',
                    workingLatex: 'f(x) = x^2 - 5 \\cdot \\frac{x^{-1}}{-1} + C = x^2 + \\frac{5}{x} + C',
                    explanation: 'Increase the index from \\( -2 \\) to \\( -1 \\) and divide by \\( -1 \\). Then \\( -5 \\div (-1) = 5 \\), giving \\( \\dfrac{5}{x} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Use the point \\( (3, 4) \\) to find \\( C \\).',
                    workingLatex: '4 = 9 + \\frac{5}{3} + C \\implies C = 4 - 9 - \\frac{5}{3} = -5 - \\frac{5}{3} = -\\frac{20}{3}',
                    explanation: 'Substitute \\( x = 3 \\) and \\( f(3) = 4 \\). Combine \\( -5 = -\\dfrac{15}{3} \\) with \\( -\\dfrac{5}{3} \\) to get \\( -\\dfrac{20}{3} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^2 + \\frac{5}{x} - \\frac{20}{3}',
                    explanation: 'Replace \\( C \\) with \\( -\\dfrac{20}{3} \\) to write the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( \\sqrt{t} = t^{1/2} \\) and integrate.',
                    workingLatex: 'y = \\int (t^{1/2} - 3) \\, \\mathrm{d}t = \\frac{2}{3}t^{3/2} - 3t + C',
                    explanation: 'For \\( t^{1/2} \\), increase the index to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\), giving \\( \\tfrac{2}{3}t^{3/2} \\). The constant \\( -3 \\) integrates to \\( -3t \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Use \\( y = 9 \\) when \\( t = 4 \\).',
                    workingLatex: '9 = \\frac{2}{3}(8) - 12 + C = \\frac{16}{3} - 12 + C',
                    explanation: 'Substitute \\( t = 4 \\): \\( 4^{3/2} = (\\sqrt{4})^3 = 8 \\), so the first term is \\( \\tfrac{16}{3} \\), and \\( 3 \\times 4 = 12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 9 - \\frac{16}{3} + 12 = 21 - \\frac{16}{3} = \\frac{63 - 16}{3} = \\frac{47}{3}',
                    explanation: 'Rearrange to isolate \\( C \\). Write \\( 21 = \\dfrac{63}{3} \\) so the fractions can be combined.'
                },
                {
                    stepNumber: 4,
                    description: 'State \\( y \\).',
                    workingLatex: 'y = \\frac{2}{3}t^{3/2} - 3t + \\frac{47}{3}',
                    explanation: 'Replace \\( C \\) with \\( \\dfrac{47}{3} \\) to write the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( f\'(x) \\).',
                    workingLatex: '(2x+1)(x-3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3',
                    explanation: 'Multiply each term in the first bracket by each term in the second and collect like terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term.',
                    workingLatex: 'f(x) = \\int (2x^2 - 5x - 3) \\, \\mathrm{d}x = \\frac{2x^3}{3} - \\frac{5x^2}{2} - 3x + C',
                    explanation: 'Apply the power rule: \\( 2 \\cdot \\dfrac{x^3}{3} = \\dfrac{2x^3}{3} \\), \\( 5 \\cdot \\dfrac{x^2}{2} = \\dfrac{5x^2}{2} \\), and \\( \\int 3 \\, \\mathrm{d}x = 3x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, 3) \\) to find \\( C \\).',
                    workingLatex: '3 = \\frac{2}{3} - \\frac{5}{2} - 3 + C',
                    explanation: 'Substitute \\( x = 1 \\) and \\( f(1) = 3 \\) into the integrated expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 3 - \\frac{2}{3} + \\frac{5}{2} + 3 = 6 + \\frac{-4 + 15}{6} = 6 + \\frac{11}{6} = \\frac{47}{6}',
                    explanation: 'Rearrange and find a common denominator of 6: \\( -\\dfrac{2}{3} = -\\dfrac{4}{6} \\) and \\( \\dfrac{5}{2} = \\dfrac{15}{6} \\). Then \\( 6 + \\dfrac{11}{6} = \\dfrac{47}{6} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the equation.',
                    workingLatex: 'f(x) = \\frac{2x^3}{3} - \\frac{5x^2}{2} - 3x + \\frac{47}{6}',
                    explanation: 'Replace \\( C \\) with \\( \\dfrac{47}{6} \\) to write the particular solution.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite in index notation.',
                    workingLatex: "f'(x) = x^{1/2} + x^{-1/2}",
                    explanation: '\\( \\sqrt{x} = x^{1/2} \\) and \\( \\dfrac{1}{\\sqrt{x}} = x^{-1/2} \\). This allows us to use the power rule.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term using the power rule.',
                    workingLatex: 'f(x) = \\frac{x^{3/2}}{3/2} + \\frac{x^{1/2}}{1/2} + C = \\frac{2}{3}x^{3/2} + 2x^{1/2} + C',
                    explanation: 'For \\( x^{1/2} \\): increase the index to \\( \\tfrac{3}{2} \\) and divide by \\( \\tfrac{3}{2} \\). For \\( x^{-1/2} \\): increase the index to \\( \\tfrac{1}{2} \\) and divide by \\( \\tfrac{1}{2} \\).'
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
                    explanation: 'Combine \\( 9 - 4 = 5 \\), then write \\( 5 = \\dfrac{15}{3} \\) to subtract \\( \\dfrac{16}{3} \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = \\frac{2}{3}x^{3/2} + 2\\sqrt{x} - \\frac{1}{3}',
                    explanation: 'Replace \\( C \\) with \\( -\\dfrac{1}{3} \\) to write the particular solution.'
                }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{2}{3}x^{3/2} + 2\\sqrt{x} - \\dfrac{1}{3} \\)'
        }
    },
    {
        id: 'i1-029',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 29',
        difficulty: 'Standard',
        questionText: 'Given that \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - \\frac{4}{x^2} + 1 \\) and the curve passes through the point \\( (2, 5) \\), find \\( y \\) in terms of \\( x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite the derivative using negative powers.',
                    workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4x^{-2} + 1',
                    explanation: 'Express \\( \\frac{4}{x^2} \\) as \\( 4x^{-2} \\) so that the power rule can be applied to each term.'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate each term with respect to \\( x \\).',
                    workingLatex: 'y = \\int \\left(3x^2 - 4x^{-2} + 1\\right) \\mathrm{d}x = \\frac{3x^3}{3} - \\frac{4x^{-1}}{-1} + x + C',
                    explanation: 'Apply the power rule \\( \\int x^n \\, \\mathrm{d}x = \\frac{x^{n+1}}{n+1} \\) to each term and add the constant of integration \\( C \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the integrated expression.',
                    workingLatex: 'y = x^3 + 4x^{-1} + x + C = x^3 + \\frac{4}{x} + x + C',
                    explanation: 'Simplify each coefficient and rewrite \\( 4x^{-1} \\) as \\( \\frac{4}{x} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute the point \\( (2, 5) \\) to find \\( C \\).',
                    workingLatex: '5 = (2)^3 + \\frac{4}{2} + 2 + C = 8 + 2 + 2 + C',
                    explanation: 'The curve passes through \\( (2, 5) \\), so substitute \\( x = 2 \\) and \\( y = 5 \\) into the equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( C \\).',
                    workingLatex: '5 = 12 + C \\implies C = -7',
                    explanation: 'Rearrange to find the value of the constant of integration.'
                },
                {
                    stepNumber: 6,
                    description: 'State the equation of the curve.',
                    workingLatex: 'y = x^3 + \\frac{4}{x} + x - 7',
                    explanation: 'Substitute \\( C = -7 \\) back into the expression for \\( y \\).'
                }
            ],
            finalAnswer: '\\( y = x^3 + \\dfrac{4}{x} + x - 7 \\)'
        }
    },
    {
        id: 'i1-030',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 30',
        difficulty: 'Standard',
        questionText: 'The gradient of a curve is given by \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\frac{(x+1)(x-3)}{\\sqrt{x}} \\). Given that \\( y = 10 \\) when \\( x = 4 \\), find \\( y \\) in terms of \\( x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the numerator.',
                    workingLatex: '(x+1)(x-3) = x^2 - 3x + x - 3 = x^2 - 2x - 3',
                    explanation: 'Multiply out the brackets in the numerator to obtain a polynomial.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide each term by \\( \\sqrt{x} \\) and rewrite using index notation.',
                    workingLatex: '\\frac{x^2 - 2x - 3}{x^{1/2}} = x^{3/2} - 2x^{1/2} - 3x^{-1/2}',
                    explanation: 'Divide each term by \\( x^{1/2} \\) by subtracting \\( \\frac{1}{2} \\) from each power.'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate each term using the power rule.',
                    workingLatex: 'y = \\int \\left(x^{3/2} - 2x^{1/2} - 3x^{-1/2}\\right) \\mathrm{d}x = \\frac{x^{5/2}}{\\frac{5}{2}} - \\frac{2x^{3/2}}{\\frac{3}{2}} - \\frac{3x^{1/2}}{\\frac{1}{2}} + C',
                    explanation: 'Apply \\( \\int x^n \\, \\mathrm{d}x = \\frac{x^{n+1}}{n+1} \\) to each term and add the constant \\( C \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the coefficients.',
                    workingLatex: 'y = \\frac{2}{5}x^{5/2} - \\frac{4}{3}x^{3/2} - 6x^{1/2} + C',
                    explanation: 'Dividing by \\( \\frac{5}{2} \\) gives \\( \\frac{2}{5} \\), dividing \\( 2 \\) by \\( \\frac{3}{2} \\) gives \\( \\frac{4}{3} \\), and dividing \\( 3 \\) by \\( \\frac{1}{2} \\) gives \\( 6 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( x = 4 \\), \\( y = 10 \\) to find \\( C \\).',
                    workingLatex: '10 = \\frac{2}{5}(32) - \\frac{4}{3}(8) - 6(2) + C = \\frac{64}{5} - \\frac{32}{3} - 12 + C',
                    explanation: 'Since \\( 4^{5/2} = 32 \\), \\( 4^{3/2} = 8 \\), and \\( 4^{1/2} = 2 \\), substitute these values along with \\( y = 10 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find a common denominator and solve for \\( C \\).',
                    workingLatex: '10 = \\frac{192}{15} - \\frac{160}{15} - \\frac{180}{15} + C = -\\frac{148}{15} + C \\implies C = 10 + \\frac{148}{15} = \\frac{298}{15}',
                    explanation: 'Convert to fifteenths: \\( \\frac{64}{5} = \\frac{192}{15} \\), \\( \\frac{32}{3} = \\frac{160}{15} \\), \\( 12 = \\frac{180}{15} \\). Then solve for \\( C \\).'
                },
                {
                    stepNumber: 7,
                    description: 'State the equation of the curve.',
                    workingLatex: 'y = \\frac{2}{5}x^{5/2} - \\frac{4}{3}x^{3/2} - 6x^{1/2} + \\frac{298}{15}',
                    explanation: 'Substitute the value of \\( C \\) back into the integrated expression to obtain the final answer.'
                }
            ],
            finalAnswer: '\\( y = \\dfrac{2}{5}x^{5/2} - \\dfrac{4}{3}x^{3/2} - 6x^{1/2} + \\dfrac{298}{15} \\)'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Divide each numerator term by \\( x^2 \\).',
                    workingLatex: '\\frac{x^3 + 2x^2 - x}{x^2} = x + 2 - x^{-1}',
                    explanation: '\\( \\dfrac{x^3}{x^2} = x \\), \\( \\dfrac{2x^2}{x^2} = 2 \\), \\( \\dfrac{-x}{x^2} = -x^{-1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Integrate \\( x \\) and \\( 2 \\) using the power rule.',
                    workingLatex: '\\int x \\, \\mathrm{d}x = \\frac{x^2}{2}, \\quad \\int 2 \\, \\mathrm{d}x = 2x',
                    explanation: 'These are standard power-rule integrals.'
                },
                {
                    stepNumber: 3,
                    description: 'Integrate \\( -x^{-1} \\) using the standard result \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| \\).',
                    workingLatex: '\\int -x^{-1} \\, \\mathrm{d}x = -\\ln|x|',
                    explanation: 'The power rule does not apply when \\( n = -1 \\). Instead, \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| \\) is a standard result.'
                },
                {
                    stepNumber: 4,
                    description: 'Combine all terms.',
                    workingLatex: '\\frac{x^2}{2} + 2x - \\ln|x| + C',
                    explanation: 'Collect the results from each term and add the constant of integration.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( x = 2 \\) into \\( f\'(x) \\).',
                    workingLatex: "f'(2) = 3(2)^2 + 2k - 4 = 12 + 2k - 4 = 8 + 2k",
                    explanation: 'Evaluate each term at \\( x = 2 \\) and simplify.'
                },
                {
                    stepNumber: 2,
                    description: 'Set \\( f\'(2) = 12 \\) and solve for \\( k \\).',
                    workingLatex: '8 + 2k = 12 \\implies 2k = 4 \\implies k = 2',
                    explanation: 'Rearrange to find the value of the constant \\( k \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Write \\( f\'(x) \\) with \\( k = 2 \\) and integrate.',
                    workingLatex: "f'(x) = 3x^2 + 2x - 4 \\implies f(x) = x^3 + x^2 - 4x + C",
                    explanation: 'Apply the power rule to each term and add the constant of integration.'
                },
                {
                    stepNumber: 4,
                    description: 'Use \\( f(0) = 5 \\) to find \\( C \\).',
                    workingLatex: '5 = 0 + 0 - 0 + C \\implies C = 5',
                    explanation: 'The curve passes through \\( (0, 5) \\), so substitute \\( x = 0 \\) and \\( f(0) = 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State \\( k \\) and \\( f(x) \\).',
                    workingLatex: 'k = 2, \\quad f(x) = x^3 + x^2 - 4x + 5',
                    explanation: 'Substitute \\( C = 5 \\) to give the final expression for \\( f(x) \\).'
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
        tags: [],
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
                    explanation: 'Apply the power rule to each term and add the constant of integration.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the point \\( (1, -1) \\).',
                    workingLatex: '-1 = \\frac{5}{3} + \\frac{9}{2} - 2 + C',
                    explanation: 'Substitute \\( x = 1 \\) and \\( f(1) = -1 \\) since the curve passes through \\( (1, -1) \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = -1 - \\frac{5}{3} - \\frac{9}{2} + 2 = 1 - \\frac{10}{6} - \\frac{27}{6} = 1 - \\frac{37}{6} = -\\frac{31}{6}',
                    explanation: 'Rearrange and use a common denominator of 6 to combine the fractions.'
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
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite \\( \\dfrac{4}{x^2} = 4x^{-2} \\).',
                    workingLatex: "f'(x) = x^2 - 4x^{-2}",
                    explanation: 'Express the fraction using a negative index so the power rule can be applied.'
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
                    explanation: 'Rearrange and simplify. \\( 3 - 2 = 1 \\), then \\( 1 - \\frac{8}{3} = \\frac{3 - 8}{3} = -\\frac{5}{3} \\).'
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
        questionText: 'A function \\( f \\) has gradient function \\( f\'(x) = 4x^3 + kx^2 - 2k \\), where \\( k \\) is a constant. The curve \\( y = f(x) \\) passes through \\( (1, 6) \\) with gradient \\( 12 \\).\n(a) Find the value of \\( k \\).\n(b) Find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) The gradient at \\( x = 1 \\) is \\( f\'(1) = 12 \\).',
                    workingLatex: '4(1)^3 + k(1)^2 - 2k = 12 \\implies 4 + k - 2k = 12',
                    explanation: 'Substitute \\( x = 1 \\) into \\( f\'(x) \\) and set equal to the given gradient of 12.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '4 - k = 12 \\implies -k = 8 \\implies k = -8',
                    explanation: 'Simplify and rearrange to find \\( k \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Write the gradient function with \\( k = -8 \\).',
                    workingLatex: "f'(x) = 4x^3 - 8x^2 + 16",
                    explanation: 'Substitute \\( k = -8 \\) into \\( f\'(x) = 4x^3 + kx^2 - 2k \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Integrate to find \\( f(x) \\).',
                    workingLatex: 'f(x) = x^4 - \\frac{8}{3}x^3 + 16x + C',
                    explanation: 'Apply the power rule to each term and add the constant of integration.'
                },
                {
                    stepNumber: 5,
                    description: 'Use \\( f(1) = 6 \\) to find \\( C \\).',
                    workingLatex: '6 = 1 - \\frac{8}{3} + 16 + C = 17 - \\frac{8}{3} + C = \\frac{43}{3} + C',
                    explanation: 'Substitute \\( x = 1 \\) and \\( f(1) = 6 \\) since the curve passes through \\( (1, 6) \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Solve for \\( C \\).',
                    workingLatex: 'C = 6 - \\frac{43}{3} = \\frac{18 - 43}{3} = -\\frac{25}{3}',
                    explanation: 'Rearrange to find the constant of integration.'
                },
                {
                    stepNumber: 7,
                    description: 'State the equation.',
                    workingLatex: 'f(x) = x^4 - \\frac{8}{3}x^3 + 16x - \\frac{25}{3}',
                    explanation: 'Substitute \\( C = -\\dfrac{25}{3} \\) to give the final answer.'
                }
            ],
            finalAnswer: '(a) \\( k = -8 \\) \\newline (b) \\( f(x) = x^4 - \\dfrac{8}{3}x^3 + 16x - \\dfrac{25}{3} \\)'
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
        tags: [],
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule to each term.', workingLatex: '\\int 3x^2 \\, \\mathrm{d}x = x^3, \\quad \\int 4x \\, \\mathrm{d}x = 2x^2, \\quad \\int -1 \\, \\mathrm{d}x = -x', explanation: 'For each term, increase the power by one and divide by the new power.' },
                { stepNumber: 2, description: 'Combine and add the constant of integration.', workingLatex: '\\int (3x^2 + 4x - 1) \\, \\mathrm{d}x = x^3 + 2x^2 - x + C', explanation: 'Collect all terms together and include \\( + C \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'A constant integrates to the constant times \\( x \\).', workingLatex: '\\int 10 \\, \\mathrm{d}x = 10x + C', explanation: 'Since \\( 10 = 10x^0 \\), integrating gives \\( 10x + C \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule with \\( n = -3 \\).', workingLatex: '\\int x^{-3} \\, \\mathrm{d}x = \\frac{x^{-2}}{-2} + C', explanation: 'Increase the index: \\( -3 + 1 = -2 \\), then divide by \\( -2 \\).' },
                { stepNumber: 2, description: 'Rewrite with a positive power in the denominator.', workingLatex: '\\frac{x^{-2}}{-2} + C = -\\frac{1}{2x^2} + C', explanation: 'Express the negative index as a fraction: \\( x^{-2} = \\dfrac{1}{x^2} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule: increase the index by one.', workingLatex: '\\int x^{\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C', explanation: 'The new index is \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\). Divide by \\( \\frac{3}{2} \\).' },
                { stepNumber: 2, description: 'Simplify the fraction.', workingLatex: '\\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{2}{3} x^{\\frac{3}{2}} + C', explanation: 'Dividing by \\( \\frac{3}{2} \\) is the same as multiplying by \\( \\frac{2}{3} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Apply the power rule to each term separately.', workingLatex: '\\int 6x^5 \\, \\mathrm{d}x = x^6, \\quad \\int -2x \\, \\mathrm{d}x = -x^2, \\quad \\int 3 \\, \\mathrm{d}x = 3x', explanation: 'For each term, increase the power by one and divide by the new power.' },
                { stepNumber: 2, description: 'Combine and add the constant of integration.', workingLatex: '\\int (6x^5 - 2x + 3) \\, \\mathrm{d}x = x^6 - x^2 + 3x + C', explanation: 'Collect all terms together and include \\( + C \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite as a power of \\( x \\).', workingLatex: '\\frac{3}{x^4} = 3x^{-4}', explanation: 'Express the denominator using a negative index so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate.', workingLatex: '\\int 3x^{-4} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{-3}}{-3} + C = -\\frac{1}{x^3} + C', explanation: 'Increase the index from \\( -4 \\) to \\( -3 \\) and divide by \\( -3 \\). The factor of \\( 3 \\) cancels with the denominator.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the square root using a fractional exponent.', workingLatex: '4\\sqrt{x} = 4x^{\\frac{1}{2}}', explanation: 'Recall that \\( \\sqrt{x} = x^{\\frac{1}{2}} \\).' },
                { stepNumber: 2, description: 'Integrate using the power rule.', workingLatex: '\\int 4x^{\\frac{1}{2}} \\, \\mathrm{d}x = 4 \\cdot \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = \\frac{8}{3} x^{\\frac{3}{2}} + C', explanation: 'Increase the power by 1 to get \\( \\frac{3}{2} \\), then divide by the new power. Dividing by \\( \\frac{3}{2} \\) is the same as multiplying by \\( \\frac{2}{3} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite using a negative exponent.', workingLatex: 'x^3 - \\frac{2}{x^2} = x^3 - 2x^{-2}', explanation: 'Express \\( \\frac{2}{x^2} \\) as \\( 2x^{-2} \\) so the power rule can be applied.'},
                { stepNumber: 2, description: 'Integrate the first term.', workingLatex: '\\int x^3 \\, \\mathrm{d}x = \\frac{x^4}{4}', explanation: 'Apply the power rule: increase the power by 1 and divide by the new power.' },
                { stepNumber: 3, description: 'Integrate the second term and combine.', workingLatex: '\\int -2x^{-2} \\, \\mathrm{d}x = -2 \\cdot \\frac{x^{-1}}{-1} = \\frac{2}{x}, \\quad \\text{so } \\frac{x^4}{4} + \\frac{2}{x} + C', explanation: 'The negative signs cancel when dividing by \\( -1 \\), giving a positive \\( \\frac{2}{x} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify the integrand by dividing each term by \\( x \\).', workingLatex: '\\frac{x^3 + 2x}{x} = x^2 + 2', explanation: 'Divide each term in the numerator by \\( x \\) separately.' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int x^2 \\, \\mathrm{d}x = \\frac{x^3}{3}, \\quad \\int 2 \\, \\mathrm{d}x = 2x', explanation: 'Apply the power rule to \\( x^2 \\) and recall that the integral of a constant \\( k \\) is \\( kx \\).' },
                { stepNumber: 3, description: 'Combine and add the constant of integration.', workingLatex: '\\frac{x^3}{3} + 2x + C', explanation: 'Always include \\( + C \\) for an indefinite integral.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Simplify by dividing each term by \\( x^2 \\).', workingLatex: '\\frac{6x^2 - 3}{x^2} = 6 - 3x^{-2}', explanation: 'Splitting the fraction gives \\( \\frac{6x^2}{x^2} = 6 \\) and \\( \\frac{-3}{x^2} = -3x^{-2} \\).' },
                { stepNumber: 2, description: 'Integrate the constant term.', workingLatex: '\\int 6 \\, \\mathrm{d}x = 6x', explanation: 'The integral of a constant is the constant multiplied by \\( x \\).' },
                { stepNumber: 3, description: 'Integrate \\( -3x^{-2} \\) and combine.', workingLatex: '\\int -3x^{-2} \\, \\mathrm{d}x = -3 \\cdot \\frac{x^{-1}}{-1} = \\frac{3}{x}, \\quad \\text{so } 6x + \\frac{3}{x} + C', explanation: 'The negative signs cancel, giving \\( +\\frac{3}{x} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Increase the power by 1.', workingLatex: '-\\tfrac{1}{2} + 1 = \\tfrac{1}{2}', explanation: 'The new power is \\( \\frac{1}{2} \\).' },
                { stepNumber: 2, description: 'Divide by the new power and simplify.', workingLatex: '\\int x^{-\\frac{1}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + C = 2\\sqrt{x} + C', explanation: 'Dividing by \\( \\frac{1}{2} \\) is the same as multiplying by 2. Then \\( x^{\\frac{1}{2}} = \\sqrt{x} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite using a fractional exponent.', workingLatex: '2x + \\frac{1}{\\sqrt{x}} = 2x + x^{-\\frac{1}{2}}', explanation: 'Recall that \\( \\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}} \\).' },
                { stepNumber: 2, description: 'Integrate \\( 2x \\).', workingLatex: '\\int 2x \\, \\mathrm{d}x = x^2', explanation: 'Apply the power rule to get \\( 2 \\cdot \\frac{x^2}{2} = x^2 \\).' },
                { stepNumber: 3, description: 'Integrate \\( x^{-\\frac{1}{2}} \\) and combine.', workingLatex: '\\int x^{-\\frac{1}{2}} \\, \\mathrm{d}x = 2x^{\\frac{1}{2}} = 2\\sqrt{x}, \\quad \\text{so } x^2 + 2\\sqrt{x} + C', explanation: 'Increase the power to \\( \\frac{1}{2} \\) and divide by \\( \\frac{1}{2} \\), giving a coefficient of 2.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the square.', workingLatex: '(2x+1)^2 = 4x^2 + 4x + 1', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = 2x \\) and \\( b = 1 \\).' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int 4x^2 \\, \\mathrm{d}x = \\frac{4x^3}{3}, \\quad \\int 4x \\, \\mathrm{d}x = 2x^2, \\quad \\int 1 \\, \\mathrm{d}x = x', explanation: 'Apply the power rule to each term separately.' },
                { stepNumber: 3, description: 'Combine.', workingLatex: '\\frac{4x^3}{3} + 2x^2 + x + C', explanation: 'Add the results together and include the constant of integration.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the brackets.', workingLatex: 'x(x-3) = x^2 - 3x', explanation: 'Distribute \\( x \\) across both terms inside the bracket.' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int (x^2 - 3x) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{3x^2}{2} + C', explanation: 'Apply the power rule term by term and add the constant of integration.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the numerator.', workingLatex: 'x^2 + 4x + 3 = (x+1)(x+3)', explanation: 'Find two numbers that multiply to 3 and add to 4: these are 1 and 3.' },
                { stepNumber: 2, description: 'Cancel the common factor.', workingLatex: '\\frac{(x+1)(x+3)}{x+1} = x + 3', explanation: 'The \\( (x+1) \\) factor cancels from numerator and denominator.' },
                { stepNumber: 3, description: 'Integrate \\( x + 3 \\).', workingLatex: '\\int (x + 3) \\, \\mathrm{d}x = \\frac{x^2}{2} + 3x + C', explanation: 'Apply the power rule to \\( x \\) and integrate the constant 3.' },
                { stepNumber: 4, description: 'State the final answer.', workingLatex: '\\frac{x^2}{2} + 3x + C', explanation: 'Remember to include \\( + C \\) for the indefinite integral.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand using index laws.', workingLatex: '\\sqrt{x}(x+4) = x^{\\frac{1}{2}} \\cdot x + 4x^{\\frac{1}{2}} = x^{\\frac{3}{2}} + 4x^{\\frac{1}{2}}', explanation: 'Recall \\( \\sqrt{x} = x^{\\frac{1}{2}} \\) and \\( x^{\\frac{1}{2}} \\cdot x = x^{\\frac{3}{2}} \\).' },
                { stepNumber: 2, description: 'Integrate the first term.', workingLatex: '\\int x^{\\frac{3}{2}} \\, \\mathrm{d}x = \\frac{x^{\\frac{5}{2}}}{\\frac{5}{2}} = \\frac{2}{5}x^{\\frac{5}{2}}', explanation: 'Increase the power from \\( \\frac{3}{2} \\) to \\( \\frac{5}{2} \\) and divide by \\( \\frac{5}{2} \\).' },
                { stepNumber: 3, description: 'Integrate the second term and combine.', workingLatex: '\\int 4x^{\\frac{1}{2}} \\, \\mathrm{d}x = 4 \\cdot \\frac{2}{3}x^{\\frac{3}{2}} = \\frac{8}{3}x^{\\frac{3}{2}}, \\quad \\text{so } \\frac{2}{5}x^{\\frac{5}{2}} + \\frac{8}{3}x^{\\frac{3}{2}} + C', explanation: 'Increase the power from \\( \\frac{1}{2} \\) to \\( \\frac{3}{2} \\) and divide by \\( \\frac{3}{2} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\) to find \\( y \\).', workingLatex: 'y = \\int (3x^2 - 4) \\, \\mathrm{d}x = x^3 - 4x + C', explanation: 'Apply the power rule to \\( 3x^2 \\) and integrate the constant \\( -4 \\).' },
                { stepNumber: 2, description: 'Substitute the condition \\( y = 5 \\) when \\( x = 2 \\).', workingLatex: '5 = (2)^3 - 4(2) + C = 8 - 8 + C', explanation: 'Replace \\( x \\) with 2 and \\( y \\) with 5 in the equation.' },
                { stepNumber: 3, description: 'Solve for \\( C \\).', workingLatex: '5 = 0 + C \\implies C = 5', explanation: 'Since \\( 8 - 8 = 0 \\), we get \\( C = 5 \\) directly.' },
                { stepNumber: 4, description: 'State the equation of the curve.', workingLatex: 'y = x^3 - 4x + 5', explanation: 'Substitute the value of \\( C \\) back into the general solution.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate the gradient to find \\( y \\).', workingLatex: 'y = \\int (6x - 1) \\, \\mathrm{d}x = 3x^2 - x + C', explanation: 'Apply the power rule to \\( 6x \\) and integrate the constant \\( -1 \\).' },
                { stepNumber: 2, description: 'Substitute the point \\( (1, 4) \\).', workingLatex: '4 = 3(1)^2 - 1 + C = 3 - 1 + C', explanation: 'Replace \\( x \\) with 1 and \\( y \\) with 4.' },
                { stepNumber: 3, description: 'Solve for \\( C \\).', workingLatex: '4 = 2 + C \\implies C = 2', explanation: 'Rearrange to find \\( C = 4 - 2 = 2 \\).' },
                { stepNumber: 4, description: 'State the equation of the curve.', workingLatex: 'y = 3x^2 - x + 2', explanation: 'Substitute \\( C = 2 \\) back into the general solution.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite \\( \\frac{3}{x^2} \\) using a negative exponent.', workingLatex: '5x^4 + \\frac{3}{x^2} - 7 = 5x^4 + 3x^{-2} - 7', explanation: 'Express \\( \\frac{3}{x^2} \\) as \\( 3x^{-2} \\) so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int 5x^4 \\, \\mathrm{d}x = x^5, \\quad \\int 3x^{-2} \\, \\mathrm{d}x = -\\frac{3}{x}, \\quad \\int -7 \\, \\mathrm{d}x = -7x', explanation: 'For \\( 3x^{-2} \\), the new power is \\( -1 \\), so we get \\( 3 \\cdot \\frac{x^{-1}}{-1} = -\\frac{3}{x} \\).' },
                { stepNumber: 3, description: 'Combine and add the constant of integration.', workingLatex: 'x^5 - \\frac{3}{x} - 7x + C', explanation: 'Collect the three results and include \\( + C \\).' }
            ],
            finalAnswer: '\\( x^5 - \\dfrac{3}{x} - 7x + C \\)'
        }
    },
    {
        id: 'i1-056',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 56',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{2x^4 - x^2 + 4}{x^2} \\, \\mathrm{d}x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Divide each term in the numerator by \\( x^2 \\).', workingLatex: '\\frac{2x^4 - x^2 + 4}{x^2} = 2x^2 - 1 + 4x^{-2}', explanation: 'Split the fraction: \\( \\frac{2x^4}{x^2} = 2x^2 \\), \\( \\frac{-x^2}{x^2} = -1 \\), and \\( \\frac{4}{x^2} = 4x^{-2} \\).' },
                { stepNumber: 2, description: 'Integrate \\( 2x^2 \\) and \\( -1 \\).', workingLatex: '\\int 2x^2 \\, \\mathrm{d}x = \\frac{2x^3}{3}, \\quad \\int -1 \\, \\mathrm{d}x = -x', explanation: 'Apply the power rule to \\( 2x^2 \\) and integrate the constant.' },
                { stepNumber: 3, description: 'Integrate \\( 4x^{-2} \\).', workingLatex: '\\int 4x^{-2} \\, \\mathrm{d}x = 4 \\cdot \\frac{x^{-1}}{-1} = -\\frac{4}{x}', explanation: 'The new power is \\( -1 \\), and dividing by \\( -1 \\) introduces a negative sign.' },
                { stepNumber: 4, description: 'Combine all terms.', workingLatex: '\\frac{2x^3}{3} - x - \\frac{4}{x} + C', explanation: 'Collect the three results and include the constant of integration.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Increase the power by 1.', workingLatex: '\\frac{2}{3} + 1 = \\frac{5}{3}', explanation: 'The new index is \\( \\frac{5}{3} \\).' },
                { stepNumber: 2, description: 'Divide by the new power and add the constant of integration.', workingLatex: '\\int x^{\\frac{2}{3}} \\, \\mathrm{d}x = \\frac{x^{\\frac{5}{3}}}{\\frac{5}{3}} + C = \\frac{3}{5} x^{\\frac{5}{3}} + C', explanation: 'Dividing by \\( \\frac{5}{3} \\) is the same as multiplying by \\( \\frac{3}{5} \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite using a negative fractional index.', workingLatex: '\\frac{5}{\\sqrt{x}} = 5x^{-\\frac{1}{2}}', explanation: 'Recall that \\( \\frac{1}{\\sqrt{x}} = x^{-\\frac{1}{2}} \\).' },
                { stepNumber: 2, description: 'Apply the power rule and simplify.', workingLatex: '\\int 5x^{-\\frac{1}{2}} \\, \\mathrm{d}x = 5 \\cdot \\frac{x^{\\frac{1}{2}}}{\\frac{1}{2}} + C = 10x^{\\frac{1}{2}} + C = 10\\sqrt{x} + C', explanation: 'The new index is \\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\). Dividing by \\( \\frac{1}{2} \\) gives a factor of 2, so \\( 5 \\times 2 = 10 \\).' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the brackets.', workingLatex: '(x+2)(x-5) = x^2 - 5x + 2x - 10 = x^2 - 3x - 10', explanation: 'You cannot integrate a product directly; expand first.' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int (x^2 - 3x - 10) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{3x^2}{2} - 10x + C', explanation: 'Apply the power rule to each term separately and add \\( C \\).' },
                { stepNumber: 3, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} - \\frac{3x^2}{2} - 10x + C', explanation: 'Each coefficient has been simplified fully.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate the gradient function.', workingLatex: 'y = \\int (4x^3 + 2x) \\, \\mathrm{d}x = x^4 + x^2 + C', explanation: 'Integrate each term using the power rule.' },
                { stepNumber: 2, description: 'Substitute the point \\( (1, 0) \\) to find \\( C \\).', workingLatex: '0 = (1)^4 + (1)^2 + C = 1 + 1 + C \\implies C = -2', explanation: 'Setting \\( x = 1 \\) and \\( y = 0 \\) gives \\( 0 = 1 + 1 + C \\).' },
                { stepNumber: 3, description: 'Write the equation with the value of \\( C \\).', workingLatex: 'y = x^4 + x^2 - 2', explanation: 'Replace \\( C \\) with \\( -2 \\) in the integrated expression.' },
                { stepNumber: 4, description: 'State the equation of the curve.', workingLatex: 'y = x^4 + x^2 - 2', explanation: 'This is the final equation of the curve.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite each term using index notation.', workingLatex: '3\\sqrt{x} - \\frac{1}{x^3} = 3x^{\\frac{1}{2}} - x^{-3}', explanation: 'Express roots and reciprocals as powers so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate the first term.', workingLatex: '\\int 3x^{\\frac{1}{2}} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} = 2x^{\\frac{3}{2}}', explanation: 'Increase the index from \\( \\frac{1}{2} \\) to \\( \\frac{3}{2} \\) and divide by \\( \\frac{3}{2} \\).' },
                { stepNumber: 3, description: 'Integrate the second term and combine.', workingLatex: '\\int -x^{-3} \\, \\mathrm{d}x = \\frac{-x^{-2}}{-2} = \\frac{1}{2x^2}, \\quad \\text{so } 2x^{\\frac{3}{2}} + \\frac{1}{2x^2} + C', explanation: 'The index goes from \\( -3 \\) to \\( -2 \\) and we divide by \\( -2 \\). The negatives cancel.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (12x^2 - 6x + 1) \\, \\mathrm{d}x = 4x^3 - 3x^2 + x + C', explanation: 'Apply the power rule to each term.' },
                { stepNumber: 2, description: 'Substitute \\( f(0) = 3 \\) to find \\( C \\).', workingLatex: '3 = 4(0)^3 - 3(0)^2 + 0 + C \\implies C = 3', explanation: 'Every term with \\( x \\) vanishes when \\( x = 0 \\), leaving \\( C = 3 \\).' },
                { stepNumber: 3, description: 'Write the final expression for \\( f(x) \\).', workingLatex: 'f(x) = 4x^3 - 3x^2 + x + 3', explanation: 'Replace \\( C \\) with 3.' },
                { stepNumber: 4, description: 'State the answer.', workingLatex: 'f(x) = 4x^3 - 3x^2 + x + 3', explanation: 'This is the required function.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the numerator using the difference of two squares.', workingLatex: '(x+1)(x-1) = x^2 - 1', explanation: 'Recognise the difference of two squares identity.' },
                { stepNumber: 2, description: 'Divide each term by \\( x^2 \\).', workingLatex: '\\frac{x^2 - 1}{x^2} = 1 - x^{-2}', explanation: 'Split the fraction and simplify so each term is in index form.' },
                { stepNumber: 3, description: 'Integrate each term.', workingLatex: '\\int (1 - x^{-2}) \\, \\mathrm{d}x = x + x^{-1} + C = x + \\frac{1}{x} + C', explanation: 'The integral of \\( 1 \\) is \\( x \\). The integral of \\( -x^{-2} \\) is \\( x^{-1} \\).' },
                { stepNumber: 4, description: 'State the final answer.', workingLatex: 'x + \\frac{1}{x} + C', explanation: 'Rewrite \\( x^{-1} \\) as \\( \\frac{1}{x} \\) for clarity.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the square.', workingLatex: '(x^2 + 1)^2 = x^4 + 2x^2 + 1', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = x^2 \\) and \\( b = 1 \\).' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int x^4 \\, \\mathrm{d}x = \\frac{x^5}{5}, \\quad \\int 2x^2 \\, \\mathrm{d}x = \\frac{2x^3}{3}, \\quad \\int 1 \\, \\mathrm{d}x = x', explanation: 'Apply the power rule to each term separately.' },
                { stepNumber: 3, description: 'Combine the results.', workingLatex: '\\int (x^4 + 2x^2 + 1) \\, \\mathrm{d}x = \\frac{x^5}{5} + \\frac{2x^3}{3} + x + C', explanation: 'Add the constant of integration \\( C \\).' },
                { stepNumber: 4, description: 'State the final answer.', workingLatex: '\\frac{x^5}{5} + \\frac{2x^3}{3} + x + C', explanation: 'This is the fully simplified result.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the gradient in index form.', workingLatex: '\\frac{3}{x^2} + 2 = 3x^{-2} + 2', explanation: 'Express \\( \\frac{3}{x^2} \\) as \\( 3x^{-2} \\) so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate to find \\( y \\).', workingLatex: 'y = \\int (3x^{-2} + 2) \\, \\mathrm{d}x = -\\frac{3}{x} + 2x + C', explanation: 'The integral of \\( 3x^{-2} \\) is \\( 3 \\cdot \\frac{x^{-1}}{-1} = -\\frac{3}{x} \\). The integral of 2 is \\( 2x \\).' },
                { stepNumber: 3, description: 'Substitute \\( (3, 10) \\) to find \\( C \\).', workingLatex: '10 = -\\frac{3}{3} + 2(3) + C = -1 + 6 + C \\implies C = 5', explanation: 'Setting \\( x = 3 \\) and \\( y = 10 \\) and solving for \\( C \\).' },
                { stepNumber: 4, description: 'Write the equation of the curve.', workingLatex: 'y = -\\frac{3}{x} + 2x + 5', explanation: 'Replace \\( C \\) with 5.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: 'y = -\\frac{3}{x} + 2x + 5', explanation: 'This is the equation of the curve.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Divide each term in the numerator by \\( x^2 \\).', workingLatex: '\\frac{x^4 - 1}{x^2} = x^2 - x^{-2}', explanation: 'Split the fraction: \\( \\frac{x^4}{x^2} = x^2 \\) and \\( \\frac{1}{x^2} = x^{-2} \\).' },
                { stepNumber: 2, description: 'Integrate each term.', workingLatex: '\\int (x^2 - x^{-2}) \\, \\mathrm{d}x = \\frac{x^3}{3} + x^{-1} + C = \\frac{x^3}{3} + \\frac{1}{x} + C', explanation: 'The integral of \\( -x^{-2} \\) is \\( \\frac{x^{-1}}{1} = \\frac{1}{x} \\), since the negative signs cancel.' },
                { stepNumber: 3, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} + \\frac{1}{x} + C', explanation: 'The result is fully simplified.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the squared bracket.', workingLatex: '\\left(\\sqrt{x} + \\frac{1}{\\sqrt{x}}\\right)^2 = x + 2 + \\frac{1}{x}', explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\): \\( (\\sqrt{x})^2 = x \\), \\( 2 \\cdot \\sqrt{x} \\cdot \\frac{1}{\\sqrt{x}} = 2 \\), and \\( \\left(\\frac{1}{\\sqrt{x}}\\right)^2 = \\frac{1}{x} \\).' },
                { stepNumber: 2, description: 'Rewrite \\( \\frac{1}{x} \\) in index form.', workingLatex: 'x + 2 + x^{-1}', explanation: 'The term \\( x^{-1} \\) integrates to \\( \\ln|x| \\), not via the usual power rule.' },
                { stepNumber: 3, description: 'Integrate each term.', workingLatex: '\\int x \\, \\mathrm{d}x = \\frac{x^2}{2}, \\quad \\int 2 \\, \\mathrm{d}x = 2x, \\quad \\int x^{-1} \\, \\mathrm{d}x = \\ln|x|', explanation: 'Apply the power rule to the first two terms and the standard result for \\( x^{-1} \\).' },
                { stepNumber: 4, description: 'Combine and add the constant of integration.', workingLatex: '\\frac{x^2}{2} + 2x + \\ln|x| + C', explanation: 'This is the final integrated expression.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\frac{x^2}{2} + 2x + \\ln|x| + C', explanation: 'The result is fully simplified.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the gradient in index form.', workingLatex: '3\\sqrt{x} = 3x^{\\frac{1}{2}}', explanation: 'Express the square root as a power so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate to find \\( y \\).', workingLatex: 'y = \\int 3x^{\\frac{1}{2}} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{\\frac{3}{2}}}{\\frac{3}{2}} + C = 2x^{\\frac{3}{2}} + C', explanation: 'Increase the index to \\( \\frac{3}{2} \\) and divide by \\( \\frac{3}{2} \\), giving \\( 3 \\times \\frac{2}{3} = 2 \\).' },
                { stepNumber: 3, description: 'Substitute \\( (4, 20) \\) to find \\( C \\).', workingLatex: '20 = 2(4)^{\\frac{3}{2}} + C = 2 \\cdot 8 + C = 16 + C \\implies C = 4', explanation: '\\( 4^{\\frac{3}{2}} = (\\sqrt{4})^3 = 2^3 = 8 \\).' },
                { stepNumber: 4, description: 'Write the equation with the value of \\( C \\).', workingLatex: 'y = 2x^{\\frac{3}{2}} + 4', explanation: 'Replace \\( C \\) with 4.' },
                { stepNumber: 5, description: 'State the equation of the curve.', workingLatex: 'y = 2x^{\\frac{3}{2}} + 4', explanation: 'This is the final equation.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite in index form.', workingLatex: '2x - \\frac{4}{x^3} = 2x - 4x^{-3}', explanation: 'Express \\( \\frac{4}{x^3} \\) as \\( 4x^{-3} \\) so the power rule can be applied.' },
                { stepNumber: 2, description: 'Integrate to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (2x - 4x^{-3}) \\, \\mathrm{d}x = x^2 + 2x^{-2} + C = x^2 + \\frac{2}{x^2} + C', explanation: '\\( \\int -4x^{-3} \\, \\mathrm{d}x = -4 \\cdot \\frac{x^{-2}}{-2} = 2x^{-2} = \\frac{2}{x^2} \\).' },
                { stepNumber: 3, description: 'Substitute \\( f(1) = 3 \\) to find \\( C \\).', workingLatex: '3 = 1 + 2 + C \\implies C = 0', explanation: 'Setting \\( x = 1 \\) gives \\( f(1) = 1 + 2 + C = 3 \\), so \\( C = 0 \\).' },
                { stepNumber: 4, description: 'Write the final expression for \\( f(x) \\).', workingLatex: 'f(x) = x^2 + \\frac{2}{x^2}', explanation: 'Since \\( C = 0 \\), the constant term vanishes.' },
                { stepNumber: 5, description: 'State the answer.', workingLatex: 'f(x) = x^2 + \\frac{2}{x^2}', explanation: 'This is the required function.' }
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
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate the second derivative.', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\int 6x \\, \\mathrm{d}x = 3x^2 + A', explanation: 'Integrate \\( 6x \\) using the power rule. Use \\( A \\) for the first constant of integration.' },
                { stepNumber: 2, description: 'Use the fact that the gradient is 0 at a stationary point.', workingLatex: '0 = 3(1)^2 + A \\implies A = -3', explanation: 'At the stationary point \\( x = 1 \\), \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).' },
                { stepNumber: 3, description: 'State the gradient function.', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3', explanation: 'This completes part (a).' },
                { stepNumber: 4, description: '(b) Integrate the gradient function.', workingLatex: 'y = \\int (3x^2 - 3) \\, \\mathrm{d}x = x^3 - 3x + B', explanation: 'Use \\( B \\) for the second constant of integration.' },
                { stepNumber: 5, description: 'Substitute the point \\( (1, 2) \\) to find \\( B \\).', workingLatex: '2 = (1)^3 - 3(1) + B = 1 - 3 + B \\implies B = 4', explanation: 'Setting \\( x = 1 \\) and \\( y = 2 \\) gives \\( 2 = -2 + B \\).' },
                { stepNumber: 6, description: 'State the equation of the curve.', workingLatex: 'y = x^3 - 3x + 4', explanation: 'Replace \\( B \\) with 4 to obtain the final equation.' },
                { stepNumber: 7, description: 'Summarise both answers.', workingLatex: '\\text{(a)}\\; \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3, \\qquad \\text{(b)}\\; y = x^3 - 3x + 4', explanation: 'These are the required results for parts (a) and (b).' }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3 \\) \\newline (b) \\( y = x^3 - 3x + 4 \\)'
        }
    },
    {
        id: 'i1-071',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 71',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(2x+1)^2}{x^2} \\, \\mathrm{d}x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the numerator.', workingLatex: '(2x+1)^2 = 4x^2 + 4x + 1', explanation: 'Use the identity \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = 2x \\) and \\( b = 1 \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( x^2 \\).', workingLatex: '\\frac{4x^2 + 4x + 1}{x^2} = 4 + 4x^{-1} + x^{-2}', explanation: 'Split the fraction and simplify each term: \\( \\frac{4x^2}{x^2} = 4 \\), \\( \\frac{4x}{x^2} = 4x^{-1} \\), \\( \\frac{1}{x^2} = x^{-2} \\).' },
                { stepNumber: 3, description: 'Integrate term by term.', workingLatex: '\\int \\left(4 + 4x^{-1} + x^{-2}\\right) \\mathrm{d}x = 4x + 4\\ln|x| + \\frac{x^{-1}}{-1} + C', explanation: 'The integral of a constant is that constant times \\( x \\). The integral of \\( x^{-1} \\) is \\( \\ln|x| \\). The integral of \\( x^{-2} \\) uses the power rule.' },
                { stepNumber: 4, description: 'Simplify the result.', workingLatex: '4x + 4\\ln|x| - \\frac{1}{x} + C', explanation: 'Rewrite \\( \\frac{x^{-1}}{-1} \\) as \\( -\\frac{1}{x} \\).' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\int \\frac{(2x+1)^2}{x^2} \\, \\mathrm{d}x = 4x + 4\\ln|x| - \\frac{1}{x} + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( 4x + 4\\ln|x| - \\dfrac{1}{x} + C \\)'
        }
    },
    {
        id: 'i1-072',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 72',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'(x) = 6x^2 - \\dfrac{2}{x^3} \\) and \\( f(1) = 3 \\), find \\( f(x) \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite in index form.', workingLatex: 'f\'(x) = 6x^2 - 2x^{-3}', explanation: 'Express \\( \\frac{2}{x^3} \\) as \\( 2x^{-3} \\) so the power rule applies.' },
                { stepNumber: 2, description: 'Integrate to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (6x^2 - 2x^{-3}) \\, \\mathrm{d}x = 2x^3 - 2 \\cdot \\frac{x^{-2}}{-2} + C', explanation: 'Apply the power rule to each term. For the first term \\( \\int 6x^2 \\, \\mathrm{d}x = 2x^3 \\). For the second term use \\( n = -3 \\).' },
                { stepNumber: 3, description: 'Simplify.', workingLatex: 'f(x) = 2x^3 + x^{-2} + C = 2x^3 + \\frac{1}{x^2} + C', explanation: 'The coefficient simplifies: \\( -2 \\times \\frac{1}{-2} = 1 \\), giving \\( x^{-2} = \\frac{1}{x^2} \\).' },
                { stepNumber: 4, description: 'Substitute \\( f(1) = 3 \\) to find \\( C \\).', workingLatex: '3 = 2(1)^3 + \\frac{1}{(1)^2} + C = 2 + 1 + C \\implies C = 0', explanation: 'Setting \\( x = 1 \\) gives \\( 3 = 3 + C \\), so \\( C = 0 \\).' },
                { stepNumber: 5, description: 'Write the final expression.', workingLatex: 'f(x) = 2x^3 + \\frac{1}{x^2}', explanation: 'Since \\( C = 0 \\), the constant of integration vanishes.' },
                { stepNumber: 6, description: 'State the answer.', workingLatex: 'f(x) = 2x^3 + \\frac{1}{x^2}', explanation: 'This is the required function.' }
            ],
            finalAnswer: '\\( f(x) = 2x^3 + \\dfrac{1}{x^2} \\)'
        }
    },
    {
        id: 'i1-073',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 73',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( \\sqrt{x} + \\frac{1}{\\sqrt{x}} \\right)^2 \\mathrm{d}x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite using index notation.', workingLatex: '\\left( x^{1/2} + x^{-1/2} \\right)^2', explanation: 'Write \\( \\sqrt{x} = x^{1/2} \\) and \\( \\frac{1}{\\sqrt{x}} = x^{-1/2} \\).' },
                { stepNumber: 2, description: 'Expand the square.', workingLatex: '\\left( x^{1/2} + x^{-1/2} \\right)^2 = x + 2x^{1/2} \\cdot x^{-1/2} + x^{-1} = x + 2 + x^{-1}', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\). Note \\( x^{1/2} \\cdot x^{-1/2} = x^0 = 1 \\).' },
                { stepNumber: 3, description: 'Write the integral.', workingLatex: '\\int \\left( x + 2 + x^{-1} \\right) \\mathrm{d}x', explanation: 'This is now a sum of standard terms.' },
                { stepNumber: 4, description: 'Integrate each term.', workingLatex: '\\frac{x^2}{2} + 2x + \\ln|x| + C', explanation: '\\( \\int x \\, \\mathrm{d}x = \\frac{x^2}{2} \\), \\( \\int 2 \\, \\mathrm{d}x = 2x \\), \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| \\).' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\int \\left( \\sqrt{x} + \\frac{1}{\\sqrt{x}} \\right)^2 \\mathrm{d}x = \\frac{x^2}{2} + 2x + \\ln|x| + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 2x + \\ln|x| + C \\)'
        }
    },
    {
        id: 'i1-074',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 74',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = f(x) \\) passes through \\( (1, 2) \\) and \\( f\'(x) = 3x^2 + ax - 5 \\). Given that the curve also passes through \\( (2, 4) \\), find the value of \\( a \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (3x^2 + ax - 5) \\, \\mathrm{d}x = x^3 + \\frac{a}{2}x^2 - 5x + C', explanation: 'Apply the power rule to each term.' },
                { stepNumber: 2, description: 'Substitute the point \\( (1, 2) \\).', workingLatex: '2 = (1)^3 + \\frac{a}{2}(1)^2 - 5(1) + C = 1 + \\frac{a}{2} - 5 + C', explanation: 'Setting \\( x = 1 \\) and \\( f(1) = 2 \\).' },
                { stepNumber: 3, description: 'Simplify to obtain equation (1).', workingLatex: '2 = -4 + \\frac{a}{2} + C \\implies \\frac{a}{2} + C = 6 \\quad \\cdots (1)', explanation: 'Rearrange to express the relationship between \\( a \\) and \\( C \\).' },
                { stepNumber: 4, description: 'Substitute the point \\( (2, 4) \\).', workingLatex: '4 = (2)^3 + \\frac{a}{2}(2)^2 - 5(2) + C = 8 + 2a - 10 + C', explanation: 'Setting \\( x = 2 \\) and \\( f(2) = 4 \\).' },
                { stepNumber: 5, description: 'Simplify to obtain equation (2).', workingLatex: '4 = -2 + 2a + C \\implies 2a + C = 6 \\quad \\cdots (2)', explanation: 'Rearrange to express the second relationship.' },
                { stepNumber: 6, description: 'Subtract equation (1) from equation (2) to eliminate \\( C \\).', workingLatex: '2a + C - \\left(\\frac{a}{2} + C\\right) = 6 - 6 \\implies \\frac{3a}{2} = 0', explanation: 'The \\( C \\) terms cancel and the right-hand sides cancel.' },
                { stepNumber: 7, description: 'Solve for \\( a \\).', workingLatex: 'a = 0', explanation: 'Since \\( \\frac{3a}{2} = 0 \\), we have \\( a = 0 \\).' }
            ],
            finalAnswer: '\\( a = 0 \\)'
        }
    },
    {
        id: 'i1-075',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 75',
        difficulty: 'Standard',
        questionText: 'Given \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{x^3 + 3x - 2}{x^2} \\) and the curve passes through \\( (1, 0) \\), find the equation of the curve and determine the \\( x \\)-coordinate where \\( y \\) has a stationary point.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Divide each term of the numerator by \\( x^2 \\).', workingLatex: '\\frac{x^3 + 3x - 2}{x^2} = x + 3x^{-1} - 2x^{-2}', explanation: 'Split the fraction: \\( \\frac{x^3}{x^2} = x \\), \\( \\frac{3x}{x^2} = 3x^{-1} \\), \\( \\frac{-2}{x^2} = -2x^{-2} \\).' },
                { stepNumber: 2, description: 'Integrate to find \\( y \\).', workingLatex: 'y = \\int \\left( x + 3x^{-1} - 2x^{-2} \\right) \\mathrm{d}x = \\frac{x^2}{2} + 3\\ln|x| + 2x^{-1} + C', explanation: 'Apply the power rule and recall \\( \\int x^{-1} \\, \\mathrm{d}x = \\ln|x| \\). For \\( -2x^{-2} \\): \\( \\int -2x^{-2} \\, \\mathrm{d}x = 2x^{-1} \\).' },
                { stepNumber: 3, description: 'Rewrite in a cleaner form.', workingLatex: 'y = \\frac{x^2}{2} + 3\\ln|x| + \\frac{2}{x} + C', explanation: 'Express \\( 2x^{-1} \\) as \\( \\frac{2}{x} \\).' },
                { stepNumber: 4, description: 'Substitute the point \\( (1, 0) \\) to find \\( C \\).', workingLatex: '0 = \\frac{1}{2} + 3\\ln 1 + 2 + C = \\frac{1}{2} + 0 + 2 + C \\implies C = -\\frac{5}{2}', explanation: 'Since \\( \\ln 1 = 0 \\), we get \\( 0 = \\frac{5}{2} + C \\).' },
                { stepNumber: 5, description: 'State the equation of the curve.', workingLatex: 'y = \\frac{x^2}{2} + 3\\ln|x| + \\frac{2}{x} - \\frac{5}{2}', explanation: 'This is the equation of the curve.' },
                { stepNumber: 6, description: 'Find the stationary point by setting \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).', workingLatex: 'x + 3x^{-1} - 2x^{-2} = 0', explanation: 'The gradient is zero at a stationary point.' },
                { stepNumber: 7, description: 'Multiply through by \\( x^2 \\) and solve.', workingLatex: 'x^3 + 3x - 2 = 0 \\implies (x - \\tfrac{1}{2})(\\ldots)\\text{? Try } x = \\tfrac{1}{2}:\\; \\tfrac{1}{8} + \\tfrac{3}{2} - 2 = \\tfrac{1}{8} + \\tfrac{12}{8} - \\tfrac{16}{8} = -\\tfrac{3}{8} \\neq 0.\\; \\text{Try } x = 1:\\; 1 + 3 - 2 = 2 \\neq 0.\\; \\text{Rearrange: } x^3 + 3x = 2,\\; \\text{so try } x\\text{ values. By inspection or the factor theorem, we note } x^3 + 3x - 2 = (x^2 + x + 2)(x - \\tfrac{2}{3})\\text{? Check: not factorable over rationals easily. Numerically, between } x = 0.5 \\text{ and } x = 1, f(0.5) = -0.375 < 0, f(0.6) = 0.016 > 0. \\text{ So } x \\approx 0.596.', explanation: 'Multiply by \\( x^2 \\) to clear the denominators. The cubic \\( x^3 + 3x - 2 = 0 \\) has one real root. Testing values shows the root lies between 0.5 and 0.6.' },
                { stepNumber: 8, description: 'State the \\( x \\)-coordinate of the stationary point.', workingLatex: 'x \\approx 0.596', explanation: 'The stationary point occurs at approximately \\( x = 0.596 \\) (3 s.f.). In an exam you would either leave the cubic or solve numerically.' }
            ],
            finalAnswer: '\\( y = \\dfrac{x^2}{2} + 3\\ln|x| + \\dfrac{2}{x} - \\dfrac{5}{2} \\); stationary point at \\( x \\approx 0.596 \\)'
        }
    },
    {
        id: 'i1-076',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 76',
        difficulty: 'Standard',
        questionText: 'Show that \\( \\displaystyle\\int \\left( x^{1/3} - x^{-1/3} \\right)^2 \\mathrm{d}x = \\frac{3x^{5/3}}{5} - 2x + 3x^{1/3} + C \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the square.', workingLatex: '\\left( x^{1/3} - x^{-1/3} \\right)^2 = x^{2/3} - 2 \\cdot x^{1/3} \\cdot x^{-1/3} + x^{-2/3}', explanation: 'Use \\( (a - b)^2 = a^2 - 2ab + b^2 \\) with \\( a = x^{1/3} \\) and \\( b = x^{-1/3} \\).' },
                { stepNumber: 2, description: 'Simplify the middle term.', workingLatex: 'x^{1/3} \\cdot x^{-1/3} = x^0 = 1, \\quad \\text{so the expression is } x^{2/3} - 2 + x^{-2/3}', explanation: 'The powers add to zero, giving 1. The middle term becomes \\( -2 \\).' },
                { stepNumber: 3, description: 'Integrate \\( x^{2/3} \\).', workingLatex: '\\int x^{2/3} \\, \\mathrm{d}x = \\frac{x^{5/3}}{5/3} = \\frac{3x^{5/3}}{5}', explanation: 'Increase the index by 1: \\( \\frac{2}{3} + 1 = \\frac{5}{3} \\). Dividing by \\( \\frac{5}{3} \\) is the same as multiplying by \\( \\frac{3}{5} \\).' },
                { stepNumber: 4, description: 'Integrate \\( -2 \\).', workingLatex: '\\int -2 \\, \\mathrm{d}x = -2x', explanation: 'The integral of a constant \\( k \\) is \\( kx \\).' },
                { stepNumber: 5, description: 'Integrate \\( x^{-2/3} \\).', workingLatex: '\\int x^{-2/3} \\, \\mathrm{d}x = \\frac{x^{1/3}}{1/3} = 3x^{1/3}', explanation: 'Increase the index by 1: \\( -\\frac{2}{3} + 1 = \\frac{1}{3} \\). Dividing by \\( \\frac{1}{3} \\) is the same as multiplying by 3.' },
                { stepNumber: 6, description: 'Combine all terms and state the result.', workingLatex: '\\int \\left( x^{1/3} - x^{-1/3} \\right)^2 \\mathrm{d}x = \\frac{3x^{5/3}}{5} - 2x + 3x^{1/3} + C \\quad \\square', explanation: 'This matches the expression to be shown, as required.' }
            ],
            finalAnswer: '\\( \\dfrac{3x^{5/3}}{5} - 2x + 3x^{1/3} + C \\) (shown)'
        }
    },
    {
        id: 'i1-077',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 77',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^4 - 1}{x^2} \\, \\mathrm{d}x \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Divide each term of the numerator by \\( x^2 \\).', workingLatex: '\\frac{x^4 - 1}{x^2} = x^2 - x^{-2}', explanation: 'Split: \\( \\frac{x^4}{x^2} = x^2 \\) and \\( \\frac{-1}{x^2} = -x^{-2} \\).' },
                { stepNumber: 2, description: 'Integrate \\( x^2 \\).', workingLatex: '\\int x^2 \\, \\mathrm{d}x = \\frac{x^3}{3}', explanation: 'Apply the power rule with \\( n = 2 \\).' },
                { stepNumber: 3, description: 'Integrate \\( -x^{-2} \\).', workingLatex: '\\int -x^{-2} \\, \\mathrm{d}x = -\\frac{x^{-1}}{-1} = x^{-1} = \\frac{1}{x}', explanation: 'Increase the index from \\( -2 \\) to \\( -1 \\) and divide by \\( -1 \\). The two negatives cancel.' },
                { stepNumber: 4, description: 'Combine and add the constant.', workingLatex: '\\frac{x^3}{3} + \\frac{1}{x} + C', explanation: 'Collect both integrals and append the constant of integration.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\int \\frac{x^4 - 1}{x^2} \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{1}{x} + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + \\dfrac{1}{x} + C \\)'
        }
    },
    {
        id: 'i1-078',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 78',
        difficulty: 'Standard',
        questionText: '(a) Find \\( \\displaystyle\\int \\left( 3x^{1/2} + 2x^{-1/2} \\right)^2 \\mathrm{d}x \\).\n(b) Hence find the equation of the curve passing through \\( (4, 50) \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Expand the square.', workingLatex: '\\left( 3x^{1/2} + 2x^{-1/2} \\right)^2 = 9x + 12x^{1/2} \\cdot x^{-1/2} + 4x^{-1} = 9x + 12 + 4x^{-1}', explanation: 'Use \\( (a+b)^2 = a^2 + 2ab + b^2 \\). Here \\( a^2 = 9x \\), \\( 2ab = 2 \\cdot 3 \\cdot 2 \\cdot x^0 = 12 \\), \\( b^2 = 4x^{-1} \\).' },
                { stepNumber: 2, description: 'Integrate term by term.', workingLatex: '\\int (9x + 12 + 4x^{-1}) \\, \\mathrm{d}x = \\frac{9x^2}{2} + 12x + 4\\ln|x| + C', explanation: '\\( \\int 9x \\, \\mathrm{d}x = \\frac{9x^2}{2} \\), \\( \\int 12 \\, \\mathrm{d}x = 12x \\), \\( \\int 4x^{-1} \\, \\mathrm{d}x = 4\\ln|x| \\).' },
                { stepNumber: 3, description: 'State the answer to part (a).', workingLatex: '\\frac{9x^2}{2} + 12x + 4\\ln|x| + C', explanation: 'This completes part (a).' },
                { stepNumber: 4, description: '(b) Use the result from part (a) as \\( y \\).', workingLatex: 'y = \\frac{9x^2}{2} + 12x + 4\\ln|x| + C', explanation: 'The curve has gradient given by the integrand, so \\( y \\) is the integral found in part (a).' },
                { stepNumber: 5, description: 'Substitute the point \\( (4, 50) \\).', workingLatex: '50 = \\frac{9(16)}{2} + 12(4) + 4\\ln 4 + C = 72 + 48 + 4\\ln 4 + C', explanation: 'Set \\( x = 4 \\) and \\( y = 50 \\). Note \\( 4^2 = 16 \\).' },
                { stepNumber: 6, description: 'Solve for \\( C \\).', workingLatex: '50 = 120 + 4\\ln 4 + C \\implies C = -70 - 4\\ln 4', explanation: 'Rearrange: \\( C = 50 - 120 - 4\\ln 4 \\).' },
                { stepNumber: 7, description: 'State the equation of the curve.', workingLatex: 'y = \\frac{9x^2}{2} + 12x + 4\\ln|x| - 70 - 4\\ln 4', explanation: 'Substitute \\( C \\) back into the expression for \\( y \\).' },
                { stepNumber: 8, description: 'Optionally simplify the logarithmic terms.', workingLatex: 'y = \\frac{9x^2}{2} + 12x + 4\\ln\\left(\\frac{|x|}{4}\\right) - 70', explanation: 'Using the log law \\( \\ln|x| - \\ln 4 = \\ln\\frac{|x|}{4} \\). Either form is acceptable.' }
            ],
            finalAnswer: '(a) \\( \\dfrac{9x^2}{2} + 12x + 4\\ln|x| + C \\) \\newline (b) \\( y = \\dfrac{9x^2}{2} + 12x + 4\\ln|x| - 70 - 4\\ln 4 \\)'
        }
    },
    {
        id: 'i1-079',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 79',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'\'(x) = 12x - 6 \\), \\( f\'(0) = 2 \\), and \\( f(0) = -1 \\), find \\( f(x) \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int (12x - 6) \\, \\mathrm{d}x = 6x^2 - 6x + A', explanation: 'Use the power rule and introduce constant \\( A \\).' },
                { stepNumber: 2, description: 'Use \\( f\'(0) = 2 \\) to find \\( A \\).', workingLatex: '2 = 6(0)^2 - 6(0) + A \\implies A = 2', explanation: 'Substituting \\( x = 0 \\) gives \\( A = 2 \\) directly.' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\).', workingLatex: 'f\'(x) = 6x^2 - 6x + 2', explanation: 'Replace \\( A \\) with 2.' },
                { stepNumber: 4, description: 'Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (6x^2 - 6x + 2) \\, \\mathrm{d}x = 2x^3 - 3x^2 + 2x + B', explanation: 'Apply the power rule to each term and introduce constant \\( B \\).' },
                { stepNumber: 5, description: 'Use \\( f(0) = -1 \\) to find \\( B \\).', workingLatex: '-1 = 2(0)^3 - 3(0)^2 + 2(0) + B \\implies B = -1', explanation: 'Substituting \\( x = 0 \\) gives \\( B = -1 \\) directly.' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'f(x) = 2x^3 - 3x^2 + 2x - 1', explanation: 'This is the required function.' }
            ],
            finalAnswer: '\\( f(x) = 2x^3 - 3x^2 + 2x - 1 \\)'
        }
    },
    {
        id: 'i1-080',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 80',
        difficulty: 'Standard',
        questionText: '(a) Show that \\( \\dfrac{(x+2)(x-1)}{\\sqrt{x}} = x^{3/2} + x^{1/2} - 2x^{-1/2} \\).\n(b) Hence find \\( \\displaystyle\\int \\frac{(x+2)(x-1)}{\\sqrt{x}} \\, \\mathrm{d}x \\).\n(c) Find the equation of the curve through \\( (1, 3) \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Expand the numerator.', workingLatex: '(x+2)(x-1) = x^2 + x - 2', explanation: 'Multiply out: \\( x \\cdot x + x \\cdot (-1) + 2 \\cdot x + 2 \\cdot (-1) = x^2 + x - 2 \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( \\sqrt{x} = x^{1/2} \\).', workingLatex: '\\frac{x^2 + x - 2}{x^{1/2}} = x^{3/2} + x^{1/2} - 2x^{-1/2}', explanation: 'Use index laws: \\( \\frac{x^2}{x^{1/2}} = x^{3/2} \\), \\( \\frac{x}{x^{1/2}} = x^{1/2} \\), \\( \\frac{-2}{x^{1/2}} = -2x^{-1/2} \\). This completes the proof.' },
                { stepNumber: 3, description: '(b) Integrate \\( x^{3/2} \\).', workingLatex: '\\int x^{3/2} \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} = \\frac{2x^{5/2}}{5}', explanation: 'Increase the index by 1: \\( \\frac{3}{2} + 1 = \\frac{5}{2} \\). Dividing by \\( \\frac{5}{2} \\) gives a factor of \\( \\frac{2}{5} \\).' },
                { stepNumber: 4, description: 'Integrate \\( x^{1/2} \\).', workingLatex: '\\int x^{1/2} \\, \\mathrm{d}x = \\frac{x^{3/2}}{3/2} = \\frac{2x^{3/2}}{3}', explanation: 'Increase the index by 1: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\).' },
                { stepNumber: 5, description: 'Integrate \\( -2x^{-1/2} \\).', workingLatex: '\\int -2x^{-1/2} \\, \\mathrm{d}x = -2 \\cdot \\frac{x^{1/2}}{1/2} = -4x^{1/2} = -4\\sqrt{x}', explanation: 'Increase the index by 1: \\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\). Then \\( -2 \\div \\frac{1}{2} = -4 \\).' },
                { stepNumber: 6, description: 'State the integral.', workingLatex: '\\int \\frac{(x+2)(x-1)}{\\sqrt{x}} \\, \\mathrm{d}x = \\frac{2x^{5/2}}{5} + \\frac{2x^{3/2}}{3} - 4\\sqrt{x} + C', explanation: 'Combine all three integrals and add the constant of integration. This completes part (b).' },
                { stepNumber: 7, description: '(c) Substitute the point \\( (1, 3) \\).', workingLatex: '3 = \\frac{2}{5} + \\frac{2}{3} - 4 + C = \\frac{6 + 10 - 60}{15} + C = -\\frac{44}{15} + C', explanation: 'Set \\( x = 1 \\) and \\( y = 3 \\). Find a common denominator of 15: \\( \\frac{2}{5} = \\frac{6}{15} \\), \\( \\frac{2}{3} = \\frac{10}{15} \\), \\( -4 = -\\frac{60}{15} \\).' },
                { stepNumber: 8, description: 'Solve for \\( C \\) and state the equation of the curve.', workingLatex: 'C = 3 + \\frac{44}{15} = \\frac{45 + 44}{15} = \\frac{89}{15}', explanation: 'So the equation of the curve is \\( y = \\frac{2x^{5/2}}{5} + \\frac{2x^{3/2}}{3} - 4\\sqrt{x} + \\frac{89}{15} \\).' }
            ],
            finalAnswer: '(a) Shown \\newline (b) \\( \\dfrac{2x^{5/2}}{5} + \\dfrac{2x^{3/2}}{3} - 4\\sqrt{x} + C \\) \\newline (c) \\( y = \\dfrac{2x^{5/2}}{5} + \\dfrac{2x^{3/2}}{3} - 4\\sqrt{x} + \\dfrac{89}{15} \\)'
        }
    },
    {
        id: 'i1-081',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 81',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^2 + \\sqrt{x}}{x^2} \\, \\mathrm{d}x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Split the fraction into two separate terms.', workingLatex: '\\frac{x^2 + \\sqrt{x}}{x^2} = \\frac{x^2}{x^2} + \\frac{\\sqrt{x}}{x^2}', explanation: 'Divide each term in the numerator by \\( x^2 \\) individually.' },
                { stepNumber: 2, description: 'Simplify each term using index laws.', workingLatex: '\\frac{x^2}{x^2} = 1, \\qquad \\frac{x^{1/2}}{x^2} = x^{1/2 - 2} = x^{-3/2}', explanation: 'Write \\( \\sqrt{x} = x^{1/2} \\) and subtract the indices: \\( \\frac{1}{2} - 2 = -\\frac{3}{2} \\).' },
                { stepNumber: 3, description: 'Write the integral in index form.', workingLatex: '\\int \\left(1 + x^{-3/2}\\right) \\mathrm{d}x', explanation: 'The integrand is now a sum of two power-rule terms.' },
                { stepNumber: 4, description: 'Integrate \\( 1 \\).', workingLatex: '\\int 1 \\, \\mathrm{d}x = x', explanation: 'A constant integrates to \\( x \\).' },
                { stepNumber: 5, description: 'Integrate \\( x^{-3/2} \\).', workingLatex: '\\int x^{-3/2} \\, \\mathrm{d}x = \\frac{x^{-1/2}}{-1/2} = -2x^{-1/2}', explanation: 'Increase the index by 1: \\( -\\frac{3}{2} + 1 = -\\frac{1}{2} \\). Dividing by \\( -\\frac{1}{2} \\) gives a factor of \\( -2 \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'x - 2x^{-1/2} + C = x - \\frac{2}{\\sqrt{x}} + C', explanation: 'Combine the results and add the constant of integration.' }
            ],
            finalAnswer: '\\( x - \\dfrac{2}{\\sqrt{x}} + C \\)'
        }
    },
    {
        id: 'i1-082',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 82',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^2 + 3}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Split the fraction and rewrite \\( \\sqrt{x} \\) as \\( x^{1/2} \\).', workingLatex: '\\frac{x^2 + 3}{\\sqrt{x}} = \\frac{x^2}{x^{1/2}} + \\frac{3}{x^{1/2}}', explanation: 'Divide each term in the numerator by \\( x^{1/2} \\).' },
                { stepNumber: 2, description: 'Simplify each term using index laws.', workingLatex: '\\frac{x^2}{x^{1/2}} = x^{3/2}, \\qquad \\frac{3}{x^{1/2}} = 3x^{-1/2}', explanation: 'Subtract the indices: \\( 2 - \\frac{1}{2} = \\frac{3}{2} \\) and \\( 0 - \\frac{1}{2} = -\\frac{1}{2} \\).' },
                { stepNumber: 3, description: 'Integrate \\( x^{3/2} \\).', workingLatex: '\\int x^{3/2} \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} = \\frac{2}{5}x^{5/2}', explanation: 'Increase the index by 1: \\( \\frac{3}{2} + 1 = \\frac{5}{2} \\). Dividing by \\( \\frac{5}{2} \\) gives a factor of \\( \\frac{2}{5} \\).' },
                { stepNumber: 4, description: 'Integrate \\( 3x^{-1/2} \\).', workingLatex: '\\int 3x^{-1/2} \\, \\mathrm{d}x = 3 \\cdot \\frac{x^{1/2}}{1/2} = 6x^{1/2} = 6\\sqrt{x}', explanation: 'Increase the index by 1: \\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\). Then \\( 3 \\div \\frac{1}{2} = 6 \\).' },
                { stepNumber: 5, description: 'Combine and add the constant of integration.', workingLatex: '\\frac{2}{5}x^{5/2} + 6\\sqrt{x} + C', explanation: 'This is the fully simplified integral.' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: '\\frac{2}{5}x^{5/2} + 6\\sqrt{x} + C', explanation: 'Both terms are written in their simplest form.' }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{5/2} + 6\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-083',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 83',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(\\sqrt{x} + 1)^2}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the numerator.', workingLatex: '(\\sqrt{x} + 1)^2 = x + 2\\sqrt{x} + 1', explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sqrt{x} \\) and \\( b = 1 \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( \\sqrt{x} = x^{1/2} \\).', workingLatex: '\\frac{x + 2\\sqrt{x} + 1}{x^{1/2}} = x^{1/2} + 2 + x^{-1/2}', explanation: '\\( \\frac{x}{x^{1/2}} = x^{1/2} \\), \\( \\frac{2x^{1/2}}{x^{1/2}} = 2 \\), and \\( \\frac{1}{x^{1/2}} = x^{-1/2} \\).' },
                { stepNumber: 3, description: 'Integrate \\( x^{1/2} \\).', workingLatex: '\\int x^{1/2} \\, \\mathrm{d}x = \\frac{x^{3/2}}{3/2} = \\frac{2}{3}x^{3/2}', explanation: 'Increase the index by 1: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\).' },
                { stepNumber: 4, description: 'Integrate \\( 2 \\) and \\( x^{-1/2} \\).', workingLatex: '\\int 2 \\, \\mathrm{d}x = 2x, \\qquad \\int x^{-1/2} \\, \\mathrm{d}x = \\frac{x^{1/2}}{1/2} = 2x^{1/2}', explanation: 'For \\( x^{-1/2} \\), the new index is \\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\), and dividing by \\( \\frac{1}{2} \\) gives a factor of 2.' },
                { stepNumber: 5, description: 'Combine all terms and add the constant of integration.', workingLatex: '\\frac{2}{3}x^{3/2} + 2x + 2\\sqrt{x} + C', explanation: 'Write \\( 2x^{1/2} \\) as \\( 2\\sqrt{x} \\) for neatness.' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: '\\frac{2}{3}x^{3/2} + 2x + 2\\sqrt{x} + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{2}{3}x^{3/2} + 2x + 2\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-084',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 84',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x - 1)(x + 3)}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the numerator.', workingLatex: '(x - 1)(x + 3) = x^2 + 3x - x - 3 = x^2 + 2x - 3', explanation: 'Multiply the brackets: \\( x \\cdot x + x \\cdot 3 + (-1) \\cdot x + (-1) \\cdot 3 \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( \\sqrt{x} = x^{1/2} \\).', workingLatex: '\\frac{x^2 + 2x - 3}{x^{1/2}} = x^{3/2} + 2x^{1/2} - 3x^{-1/2}', explanation: 'Subtract \\( \\frac{1}{2} \\) from each index: \\( 2 - \\frac{1}{2} = \\frac{3}{2} \\), \\( 1 - \\frac{1}{2} = \\frac{1}{2} \\), \\( 0 - \\frac{1}{2} = -\\frac{1}{2} \\).' },
                { stepNumber: 3, description: 'Integrate \\( x^{3/2} \\).', workingLatex: '\\int x^{3/2} \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} = \\frac{2}{5}x^{5/2}', explanation: 'New index: \\( \\frac{3}{2} + 1 = \\frac{5}{2} \\).' },
                { stepNumber: 4, description: 'Integrate \\( 2x^{1/2} \\).', workingLatex: '\\int 2x^{1/2} \\, \\mathrm{d}x = 2 \\cdot \\frac{x^{3/2}}{3/2} = \\frac{4}{3}x^{3/2}', explanation: 'New index: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\). Then \\( 2 \\times \\frac{2}{3} = \\frac{4}{3} \\).' },
                { stepNumber: 5, description: 'Integrate \\( -3x^{-1/2} \\).', workingLatex: '\\int -3x^{-1/2} \\, \\mathrm{d}x = -3 \\cdot \\frac{x^{1/2}}{1/2} = -6x^{1/2} = -6\\sqrt{x}', explanation: 'New index: \\( -\\frac{1}{2} + 1 = \\frac{1}{2} \\). Then \\( -3 \\div \\frac{1}{2} = -6 \\).' },
                { stepNumber: 6, description: 'Combine all terms and add the constant of integration.', workingLatex: '\\frac{2}{5}x^{5/2} + \\frac{4}{3}x^{3/2} - 6\\sqrt{x} + C', explanation: 'This is the fully simplified integral.' }
            ],
            finalAnswer: '\\( \\dfrac{2}{5}x^{5/2} + \\dfrac{4}{3}x^{3/2} - 6\\sqrt{x} + C \\)'
        }
    },
    {
        id: 'i1-085',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 85',
        difficulty: 'Standard',
        questionText: 'A curve has gradient function \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = (2\\sqrt{x} - 3)^2 \\) and passes through the point \\( (1, 2) \\). Find the equation of the curve.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the squared bracket.', workingLatex: '(2\\sqrt{x} - 3)^2 = (2x^{1/2})^2 - 2(2x^{1/2})(3) + 3^2 = 4x - 12x^{1/2} + 9', explanation: 'Using \\( (a - b)^2 = a^2 - 2ab + b^2 \\) with \\( a = 2\\sqrt{x} \\) and \\( b = 3 \\).' },
                { stepNumber: 2, description: 'Integrate \\( 4x \\).', workingLatex: '\\int 4x \\, \\mathrm{d}x = 2x^2', explanation: 'Apply the power rule: \\( 4 \\cdot \\frac{x^2}{2} = 2x^2 \\).' },
                { stepNumber: 3, description: 'Integrate \\( -12x^{1/2} \\).', workingLatex: '\\int -12x^{1/2} \\, \\mathrm{d}x = -12 \\cdot \\frac{x^{3/2}}{3/2} = -8x^{3/2}', explanation: 'New index: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\). Then \\( -12 \\times \\frac{2}{3} = -8 \\).' },
                { stepNumber: 4, description: 'Integrate \\( 9 \\) and write the general equation.', workingLatex: 'y = 2x^2 - 8x^{3/2} + 9x + C', explanation: '\\( \\int 9 \\, \\mathrm{d}x = 9x \\). Include the constant of integration \\( C \\).' },
                { stepNumber: 5, description: 'Substitute the point \\( (1, 2) \\) to find \\( C \\).', workingLatex: '2 = 2(1)^2 - 8(1)^{3/2} + 9(1) + C = 2 - 8 + 9 + C = 3 + C', explanation: 'Set \\( x = 1 \\) and \\( y = 2 \\). Note \\( 1^{3/2} = 1 \\).' },
                { stepNumber: 6, description: 'Solve for \\( C \\).', workingLatex: 'C = 2 - 3 = -1', explanation: 'Subtract 3 from both sides.' },
                { stepNumber: 7, description: 'State the equation of the curve.', workingLatex: 'y = 2x^2 - 8x^{3/2} + 9x - 1', explanation: 'This is the required equation.' }
            ],
            finalAnswer: '\\( y = 2x^2 - 8x^{3/2} + 9x - 1 \\)'
        }
    },
    {
        id: 'i1-086',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 86',
        difficulty: 'Standard',
        questionText: 'A curve has gradient function \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = (\\sqrt{x} + 2)^2 \\) and passes through the point \\( (9, 100) \\). Find the equation of the curve.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the squared bracket.', workingLatex: '(\\sqrt{x} + 2)^2 = (x^{1/2})^2 + 2(x^{1/2})(2) + 2^2 = x + 4x^{1/2} + 4', explanation: 'Using \\( (a + b)^2 = a^2 + 2ab + b^2 \\) with \\( a = \\sqrt{x} \\) and \\( b = 2 \\).' },
                { stepNumber: 2, description: 'Integrate \\( x \\).', workingLatex: '\\int x \\, \\mathrm{d}x = \\frac{x^2}{2}', explanation: 'Standard power rule.' },
                { stepNumber: 3, description: 'Integrate \\( 4x^{1/2} \\).', workingLatex: '\\int 4x^{1/2} \\, \\mathrm{d}x = 4 \\cdot \\frac{x^{3/2}}{3/2} = \\frac{8}{3}x^{3/2}', explanation: 'New index: \\( \\frac{1}{2} + 1 = \\frac{3}{2} \\). Then \\( 4 \\times \\frac{2}{3} = \\frac{8}{3} \\).' },
                { stepNumber: 4, description: 'Integrate \\( 4 \\) and write the general equation.', workingLatex: 'y = \\frac{x^2}{2} + \\frac{8}{3}x^{3/2} + 4x + C', explanation: '\\( \\int 4 \\, \\mathrm{d}x = 4x \\). Include the constant of integration \\( C \\).' },
                { stepNumber: 5, description: 'Substitute the point \\( (9, 100) \\) to find \\( C \\).', workingLatex: '100 = \\frac{81}{2} + \\frac{8}{3}(27) + 36 + C = \\frac{81}{2} + 72 + 36 + C', explanation: '\\( 9^2 = 81 \\), \\( 9^{3/2} = (\\sqrt{9})^3 = 27 \\), and \\( 4 \\times 9 = 36 \\).' },
                { stepNumber: 6, description: 'Solve for \\( C \\).', workingLatex: '100 = 40.5 + 72 + 36 + C = 148.5 + C \\implies C = -48.5 = -\\frac{97}{2}', explanation: 'Subtract 148.5 from both sides, or equivalently \\( C = 100 - \\frac{297}{2} = \\frac{200 - 297}{2} = -\\frac{97}{2} \\).' },
                { stepNumber: 7, description: 'State the equation of the curve.', workingLatex: 'y = \\frac{x^2}{2} + \\frac{8}{3}x^{3/2} + 4x - \\frac{97}{2}', explanation: 'This is the required equation.' }
            ],
            finalAnswer: '\\( y = \\dfrac{x^2}{2} + \\dfrac{8}{3}x^{3/2} + 4x - \\dfrac{97}{2} \\)'
        }
    },
    {
        id: 'i1-087',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 87',
        difficulty: 'Standard',
        questionText: '(a) Show that \\( \\dfrac{(x - 2)^2}{\\sqrt{x}} = x^{3/2} - 4x^{1/2} + 4x^{-1/2} \\).\n\n(b) Hence find \\( \\displaystyle\\int \\frac{(x - 2)^2}{\\sqrt{x}} \\, \\mathrm{d}x \\).\n\n(c) Find the equation of the curve through \\( (1, 5) \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Expand the numerator.', workingLatex: '(x - 2)^2 = x^2 - 4x + 4', explanation: 'Using \\( (a - b)^2 = a^2 - 2ab + b^2 \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( \\sqrt{x} = x^{1/2} \\).', workingLatex: '\\frac{x^2 - 4x + 4}{x^{1/2}} = x^{3/2} - 4x^{1/2} + 4x^{-1/2}', explanation: 'Subtract \\( \\frac{1}{2} \\) from each index: \\( 2 - \\frac{1}{2} = \\frac{3}{2} \\), \\( 1 - \\frac{1}{2} = \\frac{1}{2} \\), \\( 0 - \\frac{1}{2} = -\\frac{1}{2} \\). This completes the proof.' },
                { stepNumber: 3, description: '(b) Integrate \\( x^{3/2} \\).', workingLatex: '\\int x^{3/2} \\, \\mathrm{d}x = \\frac{x^{5/2}}{5/2} = \\frac{2}{5}x^{5/2}', explanation: 'Increase the index by 1: \\( \\frac{3}{2} + 1 = \\frac{5}{2} \\).' },
                { stepNumber: 4, description: 'Integrate \\( -4x^{1/2} \\) and \\( 4x^{-1/2} \\).', workingLatex: '\\int -4x^{1/2} \\, \\mathrm{d}x = -\\frac{8}{3}x^{3/2}, \\qquad \\int 4x^{-1/2} \\, \\mathrm{d}x = 8x^{1/2}', explanation: 'For \\( -4x^{1/2} \\): new index \\( \\frac{3}{2} \\), coefficient \\( -4 \\times \\frac{2}{3} = -\\frac{8}{3} \\). For \\( 4x^{-1/2} \\): new index \\( \\frac{1}{2} \\), coefficient \\( 4 \\times 2 = 8 \\).' },
                { stepNumber: 5, description: 'State the integral.', workingLatex: '\\int \\frac{(x-2)^2}{\\sqrt{x}} \\, \\mathrm{d}x = \\frac{2}{5}x^{5/2} - \\frac{8}{3}x^{3/2} + 8\\sqrt{x} + C', explanation: 'Combine all three results and add the constant of integration. This completes part (b).' },
                { stepNumber: 6, description: '(c) Substitute the point \\( (1, 5) \\).', workingLatex: '5 = \\frac{2}{5} - \\frac{8}{3} + 8 + C = \\frac{6 - 40 + 120}{15} + C = \\frac{86}{15} + C', explanation: 'Set \\( x = 1 \\) and \\( y = 5 \\). Common denominator 15: \\( \\frac{2}{5} = \\frac{6}{15} \\), \\( -\\frac{8}{3} = -\\frac{40}{15} \\), \\( 8 = \\frac{120}{15} \\).' },
                { stepNumber: 7, description: 'Solve for \\( C \\) and state the equation.', workingLatex: 'C = 5 - \\frac{86}{15} = \\frac{75 - 86}{15} = -\\frac{11}{15}', explanation: 'So the equation of the curve is \\( y = \\frac{2}{5}x^{5/2} - \\frac{8}{3}x^{3/2} + 8\\sqrt{x} - \\frac{11}{15} \\).' }
            ],
            finalAnswer: '(a) Shown \\newline (b) \\( \\dfrac{2}{5}x^{5/2} - \\dfrac{8}{3}x^{3/2} + 8\\sqrt{x} + C \\) \\newline (c) \\( y = \\dfrac{2}{5}x^{5/2} - \\dfrac{8}{3}x^{3/2} + 8\\sqrt{x} - \\dfrac{11}{15} \\)'
        }
    },
    {
        id: 'i1-088',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 88',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x + 1)(x - 2)}{\\sqrt[3]{x^2}} \\, \\mathrm{d}x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the numerator.', workingLatex: '(x + 1)(x - 2) = x^2 - 2x + x - 2 = x^2 - x - 2', explanation: 'Multiply out the brackets.' },
                { stepNumber: 2, description: 'Rewrite the denominator in index form.', workingLatex: '\\sqrt[3]{x^2} = x^{2/3}', explanation: 'The cube root of \\( x^2 \\) is \\( x^{2/3} \\).' },
                { stepNumber: 3, description: 'Divide each term by \\( x^{2/3} \\).', workingLatex: '\\frac{x^2 - x - 2}{x^{2/3}} = x^{4/3} - x^{1/3} - 2x^{-2/3}', explanation: 'Subtract \\( \\frac{2}{3} \\) from each index: \\( 2 - \\frac{2}{3} = \\frac{4}{3} \\), \\( 1 - \\frac{2}{3} = \\frac{1}{3} \\), \\( 0 - \\frac{2}{3} = -\\frac{2}{3} \\).' },
                { stepNumber: 4, description: 'Integrate \\( x^{4/3} \\).', workingLatex: '\\int x^{4/3} \\, \\mathrm{d}x = \\frac{x^{7/3}}{7/3} = \\frac{3}{7}x^{7/3}', explanation: 'New index: \\( \\frac{4}{3} + 1 = \\frac{7}{3} \\). Dividing by \\( \\frac{7}{3} \\) gives a factor of \\( \\frac{3}{7} \\).' },
                { stepNumber: 5, description: 'Integrate \\( -x^{1/3} \\).', workingLatex: '\\int -x^{1/3} \\, \\mathrm{d}x = -\\frac{x^{4/3}}{4/3} = -\\frac{3}{4}x^{4/3}', explanation: 'New index: \\( \\frac{1}{3} + 1 = \\frac{4}{3} \\). Dividing by \\( \\frac{4}{3} \\) gives a factor of \\( \\frac{3}{4} \\).' },
                { stepNumber: 6, description: 'Integrate \\( -2x^{-2/3} \\).', workingLatex: '\\int -2x^{-2/3} \\, \\mathrm{d}x = -2 \\cdot \\frac{x^{1/3}}{1/3} = -6x^{1/3}', explanation: 'New index: \\( -\\frac{2}{3} + 1 = \\frac{1}{3} \\). Then \\( -2 \\div \\frac{1}{3} = -6 \\).' },
                { stepNumber: 7, description: 'Combine and add the constant of integration.', workingLatex: '\\frac{3}{7}x^{7/3} - \\frac{3}{4}x^{4/3} - 6x^{1/3} + C', explanation: 'This is the final answer. Optionally write \\( x^{1/3} = \\sqrt[3]{x} \\).' }
            ],
            finalAnswer: '\\( \\dfrac{3}{7}x^{7/3} - \\dfrac{3}{4}x^{4/3} - 6\\sqrt[3]{x} + C \\)'
        }
    },
    {
        id: 'i1-089',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 89',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\left( x^{2/3} + x^{-1/3} \\right)^2 \\mathrm{d}x \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand the squared bracket.', workingLatex: '\\left(x^{2/3} + x^{-1/3}\\right)^2 = x^{4/3} + 2x^{2/3} \\cdot x^{-1/3} + x^{-2/3} = x^{4/3} + 2x^{1/3} + x^{-2/3}', explanation: 'Using \\( (a+b)^2 = a^2 + 2ab + b^2 \\). The cross term: \\( 2 \\cdot x^{2/3} \\cdot x^{-1/3} = 2x^{(2/3 - 1/3)} = 2x^{1/3} \\).' },
                { stepNumber: 2, description: 'Integrate \\( x^{4/3} \\).', workingLatex: '\\int x^{4/3} \\, \\mathrm{d}x = \\frac{x^{7/3}}{7/3} = \\frac{3}{7}x^{7/3}', explanation: 'New index: \\( \\frac{4}{3} + 1 = \\frac{7}{3} \\).' },
                { stepNumber: 3, description: 'Integrate \\( 2x^{1/3} \\).', workingLatex: '\\int 2x^{1/3} \\, \\mathrm{d}x = 2 \\cdot \\frac{x^{4/3}}{4/3} = \\frac{3}{2}x^{4/3}', explanation: 'New index: \\( \\frac{1}{3} + 1 = \\frac{4}{3} \\). Then \\( 2 \\times \\frac{3}{4} = \\frac{3}{2} \\).' },
                { stepNumber: 4, description: 'Integrate \\( x^{-2/3} \\).', workingLatex: '\\int x^{-2/3} \\, \\mathrm{d}x = \\frac{x^{1/3}}{1/3} = 3x^{1/3}', explanation: 'New index: \\( -\\frac{2}{3} + 1 = \\frac{1}{3} \\). Dividing by \\( \\frac{1}{3} \\) gives a factor of 3.' },
                { stepNumber: 5, description: 'Combine all terms and add the constant of integration.', workingLatex: '\\frac{3}{7}x^{7/3} + \\frac{3}{2}x^{4/3} + 3x^{1/3} + C', explanation: 'This is the fully simplified integral.' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: '\\frac{3}{7}x^{7/3} + \\frac{3}{2}x^{4/3} + 3\\sqrt[3]{x} + C', explanation: 'Optionally write \\( x^{1/3} = \\sqrt[3]{x} \\) for the final term.' }
            ],
            finalAnswer: '\\( \\dfrac{3}{7}x^{7/3} + \\dfrac{3}{2}x^{4/3} + 3\\sqrt[3]{x} + C \\)'
        }
    },
    {
        id: 'i1-090',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 90',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'(x) = \\dfrac{x^2 - 4}{\\sqrt[3]{x}} \\) and \\( f(8) = 10 \\), find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Rewrite the denominator in index form.', workingLatex: '\\sqrt[3]{x} = x^{1/3}', explanation: 'The cube root of \\( x \\) is \\( x^{1/3} \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( x^{1/3} \\).', workingLatex: '\\frac{x^2 - 4}{x^{1/3}} = x^{5/3} - 4x^{-1/3}', explanation: 'Subtract \\( \\frac{1}{3} \\) from each index: \\( 2 - \\frac{1}{3} = \\frac{5}{3} \\) and \\( 0 - \\frac{1}{3} = -\\frac{1}{3} \\).' },
                { stepNumber: 3, description: 'Integrate \\( x^{5/3} \\).', workingLatex: '\\int x^{5/3} \\, \\mathrm{d}x = \\frac{x^{8/3}}{8/3} = \\frac{3}{8}x^{8/3}', explanation: 'New index: \\( \\frac{5}{3} + 1 = \\frac{8}{3} \\). Dividing by \\( \\frac{8}{3} \\) gives \\( \\frac{3}{8} \\).' },
                { stepNumber: 4, description: 'Integrate \\( -4x^{-1/3} \\).', workingLatex: '\\int -4x^{-1/3} \\, \\mathrm{d}x = -4 \\cdot \\frac{x^{2/3}}{2/3} = -6x^{2/3}', explanation: 'New index: \\( -\\frac{1}{3} + 1 = \\frac{2}{3} \\). Then \\( -4 \\times \\frac{3}{2} = -6 \\).' },
                { stepNumber: 5, description: 'Write the general expression for \\( f(x) \\).', workingLatex: 'f(x) = \\frac{3}{8}x^{8/3} - 6x^{2/3} + C', explanation: 'Combine the integrals and add the constant of integration.' },
                { stepNumber: 6, description: 'Substitute \\( f(8) = 10 \\) to find \\( C \\).', workingLatex: '10 = \\frac{3}{8}(8)^{8/3} - 6(8)^{2/3} + C = \\frac{3}{8}(256) - 6(4) + C = 96 - 24 + C = 72 + C', explanation: '\\( 8^{8/3} = (8^{1/3})^8 = 2^8 = 256 \\) and \\( 8^{2/3} = (8^{1/3})^2 = 4 \\).' },
                { stepNumber: 7, description: 'Solve for \\( C \\) and state the answer.', workingLatex: 'C = 10 - 72 = -62, \\qquad f(x) = \\frac{3}{8}x^{8/3} - 6x^{2/3} - 62', explanation: 'This is the required function.' }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{3}{8}x^{8/3} - 6x^{2/3} - 62 \\)'
        }
    },
    {
        id: 'i1-091',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 91',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^4 - 1}{x - 1} \\, \\mathrm{d}x \\), where \\( x \\neq 1 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the numerator using the difference of two squares.', workingLatex: 'x^4 - 1 = (x^2 + 1)(x^2 - 1) = (x^2 + 1)(x + 1)(x - 1)', explanation: 'First apply \\( a^2 - b^2 = (a+b)(a-b) \\) with \\( a = x^2 \\), then factorise \\( x^2 - 1 \\) again.' },
                { stepNumber: 2, description: 'Cancel the common factor \\( (x - 1) \\).', workingLatex: '\\frac{(x^2 + 1)(x + 1)(x - 1)}{x - 1} = (x^2 + 1)(x + 1)', explanation: 'Since \\( x \\neq 1 \\), we can cancel \\( (x - 1) \\).' },
                { stepNumber: 3, description: 'Expand the simplified expression.', workingLatex: '(x^2 + 1)(x + 1) = x^3 + x^2 + x + 1', explanation: 'Multiply: \\( x^2 \\cdot x + x^2 \\cdot 1 + 1 \\cdot x + 1 \\cdot 1 \\).' },
                { stepNumber: 4, description: 'Integrate each term.', workingLatex: '\\int (x^3 + x^2 + x + 1) \\, \\mathrm{d}x = \\frac{x^4}{4} + \\frac{x^3}{3} + \\frac{x^2}{2} + x + C', explanation: 'Apply the power rule to each term individually.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\frac{x^4}{4} + \\frac{x^3}{3} + \\frac{x^2}{2} + x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^4}{4} + \\dfrac{x^3}{3} + \\dfrac{x^2}{2} + x + C \\)'
        }
    },
    {
        id: 'i1-092',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 92',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^3 - 8}{x - 2} \\, \\mathrm{d}x \\), where \\( x \\neq 2 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the numerator using the difference of two cubes.', workingLatex: 'x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)', explanation: 'Using \\( a^3 - b^3 = (a - b)(a^2 + ab + b^2) \\) with \\( a = x \\) and \\( b = 2 \\).' },
                { stepNumber: 2, description: 'Cancel the common factor \\( (x - 2) \\).', workingLatex: '\\frac{(x - 2)(x^2 + 2x + 4)}{x - 2} = x^2 + 2x + 4', explanation: 'Since \\( x \\neq 2 \\), we can cancel \\( (x - 2) \\).' },
                { stepNumber: 3, description: 'Integrate each term.', workingLatex: '\\int (x^2 + 2x + 4) \\, \\mathrm{d}x = \\frac{x^3}{3} + x^2 + 4x + C', explanation: 'Apply the power rule to each term.' },
                { stepNumber: 4, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} + x^2 + 4x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + x^2 + 4x + C \\)'
        }
    },
    {
        id: 'i1-093',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 93',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^6 - 1}{x^3 - 1} \\, \\mathrm{d}x \\), where \\( x \\neq 1 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Recognise the numerator as a difference of two squares.', workingLatex: 'x^6 - 1 = (x^3)^2 - 1^2 = (x^3 - 1)(x^3 + 1)', explanation: 'Write \\( x^6 = (x^3)^2 \\) and apply \\( a^2 - b^2 = (a+b)(a-b) \\).' },
                { stepNumber: 2, description: 'Cancel the common factor \\( (x^3 - 1) \\).', workingLatex: '\\frac{(x^3 - 1)(x^3 + 1)}{x^3 - 1} = x^3 + 1', explanation: 'Since \\( x \\neq 1 \\), \\( x^3 \\neq 1 \\), so we can cancel \\( (x^3 - 1) \\).' },
                { stepNumber: 3, description: 'Integrate each term.', workingLatex: '\\int (x^3 + 1) \\, \\mathrm{d}x = \\frac{x^4}{4} + x + C', explanation: 'Apply the power rule: \\( \\int x^3 \\, \\mathrm{d}x = \\frac{x^4}{4} \\) and \\( \\int 1 \\, \\mathrm{d}x = x \\).' },
                { stepNumber: 4, description: 'State the final answer.', workingLatex: '\\frac{x^4}{4} + x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^4}{4} + x + C \\)'
        }
    },
    {
        id: 'i1-094',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 94',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'\'(x) = 6x + 2x^{-3/2} \\), \\( f\'(1) = 5 \\), and \\( f(1) = 3 \\), find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int \\left(6x + 2x^{-3/2}\\right) \\mathrm{d}x = 3x^2 - 4x^{-1/2} + A', explanation: 'For \\( 6x \\): \\( \\frac{6x^2}{2} = 3x^2 \\). For \\( 2x^{-3/2} \\): new index \\( -\\frac{1}{2} \\), coefficient \\( \\frac{2}{-1/2} = -4 \\). Use \\( A \\) for the constant.' },
                { stepNumber: 2, description: 'Use \\( f\'(1) = 5 \\) to find \\( A \\).', workingLatex: '5 = 3(1)^2 - 4(1)^{-1/2} + A = 3 - 4 + A = -1 + A \\implies A = 6', explanation: 'Substituting \\( x = 1 \\) gives \\( -1 + A = 5 \\), so \\( A = 6 \\).' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\).', workingLatex: 'f\'(x) = 3x^2 - 4x^{-1/2} + 6', explanation: 'Replace \\( A \\) with 6.' },
                { stepNumber: 4, description: 'Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int \\left(3x^2 - 4x^{-1/2} + 6\\right) \\mathrm{d}x = x^3 - 8x^{1/2} + 6x + B', explanation: 'For \\( 3x^2 \\): \\( x^3 \\). For \\( -4x^{-1/2} \\): new index \\( \\frac{1}{2} \\), coefficient \\( \\frac{-4}{1/2} = -8 \\). For \\( 6 \\): \\( 6x \\). Use \\( B \\) for the constant.' },
                { stepNumber: 5, description: 'Use \\( f(1) = 3 \\) to find \\( B \\).', workingLatex: '3 = (1)^3 - 8(1)^{1/2} + 6(1) + B = 1 - 8 + 6 + B = -1 + B \\implies B = 4', explanation: 'Substituting \\( x = 1 \\) gives \\( -1 + B = 3 \\), so \\( B = 4 \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'f(x) = x^3 - 8\\sqrt{x} + 6x + 4', explanation: 'Write \\( x^{1/2} = \\sqrt{x} \\) for neatness. This is the required function.' }
            ],
            finalAnswer: '\\( f(x) = x^3 - 8\\sqrt{x} + 6x + 4 \\)'
        }
    },
    {
        id: 'i1-095',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 95',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'\'(x) = 12x - 6 + 2x^{-3/2} \\).\n\n(a) Find \\( f\'(x) \\) given that \\( f\'(1) = 0 \\).\n\n(b) Find \\( f(x) \\) given that \\( f(1) = 0 \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int \\left(12x - 6 + 2x^{-3/2}\\right) \\mathrm{d}x = 6x^2 - 6x - 4x^{-1/2} + A', explanation: 'For \\( 12x \\): \\( 6x^2 \\). For \\( -6 \\): \\( -6x \\). For \\( 2x^{-3/2} \\): new index \\( -\\frac{1}{2} \\), coefficient \\( \\frac{2}{-1/2} = -4 \\). Use \\( A \\) for the constant.' },
                { stepNumber: 2, description: 'Use \\( f\'(1) = 0 \\) to find \\( A \\).', workingLatex: '0 = 6(1)^2 - 6(1) - 4(1)^{-1/2} + A = 6 - 6 - 4 + A = -4 + A \\implies A = 4', explanation: 'Substituting \\( x = 1 \\) gives \\( -4 + A = 0 \\), so \\( A = 4 \\).' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\).', workingLatex: 'f\'(x) = 6x^2 - 6x - 4x^{-1/2} + 4', explanation: 'This completes part (a).' },
                { stepNumber: 4, description: '(b) Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int \\left(6x^2 - 6x - 4x^{-1/2} + 4\\right) \\mathrm{d}x = 2x^3 - 3x^2 - 8x^{1/2} + 4x + B', explanation: 'For \\( 6x^2 \\): \\( 2x^3 \\). For \\( -6x \\): \\( -3x^2 \\). For \\( -4x^{-1/2} \\): new index \\( \\frac{1}{2} \\), coefficient \\( \\frac{-4}{1/2} = -8 \\). For \\( 4 \\): \\( 4x \\). Use \\( B \\) for the constant.' },
                { stepNumber: 5, description: 'Use \\( f(1) = 0 \\) to find \\( B \\).', workingLatex: '0 = 2(1)^3 - 3(1)^2 - 8(1)^{1/2} + 4(1) + B = 2 - 3 - 8 + 4 + B = -5 + B \\implies B = 5', explanation: 'Substituting \\( x = 1 \\) gives \\( -5 + B = 0 \\), so \\( B = 5 \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'f(x) = 2x^3 - 3x^2 - 8\\sqrt{x} + 4x + 5', explanation: 'Write \\( x^{1/2} = \\sqrt{x} \\). This is the required function.' },
                { stepNumber: 7, description: 'Summarise both answers.', workingLatex: '\\text{(a)}\\; f\'(x) = 6x^2 - 6x - 4x^{-1/2} + 4, \\qquad \\text{(b)}\\; f(x) = 2x^3 - 3x^2 - 8\\sqrt{x} + 4x + 5', explanation: 'These are the required results for parts (a) and (b).' }
            ],
            finalAnswer: '(a) \\( f\'(x) = 6x^2 - 6x - 4x^{-1/2} + 4 \\) \\newline (b) \\( f(x) = 2x^3 - 3x^2 - 8\\sqrt{x} + 4x + 5 \\)'
        }
    },

    {
        id: 'i1-096',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 96',
        difficulty: 'Standard',
        questionText: 'A curve has gradient function \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + kx - 4 \\), where \\( k \\) is a constant. The tangent to the curve at \\( (2, 5) \\) is horizontal.\n\n(a) Find the value of \\( k \\).\n\n(b) Given the curve passes through \\( (2, 5) \\), find \\( y \\) in terms of \\( x \\).\n\n(c) Find where the curve crosses the \\( y \\)-axis.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) A horizontal tangent means \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) at \\( x = 2 \\).', workingLatex: '3(2)^2 + k(2) - 4 = 0', explanation: 'Substitute \\( x = 2 \\) into the gradient function and set it equal to zero.' },
                { stepNumber: 2, description: 'Solve for \\( k \\).', workingLatex: '12 + 2k - 4 = 0 \\implies 8 + 2k = 0 \\implies k = -4', explanation: 'Simplify and rearrange to find \\( k = -4 \\).' },
                { stepNumber: 3, description: '(b) Write the gradient function with \\( k = -4 \\) and integrate.', workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4x - 4', explanation: 'Substitute \\( k = -4 \\) into the gradient function.' },
                { stepNumber: 4, description: 'Integrate to find \\( y \\).', workingLatex: 'y = \\int (3x^2 - 4x - 4) \\, \\mathrm{d}x = x^3 - 2x^2 - 4x + C', explanation: 'Apply the power rule to each term: \\( \\frac{3x^3}{3} = x^3 \\), \\( \\frac{4x^2}{2} = 2x^2 \\), \\( 4x \\).' },
                { stepNumber: 5, description: 'Use the point \\( (2, 5) \\) to find \\( C \\).', workingLatex: '5 = (2)^3 - 2(2)^2 - 4(2) + C = 8 - 8 - 8 + C = -8 + C \\implies C = 13', explanation: 'Substitute \\( x = 2 \\), \\( y = 5 \\) and solve for \\( C \\).' },
                { stepNumber: 6, description: 'State the equation of the curve.', workingLatex: 'y = x^3 - 2x^2 - 4x + 13', explanation: 'This completes part (b).' },
                { stepNumber: 7, description: '(c) The curve crosses the \\( y \\)-axis when \\( x = 0 \\).', workingLatex: 'y = (0)^3 - 2(0)^2 - 4(0) + 13 = 13', explanation: 'Substitute \\( x = 0 \\) into the equation.' },
                { stepNumber: 8, description: 'State the crossing point.', workingLatex: '\\text{The curve crosses the } y\\text{-axis at } (0,\\, 13).', explanation: 'This completes part (c).' }
            ],
            finalAnswer: '(a) \\( k = -4 \\) \\newline (b) \\( y = x^3 - 2x^2 - 4x + 13 \\) \\newline (c) \\( (0,\\, 13) \\)'
        }
    },
    {
        id: 'i1-097',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 97',
        difficulty: 'Standard',
        questionText: 'A curve has gradient \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = ax^2 + bx \\). The curve passes through \\( (1, 0) \\) and \\( (3, 8) \\), and has a stationary point at \\( x = 2 \\).\n\n(a) Find the values of \\( a \\) and \\( b \\).\n\n(b) Find the equation of the curve.\n\n(c) Classify the stationary point at \\( x = 2 \\).',
        marks: 9,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) At the stationary point \\( x = 2 \\), the gradient is zero.', workingLatex: 'a(2)^2 + b(2) = 0 \\implies 4a + 2b = 0 \\implies b = -2a', explanation: 'Set \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) at \\( x = 2 \\) and express \\( b \\) in terms of \\( a \\).' },
                { stepNumber: 2, description: 'Integrate the gradient function.', workingLatex: 'y = \\int (ax^2 + bx) \\, \\mathrm{d}x = \\frac{a}{3}x^3 + \\frac{b}{2}x^2 + C', explanation: 'Apply the power rule to each term.' },
                { stepNumber: 3, description: 'Use the point \\( (1, 0) \\).', workingLatex: '0 = \\frac{a}{3} + \\frac{b}{2} + C \\quad \\cdots \\text{(i)}', explanation: 'Substitute \\( x = 1 \\), \\( y = 0 \\) into the equation of the curve.' },
                { stepNumber: 4, description: 'Use the point \\( (3, 8) \\).', workingLatex: '8 = \\frac{a}{3}(27) + \\frac{b}{2}(9) + C = 9a + \\frac{9b}{2} + C \\quad \\cdots \\text{(ii)}', explanation: 'Substitute \\( x = 3 \\), \\( y = 8 \\) into the equation of the curve.' },
                { stepNumber: 5, description: 'Subtract (i) from (ii) to eliminate \\( C \\).', workingLatex: '8 = 9a + \\frac{9b}{2} - \\frac{a}{3} - \\frac{b}{2} = \\frac{26a}{3} + 4b', explanation: 'This gives a single equation in \\( a \\) and \\( b \\).' },
                { stepNumber: 6, description: 'Substitute \\( b = -2a \\) and solve.', workingLatex: '\\frac{26a}{3} + 4(-2a) = 8 \\implies \\frac{26a}{3} - 8a = 8 \\implies \\frac{26a - 24a}{3} = 8 \\implies \\frac{2a}{3} = 8 \\implies a = 12', explanation: 'Substitute \\( b = -2a \\) and solve for \\( a \\). Then \\( b = -2(12) = -24 \\).' },
                { stepNumber: 7, description: '(b) Find \\( C \\) using equation (i).', workingLatex: '0 = \\frac{12}{3} + \\frac{-24}{2} + C = 4 - 12 + C \\implies C = 8', explanation: 'Substitute \\( a = 12 \\) and \\( b = -24 \\) into equation (i) and solve for \\( C \\).' },
                { stepNumber: 8, description: 'State the equation of the curve.', workingLatex: 'y = 4x^3 - 12x^2 + 8', explanation: 'Substitute \\( a = 12 \\), \\( b = -24 \\) and \\( C = 8 \\). Note \\( \\frac{12}{3} = 4 \\) and \\( \\frac{-24}{2} = -12 \\).' },
                { stepNumber: 9, description: '(c) Find the second derivative and evaluate at \\( x = 2 \\).', workingLatex: '\\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} = 24x - 24. \\quad \\text{At } x = 2: \\; 24(2) - 24 = 24 > 0', explanation: 'Since \\( \\frac{\\mathrm{d}^2 y}{\\mathrm{d}x^2} > 0 \\) at \\( x = 2 \\), the stationary point is a minimum.' },
                { stepNumber: 10, description: 'State the classification.', workingLatex: '\\text{The stationary point at } x = 2 \\text{ is a minimum.}', explanation: 'A positive second derivative indicates a minimum point.' }
            ],
            finalAnswer: '(a) \\( a = 12,\\; b = -24 \\) \\newline (b) \\( y = 4x^3 - 12x^2 + 8 \\) \\newline (c) Minimum'
        }
    },
    {
        id: 'i1-098',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 98',
        difficulty: 'Standard',
        questionText: 'The gradient of a curve is \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = \\dfrac{(2x-1)(x+3)}{\\sqrt{x}} \\). The curve passes through the point \\( (1, 4) \\).\n\n(a) Express \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) in the form \\( ax^{3/2} + bx^{1/2} + cx^{-1/2} \\).\n\n(b) Find the equation of the curve.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Expand the numerator \\( (2x-1)(x+3) \\).', workingLatex: '(2x-1)(x+3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3', explanation: 'Multiply out the brackets in the numerator.' },
                { stepNumber: 2, description: 'Divide each term by \\( \\sqrt{x} = x^{1/2} \\).', workingLatex: '\\frac{2x^2 + 5x - 3}{x^{1/2}} = 2x^{3/2} + 5x^{1/2} - 3x^{-1/2}', explanation: 'Subtract \\( \\frac{1}{2} \\) from each power: \\( 2 - \\frac{1}{2} = \\frac{3}{2} \\), \\( 1 - \\frac{1}{2} = \\frac{1}{2} \\), \\( 0 - \\frac{1}{2} = -\\frac{1}{2} \\). So \\( a = 2 \\), \\( b = 5 \\), \\( c = -3 \\).' },
                { stepNumber: 3, description: '(b) Integrate each term.', workingLatex: 'y = \\int \\left(2x^{3/2} + 5x^{1/2} - 3x^{-1/2}\\right) \\mathrm{d}x = \\frac{2x^{5/2}}{5/2} + \\frac{5x^{3/2}}{3/2} - \\frac{3x^{1/2}}{1/2} + C', explanation: 'Apply the power rule to each term, increasing the index by 1 and dividing by the new index.' },
                { stepNumber: 4, description: 'Simplify the coefficients.', workingLatex: 'y = \\frac{4}{5}x^{5/2} + \\frac{10}{3}x^{3/2} - 6x^{1/2} + C', explanation: 'Dividing by a fraction: \\( \\frac{2}{5/2} = \\frac{4}{5} \\), \\( \\frac{5}{3/2} = \\frac{10}{3} \\), \\( \\frac{3}{1/2} = 6 \\).' },
                { stepNumber: 5, description: 'Substitute the point \\( (1, 4) \\) to find \\( C \\).', workingLatex: '4 = \\frac{4}{5}(1) + \\frac{10}{3}(1) - 6(1) + C = \\frac{4}{5} + \\frac{10}{3} - 6 + C', explanation: 'Since \\( x = 1 \\), each power of \\( x \\) equals 1.' },
                { stepNumber: 6, description: 'Find a common denominator and solve for \\( C \\).', workingLatex: '\\frac{4}{5} + \\frac{10}{3} - 6 = \\frac{12}{15} + \\frac{50}{15} - \\frac{90}{15} = \\frac{-28}{15}. \\quad 4 = -\\frac{28}{15} + C \\implies C = 4 + \\frac{28}{15} = \\frac{60 + 28}{15} = \\frac{88}{15}', explanation: 'Convert to fifteenths and solve for \\( C \\).' },
                { stepNumber: 7, description: 'State the equation of the curve.', workingLatex: 'y = \\frac{4}{5}x^{5/2} + \\frac{10}{3}x^{3/2} - 6x^{1/2} + \\frac{88}{15}', explanation: 'This is the required equation.' }
            ],
            finalAnswer: '(a) \\( a = 2,\\; b = 5,\\; c = -3 \\) \\newline (b) \\( y = \\dfrac{4}{5}x^{5/2} + \\dfrac{10}{3}x^{3/2} - 6x^{1/2} + \\dfrac{88}{15} \\)'
        }
    },
    {
        id: 'i1-099',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 99',
        difficulty: 'Standard',
        questionText: 'A curve \\( y = f(x) \\) has \\( f\'(x) = 6x^2 - kx + 2 \\). The normal to the curve at \\( x = 1 \\) has gradient \\( -\\dfrac{1}{4} \\).\n\n(a) Find the value of \\( k \\).\n\n(b) Given that \\( f(0) = 3 \\), find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) The normal gradient is the negative reciprocal of the tangent gradient.', workingLatex: '\\text{Normal gradient} = -\\frac{1}{4} \\implies \\text{tangent gradient} = 4', explanation: 'If the normal has gradient \\( m_n \\), the tangent has gradient \\( m_t = -\\frac{1}{m_n} = -\\frac{1}{-1/4} = 4 \\).' },
                { stepNumber: 2, description: 'Set \\( f\'(1) = 4 \\) and solve for \\( k \\).', workingLatex: 'f\'(1) = 6(1)^2 - k(1) + 2 = 6 - k + 2 = 8 - k = 4 \\implies k = 4', explanation: 'Substitute \\( x = 1 \\) into \\( f\'(x) \\) and set equal to the tangent gradient.' },
                { stepNumber: 3, description: '(b) Write \\( f\'(x) \\) with \\( k = 4 \\) and integrate.', workingLatex: 'f\'(x) = 6x^2 - 4x + 2', explanation: 'Substitute \\( k = 4 \\) into the gradient function.' },
                { stepNumber: 4, description: 'Integrate to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (6x^2 - 4x + 2) \\, \\mathrm{d}x = 2x^3 - 2x^2 + 2x + C', explanation: 'Apply the power rule: \\( \\frac{6x^3}{3} = 2x^3 \\), \\( \\frac{4x^2}{2} = 2x^2 \\), and \\( 2x \\).' },
                { stepNumber: 5, description: 'Use \\( f(0) = 3 \\) to find \\( C \\).', workingLatex: 'f(0) = 0 - 0 + 0 + C = C = 3', explanation: 'Substitute \\( x = 0 \\) to find \\( C = 3 \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'f(x) = 2x^3 - 2x^2 + 2x + 3', explanation: 'This is the required function.' }
            ],
            finalAnswer: '(a) \\( k = 4 \\) \\newline (b) \\( f(x) = 2x^3 - 2x^2 + 2x + 3 \\)'
        }
    },
    {
        id: 'i1-100',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 100',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x^2 - 4)(x + 1)}{x - 2} \\, \\mathrm{d}x \\), where \\( x \\neq 2 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise \\( x^2 - 4 \\) as a difference of two squares.', workingLatex: 'x^2 - 4 = (x - 2)(x + 2)', explanation: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\) with \\( a = x \\) and \\( b = 2 \\).' },
                { stepNumber: 2, description: 'Cancel the common factor \\( (x - 2) \\).', workingLatex: '\\frac{(x - 2)(x + 2)(x + 1)}{x - 2} = (x + 2)(x + 1)', explanation: 'Since \\( x \\neq 2 \\), we can cancel \\( (x - 2) \\).' },
                { stepNumber: 3, description: 'Expand the simplified expression.', workingLatex: '(x + 2)(x + 1) = x^2 + 3x + 2', explanation: 'Multiply: \\( x \\cdot x + x \\cdot 1 + 2 \\cdot x + 2 \\cdot 1 = x^2 + 3x + 2 \\).' },
                { stepNumber: 4, description: 'Integrate each term.', workingLatex: '\\int (x^2 + 3x + 2) \\, \\mathrm{d}x = \\frac{x^3}{3} + \\frac{3x^2}{2} + 2x + C', explanation: 'Apply the power rule to each term individually.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} + \\frac{3x^2}{2} + 2x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + \\dfrac{3x^2}{2} + 2x + C \\)'
        }
    },
    {
        id: 'i1-101',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 101',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x^2 - 9)(x - 1)}{x + 3} \\, \\mathrm{d}x \\), where \\( x \\neq -3 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise \\( x^2 - 9 \\) as a difference of two squares.', workingLatex: 'x^2 - 9 = (x - 3)(x + 3)', explanation: 'Apply \\( a^2 - b^2 = (a - b)(a + b) \\) with \\( a = x \\) and \\( b = 3 \\).' },
                { stepNumber: 2, description: 'Cancel the common factor \\( (x + 3) \\).', workingLatex: '\\frac{(x - 3)(x + 3)(x - 1)}{x + 3} = (x - 3)(x - 1)', explanation: 'Since \\( x \\neq -3 \\), we can cancel \\( (x + 3) \\).' },
                { stepNumber: 3, description: 'Expand the simplified expression.', workingLatex: '(x - 3)(x - 1) = x^2 - 4x + 3', explanation: 'Multiply: \\( x \\cdot x + x \\cdot (-1) + (-3) \\cdot x + (-3)(-1) = x^2 - 4x + 3 \\).' },
                { stepNumber: 4, description: 'Integrate each term.', workingLatex: '\\int (x^2 - 4x + 3) \\, \\mathrm{d}x = \\frac{x^3}{3} - 2x^2 + 3x + C', explanation: 'Apply the power rule to each term individually.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} - 2x^2 + 3x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - 2x^2 + 3x + C \\)'
        }
    },
    {
        id: 'i1-102',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 102',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{x^4 - 16}{x^2 - 4} \\, \\mathrm{d}x \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the numerator using the difference of two squares.', workingLatex: 'x^4 - 16 = (x^2)^2 - 4^2 = (x^2 - 4)(x^2 + 4)', explanation: 'Write \\( x^4 = (x^2)^2 \\) and \\( 16 = 4^2 \\), then apply \\( a^2 - b^2 = (a-b)(a+b) \\).' },
                { stepNumber: 2, description: 'Cancel the common factor \\( (x^2 - 4) \\).', workingLatex: '\\frac{(x^2 - 4)(x^2 + 4)}{x^2 - 4} = x^2 + 4', explanation: 'Cancel \\( (x^2 - 4) \\) from numerator and denominator.' },
                { stepNumber: 3, description: 'Integrate each term.', workingLatex: '\\int (x^2 + 4) \\, \\mathrm{d}x = \\frac{x^3}{3} + 4x + C', explanation: 'Apply the power rule: \\( \\int x^2 \\, \\mathrm{d}x = \\frac{x^3}{3} \\) and \\( \\int 4 \\, \\mathrm{d}x = 4x \\).' },
                { stepNumber: 4, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} + 4x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} + 4x + C \\)'
        }
    },
    {
        id: 'i1-103',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 103',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(x^3 + 1)(x - 1)}{x^2 - 1} \\, \\mathrm{d}x \\), where \\( x \\neq \\pm 1 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Factorise the denominator.', workingLatex: 'x^2 - 1 = (x - 1)(x + 1)', explanation: 'Apply the difference of two squares.' },
                { stepNumber: 2, description: 'Factorise the sum of cubes in the numerator.', workingLatex: 'x^3 + 1 = (x + 1)(x^2 - x + 1)', explanation: 'Apply \\( a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\) with \\( a = x \\) and \\( b = 1 \\).' },
                { stepNumber: 3, description: 'Rewrite the integrand and cancel common factors.', workingLatex: '\\frac{(x + 1)(x^2 - x + 1)(x - 1)}{(x - 1)(x + 1)} = x^2 - x + 1', explanation: 'Cancel \\( (x - 1) \\) and \\( (x + 1) \\) from numerator and denominator.' },
                { stepNumber: 4, description: 'Integrate each term.', workingLatex: '\\int (x^2 - x + 1) \\, \\mathrm{d}x = \\frac{x^3}{3} - \\frac{x^2}{2} + x + C', explanation: 'Apply the power rule to each term individually.' },
                { stepNumber: 5, description: 'State the final answer.', workingLatex: '\\frac{x^3}{3} - \\frac{x^2}{2} + x + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^3}{3} - \\dfrac{x^2}{2} + x + C \\)'
        }
    },
    {
        id: 'i1-104',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 104',
        difficulty: 'Standard',
        questionText: 'A curve \\( y = f(x) \\) has \\( f\'\'(x) = 12x - 6 \\). The curve has a stationary point at \\( (1, 2) \\).\n\n(a) Find \\( f\'(x) \\).\n\n(b) Find \\( f(x) \\).\n\n(c) Determine the nature of the stationary point at \\( x = 1 \\).',
        marks: 9,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int (12x - 6) \\, \\mathrm{d}x = 6x^2 - 6x + A', explanation: 'Apply the power rule and introduce constant \\( A \\).' },
                { stepNumber: 2, description: 'Use the stationary point condition: \\( f\'(1) = 0 \\).', workingLatex: '0 = 6(1)^2 - 6(1) + A = 6 - 6 + A = A \\implies A = 0', explanation: 'At a stationary point the gradient is zero.' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\).', workingLatex: 'f\'(x) = 6x^2 - 6x', explanation: 'This completes part (a).' },
                { stepNumber: 4, description: '(b) Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (6x^2 - 6x) \\, \\mathrm{d}x = 2x^3 - 3x^2 + B', explanation: 'Apply the power rule: \\( \\frac{6x^3}{3} = 2x^3 \\) and \\( \\frac{6x^2}{2} = 3x^2 \\). Use \\( B \\) for the constant.' },
                { stepNumber: 5, description: 'Use \\( f(1) = 2 \\) to find \\( B \\).', workingLatex: '2 = 2(1)^3 - 3(1)^2 + B = 2 - 3 + B = -1 + B \\implies B = 3', explanation: 'Substitute \\( x = 1 \\), \\( y = 2 \\) and solve for \\( B \\).' },
                { stepNumber: 6, description: 'State \\( f(x) \\).', workingLatex: 'f(x) = 2x^3 - 3x^2 + 3', explanation: 'This completes part (b).' },
                { stepNumber: 7, description: '(c) Evaluate \\( f\'\'(1) \\) to classify the stationary point.', workingLatex: 'f\'\'(1) = 12(1) - 6 = 6 > 0', explanation: 'Since \\( f\'\'(1) > 0 \\), the stationary point at \\( (1, 2) \\) is a minimum.' }
            ],
            finalAnswer: '(a) \\( f\'(x) = 6x^2 - 6x \\) \\newline (b) \\( f(x) = 2x^3 - 3x^2 + 3 \\) \\newline (c) Minimum'
        }
    },
    {
        id: 'i1-105',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 105',
        difficulty: 'Standard',
        questionText: 'Given \\( f\'\'(x) = 6 + 4x^{-3/2} \\), \\( f\'(4) = 20 \\), and \\( f(4) = 50 \\).\n\n(a) Find \\( f\'(x) \\).\n\n(b) Find \\( f(x) \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int \\left(6 + 4x^{-3/2}\\right) \\mathrm{d}x = 6x - 8x^{-1/2} + A', explanation: 'For \\( 6 \\): \\( 6x \\). For \\( 4x^{-3/2} \\): new index \\( -\\frac{1}{2} \\), coefficient \\( \\frac{4}{-1/2} = -8 \\). Use \\( A \\) for the constant.' },
                { stepNumber: 2, description: 'Use \\( f\'(4) = 20 \\) to find \\( A \\).', workingLatex: '20 = 6(4) - 8(4)^{-1/2} + A = 24 - 8 \\cdot \\frac{1}{2} + A = 24 - 4 + A = 20 + A \\implies A = 0', explanation: 'Note \\( (4)^{-1/2} = \\frac{1}{\\sqrt{4}} = \\frac{1}{2} \\). So \\( A = 0 \\).' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\).', workingLatex: 'f\'(x) = 6x - 8x^{-1/2}', explanation: 'This completes part (a).' },
                { stepNumber: 4, description: '(b) Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int \\left(6x - 8x^{-1/2}\\right) \\mathrm{d}x = 3x^2 - 16x^{1/2} + B', explanation: 'For \\( 6x \\): \\( 3x^2 \\). For \\( -8x^{-1/2} \\): new index \\( \\frac{1}{2} \\), coefficient \\( \\frac{-8}{1/2} = -16 \\). Use \\( B \\) for the constant.' },
                { stepNumber: 5, description: 'Use \\( f(4) = 50 \\) to find \\( B \\).', workingLatex: '50 = 3(4)^2 - 16(4)^{1/2} + B = 48 - 16(2) + B = 48 - 32 + B = 16 + B \\implies B = 34', explanation: 'Note \\( (4)^{1/2} = 2 \\). Solve for \\( B \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'f(x) = 3x^2 - 16\\sqrt{x} + 34', explanation: 'Write \\( x^{1/2} = \\sqrt{x} \\). This is the required function.' },
                { stepNumber: 7, description: 'Summarise both answers.', workingLatex: '\\text{(a)}\\; f\'(x) = 6x - 8x^{-1/2}, \\qquad \\text{(b)}\\; f(x) = 3x^2 - 16\\sqrt{x} + 34', explanation: 'These are the required results for parts (a) and (b).' }
            ],
            finalAnswer: '(a) \\( f\'(x) = 6x - 8x^{-1/2} \\) \\newline (b) \\( f(x) = 3x^2 - 16\\sqrt{x} + 34 \\)'
        }
    },
    {
        id: 'i1-106',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 106',
        difficulty: 'Standard',
        questionText: 'A curve \\( y = f(x) \\) has \\( f\'\'(x) = 2 - 6x^{-5/2} \\). The curve has a stationary point at \\( (1, 5) \\).\n\n(a) Show that \\( f\'(x) = 2x + 4x^{-3/2} - 6 \\).\n\n(b) Find \\( f(x) \\).',
        marks: 9,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int \\left(2 - 6x^{-5/2}\\right) \\mathrm{d}x = 2x + 4x^{-3/2} + A', explanation: 'For \\( 2 \\): \\( 2x \\). For \\( -6x^{-5/2} \\): new index \\( -\\frac{3}{2} \\), coefficient \\( \\frac{-6}{-3/2} = 4 \\). Use \\( A \\) for the constant.' },
                { stepNumber: 2, description: 'Use \\( f\'(1) = 0 \\) (stationary point) to find \\( A \\).', workingLatex: '0 = 2(1) + 4(1)^{-3/2} + A = 2 + 4 + A = 6 + A \\implies A = -6', explanation: 'At a stationary point the gradient is zero. Substitute \\( x = 1 \\) and solve.' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\) as required.', workingLatex: 'f\'(x) = 2x + 4x^{-3/2} - 6 \\qquad \\square', explanation: 'This confirms the given result.' },
                { stepNumber: 4, description: '(b) Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int \\left(2x + 4x^{-3/2} - 6\\right) \\mathrm{d}x = x^2 - 8x^{-1/2} - 6x + B', explanation: 'For \\( 2x \\): \\( x^2 \\). For \\( 4x^{-3/2} \\): new index \\( -\\frac{1}{2} \\), coefficient \\( \\frac{4}{-1/2} = -8 \\). For \\( -6 \\): \\( -6x \\). Use \\( B \\) for the constant.' },
                { stepNumber: 5, description: 'Use \\( f(1) = 5 \\) to find \\( B \\).', workingLatex: '5 = (1)^2 - 8(1)^{-1/2} - 6(1) + B = 1 - 8 - 6 + B = -13 + B \\implies B = 18', explanation: 'Substitute \\( x = 1 \\), \\( y = 5 \\) and solve for \\( B \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: 'f(x) = x^2 - \\frac{8}{\\sqrt{x}} - 6x + 18', explanation: 'Write \\( x^{-1/2} = \\frac{1}{\\sqrt{x}} \\). This is the required function.' }
            ],
            finalAnswer: '(a) Shown. \\newline (b) \\( f(x) = x^2 - \\dfrac{8}{\\sqrt{x}} - 6x + 18 \\)'
        }
    },
    {
        id: 'i1-107',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 107',
        difficulty: 'Standard',
        questionText: 'A curve \\( y = f(x) \\) has \\( f\'\'(x) = 12x - 18 \\). The curve has a minimum point at \\( (2, -3) \\).\n\n(a) Find \\( f\'(x) \\).\n\n(b) Find \\( f(x) \\).\n\n(c) Find the coordinates of any other stationary points.\n\n(d) Determine whether this point is a maximum or a minimum.',
        marks: 10,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) Integrate \\( f\'\'(x) \\) to find \\( f\'(x) \\).', workingLatex: 'f\'(x) = \\int (12x - 18) \\, \\mathrm{d}x = 6x^2 - 18x + A', explanation: 'Apply the power rule and introduce constant \\( A \\).' },
                { stepNumber: 2, description: 'Use \\( f\'(2) = 0 \\) (stationary point) to find \\( A \\).', workingLatex: '0 = 6(2)^2 - 18(2) + A = 24 - 36 + A = -12 + A \\implies A = 12', explanation: 'At a minimum point the gradient is zero.' },
                { stepNumber: 3, description: 'State \\( f\'(x) \\).', workingLatex: 'f\'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2)', explanation: 'Factorise to help find the other stationary point later.' },
                { stepNumber: 4, description: '(b) Integrate \\( f\'(x) \\) to find \\( f(x) \\).', workingLatex: 'f(x) = \\int (6x^2 - 18x + 12) \\, \\mathrm{d}x = 2x^3 - 9x^2 + 12x + B', explanation: 'Apply the power rule: \\( \\frac{6x^3}{3} = 2x^3 \\), \\( \\frac{18x^2}{2} = 9x^2 \\), \\( 12x \\). Use \\( B \\) for the constant.' },
                { stepNumber: 5, description: 'Use \\( f(2) = -3 \\) to find \\( B \\).', workingLatex: '-3 = 2(2)^3 - 9(2)^2 + 12(2) + B = 16 - 36 + 24 + B = 4 + B \\implies B = -7', explanation: 'Substitute \\( x = 2 \\), \\( y = -3 \\) and solve for \\( B \\).' },
                { stepNumber: 6, description: 'State \\( f(x) \\).', workingLatex: 'f(x) = 2x^3 - 9x^2 + 12x - 7', explanation: 'This completes part (b).' },
                { stepNumber: 7, description: '(c) Find the other stationary point from \\( f\'(x) = 6(x-1)(x-2) = 0 \\).', workingLatex: 'x = 1 \\quad \\text{or} \\quad x = 2', explanation: 'The other stationary point occurs at \\( x = 1 \\).' },
                { stepNumber: 8, description: 'Find the \\( y \\)-coordinate at \\( x = 1 \\).', workingLatex: 'f(1) = 2(1)^3 - 9(1)^2 + 12(1) - 7 = 2 - 9 + 12 - 7 = -2', explanation: 'The other stationary point is \\( (1, -2) \\).' },
                { stepNumber: 9, description: '(d) Evaluate \\( f\'\'(1) \\) to classify.', workingLatex: 'f\'\'(1) = 12(1) - 18 = -6 < 0', explanation: 'Since \\( f\'\'(1) < 0 \\), the point \\( (1, -2) \\) is a maximum.' },
                { stepNumber: 10, description: 'State the conclusion.', workingLatex: '\\text{The point } (1, -2) \\text{ is a maximum.}', explanation: 'A negative second derivative indicates a maximum point.' }
            ],
            finalAnswer: '(a) \\( f\'(x) = 6x^2 - 18x + 12 \\) \\newline (b) \\( f(x) = 2x^3 - 9x^2 + 12x - 7 \\) \\newline (c) \\( (1, -2) \\) \\newline (d) Maximum'
        }
    },
    {
        id: 'i1-108',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 108',
        difficulty: 'Standard',
        questionText: 'Find \\( \\displaystyle\\int \\frac{(\\sqrt{x} + 2)^3}{\\sqrt{x}} \\, \\mathrm{d}x \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Expand \\( (\\sqrt{x} + 2)^3 \\) using the binomial expansion.', workingLatex: '(\\sqrt{x} + 2)^3 = (\\sqrt{x})^3 + 3(\\sqrt{x})^2(2) + 3(\\sqrt{x})(4) + 8 = x^{3/2} + 6x + 12x^{1/2} + 8', explanation: 'Apply \\( (a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3 \\) with \\( a = \\sqrt{x} \\) and \\( b = 2 \\).' },
                { stepNumber: 2, description: 'Divide each term by \\( \\sqrt{x} = x^{1/2} \\).', workingLatex: '\\frac{x^{3/2} + 6x + 12x^{1/2} + 8}{x^{1/2}} = x + 6x^{1/2} + 12 + 8x^{-1/2}', explanation: 'Subtract \\( \\frac{1}{2} \\) from each power: \\( \\frac{3}{2} - \\frac{1}{2} = 1 \\), \\( 1 - \\frac{1}{2} = \\frac{1}{2} \\), \\( \\frac{1}{2} - \\frac{1}{2} = 0 \\), \\( 0 - \\frac{1}{2} = -\\frac{1}{2} \\).' },
                { stepNumber: 3, description: 'Integrate each term.', workingLatex: '\\int \\left(x + 6x^{1/2} + 12 + 8x^{-1/2}\\right) \\mathrm{d}x = \\frac{x^2}{2} + \\frac{6x^{3/2}}{3/2} + 12x + \\frac{8x^{1/2}}{1/2} + C', explanation: 'Apply the power rule to each term.' },
                { stepNumber: 4, description: 'Simplify the coefficients.', workingLatex: '\\frac{x^2}{2} + 4x^{3/2} + 12x + 16x^{1/2} + C', explanation: 'Dividing by a fraction: \\( \\frac{6}{3/2} = 4 \\) and \\( \\frac{8}{1/2} = 16 \\).' },
                { stepNumber: 5, description: 'Rewrite using surds for neatness.', workingLatex: '\\frac{x^2}{2} + 4x\\sqrt{x} + 12x + 16\\sqrt{x} + C', explanation: 'Write \\( x^{3/2} = x\\sqrt{x} \\) and \\( x^{1/2} = \\sqrt{x} \\).' },
                { stepNumber: 6, description: 'State the final answer.', workingLatex: '\\frac{x^2}{2} + 4x^{3/2} + 12x + 16x^{1/2} + C', explanation: 'This is the required integral.' }
            ],
            finalAnswer: '\\( \\dfrac{x^2}{2} + 4x^{3/2} + 12x + 16x^{1/2} + C \\)'
        }
    },
    {
        id: 'i1-109',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 109',
        difficulty: 'Standard',
        questionText: 'The curve \\( y = f(x) \\) satisfies \\( f\'(x) = px^2 + qx \\) where \\( p \\) and \\( q \\) are constants. The curve has stationary points at \\( x = 0 \\) and \\( x = 4 \\), and passes through the origin and \\( (4, -16) \\). Find \\( f(x) \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: 'Note that \\( f\'(x) = px^2 + qx = x(px + q) \\). The stationary point at \\( x = 0 \\) is automatic.', workingLatex: 'f\'(0) = 0 \\; \\text{(satisfied automatically)}', explanation: 'Since \\( f\'(x) = x(px + q) \\), \\( f\'(0) = 0 \\) regardless of \\( p \\) and \\( q \\).' },
                { stepNumber: 2, description: 'Use the stationary point at \\( x = 4 \\).', workingLatex: 'f\'(4) = p(4)^2 + q(4) = 16p + 4q = 0 \\implies q = -4p', explanation: 'Set \\( f\'(4) = 0 \\) and express \\( q \\) in terms of \\( p \\).' },
                { stepNumber: 3, description: 'Integrate \\( f\'(x) \\) using \\( q = -4p \\).', workingLatex: 'f(x) = \\int (px^2 - 4px) \\, \\mathrm{d}x = \\frac{p}{3}x^3 - 2px^2 + C', explanation: 'Apply the power rule to each term.' },
                { stepNumber: 4, description: 'Use \\( f(0) = 0 \\) (passes through the origin).', workingLatex: '0 = \\frac{p}{3}(0)^3 - 2p(0)^2 + C \\implies C = 0', explanation: 'Substitute \\( x = 0 \\), \\( y = 0 \\) to find \\( C = 0 \\).' },
                { stepNumber: 5, description: 'Use \\( f(4) = -16 \\) to find \\( p \\).', workingLatex: '-16 = \\frac{p}{3}(64) - 2p(16) = \\frac{64p}{3} - 32p = \\frac{64p - 96p}{3} = \\frac{-32p}{3}', explanation: 'Substitute \\( x = 4 \\), \\( y = -16 \\) into the equation.' },
                { stepNumber: 6, description: 'Solve for \\( p \\) and \\( q \\).', workingLatex: '\\frac{-32p}{3} = -16 \\implies p = \\frac{3}{2}. \\quad q = -4 \\times \\frac{3}{2} = -6', explanation: 'Multiply both sides by \\( -\\frac{3}{32} \\) to find \\( p \\), then substitute to find \\( q \\).' },
                { stepNumber: 7, description: 'State the final answer.', workingLatex: 'f(x) = \\frac{1}{2}x^3 - 3x^2', explanation: 'Substitute \\( p = \\frac{3}{2} \\): \\( \\frac{p}{3} = \\frac{1}{2} \\) and \\( 2p = 3 \\).' }
            ],
            finalAnswer: '\\( f(x) = \\dfrac{1}{2}x^3 - 3x^2 \\)'
        }
    },
    {
        id: 'i1-110',
        topicRef: 'i1',
        topicTitle: 'Indefinite Integration 110',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = ax^3 + bx^2 + cx + d \\). The curve passes through \\( (0, 1) \\), has a stationary point at \\( (1, 0) \\), and the gradient at \\( x = -1 \\) is \\( 12 \\).\n\n(a) Write down the value of \\( d \\).\n\n(b) Form three equations in \\( a \\), \\( b \\), and \\( c \\).\n\n(c) Solve to find \\( a \\), \\( b \\), and \\( c \\).\n\n(d) State the equation of the curve.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                { stepNumber: 1, description: '(a) The curve passes through \\( (0, 1) \\), so substitute \\( x = 0 \\), \\( y = 1 \\).', workingLatex: '1 = a(0)^3 + b(0)^2 + c(0) + d \\implies d = 1', explanation: 'All terms with \\( x \\) vanish, leaving \\( d = 1 \\).' },
                { stepNumber: 2, description: '(b) The gradient is \\( y\' = 3ax^2 + 2bx + c \\). Use the curve passing through \\( (1, 0) \\).', workingLatex: '0 = a + b + c + 1 \\implies a + b + c = -1 \\quad \\cdots \\text{(i)}', explanation: 'Substitute \\( x = 1 \\), \\( y = 0 \\) with \\( d = 1 \\).' },
                { stepNumber: 3, description: 'Use the stationary point at \\( (1, 0) \\): \\( y\'(1) = 0 \\).', workingLatex: '3a + 2b + c = 0 \\quad \\cdots \\text{(ii)}', explanation: 'At a stationary point the gradient is zero.' },
                { stepNumber: 4, description: 'Use the gradient at \\( x = -1 \\) being \\( 12 \\).', workingLatex: '3a(-1)^2 + 2b(-1) + c = 12 \\implies 3a - 2b + c = 12 \\quad \\cdots \\text{(iii)}', explanation: 'Substitute \\( x = -1 \\) into \\( y\' \\) and set equal to \\( 12 \\).' },
                { stepNumber: 5, description: '(c) Subtract (ii) from (iii) to find \\( b \\).', workingLatex: '(3a - 2b + c) - (3a + 2b + c) = 12 - 0 \\implies -4b = 12 \\implies b = -3', explanation: 'The \\( 3a \\) and \\( c \\) terms cancel.' },
                { stepNumber: 6, description: 'Substitute \\( b = -3 \\) into (ii) to express \\( c \\) in terms of \\( a \\).', workingLatex: '3a + 2(-3) + c = 0 \\implies 3a - 6 + c = 0 \\implies c = 6 - 3a', explanation: 'Rearrange equation (ii).' },
                { stepNumber: 7, description: 'Substitute \\( b = -3 \\) and \\( c = 6 - 3a \\) into (i) to find \\( a \\).', workingLatex: 'a + (-3) + (6 - 3a) = -1 \\implies -2a + 3 = -1 \\implies -2a = -4 \\implies a = 2', explanation: 'Solve for \\( a \\).' },
                { stepNumber: 8, description: 'Find \\( c \\).', workingLatex: 'c = 6 - 3(2) = 0', explanation: 'Substitute \\( a = 2 \\) back into \\( c = 6 - 3a \\).' },
                { stepNumber: 9, description: '(d) State the equation of the curve.', workingLatex: 'y = 2x^3 - 3x^2 + 1', explanation: 'Substitute \\( a = 2 \\), \\( b = -3 \\), \\( c = 0 \\), \\( d = 1 \\).' }
            ],
            finalAnswer: '(a) \\( d = 1 \\) \\newline (b) \\( a + b + c = -1 \\), \\( 3a + 2b + c = 0 \\), \\( 3a - 2b + c = 12 \\) \\newline (c) \\( a = 2,\\; b = -3,\\; c = 0 \\) \\newline (d) \\( y = 2x^3 - 3x^2 + 1 \\)'
        }
    }

];
