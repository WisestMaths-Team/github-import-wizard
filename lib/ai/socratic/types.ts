/**
 * Socratic Mathematics Tutor — Type Definitions
 */

export interface SocraticSession {
  sessionId: string;
  userId: string;
  topicRef: string;
  currentQuestion: number;       // 1–5
  totalQuestions: 5;
  history: SocraticTurn[];
  startedAt: string;
  completedAt: string | null;
  overallScore: number | null;
}

export interface SocraticTurn {
  questionNumber: number;
  questionText: string;
  studentAnswer: string;
  studentReasoning: string;
  evaluation: TurnEvaluation;
}

export interface TurnEvaluation {
  answerCorrect: boolean;
  reasoningSound: boolean;
  feedback: string;
  mentalModelCorrection: string | null;   // non-null when answer is right but logic is wrong
  correctWorking: string | null;          // non-null when answer is wrong — full step-by-step method
  score: number;                          // 0–10
}

export interface SocraticRequest {
  sessionId: string;
  studentAnswer: string;
  studentReasoning: string;
}

export interface SocraticResponse {
  questionNumber: number;
  totalQuestions: number;
  evaluation: TurnEvaluation | null;      // null for the first question prompt
  nextQuestion: string | null;            // null when session is complete
  sessionComplete: boolean;
  overallFeedback: string | null;         // only on completion
  overallScore: number | null;            // only on completion
}
