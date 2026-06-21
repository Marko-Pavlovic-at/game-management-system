# 📓 Progress — Game Management System (Learning React)

> I'm your coach. You write the code; I explain, give tasks, and review.
> Full curriculum lives in the approved learning plan. This file tracks where you are.

**Current module:** Module 2 — State & Events (`useState`)
**Current step:** 2.1 — Build a `SearchBar` with state (next session)
**Status:** ⏸️ Paused — good stopping point

> Resume here next time: you have one hardcoded `GameCards`. Next we make a
> `SearchBar` whose text lives in state — your first taste of interactivity.

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

## ⏭️ Up next
- **Module 2:** `useState` + events — a `SearchBar` whose text lives in state (first interactivity).

---

## 🗺️ Module checklist
- [x] **0 — Setup & Tailwind**
- [x] **1 — Components, JSX & Props**
- [ ] **2 — State & Events (`useState`)**
- [ ] 3 — Lists, Keys & Mock Data
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
