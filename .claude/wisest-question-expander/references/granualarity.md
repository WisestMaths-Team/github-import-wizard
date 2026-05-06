# Step Granularity

How finely to break up `solutionSteps` depends on the question's difficulty band. This file gives before/after examples to calibrate.

## The rule of thumb

| Band | Moves per step |
|---|---|
| Foundation | 1 |
| Standard | 1–2 |
| Challenge | 1–3 (no compressed jumps over a substantive technique) |

A "move" is one of: applying a named rule, one round of algebraic manipulation, one substitution, one numerical simplification, one collection of like terms, one factoring.

## Example A — Foundation: differentiate y = 4x³ − 7x + 2

**Before (one step, original file):**

- `description`: "Differentiate term by term."
- `workingLatex`: `\\frac{dy}{dx} = 12x^2 - 7`

**After (three steps, expanded):**

- Step 1: `description`: "Differentiate the cubic term." `workingLatex`: `\\frac{d}{dx}(4x^3) = 12x^2`. `explanation`: "Bring the power 3 down as a coefficient and reduce the exponent by 1, giving `4 \\cdot 3 \\cdot x^{3-1} = 12x^2`."
- Step 2: `description`: "Differentiate the linear term." `workingLatex`: `\\frac{d}{dx}(-7x) = -7`. `explanation`: "The derivative of `kx` is `k`. The negative sign carries through."
- Step 3: `description`: "Differentiate the constant and combine." `workingLatex`: `\\frac{dy}{dx} = 12x^2 - 7`. `explanation`: "Constants differentiate to zero, so the `+2` disappears. Adding the three terms gives the final derivative."

This is appropriate for Foundation because each line corresponds to exactly one move a student should be able to identify and execute.

## Example B — Standard: differentiate y = x²·sin(x)

**Before (two steps, original file):**

- Step 1: `\\frac{dy}{dx} = 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)`
- Step 2: `\\frac{dy}{dx} = x(2\\sin(x) + x\\cos(x))`

**After (four steps, expanded):**

- Step 1: `description`: "Identify the product u·v." `workingLatex`: `u = x^2, \\quad v = \\sin(x)`. `explanation`: "We recognise `y` as a product of two functions of `x`, so the product rule applies. Naming the parts makes the differentiation tidy."
- Step 2: `description`: "Differentiate each factor." `workingLatex`: `u' = 2x, \\quad v' = \\cos(x)`. `explanation`: "`u' = du/dx` and `v' = dv/dx`. We just need each one separately before assembling."
- Step 3: `description`: "Apply the product rule." `workingLatex`: `\\frac{dy}{dx} = u'v + uv' = 2x\\sin(x) + x^2\\cos(x)`. `explanation`: "The product rule says the derivative of `uv` is `u'v + uv'`. Substituting our four pieces gives this expression. A common slip is to write `u'v'` instead — that's not a thing."
- Step 4: `description`: "Factor out the common `x`." `workingLatex`: `\\frac{dy}{dx} = x(2\\sin(x) + x\\cos(x))`. `explanation`: "Both terms share a factor of `x`, so we pull it out. This is optional but conventional in Wisest answers."

Two moves are folded into step 3 (substitute *and* simplify), which is fine for Standard.

## Example C — Challenge: integrate ∫ x²·e^x dx

**Before (three steps, original file):**

- Step 1: `\\int x^2 e^x dx = x^2 e^x - \\int 2x e^x dx`
- Step 2: `\\int 2x e^x dx = 2x e^x - \\int 2 e^x dx = 2x e^x - 2 e^x`
- Step 3: `\\int x^2 e^x dx = x^2 e^x - 2x e^x + 2 e^x + C = e^x(x^2 - 2x + 2) + C`

**After (five steps, expanded):**

- Step 1: `description`: "Set up integration by parts." `workingLatex`: `u = x^2, \\quad dv = e^x\\,dx \\implies du = 2x\\,dx, \\quad v = e^x`. `explanation`: "Integration by parts works when one factor differentiates nicely (`x²` reduces to a constant after two passes) and the other integrates without trouble (`eˣ` is invariant). We pick `u = x²` so that the new integral is simpler."
- Step 2: `description`: "Apply the IBP formula once." `workingLatex`: `\\int x^2 e^x\\,dx = x^2 e^x - \\int 2x e^x\\,dx`. `explanation`: "The formula `∫ u dv = uv − ∫ v du` substitutes our four pieces. The remaining integral has `2x` instead of `x²` — progress, but not yet elementary."
- Step 3: `description`: "IBP again on the remaining integral." `workingLatex`: `u = 2x, \\quad dv = e^x\\,dx \\implies du = 2\\,dx, \\quad v = e^x; \\quad \\int 2x e^x\\,dx = 2x e^x - \\int 2 e^x\\,dx`. `explanation`: "Same trick. The new integral now has only a constant `2`, which is trivial."
- Step 4: `description`: "Evaluate the elementary integral." `workingLatex`: `\\int 2 e^x\\,dx = 2 e^x; \\quad \\int 2x e^x\\,dx = 2x e^x - 2 e^x`. `explanation`: "Substituting back, the inner integral is now resolved (without `+C` yet — we'll add it once at the end)."
- Step 5: `description`: "Substitute back and factor." `workingLatex`: `\\int x^2 e^x\\,dx = x^2 e^x - (2x e^x - 2 e^x) + C = e^x(x^2 - 2x + 2) + C`. `explanation`: "Plug the resolved inner integral into step 2's expression, distribute the minus sign, and factor out `e^x` for a tidy form. The `+C` lives here, on the outermost integral."

Some steps fold two moves (set up + state the substitutions; substitute + factor) — fine for Challenge.

## When to leave step structure alone

If a question already has roughly the right granularity for its band, the expander should **only expand the prose** and not introduce extra steps. Padding for the sake of padding makes solutions harder to read, not easier.

Heuristic: if the original step count is within ±1 of what the granularity rule would produce, leave the structure and just rewrite descriptions/explanations.

## When to split aggressively

If the original packs three substantive moves into a single line of `workingLatex` (especially common in Foundation questions written quickly), split. The student looking at the worked solution is the one who couldn't bridge the gap themselves — that's the whole audience.