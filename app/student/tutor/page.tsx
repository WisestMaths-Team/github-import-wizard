"use client";

import { useState, useMemo } from "react";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { Badge } from "@/components/ui/badge";
import { year1TopicCards, year2TopicCards } from "@/lib/data/topicCards";
import { getTopicsForCourse, getQuestionsForCourse } from "@/lib/data/courseData";
import type { Question, Course } from "@/lib/types";
import type { TurnEvaluation } from "@/lib/ai/socratic/types";

type View = "course" | "year" | "category" | "topics" | "subtopics" | "questions" | "attempt";

const year1Categories = [
  { id: "pure", title: "Pure Mathematics", icon: "\u222B", topics: ["Algebra", "Binomial Expansions 1", "Coordinate Geometry", "Differentiation 1", "Exponentials and Logarithms", "Inequalities and Simultaneous Equations", "Integration 1", "Quadratics and Cubics", "Trigonometry 2", "Vectors 1"] },
  { id: "statistics", title: "Statistics", icon: "\u03A3", topics: ["Sampling", "Probability", "Statistical Distributions", "Hypothesis Testing"] },
  { id: "mechanics", title: "Mechanics", icon: "\u2192", topics: [] },
];

const year2Categories = [
  { id: "pure", title: "Pure Mathematics", icon: "\u222B", topics: ["Algebraic Methods", "Binomial Expansion (Y2)", "Differentiation (Y2)", "Functions and Graphs", "Integration (Y2)", "Numerical Methods", "Parametric Equations", "Sequences and Series (Y2)", "Trigonometry (Y2)", "Vectors (Y2)"] },
  { id: "statistics", title: "Statistics", icon: "\u03A3", topics: [] },
  { id: "mechanics", title: "Mechanics", icon: "\u2192", topics: [] },
];

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Standard: "bg-amber-50 text-amber-700 border-amber-200",
  Challenge: "bg-rose-50 text-rose-700 border-rose-200",
};

function CorrectWorkingPanel({ text }: { text: string }) {
  const lines = text.split("\n").filter((l) => l.trim());
  return (
    <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.04] to-transparent p-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-bold">&#10003;</span>
        <h3 className="text-sm font-bold text-accent uppercase tracking-wide">Correct Method</h3>
      </div>
      <div className="space-y-4">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          const stepMatch = trimmed.match(/^(?:Step\s+)?(\d+)[.:]\s*(.*)/i);
          if (stepMatch) {
            const stepContent = stepMatch[2];
            const labelMatch = stepContent.match(/^(Differentiate|Integrate|Find|Apply|Using|Simplify|Expand|Factorise|Calculate|Combine|Substitute|Rearrange|Evaluate|Consider|Recall|Write|Multiply|Divide|Add|Subtract|Set|Let|Put|Take|Square|Compare|Check|Verify|For)\b(.*)/i);
            return (
              <div key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent mt-0.5">{stepMatch[1]}</span>
                <div className="flex-1 text-sm text-foreground/85 leading-relaxed">
                  {labelMatch ? (<><span className="font-bold text-foreground">{labelMatch[1]}</span><MathText text={labelMatch[2]} /></>) : (<><span className="font-bold text-foreground">Step {stepMatch[1]}:</span>{" "}<MathText text={stepContent} /></>)}
                </div>
              </div>
            );
          }
          const isConclusion = /^(So,?|Therefore,?|Combining|The correct|The derivative|Final|Hence|Thus)/i.test(trimmed);
          if (isConclusion) return <div key={i} className="rounded-lg bg-accent/10 border border-accent/20 px-4 py-3 text-sm font-medium text-foreground"><MathText text={trimmed} /></div>;
          const isSetup = /^(Given|For |Apply|Using|Remember|Note|Recall|We need)/i.test(trimmed);
          if (isSetup) return <p key={i} className="text-sm text-foreground/70 leading-relaxed italic"><MathText text={trimmed} /></p>;
          if (line.startsWith("   ") || line.startsWith("\t")) return <div key={i} className="ml-11 text-sm text-foreground/80 leading-relaxed"><MathText text={trimmed} /></div>;
          return <p key={i} className="text-sm text-foreground/80 leading-relaxed"><MathText text={trimmed} /></p>;
        })}
      </div>
    </div>
  );
}

