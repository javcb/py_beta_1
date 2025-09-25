# Repo Overview

## Objectives
- Build a **monorepo** with a Plus-free UI library (`@javcb/ui`) and a Vite React app.
- Keep Tailwind Plus assets **in the app only** (under `src/vendor/tailwindplus/`).  
- Expose a clean, stable API from `@javcb/ui` (wrapping headless/compatible libs) to keep visuals consistent with Tailwind Plus.

## Tech Stack
- **App:** Vite + React + TypeScript + Tailwind
- **UI lib (`@javcb/ui`):** Tailwind tokens (CSS vars + preset), light wrappers for:
  - Radix (overlays), TanStack Table (data), react-day-picker (date), Tremor (charts), Upload (dropzone), PDF viewer, Stripe (adapters only when needed)
- **Testing/Docs (optional later):** Storybook, Vitest/RTL, Playwright

## Design Approach
- Tailwind Plus drives **look & layout** in the app.
- `@javcb/ui` provides **compatible, Plus-free components** skinned via tokens.
- Use **adapters** internally (not exported) to integrate 3P libs; only export wrapped components.
