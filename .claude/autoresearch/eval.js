#!/usr/bin/env node
/**
 * Eval suite for A-level Maths Year 1 question generator.
 * Reads a JSON file of generated questions and scores each against 4 constraints.
 *
 * Usage: node eval.js <questions.json>
 *
 * Input format: Array of objects with:
 *   { id, topics: string[], parts: [{label, text, marks}], workedSolution: string, answers: string[] }
 *
 * Output: JSON with per-question scores and an overall pass rate.
 */

const fs = require('fs');

const YEAR1_TOPICS = [
  'algebra', 'functions', 'surds', 'indices', 'completing the square', 'factor theorem',
  'coordinate geometry', 'straight lines', 'circles', 'midpoints', 'distances',
  'differentiation', 'gradients', 'tangents', 'normals', 'stationary points',
  'integration', 'indefinite', 'definite', 'area under curve',
  'trigonometry', 'sine rule', 'cosine rule', 'trig identities', 'trig equations',
  'exponentials', 'logarithms', 'modelling',
  'binomial expansion',
  'quadratic inequalities', 'inequalities',
  'simultaneous equations',
  'sequences', 'series', 'arithmetic', 'geometric'
];

const TOPIC_GROUPS = {
  'Algebra & Functions': ['algebra', 'functions', 'surds', 'indices', 'completing the square', 'factor theorem', 'quadratics'],
  'Coordinate Geometry': ['coordinate geometry', 'straight lines', 'circles', 'midpoints', 'distances', 'equation of line', 'perpendicular'],
  'Differentiation': ['differentiation', 'gradients', 'tangents', 'normals', 'stationary points', 'derivative', 'turning point'],
  'Integration': ['integration', 'indefinite', 'definite', 'area under curve', 'integrate'],
  'Trigonometry': ['trigonometry', 'sine rule', 'cosine rule', 'trig identities', 'trig equations', 'sin', 'cos', 'tan'],
  'Exponentials & Logarithms': ['exponentials', 'logarithms', 'modelling', 'decay', 'growth', 'ln', 'log'],
  'Binomial Expansion': ['binomial expansion', 'binomial'],
  'Inequalities': ['quadratic inequalities', 'inequalities', 'inequality'],
  'Simultaneous Equations': ['simultaneous equations', 'simultaneous'],
  'Sequences & Series': ['sequences', 'series', 'arithmetic', 'geometric', 'sum to n']
};

function identifyTopicGroups(topicsArray, questionText, solution) {
  const allText = (topicsArray.join(' ') + ' ' + questionText + ' ' + solution).toLowerCase();
  const matched = new Set();
  for (const [group, keywords] of Object.entries(TOPIC_GROUPS)) {
    for (const kw of keywords) {
      if (allText.includes(kw)) {
        matched.add(group);
        break;
      }
    }
  }
  return [...matched];
}

// C1: Multi-topic integration — at least 2 distinct topic groups
function evalC1(q) {
  const groups = identifyTopicGroups(q.topics || [], q.questionText || '', q.workedSolution || '');
  const pass = groups.length >= 2;
  return {
    pass,
    score: Math.min(groups.length / 2, 1),
    detail: `${groups.length} topic group(s): ${groups.join(', ')}`,
    groups
  };
}

