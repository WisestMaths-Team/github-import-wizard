import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\).',
                    explanation: 'With \\(a = 1\\), \\(b = x\\), \\(n = 5\\), this simplifies to \\((1+x)^5 = \\sum_{r=0}^{5} \\binom{5}{r} x^r\\).',
                    workingLatex: '(1+x)^5 = \\binom{5}{0} + \\binom{5}{1}x + \\binom{5}{2}x^2 + \\binom{5}{3}x^3 + \\binom{5}{4}x^4 + \\binom{5}{5}x^5'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Evaluate the binomial coefficients: \\(\\binom{5}{0}=1,\\ \\binom{5}{1}=5,\\ \\binom{5}{2}=10,\\ \\binom{5}{3}=10,\\ \\binom{5}{4}=5,\\ \\binom{5}{5}=1\\).',
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
                    description: 'Apply the binomial theorem.',
                    explanation: 'The binomial theorem states \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Here \\(a = x\\), \\(b = 3\\), \\(n = 4\\). Since the question asks for ascending powers of \\(x\\), write the terms starting from the constant.',
                    workingLatex: '\\begin{aligned} (x+3)^4 &= \\binom{4}{0}(3)^4 + \\binom{4}{1}(3)^3 x + \\binom{4}{2}(3)^2 x^2 + \\binom{4}{3}(3) x^3 + \\binom{4}{4} x^4 \\\\ &= 81 + 4(27)x + 6(9)x^2 + 4(3)x^3 + x^4 \\\\ &= 81 + 108x + 54x^2 + 12x^3 + x^4 \\end{aligned}'
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\).',
                    explanation: 'Write out the expansion with \\(a = 2\\), \\(b = x\\), \\(n = 4\\).',
                    workingLatex: '(2+x)^4 = \\binom{4}{0}(2)^4 + \\binom{4}{1}(2)^3 x + \\binom{4}{2}(2)^2 x^2 + \\binom{4}{3}(2)x^3 + \\binom{4}{4}x^4'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Compute each term: \\(1 \\times 16,\\ 4 \\times 8,\\ 6 \\times 4,\\ 4 \\times 2,\\ 1 \\times 1\\).',
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
                    description: 'Apply the binomial theorem.',
                    explanation: 'The binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Here \\(a = 1\\), \\(b = -2x\\), \\(n = 5\\). Be careful with the signs — each power of \\(-2x\\) alternates sign.',
                    workingLatex: '\\begin{aligned} (1-2x)^5 &= \\binom{5}{0} + \\binom{5}{1}(-2x) + \\binom{5}{2}(-2x)^2 + \\binom{5}{3}(-2x)^3 + \\binom{5}{4}(-2x)^4 + \\binom{5}{5}(-2x)^5 \\\\ &= 1 + 5(-2x) + 10(4x^2) + 10(-8x^3) + 5(16x^4) + (-32x^5) \\\\ &= 1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5 \\end{aligned}'
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
                    description: 'Apply the binomial theorem in ascending powers of \\(x\\).',
                    explanation: 'The binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Here \\(a = -1\\), \\(b = 3x\\), \\(n = 4\\). Writing \\(b = 3x\\) as the ascending term ensures ascending powers of \\(x\\).',
                    workingLatex: '\\begin{aligned} (3x-1)^4 &= \\binom{4}{0}(-1)^4 + \\binom{4}{1}(-1)^3(3x) + \\binom{4}{2}(-1)^2(3x)^2 + \\binom{4}{3}(-1)(3x)^3 + \\binom{4}{4}(3x)^4 \\\\ &= 1 - 4(3x) + 6(9x^2) - 4(27x^3) + 81x^4 \\\\ &= 1 - 12x + 54x^2 - 108x^3 + 81x^4 \\end{aligned}'
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
                    description: 'Apply the binomial theorem: \((a+b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r\).',
                    explanation: 'Apply the binomial theorem with \\(a = 2x\\), \\(b = y\\), \\(n = 3\\).',
                    workingLatex: '(2x+y)^3 = \\binom{3}{0}(2x)^3 + \\binom{3}{1}(2x)^2(y) + \\binom{3}{2}(2x)(y)^2 + \\binom{3}{3}(y)^3'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Evaluate: \\(1 \\times 8x^3 + 3 \\times 4x^2 y + 3 \\times 2xy^2 + 1 \\times y^3\\).',
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
                    workingLatex: '(1+3x)^6 \\approx \\binom{6}{0} + \\binom{6}{1}(3x) + \\binom{6}{2}(3x)^2 + \\binom{6}{3}(3x)^3'
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Use the formula \\( \\binom{n}{r} = \\dfrac{n!}{r!(n-r)!} \\).',
                    workingLatex: '\\binom{7}{3} = \\frac{7!}{3! \\times 4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: 'Cancel and simplify.',
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Apply the formula.',
                    workingLatex: '\\binom{9}{2} = \\frac{9!}{2! \\times 7!} = \\frac{9 \\times 8}{2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    explanation: 'Simplify.',
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Apply the formula.',
                    workingLatex: '\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Compute numerator and denominator.',
                    workingLatex: '= \\frac{5040}{24} = 210'
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Use the symmetry property: \\( \\binom{8}{5} = \\binom{8}{3} \\).',
                    workingLatex: '\\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = \\frac{336}{6} = 56'
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Apply the formula.',
                    workingLatex: '\\binom{12}{3} = \\frac{12 \\times 11 \\times 10}{3 \\times 2 \\times 1} = \\frac{1320}{6} = 220'
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Substitute \\(n = 6\\) into the formula.',
                    workingLatex: '\\binom{6}{2} = \\frac{6 \\times 5}{2 \\times 1} = \\frac{30}{2} = 15'
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: 'Write out the formula.',
                    workingLatex: '\\binom{11}{4} = \\frac{11!}{4! \\times 7!} = \\frac{11 \\times 10 \\times 9 \\times 8}{4 \\times 3 \\times 2 \\times 1}'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Compute numerator: \\(11 \\times 10 = 110\\), \\(110 \\times 9 = 990\\), \\(990 \\times 8 = 7920\\). Denominator: \\(4! = 24\\).',
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
                    description: 'Use the binomial theorem to identify the general term.',
                    explanation: 'By the binomial theorem, \\((1+x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r\\). The general term is \\(\\binom{n}{r} x^r\\). To find the coefficient of \\(x^3\\), set \\(r = 3\\).',
                    workingLatex: '\\text{Coefficient of } x^3 = \\binom{8}{3} = \\frac{8 \\times 7 \\times 6}{3!} = \\frac{336}{6} = 56'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'The general term is \\( \\binom{10}{r}(-x)^r = \\binom{10}{r}(-1)^r x^r \\). For \\(x^4\\), set \\(r = 4\\).',
                    workingLatex: '\\text{Term} = \\binom{10}{4}(-1)^4 x^4 = 210 \\times 1 \\times x^4'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: 'The coefficient is therefore \\(+210\\).',
                    workingLatex: '\\text{Coefficient of } x^4 = 210'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'General term: \\( \\binom{11}{r}(3x)^r \\). For \\(x^2\\), set \\(r = 2\\).',
                    workingLatex: '\\text{Term} = \\binom{11}{2}(3x)^2 = 55 \\times 9x^2 = 495x^2'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'General term: \\( \\binom{9}{r}(-2x)^r \\). For \\(x^3\\), set \\(r = 3\\).',
                    workingLatex: '\\text{Term} = \\binom{9}{3}(-2)^3 x^3 = 84 \\times (-8) x^3 = -672x^3'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'General term: \\( \\binom{6}{r}(2)^{6-r} x^r \\). For \\(x^2\\), set \\(r = 2\\).',
                    workingLatex: '\\text{Term} = \\binom{6}{2}(2)^4 x^2 = 15 \\times 16 \\times x^2 = 240x^2'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'General term: \\( \\binom{5}{r}(3)^{5-r}(2x)^r \\). For \\(x^3\\), set \\(r = 3\\).',
                    workingLatex: '\\text{Term} = \\binom{5}{3}(3)^2(2)^3 x^3 = 10 \\times 9 \\times 8 \\times x^3 = 720x^3'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'General term: \\( \\binom{7}{r} x^r \\). For \\(x^5\\), set \\(r = 5\\). Use symmetry: \\( \\binom{7}{5} = \\binom{7}{2} \\).',
                    workingLatex: '\\binom{7}{2} = \\frac{7 \\times 6}{2} = 21'
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
                    description: 'The general term of \\((a+b)^n\\) is \\(\\binom{n}{r} a^{n-r} b^r\\). Identify the term with the required power.',
                    explanation: 'The coefficient of \\(x^2\\) in \\((1+ax)^6\\) is \\( \\binom{6}{2} a^2 \\).',
                    workingLatex: '\\binom{6}{2} a^2 = 15a^2'
                },
                {
                    stepNumber: 2,
                    description: 'Set the power of \\(x\\) to zero.',
                    explanation: 'Set this equal to 60 and solve.',
                    workingLatex: '15a^2 = 60 \\implies a^2 = 4 \\implies a = \\pm 2'
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
                    description: 'Write the general term using the binomial theorem.',
                    explanation: 'By the binomial theorem, \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Here \\(a = x\\), \\(b = -\\frac{1}{x}\\), \\(n = 6\\). Combine the powers of \\(x\\) into a single exponent.',
                    workingLatex: 'T_{r+1} = \\binom{6}{r}(x)^{6-r}\\left(-\\frac{1}{x}\\right)^r = \\binom{6}{r}(-1)^r x^{6-2r}'
                },
                {
                    stepNumber: 2,
                    description: 'Set the power of \\(x\\) to zero to find the term independent of \\(x\\).',
                    explanation: 'The term independent of \\(x\\) is the term where the exponent of \\(x\\) equals zero.',
                    workingLatex: '6 - 2r = 0 \\quad\\quad \\Rightarrow \\quad\\quad r = 3'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\(r = 3\\) into the general term.',
                    explanation: '',
                    workingLatex: 'T_4 = \\binom{6}{3}(-1)^3 = 20 \\times (-1) = -20'
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
                    description: 'Write the general term using \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\) and set the power of \\(x\\) to zero.',
                    explanation: 'General term: \\( \\binom{4}{r}(x)^{4-r}\\left(\\dfrac{2}{x}\\right)^r = \\binom{4}{r} 2^r x^{4-r} x^{-r} = \\binom{4}{r} 2^r x^{4-2r} \\).',
                    workingLatex: 'T_{r+1} = \\binom{4}{r} 2^r x^{4-2r}'
                },
                {
                    stepNumber: 2,
                    description: 'Set the power of \\(x\\) to zero.',
                    explanation: 'Set \\(4 - 2r = 0 \\Rightarrow r = 2\\).',
                    workingLatex: 'r = 2'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute and evaluate.',
                    explanation: 'Substitute: \\(\\binom{4}{2} \\times 2^2 = 6 \\times 4 = 24\\).',
                    workingLatex: 'T_3 = 24'
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
                    description: 'Write the general term using \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\) and set the power of \\(x\\) to zero.',
                    explanation: 'General term: \\( \\binom{6}{r}(2x)^{6-r}\\left(-\\dfrac{1}{x^2}\\right)^r = \\binom{6}{r} 2^{6-r}(-1)^r x^{6-r} \\cdot x^{-2r} \\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r} 2^{6-r}(-1)^r x^{6-3r}'
                },
                {
                    stepNumber: 2,
                    description: 'Find the required term.',
                    explanation: 'For independence from \\(x\\): \\(6 - 3r = 0 \\Rightarrow r = 2\\).',
                    workingLatex: 'r = 2'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute and evaluate.',
                    explanation: 'Substitute: \\(\\binom{6}{2} \\times 2^4 \\times (-1)^2 = 15 \\times 16 \\times 1 = 240\\).',
                    workingLatex: 'T_3 = 240'
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
                    description: 'Write the general term using \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\) and set the power of \\(x\\) to zero.',
                    explanation: 'General term: \\( \\binom{6}{r}(x^2)^{6-r}\\left(\\dfrac{1}{x}\\right)^r = \\binom{6}{r} x^{12-2r} \\cdot x^{-r} = \\binom{6}{r} x^{12-3r} \\).',
                    workingLatex: 'T_{r+1} = \\binom{6}{r} x^{12-3r}'
                },
                {
                    stepNumber: 2,
                    description: 'Set the power of \\(x\\) to zero.',
                    explanation: 'Set \\(12 - 3r = 0 \\Rightarrow r = 4\\).',
                    workingLatex: 'r = 4'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute and evaluate.',
                    explanation: 'Substitute: \\(\\binom{6}{4} = \\binom{6}{2} = 15\\).',
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
                    description: 'Write the general term using \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\) and set the power of \\(x\\) to zero.',
                    explanation: 'General term: \\( \\binom{8}{r}(x)^{8-r}\\left(-\\dfrac{3}{x}\\right)^r = \\binom{8}{r}(-3)^r x^{8-2r} \\).',
                    workingLatex: 'T_{r+1} = \\binom{8}{r}(-3)^r x^{8-2r}'
                },
                {
                    stepNumber: 2,
                    description: 'Set the power of \\(x\\) to zero.',
                    explanation: 'Set \\(8 - 2r = 0 \\Rightarrow r = 4\\).',
                    workingLatex: 'r = 4'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute and evaluate.',
                    explanation: 'Substitute: \\(\\binom{8}{4} \\times (-3)^4 = 70 \\times 81 = 5670\\).',
                    workingLatex: 'T_5 = 5670'
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
                    description: 'Write the general term using \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\) and set the power of \\(x\\) to zero.',
                    explanation: 'General term: \\( \\binom{9}{r}(3x)^{9-r}\\left(\\dfrac{1}{x^2}\\right)^r = \\binom{9}{r} 3^{9-r} x^{9-r} x^{-2r} = \\binom{9}{r} 3^{9-r} x^{9-3r} \\).',
                    workingLatex: 'T_{r+1} = \\binom{9}{r} 3^{9-r} x^{9-3r}'
                },
                {
                    stepNumber: 2,
                    description: 'Set the power of \\(x\\) to zero.',
                    explanation: 'Set \\(9 - 3r = 0 \\Rightarrow r = 3\\).',
                    workingLatex: 'r = 3'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute and evaluate.',
                    explanation: 'Substitute: \\(\\binom{9}{3} \\times 3^6 = 84 \\times 729 = 61236\\).',
                    workingLatex: 'T_4 = 61236'
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Write the first few terms.',
                    explanation: '(a) The first three terms are:',
                    workingLatex: '(1+x)^{10} \\approx 1 + 10x + \\binom{10}{2}x^2 = 1 + 10x + 45x^2'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: '(b) Substitute \\(x = 0.01\\):',
                    workingLatex: '1 + 10(0.01) + 45(0.01)^2 = 1 + 0.1 + 45 \\times 0.0001 = 1 + 0.1 + 0.0045 = 1.1045'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: '(c) Percentage error:',
                    workingLatex: '\\text{\\% error} = \\frac{|1.1045 - 1.10462|}{1.10462} \\times 100 = \\frac{0.00012}{1.10462} \\times 100 \\approx 0.011\\%'
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\).',
                    explanation: '(a) Write out the first four terms with \\(a=2\\), \\(b=-x\\):',
                    workingLatex: '(2-x)^5 = \\binom{5}{0}2^5 + \\binom{5}{1}2^4(-x) + \\binom{5}{2}2^3(-x)^2 + \\binom{5}{3}2^2(-x)^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Evaluate each term.',
                    explanation: 'Compute each term:',
                    workingLatex: '= 32 - 80x + 80x^2 - 40x^3 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: '(b) Substitute \\(x = 0.1\\):',
                    workingLatex: '1.9^5 \\approx 32 - 80(0.1) + 80(0.01) - 40(0.001) = 32 - 8 + 0.8 - 0.04 = 24.76'
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Write the first few terms.',
                    explanation: '(a) The general term is \\(\\binom{7}{r}(-3x)^r\\). Write the first four terms:',
                    workingLatex: '(1-3x)^7 \\approx 1 - 21x + 189x^2 - 945x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: '(b) We need \\(0.97^7\\). Set \\(1 - 3x = 0.97 \\Rightarrow x = 0.01\\).',
                    workingLatex: '0.97^7 \\approx 1 - 21(0.01) + 189(0.0001) - 945(0.000001)'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: 'Compute:',
                    workingLatex: '= 1 - 0.21 + 0.0189 - 0.000945 = 0.8080 \\text{ (to 4 d.p.)}'
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\).',
                    explanation: '(a) Use \\(a=1\\), \\(b=2x\\), \\(n=5\\):',
                    workingLatex: '(1+2x)^5 = 1 + 10x + 40x^2 + 80x^3 + 80x^4 + 32x^5'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: '(b) Substitute \\(x = 0.01\\) (using all terms up to \\(x^3\\) for the estimate):',
                    workingLatex: '\\approx 1 + 10(0.01) + 40(0.0001) + 80(0.000001) = 1 + 0.1 + 0.004 + 0.00008 = 1.10408'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: '(c) Percentage error:',
                    workingLatex: '\\text{\\% error} = \\frac{|1.10408 - 1.10408|}{1.10408} \\times 100 \\approx 0\\%'
                },
                {
                    stepNumber: 4,
                    description: 'Final simplification.',
                    explanation: 'In this case the approximation is very close (essentially exact to 5 s.f.) because the higher power terms are negligible.',
                    workingLatex: '\\text{Percentage error} < 0.001\\%'
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
                    description: 'Use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).',
                    explanation: '(a) The first four terms are:',
                    workingLatex: '(1+x)^{12} \\approx 1 + 12x + 66x^2 + 220x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: '(b) Multiply \\((1 + x + x^2)\\) by \\((1 + 12x + 66x^2 + 220x^3 + \\ldots)\\). Collect terms up to \\(x^3\\):',
                    workingLatex: '1 \\times (1 + 12x + 66x^2 + 220x^3) + x \\times (1 + 12x + 66x^2) + x^2 \\times (1 + 12x)'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: 'Combine like terms:',
                    workingLatex: '= (1) + (12 + 1)x + (66 + 12 + 1)x^2 + (220 + 66 + 12)x^3 + \\ldots'
                },
                {
                    stepNumber: 4,
                    description: 'Final simplification.',
                    explanation: 'Simplify:',
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Write the first few terms.',
                    explanation: '(a) General term: \\(\\binom{6}{r} 2^{6-r} x^r\\). First four terms (\\(r = 0, 1, 2, 3\\)):',
                    workingLatex: '(2+x)^6 = 64 + 6 \\times 32 x + 15 \\times 16 x^2 + 20 \\times 8 x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    explanation: 'Simplify:',
                    workingLatex: '= 64 + 192x + 240x^2 + 160x^3 + \\ldots'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: '(b) This confirms the four-term approximation for small \\(x\\). ✓',
                    workingLatex: ''
                },
                {
                    stepNumber: 4,
                    description: 'Final simplification.',
                    explanation: '(c) Substitute \\(x = 0.1\\):',
                    workingLatex: '2.1^6 \\approx 64 + 192(0.1) + 240(0.01) + 160(0.001) = 64 + 19.2 + 2.4 + 0.16 = 85.76'
                },
                {
                    stepNumber: 5,
                    description: 'Final answer.',
                    explanation: 'Round to 3 significant figures:',
                    workingLatex: '2.1^6 \\approx 85.8'
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
                    description: 'Apply the binomial theorem: \\((a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r\\). Write the first few terms.',
                    explanation: '(a) Use \\(b = -x\\), \\(n = 8\\):',
                    workingLatex: '(1-x)^8 = 1 - 8x + 28x^2 - 56x^3 + \\ldots'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify each term.',
                    explanation: '(b) Multiply \\((3 + x)\\) by \\((1 - 8x + 28x^2 - 56x^3 + \\ldots)\\):',
                    workingLatex: '3(1 - 8x + 28x^2 - 56x^3) + x(1 - 8x + 28x^2)'
                },
                {
                    stepNumber: 3,
                    description: 'Collect and simplify.',
                    explanation: 'Collect terms:',
                    workingLatex: '= 3 + (-24 + 1)x + (84 - 8)x^2 + (-168 + 28)x^3 + \\ldots'
                },
                {
                    stepNumber: 4,
                    description: 'Final simplification.',
                    explanation: 'Simplify:',
                    workingLatex: '= 3 - 23x + 76x^2 - 140x^3 + \\ldots'
                },
                {
                    stepNumber: 5,
                    description: 'Final answer.',
                    explanation: '(c) The coefficient of \\(x^2\\) is \\(76\\).',
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
                { stepNumber: 1, description: 'Apply the binomial theorem', explanation: 'Use \\( (1+2x)^4 \\) with \\( b = 2x \\), \\( n = 4 \\).', workingLatex: '\\binom{4}{0} + \\binom{4}{1}(2x) + \\binom{4}{2}(2x)^2 + \\binom{4}{3}(2x)^3' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate each term.', workingLatex: '1 + 8x + 24x^2 + 32x^3' }
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
                { stepNumber: 1, description: 'Apply the binomial theorem', explanation: 'Use \\( (1 + (-3x))^5 \\).', workingLatex: '\\binom{5}{0} + \\binom{5}{1}(-3x) + \\binom{5}{2}(-3x)^2 + \\binom{5}{3}(-3x)^3' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate coefficients and signs.', workingLatex: '1 - 15x + 90x^2 - 270x^3' }
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
                { stepNumber: 1, description: 'Apply the binomial theorem', explanation: 'With \\( a=2, b=x, n=6 \\).', workingLatex: '\\binom{6}{0}2^6 + \\binom{6}{1}2^5 x + \\binom{6}{2}2^4 x^2 + \\binom{6}{3}2^3 x^3' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate each term.', workingLatex: '64 + 192x + 240x^2 + 160x^3' }
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
                { stepNumber: 1, description: 'General term', explanation: 'The term in \\( x^3 \\) is \\( \\binom{5}{3}(4x)^3 \\).', workingLatex: '\\binom{5}{3} \\times 4^3 \\times x^3 = 10 \\times 64 \\times x^3' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Multiply.', workingLatex: '640x^3' }
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
                { stepNumber: 1, description: 'General term for x^2', explanation: 'The \\( x^2 \\) term is \\( \\binom{6}{2}(3)^4(-x)^2 \\).', workingLatex: '\\binom{6}{2} \\times 81 \\times x^2 = 15 \\times 81 \\times x^2' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Multiply.', workingLatex: '1215x^2' }
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
                { stepNumber: 1, description: 'First 4 terms', explanation: 'Apply the binomial theorem with \\( n = 8 \\).', workingLatex: '\\binom{8}{0} + \\binom{8}{1}x + \\binom{8}{2}x^2 + \\binom{8}{3}x^3' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Compute coefficients.', workingLatex: '1 + 8x + 28x^2 + 56x^3' }
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
                { stepNumber: 1, description: 'Substitute b = -2x', explanation: 'Apply binomial theorem.', workingLatex: '\\binom{6}{0} + \\binom{6}{1}(-2x) + \\binom{6}{2}(-2x)^2 + \\binom{6}{3}(-2x)^3' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate each term.', workingLatex: '1 - 12x + 60x^2 - 160x^3' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( a=3, b=2x, n=5 \\).', workingLatex: '\\binom{5}{0}3^5 + \\binom{5}{1}3^4(2x) + \\binom{5}{2}3^3(2x)^2 + \\binom{5}{3}3^2(2x)^3' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Compute each term.', workingLatex: '243 + 810x + 1080x^2 + 720x^3' }
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
                { stepNumber: 1, description: 'Use the general term', explanation: 'Coefficient of \\( x^4 \\) is \\( \\binom{10}{4} \\).', workingLatex: '\\binom{10}{4} = \\frac{10!}{4! \\times 6!} = 210' }
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
                { stepNumber: 1, description: 'x^2 term', explanation: 'The term is \\( \\binom{4}{2}(-5x)^2 \\).', workingLatex: '\\binom{4}{2} \\times 25x^2 = 6 \\times 25 = 150x^2' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( a=x, b=-2, n=5 \\).', workingLatex: '\\sum_{r=0}^{5} \\binom{5}{r} x^{5-r}(-2)^r' },
                { stepNumber: 2, description: 'Expand all terms', explanation: 'Evaluate each term.', workingLatex: 'x^5 - 10x^4 + 40x^3 - 80x^2 + 80x - 32' }
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
                { stepNumber: 1, description: 'General term', explanation: 'The general term is \\( \\binom{6}{r} x^{6-r} \\left(\\frac{2}{x}\\right)^r = \\binom{6}{r} 2^r x^{6-2r} \\).', workingLatex: 'x^{6-2r} = x^0 \\implies r = 3' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Substitute \\( r = 3 \\).', workingLatex: '\\binom{6}{3} \\times 2^3 = 20 \\times 8 = 160' }
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
                { stepNumber: 1, description: 'x^2 coefficient', explanation: 'The coefficient is \\( \\binom{6}{2} k^2 = 15k^2 \\).', workingLatex: '15k^2 = 60' },
                { stepNumber: 2, description: 'Solve', explanation: 'Divide by 15 and take the positive root.', workingLatex: 'k^2 = 4 \\implies k = 2' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'First 3 terms with \\( n=10, b=3x \\).', workingLatex: '1 + \\binom{10}{1}(3x) + \\binom{10}{2}(3x)^2' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Compute coefficients.', workingLatex: '1 + 30x + 405x^2' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( a=2x, b=-1, n=4 \\).', workingLatex: '(2x)^4 + \\binom{4}{1}(2x)^3(-1) + \\binom{4}{2}(2x)^2(-1)^2 + \\binom{4}{3}(2x)(-1)^3 + (-1)^4' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate.', workingLatex: '16x^4 - 32x^3 + 24x^2 - 8x + 1' }
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
                { stepNumber: 1, description: 'x^3 term', explanation: 'The term is \\( \\binom{7}{3}(2)^4(-x)^3 \\).', workingLatex: '\\binom{7}{3} \\times 16 \\times (-x^3) = 35 \\times 16 \\times (-1) = -560' }
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
                { stepNumber: 1, description: 'First 5 terms', explanation: 'Apply binomial theorem.', workingLatex: '1 + 7x + 21x^2 + 35x^3 + 35x^4' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( b = -x, n = 12 \\).', workingLatex: '1 - 12x + 66x^2 - 220x^3' }
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
                { stepNumber: 1, description: 'x^3 coefficient', explanation: 'The coefficient is \\( \\binom{8}{3}a^3 = 56a^3 \\).', workingLatex: '56a^3 = 1512' },
                { stepNumber: 2, description: 'Solve', explanation: 'Divide and take cube root.', workingLatex: 'a^3 = 27 \\implies a = 3' }
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
                { stepNumber: 1, description: 'Evaluate', explanation: 'The coefficient is \\( \\binom{9}{5} \\).', workingLatex: '\\binom{9}{5} = \\frac{9!}{5! \\times 4!} = 126' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( a=5, b=-x, n=4 \\).', workingLatex: '5^4 + \\binom{4}{1}5^3(-x) + \\binom{4}{2}5^2(-x)^2 + \\binom{4}{3}5(-x)^3' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate.', workingLatex: '625 - 500x + 150x^2 - 20x^3' }
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
                { stepNumber: 1, description: 'First 3 terms', explanation: 'Set \\( x = 0.02, n = 10 \\).', workingLatex: '1 + 10(0.02) + 45(0.02)^2' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Calculate each term.', workingLatex: '1 + 0.2 + 0.018 = 1.218' }
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
                { stepNumber: 1, description: 'First 3 terms', explanation: 'Set \\( x = -0.02, n = 8 \\).', workingLatex: '1 + 8(-0.02) + 28(-0.02)^2' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Calculate.', workingLatex: '1 - 0.16 + 0.0112 = 0.8512' }
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
                { stepNumber: 1, description: 'x^2 term', explanation: 'The term is \\( \\binom{5}{2}(3)^3(2x)^2 \\).', workingLatex: '10 \\times 27 \\times 4x^2 = 1080x^2' }
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
                { stepNumber: 1, description: 'Full expansion', explanation: 'Apply binomial theorem with \\( n = 6 \\).', workingLatex: '1 + 6x + 15x^2 + 20x^3 + 15x^4 + 6x^5 + x^6' }
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
                { stepNumber: 1, description: 'x^2 term', explanation: 'The coefficient is \\( \\binom{5}{2} \\times 2^3 \\times k^2 = 10 \\times 8 \\times k^2 = 80k^2 \\).', workingLatex: '80k^2 = 80' },
                { stepNumber: 2, description: 'Solve', explanation: 'Divide.', workingLatex: 'k^2 = 1 \\implies k = 1' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( b = \\frac{x}{2}, n = 8 \\).', workingLatex: '1 + 8 \\times \\frac{x}{2} + 28 \\times \\frac{x^2}{4}' },
                { stepNumber: 2, description: 'Simplify', explanation: 'Evaluate.', workingLatex: '1 + 4x + 7x^2' }
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
                { stepNumber: 1, description: 'x^4 term', explanation: 'The term is \\( \\binom{8}{4}(-2x)^4 = 70 \\times 16x^4 \\).', workingLatex: '70 \\times 16 = 1120' }
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
                { stepNumber: 1, description: 'Expand', explanation: 'Set \\( x = 0.1 \\).', workingLatex: '1 + 5(0.1) + 10(0.01) + 10(0.001) + 5(0.0001) + 0.00001' },
                { stepNumber: 2, description: 'Sum', explanation: 'Add all terms.', workingLatex: '1 + 0.5 + 0.1 + 0.01 + 0.0005 + 0.00001 = 1.61051' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( a=3, b=-x, n=4 \\).', workingLatex: '81 - 108x + 54x^2 - 12x^3 + x^4' }
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
                { stepNumber: 1, description: 'x^3 term', explanation: 'The term is \\( \\binom{9}{3} \\left(\\frac{x}{3}\\right)^3 = 84 \\times \\frac{x^3}{27} \\).', workingLatex: '\\frac{84}{27} = \\frac{28}{9}' }
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
                { stepNumber: 1, description: 'Apply binomial theorem', explanation: 'With \\( a=4, b=-x, n=5 \\).', workingLatex: '4^5 - \\binom{5}{1}4^4 x + \\binom{5}{2}4^3 x^2 - \\binom{5}{3}4^2 x^3' },
                { stepNumber: 2, description: 'Evaluate', explanation: 'Compute.', workingLatex: '1024 - 1280x + 640x^2 - 160x^3' }
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
                { stepNumber: 1, description: 'Set up equations', explanation: 'Coefficient of \\( x \\): \\( np = 12 \\). Coefficient of \\( x^2 \\): \\( \\frac{n(n-1)}{2}p^2 = 54 \\).', workingLatex: 'np = 12, \\quad \\frac{n(n-1)}{2}p^2 = 54' },
                { stepNumber: 2, description: 'Solve', explanation: 'From first: \\( p = 12/n \\). Substitute into second.', workingLatex: '\\frac{n(n-1)}{2} \\times \\frac{144}{n^2} = 54 \\implies \\frac{72(n-1)}{n} = 54' },
                { stepNumber: 3, description: 'Find n and p', explanation: 'Solve for n.', workingLatex: '72n - 72 = 54n \\implies 18n = 72 \\implies n = 4,\; p = 3' }
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
                { stepNumber: 1, description: 'Expand both', explanation: 'Notice odd powers of 1 cancel, even powers double.', workingLatex: '(x+1)^5 = x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1' },
                { stepNumber: 2, description: 'Add', explanation: 'Only even-powered terms survive.', workingLatex: '2x^5 + 20x^3 + 10x' }
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
                { stepNumber: 1, description: 'Combine', explanation: 'Use the hint.', workingLatex: '(1+x)^9' },
                { stepNumber: 2, description: 'Find coefficient', explanation: 'Coefficient of \\( x^6 \\) is \\( \\binom{9}{6} \\).', workingLatex: '\\binom{9}{6} = 84' }
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
            { stepNumber: 1, description: 'Apply the binomial theorem: \\((1+ax)^{10} = \\sum_{r=0}^{10} \\binom{10}{r} (ax)^r\\).', explanation: 'The coefficient of \\(x\\) is \\(\\binom{10}{1}a = 10a\\). The coefficient of \\(x^2\\) is \\(\\binom{10}{2}a^2 = 45a^2\\).', workingLatex: '\\begin{aligned} \\text{Coeff of } x &= 10a \\\\ \\text{Coeff of } x^2 &= 45a^2 \\end{aligned}' },
            { stepNumber: 2, description: 'Set up and solve the equation.', explanation: 'The coefficient of \\(x^2\\) is twice the coefficient of \\(x\\).', workingLatex: '\\begin{aligned} 45a^2 &= 2(10a) \\\\ 45a^2 &= 20a \\\\ 45a^2 - 20a &= 0 \\\\ 5a(9a - 4) &= 0 \\\\ a &= \\frac{4}{9} \\end{aligned}' },
        ], finalAnswer: '\\(a = \\frac{4}{9}\\)', commonMistakes: ['\\(a = 0\\) is a trivial solution (all coefficients zero) so we discard it.'] }
    },
    {
        id: 'be-072', topicRef: 'BE', topicTitle: 'Binomial Expansion 72', difficulty: 'Challenge',
        questionText: 'Find the coefficient of \\( x^4 \\) in the expansion of \\( (1 + x)^5(1 - x)^5 \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Simplify the product first using the difference of two squares.', explanation: '\\((1+x)^5(1-x)^5 = [(1+x)(1-x)]^5 = (1-x^2)^5\\). This is much simpler than expanding each separately.', workingLatex: '(1+x)^5(1-x)^5 = (1-x^2)^5' },
            { stepNumber: 2, description: 'Apply the binomial theorem: \\((1+u)^n = \\sum \\binom{n}{r} u^r\\) with \\(u = -x^2\\).', explanation: 'We need the coefficient of \\(x^4\\), which corresponds to \\((-x^2)^2\\), i.e. \\(r = 2\\).', workingLatex: '\\begin{aligned} \\text{Coeff of } x^4 &= \\binom{5}{2}(-1)^2 \\\\ &= 10 \\end{aligned}' },
        ], finalAnswer: '\\(10\\)' }
    },
    {
        id: 'be-073', topicRef: 'BE', topicTitle: 'Binomial Expansion 73', difficulty: 'Challenge',
        questionText: 'The first three terms of \\( (1 + px)^n \\) are \\( 1 + 20x + 160x^2 \\). Find \\( p \\) and \\( n \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the binomial theorem: \\((1+px)^n = 1 + npx + \\frac{n(n-1)}{2}p^2x^2 + \\ldots\\)', explanation: 'Match coefficients of \\(x\\) and \\(x^2\\) to form simultaneous equations.', workingLatex: '\\begin{aligned} np &= 20 \\quad \\cdots (1) \\\\ \\frac{n(n-1)}{2}p^2 &= 160 \\quad \\cdots (2) \\end{aligned}' },
            { stepNumber: 2, description: 'Solve the simultaneous equations.', explanation: 'From (1): \\(p = \\frac{20}{n}\\). Substitute into (2).', workingLatex: '\\begin{aligned} \\frac{n(n-1)}{2} \\cdot \\frac{400}{n^2} &= 160 \\\\ \\frac{200(n-1)}{n} &= 160 \\\\ 200n - 200 &= 160n \\\\ 40n &= 200 \\\\ n &= 5,\\quad p = 4 \\end{aligned}' },
        ], finalAnswer: '\\(n = 5\\), \\(p = 4\\)' }
    },
    {
        id: 'be-074', topicRef: 'BE', topicTitle: 'Binomial Expansion 74', difficulty: 'Challenge',
        questionText: 'Find the term independent of \\( x \\) in \\( \\left(2x^2 + \\dfrac{3}{x}\\right)^6 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the general term using the binomial theorem: \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\).', explanation: 'Here \\(a = 2x^2\\), \\(b = \\frac{3}{x}\\), \\(n = 6\\). Combine powers of \\(x\\).', workingLatex: 'T_{r+1} = \\binom{6}{r}(2x^2)^{6-r}\\left(\\frac{3}{x}\\right)^r = \\binom{6}{r} 2^{6-r} \\cdot 3^r \\cdot x^{12-2r-r} = \\binom{6}{r} 2^{6-r} 3^r x^{12-3r}' },
            { stepNumber: 2, description: 'Set the power of \\(x\\) to zero.', explanation: '', workingLatex: '12 - 3r = 0 \\quad\\quad \\Rightarrow \\quad\\quad r = 4' },
            { stepNumber: 3, description: 'Substitute \\(r = 4\\).', explanation: '', workingLatex: '\\begin{aligned} T_5 &= \\binom{6}{4} \\cdot 2^2 \\cdot 3^4 \\\\ &= 15 \\times 4 \\times 81 \\\\ &= 4860 \\end{aligned}' },
        ], finalAnswer: '\\(4860\\)' }
    },
    {
        id: 'be-075', topicRef: 'BE', topicTitle: 'Binomial Expansion 75', difficulty: 'Challenge',
        questionText: 'Given that \\( (1 + kx)^8 = 1 + 12x + ax^2 + bx^3 + \\ldots \\), find the values of \\( k \\), \\( a \\) and \\( b \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the binomial theorem: \\((1+kx)^8 = 1 + 8kx + \\binom{8}{2}k^2x^2 + \\binom{8}{3}k^3x^3 + \\ldots\\)', explanation: 'Match the coefficient of \\(x\\) to find \\(k\\).', workingLatex: '8k = 12 \\quad\\quad \\Rightarrow \\quad\\quad k = \\frac{3}{2}' },
            { stepNumber: 2, description: 'Find \\(a\\) and \\(b\\).', explanation: 'Substitute \\(k = \\frac{3}{2}\\) into the coefficients of \\(x^2\\) and \\(x^3\\).', workingLatex: '\\begin{aligned} a &= \\binom{8}{2}\\left(\\frac{3}{2}\\right)^2 = 28 \\times \\frac{9}{4} = 63 \\\\ b &= \\binom{8}{3}\\left(\\frac{3}{2}\\right)^3 = 56 \\times \\frac{27}{8} = 189 \\end{aligned}' },
        ], finalAnswer: '\\(k = \\frac{3}{2}\\), \\(a = 63\\), \\(b = 189\\)' }
    },
    {
        id: 'be-076', topicRef: 'BE', topicTitle: 'Binomial Expansion 76', difficulty: 'Challenge',
        questionText: 'Show that \\( (1 + \\sqrt{2})^4 + (1 - \\sqrt{2})^4 = 34 \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand both using the binomial theorem: \\((a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4\\).', explanation: 'When we add the two expansions, all odd-powered terms in \\(\\sqrt{2}\\) cancel.', workingLatex: '\\begin{aligned} (1+\\sqrt{2})^4 &= 1 + 4\\sqrt{2} + 6(2) + 4(2\\sqrt{2}) + 4 \\\\ &= 1 + 4\\sqrt{2} + 12 + 8\\sqrt{2} + 4 = 17 + 12\\sqrt{2} \\\\ (1-\\sqrt{2})^4 &= 1 - 4\\sqrt{2} + 12 - 8\\sqrt{2} + 4 = 17 - 12\\sqrt{2} \\end{aligned}' },
            { stepNumber: 2, description: 'Add the two expansions.', explanation: 'The surd terms cancel.', workingLatex: '(17 + 12\\sqrt{2}) + (17 - 12\\sqrt{2}) = 34 \\quad \\checkmark' },
        ], finalAnswer: '\\(34\\) (shown)' }
    },
    {
        id: 'be-077', topicRef: 'BE', topicTitle: 'Binomial Expansion 77', difficulty: 'Challenge',
        questionText: 'The coefficient of \\( x^3 \\) in \\( (2 + x)^5(1 - x)^3 \\) is to be found. Expand each bracket up to \\( x^3 \\) and multiply.',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand \\((2+x)^5\\) up to \\(x^3\\) using \\((a+b)^n = \\sum \\binom{n}{r} a^{n-r} b^r\\).', explanation: '', workingLatex: '(2+x)^5 = 32 + 80x + 80x^2 + 40x^3 + \\ldots' },
            { stepNumber: 2, description: 'Expand \\((1-x)^3\\) fully.', explanation: '', workingLatex: '(1-x)^3 = 1 - 3x + 3x^2 - x^3' },
            { stepNumber: 3, description: 'Collect all products that give \\(x^3\\).', explanation: 'The \\(x^3\\) terms come from: \\(32 \\times (-x^3)\\), \\(80x \\times 3x^2\\), \\(80x^2 \\times (-3x)\\), \\(40x^3 \\times 1\\).', workingLatex: '\\begin{aligned} &32(-1) + 80(3) + 80(-3) + 40(1) \\\\ &= -32 + 240 - 240 + 40 = 8 \\end{aligned}' },
        ], finalAnswer: '\\(8\\)' }
    },
    {
        id: 'be-078', topicRef: 'BE', topicTitle: 'Binomial Expansion 78', difficulty: 'Challenge',
        questionText: 'Find the value of \\( \\sum_{r=0}^{6} \\binom{6}{r} \\).',
        marks: 3, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Use the binomial theorem: \\((1+x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r\\).', explanation: 'Setting \\(x = 1\\) gives \\(\\sum_{r=0}^{n} \\binom{n}{r} = 2^n\\). This is because each element is either included or excluded from a subset.', workingLatex: '\\sum_{r=0}^{6} \\binom{6}{r} = (1+1)^6 = 2^6 = 64' },
        ], finalAnswer: '\\(64\\)' }
    },
    {
        id: 'be-079', topicRef: 'BE', topicTitle: 'Binomial Expansion 79', difficulty: 'Challenge',
        questionText: 'In the expansion of \\( (1 + x)^n \\), the coefficients of \\( x^4 \\) and \\( x^5 \\) are equal. Find \\( n \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the binomial theorem. The coefficients are \\(\\binom{n}{4}\\) and \\(\\binom{n}{5}\\).', explanation: 'Set them equal and use the formula \\(\\binom{n}{r} = \\frac{n!}{r!(n-r)!}\\).', workingLatex: '\\begin{aligned} \\binom{n}{4} &= \\binom{n}{5} \\\\ \\frac{n!}{4!(n-4)!} &= \\frac{n!}{5!(n-5)!} \\\\ \\frac{1}{(n-4)!} \\cdot \\frac{5!}{4!} &= \\frac{1}{(n-5)!} \\\\ 5 &= n - 4 \\\\ n &= 9 \\end{aligned}' },
        ], finalAnswer: '\\(n = 9\\)' }
    },
    {
        id: 'be-080', topicRef: 'BE', topicTitle: 'Binomial Expansion 80', difficulty: 'Challenge',
        questionText: 'Find the coefficient of \\( x^2 \\) in \\( (1 + 2x)^5 - (1 - 2x)^5 \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the binomial theorem to each expansion up to \\(x^2\\).', explanation: 'When subtracting \\((1+2x)^5 - (1-2x)^5\\), the even-powered terms cancel and odd-powered terms double.', workingLatex: '\\begin{aligned} (1+2x)^5 &= 1 + 10x + 40x^2 + \\ldots \\\\ (1-2x)^5 &= 1 - 10x + 40x^2 - \\ldots \\\\ \\text{Difference:} \\quad &20x + 0x^2 + \\ldots \\end{aligned}' },
            { stepNumber: 2, description: 'The coefficient of \\(x^2\\) is zero.', explanation: 'The \\(x^2\\) terms are identical in both expansions (both \\(+40x^2\\)), so they cancel when subtracted.', workingLatex: '\\text{Coefficient of } x^2 = 40 - 40 = 0' },
        ], finalAnswer: '\\(0\\)' }
    },
    {
        id: 'be-081', topicRef: 'BE', topicTitle: 'Binomial Expansion 81', difficulty: 'Challenge',
        questionText: 'The constant term in the expansion of \\( \\left(x^2 - \\dfrac{k}{x}\\right)^9 \\) is \\( 672 \\). Find the possible values of \\( k \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write the general term using the binomial theorem.', explanation: 'Here \\(a = x^2\\), \\(b = -\\frac{k}{x}\\), \\(n = 9\\).', workingLatex: 'T_{r+1} = \\binom{9}{r}(x^2)^{9-r}\\left(-\\frac{k}{x}\\right)^r = \\binom{9}{r}(-k)^r x^{18-2r-r} = \\binom{9}{r}(-k)^r x^{18-3r}' },
            { stepNumber: 2, description: 'Set the power of \\(x\\) to zero for the constant term.', explanation: '', workingLatex: '18 - 3r = 0 \\quad\\quad \\Rightarrow \\quad\\quad r = 6' },
            { stepNumber: 3, description: 'Substitute \\(r = 6\\) and set equal to 672.', explanation: '', workingLatex: '\\begin{aligned} \\binom{9}{6}(-k)^6 &= 672 \\\\ 84k^6 &= 672 \\\\ k^6 &= 8 \\\\ k &= \\sqrt[6]{8} = \\sqrt{2} \\end{aligned}' },
        ], finalAnswer: '\\(k = \\sqrt{2}\\) or \\(k = -\\sqrt{2}\\)', commonMistakes: ['Since \\((-k)^6 = k^6\\), both positive and negative values of \\(k\\) give the same constant term.'] }
    },
    {
        id: 'be-082', topicRef: 'BE', topicTitle: 'Binomial Expansion 82', difficulty: 'Challenge',
        questionText: 'Use the binomial expansion to show that \\( (1+x)^n + (1-x)^n = 2\\left[1 + \\binom{n}{2}x^2 + \\binom{n}{4}x^4 + \\ldots\\right] \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Expand both using the binomial theorem: \\((1+x)^n = \\sum_{r=0}^{n} \\binom{n}{r} x^r\\).', explanation: 'In \\((1-x)^n\\), the sign of each term alternates: \\(\\binom{n}{r}(-x)^r = (-1)^r \\binom{n}{r} x^r\\).', workingLatex: '\\begin{aligned} (1+x)^n &= \\binom{n}{0} + \\binom{n}{1}x + \\binom{n}{2}x^2 + \\binom{n}{3}x^3 + \\ldots \\\\ (1-x)^n &= \\binom{n}{0} - \\binom{n}{1}x + \\binom{n}{2}x^2 - \\binom{n}{3}x^3 + \\ldots \\end{aligned}' },
            { stepNumber: 2, description: 'Add the two expansions.', explanation: 'The odd-powered terms have opposite signs and cancel. The even-powered terms are identical and double.', workingLatex: '(1+x)^n + (1-x)^n = 2\\left[1 + \\binom{n}{2}x^2 + \\binom{n}{4}x^4 + \\ldots\\right] \\quad \\checkmark' },
        ], finalAnswer: 'Shown' }
    },
    {
        id: 'be-083', topicRef: 'BE', topicTitle: 'Binomial Expansion 83', difficulty: 'Challenge',
        questionText: 'Find the coefficient of \\( x^6 \\) in \\( (1 + x + x^2)^5 \\).',
        marks: 6, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Write \\((1 + x + x^2)^5 = [(1+x) + x^2]^5\\) and apply the binomial theorem.', explanation: 'Let \\(a = 1+x\\), \\(b = x^2\\). Then \\((a+b)^5 = \\sum_{r=0}^{5} \\binom{5}{r} (1+x)^{5-r} (x^2)^r\\).', workingLatex: '= \\sum_{r=0}^{5} \\binom{5}{r} (1+x)^{5-r} x^{2r}' },
            { stepNumber: 2, description: 'For \\(x^6\\), we need \\(2r + k = 6\\) where \\(k\\) is the power from \\((1+x)^{5-r}\\).', explanation: 'Check each valid \\(r\\):', workingLatex: '\\begin{aligned} r=0:& \\quad k=6,\\; \\text{but } (1+x)^5 \\text{ max power is 5. Skip.} \\\\ r=1:& \\quad k=4,\\; \\binom{5}{1}\\binom{4}{4} = 5 \\\\ r=2:& \\quad k=2,\\; \\binom{5}{2}\\binom{3}{2} = 10 \\times 3 = 30 \\\\ r=3:& \\quad k=0,\\; \\binom{5}{3}\\binom{2}{0} = 10 \\end{aligned}' },
            { stepNumber: 3, description: 'Sum the contributions.', explanation: '', workingLatex: '5 + 30 + 10 = 45' },
        ], finalAnswer: '\\(45\\)' }
    },
    {
        id: 'be-084', topicRef: 'BE', topicTitle: 'Binomial Expansion 84', difficulty: 'Challenge',
        questionText: 'The ratio of the coefficient of \\( x^3 \\) to the coefficient of \\( x^4 \\) in \\( (1 + 2x)^n \\) is \\( 2:3 \\). Find \\( n \\).',
        marks: 5, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Apply the binomial theorem: the general term is \\(\\binom{n}{r}(2x)^r\\).', explanation: 'The coefficients of \\(x^3\\) and \\(x^4\\) are \\(\\binom{n}{3} \\cdot 8\\) and \\(\\binom{n}{4} \\cdot 16\\).', workingLatex: '\\begin{aligned} \\text{Coeff of } x^3 &= 8\\binom{n}{3} \\\\ \\text{Coeff of } x^4 &= 16\\binom{n}{4} \\end{aligned}' },
            { stepNumber: 2, description: 'Set up the ratio and solve.', explanation: 'Use \\(\\binom{n}{4} = \\frac{n-3}{4} \\binom{n}{3}\\).', workingLatex: '\\begin{aligned} \\frac{8\\binom{n}{3}}{16\\binom{n}{4}} &= \\frac{2}{3} \\\\ \\frac{8}{16} \\cdot \\frac{4}{n-3} &= \\frac{2}{3} \\\\ \\frac{2}{n-3} &= \\frac{2}{3} \\\\ n - 3 &= 3 \\\\ n &= 6 \\end{aligned}' },
        ], finalAnswer: '\\(n = 6\\)' }
    },
    {
        id: 'be-085', topicRef: 'BE', topicTitle: 'Binomial Expansion 85', difficulty: 'Challenge',
        questionText: 'Use the expansion of \\( (1 + x)^{10} \\) with a suitable value of \\( x \\) to find \\( \\sum_{r=0}^{10} (-1)^r \\binom{10}{r} 3^r \\).',
        marks: 4, examStyle: true, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Recognise the sum as a binomial expansion.', explanation: 'By the binomial theorem, \\((1+x)^{10} = \\sum_{r=0}^{10} \\binom{10}{r} x^r\\). The given sum has \\((-1)^r \\cdot 3^r = (-3)^r\\), so set \\(x = -3\\).', workingLatex: '\\begin{aligned} \\sum_{r=0}^{10} (-1)^r \\binom{10}{r} 3^r &= \\sum_{r=0}^{10} \\binom{10}{r} (-3)^r \\\\ &= (1 + (-3))^{10} \\\\ &= (-2)^{10} = 1024 \\end{aligned}' },
        ], finalAnswer: '\\(1024\\)' }
    },
];
