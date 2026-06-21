# 📓 Progress — Game Management System (Learning React)

> I'm your coach. You write the code; I explain, give tasks, and review.
> Full curriculum lives in the approved learning plan. This file tracks where you are.

**Current module:** Module 4 — Forms & "Add to Library"
**Current step:** 4.3 — connect the form to App (lifting state up)
**Status:** ⏸️ Paused mid-step

> COACHING NOTE: go slower. One concept per turn, and let the learner WRITE the
> code — do not hand over finished blocks to paste. Session ended here because
> the pace got overwhelming. Pick back up gently.

> Where the code is now:
> - `App.tsx`: `games` is now `useState` (was a const). An `addGame(newGame)`
>   function exists and is passed to the form as `onAddGame={addGame}`. (There
>   are still open TS issues: `newGame` is untyped, and new games need an `id` —
>   NOT yet addressed. Leave for later, one thing at a time.)
> - `addGameForm.tsx`: component `AddGameForm` with three controlled inputs
>   (title/genre = string, rating = number via `Number(...)`) and a button.
>   `handleSubmit(e)` builds `newGame` and `console.log`s it — this works.
> - REMAINING for step 4.3: have the form accept the `onAddGame` prop
>   (destructure it like `GameCards` does `title`) and CALL it in `handleSubmit`
>   instead of console.log. Then, as separate later steps: type `newGame`, and
>   generate an `id` when adding.

---

## ✅ Completed
- **Module 0 — Setup & Tailwind** ✅
  - Entry chain: `index.html` → `main.tsx` → `App.tsx` (root of the app).
  - A component must return JSX (or `null`); `return;` renders nothing.
  - Fragments (`<>`) wrap siblings but render no real element — can't style them.
  - Installed Tailwind v4: plugin in `vite.config.ts` + `@import "tailwindcss"` in `index.css`.
  - Tailwind utilities: `text-3xl`, `font-bold`, color scale (`bg-slate-900`, 50→950).
  - Full-screen background needs a real element with `min-h-screen`.
  - Flexbox centering: `flex` + `justify-center` (main axis) + `items-center` (cross axis); `flex-col` to stack.

- **Module 1 — Components, JSX & Props** ✅
  - A component is a function returning JSX; compose small ones into big ones.
  - **Props** pass data parent → child (one-way); used like HTML attributes.
  - `{ }` in JSX = "evaluate JavaScript here"; strings use quotes, non-strings use braces (`rating={10}`).
  - The **type** (`: GameCardsProps`) describes the props shape; **destructuring** (`{ title, genre }`) is what creates the usable variables — they're separate jobs.
  - Layout: `flex-col` to stack, `items-center` to center, `gap-4` to space children.

- **Module 2 — State & Events (`useState`)** ✅
  - `useState(initial)` returns `[value, setValue]`; the value is constant within a render.
  - A setter doesn't mutate the variable — it asks React to **re-render**, and the next
    render's `useState` hands back the new value. Every render has its own frozen state.
  - **Controlled input**: `value={state}` + `onChange={e => setState(e.target.value)}`
    makes React state the single source of truth for the field.
  - `onChange` gives an event object (`e.target.value`); `onClick` often just calls the
    setter directly (`onClick={() => setSearch("")}`).
  - Arrow function in a handler delays the call to event time (not on render).

- **Module 3 — Lists, Keys & Mock Data** ✅
  - Data lives as an array of objects in the parent (`App`), separate from the card UI.
  - `.map()` turns that array into an array of `<GameCards>` elements.
  - Each mapped element needs a stable `key` (use `game.id`, not the array index).
  - `flex flex-wrap` on ONE container around the map lays cards out in a wrapping row.

## ⏭️ Up next
- **Module 4:** a form to add a new game to the list (or first wire `SearchBar` to filter).

---

## 🗺️ Module checklist
- [x] **0 — Setup & Tailwind**
- [x] **1 — Components, JSX & Props**
- [x] **2 — State & Events (`useState`)**
- [x] **3 — Lists, Keys & Mock Data**
- [ ] 4 — Forms & "Add to Library"
- [ ] 5 — Data Flow & Where State Lives
- [ ] 6 — Side Effects & Persistence (`useEffect` + localStorage)
- [ ] 7 — Custom Hooks
- [ ] 8 — Real Data: RAWG API
- [ ] 9 — Routing & Detail Pages
- [ ] 10 — Polish & Good Design

---

## 📖 Glossary (grows as you learn)
- **JSX** — HTML-like syntax inside JS/TS that describes UI.
- **Component** — a function that returns JSX; the building block of React.
- **Fragment (`<>`)** — invisible wrapper for sibling elements; renders no DOM node.
- **HMR** — Hot Module Reload; Vite updates the browser on save without a refresh.
- **Utility class** — a single-purpose Tailwind class (e.g. `font-bold`).
- **Props** — data passed parent → child; like function arguments for components.
- **Destructuring** — `{ title }` syntax that pulls fields out of an object into variables.
- **Type / interface** — TypeScript declaration of an object's shape (here, the props).

---

## 📝 Notes to self
_(stuck points, things to revisit)_
