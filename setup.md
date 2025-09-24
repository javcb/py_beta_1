# Vite + React + Tailwind Plus Setup

Your Vite + React app with Tailwind Plus is now configured! Here's how to get started:

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Project Structure

- `src/main.tsx` - React app entry point
- `src/App.tsx` - Main app component with routing
- `src/pages/` - Page components (documents, payments)
- `src/adapters/` - Tailwind Plus component adapters
- `src/patterns/` - Reusable UI patterns
- `src/mock/` - Mock data for development
- `tailwind.config.ts` - Tailwind configuration with semantic tokens
- `postcss.config.cjs` - PostCSS configuration

## Available Routes

- `/` - Documents list (default)
- `/documents` - Documents list
- `/documents/:id` - Document detail page
- `/payments` - Payments page

## Next Steps

1. Replace the placeholder Tailwind Plus preset import in `tailwind.config.ts`:
   ```ts
   // import tailwindPlusPreset from "tailwind-plus/preset"
   ```
   with your actual kit preset export.

2. Update the CSS variables in `src/app.css` to match your Tailwind Plus kit variables.

3. Customize the adapters in `src/adapters/` to match your design system.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
