"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getTopicsForCourse, getQuestionsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import type { Question } from "@/lib/types";
import { MathText, MathTextInline } from "@/components/questions/MathText";
import { WorkedSolutionPanel } from "@/components/questions/WorkedSolution";
import { QuestionForm } from "@/components/questions/QuestionForm";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

/* ── colour maps ──────────────────────────────────────── */

const diffBadge: Record<string, string> = {
  Foundation: "bg-emerald-100 text-emerald-700 border-emerald-300",
  Standard: "bg-amber-100 text-amber-700 border-amber-300",
  Challenge: "bg-red-100 text-red-700 border-red-300",
};

const diffDot: Record<string, string> = {
  Foundation: "bg-emerald-500",
  Standard: "bg-amber-500",
  Challenge: "bg-red-500",
};

const diffOrder: Record<string, number> = {
  Foundation: 0,
  Standard: 1,
  Challenge: 2,
};

type Diff = "Foundation" | "Standard" | "Challenge";
type SortKey = "difficulty" | "topic" | "marks";

/* ── page ─────────────────────────────────────────────── */

export default function TeacherQuestionBank() {
  const router = useRouter();

  /* simple role gate */
  const [role, setRole] = useState<string | null>(null);
  useEffect(() => {
    const r = localStorage.getItem("mathsapp-role");
    if (r === "teacher") {
      setRole("teacher");
    } else if (r) {
      router.push("/login");
    } else {
      /* first visit: default to teacher for prototype */
      localStorage.setItem("mathsapp-role", "teacher");
      setRole("teacher");
    }
  }, [router]);

  const { course } = useCourse();
  const topics = useMemo(() => course ? getTopicsForCourse(course) : [], [course]);
  const questions = useMemo(() => course ? getQuestionsForCourse(course) : [], [course]);

  /* ── filter state ───────────────────────────────────── */
  const [search, setSearch] = useState("");
  const [topicSearch, setTopicSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [showTopicDrop, setShowTopicDrop] = useState(false);
  const [diffs, setDiffs] = useState<Set<Diff>>(new Set());
  const [moduleFilter, setModuleFilter] = useState<"all" | 1 | 2>("all");
  const [examOnly, setExamOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortKey>("difficulty");

  /* slide-over & add dialog */
  const [selected, setSelected] = useState<Question | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  /* topic map for module lookup */
  const topicMap = useMemo(() => {
    const m: Record<string, (typeof topics)[0]> = {};
    topics.forEach((t) => (m[t.ref] = t));
    return m;
  }, [topics]);

  /* matching topics for dropdown */
  const matchingTopics = useMemo(() => {
    if (!topicSearch.trim()) return [];
    const q = topicSearch.toLowerCase();
    return topics
      .filter(
        (t) =>
          t.ref.toLowerCase().includes(q) ||
          t.title.toLowerCase().includes(q) ||
          t.subcategory.toLowerCase().includes(q),
      )
      .slice(0, 8);
  }, [topicSearch, topics]);

  /* filtered + sorted questions */
  const results = useMemo(() => {
    let list = questions;

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (qn) =>
          qn.questionText.toLowerCase().includes(q) ||
          qn.topicTitle.toLowerCase().includes(q) ||
          qn.tags.some((tag) => tag.includes(q)),
      );
    }

    if (topicFilter) {
      list = list.filter((qn) => qn.topicRef === topicFilter);
    }

    if (diffs.size > 0) {
      list = list.filter((qn) => diffs.has(qn.difficulty));
    }

    if (moduleFilter !== "all") {
      list = list.filter(
        (qn) => topicMap[qn.topicRef]?.module === moduleFilter,
      );
    }

    if (examOnly) {
      list = list.filter((qn) => qn.examStyle);
    }

    /* sort */
    return [...list].sort((a, b) => {
      if (sortBy === "difficulty")
        return diffOrder[a.difficulty] - diffOrder[b.difficulty];
      if (sortBy === "topic") return a.topicRef.localeCompare(b.topicRef);
      return a.marks - b.marks;
    });
  }, [search, topicFilter, diffs, moduleFilter, examOnly, sortBy, topicMap, questions]);

  const uniqueTopicCount = new Set(results.map((q) => q.topicRef)).size;

  const clearFilters = () => {
    setSearch("");
    setTopicSearch("");
    setTopicFilter(null);
    setDiffs(new Set());
    setModuleFilter("all");
    setExamOnly(false);
  };

  const toggleDiff = (d: Diff) => {
    setDiffs((prev) => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });
  };

  if (role !== "teacher") {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
        Checking access...
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Question Bank</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage and review questions for students.
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          + Add Question
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* ── Filter Sidebar ─────────────────────────── */}
        <aside className="space-y-5 rounded-xl border border-border bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Filters
          </h2>

          {/* Keyword search */}
          <div>
            <Label className="text-xs">Search</Label>
            <Input
              placeholder="Keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-1.5"
            />
          </div>

          {/* Topic searchable dropdown */}
          <div className="relative">
            <Label className="text-xs">Topic</Label>
            <Input
              placeholder="Search topics..."
              value={topicSearch}
              onChange={(e) => {
                setTopicSearch(e.target.value);
                setShowTopicDrop(true);
                if (!e.target.value.trim()) setTopicFilter(null);
              }}
              onFocus={() => topicSearch && setShowTopicDrop(true)}
              onBlur={() => setTimeout(() => setShowTopicDrop(false), 200)}
              className="mt-1.5"
            />
            {showTopicDrop && matchingTopics.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-48 overflow-y-auto rounded-md border border-border bg-white shadow-lg">
                {topicFilter && (
                  <button
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setTopicFilter(null);
                      setTopicSearch("");
                      setShowTopicDrop(false);
                    }}
                    className="w-full px-3 py-2 text-left text-xs text-accent hover:bg-muted"
                  >
                    Clear topic filter
                  </button>
                )}
                {matchingTopics.map((t) => (
                  <button
                    key={t.id}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => {
                      setTopicFilter(t.ref);
                      setTopicSearch(t.ref + " \u2013 " + t.title);
                      setShowTopicDrop(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted"
                  >
                    <span className="font-mono text-xs text-accent">
                      {t.ref}
                    </span>{" "}
                    {t.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Difficulty */}
          <div>
            <Label className="text-xs">Difficulty</Label>
            <div className="mt-2 space-y-2">
              {(["Foundation", "Standard", "Challenge"] as Diff[]).map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm">
                  <Checkbox
                    checked={diffs.has(d)}
                    onCheckedChange={() => toggleDiff(d)}
                  />
                  <span className={`h-2 w-2 rounded-full ${diffDot[d]}`} />
                  {d}
                </label>
              ))}
            </div>
          </div>

          <Separator />

          {/* Module */}
          <div>
            <Label className="text-xs">Module</Label>
            <div className="mt-2 space-y-2">
              {[
                { v: "all" as const, l: "All" },
                { v: 1 as const, l: "Year 1" },
                { v: 2 as const, l: "Year 2" },
              ].map((o) => (
                <label key={String(o.v)} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="module"
                    checked={moduleFilter === o.v}
                    onChange={() => setModuleFilter(o.v)}
                    className="accent-accent"
                  />
                  {o.l}
                </label>
              ))}
            </div>
          </div>

          <Separator />

          {/* Exam style */}
          <label className="flex items-center gap-2 text-sm">
            <Checkbox
              checked={examOnly}
              onCheckedChange={(v) => setExamOnly(!!v)}
            />
            Exam style only
          </label>

          <button
            onClick={clearFilters}
            className="w-full rounded-md border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted"
          >
            Clear Filters
          </button>
        </aside>

        {/* ── Main Content ───────────────────────────── */}
        <div>
          {/* Toolbar */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {results.length}
              </span>{" "}
              question{results.length !== 1 ? "s" : ""} across{" "}
              <span className="font-semibold text-foreground">
                {uniqueTopicCount}
              </span>{" "}
              topic{uniqueTopicCount !== 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="rounded-md border border-input px-2.5 py-1.5 text-xs"
              >
                <option value="difficulty">Difficulty</option>
                <option value="topic">Topic</option>
                <option value="marks">Marks</option>
              </select>
            </div>
          </div>

          {/* Question list */}
          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border py-16 text-center text-sm text-muted-foreground">
              No questions match your filters.
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((q) => (
                <div
                  key={q.id}
                  className="flex items-start gap-4 rounded-lg border border-border bg-white p-5 shadow-sm transition-colors hover:bg-muted/20"
                >
                  {/* Difficulty dot */}
                  <span
                    className={`mt-1.5 h-3 w-3 shrink-0 rounded-full ${diffDot[q.difficulty]}`}
                    title={q.difficulty}
                  />

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-foreground">
                        <MathTextInline text={q.topicTitle} />
                      </span>
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">
                        {q.topicRef}
                      </span>
                      <Badge
                        variant="outline"
                        className={diffBadge[q.difficulty]}
                      >
                        {q.difficulty}
                      </Badge>
                      {q.examStyle && (
                        <Badge variant="secondary" className="text-xs">
                          Exam
                        </Badge>
                      )}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      <MathText text={q.questionText} />
                    </div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {q.marks} marks
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-col gap-2">
                    <button
                      onClick={() => setSelected(q)}
                      className="rounded-md bg-primary px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-secondary"
                    >
                      View Question
                    </button>
                    <button className="rounded-md border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted">
                      Assign
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Slide-over: Full Question + Solution ──── */}
      <Sheet
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          {selected && (
            <>
              <SheetHeader>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent/10 px-2 py-0.5 text-xs font-bold text-accent font-mono">
                    {selected.topicRef}
                  </span>
                  <Badge
                    variant="outline"
                    className={diffBadge[selected.difficulty]}
                  >
                    {selected.difficulty}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {selected.marks} marks
                  </span>
                </div>
                <SheetTitle className="mt-2">
                  <MathTextInline text={selected.topicTitle} />
                </SheetTitle>
              </SheetHeader>

              <Separator className="my-4" />

              {/* Full question */}
              <div className="text-sm leading-relaxed text-foreground">
                <MathText text={selected.questionText} />
              </div>

              <Separator className="my-6" />

              {/* Worked solution */}
              <h3 className="mb-4 text-sm font-bold text-foreground">
                Worked Solution
              </h3>
              <WorkedSolutionPanel solution={selected.workedSolution} />
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* ── Add Question Dialog ──────────────────── */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New Question</DialogTitle>
          </DialogHeader>
          <QuestionForm onSave={() => setShowAdd(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
