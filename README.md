# Monorepo with Plus-free UI Package

This is a **monorepo** with a Plus-free UI package at `packages/ui` and a demo app that consumes it.

## Structure

```
packages/
  ui/                    # Plus-free UI package (@javcb/ui)
src/
  vendor/tailwindplus/   # Tailwind Plus assets (app-only)
  pages/                 # Demo app pages
```

## Features

- **Monorepo**: npm workspaces with `@javcb/ui` package
- **Plus-free UI**: Clean UI components without Tailwind Plus dependencies
- **Token system**: CSS variables for theming
- **Guardrails**: Protected files with Cursor rules and Git hooks
- **CI/CD**: GitHub Actions workflow

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build UI package:**
   ```bash
   npm -w @javcb/ui run build
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Visit demo pages:**
   - `/ui-demo` - Test UI package integration
   - `/documents` - Document management
   - `/payments` - Payment processing

## Development

- **UI Package**: Located at `packages/ui/` - Plus-free components
- **Tailwind Plus**: Located at `src/vendor/tailwindplus/` - App-only assets
- **Build Order**: UI package builds first, then app
- **Guardrails**: Protected files require explicit approval to edit

## Protected Files

The following files are protected and require explicit approval to edit:
- `src/vendor/**` - Tailwind Plus assets
- `packages/ui/src/tokens/**` - Design tokens
- `packages/ui/src/adapters/**` - Third-party adapters
- `packages/ui/src/index.ts` - Main export file

**Override for a single commit**

macOS/Linux:
```bash
ALLOW_PROTECTED_EDITS=1 git commit -m "intentional change"
```

Windows (PowerShell):
```powershell
$env:ALLOW_PROTECTED_EDITS=1; git commit -m "intentional change"
```

Windows (Command Prompt):
```cmd
set ALLOW_PROTECTED_EDITS=1 && git commit -m "intentional change"
```
