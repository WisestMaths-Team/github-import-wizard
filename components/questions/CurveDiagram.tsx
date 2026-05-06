"use client";

import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import type { CurveDiagramConfig } from "@/lib/types";

const WIDTH = 540;
const HEIGHT = 380;
const PAD_L = 54;
const PAD_R = 30;
const PAD_T = 28;
const PAD_B = 44;

type Anchor = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw" | "center";

const ANCHOR_TRANSLATE: Record<Anchor, { tx: string; ty: string; px: number; py: number }> = {
  n:      { tx: "-50%",  ty: "-100%", px: 0,  py: -6 },
  s:      { tx: "-50%",  ty: "0%",    px: 0,  py: 6 },
  e:      { tx: "0%",    ty: "-50%",  px: 6,  py: 0 },
  w:      { tx: "-100%", ty: "-50%",  px: -6, py: 0 },
  ne:     { tx: "0%",    ty: "-100%", px: 6,  py: -6 },
  nw:     { tx: "-100%", ty: "-100%", px: -6, py: -6 },
  se:     { tx: "0%",    ty: "0%",    px: 6,  py: 6 },
  sw:     { tx: "-100%", ty: "0%",    px: -6, py: 6 },
  center: { tx: "-50%",  ty: "-50%",  px: 0,  py: 0 },
};

type OverlayLabel = {
  x: number; // viewBox x
  y: number; // viewBox y
  math: string;
  anchor: Anchor;
  color: string;
  fontSize: number;
};

function LabelOverlay({ labels }: { labels: OverlayLabel[] }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{ overflow: "visible" }}
    >
      {labels.map((l, i) => {
        const off = ANCHOR_TRANSLATE[l.anchor];
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `calc(${(l.x / WIDTH) * 100}% + ${off.px}px)`,
              top: `calc(${(l.y / HEIGHT) * 100}% + ${off.py}px)`,
              transform: `translate(${off.tx}, ${off.ty})`,
              whiteSpace: "nowrap",
              color: l.color,
              fontSize: `${l.fontSize}px`,
              lineHeight: 1,
            }}
          >
            <InlineMath math={l.math} />
          </div>
        );
      })}
    </div>
  );
}

