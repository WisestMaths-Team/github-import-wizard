"use client";

import Link from "next/link";

export default function Year2Page() {
  // Auth handled by courses layout RouteGuard

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="fade-up mb-6">
        <Link
          href="/courses/a-level-maths"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-accent transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to courses
        </Link>
      </div>

      <div className="fade-up-delay-1 flex items-baseline gap-3 mb-2">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Year 13</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <h1 className="fade-up-delay-1 text-2xl font-bold tracking-tight text-foreground">
        A-Level Maths &middot; Year 2
      </h1>

      {/* Component selection */}
      <div className="fade-up-delay-2 mt-8 grid gap-5 sm:grid-cols-3 mb-10">
        {[
          { title: "Pure Mathematics", icon: "\u222B", desc: "Proof, functions, sequences, calculus and more.", href: "/student/questions?year=2&component=pure" },
          { title: "Statistics", icon: "\u03A3", desc: "Probability, distributions, hypothesis testing.", href: "#" },
          { title: "Mechanics", icon: "\u2192", desc: "Projectiles, friction, moments.", href: "#" },
        ].map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className={`group overflow-hidden rounded-xl border border-border bg-card p-6 text-left transition-all ${c.href !== "#" ? "hover:-translate-y-1 hover:shadow-md hover:border-accent/30" : "opacity-40 cursor-not-allowed pointer-events-none"}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl font-bold text-accent">{c.icon}</div>
            <h2 className="mt-4 text-lg font-bold text-foreground">{c.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{c.href !== "#" ? c.desc : "Coming soon"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
