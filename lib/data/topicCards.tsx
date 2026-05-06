import React from "react";

export interface TopicCardData {
  num: string;
  title: string;
  subcategory: string;
  illustration: React.ReactNode;
}

export const year1TopicCards: TopicCardData[] = [
  {
    num: "01", title: "Algebra", subcategory: "Algebra",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <text x="120" y="90" fontSize="28" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">
          <tspan fill="#d4775c" fontWeight="bold">a</tspan><tspan fill="#2d2a26">x</tspan><tspan fill="#2d2a26" fontSize="18" dy="-10">2</tspan><tspan dy="10" fill="#2d2a26"> + </tspan><tspan fill="#0d9488" fontWeight="bold">b</tspan><tspan fill="#2d2a26">x + </tspan><tspan fill="#c4a35a" fontWeight="bold">c</tspan><tspan fill="#2d2a26"> = 0</tspan>
        </text>
      </svg>
    ),
  },
  {
    num: "02", title: "Binomial Expansions 1", subcategory: "Binomial Expansions 1",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {[[120], [105, 135], [90, 120, 150], [75, 105, 135, 165], [60, 90, 120, 150, 180]].map((row, ri) => {
          const vals = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]][ri];
          return row.map((x, ci) => {
            const isEdge = ci === 0 || ci === row.length - 1;
            const isCenter = ri === 4 && ci === 2;
            const color = isCenter ? "#c4a35a" : isEdge ? "#0d9488" : "#d4775c";
            return (<g key={`${ri}-${ci}`}><rect x={x-13} y={16+ri*26} width="26" height="20" rx="5" fill={color} /><text x={x} y={31+ri*26} fontSize="12" fill="white" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">{vals[ci]}</text></g>);
          });
        })}
      </svg>
    ),
  },
  {
    num: "03", title: "Coordinate Geometry", subcategory: "Coordinate Geometry",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {Array.from({length: 8}, (_, i) => <line key={`v${i}`} x1={30*i+30} y1="10" x2={30*i+30} y2="150" stroke="#e0d8cc" strokeWidth="0.5" />)}
        {Array.from({length: 5}, (_, i) => <line key={`h${i}`} x1="20" y1={30*i+20} x2="220" y2={30*i+20} stroke="#e0d8cc" strokeWidth="0.5" />)}
        <line x1="60" y1="10" x2="60" y2="150" stroke="#2d2a26" strokeWidth="1.5" opacity="0.3" />
        <line x1="20" y1="110" x2="220" y2="110" stroke="#2d2a26" strokeWidth="1.5" opacity="0.3" />
        <line x1="40" y1="130" x2="200" y2="30" stroke="#0d9488" strokeWidth="2.5" />
        <circle cx="120" cy="80" r="5" fill="#d4775c" />
      </svg>
    ),
  },
  {
    num: "04", title: "Differentiation 1", subcategory: "Differentiation 1",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <path d="M 20 40 C 50 40 70 130 120 130 C 170 130 190 40 220 40" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="60" y1="130" x2="180" y2="130" stroke="#d4775c" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="120" cy="130" r="5" fill="#d4775c" />
        <text x="120" y="152" fontSize="13" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5" textAnchor="middle">dy/dx = 0</text>
      </svg>
    ),
  },
  {
    num: "05", title: "Exponentials & Logarithms", subcategory: "Exponentials and Logarithms",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <line x1="20" y1="120" x2="230" y2="120" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="60" y1="5" x2="60" y2="155" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="20" y1="160" x2="200" y2="-20" stroke="#2d2a26" strokeWidth="1" strokeDasharray="5 4" opacity="0.2" />
        <path d="M 20 118 C 35 117 45 115 60 105 C 75 95 85 80 100 55 C 115 30 125 15 140 5" stroke="#d4775c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 62 155 C 62 140 65 130 75 120 C 85 110 100 100 120 90 C 140 80 160 73 190 65" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="142" y="16" fontSize="11" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.8">y = e</text>
        <text x="170" y="10" fontSize="8" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.8">x</text>
        <text x="192" y="62" fontSize="11" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.8">y = ln x</text>
      </svg>
    ),
  },
  {
    num: "06", title: "Inequalities & Simultaneous Eqs", subcategory: "Inequalities and Simultaneous Equations",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <line x1="30" y1="30" x2="210" y2="30" stroke="#2d2a26" strokeWidth="1.5" opacity="0.25" />
        <line x1="30" y1="26" x2="30" y2="34" stroke="#2d2a26" strokeWidth="1.5" opacity="0.25" />
        <line x1="60" y1="26" x2="60" y2="34" stroke="#2d2a26" strokeWidth="1.5" opacity="0.25" />
        <line x1="80" y1="30" x2="200" y2="30" stroke="#d4775c" strokeWidth="4" strokeLinecap="round" />
        <polygon points="205,30 195,25 195,35" fill="#d4775c" />
        <circle cx="80" cy="30" r="5" fill="#faf7f2" stroke="#d4775c" strokeWidth="2" />
        <text x="30" y="62" fontSize="16" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.45">x &gt; k</text>
        <line x1="20" y1="80" x2="220" y2="145" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="145" x2="220" y2="75" stroke="#c4a35a" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="116" cy="111" r="5" fill="#0d9488" />
      </svg>
    ),
  },
  {
    num: "07", title: "Integration 1", subcategory: "Integration 1",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <line x1="40" y1="130" x2="220" y2="130" stroke="#2d2a26" strokeWidth="1.5" opacity="0.2" />
        <line x1="40" y1="10" x2="40" y2="140" stroke="#2d2a26" strokeWidth="1.5" opacity="0.2" />
        <path d="M 60 130 Q 80 125 100 90 Q 120 40 140 30 Q 160 40 180 90 Q 200 125 220 130" stroke="#2d2a26" strokeWidth="2" fill="none" opacity="0.3" />
        <path d="M 80 130 Q 100 120 120 60 Q 130 35 140 30 Q 150 35 160 60 Q 180 120 200 130 Z" fill="#d4775c" opacity="0.25" />
        <text x="60" y="26" fontSize="14" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6">∫ f(x)</text>
      </svg>
    ),
  },
  {
    num: "08", title: "Quadratics & Cubics", subcategory: "Quadratics and Cubics",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <path d="M 30 130 Q 80 20 130 80 Q 150 110 170 80 Q 200 20 220 130" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="20" y1="130" x2="230" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <circle cx="80" cy="45" r="5" fill="#c4a35a" />
        <circle cx="150" cy="110" r="5" fill="#c4a35a" />
        <circle cx="200" cy="45" r="5" fill="#c4a35a" />
      </svg>
    ),
  },
  {
    num: "09", title: "Trigonometry", subcategory: "Trigonometry 2",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <line x1="20" y1="80" x2="220" y2="80" stroke="#2d2a26" strokeWidth="0.8" opacity="0.12" />
        <path d="M 30 80 C 53 80 48 25 75 25 C 102 25 97 80 120 80 C 143 80 138 135 165 135 C 192 135 187 80 210 80" stroke="#d4775c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 30 25 C 53 25 48 80 75 80 C 102 80 97 135 120 135 C 143 135 138 80 165 80 C 192 80 187 25 210 25" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="56" y="20" fontSize="12" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.8">sin &#952;</text>
        <text x="96" y="152" fontSize="12" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.8">cos &#952;</text>
        <circle cx="75" cy="80" r="4" fill="#c4a35a" />
        <circle cx="120" cy="80" r="4" fill="#c4a35a" />
        <circle cx="165" cy="80" r="4" fill="#c4a35a" />
      </svg>
    ),
  },
  {
    num: "10", title: "Vectors 1", subcategory: "Vectors 1",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <defs>
          <marker id="qArrowT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 1L8 5L0 9z" fill="#0d9488" /></marker>
          <marker id="qArrowC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 1L8 5L0 9z" fill="#d4775c" /></marker>
        </defs>
        <line x1="40" y1="130" x2="140" y2="40" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#qArrowT)" />
        <line x1="140" y1="40" x2="210" y2="90" stroke="#d4775c" strokeWidth="2.5" markerEnd="url(#qArrowC)" />
        <line x1="40" y1="130" x2="210" y2="90" stroke="#2d2a26" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: "11", title: "Mixed Questions", subcategory: "Mixed Questions",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <text x="120" y="50" textAnchor="middle" fill="#0d9488" fontSize="22" fontWeight="bold" fontFamily="serif">∫ + dy/dx</text>
        <text x="120" y="85" textAnchor="middle" fill="#d4775c" fontSize="18" fontFamily="serif">x² + y² = r²</text>
        <text x="120" y="115" textAnchor="middle" fill="#2d2a26" fontSize="16" fontFamily="serif" opacity="0.5">log · sin · Σ</text>
        <line x1="40" y1="135" x2="200" y2="135" stroke="#0d9488" strokeWidth="2" opacity="0.3" />
      </svg>
    ),
  },
  // ── Statistics topic cards ──────────────────────────────────────
  {
    num: "11", title: "Statistical Sampling", subcategory: "Sampling",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Large population circle */}
        <circle cx="90" cy="80" r="55" fill="none" stroke="#0d9488" strokeWidth="2" opacity="0.4" />
        <text x="90" y="20" fontSize="10" fill="#0d9488" fontFamily="Georgia,serif" textAnchor="middle" opacity="0.6">Population</text>
        {/* Dots in population */}
        {[{x:60,y:55},{x:80,y:45},{x:105,y:50},{x:70,y:75},{x:95,y:70},{x:110,y:80},{x:75,y:100},{x:100,y:105},{x:65,y:90},{x:90,y:90},{x:115,y:95},{x:85,y:60},{x:50,y:70},{x:120,y:65},{x:55,y:95}].map((p, i) => (
          <circle key={`pop${i}`} cx={p.x} cy={p.y} r="3.5" fill={i < 5 ? "#d4775c" : "#0d9488"} opacity={i < 5 ? 0.8 : 0.25} />
        ))}
        {/* Arrow to sample */}
        <line x1="148" y1="80" x2="168" y2="80" stroke="#d4775c" strokeWidth="2" opacity="0.7" />
        <polygon points="170,80 164,76 164,84" fill="#d4775c" opacity="0.7" />
        {/* Sample circle */}
        <circle cx="200" cy="80" r="30" fill="none" stroke="#d4775c" strokeWidth="2" opacity="0.5" />
        <text x="200" y="120" fontSize="10" fill="#d4775c" fontFamily="Georgia,serif" textAnchor="middle" opacity="0.6">Sample</text>
        {[{x:190,y:70},{x:205,y:75},{x:195,y:88},{x:210,y:85},{x:198,y:78}].map((p, i) => (
          <circle key={`smp${i}`} cx={p.x} cy={p.y} r="3.5" fill="#d4775c" opacity="0.8" />
        ))}
      </svg>
    ),
  },
  {
    num: "12", title: "Probability", subcategory: "Probability",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Venn diagram — brighter outlines */}
        <circle cx="95" cy="75" r="45" fill="none" stroke="#0d9488" strokeWidth="2.5" opacity="0.6" />
        <circle cx="145" cy="75" r="45" fill="none" stroke="#d4775c" strokeWidth="2.5" opacity="0.6" />
        {/* Labels */}
        <text x="68" y="78" fontSize="20" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="bold" opacity="0.6">A</text>
        <text x="162" y="78" fontSize="20" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="bold" opacity="0.6">B</text>
        <text x="120" y="82" fontSize="10" fill="#c4a35a" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.7" textAnchor="middle">A∩B</text>
        {/* Formula */}
        <text x="120" y="145" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.45" textAnchor="middle">P(A∪B) = P(A) + P(B) − P(A∩B)</text>
      </svg>
    ),
  },
  {
    num: "13", title: "Statistical Distributions", subcategory: "Statistical Distributions",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Axis */}
        <line x1="20" y1="130" x2="220" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.15" />
        {/* Smooth bell curve — brighter teal */}
        <path d="M 20 130 C 40 130 55 128 70 118 C 85 105 95 75 105 45 C 110 30 115 22 120 20 C 125 22 130 30 135 45 C 145 75 155 105 170 118 C 185 128 200 130 220 130" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Mean line — brighter coral */}
        <line x1="120" y1="20" x2="120" y2="135" stroke="#d4775c" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
        {/* Labels — brighter */}
        <text x="120" y="148" fontSize="12" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.7" textAnchor="middle">μ</text>
        <text x="78" y="148" fontSize="9" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.45" textAnchor="middle">μ−σ</text>
        <text x="162" y="148" fontSize="9" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.45" textAnchor="middle">μ+σ</text>
      </svg>
    ),
  },
  {
    num: "14", title: "Hypothesis Testing", subcategory: "Hypothesis Testing",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Axis */}
        <line x1="20" y1="120" x2="220" y2="120" stroke="#2d2a26" strokeWidth="1" opacity="0.15" />
        {/* Full smooth bell curve — single path, no bumps */}
        <path d="M 20 120 C 40 120 55 118 70 108 C 85 95 95 65 105 40 C 110 28 115 22 120 20 C 125 22 130 28 135 40 C 145 65 155 95 170 108 C 185 118 200 120 220 120" stroke="#2d2a26" strokeWidth="2" fill="none" opacity="0.35" strokeLinecap="round" />
        {/* Shaded rejection region — area under the right tail of the SAME curve */}
        <path d="M 170 108 C 185 118 200 120 220 120 L 220 120 L 170 120 Z" fill="#d4775c" opacity="0.3" />
        {/* Critical value line */}
        <line x1="170" y1="108" x2="170" y2="125" stroke="#d4775c" strokeWidth="2" opacity="0.7" />
        {/* Labels — brighter */}
        <text x="120" y="15" fontSize="11" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6" textAnchor="middle">H₀: μ = μ₀</text>
        <text x="195" y="140" fontSize="9" fill="#d4775c" fontFamily="Georgia,serif" fontWeight="600" opacity="0.7" textAnchor="middle">Reject H₀</text>
        <text x="100" y="140" fontSize="9" fill="#0d9488" fontFamily="Georgia,serif" opacity="0.5" textAnchor="middle">Accept H₀</text>
      </svg>
    ),
  },
  {
    num: "15", title: "Kinematics", subcategory: "Kinematics",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Axes */}
        <line x1="30" y1="130" x2="220" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="30" y1="20" x2="30" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        {/* Velocity-time trapezium */}
        <path d="M 50 110 L 90 40 L 170 40 L 200 110" stroke="#0d9488" strokeWidth="2.5" fill="#0d9488" fillOpacity="0.1" strokeLinecap="round" strokeLinejoin="round" />
        {/* Labels */}
        <text x="15" y="80" fontSize="11" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">v</text>
        <text x="210" y="145" fontSize="11" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">t</text>
        <text x="130" y="32" fontSize="10" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6">s = area</text>
        {/* SUVAT hint */}
        <text x="130" y="110" fontSize="9" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5" textAnchor="middle">v = u + at</text>
      </svg>
    ),
  },
  {
    num: "16", title: "Variable Acceleration", subcategory: "Variable Acceleration",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Axes */}
        <line x1="30" y1="130" x2="220" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="30" y1="20" x2="30" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        {/* Curved velocity-time graph */}
        <path d="M 40 120 Q 80 115 110 70 Q 140 30 190 25" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Tangent line at a point */}
        <line x1="80" y1="120" x2="150" y2="40" stroke="#d4775c" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
        <circle cx="110" cy="70" r="4" fill="#d4775c" />
        {/* Calculus notation */}
        <g opacity="0.5">
          <text x="160" y="60" fontSize="12" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic">a =</text>
          <text x="185" y="52" fontSize="11" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic">dv</text>
          <line x1="183" y1="56" x2="203" y2="56" stroke="#d4775c" strokeWidth="1" />
          <text x="185" y="68" fontSize="11" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic">dt</text>
        </g>
      </svg>
    ),
  },
  {
    num: "17", title: "Forces and Motion", subcategory: "Forces and Motion",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <defs>
          <marker id="arrowF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1L8 5L0 9z" fill="#0d9488" />
          </marker>
          <marker id="arrowW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1L8 5L0 9z" fill="#d4775c" />
          </marker>
        </defs>
        {/* Block */}
        <rect x="85" y="55" width="70" height="45" rx="6" fill="#2d2a26" stroke="#2d2a26" strokeWidth="1.5" opacity="0.2" />
        <text x="120" y="82" fontSize="14" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle" opacity="0.4">m</text>
        {/* Force arrow right */}
        <line x1="155" y1="77" x2="210" y2="77" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#arrowF)" />
        <text x="195" y="70" fontSize="11" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="bold">F</text>
        {/* Weight arrow down */}
        <line x1="120" y1="100" x2="120" y2="140" stroke="#d4775c" strokeWidth="2" markerEnd="url(#arrowW)" />
        <text x="130" y="138" fontSize="10" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic">mg</text>
        {/* F = ma */}
        <text x="50" y="30" fontSize="14" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">F = ma</text>
      </svg>
    ),
  },
  {
    num: "18", title: "Connected Particles", subcategory: "Connected Particles",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {/* Table surface */}
        <line x1="40" y1="60" x2="160" y2="60" stroke="#2d2a26" strokeWidth="1.5" opacity="0.2" />
        {/* Pulley circle */}
        <circle cx="160" cy="60" r="12" fill="none" stroke="#2d2a26" strokeWidth="1.5" opacity="0.3" />
        <circle cx="160" cy="60" r="2" fill="#2d2a26" opacity="0.3" />
        {/* Block A on table */}
        <rect x="80" y="38" width="40" height="22" rx="4" fill="#0d9488" opacity="0.2" stroke="#0d9488" strokeWidth="1.5" />
        <text x="100" y="54" fontSize="11" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
        {/* String on table */}
        <line x1="120" y1="49" x2="148" y2="49" stroke="#2d2a26" strokeWidth="1" opacity="0.3" />
        {/* String hanging */}
        <line x1="172" y1="60" x2="172" y2="120" stroke="#2d2a26" strokeWidth="1" opacity="0.3" />
        {/* Block B hanging */}
        <rect x="152" y="120" width="40" height="22" rx="4" fill="#d4775c" opacity="0.2" stroke="#d4775c" strokeWidth="1.5" />
        <text x="172" y="136" fontSize="11" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
        {/* Tension label */}
        <text x="140" y="90" fontSize="10" fill="#c4a35a" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6">T</text>
        {/* Arrow on string */}
        <text x="135" y="45" fontSize="10" fill="#c4a35a" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6">T</text>
      </svg>
    ),
  },
];

