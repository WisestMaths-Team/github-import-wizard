"use client";

import { useState } from "react";
import type { WorkedSolution as WS } from "@/lib/types";
import { BlockMath } from "react-katex";
import { MathText } from "@/components/questions/MathText";
import { QuadraticGraph } from "@/components/questions/QuadraticGraph";
import { TikzDiagram } from "@/components/questions/TikzDiagram";
import { CurveDiagram } from "@/components/questions/CurveDiagram";

export function WorkedSolutionPanel({ solution }: { solution: WS }) {
  return (
    <div className="space-y-5">
      {solution.steps.map((s, idx) => (
        <div key={s.stepNumber} className="relative flex gap-4">
          {/* Connector line between steps */}
          {idx < solution.steps.length - 1 && (
            <div className="absolute left-[15px] top-[34px] bottom-[-20px] w-[2px] bg-accent/15" />
          )}
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-secondary text-xs font-bold text-white shadow-glow-sm">
            {s.stepNumber}
          </span>
          <div className="min-w-0 flex-1 pb-1">
            {s.description && (
              <p className="text-sm font-semibold text-foreground leading-relaxed">
                <MathText text={s.description} />
              </p>
            )}
            {s.workingLatex && (
              <div className="my-2.5 overflow-x-auto rounded-lg border border-black/10 bg-black/[0.03] px-4 py-3 katex-left">
                <BlockMath math={s.workingLatex} />
              </div>
            )}
            {s.graph && (
              <div className="my-3">
                <QuadraticGraph data={s.graph} />
              </div>
            )}
            {s.diagram && <CurveDiagram config={s.diagram} />}
            {s.tikz && <TikzDiagram source={s.tikz} />}
            {s.explanation && (
              <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                <MathText text={s.explanation} />
              </p>
            )}
          </div>
        </div>
      ))}

      <div className="relative overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-accent/[0.08] to-secondary/[0.04] p-5">
        <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
        <p className="relative mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
          Final Answer
        </p>
        <div className="relative overflow-x-auto text-[0.95rem]">
          <FinalAnswerDisplay answer={solution.finalAnswer} />
        </div>
      </div>

      {solution.commonMistakes && solution.commonMistakes.length > 0 && (
        <div className="rounded-xl border border-amber-300/40 bg-amber-50 p-5">
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700">
            Common Mistakes
          </p>
          <ul className="space-y-2">
            {solution.commonMistakes.map((m, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-amber-900/80 leading-relaxed">
                <span className="mt-0.5 shrink-0 text-amber-600">&#x26A0;</span>
                <span><MathText text={m} /></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


function FinalAnswerDisplay({ answer }: { answer: string }) {
  // 1. Already has \( \) delimiters — use MathText directly
  if (answer.includes("\\(")) {
    return <p className="text-base leading-relaxed text-foreground/90"><MathText text={answer} /></p>;
  }

  // 2. Check if it's pure math (no multi-letter English words)
  const withoutLatexCmds = answer.replace(/\\[a-zA-Z]+\{[^}]*\}/g, "").replace(/\\[a-zA-Z]+/g, "");
  const hasBareWords = /\b[A-Za-z]{2,}\b/.test(withoutLatexCmds);

  if (!hasBareWords) {
    // Pure math like "(x-2)(x+1)(x+5)" — render with BlockMath
    return <BlockMath math={answer} />;
  }

  // 3. Mixed text+math: auto-wrap math portions in \( \)
  // Split on semicolons and known text words, wrap math-looking parts
  const parts = answer.split(/([;.])\s*/);
  const formatted = parts.map((part) => {
    const trimmed = part.trim();
    if (!trimmed || trimmed === ";" || trimmed === ".") return trimmed + " ";
    // Check if this part has math (=, ^, (, ), x, digits with operators)
    const hasMath = /[=^{}()]|\\/.test(trimmed) || /\b[xyz]\b/.test(trimmed);
    const hasText = /[A-Za-z]{2,}/.test(trimmed);
    if (hasMath && hasText) {
      // Mixed within one part — wrap math-looking segments
      return trimmed.replace(
        /([xyz]\s*=\s*[^,;.]+|[-+]?\d+(?:\.\d+)?|\([^)]+\)|\\[a-zA-Z]+\{[^}]*\})/g,
        "\\($1\\)"
      );
    }
    if (hasMath && !hasText) {
      return "\\(" + trimmed + "\\)";
    }
    return trimmed;
  }).join(" ").replace(/\s+/g, " ").trim();

  return <p className="text-base leading-relaxed text-foreground/90"><MathText text={formatted} /></p>;
}

/** Collapsible wrapper — used where solutions should be toggle-able */
export function WorkedSolution({ solution }: { solution: WS }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3 overflow-hidden rounded-lg border border-black/10 bg-white/80">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-black/[0.03] transition-colors"
      >
        Worked Solution
        <span className="text-foreground/50">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="border-t border-black/5 px-4 py-4">
          <WorkedSolutionPanel solution={solution} />
        </div>
      )}
    </div>
  );
}
