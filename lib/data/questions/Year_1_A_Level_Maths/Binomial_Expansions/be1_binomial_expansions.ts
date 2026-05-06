import { Question } from "@/lib/types";

/**
 * Topic: Binomial Expansions
 * Ref:   BE
 */
export const questions: Question[] = [

    // ─── TYPE A: Full Expansion (Q1–7) ───────────────────────────────────────

    {
        id: 'be-001',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 01',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 + x)^5 \\) in ascending powers of \\( x \\), giving all terms.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the binomial theorem',
                    explanation: 'The binomial theorem states that \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Here \\(a = 1\\), \\(b = x\\), \\(n = 5\\).',
                    workingLatex: '(1+x)^5 = \\sum_{r=0}^{5} \\binom{5}{r} x^r'
                },
                {
                    stepNumber: 2,
                    description: 'Write out all six terms',
                    explanation: 'Expand the sum by writing each term from \\(r = 0\\) to \\(r = 5\\).',
                    workingLatex: '= \\binom{5}{0} + \\binom{5}{1}x + \\binom{5}{2}x^2 + \\binom{5}{3}x^3 + \\binom{5}{4}x^4 + \\binom{5}{5}x^5'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the binomial coefficients',
                    explanation: 'Row 5 of Pascal\'s triangle is 1, 5, 10, 10, 5, 1. So \\(\\binom{5}{0}=1\\), \\(\\binom{5}{1}=5\\), \\(\\binom{5}{2}=\\frac{5 \\times 4}{2!}=10\\), \\(\\binom{5}{3}=10\\), \\(\\binom{5}{4}=5\\), \\(\\binom{5}{5}=1\\).',
                    workingLatex: '= 1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5'
                }
            ],
            finalAnswer: '1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5'
        }
    },

    {
        id: 'be-002',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 02',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (x + 3)^4 \\) in ascending powers of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the binomial theorem',
                    explanation: 'The binomial theorem gives \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Here \\(a = 3\\), \\(b = x\\), \\(n = 4\\) for ascending powers of \\(x\\).',
                    workingLatex: '(x+3)^4 = \\binom{4}{0}(3)^4 + \\binom{4}{1}(3)^3 x + \\binom{4}{2}(3)^2 x^2 + \\binom{4}{3}(3) x^3 + \\binom{4}{4} x^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficients',
                    explanation: 'Row 4 of Pascal\'s triangle is 1, 4, 6, 4, 1. So \\(\\binom{4}{0}=1\\), \\(\\binom{4}{1}=4\\), \\(\\binom{4}{2}=6\\), \\(\\binom{4}{3}=4\\), \\(\\binom{4}{4}=1\\).',
                    workingLatex: '= 1 \\cdot 81 + 4 \\cdot 27 \\cdot x + 6 \\cdot 9 \\cdot x^2 + 4 \\cdot 3 \\cdot x^3 + 1 \\cdot x^4'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(4 \\times 27 = 108\\), \\(6 \\times 9 = 54\\), \\(4 \\times 3 = 12\\).',
                    workingLatex: '= 81 + 108x + 54x^2 + 12x^3 + x^4'
                }
            ],
            finalAnswer: '\\(81 + 108x + 54x^2 + 12x^3 + x^4\\)'
        }
    },

    {
        id: 'be-003',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 03',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (2 + x)^4 \\) fully, giving all terms in ascending powers of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the binomial expansion',
                    explanation: 'Apply the binomial theorem with \\(a = 2\\), \\(b = x\\), \\(n = 4\\).',
                    workingLatex: '(2+x)^4 = \\binom{4}{0}(2)^4 + \\binom{4}{1}(2)^3 x + \\binom{4}{2}(2)^2 x^2 + \\binom{4}{3}(2)x^3 + \\binom{4}{4}x^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficients',
                    explanation: 'Row 4 of Pascal\'s triangle is 1, 4, 6, 4, 1. Also evaluate powers of 2: \\(2^4=16\\), \\(2^3=8\\), \\(2^2=4\\), \\(2^1=2\\).',
                    workingLatex: '= 1 \\cdot 16 + 4 \\cdot 8 \\cdot x + 6 \\cdot 4 \\cdot x^2 + 4 \\cdot 2 \\cdot x^3 + 1 \\cdot x^4'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(4 \\times 8 = 32\\), \\(6 \\times 4 = 24\\), \\(4 \\times 2 = 8\\).',
                    workingLatex: '= 16 + 32x + 24x^2 + 8x^3 + x^4'
                }
            ],
            finalAnswer: '16 + 32x + 24x^2 + 8x^3 + x^4'
        }
    },

    {
        id: 'be-004',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 04',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 - 2x)^5 \\) in ascending powers of \\( x \\), giving all terms.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the binomial expansion',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -2x\\), \\(n = 5\\). Be careful with the signs.',
                    workingLatex: '(1-2x)^5 = \\binom{5}{0} + \\binom{5}{1}(-2x) + \\binom{5}{2}(-2x)^2 + \\binom{5}{3}(-2x)^3 + \\binom{5}{4}(-2x)^4 + \\binom{5}{5}(-2x)^5'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate coefficients and powers',
                    explanation: 'Row 5 of Pascal\'s triangle is 1, 5, 10, 10, 5, 1. Evaluate powers: \\((-2x)^2 = 4x^2\\), \\((-2x)^3 = -8x^3\\), \\((-2x)^4 = 16x^4\\), \\((-2x)^5 = -32x^5\\).',
                    workingLatex: '= 1 + 5(-2x) + 10(4x^2) + 10(-8x^3) + 5(16x^4) + 1(-32x^5)'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(5 \\times (-2) = -10\\), \\(10 \\times 4 = 40\\), \\(10 \\times (-8) = -80\\), \\(5 \\times 16 = 80\\). Signs alternate because odd powers of \\(-2x\\) are negative.',
                    workingLatex: '= 1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5'
                }
            ],
            finalAnswer: '\\(1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5\\)'
        }
    },

    {
        id: 'be-005',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 05',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (3x - 1)^4 \\) in ascending powers of \\( x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the binomial expansion',
                    explanation: 'Apply the binomial theorem with \\(a = -1\\), \\(b = 3x\\), \\(n = 4\\). Writing \\(b = 3x\\) ensures ascending powers of \\(x\\).',
                    workingLatex: '(3x-1)^4 = \\binom{4}{0}(-1)^4 + \\binom{4}{1}(-1)^3(3x) + \\binom{4}{2}(-1)^2(3x)^2 + \\binom{4}{3}(-1)(3x)^3 + \\binom{4}{4}(3x)^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate coefficients and powers',
                    explanation: 'Row 4 of Pascal\'s triangle is 1, 4, 6, 4, 1. Evaluate: \\((-1)^4=1\\), \\((-1)^3=-1\\), \\((-1)^2=1\\), \\((3x)^2=9x^2\\), \\((3x)^3=27x^3\\), \\((3x)^4=81x^4\\).',
                    workingLatex: '= 1 - 4(3x) + 6(9x^2) - 4(27x^3) + 81x^4'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(4 \\times 3 = 12\\), \\(6 \\times 9 = 54\\), \\(4 \\times 27 = 108\\). Signs alternate because odd powers of \\(-1\\) are negative.',
                    workingLatex: '= 1 - 12x + 54x^2 - 108x^3 + 81x^4'
                }
            ],
            finalAnswer: '\\(1 - 12x + 54x^2 - 108x^3 + 81x^4\\)'
        }
    },

    {
        id: 'be-006',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 06',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (2x + y)^3 \\) fully.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the binomial expansion',
                    explanation: 'Apply the binomial theorem with \\(a = 2x\\), \\(b = y\\), \\(n = 3\\).',
                    workingLatex: '(2x+y)^3 = \\binom{3}{0}(2x)^3 + \\binom{3}{1}(2x)^2(y) + \\binom{3}{2}(2x)(y)^2 + \\binom{3}{3}(y)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate coefficients and powers',
                    explanation: 'Row 3 of Pascal\'s triangle is 1, 3, 3, 1. Evaluate powers: \\((2x)^3 = 8x^3\\), \\((2x)^2 = 4x^2\\), \\((2x)^1 = 2x\\).',
                    workingLatex: '= 1 \\cdot 8x^3 + 3 \\cdot 4x^2 \\cdot y + 3 \\cdot 2x \\cdot y^2 + 1 \\cdot y^3'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(3 \\times 4 = 12\\), \\(3 \\times 2 = 6\\).',
                    workingLatex: '= 8x^3 + 12x^2 y + 6xy^2 + y^3'
                }
            ],
            finalAnswer: '8x^3 + 12x^2 y + 6xy^2 + y^3'
        }
    },

    {
        id: 'be-007',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 07',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 + 3x)^6 \\) in ascending powers of \\( x \\), up to and including the term in \\( x^3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\).',
                    explanation: 'Write the first four terms of the expansion with \\(b = 3x\\).',
                    workingLatex: '(1+3x)^6 = \\binom{6}{0} + \\binom{6}{1}(3x) + \\binom{6}{2}(3x)^2 + \\binom{6}{3}(3x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Compute: \\(\\binom{6}{1}=6\\), \\(\\binom{6}{2}=15\\), \\(\\binom{6}{3}=20\\); and \\((3x)^2 = 9x^2\\), \\((3x)^3 = 27x^3\\).',
                    workingLatex: '= 1 + 6(3x) + 15(9x^2) + 20(27x^3)'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    explanation: 'Simplify.',
                    workingLatex: '= 1 + 18x + 135x^2 + 540x^3 + \\ldots'
                }
            ],
            finalAnswer: '1 + 18x + 135x^2 + 540x^3 + \\ldots'
        }
    },

    // ─── TYPE B: Evaluate nCr (Q8–14) ────────────────────────────────────────

    {
        id: 'be-008',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 08',
        difficulty: 'Foundation',
        questionText: 'Without using a calculator, evaluate \\( \\binom{7}{3} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the formula',
                    explanation: 'The binomial coefficient formula is \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\). Substitute \\(n = 7\\), \\(r = 3\\).',
                    workingLatex: '\\binom{7}{3} = \\frac{7!}{3! \\times 4!}'
                },
                {
                    stepNumber: 2,
                    description: 'Cancel the common factorial',
                    explanation: 'Cancel \\(4!\\) from numerator and denominator, leaving only the top 3 factors of \\(7!\\) in the numerator.',
                    workingLatex: '= \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the fraction',
                    explanation: 'Numerator: \\(7 \\times 6 \\times 5 = 210\\). Denominator: \\(3! = 6\\). Then \\(210 \\div 6 = 35\\).',
                    workingLatex: '= \\frac{210}{6} = 35'
                }
            ],
            finalAnswer: '\\binom{7}{3} = 35'
        }
    },

    {
        id: 'be-009',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 09',
        difficulty: 'Foundation',
        questionText: 'Without using a calculator, evaluate \\( \\binom{9}{2} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the formula',
                    explanation: 'Use \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\) with \\(n = 9\\), \\(r = 2\\).',
                    workingLatex: '\\binom{9}{2} = \\frac{9!}{2! \\times 7!}'
                },
                {
                    stepNumber: 2,
                    description: 'Cancel the common factorial',
                    explanation: 'Cancel \\(7!\\) from numerator and denominator, leaving the top 2 factors of \\(9!\\).',
                    workingLatex: '= \\frac{9 \\times 8}{2 \\times 1}'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the fraction',
                    explanation: 'Numerator: \\(9 \\times 8 = 72\\). Denominator: \\(2! = 2\\). Then \\(72 \\div 2 = 36\\).',
                    workingLatex: '= \\frac{72}{2} = 36'
                }
            ],
            finalAnswer: '\\binom{9}{2} = 36'
        }
    },

    {
        id: 'be-010',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 10',
        difficulty: 'Foundation',
        questionText: 'Without using a calculator, evaluate \\( \\binom{10}{4} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the formula',
                    explanation: 'Use \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\) with \\(n = 10\\), \\(r = 4\\). Cancel \\(6!\\) from numerator and denominator.',
                    workingLatex: '\\binom{10}{4} = \\frac{10!}{4! \\times 6!} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the numerator',
                    explanation: 'Multiply: \\(10 \\times 9 = 90\\), \\(90 \\times 8 = 720\\), \\(720 \\times 7 = 5040\\).',
                    workingLatex: '10 \\times 9 \\times 8 \\times 7 = 5040'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by the denominator',
                    explanation: 'The denominator is \\(4! = 24\\). Divide: \\(5040 \\div 24 = 210\\).',
                    workingLatex: '\\frac{5040}{24} = 210'
                }
            ],
            finalAnswer: '\\binom{10}{4} = 210'
        }
    },

    {
        id: 'be-011',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 11',
        difficulty: 'Foundation',
        questionText: 'Without using a calculator, evaluate \\( \\binom{8}{5} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Use the symmetry property',
                    explanation: 'Since \\(\\binom{n}{r} = \\binom{n}{n-r}\\), we have \\(\\binom{8}{5} = \\binom{8}{3}\\). This makes computation easier.',
                    workingLatex: '\\binom{8}{5} = \\binom{8}{3}'
                },
                {
                    stepNumber: 2,
                    description: 'Apply the formula',
                    explanation: 'Cancel \\(5!\\) from \\(8!\\) to leave the top 3 factors in the numerator.',
                    workingLatex: '\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the fraction',
                    explanation: 'Numerator: \\(8 \\times 7 \\times 6 = 336\\). Denominator: \\(3! = 6\\). Then \\(336 \\div 6 = 56\\).',
                    workingLatex: '= \\frac{336}{6} = 56'
                }
            ],
            finalAnswer: '\\binom{8}{5} = 56'
        }
    },

    {
        id: 'be-012',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 12',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\binom{12}{3} \\) without a calculator.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the formula',
                    explanation: 'Use \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\) with \\(n = 12\\), \\(r = 3\\). Cancel \\(9!\\) from numerator and denominator.',
                    workingLatex: '\\binom{12}{3} = \\frac{12!}{3! \\times 9!} = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the numerator',
                    explanation: 'Multiply: \\(12 \\times 11 = 132\\), \\(132 \\times 10 = 1320\\).',
                    workingLatex: '12 \\times 11 \\times 10 = 1320'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by the denominator',
                    explanation: 'The denominator is \\(3! = 6\\). Divide: \\(1320 \\div 6 = 220\\).',
                    workingLatex: '\\frac{1320}{6} = 220'
                }
            ],
            finalAnswer: '\\binom{12}{3} = 220'
        }
    },

    {
        id: 'be-013',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 13',
        difficulty: 'Foundation',
        questionText: 'Find the value of \\( \\binom{n}{2} \\) when \\( n = 6 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute n = 6 into the formula',
                    explanation: 'Use \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\) with \\(n = 6\\), \\(r = 2\\). Cancel \\(4!\\) from numerator and denominator.',
                    workingLatex: '\\binom{6}{2} = \\frac{6!}{2! \\times 4!} = \\frac{6 \\times 5}{2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the numerator',
                    explanation: 'Multiply: \\(6 \\times 5 = 30\\).',
                    workingLatex: '6 \\times 5 = 30'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by the denominator',
                    explanation: 'The denominator is \\(2! = 2\\). Divide: \\(30 \\div 2 = 15\\).',
                    workingLatex: '\\frac{30}{2} = 15'
                }
            ],
            finalAnswer: '\\binom{6}{2} = 15'
        }
    },

    {
        id: 'be-014',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 14',
        difficulty: 'Foundation',
        questionText: 'Evaluate \\( \\binom{11}{4} \\) without a calculator, showing all working.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the formula',
                    explanation: 'Use \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\) with \\(n = 11\\), \\(r = 4\\). Cancel \\(7!\\) from numerator and denominator.',
                    workingLatex: '\\binom{11}{4} = \\frac{11!}{4! \\times 7!} = \\frac{11 \\times 10 \\times 9 \\times 8}{4 \\times 3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the numerator',
                    explanation: 'Multiply step by step: \\(11 \\times 10 = 110\\), \\(110 \\times 9 = 990\\), \\(990 \\times 8 = 7920\\).',
                    workingLatex: '11 \\times 10 \\times 9 \\times 8 = 7920'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by the denominator',
                    explanation: 'The denominator is \\(4! = 24\\). Divide: \\(7920 \\div 24 = 330\\).',
                    workingLatex: '\\binom{11}{4} = \\frac{7920}{24} = 330'
                }
            ],
            finalAnswer: '\\binom{11}{4} = 330'
        }
    },

    // ─── TYPE C: Find coefficient of x^r (Q15–22) ────────────────────────────

    {
        id: 'be-015',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 15',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^3 \\) in the expansion of \\( (1 + x)^8 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the general term',
                    explanation: 'The general term of \\((1+x)^8\\) is \\(\\binom{8}{r} x^r\\). For \\(x^3\\), set \\(r = 3\\).',
                    workingLatex: '\\text{Coefficient of } x^3 = \\binom{8}{3}'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Use the formula: \\(\\binom{8}{3} = \\frac{8!}{3! \\times 5!}\\). Cancel \\(5!\\) to get the top 3 factors.',
                    workingLatex: '\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the fraction',
                    explanation: 'Numerator: \\(8 \\times 7 \\times 6 = 336\\). Denominator: \\(3! = 6\\). Then \\(336 \\div 6 = 56\\).',
                    workingLatex: '= \\frac{336}{6} = 56'
                }
            ],
            finalAnswer: '\\(56\\)'
        }
    },

    {
        id: 'be-016',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 16',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^4 \\) in the expansion of \\( (1 - x)^{10} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'The general term of \\((1 - x)^{10}\\) is \\(\\binom{10}{r}(-x)^r = \\binom{10}{r}(-1)^r x^r\\). For \\(x^4\\), set \\(r = 4\\).',
                    workingLatex: '\\text{Term in } x^4 = \\binom{10}{4}(-1)^4 x^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4!} = \\frac{5040}{24} = 210\\).',
                    workingLatex: '\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210'
                },
                {
                    stepNumber: 3,
                    description: 'Determine the sign',
                    explanation: 'Since \\(r = 4\\) is even, \\((-1)^4 = 1\\), so the coefficient is positive: \\(210 \\times 1 = 210\\).',
                    workingLatex: '\\text{Coefficient of } x^4 = 210 \\times 1 = 210'
                }
            ],
            finalAnswer: '210'
        }
    },

    {
        id: 'be-017',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 17',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^2 \\) in the expansion of \\( (1 + 3x)^{11} \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^2 term',
                    explanation: 'The general term of \\((1 + 3x)^{11}\\) is \\(\\binom{11}{r}(3x)^r\\). For \\(x^2\\), set \\(r = 2\\).',
                    workingLatex: '\\text{Term in } x^2 = \\binom{11}{2}(3x)^2'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{11}{2} = \\frac{11 \\times 10}{2 \\times 1} = 55\\).',
                    workingLatex: '\\binom{11}{2} = \\frac{11 \\times 10}{2} = 55'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply to find the coefficient',
                    explanation: 'Evaluate \\((3x)^2 = 9x^2\\). Then multiply: \\(55 \\times 9 = 495\\).',
                    workingLatex: '55 \\times 9x^2 = 495x^2'
                }
            ],
            finalAnswer: '495'
        }
    },

    {
        id: 'be-018',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 18',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^3 \\) in the expansion of \\( (1 - 2x)^9 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^3 term',
                    explanation: 'The general term of \\((1 - 2x)^9\\) is \\(\\binom{9}{r}(-2x)^r\\). For \\(x^3\\), set \\(r = 3\\).',
                    workingLatex: '\\text{Term in } x^3 = \\binom{9}{3}(-2x)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3!} = \\frac{504}{6} = 84\\).',
                    workingLatex: '\\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the power and multiply',
                    explanation: 'Calculate \\((-2)^3 = -8\\). Since the power is odd, the sign is negative. Then \\(84 \\times (-8) = -672\\).',
                    workingLatex: '84 \\times (-8) x^3 = -672x^3'
                }
            ],
            finalAnswer: '-672'
        }
    },

    {
        id: 'be-019',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 19',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^2 \\) in the expansion of \\( (2 + x)^6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^2 term',
                    explanation: 'The general term of \\((2 + x)^6\\) is \\(\\binom{6}{r}(2)^{6-r} x^r\\). For \\(x^2\\), set \\(r = 2\\).',
                    workingLatex: '\\text{Term in } x^2 = \\binom{6}{2}(2)^{6-2} x^2 = \\binom{6}{2}(2)^4 x^2'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15\\). Also \\(2^4 = 16\\).',
                    workingLatex: '\\binom{6}{2} = 15, \\quad 2^4 = 16'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply to find the coefficient',
                    explanation: 'The coefficient of \\(x^2\\) is \\(15 \\times 16 = 240\\).',
                    workingLatex: '15 \\times 16 = 240'
                }
            ],
            finalAnswer: '240'
        }
    },

    {
        id: 'be-020',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 20',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^3 \\) in the expansion of \\( (3 + 2x)^5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^3 term',
                    explanation: 'The general term of \\((3 + 2x)^5\\) is \\(\\binom{5}{r}(3)^{5-r}(2x)^r\\). For \\(x^3\\), set \\(r = 3\\).',
                    workingLatex: '\\text{Term in } x^3 = \\binom{5}{3}(3)^{5-3}(2x)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each part',
                    explanation: 'Calculate \\(\\binom{5}{3} = \\binom{5}{2} = \\frac{5 \\times 4}{2} = 10\\). Also \\(3^2 = 9\\) and \\(2^3 = 8\\).',
                    workingLatex: '\\binom{5}{3} = 10, \\quad 3^2 = 9, \\quad 2^3 = 8'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply to find the coefficient',
                    explanation: 'The coefficient of \\(x^3\\) is \\(10 \\times 9 \\times 8 = 720\\).',
                    workingLatex: '10 \\times 9 \\times 8 = 720'
                }
            ],
            finalAnswer: '720'
        }
    },

    {
        id: 'be-021',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 21',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^5 \\) in the expansion of \\( (1 + x)^7 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^5 term',
                    explanation: 'The general term of \\((1 + x)^7\\) is \\(\\binom{7}{r} x^r\\). For \\(x^5\\), set \\(r = 5\\).',
                    workingLatex: '\\text{Coefficient of } x^5 = \\binom{7}{5}'
                },
                {
                    stepNumber: 2,
                    description: 'Use the symmetry property',
                    explanation: 'Since \\(\\binom{n}{r} = \\binom{n}{n-r}\\), we have \\(\\binom{7}{5} = \\binom{7}{2}\\). This is easier to compute.',
                    workingLatex: '\\binom{7}{5} = \\binom{7}{2} = \\frac{7 \\times 6}{2 \\times 1}'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the fraction',
                    explanation: 'Numerator: \\(7 \\times 6 = 42\\). Denominator: \\(2! = 2\\). Then \\(42 \\div 2 = 21\\).',
                    workingLatex: '= \\frac{42}{2} = 21'
                }
            ],
            finalAnswer: '21'
        }
    },

    {
        id: 'be-022',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 22',
        difficulty: 'Foundation',
        questionText: 'The expansion of \\( (1 + ax)^6 \\) has coefficient of \\( x^2 \\) equal to 60. Find the value of \\( a \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'The binomial theorem gives \\((1 + ax)^6 = \\sum_{r=0}^{6} \\binom{6}{r}(ax)^r\\). We need the term where \\(r = 2\\) to get \\(x^2\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r}(ax)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the x^2 term',
                    explanation: 'Set \\(r = 2\\) to pick out the \\(x^2\\) term. Remember that \\((ax)^2 = a^2 x^2\\), so the coefficient of \\(x^2\\) involves \\(a^2\\).',
                    workingLatex: 'T_3 = \\binom{6}{2} a^2 x^2'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{6}{2} = \\frac{6!}{2! \\times 4!} = \\frac{6 \\times 5}{2 \\times 1} = 15\\). A common mistake is forgetting to evaluate this coefficient.',
                    workingLatex: '\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15'
                },
                {
                    stepNumber: 4,
                    description: 'Set coefficient equal to 60',
                    explanation: 'The coefficient of \\(x^2\\) is \\(15a^2\\). Set this equal to the given value of 60.',
                    workingLatex: '15a^2 = 60'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for a^2',
                    explanation: 'Divide both sides by 15.',
                    workingLatex: 'a^2 = 4'
                },
                {
                    stepNumber: 6,
                    description: 'Take square roots',
                    explanation: 'Since \\(a^2 = 4\\), we get \\(a = \\pm 2\\). Do not forget the negative root unless the question specifies \\(a > 0\\).',
                    workingLatex: 'a = \\pm 2'
                }
            ],
            finalAnswer: 'a = 2 or a = -2'
        }
    },

    // ─── TYPE D: Term independent of x (Q23–28) ──────────────────────────────

    {
        id: 'be-023',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 23',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(x - \\dfrac{1}{x}\\right)^6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'Apply the binomial theorem with \\(a = x\\), \\(b = -\\frac{1}{x}\\), \\(n = 6\\). The general term is \\(\\binom{6}{r} x^{6-r} \\left(-\\frac{1}{x}\\right)^r\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r}(x)^{6-r}\\left(-\\frac{1}{x}\\right)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the powers of x',
                    explanation: 'Rewrite \\(\\left(-\\frac{1}{x}\\right)^r = (-1)^r x^{-r}\\). Then combine the x-powers: \\(x^{6-r} \\cdot x^{-r} = x^{6-2r}\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r}(-1)^r x^{6-2r}'
                },
                {
                    stepNumber: 3,
                    description: 'Set the power of x to zero',
                    explanation: 'The term independent of \\(x\\) has exponent zero. Setting \\(6 - 2r = 0\\) isolates the required term.',
                    workingLatex: '6 - 2r = 0'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for r',
                    explanation: 'Divide both sides by 2.',
                    workingLatex: 'r = 3'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Row 6 of Pascal\'s triangle is 1, 6, 15, 20, 15, 6, 1. The entry at position \\(r = 3\\) is 20.',
                    workingLatex: '\\binom{6}{3} = \\frac{6!}{3! \\times 3!} = 20'
                },
                {
                    stepNumber: 6,
                    description: 'Substitute r = 3 into the term',
                    explanation: 'With \\(r = 3\\), we get \\((-1)^3 = -1\\). A common mistake is to forget the negative sign when \\(r\\) is odd.',
                    workingLatex: 'T_4 = 20 \\times (-1)^3 = 20 \\times (-1) = -20'
                }
            ],
            finalAnswer: '\\(-20\\)'
        }
    },

    {
        id: 'be-024',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 24',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(x + \\dfrac{2}{x}\\right)^4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'Apply the binomial theorem with \\(a = x\\), \\(b = \\frac{2}{x}\\), \\(n = 4\\).',
                    workingLatex: 'T_{r+1} = \\binom{4}{r}(x)^{4-r}\\left(\\frac{2}{x}\\right)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the powers of x',
                    explanation: 'Rewrite \\(\\left(\\frac{2}{x}\\right)^r = 2^r x^{-r}\\). Then combine: \\(x^{4-r} \\cdot x^{-r} = x^{4-2r}\\).',
                    workingLatex: 'T_{r+1} = \\binom{4}{r} \\cdot 2^r \\cdot x^{4-2r}'
                },
                {
                    stepNumber: 3,
                    description: 'Set the power of x to zero',
                    explanation: 'For the term independent of \\(x\\), the exponent of \\(x\\) must be zero.',
                    workingLatex: '4 - 2r = 0'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for r',
                    explanation: 'Divide both sides by 2.',
                    workingLatex: 'r = 2'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Row 4 of Pascal\'s triangle is 1, 4, 6, 4, 1. The entry at \\(r = 2\\) is 6.',
                    workingLatex: '\\binom{4}{2} = \\frac{4!}{2! \\times 2!} = 6'
                },
                {
                    stepNumber: 6,
                    description: 'Compute the term',
                    explanation: 'Substitute \\(r = 2\\): multiply \\(\\binom{4}{2} = 6\\) by \\(2^2 = 4\\). The \\(x^0 = 1\\) factor confirms no \\(x\\) remains.',
                    workingLatex: 'T_3 = 6 \\times 2^2 = 6 \\times 4 = 24'
                }
            ],
            finalAnswer: '24'
        }
    },

    {
        id: 'be-025',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 25',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(2x - \\dfrac{1}{x^2}\\right)^6 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'Apply the binomial theorem with \\(a = 2x\\), \\(b = -\\frac{1}{x^2}\\), \\(n = 6\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r}(2x)^{6-r}\\left(-\\frac{1}{x^2}\\right)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the powers',
                    explanation: 'Write \\((2x)^{6-r} = 2^{6-r} x^{6-r}\\) and \\(\\left(-\\frac{1}{x^2}\\right)^r = (-1)^r x^{-2r}\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r} \\cdot 2^{6-r} \\cdot (-1)^r \\cdot x^{6-r} \\cdot x^{-2r}'
                },
                {
                    stepNumber: 3,
                    description: 'Combine x-powers',
                    explanation: 'Add the exponents: \\((6-r) + (-2r) = 6 - 3r\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r} \\cdot 2^{6-r} \\cdot (-1)^r \\cdot x^{6-3r}'
                },
                {
                    stepNumber: 4,
                    description: 'Set the power of x to zero',
                    explanation: 'For the term independent of \\(x\\), set the exponent of \\(x\\) to zero.',
                    workingLatex: '6 - 3r = 0'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for r',
                    explanation: 'Divide both sides by 3.',
                    workingLatex: 'r = 2'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15\\).',
                    workingLatex: '\\binom{6}{2} = 15'
                },
                {
                    stepNumber: 7,
                    description: 'Compute the term',
                    explanation: 'Substitute \\(r = 2\\): \\(2^{6-2} = 2^4 = 16\\) and \\((-1)^2 = 1\\), so the sign is positive. A common mistake is to get the sign wrong by miscounting the power of \\(-1\\).',
                    workingLatex: 'T_3 = 15 \\times 16 \\times 1 = 240'
                }
            ],
            finalAnswer: '240'
        }
    },

    {
        id: 'be-026',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 26',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(x^2 + \\dfrac{1}{x}\\right)^6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'Apply the binomial theorem with \\(a = x^2\\), \\(b = \\frac{1}{x}\\), \\(n = 6\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r}(x^2)^{6-r}\\left(\\frac{1}{x}\\right)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the powers of x',
                    explanation: 'Write \\((x^2)^{6-r} = x^{12-2r}\\) and \\(\\left(\\frac{1}{x}\\right)^r = x^{-r}\\). Combine: \\(x^{12-2r} \\cdot x^{-r} = x^{12-3r}\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r} x^{12-3r}'
                },
                {
                    stepNumber: 3,
                    description: 'Set the power of x to zero',
                    explanation: 'For the term independent of \\(x\\), the exponent must be zero.',
                    workingLatex: '12 - 3r = 0'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for r',
                    explanation: 'Divide both sides by 3.',
                    workingLatex: 'r = 4'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Use the symmetry property \\(\\binom{6}{4} = \\binom{6}{2}\\). Row 6 of Pascal\'s triangle is 1, 6, 15, 20, 15, 6, 1.',
                    workingLatex: '\\binom{6}{4} = \\frac{6!}{4! \\times 2!} = \\frac{6 \\times 5}{2 \\times 1} = 15'
                },
                {
                    stepNumber: 6,
                    description: 'State the term',
                    explanation: 'Since there is no extra constant factor (only the binomial coefficient), the term independent of \\(x\\) is simply 15.',
                    workingLatex: 'T_5 = 15'
                }
            ],
            finalAnswer: '15'
        }
    },

    {
        id: 'be-027',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 27',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(x - \\dfrac{3}{x}\\right)^8 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'Apply the binomial theorem with \\(a = x\\), \\(b = -\\frac{3}{x}\\), \\(n = 8\\).',
                    workingLatex: 'T_{r+1} = \\binom{8}{r}(x)^{8-r}\\left(-\\frac{3}{x}\\right)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify the powers of x',
                    explanation: 'Write \\(\\left(-\\frac{3}{x}\\right)^r = (-3)^r x^{-r}\\). Then combine: \\(x^{8-r} \\cdot x^{-r} = x^{8-2r}\\).',
                    workingLatex: 'T_{r+1} = \\binom{8}{r}(-3)^r x^{8-2r}'
                },
                {
                    stepNumber: 3,
                    description: 'Set the power of x to zero',
                    explanation: 'For the term independent of \\(x\\), set the exponent to zero.',
                    workingLatex: '8 - 2r = 0'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for r',
                    explanation: 'Divide both sides by 2.',
                    workingLatex: 'r = 4'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{8}{4} = \\frac{8!}{4! \\times 4!} = \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1} = 70\\).',
                    workingLatex: '\\binom{8}{4} = 70'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate (-3)^4',
                    explanation: 'Since the power is even, \\((-3)^4 = 3^4 = 81\\). The sign is positive because 4 is even.',
                    workingLatex: '(-3)^4 = 81'
                },
                {
                    stepNumber: 7,
                    description: 'Compute the term',
                    explanation: 'Multiply the binomial coefficient by the constant factor.',
                    workingLatex: 'T_5 = 70 \\times 81 = 5670'
                }
            ],
            finalAnswer: '5670'
        }
    },

    {
        id: 'be-028',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 28',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(3x + \\dfrac{1}{x^2}\\right)^9 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'Apply the binomial theorem with \\(a = 3x\\), \\(b = \\frac{1}{x^2}\\), \\(n = 9\\).',
                    workingLatex: 'T_{r+1} = \\binom{9}{r}(3x)^{9-r}\\left(\\frac{1}{x^2}\\right)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the powers',
                    explanation: 'Write \\((3x)^{9-r} = 3^{9-r} x^{9-r}\\) and \\(\\left(\\frac{1}{x^2}\\right)^r = x^{-2r}\\).',
                    workingLatex: 'T_{r+1} = \\binom{9}{r} \\cdot 3^{9-r} \\cdot x^{9-r} \\cdot x^{-2r}'
                },
                {
                    stepNumber: 3,
                    description: 'Combine x-powers',
                    explanation: 'Add the exponents: \\((9 - r) + (-2r) = 9 - 3r\\).',
                    workingLatex: 'T_{r+1} = \\binom{9}{r} \\cdot 3^{9-r} \\cdot x^{9-3r}'
                },
                {
                    stepNumber: 4,
                    description: 'Set the power of x to zero',
                    explanation: 'For the term independent of \\(x\\), set the exponent to zero.',
                    workingLatex: '9 - 3r = 0'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for r',
                    explanation: 'Divide both sides by 3.',
                    workingLatex: 'r = 3'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{9}{3} = \\frac{9!}{3! \\times 6!} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84\\).',
                    workingLatex: '\\binom{9}{3} = 84'
                },
                {
                    stepNumber: 7,
                    description: 'Evaluate 3^6',
                    explanation: 'Compute \\(3^6 = 729\\). Since \\(r = 3\\), we have \\(3^{9-3} = 3^6\\).',
                    workingLatex: '3^{9-3} = 3^6 = 729'
                },
                {
                    stepNumber: 8,
                    description: 'Compute the term',
                    explanation: 'Multiply the binomial coefficient by the power of 3.',
                    workingLatex: 'T_4 = 84 \\times 729 = 61{,}236'
                }
            ],
            finalAnswer: '61236'
        }
    },

    // ─── TYPE E: Approximations and percentage error (Q29–32) ────────────────

    {
        id: 'be-029',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 29',
        difficulty: 'Foundation',
        questionText: `(a) Write down the first three terms, in ascending powers of \\( x \\), of the expansion of \\( (1 + x)^{10} \\).

(b) Use your expansion with \\( x = 0.01 \\) to find an approximate value of \\( 1.01^{10} \\).

(c) Calculate the percentage error in your approximation compared to the exact value \\( 1.01^{10} = 1.10462 \\) (to 5 d.p.).`,
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the first three terms',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = x\\), \\(n = 10\\). Write terms for \\(r = 0, 1, 2\\).',
                    workingLatex: '(1+x)^{10} = \\binom{10}{0} + \\binom{10}{1}x + \\binom{10}{2}x^2 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{10}{0} = 1\\), \\(\\binom{10}{1} = 10\\), \\(\\binom{10}{2} = \\frac{10 \\times 9}{2} = 45\\).',
                    workingLatex: '(1+x)^{10} = 1 + 10x + 45x^2 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute x = 0.01',
                    explanation: 'Since \\(1.01 = 1 + 0.01\\), set \\(x = 0.01\\) in the expansion.',
                    workingLatex: '1.01^{10} \\approx 1 + 10(0.01) + 45(0.01)^2'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each term',
                    explanation: 'Compute: \\(10 \\times 0.01 = 0.1\\) and \\(45 \\times 0.0001 = 0.0045\\).',
                    workingLatex: '= 1 + 0.1 + 0.0045 = 1.1045'
                },
                {
                    stepNumber: 5,
                    description: '(c) Find the absolute error',
                    explanation: 'Subtract the approximate value from the exact value.',
                    workingLatex: '|1.1045 - 1.10462| = 0.00012'
                },
                {
                    stepNumber: 6,
                    description: 'Calculate the percentage error',
                    explanation: 'Divide the absolute error by the exact value and multiply by 100. The small error shows the approximation is very accurate for small \\(x\\).',
                    workingLatex: '\\text{\\% error} = \\frac{0.00012}{1.10462} \\times 100 \\approx 0.011\\%'
                }
            ],
            finalAnswer: '(a) 1 + 10x + 45x^2; (b) 1.1045; (c) approximately 0.011\\%'
        }
    },

    {
        id: 'be-030',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 30',
        difficulty: 'Foundation',
        questionText: `(a) Expand \\( (2 - x)^5 \\) in ascending powers of \\( x \\), up to and including the \\( x^3 \\) term.

(b) Use \\( x = 0.1 \\) to find an approximate value of \\( 1.9^5 \\).`,
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 2\\), \\(b = -x\\), \\(n = 5\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(2-x)^5 = \\binom{5}{0}2^5 + \\binom{5}{1}2^4(-x) + \\binom{5}{2}2^3(-x)^2 + \\binom{5}{3}2^2(-x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{5}{0} = 1\\), \\(\\binom{5}{1} = 5\\), \\(\\binom{5}{2} = 10\\), \\(\\binom{5}{3} = 10\\). Row 5 of Pascal\'s triangle is 1, 5, 10, 10, 5, 1.',
                    workingLatex: '= 1 \\times 32 + 5 \\times 16 \\times (-x) + 10 \\times 8 \\times x^2 + 10 \\times 4 \\times (-x^3) + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out each term. Note that \\((-x)^2 = x^2\\) (positive) and \\((-x)^3 = -x^3\\) (negative). Signs alternate.',
                    workingLatex: '= 32 - 80x + 80x^2 - 40x^3 + \\ldots'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute x = 0.1',
                    explanation: 'Since \\(2 - 0.1 = 1.9\\), set \\(x = 0.1\\) to estimate \\(1.9^5\\).',
                    workingLatex: '1.9^5 \\approx 32 - 80(0.1) + 80(0.01) - 40(0.001)'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate each numerical term',
                    explanation: 'Compute: \\(80 \\times 0.1 = 8\\), \\(80 \\times 0.01 = 0.8\\), \\(40 \\times 0.001 = 0.04\\).',
                    workingLatex: '= 32 - 8 + 0.8 - 0.04'
                },
                {
                    stepNumber: 6,
                    description: 'Add the values',
                    explanation: 'Combine the terms to get the approximation.',
                    workingLatex: '= 24.76'
                }
            ],
            finalAnswer: '(a) 32 - 80x + 80x^2 - 40x^3; (b) 1.9^5 \\approx 24.76'
        }
    },

    {
        id: 'be-031',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 31',
        difficulty: 'Foundation',
        questionText: `(a) Write down the first four terms, in ascending powers of \\( x \\), of the expansion of \\( (1 - 3x)^7 \\).

(b) Use your expansion with a suitable value of \\( x \\) to estimate \\( 0.97^7 \\), giving your answer to 4 decimal places.`,
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -3x\\), \\(n = 7\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(1-3x)^7 = \\binom{7}{0} + \\binom{7}{1}(-3x) + \\binom{7}{2}(-3x)^2 + \\binom{7}{3}(-3x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{7}{1} = 7\\), \\(\\binom{7}{2} = 21\\), \\(\\binom{7}{3} = 35\\).',
                    workingLatex: '= 1 + 7(-3x) + 21(9x^2) + 35(-27x^3)'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(7 \\times (-3) = -21\\), \\(21 \\times 9 = 189\\), \\(35 \\times (-27) = -945\\). Signs alternate because odd powers of \\(-3x\\) are negative.',
                    workingLatex: '= 1 - 21x + 189x^2 - 945x^3 + \\ldots'
                },
                {
                    stepNumber: 4,
                    description: '(b) Find a suitable value of x',
                    explanation: 'We need \\(0.97^7\\). Set \\(1 - 3x = 0.97\\) and solve for \\(x\\).',
                    workingLatex: '1 - 3x = 0.97 \\implies 3x = 0.03 \\implies x = 0.01'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute x = 0.01',
                    explanation: 'Replace \\(x\\) with \\(0.01\\) in the four-term expansion.',
                    workingLatex: '0.97^7 \\approx 1 - 21(0.01) + 189(0.0001) - 945(0.000001)'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate each term',
                    explanation: 'Compute: \\(21 \\times 0.01 = 0.21\\), \\(189 \\times 0.0001 = 0.0189\\), \\(945 \\times 0.000001 = 0.000945\\).',
                    workingLatex: '= 1 - 0.21 + 0.0189 - 0.000945'
                },
                {
                    stepNumber: 7,
                    description: 'Add the values',
                    explanation: 'Combine the terms and round to 4 decimal places.',
                    workingLatex: '= 0.807955 \\approx 0.8080 \\text{ (to 4 d.p.)}'
                }
            ],
            finalAnswer: '(a) 1 - 21x + 189x^2 - 945x^3 + \\ldots; (b) 0.97^7 \\approx 0.8080'
        }
    },

    {
        id: 'be-032',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 32',
        difficulty: 'Foundation',
        questionText: `(a) Expand \\( (1 + 2x)^5 \\) fully.

(b) By substituting \\( x = 0.01 \\), use your expansion to estimate \\( 1.02^5 \\).

(c) The exact value of \\( 1.02^5 \\) is \\( 1.10408 \\) (to 5 s.f.). Find the percentage error in your estimate.`,
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = 2x\\), \\(n = 5\\). Row 5 of Pascal\'s triangle is 1, 5, 10, 10, 5, 1.',
                    workingLatex: '(1+2x)^5 = \\binom{5}{0} + \\binom{5}{1}(2x) + \\binom{5}{2}(2x)^2 + \\binom{5}{3}(2x)^3 + \\binom{5}{4}(2x)^4 + \\binom{5}{5}(2x)^5'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term',
                    explanation: 'Compute: \\(1(1) + 5(2x) + 10(4x^2) + 10(8x^3) + 5(16x^4) + 1(32x^5)\\).',
                    workingLatex: '= 1 + 10x + 40x^2 + 80x^3 + 80x^4 + 32x^5'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute x = 0.01',
                    explanation: 'Since \\(1 + 2(0.01) = 1.02\\), set \\(x = 0.01\\). Higher-order terms contribute negligibly.',
                    workingLatex: '1.02^5 \\approx 1 + 10(0.01) + 40(0.0001) + 80(0.000001)'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate each numerical term',
                    explanation: 'Compute: \\(10 \\times 0.01 = 0.1\\), \\(40 \\times 0.0001 = 0.004\\), \\(80 \\times 0.000001 = 0.00008\\).',
                    workingLatex: '= 1 + 0.1 + 0.004 + 0.00008 = 1.10408'
                },
                {
                    stepNumber: 5,
                    description: '(c) Find the absolute error',
                    explanation: 'The approximate value matches the exact value to 5 s.f.',
                    workingLatex: '|1.10408 - 1.10408| = 0'
                },
                {
                    stepNumber: 6,
                    description: 'Calculate the percentage error',
                    explanation: 'Since the estimate matches the exact value to the given precision, the percentage error is essentially zero because \\(x = 0.01\\) is very small.',
                    workingLatex: '\\text{\\% error} < 0.001\\%'
                }
            ],
            finalAnswer: '(a) 1 + 10x + 40x^2 + 80x^3 + 80x^4 + 32x^5; (b) \\approx 1.1041; (c) very small, < 0.001\\%'
        }
    },

    // ─── TYPE F: Multi-part exam-style questions (Q33–35) ────────────────────

    {
        id: 'be-033',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 33',
        difficulty: 'Foundation',
        questionText: `(a) Write down the first four terms, in ascending powers of \\( x \\), of the binomial expansion of \\( (1 + x)^{12} \\).

(b) Hence, or otherwise, find the first four terms of the expansion of \\( (1 + x + x^2)(1 + x)^{12} \\).`,
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(n = 12\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(1+x)^{12} = \\binom{12}{0} + \\binom{12}{1}x + \\binom{12}{2}x^2 + \\binom{12}{3}x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{12}{1} = 12\\), \\(\\binom{12}{2} = \\frac{12 \\times 11}{2} = 66\\), \\(\\binom{12}{3} = \\frac{12 \\times 11 \\times 10}{6} = 220\\).',
                    workingLatex: '(1+x)^{12} = 1 + 12x + 66x^2 + 220x^3 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: '(b) Multiply by (1 + x + x^2)',
                    explanation: 'Distribute each term of \\((1 + x + x^2)\\) across the expansion, collecting only terms up to \\(x^3\\).',
                    workingLatex: '1 \\times (1 + 12x + 66x^2 + 220x^3) + x \\times (1 + 12x + 66x^2) + x^2 \\times (1 + 12x)'
                },
                {
                    stepNumber: 4,
                    description: 'Collect like terms',
                    explanation: 'Group by powers of \\(x\\): constant from \\(1 \\times 1\\); \\(x\\) from \\(1 \\times 12x\\) and \\(x \\times 1\\); \\(x^2\\) from \\(1 \\times 66x^2\\), \\(x \\times 12x\\), \\(x^2 \\times 1\\).',
                    workingLatex: '= (1) + (12 + 1)x + (66 + 12 + 1)x^2 + (220 + 66 + 12)x^3 + \\ldots'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify coefficients',
                    explanation: 'Add within each group: \\(12 + 1 = 13\\), \\(66 + 12 + 1 = 79\\), \\(220 + 66 + 12 = 298\\).',
                    workingLatex: '= 1 + 13x + 79x^2 + 298x^3 + \\ldots'
                }
            ],
            finalAnswer: '(a) 1 + 12x + 66x^2 + 220x^3; (b) 1 + 13x + 79x^2 + 298x^3 + \\ldots'
        }
    },

    {
        id: 'be-034',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 34',
        difficulty: 'Foundation',
        questionText: `(a) Find the first four terms, in ascending powers of \\( x \\), of the expansion of \\( (2 + x)^6 \\).

(b) Use your expansion to show that \\( (2 + x)^6 \\approx 64 + 192x + 240x^2 + 160x^3 \\) for small \\( x \\).

(c) By substituting \\( x = 0.1 \\), use the expansion to estimate \\( 2.1^6 \\) to 3 significant figures.`,
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 2\\), \\(b = x\\), \\(n = 6\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(2+x)^6 = \\binom{6}{0}2^6 + \\binom{6}{1}2^5 x + \\binom{6}{2}2^4 x^2 + \\binom{6}{3}2^3 x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{6}{0} = 1\\), \\(\\binom{6}{1} = 6\\), \\(\\binom{6}{2} = 15\\), \\(\\binom{6}{3} = 20\\).',
                    workingLatex: '= 1 \\times 64 + 6 \\times 32 x + 15 \\times 16 x^2 + 20 \\times 8 x^3 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out each product.',
                    workingLatex: '= 64 + 192x + 240x^2 + 160x^3 + \\ldots'
                },
                {
                    stepNumber: 4,
                    description: '(b) Confirm the approximation',
                    explanation: 'This matches the given expression, confirming the four-term approximation for small \\(x\\).',
                    workingLatex: '(2 + x)^6 = 64 + 192x + 240x^2 + 160x^3 + \\ldots'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute x = 0.1',
                    explanation: 'Since \\(2 + 0.1 = 2.1\\), set \\(x = 0.1\\) to estimate \\(2.1^6\\).',
                    workingLatex: '2.1^6 \\approx 64 + 192(0.1) + 240(0.01) + 160(0.001)'
                },
                {
                    stepNumber: 6,
                    description: 'Evaluate each numerical term',
                    explanation: 'Compute: \\(192 \\times 0.1 = 19.2\\), \\(240 \\times 0.01 = 2.4\\), \\(160 \\times 0.001 = 0.16\\).',
                    workingLatex: '= 64 + 19.2 + 2.4 + 0.16 = 85.76'
                },
                {
                    stepNumber: 7,
                    description: 'Round to 3 significant figures',
                    explanation: 'Round 85.76 to 3 s.f.',
                    workingLatex: '2.1^6 = 85.8 + \\ldots'
                }
            ],
            finalAnswer: '(a) 64 + 192x + 240x^2 + 160x^3; (c) 2.1^6 \\approx 85.8'
        }
    },

    {
        id: 'be-035',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 35',
        difficulty: 'Foundation',
        questionText: `(a) Write down the first four terms, in ascending powers of \\( x \\), of the expansion of \\( (1 - x)^8 \\).

(b) Hence find the first four terms of the expansion of \\( (3 + x)(1 - x)^8 \\).

(c) Find the coefficient of \\( x^2 \\) in the expansion of \\( (3 + x)(1 - x)^8 \\).`,
        marks: 9,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -x\\), \\(n = 8\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(1-x)^8 = \\binom{8}{0} + \\binom{8}{1}(-x) + \\binom{8}{2}(-x)^2 + \\binom{8}{3}(-x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{8}{1} = 8\\), \\(\\binom{8}{2} = 28\\), \\(\\binom{8}{3} = 56\\). Signs alternate since \\((-x)^r\\) is negative for odd \\(r\\).',
                    workingLatex: '= 1 - 8x + 28x^2 - 56x^3 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: '(b) Multiply by (3 + x)',
                    explanation: 'Distribute 3 and \\(x\\) separately across the expansion, only keeping terms up to \\(x^3\\).',
                    workingLatex: '3(1 - 8x + 28x^2 - 56x^3) + x(1 - 8x + 28x^2)'
                },
                {
                    stepNumber: 4,
                    description: 'Expand each product',
                    explanation: 'From \\(3 \\times\\): \\(3, -24x, 84x^2, -168x^3\\). From \\(x \\times\\): \\(x, -8x^2, 28x^3\\).',
                    workingLatex: '= 3 + (-24 + 1)x + (84 - 8)x^2 + (-168 + 28)x^3 + \\ldots'
                },
                {
                    stepNumber: 5,
                    description: 'Simplify coefficients',
                    explanation: 'Add within each group: \\(-24 + 1 = -23\\), \\(84 - 8 = 76\\), \\(-168 + 28 = -140\\).',
                    workingLatex: '= 3 - 23x + 76x^2 - 140x^3 + \\ldots'
                },
                {
                    stepNumber: 6,
                    description: '(c) Read off the coefficient of x^2',
                    explanation: 'From the expansion in part (b), the coefficient of \\(x^2\\) is 76.',
                    workingLatex: '\\text{Coefficient of } x^2 = 76'
                }
            ],
            finalAnswer: '(a) 1 - 8x + 28x^2 - 56x^3; (b) 3 - 23x + 76x^2 - 140x^3 + \\ldots; (c) 76'
        }
    },

    // ─── Q36–70: Additional Binomial Expansion Questions ──────────────────────

    {
        id: 'be-036',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 36',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 + 2x)^4 \\) in ascending powers of \\( x \\), up to and including the term in \\( x^3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = 2x\\), \\(n = 4\\). Row 4 of Pascal\'s triangle is 1, 4, 6, 4, 1.',
                    workingLatex: '(1+2x)^4 = \\binom{4}{0} + \\binom{4}{1}(2x) + \\binom{4}{2}(2x)^2 + \\binom{4}{3}(2x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{4}{0} = 1\\), \\(\\binom{4}{1} = 4\\), \\(\\binom{4}{2} = 6\\), \\(\\binom{4}{3} = 4\\).',
                    workingLatex: '= 1 + 4(2x) + 6(4x^2) + 4(8x^3)'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(4 \\times 2 = 8\\), \\(6 \\times 4 = 24\\), \\(4 \\times 8 = 32\\).',
                    workingLatex: '= 1 + 8x + 24x^2 + 32x^3'
                }
            ],
            finalAnswer: '1 + 8x + 24x^2 + 32x^3'
        }
    },
    {
        id: 'be-037',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 37',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 - 3x)^5 \\) in ascending powers of \\( x \\), up to and including the term in \\( x^3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -3x\\), \\(n = 5\\). Row 5 of Pascal\'s triangle is 1, 5, 10, 10, 5, 1.',
                    workingLatex: '(1-3x)^5 = \\binom{5}{0} + \\binom{5}{1}(-3x) + \\binom{5}{2}(-3x)^2 + \\binom{5}{3}(-3x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients and powers',
                    explanation: 'Calculate: \\(\\binom{5}{1} = 5\\), \\(\\binom{5}{2} = 10\\), \\(\\binom{5}{3} = 10\\). Also \\((-3x)^2 = 9x^2\\) and \\((-3x)^3 = -27x^3\\).',
                    workingLatex: '= 1 + 5(-3x) + 10(9x^2) + 10(-27x^3)'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(5 \\times (-3) = -15\\), \\(10 \\times 9 = 90\\), \\(10 \\times (-27) = -270\\). Signs alternate because odd powers of \\(-3x\\) are negative.',
                    workingLatex: '= 1 - 15x + 90x^2 - 270x^3'
                }
            ],
            finalAnswer: '1 - 15x + 90x^2 - 270x^3'
        }
    },
    {
        id: 'be-038',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 38',
        difficulty: 'Foundation',
        questionText: 'Find the first 4 terms in the expansion of \\( (2 + x)^6 \\) in ascending powers of \\( x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 2\\), \\(b = x\\), \\(n = 6\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(2+x)^6 = \\binom{6}{0}2^6 + \\binom{6}{1}2^5 x + \\binom{6}{2}2^4 x^2 + \\binom{6}{3}2^3 x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients and powers',
                    explanation: 'Calculate: \\(\\binom{6}{0} = 1\\), \\(\\binom{6}{1} = 6\\), \\(\\binom{6}{2} = 15\\), \\(\\binom{6}{3} = 20\\). Also \\(2^6 = 64\\), \\(2^5 = 32\\), \\(2^4 = 16\\), \\(2^3 = 8\\).',
                    workingLatex: '= 1 \\times 64 + 6 \\times 32 x + 15 \\times 16 x^2 + 20 \\times 8 x^3'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(6 \\times 32 = 192\\), \\(15 \\times 16 = 240\\), \\(20 \\times 8 = 160\\).',
                    workingLatex: '= 64 + 192x + 240x^2 + 160x^3'
                }
            ],
            finalAnswer: '64 + 192x + 240x^2 + 160x^3'
        }
    },
    {
        id: 'be-039',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 39',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^3 \\) in the expansion of \\( (1 + 4x)^5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^3 term',
                    explanation: 'In \\((1 + 4x)^5\\), the \\(x^3\\) term has \\(r = 3\\). The general term is \\(\\binom{5}{r}(4x)^r\\).',
                    workingLatex: 'T_4 = \\binom{5}{3}(4x)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{5}{3} = \\binom{5}{2} = \\frac{5 \\times 4}{2} = 10\\).',
                    workingLatex: '\\binom{5}{3} = 10'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate 4^3',
                    explanation: 'Compute \\(4^3 = 64\\).',
                    workingLatex: '4^3 = 64'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply for the coefficient',
                    explanation: 'The coefficient of \\(x^3\\) is \\(10 \\times 64 = 640\\).',
                    workingLatex: '\\text{Coefficient} = 10 \\times 64 = 640'
                }
            ],
            finalAnswer: '640'
        }
    },
    {
        id: 'be-040',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 40',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^2 \\) in the expansion of \\( (3 - x)^6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^2 term',
                    explanation: 'In \\((3 - x)^6\\), the general term is \\(\\binom{6}{r}(3)^{6-r}(-x)^r\\). For \\(x^2\\), set \\(r = 2\\).',
                    workingLatex: 'T_3 = \\binom{6}{2}(3)^4(-x)^2'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: 'Calculate \\(\\binom{6}{2} = \\frac{6 \\times 5}{2} = 15\\).',
                    workingLatex: '\\binom{6}{2} = 15'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the powers',
                    explanation: 'Compute \\(3^4 = 81\\) and \\((-x)^2 = x^2\\). Since \\(r = 2\\) is even, the sign is positive.',
                    workingLatex: '3^4 = 81, \\quad (-x)^2 = x^2'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply for the coefficient',
                    explanation: 'The coefficient of \\(x^2\\) is \\(15 \\times 81 = 1215\\).',
                    workingLatex: '\\text{Coefficient} = 15 \\times 81 = 1215'
                }
            ],
            finalAnswer: '1215'
        }
    },
    {
        id: 'be-041',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 41',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 + x)^8 \\) up to and including the term in \\( x^3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(n = 8\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(1+x)^8 = \\binom{8}{0} + \\binom{8}{1}x + \\binom{8}{2}x^2 + \\binom{8}{3}x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate: \\(\\binom{8}{0} = 1\\), \\(\\binom{8}{1} = 8\\), \\(\\binom{8}{2} = \\frac{8 \\times 7}{2} = 28\\), \\(\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{6} = 56\\). Row 8 of Pascal\'s triangle starts 1, 8, 28, 56, ...',
                    workingLatex: '= 1 + 8x + 28x^2 + 56x^3'
                }
            ],
            finalAnswer: '1 + 8x + 28x^2 + 56x^3'
        }
    },
    {
        id: 'be-042',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 42',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 - 2x)^6 \\) up to and including the term in \\( x^3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -2x\\), \\(n = 6\\). Row 6 of Pascal\'s triangle is 1, 6, 15, 20, 15, 6, 1.',
                    workingLatex: '(1-2x)^6 = \\binom{6}{0} + \\binom{6}{1}(-2x) + \\binom{6}{2}(-2x)^2 + \\binom{6}{3}(-2x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients and powers',
                    explanation: 'Calculate: \\(\\binom{6}{1} = 6\\), \\(\\binom{6}{2} = 15\\), \\(\\binom{6}{3} = 20\\). Also \\((-2x)^2 = 4x^2\\) and \\((-2x)^3 = -8x^3\\).',
                    workingLatex: '= 1 + 6(-2x) + 15(4x^2) + 20(-8x^3)'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(6 \\times (-2) = -12\\), \\(15 \\times 4 = 60\\), \\(20 \\times (-8) = -160\\). Signs alternate because odd powers of \\(-2x\\) are negative.',
                    workingLatex: '= 1 - 12x + 60x^2 - 160x^3'
                }
            ],
            finalAnswer: '1 - 12x + 60x^2 - 160x^3'
        }
    },
    {
        id: 'be-043',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 43',
        difficulty: 'Foundation',
        questionText: 'Find the first 4 terms of \\( (3 + 2x)^5 \\) in ascending powers of \\( x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write terms with binomial coefficients',
                    explanation: 'Apply the binomial theorem with \\(a = 3\\), \\(b = 2x\\), \\(n = 5\\). Write terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(3+2x)^5 = \\binom{5}{0}3^5 + \\binom{5}{1}3^4(2x) + \\binom{5}{2}3^3(2x)^2 + \\binom{5}{3}3^2(2x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients and powers',
                    explanation: 'Calculate: \\(\\binom{5}{0} = 1\\), \\(\\binom{5}{1} = 5\\), \\(\\binom{5}{2} = 10\\), \\(\\binom{5}{3} = 10\\). Also \\(3^5 = 243\\), \\(3^4 = 81\\), \\(3^3 = 27\\), \\(3^2 = 9\\), and \\((2x)^2 = 4x^2\\), \\((2x)^3 = 8x^3\\).',
                    workingLatex: '= 1 \\times 243 + 5 \\times 81 \\times 2x + 10 \\times 27 \\times 4x^2 + 10 \\times 9 \\times 8x^3'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(5 \\times 81 \\times 2 = 810\\), \\(10 \\times 27 \\times 4 = 1080\\), \\(10 \\times 9 \\times 8 = 720\\).',
                    workingLatex: '= 243 + 810x + 1080x^2 + 720x^3'
                }
            ],
            finalAnswer: '243 + 810x + 1080x^2 + 720x^3'
        }
    },
    {
        id: 'be-044',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 44',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^4 \\) in the expansion of \\( (1 + x)^{10} \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the general term',
                    explanation: 'In the expansion of \\((1 + x)^{10}\\), the general term is \\(\\binom{10}{r} x^r\\). The \\(x^4\\) term occurs when \\(r = 4\\).',
                    workingLatex: '\\text{General term} = \\binom{10}{r} x^r, \\quad r = 4'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{10}{4}\\) using the formula \\(\\frac{n!}{r!(n-r)!}\\).',
                    workingLatex: '\\binom{10}{4} = \\frac{10!}{4! \\times 6!} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = \\frac{5040}{24} = 210'
                },
                {
                    stepNumber: 3,
                    description: 'State the coefficient',
                    explanation: 'The coefficient of \\(x^4\\) is 210.',
                    workingLatex: '\\text{Coefficient of } x^4 = 210'
                }
            ],
            finalAnswer: '210'
        }
    },
    {
        id: 'be-045',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 45',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^2 \\) in the expansion of \\( (1 - 5x)^4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the general term',
                    explanation: 'In the expansion of \\((1 - 5x)^4\\), the general term is \\(\\binom{4}{r}(1)^{4-r}(-5x)^r\\). The \\(x^2\\) term occurs when \\(r = 2\\).',
                    workingLatex: '\\text{General term} = \\binom{4}{r}(-5x)^r, \\quad r = 2'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{4}{2}\\) using the formula \\(\\frac{4!}{2! \\times 2!}\\).',
                    workingLatex: '\\binom{4}{2} = \\frac{4!}{2! \\times 2!} = \\frac{4 \\times 3}{2 \\times 1} = 6'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the power of (-5x)',
                    explanation: 'Calculate \\((-5x)^2 = (-5)^2 \\cdot x^2 = 25x^2\\). The square makes this positive.',
                    workingLatex: '(-5x)^2 = 25x^2'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply to find the coefficient',
                    explanation: 'Multiply the binomial coefficient by the evaluated power to get the full term.',
                    workingLatex: '6 \\times 25x^2 = 150x^2'
                }
            ],
            finalAnswer: '150'
        }
    },
    {
        id: 'be-046',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 46',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (x - 2)^5 \\) fully.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the binomial theorem',
                    explanation: 'Apply the binomial theorem with \\(a = x\\), \\(b = -2\\), \\(n = 5\\). The general term is \\(\\binom{5}{r} x^{5-r}(-2)^r\\).',
                    workingLatex: '(x - 2)^5 = \\sum_{r=0}^{5} \\binom{5}{r} x^{5-r}(-2)^r'
                },
                {
                    stepNumber: 2,
                    description: 'Write out each term',
                    explanation: 'Write each term separately, showing the binomial coefficient, the power of \\(x\\), and the power of \\(-2\\).',
                    workingLatex: '= \\binom{5}{0}x^5 + \\binom{5}{1}x^4(-2) + \\binom{5}{2}x^3(-2)^2 + \\binom{5}{3}x^2(-2)^3 + \\binom{5}{4}x(-2)^4 + \\binom{5}{5}(-2)^5'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate coefficients and powers',
                    explanation: 'Calculate each binomial coefficient and power of \\(-2\\): \\(\\binom{5}{0}=1\\), \\(\\binom{5}{1}=5\\), \\(\\binom{5}{2}=10\\), \\(\\binom{5}{3}=10\\), \\(\\binom{5}{4}=5\\), \\(\\binom{5}{5}=1\\). Also \\((-2)^2=4\\), \\((-2)^3=-8\\), \\((-2)^4=16\\), \\((-2)^5=-32\\).',
                    workingLatex: '= x^5 + 5(-2)x^4 + 10(4)x^3 + 10(-8)x^2 + 5(16)x + (-32)'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify each term',
                    explanation: 'Multiply out the numerical parts of each term.',
                    workingLatex: '= x^5 - 10x^4 + 40x^3 - 80x^2 + 80x - 32'
                }
            ],
            finalAnswer: 'x^5 - 10x^4 + 40x^3 - 80x^2 + 80x - 32'
        }
    },
    {
        id: 'be-047',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 47',
        difficulty: 'Foundation',
        questionText: 'Find the term independent of \\( x \\) in the expansion of \\( \\left(x + \\frac{2}{x}\\right)^6 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the general term',
                    explanation: 'The general term in the expansion of \\(\\left(x + \\frac{2}{x}\\right)^6\\) is \\(\\binom{6}{r} x^{6-r} \\left(\\frac{2}{x}\\right)^r\\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r} x^{6-r} \\cdot \\frac{2^r}{x^r} = \\binom{6}{r} 2^r x^{6-2r}'
                },
                {
                    stepNumber: 2,
                    description: 'Find r for the constant term',
                    explanation: 'The term independent of \\(x\\) has \\(x^0\\), so set the power of \\(x\\) equal to zero.',
                    workingLatex: '6 - 2r = 0 \\implies r = 3'
                },
                {
                    stepNumber: 3,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{6}{3}\\) using the formula \\(\\frac{6!}{3! \\times 3!}\\).',
                    workingLatex: '\\binom{6}{3} = \\frac{6!}{3! \\times 3!} = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate the full term',
                    explanation: 'Substitute \\(r = 3\\) into the general term and multiply.',
                    workingLatex: '\\binom{6}{3} \\times 2^3 = 20 \\times 8 = 160'
                }
            ],
            finalAnswer: '160'
        }
    },
    {
        id: 'be-048',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 48',
        difficulty: 'Foundation',
        questionText: 'In the expansion of \\( (1 + kx)^6 \\), the coefficient of \\( x^2 \\) is 60. Find the value of \\( k \\), where \\( k > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^2 term',
                    explanation: 'In the expansion of \\((1 + kx)^6\\), the general term is \\(\\binom{6}{r}(kx)^r\\). The \\(x^2\\) term occurs when \\(r = 2\\).',
                    workingLatex: '\\text{x}^2 \\text{ term} = \\binom{6}{2}(kx)^2'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{6}{2} = \\frac{6!}{2! \\times 4!} = 15\\).',
                    workingLatex: '\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = 15'
                },
                {
                    stepNumber: 3,
                    description: 'Set up the equation',
                    explanation: 'The coefficient of \\(x^2\\) is \\(15k^2\\). Set this equal to 60.',
                    workingLatex: '15k^2 = 60'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for k',
                    explanation: 'Divide both sides by 15, then take the positive square root since \\(k > 0\\).',
                    workingLatex: 'k^2 = 4 \\implies k = 2'
                }
            ],
            finalAnswer: 'k = 2'
        }
    },
    {
        id: 'be-049',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 49',
        difficulty: 'Foundation',
        questionText: 'Find the first 3 terms of \\( (1 + 3x)^{10} \\) in ascending powers of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first three terms',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = 3x\\), \\(n = 10\\). Write out the terms for \\(r = 0, 1, 2\\).',
                    workingLatex: '(1 + 3x)^{10} = \\binom{10}{0} + \\binom{10}{1}(3x) + \\binom{10}{2}(3x)^2 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficients',
                    explanation: 'Calculate \\(\\binom{10}{0} = 1\\), \\(\\binom{10}{1} = 10\\), and \\(\\binom{10}{2} = \\frac{10 \\times 9}{2} = 45\\).',
                    workingLatex: '= 1 + 10(3x) + 45(3x)^2 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the powers of 3x',
                    explanation: 'Calculate \\((3x)^1 = 3x\\) and \\((3x)^2 = 9x^2\\), then multiply by the coefficients.',
                    workingLatex: '= 1 + 10 \\times 3x + 45 \\times 9x^2 + \\ldots'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify each term',
                    explanation: 'Multiply out: \\(10 \\times 3 = 30\\) and \\(45 \\times 9 = 405\\).',
                    workingLatex: '= 1 + 30x + 405x^2 + \\ldots'
                }
            ],
            finalAnswer: '1 + 30x + 405x^2'
        }
    },
    {
        id: 'be-050',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 50',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (2x - 1)^4 \\) fully.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'State the binomial theorem',
                    explanation: 'Apply the binomial theorem with \\(a = 2x\\), \\(b = -1\\), \\(n = 4\\). The general term is \\(\\binom{4}{r}(2x)^{4-r}(-1)^r\\).',
                    workingLatex: '(2x - 1)^4 = \\binom{4}{0}(2x)^4 + \\binom{4}{1}(2x)^3(-1) + \\binom{4}{2}(2x)^2(-1)^2 + \\binom{4}{3}(2x)(-1)^3 + \\binom{4}{4}(-1)^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate \\(\\binom{4}{0}=1\\), \\(\\binom{4}{1}=4\\), \\(\\binom{4}{2}=6\\), \\(\\binom{4}{3}=4\\), \\(\\binom{4}{4}=1\\).',
                    workingLatex: '= 1 \\cdot (2x)^4 + 4(2x)^3(-1) + 6(2x)^2(1) + 4(2x)(-1) + 1 \\cdot 1'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate powers of 2x',
                    explanation: 'Calculate \\((2x)^4 = 16x^4\\), \\((2x)^3 = 8x^3\\), \\((2x)^2 = 4x^2\\), \\((2x)^1 = 2x\\).',
                    workingLatex: '= 16x^4 + 4(8x^3)(-1) + 6(4x^2) + 4(2x)(-1) + 1'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify each term',
                    explanation: 'Multiply out the numerical parts, taking care with signs.',
                    workingLatex: '= 16x^4 - 32x^3 + 24x^2 - 8x + 1'
                }
            ],
            finalAnswer: '16x^4 - 32x^3 + 24x^2 - 8x + 1'
        }
    },
    {
        id: 'be-051',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 51',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^3 \\) in the expansion of \\( (2 - x)^7 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^3 term',
                    explanation: 'In the expansion of \\((2 - x)^7\\), the general term is \\(\\binom{7}{r}(2)^{7-r}(-x)^r\\). The \\(x^3\\) term occurs when \\(r = 3\\).',
                    workingLatex: '\\text{x}^3 \\text{ term} = \\binom{7}{3}(2)^{7-3}(-x)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{7}{3}\\) using the formula \\(\\frac{7!}{3! \\times 4!}\\).',
                    workingLatex: '\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the remaining parts',
                    explanation: 'Calculate \\(2^4 = 16\\) and \\((-x)^3 = -x^3\\). The odd power gives a negative sign.',
                    workingLatex: '(2)^4 = 16, \\quad (-x)^3 = -x^3'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply to find the coefficient',
                    explanation: 'Multiply all parts together to get the coefficient of \\(x^3\\).',
                    workingLatex: '35 \\times 16 \\times (-1) = -560'
                }
            ],
            finalAnswer: '-560'
        }
    },
    {
        id: 'be-052',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 52',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 + x)^7 \\) up to the term in \\( x^4 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the first five terms',
                    explanation: 'Apply the binomial theorem with \\(n = 7\\). Write out the terms for \\(r = 0\\) to \\(r = 4\\).',
                    workingLatex: '(1 + x)^7 = \\binom{7}{0} + \\binom{7}{1}x + \\binom{7}{2}x^2 + \\binom{7}{3}x^3 + \\binom{7}{4}x^4 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficients',
                    explanation: 'Evaluate each coefficient: \\(\\binom{7}{0}=1\\), \\(\\binom{7}{1}=7\\), \\(\\binom{7}{2}=\\frac{7 \\times 6}{2}=21\\), \\(\\binom{7}{3}=\\frac{7 \\times 6 \\times 5}{6}=35\\), \\(\\binom{7}{4}=\\frac{7 \\times 6 \\times 5 \\times 4}{24}=35\\).',
                    workingLatex: '= 1 + 7x + 21x^2 + 35x^3 + 35x^4 + \\ldots'
                }
            ],
            finalAnswer: '1 + 7x + 21x^2 + 35x^3 + 35x^4'
        }
    },
    {
        id: 'be-053',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 53',
        difficulty: 'Foundation',
        questionText: 'Find the first 4 terms of \\( (1 - x)^{12} \\) in ascending powers of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the first four terms',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -x\\), \\(n = 12\\). Write out the terms for \\(r = 0, 1, 2, 3\\).',
                    workingLatex: '(1 - x)^{12} = \\binom{12}{0} + \\binom{12}{1}(-x) + \\binom{12}{2}(-x)^2 + \\binom{12}{3}(-x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficients',
                    explanation: 'Evaluate: \\(\\binom{12}{0}=1\\), \\(\\binom{12}{1}=12\\), \\(\\binom{12}{2}=\\frac{12 \\times 11}{2}=66\\), \\(\\binom{12}{3}=\\frac{12 \\times 11 \\times 10}{6}=220\\).',
                    workingLatex: '= 1 + 12(-x) + 66(-x)^2 + 220(-x)^3 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the signs',
                    explanation: 'Evaluate the powers of \\(-x\\): \\((-x)^1 = -x\\), \\((-x)^2 = x^2\\), \\((-x)^3 = -x^3\\). Signs alternate.',
                    workingLatex: '= 1 - 12x + 66x^2 - 220x^3 + \\ldots'
                }
            ],
            finalAnswer: '1 - 12x + 66x^2 - 220x^3'
        }
    },
    {
        id: 'be-054',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 54',
        difficulty: 'Foundation',
        questionText: 'In the expansion of \\( (1 + ax)^8 \\), the coefficient of \\( x^3 \\) is 1512. Find the value of \\( a \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^3 term',
                    explanation: 'In the expansion of \\((1 + ax)^8\\), the general term is \\(\\binom{8}{r}(ax)^r\\). The \\(x^3\\) term occurs when \\(r = 3\\).',
                    workingLatex: '\\text{x}^3 \\text{ term} = \\binom{8}{3}(ax)^3 = \\binom{8}{3} a^3 x^3'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{8}{3}\\) using the formula \\(\\frac{8!}{3! \\times 5!}\\).',
                    workingLatex: '\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56'
                },
                {
                    stepNumber: 3,
                    description: 'Set up the equation',
                    explanation: 'The coefficient of \\(x^3\\) is \\(56a^3\\). Set this equal to 1512.',
                    workingLatex: '56a^3 = 1512'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for a',
                    explanation: 'Divide both sides by 56 to get \\(a^3 = 27\\), then take the cube root.',
                    workingLatex: 'a^3 = \\frac{1512}{56} = 27 \\implies a = \\sqrt[3]{27} = 3'
                }
            ],
            finalAnswer: 'a = 3'
        }
    },
    {
        id: 'be-055',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 55',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^5 \\) in \\( (1 + x)^9 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the general term',
                    explanation: 'In the expansion of \\((1 + x)^9\\), the general term is \\(\\binom{9}{r} x^r\\). The \\(x^5\\) term occurs when \\(r = 5\\).',
                    workingLatex: '\\text{Coefficient of } x^5 = \\binom{9}{5}'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{9}{5}\\) using the formula \\(\\frac{9!}{5! \\times 4!}\\). It is often easier to compute \\(\\binom{9}{4}\\) since \\(\\binom{9}{5} = \\binom{9}{4}\\).',
                    workingLatex: '\\binom{9}{5} = \\frac{9 \\times 8 \\times 7 \\times 6}{4 \\times 3 \\times 2 \\times 1} = \\frac{3024}{24} = 126'
                },
                {
                    stepNumber: 3,
                    description: 'State the coefficient',
                    explanation: 'The coefficient of \\(x^5\\) is 126.',
                    workingLatex: '\\text{Coefficient of } x^5 = 126'
                }
            ],
            finalAnswer: '126'
        }
    },
    {
        id: 'be-056',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 56',
        difficulty: 'Foundation',
        questionText: 'Find the first 4 terms of \\( (5 - x)^4 \\) in descending powers of 5.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the expansion',
                    explanation: 'Apply the binomial theorem with \\(a = 5\\), \\(b = -x\\), \\(n = 4\\). Since the question asks for 4 terms and \\(n = 4\\), this is the full expansion.',
                    workingLatex: '(5 - x)^4 = \\binom{4}{0}5^4 + \\binom{4}{1}5^3(-x) + \\binom{4}{2}5^2(-x)^2 + \\binom{4}{3}5(-x)^3 + \\binom{4}{4}(-x)^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate \\(\\binom{4}{0}=1\\), \\(\\binom{4}{1}=4\\), \\(\\binom{4}{2}=6\\), \\(\\binom{4}{3}=4\\), \\(\\binom{4}{4}=1\\).',
                    workingLatex: '= 1 \\cdot 5^4 + 4 \\cdot 5^3(-x) + 6 \\cdot 5^2(-x)^2 + 4 \\cdot 5(-x)^3 + (-x)^4'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate powers of 5',
                    explanation: 'Calculate \\(5^4 = 625\\), \\(5^3 = 125\\), \\(5^2 = 25\\), \\(5^1 = 5\\). Also evaluate \\((-x)^2 = x^2\\) and \\((-x)^3 = -x^3\\).',
                    workingLatex: '= 625 + 4(125)(-x) + 6(25)(x^2) + 4(5)(-x^3) + x^4'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify each term',
                    explanation: 'Multiply out the numerical parts of each term. The first 4 terms give the answer.',
                    workingLatex: '= 625 - 500x + 150x^2 - 20x^3 + x^4'
                }
            ],
            finalAnswer: '625 - 500x + 150x^2 - 20x^3'
        }
    },
    {
        id: 'be-057',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 57',
        difficulty: 'Foundation',
        questionText: 'Use the binomial expansion to find an approximation for \\( (1.02)^{10} \\), using the first 3 terms of \\( (1 + 0.02)^{10} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a binomial expression',
                    explanation: 'Write \\(1.02\\) in the form \\((1 + x)\\) so we can apply the binomial expansion.',
                    workingLatex: '(1.02)^{10} = (1 + 0.02)^{10}'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first three terms',
                    explanation: 'Apply the binomial theorem with \\(x = 0.02\\) and \\(n = 10\\). Write out the terms for \\(r = 0, 1, 2\\).',
                    workingLatex: '(1 + 0.02)^{10} \\approx \\binom{10}{0} + \\binom{10}{1}(0.02) + \\binom{10}{2}(0.02)^2'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate \\(\\binom{10}{0} = 1\\), \\(\\binom{10}{1} = 10\\), \\(\\binom{10}{2} = \\frac{10 \\times 9}{2} = 45\\).',
                    workingLatex: '\\approx 1 + 10(0.02) + 45(0.02)^2'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate each term',
                    explanation: 'Evaluate: \\(10 \\times 0.02 = 0.2\\) and \\(45 \\times 0.0004 = 0.018\\).',
                    workingLatex: '\\approx 1 + 0.2 + 0.018 = 1.218'
                }
            ],
            finalAnswer: '1.218'
        }
    },
    {
        id: 'be-058',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 58',
        difficulty: 'Foundation',
        questionText: 'Use the binomial expansion to approximate \\( (0.98)^8 \\) using the first 3 terms of \\( (1 - 0.02)^8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a binomial expression',
                    explanation: 'Write \\(0.98\\) in the form \\((1 + x)\\) so we can apply the binomial expansion.',
                    workingLatex: '(0.98)^8 = (1 - 0.02)^8'
                },
                {
                    stepNumber: 2,
                    description: 'Write the first three terms',
                    explanation: 'Apply the binomial theorem with \\(b = -0.02\\) and \\(n = 8\\). Write out the terms for \\(r = 0, 1, 2\\).',
                    workingLatex: '(1 - 0.02)^8 \\approx \\binom{8}{0} + \\binom{8}{1}(-0.02) + \\binom{8}{2}(-0.02)^2'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate \\(\\binom{8}{0} = 1\\), \\(\\binom{8}{1} = 8\\), \\(\\binom{8}{2} = \\frac{8 \\times 7}{2} = 28\\).',
                    workingLatex: '\\approx 1 + 8(-0.02) + 28(-0.02)^2'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate each term',
                    explanation: 'Evaluate: \\(8 \\times (-0.02) = -0.16\\) and \\(28 \\times 0.0004 = 0.0112\\). Note \\((-0.02)^2\\) is positive.',
                    workingLatex: '\\approx 1 - 0.16 + 0.0112 = 0.8512'
                }
            ],
            finalAnswer: '0.8512'
        }
    },
    {
        id: 'be-059',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 59',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^2 \\) in \\( (3 + 2x)^5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^2 term',
                    explanation: 'In the expansion of \\((3 + 2x)^5\\), the general term is \\(\\binom{5}{r}(3)^{5-r}(2x)^r\\). The \\(x^2\\) term occurs when \\(r = 2\\).',
                    workingLatex: '\\text{x}^2 \\text{ term} = \\binom{5}{2}(3)^{5-2}(2x)^2'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{5}{2} = \\frac{5!}{2! \\times 3!} = \\frac{5 \\times 4}{2} = 10\\).',
                    workingLatex: '\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the powers',
                    explanation: 'Calculate \\(3^3 = 27\\) and \\((2x)^2 = 4x^2\\).',
                    workingLatex: '3^3 = 27, \\quad (2x)^2 = 4x^2'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply to find the coefficient',
                    explanation: 'Multiply all parts together to get the coefficient of \\(x^2\\).',
                    workingLatex: '10 \\times 27 \\times 4 = 1080'
                }
            ],
            finalAnswer: '1080'
        }
    },
    {
        id: 'be-060',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 60',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (1 + x)^6 \\) fully.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the expansion',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = x\\), \\(n = 6\\). Write out all seven terms.',
                    workingLatex: '(1+x)^6 = \\binom{6}{0} + \\binom{6}{1}x + \\binom{6}{2}x^2 + \\binom{6}{3}x^3 + \\binom{6}{4}x^4 + \\binom{6}{5}x^5 + \\binom{6}{6}x^6'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficients',
                    explanation: 'Evaluate each coefficient: \\(\\binom{6}{0}=1\\), \\(\\binom{6}{1}=6\\), \\(\\binom{6}{2}=\\frac{6 \\times 5}{2}=15\\), \\(\\binom{6}{3}=\\frac{6 \\times 5 \\times 4}{6}=20\\), \\(\\binom{6}{4}=15\\), \\(\\binom{6}{5}=6\\), \\(\\binom{6}{6}=1\\).',
                    workingLatex: '= 1 + 6x + 15x^2 + 20x^3 + 15x^4 + 6x^5 + x^6'
                }
            ],
            finalAnswer: '1 + 6x + 15x^2 + 20x^3 + 15x^4 + 6x^5 + x^6'
        }
    },
    {
        id: 'be-061',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 61',
        difficulty: 'Foundation',
        questionText: 'In the expansion of \\( (2 + kx)^5 \\), the coefficient of \\( x^2 \\) is 80. Find \\( k \\), where \\( k > 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^2 term',
                    explanation: 'In the expansion of \\((2 + kx)^5\\), the general term is \\(\\binom{5}{r}(2)^{5-r}(kx)^r\\). The \\(x^2\\) term occurs when \\(r = 2\\).',
                    workingLatex: '\\text{x}^2 \\text{ term} = \\binom{5}{2}(2)^{5-2}(kx)^2'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10\\).',
                    workingLatex: '\\binom{5}{2} = 10'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the powers',
                    explanation: 'Calculate \\(2^3 = 8\\) and \\((kx)^2 = k^2 x^2\\). The coefficient of \\(x^2\\) is \\(10 \\times 8 \\times k^2 = 80k^2\\).',
                    workingLatex: '\\text{Coefficient} = 10 \\times 8 \\times k^2 = 80k^2'
                },
                {
                    stepNumber: 4,
                    description: 'Set up and solve the equation',
                    explanation: 'Set the coefficient equal to 80 and solve. Since \\(k > 0\\), take the positive root.',
                    workingLatex: '80k^2 = 80 \\implies k^2 = 1 \\implies k = 1'
                }
            ],
            finalAnswer: 'k = 1'
        }
    },
    {
        id: 'be-062',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 62',
        difficulty: 'Foundation',
        questionText: 'Find the first 3 terms of \\( (1 + \\frac{x}{2})^8 \\) in ascending powers of \\( x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first three terms',
                    explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = \\frac{x}{2}\\), \\(n = 8\\). Write out the terms for \\(r = 0, 1, 2\\).',
                    workingLatex: '\\left(1 + \\frac{x}{2}\\right)^8 = \\binom{8}{0} + \\binom{8}{1}\\left(\\frac{x}{2}\\right) + \\binom{8}{2}\\left(\\frac{x}{2}\\right)^2 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate binomial coefficients',
                    explanation: 'Calculate \\(\\binom{8}{0} = 1\\), \\(\\binom{8}{1} = 8\\), \\(\\binom{8}{2} = \\frac{8 \\times 7}{2} = 28\\).',
                    workingLatex: '= 1 + 8 \\cdot \\frac{x}{2} + 28 \\cdot \\frac{x^2}{4} + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Simplify: \\(8 \\times \\frac{1}{2} = 4\\) and \\(28 \\times \\frac{1}{4} = 7\\).',
                    workingLatex: '= 1 + 4x + 7x^2 + \\ldots'
                }
            ],
            finalAnswer: '1 + 4x + 7x^2'
        }
    },
    {
        id: 'be-063',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 63',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^4 \\) in the expansion of \\( (1 - 2x)^8 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the x^4 term',
                    explanation: 'In the expansion of \\((1 - 2x)^8\\), the general term is \\(\\binom{8}{r}(-2x)^r\\). The \\(x^4\\) term occurs when \\(r = 4\\).',
                    workingLatex: '\\text{x}^4 \\text{ term} = \\binom{8}{4}(-2x)^4'
                },
                {
                    stepNumber: 2,
                    description: 'Calculate the binomial coefficient',
                    explanation: 'Evaluate \\(\\binom{8}{4}\\) using the formula \\(\\frac{8!}{4! \\times 4!}\\).',
                    workingLatex: '\\binom{8}{4} = \\frac{8 \\times 7 \\times 6 \\times 5}{4 \\times 3 \\times 2 \\times 1} = \\frac{1680}{24} = 70'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the power of (-2x)',
                    explanation: 'Calculate \\((-2x)^4 = (-2)^4 x^4 = 16x^4\\). The even power makes this positive.',
                    workingLatex: '(-2x)^4 = 16x^4'
                },
                {
                    stepNumber: 4,
                    description: 'Multiply to find the coefficient',
                    explanation: 'Multiply the binomial coefficient by 16 to get the coefficient of \\(x^4\\).',
                    workingLatex: '70 \\times 16 = 1120'
                }
            ],
            finalAnswer: '1120'
        }
    },
    {
        id: 'be-064',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 64',
        difficulty: 'Foundation',
        questionText: 'Use the expansion of \\( (1 + x)^5 \\) to estimate \\( (1.1)^5 \\) correct to 3 decimal places.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rewrite as a binomial expression',
                    explanation: 'Write \\(1.1\\) in the form \\((1 + x)\\) so we can apply the binomial expansion.',
                    workingLatex: '(1.1)^5 = (1 + 0.1)^5'
                },
                {
                    stepNumber: 2,
                    description: 'Expand using binomial theorem',
                    explanation: 'Apply the full expansion of \\((1 + x)^5\\) with \\(x = 0.1\\). Since \\(n = 5\\), we write all six terms.',
                    workingLatex: '= \\binom{5}{0} + \\binom{5}{1}(0.1) + \\binom{5}{2}(0.1)^2 + \\binom{5}{3}(0.1)^3 + \\binom{5}{4}(0.1)^4 + \\binom{5}{5}(0.1)^5'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute binomial coefficients',
                    explanation: 'Evaluate \\(\\binom{5}{0}=1\\), \\(\\binom{5}{1}=5\\), \\(\\binom{5}{2}=10\\), \\(\\binom{5}{3}=10\\), \\(\\binom{5}{4}=5\\), \\(\\binom{5}{5}=1\\).',
                    workingLatex: '= 1 + 5(0.1) + 10(0.01) + 10(0.001) + 5(0.0001) + 1(0.00001)'
                },
                {
                    stepNumber: 4,
                    description: 'Calculate each term',
                    explanation: 'Multiply out each term to get its decimal value.',
                    workingLatex: '= 1 + 0.5 + 0.1 + 0.01 + 0.0005 + 0.00001'
                },
                {
                    stepNumber: 5,
                    description: 'Sum and round',
                    explanation: 'Add all terms and round to 3 decimal places.',
                    workingLatex: '= 1.61051 \\approx 1.611'
                }
            ],
            finalAnswer: '1.611'
        }
    },
    {
        id: 'be-065',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 65',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (3 - x)^4 \\) fully.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the binomial expansion',
                    explanation: 'Apply the binomial theorem with \\(a = 3\\), \\(b = -x\\), \\(n = 4\\). Each term has the form \\(\\binom{4}{r} 3^{4-r} (-x)^r\\).',
                    workingLatex: '(3 - x)^4 = \\binom{4}{0}3^4 + \\binom{4}{1}3^3(-x) + \\binom{4}{2}3^2(-x)^2 + \\binom{4}{3}3(-x)^3 + \\binom{4}{4}(-x)^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficients',
                    explanation: '\\(\\binom{4}{0}=1\\), \\(\\binom{4}{1}=4\\), \\(\\binom{4}{2}=6\\), \\(\\binom{4}{3}=4\\), \\(\\binom{4}{4}=1\\).',
                    workingLatex: '= 1 \\cdot 81 + 4 \\cdot 27 \\cdot (-x) + 6 \\cdot 9 \\cdot x^2 + 4 \\cdot 3 \\cdot (-x^3) + 1 \\cdot x^4'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out the numerical parts of each term. Be careful with the signs: odd powers of \\((-x)\\) give negative terms.',
                    workingLatex: '= 81 - 108x + 54x^2 - 12x^3 + x^4'
                }
            ],
            finalAnswer: '81 - 108x + 54x^2 - 12x^3 + x^4'
        }
    },
    {
        id: 'be-066',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 66',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^3 \\) in \\( (1 + \\frac{x}{3})^9 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the general term',
                    explanation: 'In the expansion of \\((1 + \\frac{x}{3})^9\\), the general term is \\(\\binom{9}{r} \\left(\\frac{x}{3}\\right)^r\\). For the \\(x^3\\) term we need \\(r = 3\\).',
                    workingLatex: '\\text{Term in } x^3 = \\binom{9}{3} \\left(\\frac{x}{3}\\right)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficient',
                    explanation: '\\(\\binom{9}{3} = \\frac{9!}{3! \\cdot 6!} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84\\).',
                    workingLatex: '\\binom{9}{3} = 84'
                },
                {
                    stepNumber: 3,
                    description: 'Compute the power of the fraction',
                    explanation: 'Cube both numerator and denominator separately: \\(\\left(\\frac{x}{3}\\right)^3 = \\frac{x^3}{27}\\).',
                    workingLatex: '84 \\times \\frac{x^3}{27} = \\frac{84}{27} x^3'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the fraction',
                    explanation: 'Divide numerator and denominator by their HCF of 3.',
                    workingLatex: '\\frac{84}{27} = \\frac{28}{9}'
                }
            ],
            finalAnswer: '\\frac{28}{9}'
        }
    },
    {
        id: 'be-067',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 67',
        difficulty: 'Foundation',
        questionText: 'Find the first 4 terms of \\( (4 - x)^5 \\) in ascending powers of \\( x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write out the first four terms',
                    explanation: 'Apply the binomial theorem with \\(a = 4\\), \\(b = -x\\), \\(n = 5\\). We only need terms up to \\(x^3\\).',
                    workingLatex: '(4 - x)^5 = \\binom{5}{0}4^5 + \\binom{5}{1}4^4(-x) + \\binom{5}{2}4^3(-x)^2 + \\binom{5}{3}4^2(-x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate the binomial coefficients',
                    explanation: '\\(\\binom{5}{0}=1\\), \\(\\binom{5}{1}=5\\), \\(\\binom{5}{2}=10\\), \\(\\binom{5}{3}=10\\).',
                    workingLatex: '= 1 \\cdot 1024 + 5 \\cdot 256 \\cdot (-x) + 10 \\cdot 64 \\cdot x^2 + 10 \\cdot 16 \\cdot (-x^3) + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify each term',
                    explanation: 'Multiply out the numerical parts. Remember \\((-x)^2 = x^2\\) (positive) and \\((-x)^3 = -x^3\\) (negative).',
                    workingLatex: '= 1024 - 1280x + 640x^2 - 160x^3 + \\ldots'
                }
            ],
            finalAnswer: '1024 - 1280x + 640x^2 - 160x^3'
        }
    },
    {
        id: 'be-068',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 68',
        difficulty: 'Foundation',
        questionText: 'The expansion of \\( (1 + px)^n \\) begins \\( 1 + 12x + 54x^2 + \\ldots \\). Find \\( p \\) and \\( n \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first three terms',
                    explanation: 'By the binomial theorem, \\((1 + px)^n = 1 + npx + \\frac{n(n-1)}{2}p^2x^2 + \\ldots\\). We compare these with the given expansion.',
                    workingLatex: '(1 + px)^n = 1 + npx + \\frac{n(n-1)}{2}p^2 x^2 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Match coefficient of x',
                    explanation: 'Comparing the coefficient of \\(x\\) with the given value of 12.',
                    workingLatex: 'np = 12 \\quad \\cdots (1)'
                },
                {
                    stepNumber: 3,
                    description: 'Match coefficient of x^2',
                    explanation: 'Comparing the coefficient of \\(x^2\\) with the given value of 54.',
                    workingLatex: '\\frac{n(n-1)}{2}p^2 = 54 \\quad \\cdots (2)'
                },
                {
                    stepNumber: 4,
                    description: 'Express p in terms of n',
                    explanation: 'From equation (1), rearrange to isolate \\(p\\).',
                    workingLatex: 'p = \\frac{12}{n}'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute into equation (2)',
                    explanation: 'Replace \\(p\\) in equation (2) with \\(\\frac{12}{n}\\) and simplify.',
                    workingLatex: '\\frac{n(n-1)}{2} \\times \\frac{144}{n^2} = 54'
                },
                {
                    stepNumber: 6,
                    description: 'Simplify the left-hand side',
                    explanation: 'Cancel \\(n\\) from numerator and denominator.',
                    workingLatex: '\\frac{72(n-1)}{n} = 54'
                },
                {
                    stepNumber: 7,
                    description: 'Solve for n',
                    explanation: 'Cross-multiply and collect like terms.',
                    workingLatex: '72n - 72 = 54n \\implies 18n = 72 \\implies n = 4'
                },
                {
                    stepNumber: 8,
                    description: 'Find p',
                    explanation: 'Substitute \\(n = 4\\) back into equation (1).',
                    workingLatex: 'p = \\frac{12}{4} = 3'
                }
            ],
            finalAnswer: 'n = 4, p = 3'
        }
    },
    {
        id: 'be-069',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 69',
        difficulty: 'Foundation',
        questionText: 'Expand \\( (x + 1)^5 + (x - 1)^5 \\). Simplify your answer.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand (x + 1)^5',
                    explanation: 'Apply the binomial theorem with \\(a = x\\), \\(b = 1\\), \\(n = 5\\).',
                    workingLatex: '(x+1)^5 = x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1'
                },
                {
                    stepNumber: 2,
                    description: 'Expand (x - 1)^5',
                    explanation: 'Apply the binomial theorem with \\(a = x\\), \\(b = -1\\), \\(n = 5\\). Odd powers of \\((-1)\\) give negative signs.',
                    workingLatex: '(x-1)^5 = x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1'
                },
                {
                    stepNumber: 3,
                    description: 'Add the two expansions',
                    explanation: 'Terms where \\((-1)^r\\) is negative cancel with the corresponding positive terms. Only the terms with even powers of \\((-1)\\) survive and are doubled.',
                    workingLatex: '(x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1) + (x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1)'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the result',
                    explanation: 'The \\(5x^4\\), \\(10x^2\\) and constant terms cancel. The \\(x^5\\), \\(10x^3\\) and \\(5x\\) terms double.',
                    workingLatex: '= 2x^5 + 20x^3 + 10x'
                }
            ],
            finalAnswer: '2x^5 + 20x^3 + 10x'
        }
    },
    {
        id: 'be-070',
        topicRef: 'BE',
        topicTitle: 'Binomial Expansion 70',
        difficulty: 'Foundation',
        questionText: 'Find the coefficient of \\( x^6 \\) in \\( (1 + x)^4(1 + x)^5 \\). [Hint: \\( (1+x)^4(1+x)^5 = (1+x)^9 \\).]',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Combine the two factors',
                    explanation: 'Using the index law \\(a^m \\times a^n = a^{m+n}\\), we can combine the product into a single power.',
                    workingLatex: '(1+x)^4(1+x)^5 = (1+x)^{4+5} = (1+x)^9'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the x^6 term',
                    explanation: 'In the expansion of \\((1+x)^9\\), the term in \\(x^6\\) is \\(\\binom{9}{6}x^6\\).',
                    workingLatex: '\\text{Coefficient of } x^6 = \\binom{9}{6}'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the binomial coefficient',
                    explanation: '\\(\\binom{9}{6} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84\\). Using \\(\\binom{n}{r} = \\binom{n}{n-r}\\) makes the calculation easier.',
                    workingLatex: '\\binom{9}{6} = \\frac{9!}{6! \\cdot 3!} = \\frac{9 \\times 8 \\times 7}{6} = 84'
                }
            ],
            finalAnswer: '84'
        }
    },

    // ─── CHALLENGE QUESTIONS (Q71–85) ─────────────────────────────────────────

    {
        id: 'be-071', topicRef: 'BE', topicTitle: 'Binomial Expansion 71', difficulty: 'Challenge',
        questionText: 'In the expansion of \\( (1 + ax)^{10} \\), the coefficient of \\( x^2 \\) is twice the coefficient of \\( x \\). Find the value of \\( a \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the general term', explanation: 'Apply the binomial theorem to \\((1 + ax)^{10}\\). The general term is \\(\\binom{10}{r}(ax)^r = \\binom{10}{r}a^r x^r\\).', workingLatex: '(1+ax)^{10} = \\sum_{r=0}^{10} \\binom{10}{r} (ax)^r' },
            { stepNumber: 2, description: 'Find the coefficient of x', explanation: 'Set \\(r = 1\\). Then \\(\\binom{10}{1} = 10\\).', workingLatex: '\\text{Coefficient of } x = \\binom{10}{1} a = 10a' },
            { stepNumber: 3, description: 'Find the coefficient of x^2', explanation: 'Set \\(r = 2\\). Then \\(\\binom{10}{2} = \\frac{10 \\times 9}{2} = 45\\).', workingLatex: '\\text{Coefficient of } x^2 = \\binom{10}{2} a^2 = 45a^2' },
            { stepNumber: 4, description: 'Set up the equation', explanation: 'The question states that the coefficient of \\(x^2\\) is twice the coefficient of \\(x\\).', workingLatex: '45a^2 = 2(10a) = 20a' },
            { stepNumber: 5, description: 'Rearrange to standard form', explanation: 'Bring all terms to one side. A common mistake is dividing both sides by \\(a\\), which loses the solution \\(a = 0\\).', workingLatex: '45a^2 - 20a = 0' },
            { stepNumber: 6, description: 'Factorise', explanation: 'Take out the common factor of \\(5a\\).', workingLatex: '5a(9a - 4) = 0' },
            { stepNumber: 7, description: 'Solve for a', explanation: 'This gives \\(a = 0\\) or \\(a = \\frac{4}{9}\\). Since \\(a = 0\\) is trivial (the expansion is just 1), we discard it.', workingLatex: 'a = 0 \\text{ (rejected)} \\quad \\text{or} \\quad a = \\frac{4}{9}' },
        ], finalAnswer: '\\(a = \\frac{4}{9}\\)', commonMistakes: ['\\(a = 0\\) is a trivial solution (all coefficients zero) so we discard it.'] }
    },
    {
        id: 'be-072', topicRef: 'BE', topicTitle: 'Binomial Expansion 72', difficulty: 'Challenge',
        questionText: 'Find the coefficient of \\( x^4 \\) in the expansion of \\( (1 + x)^5(1 - x)^5 \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Simplify using difference of squares', explanation: 'Recognise that \\((1+x)(1-x) = 1 - x^2\\), so we can combine the two powers into one.', workingLatex: '(1+x)^5(1-x)^5 = [(1+x)(1-x)]^5 = (1-x^2)^5' },
            { stepNumber: 2, description: 'Write the general term', explanation: 'Apply the binomial theorem with \\(u = -x^2\\) and \\(n = 5\\). The general term is \\(\\binom{5}{r}(-x^2)^r = \\binom{5}{r}(-1)^r x^{2r}\\).', workingLatex: '(1 - x^2)^5 = \\sum_{r=0}^{5} \\binom{5}{r} (-x^2)^r' },
            { stepNumber: 3, description: 'Identify the x^4 term', explanation: 'For \\(x^4\\) we need \\(2r = 4\\), so \\(r = 2\\).', workingLatex: '\\text{Term in } x^4: \\quad \\binom{5}{2}(-1)^2 x^4' },
            { stepNumber: 4, description: 'Evaluate the coefficient', explanation: '\\(\\binom{5}{2} = 10\\) and \\((-1)^2 = 1\\), so the coefficient is positive.', workingLatex: '\\binom{5}{2} \\times (-1)^2 = 10 \\times 1 = 10' },
        ], finalAnswer: '\\(10\\)' }
    },
    {
        id: 'be-073', topicRef: 'BE', topicTitle: 'Binomial Expansion 73', difficulty: 'Challenge',
        questionText: 'The first three terms of \\( (1 + px)^n \\) are \\( 1 + 20x + 160x^2 \\). Find \\( p \\) and \\( n \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the first three terms', explanation: 'Apply the binomial theorem to \\((1 + px)^n\\). The first three terms give coefficients to match.', workingLatex: '(1 + px)^n = 1 + npx + \\frac{n(n-1)}{2}p^2 x^2 + \\ldots' },
            { stepNumber: 2, description: 'Match coefficient of x', explanation: 'Comparing the coefficient of \\(x\\) with 20 gives our first equation.', workingLatex: 'np = 20 \\quad \\cdots (1)' },
            { stepNumber: 3, description: 'Match coefficient of x^2', explanation: 'Comparing the coefficient of \\(x^2\\) with 160 gives our second equation.', workingLatex: '\\frac{n(n-1)}{2}p^2 = 160 \\quad \\cdots (2)' },
            { stepNumber: 4, description: 'Express p in terms of n', explanation: 'From equation (1), rearrange to isolate \\(p\\).', workingLatex: 'p = \\frac{20}{n}' },
            { stepNumber: 5, description: 'Substitute into equation (2)', explanation: 'Replace \\(p\\) with \\(\\frac{20}{n}\\). Note \\(p^2 = \\frac{400}{n^2}\\).', workingLatex: '\\frac{n(n-1)}{2} \\cdot \\frac{400}{n^2} = 160' },
            { stepNumber: 6, description: 'Simplify the left-hand side', explanation: 'Cancel one factor of \\(n\\) from numerator and denominator.', workingLatex: '\\frac{200(n-1)}{n} = 160' },
            { stepNumber: 7, description: 'Cross-multiply and solve for n', explanation: 'Multiply both sides by \\(n\\) and collect like terms.', workingLatex: '200n - 200 = 160n \\implies 40n = 200 \\implies n = 5' },
            { stepNumber: 8, description: 'Find p', explanation: 'Substitute \\(n = 5\\) back into equation (1).', workingLatex: 'p = \\frac{20}{5} = 4' },
        ], finalAnswer: '\\(n = 5\\), \\(p = 4\\)' }
    },
    {
        id: 'be-074', topicRef: 'BE', topicTitle: 'Binomial Expansion 74', difficulty: 'Challenge',
        questionText: 'Find the term independent of \\( x \\) in \\( \\left(2x^2 + \\dfrac{3}{x}\\right)^6 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the general term', explanation: 'Apply the binomial theorem with \\(a = 2x^2\\), \\(b = \\frac{3}{x}\\), \\(n = 6\\).', workingLatex: 'T_{r+1} = \\binom{6}{r}(2x^2)^{6-r}\\left(\\frac{3}{x}\\right)^r' },
            { stepNumber: 2, description: 'Separate constants and x-powers', explanation: 'The power of \\(x\\) from \\((2x^2)^{6-r}\\) is \\(2(6-r) = 12 - 2r\\). From \\((\\frac{3}{x})^r = 3^r x^{-r}\\) it is \\(-r\\). Combined: \\(12 - 3r\\).', workingLatex: 'T_{r+1} = \\binom{6}{r} \\cdot 2^{6-r} \\cdot 3^r \\cdot x^{12-3r}' },
            { stepNumber: 3, description: 'Set the power of x to zero', explanation: 'The term independent of \\(x\\) has \\(x^0\\), so we set the exponent equal to zero.', workingLatex: '12 - 3r = 0 \\implies r = 4' },
            { stepNumber: 4, description: 'Evaluate the binomial coefficient', explanation: '\\(\\binom{6}{4} = \\binom{6}{2} = \\frac{6 \\times 5}{2} = 15\\).', workingLatex: '\\binom{6}{4} = 15' },
            { stepNumber: 5, description: 'Compute the constant factors', explanation: 'With \\(r = 4\\): \\(2^{6-4} = 2^2 = 4\\) and \\(3^4 = 81\\).', workingLatex: 'T_5 = 15 \\times 4 \\times 81' },
            { stepNumber: 6, description: 'Multiply to get the answer', explanation: 'Compute \\(15 \\times 4 = 60\\), then \\(60 \\times 81 = 4860\\).', workingLatex: '= 4860' },
        ], finalAnswer: '\\(4860\\)' }
    },
    {
        id: 'be-075', topicRef: 'BE', topicTitle: 'Binomial Expansion 75', difficulty: 'Challenge',
        questionText: 'Given that \\( (1 + kx)^8 = 1 + 12x + ax^2 + bx^3 + \\ldots \\), find the values of \\( k \\), \\( a \\) and \\( b \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the first four terms', explanation: 'Apply the binomial theorem to \\((1 + kx)^8\\).', workingLatex: '(1+kx)^8 = 1 + \\binom{8}{1}(kx) + \\binom{8}{2}(kx)^2 + \\binom{8}{3}(kx)^3 + \\ldots' },
            { stepNumber: 2, description: 'Evaluate binomial coefficients', explanation: '\\(\\binom{8}{1} = 8\\), \\(\\binom{8}{2} = 28\\), \\(\\binom{8}{3} = 56\\).', workingLatex: '= 1 + 8kx + 28k^2 x^2 + 56k^3 x^3 + \\ldots' },
            { stepNumber: 3, description: 'Find k from coefficient of x', explanation: 'Match the coefficient of \\(x\\) with the given value of 12.', workingLatex: '8k = 12 \\implies k = \\frac{3}{2}' },
            { stepNumber: 4, description: 'Find a', explanation: 'Substitute \\(k = \\frac{3}{2}\\) into the coefficient of \\(x^2\\). Note \\(\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}\\).', workingLatex: 'a = 28 \\times \\left(\\frac{3}{2}\\right)^2 = 28 \\times \\frac{9}{4} = 63' },
            { stepNumber: 5, description: 'Find b', explanation: 'Substitute \\(k = \\frac{3}{2}\\) into the coefficient of \\(x^3\\). Note \\(\\left(\\frac{3}{2}\\right)^3 = \\frac{27}{8}\\).', workingLatex: 'b = 56 \\times \\left(\\frac{3}{2}\\right)^3 = 56 \\times \\frac{27}{8} = 189' },
        ], finalAnswer: '\\(k = \\frac{3}{2}\\), \\(a = 63\\), \\(b = 189\\)' }
    },
    {
        id: 'be-076', topicRef: 'BE', topicTitle: 'Binomial Expansion 76', difficulty: 'Challenge',
        questionText: 'Show that \\( (1 + \\sqrt{2})^4 + (1 - \\sqrt{2})^4 = 34 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write out the binomial expansion', explanation: 'Use \\((a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4\\) with \\(a = 1\\), \\(b = \\sqrt{2}\\).', workingLatex: '(1+\\sqrt{2})^4 = \\binom{4}{0}1^4 + \\binom{4}{1}(\\sqrt{2}) + \\binom{4}{2}(\\sqrt{2})^2 + \\binom{4}{3}(\\sqrt{2})^3 + \\binom{4}{4}(\\sqrt{2})^4' },
            { stepNumber: 2, description: 'Evaluate powers of sqrt(2)', explanation: 'Compute \\((\\sqrt{2})^2 = 2\\), \\((\\sqrt{2})^3 = 2\\sqrt{2}\\), \\((\\sqrt{2})^4 = 4\\).', workingLatex: '= 1 + 4\\sqrt{2} + 6(2) + 4(2\\sqrt{2}) + 4' },
            { stepNumber: 3, description: 'Simplify the first expansion', explanation: 'Group integer terms: \\(1 + 12 + 4 = 17\\). Group surd terms: \\(4\\sqrt{2} + 8\\sqrt{2} = 12\\sqrt{2}\\).', workingLatex: '(1+\\sqrt{2})^4 = 17 + 12\\sqrt{2}' },
            { stepNumber: 4, description: 'Expand the second expression', explanation: 'For \\((1 - \\sqrt{2})^4\\), replace \\(\\sqrt{2}\\) with \\(-\\sqrt{2}\\). Odd powers of \\(\\sqrt{2}\\) change sign, even powers stay the same.', workingLatex: '(1-\\sqrt{2})^4 = 1 - 4\\sqrt{2} + 12 - 8\\sqrt{2} + 4 = 17 - 12\\sqrt{2}' },
            { stepNumber: 5, description: 'Add the two expansions', explanation: 'The surd terms \\(+12\\sqrt{2}\\) and \\(-12\\sqrt{2}\\) cancel, leaving only integer parts.', workingLatex: '(17 + 12\\sqrt{2}) + (17 - 12\\sqrt{2}) = 34 \\quad \\checkmark' },
        ], finalAnswer: '\\(34\\) (shown)' }
    },
    {
        id: 'be-077', topicRef: 'BE', topicTitle: 'Binomial Expansion 77', difficulty: 'Challenge',
        questionText: 'The coefficient of \\( x^3 \\) in \\( (2 + x)^5(1 - x)^3 \\) is to be found. Expand each bracket up to \\( x^3 \\) and multiply.',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand (2+x)^5 up to x^3', explanation: 'Apply the binomial theorem with \\(a = 2\\), \\(b = x\\), \\(n = 5\\). We only need terms up to \\(x^3\\).', workingLatex: '\\binom{5}{0}2^5 + \\binom{5}{1}2^4 x + \\binom{5}{2}2^3 x^2 + \\binom{5}{3}2^2 x^3 + \\ldots' },
            { stepNumber: 2, description: 'Evaluate the coefficients', explanation: '\\(\\binom{5}{0}=1\\), \\(\\binom{5}{1}=5\\), \\(\\binom{5}{2}=10\\), \\(\\binom{5}{3}=10\\).', workingLatex: '(2+x)^5 = 32 + 80x + 80x^2 + 40x^3 + \\ldots' },
            { stepNumber: 3, description: 'Expand (1-x)^3 fully', explanation: 'Apply the binomial theorem with \\(a = 1\\), \\(b = -x\\), \\(n = 3\\).', workingLatex: '(1-x)^3 = 1 - 3x + 3x^2 - x^3' },
            { stepNumber: 4, description: 'Identify all x^3 contributions', explanation: 'When multiplying two polynomials, \\(x^3\\) arises from pairing terms whose powers sum to 3: \\(x^0 \\cdot x^3\\), \\(x^1 \\cdot x^2\\), \\(x^2 \\cdot x^1\\), and \\(x^3 \\cdot x^0\\).', workingLatex: '32 \\times (-1) + 80 \\times 3 + 80 \\times (-3) + 40 \\times 1' },
            { stepNumber: 5, description: 'Evaluate the sum', explanation: 'Compute each product and add them together.', workingLatex: '-32 + 240 - 240 + 40 = 8' },
        ], finalAnswer: '\\(8\\)' }
    },
    {
        id: 'be-078', topicRef: 'BE', topicTitle: 'Binomial Expansion 78', difficulty: 'Challenge',
        questionText: 'Find the value of \\( \\sum_{r=0}^{6} \\binom{6}{r} \\).',
        marks: 3, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recall the binomial theorem', explanation: 'By the binomial theorem, \\((1+x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r\\).', workingLatex: '(1+x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r' },
            { stepNumber: 2, description: 'Substitute x = 1', explanation: 'Setting \\(x = 1\\) makes every \\(x^r = 1\\), leaving just the sum of binomial coefficients on the right and \\(2^n\\) on the left.', workingLatex: '(1+1)^n = \\sum_{r=0}^{n} \\binom{n}{r} \\cdot 1^r = \\sum_{r=0}^{n} \\binom{n}{r}' },
            { stepNumber: 3, description: 'Apply with n = 6', explanation: 'Substitute \\(n = 6\\) and evaluate \\(2^6\\).', workingLatex: '\\sum_{r=0}^{6} \\binom{6}{r} = 2^6 = 64' },
        ], finalAnswer: '\\(64\\)' }
    },
    {
        id: 'be-079', topicRef: 'BE', topicTitle: 'Binomial Expansion 79', difficulty: 'Challenge',
        questionText: 'In the expansion of \\( (1 + x)^n \\), the coefficients of \\( x^4 \\) and \\( x^5 \\) are equal. Find \\( n \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the two coefficients', explanation: 'In \\((1+x)^n\\), the coefficient of \\(x^r\\) is \\(\\binom{n}{r}\\).', workingLatex: '\\text{Coefficient of } x^4 = \\binom{n}{4}, \\quad \\text{Coefficient of } x^5 = \\binom{n}{5}' },
            { stepNumber: 2, description: 'Set them equal', explanation: 'The question states these coefficients are equal.', workingLatex: '\\binom{n}{4} = \\binom{n}{5}' },
            { stepNumber: 3, description: 'Write using factorial formula', explanation: 'Use \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\) for each side.', workingLatex: '\\frac{n!}{4!(n-4)!} = \\frac{n!}{5!(n-5)!}' },
            { stepNumber: 4, description: 'Cancel n! and simplify', explanation: 'Divide both sides by \\(n!\\) and note that \\(\\frac{5!}{4!} = 5\\) and \\(\\frac{(n-4)!}{(n-5)!} = n-4\\).', workingLatex: '\\frac{1}{4!(n-4)!} = \\frac{1}{5!(n-5)!} \\implies 5 = n - 4' },
            { stepNumber: 5, description: 'Solve for n', explanation: 'Rearrange to find \\(n\\).', workingLatex: 'n = 9' },
        ], finalAnswer: '\\(n = 9\\)' }
    },
    {
        id: 'be-080', topicRef: 'BE', topicTitle: 'Binomial Expansion 80', difficulty: 'Challenge',
        questionText: 'Find the coefficient of \\( x^2 \\) in \\( (1 + 2x)^5 - (1 - 2x)^5 \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand (1 + 2x)^5 up to x^2', explanation: 'Apply the binomial theorem. \\(\\binom{5}{1} = 5\\), \\(\\binom{5}{2} = 10\\).', workingLatex: '(1+2x)^5 = 1 + 5(2x) + 10(2x)^2 + \\ldots = 1 + 10x + 40x^2 + \\ldots' },
            { stepNumber: 2, description: 'Expand (1 - 2x)^5 up to x^2', explanation: 'Replace \\(2x\\) with \\(-2x\\). Even powers of \\((-2x)\\) are positive, odd powers are negative.', workingLatex: '(1-2x)^5 = 1 - 10x + 40x^2 - \\ldots' },
            { stepNumber: 3, description: 'Subtract the two expansions', explanation: 'When subtracting, note the \\(x^2\\) terms are both \\(+40x^2\\), so they cancel. The even-powered terms always cancel when subtracting \\(f(x) - f(-x)\\).', workingLatex: '(1 + 10x + 40x^2 + \\ldots) - (1 - 10x + 40x^2 - \\ldots)' },
            { stepNumber: 4, description: 'Read off the x^2 coefficient', explanation: 'The \\(x^2\\) coefficient is \\(40 - 40 = 0\\).', workingLatex: '\\text{Coefficient of } x^2 = 40 - 40 = 0' },
        ], finalAnswer: '\\(0\\)' }
    },
    {
        id: 'be-081', topicRef: 'BE', topicTitle: 'Binomial Expansion 81', difficulty: 'Challenge',
        questionText: 'The constant term in the expansion of \\( \\left(x^2 - \\dfrac{k}{x}\\right)^9 \\) is \\( 672 \\). Find the possible values of \\( k \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the general term', explanation: 'Apply the binomial theorem with \\(a = x^2\\), \\(b = -\\frac{k}{x}\\), \\(n = 9\\).', workingLatex: 'T_{r+1} = \\binom{9}{r}(x^2)^{9-r}\\left(-\\frac{k}{x}\\right)^r' },
            { stepNumber: 2, description: 'Combine the powers of x', explanation: 'The power from \\((x^2)^{9-r}\\) is \\(18-2r\\). The power from \\(x^{-r}\\) is \\(-r\\). Combined: \\(18-3r\\).', workingLatex: 'T_{r+1} = \\binom{9}{r}(-k)^r x^{18-3r}' },
            { stepNumber: 3, description: 'Set the power of x to zero', explanation: 'The constant term has \\(x^0\\), so set the exponent to zero.', workingLatex: '18 - 3r = 0 \\implies r = 6' },
            { stepNumber: 4, description: 'Evaluate the binomial coefficient', explanation: '\\(\\binom{9}{6} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{6} = 84\\). Also \\((-k)^6 = k^6\\) since the power is even.', workingLatex: '\\binom{9}{6}(-k)^6 = 84k^6' },
            { stepNumber: 5, description: 'Set equal to 672 and solve', explanation: 'Divide both sides by 84.', workingLatex: '84k^6 = 672 \\implies k^6 = 8' },
            { stepNumber: 6, description: 'Simplify the sixth root', explanation: 'Write \\(8 = 2^3\\), so \\(k^6 = 2^3\\), giving \\(k = 2^{3/6} = 2^{1/2} = \\sqrt{2}\\). Since \\(k^6 = (-k)^6\\), both signs work.', workingLatex: 'k = \\pm\\sqrt{2}' },
        ], finalAnswer: '\\(k = \\sqrt{2}\\) or \\(k = -\\sqrt{2}\\)', commonMistakes: ['Since \\((-k)^6 = k^6\\), both positive and negative values of \\(k\\) give the same constant term.'] }
    },
    {
        id: 'be-082', topicRef: 'BE', topicTitle: 'Binomial Expansion 82', difficulty: 'Challenge',
        questionText: 'Use the binomial expansion to show that \\( (1+x)^n + (1-x)^n = 2\\left[1 + \\binom{n}{2}x^2 + \\binom{n}{4}x^4 + \\ldots\\right] \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand (1+x)^n', explanation: 'Apply the binomial theorem to write out the expansion.', workingLatex: '(1+x)^n = \\binom{n}{0} + \\binom{n}{1}x + \\binom{n}{2}x^2 + \\binom{n}{3}x^3 + \\binom{n}{4}x^4 + \\ldots' },
            { stepNumber: 2, description: 'Expand (1-x)^n', explanation: 'Replace \\(x\\) with \\(-x\\). Each term picks up a factor of \\((-1)^r\\), so odd-powered terms change sign.', workingLatex: '(1-x)^n = \\binom{n}{0} - \\binom{n}{1}x + \\binom{n}{2}x^2 - \\binom{n}{3}x^3 + \\binom{n}{4}x^4 - \\ldots' },
            { stepNumber: 3, description: 'Add term by term', explanation: 'When we add the two expansions, the odd-powered terms (\\(r = 1, 3, 5, \\ldots\\)) cancel because they have opposite signs. The even-powered terms (\\(r = 0, 2, 4, \\ldots\\)) are identical and double.', workingLatex: '(1+x)^n + (1-x)^n = 2\\binom{n}{0} + 2\\binom{n}{2}x^2 + 2\\binom{n}{4}x^4 + \\ldots' },
            { stepNumber: 4, description: 'Factor out the 2', explanation: 'Since \\(\\binom{n}{0} = 1\\), we can write the result in the required form.', workingLatex: '= 2\\left[1 + \\binom{n}{2}x^2 + \\binom{n}{4}x^4 + \\ldots\\right] \\quad \\checkmark' },
        ], finalAnswer: 'Shown' }
    },
    {
        id: 'be-083', topicRef: 'BE', topicTitle: 'Binomial Expansion 83', difficulty: 'Challenge',
        questionText: 'Find the coefficient of \\( x^6 \\) in \\( (1 + x + x^2)^5 \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rewrite as a binomial', explanation: 'Group \\((1+x+x^2)\\) as \\([(1+x) + x^2]\\) so the binomial theorem applies with two parts.', workingLatex: '(1 + x + x^2)^5 = [(1+x) + x^2]^5' },
            { stepNumber: 2, description: 'Apply the binomial theorem', explanation: 'Let \\(a = 1+x\\), \\(b = x^2\\). Expand using \\((a+b)^5 = \\sum_{r=0}^{5} \\binom{5}{r} a^{5-r} b^r\\).', workingLatex: '= \\sum_{r=0}^{5} \\binom{5}{r} (1+x)^{5-r} x^{2r}' },
            { stepNumber: 3, description: 'Determine which r values contribute', explanation: 'For \\(x^6\\), we need the total power \\(2r + k = 6\\) where \\(k\\) comes from \\((1+x)^{5-r}\\) and \\(0 \\le k \\le 5-r\\).', workingLatex: 'r = 0: k = 6 > 5 \\text{ (impossible)}' },
            { stepNumber: 4, description: 'Evaluate the r = 1 contribution', explanation: 'When \\(r = 1\\): \\(k = 4\\), need coefficient of \\(x^4\\) in \\((1+x)^4\\), which is \\(\\binom{4}{4} = 1\\).', workingLatex: '\\binom{5}{1} \\times \\binom{4}{4} = 5 \\times 1 = 5' },
            { stepNumber: 5, description: 'Evaluate the r = 2 contribution', explanation: 'When \\(r = 2\\): \\(k = 2\\), need coefficient of \\(x^2\\) in \\((1+x)^3\\), which is \\(\\binom{3}{2} = 3\\).', workingLatex: '\\binom{5}{2} \\times \\binom{3}{2} = 10 \\times 3 = 30' },
            { stepNumber: 6, description: 'Evaluate the r = 3 contribution', explanation: 'When \\(r = 3\\): \\(k = 0\\), need coefficient of \\(x^0\\) in \\((1+x)^2\\), which is \\(\\binom{2}{0} = 1\\).', workingLatex: '\\binom{5}{3} \\times \\binom{2}{0} = 10 \\times 1 = 10' },
            { stepNumber: 7, description: 'Sum the contributions', explanation: 'Add up all valid contributions. For \\(r \\ge 4\\), \\(2r \\ge 8 > 6\\) so no more terms contribute.', workingLatex: '5 + 30 + 10 = 45' },
        ], finalAnswer: '\\(45\\)' }
    },
    {
        id: 'be-084', topicRef: 'BE', topicTitle: 'Binomial Expansion 84', difficulty: 'Challenge',
        questionText: 'The ratio of the coefficient of \\( x^3 \\) to the coefficient of \\( x^4 \\) in \\( (1 + 2x)^n \\) is \\( 2:3 \\). Find \\( n \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the general term', explanation: 'In \\((1+2x)^n\\), the general term is \\(\\binom{n}{r}(2x)^r = \\binom{n}{r} 2^r x^r\\).', workingLatex: 'T_{r+1} = \\binom{n}{r}(2x)^r' },
            { stepNumber: 2, description: 'Find coefficient of x^3', explanation: 'Set \\(r = 3\\). Then \\(2^3 = 8\\).', workingLatex: '\\text{Coefficient of } x^3 = \\binom{n}{3} \\cdot 8 = 8\\binom{n}{3}' },
            { stepNumber: 3, description: 'Find coefficient of x^4', explanation: 'Set \\(r = 4\\). Then \\(2^4 = 16\\).', workingLatex: '\\text{Coefficient of } x^4 = \\binom{n}{4} \\cdot 16 = 16\\binom{n}{4}' },
            { stepNumber: 4, description: 'Set up the ratio', explanation: 'The ratio of the coefficient of \\(x^3\\) to the coefficient of \\(x^4\\) is \\(2:3\\).', workingLatex: '\\frac{8\\binom{n}{3}}{16\\binom{n}{4}} = \\frac{2}{3}' },
            { stepNumber: 5, description: 'Simplify using binomial identity', explanation: 'Use the identity \\(\\binom{n}{4} = \\frac{n-3}{4}\\binom{n}{3}\\) to replace \\(\\binom{n}{4}\\).', workingLatex: '\\frac{8}{16} \\cdot \\frac{4}{n-3} = \\frac{2}{3}' },
            { stepNumber: 6, description: 'Simplify the left-hand side', explanation: 'Compute \\(\\frac{8}{16} \\cdot \\frac{4}{n-3} = \\frac{2}{n-3}\\).', workingLatex: '\\frac{2}{n-3} = \\frac{2}{3}' },
            { stepNumber: 7, description: 'Solve for n', explanation: 'By comparing, \\(n - 3 = 3\\).', workingLatex: 'n = 6' },
        ], finalAnswer: '\\(n = 6\\)' }
    },
    {
        id: 'be-085', topicRef: 'BE', topicTitle: 'Binomial Expansion 85', difficulty: 'Challenge',
        questionText: 'Use the expansion of \\( (1 + x)^{10} \\) with a suitable value of \\( x \\) to find \\( \\sum_{r=0}^{10} (-1)^r \\binom{10}{r} 3^r \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recall the binomial theorem', explanation: 'The binomial theorem states \\((1+x)^{10} = \\sum_{r=0}^{10} \\binom{10}{r} x^r\\).', workingLatex: '(1+x)^{10} = \\sum_{r=0}^{10} \\binom{10}{r} x^r' },
            { stepNumber: 2, description: 'Identify the substitution', explanation: 'The given sum has \\((-1)^r \\cdot 3^r\\). Combine: \\((-1)^r \\cdot 3^r = (-3)^r\\). This matches \\(x^r\\) when \\(x = -3\\).', workingLatex: '\\sum_{r=0}^{10} (-1)^r \\binom{10}{r} 3^r = \\sum_{r=0}^{10} \\binom{10}{r} (-3)^r' },
            { stepNumber: 3, description: 'Apply the binomial theorem', explanation: 'Substituting \\(x = -3\\) into \\((1+x)^{10}\\).', workingLatex: '= (1 + (-3))^{10} = (-2)^{10}' },
            { stepNumber: 4, description: 'Evaluate the power', explanation: 'Since the exponent is even, \\((-2)^{10} = 2^{10} = 1024\\).', workingLatex: '(-2)^{10} = 1024' },
        ], finalAnswer: '\\(1024\\)' }
    },
];
