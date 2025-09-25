# Tokens & Theming

## Token location

Tokens live in `packages/ui/src/tokens/tokens.css` (CSS variables).

Tailwind consumes tokens via presets or direct classes (e.g., `bg-[oklch(var(--bg))]`).

Keep semantic naming (`--bg`, `--fg`, `--brand-500`, `--radius`) and extend as needed.

## Dark mode

We toggle variables under `.dark { ... }`.