export default function SocraticTutorPage() {
  const [view, setView] = useState<View>("course");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedTopicRef, setSelectedTopicRef] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  // AI state
  const [answer, setAnswer] = useState("");
  const [reasoning, setReasoning] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [evaluation, setEvaluation] = useState<TurnEvaluation | null>(null);

  const allTopicCards = selectedYear === 1 ? year1TopicCards : year2TopicCards;
  const categories = selectedYear === 1 ? year1Categories : year2Categories;
  const selectedCategoryData = categories.find(c => c.id === selectedCategory);
  const topicCards = selectedCategoryData ? allTopicCards.filter(t => selectedCategoryData.topics.includes(t.subcategory)) : allTopicCards;
  const courseLabel = selectedCourse === "a-level-maths" ? "A-Level Maths" : "A-Level Further Maths";

  const allTopics = useMemo(() => selectedCourse ? getTopicsForCourse(selectedCourse) : [], [selectedCourse]);
  const filteredTopics = useMemo(() => allTopics.filter(t => selectedYear ? t.module === selectedYear : true), [allTopics, selectedYear]);
  const allQuestions = useMemo(() => selectedCourse ? getQuestionsForCourse(selectedCourse) : [], [selectedCourse]);

  const subcategoryTopics = useMemo(() => {
    if (!selectedSubcategory) return [];
    const questionsByRef = new Map<string, number>();
    for (const q of allQuestions) questionsByRef.set(q.topicRef, (questionsByRef.get(q.topicRef) || 0) + 1);
    return filteredTopics
      .filter(t => t.subcategory === selectedSubcategory)
      .map(t => ({ ...t, questionCount: questionsByRef.get(t.ref) || 0 }))
      .filter(t => t.questionCount > 0)
      .sort((a, b) => a.ref.localeCompare(b.ref, undefined, { numeric: true }));
  }, [selectedSubcategory, filteredTopics, allQuestions]);

  const topicQuestions = useMemo(() => {
    if (!selectedTopicRef) return [];
    return allQuestions.filter(q => q.topicRef === selectedTopicRef).sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }, [selectedTopicRef, allQuestions]);

  const selectedTopic = allTopics.find(t => t.ref === selectedTopicRef);

  // Navigation
  const goToCourse = () => { setView("course"); setSelectedCourse(null); setSelectedYear(null); setSelectedCategory(null); setSelectedSubcategory(null); setSelectedTopicRef(null); setSelectedQuestion(null); setEvaluation(null); };
  const goToYear = (c: Course) => { setSelectedCourse(c); setView("year"); };
  const goToCategory = (year: number) => { setSelectedYear(year); setView("category"); };
  const goToTopics = (catId: string) => { setSelectedCategory(catId); setView("topics"); };
  const goToSubtopics = (sub: string) => { setSelectedSubcategory(sub); setView("subtopics"); };
  const goToQuestions = (ref: string) => { setSelectedTopicRef(ref); setView("questions"); };
  const goToAttempt = (q: Question) => { setSelectedQuestion(q); setAnswer(""); setReasoning(""); setEvaluation(null); setError(null); setView("attempt"); };

  // Submit to AI
  async function submitForEvaluation() {
    if (!selectedQuestion || !answer.trim() || !reasoning.trim()) return;
    setLoading(true);
    setError(null);
    setEvaluation(null);

    try {
      const res = await fetch("/api/socratic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "evaluate",
          questionId: selectedQuestion.id,
          questionText: selectedQuestion.questionText,
          answer: answer.trim(),
          reasoning: reasoning.trim(),
        }),
      });
      const data = await res.json();
      if (data.error) { setError(data.error); return; }
      if (data.evaluation) setEvaluation(data.evaluation);
    } catch {
      setError("Failed to get AI evaluation. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function scoreColor(score: number) {
    if (score >= 7) return "text-emerald-700 border-emerald-300 bg-emerald-50";
    if (score >= 4) return "text-amber-700 border-amber-300 bg-amber-50";
    return "text-rose-700 border-rose-300 bg-rose-50";
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Breadcrumbs */}
      <div className="mb-8 fade-up">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground/50 flex-wrap">
          <button onClick={goToCourse} className="hover:text-accent transition-colors">AI Tutor</button>
          {selectedCourse && view !== "course" && (<><span className="text-foreground/30">/</span><button onClick={() => goToYear(selectedCourse)} className="hover:text-accent transition-colors">{courseLabel}</button></>)}
          {selectedYear && !["course", "year"].includes(view) && (<><span className="text-foreground/30">/</span><button onClick={() => goToCategory(selectedYear)} className="hover:text-accent transition-colors">Year {selectedYear}</button></>)}
          {selectedCategory && !["course", "year", "category"].includes(view) && (<><span className="text-foreground/30">/</span><button onClick={() => goToTopics(selectedCategory)} className="hover:text-accent transition-colors">{selectedCategoryData?.title}</button></>)}
          {selectedSubcategory && ["subtopics", "questions", "attempt"].includes(view) && (<><span className="text-foreground/30">/</span><button onClick={() => goToSubtopics(selectedSubcategory)} className="hover:text-accent transition-colors">{selectedSubcategory}</button></>)}
          {selectedTopic && ["questions", "attempt"].includes(view) && (<><span className="text-foreground/30">/</span><button onClick={() => goToQuestions(selectedTopicRef!)} className="hover:text-accent transition-colors"><MathTextInline text={selectedTopic.title} /></button></>)}
          {selectedQuestion && view === "attempt" && (<><span className="text-foreground/30">/</span><span className="text-foreground/80">{selectedQuestion.topicTitle}</span></>)}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gradient-cool">
          {view === "course" ? "AI Socratic Tutor" : view === "year" ? courseLabel : view === "category" ? `${courseLabel} · Year ${selectedYear}` : view === "topics" ? (selectedCategoryData?.title ?? "") : view === "subtopics" ? selectedSubcategory : view === "questions" ? (selectedTopic ? <MathTextInline text={selectedTopic.title} /> : null) : selectedQuestion ? <MathTextInline text={selectedQuestion.topicTitle} /> : null}
        </h1>
        <p className="mt-1.5 text-sm text-foreground/60">
          {view === "course" && "Select a course to begin."}
          {view === "year" && "Select a year."}
          {view === "category" && "Choose a component."}
          {view === "topics" && "Choose a topic."}
          {view === "subtopics" && "Choose a subtopic."}
          {view === "questions" && `${topicQuestions.length} questions available. Pick one for AI evaluation.`}
          {view === "attempt" && "Submit your answer and reasoning for AI evaluation."}
        </p>
      </div>

      {/* COURSE */}
      {view === "course" && (
        <div className="grid gap-5 sm:grid-cols-2 fade-up-delay-1">
          {[{ id: "a-level-maths" as Course, title: "A-Level Maths", icon: "\u222B", desc: "Pure Maths, Statistics, and Mechanics." }, { id: "a-level-further-maths" as Course, title: "A-Level Further Maths", icon: "\u2211", desc: "Further Pure, Further Mechanics, and more." }].map(c => (
            <button key={c.id} onClick={() => goToYear(c.id)} className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">{c.icon}</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{c.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </button>
          ))}
        </div>
      )}

      {/* YEAR */}
      {view === "year" && (
        <div className="grid gap-5 sm:grid-cols-2 fade-up-delay-1">
          {[{ year: 1, title: "Year 1 (AS)", label: "Year 12" }, { year: 2, title: "Year 2 (A2)", label: "Year 13" }].map(y => (
            <button key={y.year} onClick={() => goToCategory(y.year)} className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-xl font-bold text-accent">{y.year}</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{y.title}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">{y.label}</p>
            </button>
          ))}
        </div>
      )}

      {/* CATEGORY (Pure / Statistics / Mechanics) */}
      {view === "category" && (
        <div className="grid gap-5 sm:grid-cols-3 fade-up-delay-1">
          {categories.map(c => (
            <button key={c.id} onClick={() => goToTopics(c.id)} disabled={c.topics.length === 0}
              className={`group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all ${c.topics.length > 0 ? "hover:-translate-y-1 hover:shadow-md hover:border-accent/30" : "opacity-40 cursor-not-allowed"}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">{c.icon}</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{c.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {c.topics.length > 0 ? `${c.topics.length} topics` : "Coming soon"}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* TOPIC CARDS */}
      {view === "topics" && (
        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 fade-up-delay-1">
          {topicCards.map(t => (
            <button key={t.num} onClick={() => goToSubtopics(t.subcategory)} className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30">
              <div className="aspect-[3/2] overflow-hidden">{t.illustration}</div>
              <div className="px-3 pb-3 pt-2">
                <p className="text-[11px] font-bold text-accent">{t.num}</p>
                <h3 className="text-sm font-bold text-foreground leading-tight mt-0.5">{t.title}</h3>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* SUBTOPICS */}
      {view === "subtopics" && (
        <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
          {subcategoryTopics.map(t => (
            <button key={t.id} onClick={() => goToQuestions(t.ref)} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-accent/40 hover:shadow-sm hover:-translate-y-0.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 font-mono text-xs font-bold text-accent">{t.ref}</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent truncate transition-colors"><MathTextInline text={t.title} /></h3>
                <p className="mt-0.5 text-xs text-foreground/50">{t.questionCount} questions</p>
              </div>
              <span className="text-foreground/30 group-hover:text-accent transition-all">&#8594;</span>
            </button>
          ))}
        </div>
      )}

      {/* QUESTION LIST */}
      {view === "questions" && (
        <div className="space-y-3 fade-up-delay-1">
          {topicQuestions.map((q, idx) => (
            <button key={q.id} onClick={() => goToAttempt(q)} className="w-full group overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-accent/30 hover:shadow-md">
              <div className="flex items-center justify-between px-5 py-4">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 text-sm font-bold text-accent font-mono">{idx + 1}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-foreground/85"><MathTextInline text={q.questionText} /></div>
                  </div>
                  <Badge variant="outline" className={diffBadge[q.difficulty]}>{q.difficulty}</Badge>
                  <span className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-0.5 text-xs font-medium text-foreground/60">{q.marks} marks</span>
                </div>
                <span className="ml-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity">Try with AI &#8594;</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ATTEMPT WITH AI */}
      {view === "attempt" && selectedQuestion && (
        <div className="fade-up-delay-1 space-y-6">
          {/* Question */}
          <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.06] to-transparent p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className={diffBadge[selectedQuestion.difficulty]}>{selectedQuestion.difficulty}</Badge>
              <span className="text-xs text-foreground/60">{selectedQuestion.marks} marks</span>
            </div>
            <div className="text-[0.95rem] leading-relaxed text-foreground/90 overflow-x-auto">
              <MathText text={selectedQuestion.questionText} />
            </div>
          </div>

          {/* Answer input */}
          {!evaluation && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Your Answer</label>
                <input value={answer} onChange={e => setAnswer(e.target.value)} maxLength={500} placeholder="Enter your mathematical answer..."
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                <p className="mt-1 text-xs text-muted-foreground">{answer.length}/500</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Your Reasoning</label>
                <textarea value={reasoning} onChange={e => setReasoning(e.target.value)} maxLength={500} rows={4} placeholder="Explain your method and why you chose this approach..."
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                <p className="mt-1 text-xs text-muted-foreground">{reasoning.length}/500</p>
              </div>
              {error && <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div>}
              <button onClick={submitForEvaluation} disabled={!answer.trim() || !reasoning.trim() || loading}
                className="btn-shine rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-6 py-3 text-sm font-bold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-40 disabled:hover:translate-y-0">
                {loading ? "AI is evaluating..." : "Submit for AI Evaluation"}
              </button>
            </div>
          )}

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              <span className="ml-3 text-sm text-muted-foreground">The AI tutor is evaluating your answer...</span>
            </div>
          )}

          {/* Evaluation */}
          {evaluation && !loading && (
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 text-xl font-bold ${scoreColor(evaluation.score)}`}>{evaluation.score}</div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${evaluation.answerCorrect ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                        Answer {evaluation.answerCorrect ? "Correct" : "Incorrect"}
                      </span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${evaluation.reasoningSound ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                        Reasoning {evaluation.reasoningSound ? "Sound" : "Needs Work"}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">Feedback</h3>
                      <div className="mt-1 text-sm text-foreground/80 leading-relaxed"><MathText text={evaluation.feedback} /></div>
                    </div>
                  </div>
                </div>
              </div>

              {evaluation.correctWorking && <CorrectWorkingPanel text={evaluation.correctWorking} />}

              {evaluation.mentalModelCorrection && (
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-200 text-amber-700 text-xs font-bold">!</span>
                    <h3 className="text-sm font-bold text-amber-700 uppercase tracking-wide">Mental Model Correction</h3>
                  </div>
                  <p className="text-sm text-amber-900/80 leading-relaxed"><MathText text={evaluation.mentalModelCorrection} /></p>
                </div>
              )}

              <div className="flex gap-3">
                <button onClick={() => { setEvaluation(null); setAnswer(""); setReasoning(""); }}
                  className="rounded-lg border border-accent/40 bg-accent/5 px-6 py-3 text-sm font-bold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10">
                  Try Again
                </button>
                <button onClick={() => goToQuestions(selectedTopicRef!)}
                  className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground/70 transition-all hover:bg-muted">
                  Back to Questions
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
