export type QuestionDifficulty = "Foundation" | "Standard" | "Challenge";
export type UserRole = "student" | "teacher";
export type Course = "a-level-maths" | "a-level-further-maths";

export interface Topic {
  id: string;
  ref: string;
  title: string;
  category: string;
  subcategory: string;
  module: 1 | 2;
  videoUrl: string;
  videoTitle: string;
  duration: number;
  learningOutcome: string;
  course: Course;
}

export interface QuadraticGraphData {
  a: number;
  b: number;
  c: number;
  xMin?: number;
  xMax?: number;
  roots?: number[];
  vertex?: [number, number];
  yIntercept?: number;
  label?: string;
}

export interface CurveDiagramConfig {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  hideAxes?: boolean;
  xTicks?: number[];
  yTicks?: number[];
  xLabel?: string;
  yLabel?: string;
  curves?: Array<{
    points: Array<[number, number]>;
    color?: string;
    label?: string;
    labelAt?: [number, number];
    width?: number;
  }>;
  lines?: Array<{
    from: [number, number];
    to: [number, number];
    color?: string;
    dashed?: boolean;
    arrow?: boolean;
    label?: string;
    labelAt?: [number, number];
  }>;
  points?: Array<{
    at: [number, number];
    label?: string;
    labelAnchor?: "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
    color?: string;
    r?: number;
  }>;
  fills?: Array<{
    points: Array<[number, number]>;
    color?: string;
    opacity?: number;
  }>;
}

export interface SolutionStep {
  stepNumber: number;
  description: string;
  workingLatex: string;
  explanation: string;
  graph?: QuadraticGraphData;
  tikz?: string;
  diagram?: CurveDiagramConfig;
}

export interface WorkedSolution {
  steps: SolutionStep[];
  finalAnswer: string;
  commonMistakes?: string[];
}

export interface Question {
  id: string;
  topicRef: string;
  topicTitle: string;
  difficulty: QuestionDifficulty;
  questionText: string;
  marks: number;
  workedSolution: WorkedSolution;
  examStyle: boolean;
  yearCreated: number;
  tags: string[];
  diagram?: CurveDiagramConfig;
}

export interface Video {
  id: string;
  topicId: string;
  title: string;
  url: string;
  durationMinutes: number;
  thumbnail?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface TopicProgress {
  topicId: string;
  videosWatched: number;
  assessmentCompleted: boolean;
  assessmentScore?: number;
  lastAccessed: string;
}

/* ── Assessment ─────────────────────────────────────── */

export interface AssessmentProblem {
  id: string;
  questionText: string;
  correctAnswer: string;
  studentAnswer: string;
  studentExplanation: string;
  aiScore: number;
  aiFeedback: string;
  isCorrect: boolean;
  hintsUsed: number;
}

export interface AssessmentSession {
  id: string;
  studentId: string;
  topicRef: string;
  topicTitle: string;
  status: "active" | "completed" | "abandoned";
  startedAt: string;
  completedAt?: string;
  problems: AssessmentProblem[];
  overallScore?: number;
  aiFeedback?: string;
}

/** @deprecated kept for backward compat with useAssessment hook */
export interface AssessmentQuestion {
  questionId: string;
  studentAnswer: string;
  explanation: string;
  isCorrect?: boolean;
  feedback?: string;
  timeSpentSeconds: number;
}
