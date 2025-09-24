import type { Config } from "tailwindcss"
// Replace with the actual preset import from your Tailwind Plus kit:
import tailwindPlusPreset from "@tailwindplus/preset" // <-- use your kit's package

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,html}"],
  presets: [tailwindPlusPreset as any],
  safelist: [
    "bg-brand-500", "bg-brand-500/10",
    "text-brand-500",
    "bg-bg-muted", "bg-bg-surface",
    "text-text-primary", "text-text-secondary",
    // add any runtime-constructed classes you use
  ],
  theme: {
    extend: {
      colors: {
        brand: { 500: "var(--color-brand-500)" },
        text: { primary: "var(--color-text-primary)", secondary: "var(--color-text-secondary)" },
        bg: { surface: "var(--color-bg-surface)", muted: "var(--color-bg-muted)" }
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)"
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: []
}

export default config
