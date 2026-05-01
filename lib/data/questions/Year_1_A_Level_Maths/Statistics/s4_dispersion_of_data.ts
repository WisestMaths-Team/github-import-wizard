import { Question } from "@/lib/types";

// Topic: Dispersion — 30 questions with TikZ diagrams
// Covers: range, IQR, quartiles, percentiles, interpercentile ranges,
//         cumulative frequency diagrams, outliers and box plots,
//         variance and standard deviation (raw data, frequency tables, grouped data),
//         sample variance/SD, coding, comparing distributions
// All Foundation difficulty, ids s4-001 to s4-030
// Year 1 A-Level Maths AQA

export const questions: Question[] = [
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 1  (Q1–Q5)  Range, IQR, quartiles
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-001',
        topicRef: 's4',
        topicTitle: 'Dispersion 01',
        difficulty: 'Foundation',
        questionText:
            'Find the range and interquartile range of the following data set:\n\n41, 49, 26, 20, 31, 9, 12, 39, 4, 21, 9, 12, 48, 23, 26, 10',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['range', 'IQR', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Put the data in order.',
                    workingLatex:
                        '4, 9, 9, 10, 12, 12, 20, 21, 23, 26, 26, 31, 39, 41, 48, 49',
                    explanation: 'There are 16 values.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the range.',
                    workingLatex:
                        '\\text{Range} = 49 - 4 = 45',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find Q₁. \\( \\frac{n}{4} = 4 \\), so Q₁ is halfway between the 4th and 5th values.',
                    workingLatex:
                        'Q_1 = \\frac{10 + 12}{2} = 11',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find Q₃. \\( \\frac{3n}{4} = 12 \\), so Q₃ is halfway between the 12th and 13th values.',
                    workingLatex:
                        'Q_3 = \\frac{31 + 39}{2} = 35',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Calculate the IQR.',
                    workingLatex:
                        '\\text{IQR} = Q_3 - Q_1 = 35 - 11 = 24',
                    explanation: '',
                },
            ],
            finalAnswer: 'Range = 45. IQR = 24.',
        },
    },
    {
        id: 's4-002',
        topicRef: 's4',
        topicTitle: 'Dispersion 02',
        difficulty: 'Foundation',
        questionText:
            'The diameters (in miles) of the eight planets in the Solar System are given below:\n\n3032, 7521, 7926, 4222, 88846, 74898, 31763, 30778\n\nFor this data set, calculate:\na) the range\nb) the upper and lower quartiles\nc) the interquartile range.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['range', 'IQR', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Put in order.',
                    workingLatex:
                        '3032, 4222, 7521, 7926, 30778, 31763, 74898, 88846',
                    explanation: '8 values.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Range.',
                    workingLatex:
                        '\\text{Range} = 88846 - 3032 = 85814 \\text{ miles}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Q₁ — \\( \\frac{n}{4} = 2 \\), so Q₁ is halfway between 2nd and 3rd values.',
                    workingLatex:
                        'Q_1 = \\frac{4222 + 7521}{2} = 5871.5',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Q₃ — \\( \\frac{3n}{4} = 6 \\), so Q₃ is halfway between 6th and 7th values.',
                    workingLatex:
                        'Q_3 = \\frac{31763 + 74898}{2} = 53330.5',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): IQR.',
                    workingLatex:
                        '\\text{IQR} = 53330.5 - 5871.5 = 47459 \\text{ miles}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Range = 85 814 miles. b) Q₁ = 5871.5, Q₃ = 53 330.5. c) IQR = 47 459 miles.',
        },
    },
    {
        id: 's4-003',
        topicRef: 's4',
        topicTitle: 'Dispersion 03',
        difficulty: 'Foundation',
        questionText:
            'Find the median and interquartile range of the following data set:\n\n2, 5, 3, 11, 6, 8, 3, 8, 1, 6, 2, 23, 9, 11, 18, 19, 22, 7',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['median', 'IQR', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Put in order.',
                    workingLatex:
                        '1, 2, 2, 3, 3, 5, 6, 6, 7, 8, 8, 9, 11, 11, 18, 19, 22, 23',
                    explanation: '18 values.',
                },
                {
                    stepNumber: 2,
                    description: 'Find the median. \\( \\frac{n}{2} = 9 \\), so median is halfway between 9th and 10th.',
                    workingLatex:
                        '\\text{Median} = \\frac{7 + 8}{2} = 7.5',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find Q₁. \\( \\frac{n}{4} = 4.5 \\), round up to 5th value.',
                    workingLatex: 'Q_1 = 3',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find Q₃. \\( \\frac{3n}{4} = 13.5 \\), round up to 14th value.',
                    workingLatex: 'Q_3 = 11',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'IQR.',
                    workingLatex:
                        '\\text{IQR} = 11 - 3 = 8',
                    explanation: '',
                },
            ],
            finalAnswer: 'Median = 7.5. IQR = 8.',
        },
    },
    {
        id: 's4-004',
        topicRef: 's4',
        topicTitle: 'Dispersion 04',
        difficulty: 'Foundation',
        questionText:
            'The heights of trees in a park are measured to the nearest metre. The results are shown below.\n\n| Height (m) | 0–5 | 6–10 | 11–15 | 16–20 |\n|---|---|---|---|---|\n| Number of trees | 26 | 17 | 11 | 6 |\n\nEstimate the interquartile range of the tree heights using linear interpolation.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['IQR', 'linear interpolation', 'grouped data', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find cumulative frequencies and class boundaries.',
                    workingLatex:
                        '\\begin{array}{c|c|c|c} \\text{Class} & \\text{Boundaries} & f & \\text{CF} \\\\ \\hline 0\\text{–}5 & 0\\text{–}5.5 & 26 & 26 \\\\ 6\\text{–}10 & 5.5\\text{–}10.5 & 17 & 43 \\\\ 11\\text{–}15 & 10.5\\text{–}15.5 & 11 & 54 \\\\ 16\\text{–}20 & 15.5\\text{–}20.5 & 6 & 60 \\end{array}',
                    explanation: 'Total n = 60.',
                },
                {
                    stepNumber: 2,
                    description: 'Find Q₁ by interpolation. CF at Q₁ = n/4 = 15. Q₁ is in the 0–5.5 class.',
                    workingLatex:
                        'Q_1 = 0 + \\frac{15 - 0}{26 - 0} \\times 5.5 = \\frac{15}{26} \\times 5.5 = 3.17 \\text{ m (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Find Q₃ by interpolation. CF at Q₃ = 3n/4 = 45. Q₃ is in the 10.5–15.5 class.',
                    workingLatex:
                        'Q_3 = 10.5 + \\frac{45 - 43}{54 - 43} \\times 5 = 10.5 + \\frac{2}{11} \\times 5 = 10.5 + 0.909 = 11.4 \\text{ m (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Calculate IQR.',
                    workingLatex:
                        '\\text{IQR} = 11.4 - 3.17 = 8.24 \\text{ m (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'IQR ≈ 8.24 m (3 s.f.).',
        },
    },
    {
        id: 's4-005',
        topicRef: 's4',
        topicTitle: 'Dispersion 05',
        difficulty: 'Foundation',
        questionText:
            'A reptile specialist records the mass (\\( m \\), in kilograms) of 150 tortoises. Her results are shown in the table.\n\n| Mass (kg) | \\( 0.2 \\leq m < 0.6 \\) | \\( 0.6 \\leq m < 1.0 \\) | \\( 1.0 \\leq m < 1.4 \\) | \\( 1.4 \\leq m < 1.8 \\) | \\( 1.8 \\leq m < 2.2 \\) |\n|---|---|---|---|---|---|\n| Frequency | 27 | 43 | 35 | 31 | 14 |\n\nEstimate the 10th percentile for this data.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['percentile', 'linear interpolation', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the position of P₁₀.',
                    workingLatex:
                        '\\text{CF at } P_{10} = \\frac{10}{100} \\times 150 = 15',
                    explanation: 'CF: 27, 70, 105, 136, 150. P₁₀ is in the 0.2 ≤ m < 0.6 class (CF goes from 0 to 27).',
                },
                {
                    stepNumber: 2,
                    description: 'Use linear interpolation.',
                    workingLatex:
                        'P_{10} = 0.2 + \\frac{15 - 0}{27 - 0} \\times 0.4 = 0.2 + \\frac{15}{27} \\times 0.4 = 0.2 + 0.222 = 0.422 \\text{ kg (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'P₁₀ ≈ 0.422 kg (3 s.f.).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q6–Q10)  Percentiles, interpercentile ranges, CF diagrams
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-006',
        topicRef: 's4',
        topicTitle: 'Dispersion 06',
        difficulty: 'Foundation',
        questionText:
            'The speeds (in mph) of 18 cars observed in town at 8:45 am are:\n\n14, 16, 15, 18, 15, 17, 16, 16, 18, 16, 15, 13, 15, 14, 16, 17, 18, 15\n\nCalculate:\na) the range and the interquartile range\nb) the 30% to 70% interpercentile range.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['range', 'IQR', 'interpercentile range', 'percentiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Put in order.',
                    workingLatex:
                        '13, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 18, 18, 18',
                    explanation: '18 values.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Range.',
                    workingLatex: '\\text{Range} = 18 - 13 = 5 \\text{ mph}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Q₁: \\( \\frac{n}{4} = 4.5 \\), round up → 5th value = 15. Q₃: \\( \\frac{3n}{4} = 13.5 \\), round up → 14th value = 17.',
                    workingLatex:
                        '\\text{IQR} = 17 - 15 = 2 \\text{ mph}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): P₃₀ position = \\( \\frac{30}{100} \\times 18 = 5.4 \\), round up → 6th value = 15.',
                    workingLatex: 'P_{30} = 15',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'P₇₀ position = \\( \\frac{70}{100} \\times 18 = 12.6 \\), round up → 13th value = 16.',
                    workingLatex:
                        'P_{70} = 16 \\\\ \\text{30\\% to 70\\% interpercentile range} = 16 - 15 = 1 \\text{ mph}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Range = 5, IQR = 2. b) 30%–70% interpercentile range = 1 mph.',
        },
    },
    {
        id: 's4-007',
        topicRef: 's4',
        topicTitle: 'Dispersion 07',
        difficulty: 'Foundation',
        questionText:
            'The lengths (\\( l \\)) of a zoo\'s beetles are measured to the nearest mm. The data is shown below.\n\n| Length (mm) | 0–5 | 6–10 | 11–15 | 16–30 | 31–50 |\n|---|---|---|---|---|---|\n| Number of beetles | 82 | 28 | 44 | 30 | 16 |\n\nEstimate:\na) the interquartile range\nb) the 20% to 80% interpercentile range.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['IQR', 'interpercentile range', 'linear interpolation', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find cumulative frequencies. Boundaries: 0–5.5, 5.5–10.5, 10.5–15.5, 15.5–30.5, 30.5–50.5.',
                    workingLatex:
                        '\\text{CF: } 82, 110, 154, 184, 200 \\qquad n = 200',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Q₁ at CF = 50. In the 0–5.5 class.',
                    workingLatex:
                        'Q_1 = 0 + \\frac{50}{82} \\times 5.5 = 3.35 \\text{ mm}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Q₃ at CF = 150. In the 10.5–15.5 class.',
                    workingLatex:
                        'Q_3 = 10.5 + \\frac{150 - 110}{44} \\times 5 = 10.5 + \\frac{40}{44} \\times 5 = 10.5 + 4.55 = 15.0 \\text{ mm (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'IQR.',
                    workingLatex: '\\text{IQR} = 15.0 - 3.35 = 11.7 \\text{ mm (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Part (b): P₂₀ at CF = 40. In the 0–5.5 class.',
                    workingLatex:
                        'P_{20} = 0 + \\frac{40}{82} \\times 5.5 = 2.68 \\text{ mm}',
                    explanation: '',
                },
                {
                    stepNumber: 6,
                    description: 'P₈₀ at CF = 160. In the 15.5–30.5 class.',
                    workingLatex:
                        'P_{80} = 15.5 + \\frac{160 - 154}{30} \\times 15 = 15.5 + 3.0 = 18.5 \\text{ mm} \\\\ \\text{20\\%–80\\% IPR} = 18.5 - 2.68 = 15.8 \\text{ mm (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) IQR ≈ 11.7 mm. b) 20%–80% interpercentile range ≈ 15.8 mm.',
        },
    },
    {
        id: 's4-008',
        topicRef: 's4',
        topicTitle: 'Dispersion 08',
        difficulty: 'Foundation',
        questionText:
            'The ages (in years) of students at a school are shown in the table.\n\n| Age (years) | 11–12 | 13–14 | 15–16 | 17–18 |\n|---|---|---|---|---|\n| Number of students | 50 | 65 | 58 | 27 |\n\na) Draw a cumulative frequency diagram.\n\nb) Estimate the median and interquartile range from the graph.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'median', 'IQR', 'diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find cumulative frequencies. Upper class boundaries: 13, 15, 17, 19.',
                    workingLatex:
                        '\\text{CF: } 50, 115, 173, 200 \\qquad n = 200',
                    explanation: 'Plot at (11, 0), (13, 50), (15, 115), (17, 173), (19, 200).',
                    tikz: `\\begin{tikzpicture}
\\begin{axis}[
  xlabel={Age (years)},
  ylabel={Cumulative frequency},
  xmin=10, xmax=20,
  ymin=0, ymax=210,
  xtick={10,11,12,13,14,15,16,17,18,19,20},
  ytick={0,50,100,150,200},
  width=10cm, height=7cm,
  grid=both, grid style={gray!30}
]
\\addplot[thick, blue, mark=*, smooth] coordinates {
  (11,0) (13,50) (15,115) (17,173) (19,200)
};
\\draw[dashed, red] (axis cs:10,100) -- (axis cs:14.5,100) -- (axis cs:14.5,0);
\\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Median at CF = 100. By interpolation in 13–15 class.',
                    workingLatex:
                        'Q_2 = 13 + \\frac{100 - 50}{65} \\times 2 = 13 + 1.54 = 14.5 \\text{ years (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Q₁ at CF = 50 → Q₁ ≈ 13. Q₃ at CF = 150 → in 15–17 class.',
                    workingLatex:
                        'Q_3 = 15 + \\frac{150 - 115}{58} \\times 2 = 15 + 1.21 = 16.2 \\text{ years (3 s.f.)} \\\\ \\text{IQR} = 16.2 - 13 = 3.2 \\text{ years}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Median ≈ 14.5 years. IQR ≈ 3.2 years.',
        },
    },
    {
        id: 's4-009',
        topicRef: 's4',
        topicTitle: 'Dispersion 09',
        difficulty: 'Foundation',
        questionText:
            'The distance walked (in km) by 20 people is shown below.\n\n| Distance, \\( d \\) (km) | \\( 0 < d \\leq 2 \\) | \\( 2 < d \\leq 4 \\) | \\( 4 < d \\leq 6 \\) | \\( 6 < d \\leq 8 \\) |\n|---|---|---|---|---|\n| Number of walkers | 1 | 10 | 7 | 2 |\n\na) Draw a cumulative frequency diagram.\n\nb) Use your diagram to estimate the median and IQR.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'median', 'IQR', 'diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Cumulative frequencies.',
                    workingLatex:
                        '\\text{CF: } 1, 11, 18, 20',
                    explanation: 'Plot at (0, 0), (2, 1), (4, 11), (6, 18), (8, 20).',
                    tikz: `\\begin{tikzpicture}
\\begin{axis}[
  xlabel={Distance (km)},
  ylabel={Cumulative frequency},
  xmin=0, xmax=9,
  ymin=0, ymax=22,
  xtick={0,1,2,3,4,5,6,7,8},
  ytick={0,5,10,15,20},
  width=10cm, height=7cm,
  grid=both, grid style={gray!30}
]
\\addplot[thick, blue, mark=*] coordinates {
  (0,0) (2,1) (4,11) (6,18) (8,20)
};
\\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Median at CF = 10. In the 2–4 class.',
                    workingLatex:
                        'Q_2 = 2 + \\frac{10 - 1}{10} \\times 2 = 2 + 1.8 = 3.8 \\text{ km}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Q₁ at CF = 5. In the 2–4 class. Q₃ at CF = 15. In the 4–6 class.',
                    workingLatex:
                        'Q_1 = 2 + \\frac{5 - 1}{10} \\times 2 = 2.8 \\text{ km} \\\\ Q_3 = 4 + \\frac{15 - 11}{7} \\times 2 = 4 + 1.14 = 5.14 \\text{ km} \\\\ \\text{IQR} = 5.14 - 2.8 = 2.34 \\text{ km}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Median ≈ 3.8 km. IQR ≈ 2.3 km.',
        },
    },
    {
        id: 's4-010',
        topicRef: 's4',
        topicTitle: 'Dispersion 10',
        difficulty: 'Foundation',
        questionText:
            'A cumulative frequency diagram shows the monthly earnings (in £) of some sixteen-year-olds. From the diagram:\n  Total number sampled = 80\n  Median ≈ £62\n  Q₁ ≈ £44\n  Q₃ ≈ £86\n\na) Estimate the interquartile range.\n\nb) Estimate how many earned less than £84.\n\nc) Estimate how many earned between £46 and £84.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'IQR', 'reading diagram'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): IQR.',
                    workingLatex:
                        '\\text{IQR} = Q_3 - Q_1 = 86 - 44 = £42',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Read from the diagram at £84.',
                    workingLatex: '',
                    explanation: 'At £84, the cumulative frequency is approximately 57. So about 57 people earned less than £84.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Read at £46 and £84.',
                    workingLatex: '',
                    explanation: 'At £46, CF ≈ 22. At £84, CF ≈ 57. Number between = 57 − 22 = 35 people.',
                },
            ],
            finalAnswer: 'a) IQR = £42. b) About 57. c) About 35 people.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q11–Q15)  Outliers and box plots
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-011',
        topicRef: 's4',
        topicTitle: 'Dispersion 11',
        difficulty: 'Foundation',
        questionText:
            'The lower and upper quartiles of a data set are 19 and 31. Determine whether the data values 4 and 52 are outliers, using the fences \\( Q_1 - 1.5 \\times \\text{IQR} \\) and \\( Q_3 + 1.5 \\times \\text{IQR} \\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'IQR', 'fences'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Calculate IQR.',
                    workingLatex: '\\text{IQR} = 31 - 19 = 12',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate fences.',
                    workingLatex:
                        '\\text{Lower fence} = 19 - 1.5(12) = 19 - 18 = 1 \\\\ \\text{Upper fence} = 31 + 1.5(12) = 31 + 18 = 49',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Check the values.',
                    workingLatex: '',
                    explanation: '4 > 1, so 4 is NOT an outlier. 52 > 49, so 52 IS an outlier.',
                },
            ],
            finalAnswer: '4 is not an outlier. 52 is an outlier.',
        },
    },
    {
        id: 's4-012',
        topicRef: 's4',
        topicTitle: 'Dispersion 12',
        difficulty: 'Foundation',
        questionText:
            'A set of data was analysed and the following values were found:\n  Minimum = 4, Q₁ = 16, Median = 24, Q₃ = 37, Maximum = 49.\n\na) Find the interquartile range.\n\nb) Are there any outliers in this data set?\n\nc) Draw a box plot to illustrate this data set.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'IQR', 'box plot', 'fences'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): IQR.',
                    workingLatex: '\\text{IQR} = 37 - 16 = 21',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Fences.',
                    workingLatex:
                        '\\text{Lower fence} = 16 - 1.5(21) = 16 - 31.5 = -15.5 \\\\ \\text{Upper fence} = 37 + 1.5(21) = 37 + 31.5 = 68.5',
                    explanation: 'Min = 4 > −15.5 ✓. Max = 49 < 68.5 ✓. No outliers.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Draw box plot.',
                    workingLatex: '',
                    explanation: 'Min = 4, Q₁ = 16, Q₂ = 24, Q₃ = 37, Max = 49.',
                    tikz: `\\begin{tikzpicture}
\\draw[->] (0,0) -- (10,0) node[right] {};
\\foreach \\x/\\l in {0.4/0, 1.4/10, 2.4/20, 3.4/30, 4.4/40, 5.4/50} {
  \\draw (\\x, -0.15) -- (\\x, 0.15) node[below=4pt, font=\\small] {\\l};
}
\\draw[thick] (0.8,0.5) -- (0.8,1.5);
\\draw[thick] (2.0,0.5) rectangle (4.1,1.5);
\\draw[thick, red] (2.8,0.5) -- (2.8,1.5);
\\draw[thick] (5.3,0.5) -- (5.3,1.5);
\\draw[thick] (0.8,1) -- (2.0,1);
\\draw[thick] (4.1,1) -- (5.3,1);
\\end{tikzpicture}`,
                },
            ],
            finalAnswer: 'a) IQR = 21. b) No outliers. c) See box plot.',
        },
    },
    {
        id: 's4-013',
        topicRef: 's4',
        topicTitle: 'Dispersion 13',
        difficulty: 'Foundation',
        questionText:
            'The IQs of 21 Year 11 students are shown in the stem and leaf diagram.\n\n| Stem | Leaf |\n|---|---|\n| 9 | 3 |\n| 10 | 5  8  9 |\n| 11 | 0  2  3  5  6  8  9 |\n| 12 | 0  0  1  3  4  6  8 |\n| 13 | 2  4 |\n| 14 | 4 |\n\nKey: 10 | 5 means an IQ of 105\n\nDraw a box plot to represent this data, using the fences \\( Q_1 - 1.5 \\times \\text{IQR} \\) and \\( Q_3 + 1.5 \\times \\text{IQR} \\) to identify outliers.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'box plot', 'stem and leaf', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find quartiles. n = 21. Q₂ is the 11th value.',
                    workingLatex:
                        '\\text{Values in order: } 93, 105, 108, 109, 110, 112, 113, 115, 116, 118, 119, 120, 120, 121, 123, 124, 126, 128, 132, 134, 144',
                    explanation: 'Q₂ = 11th value = 119.',
                },
                {
                    stepNumber: 2,
                    description: 'Q₁ = \\( \\frac{n}{4} = 5.25 \\), round up → 6th value = 112.',
                    workingLatex: 'Q_1 = 112',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Q₃ = \\( \\frac{3n}{4} = 15.75 \\), round up → 16th value = 124.',
                    workingLatex: 'Q_3 = 124',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Find fences. IQR = 124 − 112 = 12.',
                    workingLatex:
                        '\\text{Lower fence} = 112 - 18 = 94 \\\\ \\text{Upper fence} = 124 + 18 = 142',
                    explanation: '93 < 94, so 93 is an outlier. 144 > 142, so 144 is an outlier.',
                },
                {
                    stepNumber: 5,
                    description: 'Draw box plot. Whiskers end at 105 (lowest non-outlier) and 134 (highest non-outlier). Outliers at 93 and 144 marked with ×.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
\\draw[->] (0,0) -- (12,0);
\\foreach \\x/\\l in {0.6/90, 2/100, 3.4/110, 4.8/120, 6.2/130, 7.6/140, 9/150} {
  \\draw (\\x, -0.15) -- (\\x, 0.15) node[below=4pt, font=\\small] {\\l};
}
\\node[font=\\large] at (1.02,1) {\\(\\times\\)};
\\draw[thick] (2.7,0.5) -- (2.7,1.5);
\\draw[thick] (3.68,0.5) rectangle (5.36,1.5);
\\draw[thick, red] (4.76,0.5) -- (4.76,1.5);
\\draw[thick] (7.16,0.5) -- (7.16,1.5);
\\draw[thick] (2.7,1) -- (3.68,1);
\\draw[thick] (5.36,1) -- (7.16,1);
\\node[font=\\large] at (8.16,1) {\\(\\times\\)};
\\end{tikzpicture}`,
                },
            ],
            finalAnswer: 'Q₁ = 112, Q₂ = 119, Q₃ = 124, IQR = 12. Outliers: 93 and 144. See box plot.',
        },
    },
    {
        id: 's4-014',
        topicRef: 's4',
        topicTitle: 'Dispersion 14',
        difficulty: 'Foundation',
        questionText:
            'The numbers of items of junk mail received in six months by people in Pigham are:\n\n14, 17, 20, 20, 32, 33, 35, 35, 42, 46, 48, 52\n\na) Are any of the data values outliers? Use the \\( 1.5 \\times \\text{IQR} \\) rule.\n\nb) Draw a box plot to illustrate the data from Pigham.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'box plot', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Data is already in order. n = 12.',
                    workingLatex:
                        '\\text{Median} = \\frac{\\text{6th + 7th}}{2} = \\frac{33 + 35}{2} = 34',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Q₁ = \\( \\frac{n}{4} = 3 \\), halfway between 3rd and 4th = \\( \\frac{20 + 20}{2} = 20 \\). Q₃ = \\( \\frac{3n}{4} = 9 \\), halfway between 9th and 10th = \\( \\frac{42 + 46}{2} = 44 \\).',
                    workingLatex:
                        'Q_1 = 20, \\quad Q_3 = 44, \\quad \\text{IQR} = 24',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (a): Fences.',
                    workingLatex:
                        '\\text{Lower fence} = 20 - 36 = -16 \\qquad \\text{Upper fence} = 44 + 36 = 80',
                    explanation: 'All values between −16 and 80, so no outliers.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Box plot.',
                    workingLatex: '',
                    explanation: 'Min = 14, Q₁ = 20, Q₂ = 34, Q₃ = 44, Max = 52.',
                    tikz: `\\begin{tikzpicture}
\\draw[->] (0,0) -- (9,0);
\\foreach \\x/\\l in {0.7/10, 1.7/20, 2.7/30, 3.7/40, 4.7/50, 5.7/60} {
  \\draw (\\x, -0.15) -- (\\x, 0.15) node[below=4pt, font=\\small] {\\l};
}
\\draw[thick] (1.1,0.5) -- (1.1,1.5);
\\draw[thick] (1.7,0.5) rectangle (4.1,1.5);
\\draw[thick, red] (3.1,0.5) -- (3.1,1.5);
\\draw[thick] (4.9,0.5) -- (4.9,1.5);
\\draw[thick] (1.1,1) -- (1.7,1);
\\draw[thick] (4.1,1) -- (4.9,1);
\\end{tikzpicture}`,
                },
            ],
            finalAnswer: 'a) No outliers. b) See box plot.',
        },
    },
    {
        id: 's4-015',
        topicRef: 's4',
        topicTitle: 'Dispersion 15',
        difficulty: 'Foundation',
        questionText:
            'The numbers of items of junk mail received in six months by people in Goossea are:\n\n0, 2, 6, 13, 15, 17, 19, 24, 27, 28, 28, 31, 32, 35, 41, 44, 50, 75\n\na) Find the quartiles and determine whether any values are outliers.\n\nb) Draw a box plot, marking any outliers with crosses.\n\nc) Compare the distributions of junk mail in Goossea and Pigham (from Q14).',
        marks: 8,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'box plot', 'comparison', 'quartiles'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'n = 18. Median = average of 9th and 10th = (27+28)/2 = 27.5.',
                    workingLatex: 'Q_2 = 27.5',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Q₁: \\( \\frac{n}{4} = 4.5 \\), round up → 5th value = 15. Q₃: \\( \\frac{3n}{4} = 13.5 \\), round up → 14th value = 35.',
                    workingLatex:
                        'Q_1 = 15, \\quad Q_3 = 35, \\quad \\text{IQR} = 20',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Fences.',
                    workingLatex:
                        '\\text{Lower fence} = 15 - 30 = -15 \\qquad \\text{Upper fence} = 35 + 30 = 65',
                    explanation: '75 > 65, so 75 is an outlier. No low outliers.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): Box plot. Whisker ends at 50 (highest non-outlier). 75 marked with ×.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
\\draw[->] (0,0) -- (10,0);
\\foreach \\x/\\l in {0/0, 1.2/10, 2.4/20, 3.6/30, 4.8/40, 6/50, 7.2/60, 8.4/70, 9.6/80} {
  \\draw (\\x, -0.15) -- (\\x, 0.15) node[below=4pt, font=\\tiny] {\\l};
}
\\draw[thick] (0,0.5) -- (0,1.5);
\\draw[thick] (1.8,0.5) rectangle (4.2,1.5);
\\draw[thick, red] (3.3,0.5) -- (3.3,1.5);
\\draw[thick] (6,0.5) -- (6,1.5);
\\draw[thick] (0,1) -- (1.8,1);
\\draw[thick] (4.2,1) -- (6,1);
\\node[font=\\large] at (9,1) {\\(\\times\\)};
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Compare.',
                    workingLatex: '',
                    explanation:
                        'Location: Pigham has a higher median (34 vs 27.5), so Pigham residents received more junk mail on average. Spread: Pigham IQR = 24 vs Goossea IQR = 20, so junk mail amounts in Pigham are slightly more spread out. Goossea has one outlier (75) which Pigham does not.',
                },
            ],
            finalAnswer: 'a) Q₁=15, Q₂=27.5, Q₃=35, IQR=20. 75 is an outlier. b) See box plot. c) Pigham has higher median (34 vs 27.5) and larger IQR (24 vs 20).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q16–Q22)  Variance and standard deviation
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-016',
        topicRef: 's4',
        topicTitle: 'Dispersion 16',
        difficulty: 'Foundation',
        questionText:
            'Find the variance and standard deviation of the following data set:\n\n2, 3, 4, 4, 6, 11, 12',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'standard deviation', 'raw data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the mean.',
                    workingLatex:
                        '\\bar{x} = \\frac{2+3+4+4+6+11+12}{7} = \\frac{42}{7} = 6',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find \\( \\sum x^2 \\).',
                    workingLatex:
                        '\\sum x^2 = 4 + 9 + 16 + 16 + 36 + 121 + 144 = 346',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Calculate variance.',
                    workingLatex:
                        '\\sigma^2 = \\frac{346}{7} - 6^2 = 49.43 - 36 = 13.4 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Standard deviation.',
                    workingLatex:
                        '\\sigma = \\sqrt{13.43} = 3.66 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Variance = 13.4 (3 s.f.). Standard deviation = 3.66 (3 s.f.).',
        },
    },
    {
        id: 's4-017',
        topicRef: 's4',
        topicTitle: 'Dispersion 17',
        difficulty: 'Foundation',
        questionText:
            'Use the fences \\( \\bar{x} \\pm 2 \\) standard deviations to check the data set in Q16 for outliers.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'standard deviation', 'fences'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the fences using mean = 6, SD = 3.66.',
                    workingLatex:
                        '\\bar{x} + 2\\sigma = 6 + 7.32 = 13.3 \\\\ \\bar{x} - 2\\sigma = 6 - 7.32 = -1.3',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Check data: 2, 3, 4, 4, 6, 11, 12.',
                    workingLatex: '',
                    explanation: 'All values are between −1.3 and 13.3, so there are no outliers.',
                },
            ],
            finalAnswer: 'No outliers (all values within \\( \\bar{x} \\pm 2\\sigma \\)).',
        },
    },
    {
        id: 's4-018',
        topicRef: 's4',
        topicTitle: 'Dispersion 18',
        difficulty: 'Foundation',
        questionText:
            'The attendance figures (\\( x \\)) for Wessex Football Club\'s first six matches of the season were:\n\n756, 755, 764, 778, 754, 759\n\na) Find the mean (\\( \\bar{x} \\)) of these attendance figures.\n\nb) Calculate the sum of the squares, \\( \\sum x^2 \\).\n\nc) Use your answers to find the variance and standard deviation.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'standard deviation', 'raw data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Mean.',
                    workingLatex:
                        '\\sum x = 756+755+764+778+754+759 = 4566 \\\\ \\bar{x} = \\frac{4566}{6} = 761',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\sum x^2 \\).',
                    workingLatex:
                        '\\sum x^2 = 756^2+755^2+764^2+778^2+754^2+759^2 \\\\ = 571536+570025+583696+605284+568516+576081 = 3475138',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Variance.',
                    workingLatex:
                        '\\sigma^2 = \\frac{3475138}{6} - 761^2 = 579189.67 - 579121 = 68.67 \\text{ (2 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Standard deviation.',
                    workingLatex:
                        '\\sigma = \\sqrt{68.67} = 8.29 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Mean = 761. b) \\( \\sum x^2 = 3\\,475\\,138 \\). c) Variance = 68.7, SD = 8.29.',
        },
    },
    {
        id: 's4-019',
        topicRef: 's4',
        topicTitle: 'Dispersion 19',
        difficulty: 'Foundation',
        questionText:
            'The number of TVs (\\( x \\)) in the households of 20 students are shown in the table.\n\n| \\( x \\) | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Frequency, \\( f \\) | 7 | 8 | 4 | 1 |\n\na) Find the mean number of TVs.\n\nb) By adding rows showing \\( x^2 \\) and \\( fx^2 \\) to the table, find \\( \\sum fx^2 \\).\n\nc) Calculate the variance and standard deviation.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'standard deviation', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): \\( \\sum fx \\) and mean.',
                    workingLatex:
                        '\\sum fx = (1)(7)+(2)(8)+(3)(4)+(4)(1) = 7+16+12+4 = 39 \\\\ \\bar{x} = \\frac{39}{20} = 1.95',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): \\( \\sum fx^2 \\).',
                    workingLatex:
                        '\\sum fx^2 = (1)(7)+(4)(8)+(9)(4)+(16)(1) = 7+32+36+16 = 91',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Variance.',
                    workingLatex:
                        '\\sigma^2 = \\frac{91}{20} - 1.95^2 = 4.55 - 3.8025 = 0.7475',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Standard deviation.',
                    workingLatex:
                        '\\sigma = \\sqrt{0.7475} = 0.865 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Mean = 1.95. b) \\( \\sum fx^2 = 91 \\). c) Variance = 0.748, SD = 0.865.',
        },
    },
    {
        id: 's4-020',
        topicRef: 's4',
        topicTitle: 'Dispersion 20',
        difficulty: 'Foundation',
        questionText:
            'A data set is summarised as follows: \\( n = 10 \\), \\( \\sum x = 29 \\) and \\( \\sum x^2 = 95.03 \\).\n\na) Find the standard deviation for this data.\n\nb) The lowest value in the data set is 0.35. Use the fence \\( \\bar{x} - 3 \\) standard deviations to determine whether or not this value is an outlier.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'outliers', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find mean and variance.',
                    workingLatex:
                        '\\bar{x} = \\frac{29}{10} = 2.9 \\\\ \\sigma^2 = \\frac{95.03}{10} - 2.9^2 = 9.503 - 8.41 = 1.093',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a): Standard deviation.',
                    workingLatex:
                        '\\sigma = \\sqrt{1.093} = 1.045 \\text{ (4 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Check lower fence.',
                    workingLatex:
                        '\\bar{x} - 3\\sigma = 2.9 - 3(1.045) = 2.9 - 3.136 = -0.236',
                    explanation: '0.35 > −0.236, so 0.35 is NOT an outlier by this criterion.',
                },
            ],
            finalAnswer: 'a) SD = 1.05 (3 s.f.). b) 0.35 is not an outlier (it is above the lower fence of −0.236).',
        },
    },
    {
        id: 's4-021',
        topicRef: 's4',
        topicTitle: 'Dispersion 21',
        difficulty: 'Foundation',
        questionText:
            'The heights of sunflowers (\\( h \\), in cm) in a garden are recorded in the table.\n\n| Height (cm) | \\( 150 \\leq h < 170 \\) | \\( 170 \\leq h < 190 \\) | \\( 190 \\leq h < 210 \\) | \\( 210 \\leq h < 230 \\) |\n|---|---|---|---|---|\n| Frequency | 5 | 10 | 12 | 3 |\n\nEstimate the variance and standard deviation of the heights.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'standard deviation', 'grouped data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find midpoints, \\( fx \\) and \\( fx^2 \\).',
                    workingLatex:
                        '\\begin{array}{c|c|c|c|c} \\text{Class} & x & f & fx & fx^2 \\\\ \\hline 150\\text{–}170 & 160 & 5 & 800 & 128000 \\\\ 170\\text{–}190 & 180 & 10 & 1800 & 324000 \\\\ 190\\text{–}210 & 200 & 12 & 2400 & 480000 \\\\ 210\\text{–}230 & 220 & 3 & 660 & 145200 \\\\ \\hline & & 30 & 5660 & 1077200 \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Estimate the mean.',
                    workingLatex:
                        '\\bar{x} = \\frac{5660}{30} = 188.\\overline{6}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Variance.',
                    workingLatex:
                        '\\sigma^2 = \\frac{1077200}{30} - \\left(\\frac{5660}{30}\\right)^2 = 35906.\\overline{6} - 35594.\\overline{8} = 311.\\overline{7} = 312 \\text{ cm}^2 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Standard deviation.',
                    workingLatex:
                        '\\sigma = \\sqrt{312} = 17.7 \\text{ cm (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Variance ≈ 312 cm². Standard deviation ≈ 17.7 cm.',
        },
    },
    {
        id: 's4-022',
        topicRef: 's4',
        topicTitle: 'Dispersion 22',
        difficulty: 'Foundation',
        questionText:
            'Find the sample standard deviation of the following data:\n\n15, 33, 31, 24, 30, 28, 14, 19, 22, 18, 39, 27',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sample standard deviation', 'sample variance'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find mean and \\( \\sum x^2 \\).',
                    workingLatex:
                        '\\sum x = 300, \\quad n = 12, \\quad \\bar{x} = 25 \\\\ \\sum x^2 = 225+1089+961+576+900+784+196+361+484+324+1521+729 = 8150',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Sample variance (divide by n − 1).',
                    workingLatex:
                        's^2 = \\frac{\\sum x^2 - n\\bar{x}^2}{n-1} = \\frac{8150 - 12(625)}{11} = \\frac{8150 - 7500}{11} = \\frac{650}{11} = 59.1',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Sample standard deviation.',
                    workingLatex:
                        's = \\sqrt{59.1} = 7.69 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Sample standard deviation = 7.69 (3 s.f.).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q23–Q27)  Coding
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-023',
        topicRef: 's4',
        topicTitle: 'Dispersion 23',
        difficulty: 'Foundation',
        questionText:
            'Find the mean and standard deviation of:\n\n1 862 020, 1 862 040, 1 862 010 and 1 862 050\n\nby using a suitable coding.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'mean', 'standard deviation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'All values start with 1 862 0__, so subtract 1 862 000 and divide by 10.',
                    workingLatex:
                        'y = \\frac{x - 1\\,862\\,000}{10} \\implies y\\text{-values: } 2, 4, 1, 5',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find mean and SD of y.',
                    workingLatex:
                        '\\bar{y} = \\frac{2+4+1+5}{4} = 3 \\\\ \\sum y^2 = 4+16+1+25 = 46 \\\\ \\sigma_y^2 = \\frac{46}{4} - 9 = 2.5 \\\\ \\sigma_y = \\sqrt{2.5} = 1.58 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Decode: \\( \\bar{x} = 10\\bar{y} + 1\\,862\\,000 \\) and \\( \\sigma_x = 10\\sigma_y \\).',
                    workingLatex:
                        '\\bar{x} = 10(3) + 1\\,862\\,000 = 1\\,862\\,030 \\\\ \\sigma_x = 10(1.581) = 15.8 \\text{ (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Mean = 1 862 030. Standard deviation = 15.8.',
        },
    },
    {
        id: 's4-024',
        topicRef: 's4',
        topicTitle: 'Dispersion 24',
        difficulty: 'Foundation',
        questionText:
            'A set of data values (\\( x \\)) are coded using \\( y = \\frac{x - 20\\,000}{15} \\).\n\nThe mean of the coded data (\\( \\bar{y} \\)) is 12.4, and the standard deviation of the coded data is 1.34.\n\nFind the mean and standard deviation of the original data set.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'mean', 'standard deviation', 'decoding'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Decode the mean.',
                    workingLatex:
                        '\\bar{y} = \\frac{\\bar{x} - 20000}{15} \\implies \\bar{x} = 15\\bar{y} + 20000 = 15(12.4) + 20000 = 186 + 20000 = 20186',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Decode the standard deviation.',
                    workingLatex:
                        '\\sigma_y = \\frac{\\sigma_x}{15} \\implies \\sigma_x = 15 \\times 1.34 = 20.1',
                    explanation: '',
                },
            ],
            finalAnswer: 'Mean = 20 186. Standard deviation = 20.1.',
        },
    },
    {
        id: 's4-025',
        topicRef: 's4',
        topicTitle: 'Dispersion 25',
        difficulty: 'Foundation',
        questionText:
            'The widths (in cm) of 10 sunflower seeds in a packet are:\n\n0.61, 0.67, 0.63, 0.66, 0.65, 0.64, 0.68, 0.64, 0.62\n\nWait — that\'s only 9. The 10th seed is 0.62 cm.\n\na) Code the data to form a set of integer values (\\( y \\)) between 1 and 10.\n\nb) Find the mean and standard deviation of the original values (\\( x \\)).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'mean', 'standard deviation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Use \\( y = \\frac{x - 0.60}{0.01} \\) or equivalently \\( y = 100x - 60 \\).',
                    workingLatex:
                        'x: 0.61, 0.67, 0.63, 0.66, 0.65, 0.64, 0.68, 0.64, 0.62, 0.62 \\\\ y: 1, 7, 3, 6, 5, 4, 8, 4, 2, 2',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find mean and SD of y.',
                    workingLatex:
                        '\\sum y = 42, \\quad \\bar{y} = 4.2 \\\\ \\sum y^2 = 1+49+9+36+25+16+64+16+4+4 = 224 \\\\ \\sigma_y^2 = \\frac{224}{10} - 4.2^2 = 22.4 - 17.64 = 4.76 \\\\ \\sigma_y = 2.18 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Decode.',
                    workingLatex:
                        '\\bar{x} = 0.01\\bar{y} + 0.60 = 0.01(4.2) + 0.60 = 0.642 \\text{ cm} \\\\ \\sigma_x = 0.01 \\times 2.18 = 0.0218 \\text{ cm}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) y = 100x − 60 gives integers 1–8. b) Mean = 0.642 cm, SD = 0.0218 cm.',
        },
    },
    {
        id: 's4-026',
        topicRef: 's4',
        topicTitle: 'Dispersion 26',
        difficulty: 'Foundation',
        questionText:
            'The table shows the weight (\\( x \\), in g) of 12 items on a production line.\n\n| Weight (g) | 100–104 | 105–109 | 110–114 | 115–119 |\n|---|---|---|---|---|\n| Frequency | 2 | 6 | 3 | 1 |\n\nUse the coding \\( y = x - 102 \\) to estimate the mean and standard deviation of the items\' weights.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'grouped data', 'mean', 'standard deviation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find midpoints, then code.',
                    workingLatex:
                        '\\begin{array}{c|c|c|c|c|c} \\text{Class} & x & y=x-102 & f & fy & fy^2 \\\\ \\hline 100\\text{–}104 & 102 & 0 & 2 & 0 & 0 \\\\ 105\\text{–}109 & 107 & 5 & 6 & 30 & 150 \\\\ 110\\text{–}114 & 112 & 10 & 3 & 30 & 300 \\\\ 115\\text{–}119 & 117 & 15 & 1 & 15 & 225 \\\\ \\hline & & & 12 & 75 & 675 \\end{array}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Mean and SD of coded data.',
                    workingLatex:
                        '\\bar{y} = \\frac{75}{12} = 6.25 \\\\ \\sigma_y^2 = \\frac{675}{12} - 6.25^2 = 56.25 - 39.0625 = 17.1875 \\\\ \\sigma_y = 4.15 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Decode: \\( y = x - 102 \\), so \\( \\bar{x} = \\bar{y} + 102 \\) and \\( \\sigma_x = \\sigma_y \\).',
                    workingLatex:
                        '\\bar{x} = 6.25 + 102 = 108.25 \\text{ g} \\\\ \\sigma_x = 4.15 \\text{ g}',
                    explanation: 'Adding a constant does not change the standard deviation.',
                },
            ],
            finalAnswer: 'Estimated mean = 108.25 g. Estimated SD = 4.15 g.',
        },
    },
    {
        id: 's4-027',
        topicRef: 's4',
        topicTitle: 'Dispersion 27',
        difficulty: 'Foundation',
        questionText:
            'Twenty pieces of data (\\( x \\)) have been summarised as follows:\n\n\\( \\sum(x + 2) = 7 \\) and \\( \\sum(x + 2)^2 = 80 \\)\n\nCalculate the mean and standard deviation of the data.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'mean', 'standard deviation', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Let \\( y = x + 2 \\). Then \\( \\sum y = 7 \\) and \\( \\sum y^2 = 80 \\).',
                    workingLatex:
                        '\\bar{y} = \\frac{7}{20} = 0.35',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'SD of y.',
                    workingLatex:
                        '\\sigma_y^2 = \\frac{80}{20} - 0.35^2 = 4 - 0.1225 = 3.8775 \\\\ \\sigma_y = 1.97 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Decode: \\( y = x + 2 \\implies x = y - 2 \\).',
                    workingLatex:
                        '\\bar{x} = \\bar{y} - 2 = 0.35 - 2 = -1.65 \\\\ \\sigma_x = \\sigma_y = 1.97',
                    explanation: 'Subtracting a constant shifts the mean but does not change the SD.',
                },
            ],
            finalAnswer: 'Mean = −1.65. Standard deviation = 1.97 (3 s.f.).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q28–Q30)  Comparing distributions
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-028',
        topicRef: 's4',
        topicTitle: 'Dispersion 28',
        difficulty: 'Foundation',
        questionText:
            'The table summarises the marks obtained by a group of students in Maths "Calculator" and "Non-calculator" papers.\n\n| | Calculator paper | Non-calculator paper |\n|---|---|---|\n| Median, Q₂ | 58 | 42 |\n| Interquartile range | 30 | 21 |\n| Mean | 55 | 46 |\n| Standard deviation | 21.2 | 17.8 |\n\nCompare the location and dispersion of the distributions.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing distributions', 'location', 'dispersion'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare location.',
                    workingLatex: '',
                    explanation:
                        'The mean and median are both higher for the Calculator paper (mean 55 vs 46, median 58 vs 42). So scores are generally higher on the Calculator paper.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare dispersion.',
                    workingLatex: '',
                    explanation:
                        'The IQR (30 vs 21) and standard deviation (21.2 vs 17.8) are both higher for the Calculator paper. So scores on the Calculator paper are more spread out than those for the Non-calculator paper.',
                },
            ],
            finalAnswer: 'Location: Calculator paper scores are higher on average. Dispersion: Calculator paper scores are more spread out.',
        },
    },
    {
        id: 's4-029',
        topicRef: 's4',
        topicTitle: 'Dispersion 29',
        difficulty: 'Foundation',
        questionText:
            'Two box plots show the masses (in g) of tomatoes in two harvests.\n\nHarvest 1: Min = 15, Q₁ = 35, Median = 50, Q₃ = 65, Max = 90.\nHarvest 2: Min = 25, Q₁ = 40, Median = 45, Q₃ = 55, Max = 70.\n\nCompare the distributions of the two harvests.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing distributions', 'box plot', 'location', 'dispersion'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare location.',
                    workingLatex: '',
                    explanation:
                        'The median for Harvest 1 (50 g) is higher than Harvest 2 (45 g), so the tomatoes in Harvest 1 were generally heavier.',
                    tikz: `\\begin{tikzpicture}
\\draw[->] (0,0) -- (10,0);
\\foreach \\x/\\l in {0/0, 1/10, 2/20, 3/30, 4/40, 5/50, 6/60, 7/70, 8/80, 9/90} {
  \\draw (\\x,-0.1) -- (\\x,0.1) node[below=3pt, font=\\tiny] {\\l};
}
\\draw[thick] (1.5,1.8) -- (1.5,2.2);
\\draw[thick] (3.5,1.6) rectangle (6.5,2.4);
\\draw[thick,red] (5,1.6) -- (5,2.4);
\\draw[thick] (9,1.8) -- (9,2.2);
\\draw[thick] (1.5,2) -- (3.5,2);
\\draw[thick] (6.5,2) -- (9,2);
\\node[left,font=\\small] at (0.5,2) {H1};
\\draw[thick] (2.5,0.8) -- (2.5,1.2);
\\draw[thick] (4,0.6) rectangle (5.5,1.4);
\\draw[thick,red] (4.5,0.6) -- (4.5,1.4);
\\draw[thick] (7,0.8) -- (7,1.2);
\\draw[thick] (2.5,1) -- (4,1);
\\draw[thick] (5.5,1) -- (7,1);
\\node[left,font=\\small] at (0.5,1) {H2};
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Compare dispersion.',
                    workingLatex:
                        '\\text{IQR}_1 = 65-35 = 30 \\qquad \\text{IQR}_2 = 55-40 = 15 \\\\ \\text{Range}_1 = 90-15 = 75 \\qquad \\text{Range}_2 = 70-25 = 45',
                    explanation:
                        'The IQR and range are both higher for Harvest 1, so the masses of tomatoes in Harvest 1 were more varied than in Harvest 2.',
                },
            ],
            finalAnswer: 'Location: Harvest 1 tomatoes were heavier (median 50 vs 45 g). Dispersion: Harvest 1 had more variation (IQR 30 vs 15).',
        },
    },
    {
        id: 's4-030',
        topicRef: 's4',
        topicTitle: 'Dispersion 30',
        difficulty: 'Foundation',
        questionText:
            'Su and Ellen are collecting data on the durations of eruptions of a volcano. Between them, they have recorded the duration of the last 60 eruptions.\n\n  Su has timed 23 eruptions, with average duration 3.42 minutes and s.d. 1.07 minutes.\n  Ellen has timed 37 eruptions, with average duration 3.92 minutes and s.d. 0.97 minutes.\n\na) Calculate the combined mean duration of all the observed eruptions.\n\nb) Find the variance and standard deviation of the combined set of 60 eruptions.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['combined mean', 'combined variance', 'standard deviation', 'problem solving'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Combined mean.',
                    workingLatex:
                        '\\bar{x} = \\frac{23(3.42) + 37(3.92)}{60} = \\frac{78.66 + 145.04}{60} = \\frac{223.7}{60} = 3.728 \\text{ min (4 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Find \\( \\sum x^2 \\) for each set.',
                    workingLatex:
                        '\\text{Su: } \\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 \\implies \\sum x^2 = n(\\sigma^2 + \\bar{x}^2) = 23(1.07^2 + 3.42^2) = 23(1.1449 + 11.6964) = 23(12.8413) = 295.35',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Ellen.',
                    workingLatex:
                        '\\sum x^2 = 37(0.97^2 + 3.92^2) = 37(0.9409 + 15.3664) = 37(16.3073) = 603.37',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Combined variance.',
                    workingLatex:
                        '\\sum x^2_{\\text{total}} = 295.35 + 603.37 = 898.72 \\\\ \\sigma^2 = \\frac{898.72}{60} - 3.728^2 = 14.979 - 13.898 = 1.081',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Combined standard deviation.',
                    workingLatex:
                        '\\sigma = \\sqrt{1.081} = 1.04 \\text{ min (3 s.f.)}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) Combined mean = 3.73 min (3 s.f.). b) Variance = 1.08, SD = 1.04 min (3 s.f.).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 7  (Q31–Q35)  Range, IQR, quartiles (continued)
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-031',
        topicRef: 's4',
        topicTitle: 'Dispersion 31',
        difficulty: 'Foundation',
        questionText:
            'The noon temperatures (in °C) on 7 consecutive days were:\n\n\\( 14,\; 17,\; 12,\; 19,\; 15,\; 21,\; 16 \\)\n\nFind the range.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['range', 'raw data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify maximum and minimum.',
                    workingLatex: '\\text{Max} = 21, \\quad \\text{Min} = 12',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Compute the range.',
                    workingLatex: '\\text{Range} = 21 - 12 = 9',
                    explanation: 'Range = Max − Min.',
                },
            ],
            finalAnswer: '\\text{Range} = 9\\text{ °C}',
        },
    },
    {
        id: 's4-032',
        topicRef: 's4',
        topicTitle: 'Dispersion 32',
        difficulty: 'Foundation',
        questionText:
            'The heights (in cm) of 11 plants are:\n\n\\( 7,\; 12,\; 8,\; 15,\; 10,\; 9,\; 14,\; 11,\; 13,\; 16,\; 6 \\)\n\nFind the interquartile range.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['IQR', 'quartiles', 'ordering'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '6,\; 7,\; 8,\; 9,\; 10,\; 11,\; 12,\; 13,\; 14,\; 15,\; 16',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Locate Q₁ and Q₃.',
                    workingLatex: 'n = 11 \\Rightarrow Q_1 = \\text{3rd} = 8,\\quad Q_3 = \\text{9th} = 14',
                    explanation: 'Q₁ at position (n+1)/4 = 3, Q₃ at 3(n+1)/4 = 9.',
                },
                {
                    stepNumber: 3,
                    description: 'Compute the IQR.',
                    workingLatex: '\\text{IQR} = Q_3 - Q_1 = 14 - 8 = 6',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{IQR} = 6\\text{ cm}',
        },
    },
    {
        id: 's4-033',
        topicRef: 's4',
        topicTitle: 'Dispersion 33',
        difficulty: 'Foundation',
        questionText:
            'The test marks of 12 students are:\n\n\\( 22,\; 31,\; 18,\; 27,\; 35,\; 24,\; 29,\; 33,\; 20,\; 28,\; 26,\; 32 \\)\n\nFind Q₁, Q₂ (the median) and Q₃.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['quartiles', 'median', 'ordering'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Order the data.',
                    workingLatex: '18,\; 20,\; 22,\; 24,\; 26,\; 27,\; 28,\; 29,\; 31,\; 32,\; 33,\; 35',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find Q₂ (median).',
                    workingLatex: 'Q_2 = \\frac{27 + 28}{2} = 27.5',
                    explanation: 'n = 12, so the median is the mean of the 6th and 7th values.',
                },
                {
                    stepNumber: 3,
                    description: 'Find Q₁ (between 3rd and 4th).',
                    workingLatex: 'Q_1 = \\frac{22 + 24}{2} = 23',
                    explanation: 'Q₁ position = (12+1)/4 = 3.25, so take mean of 3rd and 4th values.',
                },
                {
                    stepNumber: 4,
                    description: 'Find Q₃ (between 9th and 10th).',
                    workingLatex: 'Q_3 = \\frac{31 + 32}{2} = 31.5',
                    explanation: 'Q₃ position = 3(12+1)/4 = 9.75.',
                },
            ],
            finalAnswer: 'Q_1 = 23,\; Q_2 = 27.5,\; Q_3 = 31.5',
        },
    },
    {
        id: 's4-034',
        topicRef: 's4',
        topicTitle: 'Dispersion 34',
        difficulty: 'Foundation',
        questionText:
            'For a set of data, Q₁ = 14.3 and Q₃ = 27.6.\n\na) State the IQR.\n\nb) Find the semi-interquartile range.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['IQR', 'semi-interquartile range'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): IQR.',
                    workingLatex: '\\text{IQR} = Q_3 - Q_1 = 27.6 - 14.3 = 13.3',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Semi-IQR.',
                    workingLatex: '\\text{Semi-IQR} = \\frac{13.3}{2} = 6.65',
                    explanation: 'Half of the IQR.',
                },
            ],
            finalAnswer: 'a) IQR = 13.3. b) Semi-IQR = 6.65.',
        },
    },
    {
        id: 's4-035',
        topicRef: 's4',
        topicTitle: 'Dispersion 35',
        difficulty: 'Foundation',
        questionText:
            'A teacher says: "The range is a better measure of spread than the interquartile range because it uses every value."\n\nExplain whether you agree. Support your answer with a reason.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['range', 'IQR', 'comparison', 'outliers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Evaluate the claim.',
                    workingLatex: '',
                    explanation: 'Disagree. The range only uses the two most extreme values, so a single outlier can make the range very misleading. The IQR uses the middle 50% of the data and is not affected by outliers, so it typically gives a better picture of the spread.',
                },
            ],
            finalAnswer: 'Disagree — the IQR is usually more reliable as it is unaffected by extreme outliers.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 8  (Q36–Q40)  Percentiles and cumulative frequency
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-036',
        topicRef: 's4',
        topicTitle: 'Dispersion 36',
        difficulty: 'Foundation',
        questionText:
            'The ordered reaction times (in seconds) of 20 people are:\n\n\\( 0.18, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, \\)\n\\( 0.29, 0.30, 0.31, 0.32, 0.33, 0.34, 0.36, 0.38, 0.41, 0.45 \\)\n\nEstimate the 90th percentile.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['percentile', 'ordered data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the position.',
                    workingLatex: '\\frac{90}{100} \\times 20 = 18',
                    explanation: 'The 90th percentile is the 18th value for n = 20.',
                },
                {
                    stepNumber: 2,
                    description: 'Read off the 18th ordered value.',
                    workingLatex: 'P_{90} = 0.38 \\text{ s}',
                    explanation: '',
                },
            ],
            finalAnswer: 'P_{90} = 0.38\\text{ s}',
        },
    },
    {
        id: 's4-037',
        topicRef: 's4',
        topicTitle: 'Dispersion 37',
        difficulty: 'Foundation',
        questionText:
            'Using the same data as Q36, find the 20-to-80 interpercentile range.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['interpercentile range', 'percentile'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Position of P₂₀.',
                    workingLatex: '\\frac{20}{100} \\times 20 = 4 \\Rightarrow P_{20} = \\text{4th value} = 0.22',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Position of P₈₀.',
                    workingLatex: '\\frac{80}{100} \\times 20 = 16 \\Rightarrow P_{80} = \\text{16th value} = 0.34',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Interpercentile range.',
                    workingLatex: 'P_{80} - P_{20} = 0.34 - 0.22 = 0.12',
                    explanation: '',
                },
            ],
            finalAnswer: '20\\text{-to-}80 \\text{ IPR} = 0.12\\text{ s}',
        },
    },
    {
        id: 's4-038',
        topicRef: 's4',
        topicTitle: 'Dispersion 38',
        difficulty: 'Foundation',
        questionText:
            'The cumulative frequency table shows the times (in minutes) taken by 80 competitors in a race.\n\n| Time ≤ (min) | 40 | 45 | 50 | 55 | 60 | 65 |\n|---|---|---|---|---|---|---|\n| Cumulative frequency | 4 | 18 | 45 | 66 | 76 | 80 |\n\nEstimate the median.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'median', 'linear interpolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Position of median.',
                    workingLatex: '\\frac{80}{2} = 40 \\Rightarrow \\text{median lies in the class } 45 \\leq t < 50',
                    explanation: 'CF reaches 40 between 45 and 50.',
                },
                {
                    stepNumber: 2,
                    description: 'Linear interpolation.',
                    workingLatex: 'Q_2 \\approx 45 + \\frac{40 - 18}{45 - 18} \\times 5 = 45 + \\frac{22}{27} \\times 5',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'Q_2 \\approx 45 + 4.07 = 49.07 \\approx 49.1 \\text{ min}',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Median} \\approx 49.1\\text{ min}',
        },
    },
    {
        id: 's4-039',
        topicRef: 's4',
        topicTitle: 'Dispersion 39',
        difficulty: 'Foundation',
        questionText:
            'Using the cumulative frequency table from Q38, estimate Q₁.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'quartile', 'linear interpolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Position of Q₁.',
                    workingLatex: '\\frac{80}{4} = 20 \\Rightarrow Q_1 \\text{ lies in } 45 \\leq t < 50',
                    explanation: 'CF passes 20 between 18 and 45.',
                },
                {
                    stepNumber: 2,
                    description: 'Linear interpolation.',
                    workingLatex: 'Q_1 \\approx 45 + \\frac{20 - 18}{45 - 18} \\times 5 = 45 + \\frac{2}{27} \\times 5',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Evaluate.',
                    workingLatex: 'Q_1 \\approx 45 + 0.37 = 45.37 \\approx 45.4 \\text{ min}',
                    explanation: '',
                },
            ],
            finalAnswer: 'Q_1 \\approx 45.4\\text{ min}',
        },
    },
    {
        id: 's4-040',
        topicRef: 's4',
        topicTitle: 'Dispersion 40',
        difficulty: 'Foundation',
        questionText:
            'Using the cumulative frequency table from Q38, estimate the 95th percentile.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['cumulative frequency', 'percentile', 'linear interpolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Position of P₉₅.',
                    workingLatex: '\\frac{95}{100} \\times 80 = 76 \\Rightarrow \\text{lies at the boundary } t = 60',
                    explanation: 'CF = 76 exactly at 60 min.',
                },
                {
                    stepNumber: 2,
                    description: 'State the percentile.',
                    workingLatex: 'P_{95} = 60 \\text{ min}',
                    explanation: '',
                },
            ],
            finalAnswer: 'P_{95} = 60\\text{ min}',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 9  (Q41–Q45)  Outliers and box plots
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-041',
        topicRef: 's4',
        topicTitle: 'Dispersion 41',
        difficulty: 'Foundation',
        questionText:
            'A dataset has Q₁ = 18 and Q₃ = 34.\n\nAn outlier is defined as more than \\(1.5 \\times \\text{IQR}\\) above Q₃ or below Q₁.\n\nDetermine whether the value 60 is an outlier.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'IQR rule', 'fences'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Calculate IQR.',
                    workingLatex: '\\text{IQR} = 34 - 18 = 16',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find the upper fence.',
                    workingLatex: 'Q_3 + 1.5 \\times \\text{IQR} = 34 + 1.5(16) = 34 + 24 = 58',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Compare with 60.',
                    workingLatex: '60 > 58',
                    explanation: '60 lies above the upper fence.',
                },
            ],
            finalAnswer: 'Yes — 60 is an outlier (it exceeds the upper fence of 58).',
        },
    },
    {
        id: 's4-042',
        topicRef: 's4',
        topicTitle: 'Dispersion 42',
        difficulty: 'Foundation',
        questionText:
            'A set of data has mean 52 and standard deviation 6.\n\nUsing the rule that a value is an outlier if it is more than 2 standard deviations from the mean, determine whether 65 is an outlier.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['outliers', 'standard deviation rule'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the upper limit.',
                    workingLatex: '\\bar{x} + 2\\sigma = 52 + 12 = 64',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Compare with 65.',
                    workingLatex: '65 > 64',
                    explanation: '65 is above the upper cut-off.',
                },
            ],
            finalAnswer: 'Yes — 65 is more than 2 SD above the mean, so it is classed as an outlier.',
        },
    },
    {
        id: 's4-043',
        topicRef: 's4',
        topicTitle: 'Dispersion 43',
        difficulty: 'Foundation',
        questionText:
            'The following summary statistics describe a dataset: min = 12, Q₁ = 19, Q₂ = 25, Q₃ = 30, max = 42.\n\nDescribe the five-number summary you would use to draw a box plot.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['box plot', 'five-number summary'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'List the five-number summary.',
                    workingLatex: '\\text{Min}=12,\; Q_1=19,\; Q_2=25,\; Q_3=30,\; \\text{Max}=42',
                    explanation: 'The box plot uses these 5 values: whiskers end at min and max, the box runs from Q₁ to Q₃, and the line inside the box marks the median.',
                },
            ],
            finalAnswer: 'Five-number summary: 12, 19, 25, 30, 42.',
        },
    },
    {
        id: 's4-044',
        topicRef: 's4',
        topicTitle: 'Dispersion 44',
        difficulty: 'Foundation',
        questionText:
            'A box plot shows the following values: min = 3, Q₁ = 7, Q₂ = 11, Q₃ = 14, max = 25.\n\na) State the IQR.\n\nb) Comment on the skewness of the distribution.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['box plot', 'IQR', 'skewness'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): IQR.',
                    workingLatex: '\\text{IQR} = 14 - 7 = 7',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Compare Q₂−Q₁ and Q₃−Q₂.',
                    workingLatex: 'Q_2 - Q_1 = 4,\; Q_3 - Q_2 = 3',
                    explanation: 'The lower half of the box is slightly longer.',
                },
                {
                    stepNumber: 3,
                    description: 'Consider the whiskers.',
                    workingLatex: 'Q_1 - \\min = 4,\; \\max - Q_3 = 11',
                    explanation: 'The upper whisker is much longer than the lower.',
                },
                {
                    stepNumber: 4,
                    description: 'Describe the skew.',
                    workingLatex: '',
                    explanation: 'Overall the distribution is positively (right) skewed because the upper tail is much longer.',
                },
            ],
            finalAnswer: 'a) IQR = 7. b) Positively skewed (long upper whisker).',
        },
    },
    {
        id: 's4-045',
        topicRef: 's4',
        topicTitle: 'Dispersion 45',
        difficulty: 'Foundation',
        questionText:
            'Two box plots compare pulse rates (beats per minute) for students before and after exercise.\n\n**Before exercise:** min = 60, Q₁ = 66, Q₂ = 70, Q₃ = 74, max = 80.\n\n**After exercise:** min = 82, Q₁ = 90, Q₂ = 96, Q₃ = 104, max = 120.\n\nMake two comparisons between the distributions.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['box plot', 'comparing distributions'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare medians (location).',
                    workingLatex: 'Q_2^{\\text{before}} = 70,\; Q_2^{\\text{after}} = 96',
                    explanation: 'Pulse rates are much higher after exercise (median increased by 26 bpm).',
                },
                {
                    stepNumber: 2,
                    description: 'Compare IQRs (spread).',
                    workingLatex: '\\text{IQR}_{\\text{before}} = 8,\; \\text{IQR}_{\\text{after}} = 14',
                    explanation: 'The pulse rates are more varied after exercise (IQR almost doubled).',
                },
            ],
            finalAnswer: 'After exercise: higher median (96 vs 70) and greater spread (IQR 14 vs 8).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 10  (Q46–Q50)  Variance and standard deviation from raw data
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-046',
        topicRef: 's4',
        topicTitle: 'Dispersion 46',
        difficulty: 'Foundation',
        questionText:
            'The ages (in years) of 5 children are:\n\n\\( 4,\; 6,\; 7,\; 9,\; 14 \\)\n\nCalculate the standard deviation.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'raw data', 'formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the mean.',
                    workingLatex: '\\bar{x} = \\frac{4+6+7+9+14}{5} = \\frac{40}{5} = 8',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Compute Σx².',
                    workingLatex: '\\sum x^2 = 16 + 36 + 49 + 81 + 196 = 378',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the variance formula.',
                    workingLatex: '\\sigma^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2 = \\frac{378}{5} - 64 = 75.6 - 64 = 11.6',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Take the square root.',
                    workingLatex: '\\sigma = \\sqrt{11.6} \\approx 3.41',
                    explanation: '',
                },
            ],
            finalAnswer: '\\sigma \\approx 3.41 \\text{ years}',
        },
    },
    {
        id: 's4-047',
        topicRef: 's4',
        topicTitle: 'Dispersion 47',
        difficulty: 'Foundation',
        questionText:
            'Eight values of \\(x\\) have \\(\\sum x = 64\\) and \\(\\sum x^2 = 600\\).\n\nCalculate the variance.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'summary statistics', 'formula'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the mean.',
                    workingLatex: '\\bar{x} = \\frac{64}{8} = 8',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Apply the variance formula.',
                    workingLatex: '\\sigma^2 = \\frac{600}{8} - 8^2 = 75 - 64 = 11',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Variance} = 11',
        },
    },
    {
        id: 's4-048',
        topicRef: 's4',
        topicTitle: 'Dispersion 48',
        difficulty: 'Foundation',
        questionText:
            'A set of 10 values has \\(\\sum x = 60\\) and \\(\\sum x^2 = 430\\).\n\nFind the standard deviation.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the mean.',
                    workingLatex: '\\bar{x} = \\frac{60}{10} = 6',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate variance.',
                    workingLatex: '\\sigma^2 = \\frac{430}{10} - 36 = 43 - 36 = 7',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Take the square root.',
                    workingLatex: '\\sigma = \\sqrt{7} \\approx 2.65',
                    explanation: '',
                },
            ],
            finalAnswer: '\\sigma \\approx 2.65',
        },
    },
    {
        id: 's4-049',
        topicRef: 's4',
        topicTitle: 'Dispersion 49',
        difficulty: 'Foundation',
        questionText:
            'Six numbers have mean 10 and standard deviation 2. A seventh number, 17, is added.\n\na) Find the new mean.\n\nb) Find the new standard deviation. Give your answer to 3 s.f.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'adding a value', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Original Σx and Σx².',
                    workingLatex: '\\sum x = 6 \\times 10 = 60. \\\\ \\sigma^2 = \\frac{\\sum x^2}{6} - 100 = 4 \\Rightarrow \\sum x^2 = 6 \\times 104 = 624.',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'New sums after adding 17.',
                    workingLatex: '\\sum x\' = 60 + 17 = 77. \\\\ \\sum x\'^2 = 624 + 289 = 913.',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (a): New mean.',
                    workingLatex: '\\bar{x}\' = \\frac{77}{7} = 11',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (b): New SD.',
                    workingLatex: '\\sigma\'^2 = \\frac{913}{7} - 11^2 = 130.43 - 121 = 9.43 \\\\ \\sigma\' = \\sqrt{9.43} \\approx 3.07',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) New mean = 11. b) New SD ≈ 3.07.',
        },
    },
    {
        id: 's4-050',
        topicRef: 's4',
        topicTitle: 'Dispersion 50',
        difficulty: 'Foundation',
        questionText:
            'A data set contains five values: 3, 7, \\(a\\), 11, 14. The mean of the five values is 9.\n\na) Find \\(a\\).\n\nb) Calculate the standard deviation.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'mean', 'missing value'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Use the mean.',
                    workingLatex: '\\frac{3 + 7 + a + 11 + 14}{5} = 9 \\Rightarrow 35 + a = 45 \\Rightarrow a = 10',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Σx².',
                    workingLatex: '\\sum x^2 = 9 + 49 + 100 + 121 + 196 = 475',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Variance.',
                    workingLatex: '\\sigma^2 = \\frac{475}{5} - 81 = 95 - 81 = 14',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Standard deviation.',
                    workingLatex: '\\sigma = \\sqrt{14} \\approx 3.74',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) \\(a = 10\\). b) \\(\\sigma \\approx 3.74\\).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 11  (Q51–Q55)  Variance/SD from frequency tables and grouped data
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-051',
        topicRef: 's4',
        topicTitle: 'Dispersion 51',
        difficulty: 'Foundation',
        questionText:
            'The number of goals scored per match by a hockey team is shown.\n\n| Goals (\\(x\\)) | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency (\\(f\\)) | 3 | 6 | 5 | 4 | 2 |\n\nCalculate the variance.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'frequency table', 'discrete data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find Σf, Σfx, Σfx².',
                    workingLatex: '\\sum f = 20,\; \\sum fx = 0+6+10+12+8 = 36,\; \\sum fx^2 = 0+6+20+36+32 = 94',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find the mean.',
                    workingLatex: '\\bar{x} = \\frac{36}{20} = 1.8',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Apply the variance formula.',
                    workingLatex: '\\sigma^2 = \\frac{\\sum fx^2}{\\sum f} - \\bar{x}^2 = \\frac{94}{20} - 3.24 = 4.7 - 3.24 = 1.46',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Variance} = 1.46',
        },
    },
    {
        id: 's4-052',
        topicRef: 's4',
        topicTitle: 'Dispersion 52',
        difficulty: 'Foundation',
        questionText:
            'Using the frequency table from Q51, find the standard deviation to 3 s.f.',
        marks: 1,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'frequency table'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Take the square root of the variance.',
                    workingLatex: '\\sigma = \\sqrt{1.46} \\approx 1.21',
                    explanation: '',
                },
            ],
            finalAnswer: '\\sigma \\approx 1.21',
        },
    },
    {
        id: 's4-053',
        topicRef: 's4',
        topicTitle: 'Dispersion 53',
        difficulty: 'Foundation',
        questionText:
            'The table shows the weekly shopping spend (in £) of 40 shoppers.\n\n| Spend (\\(x\\)) | \\(20 \\leq x < 30\\) | \\(30 \\leq x < 40\\) | \\(40 \\leq x < 50\\) | \\(50 \\leq x < 60\\) |\n|---|---|---|---|---|\n| Frequency | 8 | 14 | 12 | 6 |\n\nEstimate the standard deviation.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['standard deviation', 'grouped data', 'midpoints', 'estimate'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'List midpoints.',
                    workingLatex: '\\text{Midpoints: } 25,\; 35,\; 45,\; 55',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Compute Σfx and Σfx².',
                    workingLatex: '\\sum fx = 8(25) + 14(35) + 12(45) + 6(55) = 200 + 490 + 540 + 330 = 1560 \\\\ \\sum fx^2 = 8(625) + 14(1225) + 12(2025) + 6(3025) = 5000 + 17150 + 24300 + 18150 = 64600',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Mean.',
                    workingLatex: '\\bar{x} = \\frac{1560}{40} = 39',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Variance.',
                    workingLatex: '\\sigma^2 = \\frac{64600}{40} - 39^2 = 1615 - 1521 = 94',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Standard deviation.',
                    workingLatex: '\\sigma = \\sqrt{94} \\approx 9.70',
                    explanation: '',
                },
            ],
            finalAnswer: '\\sigma \\approx £9.70',
        },
    },
    {
        id: 's4-054',
        topicRef: 's4',
        topicTitle: 'Dispersion 54',
        difficulty: 'Foundation',
        questionText:
            'Summary statistics for grouped data: \\(n = 25\\), \\(\\sum fx = 325\\), \\(\\sum fx^2 = 4625\\).\n\nEstimate the variance.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['variance', 'grouped data', 'summary statistics'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Mean.',
                    workingLatex: '\\bar{x} = \\frac{325}{25} = 13',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Variance.',
                    workingLatex: '\\sigma^2 = \\frac{4625}{25} - 13^2 = 185 - 169 = 16',
                    explanation: '',
                },
            ],
            finalAnswer: '\\text{Variance} \\approx 16',
        },
    },
    {
        id: 's4-055',
        topicRef: 's4',
        topicTitle: 'Dispersion 55',
        difficulty: 'Foundation',
        questionText:
            'For the sample 4, 6, 9, 12, 14, calculate the sample standard deviation \\(s\\) using \\(s^2 = \\dfrac{\\sum (x - \\bar{x})^2}{n-1}\\).',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['sample standard deviation', 'n-1 divisor'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the mean.',
                    workingLatex: '\\bar{x} = \\frac{4+6+9+12+14}{5} = \\frac{45}{5} = 9',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Compute squared deviations.',
                    workingLatex: '(4-9)^2 + (6-9)^2 + (9-9)^2 + (12-9)^2 + (14-9)^2 = 25 + 9 + 0 + 9 + 25 = 68',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Divide by n − 1.',
                    workingLatex: 's^2 = \\frac{68}{4} = 17',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Square root.',
                    workingLatex: 's = \\sqrt{17} \\approx 4.12',
                    explanation: '',
                },
            ],
            finalAnswer: 's \\approx 4.12',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 12  (Q56–Q60)  Coding and comparing distributions
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's4-056',
        topicRef: 's4',
        topicTitle: 'Dispersion 56',
        difficulty: 'Foundation',
        questionText:
            'A dataset \\(x\\) has mean 57 and standard deviation 4. Let \\(y = x - 50\\).\n\nState the mean and standard deviation of \\(y\\).',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'linear transformation', 'mean', 'standard deviation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Effect on mean.',
                    workingLatex: '\\bar{y} = \\bar{x} - 50 = 57 - 50 = 7',
                    explanation: 'Subtracting a constant shifts the mean by the same amount.',
                },
                {
                    stepNumber: 2,
                    description: 'Effect on SD.',
                    workingLatex: '\\sigma_y = \\sigma_x = 4',
                    explanation: 'Adding/subtracting a constant does not change the spread.',
                },
            ],
            finalAnswer: '\\bar{y} = 7,\; \\sigma_y = 4',
        },
    },
    {
        id: 's4-057',
        topicRef: 's4',
        topicTitle: 'Dispersion 57',
        difficulty: 'Foundation',
        questionText:
            'A dataset \\(x\\) has mean 205 and standard deviation 15. Let \\(y = \\dfrac{x - 200}{5}\\).\n\nState the mean and standard deviation of \\(y\\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['coding', 'linear transformation', 'scaling'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Find the mean of y.',
                    workingLatex: '\\bar{y} = \\frac{\\bar{x} - 200}{5} = \\frac{205 - 200}{5} = 1',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Find the SD of y.',
                    workingLatex: '\\sigma_y = \\frac{\\sigma_x}{5} = \\frac{15}{5} = 3',
                    explanation: 'Dividing by 5 scales the SD by 1/5.',
                },
            ],
            finalAnswer: '\\bar{y} = 1,\; \\sigma_y = 3',
        },
    },
    {
        id: 's4-058',
        topicRef: 's4',
        topicTitle: 'Dispersion 58',
        difficulty: 'Foundation',
        questionText:
            'The coded data \\(y = \\dfrac{x - 100}{10}\\) has mean \\(\\bar{y} = 2.4\\) and standard deviation \\(\\sigma_y = 1.5\\).\n\nFind the mean and standard deviation of the original data \\(x\\).',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['decoding', 'coding', 'linear transformation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Rearrange for x.',
                    workingLatex: 'x = 10y + 100',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Mean of x.',
                    workingLatex: '\\bar{x} = 10(2.4) + 100 = 124',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'SD of x.',
                    workingLatex: '\\sigma_x = 10 \\times 1.5 = 15',
                    explanation: 'Multiplying by 10 multiplies the SD by 10.',
                },
            ],
            finalAnswer: '\\bar{x} = 124,\; \\sigma_x = 15',
        },
    },
    {
        id: 's4-059',
        topicRef: 's4',
        topicTitle: 'Dispersion 59',
        difficulty: 'Foundation',
        questionText:
            'The times taken by 30 students to solve a puzzle are summarised by:\n\nClass A: mean 18 min, SD 3.2 min.\n\nClass B: mean 22 min, SD 5.1 min.\n\nCompare the distributions of times.',
        marks: 2,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing distributions', 'mean', 'standard deviation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Compare locations.',
                    workingLatex: '',
                    explanation: 'Class A is quicker on average (mean 18 min) than Class B (mean 22 min) — by 4 minutes.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare spreads.',
                    workingLatex: '',
                    explanation: 'Class A times are more consistent (SD 3.2 min) than Class B (SD 5.1 min).',
                },
            ],
            finalAnswer: 'Class A: lower mean time and smaller spread than Class B.',
        },
    },
    {
        id: 's4-060',
        topicRef: 's4',
        topicTitle: 'Dispersion 60',
        difficulty: 'Foundation',
        questionText:
            'Two datasets have the following summary statistics:\n\n| | Dataset A | Dataset B |\n|---|---|---|\n| Median | 42 | 45 |\n| IQR | 9 | 16 |\n| Minimum | 28 | 20 |\n| Maximum | 60 | 72 |\n\na) Make two comparisons between the datasets.\n\nb) Explain why the median and IQR are preferred to the mean and SD when comparing distributions that may contain outliers.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['comparing distributions', 'median', 'IQR', 'outliers'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Compare locations.',
                    workingLatex: '',
                    explanation: 'Dataset B has a slightly higher median (45 vs 42), so values tend to be larger in B.',
                },
                {
                    stepNumber: 2,
                    description: 'Compare spreads.',
                    workingLatex: '',
                    explanation: 'Dataset B has a much larger IQR (16 vs 9), so the middle 50% of values in B are more spread out.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Robustness.',
                    workingLatex: '',
                    explanation: 'The median and IQR use the central values of the data and are not affected by outliers. The mean and standard deviation use every value so can be distorted by a single extreme value.',
                },
            ],
            finalAnswer: 'a) B has higher median and much larger IQR. b) Median and IQR are resistant to outliers.',
        },
    },
];