export function CurveDiagram({ config }: { config: CurveDiagramConfig }) {
  const plotW = WIDTH - PAD_L - PAD_R;
  const plotH = HEIGHT - PAD_T - PAD_B;

  const { xMin, xMax, yMin, yMax } = config;
  const sx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = (y: number) => PAD_T + plotH - ((y - yMin) / (yMax - yMin)) * plotH;

  const originVisible = xMin <= 0 && xMax >= 0 && yMin <= 0 && yMax >= 0;
  const xAxisY = originVisible ? sy(0) : sy(yMin);
  const yAxisX = originVisible ? sx(0) : sx(xMin);

  const labels: OverlayLabel[] = [];

  // Axis labels
  if (!config.hideAxes) {
    labels.push({
      x: sx(xMax) + 16,
      y: xAxisY,
      math: config.xLabel ?? "x",
      anchor: "e",
      color: "#111",
      fontSize: 14,
    });
    labels.push({
      x: yAxisX,
      y: sy(yMax) - 14,
      math: config.yLabel ?? "y",
      anchor: "w",
      color: "#111",
      fontSize: 14,
    });

    // Tick labels
    (config.xTicks ?? []).forEach((t) => {
      labels.push({
        x: sx(t),
        y: xAxisY + 6,
        math: String(t),
        anchor: "s",
        color: "#444",
        fontSize: 12,
      });
    });
    (config.yTicks ?? []).forEach((t) => {
      labels.push({
        x: yAxisX - 6,
        y: sy(t),
        math: String(t),
        anchor: "w",
        color: "#444",
        fontSize: 12,
      });
    });
  }

  // Curve labels
  (config.curves ?? []).forEach((curve) => {
    if (curve.label && curve.labelAt) {
      labels.push({
        x: sx(curve.labelAt[0]),
        y: sy(curve.labelAt[1]),
        math: curve.label,
        anchor: "ne",
        color: curve.color ?? "#1d4ed8",
        fontSize: 14,
      });
    }
  });

  // Line labels
  (config.lines ?? []).forEach((line) => {
    if (line.label && line.labelAt) {
      labels.push({
        x: sx(line.labelAt[0]),
        y: sy(line.labelAt[1]),
        math: line.label,
        anchor: "ne",
        color: line.color ?? "#dc2626",
        fontSize: 13,
      });
    }
  });

  // Point labels
  (config.points ?? []).forEach((p) => {
    if (p.label) {
      labels.push({
        x: sx(p.at[0]),
        y: sy(p.at[1]),
        math: p.label,
        anchor: p.labelAnchor ?? "ne",
        color: "#111",
        fontSize: 13,
      });
    }
  });

  return (
    <div className="my-4 flex justify-center">
      <div
        className="relative w-full"
        style={{ maxWidth: 600, aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L6,4 L0,8 z" fill="#111" />
            </marker>
            {(config.lines ?? []).filter(l => l.arrow).map((line, i) => {
              const c = line.color ?? "#dc2626";
              return (
                <marker
                  key={`am${i}`}
                  id={`line-arrow-${i}`}
                  markerWidth="10"
                  markerHeight="8"
                  refX="9"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0.5 L8,4 L0,7.5 z" fill={c} />
                </marker>
              );
            })}
          </defs>

          {/* x-axis */}
          {!config.hideAxes && <line
            x1={sx(xMin)}
            y1={xAxisY}
            x2={sx(xMax) + 6}
            y2={xAxisY}
            stroke="#111"
            strokeWidth="1.3"
            markerEnd="url(#arrow)"
          />}

          {/* y-axis */}
          {!config.hideAxes && <line
            x1={yAxisX}
            y1={sy(yMin)}
            x2={yAxisX}
            y2={sy(yMax) - 6}
            stroke="#111"
            strokeWidth="1.3"
            markerEnd="url(#arrow)"
          />}

          {/* x ticks */}
          {!config.hideAxes && (config.xTicks ?? []).map((t, i) => (
            <line
              key={`xt${i}`}
              x1={sx(t)}
              y1={xAxisY - 4}
              x2={sx(t)}
              y2={xAxisY + 4}
              stroke="#111"
              strokeWidth="1"
            />
          ))}

          {/* y ticks */}
          {!config.hideAxes && (config.yTicks ?? []).map((t, i) => (
            <line
              key={`yt${i}`}
              x1={yAxisX - 4}
              y1={sy(t)}
              x2={yAxisX + 4}
              y2={sy(t)}
              stroke="#111"
              strokeWidth="1"
            />
          ))}

          {/* filled regions */}
          {(config.fills ?? []).map((fill, i) => {
            const d = fill.points
              .map(([x, y], j) => `${j === 0 ? "M" : "L"} ${sx(x)} ${sy(y)}`)
              .join(" ") + " Z";
            return (
              <path
                key={`f${i}`}
                d={d}
                fill={fill.color ?? "#0d948833"}
                opacity={fill.opacity ?? 0.25}
                stroke="none"
              />
            );
          })}

          {/* curves */}
          {(config.curves ?? []).map((curve, i) => {
            const d = curve.points
              .map(([x, y], j) => `${j === 0 ? "M" : "L"} ${sx(x)} ${sy(y)}`)
              .join(" ");
            return (
              <path
                key={`c${i}`}
                d={d}
                fill="none"
                stroke={curve.color ?? "#1d4ed8"}
                strokeWidth={curve.width ?? 2.4}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            );
          })}

          {/* lines */}
          {(() => {
            let arrowIdx = 0;
            return (config.lines ?? []).map((line, i) => {
              const myArrowIdx = line.arrow ? arrowIdx++ : -1;
              return (
                <line
                  key={`l${i}`}
                  x1={sx(line.from[0])}
                  y1={sy(line.from[1])}
                  x2={sx(line.to[0])}
                  y2={sy(line.to[1])}
                  stroke={line.color ?? "#dc2626"}
                  strokeWidth="1.9"
                  strokeDasharray={line.dashed ? "6 4" : undefined}
                  markerEnd={line.arrow ? `url(#line-arrow-${myArrowIdx})` : undefined}
                />
              );
            });
          })()}

          {/* points */}
          {(config.points ?? []).map((p, i) => (
            <circle
              key={`p${i}`}
              cx={sx(p.at[0])}
              cy={sy(p.at[1])}
              r={p.r ?? 4.5}
              fill={p.color ?? "#111"}
            />
          ))}
        </svg>

        {/* HTML label overlay with KaTeX math */}
        <LabelOverlay labels={labels} />
      </div>
    </div>
  );
}
