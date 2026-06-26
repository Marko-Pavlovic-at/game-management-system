# Progress — Game Management System (Learning React)

> I'm your coach. You write ALL the code; I explain, give tasks, and review.
> HARD RULE (set 2026-06-23): I never give code — not a block, not a snippet,
> not one line. I describe what to write and why; you type every character.
> Only exception: terminal/setup commands. One concept per turn. Go slow.

**Fresh start:** 2026-06-23. Kept the working machinery (Vite + React + TS +
Tailwind, `main.tsx`, `index.css`). Wiped all old `src/components/*` and emptied
`App.tsx` to a blank file. Old code still lives in git history if ever needed.

**Current module:** Module 5 — Lifting state up / callback props (extraction in progress)
**Current step:** Finish wiring `<GameForm />`. TWO small mechanical edits left
in `GameForm.tsx`, then delete the old inline form from `App`. Do NOT re-explain
the concept — the thinking is already done and correct. Resume at the keystroke
level, one action, no theory (see blank-out note below).
**Status:** Extraction ~80% done and the HARD parts are CORRECT:
- `GameForm.tsx`: props type `onAddGame: (t: string) => void;` — written correctly
  by the learner unaided (they thought they'd failed; they hadn't). Has local
  `title`/`setTitle` + controlled input.
- `App.tsx`: `handleAddGame(newTitle)` written correctly; passed down as
  `<GameForm onAddGame={handleAddGame} />` (function ref, no parens — correct).
REMAINING (all tiny, no new concepts):
  1. `GameForm` line 7 `function GameForm()` still has EMPTY parens — needs to
     receive the prop: `({ onAddGame }: GameFormProps)` (template = GameCard's params).
  2. `GameForm` needs an Add `<button type="button">` whose onClick calls
     `onAddGame(title)` then `setTitle("")`. Only genuinely new token: `onAddGame(title)`.
  3. `App` `handleAddGame(newTitle)` may need `: string` annotation (implicit any).
  4. THEN delete the old inline title input + Add button + `title`/`setTitle` from `App`.

### Module 5 session notes (2026-06-26) — BLANK-OUT, second time same spot
- Learner hit the SAME wall as the prior attempt: the GameForm extraction /
  callback-prop step overwhelmed them and they shut down ("blanking out again,
  I want to stop"). This is now a confirmed pattern, not a one-off.
- ROOT CAUSE (my error): I stacked too much per turn — TS function-type syntax +
  receiving props + new button + onClick logic, across two files, with "why"
  explanations. Even after they got stuck I handed them a 2-edit step. Too big.
- What they actually did well, ALONE: the function-type `(t: string) => void`
  (the thing they explicitly said they couldn't do), the handler, passing the
  callback. The hard cognitive work is done. Only mechanical wiring remains.
- FOR NEXT TIME: open by SHOWING them it already works ("the TS is right, you're
  80% done"), then ONE keystroke-level action, zero theory, then stop and check.
  Never list two edits at once when they're near the wall. Guaranteed-win first.
- Function-type TS syntax IS genuinely hard for them — when it recurs, teach by
  pattern-copy from a file they already wrote, not by explaining the grammar.

### Module 4 session notes (2026-06-25)
- Immutable array update (`[...games, {new}]`) landed FIRST TRY — strong. This
  is usually the hard part; it wasn't for them.
- Self-caught that TS forced genre/rating to be filled (type inferred from the
  initial array). Good instinct.
- Forgot `value={title}` on first pass (had only onChange) — half-controlled
  input. Worth watching: they don't yet fully internalize that controlled =
  value + onChange BOTH.
- Block-arrow conversion (single-expr `=>` to `=> { ...; ...; }`) went fine.
- Still owe them: shorthand `{ title }` vs `{ title: title }` (mentioned, not
  drilled). genre/rating still hardcoded "" / 0 — real inputs come with the
  GameForm refactor.
- ARCHITECTURE MOMENT: learner proactively wanted to extract a form component
  before building it (anti-clutter instinct, good). I steered: build inline
  first, THEN extract, so lifting-state-up isn't tangled with form mechanics.
  They agreed. Honor this next session — start the extraction.

Module 2 complete: useState, controlled input, derived filtered list,
event handlers (onChange + onClick), conditional rendering. Strong,
mostly-self-debugged progress on the earlier steps.

### WEAK AREAS — revisit before/while doing Module 4
- **Conditional rendering (`{cond && <jsx>}`)**: got very overwhelmed. Core
  confusions: (a) where the braces start/end — put the `}` after `&&` with the
  JSX stranded outside; (b) `if` is a statement and can't live inside JSX `{}`.
  What finally worked: strip ALL concept, have them render a plain always-on
  `<p>` first (guaranteed win), THEN prepend the `cond &&`. Tiny mechanical
  steps beat explanation here.
- **Ternary (`cond ? a : b`)**: tried it, deleted it, never landed. Not yet
  taught properly — introduce gently later, AFTER `&&` is solid.
- General: when they say "I don't understand anything," I had over-explained.
  Reset to one trivial typeable action, no theory. (See [[task-delivery-style]].)

Rebuilt so far (all written by the learner, unaided): `App` component, a
`GameCard` component, props + a `GameCardProps` type, a `games` array rendered
via `.map()` with unique `key`s, and basic Tailwind styling (understands the
page / card-container / card-blueprint scope distinction).

---

## Module checklist
- [x] 0 — Setup & Tailwind (machinery kept from previous attempt)
- [x] 1 — Components, JSX & Props
- [x] 2 — State & Events (`useState`) — conditional rendering & ternary still weak
- [x] 3 — Lists, Keys & Mock Data (done early, alongside Module 1)
- [~] 4 — Forms & "Add to Library" (core add-to-list working inline; component
      extraction + genre/rating inputs still to do)
- [ ] 5 — Data Flow & Where State Lives
- [ ] 6 — Side Effects & Persistence (`useEffect` + localStorage)
- [ ] 7 — Custom Hooks
- [ ] 8 — Real Data: RAWG API
- [ ] 9 — Routing & Detail Pages
- [ ] 10 — Polish & Good Design

---

## Notes to self
- Previous attempt reached Module 4 (forms / lifting state up) but the learner
  felt lost from being handed too much code. Restarting to rebuild real
  understanding. Pace is the priority, not progress.
