/**
 * Socratic Tutor — Session Store
 *
 * Uses a global variable that survives Next.js hot-reloads in dev mode,
 * PLUS file-based persistence as a fallback.
 *
 * For production, replace with Redis or a database.
 */

import type { SocraticSession, SocraticTurn } from "./types";
import * as fs from "fs";
import * as path from "path";

const SESSION_FILE = path.join(process.cwd(), ".socratic-sessions.json");

// ── Global store that survives hot-reloads ────────────────────────────
// In Next.js dev mode, modules are re-evaluated on hot-reload,
// but properties on `globalThis` persist.

const GLOBAL_KEY = "__socratic_sessions__" as const;

declare global {
  // eslint-disable-next-line no-var
  var __socratic_sessions__: Map<string, SocraticSession> | undefined;
}

function getStore(): Map<string, SocraticSession> {
  // 1. Try globalThis (survives hot-reloads)
  if (globalThis[GLOBAL_KEY]) {
    return globalThis[GLOBAL_KEY]!;
  }

  // 2. Try loading from file (survives full server restarts)
  const map = new Map<string, SocraticSession>();
  try {
    if (fs.existsSync(SESSION_FILE)) {
      const data = JSON.parse(fs.readFileSync(SESSION_FILE, "utf-8"));
      for (const [key, value] of Object.entries(data)) {
        map.set(key, value as SocraticSession);
      }
    }
  } catch {
    // Ignore
  }

  // Clean expired sessions (older than 2 hours)
  const cutoff = Date.now() - 2 * 60 * 60 * 1000;
  for (const [id, session] of map) {
    if (new Date(session.startedAt).getTime() < cutoff) {
      map.delete(id);
    }
  }

  globalThis[GLOBAL_KEY] = map;
  return map;
}

function persist(): void {
  try {
    const store = getStore();
    const obj: Record<string, SocraticSession> = {};
    for (const [key, value] of store) {
      obj[key] = value;
    }
    fs.writeFileSync(SESSION_FILE, JSON.stringify(obj));
  } catch {
    // Ignore write errors
  }
}

// ── Public API ───────────────────────────────────────────────────────

export function createSession(userId: string, topicRef: string): SocraticSession {
  const store = getStore();
  const sessionId = `socratic-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  const session: SocraticSession = {
    sessionId,
    userId,
    topicRef,
    currentQuestion: 1,
    totalQuestions: 5,
    history: [],
    startedAt: new Date().toISOString(),
    completedAt: null,
    overallScore: null,
  };

  store.set(sessionId, session);
  persist();
  return session;
}

export function getSession(sessionId: string): SocraticSession | null {
  return getStore().get(sessionId) ?? null;
}

export function validateSession(
  sessionId: string,
  userId: string
): { valid: boolean; session?: SocraticSession; error?: string } {
  const session = getStore().get(sessionId);

  if (!session) {
    return { valid: false, error: "Session not found or expired." };
  }

  if (session.userId !== userId) {
    return { valid: false, error: "Access denied." };
  }

  if (session.completedAt) {
    return { valid: false, error: "This session is already completed." };
  }

  return { valid: true, session };
}

export function recordTurn(sessionId: string, turn: SocraticTurn): void {
  const store = getStore();
  const session = store.get(sessionId);
  if (!session) return;

  session.history.push(turn);

  if (session.currentQuestion >= 5) {
    session.completedAt = new Date().toISOString();
    session.overallScore = session.history.reduce((sum, t) => sum + t.evaluation.score, 0);
  } else {
    session.currentQuestion += 1;
  }

  persist();
}

export function deleteSession(sessionId: string): void {
  getStore().delete(sessionId);
  persist();
}
