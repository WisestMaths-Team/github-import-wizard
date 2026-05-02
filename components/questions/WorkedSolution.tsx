"use client";

import { useState } from "react";
import type { SolutionStep, WorkedSolution as WS } from "@/lib/types";
import { BlockMath } from "react-katex";
import { MathText } from "@/components/questions/MathText";
import { QuadraticGraph } from "@/components/questions/QuadraticGraph";
import { TikzDiagram } from "@/components/questions/TikzDiagram";
import { CurveDiagram } from "@/components/questions/CurveDiagram";

type ExtraWorkingLine = {
  label: string;
  latex: string;
};

function getLineSegmentsExtraWorking(step: SolutionStep): ExtraWorkingLine[] {
  const text = `${step.description} ${step.workingLatex} ${step.explanation}`.toLowerCase();
  const supportText = `${step.description} ${step.explanation}`.toLowerCase();
  const isMedianLengthStep = step.description.toLowerCase().startsWith("median from");
  const isSolvingStep = /\bsolve\b|\bquadratic\b/.test(step.description.toLowerCase());
  const lines: ExtraWorkingLine[] = [];

  if (text.includes("midpoint") || (!isMedianLengthStep && /m_\{[a-z]+\}/i.test(step.workingLatex))) {
    lines.push({
      label: "Start with the midpoint formula, then substitute the two endpoints.",
      latex: "M = \\left(\\frac{x_1+x_2}{2},\\ \\frac{y_1+y_2}{2}\\right)",
    });
  }

  if (
    !isSolvingStep &&
    (supportText.includes("distance formula") ||
      supportText.includes("distance from") ||
      supportText.includes("length") ||
      isMedianLengthStep)
  ) {
    lines.push({
      label: "For a length, subtract the coordinates first, square both differences, then square-root.",
      latex: "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}",
    });
  }

  if (
    isSolvingStep &&
    (supportText.includes("quadratic formula") ||
      (step.workingLatex.includes("\\pm") && step.workingLatex.includes("\\sqrt")))
  ) {
    lines.push({
      label: "For a quadratic \\(ax^2 + bx + c = 0\\), substitute \\(a\\), \\(b\\), and \\(c\\) into the quadratic formula.",
      latex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
    });
  }

  if (text.includes("gradient") || text.includes("perpendicular") || step.workingLatex.includes("m_")) {
    lines.push({
      label: "For gradients, use rise over run; perpendicular gradients multiply to \\(-1\\).",
      latex: "m = \\frac{y_2-y_1}{x_2-x_1},\\qquad m_1m_2=-1",
    });
  }

  if (text.includes("ratio") || text.includes("section") || text.includes("divides")) {
    lines.push({
      label: "For a point dividing \\(AB\\) in the ratio \\(m:n\\), use the section formula.",
      latex: "P = \\left(\\frac{mx_2+nx_1}{m+n},\\ \\frac{my_2+ny_1}{m+n}\\right)",
    });
  }

  if (text.includes("centroid")) {
    lines.push({
      label: "The centroid is found by averaging all three \\(x\\)-coordinates and all three \\(y\\)-coordinates.",
      latex: "G = \\left(\\frac{x_1+x_2+x_3}{3},\\ \\frac{y_1+y_2+y_3}{3}\\right)",
    });
  }

  if (text.includes("circle") || text.includes("diameter") || text.includes("radius")) {
    lines.push({
      label: "For a circle with centre \\((a,b)\\), the radius is the distance from the centre to the circle.",
      latex: "(x-a)^2 + (y-b)^2 = r^2",
    });
  }

  return lines;
}

export function WorkedSolutionPanel({ solution, topicRef }: { solution: WS; topicRef?: string }) {
  return (
    <div className="space-y-5">
      {solution.steps.map((s, idx) => {
        const extraWorking = topicRef === "CG2" ? getLineSegmentsExtraWorking(s) : [];

        return (
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
              {extraWorking.length > 0 && (
                <div className="mt-2 rounded-lg border border-black/10 bg-black/[0.02] px-3 py-2">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45">
                    Extra Working
                  </p>
                  <div className="space-y-2">
                    {extraWorking.map((line) => (
                      <div key={`${s.stepNumber}-${line.latex}`}>
                        <p className="text-xs leading-relaxed text-foreground/60">
                          <MathText text={line.label} />
                        </p>
                        <div className="mt-1 overflow-x-auto katex-left">
                          <BlockMath math={line.latex} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
        );
      })}

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
