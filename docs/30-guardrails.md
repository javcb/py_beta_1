# Guardrails

## Protected Paths
- `src/vendor/**` (Tailwind Plus assets)
- `packages/ui/src/tokens/**`
- `packages/ui/src/adapters/**`
- `packages/ui/src/index.ts`
- `README.md` (light pointer only)

Commits touching these require `ALLOW_PROTECTED_EDITS=1` (see pre-commit hook).

## Publish Protection Toggle
- `scripts/block-publish.mjs` checks for forbidden imports.
- Toggle var: `PLUS_PUBLISH_PROTECTION` (default `on`).
  - Set `export PLUS_PUBLISH_PROTECTION=off` **temporarily** when you need to bypass (local only).
  - Re-enable after the change.

## CI
- GitHub Actions builds UI first, then the app.
- Future: add a CI step that fails if `@javcb/ui` contains Plus imports.
