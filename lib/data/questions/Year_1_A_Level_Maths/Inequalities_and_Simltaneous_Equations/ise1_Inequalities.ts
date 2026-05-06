import { Question } from "@/lib/types";

/**
 * Topic: The Discriminant
 * Ref:   a3
 */
export const questions: Question[] = [  // Topic: Algebraic Division
    // topicRef: a18
    // 50 questions — Foundation difficulty

    // Topic: Solving Linear Inequalities
    // topicRef: 'ise1'

    // ─── TYPE A: Basic one-step / two-step linear inequalities ───────────────────
    // Q1–Q15

    {
        id: 'ise1-001',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 01',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 3x - 4 < 11 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add 4 to both sides.',
                    workingLatex: '3x < 15',
                    explanation: 'Isolate the term containing \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 3.',
                    workingLatex: 'x < 5',
                    explanation: 'Dividing by a positive number does not change the direction of the inequality.'
                }
            ],
            finalAnswer: '\\( x < 5 \\)',
        }
    },

    {
        id: 'ise1-002',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 02',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 2x + 5 \\geq 13 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 5 from both sides.',
                    workingLatex: '2x \\geq 8',
                    explanation: 'Isolate the term containing \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 2.',
                    workingLatex: 'x \\geq 4',
                    explanation: 'Dividing by a positive number keeps the inequality direction unchanged.'
                }
            ],
            finalAnswer: '\\( x \\geq 4 \\)',
        }
    },

    {
        id: 'ise1-003',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 03',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5x - 3 > 12 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add 3 to both sides.',
                    workingLatex: '5x > 15',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 5.',
                    workingLatex: 'x > 3',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x > 3 \\)',
        }
    },

    {
        id: 'ise1-004',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 04',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 4x + 7 \\leq 3 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 7 from both sides.',
                    workingLatex: '4x \\leq -4',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by 4.',
                    workingLatex: 'x \\leq -1',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x \\leq -1 \\)',
        }
    },

    {
        id: 'ise1-005',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 05',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 7 - 2x < 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 7 from both sides.',
                    workingLatex: '-2x < -6',
                    explanation: 'Bring the constant to the right.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( -2 \\) and reverse the inequality.',
                    workingLatex: 'x > 3',
                    explanation: 'Dividing by a negative number reverses the direction of the inequality.'
                }
            ],
            finalAnswer: '\\( x > 3 \\)',
        }
    },

    {
        id: 'ise1-006',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 06',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 10 - 3x \\geq 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 10 from both sides.',
                    workingLatex: '-3x \\geq -9',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( -3 \\) and reverse the inequality.',
                    workingLatex: 'x \\leq 3',
                    explanation: 'Dividing by a negative number flips the inequality.'
                }
            ],
            finalAnswer: '\\( x \\leq 3 \\)',
        }
    },

    {
        id: 'ise1-007',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 07',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 8 - 5x > -7 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 8 from both sides.',
                    workingLatex: '-5x > -15',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( -5 \\) and reverse the inequality.',
                    workingLatex: 'x < 3',
                    explanation: 'Dividing by a negative reverses the inequality.'
                }
            ],
            finalAnswer: '\\( x < 3 \\)',
        }
    },

    {
        id: 'ise1-008',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 08',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 12 - 4x \\leq 0 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 12 from both sides.',
                    workingLatex: '-4x \\leq -12',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide both sides by \\( -4 \\) and reverse the inequality.',
                    workingLatex: 'x \\geq 3',
                    explanation: 'Dividing by a negative flips the inequality.'
                }
            ],
            finalAnswer: '\\( x \\geq 3 \\)',
        }
    },

    {
        id: 'ise1-009',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 09',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 6x + 1 > 4x + 9 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 4x \\) from both sides.',
                    workingLatex: '2x + 1 > 9',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 1 from both sides.',
                    workingLatex: '2x > 8',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 2.',
                    workingLatex: 'x > 4',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x > 4 \\)',
        }
    },

    {
        id: 'ise1-010',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 10',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5x - 2 \\leq 3x + 8 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 3x \\) from both sides.',
                    workingLatex: '2x - 2 \\leq 8',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 2 to both sides.',
                    workingLatex: '2x \\leq 10',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 2.',
                    workingLatex: 'x \\leq 5',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\\( x \\leq 5 \\)',
        }
    },

    {
        id: 'ise1-011',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 11',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 7x + 3 < 4x - 6 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 4x \\) from both sides.',
                    workingLatex: '3x + 3 < -6',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 3 from both sides.',
                    workingLatex: '3x < -9',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 3.',
                    workingLatex: 'x < -3',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x < -3 \\)',
        }
    },

    {
        id: 'ise1-012',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 12',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 9 - x \\geq 7x + 1 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( x \\) to both sides.',
                    workingLatex: '9 \\geq 8x + 1',
                    explanation: 'Move \\( x \\) to the right to keep its coefficient positive.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 1 from both sides.',
                    workingLatex: '8 \\geq 8x',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 8.',
                    workingLatex: '1 \\geq x \\quad \\Rightarrow \\quad x \\leq 1',
                    explanation: 'Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\\( x \\leq 1 \\)',
        }
    },

    {
        id: 'ise1-013',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 13',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 4 - 3x < 2x - 11 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( 3x \\) to both sides.',
                    workingLatex: '4 < 5x - 11',
                    explanation: 'Eliminate the \\( x \\) term from the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 11 to both sides.',
                    workingLatex: '15 < 5x',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 5.',
                    workingLatex: '3 < x \\quad \\Rightarrow \\quad x > 3',
                    explanation: 'Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\\( x > 3 \\)',
        }
    },

    {
        id: 'ise1-014',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 14',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 8x - 1 \\geq 5x + 11 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 5x \\) from both sides.',
                    workingLatex: '3x - 1 \\geq 11',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 1 to both sides.',
                    workingLatex: '3x \\geq 12',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 3.',
                    workingLatex: 'x \\geq 4',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\\( x \\geq 4 \\)',
        }
    },

    {
        id: 'ise1-015',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 15',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 3 - 4x > 5 - 2x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( 4x \\) to both sides.',
                    workingLatex: '3 > 5 + 2x',
                    explanation: 'Eliminate \\( x \\) from the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 5 from both sides.',
                    workingLatex: '-2 > 2x',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 2.',
                    workingLatex: '-1 > x \\quad \\Rightarrow \\quad x < -1',
                    explanation: 'Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\( x < -1 \)',
        }
    },


    // ─── TYPE B: Inequalities with x on both sides, slightly more complex ────────
    // Q16–Q25

    {
        id: 'ise1-016',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 16',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 2x - 7 < x + 3 \\). Represent the solution on a number line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( x \\) from both sides.',
                    workingLatex: 'x - 7 < 3',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 7 to both sides.',
                    workingLatex: 'x < 10',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'On a number line, draw an open circle at 10 and shade to the left.',
                    workingLatex: '\\longleftarrow \\circ\\!\\!\\!\\!\\!\\!10',
                    explanation: 'Open circle because \\( x < 10 \\) (10 is not included).'
                }
            ],
            finalAnswer: '\( x < 10 \)',
        }
    },

    {
        id: 'ise1-017',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 17',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 4x + 5 > 2x + 13 \\). Represent the solution on a number line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 2x \\) from both sides.',
                    workingLatex: '2x + 5 > 13',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 5 from both sides.',
                    workingLatex: '2x > 8',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 2. Show open circle at 4, shading right.',
                    workingLatex: 'x > 4',
                    explanation: 'Open circle because 4 is not included.'
                }
            ],
            finalAnswer: '\( x > 4 \)',
        }
    },

    {
        id: 'ise1-018',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 18',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 6x - 3 \\geq 3x + 9 \\). Represent the solution on a number line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 3x \\) from both sides.',
                    workingLatex: '3x - 3 \\geq 9',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 3 to both sides.',
                    workingLatex: '3x \\geq 12',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 3. Show closed circle at 4, shading right.',
                    workingLatex: 'x \\geq 4',
                    explanation: 'Closed circle because \\( x = 4 \\) is included.'
                }
            ],
            finalAnswer: '\( x \\geq 4 \)',
        }
    },

    {
        id: 'ise1-019',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 19',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5x - 4 \\leq 2x + 2 \\). Represent the solution on a number line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 2x \\) from both sides.',
                    workingLatex: '3x - 4 \\leq 2',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 4 to both sides.',
                    workingLatex: '3x \\leq 6',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 3. Show closed circle at 2, shading left.',
                    workingLatex: 'x \\leq 2',
                    explanation: 'Closed circle because \\( x = 2 \\) is included.'
                }
            ],
            finalAnswer: '\( x \\leq 2 \)',
        }
    },

    {
        id: 'ise1-020',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 20',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 11 - 3x < 5 - x \\). Represent the solution on a number line.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( 3x \\) to both sides.',
                    workingLatex: '11 < 5 + 2x',
                    explanation: 'Eliminate \\( x \\) from the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 5 from both sides.',
                    workingLatex: '6 < 2x',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide both sides by 2. Show open circle at 3, shading right.',
                    workingLatex: '3 < x \\quad \\Rightarrow \\quad x > 3',
                    explanation: 'Open circle at 3.'
                }
            ],
            finalAnswer: '\( x > 3 \)',
        }
    },

    {
        id: 'ise1-021',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 21',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 14 - 2x > 6 + 2x \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( 2x \\) to both sides.',
                    workingLatex: '14 > 6 + 4x',
                    explanation: 'Eliminate \\( x \\) from the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 6 from both sides.',
                    workingLatex: '8 > 4x',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 4.',
                    workingLatex: '2 > x \\quad \\Rightarrow \\quad x < 2',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\( x < 2 \)',
        }
    },

    {
        id: 'ise1-022',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 22',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 9x - 4 < 6x + 2 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 6x \\) from both sides.',
                    workingLatex: '3x - 4 < 2',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 4 to both sides.',
                    workingLatex: '3x < 6',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 3.',
                    workingLatex: 'x < 2',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\( x < 2 \)',
        }
    },

    {
        id: 'ise1-023',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 23',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 7x + 2 \\leq 4x - 7 \\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 4x \\) from both sides.',
                    workingLatex: '3x + 2 \\leq -7',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 2 from both sides.',
                    workingLatex: '3x \\leq -9',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 3.',
                    workingLatex: 'x \\leq -3',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\( x \\leq -3 \)',
        }
    },

    {
        id: 'ise1-024',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 24',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 12x - 9 \\leq 4x + 11 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract \\( 4x \\) from both sides.',
                    workingLatex: '8x - 9 \\leq 11',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 9 to both sides.',
                    workingLatex: '8x \\leq 20',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 8.',
                    workingLatex: 'x \\leq \\dfrac{5}{2}',
                    explanation: '\\( 20 \\div 8 = \\dfrac{5}{2} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : x \\leq \\tfrac{5}{2}\\}',
                    explanation: 'Use curly brackets and a colon for set notation.'
                }
            ],
            finalAnswer: '\( \\{x : x \\leq \\tfrac{5}{2}\\} \)',
        }
    },

    {
        id: 'ise1-025',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 25',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5x + 8 > 3 - 2x \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add \\( 2x \\) to both sides.',
                    workingLatex: '7x + 8 > 3',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 8 from both sides.',
                    workingLatex: '7x > -5',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 7 and write in set notation.',
                    workingLatex: 'x > -\\dfrac{5}{7} \\quad \\Rightarrow \\quad \\{x : x > -\\tfrac{5}{7}\\}',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\( \\{x : x > -\\tfrac{5}{7}\\} \)',
        }
    },


    // ─── TYPE C: Expand brackets first, then solve ───────────────────────────────
    // Q26–Q35

    {
        id: 'ise1-026',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 26',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 3(x + 4) > 2(x + 7) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '3x + 12 > 2x + 14',
                    explanation: '\\( 3 \\times (x + 4) = 3x + 12 \\) and \\( 2 \\times (x + 7) = 2x + 14 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 2x \\) from both sides.',
                    workingLatex: 'x + 12 > 14',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 12 from both sides.',
                    workingLatex: 'x > 2',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\( x > 2 \)',
        }
    },

    {
        id: 'ise1-027',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 27',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 4(x - 1) \\leq 3(x + 2) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '4x - 4 \\leq 3x + 6',
                    explanation: '\\( 4(x-1) = 4x - 4 \\) and \\( 3(x+2) = 3x + 6 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 3x \\) from both sides.',
                    workingLatex: 'x - 4 \\leq 6',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 4 to both sides.',
                    workingLatex: 'x \\leq 10',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\( x \\leq 10 \)',
        }
    },

    {
        id: 'ise1-028',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 28',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5(2x - 3) < 3(3x + 1) \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '10x - 15 < 9x + 3',
                    explanation: '\\( 5(2x-3) = 10x - 15 \\) and \\( 3(3x+1) = 9x + 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 9x \\) from both sides.',
                    workingLatex: 'x - 15 < 3',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 15 to both sides and write in set notation.',
                    workingLatex: 'x < 18 \\quad \\Rightarrow \\quad \\{x : x < 18\\}',
                    explanation: 'Solution expressed in set notation.'
                }
            ],
            finalAnswer: '\( \\{x : x < 18\\} \)',
        }
    },

    {
        id: 'ise1-029',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 29',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 2(5 - x) \\geq 3(x - 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '10 - 2x \\geq 3x - 3',
                    explanation: '\\( 2(5-x) = 10 - 2x \\) and \\( 3(x-1) = 3x - 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Add \\( 2x \\) to both sides.',
                    workingLatex: '10 \\geq 5x - 3',
                    explanation: 'Collect \\( x \\) terms on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 3 to both sides.',
                    workingLatex: '13 \\geq 5x',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 5.',
                    workingLatex: '\\dfrac{13}{5} \\geq x \\quad \\Rightarrow \\quad x \\leq \\dfrac{13}{5}',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x \\leq \\dfrac{13}{5} \\)',
        }
    },

    {
        id: 'ise1-030',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 30',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 6(x + 2) > 4(x + 5) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '6x + 12 > 4x + 20',
                    explanation: '\\( 6(x+2) = 6x+12 \\) and \\( 4(x+5) = 4x+20 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 4x \\) from both sides.',
                    workingLatex: '2x + 12 > 20',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 12 from both sides, then divide by 2.',
                    workingLatex: '2x > 8 \\quad \\Rightarrow \\quad x > 4',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x > 4 \\)',
        }
    },

    {
        id: 'ise1-031',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 31',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 7(x - 3) \\leq 5(x - 1) \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '7x - 21 \\leq 5x - 5',
                    explanation: '\\( 7(x-3) = 7x-21 \\) and \\( 5(x-1) = 5x-5 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 5x \\) from both sides.',
                    workingLatex: '2x - 21 \\leq -5',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 21 to both sides.',
                    workingLatex: '2x \\leq 16',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 2 and write in set notation.',
                    workingLatex: 'x \\leq 8 \\quad \\Rightarrow \\quad \\{x : x \\leq 8\\}',
                    explanation: 'Solution expressed in set notation.'
                }
            ],
            finalAnswer: '\\( \\{x : x \\leq 8\\} \\)',
        }
    },

    {
        id: 'ise1-032',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 32',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 3(4 - x) < 2(6 - x) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '12 - 3x < 12 - 2x',
                    explanation: '\\( 3(4-x) = 12-3x \\) and \\( 2(6-x) = 12-2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Add \\( 3x \\) to both sides.',
                    workingLatex: '12 < 12 + x',
                    explanation: 'Collect \\( x \\) terms on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 12 from both sides.',
                    workingLatex: '0 < x \\quad \\Rightarrow \\quad x > 0',
                    explanation: 'Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\\( x > 0 \\)',
        }
    },

    {
        id: 'ise1-033',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 33',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 4(3x - 2) \\geq 2(5x + 1) \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '12x - 8 \\geq 10x + 2',
                    explanation: '\\( 4(3x-2) = 12x - 8 \\) and \\( 2(5x+1) = 10x + 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 10x \\) from both sides.',
                    workingLatex: '2x - 8 \\geq 2',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 8 to both sides, then divide by 2.',
                    workingLatex: '2x \\geq 10 \\quad \\Rightarrow \\quad x \\geq 5',
                    explanation: 'Positive divisor — direction unchanged.'
                }
            ],
            finalAnswer: '\\( x \\geq 5 \\)',
        }
    },

    {
        id: 'ise1-034',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 34',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 9(x - 2) > 5(x + 2) \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '9x - 18 > 5x + 10',
                    explanation: '\\( 9(x-2) = 9x-18 \\) and \\( 5(x+2) = 5x+10 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 5x \\) from both sides.',
                    workingLatex: '4x - 18 > 10',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Add 18 to both sides, then divide by 4.',
                    workingLatex: '4x > 28 \\quad \\Rightarrow \\quad x > 7',
                    explanation: 'Positive divisor — direction unchanged.'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : x > 7\\}',
                    explanation: 'Solution in set notation.'
                }
            ],
            finalAnswer: '\\( \\{x : x > 7\\} \\)',
        }
    },

    {
        id: 'ise1-035',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 35',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 2(7 - 3x) < 4(2 - x) \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand both brackets.',
                    workingLatex: '14 - 6x < 8 - 4x',
                    explanation: '\\( 2(7-3x) = 14-6x \\) and \\( 4(2-x) = 8-4x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Add \\( 6x \\) to both sides.',
                    workingLatex: '14 < 8 + 2x',
                    explanation: 'Eliminate \\( x \\) from the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract 8 from both sides.',
                    workingLatex: '6 < 2x',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by 2 and write in set notation.',
                    workingLatex: '3 < x \\quad \\Rightarrow \\quad \\{x : x > 3\\}',
                    explanation: 'Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\\( \\{x : x > 3\\} \\)',
        }
    },


    // ─── TYPE D: Fractions — clear denominators first ────────────────────────────
    // Q36–Q45

    {
        id: 'ise1-036',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 36',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{x}{3} + 2 < 5 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 2 from both sides.',
                    workingLatex: '\\dfrac{x}{3} < 3',
                    explanation: 'Isolate the fractional term.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply both sides by 3.',
                    workingLatex: 'x < 9',
                    explanation: 'Multiplying by a positive number keeps the direction.'
                }
            ],
            finalAnswer: '\\( x < 9 \\)',
        }
    },

    {
        id: 'ise1-037',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 37',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{2x - 1}{4} \\geq 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 4.',
                    workingLatex: '2x - 1 \\geq 12',
                    explanation: 'Clear the denominator. Multiplying by a positive number keeps the direction.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 1 to both sides.',
                    workingLatex: '2x \\geq 13',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 2.',
                    workingLatex: 'x \\geq \\dfrac{13}{2}',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\\( x \\geq \\dfrac{13}{2} \\)',
        }
    },

    {
        id: 'ise1-038',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 38',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{3x + 5}{2} < 7 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 2.',
                    workingLatex: '3x + 5 < 14',
                    explanation: 'Clear the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 5 from both sides.',
                    workingLatex: '3x < 9',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 3.',
                    workingLatex: 'x < 3',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\\( x < 3 \\)',
        }
    },

    {
        id: 'ise1-039',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 39',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{5 - x}{3} > 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 3.',
                    workingLatex: '5 - x > 6',
                    explanation: 'Clear the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 5 from both sides.',
                    workingLatex: '-x > 1',
                    explanation: 'Isolate \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply both sides by \\( -1 \\) and reverse the inequality.',
                    workingLatex: 'x < -1',
                    explanation: 'Multiplying by a negative reverses the inequality.'
                }
            ],
            finalAnswer: '\\( x < -1 \\)',
        }
    },

    {
        id: 'ise1-040',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 40',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{4x - 3}{5} \\leq x - 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 5.',
                    workingLatex: '4x - 3 \\leq 5(x - 1)',
                    explanation: 'Clear the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand the right side.',
                    workingLatex: '4x - 3 \\leq 5x - 5',
                    explanation: '\\( 5(x-1) = 5x - 5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\( 4x \\) from both sides.',
                    workingLatex: '-3 \\leq x - 5',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Add 5 to both sides.',
                    workingLatex: '2 \\leq x \\quad \\Rightarrow \\quad x \\geq 2',
                    explanation: 'Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\\( x \\geq 2 \\)',
        }
    },

    {
        id: 'ise1-041',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 41',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{x + 3}{2} > \\dfrac{x - 1}{3} \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 6 (LCM of 2 and 3) to clear both denominators.',
                    workingLatex: '3(x + 3) > 2(x - 1)',
                    explanation: '\\( 6 \\times \\dfrac{x+3}{2} = 3(x+3) \\) and \\( 6 \\times \\dfrac{x-1}{3} = 2(x-1) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand both brackets.',
                    workingLatex: '3x + 9 > 2x - 2',
                    explanation: 'Remove brackets.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\( 2x \\) from both sides.',
                    workingLatex: 'x + 9 > -2',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract 9 from both sides and write in set notation.',
                    workingLatex: 'x > -11 \\quad \\Rightarrow \\quad \\{x : x > -11\\}',
                    explanation: 'Solution expressed in set notation.'
                }
            ],
            finalAnswer: '\\( \\{x : x > -11\\} \\)',
        }
    },

    {
        id: 'ise1-042',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 42',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{2x + 1}{3} \\leq \\dfrac{x + 4}{2} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 6 (LCM of 2 and 3).',
                    workingLatex: '2(2x + 1) \\leq 3(x + 4)',
                    explanation: 'Clears both denominators simultaneously.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand both brackets.',
                    workingLatex: '4x + 2 \\leq 3x + 12',
                    explanation: '\\( 2(2x+1) = 4x+2 \\) and \\( 3(x+4) = 3x+12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\( 3x \\) from both sides.',
                    workingLatex: 'x + 2 \\leq 12',
                    explanation: 'Collect \\( x \\) terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract 2 from both sides.',
                    workingLatex: 'x \\leq 10',
                    explanation: 'Solution found.'
                }
            ],
            finalAnswer: '\\( x \\leq 10 \\)',
        }
    },

    {
        id: 'ise1-043',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 43',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{6 - 5x}{2} < \\dfrac{4 - 8x}{3} \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 6 (LCM of 2 and 3).',
                    workingLatex: '3(6 - 5x) < 2(4 - 8x)',
                    explanation: 'Clears both denominators.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand both brackets.',
                    workingLatex: '18 - 15x < 8 - 16x',
                    explanation: '\\( 3(6-5x) = 18-15x \\) and \\( 2(4-8x) = 8-16x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( 16x \\) to both sides.',
                    workingLatex: '18 + x < 8',
                    explanation: 'Collect \\( x \\) terms on the left.'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract 18 from both sides and write in set notation.',
                    workingLatex: 'x < -10 \\quad \\Rightarrow \\quad \\{x : x < -10\\}',
                    explanation: 'Solution in set notation.'
                }
            ],
            finalAnswer: '\\( \\{x : x < -10\\} \\)',
        }
    },

    {
        id: 'ise1-044',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 44',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{3x - 1}{4} \\geq 2x \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply both sides by 4.',
                    workingLatex: '3x - 1 \\geq 8x',
                    explanation: 'Clear the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( 3x \\) from both sides.',
                    workingLatex: '-1 \\geq 5x',
                    explanation: 'Collect \\( x \\) terms on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 5.',
                    workingLatex: '-\\dfrac{1}{5} \\geq x \\quad \\Rightarrow \\quad x \\leq -\\dfrac{1}{5}',
                    explanation: 'Positive divisor — direction unchanged. Rewrite with \\( x \\) on the left.'
                }
            ],
            finalAnswer: '\\( x \\leq -\\dfrac{1}{5} \\)',
        }
    },

    {
        id: 'ise1-045',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 45',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( \\dfrac{x - 2}{2} - \\dfrac{2x + 3}{3} < 7 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply every term by 6 (LCM of 2 and 3).',
                    workingLatex: '3(x - 2) - 2(2x + 3) < 42',
                    explanation: '\\( 6 \\times \\dfrac{x-2}{2} = 3(x-2) \\) and \\( 6 \\times \\dfrac{2x+3}{3} = 2(2x+3) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand brackets.',
                    workingLatex: '3x - 6 - 4x - 6 < 42',
                    explanation: '\\( 3(x-2) = 3x-6 \\) and \\( 2(2x+3) = 4x+6 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the left side.',
                    workingLatex: '-x - 12 < 42',
                    explanation: '\\( 3x - 4x = -x \\) and \\( -6 - 6 = -12 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Add 12 to both sides, then divide by \\(-1\\) and reverse.',
                    workingLatex: '-x < 54 \\quad \\Rightarrow \\quad x > -54',
                    explanation: 'Dividing by \\(-1\\) reverses the inequality.'
                },
                {
                    stepNumber: 5,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : x > -54\\}',
                    explanation: 'Solution in set notation.'
                }
            ],
            finalAnswer: '\\( \\{x : x > -54\\} \\)',
        }
    },


    // ─── TYPE E: Double (compound) inequalities ───────────────────────────────────
    // Q46–Q60

    {
        id: 'ise1-046',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 46',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -3 < 2x + 1 \\leq 9 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 1 from all three parts.',
                    workingLatex: '-4 < 2x \\leq 8',
                    explanation: 'Treat all three parts simultaneously.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 2.',
                    workingLatex: '-2 < x \\leq 4',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( -2 < x \\leq 4 \\)',
        }
    },

    {
        id: 'ise1-047',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 47',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 1 \\leq 3x - 5 < 10 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add 5 to all three parts.',
                    workingLatex: '6 \\leq 3x < 15',
                    explanation: 'Apply the same operation throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 3.',
                    workingLatex: '2 \\leq x < 5',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( 2 \\leq x < 5 \\)',
        }
    },

    {
        id: 'ise1-048',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 48',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -5 \\leq 4 - 3x < 10 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 4 from all three parts.',
                    workingLatex: '-9 \\leq -3x < 6',
                    explanation: 'Apply the same operation throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by \\( -3 \\) and reverse both inequality signs.',
                    workingLatex: '3 \\geq x > -2',
                    explanation: 'Dividing by a negative reverses all inequalities.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in conventional order and express in set notation.',
                    workingLatex: '-2 < x \\leq 3 \\quad \\Rightarrow \\quad \\{x : -2 < x \\leq 3\\}',
                    explanation: 'Write smaller value on the left.'
                }
            ],
            finalAnswer: '\\( \\{x : -2 < x \\leq 3\\} \\)',
        }
    },

    {
        id: 'ise1-049',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 49',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -1 < 5x + 4 < 19 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 4 from all three parts.',
                    workingLatex: '-5 < 5x < 15',
                    explanation: 'Apply to all parts.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 5.',
                    workingLatex: '-1 < x < 3',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( -1 < x < 3 \\)',
        }
    },

    {
        id: 'ise1-050',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 50',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 7 \\leq 3x - 2 < 16 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add 2 to all three parts.',
                    workingLatex: '9 \\leq 3x < 18',
                    explanation: 'Apply to all parts.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 3 and write in set notation.',
                    workingLatex: '3 \\leq x < 6 \\quad \\Rightarrow \\quad \\{x : 3 \\leq x < 6\\}',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( \\{x : 3 \\leq x < 6\\} \\)',
        }
    },

    {
        id: 'ise1-051',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 51',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -7 < 2 - 3x \\leq 14 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 2 from all three parts.',
                    workingLatex: '-9 < -3x \\leq 12',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( -3 \\) and reverse both inequalities.',
                    workingLatex: '3 > x \\geq -4',
                    explanation: 'Dividing by a negative reverses all inequality signs.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in conventional order.',
                    workingLatex: '-4 \\leq x < 3',
                    explanation: 'Write smaller value on the left.'
                }
            ],
            finalAnswer: '\\( -4 \\leq x < 3 \\)',
        }
    },

    {
        id: 'ise1-052',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 52',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 5 \\leq 7 + 6x \\leq 11 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 7 from all three parts.',
                    workingLatex: '-2 \\leq 6x \\leq 4',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 6 and write in set notation.',
                    workingLatex: '-\\dfrac{1}{3} \\leq x \\leq \\dfrac{2}{3} \\quad \\Rightarrow \\quad \\{x : -\\tfrac{1}{3} \\leq x \\leq \\tfrac{2}{3}\\}',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( \\{x : -\\tfrac{1}{3} \\leq x \\leq \\tfrac{2}{3}\\} \\)',
        }
    },

    {
        id: 'ise1-053',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 53',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -8 \\leq 4 - 2x < 6 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 4 from all three parts.',
                    workingLatex: '-12 \\leq -2x < 2',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( -2 \\) and reverse both inequality signs.',
                    workingLatex: '6 \\geq x > -1',
                    explanation: 'Dividing by a negative reverses all inequalities.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in conventional order.',
                    workingLatex: '-1 < x \\leq 6',
                    explanation: 'Write smaller value on the left.'
                }
            ],
            finalAnswer: '\\( -1 < x \\leq 6 \\)',
        }
    },

    {
        id: 'ise1-054',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 54',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -5 < 2x - 3 < 15 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Add 3 to all three parts.',
                    workingLatex: '-2 < 2x < 18',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 2 and write in set notation.',
                    workingLatex: '-1 < x < 9 \\quad \\Rightarrow \\quad \\{x : -1 < x < 9\\}',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( \\{x : -1 < x < 9\\} \\)',
        }
    },

    {
        id: 'ise1-055',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 55',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -4 < \\dfrac{x + 1}{2} \\leq 3 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply all three parts by 2.',
                    workingLatex: '-8 < x + 1 \\leq 6',
                    explanation: 'Clear the denominator throughout.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract 1 from all three parts.',
                    workingLatex: '-9 < x \\leq 5',
                    explanation: 'Isolate \\( x \\).'
                }
            ],
            finalAnswer: '\\( -9 < x \\leq 5 \\)',
        }
    },

    {
        id: 'ise1-056',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 56',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( 0 \\leq \\dfrac{3x - 6}{3} < 4 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Multiply all three parts by 3.',
                    workingLatex: '0 \\leq 3x - 6 < 12',
                    explanation: 'Clear the denominator.'
                },
                {
                    stepNumber: 2,
                    description: 'Add 6 to all three parts.',
                    workingLatex: '6 \\leq 3x < 18',
                    explanation: 'Isolate the \\( x \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide all three parts by 3 and write in set notation.',
                    workingLatex: '2 \\leq x < 6 \\quad \\Rightarrow \\quad \\{x : 2 \\leq x < 6\\}',
                    explanation: 'Positive divisor — directions unchanged.'
                }
            ],
            finalAnswer: '\\( \\{x : 2 \\leq x < 6\\} \\)',
        }
    },

    {
        id: 'ise1-057',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 57',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -2 \\leq 5 - 4x < 13 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 5 from all three parts.',
                    workingLatex: '-7 \\leq -4x < 8',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( -4 \\) and reverse both inequalities.',
                    workingLatex: '\\dfrac{7}{4} \\geq x > -2',
                    explanation: 'Dividing by a negative reverses all inequality signs.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in conventional order.',
                    workingLatex: '-2 < x \\leq \\dfrac{7}{4}',
                    explanation: 'Write smaller value on the left.'
                }
            ],
            finalAnswer: '\\( -2 < x \\leq \\dfrac{7}{4} \\)',
        }
    },

    {
        id: 'ise1-058',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 58',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -3 < 8 + 2x \\leq 14 \\). Give your answer in interval notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 8 from all three parts.',
                    workingLatex: '-11 < 2x \\leq 6',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 2.',
                    workingLatex: '-\\dfrac{11}{2} < x \\leq 3',
                    explanation: 'Positive divisor — directions unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Write in interval notation.',
                    workingLatex: '\\left(-\\dfrac{11}{2},\\, 3\\right]',
                    explanation: 'Round bracket means \\( -\\tfrac{11}{2} \\) is excluded; square bracket means 3 is included.'
                }
            ],
            finalAnswer: '\\( \\left(-\\dfrac{11}{2},\\, 3\\right] \\)',
        }
    },

    {
        id: 'ise1-059',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 59',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -10 \\leq 3x + 2 \\leq 17 \\). Give your answer in interval notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 2 from all three parts.',
                    workingLatex: '-12 \\leq 3x \\leq 15',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide all three parts by 3.',
                    workingLatex: '-4 \\leq x \\leq 5',
                    explanation: 'Positive divisor — directions unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Write in interval notation.',
                    workingLatex: '[-4,\\, 5]',
                    explanation: 'Square brackets on both sides since both endpoints are included.'
                }
            ],
            finalAnswer: '\\( [-4,\\, 5] \\)',
        }
    },

    {
        id: 'ise1-060',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 60',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy \\( -5 \\leq 4 - 3x < 19 \\). Give your answer in set notation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Subtract 4 from all three parts.',
                    workingLatex: '-9 \\leq -3x < 15',
                    explanation: 'Apply the same operation.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( -3 \\) and reverse both inequality signs.',
                    workingLatex: '3 \\geq x > -5',
                    explanation: 'Dividing by a negative reverses all inequalities.'
                },
                {
                    stepNumber: 3,
                    description: 'Rewrite in conventional order and express in set notation.',
                    workingLatex: '-5 < x \\leq 3 \\quad \\Rightarrow \\quad \\{x : -5 < x \\leq 3\\}',
                    explanation: 'Write smaller value on the left.'
                }
            ],
            finalAnswer: '\\( \\{x : -5 < x \\leq 3\\} \\)',
        }
    },


    // ─── TYPE F: Two simultaneous inequalities — solve each, combine ──────────────
    // Q61–Q70

    {
        id: 'ise1-061',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 61',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy both \\( 3x - 1 < x + 7 \\) and \\( 2x > x - 2 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve the first inequality: \\( 3x - 1 < x + 7 \\).',
                    workingLatex: '2x < 8 \\Rightarrow x < 4',
                    explanation: 'Subtract \\( x \\), add 1, divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve the second inequality: \\( 2x > x - 2 \\).',
                    workingLatex: 'x > -2',
                    explanation: 'Subtract \\( x \\) from both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine: both conditions must hold simultaneously.',
                    workingLatex: '-2 < x < 4',
                    explanation: 'The solution is the overlap of \\( x > -2 \\) and \\( x < 4 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : -2 < x < 4\\}',
                    explanation: 'Both endpoints are strict (open) inequalities.'
                }
            ],
            finalAnswer: '\\( \\{x : -2 < x < 4\\} \\)',
        }
    },

    {
        id: 'ise1-062',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 62',
        difficulty: 'Foundation',
        questionText: 'Find the set of values of \\( x \\) which satisfy both \\( 5x - 2 \\leq 3x + 8 \\) and \\( 4x - 1 > x + 5 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 5x - 2 \\leq 3x + 8 \\).',
                    workingLatex: '2x \\leq 10 \\Rightarrow x \\leq 5',
                    explanation: 'Subtract \\( 3x \\), add 2, divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 4x - 1 > x + 5 \\).',
                    workingLatex: '3x > 6 \\Rightarrow x > 2',
                    explanation: 'Subtract \\( x \\), add 1, divide by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine both conditions.',
                    workingLatex: '2 < x \\leq 5',
                    explanation: 'Overlap of \\( x > 2 \\) and \\( x \\leq 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : 2 < x \\leq 5\\}',
                    explanation: 'Open bracket at 2 (strict), closed at 5 (inclusive).'
                }
            ],
            finalAnswer: '\\( \\{x : 2 < x \\leq 5\\} \\)',
        }
    },

    {
        id: 'ise1-063',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 63',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 2x \\geq 3x - 5 \\) and \\( 3x - 2 \\geq x - 6 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 2x \\geq 3x - 5 \\).',
                    workingLatex: '5 \\geq x \\Rightarrow x \\leq 5',
                    explanation: 'Subtract \\( 2x \\) from both sides: \\( 0 \\geq x - 5 \\Rightarrow 5 \\geq x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 3x - 2 \\geq x - 6 \\).',
                    workingLatex: '2x \\geq -4 \\Rightarrow x \\geq -2',
                    explanation: 'Subtract \\( x \\), add 2, divide by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine both conditions.',
                    workingLatex: '-2 \\leq x \\leq 5',
                    explanation: 'Overlap of \\( x \\geq -2 \\) and \\( x \\leq 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : -2 \\leq x \\leq 5\\}',
                    explanation: 'Both endpoints are inclusive.'
                }
            ],
            finalAnswer: '\\( \\{x : -2 \\leq x \\leq 5\\} \\)',
        }
    },

    {
        id: 'ise1-064',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 64',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 4 - 2x < 10 \\) and \\( 3x - 1 < x + 7 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 4 - 2x < 10 \\).',
                    workingLatex: '-2x < 6 \\Rightarrow x > -3',
                    explanation: 'Subtract 4, divide by \\(-2\\) and reverse.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 3x - 1 < x + 7 \\).',
                    workingLatex: '2x < 8 \\Rightarrow x < 4',
                    explanation: 'Subtract \\( x \\), add 1, divide by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine both conditions and write in set notation.',
                    workingLatex: '-3 < x < 4 \\quad \\Rightarrow \\quad \\{x : -3 < x < 4\\}',
                    explanation: 'Both endpoints are strict (open).'
                }
            ],
            finalAnswer: '\\( \\{x : -3 < x < 4\\} \\)',
        }
    },

    {
        id: 'ise1-065',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 65',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 5x + 1 \\leq 11 \\) and \\( 2x - 3 < 5x - 6 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 5x + 1 \\leq 11 \\).',
                    workingLatex: '5x \\leq 10 \\Rightarrow x \\leq 2',
                    explanation: 'Subtract 1, divide by 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 2x - 3 < 5x - 6 \\).',
                    workingLatex: '3 < 3x \\Rightarrow x > 1',
                    explanation: 'Subtract \\( 2x \\), add 6, divide by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine both conditions and write in set notation.',
                    workingLatex: '1 < x \\leq 2 \\quad \\Rightarrow \\quad \\{x : 1 < x \\leq 2\\}',
                    explanation: 'Overlap of \\( x > 1 \\) and \\( x \\leq 2 \\).'
                }
            ],
            finalAnswer: '\\( \\{x : 1 < x \\leq 2\\} \\)',
        }
    },

    {
        id: 'ise1-066',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 66',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 2x - 1 \\leq 3x - 5 \\) and \\( 5x - 6 > x + 22 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 2x - 1 \\leq 3x - 5 \\).',
                    workingLatex: '4 \\leq x \\Rightarrow x \\geq 4',
                    explanation: 'Subtract \\( 2x \\), add 5: \\( 4 \\leq x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 5x - 6 > x + 22 \\).',
                    workingLatex: '4x > 28 \\Rightarrow x > 7',
                    explanation: 'Subtract \\( x \\), add 6, divide by 4.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine both conditions.',
                    workingLatex: 'x > 7',
                    explanation: 'Since \\( x > 7 \\) is more restrictive than \\( x \\geq 4 \\), the overlap is \\( x > 7 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Write in set notation.',
                    workingLatex: '\\{x : x > 7\\}',
                    explanation: 'Only the stricter condition applies.'
                }
            ],
            finalAnswer: '\\( \\{x : x > 7\\} \\)',
        }
    },

    {
        id: 'ise1-067',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 67',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 3x + 5 < x + 1 \\) and \\( 6x - 1 \\geq 3x + 5 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 3x + 5 < x + 1 \\).',
                    workingLatex: '2x < -4 \\Rightarrow x < -2',
                    explanation: 'Subtract \\( x \\) and 5, divide by 2.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 6x - 1 \\geq 3x + 5 \\).',
                    workingLatex: '3x \\geq 6 \\Rightarrow x \\geq 2',
                    explanation: 'Subtract \\( 3x \\), add 1, divide by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Find the overlap: \\( x < -2 \\) AND \\( x \\geq 2 \\).',
                    workingLatex: '\\text{No overlap — these conditions cannot both be satisfied.}',
                    explanation: 'There is no value of \\( x \\) that is simultaneously less than \\(-2\\) and at least 2.'
                }
            ],
            finalAnswer: '\( No solution — the two inequalities cannot both be satisfied simultaneously. \)',
        }
    },

    {
        id: 'ise1-068',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 68',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 7x - 4 \\geq 3x + 8 \\) and \\( 5x + 3 \\leq 2x + 18 \\). Give your answer in set notation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Solve \\( 7x - 4 \\geq 3x + 8 \\).',
                    workingLatex: '4x \\geq 12 \\Rightarrow x \\geq 3',
                    explanation: 'Subtract \\( 3x \\), add 4, divide by 4.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve \\( 5x + 3 \\leq 2x + 18 \\).',
                    workingLatex: '3x \\leq 15 \\Rightarrow x \\leq 5',
                    explanation: 'Subtract \\( 2x \\) and 3, divide by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Combine both conditions and write in set notation.',
                    workingLatex: '3 \\leq x \\leq 5 \\quad \\Rightarrow \\quad \\{x : 3 \\leq x \\leq 5\\}',
                    explanation: 'Overlap of \\( x \\geq 3 \\) and \\( x \\leq 5 \\). Both endpoints inclusive.'
                }
            ],
            finalAnswer: '\\( \\{x : 3 \\leq x \\leq 5\\} \\)',
        }
    },

    {
        id: 'ise1-069',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 69',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 2(x + 3) > x + 8 \\) and \\( 3(x - 1) \\leq 2(x + 4) \\). Give your answer in set notation.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the first inequality \\( 2(x + 3) > x + 8 \\).',
                    workingLatex: '2x + 6 > x + 8',
                    explanation: 'Distribute the 2 across the bracket.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\): subtract \\( x \\) and 6 from both sides.',
                    workingLatex: 'x > 2',
                    explanation: 'Collect \\( x \\)-terms on the left and constants on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand the second inequality \\( 3(x - 1) \\leq 2(x + 4) \\).',
                    workingLatex: '3x - 3 \\leq 2x + 8',
                    explanation: 'Distribute on each side.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\): subtract \\( 2x \\) and add 3 to both sides.',
                    workingLatex: 'x \\leq 11',
                    explanation: 'Collect \\( x \\)-terms on the left and constants on the right.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine both conditions and write in set notation.',
                    workingLatex: '2 < x \\leq 11 \\quad \\Rightarrow \\quad \\{x : 2 < x \\leq 11\\}',
                    explanation: 'Overlap of \\( x > 2 \\) and \\( x \\leq 11 \\).'
                }
            ],
            finalAnswer: '\\( \\{x : 2 < x \\leq 11\\} \\)',
        }
    },

    {
        id: 'ise1-070',
        topicRef: 'ise1',
        topicTitle: 'Solving Linear Inequalities 70',
        difficulty: 'Foundation',
        questionText: 'Find the values of \\( x \\) which satisfy both \\( 4(2x - 1) < 3(3x + 2) \\) and \\( \\dfrac{x + 5}{2} \\geq x - 1 \\). Give your answer in set notation.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand the first inequality \\( 4(2x - 1) < 3(3x + 2) \\).',
                    workingLatex: '8x - 4 < 9x + 6',
                    explanation: 'Distribute on each side.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\): subtract \\( 8x \\) and 6 from both sides.',
                    workingLatex: '-10 < x \\Rightarrow x > -10',
                    explanation: 'Collect \\( x \\)-terms on the right and constants on the left.'
                },
                {
                    stepNumber: 3,
                    description: 'Multiply the second inequality \\( \\dfrac{x + 5}{2} \\geq x - 1 \\) through by 2.',
                    workingLatex: 'x + 5 \\geq 2x - 2',
                    explanation: 'Eliminate the fraction by multiplying every term by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( x \\): subtract \\( x \\) from both sides and add 2.',
                    workingLatex: '7 \\geq x \\Rightarrow x \\leq 7',
                    explanation: 'Collect \\( x \\)-terms on one side and constants on the other.'
                },
                {
                    stepNumber: 5,
                    description: 'Combine both conditions and write in set notation.',
                    workingLatex: '-10 < x \\leq 7 \\quad \\Rightarrow \\quad \\{x : -10 < x \\leq 7\\}',
                    explanation: 'Overlap of \\( x > -10 \\) and \\( x \\leq 7 \\).'
                }
            ],
            finalAnswer: '\\( \\{x : -10 < x \\leq 7\\} \\)',
        }
    },

];