export const year2TopicCards: TopicCardData[] = [
  {
    num: "01", title: "Algebraic Methods", subcategory: "Algebraic Methods",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <text x="18" y="36" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">partial fractions</text>
        <g opacity="0.6">
          <text x="50" y="75" fontSize="16" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">1</text>
          <line x1="10" y1="82" x2="90" y2="82" stroke="#2d2a26" strokeWidth="1.2" />
          <text x="50" y="100" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">(x&#8722;1)(x+2)</text>
        </g>
        <text x="108" y="86" fontSize="16" fill="#2d2a26" fontFamily="Georgia,serif" opacity="0.5">&#8801;</text>
        <g opacity="0.6">
          <text x="145" y="75" fontSize="16" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">A</text>
          <line x1="125" y1="82" x2="165" y2="82" stroke="#0d9488" strokeWidth="1.2" />
          <text x="145" y="100" fontSize="10" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">x &#8722; 1</text>
        </g>
        <text x="180" y="86" fontSize="16" fill="#2d2a26" fontFamily="Georgia,serif" opacity="0.5">+</text>
        <g opacity="0.6">
          <text x="210" y="75" fontSize="16" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">B</text>
          <line x1="190" y1="82" x2="230" y2="82" stroke="#d4775c" strokeWidth="1.2" />
          <text x="210" y="100" fontSize="10" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">x + 2</text>
        </g>
        <circle cx="60" cy="135" r="4" fill="#c4a35a" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: "02", title: "Binomial Expansion (Y2)", subcategory: "Binomial Expansion (Y2)",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        {[[120], [105, 135], [90, 120, 150], [75, 105, 135, 165], [60, 90, 120, 150, 180], [45, 75, 105, 135, 165, 195]].map((row, ri) => {
          const vals = [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1], [1,5,10,10,5,1]][ri];
          return row.map((x, ci) => (
            <g key={`${ri}-${ci}`}>
              <rect x={x-12} y={8+ri*22} width="24" height="18" rx="4" fill={ri < 2 ? "#0d9488" : ri < 4 ? "#d4775c" : "#c4a35a"} />
              <text x={x} y={22+ri*22} fontSize={ri >= 4 ? "9" : "11"} fill="white" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">{vals[ci]}</text>
            </g>
          ));
        })}
      </svg>
    ),
  },
  {
    num: "03", title: "Differentiation (Y2)", subcategory: "Differentiation (Y2)",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <text x="60" y="32" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">chain rule</text>
        <g opacity="0.7">
          <text x="40" y="72" fontSize="28" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic">dy</text>
          <line x1="30" y1="82" x2="80" y2="82" stroke="#2d2a26" strokeWidth="2" />
          <text x="40" y="104" fontSize="28" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic">dx</text>
        </g>
        <text x="92" y="90" fontSize="24" fill="#2d2a26" fontFamily="Georgia,serif" opacity="0.4">=</text>
        <g opacity="0.6">
          <text x="118" y="72" fontSize="20" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic">dy</text>
          <line x1="110" y1="80" x2="148" y2="80" stroke="#0d9488" strokeWidth="1.5" />
          <text x="118" y="98" fontSize="20" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic">du</text>
        </g>
        <text x="154" y="88" fontSize="22" fill="#2d2a26" fontFamily="Georgia,serif" opacity="0.5">&#183;</text>
        <g opacity="0.6">
          <text x="176" y="72" fontSize="20" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic">du</text>
          <line x1="168" y1="80" x2="206" y2="80" stroke="#d4775c" strokeWidth="1.5" />
          <text x="176" y="98" fontSize="20" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic">dx</text>
        </g>
      </svg>
    ),
  },
  {
    num: "04", title: "Functions & Graphs", subcategory: "Functions and Graphs",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <text x="100" y="24" fontSize="14" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4" textAnchor="middle">X</text>
        <text x="160" y="24" fontSize="14" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4" textAnchor="middle">Y</text>
        <ellipse cx="100" cy="80" rx="40" ry="50" fill="none" stroke="#0d9488" strokeWidth="2" />
        <ellipse cx="160" cy="80" rx="40" ry="50" fill="none" stroke="#0d9488" strokeWidth="2" />
        <circle cx="90" cy="60" r="4" fill="#d4775c" />
        <circle cx="90" cy="80" r="4" fill="#d4775c" />
        <circle cx="90" cy="100" r="4" fill="#d4775c" />
        <circle cx="170" cy="60" r="4" fill="#c4a35a" />
        <circle cx="170" cy="80" r="4" fill="#c4a35a" />
        <circle cx="170" cy="100" r="4" fill="#c4a35a" />
        <path d="M 94 60 Q 130 50 166 60" stroke="#2d2a26" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M 94 80 Q 130 70 166 80" stroke="#2d2a26" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M 94 100 Q 130 90 166 100" stroke="#2d2a26" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: "05", title: "Integration (Y2)", subcategory: "Integration (Y2)",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <line x1="30" y1="130" x2="220" y2="130" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="30" y1="10" x2="30" y2="140" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <path d="M 50 125 Q 90 110 120 60 Q 150 20 190 15" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 70 125 Q 100 105 130 55 Q 160 18 180 15 L 180 130 L 70 130 Z" fill="#d4775c" opacity="0.15" />
        <text x="60" y="28" fontSize="32" fill="#d4775c" fontFamily="Georgia,serif" opacity="0.4">&#8747;</text>
        <text x="82" y="22" fontSize="14" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">u dv</text>
      </svg>
    ),
  },
  {
    num: "06", title: "Numerical Methods", subcategory: "Numerical Methods",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <line x1="20" y1="140" x2="220" y2="140" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="40" y1="10" x2="40" y2="150" stroke="#2d2a26" strokeWidth="1" opacity="0.2" />
        <line x1="40" y1="140" x2="180" y2="0" stroke="#2d2a26" strokeWidth="1" strokeDasharray="4 3" opacity="0.25" />
        <path d="M 40 130 Q 80 120 120 70 Q 160 20 200 15" stroke="#0d9488" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <polyline points="80,140 80,110 94,110 94,85 108,85 108,66 120,66 120,54" stroke="#d4775c" strokeWidth="1.5" fill="none" />
        <text x="70" y="154" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">x&#8320;</text>
        <text x="118" y="154" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">&#945;</text>
        <text x="185" y="26" fontSize="10" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.6">g(x)</text>
        <text x="165" y="15" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.3">y = x</text>
      </svg>
    ),
  },
  {
    num: "07", title: "Parametric Equations", subcategory: "Parametric Equations",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <ellipse cx="100" cy="80" rx="60" ry="45" fill="none" stroke="#d4775c" strokeWidth="2.5" />
        <line x1="30" y1="80" x2="170" y2="80" stroke="#2d2a26" strokeWidth="0.8" opacity="0.2" />
        <line x1="100" y1="25" x2="100" y2="135" stroke="#2d2a26" strokeWidth="0.8" opacity="0.2" />
        <circle cx="145" cy="55" r="4" fill="#0d9488" />
        <circle cx="55" cy="55" r="4" fill="#0d9488" />
        <circle cx="100" cy="125" r="4" fill="#0d9488" />
        <text x="150" y="50" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">t&#8321;</text>
        <text x="42" y="50" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">t&#8320;</text>
        <text x="106" y="134" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">t&#8322;</text>
        <text x="170" y="60" fontSize="11" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">x = f(t)</text>
        <text x="170" y="78" fontSize="11" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">y = g(t)</text>
      </svg>
    ),
  },
  {
    num: "08", title: "Sequences & Series", subcategory: "Sequences and Series (Y2)",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <text x="40" y="32" fontSize="12" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">n</text>
        <text x="30" y="80" fontSize="52" fill="#0d9488" fontFamily="Georgia,serif" opacity="0.5">&#8721;</text>
        <text x="30" y="105" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">r=1</text>
        <text x="80" y="70" fontSize="18" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.5">r =</text>
        <g opacity="0.5">
          <text x="140" y="60" fontSize="16" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">n(n+1)</text>
          <line x1="108" y1="68" x2="172" y2="68" stroke="#d4775c" strokeWidth="1.5" />
          <text x="140" y="86" fontSize="16" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" textAnchor="middle">2</text>
        </g>
      </svg>
    ),
  },
  {
    num: "09", title: "Trigonometry (Y2)", subcategory: "Trigonometry (Y2)",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <circle cx="120" cy="80" r="55" fill="none" stroke="#0d9488" strokeWidth="2" />
        <line x1="55" y1="80" x2="185" y2="80" stroke="#2d2a26" strokeWidth="0.8" opacity="0.2" />
        <line x1="120" y1="20" x2="120" y2="140" stroke="#2d2a26" strokeWidth="0.8" opacity="0.2" />
        <line x1="120" y1="80" x2="160" y2="45" stroke="#2d2a26" strokeWidth="1.5" opacity="0.4" />
        <circle cx="160" cy="45" r="4" fill="#d4775c" />
        <path d="M 135 80 A 15 15 0 0 0 130 68" fill="none" stroke="#c4a35a" strokeWidth="1.5" />
        <text x="140" y="74" fontSize="11" fill="#c4a35a" fontFamily="Georgia,serif" fontStyle="italic">&#952;</text>
        <text x="162" y="72" fontSize="9" fill="#d4775c" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.7">sin &#952;</text>
        <text x="128" y="96" fontSize="9" fill="#0d9488" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.7">cos &#952;</text>
      </svg>
    ),
  },
  {
    num: "10", title: "Vectors (Y2)", subcategory: "Vectors (Y2)",
    illustration: (
      <svg viewBox="0 0 240 160" className="h-full w-full">
        <rect width="240" height="160" fill="#faf7f2" />
        <defs>
          <marker id="ar3dy2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 1L8 5L0 9z" fill="#2d2a26" opacity="0.4" />
          </marker>
          <marker id="arVy2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 1L8 5L0 9z" fill="#0d9488" />
          </marker>
        </defs>
        <line x1="80" y1="100" x2="160" y2="100" stroke="#2d2a26" strokeWidth="1.5" opacity="0.3" markerEnd="url(#ar3dy2)" />
        <line x1="80" y1="100" x2="80" y2="30" stroke="#2d2a26" strokeWidth="1.5" opacity="0.3" markerEnd="url(#ar3dy2)" />
        <line x1="80" y1="100" x2="45" y2="130" stroke="#2d2a26" strokeWidth="1.5" opacity="0.3" markerEnd="url(#ar3dy2)" />
        <text x="165" y="104" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">i</text>
        <text x="84" y="26" fontSize="10" fill="#2d2a26" fontFamily="Georgia,serif" fontStyle="italic" opacity="0.4">k</text>
        <line x1="80" y1="100" x2="150" y2="45" stroke="#0d9488" strokeWidth="2.5" markerEnd="url(#arVy2)" />
        <line x1="80" y1="100" x2="130" y2="70" stroke="#d4775c" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
    ),
  },
];
