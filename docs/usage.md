# Usage & Commands

## Install
```bash
npm install
```

## Dev (build UI first, then app)
```bash
npm -w @javcb/ui run build
npm run dev
# open /ui-demo route in the app
```

## Build (CI/prod)
```bash
npm ci
npm -w @javcb/ui run build
npm run build
```

## Lint
```bash
npm run lint
```

## Guardrails
```bash
# Check status
npm run guardrails:status

# Disable (requires token)
GUARDRAILS_TOKEN=ok npm run guardrails:disable

# Re-enable (requires token)
GUARDRAILS_TOKEN=ok npm run guardrails:enable
```

## Notes

Tailwind content globs include: `src/**/*`, `packages/ui/src/**/*`, and `src/vendor/tailwindplus/**/*`.
