# Prose Style for `description` and `explanation`

Each step in `solutionSteps[]` carries two prose fields. The mathematical move lives in `workingLatex`; these fields say *what* and *why*.

## `description` — the move label

- **Length:** ~5–10 words. One short sentence.
- **Voice:** imperative. "Apply the chain rule." not "We apply the chain rule." not "The chain rule is applied."
- **Content:** names the move. A student skimming the descriptions in order should see the strategy of the solution emerge as a kind of recipe.
- **Punctuation:** end with a full stop.

**Good:**
- "Apply the chain rule."
- "Factor out the common `e^x`."
- "Substitute `u = 2x + 1`."
- "Solve for `x` in the doubled-angle range."

**Bad:**
- "Differentiate" — too terse, no full stop, doesn't say what technique.
- "Now we will apply the chain rule, since the function is a composition." — that's an explanation, not a label.
- "Step 3" — useless.
- "Apply the chain rule to differentiate the outer function while leaving the inner one alone." — too long; the elaboration belongs in `explanation`.

## `explanation` — the reasoning

- **Length:** 1–3 sentences. Roughly 20–60 words.
- **Voice:** conversational, second-person allowed ("you might be tempted to…"). Not lecturing.
- **Content:** answer the implicit question "but why did they do *that* there?". Where it's natural, flag a common slip a student might make.

**Good:**
> "We use the chain rule because the function is a composition: `sin` of `(3x² + 1)`. Differentiate the outer `sin` first, leaving the inner expression untouched, then multiply by the derivative of the inner. A common slip is to forget the inner derivative entirely."

> "Factor out `e^x` because both terms share it. This isn't strictly required, but Wisest answers conventionally factor where possible — and it makes the structure of the answer easier to read."

> "We pick `u = x²` (rather than `u = e^x`) because differentiating `x²` reduces it to `2x`, simplifying the next integral. The other choice would loop forever — `e^x` differentiates back to `e^x`."

**Bad:**
- "Apply the chain rule." — that's the description, not the explanation.
- "By the chain rule, `dy/dx = f'(g(x)) · g'(x)`." — restates the rule abstractly without saying why it applies *here*.
- A 6-sentence essay on the history of calculus. — too long; trim to the move at hand.
- "This step is correct because it follows from the previous step." — vacuous.

## Common-slip flags

When relevant, end the explanation with a one-clause flag of a slip. Don't force it; if the move is mechanical and there's no natural slip to flag, don't invent one.

Examples worth flagging:
- chain rule: forgetting the inner derivative.
- product/quotient rule: writing `u'v'` instead of `u'v + uv'`.
- integration: forgetting `+C` on the outermost integral.
- log rules: writing `ln(a + b) = ln a + ln b` (it's not).
- trig: dropping solutions when the angle is doubled and the range stretches.
- algebra: sign errors when distributing a minus sign across brackets.

## Tone calibration

The audience is a UK A-Level student looking at the worked solution because they got stuck. The right register is "older sibling who gets it explaining patiently" — not "textbook" and not "tutor in a hurry".

- ✅ "We pick `u = x²` because that simplifies fastest."
- ❌ "It is necessary to select `u = x²` in order to obtain a tractable resulting integrand." (too stiff)
- ❌ "Just pick `u = x²`, trust me." (too breezy, no reason given)

If you find yourself writing "obviously" or "clearly" — delete it. If something were obvious, the student wouldn't be reading the solution.

## What to do with original prose

The original file's `description` and `explanation` are usually a starting point worth keeping the structure of. If the original `description` already names the move correctly in the right register, keep it. If the original `explanation` says the right thing in 1 sentence, you can extend to 2–3 sentences rather than rewriting from scratch.

The expander is not an opportunity to impose a stylistic rewrite. It's an opportunity to add reasoning and flag slips. If the original prose is already good, leave it.

## What to do with new steps you've inserted

Steps you've inserted (because the original compressed multiple moves into one) need fresh `description` and `explanation` fields written from scratch. Match the tone of the surrounding original steps if possible — the goal is that an expanded solution reads as one consistent voice, not as "old steps + bolted-on new steps".