"use client";

import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const years = [
  {
    id: "year-1",
    title: "Year 1 (AS)",
    description:
      "First-year A-Level content: Pure Core, Statistics, and Mechanics.",
    available: true,
  },
  {
    id: "year-2",
    title: "Year 2 (A2)",
    description:
      "Second-year A-Level content: Proof, Functions, Calculus and Vectors.",
    available: true,
  },
];

export default function ALevelMathsYearPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  // Auth handled by courses layout RouteGuard

  if (authLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-accent/[0.08] blur-3xl" />
      </div>

      <div className="w-full max-w-3xl text-center">
        <div className="fade-up mb-6">
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to courses
          </Link>
        </div>

        <h1 className="fade-up-delay-1 text-4xl md:text-5xl font-bold tracking-tight text-gradient-cool">
          A-Level Maths
        </h1>
        <p className="fade-up-delay-2 mx-auto mt-3 max-w-lg text-sm text-foreground/60">
          Choose which year of the course you want to study.
        </p>

        <div className="fade-up-delay-3 mt-10 grid gap-5 sm:grid-cols-2">
          {years.map((y, i) => {
            const inner = (
              <>
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:bg-accent/20" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 text-xl font-bold text-foreground shadow-inner-glow ring-1 ring-black/10">
                  {y.id === "year-1" ? "1" : "2"}
                </div>
                <h2 className="relative mt-5 text-lg font-bold text-foreground">
                  {y.title}
                </h2>
                <p className="relative mt-2 text-sm text-foreground/85 leading-relaxed">
                  {y.description}
                </p>
                {!y.available ? (
                  <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/60">
                    <span className="h-1 w-1 rounded-full bg-foreground/40" />
                    Coming Soon
                  </span>
                ) : (
                  <div className="relative mt-4 flex items-center gap-1.5 text-xs font-semibold text-accent transition-transform group-hover:translate-x-0.5">
                    Continue
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </>
            );

            const cls = `card-glow group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 text-left transition-all ${
              y.available
                ? "cursor-pointer hover:border-accent/40"
                : "opacity-50 cursor-not-allowed"
            }`;

            return y.available ? (
              <Link
                key={y.id}
                href={`/courses/a-level-maths/${y.id}`}
                className={cls}
                style={{ animationDelay: `${0.35 + i * 0.08}s` }}
              >
                {inner}
              </Link>
            ) : (
              <div key={y.id} className={cls} style={{ animationDelay: `${0.35 + i * 0.08}s` }}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
