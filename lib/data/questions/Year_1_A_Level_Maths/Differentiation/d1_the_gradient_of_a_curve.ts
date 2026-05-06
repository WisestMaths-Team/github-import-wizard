import { Question } from "@/lib/types";

function sample(f: (x: number) => number, xMin: number, xMax: number, n = 60): Array<[number, number]> {
  const pts: Array<[number, number]> = [];
  for (let i = 0; i < n; i++) {
    const x = xMin + (i / (n - 1)) * (xMax - xMin);
    pts.push([x, f(x)]);
  }
  return pts;
}

/**
 * Topic: Set Notation for Inequalities
 * Ref:   a9
 *
 * Add your questions to the array below.
 * ID convention: "a9-001", "a9-002", etc.
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

    // TYPE A (Q1–5): Gradient of a chord — numerical approach
    {
        id: 'd1-001',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 01',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) is given by \\( y = f(x) \\) where \\( f(x) = x^2 \\). Find the gradient of the chord joining the point where \\( x = 2 \\) to the point where:\n\ni) \\( x = 3 \\)\nii) \\( x = 2.5 \\)\niii) \\( x = 2.1 \\)\n\nWhat does this suggest about the gradient of the curve at \\( x = 2 \\)?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Recall: gradient of chord from \\( x = 2 \\) to \\( x = a \\) is \\( \\dfrac{f(a) - f(2)}{a - 2} \\).',
                    workingLatex: '\\frac{a^2 - 4}{a - 2}',
                    explanation: '\\( f(2) = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( x = 3 \\).',
                    workingLatex: '\\frac{9 - 4}{3 - 2} = \\frac{5}{1} = 5',
                    explanation: '\\( f(3) = 9 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( x = 2.5 \\).',
                    workingLatex: '\\frac{6.25 - 4}{2.5 - 2} = \\frac{2.25}{0.5} = 4.5',
                    explanation: '\\( f(2.5) = 6.25 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( x = 2.1 \\).',
                    workingLatex: '\\frac{4.41 - 4}{2.1 - 2} = \\frac{0.41}{0.1} = 4.1',
                    explanation: '\\( f(2.1) = 4.41 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'As the second point gets closer to \\( x = 2 \\), the chord gradient approaches 4.',
                    workingLatex: '\\text{Gradient at } x = 2 \\approx 4',
                    explanation: 'The gradient of the curve at \\( x = 2 \\) is 4. The diagram shows the three chords closing in on the tangent at \\( P(2,4) \\).',
                    diagram: {
                        xMin: -0.5, xMax: 3.8, yMin: -1.5, yMax: 11,
                        xTicks: [1, 2, 3], yTicks: [2, 4, 6, 8, 10],
                        curves: [{ points: sample((x) => x * x, -0.5, 3.5), color: "#1d4ed8", label: "y = x^2", labelAt: [0.1, 10.5] }],
                        lines: [
                            { from: [1, 0], to: [3.5, 10], color: "#888", dashed: true, label: "\\text{tangent at } P\\ (m=4)", labelAt: [0.1, 8] },
                            { from: [2, 4], to: [3, 9], color: "#dc2626" },
                            { from: [2, 4], to: [2.5, 6.25], color: "#ea580c" },
                            { from: [2, 4], to: [2.1, 4.41], color: "#16a34a" },
                        ],
                        points: [
                            { at: [2, 4], label: "P(2,\\,4)", labelAnchor: "se", r: 4.5 },
                            { at: [3, 9], label: "(3,\\,9)", labelAnchor: "nw", r: 3.5 },
                            { at: [2.5, 6.25], r: 3.5 },
                            { at: [2.1, 4.41], r: 3.5 },
                        ],
                    }
                }
            ],
            finalAnswer: '(i) 5 \\nii) 4.5 \\niii) 4.1 \\quad The chord gradients approach 4, suggesting the gradient of the curve at \\( x = 2 \\) is 4.'
        }
    },
    {
        id: 'd1-002',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 02',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) is given by \\( y = x^2 \\). Find the gradient of the chord joining the point \\( (3, 9) \\) to the point where:\n\ni) \\( x = 4 \\)\nii) \\( x = 3.5 \\)\niii) \\( x = 3.01 \\)\n\nHence state the gradient of the curve at \\( x = 3 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Chord gradient formula: \\( \\dfrac{f(a) - f(3)}{a - 3} = \\dfrac{a^2 - 9}{a - 3} \\).',
                    workingLatex: '\\frac{a^2 - 9}{a - 3}',
                    explanation: '\\( f(3) = 9 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( x = 4 \\).',
                    workingLatex: '\\frac{16 - 9}{4 - 3} = 7',
                    explanation: '\\( f(4) = 16 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( x = 3.5 \\).',
                    workingLatex: '\\frac{12.25 - 9}{3.5 - 3} = \\frac{3.25}{0.5} = 6.5',
                    explanation: '\\( f(3.5) = 12.25 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( x = 3.01 \\).',
                    workingLatex: '\\frac{9.0601 - 9}{3.01 - 3} = \\frac{0.0601}{0.01} = 6.01',
                    explanation: '\\( f(3.01) = 9.0601 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'The values approach 6.',
                    workingLatex: '\\text{Gradient at } x = 3 = 6',
                    explanation: 'As the second point approaches \\( x = 3 \\), the chord gradient approaches 6.'
                }
            ],
            finalAnswer: '(i) 7 \\nii) 6.5 \\niii) 6.01 \\quad Gradient at \\( x = 3 \\) is 6.'
        }
    },
    {
        id: 'd1-003',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 03',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) is given by \\( f(x) = x^3 \\). Find the gradient of the chord from \\( (2, 8) \\) to the point where:\n\ni) \\( x = 3 \\)\nii) \\( x = 2.5 \\)\niii) \\( x = 2.1 \\)\n\nWhat value does the gradient appear to be approaching?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Chord gradient: \\( \\dfrac{a^3 - 8}{a - 2} \\).',
                    workingLatex: '\\frac{a^3 - 8}{a - 2}',
                    explanation: '\\( f(2) = 8 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( x = 3 \\).',
                    workingLatex: '\\frac{27 - 8}{3 - 2} = 19',
                    explanation: '\\( 3^3 = 27 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( x = 2.5 \\).',
                    workingLatex: '\\frac{15.625 - 8}{2.5 - 2} = \\frac{7.625}{0.5} = 15.25',
                    explanation: '\\( 2.5^3 = 15.625 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( x = 2.1 \\).',
                    workingLatex: '\\frac{9.261 - 8}{2.1 - 2} = \\frac{1.261}{0.1} = 12.61',
                    explanation: '\\( 2.1^3 = 9.261 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'The values approach 12.',
                    workingLatex: '\\text{Gradient at } x = 2 \\approx 12',
                    explanation: 'This matches \\( 3x^2 \\big|_{x=2} = 12 \\).'
                }
            ],
            finalAnswer: '(i) 19 \\nii) 15.25 \\niii) 12.61 \\quad The gradient appears to approach 12.'
        }
    },
    {
        id: 'd1-004',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 04',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) is given by \\( f(x) = x^2 + 3x \\). Find the gradient of the chord joining the point where \\( x = 1 \\) to the point where:\n\ni) \\( x = 2 \\)\nii) \\( x = 1.5 \\)\niii) \\( x = 1.01 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Calculate \\( f(1) \\).',
                    workingLatex: 'f(1) = 1 + 3 = 4',
                    explanation: 'Starting point is \\( (1, 4) \\).'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( f(2) = 4 + 6 = 10 \\).',
                    workingLatex: '\\frac{10 - 4}{2 - 1} = 6',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( f(1.5) = 2.25 + 4.5 = 6.75 \\).',
                    workingLatex: '\\frac{6.75 - 4}{1.5 - 1} = \\frac{2.75}{0.5} = 5.5',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( f(1.01) = 1.0201 + 3.03 = 4.0501 \\).',
                    workingLatex: '\\frac{4.0501 - 4}{1.01 - 1} = \\frac{0.0501}{0.01} = 5.01',
                    explanation: 'Chord gradient approaching 5.'
                }
            ],
            finalAnswer: '(i) 6 \\nii) 5.5 \\niii) 5.01 \\quad The gradient at \\( x = 1 \\) appears to be 5.'
        }
    },
    {
        id: 'd1-005',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 05',
        difficulty: 'Foundation',
        questionText: 'The gradient of the curve \\( y = x^2 \\) at the point \\( (4, 16) \\) is stated to be 8.\\newline Verify this by finding the gradient of chords from \\( x = 4 \\) to \\( x = 5 \\), \\( x = 4.5 \\), and \\( x = 4.1 \\), and commenting on the pattern.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( x = 5 \\): \\( f(5) = 25 \\).',
                    workingLatex: '\\frac{25 - 16}{5 - 4} = 9',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 2,
                    description: '\\( x = 4.5 \\): \\( f(4.5) = 20.25 \\).',
                    workingLatex: '\\frac{20.25 - 16}{4.5 - 4} = \\frac{4.25}{0.5} = 8.5',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 3,
                    description: '\\( x = 4.1 \\): \\( f(4.1) = 16.81 \\).',
                    workingLatex: '\\frac{16.81 - 16}{4.1 - 4} = \\frac{0.81}{0.1} = 8.1',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 4,
                    description: 'Pattern: the chord gradients approach 8 as the second point approaches \\( x = 4 \\).',
                    workingLatex: '9 \\to 8.5 \\to 8.1 \\to 8',
                    explanation: 'This confirms the gradient at \\( x = 4 \\) is 8.'
                }
            ],
            finalAnswer: 'Chord gradients are 9, 8.5, 8.1 — these approach 8, confirming the gradient at \\( x = 4 \\) is 8.'
        }
    },
    // TYPE B (Q6–12): Differentiating from first principles — f'(x) = lim [f(x+h)-f(x)]/h
    {
        id: 'd1-006',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 06',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = x^2 \\) from first principles to show that \\( f\'(x) = 2x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = x^2 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}",
                    explanation: 'Replace \\( f(x+h) \\) with \\( (x+h)^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( (x+h)^2 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h}",
                    explanation: '\\( (x+h)^2 = x^2 + 2xh + h^2 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the numerator.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0} (2x + h)",
                    explanation: 'Cancel \\( h \\) from numerator and denominator (valid since \\( h \\neq 0 \\)).'
                },
                {
                    stepNumber: 5,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = 2x",
                    explanation: 'As \\( h \\to 0 \\), \\( 2x + h \\to 2x \\).'
                }
            ],
            finalAnswer: '\\( f\'(x) = 2x \\)'
        }
    },
    {
        id: 'd1-007',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 07',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = x^3 \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^3 - x^3}{h}",
                    explanation: 'Definition of the derivative with \\( f(x) = x^3 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand \\( (x+h)^3 \\).',
                    workingLatex: "(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3",
                    explanation: 'Using the binomial expansion or repeated multiplication.'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the numerator.',
                    workingLatex: "\\frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h} = \\frac{3x^2h + 3xh^2 + h^3}{h}",
                    explanation: 'The \\( x^3 \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Cancel \\( h \\).',
                    workingLatex: "= 3x^2 + 3xh + h^2",
                    explanation: 'Divide every term by \\( h \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = 3x^2",
                    explanation: 'The terms involving \\( h \\) vanish.'
                }
            ],
            finalAnswer: '\\( f\'(x) = 3x^2 \\)'
        }
    },
    {
        id: 'd1-008',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 08',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = 3x^2 \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative. Always start a first-principles question by writing this formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = 3x^2 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{3(x+h)^2 - 3x^2}{h}",
                    explanation: 'Replace \\( f(x+h) \\) with \\( 3(x+h)^2 \\) and \\( f(x) \\) with \\( 3x^2 \\). A common mistake is forgetting to apply the coefficient 3 to the \\( (x+h)^2 \\) term.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( 3(x+h)^2 \\).',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{3x^2 + 6xh + 3h^2 - 3x^2}{h}",
                    explanation: 'Use \\( (x+h)^2 = x^2 + 2xh + h^2 \\), then multiply each term by 3. Be careful to distribute the 3 to every term inside the bracket.'
                },
                {
                    stepNumber: 4,
                    description: 'Simplify the numerator.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{6xh + 3h^2}{h}",
                    explanation: 'The \\( 3x^2 \\) and \\( -3x^2 \\) terms cancel. Only terms containing \\( h \\) remain.'
                },
                {
                    stepNumber: 5,
                    description: 'Cancel the common factor of \\( h \\).',
                    workingLatex: "= \\lim_{h \\to 0} (6x + 3h)",
                    explanation: 'Divide every term in the numerator by \\( h \\). This is valid because \\( h \\neq 0 \\) in the limit process.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = 6x",
                    explanation: 'As \\( h \\to 0 \\), the \\( 3h \\) term vanishes, leaving \\( 6x \\).'
                }
            ],
            finalAnswer: '\\( f\'(x) = 6x \\)'
        }
    },
    {
        id: 'd1-009',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 09',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = 2x^2 + 5 \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative. Always begin by stating this formula clearly.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = 2(x+h)^2 + 5",
                    explanation: 'Replace every \\( x \\) in \\( f(x) = 2x^2 + 5 \\) with \\( (x+h) \\). The constant term 5 is unchanged.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( 2(x+h)^2 \\).',
                    workingLatex: "f(x+h) = 2x^2 + 4xh + 2h^2 + 5",
                    explanation: 'Use \\( (x+h)^2 = x^2 + 2xh + h^2 \\), then multiply each term by 2. A common mistake is forgetting to multiply \\( h^2 \\) by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Form \\( f(x+h) - f(x) \\).',
                    workingLatex: "f(x+h) - f(x) = (2x^2 + 4xh + 2h^2 + 5) - (2x^2 + 5) = 4xh + 2h^2",
                    explanation: 'The \\( 2x^2 \\) terms cancel and the constant \\( +5 \\) terms cancel. This shows that constant terms always disappear when differentiating.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide by \\( h \\).',
                    workingLatex: "\\frac{f(x+h) - f(x)}{h} = \\frac{4xh + 2h^2}{h} = 4x + 2h",
                    explanation: 'Divide every term in the numerator by \\( h \\). This step is valid because \\( h \\neq 0 \\).'
                },
                {
                    stepNumber: 6,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} (4x + 2h) = 4x",
                    explanation: 'As \\( h \\to 0 \\), the \\( 2h \\) term vanishes. The derivative is \\( 4x \\).'
                }
            ],
            finalAnswer: '\\( f\'(x) = 4x \\)'
        }
    },
    {
        id: 'd1-010',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 10',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 5x + 3 \\) from first principles.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative. It applies to any function, including linear ones.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = 5(x+h) + 3 = 5x + 5h + 3",
                    explanation: 'Replace \\( x \\) with \\( (x+h) \\) in \\( f(x) = 5x + 3 \\), then expand the bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Form \\( f(x+h) - f(x) \\).',
                    workingLatex: "f(x+h) - f(x) = (5x + 5h + 3) - (5x + 3) = 5h",
                    explanation: 'The \\( 5x \\) terms cancel and the \\( +3 \\) terms cancel, leaving only \\( 5h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\).',
                    workingLatex: "\\frac{f(x+h) - f(x)}{h} = \\frac{5h}{h} = 5",
                    explanation: 'The \\( h \\) cancels, leaving the constant 5. There are no remaining terms involving \\( h \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} 5 = 5",
                    explanation: 'The result is already constant, so the limit is simply 5. The gradient of a straight line is constant everywhere, as expected.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 5 \\)'
        }
    },
    {
        id: 'd1-011',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 11',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = x^2 - x \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative. Always start by stating this formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = (x+h)^2 - (x+h)",
                    explanation: 'Replace every \\( x \\) in \\( f(x) = x^2 - x \\) with \\( (x+h) \\). Make sure to substitute into both terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = x^2 + 2xh + h^2 - x - h",
                    explanation: 'Expand \\( (x+h)^2 = x^2 + 2xh + h^2 \\) and \\( -(x+h) = -x - h \\). A common mistake is forgetting the \\( -h \\) from the linear term.'
                },
                {
                    stepNumber: 4,
                    description: 'Form \\( f(x+h) - f(x) \\).',
                    workingLatex: "f(x+h) - f(x) = (x^2 + 2xh + h^2 - x - h) - (x^2 - x) = 2xh + h^2 - h",
                    explanation: 'The \\( x^2 \\) terms cancel and the \\( -x \\) terms cancel. Only terms containing \\( h \\) survive.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide by \\( h \\).',
                    workingLatex: "\\frac{f(x+h) - f(x)}{h} = \\frac{2xh + h^2 - h}{h} = 2x + h - 1",
                    explanation: 'Divide each term by \\( h \\). Note that \\( -h \\div h = -1 \\), which gives the constant term in the derivative.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} (2x + h - 1) = 2x - 1",
                    explanation: 'As \\( h \\to 0 \\), the \\( h \\) term vanishes, leaving \\( 2x - 1 \\).'
                }
            ],
            finalAnswer: "\\( f'(x) = 2x - 1 \\)"
        }
    },
    {
        id: 'd1-012',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 12',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = 2x^2 + 3x \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative. Always begin by stating this formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = 2(x+h)^2 + 3(x+h)",
                    explanation: 'Replace every \\( x \\) in \\( f(x) = 2x^2 + 3x \\) with \\( (x+h) \\). Keep the coefficients 2 and 3 in place.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = 2x^2 + 4xh + 2h^2 + 3x + 3h",
                    explanation: 'Expand \\( 2(x+h)^2 = 2x^2 + 4xh + 2h^2 \\) and \\( 3(x+h) = 3x + 3h \\) separately. A common mistake is forgetting to multiply each expanded term by its coefficient.'
                },
                {
                    stepNumber: 4,
                    description: 'Form \\( f(x+h) - f(x) \\).',
                    workingLatex: "f(x+h) - f(x) = (2x^2 + 4xh + 2h^2 + 3x + 3h) - (2x^2 + 3x) = 4xh + 2h^2 + 3h",
                    explanation: 'The \\( 2x^2 \\) terms cancel and the \\( 3x \\) terms cancel. Only terms containing \\( h \\) remain.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide by \\( h \\).',
                    workingLatex: "\\frac{f(x+h) - f(x)}{h} = \\frac{4xh + 2h^2 + 3h}{h} = 4x + 2h + 3",
                    explanation: 'Divide each term in the numerator by \\( h \\). Note that \\( 3h \\div h = 3 \\), giving the constant in the derivative.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} (4x + 2h + 3) = 4x + 3",
                    explanation: 'As \\( h \\to 0 \\), the \\( 2h \\) term vanishes, leaving \\( 4x + 3 \\).'
                }
            ],
            finalAnswer: "\\( f'(x) = 4x + 3 \\)"
        }
    },
    {
        id: 'd1-013',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 13',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( y = 3x^2 - 4x + 1 \\) from first principles.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = 3(x+h)^2 - 4(x+h) + 1 = 3x^2 + 6xh + 3h^2 - 4x - 4h + 1",
                    explanation: 'Expand each term carefully.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( f(x) = 3x^2 - 4x + 1 \\).',
                    workingLatex: "f(x+h) - f(x) = 6xh + 3h^2 - 4h",
                    explanation: 'The \\( 3x^2 \\), \\( -4x \\) and \\( +1 \\) terms all cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: "\\frac{6xh + 3h^2 - 4h}{h} = 6x + 3h - 4",
                    explanation: 'Divide every term by \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "\\lim_{h \\to 0}(6x + 3h - 4) = 6x - 4",
                    explanation: 'The \\( 3h \\) term vanishes.'
                }
            ],
            finalAnswer: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x - 4 \\)"
        }
    },
    {
        id: 'd1-014',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 14',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = x^2 + 4x - 7 \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative. Always start by writing this formula clearly.'
                },
                {
                    stepNumber: 2,
                    description: 'Write \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = (x+h)^2 + 4(x+h) - 7",
                    explanation: 'Replace every \\( x \\) in \\( f(x) = x^2 + 4x - 7 \\) with \\( (x+h) \\). The constant \\( -7 \\) stays the same.'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( f(x+h) \\).',
                    workingLatex: "f(x+h) = x^2 + 2xh + h^2 + 4x + 4h - 7",
                    explanation: 'Expand \\( (x+h)^2 = x^2 + 2xh + h^2 \\) and \\( 4(x+h) = 4x + 4h \\). Be careful not to miss the \\( 4h \\) from the linear term.'
                },
                {
                    stepNumber: 4,
                    description: 'Form \\( f(x+h) - f(x) \\).',
                    workingLatex: "f(x+h) - f(x) = (x^2 + 2xh + h^2 + 4x + 4h - 7) - (x^2 + 4x - 7) = 2xh + h^2 + 4h",
                    explanation: 'The \\( x^2 \\) terms, \\( 4x \\) terms and \\( -7 \\) terms all cancel. Only terms containing \\( h \\) remain.'
                },
                {
                    stepNumber: 5,
                    description: 'Divide by \\( h \\).',
                    workingLatex: "\\frac{f(x+h) - f(x)}{h} = \\frac{2xh + h^2 + 4h}{h} = 2x + h + 4",
                    explanation: 'Divide each term in the numerator by \\( h \\). Note that \\( 4h \\div h = 4 \\), giving the constant in the derivative.'
                },
                {
                    stepNumber: 6,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} (2x + h + 4) = 2x + 4",
                    explanation: 'As \\( h \\to 0 \\), the \\( h \\) term vanishes, leaving \\( 2x + 4 \\).'
                }
            ],
            finalAnswer: "\\( f'(x) = 2x + 4 \\)"
        }
    },
    // TYPE C (Q15–19): Differentiating from first principles — evaluate gradient at a specific point
    {
        id: 'd1-015',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 15',
        difficulty: 'Foundation',
        questionText: 'By differentiating \\( f(x) = x^2 \\) from first principles, find the gradient of the curve at the point \\( (5, 25) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = x^2 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}",
                    explanation: 'Replace \\( f(x+h) \\) with \\( (x+h)^2 \\) and \\( f(x) \\) with \\( x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify the numerator.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h}",
                    explanation: 'Expanding \\( (x+h)^2 \\) gives \\( x^2 + 2xh + h^2 \\), and the \\( x^2 \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0} (2x + h) = 2x",
                    explanation: 'Factor \\( h \\) from the numerator, cancel with the denominator, then let \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( x = 5 \\).',
                    workingLatex: "f'(5) = 2 \\times 5 = 10",
                    explanation: 'Replace \\( x \\) with 5 in the derivative. The diagram shows the tangent with gradient 10 touching the curve at \\( (5, 25) \\).',
                    diagram: {
                        xMin: -0.5, xMax: 7, yMin: -8, yMax: 52,
                        xTicks: [1, 2, 3, 4, 5, 6], yTicks: [10, 20, 30, 40, 50],
                        curves: [{ points: sample((x) => x * x, -0.6, 6.8), color: "#1d4ed8", label: "y = x^2", labelAt: [0.3, 48] }],
                        lines: [
                            { from: [2, -5], to: [6.5, 40], color: "#dc2626", dashed: true, label: "\\text{tangent},\\ m = 10", labelAt: [0.3, 42] },
                        ],
                        points: [{ at: [5, 25], label: "(5,\\,25)", labelAnchor: "nw", r: 4.5 }],
                    }
                }
            ],
            finalAnswer: 'Gradient at \\( (5, 25) \\) is \\( 10 \\).'
        }
    },
    {
        id: 'd1-016',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 16',
        difficulty: 'Foundation',
        questionText: 'By differentiating \\( f(x) = x^3 \\) from first principles, find the gradient of the curve at \\( x = -2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = x^3 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^3 - x^3}{h}",
                    explanation: 'Replace \\( f(x+h) \\) with \\( (x+h)^3 \\) and \\( f(x) \\) with \\( x^3 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand \\( (x+h)^3 \\) in the numerator.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{x^3 + 3x^2h + 3xh^2 + h^3 - x^3}{h} = \\lim_{h \\to 0} \\frac{3x^2h + 3xh^2 + h^3}{h}",
                    explanation: 'Using the binomial expansion, \\( (x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3 \\). The \\( x^3 \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0}(3x^2 + 3xh + h^2) = 3x^2",
                    explanation: 'Factor \\( h \\) from every term in the numerator, cancel with the denominator, then let \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( x = -2 \\).',
                    workingLatex: "f'(-2) = 3(-2)^2 = 3 \\times 4 = 12",
                    explanation: 'The gradient at \\( x = -2 \\) is positive, meaning the curve is increasing at this point.'
                }
            ],
            finalAnswer: 'Gradient at \\( x = -2 \\) is \\( 12 \\).'
        }
    },
    {
        id: 'd1-017',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 17',
        difficulty: 'Foundation',
        questionText: 'By differentiating \\( f(x) = 2x^2 \\) from first principles, find the gradient of the tangent to the curve at the point \\( (-3, 18) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = 2x^2 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{2(x+h)^2 - 2x^2}{h}",
                    explanation: 'Replace \\( f(x+h) \\) with \\( 2(x+h)^2 \\) and \\( f(x) \\) with \\( 2x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify the numerator.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{2x^2 + 4xh + 2h^2 - 2x^2}{h} = \\lim_{h \\to 0} \\frac{4xh + 2h^2}{h}",
                    explanation: 'Expanding \\( 2(x+h)^2 \\) gives \\( 2x^2 + 4xh + 2h^2 \\). The \\( 2x^2 \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0} (4x + 2h) = 4x",
                    explanation: 'Factor \\( h \\) from the numerator, cancel with the denominator, then let \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Evaluate at \\( x = -3 \\).',
                    workingLatex: "f'(-3) = 4(-3) = -12",
                    explanation: 'The negative gradient means the curve is decreasing at this point.'
                }
            ],
            finalAnswer: 'Gradient of the tangent at \\( (-3, 18) \\) is \\( -12 \\).'
        }
    },
    {
        id: 'd1-018',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 18',
        difficulty: 'Foundation',
        questionText: 'By differentiating from first principles, find the gradient of \\( y = x^2 - 3x \\) at the point where \\( x = 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( f(x+h) - f(x) \\).',
                    workingLatex: "[(x+h)^2 - 3(x+h)] - [x^2 - 3x] = x^2 + 2xh + h^2 - 3x - 3h - x^2 + 3x",
                    explanation: 'Expand \\( (x+h)^2 \\) and \\( -3(x+h) \\), then subtract \\( f(x) = x^2 - 3x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the numerator.',
                    workingLatex: "= 2xh + h^2 - 3h",
                    explanation: 'The \\( x^2 \\) and \\( -3x \\) terms cancel, leaving only terms containing \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "\\frac{2xh + h^2 - 3h}{h} = 2x + h - 3 \\xrightarrow{h \\to 0} 2x - 3",
                    explanation: 'Factor \\( h \\) from every term, cancel, then let \\( h \\to 0 \\). So \\( f\'(x) = 2x - 3 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( x = 4 \\).',
                    workingLatex: "f'(4) = 2(4) - 3 = 8 - 3 = 5",
                    explanation: 'Replace \\( x \\) with 4 in the derivative to find the gradient at that point.'
                }
            ],
            finalAnswer: 'Gradient at \\( x = 4 \\) is \\( 5 \\).'
        }
    },
    {
        id: 'd1-019',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 19',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = 4x^2 - 1 \\). By differentiating from first principles, find the gradient at the point \\( (2, 15) \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'This is the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( f(x+h) - f(x) \\).',
                    workingLatex: "[4(x+h)^2 - 1] - [4x^2 - 1] = 4(x^2 + 2xh + h^2) - 1 - 4x^2 + 1",
                    explanation: 'Expand \\( 4(x+h)^2 \\) and subtract \\( f(x) = 4x^2 - 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify the numerator.',
                    workingLatex: "= 4x^2 + 8xh + 4h^2 - 4x^2 = 8xh + 4h^2",
                    explanation: 'The \\( 4x^2 \\) terms and the constant \\( -1 \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "\\frac{8xh + 4h^2}{h} = 8x + 4h \\xrightarrow{h \\to 0} 8x",
                    explanation: 'Factor \\( h \\) from the numerator, cancel, then let \\( h \\to 0 \\). So \\( f\'(x) = 8x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Substitute \\( x = 2 \\).',
                    workingLatex: "f'(2) = 8 \\times 2 = 16",
                    explanation: 'Replace \\( x \\) with 2 in the derivative. The gradient at \\( (2, 15) \\) is 16.'
                }
            ],
            finalAnswer: 'Gradient at \\( (2, 15) \\) is \\( 16 \\).'
        }
    },
    // TYPE D (Q20–24): Finding the gradient function then applying it
    {
        id: 'd1-020',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 20',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 + 6 \\).\\n\na) Differentiate from first principles to find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\\nb) Find the coordinates of the point on \\( C \\) where the gradient is 8.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the first principles formula.',
                    workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Start with the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute and simplify.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{(x+h)^2 + 6 - x^2 - 6}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h}",
                    explanation: 'The constant 6 cancels. Expanding \\( (x+h)^2 \\) gives \\( x^2 + 2xh + h^2 \\), and the \\( x^2 \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0} (2x + h) = 2x",
                    explanation: 'Factor \\( h \\) from the numerator, cancel, then let \\( h \\to 0 \\). So \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Set \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 8 \\).',
                    workingLatex: "2x = 8 \\Rightarrow x = 4",
                    explanation: 'Divide both sides by 2 to solve for \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: "y = 4^2 + 6 = 16 + 6 = 22",
                    explanation: 'Substitute \\( x = 4 \\) into the original equation \\( y = x^2 + 6 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x \\) \\quad (b) \\( (4, 22) \\)'
        }
    },
    {
        id: 'd1-021',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 21',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = 3x^2 \\).\\n\na) Find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\) by differentiating from first principles.\\nb) Find the coordinates of the point on \\( C \\) where the gradient is \\( -18 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the first principles formula.',
                    workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Start with the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute and simplify.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{3(x+h)^2 - 3x^2}{h} = \\lim_{h \\to 0} \\frac{3x^2 + 6xh + 3h^2 - 3x^2}{h} = \\lim_{h \\to 0} \\frac{6xh + 3h^2}{h}",
                    explanation: 'Expand \\( 3(x+h)^2 = 3x^2 + 6xh + 3h^2 \\). The \\( 3x^2 \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0} (6x + 3h) = 6x",
                    explanation: 'Factor \\( h \\) from the numerator, cancel, then let \\( h \\to 0 \\). So \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Set \\( 6x = -18 \\).',
                    workingLatex: "6x = -18 \\Rightarrow x = -3",
                    explanation: 'Divide both sides by 6 to solve for \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find \\( y \\).',
                    workingLatex: "y = 3(-3)^2 = 3 \\times 9 = 27",
                    explanation: 'Substitute \\( x = -3 \\) into the original equation \\( y = 3x^2 \\).'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 6x \\) \\quad (b) \\( (-3, 27) \\)'
        }
    },
    {
        id: 'd1-022',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 22',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 - 5x \\).\\n\na) Differentiate from first principles to find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\\nb) Find the \\( x \\)-value where the tangent to \\( C \\) is parallel to the \\( x \\)-axis.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the first principles formula.',
                    workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Start with the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( f(x+h) - f(x) \\).',
                    workingLatex: "[(x+h)^2 - 5(x+h)] - [x^2 - 5x] = x^2 + 2xh + h^2 - 5x - 5h - x^2 + 5x = 2xh + h^2 - 5h",
                    explanation: 'Expand all brackets and collect like terms. The \\( x^2 \\) and \\( -5x \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "\\frac{2xh + h^2 - 5h}{h} = 2x + h - 5 \\xrightarrow{h \\to 0} 2x - 5",
                    explanation: 'Factor \\( h \\) from the numerator, cancel, then let \\( h \\to 0 \\). So \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 5 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(b) Set the gradient equal to zero.',
                    workingLatex: "2x - 5 = 0",
                    explanation: 'A tangent parallel to the \\( x \\)-axis has gradient 0.'
                },
                {
                    stepNumber: 5,
                    description: 'Solve for \\( x \\).',
                    workingLatex: "2x = 5 \\Rightarrow x = 2.5",
                    explanation: 'Add 5 to both sides and divide by 2.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x - 5 \\) \\quad (b) \\( x = 2.5 \\)'
        }
    },
    {
        id: 'd1-023',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 23',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 \\).\\n\na) Differentiate from first principles to show \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 \\).\\nb) Find the two values of \\( x \\) where the gradient of \\( C \\) is 27.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the first principles formula.',
                    workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\lim_{h \\to 0} \\frac{(x+h)^3 - x^3}{h}",
                    explanation: 'Substitute \\( f(x) = x^3 \\) into the first principles definition.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand, simplify, and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{3x^2h + 3xh^2 + h^3}{h} = \\lim_{h \\to 0}(3x^2 + 3xh + h^2) = 3x^2",
                    explanation: 'Using the binomial expansion for \\( (x+h)^3 \\), the \\( x^3 \\) terms cancel. Divide by \\( h \\) and let \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Set \\( 3x^2 = 27 \\).',
                    workingLatex: "3x^2 = 27 \\Rightarrow x^2 = 9",
                    explanation: 'Divide both sides by 3.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the square root.',
                    workingLatex: "x = \\pm 3",
                    explanation: 'Remember to include both the positive and negative square roots, giving two solutions.'
                }
            ],
            finalAnswer: '(b) \\( x = 3 \\) or \\( x = -3 \\)'
        }
    },
    {
        id: 'd1-024',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 24',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 + 3 \\). A tangent to \\( C \\) has gradient 10.\\n\na) Differentiate \\( y = x^2 + 3 \\) from first principles.\\nb) Find the equation of the tangent.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the first principles formula.',
                    workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Start with the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute and simplify.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{(x+h)^2 + 3 - x^2 - 3}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} = \\lim_{h \\to 0}(2x + h) = 2x",
                    explanation: 'The constant 3 cancels. Expand \\( (x+h)^2 \\), cancel \\( x^2 \\) terms, divide by \\( h \\), and let \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Find the \\( x \\)-coordinate of tangency.',
                    workingLatex: "2x = 10 \\Rightarrow x = 5",
                    explanation: 'Set the derivative equal to 10 and solve for \\( x \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Find the \\( y \\)-coordinate.',
                    workingLatex: "y = 5^2 + 3 = 25 + 3 = 28",
                    explanation: 'Substitute \\( x = 5 \\) into the original equation. The point of tangency is \\( (5, 28) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Use \\( y - y_1 = m(x - x_1) \\).',
                    workingLatex: "y - 28 = 10(x - 5) \\Rightarrow y = 10x - 50 + 28 \\Rightarrow y = 10x - 22",
                    explanation: 'Substitute \\( m = 10 \\) and the point \\( (5, 28) \\) into the straight line equation.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 2x \\) \\quad (b) \\( y = 10x - 22 \\)'
        }
    },
    // TYPE E (Q25–28): Interpreting the derivative as a rate of change
    {
        id: 'd1-025',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 25',
        difficulty: 'Foundation',
        questionText: 'Explain what \\( f\'(x) \\) represents geometrically for the curve \\( y = f(x) \\), and describe what it means when \\( f\'(x) > 0 \\), \\( f\'(x) = 0 \\), and \\( f\'(x) < 0 \\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '\\( f\'(x) \\) is the gradient of the curve at the point \\( (x, f(x)) \\).',
                    workingLatex: "f'(x) = \\text{gradient of tangent at } x",
                    explanation: 'It measures the instantaneous rate of change of \\( y \\) with respect to \\( x \\).'
                },
                {
                    stepNumber: 2,
                    description: '\\( f\'(x) > 0 \\): the curve is increasing (sloping upward) at that point.',
                    workingLatex: "f'(x) > 0 \\Rightarrow \\text{curve is increasing}",
                    explanation: 'Moving left to right, \\( y \\) is getting larger.'
                },
                {
                    stepNumber: 3,
                    description: '\\( f\'(x) = 0 \\): the tangent is horizontal — the curve has a stationary point.',
                    workingLatex: "f'(x) = 0 \\Rightarrow \\text{stationary point (turning point or point of inflection)}",
                    explanation: 'The curve is momentarily neither increasing nor decreasing.'
                },
                {
                    stepNumber: 4,
                    description: '\\( f\'(x) < 0 \\): the curve is decreasing at that point.',
                    workingLatex: "f'(x) < 0 \\Rightarrow \\text{curve is decreasing}",
                    explanation: 'Moving left to right, \\( y \\) is getting smaller.'
                }
            ],
            finalAnswer: '\\( f\'(x) \\) is the gradient of the tangent. Positive: increasing; zero: stationary; negative: decreasing.'
        }
    },
    {
        id: 'd1-026',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 26',
        difficulty: 'Foundation',
        questionText: 'The function \\( f(x) = x^2 - 4x + 1 \\) has derivative \\( f\'(x) = 2x - 4 \\).\\n\na) Find the value of \\( x \\) where the gradient is zero.\\nb) Determine whether the function is increasing or decreasing at \\( x = 0 \\) and \\( x = 4 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Set \\( f\'(x) = 0 \\).',
                    workingLatex: "2x - 4 = 0",
                    explanation: 'The gradient is zero at a stationary point, so set the derivative equal to zero.'
                },
                {
                    stepNumber: 2,
                    description: 'Solve for \\( x \\).',
                    workingLatex: "2x = 4 \\Rightarrow x = 2",
                    explanation: 'Add 4 to both sides and divide by 2. The curve has a stationary point at \\( x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(b) Evaluate \\( f\'(x) \\) at \\( x = 0 \\).',
                    workingLatex: "f'(0) = 2(0) - 4 = -4 < 0",
                    explanation: 'Since \\( f\'(0) < 0 \\), the function is decreasing at \\( x = 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Evaluate \\( f\'(x) \\) at \\( x = 4 \\).',
                    workingLatex: "f'(4) = 2(4) - 4 = 8 - 4 = 4 > 0",
                    explanation: 'Since \\( f\'(4) > 0 \\), the function is increasing at \\( x = 4 \\).'
                }
            ],
            finalAnswer: '(a) \\( x = 2 \\) \\quad (b) Decreasing at \\( x = 0 \\); increasing at \\( x = 4 \\).'
        }
    },
    {
        id: 'd1-027',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 27',
        difficulty: 'Foundation',
        questionText: 'Explain the difference between the gradient of a chord and the gradient of a tangent to a curve at a point, and how differentiation from first principles connects the two.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Define the gradient of a chord.',
                    workingLatex: "\\text{Gradient of chord} = \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'A chord joins two distinct points on a curve. Its gradient gives the average rate of change over the interval of width \\( h \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Define the gradient of a tangent.',
                    workingLatex: "\\text{Gradient of tangent} = f'(x)",
                    explanation: 'A tangent touches the curve at exactly one point. Its gradient gives the instantaneous rate of change at that point.'
                },
                {
                    stepNumber: 3,
                    description: 'Write the first principles limit.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}",
                    explanation: 'First principles defines the tangent gradient as the limit of the chord gradient as \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 4,
                    description: 'State the connection between chord and tangent.',
                    workingLatex: "\\text{Chord gradient} \\xrightarrow{h \\to 0} \\text{Tangent gradient}",
                    explanation: 'As the two points on the chord are brought infinitely close together, the chord becomes the tangent. Differentiation from first principles formalises this limiting process.'
                }
            ],
            finalAnswer: 'A chord connects two points (average rate of change); a tangent touches at one point (instantaneous rate). First principles takes the limit as the chord length shrinks to zero, turning the chord gradient into the tangent gradient.'
        }
    },
    {
        id: 'd1-028',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 28',
        difficulty: 'Foundation',
        questionText: 'The area \\( A \\) cm² of a square with side \\( x \\) cm is given by \\( A = x^2 \\).\\newline By differentiating from first principles, find \\( \\dfrac{\\mathrm{d}A}{\\mathrm{d}x} \\) and interpret its meaning.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "\\frac{\\mathrm{d}A}{\\mathrm{d}x} = \\lim_{h \\to 0} \\frac{A(x+h) - A(x)}{h}",
                    explanation: 'Start with the definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( A = x^2 \\).',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h}",
                    explanation: 'Replace \\( A(x+h) \\) with \\( (x+h)^2 \\) and \\( A(x) \\) with \\( x^2 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Expand and simplify the numerator.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\lim_{h \\to 0} \\frac{2xh + h^2}{h}",
                    explanation: 'The \\( x^2 \\) terms cancel, leaving only terms containing \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "= \\lim_{h \\to 0} (2x + h) = 2x",
                    explanation: 'Factor \\( h \\) from the numerator, cancel with the denominator, then let \\( h \\to 0 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Interpret the result.',
                    workingLatex: "\\frac{\\mathrm{d}A}{\\mathrm{d}x} = 2x",
                    explanation: '\\( \\dfrac{\\mathrm{d}A}{\\mathrm{d}x} = 2x \\) represents the rate at which the area increases as the side length increases. At any side length \\( x \\), the area increases by approximately \\( 2x \\) cm² for each additional cm of side length.'
                }
            ],
            finalAnswer: '\\( \\dfrac{\\mathrm{d}A}{\\mathrm{d}x} = 2x \\). It represents the rate of increase of area per unit increase in side length — numerically equal to the perimeter of two sides.'
        }
    },
    // TYPE F (Q29–32): Differentiating constants and verifying results
    {
        id: 'd1-029',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 29',
        difficulty: 'Foundation',
        questionText: 'Show, by differentiating from first principles, that the derivative of any constant \\( f(x) = c \\) is zero.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles formula.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Start with the standard definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = c \\) into the formula.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{c - c}{h} = \\lim_{h \\to 0} \\frac{0}{h}",
                    explanation: 'Since \\( f(x) = c \\) for all \\( x \\), we also have \\( f(x+h) = c \\). The numerator becomes \\( c - c = 0 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the limit.',
                    workingLatex: "= \\lim_{h \\to 0} 0 = 0",
                    explanation: 'Zero divided by any non-zero value is zero, so the limit equals 0. The derivative of any constant function is zero.'
                }
            ],
            finalAnswer: "\\( f'(x) = 0 \\) for any constant \\( f(x) = c \\). This makes sense — a horizontal line has zero gradient."
        }
    },
    {
        id: 'd1-030',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 30',
        difficulty: 'Foundation',
        questionText: 'Differentiate \\( f(x) = x \\) from first principles and comment on the result.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write the first principles definition.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Start with the standard definition of the derivative from first principles.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute \\( f(x) = x \\) and simplify.',
                    workingLatex: "= \\lim_{h \\to 0} \\frac{(x+h) - x}{h} = \\lim_{h \\to 0} \\frac{h}{h} = \\lim_{h \\to 0} 1",
                    explanation: 'The \\( x \\) terms cancel in the numerator, leaving \\( h/h = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate the limit and comment.',
                    workingLatex: "f'(x) = 1 \\text{ for all } x",
                    explanation: 'The limit is simply 1. This is expected since \\( y = x \\) is a straight line with gradient 1 everywhere.'
                }
            ],
            finalAnswer: "\\( f'(x) = 1 \\). The gradient of \\( y = x \\) is constant at 1 for all \\( x \\), which matches the slope of the line."
        }
    },
    // TYPE G (Q31–35): Exam-style multi-part
    {
        id: 'd1-031',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 31',
        difficulty: 'Foundation',
        questionText: 'a) Differentiate \\( f(x) = x^2 + 2x - 3 \\) from first principles.\\nb) Hence find the gradient of the curve at the point where \\( x = -1 \\).\\nc) Find the equation of the tangent to the curve at this point.',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find \\( f(x+h) - f(x) \\).',
                    workingLatex: "[(x+h)^2 + 2(x+h) - 3] - [x^2 + 2x - 3] = 2xh + h^2 + 2h",
                    explanation: 'Expand and cancel terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "2x + h + 2 \\xrightarrow{h \\to 0} 2x + 2",
                    explanation: "So \\( f'(x) = 2x + 2 \\)."
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( x = -1 \\).',
                    workingLatex: "f'(-1) = 2(-1) + 2 = 0",
                    explanation: 'The gradient at \\( x = -1 \\) is 0 — this is a stationary point.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Find the \\( y \\)-coordinate.',
                    workingLatex: "f(-1) = 1 - 2 - 3 = -4",
                    explanation: 'Point of tangency is \\( (-1, -4) \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Write the tangent equation (horizontal line since gradient = 0).',
                    workingLatex: "y = -4",
                    explanation: 'A tangent with gradient 0 at \\( (-1, -4) \\) is the horizontal line \\( y = -4 \\).'
                }
            ],
            finalAnswer: '(a) \\( f\'(x) = 2x + 2 \\) \\quad (b) Gradient \\( = 0 \\) \\quad (c) \\( y = -4 \\)'
        }
    },
    {
        id: 'd1-032',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 32',
        difficulty: 'Foundation',
        questionText: 'a) Show, by differentiating \\( f(x) = x^2 \\) from first principles, that \\( f\'(x) = 2x \\).\\nb) The point \\( P \\) lies on the curve \\( y = x^2 \\). The gradient of the curve at \\( P \\) is \\(-6\\). Find the coordinates of \\( P \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the difference quotient.',
                    workingLatex: "\\frac{f(x+h) - f(x)}{h} = \\frac{(x+h)^2 - x^2}{h}",
                    explanation: 'Set up the first principles definition with \\( f(x) = x^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify the numerator.',
                    workingLatex: "= \\frac{x^2 + 2xh + h^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h",
                    explanation: 'The \\( x^2 \\) terms cancel, then divide each remaining term by \\( h \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}(2x + h) = 2x \\checkmark",
                    explanation: 'The \\( h \\) term vanishes, confirming \\( f\'(x) = 2x \\) as required.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Set the gradient equal to \\(-6\\).',
                    workingLatex: "2x = -6 \\Rightarrow x = -3",
                    explanation: 'Since the gradient at \\( P \\) is \\(-6\\), set \\( f\'(x) = -6 \\) and solve for \\( x \\).'
                },
                {
                    stepNumber: 5,
                    description: 'Find the \\( y \\)-coordinate of \\( P \\).',
                    workingLatex: "y = (-3)^2 = 9",
                    explanation: 'Substitute \\( x = -3 \\) into \\( y = x^2 \\). The coordinates of \\( P \\) are \\( (-3, 9) \\).'
                }
            ],
            finalAnswer: '(b) \\( P = (-3, 9) \\)'
        }
    },
    {
        id: 'd1-033',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 33',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = 2x^2 - x \\).\\n\na) Differentiate from first principles to find \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} \\).\\nb) Find the gradient of \\( C \\) at the point \\( A(2, 6) \\).\\nc) Find the equation of the tangent to \\( C \\) at \\( A \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Find \\( f(x+h) - f(x) \\).',
                    workingLatex: "[2(x+h)^2 - (x+h)] - [2x^2 - x] = 4xh + 2h^2 - h",
                    explanation: 'Expand and cancel \\( 2x^2 \\) and \\( -x \\) terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "4x + 2h - 1 \\xrightarrow{h \\to 0} 4x - 1",
                    explanation: "\\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 1 \\)."
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute \\( x = 2 \\).',
                    workingLatex: "4(2) - 1 = 7",
                    explanation: 'Gradient at \\( A \\) is 7.'
                },
                {
                    stepNumber: 4,
                    description: '(c) Equation of tangent using \\( y - 6 = 7(x - 2) \\).',
                    workingLatex: "y = 7x - 14 + 6 = 7x - 8",
                    explanation: 'Substitute \\( m = 7 \\) and point \\( (2, 6) \\).'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 4x - 1 \\) \\quad (b) Gradient \\( = 7 \\) \\quad (c) \\( y = 7x - 8 \\)'
        }
    },
    {
        id: 'd1-034',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 34',
        difficulty: 'Foundation',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 2 \\).\\n\na) By differentiating from first principles, show that \\( \\dfrac{\\mathrm{d}y}{\\mathrm{d}x} = 3x^2 \\).\\nb) Find the two points on \\( C \\) where the gradient is 12.\\nc) Find the gradient of \\( C \\) at the point where \\( x = 0 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Differentiate \\( y = x^3 - 2 \\) from first principles.',
                    workingLatex: "\\frac{(x+h)^3 - 2 - (x^3 - 2)}{h} = \\frac{3x^2h + 3xh^2 + h^3}{h} = 3x^2 + 3xh + h^2 \\xrightarrow{h\\to 0} 3x^2 \\checkmark",
                    explanation: 'The \\( -2 \\) terms cancel; the rest follows from expanding \\( (x+h)^3 \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Set \\( 3x^2 = 12 \\).',
                    workingLatex: "x^2 = 4 \\Rightarrow x = \\pm 2",
                    explanation: 'Two values of \\( x \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Find corresponding \\( y \\)-values.',
                    workingLatex: "x = 2: y = 8 - 2 = 6 \\qquad x = -2: y = -8 - 2 = -10",
                    explanation: 'Substitute each \\( x \\) into \\( y = x^3 - 2 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(c) Gradient at \\( x = 0 \\).',
                    workingLatex: "\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\bigg|_{x=0} = 3(0)^2 = 0",
                    explanation: 'The gradient is zero at \\(x = 0\\), so the curve has a stationary point at \\((0, -2)\\).'
                }
            ],
            finalAnswer: '(b) \\( (2, 6) \\) and \\( (-2, -10) \\). (c) Gradient at \\( x = 0 \\) is 0.'
        }
    },
    {
        id: 'd1-035',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 35',
        difficulty: 'Foundation',
        questionText: 'a) Differentiate \\( f(x) = x^2 \\) from first principles to show that \\( f\'(x) = 2x \\).\\nb) The tangent to \\( y = x^2 \\) at the point \\( P(a, a^2) \\) has equation \\( y = 2ax - a^2 \\). Verify this using the result from part (a).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) From first principles (standard).',
                    workingLatex: "f'(x) = \\lim_{h\\to 0}\\frac{(x+h)^2 - x^2}{h} = \\lim_{h\\to 0}(2x+h) = 2x \\checkmark",
                    explanation: 'Standard first-principles derivation.'
                },
                {
                    stepNumber: 2,
                    description: '(b) At \\( x = a \\), the gradient is \\( f\'(a) = 2a \\).',
                    workingLatex: "\\text{Gradient} = 2a",
                    explanation: 'Substitute \\( x = a \\) into the derivative.'
                },
                {
                    stepNumber: 3,
                    description: 'Use \\( y - y_1 = m(x - x_1) \\) with \\( m = 2a \\) and point \\( (a, a^2) \\).',
                    workingLatex: "y - a^2 = 2a(x - a)",
                    explanation: 'Point-gradient form of the line.'
                },
                {
                    stepNumber: 4,
                    description: 'Expand and simplify.',
                    workingLatex: "y = 2ax - 2a^2 + a^2 = 2ax - a^2 \\checkmark",
                    explanation: 'This matches the given tangent equation, confirming the result.'
                }
            ],
            finalAnswer: 'Verified: tangent at \\( P(a, a^2) \\) is \\( y = 2ax - a^2 \\).'
        }
    },

    // TYPE H (Q36–40): Chord gradients — mixed polynomials, Standard
    {
        id: 'd1-036',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 36',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 + x \\). Find the gradient of the chord from the point where \\( x = 1 \\) to the point where:\n\ni) \\( x = 2 \\)\nii) \\( x = 1.1 \\)\niii) \\( x = 1.01 \\)\n\nHence suggest the gradient of \\( C \\) at \\( x = 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = x^2 + x \\). Then \\( f(1) = 2 \\).',
                    workingLatex: '\\text{Chord gradient} = \\frac{f(a) - 2}{a - 1}',
                    explanation: 'Apply the chord-gradient formula.'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( a = 2 \\), \\( f(2) = 6 \\).',
                    workingLatex: '\\frac{6 - 2}{2 - 1} = 4',
                    explanation: 'Chord gradient from \\( x = 1 \\) to \\( x = 2 \\).'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( a = 1.1 \\), \\( f(1.1) = 2.31 \\).',
                    workingLatex: '\\frac{2.31 - 2}{1.1 - 1} = \\frac{0.31}{0.1} = 3.1',
                    explanation: 'Chord gradient closer to \\( x = 1 \\).'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( a = 1.01 \\), \\( f(1.01) = 2.0301 \\).',
                    workingLatex: '\\frac{2.0301 - 2}{0.01} = 3.01',
                    explanation: 'Chord gradient very close to \\( x = 1 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'The chord gradients approach 3.',
                    workingLatex: '\\text{Gradient at } x = 1 \\approx 3',
                    explanation: 'Since \\( f\'(x) = 2x + 1 \\), \\( f\'(1) = 3 \\).'
                }
            ],
            finalAnswer: '(i) 4 \\nii) 3.1 \\niii) 3.01 \\quad Gradient at \\( x = 1 \\) is 3.'
        }
    },
    {
        id: 'd1-037',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 37',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) is given by \\( y = x^3 - x \\). Find the gradient of the chord from the point \\( (1, 0) \\) to the point where:\n\ni) \\( x = 1.5 \\)\nii) \\( x = 1.1 \\)\niii) \\( x = 1.01 \\)\n\nWhat does this suggest about the gradient of \\( C \\) at \\( x = 1 \\)?',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = x^3 - x \\), so \\( f(1) = 0 \\).',
                    workingLatex: '\\text{Chord gradient} = \\frac{f(a) - 0}{a - 1}',
                    explanation: 'Chord from \\( (1, 0) \\) to \\( (a, f(a)) \\).'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( a = 1.5 \\), \\( f(1.5) = 1.875 \\).',
                    workingLatex: '\\frac{1.875}{0.5} = 3.75',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( a = 1.1 \\), \\( f(1.1) = 0.231 \\).',
                    workingLatex: '\\frac{0.231}{0.1} = 2.31',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( a = 1.01 \\), \\( f(1.01) = 0.020301 \\).',
                    workingLatex: '\\frac{0.020301}{0.01} = 2.0301',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 5,
                    description: 'The chord gradients approach 2.',
                    workingLatex: '\\text{Gradient at } x = 1 \\approx 2',
                    explanation: '\\( f\'(x) = 3x^2 - 1 \\), so \\( f\'(1) = 2 \\).'
                }
            ],
            finalAnswer: '(i) 3.75 \\nii) 2.31 \\niii) 2.0301 \\quad Gradient at \\( x = 1 \\) is 2.'
        }
    },
    {
        id: 'd1-038',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 38',
        difficulty: 'Standard',
        questionText: 'For the curve \\( y = 2x^2 \\), find the gradient of the chord joining \\( x = -1 \\) to:\n\ni) \\( x = 0 \\)\nii) \\( x = -0.5 \\)\niii) \\( x = -0.9 \\)\n\nDeduce the gradient of the curve at \\( x = -1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 2x^2 \\), \\( f(-1) = 2 \\).',
                    workingLatex: '\\text{Chord gradient} = \\frac{f(a) - 2}{a - (-1)} = \\frac{2a^2 - 2}{a + 1}',
                    explanation: 'Chord-gradient formula.'
                },
                {
                    stepNumber: 2,
                    description: '(i) \\( a = 0 \\).',
                    workingLatex: '\\frac{0 - 2}{0 + 1} = -2',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 3,
                    description: '(ii) \\( a = -0.5 \\), \\( f(-0.5) = 0.5 \\).',
                    workingLatex: '\\frac{0.5 - 2}{0.5} = -3',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 4,
                    description: '(iii) \\( a = -0.9 \\), \\( f(-0.9) = 1.62 \\).',
                    workingLatex: '\\frac{1.62 - 2}{0.1} = -3.8',
                    explanation: 'Chord gradient.'
                },
                {
                    stepNumber: 5,
                    description: 'The chord gradients approach \\( -4 \\).',
                    workingLatex: "f'(x) = 4x \\Rightarrow f'(-1) = -4",
                    explanation: 'Consistent with differentiation.'
                }
            ],
            finalAnswer: '(i) \\( -2 \\) \\nii) \\( -3 \\) \\niii) \\( -3.8 \\) \\quad Gradient at \\( x = -1 \\) is \\( -4 \\).'
        }
    },
    {
        id: 'd1-039',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 39',
        difficulty: 'Standard',
        questionText: 'A student estimates the gradient of \\( y = x^2 \\) at \\( x = 4 \\) using chords to \\( x = 4 + h \\) for \\( h = 1, 0.1, 0.01 \\). Tabulate the three chord gradients and state what the gradient at \\( x = 4 \\) appears to be.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Chord gradient \\( = \\dfrac{(4+h)^2 - 16}{h} = 8 + h \\).',
                    workingLatex: '\\frac{(4+h)^2 - 16}{h} = \\frac{8h + h^2}{h} = 8 + h',
                    explanation: 'Simplify using algebra.'
                },
                {
                    stepNumber: 2,
                    description: '\\( h = 1 \\Rightarrow \\) gradient \\( = 9 \\).',
                    workingLatex: '8 + 1 = 9',
                    explanation: 'Substitute \\( h = 1 \\).'
                },
                {
                    stepNumber: 3,
                    description: '\\( h = 0.1 \\Rightarrow \\) gradient \\( = 8.1 \\).',
                    workingLatex: '8 + 0.1 = 8.1',
                    explanation: 'Substitute \\( h = 0.1 \\).'
                },
                {
                    stepNumber: 4,
                    description: '\\( h = 0.01 \\Rightarrow \\) gradient \\( = 8.01 \\).',
                    workingLatex: '8 + 0.01 = 8.01',
                    explanation: 'Substitute \\( h = 0.01 \\).'
                },
                {
                    stepNumber: 5,
                    description: 'As \\( h \\to 0 \\), chord gradient \\( \\to 8 \\).',
                    workingLatex: '\\text{Gradient at } x = 4 = 8',
                    explanation: 'The limit is 8. The diagram shows how the chords flatten onto the tangent at \\( (4, 16) \\) as \\( h \\) shrinks.',
                    diagram: {
                        xMin: -0.5, xMax: 6, yMin: -4, yMax: 32,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [5, 10, 15, 20, 25, 30],
                        curves: [{ points: sample((x) => x * x, -0.6, 5.6), color: "#1d4ed8", label: "y = x^2", labelAt: [0.3, 29] }],
                        lines: [
                            { from: [4, 16], to: [5, 25], color: "#dc2626", label: "\\text{chord } (h=1)", labelAt: [0.3, 24] },
                            { from: [2.5, -4], to: [5.5, 20], color: "#888", dashed: true, label: "\\text{tangent},\\ m=8", labelAt: [0.3, 19] },
                        ],
                        points: [
                            { at: [4, 16], label: "(4,\\,16)", labelAnchor: "nw", r: 4.5 },
                            { at: [5, 25], r: 3.5 },
                        ],
                    }
                }
            ],
            finalAnswer: 'Chord gradients: 9, 8.1, 8.01. Gradient of curve at \\( x = 4 \\) is 8.'
        }
    },
    {
        id: 'd1-040',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 40',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = 3 - x^2 \\). Find the gradient of the chord joining \\( (2, -1) \\) to the point where \\( x = 2 + h \\). Simplify your answer and deduce the gradient of \\( C \\) at \\( x = 2 \\) by letting \\( h \\to 0 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(2+h) \\) where \\( f(x) = 3 - x^2 \\).',
                    workingLatex: 'f(2+h) = 3 - (2+h)^2 = 3 - 4 - 4h - h^2 = -1 - 4h - h^2',
                    explanation: 'Expand \\( (2+h)^2 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Chord gradient \\( = \\dfrac{f(2+h) - f(2)}{h} \\).',
                    workingLatex: '\\frac{(-1 - 4h - h^2) - (-1)}{h} = \\frac{-4h - h^2}{h}',
                    explanation: 'Subtract \\( f(2) = -1 \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Simplify.',
                    workingLatex: '= -4 - h',
                    explanation: 'Divide every term by \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Let \\( h \\to 0 \\).',
                    workingLatex: '\\lim_{h \\to 0}(-4 - h) = -4',
                    explanation: 'The chord gradient tends to \\( -4 \\).'
                }
            ],
            finalAnswer: 'Chord gradient \\( = -4 - h \\). Gradient of \\( C \\) at \\( x = 2 \\) is \\( -4 \\).'
        }
    },

    // TYPE I (Q41–46): First principles — mixed polynomials
    {
        id: 'd1-041',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 41',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = 3x^2 \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Write down the definition of the derivative.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Standard first-principles definition.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( f(x+h) \\).',
                    workingLatex: 'f(x+h) = 3(x+h)^2 = 3x^2 + 6xh + 3h^2',
                    explanation: 'Expand \\( (x+h)^2 \\) and multiply by 3.'
                },
                {
                    stepNumber: 3,
                    description: 'Form the difference quotient.',
                    workingLatex: '\\frac{3x^2 + 6xh + 3h^2 - 3x^2}{h} = \\frac{6xh + 3h^2}{h} = 6x + 3h',
                    explanation: 'Subtract, then divide by \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}(6x + 3h) = 6x",
                    explanation: 'The \\( 3h \\) term vanishes.'
                }
            ],
            finalAnswer: "\\( f'(x) = 6x \\)."
        }
    },
    {
        id: 'd1-042',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 42',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = x^2 - 4x \\) from first principles.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Definition of derivative.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}",
                    explanation: 'Standard definition.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( f(x+h) \\).',
                    workingLatex: 'f(x+h) = (x+h)^2 - 4(x+h) = x^2 + 2xh + h^2 - 4x - 4h',
                    explanation: 'Expand brackets.'
                },
                {
                    stepNumber: 3,
                    description: 'Form difference quotient.',
                    workingLatex: '\\frac{2xh + h^2 - 4h}{h} = 2x + h - 4',
                    explanation: '\\( x^2 \\) and \\( -4x \\) terms cancel.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = 2x - 4",
                    explanation: 'The \\( h \\) term vanishes.'
                }
            ],
            finalAnswer: "\\( f'(x) = 2x - 4 \\)."
        }
    },
    {
        id: 'd1-043',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 43',
        difficulty: 'Standard',
        questionText: 'Use first principles to differentiate \\( f(x) = x^2 + 3x - 1 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(x+h) \\).',
                    workingLatex: 'f(x+h) = (x+h)^2 + 3(x+h) - 1 = x^2 + 2xh + h^2 + 3x + 3h - 1',
                    explanation: 'Expand all terms.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '2xh + h^2 + 3h',
                    explanation: 'Constant and \\( x \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{2xh + h^2 + 3h}{h} = 2x + h + 3',
                    explanation: 'Simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'Let \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = 2x + 3",
                    explanation: 'The \\( -1 \\) constant has no effect on the derivative.'
                }
            ],
            finalAnswer: "\\( f'(x) = 2x + 3 \\)."
        }
    },
    {
        id: 'd1-044',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 44',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = 2x^3 \\) from first principles.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (x+h)^3 \\).',
                    workingLatex: '(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3',
                    explanation: 'Binomial expansion.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '2(x^3 + 3x^2h + 3xh^2 + h^3) - 2x^3 = 6x^2h + 6xh^2 + 2h^3',
                    explanation: 'Subtract and collect terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{6x^2h + 6xh^2 + 2h^3}{h} = 6x^2 + 6xh + 2h^2',
                    explanation: 'Cancel one factor of \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}(6x^2 + 6xh + 2h^2) = 6x^2",
                    explanation: 'All \\( h \\) terms vanish.'
                }
            ],
            finalAnswer: "\\( f'(x) = 6x^2 \\)."
        }
    },
    {
        id: 'd1-045',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 45',
        difficulty: 'Standard',
        questionText: 'Differentiate \\( f(x) = x^3 + 2x \\) from first principles.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(x+h) \\).',
                    workingLatex: '(x+h)^3 + 2(x+h) = x^3 + 3x^2h + 3xh^2 + h^3 + 2x + 2h',
                    explanation: 'Expand cube and linear term.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( f(x) = x^3 + 2x \\).',
                    workingLatex: 'f(x+h) - f(x) = 3x^2h + 3xh^2 + h^3 + 2h',
                    explanation: 'The \\( x^3 \\) and \\( 2x \\) terms cancel, leaving only terms containing \\( h \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{3x^2h + 3xh^2 + h^3 + 2h}{h} = 3x^2 + 3xh + h^2 + 2',
                    explanation: 'Factor out \\( h \\) from every term in the numerator and cancel with the denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}(3x^2 + 3xh + h^2 + 2) = 3x^2 + 2",
                    explanation: 'The \\( 3xh \\) and \\( h^2 \\) terms vanish, giving the derivative.'
                }
            ],
            finalAnswer: "\\( f'(x) = 3x^2 + 2 \\)."
        }
    },
    {
        id: 'd1-046',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 46',
        difficulty: 'Standard',
        questionText: 'Use first principles to show that the derivative of \\( f(x) = 5x^2 - 3 \\) is \\( 10x \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(x+h) \\).',
                    workingLatex: 'f(x+h) = 5(x+h)^2 - 3 = 5x^2 + 10xh + 5h^2 - 3',
                    explanation: 'Expand \\( (x+h)^2 \\) and multiply through by 5.'
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '(5x^2 + 10xh + 5h^2 - 3) - (5x^2 - 3) = 10xh + 5h^2',
                    explanation: 'The \\( 5x^2 \\) and \\( -3 \\) terms cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{10xh + 5h^2}{h} = 10x + 5h',
                    explanation: 'Cancel the common factor of \\( h \\) from the numerator and denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}(10x + 5h) = 10x \\checkmark",
                    explanation: 'The \\( 5h \\) term vanishes, confirming the derivative is \\( 10x \\) as required.'
                }
            ],
            finalAnswer: "Shown: \\( f'(x) = 10x \\)."
        }
    },

    // TYPE J (Q47–52): First principles — evaluate gradient at a specific point
    {
        id: 'd1-047',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 47',
        difficulty: 'Standard',
        questionText: 'Use first principles to find the gradient of the curve \\( y = x^2 + 2x \\) at the point where \\( x = 3 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(3) \\) and \\( f(3+h) \\).',
                    workingLatex: 'f(3) = 9 + 6 = 15, \\quad f(3+h) = (3+h)^2 + 2(3+h) = 9 + 6h + h^2 + 6 + 2h = 15 + 8h + h^2',
                    explanation: 'Substitute \\( x = 3 \\) and \\( x = 3+h \\) into \\( f(x) = x^2 + 2x \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( f(3) \\).',
                    workingLatex: 'f(3+h) - f(3) = (15 + 8h + h^2) - 15 = 8h + h^2',
                    explanation: 'The constant terms cancel, leaving only terms in \\( h \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{8h + h^2}{h} = 8 + h',
                    explanation: 'Cancel the common factor of \\( h \\) to simplify the difference quotient.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(3) = \\lim_{h \\to 0}(8 + h) = 8",
                    explanation: 'The \\( h \\) term vanishes, so the gradient at \\( x = 3 \\) is 8.'
                }
            ],
            finalAnswer: 'Gradient at \\( x = 3 \\) is 8.'
        }
    },
    {
        id: 'd1-048',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 48',
        difficulty: 'Standard',
        questionText: 'Find, from first principles, the gradient of the curve \\( y = x^3 \\) at the point where \\( x = -2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(-2+h) \\).',
                    workingLatex: 'f(-2+h) = (-2+h)^3 = -8 + 12h - 6h^2 + h^3',
                    explanation: 'Expand \\( (-2+h)^3 \\) using the binomial expansion. Note \\( f(-2) = (-2)^3 = -8 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( f(-2) = -8 \\).',
                    workingLatex: 'f(-2+h) - f(-2) = (-8 + 12h - 6h^2 + h^3) - (-8) = 12h - 6h^2 + h^3',
                    explanation: 'The \\( -8 \\) terms cancel, leaving only terms containing \\( h \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{12h - 6h^2 + h^3}{h} = 12 - 6h + h^2',
                    explanation: 'Cancel the common factor of \\( h \\) from the numerator and denominator.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(-2) = \\lim_{h \\to 0}(12 - 6h + h^2) = 12",
                    explanation: 'The \\( -6h \\) and \\( h^2 \\) terms vanish, so the gradient at \\( x = -2 \\) is 12.'
                }
            ],
            finalAnswer: 'Gradient at \\( x = -2 \\) is 12.'
        }
    },
    {
        id: 'd1-049',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 49',
        difficulty: 'Standard',
        questionText: 'Using first principles, find the gradient of the curve \\( y = 4x^2 - x \\) at \\( x = 1 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(1) \\) and \\( f(1+h) \\).',
                    workingLatex: 'f(1) = 4 - 1 = 3, \\quad f(1+h) = 4(1+h)^2 - (1+h) = 4 + 8h + 4h^2 - 1 - h = 3 + 7h + 4h^2',
                    explanation: 'Substitute \\( x = 1 \\) and \\( x = 1+h \\) into \\( f(x) = 4x^2 - x \\), then expand.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( f(1) \\).',
                    workingLatex: 'f(1+h) - f(1) = (3 + 7h + 4h^2) - 3 = 7h + 4h^2',
                    explanation: 'The constant terms cancel, leaving only terms in \\( h \\).'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{7h + 4h^2}{h} = 7 + 4h',
                    explanation: 'Cancel the common factor of \\( h \\) to form the simplified difference quotient.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(1) = \\lim_{h \\to 0}(7 + 4h) = 7",
                    explanation: 'The \\( 4h \\) term vanishes, so the gradient at \\( x = 1 \\) is 7.'
                }
            ],
            finalAnswer: 'Gradient at \\( x = 1 \\) is 7.'
        }
    },
    {
        id: 'd1-050',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 50',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = x^2 - 6x + 5 \\). Use first principles to show that the gradient of the curve at \\( x = 4 \\) is 2.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = x^2 - 6x + 5 \\). Compute \\( f(4) \\).',
                    workingLatex: 'f(4) = 16 - 24 + 5 = -3',
                    explanation: 'Substitute \\( x = 4 \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Compute \\( f(4+h) \\).',
                    workingLatex: '(4+h)^2 - 6(4+h) + 5 = 16 + 8h + h^2 - 24 - 6h + 5 = -3 + 2h + h^2',
                    explanation: 'Expand and simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Difference quotient.',
                    workingLatex: '\\frac{(-3 + 2h + h^2) - (-3)}{h} = 2 + h',
                    explanation: 'Cancel and divide.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(4) = \\lim_{h \\to 0}(2 + h) = 2 \\checkmark",
                    explanation: 'As required.'
                }
            ],
            finalAnswer: 'Shown: gradient at \\( x = 4 \\) is 2.'
        }
    },
    {
        id: 'd1-051',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 51',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = 2x^2 + 5x \\). Find the gradient of \\( C \\) at the point where \\( x = -1 \\), using first principles.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = 2x^2 + 5x \\). Then \\( f(-1) = 2 - 5 = -3 \\).',
                    workingLatex: 'f(-1 + h) = 2(-1+h)^2 + 5(-1+h)',
                    explanation: 'Compute \\( f(-1+h) \\).'
                },
                {
                    stepNumber: 2,
                    description: 'Expand.',
                    workingLatex: '2(1 - 2h + h^2) + (-5 + 5h) = 2 - 4h + 2h^2 - 5 + 5h = -3 + h + 2h^2',
                    explanation: 'Collect like terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Form the difference quotient.',
                    workingLatex: '\\frac{(-3 + h + 2h^2) - (-3)}{h} = 1 + 2h',
                    explanation: 'Cancel \\( -3 \\), divide by \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(-1) = \\lim_{h \\to 0}(1 + 2h) = 1",
                    explanation: 'Limit as \\( h \\to 0 \\).'
                }
            ],
            finalAnswer: 'Gradient at \\( x = -1 \\) is 1.'
        }
    },
    {
        id: 'd1-052',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 52',
        difficulty: 'Standard',
        questionText: 'Find, from first principles, the gradient of \\( y = x^3 + x \\) at the point where \\( x = 2 \\).',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( f(x) = x^3 + x \\). Then \\( f(2) = 10 \\).',
                    workingLatex: 'f(2+h) = (2+h)^3 + (2+h) = 8 + 12h + 6h^2 + h^3 + 2 + h',
                    explanation: 'Expand cube and linear term.'
                },
                {
                    stepNumber: 2,
                    description: 'Simplify.',
                    workingLatex: '= 10 + 13h + 6h^2 + h^3',
                    explanation: 'Combine constant terms.'
                },
                {
                    stepNumber: 3,
                    description: 'Difference quotient.',
                    workingLatex: '\\frac{13h + 6h^2 + h^3}{h} = 13 + 6h + h^2',
                    explanation: 'Cancel and divide.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(2) = \\lim_{h \\to 0}(13 + 6h + h^2) = 13",
                    explanation: 'Limit as \\( h \\to 0 \\).'
                }
            ],
            finalAnswer: 'Gradient at \\( x = 2 \\) is 13.'
        }
    },

    // TYPE K (Q53–58): Find gradient function then evaluate
    {
        id: 'd1-053',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 53',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = x^2 + 4x - 7 \\). (a) Find \\( \\dfrac{dy}{dx} \\) from first principles. (b) Hence find the gradient of the curve at the point where \\( x = -3 \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '[(x+h)^2 + 4(x+h) - 7] - [x^2 + 4x - 7] = 2xh + h^2 + 4h',
                    explanation: 'Expand \\( (x+h)^2 \\) and \\( 4(x+h) \\), then subtract \\( f(x) \\). The \\( x^2 \\), \\( 4x \\) and \\( -7 \\) terms cancel.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{2xh + h^2 + 4h}{h} = 2x + h + 4',
                    explanation: 'Cancel the common factor of \\( h \\) from the numerator and denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "\\frac{dy}{dx} = \\lim_{h \\to 0}(2x + h + 4) = 2x + 4",
                    explanation: 'The \\( h \\) term vanishes, giving the gradient function.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Substitute \\( x = -3 \\).',
                    workingLatex: '2(-3) + 4 = -6 + 4 = -2',
                    explanation: 'Evaluate the derivative at \\( x = -3 \\) to find the gradient at that point.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{dy}{dx} = 2x + 4 \\) \\quad (b) Gradient at \\( x = -3 \\) is \\( -2 \\).'
        }
    },
    {
        id: 'd1-054',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 54',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 - 5x \\). (a) Use first principles to find the gradient function. (b) Find the value of \\( x \\) at which the gradient of \\( C \\) is zero.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '[(x+h)^2 - 5(x+h)] - [x^2 - 5x] = 2xh + h^2 - 5h',
                    explanation: 'Expand \\( (x+h)^2 \\) and \\( -5(x+h) \\), then subtract \\( f(x) \\). The \\( x^2 \\) and \\( -5x \\) terms cancel.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{2xh + h^2 - 5h}{h} = 2x + h - 5',
                    explanation: 'Cancel the common factor of \\( h \\) from the numerator and denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "\\frac{dy}{dx} = \\lim_{h \\to 0}(2x + h - 5) = 2x - 5",
                    explanation: 'The \\( h \\) term vanishes, giving the gradient function.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Set gradient \\( = 0 \\).',
                    workingLatex: '2x - 5 = 0 \\Rightarrow x = \\tfrac{5}{2}',
                    explanation: 'Solve for \\( x \\). At this \\( x \\) the tangent is horizontal -- the curve has its minimum.',
                    diagram: {
                        xMin: -0.8, xMax: 5.8, yMin: -8, yMax: 5,
                        xTicks: [1, 2, 3, 4, 5], yTicks: [-6, -4, -2, 2, 4],
                        curves: [{ points: sample((x) => x * x - 5 * x, -0.6, 5.6), color: "#1d4ed8", label: "y = x^2 - 5x", labelAt: [-0.2, 4] }],
                        lines: [
                            { from: [0.5, -6.25], to: [4.5, -6.25], color: "#dc2626", dashed: true, label: "\\text{horizontal tangent}", labelAt: [4.6, -5.5] },
                        ],
                        points: [{ at: [2.5, -6.25], label: "\\left(\\tfrac{5}{2},\\,-\\tfrac{25}{4}\\right)", labelAnchor: "se", r: 4.5 }],
                    }
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{dy}{dx} = 2x - 5 \\) \\quad (b) \\( x = \\tfrac{5}{2} \\).'
        }
    },
    {
        id: 'd1-055',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 55',
        difficulty: 'Standard',
        questionText: 'A curve has equation \\( y = 3x^2 - 12x + 5 \\). Using first principles, find the value of \\( x \\) at which the tangent to the curve is horizontal.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '[3(x+h)^2 - 12(x+h) + 5] - [3x^2 - 12x + 5] = 6xh + 3h^2 - 12h',
                    explanation: 'Expand \\( 3(x+h)^2 \\) and \\( -12(x+h) \\), then subtract \\( f(x) \\). The \\( 3x^2 \\), \\( -12x \\) and \\( +5 \\) terms cancel.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{6xh + 3h^2 - 12h}{h} = 6x + 3h - 12',
                    explanation: 'Cancel the common factor of \\( h \\) from the numerator and denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "\\frac{dy}{dx} = \\lim_{h \\to 0}(6x + 3h - 12) = 6x - 12",
                    explanation: 'The \\( 3h \\) term vanishes, giving the gradient function.'
                },
                {
                    stepNumber: 4,
                    description: 'Set \\( \\dfrac{dy}{dx} = 0 \\) for horizontal tangent.',
                    workingLatex: '6x - 12 = 0 \\Rightarrow x = 2',
                    explanation: 'A horizontal tangent occurs where the gradient is zero. Solve to find \\( x = 2 \\).'
                }
            ],
            finalAnswer: 'Horizontal tangent at \\( x = 2 \\).'
        }
    },
    {
        id: 'd1-056',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 56',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) is given by \\( y = x^3 - 3x \\). (a) Find \\( \\dfrac{dy}{dx} \\) from first principles. (b) Find the gradient of \\( C \\) at the points where \\( x = 0 \\) and \\( x = 1 \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( f(x+h) - f(x) \\).',
                    workingLatex: '[(x+h)^3 - 3(x+h)] - [x^3 - 3x] = 3x^2h + 3xh^2 + h^3 - 3h',
                    explanation: 'Expand \\( (x+h)^3 \\) using the binomial expansion and distribute \\( -3 \\). The \\( x^3 \\) and \\( -3x \\) terms cancel.'
                },
                {
                    stepNumber: 2,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{3x^2h + 3xh^2 + h^3 - 3h}{h} = 3x^2 + 3xh + h^2 - 3',
                    explanation: 'Cancel the common factor of \\( h \\) from the numerator and denominator.'
                },
                {
                    stepNumber: 3,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "\\frac{dy}{dx} = \\lim_{h \\to 0}(3x^2 + 3xh + h^2 - 3) = 3x^2 - 3",
                    explanation: 'The \\( 3xh \\) and \\( h^2 \\) terms vanish, giving the gradient function.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Evaluate at \\( x = 0 \\) and \\( x = 1 \\).',
                    workingLatex: "\\left.\\frac{dy}{dx}\\right|_{x=0} = 3(0)^2 - 3 = -3, \\quad \\left.\\frac{dy}{dx}\\right|_{x=1} = 3(1)^2 - 3 = 0",
                    explanation: 'Substitute each value of \\( x \\) into the gradient function to find the gradient at each point.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{dy}{dx} = 3x^2 - 3 \\) \\quad (b) Gradients are \\( -3 \\) and \\( 0 \\).'
        }
    },
    {
        id: 'd1-057',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 57',
        difficulty: 'Standard',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 + 2x - 3 \\). Find the coordinates of the point on \\( C \\) at which the gradient is equal to 6.',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{dy}{dx} = 2x + 2',
                    explanation: 'Apply the power rule to each term: the derivative of x^2 is 2x, the derivative of 2x is 2, and the constant -3 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set the gradient equal to 6.',
                    workingLatex: '2x + 2 = 6',
                    explanation: 'We need the point where the gradient of the curve equals 6, so set the derivative equal to 6.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for x.',
                    workingLatex: '2x = 4 \\Rightarrow x = 2',
                    explanation: 'Subtract 2 from both sides, then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the y-coordinate.',
                    workingLatex: 'y = (2)^2 + 2(2) - 3 = 4 + 4 - 3 = 5',
                    explanation: 'Substitute x = 2 back into the original equation to find the corresponding y-value.'
                }
            ],
            finalAnswer: 'Point is \\( (2, 5) \\).'
        }
    },
    {
        id: 'd1-058',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 58',
        difficulty: 'Standard',
        questionText: 'Find the coordinates of the point on the curve \\( y = x^2 - 4x + 1 \\) where the gradient is \\( -2 \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{dy}{dx} = 2x - 4',
                    explanation: 'The derivative of x^2 is 2x, the derivative of -4x is -4, and the constant 1 differentiates to 0.'
                },
                {
                    stepNumber: 2,
                    description: 'Set gradient equal to -2.',
                    workingLatex: '2x - 4 = -2',
                    explanation: 'We want the point where the gradient equals -2, so set the derivative equal to -2.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for x.',
                    workingLatex: '2x = 2 \\Rightarrow x = 1',
                    explanation: 'Add 4 to both sides, then divide by 2.'
                },
                {
                    stepNumber: 4,
                    description: 'Find the y-coordinate.',
                    workingLatex: 'y = (1)^2 - 4(1) + 1 = 1 - 4 + 1 = -2',
                    explanation: 'Substitute x = 1 into the original equation to find the corresponding y-value.'
                }
            ],
            finalAnswer: 'Point is \\( (1, -2) \\).'
        }
    },

    // TYPE L (Q59–63): Rate of change interpretation
    {
        id: 'd1-059',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 59',
        difficulty: 'Standard',
        questionText: 'The displacement \\( s \\) metres of a particle at time \\( t \\) seconds is modelled by \\( s = t^2 + 3t \\). (a) Find the velocity \\( \\dfrac{ds}{dt} \\). (b) Find the velocity when \\( t = 4 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Identify the velocity expression.',
                    workingLatex: 'v = \\frac{ds}{dt}',
                    explanation: 'Velocity is the rate of change of displacement with respect to time, so we differentiate s with respect to t.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{ds}{dt} = 2t + 3',
                    explanation: 'The derivative of t^2 is 2t and the derivative of 3t is 3.'
                },
                {
                    stepNumber: 3,
                    description: '(b) Substitute t = 4.',
                    workingLatex: 'v = 2(4) + 3 = 8 + 3 = 11',
                    explanation: 'Replace t with 4 in the velocity expression.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer with units.',
                    workingLatex: 'v = 11 \\text{ m/s}',
                    explanation: 'Since displacement is in metres and time is in seconds, the velocity is measured in m/s.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{ds}{dt} = 2t + 3 \\) \\quad (b) Velocity is 11 m/s.'
        }
    },
    {
        id: 'd1-060',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 60',
        difficulty: 'Standard',
        questionText: 'A ball is thrown so that its height \\( h \\) metres after \\( t \\) seconds is \\( h = 20t - 5t^2 \\). Find the rate at which the height is changing when \\( t = 1 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the rate of change.',
                    workingLatex: '\\frac{dh}{dt}',
                    explanation: 'The rate at which the height is changing is given by the derivative of h with respect to t.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{dh}{dt} = 20 - 10t',
                    explanation: 'The derivative of 20t is 20 and the derivative of -5t^2 is -10t.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute t = 1.',
                    workingLatex: '\\frac{dh}{dt} = 20 - 10(1) = 20 - 10 = 10',
                    explanation: 'Replace t with 1 in the derivative expression.'
                },
                {
                    stepNumber: 4,
                    description: 'Interpret the result.',
                    workingLatex: '\\text{Rate of change} = 10 \\text{ m/s (rising)}',
                    explanation: 'The positive value means the ball is rising at 10 m/s at t = 1. The diagram shows the height-time curve and the tangent at t = 1, whose gradient 10 is the instantaneous velocity.',
                    diagram: {
                        xMin: -0.3, xMax: 4.8, yMin: -3, yMax: 26,
                        xTicks: [1, 2, 3, 4], yTicks: [5, 10, 15, 20, 25],
                        xLabel: "t\\,(\\text{s})", yLabel: "h\\,(\\text{m})",
                        curves: [{ points: sample((t) => 20 * t - 5 * t * t, 0, 4.2), color: "#1d4ed8", label: "h = 20t - 5t^2", labelAt: [2.8, 24] }],
                        lines: [
                            { from: [-0.2, 3], to: [2.2, 27], color: "#dc2626", dashed: true, label: "\\text{tangent},\\ m = 10", labelAt: [-0.2, 22] },
                        ],
                        points: [{ at: [1, 15], label: "(1,\\,15)", labelAnchor: "nw", r: 4.5 }],
                    }
                }
            ],
            finalAnswer: 'Rate of change of height is 10 m/s (rising).'
        }
    },
    {
        id: 'd1-061',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 61',
        difficulty: 'Standard',
        questionText: 'The volume \\( V \\) cm\\( ^3 \\) of a balloon at time \\( t \\) seconds is \\( V = 4t^2 + t \\). Find \\( \\dfrac{dV}{dt} \\) and state the rate at which the volume is increasing when \\( t = 3 \\).',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the rate of change.',
                    workingLatex: '\\frac{dV}{dt}',
                    explanation: 'The rate at which the volume is changing is found by differentiating V with respect to t.'
                },
                {
                    stepNumber: 2,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{dV}{dt} = 8t + 1',
                    explanation: 'The derivative of 4t^2 is 8t and the derivative of t is 1.'
                },
                {
                    stepNumber: 3,
                    description: 'Substitute t = 3.',
                    workingLatex: '\\frac{dV}{dt} = 8(3) + 1 = 24 + 1 = 25',
                    explanation: 'Replace t with 3 in the derivative expression.'
                },
                {
                    stepNumber: 4,
                    description: 'State the answer with units.',
                    workingLatex: '\\text{Rate} = 25 \\text{ cm}^3\\text{/s}',
                    explanation: 'Since volume is in cm^3 and time is in seconds, the rate of change is in cm^3/s. The volume is increasing at 25 cm^3/s.'
                }
            ],
            finalAnswer: '\\( \\dfrac{dV}{dt} = 8t + 1 \\); rate \\( = 25 \\) cm\\( ^3 \\)/s.'
        }
    },
    {
        id: 'd1-062',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 62',
        difficulty: 'Standard',
        questionText: 'A company models its profit \\( P \\) (in £thousands) as a function of units sold \\( x \\) by \\( P = -x^2 + 40x - 100 \\). Find \\( \\dfrac{dP}{dx} \\) and determine the value of \\( x \\) at which profit is momentarily constant (the marginal profit is zero).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{dP}{dx} = -2x + 40',
                    explanation: 'The derivative of -x^2 is -2x, the derivative of 40x is 40, and the constant -100 differentiates to 0. This is the marginal profit.'
                },
                {
                    stepNumber: 2,
                    description: 'Set marginal profit equal to zero.',
                    workingLatex: '-2x + 40 = 0',
                    explanation: 'Profit is momentarily constant when its rate of change is zero, so set the derivative equal to 0.'
                },
                {
                    stepNumber: 3,
                    description: 'Solve for x.',
                    workingLatex: '-2x = -40 \\Rightarrow x = 20',
                    explanation: 'Subtract 40 from both sides, then divide by -2.'
                },
                {
                    stepNumber: 4,
                    description: 'State the conclusion.',
                    workingLatex: '\\text{Profit is momentarily constant at } x = 20',
                    explanation: 'At x = 20 units the marginal profit is zero, meaning profit is neither increasing nor decreasing at that instant.'
                }
            ],
            finalAnswer: '\\( \\dfrac{dP}{dx} = -2x + 40 \\); profit is momentarily constant at \\( x = 20 \\).'
        }
    },
    {
        id: 'd1-063',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 63',
        difficulty: 'Standard',
        questionText: 'A cup of hot coffee cools so that its temperature \\( T \\) °C after \\( t \\) minutes is modelled by \\( T = 90 - 2t^2 \\). Find the rate of change of temperature when \\( t = 3 \\) and interpret your answer.',
        marks: 4,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Differentiate each term.',
                    workingLatex: '\\frac{dT}{dt} = -4t',
                    explanation: 'The constant 90 differentiates to 0 and the derivative of -2t^2 is -4t. This gives the rate of change of temperature.'
                },
                {
                    stepNumber: 2,
                    description: 'Substitute t = 3.',
                    workingLatex: '\\frac{dT}{dt} = -4(3) = -12',
                    explanation: 'Replace t with 3 in the derivative expression.'
                },
                {
                    stepNumber: 3,
                    description: 'State the value with units.',
                    workingLatex: '\\frac{dT}{dt} = -12 \\text{ °C/min}',
                    explanation: 'The rate of change of temperature at t = 3 is -12 degrees Celsius per minute.'
                },
                {
                    stepNumber: 4,
                    description: 'Interpret the sign.',
                    workingLatex: '\\text{Cooling at } 12 \\text{ °C per minute}',
                    explanation: 'The negative sign indicates the temperature is decreasing. At t = 3 minutes the coffee is cooling at a rate of 12 °C per minute.'
                }
            ],
            finalAnswer: 'Rate \\( = -12 \\) °C/min — the coffee is cooling at 12 °C/min.'
        }
    },

    // TYPE M (Q64–67): Challenge and exam-style
    {
        id: 'd1-064',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 64',
        difficulty: 'Challenge',
        questionText: 'Differentiate \\( f(x) = x^4 \\) from first principles.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Expand \\( (x+h)^4 \\).',
                    workingLatex: '(x+h)^4 = x^4 + 4x^3 h + 6x^2 h^2 + 4x h^3 + h^4',
                    explanation: 'Binomial expansion.'
                },
                {
                    stepNumber: 2,
                    description: 'Form \\( f(x+h) - f(x) \\).',
                    workingLatex: '4x^3 h + 6x^2 h^2 + 4x h^3 + h^4',
                    explanation: '\\( x^4 \\) cancels.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '4x^3 + 6x^2 h + 4x h^2 + h^3',
                    explanation: 'Cancel one factor of \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit as \\( h \\to 0 \\).',
                    workingLatex: "f'(x) = 4x^3",
                    explanation: 'All \\( h \\) terms vanish.'
                }
            ],
            finalAnswer: "\\( f'(x) = 4x^3 \\)."
        }
    },
    {
        id: 'd1-065',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 65',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^3 - 2x^2 + x \\). (a) Use first principles to find \\( \\dfrac{dy}{dx} \\). (b) Hence find the values of \\( x \\) at which the tangent to \\( C \\) has gradient 1.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Compute \\( f(x+h) \\).',
                    workingLatex: '(x+h)^3 - 2(x+h)^2 + (x+h)',
                    explanation: 'Expand term by term.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and collect.',
                    workingLatex: '= x^3 + 3x^2h + 3xh^2 + h^3 - 2x^2 - 4xh - 2h^2 + x + h',
                    explanation: 'Binomial expansion of each bracket.'
                },
                {
                    stepNumber: 3,
                    description: 'Subtract \\( f(x) = x^3 - 2x^2 + x \\).',
                    workingLatex: '3x^2 h + 3xh^2 + h^3 - 4xh - 2h^2 + h',
                    explanation: 'Cancel \\( f(x) \\) terms.'
                },
                {
                    stepNumber: 4,
                    description: 'Divide by \\( h \\) and take the limit.',
                    workingLatex: "\\frac{dy}{dx} = \\lim_{h \\to 0}(3x^2 + 3xh + h^2 - 4x - 2h + 1) = 3x^2 - 4x + 1",
                    explanation: 'Gradient function.'
                },
                {
                    stepNumber: 5,
                    description: '(b) Set gradient \\( = 1 \\).',
                    workingLatex: '3x^2 - 4x + 1 = 1 \\Rightarrow 3x^2 - 4x = 0 \\Rightarrow x(3x - 4) = 0',
                    explanation: 'Factorise.'
                },
                {
                    stepNumber: 6,
                    description: 'Solve.',
                    workingLatex: 'x = 0 \\text{ or } x = \\tfrac{4}{3}',
                    explanation: 'Two solutions.'
                }
            ],
            finalAnswer: '(a) \\( \\dfrac{dy}{dx} = 3x^2 - 4x + 1 \\) \\quad (b) \\( x = 0 \\) or \\( x = \\tfrac{4}{3} \\).'
        }
    },
    {
        id: 'd1-066',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 66',
        difficulty: 'Challenge',
        questionText: 'Use first principles to show that if \\( f(x) = ax^2 + bx + c \\) then \\( f\'(x) = 2ax + b \\), where \\( a, b, c \\) are constants.',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compute \\( f(x+h) \\).',
                    workingLatex: 'a(x+h)^2 + b(x+h) + c = ax^2 + 2axh + ah^2 + bx + bh + c',
                    explanation: 'Expand.'
                },
                {
                    stepNumber: 2,
                    description: 'Subtract \\( f(x) \\).',
                    workingLatex: '2axh + ah^2 + bh',
                    explanation: '\\( ax^2, bx, c \\) cancel.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: '\\frac{2axh + ah^2 + bh}{h} = 2ax + ah + b',
                    explanation: 'Simplify.'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(x) = \\lim_{h \\to 0}(2ax + ah + b) = 2ax + b \\checkmark",
                    explanation: 'As required.'
                }
            ],
            finalAnswer: "Shown: \\( f'(x) = 2ax + b \\)."
        }
    },
    {
        id: 'd1-067',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 67',
        difficulty: 'Challenge',
        questionText: 'The points \\( A \\) and \\( B \\) both lie on the curve \\( y = x^2 \\). The chord \\( AB \\) has gradient 5. Given that the \\( x \\)-coordinate of \\( A \\) is \\( a \\) and the \\( x \\)-coordinate of \\( B \\) is \\( a + h \\) with \\( h \\neq 0 \\), show that \\( 2a + h = 5 \\). Hence state the gradient of the tangent to the curve at the midpoint of \\( AB \\).',
        marks: 6,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Gradient of \\( AB \\).',
                    workingLatex: '\\frac{(a+h)^2 - a^2}{(a+h) - a} = \\frac{2ah + h^2}{h} = 2a + h',
                    explanation: 'Standard chord-gradient calculation.'
                },
                {
                    stepNumber: 2,
                    description: 'Set equal to 5.',
                    workingLatex: '2a + h = 5 \\checkmark',
                    explanation: 'As required.'
                },
                {
                    stepNumber: 3,
                    description: 'Midpoint of \\( AB \\) has \\( x \\)-coordinate \\( a + \\tfrac{h}{2} \\).',
                    workingLatex: 'x_M = a + \\frac{h}{2}',
                    explanation: 'Average of the two \\( x \\)-coordinates.'
                },
                {
                    stepNumber: 4,
                    description: 'Gradient of tangent at midpoint is \\( 2x_M \\).',
                    workingLatex: "\\left.\\frac{dy}{dx}\\right|_{x_M} = 2\\!\\left(a + \\frac{h}{2}\\right) = 2a + h = 5",
                    explanation: 'Using \\( \\dfrac{dy}{dx} = 2x \\) for \\( y = x^2 \\). The diagram illustrates that the tangent at the midpoint of \\( AB \\) is parallel to (in fact has the same gradient as) the chord \\( AB \\).',
                    diagram: {
                        xMin: -0.6, xMax: 4, yMin: -1.5, yMax: 11,
                        xTicks: [1, 2, 3], yTicks: [2, 4, 6, 8, 10],
                        curves: [{ points: sample((x) => x * x, -0.6, 3.5), color: "#1d4ed8", label: "y = x^2", labelAt: [0.1, 10.5] }],
                        lines: [
                            { from: [0.7, -0.15], to: [3.5, 11.05], color: "#dc2626", label: "\\text{chord } AB", labelAt: [0.1, 8.5] },
                            { from: [0.8, -1.2], to: [3.2, 8.4], color: "#888", dashed: true, label: "\\text{tangent at } M", labelAt: [0.1, 6] },
                        ],
                        points: [
                            { at: [1, 1], label: "A", labelAnchor: "se", r: 4 },
                            { at: [3, 9], label: "B", labelAnchor: "nw", r: 4 },
                            { at: [2, 4], label: "M", labelAnchor: "nw", r: 4 },
                        ],
                    }
                }
            ],
            finalAnswer: 'Shown \\( 2a + h = 5 \\). The tangent at the midpoint has gradient 5 (equal to the chord gradient).'
        }
    },

    // TYPE N (Q68–70): Synoptic / exam-style
    {
        id: 'd1-068',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 68',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 - 2x + 4 \\). The point \\( P \\) lies on \\( C \\) and has \\( x \\)-coordinate 3. (a) Find the coordinates of \\( P \\). (b) Use first principles to find the gradient of \\( C \\) at \\( P \\). (c) Find the equation of the tangent to \\( C \\) at \\( P \\), in the form \\( y = mx + c \\).',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Substitute \\( x = 3 \\).',
                    workingLatex: 'y = 9 - 6 + 4 = 7',
                    explanation: 'So \\( P = (3, 7) \\).'
                },
                {
                    stepNumber: 2,
                    description: '(b) Form \\( f(3+h) - f(3) \\).',
                    workingLatex: '(3+h)^2 - 2(3+h) + 4 - 7 = 9 + 6h + h^2 - 6 - 2h + 4 - 7 = 4h + h^2',
                    explanation: 'Simplify.'
                },
                {
                    stepNumber: 3,
                    description: 'Difference quotient.',
                    workingLatex: '\\frac{4h + h^2}{h} = 4 + h',
                    explanation: 'Divide by \\( h \\).'
                },
                {
                    stepNumber: 4,
                    description: 'Take the limit.',
                    workingLatex: "f'(3) = \\lim_{h \\to 0}(4 + h) = 4",
                    explanation: 'Gradient at \\( P \\) is 4.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Tangent with gradient 4 through \\( (3, 7) \\).',
                    workingLatex: 'y - 7 = 4(x - 3) \\Rightarrow y = 4x - 5',
                    explanation: 'Point-gradient form, then simplify. The diagram shows curve \\( C \\) and the tangent \\( y = 4x - 5 \\) touching at \\( P \\).',
                    diagram: {
                        xMin: -0.5, xMax: 5, yMin: -2, yMax: 16,
                        xTicks: [1, 2, 3, 4], yTicks: [3, 6, 9, 12, 15],
                        curves: [
                            { points: sample((x) => x * x - 2 * x + 4, -0.6, 4.5), color: "#1d4ed8", label: "C\\colon y = x^2 - 2x + 4", labelAt: [0.2, 15] },
                            { points: sample((x) => 4 * x - 5, 1.3, 4.5, 2), color: "#dc2626", label: "y = 4x - 5", labelAt: [0.2, 12] },
                        ],
                        points: [{ at: [3, 7], label: "P(3,\\,7)", labelAnchor: "nw", r: 4.5 }],
                    }
                }
            ],
            finalAnswer: '(a) \\( P = (3, 7) \\) \\quad (b) Gradient \\( = 4 \\) \\quad (c) \\( y = 4x - 5 \\).'
        }
    },
    {
        id: 'd1-069',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 69',
        difficulty: 'Challenge',
        questionText: 'The curve \\( C \\) has equation \\( y = x^2 \\). The chord joining the points \\( P(p, p^2) \\) and \\( Q(q, q^2) \\) has gradient \\( m \\), where \\( p \\neq q \\). (a) Show that \\( m = p + q \\). (b) Hence, by letting \\( q \\to p \\), deduce the gradient of the tangent to \\( C \\) at \\( P \\).',
        marks: 5,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Write the gradient of chord PQ.',
                    workingLatex: 'm = \\frac{q^2 - p^2}{q - p}',
                    explanation: 'Apply the gradient formula using the coordinates P(p, p^2) and Q(q, q^2).'
                },
                {
                    stepNumber: 2,
                    description: 'Factorise the numerator.',
                    workingLatex: 'q^2 - p^2 = (q - p)(q + p)',
                    explanation: 'Recognise the difference of two squares factorisation.'
                },
                {
                    stepNumber: 3,
                    description: 'Cancel the common factor.',
                    workingLatex: 'm = \\frac{(q - p)(q + p)}{q - p} = p + q \\checkmark',
                    explanation: 'Since p is not equal to q, we can cancel (q - p) from numerator and denominator, giving m = p + q as required.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Let q tend to p.',
                    workingLatex: '\\lim_{q \\to p}(p + q) = p + p = 2p',
                    explanation: 'As Q approaches P along the curve, the chord becomes the tangent. Replacing q with p gives the tangent gradient 2p. In the diagram, as Q slides along the curve toward P, the chord PQ rotates into the tangent at P, whose gradient is 2p.',
                    diagram: {
                        xMin: -0.6, xMax: 4, yMin: -1.5, yMax: 11,
                        xTicks: [1, 2, 3], yTicks: [2, 4, 6, 8, 10],
                        curves: [{ points: sample((x) => x * x, -0.6, 3.5), color: "#1d4ed8", label: "y = x^2", labelAt: [0.1, 10.5] }],
                        lines: [
                            { from: [0.6, -0.72], to: [3.3, 10.44], color: "#dc2626", label: "\\text{chord } PQ", labelAt: [0.1, 8.5] },
                            { from: [0.2, -0.48], to: [2.2, 4.32], color: "#888", dashed: true, label: "\\text{tangent at } P", labelAt: [0.1, 6] },
                        ],
                        points: [
                            { at: [1.2, 1.44], label: "P(p,\\,p^2)", labelAnchor: "se", r: 4 },
                            { at: [2.7, 7.29], label: "Q(q,\\,q^2)", labelAnchor: "nw", r: 4 },
                        ],
                    }
                }
            ],
            finalAnswer: '(a) Shown \\( m = p + q \\). \\quad (b) Tangent gradient at \\( P \\) is \\( 2p \\).'
        }
    },
    {
        id: 'd1-070',
        topicRef: 'd1',
        topicTitle: 'The Gradient of a Curve 70',
        difficulty: 'Challenge',
        questionText: 'A curve has equation \\( y = x^3 \\). The chord joining the points \\( (a, a^3) \\) and \\( (a + h, (a+h)^3) \\), where \\( h \\neq 0 \\), has gradient \\( m \\). (a) Show that \\( m = 3a^2 + 3ah + h^2 \\). (b) By letting \\( h \\to 0 \\), deduce that the gradient of the tangent to the curve at \\( x = a \\) is \\( 3a^2 \\). (c) Hence find the gradient of the curve at the point where \\( x = -1 \\).',
        marks: 7,
        examStyle: true,
        yearCreated: 2026,
        tags: [],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: '(a) Gradient of chord.',
                    workingLatex: 'm = \\frac{(a+h)^3 - a^3}{(a+h) - a} = \\frac{(a+h)^3 - a^3}{h}',
                    explanation: 'Gradient formula.'
                },
                {
                    stepNumber: 2,
                    description: 'Expand and simplify.',
                    workingLatex: '(a+h)^3 - a^3 = 3a^2 h + 3a h^2 + h^3',
                    explanation: 'Binomial expansion.'
                },
                {
                    stepNumber: 3,
                    description: 'Divide by \\( h \\).',
                    workingLatex: 'm = 3a^2 + 3ah + h^2 \\checkmark',
                    explanation: 'As required.'
                },
                {
                    stepNumber: 4,
                    description: '(b) Let \\( h \\to 0 \\).',
                    workingLatex: '\\lim_{h \\to 0}(3a^2 + 3ah + h^2) = 3a^2',
                    explanation: 'All \\( h \\) terms vanish; chord becomes tangent.'
                },
                {
                    stepNumber: 5,
                    description: '(c) Substitute \\( a = -1 \\).',
                    workingLatex: '3(-1)^2 = 3',
                    explanation: 'Gradient at \\( x = -1 \\) is 3. The diagram shows the curve \\( y = x^3 \\) and the tangent at \\( (-1, -1) \\) with gradient 3.',
                    diagram: {
                        xMin: -2.5, xMax: 2.5, yMin: -9, yMax: 9,
                        xTicks: [-2, -1, 1, 2], yTicks: [-8, -4, 4, 8],
                        curves: [{ points: sample((x) => x * x * x, -2.1, 2.1, 80), color: "#1d4ed8", label: "y = x^3", labelAt: [-2.3, 8] }],
                        lines: [
                            { from: [-2.2, -4.6], to: [1, 5], color: "#dc2626", dashed: true, label: "\\text{tangent},\\ m = 3", labelAt: [-2.3, -5] },
                        ],
                        points: [{ at: [-1, -1], label: "(-1,\\,-1)", labelAnchor: "ne", r: 4.5 }],
                    }
                }
            ],
            finalAnswer: '(a) Shown. \\quad (b) Tangent gradient at \\( x = a \\) is \\( 3a^2 \\). \\quad (c) Gradient at \\( x = -1 \\) is 3.'
        }
    }
];

