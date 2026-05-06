"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getTopicsForCourse, getQuestionsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import type { Course } from "@/lib/types";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { CurveDiagram } from "@/components/questions/CurveDiagram";
import { Badge } from "@/components/ui/badge";
import { year1TopicCards, year2TopicCards } from "@/lib/data/topicCards";

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Standard: "bg-amber-50 text-amber-700 border-amber-200",
  Challenge: "bg-rose-50 text-rose-700 border-rose-200",
};

type ViewLevel = "course" | "year" | "component" | "categories" | "topics" | "questions";

const year1Components = [
  { id: "pure", title: "Pure Mathematics", icon: "\u222B", desc: "Algebra, trigonometry, calculus, vectors and more.", topics: ["Algebra", "Binomial Expansions 1", "Coordinate Geometry", "Differentiation 1", "Exponentials and Logarithms", "Inequalities and Simultaneous Equations", "Integration 1", "Quadratics and Cubics", "Trigonometry 2", "Vectors 1"] },
  { id: "statistics", title: "Statistics", icon: "\u03A3", desc: "Sampling, data presentation, correlation.", topics: ["Sampling", "Probability", "Statistical Distributions", "Hypothesis Testing"] },
  { id: "mechanics", title: "Mechanics", icon: "\u2192", desc: "Forces, motion, energy and momentum.", topics: ["Kinematics", "Variable Acceleration", "Forces and Motion", "Connected Particles"] },
];

const year2Components = [
  { id: "pure", title: "Pure Mathematics", icon: "\u222B", desc: "Proof, functions, sequences, calculus and more.", topics: ["Algebraic Methods", "Binomial Expansion (Y2)", "Differentiation (Y2)", "Functions and Graphs", "Integration (Y2)", "Numerical Methods", "Parametric Equations", "Sequences and Series (Y2)", "Trigonometry (Y2)", "Vectors (Y2)"] },
  { id: "statistics", title: "Statistics", icon: "\u03A3", desc: "Probability, distributions, hypothesis testing.", topics: [] },
  { id: "mechanics", title: "Mechanics", icon: "\u2192", desc: "Projectiles, friction, moments.", topics: [] },
];


