"use client";

import type { Question } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { MathText, MathTextInline } from "./MathText";

const diffColours: Record<string, string> = {
  Foundation: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Standard: "bg-amber-50 text-amber-700 border-amber-200",
  Challenge: "bg-rose-50 text-rose-700 border-rose-200",
};

export function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-black/5 bg-black/[0.02] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent/15 to-secondary/15 ring-1 ring-black/10 text-xs font-bold text-accent font-mono">
            {question.topicRef}
          </span>
          <span className="text-sm font-semibold text-foreground">
            <MathTextInline text={question.topicTitle} />
          </span>
          <Badge variant="outline" className={diffColours[question.difficulty]}>
            {question.difficulty}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-black/8 bg-black/[0.03] px-2.5 py-0.5 text-xs font-medium text-foreground/60">
            {question.marks} {question.marks === 1 ? "mark" : "marks"}
          </span>
          {question.examStyle && (
            <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary">Exam</span>
          )}
        </div>
      </div>
      <div className="px-5 py-5">
        <div className="text-sm leading-relaxed text-foreground/85 overflow-x-auto">
          <MathText text={question.questionText} />
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/5 bg-black/[0.02] px-2.5 py-0.5 text-[11px] text-foreground/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
