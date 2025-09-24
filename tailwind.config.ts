import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,html}",
    "./src/vendor/tailwindplus/**/*.{ts,tsx,js,jsx,css}",
    // Include any future kit files so purge doesn't strip classes:
    "./node_modules/**/tailwindplus*/**/*.{js,ts,tsx}",
    "./node_modules/**/tailwind-plus*/**/*.{js,ts,tsx}",
    "./node_modules/**/@tailwindplus*/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { 500: "var(--color-brand-500)" },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)"
        },
        bg: {
          surface: "var(--color-bg-surface)",
          muted: "var(--color-bg-muted)"
        },
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.06)",
      },
    },
  },
  // Add safelist only if we detect dynamic class generation in adapters:
  safelist: [
    "bg-brand-500", "bg-brand-500/10",
    "text-brand-500",
    "bg-bg-muted", "bg-bg-surface",
    "text-text-primary", "text-text-secondary",
  ],
  plugins: [],
}

export default config