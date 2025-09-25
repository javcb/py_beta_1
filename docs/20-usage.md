# Using @javcb/ui in the App

## Dev (workspace source)
- The app imports `@javcb/ui` directly; Vite alias points to `packages/ui/src/index.ts`.
- Run:
  - `npm install`
  - `npm -w @javcb/ui run build` (first time or when types change)
  - `npm run dev`

## Prod/CI
- Build order:
  - `npm ci`
  - `npm -w @javcb/ui run build`
  - `npm run build`

## Adding a component
1) Implement or update **adapter** under `packages/ui/src/adapters/<lib>/...` (no export).
2) Wrap it as a **public component** under `packages/ui/src/components/...`.
3) Export it from `packages/ui/src/index.ts`.
4) Add a demo usage in the app's `/ui-demo` route (optional).
