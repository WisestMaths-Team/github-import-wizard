"use client";

import Link from "next/link";
import { getTopicById } from "@/lib/data/topics";
import { getTopicsForCourse } from "@/lib/data/courseData";
import { useCourse } from "@/hooks/useCourse";
import { Progress } from "@/components/ui/progress";
import { useTopicProgress } from "@/hooks/useTopicProgress";

export default function StudentDashboard() {
  const { course } = useCourse();
  const courseTopics = course ? getTopicsForCourse(course) : [];

  const {
    loaded,
    completedCount,
    totalWatched,
    lastAccessedId,
    readyForAssessment,
    recentTopicIds,
    categoryProgress,
    getWatchCount,
  } = useTopicProgress();

  const categories = Array.from(new Set(courseTopics.map((t) => t.category)));

  const lastTopic = lastAccessedId ? getTopicById(lastAccessedId) : null;

  const recentTopics = recentTopicIds
    .map((id) => getTopicById(id))
    .filter(Boolean)
    .slice(0, 4);

  const assessmentTopics = readyForAssessment
    .map((id) => getTopicById(id))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl">
      {/* Welcome banner */}
      <div className="rounded-xl bg-gradient-to-br from-accent via-accent to-accent/80 p-7 text-white shadow-lg">
        <h1 className="text-2xl font-bold">Welcome back, Student!</h1>
        <p className="mt-1 text-sm text-white/75">
          {completedCount > 0
            ? `You've completed ${completedCount} topic${completedCount !== 1 ? "s" : ""} so far. Keep going!`
            : "Start watching videos and track your progress across every topic."}
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* ─── Left column (2/3) ──────────────────── */}
        <div className="space-y-8 lg:col-span-2">
          {/* Progress overview */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Topics Watched",
                value: loaded ? `${completedCount} / ${courseTopics.length}` : "—",
                accent: "border-accent",
              },
              {
                label: "Videos Completed",
                value: loaded ? totalWatched : "—",
                accent: "border-primary",
              },
              {
                label: "Assessments Ready",
                value: loaded ? readyForAssessment.length : "—",
                accent: "border-emerald-500",
              },
            ].map((s) => (
              <div
                key={s.label}
                className={`rounded-lg border-l-4 ${s.accent} bg-white p-5 shadow-sm`}
              >
                <div className="text-2xl font-extrabold text-foreground">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Continue Learning */}
          {lastTopic && (
            <section>
              <h2 className="text-lg font-bold text-foreground">
                Continue Learning
              </h2>
              <div className="mt-3 flex items-center gap-4 rounded-lg border border-accent/20 bg-accent/5 p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white font-mono">
                  {lastTopic.ref}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-foreground">
                    {lastTopic.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {lastTopic.subcategory} &middot; {getWatchCount(lastTopic.id)}/4
                    videos watched
                  </p>
                </div>
                <Link
                  href={`/student/courseTopics/${lastTopic.id}`}
                  className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  Resume
                </Link>
              </div>
            </section>
          )}

          {/* Your Topics */}
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">
                {recentTopics.length > 0 ? "Your Topics" : "Get Started"}
              </h2>
              <Link
                href="/student/courseTopics"
                className="text-xs font-semibold text-accent hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {(recentTopics.length > 0
                ? recentTopics
                : courseTopics.slice(0, 4)
              ).map((t) =>
                t ? (
                  <Link
                    key={t.id}
                    href={`/student/courseTopics/${t.id}`}
                    className="flex items-center gap-3 rounded-lg border border-border bg-white p-4 shadow-sm transition-colors hover:bg-muted/30"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-xs font-bold text-accent font-mono">
                      {t.ref}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-foreground">
                        {t.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {t.subcategory} &middot; Year {t.module}
                      </p>
                    </div>
                  </Link>
                ) : null,
              )}
            </div>
          </section>

          {/* Upcoming Assessments */}
          {assessmentTopics.length > 0 && (
            <section>
              <h2 className="text-lg font-bold text-foreground">
                Upcoming Assessments
              </h2>
              <div className="mt-3 space-y-2">
                {assessmentTopics.map((t) =>
                  t ? (
                    <div
                      key={t.id}
                      className="flex items-center gap-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-foreground">
                          {t.title}
                        </h3>
                        <p className="text-xs text-emerald-700">
                          4/4 videos complete &mdash; AI assessment ready
                        </p>
                      </div>
                      <Link
                        href={`/student/assessment/${t.id}`}
                        className="shrink-0 rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                      >
                        Start
                      </Link>
                    </div>
                  ) : null,
                )}
              </div>
            </section>
          )}
        </div>

        {/* ─── Right sidebar (1/3) ────────────────── */}
        <aside className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">
            Category Progress
          </h2>
          {categories.map((cat) => {
            const catTopics = courseTopics.filter((t) => t.category === cat);
            const catIds = catTopics.map((t) => t.id);
            const pct = loaded ? categoryProgress(catIds) : 0;

            return (
              <div
                key={cat}
                className="rounded-lg border border-border bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    {cat}
                  </h3>
                  <span className="text-xs font-medium text-muted-foreground">
                    {pct}%
                  </span>
                </div>
                <Progress className="mt-2" value={pct} />
                <p className="mt-1.5 text-xs text-muted-foreground">
                  {catTopics.length} courseTopics
                </p>
              </div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
