import Link from "next/link";
import Image from "next/image";

const floatingSymbols = [
  { char: "\u222B", left: "6%", size: 68, duration: 22, delay: 0 },
  { char: "\u2211", left: "14%", size: 54, duration: 28, delay: 3 },
  { char: "\u03C0", left: "22%", size: 42, duration: 20, delay: 6 },
  { char: "\u221A", left: "31%", size: 60, duration: 26, delay: 1.5 },
  { char: "\u03B8", left: "40%", size: 44, duration: 24, delay: 8 },
  { char: "\u2202", left: "48%", size: 50, duration: 30, delay: 4 },
  { char: "\u221E", left: "58%", size: 62, duration: 22, delay: 7 },
  { char: "\u0394", left: "67%", size: 46, duration: 26, delay: 2 },
  { char: "\u2207", left: "76%", size: 56, duration: 28, delay: 5 },
  { char: "\u03A3", left: "84%", size: 52, duration: 24, delay: 9 },
  { char: "\u222E", left: "92%", size: 58, duration: 30, delay: 1 },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans">
      {/* Aurora gradient backdrop */}
      <div className="aurora-bg" />

      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Floating math symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingSymbols.map((s, i) => (
          <span
            key={i}
            className="float-symbol"
            style={{
              left: s.left,
              fontSize: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          >
            {s.char}
          </span>
        ))}
      </div>

      {/* Navbar */}
      <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-secondary text-white font-black text-lg shadow-glow-sm transition-transform group-hover:scale-105">
            W
          </span>
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground/90">
            Wisest Maths
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
            Question Bank
          </Link>
          <Link
            href="/login"
            className="ml-3 inline-flex items-center justify-center rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-glow hover:-translate-y-0.5"
          >
            Log in
          </Link>
        </div>

        <Link
          href="/login"
          className="md:hidden inline-flex items-center justify-center rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-white"
        >
          Log in
        </Link>
      </nav>

      {/* Hero */}
      <main className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24 lg:pt-16">
        {/* Left column — copy */}
        <div className="relative">
          <div className="fade-up inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary animate-glow-pulse" />
            A-Level Maths
          </div>

          <h1 className="fade-up-delay-1 mt-6 font-display text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.88]">
            <span className="text-gradient">Hey there.</span>
          </h1>
          <p className="fade-up-delay-1 mt-3 text-base md:text-lg font-medium text-foreground/80">
            I&apos;m <span className="text-foreground font-semibold">Dr Benjamin J. Walpole</span> — founder of Wisest Maths.
          </p>

          <div className="fade-up-delay-2 mt-6 h-px w-full bg-gradient-to-r from-accent/40 via-black/10 to-transparent" />

          <div className="fade-up-delay-3 mt-6 space-y-4 text-sm md:text-[0.95rem] leading-relaxed text-foreground/70 max-w-xl">
            <p>
              Back in 2011 I was predicted a <span className="font-semibold text-rose-600">D</span> at GCSE Maths — then walked out with an <span className="font-semibold text-emerald-600">A*</span>. The difference wasn&apos;t talent. It was relentless, example-led practice.
            </p>
            <p>
              That breakthrough carried me through A-Levels, a First-Class Master&apos;s with Honours, and a PhD in applied mathematics — and it shaped every corner of this platform. Wisest Maths is built from first principles of the cognitive science of learning: hundreds of fully worked examples, a question bank that mirrors the exam, and AI that probes your real understanding — not just pattern recognition.
            </p>
            <p className="text-foreground/90 font-medium">
              If a D-predicted student can reach an A*, so can you.
            </p>
          </div>

          <div className="fade-up-delay-4 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/login"
              className="btn-shine group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-[#0f766e] px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(13,148,136,0.35)]"
            >
              Start Learning
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 px-6 py-3 text-sm font-semibold text-foreground/90 transition-all hover:bg-white/90 hover:border-black/15"
            >
              Browse Video Topics
            </Link>
          </div>

          {/* Stats */}
          <div className="fade-up-delay-4 mt-10 grid grid-cols-3 gap-6 border-t border-black/5 pt-6 max-w-md">
            <div>
              <p className="flex items-center gap-1.5 text-2xl font-bold">
                <span className="text-rose-500/80 line-through decoration-2">D</span>
                <span className="text-foreground/30 text-lg">&rarr;</span>
                <span className="text-gradient">A*</span>
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-foreground/50">My GCSE Journey</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gradient-cool">100s</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-foreground/50">Worked Solutions</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gradient-cool">AI</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-foreground/50">Understanding Tests</p>
            </div>
          </div>
        </div>

        {/* Right column — avatar in front of a maths whiteboard */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px] aspect-[5/6]">
            {/* Whiteboard panel */}
            <div className="fade-up-delay-1 absolute inset-0 overflow-hidden rounded-[28px] border border-black/10 bg-gradient-to-br from-[#f5f0e8] to-[#faf7f2] shadow-lg">
              {/* Subtle dot grid */}
              <div className="absolute inset-0 opacity-60"
                   style={{
                     backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
                     backgroundSize: "18px 18px",
                   }}
              />
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.04] via-transparent to-transparent" />

              {/* Whiteboard scribbles — chalk/marker math */}
              <svg viewBox="0 0 500 600" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="chalk" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0d9488" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#c4a35a" stopOpacity="0.45" />
                  </linearGradient>
                  <linearGradient id="chalk2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#d4775c" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0891b2" stopOpacity="0.35" />
                  </linearGradient>
                </defs>

                {/* TOP BAND — calculus */}
                <g style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                  <text x="30" y="56" fontSize="28" fill="url(#chalk)" opacity="0.75">
                    f(x) = x&#179; &#8722; 3x&#178; + 2
                  </text>
                  <text x="30" y="92" fontSize="22" fill="url(#chalk)" opacity="0.55">
                    f&#8242;(x) = 3x&#178; &#8722; 6x
                  </text>
                  <text x="30" y="118" fontSize="18" fill="#0d9488" opacity="0.35">
                    = 3x(x &#8722; 2)
                  </text>
                </g>

                {/* Integral block — top right */}
                <g style={{ fontFamily: "Georgia, serif" }}>
                  <text x="330" y="68" fontSize="58" fill="url(#chalk2)" opacity="0.6">&#8747;</text>
                  <text x="370" y="72" fontSize="24" fill="#0d9488" opacity="0.6" fontStyle="italic">x&#178; dx</text>
                  <text x="370" y="98" fontSize="16" fill="#0d9488" opacity="0.4" fontStyle="italic">= x&#179;/3 + C</text>
                  {/* limits */}
                  <text x="348" y="46" fontSize="14" fill="#0d9488" opacity="0.45">b</text>
                  <text x="348" y="86" fontSize="14" fill="#0d9488" opacity="0.45">a</text>
                </g>

                {/* Mini coordinate graph — top left under band */}
                <g transform="translate(26,146)" opacity="0.5">
                  <line x1="0" y1="90" x2="150" y2="90" stroke="#64748b" strokeWidth="1" opacity="0.4" />
                  <line x1="75" y1="0" x2="75" y2="130" stroke="#64748b" strokeWidth="1" opacity="0.4" />
                  {/* parabola */}
                  <path d="M 0 10 Q 75 150 150 10" stroke="url(#chalk)" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                  <circle cx="75" cy="90" r="2.5" fill="#0891b2" />
                </g>

                {/* Right-hand sin/cos waves */}
                <g transform="translate(250,150)" opacity="0.5">
                  <line x1="0" y1="35" x2="230" y2="35" stroke="#64748b" strokeWidth="1" opacity="0.3" />
                  <path d="M 0 35 Q 29 -5 57 35 T 114 35 T 171 35 T 228 35" stroke="url(#chalk2)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M 0 35 Q 29 75 57 35 T 114 35 T 171 35 T 228 35" stroke="#0d9488" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" opacity="0.4" />
                  <text x="170" y="15" fontSize="12" fill="#0d9488" opacity="0.45" fontStyle="italic" fontFamily="Georgia,serif">sin &#952;</text>
                </g>

                {/* Middle band — Pythagoras triangle */}
                <g transform="translate(32,310)" opacity="0.5">
                  <polygon points="0,90 120,90 120,10" stroke="url(#chalk)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                  <rect x="108" y="78" width="12" height="12" stroke="#0d9488" strokeWidth="1" fill="none" opacity="0.4" />
                  <text x="50" y="108" fontSize="12" fill="#0d9488" opacity="0.6" fontFamily="Georgia,serif" fontStyle="italic">a</text>
                  <text x="128" y="55" fontSize="12" fill="#0d9488" opacity="0.6" fontFamily="Georgia,serif" fontStyle="italic">b</text>
                  <text x="42" y="48" fontSize="12" fill="#0d9488" opacity="0.6" fontFamily="Georgia,serif" fontStyle="italic">c</text>
                  <text x="0" y="138" fontSize="16" fill="url(#chalk2)" opacity="0.7" fontFamily="Georgia,serif" fontStyle="italic">a&#178; + b&#178; = c&#178;</text>
                </g>

                {/* Quadratic formula */}
                <g>
                  <text x="200" y="350" fontSize="22" fill="url(#chalk2)" opacity="0.6" fontFamily="Georgia,serif" fontStyle="italic">
                    x = <tspan>&#8722;b &#177; &#8730;(b&#178; &#8722; 4ac)</tspan>
                  </text>
                  <line x1="240" y1="358" x2="450" y2="358" stroke="#0d9488" strokeWidth="1" opacity="0.3" />
                  <text x="310" y="378" fontSize="18" fill="#0d9488" opacity="0.4" fontFamily="Georgia,serif" fontStyle="italic">2a</text>
                </g>

                {/* Summation */}
                <g>
                  <text x="30" y="480" fontSize="52" fill="url(#chalk)" opacity="0.5" fontFamily="Georgia,serif">&#8721;</text>
                  <text x="26" y="448" fontSize="11" fill="#0d9488" opacity="0.45" fontFamily="Georgia,serif" fontStyle="italic">n</text>
                  <text x="26" y="500" fontSize="11" fill="#0d9488" opacity="0.45" fontFamily="Georgia,serif" fontStyle="italic">k=1</text>
                  <text x="85" y="475" fontSize="20" fill="#0d9488" opacity="0.5" fontFamily="Georgia,serif" fontStyle="italic">k = n(n+1)/2</text>
                </g>

                {/* Trig identity bottom */}
                <g opacity="0.5">
                  <text x="30" y="550" fontSize="18" fill="url(#chalk2)" fontFamily="Georgia,serif" fontStyle="italic">
                    sin&#178;&#952; + cos&#178;&#952; = 1
                  </text>
                  <text x="260" y="550" fontSize="18" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6">
                    e^(i&#960;) + 1 = 0
                  </text>
                </g>

                {/* Small arrows / ticks scattered */}
                <g opacity="0.3" stroke="#0d9488" strokeWidth="1.2" fill="none" strokeLinecap="round">
                  <path d="M 420 200 l -12 -4 l 10 8 z" fill="#0d9488" />
                  <path d="M 380 210 Q 400 200 418 196" />
                  <path d="M 60 250 l 12 -6" />
                  <path d="M 460 420 l -10 6" />
                </g>
              </svg>

              {/* Glow pulse */}
              <div className="absolute inset-x-0 top-1/3 h-64 bg-gradient-radial from-accent/10 via-accent/3 to-transparent blur-3xl animate-glow-pulse" />
            </div>

            {/* Soft halo behind head */}
            <div className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 h-60 w-60 rounded-full bg-gradient-to-br from-accent/15 via-accent/5 to-secondary/10 blur-3xl animate-glow-pulse" />

            {/* Avatar (foreground) */}
            <div className="fade-up-delay-2 relative h-full w-full flex items-end justify-center">
              <Image
                src="/avatar.png"
                alt="Dr Benjamin J. Walpole"
                width={800}
                height={800}
                className="relative z-10 object-contain object-bottom max-h-[88vh] drop-shadow-[0_30px_80px_rgba(13,148,136,0.2)]"
                priority
              />
            </div>

            {/* Floating math badges */}
            <div className="glass-strong fade-up-delay-3 absolute top-[10%] -left-2 md:-left-6 rounded-xl px-3.5 py-2.5 shadow-lg hidden sm:flex items-center gap-2.5 z-20">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-secondary text-white text-sm font-bold">
                &#8747;
              </span>
              <div className="text-left">
                <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/50">Integration</p>
                <p className="font-math text-xs text-foreground/90">∫ x² dx = x³/3</p>
              </div>
            </div>

            <div className="glass-strong fade-up-delay-4 absolute bottom-[26%] -right-2 md:-right-4 rounded-xl px-3.5 py-2.5 shadow-lg hidden sm:flex items-center gap-2.5 z-20">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-secondary to-accent text-white text-sm font-bold">
                &#402;
              </span>
              <div className="text-left">
                <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/50">Worked Solution</p>
                <p className="font-math text-xs text-foreground/90">Step-by-step</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom trust strip */}
      <div className="relative z-10 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-foreground/80">
            <p className="uppercase tracking-[0.2em] text-foreground/50">Built on the cognitive science of learning</p>
            <div className="flex items-center gap-6">
              <span>Pure Maths</span>
              <span className="h-1 w-1 rounded-full bg-foreground/30" />
              <span>Statistics</span>
              <span className="h-1 w-1 rounded-full bg-foreground/30" />
              <span>Mechanics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
