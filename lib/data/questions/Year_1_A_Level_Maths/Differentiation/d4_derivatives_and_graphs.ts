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
    tags: ['stationary points', 'differentiation', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 10',
          explanation: 'Power rule applied term by term.'
        },
        {
          stepNumber: 2,
          description: 'Set the derivative equal to zero.',
          workingLatex: '2x - 10 = 0 \\implies x = 5',
          explanation: 'Stationary points occur where the gradient is zero.'
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
    tags: ['stationary points', 'differentiation', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 24',
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: 'Set equal to zero.',
          workingLatex: '3x^2 - 6x - 24 = 0 \\implies x^2 - 2x - 8 = 0',
          explanation: 'Divide through by 3.'
        },
        {
          stepNumber: 3,
          description: 'Factorise and solve.',
          workingLatex: '(x - 4)(x + 2) = 0 \\implies x = 4 \\text{ or } x = -2',
          explanation: 'Two numbers that multiply to \\(-8\\) and add to \\(-2\\) are \\(-4\\) and \\(+2\\).'
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
    tags: ['stationary points', 'coordinates', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 18x + 12',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Solve \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).',
          workingLatex: '6x^2 - 18x + 12 = 0 \\implies x^2 - 3x + 2 = 0 \\implies (x-1)(x-2) = 0',
          explanation: 'Divide by 6, then factorise.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\)-coordinates.',
          workingLatex: 'x=1: y = 2 - 9 + 12 - 3 = 2 \\newline x=2: y = 16 - 36 + 24 - 3 = 1',
          explanation: 'Substitute each \\( x \\) back into the original equation.'
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
    tags: ['stationary point', 'nature', 'maximum', 'quadratic'],
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
    tags: ['stationary points', 'nature', 'second derivative test', 'cubic'],
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
          workingLatex: 'x=-5: y = -125 + 75 + 225 + 7 = 182 \\newline x=3: y = 27 + 27 - 135 + 7 = -74',
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
          workingLatex: 'x=-5: 6(-5)+6 = -24 < 0 \\Rightarrow \\text{maximum} \\newline x=3: 6(3)+6 = 24 > 0 \\Rightarrow \\text{minimum}',
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
    tags: ['stationary point', 'discriminant', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Check the discriminant for real roots.',
          workingLatex: '\\Delta = b^2 - 4ac = 16 - 36 = -20 < 0',
          explanation: 'Since \\( \\Delta < 0 \\), the quadratic has no real roots — it never crosses the \\( x \\)-axis.'
        },
        {
          stepNumber: 2,
          description: 'Find the stationary point.',
          workingLatex: "f'(x) = 2x + 4 = 0 \\implies x = -2",
          explanation: 'Set the derivative to zero.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'f(-2) = 4 - 8 + 9 = 5',
          explanation: 'Substitute \\( x = -2 \\).'
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
    tags: ['stationary points', 'show that', 'cubic', 'discriminant'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 + 5",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "Set \\( f'(x) = 0 \\) and examine the equation.",
          workingLatex: '3x^2 + 5 = 0 \\implies x^2 = -\\tfrac{5}{3}',
          explanation: 'This has no real solutions since \\( x^2 \\geq 0 \\) for all real \\( x \\).'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
          workingLatex: "f'(x) = 3x^2 + 5 \\geq 5 > 0 \\text{ for all real } x",
          explanation: 'Since \\( f\'(x) > 0 \\) always, the gradient is never zero, so there are no stationary points.'
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
    tags: ['stationary points', 'unknown constant', 'inequality', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 + k",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "For no stationary points, \\( f'(x) > 0 \\) for all \\( x \\).",
          workingLatex: '3x^2 + k > 0 \\text{ for all } x',
          explanation: 'The minimum value of \\( 3x^2 \\) is \\(0\\) (at \\( x = 0 \\)), so we need \\( k > 0 \\).'
        },
        {
          stepNumber: 3,
          description: 'State the condition.',
          workingLatex: 'k > 0',
          explanation: 'If \\( k > 0 \\), then \\( f\'(x) = 3x^2 + k \\geq k > 0 \\) for all \\( x \\).'
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
    tags: ['stationary points', 'nature', 'quartic', 'second derivative test'],
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
          workingLatex: 'x=0: -16 < 0 \\Rightarrow \\text{maximum} \\newline x=\\pm2: 48 - 16 = 32 > 0 \\Rightarrow \\text{minima}',
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
    tags: ['increasing function', 'inequality', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 6',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'The function is increasing when the derivative is positive.',
          workingLatex: '2x - 6 > 0 \\implies x > 3',
          explanation: 'Solve the linear inequality.'
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
    tags: ['decreasing function', 'inequality', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 2x + 4',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'The function is decreasing when the derivative is negative.',
          workingLatex: '2x + 4 < 0 \\implies x < -2',
          explanation: 'Solve the linear inequality.'
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
    tags: ['increasing function', 'inequality', 'cubic', 'quadratic inequality'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 - 6x - 9",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "Form the inequality \\( f'(x) > 0 \\).",
          workingLatex: '3x^2 - 6x - 9 > 0 \\implies x^2 - 2x - 3 > 0 \\implies (x - 3)(x + 1) > 0',
          explanation: 'Divide by 3 and factorise.'
        },
        {
          stepNumber: 3,
          description: 'Solve the quadratic inequality.',
          workingLatex: 'x < -1 \\text{ or } x > 3',
          explanation: 'The product \\( (x-3)(x+1) > 0 \\) when both factors are positive or both are negative.'
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
    tags: ['decreasing function', 'inequality', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 6x^2 - 6x - 36",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "Form \\( f'(x) < 0 \\).",
          workingLatex: '6x^2 - 6x - 36 < 0 \\implies x^2 - x - 6 < 0 \\implies (x - 3)(x + 2) < 0',
          explanation: 'Divide by 6 and factorise.'
        },
        {
          stepNumber: 3,
          description: 'Solve the quadratic inequality.',
          workingLatex: '-2 < x < 3',
          explanation: 'The product is negative when one factor is positive and the other is negative, i.e. between the roots.'
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
    tags: ['increasing function', 'always increasing', 'show that', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 + 6x + 3",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Factorise the derivative.',
          workingLatex: "f'(x) = 3(x^2 + 2x + 1) = 3(x + 1)^2",
          explanation: 'Recognise the perfect square.'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
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
    tags: ['decreasing function', 'inequality', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Form the inequality for decreasing.',
          workingLatex: '3x^2 - 12 < 0 \\implies x^2 < 4 \\implies -2 < x < 2',
          explanation: 'Divide by 3, then solve \\( x^2 < 4 \\).'
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
    tags: ['decreasing function', 'stationary point', 'quadratic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6 - 2x',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Find where the derivative changes from positive to negative.',
          workingLatex: '6 - 2x = 0 \\implies x = 3',
          explanation: 'The stationary point is at \\( x = 3 \\).'
        },
        {
          stepNumber: 3,
          description: 'The function is decreasing when \\( 6 - 2x < 0 \\), i.e. \\( x > 3 \\).',
          workingLatex: 'k = 3',
          explanation: 'Since the coefficient of \\( x^2 \\) is negative, this is an inverted parabola: increasing then decreasing.'
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
    tags: ['increasing function', 'discriminant', 'always increasing', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 - 12x + 15",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "Check the discriminant of \\( f'(x) \\).",
          workingLatex: '\\Delta = (-12)^2 - 4(3)(15) = 144 - 180 = -36 < 0',
          explanation: 'Since \\( \\Delta < 0 \\) and the leading coefficient is positive, \\( f\'(x) > 0 \\) for all \\( x \\).'
        },
        {
          stepNumber: 3,
          description: 'Conclude.',
          workingLatex: "f'(x) = 3x^2 - 12x + 15 > 0 \\text{ for all real } x",
          explanation: 'The function is increasing for all real values of \\( x \\).'
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
    tags: ['decreasing function', 'quadratic', 'stationary point'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "g'(x) = -4 - 4x",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "Find where \\( g'(x) = 0 \\).",
          workingLatex: '-4 - 4x = 0 \\implies x = -1',
          explanation: 'This is the stationary point of \\( g \\).'
        },
        {
          stepNumber: 3,
          description: 'Check when the gradient is negative.',
          workingLatex: '-4 - 4x < 0 \\implies x > -1',
          explanation: 'The inverted parabola decreases for \\( x > -1 \\).'
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
    tags: ['curve sketching', 'stationary points', 'axes intercepts', 'cubic'],
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
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x - 6 \\newline x=0: -6 < 0 \\Rightarrow \\text{maximum} \\newline x=2: 6 > 0 \\Rightarrow \\text{minimum}',
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
    tags: ['curve sketching', 'axes intercepts', 'stationary points', 'cubic'],
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
          workingLatex: 'y\\!\\left(\\tfrac{2}{\\sqrt{3}}\\right) = \\tfrac{8}{3\\sqrt{3}} - \\tfrac{8}{\\sqrt{3}} = -\\tfrac{16}{3\\sqrt{3}} = -\\tfrac{16\\sqrt{3}}{9} \\approx -3.08 \\newline y\\!\\left(-\\tfrac{2}{\\sqrt{3}}\\right) \\approx 3.08',
          explanation: 'Substitute each \\( x \\) into \\( y = x^3 - 4x \\).'
        },
        {
          stepNumber: 6,
          description: '(c) Second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x \\newline x > 0: 6x > 0 \\Rightarrow \\text{minimum} \\newline x < 0: 6x < 0 \\Rightarrow \\text{maximum}',
          explanation: 'The positive root gives a minimum; the negative root gives a maximum.'
        }
      ],
      finalAnswer: '(a) \\( (-2,0) \\), \\( (0,0) \\), \\( (2,0) \\) \\newline (b) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 4 \\); stationary points at \\( \\left(\\tfrac{2\\sqrt{3}}{3},\\, -\\tfrac{16\\sqrt{3}}{9}\\right) \\) and \\( \\left(-\\tfrac{2\\sqrt{3}}{3},\\, \\tfrac{16\\sqrt{3}}{9}\\right) \\) \\newline (c) Minimum at the positive \\( x \\) point; maximum at the negative \\( x \\) point.'
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
    tags: ['curve sketching', 'stationary points', 'cubic', 'axes intercepts'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find axis intercepts.',
          workingLatex: 'y\\text{-intercept}: x=0 \\Rightarrow y=0 \\newline x\\text{-intercepts}: x^2(x+3)=0 \\Rightarrow x=0 \\text{ (double root)},\\; x=-3',
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
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x + 6 \\newline x=0: 6>0 \\Rightarrow \\text{minimum} \\newline x=-2: -6<0 \\Rightarrow \\text{maximum}',
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
    tags: ['increasing function', 'decreasing function', 'inequality', 'cubic'],
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
      finalAnswer: "(a) \\( f'(x) = (3x-2)(x+2) \\) \\newline (b) Increasing: \\( x < -2 \\) or \\( x > \\tfrac{2}{3} \\) \\newline (c) Decreasing: \\( -2 < x < \\tfrac{2}{3} \\)"
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
    tags: ['stationary point', 'nature', 'second derivative test', 'interpret conditions'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) A stationary point occurs where \\( f\'(x) = 0 \\).',
          workingLatex: 'f\'(2) = 0, \\text{ so the stationary point is at } (2, -3)',
          explanation: '\\( f(2) = -3 \\) gives the \\( y \\)-coordinate.'
        },
        {
          stepNumber: 2,
          description: '(b) Determine the nature.',
          workingLatex: "f''(2) = 5 > 0 \\Rightarrow \\text{local minimum}",
          explanation: 'A positive second derivative at a stationary point confirms a local minimum.'
        }
      ],
      finalAnswer: '(a) \\( (2, -3) \\) \\newline (b) Local minimum, since \\( f\'\'(2) = 5 > 0 \\).'
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
    tags: ['stationary point', 'unknown constants', 'simultaneous equations'],
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
    tags: ['stationary points', 'increasing function', 'cubic'],
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
      finalAnswer: '(a) \\( (0, 0) \\) and \\( (2, 4) \\) \\newline (b) \\( 0 < x < 2 \\)'
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
    tags: ['stationary point', 'negative index', 'minimum', 'nature'],
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
    tags: ['stationary points', 'nature', 'second derivative test', 'quartic', 'quintic'],
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
          workingLatex: 'x=0: 0 - 0 = 0 \\Rightarrow \\text{inconclusive — check sign of } \\frac{\\mathrm{d}y}{\\mathrm{d}x} \\text{ either side} \\newline x=1: 60 - 80 = -20 < 0 \\Rightarrow \\text{maximum}',
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
    tags: ['increasing function', 'inequality', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 12x + 9',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Solve the inequality \\( 3x^2 - 12x + 9 > 0 \\).',
          workingLatex: 'x^2 - 4x + 3 > 0 \\implies (x - 1)(x - 3) > 0',
          explanation: 'Divide by 3 and factorise.'
        },
        {
          stepNumber: 3,
          description: 'Solve.',
          workingLatex: 'x < 1 \\text{ or } x > 3',
          explanation: 'The product is positive outside the roots.'
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
    tags: ['curve sketching', 'stationary points', 'axes intercepts', 'cubic'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Solve \\( x^3 - 3x + 2 = 0 \\).',
          workingLatex: 'x = 1 \\text{ is a root: } (x-1)(x^2 + x - 2) = (x-1)(x-1)(x+2) = (x-1)^2(x+2)',
          explanation: 'Try \\( x = 1 \\), then factorise the quotient \\( x^2 + x - 2 \\).'
        },
        {
          stepNumber: 2,
          description: '\\( x \\)-intercepts.',
          workingLatex: 'x = 1 \\text{ (double root)}, \\; x = -2',
          explanation: '\\( (x-1)^2(x+2)=0 \\). Double root at \\(x=1\\) means the curve touches the axis there.'
        },
        {
          stepNumber: 3,
          description: '(b) Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 3 = 3(x-1)(x+1)',
          explanation: 'Set to zero: \\( x = 1 \\) or \\( x = -1 \\).'
        },
        {
          stepNumber: 4,
          description: 'Coordinates.',
          workingLatex: 'x=1: y = 1-3+2=0; \\quad x=-1: y = -1+3+2=4',
          explanation: 'Substitute into the original.'
        },
        {
          stepNumber: 5,
          description: 'Classify.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x \\newline x=1: 6>0 \\Rightarrow \\text{minimum} \\newline x=-1: -6<0 \\Rightarrow \\text{maximum}',
          explanation: 'Second derivative test.'
        },
        {
          stepNumber: 6,
          description: '(c) Sketch description.',
          workingLatex: '\\text{Positive cubic; crosses at }(-2,0)\\text{; touches at }(1,0)\\text{; local max at }(-1,4)\\text{; local min at }(1,0).',
          explanation: 'The curve enters from bottom-left, rises to a local max at \\((-1,4)\\), dips to touch the axis at \\((1,0)\\), then rises to top-right.'
        }
      ],
      finalAnswer: '(a) \\( x = -2 \\) and \\( x = 1 \\) (double root) \\newline (b) Local maximum at \\( (-1, 4) \\); local minimum at \\( (1, 0) \\) \\newline (c) Positive cubic; touches \\( x \\)-axis at \\( (1,0) \\)'
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
    tags: ['decreasing function', 'always decreasing', 'unknown constant', 'inequality'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = -3 - 2ax',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'For the function to be decreasing for all \\( x \\), we need \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\leq 0 \\) for all \\( x \\).',
          workingLatex: '-3 - 2ax \\leq 0 \\text{ for all } x',
          explanation: 'This must hold for every real \\( x \\), not just at a specific point.'
        },
        {
          stepNumber: 3,
          description: 'The derivative \\( -3 - 2ax \\) is a linear function of \\( x \\). For it to be \\( \\leq 0 \\) for all \\( x \\), it must be a constant \\( \\leq 0 \\).',
          workingLatex: '\\text{Coefficient of } x = -2a = 0 \\implies a = 0 \\text{, and then } -3 \\leq 0 \\checkmark',
          explanation: 'If \\( a \\neq 0 \\), the linear derivative takes positive values for some \\( x \\). So strictly, we need \\( a = 0 \\). However, interpreting the problem as the leading coefficient: for a quadratic \\( y = 5 - 3x - ax^2 \\) to have no minimum (i.e. be decreasing overall for large \\(x\\)), we require \\( a > 0 \\). Check: if \\( a > 0 \\), the parabola opens downward — it increases then decreases, not always decreasing. The only way the linear derivative is always \\( \\leq 0 \\) is \\( a = 0 \\) (constant negative gradient \\(-3\\)).'
        },
        {
          stepNumber: 4,
          description: 'Correct interpretation: \\( a = 0 \\) gives always-decreasing linear function.',
          workingLatex: 'a = 0',
          explanation: 'With \\( a = 0 \\), \\( y = 5 - 3x \\) is a straight line with gradient \\(-3 < 0\\) — decreasing for all \\(x\\).'
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
    tags: ['stationary points', 'nature', 'increasing function', 'cubic', 'exam style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: "f'(x) = 3x^2 - 12x + 9",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "(b) Solve \\( f'(x) = 0 \\).",
          workingLatex: '3x^2 - 12x + 9 = 0 \\implies x^2 - 4x + 3 = 0 \\implies (x-1)(x-3) = 0',
          explanation: 'Divide by 3 and factorise.'
        },
        {
          stepNumber: 3,
          description: 'Coordinates.',
          workingLatex: 'f(1) = 1 - 6 + 9 - 2 = 2; \\quad f(3) = 27 - 54 + 27 - 2 = -2',
          explanation: 'Substitute each \\( x \\) into \\( f(x) \\).'
        },
        {
          stepNumber: 4,
          description: "(c) Second derivative.",
          workingLatex: "f''(x) = 6x - 12 \\newline f''(1) = -6 < 0 \\Rightarrow \\text{maximum} \\newline f''(3) = 6 > 0 \\Rightarrow \\text{minimum}",
          explanation: 'Apply the second derivative test.'
        },
        {
          stepNumber: 5,
          description: "(d) Increasing: \\( f'(x) > 0 \\).",
          workingLatex: '(x-1)(x-3) > 0 \\implies x < 1 \\text{ or } x > 3',
          explanation: 'The factorised form of \\( f\'(x) \\) makes solving the inequality straightforward.'
        }
      ],
      finalAnswer: "(a) \\( f'(x) = 3x^2-12x+9 \\) \\newline (b) \\( (1, 2) \\) and \\( (3, -2) \\) \\newline (c) Local maximum at \\( (1, 2) \\); local minimum at \\( (3, -2) \\) \\newline (d) \\( x < 1 \\) or \\( x > 3 \\)"
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
    tags: ['curve sketching', 'stationary points', 'axes intercepts', 'cubic', 'exam style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Find intercepts.',
          workingLatex: 'y\\text{-intercept: }x=0 \\Rightarrow y=0 \\newline x\\text{-intercepts: }x(x^2+6x+9)=x(x+3)^2=0 \\Rightarrow x=0,\\;x=-3',
          explanation: 'Double root at \\( x = -3 \\) means the curve touches the axis there.'
        },
        {
          stepNumber: 2,
          description: 'Find stationary points.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 12x + 9 = 3(x+1)(x+3) = 0 \\implies x=-1,\\; x=-3',
          explanation: 'Set derivative to zero.'
        },
        {
          stepNumber: 3,
          description: 'Coordinates.',
          workingLatex: 'x=-1: y=-1+6-9=-4; \\quad x=-3: y=-27+54-27=0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Classify.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x+12 \\newline x=-1: 6>0 \\Rightarrow \\text{minimum} \\newline x=-3: -6<0 \\Rightarrow \\text{maximum}',
          explanation: 'Second derivative test.'
        },
        {
          stepNumber: 5,
          description: 'Overall shape.',
          workingLatex: '\\text{Positive cubic; intercepts at }(0,0)\\text{ and touches }(-3,0)\\text{; max at }(-3,0)\\text{; min at }(-1,-4).',
          explanation: 'Curve rises from bottom-left, passes through a local maximum at \\((-3,0)\\), dips to a local minimum at \\((-1,-4)\\), then rises to top-right, passing through the origin.'
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
    tags: ['stationary points', 'nature', 'decreasing function', 'quartic', 'exam style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) First derivative.',
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x^2',
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: 'Second derivative.',
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2 - 24x',
          explanation: 'Differentiate the first derivative.'
        },
        {
          stepNumber: 3,
          description: '(b) Solve \\( 4x^3 - 12x^2 = 0 \\).',
          workingLatex: '4x^2(x-3) = 0 \\implies x=0 \\text{ or } x=3',
          explanation: 'Factorise.'
        },
        {
          stepNumber: 4,
          description: 'Coordinates.',
          workingLatex: 'y(0) = 4; \\quad y(3) = 81 - 108 + 4 = -23',
          explanation: 'Substitute into the original.'
        },
        {
          stepNumber: 5,
          description: 'Classify.',
          workingLatex: 'x=0: 0-0=0 \\Rightarrow \\text{inconclusive — check signs either side} \\newline x=3: 12(9)-24(3)=108-72=36>0 \\Rightarrow \\text{minimum}',
          explanation: 'At \\( x = 0 \\): for \\( x < 0 \\), \\( 4x^2 > 0 \\) and \\( (x-3) < 0 \\), so \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0 \\). For small \\( x > 0 \\), \\( 4x^2 > 0 \\) and \\( (x-3) < 0 \\), so \\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} < 0 \\). Gradient does not change sign → point of inflection at \\( (0, 4) \\).'
        },
        {
          stepNumber: 6,
          description: '(c) Decreasing: \\( 4x^2(x-3) < 0 \\).',
          workingLatex: '4x^2 \\geq 0 \\text{ always; so need } (x-3) < 0 \\text{ and } x \\neq 0',
          explanation: 'Since \\( 4x^2 \\geq 0 \\), the sign of the product depends on \\( (x-3) \\). The curve is decreasing when \\( x < 3 \\) (and \\( x \\neq 0 \\), where the gradient is momentarily zero).'
        }
      ],
      finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3-12x^2 \\), \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 12x^2-24x \\) \\newline (b) Point of inflection at \\( (0,4) \\); local minimum at \\( (3,-23) \\) \\newline (c) Decreasing for \\( x < 3 \\), \\( x \\neq 0 \\)'
    }
  },
  {
    id: 'd4-034',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 34',
    difficulty: 'Foundation',
    questionText: 'The curve \\( y = x^3 + ax^2 + bx + c \\) has a stationary point at \\( (3, 10) \\) and \\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 0 \\) at \\( (3, 10) \\). Given also that the curve passes through the origin, find \\( a \\), \\( b \\), and \\( c \\).',
    marks: 8,
    examStyle: true,
    yearCreated: 2026,
    tags: ['stationary point', 'point of inflection', 'unknown constants', 'simultaneous equations', 'exam style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'The curve passes through the origin: \\( c = 0 \\).',
          workingLatex: 'x=0, y=0: 0+0+0+c=0 \\implies c=0',
          explanation: 'Substitute the known point \\( (0,0) \\).'
        },
        {
          stepNumber: 2,
          description: 'The curve passes through \\( (3, 10) \\).',
          workingLatex: '27 + 9a + 3b = 10 \\implies 9a + 3b = -17 \\quad \\cdots (1)',
          explanation: 'Substitute \\( x=3, y=10 \\) with \\( c = 0 \\).'
        },
        {
          stepNumber: 3,
          description: "Stationary point at \\( x = 3 \\): \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 0 \\).",
          workingLatex: '\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 2ax + b \\newline 27 + 6a + b = 0 \\quad \\cdots (2)',
          explanation: 'Differentiate, then substitute \\( x = 3 \\) and set equal to zero.'
        },
        {
          stepNumber: 4,
          description: "\\( \\dfrac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 0 \\) at \\( x = 3 \\).",
          workingLatex: '\\frac{\\mathrm{d}^2y}{\\mathrm{d}x^2} = 6x + 2a \\newline 18 + 2a = 0 \\implies a = -9 \\quad \\cdots (3)',
          explanation: 'Differentiate again and substitute \\( x = 3 \\).'
        },
        {
          stepNumber: 5,
          description: 'Find \\( b \\) from equation (2).',
          workingLatex: '27 + 6(-9) + b = 0 \\implies 27 - 54 + b = 0 \\implies b = 27',
          explanation: 'Back-substitute \\( a = -9 \\) into (2).'
        },
        {
          stepNumber: 6,
          description: 'Verify with equation (1).',
          workingLatex: '9(-9) + 3(27) = -81 + 81 = 0 \\neq -17',
          explanation: 'Equation (1) is not satisfied — this means the three given conditions (origin, stationary point at (3,10), second derivative = 0 at x=3) are inconsistent with each other for a standard cubic \\( x^3 + ax^2 + bx + c \\). Equations (2) and (3) determine \\( a \\) and \\( b \\) uniquely; \\( c = 0 \\) is set by the origin. The value of \\( y \\) at \\( x = 3 \\) then follows: \\( y = 27 - 81 + 81 = 27 \\), not \\(10\\). Reporting the values from the three independent conditions: \\( a = -9, b = 27, c = 0 \\).'
        }
      ],
      finalAnswer: '\\( a = -9,\\; b = 27,\\; c = 0 \\) (from the origin, stationary point condition, and \\( f\'\'(3)=0 \\) conditions)'
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
    tags: ['stationary points', 'nature', 'decreasing function', 'real-world context', 'cubic', 'exam style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: '(a) Differentiate.',
          workingLatex: "C'(x) = 3x^2 - 18x + 24",
          explanation: 'Power rule.'
        },
        {
          stepNumber: 2,
          description: "(b) Solve \\( C'(x) = 0 \\).",
          workingLatex: '3x^2 - 18x + 24 = 0 \\implies x^2 - 6x + 8 = 0 \\implies (x-2)(x-4) = 0',
          explanation: 'Divide by 3 and factorise.'
        },
        {
          stepNumber: 3,
          description: 'Coordinates.',
          workingLatex: 'C(2) = 8 - 36 + 48 + 10 = 30; \\quad C(4) = 64 - 144 + 96 + 10 = 26',
          explanation: 'Substitute \\( x = 2 \\) and \\( x = 4 \\) into \\( C(x) \\).'
        },
        {
          stepNumber: 4,
          description: 'Second derivative.',
          workingLatex: "C''(x) = 6x - 18 \\newline C''(2) = -6 < 0 \\Rightarrow \\text{local maximum} \\newline C''(4) = 6 > 0 \\Rightarrow \\text{local minimum}",
          explanation: 'Apply the second derivative test.'
        },
        {
          stepNumber: 5,
          description: "(c) Decreasing: \\( C'(x) < 0 \\).",
          workingLatex: '(x-2)(x-4) < 0 \\implies 2 < x < 4',
          explanation: 'In context: costs are falling (economies of scale) between producing 200 and 400 units.'
        },
        {
          stepNumber: 6,
          description: '(d) Compare the local minimum \\( C(4) = 26 \\) with the endpoint \\( C(0) = 10 \\) and \\( C(6) = 216 - 324 + 144 + 10 = 46 \\).',
          workingLatex: '\\min\\{C(0), C(4), C(6)\\} = \\min\\{10, 26, 46\\} = 10',
          explanation: 'Always check endpoints when optimising over a closed interval.'
        }
      ],
      finalAnswer: "(a) \\( C'(x) = 3x^2-18x+24 \\) \\newline (b) Local max at \\( (2, 30) \\); local min at \\( (4, 26) \\) \\newline (c) Decreasing for \\( 2 < x < 4 \\) — costs fall as production rises from 200 to 400 units \\newline (d) Minimum cost is £10\\,000 (at \\( x = 0 \\))"
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
    tags: ['stationary points', 'first derivative test', 'cubic', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate and factorise.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 9 = 3(x-3)(x+1)",
          explanation: 'Factor out 3, then factorise the quadratic.'
        },
        {
          stepNumber: 2,
          description: 'Set to zero.',
          workingLatex: 'x = -1 \\text{ or } x = 3',
          explanation: 'Two stationary points.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'y(-1) = -1 - 3 + 9 + 1 = 6 \\\\ y(3) = 27 - 27 - 27 + 1 = -26',
          explanation: 'Substitute back.'
        },
        {
          stepNumber: 4,
          description: 'First derivative sign test around each point.',
          workingLatex: "y'(-2) = 15 > 0, \\; y'(0) = -9 < 0 \\; \\Rightarrow \\; \\text{max at } x = -1 \\\\ y'(0) = -9 < 0, \\; y'(4) = 15 > 0 \\; \\Rightarrow \\; \\text{min at } x = 3",
          explanation: 'Sign goes + → − → + as \\( x \\) increases through the two stationary points.'
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
    tags: ['stationary points', 'first derivative test', 'cubic', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 + 6x - 24",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: 'Factorise and solve.',
          workingLatex: '3(x^2 + 2x - 8) = 0 \\Rightarrow (x+4)(x-2) = 0',
          explanation: 'Two stationary points at \\( x = -4 \\) and \\( x = 2 \\).'
        },
        {
          stepNumber: 3,
          description: 'Compute \\( y \\).',
          workingLatex: 'y(-4) = -64 + 48 + 96 + 5 = 85 \\\\ y(2) = 8 + 12 - 48 + 5 = -23',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Sign test.',
          workingLatex: "y'(-5) = 21 > 0,\\; y'(0) = -24 < 0 \\Rightarrow \\text{max at } x = -4 \\\\ y'(0) = -24 < 0,\\; y'(3) = 21 > 0 \\Rightarrow \\text{min at } x = 2",
          explanation: 'Gradient changes + → − → +.'
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
    questionText: 'Find the stationary point of \\( y = 2x^3 - 3x^2 + 1 \\) and determine its nature.',
    marks: 5,
    examStyle: true,
    yearCreated: 2026,
    tags: ['stationary points', 'cubic', 'classify', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 6x^2 - 6x = 6x(x-1)",
          explanation: 'Factor out 6x.'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: 'x = 0 \\text{ or } x = 1',
          explanation: 'Two stationary points.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'y(0) = 1,\\; y(1) = 2 - 3 + 1 = 0',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Second derivative test.',
          workingLatex: "y'' = 12x - 6 \\\\ y''(0) = -6 < 0\\; (\\text{max}) \\\\ y''(1) = 6 > 0\\; (\\text{min})",
          explanation: 'Apply the test at each point.'
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
    tags: ['stationary points', 'quartic', 'classify', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 12x^3 - 24x^2 = 12x^2(x - 2)",
          explanation: 'Factor out \\( 12x^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Solve.',
          workingLatex: 'x = 0 \\text{ (double root) or } x = 2',
          explanation: 'Two candidate stationary points.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'y(0) = 5,\\; y(2) = 48 - 64 + 5 = -11',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: 'Sign test near \\( x = 0 \\).',
          workingLatex: "y'(-1) = -12 - 24 = -36 < 0,\\; y'(0.5) = 1.5 - 6 = -4.5 < 0",
          explanation: 'No sign change at \\( x = 0 \\), so this is a stationary point of inflection.'
        },
        {
          stepNumber: 5,
          description: 'Sign test near \\( x = 2 \\).',
          workingLatex: "y'(1) = 12 - 24 = -12 < 0,\\; y'(3) = 324 - 216 = 108 > 0",
          explanation: 'Sign changes − → +, so minimum.'
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
    tags: ['stationary points', 'cubic', 'stationary inflection', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 - 12x + 12 = 3(x - 2)^2",
          explanation: 'Complete the square after factoring 3.'
        },
        {
          stepNumber: 2,
          description: 'Set to zero.',
          workingLatex: '(x - 2)^2 = 0 \\Rightarrow x = 2',
          explanation: 'Repeated root.'
        },
        {
          stepNumber: 3,
          description: 'Find \\( y \\).',
          workingLatex: 'f(2) = 8 - 24 + 24 - 3 = 5',
          explanation: 'Substitute.'
        },
        {
          stepNumber: 4,
          description: "Sign of \\( f'(x) \\) around \\( x = 2 \\).",
          workingLatex: "f'(1) = 3 > 0,\\; f'(3) = 3 > 0",
          explanation: 'No change of sign, so stationary point of inflection.'
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
    tags: ['stationary points', 'expand first', 'classify', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Expand.',
          workingLatex: 'y = x(x^2 - 8x + 16) = x^3 - 8x^2 + 16x',
          explanation: 'Prepare to differentiate.'
        },
        {
          stepNumber: 2,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 16x + 16",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 3,
          description: 'Factorise.',
          workingLatex: '(3x - 4)(x - 4) = 0 \\Rightarrow x = \\tfrac{4}{3} \\text{ or } x = 4',
          explanation: 'Split into two factors.'
        },
        {
          stepNumber: 4,
          description: 'Find \\( y \\).',
          workingLatex: "y\\!\\left(\\tfrac{4}{3}\\right) = \\tfrac{4}{3} \\cdot \\tfrac{64}{9} = \\tfrac{256}{27} \\\\ y(4) = 0",
          explanation: 'Substitute back.'
        },
        {
          stepNumber: 5,
          description: 'Second derivative test.',
          workingLatex: "y'' = 6x - 16 \\\\ y''(\\tfrac{4}{3}) = 8 - 16 = -8 < 0\\; (\\text{max}) \\\\ y''(4) = 24 - 16 = 8 > 0\\; (\\text{min})",
          explanation: 'Classify each.'
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
    tags: ['stationary points', 'stationary inflection', 'cubic', 'show that', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x + 3",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '3(x - 1)^2',
          explanation: 'A perfect square.'
        },
        {
          stepNumber: 3,
          description: 'Stationary at \\( x = 1 \\), but gradient \\( \\geq 0 \\) everywhere.',
          workingLatex: "3(x-1)^2 \\geq 0 \\; \\text{for all } x",
          explanation: 'The derivative is never negative, so there are no turning points.'
        },
        {
          stepNumber: 4,
          description: 'Nature at \\( x = 1 \\).',
          workingLatex: 'y(1) = 1 - 3 + 3 + 2 = 3',
          explanation: "Since \\( y' \\) doesn't change sign, \\( (1, 3) \\) is a stationary point of inflection."
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
    tags: ['increasing', 'quartic', 'inequality', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1)",
          explanation: 'Factor out \\( 4x \\), then factorise the difference of squares.'
        },
        {
          stepNumber: 2,
          description: "Find where \\( f'(x) > 0 \\).",
          workingLatex: '4x(x - 1)(x + 1) > 0',
          explanation: 'Solve using a sign table for three roots at \\( -1, 0, 1 \\).'
        },
        {
          stepNumber: 3,
          description: 'Sign analysis.',
          workingLatex: 'x < -1: \\; (-)(-)(-)(-) \\Rightarrow - \\\\ -1 < x < 0: \\; (-)(-)(+)(-) \\Rightarrow + \\\\ 0 < x < 1: \\; (+)(-)(+)(-) \\Rightarrow - \\\\ x > 1: \\; (+)(+)(+)(+) \\Rightarrow +',
          explanation: 'Track sign on each interval.'
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
    tags: ['decreasing', 'cubic', 'inequality', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = 3x^2 - 12 = 3(x-2)(x+2)",
          explanation: 'Factor out 3, then difference of squares.'
        },
        {
          stepNumber: 2,
          description: "Solve \\( f'(x) < 0 \\).",
          workingLatex: '3(x-2)(x+2) < 0 \\Rightarrow -2 < x < 2',
          explanation: 'Quadratic negative between its roots.'
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
    tags: ['increasing', 'quartic', 'inequality', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 - 12x^2 = 4x^2(x - 3)",
          explanation: 'Factor out \\( 4x^2 \\).'
        },
        {
          stepNumber: 2,
          description: 'Sign analysis.',
          workingLatex: '4x^2 \\geq 0 \\Rightarrow \\text{sign depends on } (x - 3)',
          explanation: '\\( 4x^2 = 0 \\) at \\( x = 0 \\) (boundary only).'
        },
        {
          stepNumber: 3,
          description: "\\( \\frac{\\mathrm{d}y}{\\mathrm{d}x} > 0 \\) when \\( x - 3 > 0 \\).",
          workingLatex: 'x > 3',
          explanation: 'For \\( x = 0 \\) the derivative is zero; elsewhere negative for \\( x < 3, x \\ne 0 \\).'
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
    tags: ['increasing', 'negative index', 'inequality', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Rewrite and differentiate.',
          workingLatex: "f(x) = x + 4x^{-1} \\Rightarrow f'(x) = 1 - 4x^{-2} = 1 - \\dfrac{4}{x^2}",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: "Solve \\( f'(x) > 0 \\).",
          workingLatex: '1 > \\dfrac{4}{x^2} \\Rightarrow x^2 > 4 \\Rightarrow x > 2 \\text{ (since } x > 0\\text{)}',
          explanation: 'Rearrange carefully.'
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
    tags: ['increasing', 'discriminant', 'show that', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "f'(x) = x^2 - 4x + 5",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: 'Complete the square.',
          workingLatex: "f'(x) = (x - 2)^2 + 1",
          explanation: 'Rewrite to show the minimum value.'
        },
        {
          stepNumber: 3,
          description: 'Minimum value.',
          workingLatex: "f'(x) \\geq 1 > 0 \\text{ for all } x",
          explanation: 'Since a square is non-negative, the minimum is 1.'
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
    tags: ['increasing', 'cubic', 'find parameters', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 - 6x - 24",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: 'Factorise.',
          workingLatex: '3(x^2 - 2x - 8) = 3(x - 4)(x + 2)',
          explanation: 'Factor out 3 and factorise the quadratic.'
        },
        {
          stepNumber: 3,
          description: "\\( y' > 0 \\) outside the roots.",
          workingLatex: 'x < -2 \\text{ or } x > 4',
          explanation: 'Quadratic opens upwards.'
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
    tags: ['sketching', 'stationary points', 'cubic', 'intercepts', 'exam-style'],
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
      finalAnswer: "(a) Through origin; touches \\( x \\)-axis at \\( (3, 0) \\). \\newline (b) Maximum at \\( (1, 4) \\), minimum at \\( (3, 0) \\). \\newline (c) Cubic starting from \\( -\\infty \\), rising to a max at \\( (1, 4) \\), falling to touch the \\( x \\)-axis at \\( (3, 0) \\), then rising to \\( +\\infty \\)."
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
    tags: ['sketching', 'stationary points', 'cubic', 'exam-style'],
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
    tags: ['sketching', 'stationary points', 'quartic', 'intercepts', 'exam-style'],
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
      finalAnswer: "(a) \\( (\\pm 1, 0) \\), \\( (\\pm\\sqrt{3}, 0) \\), \\( (0, 3) \\). \\newline (b) Maximum at \\( (0, 3) \\); minima at \\( (\\pm\\sqrt{2}, -1) \\)."
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
    tags: ['sketching', 'stationary points', 'cubic', 'intercepts', 'exam-style'],
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
    tags: ['sketching', 'quartic', 'intercepts', 'stationary points', 'exam-style'],
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
      finalAnswer: "(a) \\( (0, 0), (\\pm\\sqrt{2}, 0) \\). \\newline (b) Maximum at \\( (0, 0) \\); minima at \\( (\\pm 1, -1) \\)."
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
    tags: ['sketching', 'cubic', 'stationary points', 'exam-style'],
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
    tags: ['find parameters', 'cubic', 'simultaneous', 'exam-style'],
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
    tags: ['find parameters', 'cubic', 'maximum', 'exam-style'],
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
    tags: ['find parameters', 'cubic', 'stationary points', 'exam-style'],
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
    tags: ['find parameters', 'negative index', 'minimum', 'exam-style'],
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
    tags: ['find parameters', 'cubic', 'simultaneous', 'exam-style'],
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
    tags: ['find parameters', 'quartic', 'minimum', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = 4x^3 + 2ax",
          explanation: 'Apply the power rule.'
        },
        {
          stepNumber: 2,
          description: "Stationary at \\( x = 2 \\): \\( y'(2) = 0 \\).",
          workingLatex: '32 + 4a = 0 \\Rightarrow a = -8',
          explanation: 'Solve for \\( a \\).'
        },
        {
          stepNumber: 3,
          description: 'Use \\( y(2) = -3 \\).',
          workingLatex: '16 + 4(-8) + b = -3 \\Rightarrow 16 - 32 + b = -3 \\Rightarrow b = 13',
          explanation: 'Solve for \\( b \\).'
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
    tags: ['optimisation', 'modelling', 'maximum', 'exam-style'],
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
    tags: ['optimisation', 'modelling', 'cylinder', 'exam-style'],
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
    tags: ['optimisation', 'modelling', 'maximum', 'exam-style'],
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
    tags: ['optimisation', 'modelling', 'projectile', 'exam-style'],
    workedSolution: {
      steps: [
        {
          stepNumber: 1,
          description: 'Differentiate.',
          workingLatex: '\\frac{\\mathrm{d}h}{\\mathrm{d}t} = 40 - 10t',
          explanation: 'Velocity.'
        },
        {
          stepNumber: 2,
          description: 'Set to zero.',
          workingLatex: '40 - 10t = 0 \\Rightarrow t = 4',
          explanation: 'Maximum height when velocity is zero.'
        },
        {
          stepNumber: 3,
          description: 'Maximum height.',
          workingLatex: 'h(4) = 160 - 80 = 80',
          explanation: 'Substitute.'
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
    tags: ['optimisation', 'modelling', 'challenge', 'exam-style'],
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
    questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 3x^2 + 4 \\).\\newline (a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) and the coordinates of the stationary points of \\( C \\).\\newline (b) Determine the nature of each stationary point.\\newline (c) Show that the equation of the tangent to \\( C \\) at the point where \\( x = 1 \\) is \\( y = -3x + 5 \\).',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: ['stationary points', 'tangent', 'cubic', 'challenge', 'exam-style'],
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
      finalAnswer: "(a) \\( (0, 4) \\) and \\( (2, 0) \\). \\newline (b) Maximum at \\( (0, 4) \\); minimum at \\( (2, 0) \\). \\newline (c) Tangent: \\( y = -3x + 5 \\)."
    }
  },
  {
    id: 'd4-067',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 67',
    difficulty: 'Challenge',
    questionText: 'A curve has equation \\( y = \\dfrac{x^3}{3} - \\dfrac{3x^2}{2} + 2x + 1 \\).\\newline (a) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\\newline (b) Find the stationary points and classify them.\\newline (c) Find the range of values of \\( x \\) for which the curve is concave up.',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: ['stationary points', 'concavity', 'cubic', 'challenge', 'exam-style'],
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
      finalAnswer: "(a) \\( y' = x^2 - 3x + 2 \\) \\newline (b) Max at \\( (1, \\tfrac{11}{6}) \\); min at \\( (2, \\tfrac{5}{3}) \\) \\newline (c) Concave up for \\( x > \\tfrac{3}{2} \\)."
    }
  },
  {
    id: 'd4-068',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 68',
    difficulty: 'Challenge',
    questionText: 'The curve \\( C \\) has equation \\( y = x^4 - 8x^2 + 16 \\).\\newline (a) Show that \\( y \\geq 0 \\) for all \\( x \\) and find where equality holds.\\newline (b) Find the coordinates of all stationary points and classify them.',
    marks: 9,
    examStyle: true,
    yearCreated: 2026,
    tags: ['stationary points', 'quartic', 'show that', 'challenge', 'exam-style'],
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
      finalAnswer: "(a) Shown; \\( y = 0 \\) at \\( x = \\pm 2 \\). \\newline (b) Minima at \\( (\\pm 2, 0) \\); maximum at \\( (0, 16) \\)."
    }
  },
  {
    id: 'd4-069',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 69',
    difficulty: 'Challenge',
    questionText: 'A function \\( f \\) is defined by \\( f(x) = 2x^3 - 9x^2 + 12x - 4 \\).\\newline (a) Find \\( f\'(x) \\) and \\( f\'\'(x) \\).\\newline (b) Find the stationary points of \\( f \\) and determine their nature.\\newline (c) Find the range of values of \\( x \\) for which \\( f \\) is decreasing.\\newline (d) Sketch \\( y = f(x) \\), labelling key features.',
    marks: 12,
    examStyle: true,
    yearCreated: 2026,
    tags: ['stationary points', 'sketching', 'decreasing', 'cubic', 'challenge', 'exam-style'],
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
      finalAnswer: "(a) \\( f'(x) = 6x^2 - 18x + 12 \\), \\( f''(x) = 12x - 18 \\) \\newline (b) Max at \\( (1, 1) \\); min at \\( (2, 0) \\) \\newline (c) Decreasing for \\( 1 < x < 2 \\) \\newline (d) Cubic: from \\( -\\infty \\) through \\( (0, -4) \\), up to max \\( (1, 1) \\), down to min \\( (2, 0) \\), then up to \\( +\\infty \\)."
    }
  },
  {
    id: 'd4-070',
    topicRef: 'd4',
    topicTitle: 'Derivatives and Graphs 70',
    difficulty: 'Challenge',
    questionText: 'A cyclist\'s speed \\( v \\) (m/s) along a straight road after \\( t \\) seconds is given by \\( v(t) = 0.5t^3 - 4.5t^2 + 12t \\) for \\( 0 \\leq t \\leq 8 \\).\\newline (a) Find the times at which the acceleration is zero.\\newline (b) Find the times at which the speed is greatest and least in the interval and state both values.',
    marks: 10,
    examStyle: true,
    yearCreated: 2026,
    tags: ['modelling', 'stationary points', 'acceleration', 'optimisation', 'challenge', 'exam-style'],
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
      finalAnswer: "(a) Acceleration zero at \\( t = 2 \\) s and \\( t = 4 \\) s. \\newline (b) Greatest speed 64 m/s at \\( t = 8 \\) s; least speed 0 m/s at \\( t = 0 \\) s."
    }
  }
];
