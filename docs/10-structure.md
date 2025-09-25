# Structure & Boundaries

## Monorepo
- `packages/ui` → **@javcb/ui** (Plus-free, public API: `packages/ui/src/index.ts`)
- `src/` → App code. Tailwind Plus lives here under `src/vendor/tailwindplus/` (gitignored).

## Key Rules
- **Never import** `src/vendor/tailwindplus/*` from `packages/ui`.
- App can freely import Tailwind Plus blocks for pages/layouts.
- Public imports for the app **must come from** `@javcb/ui` (not from `packages/ui/src/adapters/*`).

## Tailwind
- One Tailwind config at repo root.
- `content` includes both app and `packages/ui/src/**/*`.
- Load tokens CSS (from `@javcb/ui`) early in the app.