// C2: Clean Math Metric — no ugly decimals, clean roots
function evalC2(q) {
  const allText = (q.questionText || '') + ' ' + (q.workedSolution || '') + ' ' + (q.answers || []).join(' ');

  const issues = [];

  // Check for ugly decimals (more than 2 decimal places, or non-terminating)
  const decimalRegex = /\d+\.\d{3,}/g;
  const uglyDecimals = allText.match(decimalRegex) || [];
  if (uglyDecimals.length > 0) {
    issues.push(`Ugly decimals found: ${uglyDecimals.slice(0, 3).join(', ')}`);
  }

  // Check for irrational-looking numbers (long decimals)
  const longDecimal = /\d+\.\d{4,}/g;
  const irrational = allText.match(longDecimal) || [];
  if (irrational.length > 0) {
    issues.push(`Possibly irrational numbers: ${irrational.slice(0, 3).join(', ')}`);
  }

  // Check for clean surds (√2, √3, √5, √6, √7 are OK; √11, √13 etc less clean)
  const surdRegex = /sqrt\{?(\d+)\}?|\\sqrt\{?(\d+)\}?/g;
  let m;
  const cleanSurds = [2, 3, 5, 6, 7, 10, 11, 13, 15, 17, 19, 21];
  while ((m = surdRegex.exec(allText)) !== null) {
    const n = parseInt(m[1] || m[2]);
    if (n > 50) {
      issues.push(`Large surd √${n} — may be unclean`);
    }
  }

  // Check discriminant is perfect square (look for b²-4ac patterns)
  // This is heuristic — we look for quadratic formula usage with non-square discriminants
  const discriminantRegex = /sqrt\{(\d+)\}/g;
  while ((m = discriminantRegex.exec(allText)) !== null) {
    const n = parseInt(m[1]);
    const root = Math.sqrt(n);
    if (root !== Math.floor(root) && n > 50) {
      issues.push(`Discriminant √${n} is not a perfect square and is large`);
    }
  }

  const pass = issues.length === 0;
  return {
    pass,
    score: Math.max(0, 1 - issues.length * 0.25),
    detail: pass ? 'All numbers are clean' : issues.join('; '),
    issues
  };
}

// C3: STEP-level difficulty (THE MOST IMPORTANT CRITERION)
function evalC3(q) {
  const text = (q.questionText || '') + ' ' + (q.workedSolution || '');
  const questionText = (q.questionText || '').toLowerCase();
  const totalMarks = (q.parts || []).reduce((sum, p) => sum + (p.marks || 0), 0) || q.totalMarks || 0;

  const indicators = [];
  let difficultyScore = 0;

  // Check total marks (12-16 expected for STEP-level)
  if (totalMarks >= 12 && totalMarks <= 16) {
    difficultyScore += 0.1;
    indicators.push(`Total marks: ${totalMarks} (STEP range)`);
  } else if (totalMarks >= 10) {
    difficultyScore += 0.05;
    indicators.push(`Total marks: ${totalMarks} (borderline)`);
  } else {
    indicators.push(`Total marks: ${totalMarks} (too few for STEP)`);
  }

  // STEP indicator 1: "show that" / "prove that" / "deduce that" parts (need >=2)
  const proofWords = ['show that', 'prove that', 'deduce that', 'verify that', 'explain why'];
  const foundProofs = proofWords.filter(w => questionText.includes(w));
  if (foundProofs.length >= 2) {
    difficultyScore += 0.25;
    indicators.push(`Proof parts (${foundProofs.length}): ${foundProofs.join(', ')}`);
  } else if (foundProofs.length >= 1) {
    difficultyScore += 0.1;
    indicators.push(`Some proof parts: ${foundProofs.join(', ')}`);
  } else {
    indicators.push('No "show that" / "prove that" parts — not STEP-like');
  }

  // STEP indicator 2: "hence" / scaffolded reasoning
  const scaffoldWords = ['hence', 'using your result', 'using your answer', 'from part', 'it follows'];
  const foundScaffold = scaffoldWords.filter(w => questionText.includes(w));
  if (foundScaffold.length >= 2) {
    difficultyScore += 0.15;
    indicators.push(`Scaffolded reasoning: ${foundScaffold.join(', ')}`);
  } else if (foundScaffold.length >= 1) {
    difficultyScore += 0.07;
    indicators.push(`Some scaffolding: ${foundScaffold.join(', ')}`);
  }

  // STEP indicator 3: Parameter/family questions
  const paramWords = ['for what values', 'find the values of k', 'for which', 'range of values', 'find k such that', 'for all'];
  const hasParam = paramWords.some(w => questionText.includes(w));
  if (hasParam) {
    difficultyScore += 0.15;
    indicators.push('Parameter/family analysis present');
  }

  // STEP indicator 4: Solution length and complexity (STEP solutions are long)
  const solutionLength = (q.workedSolution || '').length;
  if (solutionLength > 800) {
    difficultyScore += 0.2;
    indicators.push(`Solution: ${solutionLength} chars (STEP-length)`);
  } else if (solutionLength > 500) {
    difficultyScore += 0.1;
    indicators.push(`Solution: ${solutionLength} chars (substantial)`);
  } else {
    indicators.push(`Solution: ${solutionLength} chars (too short for STEP)`);
  }

  // STEP indicator 5: Cross-referencing between parts
  const crossRef = /part\s*\(?\w\)?|your answer|result from|using .* above/gi;
  const crossRefs = (text.match(crossRef) || []).length;
  if (crossRefs >= 3) {
    difficultyScore += 0.15;
    indicators.push(`Cross-references: ${crossRefs}`);
  } else if (crossRefs >= 1) {
    difficultyScore += 0.07;
  }

  // STEP pass threshold is higher than before (0.65 → need most indicators)
  const pass = difficultyScore >= 0.65;
  return {
    pass,
    score: Math.min(difficultyScore, 1),
    detail: indicators.join('; '),
    difficultyScore
  };
}

