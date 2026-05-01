import { Question } from "@/lib/types";

// Topic: Dispersion — 30 questions with TikZ diagrams
// Covers: range, IQR, quartiles, percentiles, interpercentile ranges,
//         cumulative frequency diagrams, outliers and box plots,
//         variance and standard deviation (raw data, frequency tables, grouped data),
//         sample variance/SD, coding, comparing distributions
// All Foundation difficulty, ids s4-001 to s4-030
// Year 1 A-Level Maths AQA

export const questions: Question[] = [

    // Topic: Correlation and Regression — 30 questions with TikZ diagrams
    // Covers: scatter diagrams, types of correlation, outliers, correlation vs causation,
    //         explanatory & response variables, linear regression y = a + bx,
    //         interpreting a and b, interpolation & extrapolation, non-linear regression
    // All Foundation difficulty, ids s5-001 to s5-030
    // Year 1 A-Level Maths AQA
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 1  (Q1–Q6)  Scatter diagrams and types of correlation
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's5-001',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 01',
        difficulty: 'Foundation',
        questionText:
            'The table shows the ages (years) and heights (cm) of 8 saplings in a garden centre.\n\n| Age (years) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|\n| Height (cm) | 15 | 28 | 40 | 55 | 63 | 80 | 90 | 105 |\n\na) Plot a scatter diagram for this data.\n\nb) Describe the correlation shown.\n\nc) Interpret the correlation in context.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['scatter diagram', 'positive correlation', 'bivariate data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Plot age on the horizontal axis and height on the vertical axis. Plot the eight points.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
  \\begin{axis}[
    xlabel={Age (years)},
    ylabel={Height (cm)},
    xmin=0, xmax=9,
    ymin=0, ymax=120,
    xtick={0,1,2,3,4,5,6,7,8,9},
    ytick={0,20,40,60,80,100,120},
    width=10cm, height=7cm,
    grid=both, grid style={gray!30},
    only marks, mark=x, mark size=3pt
  ]
  \\addplot coordinates {(1,15)(2,28)(3,40)(4,55)(5,63)(6,80)(7,90)(8,105)};
  \\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Describe the correlation.',
                    workingLatex: '',
                    explanation: 'The points lie close to a straight line with a positive gradient. There is strong positive correlation.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Interpret in context.',
                    workingLatex: '',
                    explanation: 'As the age of the sapling increases, its height tends to increase. Older saplings are generally taller.',
                },
            ],
            finalAnswer: 'a) See scatter diagram. b) Strong positive correlation. c) Older saplings tend to be taller.',
        },
    },
    {
        id: 's5-002',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 02',
        difficulty: 'Foundation',
        questionText:
            'A car dealership records the age (years) and value (£1000s) of 8 second-hand cars.\n\n| Age (years) | 1 | 2 | 3 | 4 | 5 | 7 | 8 | 10 |\n|---|---|---|---|---|---|---|---|---|\n| Value (£1000s) | 18 | 15 | 13 | 11 | 9.5 | 6 | 4.5 | 2 |\n\na) Plot a scatter diagram for this data.\n\nb) Describe the type and strength of the correlation.\n\nc) Interpret your answer to part (b) in context.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['scatter diagram', 'negative correlation', 'bivariate data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Plot age on the x-axis and value on the y-axis.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
  \\begin{axis}[
    xlabel={Age (years)},
    ylabel={Value (\\pounds 1000s)},
    xmin=0, xmax=11,
    ymin=0, ymax=20,
    xtick={0,2,4,6,8,10},
    ytick={0,5,10,15,20},
    width=10cm, height=7cm,
    grid=both, grid style={gray!30},
    only marks, mark=x, mark size=3pt
  ]
  \\addplot coordinates {(1,18)(2,15)(3,13)(4,11)(5,9.5)(7,6)(8,4.5)(10,2)};
  \\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Describe the correlation.',
                    workingLatex: '',
                    explanation: 'The points lie close to a straight line with a negative gradient. There is strong negative correlation.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Interpret in context.',
                    workingLatex: '',
                    explanation: 'As the age of a car increases, its value tends to decrease. Older cars are generally worth less.',
                },
            ],
            finalAnswer: 'a) See scatter diagram. b) Strong negative correlation. c) Older cars tend to have a lower value.',
        },
    },
    {
        id: 's5-003',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 03',
        difficulty: 'Foundation',
        questionText:
            'A teacher records the shoe sizes and maths test scores of 10 students.\n\n| Shoe size | 5 | 7 | 4 | 9 | 6 | 8 | 10 | 3 | 6 | 7 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| Test score | 64 | 58 | 71 | 45 | 80 | 52 | 60 | 73 | 55 | 68 |\n\na) Plot a scatter diagram for this data.\n\nb) Describe the correlation.\n\nc) Comment on whether there is likely to be a causal relationship between shoe size and test score.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['scatter diagram', 'no correlation', 'causation', 'bivariate data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Plot shoe size on the x-axis and test score on the y-axis.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
  \\begin{axis}[
    xlabel={Shoe size},
    ylabel={Test score},
    xmin=2, xmax=11,
    ymin=40, ymax=85,
    xtick={2,3,4,5,6,7,8,9,10,11},
    ytick={40,50,60,70,80},
    width=10cm, height=7cm,
    grid=both, grid style={gray!30},
    only marks, mark=x, mark size=3pt
  ]
  \\addplot coordinates {(5,64)(7,58)(4,71)(9,45)(6,80)(8,52)(10,60)(3,73)(6,55)(7,68)};
  \\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Describe the correlation.',
                    workingLatex: '',
                    explanation: 'The points are scattered randomly with no clear pattern. There is no correlation between shoe size and test score.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Comment on causation.',
                    workingLatex: '',
                    explanation: 'There is no reason to believe that shoe size causes a change in test score or vice versa. Shoe size and maths ability are not related — there is no causal relationship.',
                },
            ],
            finalAnswer: 'a) See scatter diagram. b) No correlation. c) There is no causal relationship — shoe size does not affect maths ability.',
        },
    },
    {
        id: 's5-004',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 04',
        difficulty: 'Foundation',
        questionText:
            '8 runners participating in a 1 km race were asked how many hours of exercise they do per week. Their responses and their race times in minutes are shown below.\n\n| Exercise (hours) | 17 | 15 | 5 | 12 | 2 | 2 | 10 | 7.5 |\n|---|---|---|---|---|---|---|---|---|\n| Race time (min) | 6.7 | 6.8 | 9.5 | 6.1 | 11.5 | 6.3 | 8 | 9.9 |\n\na) Plot a scatter diagram to show this data.\n\nb) Describe any correlation shown, and identify any results that appear to be outliers.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['scatter diagram', 'negative correlation', 'outlier', 'bivariate data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Plot exercise hours on the x-axis and race time on the y-axis.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
  \\begin{axis}[
    xlabel={Exercise (hours)},
    ylabel={Race time (min)},
    xmin=0, xmax=18,
    ymin=5, ymax=13,
    xtick={0,2,4,6,8,10,12,14,16,18},
    ytick={5,6,7,8,9,10,11,12,13},
    width=10cm, height=7cm,
    grid=both, grid style={gray!30},
    only marks, mark=x, mark size=3pt
  ]
  \\addplot coordinates {(17,6.7)(15,6.8)(5,9.5)(12,6.1)(2,11.5)(2,6.3)(10,8)(7.5,9.9)};
  \\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Describe the correlation.',
                    workingLatex: '',
                    explanation: 'There is a moderate negative correlation — runners who exercise more tend to have lower (faster) race times.',
                },
                {
                    stepNumber: 3,
                    description: 'Identify any outliers.',
                    workingLatex: '',
                    explanation: 'The point (2, 6.3) appears to be an outlier. This runner does very little exercise (2 hours) yet has a fast race time (6.3 min), which does not fit the overall pattern. This could be a measurement error, or this runner may have natural ability or do other forms of training.',
                },
            ],
            finalAnswer: 'a) See scatter diagram. b) Moderate negative correlation. The point (2, 6.3) is an outlier — very little exercise but a fast time.',
        },
    },
    {
        id: 's5-005',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 05',
        difficulty: 'Foundation',
        questionText:
            'For each of the following pairs of scatter diagrams descriptions, state whether the correlation is positive, negative, or zero, and whether it is strong or weak.\n\na) As temperature increases, the number of cold drinks sold increases. The points lie very close to a straight line.\n\nb) As the distance from a city centre increases, house prices decrease. The points are loosely scattered around a downward trend.\n\nc) The amount of rainfall in a month and the number of letters in a person\'s surname show no pattern when plotted.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['correlation', 'positive', 'negative', 'strong', 'weak'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Temperature and cold drinks.',
                    workingLatex: '',
                    explanation: 'The value of y increases as x increases, and the points are close to a line. This is strong positive correlation.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Distance and house prices.',
                    workingLatex: '',
                    explanation: 'The value of y decreases as x increases, but the points are loosely scattered. This is weak negative correlation.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Rainfall and surname length.',
                    workingLatex: '',
                    explanation: 'There is no pattern, so there is no correlation (zero correlation).',
                },
            ],
            finalAnswer: 'a) Strong positive. b) Weak negative. c) No correlation.',
        },
    },
    {
        id: 's5-006',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 06',
        difficulty: 'Foundation',
        questionText:
            'Zoe lives near a beach. She records the number of seagulls and the number of people flying kites she sees each day, over the course of one month. She finds negative correlation in the data, and concludes that seagulls must be scared off by kites.\n\nExplain whether the data supports this conclusion.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['correlation', 'causation', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Address the key principle: correlation does not imply causation.',
                    workingLatex: '',
                    explanation: 'Although there is negative correlation between the number of seagulls and the number of kite-flyers, this does not mean that kites cause seagulls to leave.',
                },
                {
                    stepNumber: 2,
                    description: 'Suggest a confounding variable.',
                    workingLatex: '',
                    explanation: 'Both variables could be affected by a third factor — for example, weather. On windy days there may be more kite-flyers but fewer seagulls (because seagulls shelter in bad weather). The correlation could be explained by wind speed rather than a direct causal link.',
                },
                {
                    stepNumber: 3,
                    description: 'Conclude.',
                    workingLatex: '',
                    explanation: 'The data does not support Zoe\'s conclusion. Correlation does not imply causation — a lurking variable such as weather could explain the relationship.',
                },
            ],
            finalAnswer: 'The conclusion is not supported. Correlation does not imply causation. A third variable (e.g. weather/wind) could explain the negative correlation.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 2  (Q7–Q12)  Explanatory & response variables, linear regression basics
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's5-007',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 07',
        difficulty: 'Foundation',
        questionText:
            'For each pair of variables, state which is the explanatory variable and which is the response variable.\n\na) Time spent practising the piano in a week, and the number of mistakes made in a test at the end of the week.\n\nb) Age of a second-hand car, and value of the car.\n\nc) Number of phone calls made in a town in a week, and population of the town.\n\nd) Growth rate of a plant in an experiment, and amount of sunlight falling on the plant.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['explanatory variable', 'response variable', 'regression'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Piano practice and mistakes.',
                    workingLatex: '',
                    explanation: 'The amount of practice affects the number of mistakes. Explanatory: time spent practising. Response: number of mistakes.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Car age and value.',
                    workingLatex: '',
                    explanation: 'The age of the car affects its value (not the other way round). Explanatory: age. Response: value.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Phone calls and population.',
                    workingLatex: '',
                    explanation: 'The population of the town affects how many calls are made. Explanatory: population. Response: number of phone calls.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): Growth rate and sunlight.',
                    workingLatex: '',
                    explanation: 'The amount of sunlight affects the growth rate of the plant. Explanatory: amount of sunlight. Response: growth rate.',
                },
            ],
            finalAnswer: 'a) Explanatory: practice time, Response: mistakes. b) Explanatory: age, Response: value. c) Explanatory: population, Response: calls. d) Explanatory: sunlight, Response: growth rate.',
        },
    },
    {
        id: 's5-008',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 08',
        difficulty: 'Foundation',
        questionText:
            'A scientist is investigating the relationship between the amount of fertiliser (\\( x \\) grams) applied to a tomato plant and the eventual yield (\\( y \\) kg). She collects data from 10 plants.\n\na) Which variable is the explanatory variable? Explain your answer.\n\nb) Which variable is the response variable?\n\nc) The scientist calculates the regression line of \\( y \\) on \\( x \\) to be \\( y = 1.2 + 0.03x \\). Interpret the values of 1.2 and 0.03 in context.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['explanatory variable', 'response variable', 'regression line', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Identify the explanatory variable.',
                    workingLatex: '',
                    explanation: 'The scientist can directly control the amount of fertiliser given to each plant, so the amount of fertiliser (\\( x \\)) is the explanatory variable.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Identify the response variable.',
                    workingLatex: '',
                    explanation: 'The yield (\\( y \\)) is what the scientist measures in response to the fertiliser. It is the response variable.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Interpret the constant \\( a = 1.2 \\).',
                    workingLatex: '',
                    explanation: 'When \\( x = 0 \\) (no fertiliser), the predicted yield is 1.2 kg. This is the baseline yield of the plant without any fertiliser.',
                },
                {
                    stepNumber: 4,
                    description: 'Interpret the gradient \\( b = 0.03 \\).',
                    workingLatex: '',
                    explanation: 'For every extra gram of fertiliser applied, the yield is predicted to increase by 0.03 kg (30 g).',
                },
            ],
            finalAnswer: 'a) Fertiliser amount (\\( x \\)) — the scientist controls it. b) Yield (\\( y \\)). c) 1.2 = predicted yield with no fertiliser. 0.03 = each extra gram of fertiliser increases yield by 0.03 kg.',
        },
    },
    {
        id: 's5-009',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 09',
        difficulty: 'Foundation',
        questionText:
            'A company is collecting data on the fuel efficiency of a type of lorry. They compare the load on the lorry, \\( x \\) (in tonnes), with the fuel efficiency, \\( y \\) (in km per litre), and calculate the regression line of \\( y \\) on \\( x \\) to be:\n\n\\( y = 12.5 - 0.8x \\)\n\na) Interpret the value of 12.5 in this context.\n\nb) Interpret the value of −0.8 in this context.\n\nc) Predict the fuel efficiency when the lorry carries a load of 5 tonnes.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpretation', 'gradient', 'intercept', 'prediction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Interpret \\( a = 12.5 \\).',
                    workingLatex: '',
                    explanation: 'When \\( x = 0 \\) (the lorry carries no load), the predicted fuel efficiency is 12.5 km per litre. This is the fuel efficiency of the empty lorry.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Interpret \\( b = -0.8 \\).',
                    workingLatex: '',
                    explanation: 'For every extra tonne of load carried, the fuel efficiency is predicted to decrease by 0.8 km per litre.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( x = 5 \\).',
                    workingLatex: 'y = 12.5 - 0.8 \\times 5 = 12.5 - 4.0 = 8.5 \\text{ km per litre}',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) 12.5 km/l is the fuel efficiency with no load. b) Each extra tonne reduces efficiency by 0.8 km/l. c) 8.5 km per litre.',
        },
    },
    {
        id: 's5-010',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 10',
        difficulty: 'Foundation',
        questionText:
            'The equation of the regression line of \\( y \\) on \\( x \\) is \\( y = 1.67 + 0.107x \\).\n\na) Which variable is the response variable?\n\nb) Find the predicted value of \\( y \\) corresponding to:\n  (i) \\( x = 5 \\)\n  (ii) \\( x = 20 \\)',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'prediction', 'substitution'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Identify the response variable.',
                    workingLatex: '',
                    explanation: 'The regression line is "of \\( y \\) on \\( x \\)", which means \\( x \\) is the explanatory variable and \\( y \\) is the response variable.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b)(i): Substitute \\( x = 5 \\).',
                    workingLatex: 'y = 1.67 + 0.107 \\times 5 = 1.67 + 0.535 = 2.205 = 2.21 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b)(ii): Substitute \\( x = 20 \\).',
                    workingLatex: 'y = 1.67 + 0.107 \\times 20 = 1.67 + 2.14 = 3.81',
                    explanation: '',
                },
            ],
            finalAnswer: 'a) \\( y \\) is the response variable. b) (i) \\( y = 2.21 \\) (3 s.f.). (ii) \\( y = 3.81 \\).',
        },
    },
    {
        id: 's5-011',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 11',
        difficulty: 'Foundation',
        questionText:
            'A researcher measures the latitude (\\( x \\) degrees north) of 12 UK towns and the average number of days per year when the temperature exceeds 25°C (\\( y \\) days). She calculates the regression line:\n\n\\( y = 98.4 - 1.6x \\)\n\na) State the explanatory variable and the response variable.\n\nb) Interpret the value of −1.6 in context.\n\nc) The latitudes of the towns in the data ranged from 50° to 57°. Predict the number of hot days for a town at latitude 53°. Comment on the reliability of your answer.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpretation', 'interpolation', 'reliability'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Identify variables.',
                    workingLatex: '',
                    explanation: 'Latitude (\\( x \\)) is the explanatory variable — it is the geographical property that affects temperature. Number of hot days (\\( y \\)) is the response variable.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Interpret \\( b = -1.6 \\).',
                    workingLatex: '',
                    explanation: 'For every 1° increase in latitude (i.e. moving further north), the number of days above 25°C is predicted to decrease by 1.6 days.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Predict for \\( x = 53 \\).',
                    workingLatex: 'y = 98.4 - 1.6 \\times 53 = 98.4 - 84.8 = 13.6 \\text{ days}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Comment on reliability.',
                    workingLatex: '',
                    explanation: '\\( x = 53 \\) lies within the range of the original data (50 to 57), so this is interpolation. The prediction should be fairly reliable, provided the linear relationship holds across this range.',
                },
            ],
            finalAnswer: 'a) Explanatory: latitude; Response: number of hot days. b) Each 1° further north reduces hot days by 1.6. c) 13.6 days — reliable as this is interpolation.',
        },
    },
    {
        id: 's5-012',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 12',
        difficulty: 'Foundation',
        questionText:
            'The table shows the average length (\\( x \\) cm) and average circumference (\\( y \\) cm) of eggs from several species of bird.\n\n| Length \\( x \\) | 5.9 | 2.1 | 3.4 | 5.1 | 8.9 | 6.6 | 7.2 | 4.5 | 6.8 |\n|---|---|---|---|---|---|---|---|---|---|\n| Circumference \\( y \\) | 19.6 | 6.3 | 7.1 | 9.9 | 3.5 | 21 | 18.7 | 8.3 | 18.4 |\n\na) Plot a scatter diagram to show this data.\n\nb) Describe any trends in the data.\n\nc) One of the measurements was recorded incorrectly. Use your scatter diagram to determine which.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['scatter diagram', 'outlier', 'measurement error', 'bivariate data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Plot length on the x-axis and circumference on the y-axis.',
                    workingLatex: '',
                    explanation: '',
                    tikz: `\\begin{tikzpicture}
  \\begin{axis}[
    xlabel={Length (cm)},
    ylabel={Circumference (cm)},
    xmin=0, xmax=10,
    ymin=0, ymax=25,
    xtick={0,2,4,6,8,10},
    ytick={0,5,10,15,20,25},
    width=10cm, height=7cm,
    grid=both, grid style={gray!30},
    only marks, mark=x, mark size=3pt
  ]
  \\addplot coordinates {(5.9,19.6)(2.1,6.3)(3.4,7.1)(5.1,9.9)(8.9,3.5)(6.6,21)(7.2,18.7)(4.5,8.3)(6.8,18.4)};
  \\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Describe the trend.',
                    workingLatex: '',
                    explanation: 'Most of the points suggest a positive correlation — as egg length increases, the circumference tends to increase. However, one point clearly does not fit this pattern.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Identify the incorrect measurement.',
                    workingLatex: '',
                    explanation: 'The point (8.9, 3.5) is the outlier. An egg with a length of 8.9 cm would be expected to have a large circumference, but 3.5 cm is far too small. This measurement was likely recorded incorrectly — perhaps the values were swapped, and it should be (3.5, 8.9).',
                },
            ],
            finalAnswer: 'a) See scatter diagram. b) Positive correlation overall. c) The point (8.9, 3.5) is incorrect — likely the length and circumference were swapped.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 3  (Q13–Q18)  Using regression lines — interpolation and extrapolation
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's5-013',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 13',
        difficulty: 'Foundation',
        questionText:
            'The length of a spring (\\( y \\), in cm) when loaded with different masses (\\( m \\), in grams) has the regression line of \\( y \\) on \\( m \\):\n\n\\( y = 7.8 + 0.01043m \\)\n\nThe smallest value of \\( m \\) used was 200 g and the largest was 500 g.\n\na) Estimate the length of the spring when loaded with a mass of:\n  (i) 370 g\n  (ii) 670 g\n\nb) Comment on the reliability of the estimates in part (a).',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpolation', 'extrapolation', 'reliability', 'prediction'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a)(i): Substitute \\( m = 370 \\).',
                    workingLatex: 'y = 7.8 + 0.01043 \\times 370 = 7.8 + 3.859 = 11.7 \\text{ cm (1 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (a)(ii): Substitute \\( m = 670 \\).',
                    workingLatex: 'y = 7.8 + 0.01043 \\times 670 = 7.8 + 6.988 = 14.8 \\text{ cm (1 d.p.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Comment on reliability of (i).',
                    workingLatex: '',
                    explanation: '\\( m = 370 \\) lies within the range of the original data (200 to 500), so this is interpolation. The estimate should be fairly reliable.',
                },
                {
                    stepNumber: 4,
                    description: 'Comment on reliability of (ii).',
                    workingLatex: '',
                    explanation: '\\( m = 670 \\) lies outside the range of the original data, so this is extrapolation. The regression line may not be valid for such heavy loads (the spring could deform non-linearly), so this estimate should be treated with caution.',
                },
            ],
            finalAnswer: 'a) (i) 11.7 cm. (ii) 14.8 cm. b) (i) Reliable — interpolation within 200–500 g. (ii) Unreliable — extrapolation beyond the data range.',
        },
    },
    {
        id: 's5-014',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 14',
        difficulty: 'Foundation',
        questionText:
            'A volunteer counted the number of spots (\\( s \\)) on an area of skin after \\( d \\) days of acne treatment, where \\( d \\) had values 2, 6, 10, 14, 18 and 22. The equation of the regression line of \\( s \\) on \\( d \\) is:\n\n\\( s = 58.8 - 2.47d \\)\n\na) Estimate the number of spots the volunteer had on day 7. Comment on the reliability of your answer.\n\nb) She forgot to count how many spots she had before starting to use the product (day 0). Estimate this number. Comment on your answer.\n\nc) The volunteer claims that the regression equation must be wrong, because it predicts that after 30 days she should have a negative number of spots. Comment on this claim.',
        marks: 7,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpolation', 'extrapolation', 'reliability', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( d = 7 \\).',
                    workingLatex: 's = 58.8 - 2.47 \\times 7 = 58.8 - 17.29 = 41.51 \\approx 42 \\text{ spots}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Comment on reliability.',
                    workingLatex: '',
                    explanation: '\\( d = 7 \\) lies within the range of the data (2 to 22), so this is interpolation. The estimate is likely to be reliable.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Substitute \\( d = 0 \\).',
                    workingLatex: 's = 58.8 - 2.47 \\times 0 = 58.8 \\approx 59 \\text{ spots}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Comment on reliability of part (b).',
                    workingLatex: '',
                    explanation: '\\( d = 0 \\) is outside the data range (the smallest value of \\( d \\) was 2), so this is extrapolation. However, it is only just outside the range, so the estimate may still be reasonable — but it should be treated with some caution.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (c): Comment on the negative spots claim.',
                    workingLatex: 's = 58.8 - 2.47 \\times 30 = 58.8 - 74.1 = -15.3',
                    explanation: 'The volunteer is correct that the equation gives a negative answer, but this does not mean the equation is wrong. The regression line is only valid within (or close to) the range of the original data (2 to 22 days). Extrapolating to \\( d = 30 \\) is unreliable because the linear relationship is unlikely to continue beyond the data — the number of spots cannot go below zero, so the model breaks down.',
                },
            ],
            finalAnswer: 'a) ≈ 42 spots — reliable (interpolation). b) ≈ 59 spots — slight extrapolation, treat with caution. c) The equation is valid only within the data range; extrapolating to day 30 gives a meaningless negative value.',
        },
    },
    {
        id: 's5-015',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 15',
        difficulty: 'Foundation',
        questionText:
            'A student investigates the relationship between the number of hours of revision (\\( x \\)) and the percentage score (\\( y \\)) in a mock exam. She collects data from 12 classmates, with \\( x \\) ranging from 3 to 15 hours.\n\nThe regression line of \\( y \\) on \\( x \\) is \\( y = 32 + 3.8x \\).\n\na) Predict the score for a student who revises for 10 hours.\n\nb) Predict the score for a student who revises for 25 hours.\n\nc) Comment on the reliability of each prediction, giving a reason.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpolation', 'extrapolation', 'prediction', 'reliability'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 10 \\).',
                    workingLatex: 'y = 32 + 3.8 \\times 10 = 32 + 38 = 70\\%',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Substitute \\( x = 25 \\).',
                    workingLatex: 'y = 32 + 3.8 \\times 25 = 32 + 95 = 127\\%',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Reliability of (a).',
                    workingLatex: '',
                    explanation: '\\( x = 10 \\) is within the data range (3 to 15), so this is interpolation. The prediction of 70% is likely to be reliable.',
                },
                {
                    stepNumber: 4,
                    description: 'Reliability of (b).',
                    workingLatex: '',
                    explanation: '\\( x = 25 \\) is well outside the data range, so this is extrapolation. The prediction of 127% is clearly unreliable — you cannot score more than 100% on a test. The linear model breaks down outside the observed range.',
                },
            ],
            finalAnswer: 'a) 70%. b) 127%. c) (a) is reliable — interpolation. (b) is unreliable — extrapolation gives an impossible percentage above 100%.',
        },
    },
    {
        id: 's5-016',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 16',
        difficulty: 'Foundation',
        questionText:
            'A farmer records the amount of rainfall \\( x \\) (mm) and the yield \\( y \\) (tonnes) from his wheat field over 8 years. He finds the regression line of \\( y \\) on \\( x \\) is:\n\n\\( y = 0.5 + 0.012x \\)\n\nThe rainfall values in his data ranged from 400 mm to 900 mm.\n\na) Predict the yield when rainfall is 600 mm.\n\nb) Predict the yield when rainfall is 1500 mm.\n\nc) State, with a reason, which prediction is more reliable.\n\nd) Give one reason why rainfall alone may not be a good predictor of yield.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpolation', 'extrapolation', 'prediction', 'limitations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 600 \\).',
                    workingLatex: 'y = 0.5 + 0.012 \\times 600 = 0.5 + 7.2 = 7.7 \\text{ tonnes}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Substitute \\( x = 1500 \\).',
                    workingLatex: 'y = 0.5 + 0.012 \\times 1500 = 0.5 + 18 = 18.5 \\text{ tonnes}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Compare reliability.',
                    workingLatex: '',
                    explanation: 'The prediction in part (a) is more reliable because \\( x = 600 \\) lies within the data range (400 to 900 mm), so it is interpolation. The prediction in part (b) uses \\( x = 1500 \\), which is well outside the data range, so it is extrapolation and unreliable.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): Limitation.',
                    workingLatex: '',
                    explanation: 'Other factors affect crop yield — such as temperature, soil quality, amount of sunlight, use of fertiliser, and pest levels. Rainfall alone is unlikely to capture all of the variation in yield.',
                },
            ],
            finalAnswer: 'a) 7.7 tonnes. b) 18.5 tonnes. c) (a) is more reliable — interpolation within 400–900 mm. d) Other factors (temperature, soil, sunlight, fertiliser) also affect yield.',
        },
    },
    {
        id: 's5-017',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 17',
        difficulty: 'Foundation',
        questionText:
            'The heights (\\( h \\) cm) and weights (\\( w \\) kg) of 15 adults were recorded. The data gave:\n\n\\( \\bar{h} = 170 \\), \\( \\bar{w} = 72 \\)\n\nThe regression line of \\( w \\) on \\( h \\) passes through \\( (\\bar{h}, \\bar{w}) \\).\n\nThe equation of the regression line is \\( w = -58 + 0.765h \\).\n\na) Verify that the point \\( (\\bar{h}, \\bar{w}) \\) lies on the regression line.\n\nb) Predict the weight of an adult who is 175 cm tall.\n\nc) Would it be appropriate to use this regression line to predict the weight of a child who is 100 cm tall? Explain your answer.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'mean point', 'prediction', 'extrapolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( h = 170 \\) into the regression equation.',
                    workingLatex: 'w = -58 + 0.765 \\times 170 = -58 + 130.05 = 72.05 \\approx 72 = \\bar{w} \\; \\checkmark',
                    explanation: 'The small difference is due to rounding. The point \\( (170, 72) \\) lies on the line.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Substitute \\( h = 175 \\).',
                    workingLatex: 'w = -58 + 0.765 \\times 175 = -58 + 133.875 = 75.9 \\text{ kg (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Comment on predicting for \\( h = 100 \\).',
                    workingLatex: 'w = -58 + 0.765 \\times 100 = -58 + 76.5 = 18.5 \\text{ kg}',
                    explanation: 'This would not be appropriate. The data was collected from adults, and a height of 100 cm corresponds to a young child. Extrapolating the regression line to a height well below the adult range would be unreliable, as the relationship between height and weight for children is different from that of adults.',
                },
            ],
            finalAnswer: 'a) \\( w = 72.05 \\approx 72 \\) ✓. b) 75.9 kg. c) Not appropriate — 100 cm is outside the adult data range and children have a different height–weight relationship.',
        },
    },
    {
        id: 's5-018',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 18',
        difficulty: 'Foundation',
        questionText:
            'A physics student records the temperature \\( T \\) (°C) of a cooling cup of coffee at various times \\( t \\) (minutes) after it was poured. She finds the regression line of \\( T \\) on \\( t \\):\n\n\\( T = 85 - 1.4t \\)\n\nThe data was collected for values of \\( t \\) from 0 to 30 minutes.\n\na) State what the value 85 represents in context.\n\nb) Predict the temperature after 20 minutes.\n\nc) Use the equation to predict the temperature after 70 minutes. Comment on why this prediction is problematic.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'interpretation', 'extrapolation', 'limitations'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Interpret \\( a = 85 \\).',
                    workingLatex: '',
                    explanation: 'When \\( t = 0 \\) (the moment the coffee was poured), the predicted temperature is 85°C. This is the initial temperature of the coffee.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Substitute \\( t = 20 \\).',
                    workingLatex: 'T = 85 - 1.4 \\times 20 = 85 - 28 = 57 \\text{°C}',
                    explanation: 'This is interpolation (within the data range 0–30), so the prediction is reliable.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( t = 70 \\).',
                    workingLatex: 'T = 85 - 1.4 \\times 70 = 85 - 98 = -13 \\text{°C}',
                    explanation: 'This predicts a temperature of −13°C, which is impossible for a cup of coffee at room temperature. The model is only valid for the observed time range. In reality, the coffee would approach room temperature (around 20°C) and never go below it. The linear model breaks down because cooling follows an exponential curve, not a straight line, over long periods.',
                },
            ],
            finalAnswer: 'a) 85°C is the initial temperature. b) 57°C (reliable — interpolation). c) −13°C — impossible; the linear model breaks down as coffee cooling is non-linear over long periods.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 4  (Q19–Q24)  Drawing and using regression lines with data
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's5-019',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 19',
        difficulty: 'Foundation',
        questionText:
            'The data below shows the number of hours of sunshine (\\( x \\)) and the number of visitors (\\( y \\), in hundreds) to a seaside town on 7 days.\n\n| \\( x \\) | 2 | 4 | 5 | 6 | 7 | 9 | 10 |\n|---|---|---|---|---|---|---|---|\n| \\( y \\) | 3 | 5 | 6 | 7 | 8.5 | 11 | 12 |\n\na) Calculate \\( \\bar{x} \\) and \\( \\bar{y} \\).\n\nb) The regression line of \\( y \\) on \\( x \\) is \\( y = 0.50 + 1.16x \\). Verify that this line passes through \\( (\\bar{x}, \\bar{y}) \\).\n\nc) Use the regression line to estimate the number of visitors on a day with 8 hours of sunshine.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'mean point', 'prediction', 'bivariate data'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Calculate \\( \\bar{x} \\).',
                    workingLatex: '\\bar{x} = \\frac{2 + 4 + 5 + 6 + 7 + 9 + 10}{7} = \\frac{43}{7} \\approx 6.14',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Calculate \\( \\bar{y} \\).',
                    workingLatex: '\\bar{y} = \\frac{3 + 5 + 6 + 7 + 8.5 + 11 + 12}{7} = \\frac{52.5}{7} = 7.5',
                    explanation: '',
                },
                {
                    stepNumber: 3,
                    description: 'Part (b): Substitute \\( x = \\bar{x} \\) into the regression line.',
                    workingLatex: 'y = 0.50 + 1.16 \\times \\frac{43}{7} = 0.50 + \\frac{49.88}{7} = 0.50 + 7.126 \\approx 7.6',
                    explanation: 'This is approximately equal to \\( \\bar{y} = 7.5 \\). The small discrepancy is due to rounding of the regression coefficients. The line passes through (or very close to) the mean point.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (c): Substitute \\( x = 8 \\).',
                    workingLatex: 'y = 0.50 + 1.16 \\times 8 = 0.50 + 9.28 = 9.78',
                    explanation: 'So approximately 978 visitors (since \\( y \\) is in hundreds).',
                },
            ],
            finalAnswer: 'a) \\( \\bar{x} \\approx 6.14 \\), \\( \\bar{y} = 7.5 \\). b) Substituting gives ≈ 7.6 ≈ \\( \\bar{y} \\) ✓. c) ≈ 978 visitors.',
        },
    },
    {
        id: 's5-020',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 20',
        difficulty: 'Foundation',
        questionText:
            'A estate agent collects data on the floor area (\\( x \\) m²) and selling price (\\( y \\) £1000s) of 10 houses in a village. The data gives:\n\n\\( \\sum x = 850 \\), \\( \\sum y = 2750 \\), \\( \\bar{x} = 85 \\), \\( \\bar{y} = 275 \\)\n\nThe regression line of \\( y \\) on \\( x \\) is \\( y = -12.5 + 3.38x \\).\n\na) Use the regression line to predict the selling price of a house with a floor area of 100 m².\n\nb) The houses in the data had floor areas ranging from 55 m² to 120 m². State whether your prediction in (a) is an interpolation or an extrapolation.\n\nc) A homeowner with a 70 m² house wants to build a 20 m² extension. Use the model to estimate how much this might increase the value of the house.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'prediction', 'interpolation', 'interpretation', 'gradient'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 100 \\).',
                    workingLatex: 'y = -12.5 + 3.38 \\times 100 = -12.5 + 338 = 325.5',
                    explanation: 'The predicted selling price is £325,500.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Is this interpolation or extrapolation?',
                    workingLatex: '',
                    explanation: '\\( x = 100 \\) lies within the range 55 to 120, so this is interpolation.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Predict price for 70 m² and for 90 m².',
                    workingLatex: '\\text{At } x = 70: \\; y = -12.5 + 3.38 \\times 70 = -12.5 + 236.6 = 224.1',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Predict price for 90 m².',
                    workingLatex: '\\text{At } x = 90: \\; y = -12.5 + 3.38 \\times 90 = -12.5 + 304.2 = 291.7',
                    explanation: '',
                },
                {
                    stepNumber: 5,
                    description: 'Find the increase.',
                    workingLatex: '\\text{Increase} = 291.7 - 224.1 = 67.6',
                    explanation: 'The model predicts the value would increase by approximately £67,600. Alternatively, since the gradient is 3.38, each extra m² adds £3,380, so 20 m² adds \\( 20 \\times 3.38 = 67.6 \\) (£1000s) = £67,600.',
                },
            ],
            finalAnswer: 'a) £325,500. b) Interpolation. c) Approximately £67,600 increase (using \\( 20 \\times 3.38 = 67.6 \\)).',
        },
    },
    {
        id: 's5-021',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 21',
        difficulty: 'Foundation',
        questionText:
            'A gym records the number of months \\( x \\) a member has been attending and their resting heart rate \\( y \\) (bpm). For 10 members:\n\n\\( \\bar{x} = 8 \\), \\( \\bar{y} = 68 \\)\n\nThe regression line of \\( y \\) on \\( x \\) is \\( y = 76 - x \\).\n\na) Verify that the regression line passes through the mean point.\n\nb) Interpret the gradient of −1 in context.\n\nc) A new member joins. Use the model to estimate their resting heart rate at the start (\\( x = 0 \\)).\n\nd) Explain why using this model for \\( x = 80 \\) would be inappropriate.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'mean point', 'interpretation', 'extrapolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 8 \\).',
                    workingLatex: 'y = 76 - 8 = 68 = \\bar{y} \\; \\checkmark',
                    explanation: 'The mean point (8, 68) lies on the line.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Interpret the gradient.',
                    workingLatex: '',
                    explanation: 'For every additional month of gym attendance, the resting heart rate is predicted to decrease by 1 bpm.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( x = 0 \\).',
                    workingLatex: 'y = 76 - 0 = 76 \\text{ bpm}',
                    explanation: 'The estimated resting heart rate at the start is 76 bpm.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): Why \\( x = 80 \\) is inappropriate.',
                    workingLatex: 'y = 76 - 80 = -4 \\text{ bpm}',
                    explanation: 'This gives a negative resting heart rate, which is impossible. The value \\( x = 80 \\) (80 months) is far beyond the range of the data, so this is extreme extrapolation. Heart rate cannot decrease linearly forever — the model is only valid within or near the range of the original data.',
                },
            ],
            finalAnswer: 'a) \\( y = 68 = \\bar{y} \\) ✓. b) Each extra month reduces heart rate by 1 bpm. c) 76 bpm. d) \\( y = -4 \\) bpm is impossible — extreme extrapolation.',
        },
    },
    {
        id: 's5-022',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 22',
        difficulty: 'Foundation',
        questionText:
            'The number of ice creams sold (\\( y \\)) by a café and the daily maximum temperature (\\( x \\) °C) are recorded over 12 summer days. The regression line of \\( y \\) on \\( x \\) is:\n\n\\( y = -35 + 4.2x \\)\n\nThe temperatures in the data ranged from 18°C to 32°C.\n\na) Predict how many ice creams are sold on a day when the maximum temperature is 25°C.\n\nb) Explain why the model should not be used when \\( x = 5 \\).\n\nc) A rival café owner claims: "Heating up the pavement outside would increase ice cream sales." Using the concept of correlation and causation, comment on this claim.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'prediction', 'extrapolation', 'causation', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 25 \\).',
                    workingLatex: 'y = -35 + 4.2 \\times 25 = -35 + 105 = 70 \\text{ ice creams}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Why not use for \\( x = 5 \\).',
                    workingLatex: 'y = -35 + 4.2 \\times 5 = -35 + 21 = -14',
                    explanation: '\\( x = 5 \\) is well outside the data range (18–32°C), so this is extrapolation. The model predicts −14 ice creams, which is impossible. The linear relationship does not hold at very low temperatures.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Comment on causation.',
                    workingLatex: '',
                    explanation: 'The correlation between temperature and ice cream sales does not mean that artificially increasing temperature near the café would cause more sales. People buy ice cream on hot days because the weather makes them want a cold treat — it is the widespread warm weather that drives sales, not the temperature of a specific patch of pavement. Correlation does not imply causation, and the claim is flawed.',
                },
            ],
            finalAnswer: 'a) 70 ice creams. b) \\( x = 5 \\) gives −14 ice creams (impossible) — extrapolation beyond the data range. c) Correlation ≠ causation; the warm weather makes people want ice cream, not a hot pavement.',
        },
    },
    {
        id: 's5-023',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 23',
        difficulty: 'Foundation',
        questionText:
            'A teacher records the average number of hours of sleep per night (\\( x \\)) and the percentage attendance (\\( y \\)) of 10 sixth-form students over a half-term.\n\nShe finds \\( \\bar{x} = 7.5 \\) and \\( \\bar{y} = 88 \\), and the regression line:\n\n\\( y = 40 + 6.4x \\)\n\na) Verify the regression line passes through the mean point.\n\nb) Interpret the value 6.4 in context.\n\nc) One student sleeps for an average of 5 hours per night. Estimate their attendance percentage.\n\nd) Can the teacher conclude that making students sleep more would improve attendance? Explain your answer.',
        marks: 6,
        examStyle: false,
        yearCreated: 2026,
        tags: ['regression line', 'mean point', 'interpretation', 'causation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 7.5 \\).',
                    workingLatex: 'y = 40 + 6.4 \\times 7.5 = 40 + 48 = 88 = \\bar{y} \\; \\checkmark',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Interpret the gradient.',
                    workingLatex: '',
                    explanation: 'For every extra hour of sleep per night, the percentage attendance is predicted to increase by 6.4 percentage points.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( x = 5 \\).',
                    workingLatex: 'y = 40 + 6.4 \\times 5 = 40 + 32 = 72\\%',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): Comment on causation.',
                    workingLatex: '',
                    explanation: 'No, the teacher cannot conclude this. Correlation does not imply causation. While there is a positive association between sleep and attendance, forcing students to sleep more may not improve attendance. There could be confounding factors — for example, students who are unwell or have personal difficulties may both sleep less and attend less. The relationship may not be causal.',
                },
            ],
            finalAnswer: 'a) \\( y = 88 = \\bar{y} \\) ✓. b) Each extra hour of sleep predicts a 6.4 pp increase in attendance. c) 72%. d) No — correlation does not imply causation; confounding variables may explain the link.',
        },
    },
    {
        id: 's5-024',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 24',
        difficulty: 'Foundation',
        questionText:
            'Explain, using an example, the difference between interpolation and extrapolation. State which is generally more reliable and why.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['interpolation', 'extrapolation', 'reliability', 'definition'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Define interpolation.',
                    workingLatex: '',
                    explanation: 'Interpolation is using a regression line to predict the value of the response variable for a value of the explanatory variable that is within the range of the original data.',
                },
                {
                    stepNumber: 2,
                    description: 'Define extrapolation.',
                    workingLatex: '',
                    explanation: 'Extrapolation is using a regression line to predict the value of the response variable for a value of the explanatory variable that is outside the range of the original data.',
                },
                {
                    stepNumber: 3,
                    description: 'Give an example.',
                    workingLatex: '',
                    explanation: 'Suppose data on temperature and ice cream sales is collected for temperatures between 15°C and 30°C. Predicting sales at 22°C is interpolation. Predicting sales at 40°C is extrapolation.',
                },
                {
                    stepNumber: 4,
                    description: 'State which is more reliable.',
                    workingLatex: '',
                    explanation: 'Interpolation is generally more reliable because the data supports the regression line within the observed range. Extrapolation is less reliable because the relationship may change outside the range of the data — the linear model may no longer be valid.',
                },
            ],
            finalAnswer: 'Interpolation: predicting within the data range (e.g. 22°C in a 15–30°C dataset). Extrapolation: predicting outside (e.g. 40°C). Interpolation is more reliable because the data supports the model within the observed range.',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 5  (Q25–Q28)  Non-linear regression
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's5-025',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 25',
        difficulty: 'Foundation',
        questionText:
            'A concert venue collects data on the number of tickets sold for an event, \\( y \\), and the amount they spend on advertising for the event, £\\( x \\). They calculate that the regression curve of \\( y \\) on \\( x \\) is:\n\n\\( y = 0.002x^2 + 55 \\)\n\na) The venue has budgeted to spend £500 on advertising for a particular event. How many tickets do they expect to sell?\n\nb) The venue has 1500 seats. One of the staff members claims that, if they want to sell out the event, they should spend £850 on advertising. Comment on the validity of this claim.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['non-linear regression', 'quadratic', 'prediction', 'interpretation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( x = 500 \\).',
                    workingLatex: 'y = 0.002 \\times 500^2 + 55 = 0.002 \\times 250000 + 55 = 500 + 55 = 555 \\text{ tickets}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Analyse the claim. The staff member wants \\( y = 1500 \\).',
                    workingLatex: '',
                    explanation: 'The staff member is trying to predict the explanatory variable from the response variable — i.e. find \\( x \\) given \\( y = 1500 \\). The regression curve is of \\( y \\) on \\( x \\), so it should only be used to predict \\( y \\) from \\( x \\), not the other way around. This use is not valid.',
                },
                {
                    stepNumber: 3,
                    description: 'Consider extrapolation.',
                    workingLatex: '',
                    explanation: 'Additionally, if 1500 is the maximum capacity, the venue may not have collected data near that level of ticket sales. The prediction could involve extrapolation beyond the collected data, making it unreliable.',
                },
            ],
            finalAnswer: 'a) 555 tickets. b) The claim is not reliable — (1) the regression line predicts \\( y \\) from \\( x \\), not \\( x \\) from \\( y \\); (2) the prediction may involve extrapolation beyond the data.',
        },
    },
    {
        id: 's5-026',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 26',
        difficulty: 'Foundation',
        questionText:
            'A scatter diagram of a bivariate data set (\\( x \\), \\( y \\)) shows points that follow a curve rather than a straight line — they rise, reach a peak, and then fall.\n\na) Explain why a linear regression model would not be appropriate for this data.\n\nb) Suggest what type of function might be a better model.\n\nc) State one limitation of using any regression model to make predictions.',
        marks: 4,
        examStyle: false,
        yearCreated: 2026,
        tags: ['non-linear regression', 'quadratic', 'limitations', 'model'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Why linear is inappropriate.',
                    workingLatex: '',
                    explanation: 'A linear regression model assumes that \\( y \\) changes at a constant rate as \\( x \\) increases. Since the data rises and then falls, the relationship is clearly not linear — a straight line would not fit the data well and would give poor predictions.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Suggest a better model.',
                    workingLatex: '',
                    explanation: 'A quadratic function (e.g. \\( y = ax^2 + bx + c \\) with \\( a < 0 \\)) would be a better model, as it can describe a curve that rises to a maximum and then falls.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Limitation.',
                    workingLatex: '',
                    explanation: 'Any regression model is based on the observed data, so predictions outside the range of the data (extrapolation) may be unreliable. Also, the model may not capture all factors that affect the response variable.',
                },
            ],
            finalAnswer: 'a) The data is not linear (it curves), so a straight line would fit poorly. b) A quadratic function. c) Predictions outside the data range may be unreliable.',
        },
    },
    {
        id: 's5-027',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 27',
        difficulty: 'Foundation',
        questionText:
            'A bivariate data set (\\( s \\), \\( t \\)) is summarised as follows:\n\nNumber of data pairs: 5, range of \\( s \\): 1.6 to 7.9.\n\nThe regression curve of \\( t \\) on \\( s \\) is: \\( t = 2e^{0.3s} \\).\n\na) Predict the value of \\( t \\) when \\( s = 2 \\).\n\nb) Comment on the validity of this estimate.\n\nc) Predict the value of \\( t \\) when \\( s = 12 \\). Comment on the validity of this estimate.',
        marks: 5,
        examStyle: false,
        yearCreated: 2026,
        tags: ['non-linear regression', 'exponential', 'prediction', 'interpolation', 'extrapolation'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Substitute \\( s = 2 \\).',
                    workingLatex: 't = 2e^{0.3 \\times 2} = 2e^{0.6} = 2 \\times 1.8221\\ldots = 3.64 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Validity of the estimate for \\( s = 2 \\).',
                    workingLatex: '',
                    explanation: '\\( s = 2 \\) lies within the range of the data (1.6 to 7.9), so this is interpolation. The estimate should be fairly reliable, assuming the exponential model fits the data well.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( s = 12 \\).',
                    workingLatex: 't = 2e^{0.3 \\times 12} = 2e^{3.6} = 2 \\times 36.598\\ldots = 73.2 \\text{ (3 s.f.)}',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Validity of the estimate for \\( s = 12 \\).',
                    workingLatex: '',
                    explanation: '\\( s = 12 \\) is well outside the range of the data (max was 7.9), so this is extrapolation. Also, with only 5 data pairs, the model may not be very robust. The estimate should be treated with considerable caution.',
                },
            ],
            finalAnswer: 'a) \\( t = 3.64 \\) (3 s.f.). b) Valid — interpolation within range 1.6–7.9. c) \\( t = 73.2 \\) — unreliable, extrapolation with only 5 data points.',
        },
    },
    {
        id: 's5-028',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 28',
        difficulty: 'Foundation',
        questionText:
            'The scatter diagram below shows a bivariate data set (\\( x \\), \\( y \\)). The points rise steeply at first, then level off, forming a curve that looks like a logarithmic shape.\n\nWhich of the following types of function would be the most appropriate as a best-fit model for this data?\n\n  linear \\qquad quadratic \\qquad cubic \\qquad exponential \\qquad logarithmic\n\nExplain your choice.',
        marks: 3,
        examStyle: false,
        yearCreated: 2026,
        tags: ['non-linear regression', 'logarithmic', 'model selection'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Identify the shape.',
                    workingLatex: '',
                    explanation: 'The data rises steeply at first and then levels off. This is the characteristic shape of a logarithmic function, \\( y = a + b\\ln x \\), which increases rapidly for small \\( x \\) and then grows more and more slowly.',
                },
                {
                    stepNumber: 2,
                    description: 'Rule out the others.',
                    workingLatex: '',
                    explanation: 'Linear: would be a straight line. Quadratic: would curve up or down (parabola). Cubic: would have an S-shape or two turning points. Exponential: would increase more and more steeply, not level off. None of these match the described shape.',
                },
                {
                    stepNumber: 3,
                    description: 'State the answer.',
                    workingLatex: '',
                    explanation: 'A logarithmic function is the most appropriate model.',
                },
            ],
            finalAnswer: 'Logarithmic — the data rises steeply then levels off, matching the shape of \\( y = a + b\\ln x \\).',
        },
    },
    // ─────────────────────────────────────────────────────────────────────────────
    // BLOCK 6  (Q29–Q30)  Mixed exam-style questions
    // ─────────────────────────────────────────────────────────────────────────────
    {
        id: 's5-029',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 29',
        difficulty: 'Foundation',
        questionText:
            'A health researcher investigates the link between daily sugar intake \\( x \\) (grams) and BMI \\( y \\) for 15 adults. She finds strong positive correlation and the regression line:\n\n\\( y = 18.5 + 0.08x \\)\n\nThe sugar intakes in the data ranged from 20 g to 120 g.\n\na) Interpret the value 18.5 in context.\n\nb) Interpret the value 0.08 in context.\n\nc) Predict the BMI for a person with a sugar intake of 80 g.\n\nd) Predict the BMI for a person with a sugar intake of 200 g. Comment on the reliability.\n\ne) A newspaper writes the headline: "Sugar causes obesity." Using your knowledge of statistics, comment on this headline.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['regression line', 'interpretation', 'interpolation', 'extrapolation', 'causation', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Interpret \\( a = 18.5 \\).',
                    workingLatex: '',
                    explanation: 'When \\( x = 0 \\) (zero sugar intake), the predicted BMI is 18.5. This represents the baseline BMI for a person who consumes no sugar.',
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Interpret \\( b = 0.08 \\).',
                    workingLatex: '',
                    explanation: 'For each additional gram of daily sugar intake, the BMI is predicted to increase by 0.08.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Substitute \\( x = 80 \\).',
                    workingLatex: 'y = 18.5 + 0.08 \\times 80 = 18.5 + 6.4 = 24.9',
                    explanation: '',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): Substitute \\( x = 200 \\).',
                    workingLatex: 'y = 18.5 + 0.08 \\times 200 = 18.5 + 16 = 34.5',
                    explanation: '\\( x = 200 \\) is well beyond the data range (20–120 g), so this is extrapolation. The prediction is unreliable because the linear relationship may not continue at very high sugar intakes.',
                },
                {
                    stepNumber: 5,
                    description: 'Part (e): Comment on the headline.',
                    workingLatex: '',
                    explanation: 'The headline implies a causal relationship, but the regression only shows a correlation. Correlation does not imply causation. There may be confounding variables — for example, people with high sugar intake may also exercise less, eat more overall, or have different lifestyles. The data alone cannot prove that sugar causes obesity.',
                },
            ],
            finalAnswer: 'a) Predicted BMI with zero sugar is 18.5. b) Each extra gram of sugar increases predicted BMI by 0.08. c) BMI = 24.9. d) BMI = 34.5 — unreliable (extrapolation). e) Correlation ≠ causation; confounding variables may explain the link.',
        },
    },
    {
        id: 's5-030',
        topicRef: 's5',
        topicTitle: 'Correlation and Regression 30',
        difficulty: 'Foundation',
        questionText:
            'The scatter diagram below shows the relationship between engine size \\( x \\) (litres) and CO₂ emissions \\( y \\) (g/km) for 12 cars.\n\nThe data shows strong positive correlation. The regression line of \\( y \\) on \\( x \\) is:\n\n\\( y = 65 + 48x \\)\n\nEngine sizes in the data ranged from 1.0 to 3.5 litres.\n\na) Draw the regression line on the scatter diagram by plotting two points.\n\nb) Use the line to predict the CO₂ emissions for a car with a 2.0 litre engine.\n\nc) A car manufacturer produces a new electric car with an engine equivalent of 0 litres. Explain why using this regression line to predict the emissions would be inappropriate.\n\nd) Another study shows that diesel cars have a different regression line from petrol cars. Suggest how the researcher could improve the model.',
        marks: 8,
        examStyle: true,
        yearCreated: 2026,
        tags: ['regression line', 'scatter diagram', 'prediction', 'extrapolation', 'limitations', 'exam style'],
        workedSolution: {
            steps: [
                {
                    stepNumber: 1,
                    description: 'Part (a): Find two points on the line.',
                    workingLatex: '\\text{At } x = 1: \\; y = 65 + 48(1) = 113 \\qquad \\text{At } x = 3: \\; y = 65 + 48(3) = 209',
                    explanation: 'Plot (1, 113) and (3, 209) and draw a straight line through them.',
                    tikz: `\\begin{tikzpicture}
  \\begin{axis}[
    xlabel={Engine size (litres)},
    ylabel={CO$_2$ emissions (g/km)},
    xmin=0, xmax=4,
    ymin=50, ymax=250,
    xtick={0,0.5,1,1.5,2,2.5,3,3.5,4},
    ytick={50,100,150,200,250},
    width=10cm, height=7cm,
    grid=both, grid style={gray!30}
  ]
  % Scatter points
  \\addplot[only marks, mark=x, mark size=3pt] coordinates {
    (1.0,110)(1.2,125)(1.4,130)(1.6,140)(2.0,160)(2.2,172)
    (2.4,178)(2.5,185)(2.8,195)(3.0,210)(3.2,218)(3.5,235)
  };
  % Regression line
  \\addplot[thick, red, domain=0.8:3.7] {65 + 48*x};
  \\end{axis}
\\end{tikzpicture}`,
                },
                {
                    stepNumber: 2,
                    description: 'Part (b): Substitute \\( x = 2.0 \\).',
                    workingLatex: 'y = 65 + 48 \\times 2.0 = 65 + 96 = 161 \\text{ g/km}',
                    explanation: 'This is interpolation (within 1.0–3.5), so the estimate is reliable.',
                },
                {
                    stepNumber: 3,
                    description: 'Part (c): Why \\( x = 0 \\) is inappropriate.',
                    workingLatex: '',
                    explanation: '\\( x = 0 \\) is outside the data range (extrapolation below the minimum of 1.0 litre). More importantly, the model was built using data from petrol/diesel cars. An electric car is fundamentally different — it produces zero tailpipe emissions regardless of any regression model. The model does not apply to electric vehicles.',
                },
                {
                    stepNumber: 4,
                    description: 'Part (d): How to improve the model.',
                    workingLatex: '',
                    explanation: 'The researcher could separate the data into diesel and petrol cars and calculate a separate regression line for each fuel type. This would give more accurate predictions because diesel and petrol engines have different emission characteristics.',
                },
            ],
            finalAnswer: 'a) Plot (1, 113) and (3, 209), join with a line. b) 161 g/km. c) \\( x = 0 \\) is extrapolation and electric cars don\'t follow this model. d) Use separate regression lines for diesel and petrol cars.',
        },
    },
];