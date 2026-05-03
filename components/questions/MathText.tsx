"use client";

import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

/**
 * Parses a markdown-style pipe table into structured rows.
 * Returns null if the text doesn't contain a valid table.
 */
function parseMarkdownTable(text: string): { headers: string[]; rows: string[][] } | null {
  const lines = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length < 3) return null;

  const tableLines = lines.filter(l => l.startsWith("|") && l.endsWith("|"));
  if (tableLines.length < 3) return null;

  const parseLine = (line: string) =>
    line.split("|").slice(1, -1).map(cell => cell.trim());

  const headers = parseLine(tableLines[0]);
  // Skip separator line (|---|---|)
  const rows = tableLines.slice(2).map(parseLine);

  if (headers.length === 0) return null;
  return { headers, rows };
}

/**
 * Renders a markdown table as a styled HTML table with inline KaTeX.
 */
function MarkdownTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-3 overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-accent/30 bg-accent/5">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-2.5 text-left font-semibold text-foreground whitespace-nowrap">
                <MathTextInline text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-border/40 ${i % 2 === 0 ? "bg-white" : "bg-muted/20"}`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 text-foreground whitespace-nowrap">
                  <MathTextInline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Inline math-text renderer. No tables, no block wrappers — safe inside
 * headings, card titles, breadcrumbs, and other inline contexts.
 */
export function MathTextInline({ text }: { text: string }) {
  const segments: { type: "text" | "math" | "display-math"; value: string }[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const open = text.indexOf("\\(", cursor);
    if (open === -1) {
      segments.push({ type: "text", value: text.slice(cursor) });
      break;
    }
    if (open > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, open) });
    }
    const close = text.indexOf("\\)", open + 2);
    if (close === -1) {
      segments.push({ type: "text", value: text.slice(open) });
      break;
    }
    const latex = text.slice(open + 2, close);
    const isBlock = latex.includes("\\begin{array}") ||
                    latex.includes("\\begin{tabular}") ||
                    latex.includes("\\begin{aligned}") ||
                    latex.includes("\\begin{pmatrix}") ||
                    latex.includes("\\begin{cases}");
    segments.push({ type: isBlock ? "display-math" : "math", value: latex });
    cursor = close + 2;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "display-math" ? (
          <span key={i} className="my-1 overflow-x-auto inline-block">
            <BlockMath math={seg.value} />
          </span>
        ) : seg.type === "math" ? (
          <InlineMath key={i} math={seg.value} />
        ) : (
          <PlainTextSegment key={i} value={seg.value} />
        ),
      )}
    </>
  );
}

/**
 * Main MathText component.
 *
 * First checks for markdown tables in the raw text (before splitting on math delimiters),
 * then renders each chunk appropriately.
 */
export function MathText({ text }: { text: string }) {
  // Split text into table chunks and non-table chunks FIRST,
  // before doing any math delimiter parsing.
  if (text.includes("|") && text.includes("---|")) {
    const lines = text.split("\n");
    const chunks: { type: "text" | "table"; lines: string[] }[] = [];
    let current: string[] = [];
    let inTable = false;

    for (const line of lines) {
      const trimmed = line.trim();
      const isTableLine = trimmed.startsWith("|") && trimmed.endsWith("|");
      const isSeparator = /^\|[\s\-:]+\|$/.test(trimmed);

      if (isTableLine || isSeparator) {
        if (!inTable && current.length > 0) {
          chunks.push({ type: "text", lines: current });
          current = [];
        }
        inTable = true;
        current.push(trimmed);
      } else {
        if (inTable && current.length > 0) {
          chunks.push({ type: "table", lines: current });
          current = [];
        }
        inTable = false;
        current.push(line);
      }
    }
    if (current.length > 0) {
      chunks.push({ type: inTable ? "table" : "text", lines: current });
    }

    return (
      <>
        {chunks.map((chunk, i) => {
          if (chunk.type === "table") {
            const tableText = chunk.lines.join("\n");
            const parsed = parseMarkdownTable(tableText);
            if (parsed) return <MarkdownTable key={i} headers={parsed.headers} rows={parsed.rows} />;
            // Fallback: render as plain text
            return <MathTextInline key={i} text={tableText} />;
          }
          // Regular text chunk — render with math support
          const joinedText = chunk.lines.join("\n");
          return <MathTextWithBreaks key={i} text={joinedText} />;
        })}
      </>
    );
  }

  // No tables — standard rendering
  return <MathTextWithBreaks text={text} />;
}

/**
 * Detects a lettered/numbered list (a) ... b) ... or (i) ... (ii) ...) and
 * renders it as a clean styled list with proper spacing.
 */
function LetterList({ items }: { items: { label: string; content: string }[] }) {
  return (
    <div className="mt-2 mb-1 space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2.5 items-baseline">
          <span className="shrink-0 w-6 text-right font-semibold text-accent text-sm">{item.label}</span>
          <span className="flex-1"><MathTextInline text={item.content} /></span>
        </div>
      ))}
    </div>
  );
}

/**
 * Renders text with math delimiters and newline handling.
 */
function MathTextWithBreaks({ text }: { text: string }) {
  // Check if text contains a lettered list like "a) ... \nb) ..."
  const listMatch = text.match(/^([\s\S]*?)\n\n?((?:[a-z]\)|(?:\([a-z]\)))[\s\S]*)$/);
  if (listMatch) {
    const preamble = listMatch[1].trim();
    const listPart = listMatch[2];
    const items: { label: string; content: string }[] = [];
    const itemRegex = /(?:^|\n)\s*(?:([a-z])\)|(\([a-z]\)))\s*(.*?)(?=\n\s*(?:[a-z]\)|\([a-z]\))|\s*$)/gs;
    let m;
    while ((m = itemRegex.exec(listPart)) !== null) {
      const label = m[1] ? m[1] + ")" : m[2];
      items.push({ label, content: m[3].trim() });
    }
    if (items.length >= 2) {
      return (
        <>
          {preamble && <MathTextWithBreaksInner text={preamble} />}
          <LetterList items={items} />
        </>
      );
    }
  }

  return <MathTextWithBreaksInner text={text} />;
}

function MathTextWithBreaksInner({ text }: { text: string }) {
  const segments: { type: "text" | "math" | "display-math"; value: string }[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const open = text.indexOf("\\(", cursor);
    if (open === -1) {
      segments.push({ type: "text", value: text.slice(cursor) });
      break;
    }
    if (open > cursor) {
      segments.push({ type: "text", value: text.slice(cursor, open) });
    }
    const close = text.indexOf("\\)", open + 2);
    if (close === -1) {
      segments.push({ type: "text", value: text.slice(open) });
      break;
    }
    const latex = text.slice(open + 2, close);
    const isBlock = latex.includes("\\begin{array}") ||
                    latex.includes("\\begin{tabular}") ||
                    latex.includes("\\begin{aligned}") ||
                    latex.includes("\\begin{pmatrix}") ||
                    latex.includes("\\begin{cases}");
    segments.push({ type: isBlock ? "display-math" : "math", value: latex });
    cursor = close + 2;
  }

  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "display-math" ? (
          <div key={i} className="my-2 overflow-x-auto">
            <BlockMath math={seg.value} />
          </div>
        ) : seg.type === "math" ? (
          <InlineMath key={i} math={seg.value} />
        ) : (
          <PlainTextSegment key={i} value={seg.value} />
        ),
      )}
    </>
  );
}

/**
 * Renders a plain-text segment, converting LaTeX text-mode commands
 * (\newline, \quad, \qquad, \,, \;, \:) and literal newlines into visual elements.
 */
function PlainTextSegment({ value }: { value: string }) {
  const pattern = /(\\newline|\\qquad|\\quad|\\,|\\;|\\:|\n)/g;
  const parts = value.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        switch (part) {
          case "\n":
            return <br key={i} />;
          case "\\newline":
            return <br key={i} />;
          case "\\qquad":
            return <span key={i} style={{ display: "inline-block", width: "2em" }} />;
          case "\\quad":
            return <span key={i} style={{ display: "inline-block", width: "1em" }} />;
          case "\\;":
            return <span key={i} style={{ display: "inline-block", width: "0.28em" }} />;
          case "\\:":
            return <span key={i} style={{ display: "inline-block", width: "0.22em" }} />;
          case "\\,":
            return <span key={i} style={{ display: "inline-block", width: "0.17em" }} />;
          default:
            return <span key={i}>{part}</span>;
        }
      })}
    </span>
  );
}
