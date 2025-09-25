# @javcb/ui

Minimal UI library scaffold for React + Tailwind.

## Install (local dev link)

```bash
npm pack --silent
# in your app (adjust the path as needed):
npm i ../path-to/ui_library_combined_2/javcb-ui-0.1.0.tgz



Use
import { Button } from "@javcb/ui";

export default function Demo() {
  return (
    <div data-theme="light" className="p-6">
      <Button intent="primary">Hello</Button>
    </div>
  );
}


Your app must have Tailwind configured. This package injects tokens.css automatically.

## Consumer App Setup (Vite + React)

Tailwind (in your APP tailwind.config.cjs):
```js
module.exports = {
  content: ["./index.html","./src/**/*.{ts,tsx}","./node_modules/@javcb/ui/dist/**/*.{js,ts}"],
  theme: { extend: {} },
  plugins: []
};
```

---

# (optional) step 9 — commit and push

**prompt to cursor:**


Run:
git add -A
git commit -m "feat: initial ui library scaffold (tokens, adapter, Button)"
git branch -M main
git remote add origin https://github.com/javcb/ui_library_combined_2.git

git push -u origin main


---

## add another library later (e.g., Tremor) — repeatable pattern

**prompt to cursor (template):**


Install the library (example Tremor):
npm i @tremor/react

Create adapter and unified component:

File: src/adapters/tremor/Card.tsx
import * as React from "react";
import { Card as TremorCard } from "@tremor/react";
/** Adapter — provenance: Tremor */
export type TremorCardProps = React.ComponentProps<typeof TremorCard>;
export const TremorAdapterCard = React.forwardRef<HTMLDivElement, TremorCardProps>(
({ className, ...props }, ref) => (
<TremorCard ref={ref} className={className} {...props} />
)
);
TremorAdapterCard.displayName = "TremorAdapterCard";

File: src/ui/atoms/Card.tsx
import * as React from "react";
import { TremorAdapterCard } from "../../adapters/tremor/Card";
export type CardProps = React.ComponentProps<typeof TremorAdapterCard>;
export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => (
<TremorAdapterCard ref={ref} {...props} />
));
Card.displayName = "Card";

Update src/index.ts to export Card as well.


---

## what you have now

- a **single, publishable package** (`@javcb/ui`) that:
  - ships ESM+CJS+types,
  - loads **tokens.css** (light/dark ready),
  - exposes a **unified Button** with variants,
  - is ready to add more adapters (Tremor, Catalyst, etc.) and unified components.

When you're ready, tell me the **next two components** you want (common picks: `Input`, `Card`). I'll give you paste-ready adapter + unified component prompts exactly like above.

## View the components

### Storybook (recommended)
```bash
npm run storybook
# opens http://localhost:6006 with per-component docs & controls
```

### Demo Sandbox
```bash
npm run dev
# opens http://localhost:5173 with interactive component showcase
```
::contentReference[oaicite:0]{index=0}