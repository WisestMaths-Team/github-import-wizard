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
    id: 'd4-001',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 01',
    difficulty: 'Foundation',
    questionText: 'Find the \\( x \\)-coordinates of the stationary points of \\( y = x^2 - 10x + 3 \\).',
    marks: 2,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 10',
          explanation: 'Apply the power rule to each term: the derivative of \\( x^2 \\) is \\( 2x \\), the derivative of \\( -10x \\) is \\( -10 \\), and the constant disappears.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '2x - 10 = 0',
          explanation: 'Stationary points occur where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Solve for x.',
          workingLatex: '2x = 10 \\implies x = 5',
          explanation: 'Add 10 to both sides, then divide by 2.'
        }
      ],
      finalAnswer: '\\( x = 5 \\)'
    }
  },
  {
    id: 'd4-002',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 02',
    difficulty: 'Foundation',
    questionText: 'Find the \\( x \\)-coordinates of the stationary points of \\( y = x^3 - 3x^2 - 24x + 1 \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 24',
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '3x^2 - 6x - 24 = 0',
          explanation: 'Stationary points occur where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Divide through by 3.',
          workingLatex: 'x^2 - 2x - 8 = 0',
          explanation: 'Simplify by dividing every term by the common factor of 3.'
        },
        {
          stepNumber: 4,
          description: 'Factorise the quadratic.',
          workingLatex: '(x - 4)(x + 2) = 0',
          explanation: 'Find two numbers that multiply to \\(-8\\) and add to \\(-2\\): these are \\(-4\\) and \\(+2\\).'
        },
        {
          stepNumber: 5,
          description: 'Solve for x.',
          workingLatex: 'x = 4 \\text{ or } x = -2',
          explanation: 'Set each factor equal to zero and solve.'
        }
      ],
      finalAnswer: '\\( x = 4 \\) and \\( x = -2 \\)'
    }
  },
  {
    id: 'd4-003',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 03',
    difficulty: 'Foundation',
    questionText: 'Find the coordinates of the stationary points of \\( y = 2x^3 - 9x^2 + 12x - 3 \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 18x + 12',
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '6x^2 - 18x + 12 = 0',
          explanation: 'Stationary points occur where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Divide through by 6.',
          workingLatex: 'x^2 - 3x + 2 = 0',
          explanation: 'Simplify by dividing every term by the common factor of 6.'
        },
        {
          stepNumber: 4,
          description: 'Factorise and solve.',
          workingLatex: '(x - 1)(x - 2) = 0 \\implies x = 1 \\text{ or } x = 2',
          explanation: 'Find two numbers that multiply to \\(2\\) and add to \\(-3\\): these are \\(-1\\) and \\(-2\\).'
        },
        {
          stepNumber: 5,
          description: 'Find y-coordinate at x = 1.',
          workingLatex: 'y = 2(1)^3 - 9(1)^2 + 12(1) - 3 = 2 - 9 + 12 - 3 = 2',
          explanation: 'Substitute \\( x = 1 \\) back into the original equation.'
        },
        {
          stepNumber: 6,
          description: 'Find y-coordinate at x = 2.',
          workingLatex: 'y = 2(2)^3 - 9(2)^2 + 12(2) - 3 = 16 - 36 + 24 - 3 = 1',
          explanation: 'Substitute \\( x = 2 \\) back into the original equation.'
        }
      ],
      finalAnswer: '\\( (1, 2) \\) and \\( (2, 1) \\)'
    }
  },
  {
    id: 'd4-004',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 04',
    difficulty: 'Foundation',
    questionText: 'Find the coordinates of the stationary point of \\( y = -x^2 + 8x - 10 \\) and state its nature.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -2x + 8',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Set to zero and solve.',
          workingLatex: '-2x + 8 = 0 \\implies x = 4',
          explanation: 'Solve the linear equation.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'y = -16 + 32 - 10 = 6',
          explanation: 'Substitute \\( x = 4 \\).'
        },
        {
          stepNumber: 4,
          description: 'Determine nature using second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = -2 < 0 \\Rightarrow \\text{maximum}',
          explanation: 'The second derivative is constant and negative, so this is a maximum.'
        }
      ],
      finalAnswer: 'Local maximum at \\( (4, 6) \\)'
    }
  },
  {
    id: 'd4-005',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 05',
    difficulty: 'Foundation',
    questionText: 'Find the coordinates of the stationary points of \\( y = x^3 + 3x^2 - 45x + 7 \\) and classify each one.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 6x - 45',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Solve \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).',
          workingLatex: 'x^2 + 2x - 15 = 0 \\implies (x + 5)(x - 3) = 0 \\implies x = -5 \\text{ or } x = 3',
          explanation: 'Divide by 3 then factorise.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\)-coordinates.',
          workingLatex: 'x=-5: y = -125 + 75 + 225 + 7 = 182 \\nx=3: y = 27 + 27 - 135 + 7 = -74',
          explanation: 'Substitute into the original equation.'
        },
        {
          stepNumber: 4,
          description: 'Second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x + 6',
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 5,
          description: 'Classify each point.',
          workingLatex: 'x=-5: 6(-5)+6 = -24 < 0 \\Rightarrow \\text{maximum} \\nx=3: 6(3)+6 = 24 > 0 \\Rightarrow \\text{minimum}',
          explanation: 'Substitute into \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\).'
        }
      ],
      finalAnswer: 'Local maximum at \\( (-5, 182) \\); local minimum at \\( (3, -74) \\)'
    }
  },
  {
    id: 'd4-006',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 06',
    difficulty: 'Foundation',
    questionText: 'Show that the function \\( f(x) = x^2 + 4x + 9 \\) has no real roots, and find the coordinates of its stationary point.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Identify a, b, c for discriminant.',
          workingLatex: 'a = 1, \\quad b = 4, \\quad c = 9',
          explanation: 'Read off the coefficients from \\( f(x) = x^2 + 4x + 9 \\).'
        },
        {
          stepNumber: 2,
          description: 'Compute the discriminant.',
          workingLatex: '\\Delta = b^2 - 4ac = 16 - 36 = -20',
          explanation: 'Substitute into the discriminant formula.'
        },
        {
          stepNumber: 3,
          description: 'Conclude no real roots.',
          workingLatex: '\\Delta = -20 < 0',
          explanation: 'Since the discriminant is negative, the quadratic has no real roots and never crosses the x-axis.'
        },
        {
          stepNumber: 4,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 2x + 4",
          explanation: 'Apply the power rule to each term.'
        },
        {
          stepNumber: 5,
          description: 'Set the derivative equal to zero.',
          workingLatex: '2x + 4 = 0 \\implies x = -2',
          explanation: 'Solve the linear equation for the stationary point.'
        },
        {
          stepNumber: 6,
          description: 'Find the y-coordinate.',
          workingLatex: 'f(-2) = (-2)^2 + 4(-2) + 9 = 4 - 8 + 9 = 5',
          explanation: 'Substitute \\( x = -2 \\) back into the original function.'
        }
      ],
      finalAnswer: 'No real roots (\\( \\Delta = -20 < 0 \\)); stationary point at \\( (-2, 5) \\)'
    }
  },
  {
    id: 'd4-007',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 07',
    difficulty: 'Foundation',
    questionText: 'Show that \\( f(x) = x^3 + 5x + 2 \\) has no stationary points.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 3x^2 + 5",
          explanation: 'Apply the power rule to each term. The constant 2 vanishes.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '3x^2 + 5 = 0',
          explanation: 'Stationary points would occur where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Attempt to solve for x.',
          workingLatex: 'x^2 = -\\tfrac{5}{3}',
          explanation: 'Rearranging gives a negative value on the right-hand side, but \\( x^2 \\geq 0 \\) for all real \\( x \\), so there are no real solutions.'
        },
        {
          stepNumber: 4,
          description: 'Conclude no stationary points exist.',
          workingLatex: "f'(x) = 3x^2 + 5 \\geq 5 > 0 \\text{ for all real } x",
          explanation: 'Since \\( 3x^2 \\geq 0 \\), we have \\( f\'(x) \\geq 5 > 0 \\) always. The gradient is never zero, so there are no stationary points.'
        }
      ],
      finalAnswer: '\\( f\'(x) = 3x^2 + 5 \\geq 5 > 0 \\) for all real \\( x \\), so there are no stationary points.'
    }
  },
  {
    id: 'd4-008',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 08',
    difficulty: 'Foundation',
    questionText: 'A function is given by \\( f(x) = x^3 + kx \\), where \\( k \\) is a constant. Given that \\( f(x) \\) has no stationary points, find the range of values of \\( k \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 3x^2 + k",
          explanation: 'Apply the power rule: the derivative of \\( x^3 \\) is \\( 3x^2 \\) and the derivative of \\( kx \\) is \\( k \\).'
        },
        {
          stepNumber: 2,
          description: 'Write the condition for no stationary points.',
          workingLatex: "f'(x) \\neq 0 \\text{ for all } x",
          explanation: 'For no stationary points, the derivative must never equal zero.'
        },
        {
          stepNumber: 3,
          description: 'Find the minimum of the derivative.',
          workingLatex: '3x^2 \\geq 0 \\text{ for all } x \\implies f\'(x) \\geq k',
          explanation: 'Since \\( 3x^2 \\geq 0 \\), the smallest value \\( f\'(x) \\) can take is \\( k \\), which occurs at \\( x = 0 \\).'
        },
        {
          stepNumber: 4,
          description: 'State the condition on k.',
          workingLatex: 'k > 0',
          explanation: 'If \\( k > 0 \\), then \\( f\'(x) = 3x^2 + k \\geq k > 0 \\) for all \\( x \\), so the gradient is always positive and there are no stationary points.'
        }
      ],
      finalAnswer: '\\( k > 0 \\)'
    }
  },
  {
    id: 'd4-009',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 09',
    difficulty: 'Foundation',
    questionText: 'Find the coordinates of the stationary points of \\( y = x^4 - 8x^2 + 5 \\) and classify them.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 16x',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Solve \\( 4x^3 - 16x = 0 \\).',
          workingLatex: '4x(x^2 - 4) = 0 \\implies x = 0,\\; x = 2,\\; x = -2',
          explanation: 'Factorise \\( 4x(x-2)(x+2) = 0 \\).'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\)-coordinates.',
          workingLatex: 'y(0) = 5; \\quad y(2) = 16 - 32 + 5 = -11; \\quad y(-2) = -11',
          explanation: 'Substitute into \\( y = x^4 - 8x^2 + 5 \\).'
        },
        {
          stepNumber: 4,
          description: 'Second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 16',
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 5,
          description: 'Classify.',
          workingLatex: 'x=0: -16 < 0 \\Rightarrow \\text{maximum} \\nx=\\pm2: 48 - 16 = 32 > 0 \\Rightarrow \\text{minima}',
          explanation: 'Substitute each \\( x \\)-value into \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\).'
        }
      ],
      finalAnswer: 'Local maximum at \\( (0, 5) \\); local minima at \\( (2, -11) \\) and \\( (-2, -11) \\)'
    }
  },
  {
    id: 'd4-010',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 10',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( x \\) for which \\( y = x^2 - 6x + 5 \\) is an increasing function.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 6',
          explanation: 'Apply the power rule to each term: the derivative of \\( x^2 \\) is \\( 2x \\), the derivative of \\( -6x \\) is \\( -6 \\), and the constant vanishes.'
        },
        {
          stepNumber: 2,
          description: 'Set up the increasing condition.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} > 0',
          explanation: 'A function is increasing where its derivative is positive.'
        },
        {
          stepNumber: 3,
          description: 'Solve the inequality.',
          workingLatex: '2x - 6 > 0 \\implies 2x > 6 \\implies x > 3',
          explanation: 'Add 6 to both sides, then divide by 2.'
        }
      ],
      finalAnswer: '\\( x > 3 \\)'
    }
  },
  {
    id: 'd4-011',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 11',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( x \\) for which \\( y = x^2 + 4x - 3 \\) is a decreasing function.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 4',
          explanation: 'Apply the power rule to each term: the derivative of \\( x^2 \\) is \\( 2x \\), the derivative of \\( 4x \\) is \\( 4 \\), and the constant vanishes.'
        },
        {
          stepNumber: 2,
          description: 'Set up the decreasing condition.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0',
          explanation: 'A function is decreasing where its derivative is negative.'
        },
        {
          stepNumber: 3,
          description: 'Solve the inequality.',
          workingLatex: '2x + 4 < 0 \\implies 2x < -4 \\implies x < -2',
          explanation: 'Subtract 4 from both sides, then divide by 2.'
        }
      ],
      finalAnswer: '\\( x < -2 \\)'
    }
  },
  {
    id: 'd4-012',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 12',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( x \\) for which \\( f(x) = x^3 - 3x^2 - 9x + 2 \\) is increasing.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 3x^2 - 6x - 9",
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: 'Set up the increasing condition.',
          workingLatex: "f'(x) > 0",
          explanation: 'A function is increasing where its derivative is positive.'
        },
        {
          stepNumber: 3,
          description: 'Divide by 3 and factorise.',
          workingLatex: '3x^2 - 6x - 9 > 0 \\implies x^2 - 2x - 3 > 0 \\implies (x - 3)(x + 1) > 0',
          explanation: 'Divide every term by 3, then factorise the resulting quadratic.'
        },
        {
          stepNumber: 4,
          description: 'Solve the quadratic inequality.',
          workingLatex: 'x < -1 \\text{ or } x > 3',
          explanation: 'The product \\( (x-3)(x+1) > 0 \\) when both factors are positive (\\( x > 3 \\)) or both are negative (\\( x < -1 \\)).'
        }
      ],
      finalAnswer: '\\( x < -1 \\) or \\( x > 3 \\)'
    }
  },
  {
    id: 'd4-013',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 13',
    difficulty: 'Foundation',
    questionText: 'Find the values of \\( x \\) for which \\( f(x) = 2x^3 - 3x^2 - 36x + 5 \\) is decreasing.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 6x^2 - 6x - 36",
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: 'Set up the decreasing condition.',
          workingLatex: "f'(x) < 0",
          explanation: 'A function is decreasing where its derivative is negative.'
        },
        {
          stepNumber: 3,
          description: 'Divide by 6 and factorise.',
          workingLatex: '6x^2 - 6x - 36 < 0 \\implies x^2 - x - 6 < 0 \\implies (x - 3)(x + 2) < 0',
          explanation: 'Divide every term by 6, then factorise the resulting quadratic.'
        },
        {
          stepNumber: 4,
          description: 'Solve the quadratic inequality.',
          workingLatex: '-2 < x < 3',
          explanation: 'The product is negative when one factor is positive and the other is negative, which happens between the roots \\( x = -2 \\) and \\( x = 3 \\).'
        }
      ],
      finalAnswer: '\\( -2 < x < 3 \\)'
    }
  },
  {
    id: 'd4-014',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 14',
    difficulty: 'Foundation',
    questionText: 'Use differentiation to explain why \\( f(x) = x^3 + 3x^2 + 3x + 5 \\) is an increasing function for all real values of \\( x \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 3x^2 + 6x + 3",
          explanation: 'Apply the power rule to each term of the cubic. The constant 5 vanishes.'
        },
        {
          stepNumber: 2,
          description: 'Take out the common factor.',
          workingLatex: "f'(x) = 3(x^2 + 2x + 1)",
          explanation: 'Factor out the common factor of 3 from every term.'
        },
        {
          stepNumber: 3,
          description: 'Recognise the perfect square.',
          workingLatex: "f'(x) = 3(x + 1)^2",
          explanation: 'The expression \\( x^2 + 2x + 1 \\) is a perfect square since \\( (x+1)^2 = x^2 + 2x + 1 \\).'
        },
        {
          stepNumber: 4,
          description: 'Conclude the function is increasing.',
          workingLatex: "f'(x) = 3(x+1)^2 \\geq 0 \\text{ for all real } x",
          explanation: 'A square is always \\( \\geq 0 \\), and equality holds only at \\( x = -1 \\). Since the gradient is never negative, the function is non-decreasing (and strictly increasing except at the point of inflection \\( x = -1 \\)).'
        }
      ],
      finalAnswer: "\\( f'(x) = 3(x+1)^2 \\geq 0 \\) for all real \\( x \\), so \\( f \\) is increasing for all real values."
    }
  },
  {
    id: 'd4-015',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 15',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( x \\) for which \\( y = x^3 - 12x + 1 \\) is decreasing.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12',
          explanation: 'Apply the power rule to each term of \\( y = x^3 - 12x + 1 \\).'
        },
        {
          stepNumber: 2,
          description: 'Set up the decreasing condition.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0',
          explanation: 'A function is decreasing where its derivative is negative.'
        },
        {
          stepNumber: 3,
          description: 'Substitute and simplify.',
          workingLatex: '3x^2 - 12 < 0 \\implies x^2 < 4',
          explanation: 'Divide both sides of the inequality by 3.'
        },
        {
          stepNumber: 4,
          description: 'Solve the quadratic inequality.',
          workingLatex: '-2 < x < 2',
          explanation: 'Since \\( x^2 < 4 \\), the value of \\( x \\) must lie between \\( -2 \\) and \\( 2 \\).'
        }
      ],
      finalAnswer: '\\( -2 < x < 2 \\)'
    }
  },
  {
    id: 'd4-016',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 16',
    difficulty: 'Foundation',
    questionText: 'The function \\( y = 4 + 6x - x^2 \\) is decreasing for \\( x > k \\). Find the value of \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6 - 2x',
          explanation: 'Apply the power rule to each term of \\( y = 4 + 6x - x^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '6 - 2x = 0',
          explanation: 'The stationary point occurs where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( x \\).',
          workingLatex: '2x = 6 \\implies x = 3',
          explanation: 'Rearrange and divide both sides by 2.'
        },
        {
          stepNumber: 4,
          description: 'State the value of \\( k \\).',
          workingLatex: 'k = 3',
          explanation: 'The coefficient of \\( x^2 \\) is negative, so this is an inverted parabola. It increases for \\( x < 3 \\) and decreases for \\( x > 3 \\).'
        }
      ],
      finalAnswer: '\\( k = 3 \\)'
    }
  },
  {
    id: 'd4-017',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 17',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( x \\) for which \\( f(x) = x^3 - 6x^2 + 15x - 7 \\) is increasing.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 3x^2 - 12x + 15",
          explanation: 'Apply the power rule to each term of \\( f(x) = x^3 - 6x^2 + 15x - 7 \\).'
        },
        {
          stepNumber: 2,
          description: 'Set up the increasing condition.',
          workingLatex: "f'(x) > 0",
          explanation: 'A function is increasing where its derivative is positive.'
        },
        {
          stepNumber: 3,
          description: 'Compute the discriminant.',
          workingLatex: '\\Delta = (-12)^2 - 4(3)(15) = 144 - 180 = -36',
          explanation: 'Use \\( \\Delta = b^2 - 4ac \\) with \\( a = 3 \\), \\( b = -12 \\), \\( c = 15 \\).'
        },
        {
          stepNumber: 4,
          description: 'Interpret and conclude.',
          workingLatex: "\\Delta < 0 \\text{ and } a = 3 > 0 \\implies f'(x) > 0 \\text{ for all real } x",
          explanation: 'A negative discriminant with a positive leading coefficient means the quadratic is always positive. Therefore \\( f \\) is increasing for all real values of \\( x \\).'
        }
      ],
      finalAnswer: '\\( f(x) \\) is increasing for all real values of \\( x \\).'
    }
  },
  {
    id: 'd4-018',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 18',
    difficulty: 'Foundation',
    questionText: 'Given that \\( g(x) = 3 - 4x - 2x^2 \\) is a decreasing function for \\( x > k \\), find \\( k \\).',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "g'(x) = -4 - 4x",
          explanation: 'Apply the power rule to each term of \\( g(x) = 3 - 4x - 2x^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: "g'(x) = 0 \\implies -4 - 4x = 0",
          explanation: 'A stationary point occurs where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Solve for \\( x \\).',
          workingLatex: '-4x = 4 \\implies x = -1',
          explanation: 'Add 4 to both sides and divide by \\( -4 \\).'
        },
        {
          stepNumber: 4,
          description: 'State the value of \\( k \\).',
          workingLatex: 'k = -1',
          explanation: 'The coefficient of \\( x^2 \\) is negative, so the parabola is inverted. It increases for \\( x < -1 \\) and decreases for \\( x > -1 \\).'
        }
      ],
      finalAnswer: '\\( k = -1 \\)'
    }
  },
  {
    id: 'd4-019',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 19',
    difficulty: 'Foundation',
    questionText: 'Sketch the curve \\( y = x^3 - 3x^2 \\), clearly labelling: (i) the coordinates where the curve crosses the axes, (ii) the coordinates of any stationary points, and (iii) the nature of each stationary point.',
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find \\( y \\)-intercept (set \\( x = 0 \\)).',
          workingLatex: 'y = 0',
          explanation: 'The curve passes through the origin.'
        },
        {
          stepNumber: 2,
          description: 'Find \\( x \\)-intercepts (set \\( y = 0 \\)).',
          workingLatex: 'x^3 - 3x^2 = 0 \\implies x^2(x - 3) = 0 \\implies x = 0 \\text{ (double root) and } x = 3',
          explanation: 'The double root at \\( x = 0 \\) means the curve touches but does not cross the axis there.'
        },
        {
          stepNumber: 3,
          description: 'Find stationary points.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x = 3x(x-2) = 0 \\implies x = 0 \\text{ or } x = 2',
          explanation: 'Set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) and factorise.'
        },
        {
          stepNumber: 4,
          description: 'Find \\( y \\)-coordinates of stationary points.',
          workingLatex: 'x=0: y=0; \\quad x=2: y = 8 - 12 = -4',
          explanation: 'Substitute into the original equation.'
        },
        {
          stepNumber: 5,
          description: 'Classify using second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 6 \\nx=0: -6 < 0 \\Rightarrow \\text{maximum} \\nx=2: 6 > 0 \\Rightarrow \\text{minimum}',
          explanation: 'Evaluate \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\) at each stationary point.'
        },
        {
          stepNumber: 6,
          description: 'Sketch description.',
          workingLatex: '\\text{Cubic with positive leading coefficient; passes through } (0,0),\\, (3,0); \\text{ local max at } (0,0),\\text{ local min at } (2,-4).',
          explanation: 'The curve rises from bottom-left to top-right, with a local maximum at the origin and a local minimum at \\( (2,-4) \\).'
        }
      ],
      finalAnswer: 'Crosses axes at \\( (0, 0) \\) and \\( (3, 0) \\). Local maximum at \\( (0, 0) \\); local minimum at \\( (2, -4) \\).'
    }
  },
  {
    id: 'd4-020',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 20',
    difficulty: 'Foundation',
    questionText: 'For the curve \\( y = x^3 - 4x \\):\n(a) Find the coordinates where the curve crosses the \\( x \\)-axis.\n(b) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) and the coordinates of the stationary points.\n(c) Determine the nature of each stationary point.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Solve \\( y = 0 \\).',
          workingLatex: 'x^3 - 4x = 0 \\implies x(x^2 - 4) = 0 \\implies x(x-2)(x+2) = 0',
          explanation: 'Factorise completely.'
        },
        {
          stepNumber: 2,
          description: 'Roots.',
          workingLatex: 'x = 0, \\; x = 2, \\; x = -2',
          explanation: 'Three \\( x \\)-intercepts: \\( (-2, 0) \\), \\( (0, 0) \\), \\( (2, 0) \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 4,
          description: 'Solve \\( 3x^2 - 4 = 0 \\).',
          workingLatex: 'x^2 = \\tfrac{4}{3} \\implies x = \\pm \\tfrac{2}{\\sqrt{3}} = \\pm \\tfrac{2\\sqrt{3}}{3}',
          explanation: 'Take square roots; rationalise if needed.'
        },
        {
          stepNumber: 5,
          description: 'Find \\( y \\)-coordinates.',
          workingLatex: 'y\\!\\left(\\tfrac{2}{\\sqrt{3}}\\right) = \\tfrac{8}{3\\sqrt{3}} - \\tfrac{8}{\\sqrt{3}} = -\\tfrac{16}{3\\sqrt{3}} = -\\tfrac{16\\sqrt{3}}{9} \\approx -3.08 \\ny\\!\\left(-\\tfrac{2}{\\sqrt{3}}\\right) \\approx 3.08',
          explanation: 'Substitute each \\( x \\) into \\( y = x^3 - 4x \\).'
        },
        {
          stepNumber: 6,
          description: '(c) Second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x \\nx > 0: 6x > 0 \\Rightarrow \\text{minimum} \\nx < 0: 6x < 0 \\Rightarrow \\text{maximum}',
          explanation: 'The positive root gives a minimum; the negative root gives a maximum.'
        }
      ],
      finalAnswer: '(a) \\( (-2,0) \\), \\( (0,0) \\), \\( (2,0) \\) \nb) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4 \\); stationary points at \\( \\left(\\tfrac{2\\sqrt{3}}{3},\\, -\\tfrac{16\\sqrt{3}}{9}\\right) \\) and \\( \\left(-\\tfrac{2\\sqrt{3}}{3},\\, \\tfrac{16\\sqrt{3}}{9}\\right) \\)\nc) Minimum at the positive \\( x \\) point; maximum at the negative \\( x \\) point.'
    }
  },
  {
    id: 'd4-021',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 21',
    difficulty: 'Foundation',
    questionText: 'Sketch the curve \\( y = x^3 + 3x^2 \\), labelling the coordinates of all stationary points and axis intercepts.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find axis intercepts.',
          workingLatex: 'y\\text{-intercept}: x=0 \\Rightarrow y=0 \\nx\\text{-intercepts}: x^2(x+3)=0 \\Rightarrow x=0 \\text{ (double root)},\\; x=-3',
          explanation: 'The double root at \\(0\\) means the curve touches but does not cross the \\(x\\)-axis there.'
        },
        {
          stepNumber: 2,
          description: 'Find stationary points.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 6x = 3x(x+2) = 0 \\implies x=0 \\text{ or } x=-2',
          explanation: 'Set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).'
        },
        {
          stepNumber: 3,
          description: 'Coordinates.',
          workingLatex: 'x=0: y=0; \\quad x=-2: y = -8 + 12 = 4',
          explanation: 'Substitute back into \\( y \\).'
        },
        {
          stepNumber: 4,
          description: 'Classify.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x + 6 \\nx=0: 6>0 \\Rightarrow \\text{minimum} \\nx=-2: -6<0 \\Rightarrow \\text{maximum}',
          explanation: 'Second derivative test.'
        },
        {
          stepNumber: 5,
          description: 'Overall shape.',
          workingLatex: '\\text{Cubic with positive leading coefficient; rises left-to-right.}',
          explanation: 'Crosses \\(x\\)-axis at \\((-3, 0)\\), touches at \\((0, 0)\\); local max at \\((-2, 4)\\), local min at \\((0, 0)\\).'
        }
      ],
      finalAnswer: 'Intercepts: \\( (-3, 0) \\) and \\( (0, 0) \\). Local maximum at \\( (-2, 4) \\); local minimum at \\( (0, 0) \\).'
    }
  },
  {
    id: 'd4-022',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 22',
    difficulty: 'Foundation',
    questionText: 'For the function \\( f(x) = x^3 + 2x^2 - 4x + 1 \\):\n(a) Find \\( f\'(x) \\).\n(b) Find the range of values of \\( x \\) for which \\( f \\) is increasing.\n(c) Find the range of values of \\( x \\) for which \\( f \\) is decreasing.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: "f'(x) = 3x^2 + 4x - 4",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "Factorise \\( f'(x) \\).",
          workingLatex: "f'(x) = (3x - 2)(x + 2)",
          explanation: 'Find factors of \\( 3 \\times (-4) = -12 \\) that add to \\( 4 \\): these are \\( 6 \\) and \\( -2 \\).'
        },
        {
          stepNumber: 3,
          description: "(b) Increasing: \\( f'(x) > 0 \\).",
          workingLatex: '(3x-2)(x+2) > 0 \\implies x < -2 \\text{ or } x > \\tfrac{2}{3}',
          explanation: 'Both factors positive or both negative.'
        },
        {
          stepNumber: 4,
          description: "(c) Decreasing: \\( f'(x) < 0 \\).",
          workingLatex: '-2 < x < \\tfrac{2}{3}',
          explanation: 'Between the roots of \\( f\'(x) = 0 \\), the product is negative.'
        }
      ],
      finalAnswer: "(a) \\( f'(x) = (3x-2)(x+2) \\) \nb) Increasing: \\( x < -2 \\) or \\( x > \\tfrac{2}{3} \\)\nc) Decreasing: \\( -2 < x < \\tfrac{2}{3} \\)"
    }
  },
  {
    id: 'd4-023',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 23',
    difficulty: 'Foundation',
    questionText: 'A function \\( f \\) satisfies \\( f(2) = -3 \\), \\( f\'(2) = 0 \\) and \\( f\'\'(2) = 5 \\).\n(a) Write down the coordinates of a stationary point of \\( f \\).\n(b) Determine its nature, giving a reason.',
    marks: 3,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Identify the stationary point.',
          workingLatex: "f'(2) = 0",
          explanation: 'A stationary point occurs where the derivative equals zero. We are told \\( f\'(2) = 0 \\), so there is a stationary point at \\( x = 2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Write down the coordinates.',
          workingLatex: '\\text{Stationary point at } (2,\\, -3)',
          explanation: 'The \\( y \\)-coordinate comes from \\( f(2) = -3 \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Apply the second derivative test.',
          workingLatex: "f''(2) = 5 > 0 \\Rightarrow \\text{local minimum}",
          explanation: 'A positive second derivative at a stationary point means the curve is concave up there, confirming a local minimum.'
        }
      ],
      finalAnswer: '(a) \\( (2, -3) \\) \nb) Local minimum, since \\( f\'\'(2) = 5 > 0 \\).'
    }
  },
  {
    id: 'd4-024',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 24',
    difficulty: 'Foundation',
    questionText: 'A function is given by \\( y = x^3 + ax^2 + bx + 5 \\). The curve has a stationary point at \\( (1, 4) \\). Find the values of \\( a \\) and \\( b \\).',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Since \\( (1, 4) \\) lies on the curve, substitute \\( x = 1 \\), \\( y = 4 \\).',
          workingLatex: '1 + a + b + 5 = 4 \\implies a + b = -2 \\quad \\cdots (1)',
          explanation: 'This gives one equation in \\( a \\) and \\( b \\).'
        },
        {
          stepNumber: 2,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2ax + b',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 3,
          description: 'At a stationary point \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\) when \\( x = 1 \\).',
          workingLatex: '3 + 2a + b = 0 \\implies 2a + b = -3 \\quad \\cdots (2)',
          explanation: 'This gives a second equation.'
        },
        {
          stepNumber: 4,
          description: 'Solve simultaneously: subtract (1) from (2).',
          workingLatex: '(2a + b) - (a + b) = -3 - (-2) \\implies a = -1',
          explanation: 'Eliminate \\( b \\).'
        },
        {
          stepNumber: 5,
          description: 'Back-substitute into (1).',
          workingLatex: '-1 + b = -2 \\implies b = -1',
          explanation: 'Solve for \\( b \\).'
        }
      ],
      finalAnswer: '\\( a = -1,\\; b = -1 \\)'
    }
  },
  {
    id: 'd4-025',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 25',
    difficulty: 'Foundation',
    questionText: 'For the curve \\( y = 3x^2 - x^3 \\):\n(a) Find the coordinates of both stationary points.\n(b) Find the range of values of \\( x \\) for which the curve is increasing.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - 3x^2 = 3x(2 - x)',
          explanation: 'Factorise the derivative.'
        },
        {
          stepNumber: 2,
          description: 'Stationary points.',
          workingLatex: '3x(2-x) = 0 \\implies x = 0 \\text{ or } x = 2',
          explanation: 'Set equal to zero.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\)-coordinates.',
          workingLatex: 'y(0) = 0; \\quad y(2) = 12 - 8 = 4',
          explanation: 'Substitute into the original.'
        },
        {
          stepNumber: 4,
          description: '(b) Increasing when \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} > 0 \\).',
          workingLatex: '3x(2-x) > 0 \\implies 0 < x < 2',
          explanation: 'The product is positive when both factors have the same sign. \\( 3x > 0 \\) and \\( 2-x > 0 \\) when \\( 0 < x < 2 \\).'
        }
      ],
      finalAnswer: '(a) \\( (0, 0) \\) and \\( (2, 4) \\) \nb) \\( 0 < x < 2 \\)'
    }
  },
  {
    id: 'd4-026',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 26',
    difficulty: 'Foundation',
    questionText: 'Given \\( f(x) = x^2 + \\dfrac{16}{x} \\) for \\( x > 0 \\), find the value of \\( x \\) at which \\( f \\) has a stationary point and determine its nature.',
    marks: 5,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite \\( \\dfrac{16}{x} = 16x^{-1} \\).',
          workingLatex: 'f(x) = x^2 + 16x^{-1}',
          explanation: 'Convert to index notation.'
        },
        {
          stepNumber: 2,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 2x - 16x^{-2} = 2x - \\frac{16}{x^2}",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 3,
          description: "Solve \\( f'(x) = 0 \\).",
          workingLatex: '2x = \\frac{16}{x^2} \\implies 2x^3 = 16 \\implies x^3 = 8 \\implies x = 2',
          explanation: 'Multiply through by \\( x^2 \\) and solve.'
        },
        {
          stepNumber: 4,
          description: "Second derivative.",
          workingLatex: "f''(x) = 2 + 32x^{-3} = 2 + \\frac{32}{x^3}",
          explanation: 'Differentiate \\( f\'(x) \\).'
        },
        {
          stepNumber: 5,
          description: "Evaluate at \\( x = 2 \\).",
          workingLatex: "f''(2) = 2 + \\frac{32}{8} = 2 + 4 = 6 > 0 \\Rightarrow \\text{minimum}",
          explanation: 'Positive second derivative confirms a minimum.'
        }
      ],
      finalAnswer: 'Local minimum at \\( x = 2 \\)'
    }
  },
  {
    id: 'd4-027',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 27',
    difficulty: 'Foundation',
    questionText: 'Find the stationary points on \\( y = 5x^4 - 4x^5 \\) and determine their nature.',
    marks: 6,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 20x^3 - 20x^4 = 20x^3(1 - x)',
          explanation: 'Power rule, then factorise.'
        },
        {
          stepNumber: 2,
          description: 'Solve \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).',
          workingLatex: '20x^3(1-x) = 0 \\implies x = 0 \\text{ or } x = 1',
          explanation: 'Set each factor to zero.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\)-coordinates.',
          workingLatex: 'y(0) = 0; \\quad y(1) = 5 - 4 = 1',
          explanation: 'Substitute into the original.'
        },
        {
          stepNumber: 4,
          description: 'Second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 60x^2 - 80x^3',
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 5,
          description: 'Classify.',
          workingLatex: 'x=0: 0 - 0 = 0 \\Rightarrow \\text{inconclusive — check sign of } \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\text{ either side} \\nx=1: 60 - 80 = -20 < 0 \\Rightarrow \\text{maximum}',
          explanation: 'At \\( x = 0 \\): for \\( x < 0 \\), \\( 20x^3 < 0 \\) and \\( (1-x) > 0 \\), so \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0 \\). For small \\( x > 0 \\), \\( 20x^3 > 0 \\) and \\( (1-x) > 0 \\), so \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} > 0 \\). Gradient changes from negative to positive → minimum at \\( x = 0 \\).'
        }
      ],
      finalAnswer: 'Local minimum at \\( (0, 0) \\); local maximum at \\( (1, 1) \\)'
    }
  },
  {
    id: 'd4-028',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 28',
    difficulty: 'Foundation',
    questionText: 'Find the range of values of \\( x \\) for which \\( y = x^3 - 6x^2 + 9x + 4 \\) is increasing.',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9',
          explanation: 'Apply the power rule to each term of \\( y = x^3 - 6x^2 + 9x + 4 \\).'
        },
        {
          stepNumber: 2,
          description: 'Set up the increasing condition.',
          workingLatex: '3x^2 - 12x + 9 > 0',
          explanation: 'A function is increasing where its derivative is positive.'
        },
        {
          stepNumber: 3,
          description: 'Divide by 3 and factorise.',
          workingLatex: 'x^2 - 4x + 3 > 0 \\implies (x - 1)(x - 3) > 0',
          explanation: 'Divide both sides by 3, then factorise the quadratic.'
        },
        {
          stepNumber: 4,
          description: 'Solve the quadratic inequality.',
          workingLatex: 'x < 1 \\text{ or } x > 3',
          explanation: 'The product of two factors is positive when both are positive or both are negative, which occurs outside the roots \\( x = 1 \\) and \\( x = 3 \\).'
        }
      ],
      finalAnswer: '\\( x < 1 \\) or \\( x > 3 \\)'
    }
  },
  {
    id: 'd4-029',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 29',
    difficulty: 'Foundation',
    questionText: 'A curve has equation \\( y = x^3 - 3x + 2 \\).\n(a) Find the \\( x \\)-intercepts.\n(b) Find and classify the stationary points.\n(c) Describe the shape of a sketch of the curve.',
    marks: 7,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Set the equation to zero.',
          workingLatex: 'x^3 - 3x + 2 = 0',
          explanation: 'To find the x-intercepts, set y equal to zero.'
        },
        {
          stepNumber: 2,
          description: 'Try x = 1 as a root.',
          workingLatex: '1 - 3 + 2 = 0 \\checkmark',
          explanation: 'Substituting x = 1 gives zero, so (x - 1) is a factor.'
        },
        {
          stepNumber: 3,
          description: 'Factorise out (x - 1).',
          workingLatex: 'x^3 - 3x + 2 = (x - 1)(x^2 + x - 2)',
          explanation: 'Divide the cubic by (x - 1) using algebraic division or inspection to obtain the quadratic factor.'
        },
        {
          stepNumber: 4,
          description: 'Factorise the quadratic.',
          workingLatex: 'x^2 + x - 2 = (x - 1)(x + 2)',
          explanation: 'Find two numbers that multiply to -2 and add to 1: these are -1 and 2.'
        },
        {
          stepNumber: 5,
          description: 'Write the full factorisation.',
          workingLatex: 'x^3 - 3x + 2 = (x - 1)^2(x + 2)',
          explanation: 'The factor (x - 1) appears twice, giving a repeated root.'
        },
        {
          stepNumber: 6,
          description: 'State the x-intercepts.',
          workingLatex: 'x = 1 \\text{ (double root)}, \\; x = -2',
          explanation: 'The double root at x = 1 means the curve touches the x-axis there rather than crossing it.'
        },
        {
          stepNumber: 7,
          description: '(b) Differentiate the curve.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3',
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 8,
          description: 'Factorise the derivative.',
          workingLatex: '3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)',
          explanation: 'Factor out 3 and recognise the difference of two squares.'
        },
        {
          stepNumber: 9,
          description: 'Set the derivative to zero.',
          workingLatex: '3(x - 1)(x + 1) = 0 \\implies x = 1 \\text{ or } x = -1',
          explanation: 'The stationary points occur at x = 1 and x = -1.'
        },
        {
          stepNumber: 10,
          description: 'Find y when x = 1.',
          workingLatex: 'y = 1 - 3 + 2 = 0',
          explanation: 'Substitute x = 1 into the original equation.'
        },
        {
          stepNumber: 11,
          description: 'Find y when x = -1.',
          workingLatex: 'y = -1 + 3 + 2 = 4',
          explanation: 'Substitute x = -1 into the original equation.'
        },
        {
          stepNumber: 12,
          description: 'Find the second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x',
          explanation: 'Differentiate the first derivative to prepare for the second derivative test.'
        },
        {
          stepNumber: 13,
          description: 'Classify x = 1.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=1} = 6 > 0 \\Rightarrow \\text{minimum}',
          explanation: 'The second derivative is positive at x = 1, so there is a local minimum at (1, 0).'
        },
        {
          stepNumber: 14,
          description: 'Classify x = -1.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=-1} = -6 < 0 \\Rightarrow \\text{maximum}',
          explanation: 'The second derivative is negative at x = -1, so there is a local maximum at (-1, 4).'
        },
        {
          stepNumber: 15,
          description: '(c) Describe the sketch.',
          workingLatex: '\\text{Positive cubic; crosses at }(-2,0)\\text{; touches at }(1,0)\\text{; local max at }(-1,4)\\text{; local min at }(1,0)',
          explanation: 'The curve enters from the bottom-left, rises to a local maximum at (-1, 4), dips to touch the x-axis at (1, 0), then rises to the top-right.'
        }
      ],
      finalAnswer: '(a) \\( x = -2 \\) and \\( x = 1 \\) (double root) \nb) Local maximum at \\( (-1, 4) \\); local minimum at \\( (1, 0) \\)\nc) Positive cubic; touches \\( x \\)-axis at \\( (1,0) \\)'
    }
  },
  {
    id: 'd4-030',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 30',
    difficulty: 'Foundation',
    questionText: 'The function \\( y = 5 - 3x - ax^2 \\) is a decreasing function for all real values of \\( x \\). Find the range of possible values of \\( a \\).',
    marks: 4,
    examStyle: false,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -3 - 2ax',
          explanation: 'Apply the power rule to each term of the function.'
        },
        {
          stepNumber: 2,
          description: 'State the decreasing condition.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} \\leq 0 \\text{ for all } x',
          explanation: 'A function is decreasing when its derivative is less than or equal to zero for every value of x.'
        },
        {
          stepNumber: 3,
          description: 'Write the inequality.',
          workingLatex: '-3 - 2ax \\leq 0 \\text{ for all } x',
          explanation: 'Substitute the derivative into the decreasing condition.'
        },
        {
          stepNumber: 4,
          description: 'Identify the derivative as linear.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -2a \\cdot x + (-3)',
          explanation: 'The derivative is a linear function of x with gradient -2a and y-intercept -3.'
        },
        {
          stepNumber: 5,
          description: 'Require the coefficient of x to be zero.',
          workingLatex: '-2a = 0 \\implies a = 0',
          explanation: 'If a is not zero, the linear derivative will be positive for some values of x, so the only way it can be non-positive everywhere is if it is a constant.'
        },
        {
          stepNumber: 6,
          description: 'Check the constant is non-positive.',
          workingLatex: 'a = 0: \\quad \\frac{\\mathrm{d}y}{\\mathrm{d}x} = -3 \\leq 0 \\checkmark',
          explanation: 'With a = 0, the derivative is -3 for all x, which is always negative, confirming the function is decreasing.'
        }
      ],
      finalAnswer: '\\( a = 0 \\) (for the function to be strictly decreasing for all real \\( x \\))'
    }
  },
  {
    id: 'd4-031',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 31',
    difficulty: 'Foundation',
    questionText: 'The curve \\( C \\) has equation \\( y = f(x) \\) where \\( f(x) = x^3 - 6x^2 + 9x - 2 \\).\n(a) Find \\( f\'(x) \\).\n(b) Find the coordinates of the stationary points of \\( C \\).\n(c) Determine the nature of each stationary point.\n(d) Find the range of values of \\( x \\) for which \\( f(x) \\) is increasing.',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate f(x).',
          workingLatex: "f'(x) = 3x^2 - 12x + 9",
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: '(b) Set the derivative equal to zero.',
          workingLatex: "3x^2 - 12x + 9 = 0",
          explanation: 'Stationary points occur where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Divide through by 3.',
          workingLatex: 'x^2 - 4x + 3 = 0',
          explanation: 'Simplify by dividing every term by the common factor of 3.'
        },
        {
          stepNumber: 4,
          description: 'Factorise and solve.',
          workingLatex: '(x - 1)(x - 3) = 0 \\implies x = 1 \\text{ or } x = 3',
          explanation: 'Find two numbers that multiply to 3 and add to -4: these are -1 and -3.'
        },
        {
          stepNumber: 5,
          description: 'Find f(1).',
          workingLatex: 'f(1) = 1 - 6 + 9 - 2 = 2',
          explanation: 'Substitute x = 1 into the original function to find the y-coordinate.'
        },
        {
          stepNumber: 6,
          description: 'Find f(3).',
          workingLatex: 'f(3) = 27 - 54 + 27 - 2 = -2',
          explanation: 'Substitute x = 3 into the original function to find the y-coordinate.'
        },
        {
          stepNumber: 7,
          description: '(c) Find the second derivative.',
          workingLatex: "f''(x) = 6x - 12",
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 8,
          description: 'Classify x = 1.',
          workingLatex: "f''(1) = 6 - 12 = -6 < 0 \\Rightarrow \\text{maximum}",
          explanation: 'The second derivative is negative at x = 1, so (1, 2) is a local maximum.'
        },
        {
          stepNumber: 9,
          description: 'Classify x = 3.',
          workingLatex: "f''(3) = 18 - 12 = 6 > 0 \\Rightarrow \\text{minimum}",
          explanation: 'The second derivative is positive at x = 3, so (3, -2) is a local minimum.'
        },
        {
          stepNumber: 10,
          description: '(d) State the increasing condition.',
          workingLatex: "f'(x) > 0",
          explanation: 'A function is increasing where its derivative is positive.'
        },
        {
          stepNumber: 11,
          description: 'Solve the inequality.',
          workingLatex: '(x - 1)(x - 3) > 0 \\implies x < 1 \\text{ or } x > 3',
          explanation: 'The product of two factors is positive outside the roots, so the function is increasing when x is less than 1 or greater than 3.'
        }
      ],
      finalAnswer: "(a) \\( f'(x) = 3x^2-12x+9 \\) \nb) \\( (1, 2) \\) and \\( (3, -2) \\)\nc) Local maximum at \\( (1, 2) \\); local minimum at \\( (3, -2) \\)\nd) \\( x < 1 \\) or \\( x > 3 \\)"
    }
  },
  {
    id: 'd4-032',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 32',
    difficulty: 'Foundation',
    questionText: 'Sketch the graph of \\( y = x^3 + 6x^2 + 9x \\), clearly labelling all axis intercepts and stationary points with their coordinates.',
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find the y-intercept.',
          workingLatex: 'x = 0: \\quad y = 0',
          explanation: 'Substitute x = 0 into the equation to find where the curve crosses the y-axis.'
        },
        {
          stepNumber: 2,
          description: 'Factorise for x-intercepts.',
          workingLatex: 'x^3 + 6x^2 + 9x = x(x^2 + 6x + 9)',
          explanation: 'Factor out x from every term.'
        },
        {
          stepNumber: 3,
          description: 'Complete the factorisation.',
          workingLatex: 'x(x + 3)^2 = 0',
          explanation: 'Recognise that the quadratic factor is a perfect square.'
        },
        {
          stepNumber: 4,
          description: 'State the x-intercepts.',
          workingLatex: 'x = 0 \\text{ or } x = -3',
          explanation: 'The double root at x = -3 means the curve touches the x-axis there rather than crossing it.'
        },
        {
          stepNumber: 5,
          description: 'Differentiate the function.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 12x + 9',
          explanation: 'Apply the power rule to each term.'
        },
        {
          stepNumber: 6,
          description: 'Factorise the derivative.',
          workingLatex: '3x^2 + 12x + 9 = 3(x^2 + 4x + 3) = 3(x + 1)(x + 3)',
          explanation: 'Factor out 3 and then factorise the quadratic.'
        },
        {
          stepNumber: 7,
          description: 'Set the derivative to zero.',
          workingLatex: '3(x + 1)(x + 3) = 0 \\implies x = -1 \\text{ or } x = -3',
          explanation: 'The stationary points occur at x = -1 and x = -3.'
        },
        {
          stepNumber: 8,
          description: 'Find y when x = -1.',
          workingLatex: 'y = -1 + 6 - 9 = -4',
          explanation: 'Substitute x = -1 into the original equation.'
        },
        {
          stepNumber: 9,
          description: 'Find y when x = -3.',
          workingLatex: 'y = -27 + 54 - 27 = 0',
          explanation: 'Substitute x = -3 into the original equation.'
        },
        {
          stepNumber: 10,
          description: 'Find the second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x + 12',
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 11,
          description: 'Classify x = -1.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=-1} = -6 + 12 = 6 > 0 \\Rightarrow \\text{minimum}',
          explanation: 'The second derivative is positive at x = -1, so (-1, -4) is a local minimum.'
        },
        {
          stepNumber: 12,
          description: 'Classify x = -3.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=-3} = -18 + 12 = -6 < 0 \\Rightarrow \\text{maximum}',
          explanation: 'The second derivative is negative at x = -3, so (-3, 0) is a local maximum.'
        },
        {
          stepNumber: 13,
          description: 'Describe the overall shape.',
          workingLatex: '\\text{Positive cubic; intercepts at }(0,0)\\text{ and touches }(-3,0)\\text{; max at }(-3,0)\\text{; min at }(-1,-4)',
          explanation: 'The curve rises from the bottom-left, passes through a local maximum at (-3, 0), dips to a local minimum at (-1, -4), then rises to the top-right, passing through the origin.'
        }
      ],
      finalAnswer: 'Axis intercepts: \\( (0,0) \\) and \\( (-3, 0) \\) (touch). Local maximum at \\( (-3, 0) \\); local minimum at \\( (-1, -4) \\).'
    }
  },
  {
    id: 'd4-033',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 33',
    difficulty: 'Foundation',
    questionText: 'The curve \\( C \\) has equation \\( y = x^4 - 4x^3 + 4 \\).\n(a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) and \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} \\).\n(b) Find the coordinates of all stationary points and determine their nature.\n(c) Find the range of values of \\( x \\) for which \\( C \\) is decreasing.',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Find the first derivative.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x^2',
          explanation: 'Apply the power rule to each term of the quartic.'
        },
        {
          stepNumber: 2,
          description: 'Find the second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 24x',
          explanation: 'Differentiate the first derivative using the power rule.'
        },
        {
          stepNumber: 3,
          description: '(b) Set the first derivative to zero.',
          workingLatex: '4x^3 - 12x^2 = 0',
          explanation: 'Stationary points occur where the gradient is zero.'
        },
        {
          stepNumber: 4,
          description: 'Factorise.',
          workingLatex: '4x^2(x - 3) = 0',
          explanation: 'Factor out the common factor of 4x squared.'
        },
        {
          stepNumber: 5,
          description: 'Solve for x.',
          workingLatex: 'x = 0 \\text{ or } x = 3',
          explanation: 'Set each factor equal to zero to find the x-coordinates of the stationary points.'
        },
        {
          stepNumber: 6,
          description: 'Find y when x = 0.',
          workingLatex: 'y(0) = 0 - 0 + 4 = 4',
          explanation: 'Substitute x = 0 into the original equation.'
        },
        {
          stepNumber: 7,
          description: 'Find y when x = 3.',
          workingLatex: 'y(3) = 81 - 108 + 4 = -23',
          explanation: 'Substitute x = 3 into the original equation.'
        },
        {
          stepNumber: 8,
          description: 'Test x = 0 with second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=0} = 0 - 0 = 0',
          explanation: 'The second derivative test is inconclusive at x = 0, so we must check the sign of the first derivative either side.'
        },
        {
          stepNumber: 9,
          description: 'Check gradient either side of x = 0.',
          workingLatex: 'x = -1: \\; 4(1)(-4) = -16 < 0 \\nx = 0.5: \\; 4(0.25)(-2.5) = -2.5 < 0',
          explanation: 'The gradient is negative on both sides of x = 0, so the gradient does not change sign and (0, 4) is a point of inflection.'
        },
        {
          stepNumber: 10,
          description: 'Test x = 3 with second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=3} = 108 - 72 = 36 > 0 \\Rightarrow \\text{minimum}',
          explanation: 'The second derivative is positive at x = 3, so (3, -23) is a local minimum.'
        },
        {
          stepNumber: 11,
          description: '(c) State the decreasing condition.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0',
          explanation: 'The curve is decreasing where its gradient is negative.'
        },
        {
          stepNumber: 12,
          description: 'Analyse the sign of the derivative.',
          workingLatex: '4x^2(x - 3) < 0',
          explanation: 'Since 4x squared is always non-negative, the sign of the derivative depends on (x - 3). The product is negative when x - 3 is negative and x is not zero.'
        },
        {
          stepNumber: 13,
          description: 'State the decreasing interval.',
          workingLatex: 'x < 3, \\; x \\neq 0',
          explanation: 'The curve is decreasing for all x less than 3, except at x = 0 where the gradient is momentarily zero.'
        }
      ],
      finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3-12x^2 \\), \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2-24x \\) \nb) Point of inflection at \\( (0,4) \\); local minimum at \\( (3,-23) \\)\nc) Decreasing for \\( x < 3 \\), \\( x \\neq 0 \\)'
    }
  },
  {
    id: 'd4-034',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 34',
    difficulty: 'Foundation',
    questionText: 'The curve \\( y = x^3 + ax^2 + bx + c \\) has a stationary point at \\( (3, 27) \\) and \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 0 \\) at \\( x = 3 \\). Given also that the curve passes through the origin, find \\( a \\), \\( b \\), and \\( c \\).',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute (0, 0) to find c.',
          workingLatex: 'x = 0,\\; y = 0: \\quad 0 + 0 + 0 + c = 0 \\implies c = 0',
          explanation: 'The curve passes through the origin, so substitute x = 0 and y = 0.'
        },
        {
          stepNumber: 2,
          description: 'Differentiate the curve.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2ax + b',
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 3,
          description: 'Use the stationary point condition at x = 3.',
          workingLatex: '27 + 6a + b = 0 \\quad \\cdots (1)',
          explanation: 'At a stationary point the gradient is zero, so substitute x = 3 into the derivative.'
        },
        {
          stepNumber: 4,
          description: 'Find the second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x + 2a',
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 5,
          description: 'Use the second derivative condition at x = 3.',
          workingLatex: '18 + 2a = 0 \\implies a = -9',
          explanation: 'Substitute x = 3 and set the second derivative equal to zero, then solve for a.'
        },
        {
          stepNumber: 6,
          description: 'Find b from equation (1).',
          workingLatex: '27 + 6(-9) + b = 0 \\implies 27 - 54 + b = 0 \\implies b = 27',
          explanation: 'Substitute a = -9 into equation (1) and solve for b.'
        },
        {
          stepNumber: 7,
          description: 'Verify with the point (3, 27).',
          workingLatex: 'y(3) = 27 + (-9)(9) + 27(3) + 0 = 27 - 81 + 81 = 27 \\quad \\checkmark',
          explanation: 'Substituting x = 3 into the curve confirms y = 27, consistent with the stationary point.'
        }
      ],
      finalAnswer: '\\( a = -9,\\; b = 27,\\; c = 0 \\)'
    }
  },
  {
    id: 'd4-035',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 35',
    difficulty: 'Foundation',
    questionText: 'A manufacturer models the cost \\( C \\) (£ thousands) of producing \\( x \\) hundred units as \\( C(x) = x^3 - 9x^2 + 24x + 10 \\) for \\( 0 \\leq x \\leq 6 \\).\n(a) Find \\( C\'(x) \\).\n(b) Find the stationary points of \\( C \\) and classify them.\n(c) State the values of \\( x \\) for which \\( C \\) is decreasing, and explain what this means in context.\n(d) Find the minimum cost in the given domain.',
    marks: 10,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate C(x).',
          workingLatex: "C'(x) = 3x^2 - 18x + 24",
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: '(b) Set the derivative equal to zero.',
          workingLatex: "3x^2 - 18x + 24 = 0",
          explanation: 'Stationary points occur where the gradient is zero.'
        },
        {
          stepNumber: 3,
          description: 'Divide through by 3.',
          workingLatex: 'x^2 - 6x + 8 = 0',
          explanation: 'Simplify by dividing every term by the common factor of 3.'
        },
        {
          stepNumber: 4,
          description: 'Factorise and solve.',
          workingLatex: '(x - 2)(x - 4) = 0 \\implies x = 2 \\text{ or } x = 4',
          explanation: 'Find two numbers that multiply to 8 and add to -6: these are -2 and -4.'
        },
        {
          stepNumber: 5,
          description: 'Find C(2).',
          workingLatex: 'C(2) = 8 - 36 + 48 + 10 = 30',
          explanation: 'Substitute x = 2 into C(x) to find the y-coordinate.'
        },
        {
          stepNumber: 6,
          description: 'Find C(4).',
          workingLatex: 'C(4) = 64 - 144 + 96 + 10 = 26',
          explanation: 'Substitute x = 4 into C(x) to find the y-coordinate.'
        },
        {
          stepNumber: 7,
          description: 'Find the second derivative.',
          workingLatex: "C''(x) = 6x - 18",
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 8,
          description: 'Classify x = 2.',
          workingLatex: "C''(2) = 12 - 18 = -6 < 0 \\Rightarrow \\text{local maximum}",
          explanation: 'The second derivative is negative at x = 2, so (2, 30) is a local maximum.'
        },
        {
          stepNumber: 9,
          description: 'Classify x = 4.',
          workingLatex: "C''(4) = 24 - 18 = 6 > 0 \\Rightarrow \\text{local minimum}",
          explanation: 'The second derivative is positive at x = 4, so (4, 26) is a local minimum.'
        },
        {
          stepNumber: 10,
          description: '(c) State the decreasing condition.',
          workingLatex: "C'(x) < 0",
          explanation: 'The cost function is decreasing where its derivative is negative.'
        },
        {
          stepNumber: 11,
          description: 'Solve the inequality.',
          workingLatex: '(x - 2)(x - 4) < 0 \\implies 2 < x < 4',
          explanation: 'The product of two factors is negative between the roots. In context, costs are falling between producing 200 and 400 units.'
        },
        {
          stepNumber: 12,
          description: '(d) Evaluate at the endpoints.',
          workingLatex: 'C(0) = 10; \\quad C(6) = 216 - 324 + 144 + 10 = 46',
          explanation: 'On a closed interval, the minimum may occur at an endpoint rather than at a stationary point.'
        },
        {
          stepNumber: 13,
          description: 'Compare all critical values.',
          workingLatex: '\\min\\{C(0),\\, C(4),\\, C(6)\\} = \\min\\{10,\\, 26,\\, 46\\} = 10',
          explanation: 'The minimum cost is 10 (i.e. 10 thousand pounds), occurring at x = 0.'
        }
      ],
      finalAnswer: "(a) \\( C'(x) = 3x^2-18x+24 \\) \nb) Local max at \\( (2, 30) \\); local min at \\( (4, 26) \\)\nc) Decreasing for \\( 2 < x < 4 \\) — costs fall as production rises from 200 to 400 units\nd) Minimum cost is £10\\,000 (at \\( x = 0 \\))"
    }
  },

  // TYPE H (36–42): Stationary points classified with the 1st-derivative sign test
  {
    id: 'd4-036',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 36',
    difficulty: 'Standard',
    questionText: 'Find the stationary points of \\( y = x^3 - 3x^2 - 9x + 1 \\) and use the first derivative sign test to classify them.',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate and factorise the derivative.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)",
          explanation: 'Apply the power rule, factor out 3, then factorise the quadratic.'
        },
        {
          stepNumber: 2,
          description: 'Solve for the stationary points.',
          workingLatex: '3(x - 3)(x + 1) = 0 \\implies x = -1 \\text{ or } x = 3',
          explanation: 'Set each factor equal to zero to find two stationary points.'
        },
        {
          stepNumber: 3,
          description: 'Find the y-coordinates by substituting.',
          workingLatex: 'y(-1) = -1 - 3 + 9 + 1 = 6 \\\\ y(3) = 27 - 27 - 27 + 1 = -26',
          explanation: 'Substitute each x-value into the original equation to find the corresponding y-values.'
        },
        {
          stepNumber: 4,
          description: 'Apply the first derivative sign test.',
          workingLatex: "y'(-2) = 15 > 0, \\; y'(0) = -9 < 0 \\; \\Rightarrow \\; \\text{max at } x = -1 \\\\ y'(0) = -9 < 0, \\; y'(4) = 15 > 0 \\; \\Rightarrow \\; \\text{min at } x = 3",
          explanation: 'The gradient goes from positive to negative through x = -1, giving a maximum. It goes from negative to positive through x = 3, giving a minimum.'
        }
      ],
      finalAnswer: "Maximum at \\( (-1, 6) \\); minimum at \\( (3, -26) \\)."
    }
  },
  {
    id: 'd4-037',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 37',
    difficulty: 'Standard',
    questionText: 'Find the stationary points of \\( y = x^3 + 3x^2 - 24x + 5 \\) and classify them using the first-derivative sign test.',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 6x - 24",
          explanation: 'Apply the power rule to each term of the cubic.'
        },
        {
          stepNumber: 2,
          description: 'Factorise and solve for stationary points.',
          workingLatex: '3(x^2 + 2x - 8) = 0 \\implies (x + 4)(x - 2) = 0',
          explanation: 'Factor out 3, then factorise the quadratic to find stationary points at x = -4 and x = 2.'
        },
        {
          stepNumber: 3,
          description: 'Find the y-coordinates by substituting.',
          workingLatex: 'y(-4) = -64 + 48 + 96 + 5 = 85 \\\\ y(2) = 8 + 12 - 48 + 5 = -23',
          explanation: 'Substitute each x-value into the original equation to find the corresponding y-values.'
        },
        {
          stepNumber: 4,
          description: 'Apply the first derivative sign test.',
          workingLatex: "y'(-5) = 21 > 0,\\; y'(0) = -24 < 0 \\Rightarrow \\text{max at } x = -4 \\\\ y'(0) = -24 < 0,\\; y'(3) = 21 > 0 \\Rightarrow \\text{min at } x = 2",
          explanation: 'The gradient changes from positive to negative through x = -4, giving a maximum. It changes from negative to positive through x = 2, giving a minimum.'
        }
      ],
      finalAnswer: "Maximum at \\( (-4, 85) \\); minimum at \\( (2, -23) \\)."
    }
  },
  {
    id: 'd4-038',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 38',
    difficulty: 'Standard',
    questionText: 'Find the stationary points of \\( y = 2x^3 - 3x^2 + 1 \\) and determine their nature.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate and factorise.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 6x = 6x(x - 1)",
          explanation: 'Apply the power rule, then factor out 6x.'
        },
        {
          stepNumber: 2,
          description: 'Solve for stationary points.',
          workingLatex: '6x(x - 1) = 0 \\implies x = 0 \\text{ or } x = 1',
          explanation: 'Set each factor equal to zero.'
        },
        {
          stepNumber: 3,
          description: 'Find the y-coordinates.',
          workingLatex: 'y(0) = 1, \\quad y(1) = 2 - 3 + 1 = 0',
          explanation: 'Substitute each x-value into the original equation.'
        },
        {
          stepNumber: 4,
          description: 'Find the second derivative.',
          workingLatex: "\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x - 6",
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 5,
          description: 'Classify each stationary point.',
          workingLatex: "\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=0} = -6 < 0 \\;(\\text{max}) \\qquad \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=1} = 6 > 0 \\;(\\text{min})",
          explanation: 'Negative second derivative at x = 0 gives a maximum at (0, 1). Positive second derivative at x = 1 gives a minimum at (1, 0).'
        }
      ],
      finalAnswer: "Maximum at \\( (0, 1) \\); minimum at \\( (1, 0) \\)."
    }
  },
  {
    id: 'd4-039',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 39',
    difficulty: 'Standard',
    questionText: 'Find and classify the stationary points of \\( y = 3x^4 - 8x^3 + 5 \\).',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate and factorise the derivative.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^3 - 24x^2 = 12x^2(x - 2)",
          explanation: 'Apply the power rule, then factor out 12x squared.'
        },
        {
          stepNumber: 2,
          description: 'Solve for the stationary points.',
          workingLatex: '12x^2(x - 2) = 0 \\implies x = 0 \\text{ (double root) or } x = 2',
          explanation: 'Set each factor equal to zero to find two candidate stationary points.'
        },
        {
          stepNumber: 3,
          description: 'Find the y-coordinates by substituting.',
          workingLatex: 'y(0) = 5, \\quad y(2) = 48 - 64 + 5 = -11',
          explanation: 'Substitute each x-value into the original equation to find the corresponding y-values.'
        },
        {
          stepNumber: 4,
          description: 'Test gradient either side of x = 0.',
          workingLatex: "y'(-1) = -12 - 24 = -36 < 0, \\quad y'(0.5) = 1.5 - 6 = -4.5 < 0",
          explanation: 'The gradient is negative on both sides of x = 0, so there is no sign change and (0, 5) is a stationary point of inflection.'
        },
        {
          stepNumber: 5,
          description: 'Test gradient either side of x = 2.',
          workingLatex: "y'(1) = 12 - 24 = -12 < 0, \\quad y'(3) = 324 - 216 = 108 > 0",
          explanation: 'The gradient changes from negative to positive through x = 2, so (2, -11) is a local minimum.'
        }
      ],
      finalAnswer: "Stationary point of inflection at \\( (0, 5) \\); minimum at \\( (2, -11) \\)."
    }
  },
  {
    id: 'd4-040',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 40',
    difficulty: 'Standard',
    questionText: 'Find the stationary points of \\( f(x) = x^3 - 6x^2 + 12x - 3 \\) and determine their nature.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate and write as a perfect square.',
          workingLatex: "f'(x) = 3x^2 - 12x + 12 = 3(x - 2)^2",
          explanation: 'Apply the power rule, then factor out 3 and complete the square to reveal a repeated factor.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '3(x - 2)^2 = 0 \\implies x = 2',
          explanation: 'A perfect square equals zero only at x = 2, giving a single repeated root.'
        },
        {
          stepNumber: 3,
          description: 'Find the y-coordinate at x = 2.',
          workingLatex: 'f(2) = 8 - 24 + 24 - 3 = 5',
          explanation: 'Substitute x = 2 into the original function to find the y-coordinate of the stationary point.'
        },
        {
          stepNumber: 4,
          description: 'Check gradient sign either side of x = 2.',
          workingLatex: "f'(1) = 3(1 - 2)^2 = 3 > 0, \\quad f'(3) = 3(3 - 2)^2 = 3 > 0",
          explanation: 'The gradient is positive on both sides of x = 2, so there is no sign change. This means (2, 5) is a stationary point of inflection, not a turning point.'
        }
      ],
      finalAnswer: "Stationary point of inflection at \\( (2, 5) \\)."
    }
  },
  {
    id: 'd4-041',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 41',
    difficulty: 'Standard',
    questionText: 'Find the stationary points of \\( y = x(x - 4)^2 \\) and classify them.',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Expand the brackets.',
          workingLatex: 'y = x(x^2 - 8x + 16) = x^3 - 8x^2 + 16x',
          explanation: 'Expand (x - 4) squared first, then multiply by x to prepare for differentiation.'
        },
        {
          stepNumber: 2,
          description: 'Differentiate and factorise.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 16x + 16 = (3x - 4)(x - 4)",
          explanation: 'Apply the power rule, then factorise the quadratic.'
        },
        {
          stepNumber: 3,
          description: 'Solve for stationary points.',
          workingLatex: '(3x - 4)(x - 4) = 0 \\implies x = \\tfrac{4}{3} \\text{ or } x = 4',
          explanation: 'Set each factor equal to zero and solve.'
        },
        {
          stepNumber: 4,
          description: 'Find the y-coordinates.',
          workingLatex: "y\\!\\left(\\tfrac{4}{3}\\right) = \\tfrac{4}{3} \\cdot \\left(\\tfrac{4}{3} - 4\\right)^2 = \\tfrac{4}{3} \\cdot \\tfrac{64}{9} = \\tfrac{256}{27} \\qquad y(4) = 4(0)^2 = 0",
          explanation: 'Substitute each x-value back into the original factored form.'
        },
        {
          stepNumber: 5,
          description: 'Find the second derivative.',
          workingLatex: "\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 16",
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 6,
          description: 'Classify each stationary point.',
          workingLatex: "\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=\\frac{4}{3}} = 8 - 16 = -8 < 0 \\;(\\text{max}) \\qquad \\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2}\\bigg|_{x=4} = 24 - 16 = 8 > 0 \\;(\\text{min})",
          explanation: 'Negative second derivative at x = 4/3 gives a maximum. Positive second derivative at x = 4 gives a minimum.'
        }
      ],
      finalAnswer: "Maximum at \\( (\\tfrac{4}{3}, \\tfrac{256}{27}) \\); minimum at \\( (4, 0) \\)."
    }
  },
  {
    id: 'd4-042',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 42',
    difficulty: 'Standard',
    questionText: 'A curve has equation \\( y = x^3 - 3x^2 + 3x + 2 \\). Show that the curve has no turning points and state the nature of any stationary points.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate and factorise the derivative.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x + 3 = 3(x - 1)^2",
          explanation: 'Apply the power rule, then factor out 3 and recognise the perfect square.'
        },
        {
          stepNumber: 2,
          description: 'Show the derivative is never negative.',
          workingLatex: "3(x - 1)^2 \\geq 0 \\; \\text{for all } x",
          explanation: 'A squared term is always non-negative, so the derivative is never negative. This means there are no turning points where the gradient changes sign.'
        },
        {
          stepNumber: 3,
          description: 'Find the stationary point at x = 1.',
          workingLatex: '3(x - 1)^2 = 0 \\implies x = 1',
          explanation: 'The derivative equals zero only at x = 1, but the gradient does not change sign through this point.'
        },
        {
          stepNumber: 4,
          description: 'Find y and state the nature.',
          workingLatex: 'y(1) = 1 - 3 + 3 + 2 = 3',
          explanation: 'Since the derivative is non-negative everywhere and equals zero only at x = 1, the point (1, 3) is a stationary point of inflection.'
        }
      ],
      finalAnswer: "No turning points — stationary point of inflection at \\( (1, 3) \\)."
    }
  },

  // TYPE I (43–48): Increasing/decreasing for harder functions
  {
    id: 'd4-043',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 43',
    difficulty: 'Standard',
    questionText: 'Find the range of values of \\( x \\) for which \\( f(x) = x^4 - 2x^2 \\) is increasing.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 4x^3 - 4x",
          explanation: 'Apply the power rule to each term: the derivative of \\( x^4 \\) is \\( 4x^3 \\) and the derivative of \\( -2x^2 \\) is \\( -4x \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise the derivative.',
          workingLatex: "f'(x) = 4x(x^2 - 1) = 4x(x - 1)(x + 1)",
          explanation: 'Factor out \\( 4x \\), then recognise \\( x^2 - 1 \\) as a difference of two squares.'
        },
        {
          stepNumber: 3,
          description: 'Identify the critical values.',
          workingLatex: "f'(x) = 0 \\Rightarrow x = -1,\\; x = 0,\\; x = 1",
          explanation: 'Setting each factor equal to zero gives three critical values that divide the number line into four intervals.'
        },
        {
          stepNumber: 4,
          description: 'Set up the increasing condition.',
          workingLatex: '4x(x - 1)(x + 1) > 0',
          explanation: 'The function is increasing wherever its derivative is strictly positive.'
        },
        {
          stepNumber: 5,
          description: 'Perform sign analysis on each interval.',
          workingLatex: 'x < -1:\\; (-)(-)(-) \\Rightarrow - \\\\ -1 < x < 0:\\; (-)(-)(+) \\Rightarrow + \\\\ 0 < x < 1:\\; (+)(-)(+) \\Rightarrow - \\\\ x > 1:\\; (+)(+)(+) \\Rightarrow +',
          explanation: 'Test the sign of each linear factor in each interval. The coefficient 4 is positive so does not affect the sign.'
        },
        {
          stepNumber: 6,
          description: 'State the intervals where f is increasing.',
          workingLatex: '-1 < x < 0 \\quad \\text{and} \\quad x > 1',
          explanation: 'The derivative is positive on these two intervals, so the function is increasing there.'
        }
      ],
      finalAnswer: "Increasing on \\( -1 < x < 0 \\) and \\( x > 1 \\)."
    }
  },
  {
    id: 'd4-044',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 44',
    difficulty: 'Standard',
    questionText: 'Find the range of values of \\( x \\) for which \\( f(x) = x^3 - 12x \\) is decreasing.',
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 3x^2 - 12",
          explanation: 'Apply the power rule: the derivative of \\( x^3 \\) is \\( 3x^2 \\) and the derivative of \\( -12x \\) is \\( -12 \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise the derivative.',
          workingLatex: "f'(x) = 3(x^2 - 4) = 3(x - 2)(x + 2)",
          explanation: 'Factor out 3, then recognise \\( x^2 - 4 \\) as a difference of two squares.'
        },
        {
          stepNumber: 3,
          description: 'Set up the decreasing condition.',
          workingLatex: "f'(x) < 0 \\Rightarrow 3(x - 2)(x + 2) < 0",
          explanation: 'The function is decreasing wherever its derivative is strictly negative.'
        },
        {
          stepNumber: 4,
          description: 'Solve the quadratic inequality.',
          workingLatex: '-2 < x < 2',
          explanation: 'The quadratic \\( (x - 2)(x + 2) \\) is negative between its roots since it opens upwards. The factor of 3 is positive and does not change the sign.'
        }
      ],
      finalAnswer: "Decreasing on \\( -2 < x < 2 \\)."
    }
  },
  {
    id: 'd4-045',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 45',
    difficulty: 'Standard',
    questionText: 'Find the values of \\( x \\) for which the curve \\( y = x^4 - 4x^3 \\) is increasing.',
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x^2",
          explanation: 'Apply the power rule: the derivative of \\( x^4 \\) is \\( 4x^3 \\) and the derivative of \\( -4x^3 \\) is \\( -12x^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Factorise the derivative.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^2(x - 3)",
          explanation: 'Factor out the common factor \\( 4x^2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Note the sign of the squared factor.',
          workingLatex: '4x^2 \\geq 0 \\text{ for all } x',
          explanation: 'Since \\( 4x^2 \\) is always non-negative, the overall sign of the derivative depends entirely on the factor \\( (x - 3) \\).'
        },
        {
          stepNumber: 4,
          description: 'Set up the increasing condition.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} > 0 \\Rightarrow x - 3 > 0",
          explanation: 'For the derivative to be strictly positive, we need \\( x \\ne 0 \\) and \\( x - 3 > 0 \\).'
        },
        {
          stepNumber: 5,
          description: 'Solve and state the answer.',
          workingLatex: 'x > 3',
          explanation: 'At \\( x = 0 \\) the derivative equals zero so the function is not increasing there. For \\( x < 3 \\) with \\( x \\ne 0 \\), the derivative is negative.'
        }
      ],
      finalAnswer: "Increasing for \\( x > 3 \\)."
    }
  },
  {
    id: 'd4-046',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 46',
    difficulty: 'Standard',
    questionText: 'For \\( f(x) = x + \\dfrac{4}{x} \\), \\( x > 0 \\), find the range of values of \\( x \\) for which \\( f \\) is increasing.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite using a negative index.',
          workingLatex: 'f(x) = x + 4x^{-1}',
          explanation: 'Express \\( \\dfrac{4}{x} \\) as \\( 4x^{-1} \\) so that the power rule can be applied.'
        },
        {
          stepNumber: 2,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = 1 - 4x^{-2} = 1 - \\dfrac{4}{x^2}",
          explanation: 'The derivative of \\( x \\) is 1 and the derivative of \\( 4x^{-1} \\) is \\( -4x^{-2} \\).'
        },
        {
          stepNumber: 3,
          description: 'Set up the increasing condition.',
          workingLatex: "f'(x) > 0 \\Rightarrow 1 - \\dfrac{4}{x^2} > 0",
          explanation: 'The function is increasing wherever its derivative is strictly positive.'
        },
        {
          stepNumber: 4,
          description: 'Rearrange the inequality.',
          workingLatex: '1 > \\dfrac{4}{x^2} \\Rightarrow x^2 > 4',
          explanation: 'Multiply both sides by \\( x^2 \\), which is positive since \\( x > 0 \\).'
        },
        {
          stepNumber: 5,
          description: 'Solve for x.',
          workingLatex: 'x > 2 \\text{ (since } x > 0\\text{)}',
          explanation: 'Taking the positive square root gives \\( x > 2 \\). The negative root is excluded by the domain restriction.'
        }
      ],
      finalAnswer: "\\( f \\) is increasing on \\( x > 2 \\)."
    }
  },
  {
    id: 'd4-047',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 47',
    difficulty: 'Standard',
    questionText: 'Show that \\( f(x) = \\dfrac{x^3}{3} - 2x^2 + 5x + 1 \\) is an increasing function for all real \\( x \\).',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "f'(x) = x^2 - 4x + 5",
          explanation: 'Apply the power rule to each term: \\( \\dfrac{x^3}{3} \\) gives \\( x^2 \\), \\( -2x^2 \\) gives \\( -4x \\), and \\( 5x \\) gives 5.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square on the derivative.',
          workingLatex: "f'(x) = (x^2 - 4x + 4) + 1 = (x - 2)^2 + 1",
          explanation: 'Halve the coefficient of \\( x \\) to get 2, then write \\( (x - 2)^2 = x^2 - 4x + 4 \\), leaving a remainder of 1.'
        },
        {
          stepNumber: 3,
          description: 'Identify the minimum of the derivative.',
          workingLatex: "(x - 2)^2 \\geq 0 \\text{ for all } x",
          explanation: 'A squared expression is always non-negative. Its smallest value is 0, occurring when \\( x = 2 \\).'
        },
        {
          stepNumber: 4,
          description: 'Conclude the derivative is always positive.',
          workingLatex: "f'(x) = (x - 2)^2 + 1 \\geq 1 > 0 \\text{ for all } x",
          explanation: 'Since \\( (x - 2)^2 \\geq 0 \\), adding 1 gives \\( f\'(x) \\geq 1 \\). The derivative is always at least 1, which is strictly positive, so \\( f \\) is increasing for all real \\( x \\).'
        }
      ],
      finalAnswer: "\\( f'(x) \\geq 1 > 0 \\) for all \\( x \\), so \\( f \\) is always increasing."
    }
  },
  {
    id: 'd4-048',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 48',
    difficulty: 'Standard',
    questionText: 'The function \\( y = x^3 - 3x^2 - 24x \\) is increasing for \\( x < a \\) and \\( x > b \\), where \\( a < b \\). Find \\( a \\) and \\( b \\).',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the function.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 24",
          explanation: 'Apply the power rule to each term: \\( x^3 \\) gives \\( 3x^2 \\), \\( -3x^2 \\) gives \\( -6x \\), and \\( -24x \\) gives \\( -24 \\).'
        },
        {
          stepNumber: 2,
          description: 'Factor out the common factor.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3(x^2 - 2x - 8)",
          explanation: 'Each coefficient is divisible by 3, so factor it out to simplify the quadratic.'
        },
        {
          stepNumber: 3,
          description: 'Factorise the quadratic.',
          workingLatex: '3(x - 4)(x + 2)',
          explanation: 'Find two numbers that multiply to \\( -8 \\) and add to \\( -2 \\): these are \\( -4 \\) and \\( +2 \\).'
        },
        {
          stepNumber: 4,
          description: 'Set up the increasing condition.',
          workingLatex: '3(x - 4)(x + 2) > 0',
          explanation: 'The function is increasing wherever its derivative is strictly positive.'
        },
        {
          stepNumber: 5,
          description: 'Solve the quadratic inequality.',
          workingLatex: 'x < -2 \\text{ or } x > 4',
          explanation: 'The quadratic \\( (x - 4)(x + 2) \\) is positive outside its roots since it opens upwards. Comparing with the given form gives \\( a = -2 \\) and \\( b = 4 \\).'
        }
      ],
      finalAnswer: "\\( a = -2 \\) and \\( b = 4 \\)."
    }
  },

  // TYPE J (49–54): Sketching and multi-feature analysis
  {
    id: 'd4-049',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 49',
    difficulty: 'Standard',
    questionText: 'For the curve \\( y = x^3 - 6x^2 + 9x \\): (a) find the axis intercepts, (b) find the coordinates of the stationary points and classify each, (c) describe the shape of the curve.',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) \\( x \\)-intercepts: set \\( y = 0 \\).',
          workingLatex: 'x(x^2 - 6x + 9) = 0 \\Rightarrow x(x - 3)^2 = 0',
          explanation: 'Factor out \\( x \\), then a perfect square.'
        },
        {
          stepNumber: 2,
          description: 'Intercepts.',
          workingLatex: 'x = 0 \\text{ or } x = 3; \\; y\\text{-intercept} = 0',
          explanation: 'Curve crosses at origin and touches at \\( (3, 0) \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 4,
          description: 'Stationary points.',
          workingLatex: 'x = 1: \\; y = 1 - 6 + 9 = 4 \\\\ x = 3: \\; y = 27 - 54 + 27 = 0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 5,
          description: 'Classify with second derivative.',
          workingLatex: "y'' = 6x - 12 \\\\ y''(1) = -6 < 0\\; (\\text{max}) \\\\ y''(3) = 6 > 0\\; (\\text{min})",
          explanation: 'Second derivative test.'
        }
      ],
      finalAnswer: "(a) Through origin; touches \\( x \\)-axis at \\( (3, 0) \\). \nb) Maximum at \\( (1, 4) \\), minimum at \\( (3, 0) \\).\nc) Cubic starting from \\( -\\infty \\), rising to a max at \\( (1, 4) \\), falling to touch the \\( x \\)-axis at \\( (3, 0) \\), then rising to \\( +\\infty \\)."
    }
  },
  {
    id: 'd4-050',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 50',
    difficulty: 'Standard',
    questionText: 'Sketch the curve \\( y = -x^3 + 6x^2 - 9x \\), labelling the coordinates of any intercepts and stationary points.',
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Factorise for roots.',
          workingLatex: 'y = -x(x^2 - 6x + 9) = -x(x - 3)^2',
          explanation: 'Factor out \\( -x \\), then a perfect square.'
        },
        {
          stepNumber: 2,
          description: 'Intercepts.',
          workingLatex: '(0, 0) \\text{ and } (3, 0)',
          explanation: 'Crosses at origin; touches at \\( (3, 0) \\).'
        },
        {
          stepNumber: 3,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -3x^2 + 12x - 9 = -3(x - 1)(x - 3)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 4,
          description: 'Stationary points.',
          workingLatex: 'x = 1: \\; y = -1 + 6 - 9 = -4 \\\\ x = 3: \\; y = 0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 5,
          description: 'Classify.',
          workingLatex: "y'' = -6x + 12 \\\\ y''(1) = 6 > 0\\; (\\text{min}) \\\\ y''(3) = -6 < 0\\; (\\text{max})",
          explanation: 'Apply the test.'
        }
      ],
      finalAnswer: "Intercepts: \\( (0, 0) \\), \\( (3, 0) \\). Minimum at \\( (1, -4) \\), maximum at \\( (3, 0) \\). Shape: starts from \\( +\\infty \\), falls to min, rises to \\( (3, 0) \\), then falls to \\( -\\infty \\)."
    }
  },
  {
    id: 'd4-051',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 51',
    difficulty: 'Standard',
    questionText: 'For the curve \\( y = x^4 - 4x^2 + 3 \\): (a) find the axis intercepts, (b) find and classify the stationary points.',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Factorise as a biquadratic.',
          workingLatex: 'y = (x^2 - 1)(x^2 - 3) = (x-1)(x+1)(x - \\sqrt{3})(x + \\sqrt{3})',
          explanation: 'Let \\( u = x^2 \\) and factorise \\( u^2 - 4u + 3 \\).'
        },
        {
          stepNumber: 2,
          description: 'Intercepts.',
          workingLatex: '\\text{Roots: } x = \\pm 1, \\pm\\sqrt{3}; \\; y\\text{-intercept} = 3',
          explanation: 'Four real roots.'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 8x = 4x(x^2 - 2)",
          explanation: 'Factor out \\( 4x \\).'
        },
        {
          stepNumber: 4,
          description: 'Solve for stationary points.',
          workingLatex: 'x = 0 \\text{ or } x = \\pm\\sqrt{2}',
          explanation: 'Three stationary points.'
        },
        {
          stepNumber: 5,
          description: 'Find \\( y \\) values.',
          workingLatex: 'y(0) = 3 \\\\ y(\\pm\\sqrt{2}) = 4 - 8 + 3 = -1',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 6,
          description: 'Second derivative test.',
          workingLatex: "y'' = 12x^2 - 8 \\\\ y''(0) = -8 < 0\\; (\\text{max}) \\\\ y''(\\pm\\sqrt{2}) = 16 > 0\\; (\\text{min})",
          explanation: 'Classify each.'
        }
      ],
      finalAnswer: "(a) \\( (\\pm 1, 0) \\), \\( (\\pm\\sqrt{3}, 0) \\), \\( (0, 3) \\). \nb) Maximum at \\( (0, 3) \\); minima at \\( (\\pm\\sqrt{2}, -1) \\)."
    }
  },
  {
    id: 'd4-052',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 52',
    difficulty: 'Standard',
    questionText: 'Sketch the curve \\( y = x^3 - 3x^2 + 4 \\), labelling intercepts and stationary points.',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '\\( y \\)-intercept.',
          workingLatex: 'y(0) = 4',
          explanation: '\\( (0, 4) \\).'
        },
        {
          stepNumber: 2,
          description: 'Try \\( x = -1 \\) as a root.',
          workingLatex: 'y(-1) = -1 - 3 + 4 = 0 \\Rightarrow (x + 1) \\text{ is a factor}',
          explanation: 'Factor theorem.'
        },
        {
          stepNumber: 3,
          description: 'Divide to factorise.',
          workingLatex: 'y = (x + 1)(x^2 - 4x + 4) = (x + 1)(x - 2)^2',
          explanation: 'Perfect square in the quadratic.'
        },
        {
          stepNumber: 4,
          description: '\\( x \\)-intercepts.',
          workingLatex: 'x = -1 \\text{ (crosses)},\\; x = 2 \\text{ (touches)}',
          explanation: '\\( (x - 2)^2 \\) means the curve touches.'
        },
        {
          stepNumber: 5,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x = 3x(x - 2)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 6,
          description: 'Stationary points.',
          workingLatex: 'x = 0: \\; y = 4 \\\\ x = 2: \\; y = 0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 7,
          description: 'Classify.',
          workingLatex: "y'' = 6x - 6 \\\\ y''(0) = -6 < 0\\; (\\text{max}) \\\\ y''(2) = 6 > 0\\; (\\text{min})",
          explanation: 'Second derivative test.'
        }
      ],
      finalAnswer: "Intercepts: \\( (-1, 0) \\), \\( (2, 0) \\), \\( (0, 4) \\). Maximum at \\( (0, 4) \\); minimum at \\( (2, 0) \\)."
    }
  },
  {
    id: 'd4-053',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 53',
    difficulty: 'Standard',
    questionText: 'For \\( y = x^4 - 2x^2 \\): (a) find the \\( x \\)-intercepts, (b) find and classify all stationary points.',
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Factorise.',
          workingLatex: 'y = x^2(x^2 - 2) = x^2(x - \\sqrt{2})(x + \\sqrt{2})',
          explanation: 'Factor out \\( x^2 \\), then difference of squares.'
        },
        {
          stepNumber: 2,
          description: 'Intercepts.',
          workingLatex: 'x = 0 \\text{ (double)},\\; x = \\pm\\sqrt{2}',
          explanation: 'Touches at origin, crosses at \\( \\pm\\sqrt{2} \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 4,
          description: 'Stationary points.',
          workingLatex: 'x = 0: \\; y = 0 \\\\ x = \\pm 1: \\; y = 1 - 2 = -1',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 5,
          description: 'Second derivative test.',
          workingLatex: "y'' = 12x^2 - 4 \\\\ y''(0) = -4 < 0\\; (\\text{max}) \\\\ y''(\\pm 1) = 8 > 0\\; (\\text{min})",
          explanation: 'Classify each.'
        }
      ],
      finalAnswer: "(a) \\( (0, 0), (\\pm\\sqrt{2}, 0) \\). \nb) Maximum at \\( (0, 0) \\); minima at \\( (\\pm 1, -1) \\)."
    }
  },
  {
    id: 'd4-054',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 54',
    difficulty: 'Standard',
    questionText: 'Sketch \\( y = x^3 - 12x + 16 \\), labelling any stationary points and the \\( y \\)-intercept. Determine the nature of each stationary point.',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '\\( y \\)-intercept.',
          workingLatex: 'y(0) = 16',
          explanation: '\\( (0, 16) \\).'
        },
        {
          stepNumber: 2,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12 = 3(x - 2)(x + 2)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 3,
          description: 'Stationary points.',
          workingLatex: 'x = 2: \\; y = 8 - 24 + 16 = 0 \\\\ x = -2: \\; y = -8 + 24 + 16 = 32',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Classify.',
          workingLatex: "y'' = 6x \\\\ y''(2) = 12 > 0\\; (\\text{min}) \\\\ y''(-2) = -12 < 0\\; (\\text{max})",
          explanation: 'Second derivative test.'
        }
      ],
      finalAnswer: "Maximum at \\( (-2, 32) \\); minimum at \\( (2, 0) \\); \\( y \\)-intercept \\( (0, 16) \\)."
    }
  },

  // TYPE K (55–60): Parameter and "find a, b, c" problems
  {
    id: 'd4-055',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 55',
    difficulty: 'Standard',
    questionText: 'The curve \\( y = x^3 + ax^2 + bx \\) has a stationary point at \\( x = -1 \\) and passes through \\( (2, 6) \\). Find \\( a \\) and \\( b \\).',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2ax + b",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: "Stationary at \\( x = -1 \\): \\( y'(-1) = 0 \\).",
          workingLatex: '3 - 2a + b = 0',
          explanation: 'First equation.'
        },
        {
          stepNumber: 3,
          description: 'Curve passes through \\( (2, 6) \\).',
          workingLatex: '8 + 4a + 2b = 6 \\Rightarrow 4a + 2b = -2 \\Rightarrow 2a + b = -1',
          explanation: 'Second equation.'
        },
        {
          stepNumber: 4,
          description: 'Solve the system.',
          workingLatex: '\\begin{cases} -2a + b = -3 \\\\ 2a + b = -1 \\end{cases} \\Rightarrow 2b = -4 \\Rightarrow b = -2',
          explanation: 'Add the two equations.'
        },
        {
          stepNumber: 5,
          description: 'Find \\( a \\).',
          workingLatex: '2a - 2 = -1 \\Rightarrow a = \\tfrac{1}{2}',
          explanation: 'Substitute back.'
        }
      ],
      finalAnswer: "\\( a = \\dfrac{1}{2},\\; b = -2 \\)."
    }
  },
  {
    id: 'd4-056',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 56',
    difficulty: 'Standard',
    questionText: 'A curve \\( y = ax^3 + bx \\) has a local maximum of 4 at \\( x = -1 \\). Find \\( a \\) and \\( b \\).',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3ax^2 + b",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: "Stationary at \\( x = -1 \\): \\( y'(-1) = 0 \\).",
          workingLatex: '3a + b = 0',
          explanation: 'First equation.'
        },
        {
          stepNumber: 3,
          description: 'Curve passes through \\( (-1, 4) \\).',
          workingLatex: '-a - b = 4',
          explanation: 'Second equation.'
        },
        {
          stepNumber: 4,
          description: 'Solve.',
          workingLatex: '\\begin{cases} 3a + b = 0 \\\\ -a - b = 4 \\end{cases} \\Rightarrow 2a = 4 \\Rightarrow a = 2',
          explanation: 'Add both equations.'
        },
        {
          stepNumber: 5,
          description: 'Find \\( b \\).',
          workingLatex: 'b = -3a = -6',
          explanation: 'Back-substitute.'
        }
      ],
      finalAnswer: "\\( a = 2,\\; b = -6 \\)."
    }
  },
  {
    id: 'd4-057',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 57',
    difficulty: 'Standard',
    questionText: 'The function \\( f(x) = x^3 + px^2 + qx + 5 \\) has stationary points at \\( x = 1 \\) and \\( x = 3 \\). Find \\( p \\) and \\( q \\).',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: "Differentiate.",
          workingLatex: "f'(x) = 3x^2 + 2px + q",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: "Two conditions: \\( f'(1) = 0 \\) and \\( f'(3) = 0 \\).",
          workingLatex: '3 + 2p + q = 0 \\\\ 27 + 6p + q = 0',
          explanation: 'Two equations.'
        },
        {
          stepNumber: 3,
          description: 'Subtract.',
          workingLatex: '24 + 4p = 0 \\Rightarrow p = -6',
          explanation: 'Solve for \\( p \\).'
        },
        {
          stepNumber: 4,
          description: 'Find \\( q \\).',
          workingLatex: 'q = -3 - 2(-6) = 9',
          explanation: 'Back-substitute.'
        }
      ],
      finalAnswer: "\\( p = -6,\\; q = 9 \\)."
    }
  },
  {
    id: 'd4-058',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 58',
    difficulty: 'Standard',
    questionText: 'The curve \\( y = x^2 + \\dfrac{k}{x} \\) for \\( x > 0 \\) has a minimum at \\( x = 2 \\). Find \\( k \\) and the minimum value.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - \\dfrac{k}{x^2}",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: 'Set to zero at \\( x = 2 \\).',
          workingLatex: '4 - \\dfrac{k}{4} = 0 \\Rightarrow k = 16',
          explanation: 'Solve for \\( k \\).'
        },
        {
          stepNumber: 3,
          description: 'Minimum value.',
          workingLatex: 'y(2) = 4 + \\dfrac{16}{2} = 4 + 8 = 12',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Second derivative to confirm.',
          workingLatex: "y'' = 2 + \\dfrac{2k}{x^3} > 0 \\text{ for } x > 0",
          explanation: 'Positive, so it is a minimum.'
        }
      ],
      finalAnswer: "\\( k = 16 \\); minimum value is 12 (at \\( x = 2 \\))."
    }
  },
  {
    id: 'd4-059',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 59',
    difficulty: 'Standard',
    questionText: 'A curve has equation \\( y = x^3 + ax^2 + bx + c \\). It has a stationary point at \\( (2, -9) \\) and passes through \\( (0, 3) \\). Find \\( a \\), \\( b \\), and \\( c \\).',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Passes through \\( (0, 3) \\).',
          workingLatex: 'c = 3',
          explanation: 'Directly gives \\( c \\).'
        },
        {
          stepNumber: 2,
          description: 'Passes through \\( (2, -9) \\).',
          workingLatex: '8 + 4a + 2b + 3 = -9 \\Rightarrow 4a + 2b = -20 \\Rightarrow 2a + b = -10',
          explanation: 'First equation in \\( a \\) and \\( b \\).'
        },
        {
          stepNumber: 3,
          description: "Stationary at \\( x = 2 \\): \\( y'(2) = 0 \\).",
          workingLatex: "y'(x) = 3x^2 + 2ax + b \\Rightarrow 12 + 4a + b = 0",
          explanation: 'Second equation.'
        },
        {
          stepNumber: 4,
          description: 'Solve.',
          workingLatex: '\\begin{cases} 2a + b = -10 \\\\ 4a + b = -12 \\end{cases} \\Rightarrow 2a = -2 \\Rightarrow a = -1',
          explanation: 'Subtract.'
        },
        {
          stepNumber: 5,
          description: 'Find \\( b \\).',
          workingLatex: 'b = -10 - 2(-1) = -8',
          explanation: 'Back-substitute.'
        }
      ],
      finalAnswer: "\\( a = -1,\\; b = -8,\\; c = 3 \\)."
    }
  },
  {
    id: 'd4-060',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 60',
    difficulty: 'Standard',
    questionText: 'The quartic \\( y = x^4 + ax^2 + b \\) has a minimum value of \\( -3 \\) at \\( x = 2 \\). Find \\( a \\) and \\( b \\).',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate the quartic.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 + 2ax',
          explanation: 'Apply the power rule to each term. The constant b differentiates to zero.'
        },
        {
          stepNumber: 2,
          description: 'Set derivative to zero at x = 2.',
          workingLatex: '4(2)^3 + 2a(2) = 0 \\\\[6pt] 32 + 4a = 0',
          explanation: 'Since there is a minimum at x = 2, the derivative must equal zero there. Substitute x = 2 into the derivative.'
        },
        {
          stepNumber: 3,
          description: 'Solve for a.',
          workingLatex: '4a = -32 \\\\[6pt] a = -8',
          explanation: 'Rearrange to isolate a.'
        },
        {
          stepNumber: 4,
          description: 'Substitute x = 2 into y with a = -8.',
          workingLatex: '(2)^4 + (-8)(2)^2 + b = -3 \\\\[6pt] 16 - 32 + b = -3',
          explanation: 'The minimum value of -3 occurs at x = 2, so y(2) = -3. Substitute the known value of a.'
        },
        {
          stepNumber: 5,
          description: 'Solve for b.',
          workingLatex: '-16 + b = -3 \\\\[6pt] b = 13',
          explanation: 'Rearrange to find b.'
        }
      ],
      finalAnswer: "\\( a = -8,\\; b = 13 \\)."
    }
  },

  // TYPE L (61–65): Optimisation / real-world
  {
    id: 'd4-061',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 61',
    difficulty: 'Standard',
    questionText: 'A rectangle has perimeter 40 m. Let \\( x \\) be the length of one side. (a) Write the area \\( A \\) as a function of \\( x \\). (b) Find the value of \\( x \\) that maximises \\( A \\) and state the maximum area.',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Perimeter gives width.',
          workingLatex: '2(x + w) = 40 \\Rightarrow w = 20 - x',
          explanation: 'Solve for the other side.'
        },
        {
          stepNumber: 2,
          description: 'Area.',
          workingLatex: 'A = x(20 - x) = 20x - x^2',
          explanation: 'Quadratic in \\( x \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate and solve.',
          workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 20 - 2x = 0 \\Rightarrow x = 10',
          explanation: 'Stationary point.'
        },
        {
          stepNumber: 4,
          description: 'Second derivative test.',
          workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -2 < 0 \\Rightarrow \\text{maximum}',
          explanation: 'Confirms a maximum.'
        },
        {
          stepNumber: 5,
          description: 'Maximum area.',
          workingLatex: 'A(10) = 100',
          explanation: 'The maximum area is 100 m² (a square).'
        }
      ],
      finalAnswer: "(a) \\( A = 20x - x^2 \\); (b) \\( x = 10 \\) m, maximum area 100 m²."
    }
  },
  {
    id: 'd4-062',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 62',
    difficulty: 'Standard',
    questionText: 'A closed cylindrical can has volume 500 cm³. Its surface area in terms of the radius \\( r \\) is \\( S = 2\\pi r^2 + \\dfrac{1000}{r} \\). Find the value of \\( r \\) that minimises \\( S \\).',
    marks: 7,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite.',
          workingLatex: 'S = 2\\pi r^2 + 1000 r^{-1}',
          explanation: 'Prepare for differentiation.'
        },
        {
          stepNumber: 2,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}S}{\\mathrm{d}r} = 4\\pi r - 1000 r^{-2}',
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 3,
          description: 'Set to zero.',
          workingLatex: '4\\pi r = \\dfrac{1000}{r^2} \\Rightarrow r^3 = \\dfrac{250}{\\pi} \\Rightarrow r = \\sqrt[3]{\\dfrac{250}{\\pi}}',
          explanation: 'Solve for \\( r \\).'
        },
        {
          stepNumber: 4,
          description: 'Second derivative test.',
          workingLatex: '\\frac{\\mathrm{d}^2S}{\\mathrm{d}r^2} = 4\\pi + 2000 r^{-3} > 0 \\Rightarrow \\text{minimum}',
          explanation: 'Confirms a minimum.'
        }
      ],
      finalAnswer: "\\( r = \\sqrt[3]{\\dfrac{250}{\\pi}} \\) cm gives the minimum surface area."
    }
  },
  {
    id: 'd4-063',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 63',
    difficulty: 'Standard',
    questionText: 'A farmer has 120 m of fencing to make a rectangular enclosure against an existing wall; no fence is needed on the wall side. Let \\( x \\) m be the length perpendicular to the wall. (a) Express the area \\( A \\) as a function of \\( x \\). (b) Find the maximum area.',
    marks: 6,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Parameterise the other side.',
          workingLatex: '2x + y = 120 \\Rightarrow y = 120 - 2x',
          explanation: 'Fence length constraint.'
        },
        {
          stepNumber: 2,
          description: 'Area.',
          workingLatex: 'A = xy = x(120 - 2x) = 120x - 2x^2',
          explanation: 'Quadratic in \\( x \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate and solve.',
          workingLatex: '\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 120 - 4x = 0 \\Rightarrow x = 30',
          explanation: 'Stationary point.'
        },
        {
          stepNumber: 4,
          description: 'Confirm maximum.',
          workingLatex: '\\frac{\\mathrm{d}^2A}{\\mathrm{d}x^2} = -4 < 0',
          explanation: 'Second derivative test.'
        },
        {
          stepNumber: 5,
          description: 'Maximum area.',
          workingLatex: 'A(30) = 30 \\times 60 = 1800',
          explanation: 'Substitute back.'
        }
      ],
      finalAnswer: "(a) \\( A = 120x - 2x^2 \\); (b) Maximum area is 1800 m² at \\( x = 30 \\) m."
    }
  },
  {
    id: 'd4-064',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 64',
    difficulty: 'Standard',
    questionText: 'The height of a ball in metres above the ground after \\( t \\) seconds is \\( h = 40t - 5t^2 \\). Find the time at which the ball is at its maximum height and state the maximum height.',
    marks: 4,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate h with respect to t.',
          workingLatex: '\\frac{\\mathrm{d}h}{\\mathrm{d}t} = 40 - 10t',
          explanation: 'Apply the power rule. This derivative represents the velocity of the ball.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '40 - 10t = 0',
          explanation: 'At the maximum height the velocity is zero, so set the derivative to zero.'
        },
        {
          stepNumber: 3,
          description: 'Solve for t.',
          workingLatex: '10t = 40 \\\\[6pt] t = 4',
          explanation: 'The ball reaches its maximum height after 4 seconds.'
        },
        {
          stepNumber: 4,
          description: 'Confirm this is a maximum.',
          workingLatex: '\\frac{\\mathrm{d}^2h}{\\mathrm{d}t^2} = -10 < 0',
          explanation: 'The second derivative is negative, confirming that t = 4 gives a maximum.'
        },
        {
          stepNumber: 5,
          description: 'Find the maximum height.',
          workingLatex: 'h(4) = 40(4) - 5(4)^2 \\\\[6pt] = 160 - 80 = 80',
          explanation: 'Substitute t = 4 back into the original equation to find the maximum height.'
        }
      ],
      finalAnswer: "Maximum height of 80 m at \\( t = 4 \\) s."
    }
  },
  {
    id: 'd4-065',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 65',
    difficulty: 'Standard',
    questionText: 'An open-top box is made from a 20 cm by 12 cm sheet of card by cutting equal squares of side \\( x \\) cm from each corner. (a) Show that the volume is \\( V = x(20 - 2x)(12 - 2x) \\). (b) Find, to 1 decimal place, the value of \\( x \\) that maximises \\( V \\).',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Dimensions of box.',
          workingLatex: '\\text{base} = (20 - 2x)(12 - 2x), \\; \\text{height} = x',
          explanation: 'Subtract squares from length and width.'
        },
        {
          stepNumber: 2,
          description: 'Volume.',
          workingLatex: 'V = x(20 - 2x)(12 - 2x) \\;\\checkmark',
          explanation: 'As required.'
        },
        {
          stepNumber: 3,
          description: 'Expand.',
          workingLatex: 'V = x(240 - 64x + 4x^2) = 4x^3 - 64x^2 + 240x',
          explanation: 'Multiply out.'
        },
        {
          stepNumber: 4,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}V}{\\mathrm{d}x} = 12x^2 - 128x + 240',
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 5,
          description: 'Solve.',
          workingLatex: '12x^2 - 128x + 240 = 0 \\Rightarrow 3x^2 - 32x + 60 = 0',
          explanation: 'Divide by 4.'
        },
        {
          stepNumber: 6,
          description: 'Quadratic formula.',
          workingLatex: 'x = \\dfrac{32 \\pm \\sqrt{1024 - 720}}{6} = \\dfrac{32 \\pm \\sqrt{304}}{6}',
          explanation: '\\( \\sqrt{304} \\approx 17.436 \\).'
        },
        {
          stepNumber: 7,
          description: 'Valid root.',
          workingLatex: 'x \\approx \\dfrac{32 - 17.44}{6} \\approx 2.4 \\text{ (must have } 0 < x < 6\\text{)}',
          explanation: 'The larger root exceeds the domain.'
        }
      ],
      finalAnswer: "(a) Shown. (b) \\( x \\approx 2.4 \\) cm gives the maximum volume."
    }
  },

  // TYPE M (66–70): Challenge / synoptic exam-style
  {
    id: 'd4-066',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 66',
    difficulty: 'Challenge',
    questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 3x^2 + 4 \\).\n\na) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) and the coordinates of the stationary points of \\( C \\).\nb) Determine the nature of each stationary point.\nc) Show that the equation of the tangent to \\( C \\) at the point where \\( x = 1 \\) is \\( y = -3x + 5 \\).',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x = 3x(x - 2)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 2,
          description: 'Stationary points.',
          workingLatex: 'x = 0: \\; y = 4 \\\\ x = 2: \\; y = 8 - 12 + 4 = 0',
          explanation: 'Two stationary points.'
        },
        {
          stepNumber: 3,
          description: "(b) Second derivative test.",
          workingLatex: "y'' = 6x - 6 \\\\ y''(0) = -6 < 0\\; (\\text{max}) \\\\ y''(2) = 6 > 0\\; (\\text{min})",
          explanation: 'Classify each.'
        },
        {
          stepNumber: 4,
          description: '(c) At \\( x = 1 \\), find \\( y \\) and gradient.',
          workingLatex: "y(1) = 1 - 3 + 4 = 2, \\; y'(1) = -3",
          explanation: 'Tangent passes through \\( (1, 2) \\) with gradient \\( -3 \\).'
        },
        {
          stepNumber: 5,
          description: 'Tangent equation.',
          workingLatex: 'y - 2 = -3(x - 1) \\Rightarrow y = -3x + 5 \\;\\checkmark',
          explanation: 'As required.'
        }
      ],
      finalAnswer: "(a) \\( (0, 4) \\) and \\( (2, 0) \\). \nb) Maximum at \\( (0, 4) \\); minimum at \\( (2, 0) \\).\nc) Tangent: \\( y = -3x + 5 \\)."
    }
  },
  {
    id: 'd4-067',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 67',
    difficulty: 'Challenge',
    questionText: 'A curve has equation \\( y = \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} + 2x + 1 \\).\n\na) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\nb) Find the stationary points and classify them.\nc) Find the range of values of \\( x \\) for which the curve is concave up.',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = x^2 - 3x + 2",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: '(b) Factorise and solve.',
          workingLatex: '(x - 1)(x - 2) = 0 \\Rightarrow x = 1 \\text{ or } x = 2',
          explanation: 'Two stationary points.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'y(1) = \\tfrac{1}{3} - \\tfrac{3}{2} + 2 + 1 = \\tfrac{11}{6} \\\\ y(2) = \\tfrac{8}{3} - 6 + 4 + 1 = \\tfrac{5}{3}',
          explanation: 'Substitute back.'
        },
        {
          stepNumber: 4,
          description: 'Classify.',
          workingLatex: "y'' = 2x - 3 \\\\ y''(1) = -1 < 0\\; (\\text{max}) \\\\ y''(2) = 1 > 0\\; (\\text{min})",
          explanation: 'Second derivative test.'
        },
        {
          stepNumber: 5,
          description: "(c) \\( y'' > 0 \\).",
          workingLatex: '2x - 3 > 0 \\Rightarrow x > \\tfrac{3}{2}',
          explanation: 'Solve the inequality.'
        }
      ],
      finalAnswer: "(a) \\( y' = x^2 - 3x + 2 \\) \nb) Max at \\( (1, \\tfrac{11}{6}) \\); min at \\( (2, \\tfrac{5}{3}) \\)\nc) Concave up for \\( x > \\tfrac{3}{2} \\)."
    }
  },
  {
    id: 'd4-068',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 68',
    difficulty: 'Challenge',
    questionText: 'The curve \\( C \\) has equation \\( y = x^4 - 8x^2 + 16 \\).\n\na) Show that \\( y \\geq 0 \\) for all \\( x \\) and find where equality holds.\nb) Find the coordinates of all stationary points and classify them.',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Rewrite.',
          workingLatex: 'y = (x^2 - 4)^2 \\geq 0 \\;\\checkmark',
          explanation: 'A perfect square is always non-negative.'
        },
        {
          stepNumber: 2,
          description: 'Equality.',
          workingLatex: '(x^2 - 4)^2 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2',
          explanation: 'Curve touches the \\( x \\)-axis at \\( (\\pm 2, 0) \\).'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 16x = 4x(x^2 - 4) = 4x(x - 2)(x + 2)",
          explanation: 'Factorise.'
        },
        {
          stepNumber: 4,
          description: 'Stationary points.',
          workingLatex: 'x = -2: \\; y = 0 \\\\ x = 0: \\; y = 16 \\\\ x = 2: \\; y = 0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 5,
          description: 'Second derivative.',
          workingLatex: "y'' = 12x^2 - 16",
          explanation: 'Differentiate once more.'
        },
        {
          stepNumber: 6,
          description: 'Test each.',
          workingLatex: "y''(-2) = 32 > 0\\; (\\text{min}) \\\\ y''(0) = -16 < 0\\; (\\text{max}) \\\\ y''(2) = 32 > 0\\; (\\text{min})",
          explanation: 'Classify.'
        }
      ],
      finalAnswer: "(a) Shown; \\( y = 0 \\) at \\( x = \\pm 2 \\). \nb) Minima at \\( (\\pm 2, 0) \\); maximum at \\( (0, 16) \\)."
    }
  },
  {
    id: 'd4-069',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 69',
    difficulty: 'Challenge',
    questionText: 'A function \\( f \\) is defined by \\( f(x) = 2x^3 - 9x^2 + 12x - 4 \\).\n\na) Find \\( f\'(x) \\) and \\( f\'\'(x) \\).\nb) Find the stationary points of \\( f \\) and determine their nature.\nc) Find the range of values of \\( x \\) for which \\( f \\) is decreasing.\nd) Sketch \\( y = f(x) \\), labelling key features.',
    marks: 12,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: "f'(x) = 6x^2 - 18x + 12, \\quad f''(x) = 12x - 18",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: '(b) Factorise.',
          workingLatex: "f'(x) = 6(x - 1)(x - 2)",
          explanation: 'Two stationary points: \\( x = 1, 2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'f(1) = 2 - 9 + 12 - 4 = 1 \\\\ f(2) = 16 - 36 + 24 - 4 = 0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Classify.',
          workingLatex: "f''(1) = -6 < 0\\; (\\text{max}) \\\\ f''(2) = 6 > 0\\; (\\text{min})",
          explanation: 'Second derivative test.'
        },
        {
          stepNumber: 5,
          description: "(c) Decreasing: \\( f'(x) < 0 \\).",
          workingLatex: '6(x - 1)(x - 2) < 0 \\Rightarrow 1 < x < 2',
          explanation: 'Quadratic negative between roots.'
        },
        {
          stepNumber: 6,
          description: '(d) Sketch.',
          workingLatex: "\\text{Max}(1, 1),\\; \\text{Min}(2, 0),\\; f(0) = -4",
          explanation: 'Standard positive cubic shape with a max then min; crosses at \\( (2, 0) \\) (touches).'
        }
      ],
      finalAnswer: "(a) \\( f'(x) = 6x^2 - 18x + 12 \\), \\( f''(x) = 12x - 18 \\) \nb) Max at \\( (1, 1) \\); min at \\( (2, 0) \\)\nc) Decreasing for \\( 1 < x < 2 \\)\nd) Cubic: from \\( -\\infty \\) through \\( (0, -4) \\), up to max \\( (1, 1) \\), down to min \\( (2, 0) \\), then up to \\( +\\infty \\)."
    }
  },
  {
    id: 'd4-070',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 70',
    difficulty: 'Challenge',
    questionText: 'A cyclist\'s speed \\( v \\) (m/s) along a straight road after \\( t \\) seconds is given by \\( v(t) = 0.5t^3 - 4.5t^2 + 12t \\) for \\( 0 \\leq t \\leq 8 \\).\n\na) Find the times at which the acceleration is zero.\nb) Find the times at which the speed is greatest and least in the interval and state both values.',
    marks: 10,
    examStyle: true,
    yearCreated: 2026,
    tags: [],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Acceleration is \\( v\'(t) \\).',
          workingLatex: "v'(t) = 1.5t^2 - 9t + 12",
          explanation: 'Differentiate speed.'
        },
        {
          stepNumber: 2,
          description: 'Set to zero.',
          workingLatex: '1.5t^2 - 9t + 12 = 0 \\Rightarrow t^2 - 6t + 8 = 0 \\Rightarrow (t - 2)(t - 4) = 0',
          explanation: 'Factorise.'
        },
        {
          stepNumber: 3,
          description: 'Acceleration zero at two times.',
          workingLatex: 't = 2 \\text{ and } t = 4',
          explanation: 'Both within the interval.'
        },
        {
          stepNumber: 4,
          description: '(b) Classify these.',
          workingLatex: "v''(t) = 3t - 9 \\\\ v''(2) = -3 < 0\\; (\\text{local max in } v) \\\\ v''(4) = 3 > 0\\; (\\text{local min in } v)",
          explanation: 'Second derivative test on \\( v \\).'
        },
        {
          stepNumber: 5,
          description: 'Compute interior stationary values.',
          workingLatex: 'v(2) = 4 - 18 + 24 = 10 \\\\ v(4) = 32 - 72 + 48 = 8',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 6,
          description: 'Check endpoints.',
          workingLatex: 'v(0) = 0 \\\\ v(8) = 256 - 288 + 96 = 64',
          explanation: 'Boundary values can be largest/smallest.'
        },
        {
          stepNumber: 7,
          description: 'Max and min over \\( [0, 8] \\).',
          workingLatex: '\\max\\{0, 10, 8, 64\\} = 64 \\text{ at } t = 8 \\\\ \\min\\{0, 10, 8, 64\\} = 0 \\text{ at } t = 0',
          explanation: 'Compare all candidate values.'
        }
      ],
      finalAnswer: "(a) Acceleration zero at \\( t = 2 \\) s and \\( t = 4 \\) s. \nb) Greatest speed 64 m/s at \\( t = 8 \\) s; least speed 0 m/s at \\( t = 0 \\) s."
    }
  }
];
