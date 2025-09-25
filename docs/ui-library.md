# UI Library (@javcb/ui)

Plus-free by design. Do not import from `src/vendor/tailwindplus`.

## Public exports

Public exports come from `packages/ui/src/components/*` and `packages/ui/src/patterns/*`.

We load design tokens via `packages/ui/src/tokens/tokens.css`.

During dev, the app aliases `@javcb/ui` to the source (`packages/ui/src/index.ts`); in CI/prod, we build to `dist/`.

## Add UI safely

1. Wrap 3rd-party libs under `packages/ui/src/adapters/*`.
2. Build a tiny public wrapper in `components/*`.
3. Export only from `packages/ui/src/index.ts`.
