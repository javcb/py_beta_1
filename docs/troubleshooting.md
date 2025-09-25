# Troubleshooting

## App can't find @javcb/ui

Run `npm -w @javcb/ui run build` first (or `npm run build` at root).

Check `vite.config.ts` alias and `tsconfig.json` paths.

## Tailwind classes not applying

Confirm `tailwind.config.ts` content includes:

- `./src/**/*.{ts,tsx,js,jsx,html}`
- `./packages/ui/src/**/*.{ts,tsx}`
- `./src/vendor/tailwindplus/**/*.{ts,tsx,css}`

## Protected files blocked on commit

Intentionally override once:

```bash
ALLOW_PROTECTED_EDITS=1 git commit -m "..."
```

## Guardrails toggle won't change

Set token:

```bash
GUARDRAILS_TOKEN=ok npm run guardrails:disable
```