// C4: Multi-part structure — at least 3 parts, building on each other
function evalC4(q) {
  const parts = q.parts || [];
  const numParts = parts.length;

  const issues = [];

  if (numParts < 3) {
    issues.push(`Only ${numParts} part(s), need at least 3`);
  }

  // Check parts have marks
  const partsWithMarks = parts.filter(p => p.marks && p.marks > 0);
  if (partsWithMarks.length < numParts) {
    issues.push(`${numParts - partsWithMarks.length} part(s) missing mark allocation`);
  }

  // Check mark range per part (2-5 expected)
  const badMarks = parts.filter(p => p.marks && (p.marks < 1 || p.marks > 6));
  if (badMarks.length > 0) {
    issues.push(`${badMarks.length} part(s) with marks outside 1-6 range`);
  }

  // Check for building/scaffolding between parts
  const questionText = (q.questionText || '').toLowerCase();
  const buildingWords = ['hence', 'using your answer', 'using your result', 'from part', 'using part', 'deduce', 'show that'];
  const hasBuilding = buildingWords.some(w => questionText.includes(w));
  if (!hasBuilding && numParts >= 3) {
    issues.push('Parts may not build on each other (no scaffolding keywords found)');
  }

  const pass = numParts >= 3 && issues.length <= 1;
  return {
    pass,
    score: Math.min(numParts / 3, 1) * (issues.length === 0 ? 1 : 0.7),
    detail: issues.length === 0 ? `${numParts} parts, well-structured` : issues.join('; '),
    numParts
  };
}

function evaluateQuestion(q, index) {
  const c1 = evalC1(q);
  const c2 = evalC2(q);
  const c3 = evalC3(q);
  const c4 = evalC4(q);

  const allPass = c1.pass && c2.pass && c3.pass && c4.pass;
  const avgScore = (c1.score + c2.score + c3.score + c4.score) / 4;

  return {
    id: q.id || `Q${index + 1}`,
    pass: allPass,
    avgScore,
    constraints: { C1: c1, C2: c2, C3: c3, C4: c4 }
  };
}

// Main
const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Usage: node eval.js <questions.json>');
  process.exit(1);
}

const questions = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
const results = questions.map((q, i) => evaluateQuestion(q, i));

const passed = results.filter(r => r.pass).length;
const total = results.length;
const passRate = (passed / total * 100).toFixed(0);

console.log(JSON.stringify({
  summary: {
    total,
    passed,
    failed: total - passed,
    passRate: `${passRate}%`,
    avgScore: (results.reduce((s, r) => s + r.avgScore, 0) / total).toFixed(3)
  },
  results
}, null, 2));
