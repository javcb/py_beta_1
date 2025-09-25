import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/compat.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'tailwindcss'],
});