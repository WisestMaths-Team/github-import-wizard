#!/bin/bash
# Autoresearch loop for A-level Maths question generator
# Runs every 4 minutes: generate → evaluate → log → improve prompt
#
# Usage: bash .claude/autoresearch/loop.sh
# Stop with Ctrl+C

DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/runs"
PROGRAM="$DIR/program.md"
EVAL="$DIR/eval.js"
BEST_SCORE_FILE="$DIR/best_score.txt"

mkdir -p "$LOG_DIR"

# Initialize best score
if [ ! -f "$BEST_SCORE_FILE" ]; then
  echo "0" > "$BEST_SCORE_FILE"
fi

ITERATION=0

while true; do
  ITERATION=$((ITERATION + 1))
  TIMESTAMP=$(date +%Y%m%d_%H%M%S)
  RUN_DIR="$LOG_DIR/run_${TIMESTAMP}_iter${ITERATION}"
  mkdir -p "$RUN_DIR"

  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  ITERATION $ITERATION — $(date)"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  # Copy current program.md for this run
  cp "$PROGRAM" "$RUN_DIR/program_used.md"

  echo "[1/3] Generating 6 questions..."

  # Read the current prompt from program.md
  PROMPT=$(cat "$PROGRAM")

  # Generate questions using Claude Code CLI
  CLAUDE_CMD="npx --yes @anthropic-ai/claude-code"
  $CLAUDE_CMD --print -p "You are executing the following skill. Read it carefully and follow ALL instructions exactly.

$PROMPT

Generate exactly 6 questions now. Output them in valid JSON format as an array of objects:
[
  {
    \"id\": \"Q1\",
    \"topics\": [\"Topic A\", \"Topic B\"],
    \"questionText\": \"Full question text including all parts\",
    \"parts\": [{\"label\": \"(a)\", \"text\": \"...\", \"marks\": 3}, ...],
    \"totalMarks\": 12,
    \"workedSolution\": \"Full worked solution for all parts\",
    \"answers\": [\"(a) answer\", \"(b) answer\", \"(c) answer\"]
  },
  ...
]

Output ONLY the JSON array, no other text." > "$RUN_DIR/raw_output.txt" 2>&1

  # Extract the JSON array from the output (handle markdown code blocks)
  python3 -c "
import json, re, sys
text = open('$RUN_DIR/raw_output.txt').read()
# Try to find JSON array
m = re.search(r'\[[\s\S]*\]', text)
if m:
    try:
        data = json.loads(m.group())
        json.dump(data, open('$RUN_DIR/questions.json', 'w'), indent=2)
        print(f'Parsed {len(data)} questions')
        sys.exit(0)
    except json.JSONDecodeError as e:
        print(f'JSON parse error: {e}')
print('Failed to parse questions')
sys.exit(1)
" 2>&1

  if [ $? -ne 0 ]; then
    echo "  ❌ Failed to generate/parse questions. Skipping iteration."
    sleep 60
    continue
  fi

  echo "[2/3] Running eval suite..."

  # Run the eval
  node "$EVAL" "$RUN_DIR/questions.json" > "$RUN_DIR/eval_results.json" 2>&1

  if [ $? -ne 0 ]; then
    echo "  ❌ Eval failed. Skipping iteration."
    cat "$RUN_DIR/eval_results.json"
    sleep 60
    continue
  fi

  # Parse results
  PASSED=$(python3 -c "import json; r=json.load(open('$RUN_DIR/eval_results.json')); print(r['summary']['passed'])")
  TOTAL=$(python3 -c "import json; r=json.load(open('$RUN_DIR/eval_results.json')); print(r['summary']['total'])")
  AVG_SCORE=$(python3 -c "import json; r=json.load(open('$RUN_DIR/eval_results.json')); print(r['summary']['avgScore'])")
  PASS_RATE=$(python3 -c "import json; r=json.load(open('$RUN_DIR/eval_results.json')); print(r['summary']['passRate'])")
  BEST_SCORE=$(cat "$BEST_SCORE_FILE")

  echo ""
  echo "  ┌─────────────────────────────────────┐"
  echo "  │  Results: $PASSED/$TOTAL passed ($PASS_RATE)      │"
  echo "  │  Avg score: $AVG_SCORE                    │"
  echo "  │  Best so far: $BEST_SCORE                 │"
  echo "  └─────────────────────────────────────┘"

  # Show per-question breakdown
  python3 -c "
