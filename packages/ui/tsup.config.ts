import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: [
    "react",
    "react-dom",
    "tailwindcss",
    "@types/react",
    "@types/react-dom",
    "sonner",
    "react-dropzone",
    "@tanstack/react-table",
    "react-day-picker",
    "react-pdf",
    "@tremor/react",
    "@stripe/react-stripe-js",
    "@stripe/stripe-js",
    "pdfjs-dist"
  ],
  target: "es2019",
  // Keep CSS imports as side-effects; tsup will copy them via import in src/index.ts
});
