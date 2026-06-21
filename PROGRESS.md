# 📓 Progress — Game Management System (Learning React)

> I'm your coach. You write the code; I explain, give tasks, and review.
> Full curriculum lives in the approved learning plan. This file tracks where you are.

**Current module:** Module 3 — Lists, Keys & Mock Data
**Current step:** 3.1 — Render an array of games with `.map()` (next session)
**Status:** ▶️ In progress

> Resume here next time: you have a working stateful `SearchBar` (onChange +
> onClick clear). Next we replace the single hardcoded `GameCards` with an array
> of game data rendered via `.map()` — and learn why React needs `key`.

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

## ⏭️ Up next
- **Module 3:** arrays + `.map()` to render many `GameCards`; the `key` prop.

---

## 🗺️ Module checklist
- [x] **0 — Setup & Tailwind**
- [x] **1 — Components, JSX & Props**
- [x] **2 — State & Events (`useState`)**
- [ ] **3 — Lists, Keys & Mock Data**
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
