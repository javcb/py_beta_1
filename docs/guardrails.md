# Guardrails & Toggles

## What's protected

- `src/vendor/**` (Tailwind Plus)
- `packages/ui/src/tokens/**`
- `packages/ui/src/adapters/**`
- `packages/ui/src/index.ts`
- `README.md` (root)

## Cursor rules

Cursor will stop and propose a plan before editing protected files.

If `.guardrails/disabled` exists, Cursor will remind (non-blocking) when protected paths are about to change. You can choose to proceed.

## Husky hooks

Pre-commit blocks protected changes unless you export `ALLOW_PROTECTED_EDITS=1`.

Post-commit prints a friendly reminder if you changed protected paths while guardrails were disabled.

## Toggle guardrails (requires token)

```bash
GUARDRAILS_TOKEN=ok npm run guardrails:disable  # creates .guardrails/disabled
GUARDRAILS_TOKEN=ok npm run guardrails:enable   # removes the sentinel
npm run guardrails:status
```

We require `GUARDRAILS_TOKEN` so automations can't silently flip guardrails.
