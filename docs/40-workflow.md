# Developer Workflow

## Daily
- Branch → small PRs
- `npm -w @javcb/ui run build` when UI types change
- `npm run dev` to run app + UI together

## PR Requirements
- Run `npm run lint` and `npm run build` locally
- Confirm "good" checklist (see /docs/90-checklist.md)

## Versioning
- Keep `@javcb/ui` semver minor until stable; app consumes via workspace.
