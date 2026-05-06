import { Question } from '@/lib/types';

/**
 * Topic: Simultaneous Equations (Linear)
 * Ref:   ise2
 */
export const questions: Question[] = [

    // ── Type A: Both linear — elimination method (Q1–Q12) ────────────────────

    {
        id: 'ise2-001',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 01',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 5x + 2y = 16 \\) and \\( 3x - 2y = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations and notice the \\( y \\)-coefficients already match in magnitude.',
                    workingLatex: '\\textcircled{1}\\; 5x + 2y = 16 \\qquad \\textcircled{2}\\; 3x - 2y = 0',
                    explanation: 'The \\( y \\)-coefficients are \\( +2 \\) and \\( -2 \\), so adding eliminates \\( y \\) immediately.'
                },
                {
                    stepNumber: 2,
                    description: 'Add equations \\( \\textcircled{1} \\) and \\( \\textcircled{2} \\) to eliminate \\( y \\).',
                    workingLatex: '(5x + 2y) + (3x - 2y) = 16 + 0 \\implies 8x = 16 \\implies x = 2',
                    explanation: 'The \\( y \\) terms cancel out.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute \\( x = 2 \\) into equation \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '3(2) - 2y = 0 \\implies 6 = 2y \\implies y = 3',
                    explanation: 'Choose the simpler equation to substitute back into.'
                },
                {
                    stepNumber: 4,
                    description: 'Check in equation \\( \\textcircled{1} \\).',
                    workingLatex: '5(2) + 2(3) = 10 + 6 = 16 \\checkmark',
                    explanation: 'Both values satisfy the first equation.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 3 \\)'
        }
    },

    {
        id: 'ise2-002',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 02',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 4x + y = 14 \\) and \\( 2x - 3y = -8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 4x + y = 14 \\qquad \\textcircled{2}\\; 2x - 3y = -8',
                    explanation: 'Multiply \\( \\textcircled{1} \\) by 3 so the \\( y \\)-coefficients become \\( +3 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{1} \\) by 3.',
                    workingLatex: '\\textcircled{3}\\; 12x + 3y = 42',
                    explanation: 'The \\( y \\)-coefficients are now \\( +3 \\) and \\( -3 \\), so adding will eliminate \\( y \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{3} \\) and \\( \\textcircled{2} \\) to eliminate \\( y \\).',
                    workingLatex: '(12x + 3y) + (2x - 3y) = 42 + (-8) \\implies 14x = 34 \\implies x = \\tfrac{17}{7}',
                    explanation: 'The \\( y \\) terms cancel, leaving a single equation in \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{17}{7} \\) into \\( \\textcircled{1} \\) to find \\( y \\).',
                    workingLatex: '4 \\times \\tfrac{17}{7} + y = 14 \\implies \\tfrac{68}{7} + y = 14 \\implies y = 14 - \\tfrac{68}{7} = \\tfrac{98 - 68}{7} = \\tfrac{30}{7}',
                    explanation: 'Rearrange to isolate \\( y \\), converting 14 to \\( \\tfrac{98}{7} \\) to subtract the fractions.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{17}{7},\\; y = \\dfrac{30}{7} \\)'
        }
    },

    {
        id: 'ise2-003',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 03',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + 4y = 10 \\) and \\( 5x - 2y = 8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 3x + 4y = 10 \\qquad \\textcircled{2}\\; 5x - 2y = 8',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 2 to match the \\( y \\)-coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply equation \\( \\textcircled{2} \\) by 2.',
                    workingLatex: '\\textcircled{3}\\; 10x - 4y = 16',
                    explanation: 'Now \\( y \\)-coefficients are \\( +4 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\) to eliminate \\( y \\).',
                    workingLatex: '(3x + 4y) + (10x - 4y) = 10 + 16 \\implies 13x = 26 \\implies x = 2',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 2 \\) into \\( \\textcircled{2} \\).',
                    workingLatex: '5(2) - 2y = 8 \\implies 10 - 2y = 8 \\implies y = 1',
                    explanation: 'Solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '3(2) + 4(1) = 6 + 4 = 10 \\checkmark',
                    explanation: 'The solution satisfies the first equation.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 1 \\)'
        }
    },

    {
        id: 'ise2-004',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 04',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 7x - 3y = 11 \\) and \\( 4x + 5y = 33 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 7x - 3y = 11 \\qquad \\textcircled{2}\\; 4x + 5y = 33',
                    explanation: 'Multiply \\( \\textcircled{1} \\) by 5 and \\( \\textcircled{2} \\) by 3 to match \\( y \\)-coefficients.'
                },
                {
                    stepNumber: 2,
                    description: 'Scale both equations.',
                    workingLatex: '\\textcircled{3}\\; 35x - 15y = 55 \\qquad \\textcircled{4}\\; 12x + 15y = 99',
                    explanation: '\\( y \\)-coefficients are now \\( -15 \\) and \\( +15 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{3} \\) and \\( \\textcircled{4} \\) to eliminate \\( y \\).',
                    workingLatex: '47x = 154 \\implies x = \\frac{154}{47}',
                    explanation: 'The \\( y \\) terms cancel. The result is not an integer, but this is valid.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{154}{47} \\) into \\( \\textcircled{1} \\) to find \\( y \\).',
                    workingLatex: '7 \\times \\tfrac{154}{47} - 3y = 11 \\implies \\tfrac{1078}{47} - 3y = 11 \\implies 3y = \\tfrac{1078 - 517}{47} = \\tfrac{561}{47} \\implies y = \\tfrac{187}{47}',
                    explanation: 'Convert 11 to \\( \\tfrac{517}{47} \\) and solve for \\( y \\).'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{154}{47},\\; y = \\dfrac{187}{47} \\)'
        }
    },

    {
        id: 'ise2-005',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 05',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 2x + 5y = 19 \\) and \\( 6x - y = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 2x + 5y = 19 \\qquad \\textcircled{2}\\; 6x - y = 1',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 5 to match the \\( y \\)-coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 5.',
                    workingLatex: '\\textcircled{3}\\; 30x - 5y = 5',
                    explanation: '\\( y \\)-coefficients are now \\( +5 \\) and \\( -5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\).',
                    workingLatex: '(2x + 5y) + (30x - 5y) = 19 + 5 \\implies 32x = 24 \\implies x = \\tfrac{3}{4}',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{3}{4} \\) into \\( \\textcircled{2} \\).',
                    workingLatex: '6 \\times \\tfrac{3}{4} - y = 1 \\implies \\tfrac{9}{2} - y = 1 \\implies y = \\tfrac{7}{2}',
                    explanation: 'Solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '2 \\times \\tfrac{3}{4} + 5 \\times \\tfrac{7}{2} = \\tfrac{3}{2} + \\tfrac{35}{2} = \\tfrac{38}{2} = 19 \\checkmark',
                    explanation: 'Verified.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{3}{4},\\; y = \\dfrac{7}{2} \\)'
        }
    },

    {
        id: 'ise2-006',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 06',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 5x + 3y = 7 \\) and \\( 2x - y = -8 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 5x + 3y = 7 \\qquad \\textcircled{2}\\; 2x - y = -8',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 3 to match the \\( y \\)-coefficient.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 3.',
                    workingLatex: '\\textcircled{3}\\; 6x - 3y = -24',
                    explanation: '\\( y \\)-coefficients: \\( +3 \\) and \\( -3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\) to eliminate \\( y \\).',
                    workingLatex: '(5x + 3y) + (6x - 3y) = 7 + (-24) \\implies 11x = -17 \\implies x = -\\tfrac{17}{11}',
                    explanation: 'The \\( y \\) terms cancel, leaving a single equation in \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = -\\tfrac{17}{11} \\) into \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '2 \\times (-\\tfrac{17}{11}) - y = -8 \\implies -\\tfrac{34}{11} - y = -8 \\implies y = 8 - \\tfrac{34}{11} = \\tfrac{88 - 34}{11} = \\tfrac{54}{11}',
                    explanation: 'Rearrange to isolate \\( y \\), converting 8 to \\( \\tfrac{88}{11} \\) to subtract the fractions.'
                }
            ],
            finalAnswer: '\\( x = -\\dfrac{17}{11},\\; y = \\dfrac{54}{11} \\)'
        }
    },

    {
        id: 'ise2-007',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 07',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + 2y = 12 \\) and \\( x - 4y = -4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 3x + 2y = 12 \\qquad \\textcircled{2}\\; x - 4y = -4',
                    explanation: 'Multiply \\( \\textcircled{1} \\) by 2 to match the \\( y \\)-coefficients.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{1} \\) by 2.',
                    workingLatex: '\\textcircled{3}\\; 6x + 4y = 24',
                    explanation: '\\( y \\)-coefficients: \\( +4 \\) and \\( -4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{3} \\) and \\( \\textcircled{2} \\) to eliminate \\( y \\).',
                    workingLatex: '(6x + 4y) + (x - 4y) = 24 + (-4) \\implies 7x = 20 \\implies x = \\tfrac{20}{7}',
                    explanation: 'The \\( y \\) terms cancel, leaving a single equation in \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = \\tfrac{20}{7} \\) into \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '\\tfrac{20}{7} - 4y = -4 \\implies 4y = \\tfrac{20}{7} + 4 = \\tfrac{20 + 28}{7} = \\tfrac{48}{7} \\implies y = \\tfrac{12}{7}',
                    explanation: 'Rearrange to isolate \\( y \\), converting 4 to \\( \\tfrac{28}{7} \\) to add the fractions.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{20}{7},\\; y = \\dfrac{12}{7} \\)'
        }
    },

    {
        id: 'ise2-008',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 08',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 4x - 3y = -1 \\) and \\( 3x + y = 9 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Label the equations.',
                    workingLatex: '\\textcircled{1}\\; 4x - 3y = -1 \\qquad \\textcircled{2}\\; 3x + y = 9',
                    explanation: 'Multiply \\( \\textcircled{2} \\) by 3 to match the \\( y \\)-coefficient in \\( \\textcircled{1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 3.',
                    workingLatex: '\\textcircled{3}\\; 9x + 3y = 27',
                    explanation: '\\( y \\)-coefficients: \\( -3 \\) and \\( +3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\).',
                    workingLatex: '13x = 26 \\implies x = 2',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Substitute \\( x = 2 \\) into \\( \\textcircled{2} \\).',
                    workingLatex: '3(2) + y = 9 \\implies y = 3',
                    explanation: 'Solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '4(2) - 3(3) = 8 - 9 = -1 \\checkmark',
                    explanation: 'Solution verified.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 3 \\)'
        }
    },

    {
        id: 'ise2-009',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 09',
        difficulty: 'Foundation',
        questionText: 'Find the point of intersection of the lines \\( y = 3x - 1 \\) and \\( y = -x + 7 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the right-hand sides equal (since both equal \\( y \\)).',
                    workingLatex: '3x - 1 = -x + 7',
                    explanation: 'At the intersection point the \\( y \\)-values are equal.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '4x = 8 \\implies x = 2',
                    explanation: 'Collect \\( x \\) terms on the left and constants on the right.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\) using the first equation.',
                    workingLatex: 'y = 3(2) - 1 = 5',
                    explanation: 'Substitute \\( x = 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Check in the second equation.',
                    workingLatex: 'y = -2 + 7 = 5 \\checkmark',
                    explanation: 'Both equations give \\( y = 5 \\) at \\( x = 2 \\).'
                }
            ],
            finalAnswer: 'Point of intersection: \\( (2,\\ 5) \\)'
        }
    },

    {
        id: 'ise2-010',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 10',
        difficulty: 'Foundation',
        questionText: 'Find the point of intersection of the lines \\( y = -2x + 10 \\) and \\( y = 4x - 2 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the expressions for \\( y \\) equal.',
                    workingLatex: '-2x + 10 = 4x - 2',
                    explanation: 'Both expressions equal \\( y \\) at the intersection.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: '12 = 6x \\implies x = 2',
                    explanation: 'Add \\( 2x \\) and add 2 to both sides.'
                },
                {
                    stepNumber: 3,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 4(2) - 2 = 6',
                    explanation: 'Use the second equation.'
                },
                {
                    stepNumber: 4,
                    description: 'Check in the first equation.',
                    workingLatex: 'y = -2(2) + 10 = 6 \\checkmark',
                    explanation: 'Verified.'
                }
            ],
            finalAnswer: 'Point of intersection: \\( (2,\\ 6) \\)'
        }
    },

    {
        id: 'ise2-011',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 11',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x - 4y + 1 = 0 \\) and \\( 5x + 2y - 11 = 0 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange both equations into standard form.',
                    workingLatex: '\\textcircled{1}\\; 3x - 4y = -1 \\qquad \\textcircled{2}\\; 5x + 2y = 11',
                    explanation: 'Move the constant to the right-hand side in each.'
                },
                {
                    stepNumber: 2,
                    description: 'Multiply \\( \\textcircled{2} \\) by 2 to match \\( y \\)-coefficients.',
                    workingLatex: '\\textcircled{3}\\; 10x + 4y = 22',
                    explanation: '\\( y \\)-coefficients: \\( -4 \\) and \\( +4 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Add \\( \\textcircled{1} \\) and \\( \\textcircled{3} \\).',
                    workingLatex: '13x = 21 \\implies x = \\tfrac{21}{13}',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Use \\( \\textcircled{2} \\) to find \\( y \\).',
                    workingLatex: '5 \\times \\tfrac{21}{13} + 2y = 11 \\implies 2y = 11 - \\tfrac{105}{13} = \\tfrac{143-105}{13} = \\tfrac{38}{13} \\implies y = \\tfrac{19}{13}',
                    explanation: 'Substitute and solve for \\( y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( \\textcircled{1} \\).',
                    workingLatex: '3 \\times \\tfrac{21}{13} - 4 \\times \\tfrac{19}{13} = \\tfrac{63 - 76}{13} = \\tfrac{-13}{13} = -1 \\checkmark',
                    explanation: 'Solution verified.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{21}{13},\\; y = \\dfrac{19}{13} \\)'
        }
    },

    {
        id: 'ise2-012',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 12',
        difficulty: 'Foundation',
        questionText: 'Three paths in a park are modelled by the equations \\( A: 2x + y = 8 \\), \\( B: x - y = 1 \\), \\( C: x + 3y = 12 \\). Benches are placed at each intersection. Find the coordinates of all benches.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find intersection of \\( A \\) and \\( B \\): add the two equations.',
                    workingLatex: '(2x + y) + (x - y) = 8 + 1 \\implies 3x = 9 \\implies x = 3',
                    explanation: 'Adding \\( A \\) and \\( B \\) eliminates \\( y \\) directly.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( x = 3 \\) into \\( B \\) to find \\( y \\).',
                    workingLatex: '3 - y = 1 \\implies y = 2',
                    explanation: 'So \\( A \\cap B = (3,\\, 2) \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find intersection of \\( A \\) and \\( C \\): multiply \\( A \\) by 3 to match \\( y \\)-coefficients.',
                    workingLatex: '6x + 3y = 24',
                    explanation: 'Now the \\( y \\)-coefficients in the scaled \\( A \\) and \\( C \\) are both \\( 3 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Subtract \\( C \\) from the scaled \\( A \\).',
                    workingLatex: '(6x + 3y) - (x + 3y) = 24 - 12 \\implies 5x = 12 \\implies x = \\tfrac{12}{5}',
                    explanation: 'The \\( y \\) terms cancel.'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( x = \\tfrac{12}{5} \\) into \\( A \\) to find \\( y \\).',
                    workingLatex: '2 \\times \\tfrac{12}{5} + y = 8 \\implies y = 8 - \\tfrac{24}{5} = \\tfrac{16}{5}',
                    explanation: 'So \\( A \\cap C = \\left(\\tfrac{12}{5},\\, \\tfrac{16}{5}\\right) \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Find intersection of \\( B \\) and \\( C \\): subtract \\( B \\) from \\( C \\).',
                    workingLatex: '(x + 3y) - (x - y) = 12 - 1 \\implies 4y = 11 \\implies y = \\tfrac{11}{4}',
                    explanation: 'Subtracting eliminates \\( x \\).'
                },
                {
                    stepNumber: 7,
                    description: 'Substitute \\( y = \\tfrac{11}{4} \\) into \\( B \\) to find \\( x \\).',
                    workingLatex: 'x - \\tfrac{11}{4} = 1 \\implies x = 1 + \\tfrac{11}{4} = \\tfrac{15}{4}',
                    explanation: 'So \\( B \\cap C = \\left(\\tfrac{15}{4},\\, \\tfrac{11}{4}\\right) \\). Three distinct benches found.'
                }
            ],
            finalAnswer: 'Benches at \\( (3,\\ 2) \\), \\( \\left(\\tfrac{12}{5},\\ \\tfrac{16}{5}\\right) \\), and \\( \\left(\\tfrac{15}{4},\\ \\tfrac{11}{4}\\right) \\).'
        }
    },

    // ── Type B: One linear, one quadratic — substitution (Q13–Q24) ───────────

    {
        id: 'ise2-013',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 13',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x + 3 \\) and \\( y = x^2 - 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'The linear equation already expresses \\( y \\) in terms of \\( x \\). Substitute into the quadratic.',
                    workingLatex: 'x + 3 = x^2 - 3',
                    explanation: 'Replace \\( y \\) in the quadratic equation with \\( x + 3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange to form a quadratic equation.',
                    workingLatex: 'x^2 - x - 6 = 0',
                    explanation: 'Bring all terms to one side: \\( x^2 - x - 3 - 3 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(x - 3)(x + 2) = 0 \\implies x = 3 \\text{ or } x = -2',
                    explanation: 'We need two numbers that multiply to \\(-6\\) and add to \\(-1\\): these are \\(-3\\) and \\(2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the corresponding \\( y \\)-values using \\( y = x + 3 \\).',
                    workingLatex: 'x = 3 \\Rightarrow y = 6; \\quad x = -2 \\Rightarrow y = 1',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Check both pairs in the quadratic.',
                    workingLatex: 'x=3: 9-3=6\\checkmark \\quad x=-2: 4-3=1\\checkmark',
                    explanation: 'Both solutions verified.'
                }
            ],
            finalAnswer: '\\( x = 3,\\; y = 6 \\) and \\( x = -2,\\; y = 1 \\)'
        }
    },

    {
        id: 'ise2-014',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 14',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x - 1 \\) and \\( y = x^2 - 2x + 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x - 1 \\) into the quadratic.',
                    workingLatex: '2x - 1 = x^2 - 2x + 3',
                    explanation: 'Replace \\( y \\) in the second equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 4x + 4 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 2)^2 = 0 \\implies x = 2',
                    explanation: 'A perfect square — the line is tangent to the curve, so there is exactly one solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2(2) - 1 = 3',
                    explanation: 'Substitute \\( x = 2 \\) into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in the quadratic equation.',
                    workingLatex: 'y = (2)^2 - 2(2) + 3 = 4 - 4 + 3 = 3 \\checkmark',
                    explanation: 'The solution satisfies both equations, confirming the line is tangent to the curve at this single point.'
                }
            ],
            finalAnswer: '\\( x = 2,\\; y = 3 \\) (the line is tangent to the curve at this point)'
        }
    },

    {
        id: 'ise2-015',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 15',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x + y = 5 \\) and \\( x^2 + y^2 = 17 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 5 - x',
                    explanation: 'Express \\( y \\) in terms of \\( x \\) from the linear equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: 'x^2 + (5 - x)^2 = 17 \\implies x^2 + 25 - 10x + x^2 = 17 \\implies 2x^2 - 10x + 8 = 0',
                    explanation: 'Expand \\( (5-x)^2 \\) and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide through by 2 and factorise.',
                    workingLatex: 'x^2 - 5x + 4 = 0 \\implies (x-1)(x-4) = 0',
                    explanation: 'Numbers multiplying to 4 and adding to \\(-5\\): \\(-1\\) and \\(-4\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'x = 1 \\Rightarrow y = 4; \\quad x = 4 \\Rightarrow y = 1',
                    explanation: 'Substitute each \\( x \\)-value into \\( y = 5 - x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( x^2 + y^2 = 17 \\).',
                    workingLatex: '1 + 16 = 17 \\checkmark \\quad \\text{and} \\quad 16 + 1 = 17 \\checkmark',
                    explanation: 'Both pairs satisfy the circle equation.'
                }
            ],
            finalAnswer: '\\( x = 1,\\; y = 4 \\) and \\( x = 4,\\; y = 1 \\)'
        }
    },

    {
        id: 'ise2-016',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 16',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 3x - 5 \\) and \\( x^2 + y^2 = 25 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 3x - 5 \\) into the circle equation.',
                    workingLatex: 'x^2 + (3x-5)^2 = 25',
                    explanation: 'Replace \\( y \\) in the second equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: 'x^2 + 9x^2 - 30x + 25 = 25 \\implies 10x^2 - 30x = 0 \\implies 10x(x - 3) = 0',
                    explanation: 'Expand, then collect terms and factorise.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( x \\).',
                    workingLatex: 'x = 0 \\text{ or } x = 3',
                    explanation: 'Two solutions from the factorisation.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'x=0 \\Rightarrow y = -5; \\quad x=3 \\Rightarrow y = 4',
                    explanation: 'Substitute into \\( y = 3x - 5 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( x^2 + y^2 = 25 \\).',
                    workingLatex: '0 + 25 = 25 \\checkmark \\quad 9 + 16 = 25 \\checkmark',
                    explanation: 'Both solutions verified.'
                }
            ],
            finalAnswer: '\\( x = 0,\\; y = -5 \\) and \\( x = 3,\\; y = 4 \\)'
        }
    },

    {
        id: 'ise2-017',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 17',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 2x - y = 1 \\) and \\( x^2 + y^2 = 10 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = 2x - 1',
                    explanation: 'Isolate \\( y \\) in the linear equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: 'x^2 + (2x-1)^2 = 10 \\implies x^2 + 4x^2 - 4x + 1 = 10 \\implies 5x^2 - 4x - 9 = 0',
                    explanation: 'Expand and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise the quadratic.',
                    workingLatex: '(5x - 9)(x + 1) = 0 \\implies x = \\tfrac{9}{5} \\text{ or } x = -1',
                    explanation: 'Check: \\( 5 \\times (-9) = -45 \\) and \\( -9 + 5 = -4 \\). \\( \\checkmark \\)'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'x = \\tfrac{9}{5} \\Rightarrow y = \\tfrac{13}{5}; \\quad x = -1 \\Rightarrow y = -3',
                    explanation: 'Use \\( y = 2x - 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check \\( x = -1, y = -3 \\) in the circle.',
                    workingLatex: '1 + 9 = 10 \\checkmark',
                    explanation: 'Solution verified.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{9}{5},\\; y = \\dfrac{13}{5} \\) and \\( x = -1,\\; y = -3 \\)'
        }
    },

    {
        id: 'ise2-018',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 18',
        difficulty: 'Foundation',
        questionText: 'Find the points of intersection of the curve \\( y = x^2 + 3x - 4 \\) and the line \\( y = 2x + 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the expressions for \\( y \\) equal.',
                    workingLatex: 'x^2 + 3x - 4 = 2x + 2',
                    explanation: 'At an intersection point both equations give the same \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 + x - 6 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x + 3)(x - 2) = 0 \\implies x = -3 \\text{ or } x = 2',
                    explanation: 'Numbers multiplying to \\(-6\\) and adding to \\(1\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values using \\( y = 2x + 2 \\).',
                    workingLatex: 'x = -3 \\Rightarrow y = -4; \\quad x = 2 \\Rightarrow y = 6',
                    explanation: 'Substitute each \\( x \\)-value into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in the curve equation \\( y = x^2 + 3x - 4 \\).',
                    workingLatex: '(-3)^2 + 3(-3) - 4 = 9 - 9 - 4 = -4 \\checkmark \\quad 2^2 + 3(2) - 4 = 4 + 6 - 4 = 6 \\checkmark',
                    explanation: 'Both points satisfy the curve equation, confirming they are correct.'
                }
            ],
            finalAnswer: 'Points of intersection: \\( (-3,\\ -4) \\) and \\( (2,\\ 6) \\)'
        }
    },

    {
        id: 'ise2-019',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 19',
        difficulty: 'Foundation',
        questionText: 'Find the points of intersection of \\( x^2 + y^2 = 45 \\) and \\( x + 2y = 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'x = -2y',
                    explanation: 'Express \\( x \\) in terms of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: '(-2y)^2 + y^2 = 45 \\implies 4y^2 + y^2 = 45 \\implies 5y^2 = 45 \\implies y^2 = 9',
                    explanation: 'Expand and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for \\( y \\).',
                    workingLatex: 'y = 3 \\text{ or } y = -3',
                    explanation: 'Take both square roots.'
                },
                {
                    stepNumber: 4,
                    description: 'Find corresponding \\( x \\)-values.',
                    workingLatex: 'y = 3 \\Rightarrow x = -6; \\quad y = -3 \\Rightarrow x = 6',
                    explanation: 'Use \\( x = -2y \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in the circle.',
                    workingLatex: '36 + 9 = 45 \\checkmark',
                    explanation: 'Both pairs satisfy the circle equation.'
                }
            ],
            finalAnswer: '\\( (-6,\\ 3) \\) and \\( (6,\\ -3) \\)'
        }
    },

    {
        id: 'ise2-020',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 20',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = x^2 - 5x + 4 \\) and \\( y = x - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = x - 1 \\) into the quadratic.',
                    workingLatex: 'x - 1 = x^2 - 5x + 4',
                    explanation: 'Replace \\( y \\) in the first equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: 'x^2 - 6x + 5 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 1)(x - 5) = 0 \\implies x = 1 \\text{ or } x = 5',
                    explanation: 'Numbers multiplying to 5 and adding to \\(-6\\): \\(-1\\) and \\(-5\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values using \\( y = x - 1 \\).',
                    workingLatex: 'x = 1 \\Rightarrow y = 0; \\quad x = 5 \\Rightarrow y = 4',
                    explanation: 'Substitute into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in the curve equation \\( y = x^2 - 5x + 4 \\).',
                    workingLatex: '1 - 5 + 4 = 0 \\checkmark \\quad 25 - 25 + 4 = 4 \\checkmark',
                    explanation: 'Both solutions satisfy the quadratic, confirming they are correct.'
                }
            ],
            finalAnswer: '\\( x = 1,\\; y = 0 \\) and \\( x = 5,\\; y = 4 \\)'
        }
    },

    {
        id: 'ise2-021',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 21',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( xy = 8 \\) and \\( y - x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'y = x + 2',
                    explanation: 'Express \\( y \\) in terms of \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 8 \\).',
                    workingLatex: 'x(x + 2) = 8 \\implies x^2 + 2x - 8 = 0',
                    explanation: 'Expand and rearrange.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x + 4)(x - 2) = 0 \\implies x = -4 \\text{ or } x = 2',
                    explanation: 'Numbers multiplying to \\(-8\\) and adding to \\(2\\): \\(4\\) and \\(-2\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\)-values.',
                    workingLatex: 'x = -4 \\Rightarrow y = -2; \\quad x = 2 \\Rightarrow y = 4',
                    explanation: 'Use \\( y = x + 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Check in \\( xy = 8 \\).',
                    workingLatex: '(-4)(-2) = 8 \\checkmark \\quad 2 \\times 4 = 8 \\checkmark',
                    explanation: 'Both solutions verified.'
                }
            ],
            finalAnswer: '\\( x = -4,\\; y = -2 \\) and \\( x = 2,\\; y = 4 \\)'
        }
    },

    {
        id: 'ise2-022',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 22',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( y = 2x^2 - x - 3 \\) and \\( y = 3x - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 3x - 1 \\) into the quadratic.',
                    workingLatex: '3x - 1 = 2x^2 - x - 3',
                    explanation: 'Replace \\( y \\) in the first equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Rearrange.',
                    workingLatex: '2x^2 - 4x - 2 = 0 \\implies x^2 - 2x - 1 = 0',
                    explanation: 'Divide through by 2.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quadratic formula.',
                    workingLatex: 'x = \\frac{2 \\pm \\sqrt{4 + 4}}{2} = \\frac{2 \\pm 2\\sqrt{2}}{2} = 1 \\pm \\sqrt{2}',
                    explanation: '\\( a=1, b=-2, c=-1 \\implies \\Delta = 4 + 4 = 8 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'y = 3(1 \\pm \\sqrt{2}) - 1 = 2 \\pm 3\\sqrt{2}',
                    explanation: 'Use \\( y = 3x - 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State both solution pairs.',
                    workingLatex: '(1+\\sqrt{2},\\; 2+3\\sqrt{2}) \\quad \\text{and} \\quad (1-\\sqrt{2},\\; 2-3\\sqrt{2})',
                    explanation: 'Each pair satisfies both equations. Since the roots are irrational, exact surd form is the simplest way to express the answers.'
                }
            ],
            finalAnswer: '\\( x = 1 + \\sqrt{2},\\; y = 2 + 3\\sqrt{2} \\) and \\( x = 1 - \\sqrt{2},\\; y = 2 - 3\\sqrt{2} \\)'
        }
    },

    {
        id: 'ise2-023',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 23',
        difficulty: 'Foundation',
        questionText: 'Find the points of intersection of the line \\( 3x - y + 2 = 0 \\) and the curve \\( y = x^2 + 2x - 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation for \\( y \\).',
                    workingLatex: 'y = 3x + 2',
                    explanation: 'Rearrange \\( 3x - y + 2 = 0 \\) by adding \\( y \\) to both sides to obtain \\( y = 3x + 2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the curve equation.',
                    workingLatex: '3x + 2 = x^2 + 2x - 1 \\implies x^2 - x - 3 = 0',
                    explanation: 'Rearrange to standard quadratic form.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 12}}{2} = \\frac{1 \\pm \\sqrt{13}}{2}',
                    explanation: '\\( \\Delta = 1 + 12 = 13 \\); does not factorise over the integers.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-values.',
                    workingLatex: 'y = 3 \\times \\frac{1 \\pm \\sqrt{13}}{2} + 2 = \\frac{7 \\pm 3\\sqrt{13}}{2}',
                    explanation: 'Substitute into \\( y = 3x + 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the intersection points.',
                    workingLatex: '\\left(\\frac{1+\\sqrt{13}}{2},\\; \\frac{7+3\\sqrt{13}}{2}\\right) \\quad \\text{and} \\quad \\left(\\frac{1-\\sqrt{13}}{2},\\; \\frac{7-3\\sqrt{13}}{2}\\right)',
                    explanation: 'Write the two points as coordinate pairs. The discriminant was positive, so two distinct intersection points exist.'
                }
            ],
            finalAnswer: '\\( \\left(\\dfrac{1+\\sqrt{13}}{2},\\ \\dfrac{7+3\\sqrt{13}}{2}\\right) \\) and \\( \\left(\\dfrac{1-\\sqrt{13}}{2},\\ \\dfrac{7-3\\sqrt{13}}{2}\\right) \\)'
        }
    },

    {
        id: 'ise2-024',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 24',
        difficulty: 'Foundation',
        questionText: 'a) Solve the simultaneous equations \\( x^2 + y^2 = 20 \\) and \\( y = 2x - 10 \\).\n\nb) State what your answer tells you geometrically about the line and the circle.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Substitute \\( y = 2x - 10 \\) into the circle equation.',
                    workingLatex: 'x^2 + (2x-10)^2 = 20 \\implies x^2 + 4x^2 - 40x + 100 = 20',
                    explanation: 'Expand \\( (2x-10)^2 = 4x^2 - 40x + 100 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '5x^2 - 40x + 80 = 0 \\implies x^2 - 8x + 16 = 0',
                    explanation: 'Divide through by 5.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 4)^2 = 0 \\implies x = 4',
                    explanation: 'Perfect square — only one solution.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\).',
                    workingLatex: 'y = 2(4) - 10 = -2',
                    explanation: 'Substitute \\( x = 4 \\) into the linear equation.'
                },
                {
                    stepNumber: 5,
                    description: 'Check in the circle equation \\( x^2 + y^2 = 20 \\).',
                    workingLatex: '4^2 + (-2)^2 = 16 + 4 = 20 \\checkmark',
                    explanation: 'The solution satisfies the circle equation.'
                },
                {
                    stepNumber: 6,
                    description: 'Note the repeated root.',
                    workingLatex: '(x-4)^2 = 0 \\implies \\text{repeated root at } x = 4',
                    explanation: 'A repeated root means the quadratic touches zero at exactly one point.'
                },
                {
                    stepNumber: 7,
                    description: 'Part b: interpret geometrically.',
                    workingLatex: '\\text{One solution } \\Rightarrow \\text{ the line is tangent to the circle at } (4,\\, -2)',
                    explanation: 'Because there is only one intersection point, the line is a tangent to the circle rather than a secant.'
                }
            ],
            finalAnswer: 'a) \\( x = 4,\\; y = -2 \\) b) The line is tangent to the circle at the point \\( (4,\\ -2) \\).'
        }
    },

    // ── Type C: Determine number of intersections (Q25–Q28) ───────────────────

    {
        id: 'ise2-025',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 25',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 2x + 5 \\) and the curve \\( y = x^2 - x + 2 \\) intersect at zero, one, or two points.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the equations equal and rearrange.',
                    workingLatex: '2x + 5 = x^2 - x + 2 \\implies x^2 - 3x - 3 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant \\( \\Delta = b^2 - 4ac \\).',
                    workingLatex: '\\Delta = (-3)^2 - 4(1)(-3) = 9 + 12 = 21',
                    explanation: 'Here \\( a=1, b=-3, c=-3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret the discriminant.',
                    workingLatex: '\\Delta = 21 > 0 \\implies \\text{two distinct real intersections}',
                    explanation: 'A positive discriminant means two distinct real roots, hence two points of intersection.'
                },
                {
                    stepNumber: 4,
                    description: 'State the conclusion.',
                    workingLatex: '\\Delta > 0 \\implies \\text{two points of intersection}',
                    explanation: 'Since \\( \\Delta = 21 > 0 \\), the resulting quadratic has two distinct real roots, so the line and curve meet at exactly two points.'
                }
            ],
            finalAnswer: 'The line and curve intersect at two points (since \\( \\Delta = 21 > 0 \\)).'
        }
    },

    {
        id: 'ise2-026',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 26',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 4x - 5 \\) and the curve \\( y = x^2 + 2x + 3 \\) intersect, and if so how many times.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal and rearrange.',
                    workingLatex: '4x - 5 = x^2 + 2x + 3 \\implies x^2 - 2x + 8 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = (-2)^2 - 4(1)(8) = 4 - 32 = -28',
                    explanation: '\\( a=1, b=-2, c=8 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: '\\Delta = -28 < 0 \\implies \\text{no real intersections}',
                    explanation: 'A negative discriminant means no real roots — the line does not meet the curve.'
                },
                {
                    stepNumber: 4,
                    description: 'State the conclusion.',
                    workingLatex: '\\Delta < 0 \\implies \\text{no points of intersection}',
                    explanation: 'Since \\( \\Delta = -28 < 0 \\), the quadratic has no real solutions, so the line and curve do not intersect.'
                }
            ],
            finalAnswer: 'The line and curve do not intersect (since \\( \\Delta = -28 < 0 \\)).'
        }
    },

    {
        id: 'ise2-027',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 27',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 6x - 9 \\) and the curve \\( y = x^2 + 3 \\) intersect at zero, one, or two points, and state the geometric significance.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal and rearrange.',
                    workingLatex: '6x - 9 = x^2 + 3 \\implies x^2 - 6x + 12 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 36 - 48 = -12',
                    explanation: '\\( a=1, b=-6, c=12 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: '\\Delta = -12 < 0 \\implies \\text{no real intersections}',
                    explanation: 'The line does not touch or cross the curve at any real point.'
                },
                {
                    stepNumber: 4,
                    description: 'State the geometric significance.',
                    workingLatex: '\\Delta < 0 \\implies \\text{the line misses the curve entirely}',
                    explanation: 'Since \\( \\Delta = -12 < 0 \\), there are no real solutions. Geometrically the line does not meet the parabola at any point.'
                }
            ],
            finalAnswer: 'No intersections (\\( \\Delta = -12 < 0 \\)): the line misses the curve entirely.'
        }
    },

    {
        id: 'ise2-028',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 28',
        difficulty: 'Foundation',
        questionText: 'Without solving fully, determine whether the line \\( y = 5x - 4 \\) and the curve \\( y = x^2 + 2x + 1 \\) intersect at zero, one, or two points.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set equal and rearrange.',
                    workingLatex: '5x - 4 = x^2 + 2x + 1 \\implies x^2 - 3x + 5 = 0',
                    explanation: 'Bring all terms to one side.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute the discriminant.',
                    workingLatex: '\\Delta = 9 - 20 = -11',
                    explanation: '\\( a=1, b=-3, c=5 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Interpret.',
                    workingLatex: '\\Delta = -11 < 0 \\implies \\text{no real intersections}',
                    explanation: 'The line and curve do not meet.'
                },
                {
                    stepNumber: 4,
                    description: 'State the conclusion.',
                    workingLatex: '\\Delta < 0 \\implies \\text{no points of intersection}',
                    explanation: 'Since \\( \\Delta = -11 < 0 \\), the quadratic has no real roots, so the line and curve do not intersect at any point.'
                }
            ],
            finalAnswer: 'No intersections (\\( \\Delta = -11 < 0 \\)).'
        }
    },

    // ── Type D: Multi-part exam-style (Q29–Q35) ───────────────────────────────

    {
        id: 'ise2-029',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 29',
        difficulty: 'Foundation',
        questionText: 'A straight line has equation \\( y = kx + 2 \\). Find the values of \\( k \\) for which the line is tangent to the curve \\( y = x^2 - 4x + 6 \\).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Set the expressions for \\( y \\) equal.',
                    workingLatex: 'kx + 2 = x^2 - 4x + 6 \\implies x^2 - (4+k)x + 4 = 0',
                    explanation: 'Rearrange to a quadratic in \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Identify the quadratic coefficients.',
                    workingLatex: 'a = 1, \\quad b = -(4+k), \\quad c = 4',
                    explanation: 'Reading off from \\( x^2 - (4+k)x + 4 = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'For tangency, the discriminant must equal zero.',
                    workingLatex: '\\Delta = b^2 - 4ac = (4+k)^2 - 4(1)(4) = (4+k)^2 - 16 = 0',
                    explanation: 'A tangent line meets the curve at exactly one point, so \\( \\Delta = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Solve for \\( k \\).',
                    workingLatex: '(4+k)^2 = 16 \\implies 4 + k = \\pm 4',
                    explanation: 'Take square roots of both sides.'
                },
                {
                    stepNumber: 5,
                    description: 'Find both values.',
                    workingLatex: '4 + k = 4 \\Rightarrow k = 0; \\quad 4 + k = -4 \\Rightarrow k = -8',
                    explanation: 'Solving each case gives two values of \\( k \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Verify both solutions.',
                    workingLatex: 'k=0: y=2 \\text{ meets } y=x^2-4x+6 \\Rightarrow x^2-4x+4=0 \\Rightarrow (x-2)^2=0 \\checkmark',
                    explanation: 'When \\( k = 0 \\), the line \\( y = 2 \\) touches the curve at one point. When \\( k = -8 \\), \\( y = -8x + 2 \\) similarly gives a repeated root.'
                }
            ],
            finalAnswer: '\\( k = 0 \\) or \\( k = -8 \\)'
        }
    },

    {
        id: 'ise2-030',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 30',
        difficulty: 'Foundation',
        questionText: 'Two positive numbers \\( x \\) and \\( y \\) satisfy \\( x + y = 10 \\) and \\( xy = 24 \\). Find the two numbers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From the linear equation, express \\( y \\) in terms of \\( x \\).',
                    workingLatex: 'y = 10 - x',
                    explanation: 'Rearrange the first equation.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into \\( xy = 24 \\).',
                    workingLatex: 'x(10 - x) = 24 \\implies 10x - x^2 = 24 \\implies x^2 - 10x + 24 = 0',
                    explanation: 'Expand and rearrange.'
                },
                {
                    stepNumber: 3,
                    description: 'Factorise.',
                    workingLatex: '(x - 4)(x - 6) = 0 \\implies x = 4 \\text{ or } x = 6',
                    explanation: 'Numbers multiplying to 24 and adding to \\(-10\\): \\(-4\\) and \\(-6\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: 'x = 4 \\Rightarrow y = 6; \\quad x = 6 \\Rightarrow y = 4',
                    explanation: 'The two numbers are 4 and 6 (the same pair, just swapped).'
                }
            ],
            finalAnswer: 'The two numbers are \\( 4 \\) and \\( 6 \\).'
        }
    },

    {
        id: 'ise2-031',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 31',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( 3x + y = 7 \\) and \\( x^2 - y = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'From the linear equation, isolate \\( y \\).',
                    workingLatex: 'y = 7 - 3x',
                    explanation: 'Rearrange equation \\( \\textcircled{1} \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic equation.',
                    workingLatex: 'x^2 - (7 - 3x) = 1 \\implies x^2 + 3x - 8 = 0',
                    explanation: 'Replace \\( y \\) and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Use the quadratic formula.',
                    workingLatex: 'x = \\frac{-3 \\pm \\sqrt{9 + 32}}{2} = \\frac{-3 \\pm \\sqrt{41}}{2}',
                    explanation: '\\( \\Delta = 9 + 32 = 41 \\); cannot factorise over the integers.'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( y \\) for each solution.',
                    workingLatex: 'y = 7 - 3 \\times \\frac{-3 \\pm \\sqrt{41}}{2} = \\frac{14 + 9 \\mp 3\\sqrt{41}}{2} = \\frac{23 \\mp 3\\sqrt{41}}{2}',
                    explanation: 'Substitute each \\( x \\) into \\( y = 7 - 3x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the two solution pairs.',
                    workingLatex: '\\left(\\frac{-3+\\sqrt{41}}{2},\\; \\frac{23-3\\sqrt{41}}{2}\\right) \\quad \\text{and} \\quad \\left(\\frac{-3-\\sqrt{41}}{2},\\; \\frac{23+3\\sqrt{41}}{2}\\right)',
                    explanation: 'There are two points of intersection between the line and the parabola.'
                }
            ],
            finalAnswer: '\\( x = \\dfrac{-3+\\sqrt{41}}{2},\\; y = \\dfrac{23-3\\sqrt{41}}{2} \\) and \\( x = \\dfrac{-3-\\sqrt{41}}{2},\\; y = \\dfrac{23+3\\sqrt{41}}{2} \\)'
        }
    },

    {
        id: 'ise2-032',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 32',
        difficulty: 'Foundation',
        questionText: 'A rectangle has perimeter 26 cm and area 42 cm².\n\na) Let the length be \\( x \\) cm and width \\( y \\) cm. Write down two equations in \\( x \\) and \\( y \\).\n\nb) Hence find the dimensions of the rectangle.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: write equations from perimeter and area.',
                    workingLatex: '2x + 2y = 26 \\implies x + y = 13 \\qquad xy = 42',
                    explanation: 'Perimeter \\( = 2(x+y) \\); area \\( = xy \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Part b: from the linear equation, express \\( y \\) in terms of \\( x \\).',
                    workingLatex: 'y = 13 - x',
                    explanation: 'Rearrange the perimeter equation.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute into the area equation.',
                    workingLatex: 'x(13 - x) = 42 \\implies x^2 - 13x + 42 = 0',
                    explanation: 'Expand and rearrange.'
                },
                {
                    stepNumber: 4,
                    description: 'Factorise.',
                    workingLatex: '(x - 6)(x - 7) = 0 \\implies x = 6 \\text{ or } x = 7',
                    explanation: 'Numbers multiplying to 42 and adding to \\(-13\\): \\(-6\\) and \\(-7\\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: 'x = 6 \\Rightarrow y = 7; \\quad x = 7 \\Rightarrow y = 6',
                    explanation: 'Substitute each \\( x \\) into \\( y = 13 - x \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the dimensions.',
                    workingLatex: '\\text{Length } = 7 \\text{ cm}, \\quad \\text{Width } = 6 \\text{ cm}',
                    explanation: 'Both pairs give the same rectangle: 7 cm by 6 cm. Check: perimeter \\( = 2(7+6) = 26 \\), area \\( = 7 \\times 6 = 42 \\).'
                }
            ],
            finalAnswer: 'a) \\( x + y = 13 \\) and \\( xy = 42 \\). b) Dimensions: \\( 7 \\) cm by \\( 6 \\) cm.'
        }
    },

    {
        id: 'ise2-033',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 33',
        difficulty: 'Foundation',
        questionText: 'Solve the simultaneous equations \\( x^2 + y^2 = 34 \\) and \\( x - y = -2 \\), and state the geometric meaning of your answer.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange the linear equation.',
                    workingLatex: 'x = y - 2',
                    explanation: 'Express \\( x \\) in terms of \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the circle equation.',
                    workingLatex: '(y-2)^2 + y^2 = 34 \\implies y^2 - 4y + 4 + y^2 = 34 \\implies 2y^2 - 4y - 30 = 0',
                    explanation: 'Expand and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by 2 and factorise.',
                    workingLatex: 'y^2 - 2y - 15 = 0 \\implies (y - 5)(y + 3) = 0',
                    explanation: 'Numbers multiplying to \\(-15\\) and adding to \\(-2\\): \\(-5\\) and \\(3\\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find \\( x \\)-values.',
                    workingLatex: 'y = 5 \\Rightarrow x = 3; \\quad y = -3 \\Rightarrow x = -5',
                    explanation: 'Use \\( x = y - 2 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Verify the solutions.',
                    workingLatex: '3^2 + 5^2 = 9 + 25 = 34 \\checkmark; \\quad (-5)^2 + (-3)^2 = 25 + 9 = 34 \\checkmark',
                    explanation: 'Both points satisfy the circle equation \\( x^2 + y^2 = 34 \\) and the line \\( x - y = -2 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'State the geometric meaning.',
                    workingLatex: '\\text{Two intersection points } (3, 5) \\text{ and } (-5, -3)',
                    explanation: 'The line \\( x - y = -2 \\) is a chord of the circle \\( x^2 + y^2 = 34 \\), crossing it at two points.'
                }
            ],
            finalAnswer: '\\( (3,\\ 5) \\) and \\( (-5,\\ -3) \\). The line is a chord of the circle \\( x^2 + y^2 = 34 \\).'
        }
    },

    {
        id: 'ise2-034',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 34',
        difficulty: 'Foundation',
        questionText: 'a) Solve the simultaneous equations \\( y = x^2 + 2x - 8 \\) and \\( y + 3x = 4 \\).\n\nb) Interpret your answer geometrically.\n\nc) Find the length of the chord joining the two points of intersection.',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: rearrange the linear equation.',
                    workingLatex: 'y = 4 - 3x',
                    explanation: 'Isolate \\( y \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute into the quadratic.',
                    workingLatex: '4 - 3x = x^2 + 2x - 8 \\implies x^2 + 5x - 12 = 0',
                    explanation: 'Rearrange to standard form.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve using the quadratic formula.',
                    workingLatex: 'x = \\frac{-5 \\pm \\sqrt{25 + 48}}{2} = \\frac{-5 \\pm \\sqrt{73}}{2}',
                    explanation: 'The discriminant is \\( \\Delta = 25 + 48 = 73 \\), which is not a perfect square, so we leave in surd form.'
                },
                {
                    stepNumber: 4,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: 'y = 4 - 3x = 4 - 3 \\times \\frac{-5 \\pm \\sqrt{73}}{2} = \\frac{23 \\mp 3\\sqrt{73}}{2}',
                    explanation: 'Substitute each \\( x \\) into \\( y = 4 - 3x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'State the two solution pairs.',
                    workingLatex: '\\left(\\frac{-5+\\sqrt{73}}{2},\\; \\frac{23-3\\sqrt{73}}{2}\\right) \\quad \\text{and} \\quad \\left(\\frac{-5-\\sqrt{73}}{2},\\; \\frac{23+3\\sqrt{73}}{2}\\right)',
                    explanation: 'These are the two points where the line meets the parabola.'
                },
                {
                    stepNumber: 6,
                    description: 'Part b: geometric interpretation.',
                    workingLatex: '\\text{Two points of intersection} \\Rightarrow \\text{line is a secant to the parabola}',
                    explanation: 'Since the discriminant is positive, the line cuts the parabola at two distinct points, making it a secant.'
                },
                {
                    stepNumber: 7,
                    description: 'Part c: find the difference in \\( x \\)- and \\( y \\)-coordinates.',
                    workingLatex: '\\Delta x = \\sqrt{73}, \\quad \\Delta y = -3\\sqrt{73}',
                    explanation: 'The difference in \\( x \\) between the two roots is \\( \\sqrt{73} \\). Since \\( y = 4 - 3x \\), we have \\( \\Delta y = -3 \\Delta x \\).'
                },
                {
                    stepNumber: 8,
                    description: 'Apply the distance formula.',
                    workingLatex: 'd = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} = \\sqrt{73 + 9 \\times 73} = \\sqrt{10 \\times 73} = \\sqrt{730}',
                    explanation: 'Using \\( (\\Delta y)^2 = 9 \\times 73 \\), the total is \\( 10 \\times 73 = 730 \\).'
                }
            ],
            finalAnswer: 'a) \\( x = \\dfrac{-5 \\pm \\sqrt{73}}{2} \\), \\( y = \\dfrac{23 \\mp 3\\sqrt{73}}{2} \\). b) The line is a secant to the parabola. c) Chord length \\( = \\sqrt{730} \\).'
        }
    },

    {
        id: 'ise2-035',
        topicRef: 'ise2',
        topicTitle: 'Simultaneous Equations 35',
        difficulty: 'Foundation',
        questionText: 'A circle has equation \\( x^2 + y^2 = 50 \\). A line has equation \\( y = x + 2 \\).\n\na) Find the coordinates of the two points where the line meets the circle.\n\nb) Find the midpoint of the chord joining these two points.\n\nc) Show that the radius to the midpoint is perpendicular to the chord.',
        marks: 10,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part a: substitute \\( y = x + 2 \\) into the circle equation.',
                    workingLatex: 'x^2 + (x+2)^2 = 50 \\implies x^2 + x^2 + 4x + 4 = 50 \\implies 2x^2 + 4x - 46 = 0',
                    explanation: 'Expand \\( (x+2)^2 \\) and collect terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify by dividing by 2.',
                    workingLatex: 'x^2 + 2x - 23 = 0',
                    explanation: 'Divide every term by 2. This does not factorise over the integers.'
                },
                {
                    stepNumber: 3,
                    description: 'Apply the quadratic formula.',
                    workingLatex: 'x = \\frac{-2 \\pm \\sqrt{4 + 92}}{2} = \\frac{-2 \\pm \\sqrt{96}}{2} = \\frac{-2 \\pm 4\\sqrt{6}}{2} = -1 \\pm 2\\sqrt{6}',
                    explanation: 'The discriminant is \\( 4 + 92 = 96 = 16 \\times 6 \\), so \\( \\sqrt{96} = 4\\sqrt{6} \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the intersection points.',
                    workingLatex: 'x = -1 + 2\\sqrt{6},\\; y = 1 + 2\\sqrt{6} \\quad \\text{and} \\quad x = -1 - 2\\sqrt{6},\\; y = 1 - 2\\sqrt{6}',
                    explanation: 'Use \\( y = x + 2 \\) for each \\( x \\)-value.'
                },
                {
                    stepNumber: 5,
                    description: 'Part b: find the midpoint.',
                    workingLatex: 'M = \\left(\\frac{(-1+2\\sqrt{6})+(-1-2\\sqrt{6})}{2},\\ \\frac{(1+2\\sqrt{6})+(1-2\\sqrt{6})}{2}\\right) = (-1, 1)',
                    explanation: 'The \\( \\sqrt{6} \\) terms cancel in the averages, leaving \\( (-1, 1) \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Part c: find the gradient of the chord.',
                    workingLatex: 'm_{\\text{chord}} = 1 \\quad (\\text{slope of } y = x+2)',
                    explanation: 'The chord lies along \\( y = x + 2 \\), which has gradient 1.'
                },
                {
                    stepNumber: 7,
                    description: 'Find the gradient of the radius from the origin to \\( M(-1,1) \\).',
                    workingLatex: 'm_{\\text{radius}} = \\frac{1 - 0}{-1 - 0} = -1',
                    explanation: 'The centre of the circle is \\( (0,0) \\), so the gradient is \\( \\frac{1}{-1} = -1 \\).'
                },
                {
                    stepNumber: 8,
                    description: 'Check perpendicularity.',
                    workingLatex: 'm_{\\text{chord}} \\times m_{\\text{radius}} = 1 \\times (-1) = -1 \\checkmark',
                    explanation: 'The product of gradients equals \\( -1 \\), confirming the radius is perpendicular to the chord.'
                }
            ],
            finalAnswer: 'a) \\( (-1+2\\sqrt{6},\\; 1+2\\sqrt{6}) \\) and \\( (-1-2\\sqrt{6},\\; 1-2\\sqrt{6}) \\). b) Midpoint \\( (-1,\\ 1) \\). c) Gradients multiply to \\( -1 \\), so radius \\( \\perp \\) chord. \\( \\square \\)'
        }
    },

    // ─── Q36–70: Additional Simultaneous Equations ──────────────────────

    {
        id: 'ise2-036', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 36', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x + y = 7 \\) and \\( x - y = 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the two equations to eliminate \\( y \\).', workingLatex: '(2x + y) + (x - y) = 7 + 2 \\implies 3x = 9 \\implies x = 3', explanation: 'Adding eliminates \\( y \\) because \\( +y \\) and \\( -y \\) cancel.' },
            { stepNumber: 2, description: 'Substitute \\( x = 3 \\) into the first equation.', workingLatex: '2(3) + y = 7 \\implies y = 7 - 6 = 1', explanation: 'Replace \\( x \\) with 3 and solve for \\( y \\).' },
            { stepNumber: 3, description: 'State the solution.', workingLatex: 'x = 3, \\quad y = 1', explanation: 'Check: \\( 2(3) + 1 = 7 \\) and \\( 3 - 1 = 2 \\). Both equations are satisfied.' }
        ], finalAnswer: '\\( x = 3, \\; y = 1 \\)' }
    },
    {
        id: 'ise2-037', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 37', difficulty: 'Foundation',
        questionText: 'Solve: \\( 3x + 2y = 12 \\) and \\( x + 2y = 8 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Subtract the second equation from the first to eliminate \\( y \\).', workingLatex: '(3x + 2y) - (x + 2y) = 12 - 8 \\implies 2x = 4 \\implies x = 2', explanation: 'The \\( 2y \\) terms cancel when subtracting.' },
            { stepNumber: 2, description: 'Substitute \\( x = 2 \\) into the second equation.', workingLatex: '2 + 2y = 8 \\implies 2y = 6 \\implies y = 3', explanation: 'Replace \\( x \\) with 2 and solve for \\( y \\).' },
            { stepNumber: 3, description: 'State the solution.', workingLatex: 'x = 2, \\quad y = 3', explanation: 'Check: \\( 3(2) + 2(3) = 12 \\) and \\( 2 + 2(3) = 8 \\). Both equations are satisfied.' }
        ], finalAnswer: '\\( x = 2, \\; y = 3 \\)' }
    },
    {
        id: 'ise2-038', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 38', difficulty: 'Foundation',
        questionText: 'Solve: \\( 4x - 3y = 5 \\) and \\( 2x + 3y = 13 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the two equations to eliminate \\( y \\).', workingLatex: '(4x - 3y) + (2x + 3y) = 5 + 13 \\implies 6x = 18 \\implies x = 3', explanation: 'Adding eliminates \\( y \\) because \\( -3y \\) and \\( +3y \\) cancel.' },
            { stepNumber: 2, description: 'Substitute \\( x = 3 \\) into the second equation.', workingLatex: '2(3) + 3y = 13 \\implies 6 + 3y = 13 \\implies 3y = 7 \\implies y = \\frac{7}{3}', explanation: 'Replace \\( x \\) with 3 and solve for \\( y \\).' },
            { stepNumber: 3, description: 'State the solution.', workingLatex: 'x = 3, \\quad y = \\frac{7}{3}', explanation: 'Check: \\( 4(3) - 3 \\times \\frac{7}{3} = 12 - 7 = 5 \\) and \\( 2(3) + 3 \\times \\frac{7}{3} = 6 + 7 = 13 \\). Both correct.' }
        ], finalAnswer: '\\( x = 3, \\; y = \\frac{7}{3} \\)' }
    },
    {
        id: 'ise2-039', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 39', difficulty: 'Foundation',
        questionText: 'Solve: \\( 5x + 4y = 22 \\) and \\( 3x - 4y = 2 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add the two equations to eliminate \\( y \\).', workingLatex: '(5x + 4y) + (3x - 4y) = 22 + 2 \\implies 8x = 24 \\implies x = 3', explanation: 'Adding eliminates \\( y \\) because \\( +4y \\) and \\( -4y \\) cancel.' },
            { stepNumber: 2, description: 'Substitute \\( x = 3 \\) into the first equation.', workingLatex: '5(3) + 4y = 22 \\implies 15 + 4y = 22 \\implies 4y = 7 \\implies y = \\frac{7}{4}', explanation: 'Replace \\( x \\) with 3 and solve for \\( y \\).' },
            { stepNumber: 3, description: 'State the solution.', workingLatex: 'x = 3, \\quad y = \\frac{7}{4}', explanation: 'Check: \\( 5(3) + 4 \\times \\frac{7}{4} = 15 + 7 = 22 \\) and \\( 3(3) - 4 \\times \\frac{7}{4} = 9 - 7 = 2 \\). Both correct.' }
        ], finalAnswer: '\\( x = 3, \\; y = \\frac{7}{4} \\)' }
    },
    {
        id: 'ise2-040', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 40', difficulty: 'Foundation',
        questionText: 'Solve: \\( x + 3y = 10 \\) and \\( 2x - y = 6 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'From the second equation, express \\( y \\) in terms of \\( x \\) and substitute.', workingLatex: 'y = 2x - 6 \\implies x + 3(2x - 6) = 10 \\implies 7x - 18 = 10 \\implies 7x = 28 \\implies x = 4', explanation: 'Rearrange the second equation to get \\( y = 2x - 6 \\), then substitute into the first.' },
            { stepNumber: 2, description: 'Find \\( y \\).', workingLatex: 'y = 2(4) - 6 = 8 - 6 = 2', explanation: 'Substitute \\( x = 4 \\) back into \\( y = 2x - 6 \\).' },
            { stepNumber: 3, description: 'State the solution.', workingLatex: 'x = 4, \\quad y = 2', explanation: 'Check: \\( 4 + 3(2) = 10 \\) and \\( 2(4) - 2 = 6 \\). Both equations are satisfied.' }
        ], finalAnswer: '\\( x = 4, \\; y = 2 \\)' }
    },
    {
        id: 'ise2-041', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 41', difficulty: 'Foundation',
        questionText: 'Solve: \\( \\frac{x}{2} + y = 5 \\) and \\( x - 2y = 4 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply the first equation by 2 to clear the fraction.', workingLatex: 'x + 2y = 10', explanation: 'Multiplying every term by 2 removes the denominator.' },
            { stepNumber: 2, description: 'Add with the second equation to eliminate \\( y \\).', workingLatex: '(x + 2y) + (x - 2y) = 10 + 4 \\implies 2x = 14 \\implies x = 7', explanation: 'The \\( 2y \\) terms cancel when adding.' },
            { stepNumber: 3, description: 'Find \\( y \\).', workingLatex: 'y = \\frac{10 - 7}{2} = \\frac{3}{2}', explanation: 'Substitute \\( x = 7 \\) into \\( x + 2y = 10 \\) and solve. Check: \\( \\frac{7}{2} + \\frac{3}{2} = 5 \\) and \\( 7 - 3 = 4 \\). Both correct.' }
        ], finalAnswer: '\\( x = 7, \\; y = \\frac{3}{2} \\)' }
    },
    {
        id: 'ise2-042', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 42', difficulty: 'Foundation',
        questionText: 'Two numbers add to 20 and differ by 6. Find the numbers.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up the simultaneous equations.', workingLatex: 'x + y = 20, \\quad x - y = 6', explanation: 'Let \\( x \\) and \\( y \\) be the two numbers, where \\( x > y \\).' },
            { stepNumber: 2, description: 'Add the two equations.', workingLatex: '2x = 26 \\implies x = 13', explanation: 'Adding eliminates \\( y \\).' },
            { stepNumber: 3, description: 'Find \\( y \\).', workingLatex: 'y = 20 - 13 = 7', explanation: 'Substitute \\( x = 13 \\) into the first equation. Check: \\( 13 + 7 = 20 \\) and \\( 13 - 7 = 6 \\). Both correct.' }
        ], finalAnswer: 'The two numbers are \\( 13 \\) and \\( 7 \\).' }
    },
    {
        id: 'ise2-043', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 43', difficulty: 'Foundation',
        questionText: 'Solve: \\( 3x + 5y = 21 \\) and \\( 2x + 3y = 13 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply both equations to match the \\( y \\) coefficients', workingLatex: '3(3x+5y) = 63; \\quad 5(2x+3y) = 65', explanation: 'Multiplying equation 1 by 3 gives \\( 9x+15y = 63 \\) and multiplying equation 2 by 5 gives \\( 10x+15y = 65 \\).' },
            { stepNumber: 2, description: 'Subtract the first result from the second to eliminate \\( y \\)', workingLatex: '10x + 15y - 9x - 15y = 65 - 63 \\implies x = 2', explanation: 'Subtracting cancels the \\( y \\) terms, leaving \\( x = 2 \\).' },
            { stepNumber: 3, description: 'Substitute \\( x = 2 \\) back into equation 2 to find \\( y \\)', workingLatex: '2(2) + 3y = 13 \\implies 3y = 9 \\implies y = 3', explanation: 'Replacing \\( x \\) with 2 and solving gives \\( y = 3 \\).' }
        ], finalAnswer: '\\( x = 2, \\quad y = 3 \\)' }
    },
    {
        id: 'ise2-044', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 44', difficulty: 'Foundation',
        questionText: 'A cinema sells adult tickets at \\( \\pounds 8 \\) and child tickets at \\( \\pounds 5 \\). 50 tickets are sold for \\( \\pounds 310 \\). How many of each?',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let \\( a \\) be adult tickets and \\( c \\) be child tickets, and form two equations', workingLatex: 'a + c = 50; \\quad 8a + 5c = 310', explanation: 'The first equation represents the total number of tickets and the second represents the total revenue.' },
            { stepNumber: 2, description: 'Substitute \\( c = 50 - a \\) into the second equation', workingLatex: '8a + 5(50-a) = 310 \\implies 8a + 250 - 5a = 310 \\implies 3a = 60 \\implies a = 20', explanation: 'Expanding and simplifying gives \\( a = 20 \\).' },
            { stepNumber: 3, description: 'Find \\( c \\)', workingLatex: 'c = 50 - 20 = 30', explanation: 'Substituting back gives \\( c = 30 \\).' }
        ], finalAnswer: '\\( 20 \\) adult, \\( 30 \\) child' }
    },
    {
        id: 'ise2-045', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 45', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 \\) and \\( y = 2x + 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange', workingLatex: 'x^2 = 2x + 3 \\implies x^2 - 2x - 3 = 0', explanation: 'Substituting gives a quadratic equation in \\( x \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(x-3)(x+1) = 0 \\implies x = 3 \\text{ or } x = -1', explanation: 'The quadratic factors into two linear brackets.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\) values using \\( y = x^2 \\)', workingLatex: 'x=3: y=9; \\quad x=-1: y=1', explanation: 'Substituting each \\( x \\) value back gives the full coordinate pairs.' }
        ], finalAnswer: '\\( (3,\\, 9) \\) and \\( (-1,\\, 1) \\)' }
    },
    {
        id: 'ise2-046', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 46', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 - 4 \\) and \\( y = 3x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange', workingLatex: 'x^2 - 4 = 3x \\implies x^2 - 3x - 4 = 0', explanation: 'Substituting gives a quadratic equation in \\( x \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(x-4)(x+1) = 0 \\implies x = 4 \\text{ or } x = -1', explanation: 'The quadratic factors neatly into two brackets.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\) values using \\( y = 3x \\)', workingLatex: 'x=4: y=12; \\quad x=-1: y=-3', explanation: 'Substituting each \\( x \\) value into the linear equation gives the \\( y \\) coordinates.' }
        ], finalAnswer: '\\( (4,\\, 12) \\) and \\( (-1,\\, -3) \\)' }
    },
    {
        id: 'ise2-047', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 47', difficulty: 'Foundation',
        questionText: 'Solve: \\( x + y = 5 \\) and \\( x^2 + y^2 = 13 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange the linear equation to get \\( y = 5 - x \\) and substitute into the second equation', workingLatex: 'x^2 + (5-x)^2 = 13', explanation: 'Replacing \\( y \\) in the quadratic equation eliminates one variable.' },
            { stepNumber: 2, description: 'Expand \\( (5-x)^2 \\) and simplify', workingLatex: 'x^2 + 25 - 10x + x^2 = 13 \\implies 2x^2 - 10x + 12 = 0', explanation: 'Collecting like terms and moving 13 to the left gives a quadratic.' },
            { stepNumber: 3, description: 'Divide through by 2 and factorise', workingLatex: 'x^2 - 5x + 6 = 0 \\implies (x-2)(x-3) = 0', explanation: 'Dividing by 2 simplifies the quadratic, which then factorises.' },
            { stepNumber: 4, description: 'Find the corresponding \\( y \\) values', workingLatex: 'x = 2 \\implies y = 3; \\quad x = 3 \\implies y = 2', explanation: 'Substituting each \\( x \\) back into \\( y = 5 - x \\) gives the two solution pairs.' }
        ], finalAnswer: '\\( (2,\\, 3) \\) and \\( (3,\\, 2) \\)' }
    },
    {
        id: 'ise2-048', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 48', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x - 3y = 1 \\) and \\( 4x + y = 15 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange equation 2 to get \\( y = 15 - 4x \\) and substitute into equation 1', workingLatex: '2x - 3(15-4x) = 1 \\implies 2x - 45 + 12x = 1 \\implies 14x = 46 \\implies x = \\frac{23}{7}', explanation: 'Expanding and collecting \\( x \\) terms gives \\( x = \\frac{23}{7} \\).' },
            { stepNumber: 2, description: 'Substitute back to find \\( y \\)', workingLatex: 'y = 15 - 4 \\cdot \\frac{23}{7} = \\frac{105 - 92}{7} = \\frac{13}{7}', explanation: 'Replacing \\( x \\) in \\( y = 15 - 4x \\) and simplifying gives \\( y = \\frac{13}{7} \\).' }
        ], finalAnswer: '\\( x = \\frac{23}{7}, \\quad y = \\frac{13}{7} \\)' }
    },
    {
        id: 'ise2-049', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 49', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 + 1 \\) and \\( y = 5 - x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange', workingLatex: 'x^2 + 1 = 5 - x \\implies x^2 + x - 4 = 0', explanation: 'Substituting gives a quadratic that does not factorise neatly.' },
            { stepNumber: 2, description: 'Apply the quadratic formula', workingLatex: 'x = \\frac{-1 \\pm \\sqrt{1 + 16}}{2} = \\frac{-1 \\pm \\sqrt{17}}{2}', explanation: 'The discriminant is \\( 17 \\), so the roots are irrational.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\) values using \\( y = 5 - x \\)', workingLatex: 'y = 5 - \\frac{-1 \\pm \\sqrt{17}}{2} = \\frac{11 \\mp \\sqrt{17}}{2}', explanation: 'Substituting each \\( x \\) into the linear equation gives the full coordinate pairs.' }
        ], finalAnswer: '\\( \\left(\\frac{-1+\\sqrt{17}}{2},\\,\\frac{11-\\sqrt{17}}{2}\\right) \\) and \\( \\left(\\frac{-1-\\sqrt{17}}{2},\\,\\frac{11+\\sqrt{17}}{2}\\right) \\)' }
    },
    {
        id: 'ise2-050', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 50', difficulty: 'Foundation',
        questionText: 'The sum of two numbers is 15 and their product is 54. Find the two numbers.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Let the two numbers be \\( x \\) and \\( y \\) and write the equations', workingLatex: 'x + y = 15; \\quad xy = 54', explanation: 'The first equation captures the sum and the second captures the product.' },
            { stepNumber: 2, description: 'Substitute \\( y = 15 - x \\) into the product equation', workingLatex: 'x(15-x) = 54 \\implies 15x - x^2 = 54 \\implies x^2 - 15x + 54 = 0', explanation: 'Rearranging gives a quadratic in \\( x \\).' },
            { stepNumber: 3, description: 'Factorise and solve', workingLatex: '(x-6)(x-9) = 0 \\implies x = 6 \\text{ or } x = 9', explanation: 'When \\( x = 6 \\), \\( y = 9 \\) and when \\( x = 9 \\), \\( y = 6 \\). The two numbers are 6 and 9.' }
        ], finalAnswer: '\\( 6 \\) and \\( 9 \\)' }
    },
    {
        id: 'ise2-051', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 51', difficulty: 'Foundation',
        questionText: 'Solve: \\( 3x - 2y = 4 \\) and \\( 6x - 4y = 8 \\). What do you notice?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Observe that equation 2 is exactly 2 times equation 1', workingLatex: '2(3x - 2y) = 6x - 4y = 8 = 2 \\times 4', explanation: 'Since one equation is a multiple of the other, they represent the same line.' },
            { stepNumber: 2, description: 'State the conclusion', workingLatex: '\\text{The equations are dependent (identical lines).}', explanation: 'There are infinitely many solutions: any point on \\( 3x - 2y = 4 \\), i.e. \\( y = \\frac{3x-4}{2} \\), is a solution.' }
        ], finalAnswer: 'Infinitely many solutions (same line)' }
    },
    {
        id: 'ise2-052', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 52', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x + 3y = 7 \\) and \\( 4x + 6y = 10 \\). What do you notice?',
        marks: 2, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply equation 1 by 2 and compare with equation 2', workingLatex: '2(2x + 3y) = 4x + 6y = 14 \\neq 10', explanation: 'The left-hand sides are identical but the right-hand sides differ, giving a contradiction.' },
            { stepNumber: 2, description: 'State the conclusion', workingLatex: '\\text{No solution — the lines are parallel.}', explanation: 'Parallel lines never intersect, so there is no pair \\( (x, y) \\) satisfying both equations.' }
        ], finalAnswer: 'No solution (parallel lines)' }
    },
    {
        id: 'ise2-053', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 53', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = 2x^2 - 3 \\) and \\( y = 5x \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal and rearrange', workingLatex: '2x^2 - 3 = 5x \\implies 2x^2 - 5x - 3 = 0', explanation: 'Substituting gives a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(2x + 1)(x - 3) = 0 \\implies x = -\\frac{1}{2} \\text{ or } x = 3', explanation: 'Splitting the middle term: \\( 2x^2 + x - 6x - 3 = 0 \\) gives these factors.' },
            { stepNumber: 3, description: 'Find the corresponding \\( y \\) values using \\( y = 5x \\)', workingLatex: 'x = -\\frac{1}{2}: y = -\\frac{5}{2}; \\quad x = 3: y = 15', explanation: 'Substituting each \\( x \\) into \\( y = 5x \\) gives the full coordinate pairs.' }
        ], finalAnswer: '\\( \\left(-\\frac{1}{2},\\, -\\frac{5}{2}\\right) \\) and \\( (3,\\, 15) \\)' }
    },
    {
        id: 'ise2-054', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 54', difficulty: 'Foundation',
        questionText: 'Find the value of \\( k \\) such that \\( y = kx + 3 \\) is tangent to \\( y = x^2 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal', workingLatex: 'x^2 = kx + 3 \\implies x^2 - kx - 3 = 0', explanation: 'Substituting gives a quadratic in \\( x \\) whose coefficients depend on \\( k \\).' },
            { stepNumber: 2, description: 'For tangency the discriminant must equal zero', workingLatex: 'b^2 - 4ac = (-k)^2 - 4(1)(-3) = k^2 + 12', explanation: 'Using \\( a = 1 \\), \\( b = -k \\), \\( c = -3 \\) in the discriminant formula.' },
            { stepNumber: 3, description: 'Set the discriminant equal to zero and solve', workingLatex: 'k^2 + 12 = 0', explanation: 'Since \\( k^2 \\geq 0 \\) for all real \\( k \\), we have \\( k^2 + 12 > 0 \\) always. There is no real value of \\( k \\).' },
            { stepNumber: 4, description: 'Explain why no tangent exists', workingLatex: '\\text{Parabola vertex at } (0,0), \\text{ line crosses } y\\text{-axis at } 3', explanation: 'The line \\( y = kx + 3 \\) always passes above the vertex of \\( y = x^2 \\), so it crosses the curve twice for every gradient. No real \\( k \\) gives tangency.' }
        ], finalAnswer: 'No real value of \\( k \\) exists; the discriminant \\( k^2 + 12 > 0 \\) for all real \\( k \\)' }
    },
    {
        id: 'ise2-055', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 55', difficulty: 'Foundation',
        questionText: 'Solve: \\( x + 2y = 8 \\) and \\( xy = 6 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange equation 1 to get \\( x = 8 - 2y \\) and substitute into equation 2', workingLatex: '(8-2y)y = 6 \\implies 8y - 2y^2 = 6 \\implies 2y^2 - 8y + 6 = 0 \\implies y^2 - 4y + 3 = 0', explanation: 'Expanding and rearranging gives a quadratic in \\( y \\), then dividing by 2 simplifies it.' },
            { stepNumber: 2, description: 'Factorise and solve for \\( y \\)', workingLatex: '(y-1)(y-3) = 0 \\implies y = 1 \\text{ or } y = 3', explanation: 'The quadratic factorises into two brackets.' },
            { stepNumber: 3, description: 'Find the corresponding \\( x \\) values using \\( x = 8 - 2y \\)', workingLatex: 'y = 1: x = 6; \\quad y = 3: x = 2', explanation: 'Substituting each \\( y \\) value back gives the two solution pairs.' }
        ], finalAnswer: '\\( (6,\\, 1) \\) and \\( (2,\\, 3) \\)' }
    },
    {
        id: 'ise2-056', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 56', difficulty: 'Foundation',
        questionText: 'Solve: \\( 7x + 2y = 20 \\) and \\( 3x + 5y = 21 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply both equations to match the \\( y \\) coefficients', workingLatex: '5(7x+2y) = 100; \\quad 2(3x+5y) = 42', explanation: 'Multiplying equation 1 by 5 gives \\( 35x+10y=100 \\) and multiplying equation 2 by 2 gives \\( 6x+10y=42 \\).' },
            { stepNumber: 2, description: 'Subtract the second from the first to eliminate \\( y \\)', workingLatex: '35x + 10y - 6x - 10y = 100 - 42 \\implies 29x = 58 \\implies x = 2', explanation: 'The \\( y \\) terms cancel, giving \\( x = 2 \\).' },
            { stepNumber: 3, description: 'Substitute \\( x = 2 \\) back into equation 1 to find \\( y \\)', workingLatex: '7(2) + 2y = 20 \\implies 2y = 6 \\implies y = 3', explanation: 'Replacing \\( x \\) and solving gives \\( y = 3 \\).' }
        ], finalAnswer: '\\( x = 2, \\quad y = 3 \\)' }
    },
    {
        id: 'ise2-057', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 57', difficulty: 'Foundation',
        questionText: 'A rectangle has perimeter 28 cm. Its length is 4 cm more than its width. Find the dimensions.',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equations using \\( l \\) for length and \\( w \\) for width', workingLatex: '2l + 2w = 28; \\quad l = w + 4', explanation: 'The perimeter gives the first equation and the relationship between length and width gives the second.' },
            { stepNumber: 2, description: 'Substitute \\( l = w + 4 \\) into the perimeter equation', workingLatex: '2(w+4) + 2w = 28 \\implies 2w + 8 + 2w = 28 \\implies 4w = 20 \\implies w = 5', explanation: 'Expanding and simplifying gives \\( w = 5 \\).' },
            { stepNumber: 3, description: 'Find \\( l \\)', workingLatex: 'l = 5 + 4 = 9', explanation: 'Substituting back gives \\( l = 9 \\). Check: \\( 2(9) + 2(5) = 28 \\).' }
        ], finalAnswer: '\\( w = 5 \\) cm, \\( l = 9 \\) cm' }
    },
    {
        id: 'ise2-058', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 58', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 - 2x \\) and \\( y + x = 4 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange the second equation to get \\( y = 4 - x \\) and substitute into the first', workingLatex: '4 - x = x^2 - 2x \\implies x^2 - 2x + x - 4 = 0 \\implies x^2 - x - 4 = 0', explanation: 'This gives a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'Apply the quadratic formula', workingLatex: 'x = \\frac{1 \\pm \\sqrt{1 + 16}}{2} = \\frac{1 \\pm \\sqrt{17}}{2}', explanation: 'Here \\( a = 1 \\), \\( b = -1 \\), \\( c = -4 \\), so the discriminant is \\( 1 + 16 = 17 \\).' },
            { stepNumber: 3, description: 'Find \\( y \\) for each solution', workingLatex: 'y = 4 - x = 4 - \\frac{1 \\pm \\sqrt{17}}{2} = \\frac{7 \\mp \\sqrt{17}}{2}', explanation: 'Substituting each \\( x \\) value back into \\( y = 4 - x \\).' }
        ], finalAnswer: '\\( \\left(\\frac{1 + \\sqrt{17}}{2},\\, \\frac{7 - \\sqrt{17}}{2}\\right) \\) and \\( \\left(\\frac{1 - \\sqrt{17}}{2},\\, \\frac{7 + \\sqrt{17}}{2}\\right) \\)' }
    },
    {
        id: 'ise2-059', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 59', difficulty: 'Foundation',
        questionText: 'Solve: \\( \\frac{x}{3} + \\frac{y}{4} = 1 \\) and \\( \\frac{x}{2} - \\frac{y}{3} = 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Clear fractions', workingLatex: '4x + 3y = 12; \\quad 3x - 2y = 6', explanation: 'Multiply the first equation by 12 and the second by 6 to eliminate denominators.' },
            { stepNumber: 2, description: 'Eliminate \\( y \\) by combining the equations', workingLatex: '2(4x+3y) + 3(3x-2y) = 24 + 18 \\implies 17x = 42 \\implies x = \\frac{42}{17}', explanation: 'Multiplying the first by 2 and the second by 3 makes the \\( y \\)-coefficients cancel.' },
            { stepNumber: 3, description: 'Substitute back to find \\( y \\)', workingLatex: '4 \\cdot \\frac{42}{17} + 3y = 12 \\implies 3y = 12 - \\frac{168}{17} = \\frac{36}{17} \\implies y = \\frac{12}{17}', explanation: 'Substituting \\( x = \\frac{42}{17} \\) into the first cleared equation gives \\( y = \\frac{12}{17} \\).' }
        ], finalAnswer: '\\( x = \\frac{42}{17},\\, y = \\frac{12}{17} \\)' }
    },
    {
        id: 'ise2-060', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 60', difficulty: 'Foundation',
        questionText: 'Find the coordinates where \\( y = x^2 + 2x - 5 \\) meets \\( y = 2x + 3 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal', workingLatex: 'x^2 + 2x - 5 = 2x + 3', explanation: 'Since both expressions equal \\( y \\), we can equate them.' },
            { stepNumber: 2, description: 'Simplify to find \\( x \\)', workingLatex: 'x^2 = 8 \\implies x = \\pm 2\\sqrt{2}', explanation: 'The \\( 2x \\) terms cancel, leaving \\( x^2 = 8 \\).' },
            { stepNumber: 3, description: 'Find \\( y \\) for each \\( x \\) value using \\( y = 2x + 3 \\)', workingLatex: 'x = 2\\sqrt{2}:\\; y = 4\\sqrt{2} + 3; \\quad x = -2\\sqrt{2}:\\; y = 3 - 4\\sqrt{2}', explanation: 'Substituting each \\( x \\) value into the linear equation gives the corresponding \\( y \\).' }
        ], finalAnswer: '\\( (2\\sqrt{2},\\, 4\\sqrt{2}+3) \\) and \\( (-2\\sqrt{2},\\, 3-4\\sqrt{2}) \\)' }
    },
    {
        id: 'ise2-061', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 61', difficulty: 'Foundation',
        questionText: 'Solve: \\( 5x - 2y = 11 \\) and \\( 3x + 4y = 1 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Multiply the first equation by 2 to make the \\( y \\)-coefficients match', workingLatex: '10x - 4y = 22', explanation: 'This gives a \\( -4y \\) term that cancels with the \\( +4y \\) in the second equation.' },
            { stepNumber: 2, description: 'Add the equations to eliminate \\( y \\)', workingLatex: '10x - 4y + 3x + 4y = 22 + 1 \\implies 13x = 23 \\implies x = \\frac{23}{13}', explanation: 'The \\( y \\) terms cancel, giving \\( x = \\frac{23}{13} \\).' },
            { stepNumber: 3, description: 'Substitute back to find \\( y \\)', workingLatex: '3 \\cdot \\frac{23}{13} + 4y = 1 \\implies 4y = 1 - \\frac{69}{13} = -\\frac{56}{13} \\implies y = -\\frac{14}{13}', explanation: 'Substituting into the second equation and solving for \\( y \\).' }
        ], finalAnswer: '\\( x = \\frac{23}{13},\\, y = -\\frac{14}{13} \\)' }
    },
    {
        id: 'ise2-062', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 62', difficulty: 'Foundation',
        questionText: 'The line \\( y = mx + 4 \\) is tangent to \\( y = x^2 + 2 \\). Find \\( m \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the expressions equal and rearrange', workingLatex: 'x^2 + 2 = mx + 4 \\implies x^2 - mx - 2 = 0', explanation: 'Substituting the line into the curve equation gives a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'For tangency, set the discriminant equal to zero', workingLatex: '\\Delta = (-m)^2 - 4(1)(-2) = m^2 + 8', explanation: 'The discriminant is \\( m^2 + 8 \\), which is always positive for all real \\( m \\).' },
            { stepNumber: 3, description: 'Conclude there is no tangent', workingLatex: 'm^2 + 8 > 0 \\text{ for all } m \\in \\mathbb{R}', explanation: 'Since the discriminant is always positive, the line always intersects the curve at two distinct points.' },
            { stepNumber: 4, description: 'Interpret the result', workingLatex: '\\text{No solution}', explanation: 'The minimum of \\( y = x^2 + 2 \\) is at \\( (0, 2) \\), below the \\( y \\)-intercept of the line at \\( (0, 4) \\), so the line always cuts the parabola twice.' }
        ], finalAnswer: 'No real value of \\( m \\) (the line always intersects the curve at two points)' }
    },
    {
        id: 'ise2-063', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 63', difficulty: 'Foundation',
        questionText: 'Solve: \\( x^2 + y^2 = 25 \\) and \\( y = x + 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Substitute \\( y = x + 1 \\) into the first equation', workingLatex: 'x^2 + (x+1)^2 = 25 \\implies 2x^2 + 2x - 24 = 0', explanation: 'Expanding and simplifying gives a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'Divide by 2 and factorise', workingLatex: 'x^2 + x - 12 = 0 \\implies (x+4)(x-3) = 0', explanation: 'The quadratic factors neatly.' },
            { stepNumber: 3, description: 'Find \\( y \\) for each \\( x \\) value', workingLatex: 'x = -4:\\; y = -3; \\quad x = 3:\\; y = 4', explanation: 'Substituting back into \\( y = x + 1 \\) gives the two solutions.' }
        ], finalAnswer: '\\( (-4, -3) \\) and \\( (3, 4) \\)' }
    },
    {
        id: 'ise2-064', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 64', difficulty: 'Foundation',
        questionText: 'Three coffees and two teas cost \\( \\pounds 9.50 \\). Two coffees and three teas cost \\( \\pounds 8.50 \\). Find the price of each.',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set up equations using \\( c \\) for coffee and \\( t \\) for tea', workingLatex: '3c + 2t = 9.50; \\quad 2c + 3t = 8.50', explanation: 'Each equation represents the total cost of the drinks.' },
            { stepNumber: 2, description: 'Eliminate \\( t \\) by multiplying and subtracting', workingLatex: '3(3c+2t) - 2(2c+3t) = 28.50 - 17.00 \\implies 5c = 11.50 \\implies c = 2.30', explanation: 'Multiplying the first equation by 3 and the second by 2, then subtracting eliminates \\( t \\).' },
            { stepNumber: 3, description: 'Substitute back to find \\( t \\)', workingLatex: '3(2.30) + 2t = 9.50 \\implies 2t = 2.60 \\implies t = 1.30', explanation: 'Substituting \\( c = 2.30 \\) into the first equation gives \\( t = 1.30 \\).' },
            { stepNumber: 4, description: 'Check in the second equation', workingLatex: '2(2.30) + 3(1.30) = 4.60 + 3.90 = 8.50 \\; \\checkmark', explanation: 'The values satisfy both equations.' }
        ], finalAnswer: 'Coffee \\( \\pounds 2.30 \\), tea \\( \\pounds 1.30 \\)' }
    },
    {
        id: 'ise2-065', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 65', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 - 3x + 2 \\) and \\( y = x - 1 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal', workingLatex: 'x^2 - 3x + 2 = x - 1 \\implies x^2 - 4x + 3 = 0', explanation: 'Rearranging brings all terms to one side.' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(x-1)(x-3) = 0 \\implies x = 1 \\text{ or } x = 3', explanation: 'The quadratic factors into two linear factors.' },
            { stepNumber: 3, description: 'Find \\( y \\) for each \\( x \\) value using \\( y = x - 1 \\)', workingLatex: 'x = 1:\\; y = 0; \\quad x = 3:\\; y = 2', explanation: 'Substituting each \\( x \\) value gives the corresponding \\( y \\).' }
        ], finalAnswer: '\\( (1, 0) \\) and \\( (3, 2) \\)' }
    },
    {
        id: 'ise2-066', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 66', difficulty: 'Foundation',
        questionText: 'Solve: \\( x - y = 2 \\) and \\( x^2 - y^2 = 12 \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Factorise the second equation using the difference of two squares', workingLatex: '(x-y)(x+y) = 12', explanation: 'Recognising the difference of two squares allows us to use the first equation.' },
            { stepNumber: 2, description: 'Substitute \\( x - y = 2 \\)', workingLatex: '2(x+y) = 12 \\implies x + y = 6', explanation: 'Since \\( x - y = 2 \\), we now have a pair of linear simultaneous equations.' },
            { stepNumber: 3, description: 'Add the two linear equations to solve', workingLatex: '(x - y) + (x + y) = 2 + 6 \\implies 2x = 8 \\implies x = 4,\\; y = 2', explanation: 'Adding eliminates \\( y \\), giving \\( x = 4 \\). Then \\( y = 4 - 2 = 2 \\).' }
        ], finalAnswer: '\\( x = 4,\\, y = 2 \\)' }
    },
    {
        id: 'ise2-067', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 67', difficulty: 'Foundation',
        questionText: 'Find where \\( y = 4 - x^2 \\) meets \\( y = 4 - 2x \\).',
        marks: 3, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the two expressions for \\( y \\) equal', workingLatex: '4 - x^2 = 4 - 2x \\implies x^2 - 2x = 0 \\implies x(x-2) = 0', explanation: 'The constant terms cancel, leaving a factorisable quadratic.' },
            { stepNumber: 2, description: 'Find \\( x \\) values', workingLatex: 'x = 0 \\text{ or } x = 2', explanation: 'Factorising gives two solutions for \\( x \\).' },
            { stepNumber: 3, description: 'Find \\( y \\) for each \\( x \\) value using \\( y = 4 - 2x \\)', workingLatex: 'x = 0:\\; y = 4; \\quad x = 2:\\; y = 0', explanation: 'Substituting into the linear equation gives the coordinates.' }
        ], finalAnswer: '\\( (0, 4) \\) and \\( (2, 0) \\)' }
    },
    {
        id: 'ise2-068', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 68', difficulty: 'Foundation',
        questionText: 'Solve: \\( 2x + 3y + z = 9 \\), \\( x + y + z = 4 \\), \\( 3x + 2y - z = 5 \\).',
        marks: 5, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Add eq2 and eq3 to eliminate \\( z \\)', workingLatex: '(x + y + z) + (3x + 2y - z) = 4 + 5 \\implies 4x + 3y = 9', explanation: 'The \\( z \\) terms cancel when we add these two equations.' },
            { stepNumber: 2, description: 'Add eq1 and eq3 to eliminate \\( z \\)', workingLatex: '(2x + 3y + z) + (3x + 2y - z) = 9 + 5 \\implies 5x + 5y = 14', explanation: 'This gives a second equation in \\( x \\) and \\( y \\) only.' },
            { stepNumber: 3, description: 'Solve the pair of equations in \\( x \\) and \\( y \\)', workingLatex: 'x + y = \\frac{14}{5}; \\quad 4x + 3\\left(\\frac{14}{5} - x\\right) = 9 \\implies x = \\frac{3}{5}', explanation: 'Substituting \\( y = \\frac{14}{5} - x \\) into \\( 4x + 3y = 9 \\) gives \\( x = 0.6 \\).' },
            { stepNumber: 4, description: 'Find \\( y \\) and \\( z \\)', workingLatex: 'y = \\frac{14}{5} - \\frac{3}{5} = \\frac{11}{5}; \\quad z = 4 - \\frac{3}{5} - \\frac{11}{5} = \\frac{6}{5}', explanation: 'Substituting back gives \\( y = 2.2 \\) and \\( z = 1.2 \\).' },
            { stepNumber: 5, description: 'Verify in eq1', workingLatex: '2(0.6) + 3(2.2) + 1.2 = 1.2 + 6.6 + 1.2 = 9 \\; \\checkmark', explanation: 'The solution satisfies all three original equations.' }
        ], finalAnswer: '\\( x = \\frac{3}{5},\\, y = \\frac{11}{5},\\, z = \\frac{6}{5} \\)' }
    },
    {
        id: 'ise2-069', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 69', difficulty: 'Foundation',
        questionText: 'Solve: \\( y = x^2 \\) and \\( x + y = 6 \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Rearrange the linear equation to get \\( y = 6 - x \\) and substitute', workingLatex: 'x^2 = 6 - x \\implies x^2 + x - 6 = 0', explanation: 'Substituting into \\( y = x^2 \\) gives a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'Factorise the quadratic', workingLatex: '(x+3)(x-2) = 0 \\implies x = -3 \\text{ or } x = 2', explanation: 'The quadratic factors neatly into two linear factors.' },
            { stepNumber: 3, description: 'Find \\( y \\) for each \\( x \\) value', workingLatex: 'x = 2:\\; y = 4; \\quad x = -3:\\; y = 9', explanation: 'Using \\( y = x^2 \\) gives the \\( y \\)-coordinates.' }
        ], finalAnswer: '\\( (2, 4) \\) and \\( (-3, 9) \\)' }
    },
    {
        id: 'ise2-070', topicRef: 'ise2', topicTitle: 'Simultaneous Equations 70', difficulty: 'Foundation',
        questionText: 'The line \\( y = 2x + k \\) meets the curve \\( y = x^2 + 3 \\) at exactly one point. Find \\( k \\).',
        marks: 4, examStyle: false, yearCreated: 2026, tags: [],
        workedSolution: { steps: [
            { stepNumber: 1, description: 'Set the expressions equal and rearrange', workingLatex: 'x^2 + 3 = 2x + k \\implies x^2 - 2x + (3-k) = 0', explanation: 'Substituting the line into the curve equation gives a quadratic in \\( x \\).' },
            { stepNumber: 2, description: 'For exactly one intersection, set the discriminant equal to zero', workingLatex: '\\Delta = (-2)^2 - 4(1)(3-k) = 4 - 12 + 4k = 4k - 8', explanation: 'Using \\( b^2 - 4ac \\) with \\( a = 1 \\), \\( b = -2 \\), \\( c = 3 - k \\).' },
            { stepNumber: 3, description: 'Solve \\( \\Delta = 0 \\)', workingLatex: '4k - 8 = 0 \\implies k = 2', explanation: 'Setting the discriminant to zero and solving gives \\( k = 2 \\).' },
            { stepNumber: 4, description: 'Verify the point of tangency', workingLatex: 'x^2 - 2x + 1 = 0 \\implies (x-1)^2 = 0 \\implies x = 1,\\; y = 4', explanation: 'With \\( k = 2 \\), the quadratic has a repeated root at \\( x = 1 \\), confirming tangency at \\( (1, 4) \\).' }
        ], finalAnswer: '\\( k = 2 \\)' }
    },
];
