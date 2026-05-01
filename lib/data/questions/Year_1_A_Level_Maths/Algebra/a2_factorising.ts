import { Question } from "@/lib/types";

/**
 * Topic: Linear Simultaneous Equations
 * Ref:   a4
 *
 * Add your questions to the array below.
 * ID convention: "a4-001", "a4-002", etc.
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
    id: "a2-001",
    topicRef: "a2",
    topicTitle: 'Factorising 1',

    difficulty: "Foundation",
    questionText:
      "Factorise: \\( 14m +21n \\) ",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The highest common factor of 14 and 21 is 7.",
          workingLatex: "7(2m+3n)",
          explanation: "Look for highest common factors (HCF).",
        },
      ],
      finalAnswer: "\\(7(2m+3n)\\)",
    },
  },

  {
    id: "a2-002",
    topicRef: "a2",
    topicTitle: 'Factorising 2',

    difficulty: "Foundation",
    questionText:
      "Factorise: \\( 5x^3y^2 - 15x^2y^3 \\) ",
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "The highest common factor (HCF) of 5 and 15 is 5. The highest common power of \\( x\\) is \\( x^2 \\), and for \\( y\\) it is \\(y^2\\).",
          workingLatex: "5x^2y^2(x-3y)",
          explanation: "Identify the highest common factors in the expression.",
        },
      ],
      finalAnswer: "\\(5x^2y^2(x-3y)\\)",
    },
  },

  {
    id: 'a2-003',
    topicRef: 'a2',
    topicTitle: 'Factorising 3',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 4a^2bc + 12ab^2c - 8abc^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The HCF of the numbers (4, 12, 8) is 4. The common variables are \\( a \\), \\( b \\), and \\( c \\).',
          workingLatex: '4abc',
          explanation: 'Identify the highest common numerical and algebraic factors in the expression.',
        },
        {
          stepNumber: 2,
          description: 'Factor out the HCF from each term in the expression.',
          workingLatex: '4abc(a + 3b - 2c)',
          explanation: 'Divide each term by the common factor to find the contents of the bracket.',
        }
      ],
      finalAnswer: '\\(4abc(a + 3b - 2c)\\)',
    }
  },
  {
    id: 'a2-004',
    topicRef: 'a2',
    topicTitle: 'Factorising 4',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( p^2 - 16q^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that the expression is a difference of two squares, where \\( 16q^2 \\) is \\( (4q)^2 \\).',
          workingLatex: 'p^2 - (4q)^2',
          explanation: 'Identify the squared terms.',
        }
      ],
      finalAnswer: '\\((p - 4q)(p + 4q)\\)',
    }
  },
  {
    id: 'a2-005',
    topicRef: 'a2',
    topicTitle: 'Factorising 5',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 50x^2 - 18y^2 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the common factor of 2 from both terms.',
          workingLatex: '2(25x^2 - 9y^2)',
          explanation: 'Find the numerical highest common factor.',
        },
        {
          stepNumber: 2,
          description: 'Apply the difference of two squares to the expression inside the bracket.',
          workingLatex: '2(5x - 3y)(5x + 3y)',
          explanation: 'Factorise the remaining quadratic expression.',
        }
      ],
      finalAnswer: '\\(2(5x - 3y)(5x + 3y)\\)',
    }
  },
  {
    id: 'a2-006',
    topicRef: 'a2',
    topicTitle: 'Factorising 6',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( m^2 - 7 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Treat 7 as the square of a surd, \\( (\\sqrt{7})^2 \\), to apply the difference of two squares.',
          workingLatex: 'm^2 - (\\sqrt{7})^2',
          explanation: 'Set up the difference of two squares using a square root.',
        }
      ],
      finalAnswer: '\\((m - \\sqrt{7})(m + \\sqrt{7})\\)',
    }
  },
  {
    id: 'a2-007',
    topicRef: 'a2',
    topicTitle: 'Factorising 7',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( (x+y)^2 + 5(x+y) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Notice that the binomial \\( (x+y) \\) is a common factor in both parts of the expression.',
          workingLatex: '(x+y)[(x+y) + 5]',
          explanation: 'Extract the common bracket.',
        }
      ],
      finalAnswer: '\\((x+y)(x+y+5)\\)',
    }
  },
  {
    id: 'a2-008',
    topicRef: 'a2',
    topicTitle: 'Factorising 8',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( a^2(b-3c) + 4d(3c-b) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The brackets \\( (b-3c) \\) and \\( (3c-b) \\) are opposites. Factor out -1 from the second term to make them match.',
          workingLatex: 'a^2(b-3c) - 4d(b-3c)',
          explanation: 'Reverse the sign to reveal a common bracket.',
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly found common bracket.',
          workingLatex: '(b-3c)(a^2-4d)',
          explanation: 'Extract the common binomial factor.',
        }
      ],
      finalAnswer: '\\((b-3c)(a^2-4d)\\)',
    }
  },
  {
    id: 'a2-009',
    topicRef: 'a2',
    topicTitle: 'Factorising 9',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( 3(m-n)^2 - 6m(m-n) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify and factor out the common factor of \\( 3(m-n) \\).',
          workingLatex: '3(m-n)[(m-n) - 2m]',
          explanation: 'Extract the shared numerical and binomial factors.',
        },
        {
          stepNumber: 2,
          description: 'Simplify the expression inside the square brackets: \\( m - n - 2m = -m - n \\).',
          workingLatex: '3(m-n)(-m-n)',
          explanation: 'Collect like terms inside the remaining factor.',
        }
      ],
      finalAnswer: '\\(-3(m-n)(m+n)\\)',
    }
  },

  {
    id: 'a2-010',
    topicRef: 'a2',
    topicTitle: 'Factorising 10',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( (p+2q)^2 + p + 2q \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the last two terms together to reveal a hidden common binomial factor.',
          workingLatex: '(p+2q)^2 + 1(p+2q)',
          explanation: 'Recognise that \\( p + 2q \\) is identical to the expression inside the squared bracket.',
        },
        {
          stepNumber: 2,
          description: 'Factor out the common bracket \\( (p+2q) \\).',
          workingLatex: '(p+2q)[(p+2q) + 1]',
          explanation: 'Extract the shared factor from both parts of the expression.',
        }
      ],
      finalAnswer: '\\((p+2q)(p+2q+1)\\)',
    }
  },
  {
    id: 'a2-011',
    topicRef: 'a2',
    topicTitle: 'Factorising 11',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( (x+3)^2 - 25 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise this is a difference of two squares, where \\( 25 \\) is \\( 5^2 \\) and \\( A = (x+3) \\).',
          workingLatex: '[(x+3) - 5][(x+3) + 5]',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\).',
        },
        {
          stepNumber: 2,
          description: 'Simplify the expressions inside each of the new brackets.',
          workingLatex: '(x - 2)(x + 8)',
          explanation: 'Collect the number terms together.',
        }
      ],
      finalAnswer: '\\((x - 2)(x + 8)\\)',
    }
  },
  {
    id: 'a2-012',
    topicRef: 'a2',
    topicTitle: 'Factorising 12',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( ac + ad + bc + bd \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Split the expression in half and factorise the first two terms and the last two terms separately.',
          workingLatex: 'a(c+d) + b(c+d)',
          explanation: 'Extract the common factor \\( a \\) from the first pair, and \\( b \\) from the second pair.',
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly formed common bracket \\( (c+d) \\).',
          workingLatex: '(c+d)(a+b)',
          explanation: 'Combine the factored groups.',
        }
      ],
      finalAnswer: '\\((c+d)(a+b)\\)',
    }
  },
  {
    id: 'a2-013',
    topicRef: 'a2',
    topicTitle: 'Factorising 13',
    difficulty: 'Challenge',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( (l+w+h)^2 - l(l+w+h) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify \\( (l+w+h) \\) as a common factor in both terms and extract it.',
          workingLatex: '(l+w+h)[(l+w+h) - l]',
          explanation: 'Pull the shared bracket out to the front.',
        },
        {
          stepNumber: 2,
          description: 'Simplify the expression inside the square brackets: \\( l + w + h - l = w + h \\).',
          workingLatex: '(l+w+h)(w+h)',
          explanation: 'Cancel out the \\( l \\) and \\( -l \\).',
        }
      ],
      finalAnswer: '\\((l+w+h)(w+h)\\)',
    }
  },
  {
    id: 'a2-014',
    topicRef: 'a2',
    topicTitle: 'Factorising 14',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( -4x^2y - 8xy^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common factor, including the negative sign: \\( -4xy \\).',
          workingLatex: '-4xy',
          explanation: 'Both terms share a factor of -4, x, and y.',
        },
        {
          stepNumber: 2,
          description: 'Divide both original terms by \\( -4xy \\) to find the contents of the bracket.',
          workingLatex: '-4xy(x + 2y)',
          explanation: 'Ensure the signs inside the bracket become positive because a negative was factored out.',
        }
      ],
      finalAnswer: '\\(-4xy(x + 2y)\\)',
    }
  },
  {
    id: 'a2-015',
    topicRef: 'a2',
    topicTitle: 'Factorising 15',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 16a^4 - b^4 \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Treat this as a difference of two squares, where the terms are \\( (4a^2)^2 \\) and \\( (b^2)^2 \\).',
          workingLatex: '(4a^2 - b^2)(4a^2 + b^2)',
          explanation: 'Apply the standard difference of two squares rule to the power of 4 terms.',
        },
        {
          stepNumber: 2,
          description: 'Recognise that the first bracket, \\( (4a^2 - b^2) \\), is another difference of two squares.',
          workingLatex: '(2a - b)(2a + b)(4a^2 + b^2)',
          explanation: 'Factorise the resulting quadratic, leaving the sum of squares \\( (4a^2 + b^2) \\) as it cannot be factorised further.',
        }
      ],
      finalAnswer: '\\((2a - b)(2a + b)(4a^2 + b^2)\\)',
    }
  },
  {
    id: 'a2-016',
    topicRef: 'a2',
    topicTitle: 'Factorising 16',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( x^2(1-y)^2 + x(2-2y) \\)',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise the second term, \\( x(2-2y) \\), by extracting a 2 to reveal a common bracket.',
          workingLatex: 'x^2(1-y)^2 + 2x(1-y)',
          explanation: 'Make the brackets match across both terms.',
        },
        {
          stepNumber: 2,
          description: 'Identify and factor out the common factor of \\( x(1-y) \\) from the entire expression.',
          workingLatex: 'x(1-y)[x(1-y) + 2]',
          explanation: 'Extract the shared algebraic and binomial components.',
        },
        {
          stepNumber: 3,
          description: 'Expand the inner bracket slightly to neaten the final expression (optional but good practice).',
          workingLatex: 'x(1-y)(x - xy + 2)',
          explanation: 'Distribute the \\( x \\) inside the square brackets.',
        }
      ],
      finalAnswer: '\\(x(1-y)(x - xy + 2)\\)',
    }
  },

  {
    id: 'a2-017',
    topicRef: 'a2',
    topicTitle: 'Factorising 17',
    difficulty: 'Foundation',
    questionText: 'Factorise: \\( 15x + 20y \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the highest common factor (HCF) of the numbers 15 and 20, which is 5.',
          workingLatex: '5(3x + 4y)',
          explanation: 'Divide both terms by 5 and place the remainder inside the bracket.',
        }
      ],
      finalAnswer: '\\(5(3x + 4y)\\)',
    }
  },
  {
    id: 'a2-018',
    topicRef: 'a2',
    topicTitle: 'Factorising 18',
    difficulty: 'Standard',
    questionText: 'Factorise fully: \\( 6a^2b - 9ab^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the HCF of 6 and 9 (which is 3) and the common variables (which are \\( a \\) and \\( b \\)).',
          workingLatex: '3ab',
          explanation: 'Find the highest algebraic and numerical factors shared by both terms.',
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( 3ab \\) from the original expression.',
          workingLatex: '3ab(2a - 3b)',
          explanation: 'Divide each term by \\( 3ab \\) to find the expression inside the bracket.',
        }
      ],
      finalAnswer: '\\(3ab(2a - 3b)\\)',
    }
  },
  {
    id: 'a2-019',
    topicRef: 'a2',
    topicTitle: 'Factorising 19',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( y^2 - 81 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that this is a difference of two squares, where 81 is \\( 9^2 \\).',
          workingLatex: 'y^2 - 9^2',
          explanation: 'Identify the squared terms to apply the rule \\( A^2 - B^2 = (A-B)(A+B) \\).',
        }
      ],
      finalAnswer: '\\((y - 9)(y + 9)\\)',
    }
  },
  {
    id: 'a2-020',
    topicRef: 'a2',
    topicTitle: 'Factorising 20',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 3x^2 - 75 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the common numerical factor of 3 from both terms first.',
          workingLatex: '3(x^2 - 25)',
          explanation: 'Always check for a common factor before applying other factorisation rules.',
        },
        {
          stepNumber: 2,
          description: 'Factorise the expression inside the bracket using the difference of two squares rule.',
          workingLatex: '3(x - 5)(x + 5)',
          explanation: 'Recognise that 25 is \\( 5^2 \\).',
        }
      ],
      finalAnswer: '\\(3(x - 5)(x + 5)\\)',
    }
  },
  {
    id: 'a2-021',
    topicRef: 'a2',
    topicTitle: 'Factorising 21',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( xy + 2x + 3y + 6 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the first two terms and the last two terms, then factorise them separately.',
          workingLatex: 'x(y + 2) + 3(y + 2)',
          explanation: 'Extract \\( x \\) from the first pair and 3 from the second pair.',
        },
        {
          stepNumber: 2,
          description: 'Factor out the common binomial bracket \\( (y + 2) \\).',
          workingLatex: '(y + 2)(x + 3)',
          explanation: 'Combine the factored groups together.',
        }
      ],
      finalAnswer: '\\((y + 2)(x + 3)\\)',
    }
  },
  {
    id: 'a2-022',
    topicRef: 'a2',
    topicTitle: 'Factorising 22',
    difficulty: 'Foundation',
    questionText: 'Express as a product of factors: \\( (a-b)^2 + 2(a-b) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that the bracket \\( (a-b) \\) is a common factor in both terms.',
          workingLatex: '(a-b)[(a-b) + 2]',
          explanation: 'Extract the shared binomial bracket to the front.',
        },
        {
          stepNumber: 2,
          description: 'Remove the inner square brackets for the final simplified answer.',
          workingLatex: '(a-b)(a-b+2)',
          explanation: 'Neaten up the expression.',
        }
      ],
      finalAnswer: '\\((a-b)(a-b+2)\\)',
    }
  },
  {
    id: 'a2-023',
    topicRef: 'a2',
    topicTitle: 'Factorising 23',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 4x^3y - 16xy^3 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find and extract the highest common factor for both terms, which is \\( 4xy \\).',
          workingLatex: '4xy(x^2 - 4y^2)',
          explanation: 'Divide both terms by \\( 4xy \\) to find the remaining expression.',
        },
        {
          stepNumber: 2,
          description: 'Recognise that the expression inside the bracket is a difference of two squares and factorise it.',
          workingLatex: '4xy(x - 2y)(x + 2y)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\) to \\( (x^2 - 4y^2) \\).',
        }
      ],
      finalAnswer: '\\(4xy(x - 2y)(x + 2y)\\)',
    }
  },

  {
    id: 'a2-024',
    topicRef: 'a2',
    topicTitle: 'Factorising 24',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( 100 - z^2 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that this is a difference of two squares, where 100 is \\( 10^2 \\).',
          workingLatex: '10^2 - z^2',
          explanation: 'Identify the squared terms to apply the rule \\( A^2 - B^2 = (A-B)(A+B) \\).'
        }
      ],
      finalAnswer: '\\((10 - z)(10 + z)\\)',
    }
  },
  {
    id: 'a2-025',
    topicRef: 'a2',
    topicTitle: 'Factorising 25',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 14m^2n^3 + 21m^3n^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common factor of the numbers (which is 7) and the highest common powers of the variables (which are \\( m^2 \\) and \\( n^2 \\)).',
          workingLatex: '7m^2n^2',
          explanation: 'Find the greatest term that divides exactly into both parts of the expression.'
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( 7m^2n^2 \\) from the original expression.',
          workingLatex: '7m^2n^2(2n + 3m)',
          explanation: 'Divide each term by the common factor to find the contents of the bracket.'
        }
      ],
      finalAnswer: '\\(7m^2n^2(2n + 3m)\\)',
    }
  },
  {
    id: 'a2-026',
    topicRef: 'a2',
    topicTitle: 'Factorising 26',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( x(x-4) - 3(x-4) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that the bracket \\( (x-4) \\) is a common factor in both terms.',
          workingLatex: '(x-4)(x - 3)',
          explanation: 'Extract the shared binomial bracket to the front, placing the remaining outer terms into a second bracket.'
        }
      ],
      finalAnswer: '\\((x-4)(x-3)\\)',
    }
  },
  {
    id: 'a2-027',
    topicRef: 'a2',
    topicTitle: 'Factorising 27',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 8x^2 - 32y^2 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the common numerical factor of 8 from both terms first.',
          workingLatex: '8(x^2 - 4y^2)',
          explanation: 'Always check for a highest common factor before looking for other patterns.'
        },
        {
          stepNumber: 2,
          description: 'Recognise that the expression inside the bracket is a difference of two squares and factorise it.',
          workingLatex: '8(x - 2y)(x + 2y)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\) to the inner quadratic.'
        }
      ],
      finalAnswer: '\\(8(x - 2y)(x + 2y)\\)',
    }
  },
  {
    id: 'a2-028',
    topicRef: 'a2',
    topicTitle: 'Factorising 28',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( ax - bx + ay - by \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the first two terms and the last two terms, factorising each pair separately.',
          workingLatex: 'x(a - b) + y(a - b)',
          explanation: 'Extract \\( x \\) from the first pair and \\( y \\) from the second pair.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly formed common binomial bracket \\( (a - b) \\).',
          workingLatex: '(a - b)(x + y)',
          explanation: 'Combine the factored groups to leave a product of two brackets.'
        }
      ],
      finalAnswer: '\\((a - b)(x + y)\\)',
    }
  },
  {
    id: 'a2-029',
    topicRef: 'a2',
    topicTitle: 'Factorising 29',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( 2u(v-w) + 5(w-v) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Notice the brackets \\( (v-w) \\) and \\( (w-v) \\) are opposites. Factor out -1 from the second term to make them identical.',
          workingLatex: '2u(v-w) - 5(v-w)',
          explanation: 'Reverse the sign of the second term to reveal a common bracket.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the common bracket \\( (v-w) \\).',
          workingLatex: '(v-w)(2u - 5)',
          explanation: 'Extract the shared binomial factor.'
        }
      ],
      finalAnswer: '\\((v-w)(2u - 5)\\)',
    }
  },
  {
    id: 'a2-030',
    topicRef: 'a2',
    topicTitle: 'Factorising 30',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( (p+q)^2 - 3(p+q) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that \\( (p+q) \\) is a common factor in both terms.',
          workingLatex: '(p+q)[(p+q) - 3]',
          explanation: 'Pull the shared bracket out to the front.'
        },
        {
          stepNumber: 2,
          description: 'Remove the inner square brackets to give the final simplified expression.',
          workingLatex: '(p+q)(p+q-3)',
          explanation: 'Neaten up the expression.'
        }
      ],
      finalAnswer: '\\((p+q)(p+q-3)\\)',
    }
  },

  {
    id: 'a2-031',
    topicRef: 'a2',
    topicTitle: 'Factorising 31',
    difficulty: 'Foundation',
    questionText: 'Factorise: \\( 18p - 27q \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the highest common factor (HCF) of 18 and 27, which is 9.',
          workingLatex: '9(2p - 3q)',
          explanation: 'Divide both terms by 9 to find the expression inside the bracket.'
        }
      ],
      finalAnswer: '\\(9(2p - 3q)\\)',
    }
  },
  {
    id: 'a2-032',
    topicRef: 'a2',
    topicTitle: 'Factorising 32',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( 4c^2 - d^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise this as a difference of two squares, rewriting the terms as \\( (2c)^2 \\) and \\( d^2 \\).',
          workingLatex: '(2c)^2 - d^2',
          explanation: 'Identify the squared components to apply the rule \\( A^2 - B^2 = (A-B)(A+B) \\).'
        }
      ],
      finalAnswer: '\\((2c - d)(2c + d)\\)',
    }
  },
  {
    id: 'a2-033',
    topicRef: 'a2',
    topicTitle: 'Factorising 33',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 5x^2y + 15xy^2 - 10xy \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common numerical factor (which is 5) and the shared variables (which are \\( x \\) and \\( y \\)).',
          workingLatex: '5xy',
          explanation: 'Find the greatest term that divides exactly into all three parts of the expression.'
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( 5xy \\) from the original expression.',
          workingLatex: '5xy(x + 3y - 2)',
          explanation: 'Divide each original term by the common factor to populate the bracket.'
        }
      ],
      finalAnswer: '\\(5xy(x + 3y - 2)\\)',
    }
  },
  {
    id: 'a2-034',
    topicRef: 'a2',
    topicTitle: 'Factorising 34',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( m(n-2) + 4(n-2) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that the binomial \\( (n-2) \\) is a common factor in both terms.',
          workingLatex: '(n-2)(m + 4)',
          explanation: 'Extract the shared bracket to the front and group the remaining outer terms into a second bracket.'
        }
      ],
      finalAnswer: '\\((n-2)(m + 4)\\)',
    }
  },
  {
    id: 'a2-035',
    topicRef: 'a2',
    topicTitle: 'Factorising 35',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 12a^2 - 75b^2 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the highest common numerical factor of 3 from both terms first.',
          workingLatex: '3(4a^2 - 25b^2)',
          explanation: 'Always check for a common factor before applying difference of two squares.'
        },
        {
          stepNumber: 2,
          description: 'Recognise that the expression inside the bracket is a difference of two squares and factorise it.',
          workingLatex: '3(2a - 5b)(2a + 5b)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\) to the inner quadratic.'
        }
      ],
      finalAnswer: '\\(3(2a - 5b)(2a + 5b)\\)',
    }
  },
  {
    id: 'a2-036',
    topicRef: 'a2',
    topicTitle: 'Factorising 36',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( pr + ps + qr + qs \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the first two terms and the last two terms, then factorise each pair.',
          workingLatex: 'p(r + s) + q(r + s)',
          explanation: 'Extract \\( p \\) from the first pair and \\( q \\) from the second pair.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly formed common binomial bracket \\( (r + s) \\).',
          workingLatex: '(r + s)(p + q)',
          explanation: 'Combine the factored groups together.'
        }
      ],
      finalAnswer: '\\((r + s)(p + q)\\)',
    }
  },
  {
    id: 'a2-037',
    topicRef: 'a2',
    topicTitle: 'Factorising 37',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( (2x-y)^2 - x(2x-y) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that \\( (2x-y) \\) is a common factor in both terms and extract it.',
          workingLatex: '(2x-y)[(2x-y) - x]',
          explanation: 'Pull the shared binomial bracket out to the front.'
        },
        {
          stepNumber: 2,
          description: 'Simplify the expression inside the square brackets by collecting like terms: \\( 2x - y - x = x - y \\).',
          workingLatex: '(2x-y)(x-y)',
          explanation: 'Neaten up the second bracket to find the final factorised form.'
        }
      ],
      finalAnswer: '\\((2x-y)(x-y)\\)',
    }
  },

  {
    id: 'a2-038',
    topicRef: 'a2',
    topicTitle: 'Factorising 38',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 24u + 36v \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common factor (HCF) of the numbers 24 and 36, which is 12.',
          workingLatex: '12(2u + 3v)',
          explanation: 'Divide both terms by 12 and place the remaining expression inside the bracket.'
        }
      ],
      finalAnswer: '\\(12(2u + 3v)\\)',
    }
  },
  {
    id: 'a2-039',
    topicRef: 'a2',
    topicTitle: 'Factorising 39',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( 49x^2 - y^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise that this is a difference of two squares, rewriting the first term as \\( (7x)^2 \\).',
          workingLatex: '(7x)^2 - y^2',
          explanation: 'Identify the squared components to apply the rule \\( A^2 - B^2 = (A-B)(A+B) \\).'
        }
      ],
      finalAnswer: '\\((7x - y)(7x + y)\\)',
    }
  },
  {
    id: 'a2-040',
    topicRef: 'a2',
    topicTitle: 'Factorising 40',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 16a^3b^2 - 24a^2b^3 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common numerical factor (which is 8) and the highest common powers of the variables (which are \\( a^2 \\) and \\( b^2 \\)).',
          workingLatex: '8a^2b^2',
          explanation: 'Find the greatest algebraic term that divides exactly into both parts of the expression.'
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( 8a^2b^2 \\) from the original expression.',
          workingLatex: '8a^2b^2(2a - 3b)',
          explanation: 'Divide each original term by the common factor to populate the bracket.'
        }
      ],
      finalAnswer: '\\(8a^2b^2(2a - 3b)\\)',
    }
  },
  {
    id: 'a2-041',
    topicRef: 'a2',
    topicTitle: 'Factorising 41',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( x(y+5) - 2(y+5) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that the binomial \\( (y+5) \\) is a common factor in both terms.',
          workingLatex: '(y+5)(x - 2)',
          explanation: 'Extract the shared bracket to the front and group the remaining outer multipliers into a second bracket.'
        }
      ],
      finalAnswer: '\\((y+5)(x - 2)\\)',
    }
  },
  {
    id: 'a2-042',
    topicRef: 'a2',
    topicTitle: 'Factorising 42',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 5m^3 - 45m \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the highest common algebraic and numerical factor, \\( 5m \\), from both terms first.',
          workingLatex: '5m(m^2 - 9)',
          explanation: 'Always check for a common factor before checking for quadratics or difference of two squares.'
        },
        {
          stepNumber: 2,
          description: 'Recognise that the expression inside the bracket is a difference of two squares and factorise it.',
          workingLatex: '5m(m - 3)(m + 3)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\) to the inner expression.'
        }
      ],
      finalAnswer: '\\(5m(m - 3)(m + 3)\\)',
    }
  },
  {
    id: 'a2-043',
    topicRef: 'a2',
    topicTitle: 'Factorising 43',
    difficulty: 'Foundation',
    questionText: 'Factorise by grouping: \\( cx + dx - cy - dy \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Group the first two terms and the last two terms, then factorise each pair. Be careful with the negative signs in the second pair.',
          workingLatex: 'x(c + d) - y(c + d)',
          explanation: 'Extract \\( x \\) from the first pair and \\( -y \\) from the second pair to ensure the inner brackets match.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the newly formed common binomial bracket \\( (c + d) \\).',
          workingLatex: '(c + d)(x - y)',
          explanation: 'Combine the factored groups together.'
        }
      ],
      finalAnswer: '\\((c + d)(x - y)\\)',
    }
  },
  {
    id: 'a2-044',
    topicRef: 'a2',
    topicTitle: 'Factorising 44',
    difficulty: 'Foundation',
    questionText: 'Simplify the expression, leaving your answer in factorised form: \\( (2x+3)^2 - (2x+3)(x-1) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that \\( (2x+3) \\) is a common factor in both terms and extract it.',
          workingLatex: '(2x+3)[(2x+3) - (x-1)]',
          explanation: 'Pull the shared binomial bracket out to the front.'
        },
        {
          stepNumber: 2,
          description: 'Carefully expand the inner expression, paying attention to the negative sign in front of the \\( (x-1) \\) bracket.',
          workingLatex: '(2x+3)(2x + 3 - x + 1)',
          explanation: 'Distribute the negative sign to the terms inside the second bracket.'
        },
        {
          stepNumber: 3,
          description: 'Simplify the expression inside the second bracket by collecting like terms.',
          workingLatex: '(2x+3)(x + 4)',
          explanation: 'Combine the \\( x \\) terms and the number terms.'
        }
      ],
      finalAnswer: '\\((2x+3)(x+4)\\)',
    }
  },

  {
    id: 'a2-045',
    topicRef: 'a2',
    topicTitle: 'Factorising 45',
    difficulty: 'Foundation',
    questionText: 'Factorise: \\( 12x - 18 \\)',
    marks: 1,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the highest common factor (HCF) of 12 and 18, which is 6.',
          workingLatex: '6(2x - 3)',
          explanation: 'Divide both terms by 6 to find the expression inside the bracket.'
        }
      ],
      finalAnswer: '\\(6(2x - 3)\\)',
    }
  },
  {
    id: 'a2-046',
    topicRef: 'a2',
    topicTitle: 'Factorising 46',
    difficulty: 'Foundation',
    questionText: 'Factorise fully: \\( 5a^2b + 10ab^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify the highest common numerical factor (which is 5) and the shared variables (which are \\( a \\) and \\( b \\)).',
          workingLatex: '5ab',
          explanation: 'Find the greatest term that divides exactly into both parts of the expression.'
        },
        {
          stepNumber: 2,
          description: 'Factor out \\( 5ab \\) from the original expression.',
          workingLatex: '5ab(a + 2b)',
          explanation: 'Divide each original term by the common factor to populate the bracket.'
        }
      ],
      finalAnswer: '\\(5ab(a + 2b)\\)',
    }
  },
  {
    id: 'a2-047',
    topicRef: 'a2',
    topicTitle: 'Factorising 47',
    difficulty: 'Foundation',
    questionText: 'Write the expression as a product of factors: \\( 81p^2 - 16q^2 \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Recognise this as a difference of two squares, rewriting the terms as \\( (9p)^2 \\) and \\( (4q)^2 \\).',
          workingLatex: '(9p)^2 - (4q)^2',
          explanation: 'Identify the squared components to apply the rule \\( A^2 - B^2 = (A-B)(A+B) \\).'
        }
      ],
      finalAnswer: '\\((9p - 4q)(9p + 4q)\\)',
    }
  },
  {
    id: 'a2-048',
    topicRef: 'a2',
    topicTitle: 'Factorising 48',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( 2x(y-1) + 3(y-1) \\)',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify that the binomial \\( (y-1) \\) is a common factor in both terms.',
          workingLatex: '(y-1)(2x + 3)',
          explanation: 'Extract the shared bracket to the front and group the remaining outer terms into a second bracket.'
        }
      ],
      finalAnswer: '\\((y-1)(2x + 3)\\)',
    }
  },
  {
    id: 'a2-049',
    topicRef: 'a2',
    topicTitle: 'Factorising 49',
    difficulty: 'Foundation',
    questionText: 'Express as the product of factors: \\( m(n-3) - 2(3-n) \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Notice the brackets \\( (n-3) \\) and \\( (3-n) \\) are opposites. Factor out -1 from the second term to make them identical.',
          workingLatex: 'm(n-3) + 2(n-3)',
          explanation: 'Reverse the sign of the second term to reveal a common bracket.'
        },
        {
          stepNumber: 2,
          description: 'Factor out the common bracket \\( (n-3) \\).',
          workingLatex: '(n-3)(m + 2)',
          explanation: 'Extract the shared binomial factor.'
        }
      ],
      finalAnswer: '\\((n-3)(m + 2)\\)',
    }
  },
  {
    id: 'a2-050',
    topicRef: 'a2',
    topicTitle: 'Factorising 50',
    difficulty: 'Foundation',
    questionText: 'Factorise completely: \\( 18x^2 - 50 \\)',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Extract the highest common numerical factor of 2 from both terms first.',
          workingLatex: '2(9x^2 - 25)',
          explanation: 'Always check for a common factor before applying difference of two squares.'
        },
        {
          stepNumber: 2,
          description: 'Recognise that the expression inside the bracket is a difference of two squares and factorise it.',
          workingLatex: '2(3x - 5)(3x + 5)',
          explanation: 'Apply the pattern \\( A^2 - B^2 = (A-B)(A+B) \\) to the inner quadratic.'
        }
      ],
      finalAnswer: '\\(2(3x - 5)(3x + 5)\\)',
    }
  }
];
