# "What Good Looks Like" — PR Checklist

- [ ] **Plus-free UI lib:** `packages/ui/src/**` has **no** imports from `src/vendor/tailwindplus/**`.
- [ ] **Public API only:** App imports from `@javcb/ui` only (no `adapters/*` in app).
- [ ] **Tokens first:** New components use Tailwind tokens (CSS vars) and classes; no hardcoded colors.
- [ ] **Adapters hidden:** 3P libs are wrapped in `packages/ui/src/adapters/*` and not exported.
- [ ] **Build order:** `npm -w @javcb/ui run build` then `npm run build` passes.
- [ ] **Content scan:** Tailwind `content` covers both app and `packages/ui/src/**/*`.
- [ ] **Docs updated:** If you add a component, update `/docs/50-component-catalog.md`.
- [ ] **Guardrails followed:** If protected files changed, `ALLOW_PROTECTED_EDITS=1` was set intentionally and justified in PR notes.
