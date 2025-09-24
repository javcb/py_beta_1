# Demo Tailwind Plus Starter (Sandbox)

This is a **framework-agnostic starter skeleton** to recreate your app's key screens
using the **Tailwind Plus** kit with mock data. It is intended to live at:

```
apps/demo-tailwind-plus/
```

It focuses on:
- **Token bridge**: keep your semantic tokens while using Tailwind Plus.
- **Adapters**: wrap Tailwind Plus components so your app consumes your API (`Button`, `Card`, etc.).
- **Patterns**: reusable flows (`DocumentList`).
- **Pages**: route-level screens mirroring the real app (`/documents`, `/documents/[id]`, `/payments`).

> ⚠️ Note: Import paths for the Tailwind Plus kit vary by vendor. Replace the placeholder imports with the actual ones from your purchase (e.g., `@tailwindplus/ui`, `tailwind-plus`, etc.).

## Suggested repo layout

```
packages/
  ui-library/
apps/
  demo-tailwind-plus/   <-- this folder
```

## Setup (Next.js example)

1. Copy this folder to `apps/demo-tailwind-plus` inside your monorepo.
2. In your **Next.js** app at `apps/demo-tailwind-plus`:
   - Ensure Tailwind and PostCSS are configured.
   - Add this Tailwind config as your app's `tailwind.config.ts` or merge it with yours.
   - Add `src/app.css` to your root layout or `_app.tsx`.

3. Replace the placeholder Tailwind Plus preset import in `tailwind.config.ts`:
   ```ts
   // import tailwindPlusPreset from "tailwind-plus/preset"
   ```
   with your actual kit preset export.

4. Run your dev server and visit:
   - `/documents` (list + states)
   - `/documents/[id]` (detail)
   - `/payments`

## Setup (Vite + React example)

1. Create a Vite React TS app in `apps/demo-tailwind-plus`.
2. Install Tailwind & PostCSS; use the provided `tailwind.config.ts` and `src/app.css`.
3. Use React Router to map routes:
   - `/documents`, `/documents/:id`, `/payments`.
4. Import and render `patterns/DocumentList` & pages.

## Token bridge

We expose semantic CSS variables that map to Tailwind Plus variables. Update the variable names to match your kit.

## Backporting

- Anything you like inside `src/adapters` can be moved into `packages/ui-library/components`.
- Keep page code importing **your adapters**, not the kit directly.
