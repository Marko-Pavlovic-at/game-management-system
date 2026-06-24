# Progress — Game Management System (Learning React)

> I'm your coach. You write ALL the code; I explain, give tasks, and review.
> HARD RULE (set 2026-06-23): I never give code — not a block, not a snippet,
> not one line. I describe what to write and why; you type every character.
> Only exception: terminal/setup commands. One concept per turn. Go slow.

**Fresh start:** 2026-06-23. Kept the working machinery (Vite + React + TS +
Tailwind, `main.tsx`, `index.css`). Wiped all old `src/components/*` and emptied
`App.tsx` to a blank file. Old code still lives in git history if ever needed.

**Current module:** Module 2 — State & Events (`useState`) — COMPLETE
**Current step:** Next session: start Module 4 — Forms & "Add to Library"
**Status:** 2.4 done — empty-state message via `{cond && <p>}` conditional
rendering working.

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
- [ ] 4 — Forms & "Add to Library"
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
