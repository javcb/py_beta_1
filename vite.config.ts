import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "src/ui/index.ts"),
      "@javcb/ui": fileURLToPath(new URL('./packages/ui/src/index.ts', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true,
    fs: { allow: ['..', './packages/ui'] }
  },
  optimizeDeps: {
    include: [],
    exclude: ['@javcb/ui']
  }
})