export default function StudentQuestionBank() {
  const { course } = useCourse();
  const searchParams = useSearchParams();
  const subcategoryFilter = searchParams.get("subcategory");
  const topicRefParam = searchParams.get("topicRef");
  const moduleParam = searchParams.get("module");
  const moduleFilter = moduleParam ? Number(moduleParam) : null;
  const yearParam = searchParams.get("year");
  const componentParam = searchParams.get("component");

  const allTopics = useMemo(() => (course ? getTopicsForCourse(course) : []), [course]);
  const topicRefSubcategory = useMemo(() => {
    if (!topicRefParam) return null;
    const t = allTopics.find((t) => t.ref === topicRefParam);
    return t?.subcategory ?? null;
  }, [topicRefParam, allTopics]);

  const hasDeepLink = !!(topicRefParam || subcategoryFilter || componentParam);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(hasDeepLink ? course : null);
  const [selectedYear, setSelectedYear] = useState<number | null>(yearParam ? Number(yearParam) : moduleFilter);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(componentParam);
  const [viewLevel, setViewLevel] = useState<ViewLevel>(
    topicRefParam ? "questions" : subcategoryFilter ? "topics" : componentParam ? "categories" : "course"
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    topicRefSubcategory ?? subcategoryFilter
  );
  const [selectedTopicRef, setSelectedTopicRef] = useState<string | null>(topicRefParam);

  // When deep-linking with topicRef, sync selectedYear, selectedComponent, selectedSubcategory
  // from the topic data once it loads (course may load async from localStorage)
  useEffect(() => {
    if (topicRefParam && course && allTopics.length > 0) {
      const t = allTopics.find((t) => t.ref === topicRefParam);
      if (t) {
        if (!selectedCourse) setSelectedCourse(course);
        if (!selectedYear) setSelectedYear(t.module);
        if (!selectedSubcategory) setSelectedSubcategory(t.subcategory);
        if (!selectedComponent) {
          // Derive component id from category
          const categoryMap: Record<string, string> = { "Pure Mathematics": "pure", "Statistics": "statistics", "Mechanics": "mechanics" };
          setSelectedComponent(categoryMap[t.category] || "pure");
        }
      }
    }
  }, [topicRefParam, course, allTopics, selectedCourse, selectedYear, selectedSubcategory, selectedComponent]);

  // Restore scroll position when returning from attempt page
  useEffect(() => {
    if (topicRefParam) {
      const saved = sessionStorage.getItem("questions-scroll");
      if (saved) {
        const y = parseInt(saved, 10);
        setTimeout(() => window.scrollTo(0, y), 100);
        sessionStorage.removeItem("questions-scroll");
      }
    }
  }, [topicRefParam]);

  const subcategoryTopics = useMemo(() => {
    if (!selectedSubcategory || !selectedCourse) return [];
    const courseTopics = getTopicsForCourse(selectedCourse);
    const filtered = courseTopics.filter((t) => {
      if (t.subcategory !== selectedSubcategory) return false;
      if (selectedYear && t.module !== selectedYear) return false;
      return true;
    });
    const courseQuestions = getQuestionsForCourse(selectedCourse);
    const questionsByRef = new Map<string, number>();
    for (const q of courseQuestions) {
      questionsByRef.set(q.topicRef, (questionsByRef.get(q.topicRef) || 0) + 1);
    }
    return filtered
      .map((t) => ({ ...t, questionCount: questionsByRef.get(t.ref) || 0 }))
      .filter((t) => t.questionCount > 0)
      .sort((a, b) => a.ref.localeCompare(b.ref, undefined, { numeric: true }));
  }, [selectedSubcategory, selectedCourse, selectedYear]);

  const topicQuestions = useMemo(() => {
    if (!selectedTopicRef || !selectedCourse) return [];
    const courseQuestions = getQuestionsForCourse(selectedCourse);
    return courseQuestions
      .filter((q) => q.topicRef === selectedTopicRef)
      .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }, [selectedTopicRef, selectedCourse]);

  const selectedTopic = allTopics.find((t) => t.ref === selectedTopicRef);

  const components = selectedYear === 1 ? year1Components : year2Components;
  const selectedComponentData = components.find(c => c.id === selectedComponent);
  const allTopicCardsForYear = selectedYear === 1 ? year1TopicCards : year2TopicCards;
  const topicCards = selectedComponentData ? allTopicCardsForYear.filter(t => selectedComponentData.topics.includes(t.subcategory)) : allTopicCardsForYear;

  const goToCourse = () => { setViewLevel("course"); setSelectedCourse(null); setSelectedYear(null); setSelectedComponent(null); setSelectedSubcategory(null); setSelectedTopicRef(null); };
  const goToYear = (c: Course) => { setSelectedCourse(c); setViewLevel("year"); };
  const goToComponent = (year: number) => { setSelectedYear(year); setViewLevel("component"); };
  const goToCategories = (compId: string) => { setSelectedComponent(compId); setViewLevel("categories"); };
  const goToTopics = (sub: string) => { setSelectedSubcategory(sub); setSelectedTopicRef(null); setViewLevel("topics"); };
  const goToQuestions = (ref: string) => { setSelectedTopicRef(ref); setViewLevel("questions"); };

  // Breadcrumb labels
  const courseLabel = selectedCourse === "a-level-maths" ? "A-Level Maths" : selectedCourse === "a-level-further-maths" ? "A-Level Further Maths" : "";
  const yearLabel = selectedYear ? `Year ${selectedYear}` : "";

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Breadcrumbs */}
      <div className="mb-8 fade-up">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground/50">
          <button onClick={goToCourse} className="hover:text-accent transition-colors">Question Bank</button>
          {selectedCourse && viewLevel !== "course" && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goToYear(selectedCourse)} className="hover:text-accent transition-colors">{courseLabel}</button>
            </>
          )}
          {selectedYear && !["course", "year"].includes(viewLevel) && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goToComponent(selectedYear)} className="hover:text-accent transition-colors">{yearLabel}</button>
            </>
          )}
          {selectedComponent && !["course", "year", "component", "categories"].includes(viewLevel) && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goToCategories(selectedComponent)} className="hover:text-accent transition-colors">{selectedComponentData?.title}</button>
            </>
          )}
          {selectedSubcategory && (viewLevel === "topics" || viewLevel === "questions") && (
            <>
              <span className="text-foreground/30">/</span>
              <button onClick={() => goToTopics(selectedSubcategory)} className="hover:text-accent transition-colors">{selectedSubcategory}</button>
            </>
          )}
          {selectedTopic && viewLevel === "questions" && (
            <>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground/80"><MathTextInline text={selectedTopic.title} /></span>
            </>
          )}
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gradient-cool">
          {viewLevel === "course" ? "Question Bank" :
           viewLevel === "year" ? courseLabel :
           viewLevel === "component" ? `${courseLabel} \u00B7 ${yearLabel}` :
           viewLevel === "categories" ? (selectedComponentData?.title ?? "") :
           viewLevel === "topics" ? selectedSubcategory :
           selectedTopic ? <MathTextInline text={selectedTopic.title} /> : null}
        </h1>
        <p className="mt-1.5 text-sm text-foreground/60">
          {viewLevel === "course" && "Select a course to browse questions."}
          {viewLevel === "year" && "Select a year to continue."}
          {viewLevel === "component" && "Choose a component."}
          {viewLevel === "categories" && "Select a topic to browse questions."}
          {viewLevel === "topics" && "Select a topic to view questions."}
          {viewLevel === "questions" && (topicQuestions.length + " question" + (topicQuestions.length !== 1 ? "s" : "") + " available.")}
        </p>
      </div>

      {/* ── COURSE SELECTION ──────────────────────── */}
      {viewLevel === "course" && (
        <div className="grid gap-5 sm:grid-cols-2 fade-up-delay-1">
          {[
            { id: "a-level-maths" as Course, title: "A-Level Maths", icon: "\u222B", desc: "Pure Maths, Statistics, and Mechanics." },
            { id: "a-level-further-maths" as Course, title: "A-Level Further Maths", icon: "\u2211", desc: "Further Pure, Further Mechanics, and more." },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => goToYear(c.id)}
              className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">
                {c.icon}
              </div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{c.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </button>
          ))}
        </div>
      )}

      {/* ── YEAR SELECTION ──────────────────────── */}
      {viewLevel === "year" && (
        <>
          <button onClick={goToCourse} className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back
          </button>
          <div className="grid gap-5 sm:grid-cols-2 fade-up-delay-1">
            {[
              { year: 1, title: "Year 1 (AS)", label: "Year 12" },
              { year: 2, title: "Year 2 (A2)", label: "Year 13" },
            ].map((y) => (
              <button
                key={y.year}
                onClick={() => goToComponent(y.year)}
                className="group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-xl font-bold text-accent">
                  {y.year}
                </div>
                <h2 className="mt-4 text-lg font-bold text-foreground">{y.title}</h2>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-accent">{y.label}</p>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── COMPONENT SELECTION (Pure / Statistics / Mechanics) ── */}
      {viewLevel === "component" && (
        <div className="grid gap-5 sm:grid-cols-3 fade-up-delay-1">
          {components.map(c => (
            <button key={c.id} onClick={() => goToCategories(c.id)} disabled={c.topics.length === 0}
              className={`group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all ${c.topics.length > 0 ? "hover:-translate-y-1 hover:shadow-md hover:border-accent/30" : "opacity-40 cursor-not-allowed"}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">{c.icon}</div>
              <h2 className="mt-4 text-lg font-bold text-foreground">{c.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {c.topics.length > 0 ? c.desc : "Coming soon"}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* ── TOPIC CARDS (categories) ──────────────────────── */}
      {viewLevel === "categories" && (
        <>
          <button onClick={() => selectedYear && goToComponent(selectedYear)} className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back
          </button>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 fade-up-delay-1">
            {topicCards.map((t) => (
              <button
                key={t.num}
                onClick={() => goToTopics(t.subcategory)}
                className="group overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-md hover:border-accent/30"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  {t.illustration}
                </div>
                <div className="px-3 pb-3 pt-2">
                  <p className="text-[11px] font-bold text-accent">{t.num}</p>
                  <h3 className="text-sm font-bold text-foreground leading-tight mt-0.5">{t.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── TOPICS LIST ──────────────────────── */}
      {viewLevel === "topics" && (
        <>
          <button onClick={() => selectedComponent && goToCategories(selectedComponent)} className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to topics
          </button>
          <div className="grid gap-3 sm:grid-cols-2 fade-up-delay-1">
            {subcategoryTopics.map((t) => (
              <button
                key={t.id}
                onClick={() => goToQuestions(t.ref)}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-accent/40 hover:shadow-sm hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 font-mono text-xs font-bold text-accent">
                  {t.ref}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent truncate transition-colors"><MathTextInline text={t.title} /></h3>
                  <p className="mt-0.5 text-xs text-foreground/50">{t.questionCount} question{t.questionCount !== 1 ? "s" : ""}</p>
                </div>
                <span className="text-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 transition-all">&#8594;</span>
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── QUESTIONS LIST ──────────────────────── */}
      {viewLevel === "questions" && (
        <>
          <button
            onClick={() => selectedSubcategory && goToTopics(selectedSubcategory)}
            className="mb-5 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to {selectedSubcategory}
          </button>
          <div className="space-y-4 fade-up-delay-1">
            {topicQuestions.map((q, idx) => (
              <div key={q.id} className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-md">
                <div className="flex items-center justify-between border-b border-black/5 bg-black/[0.02] px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20 text-sm font-bold text-accent font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-foreground"><MathTextInline text={q.topicTitle} /></span>
                    <Badge variant="outline" className={diffBadge[q.difficulty]}>{q.difficulty}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-0.5 text-xs font-medium text-foreground/60">{q.marks} {q.marks === 1 ? "mark" : "marks"}</span>
                    {q.examStyle && <span className="rounded-full bg-secondary/15 border border-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary">Exam</span>}
                  </div>
                </div>
                <div className="px-5 py-5">
                  <div className="text-sm leading-relaxed text-foreground/85 overflow-x-auto">
                    {q.questionText.startsWith("[PREREQ:") ? (
                      <>
                        <p className="mb-2 text-xs font-semibold text-rose-600">{q.questionText.match(/\[PREREQ:(.*?)\]/)?.[1]}</p>
                        <MathText text={q.questionText.replace(/\[PREREQ:.*?\]\s*/, "")} />
                      </>
                    ) : (
                      <MathText text={q.questionText} />
                    )}
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {q.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="rounded-full border border-black/5 bg-black/[0.02] px-2.5 py-0.5 text-[11px] text-foreground/50">{tag}</span>
                      ))}
                    </div>
                    <Link href={`/student/questions/attempt?id=${q.id}`} onClick={() => sessionStorage.setItem("questions-scroll", String(window.scrollY))} className="btn-shine shrink-0 rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all hover:-translate-y-0.5 hover:shadow-glow">
                      Attempt
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
