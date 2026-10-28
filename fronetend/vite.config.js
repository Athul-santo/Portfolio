import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      awaitWriteFinish: {
        stabilityThreshold: 150,
        pollInterval: 25,
      },
    },
  },
})