import json
r = json.load(open('$RUN_DIR/eval_results.json'))
for q in r['results']:
    status = '✅' if q['pass'] else '❌'
    c1 = '✅' if q['constraints']['C1']['pass'] else '❌'
    c2 = '✅' if q['constraints']['C2']['pass'] else '❌'
    c3 = '✅' if q['constraints']['C3']['pass'] else '❌'
    c4 = '✅' if q['constraints']['C4']['pass'] else '❌'
    print(f\"  {status} {q['id']}: C1={c1} C2={c2} C3={c3} C4={c4} (score={q['avgScore']:.2f})\")
"

  # Check if this is a new best
  python3 -c "
import json
score = float('$AVG_SCORE')
best = float('$BEST_SCORE')
if score > best:
    print('NEW_BEST')
    open('$BEST_SCORE_FILE', 'w').write(str(score))
else:
    print('NO_IMPROVEMENT')
" | read RESULT

  echo ""

  if [ "$PASSED" -eq "$TOTAL" ]; then
    echo "  🎉 PERFECT SCORE! 6/6 passed! Prompt is working well."
    echo "  Logging success and continuing..."
  fi

  echo "[3/3] Analyzing failures and improving prompt..."

  # If not perfect, ask Claude to improve the prompt
  if [ "$PASSED" -lt "$TOTAL" ]; then
    FAILURES=$(python3 -c "
import json
r = json.load(open('$RUN_DIR/eval_results.json'))
for q in r['results']:
    if not q['pass']:
        fails = []
        for c, v in q['constraints'].items():
            if not v['pass']:
                fails.append(f\"{c}: {v['detail']}\")
        print(f\"{q['id']}: \" + '; '.join(fails))
")

    CURRENT_PROMPT=$(cat "$PROGRAM")

    $CLAUDE_CMD --print -p "You are improving a question generator prompt. The current prompt scored $PASSED/$TOTAL.

FAILURES:
$FAILURES

CURRENT PROMPT (program.md):
$CURRENT_PROMPT

Analyze why these questions failed. Then output an IMPROVED version of the ENTIRE program.md file that addresses the failures. Add specific instructions to the 'Design tips' section based on what went wrong. Increment the version number and add a changelog entry.

Output the complete improved program.md content (the full file, not just changes)." > "$RUN_DIR/improved_program.md" 2>&1

    # Only update if the improvement looks valid
    if grep -q "Generator Prompt" "$RUN_DIR/improved_program.md" 2>/dev/null; then
      # Extract just the markdown content (strip any code fences)
      python3 -c "
import re
text = open('$RUN_DIR/improved_program.md').read()
# Remove markdown code fences if present
text = re.sub(r'^\`\`\`markdown\s*\n', '', text)
text = re.sub(r'\n\`\`\`\s*$', '', text)
text = text.strip()
open('$PROGRAM', 'w').write(text + '\n')
print('Prompt updated successfully')
"
    else
      echo "  ⚠️  Improvement didn't look valid, keeping current prompt."
    fi
  fi

  # Log summary
  echo "$TIMESTAMP | iter=$ITERATION | passed=$PASSED/$TOTAL | avg=$AVG_SCORE | rate=$PASS_RATE" >> "$DIR/progress.log"

  echo ""
  echo "  Sleeping 4 minutes until next iteration..."
  echo ""
  sleep 60
done
