import react from '@vitejs/plugin-react'
import { blaVitePlugin } from 'bla-agents/bundler'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    blaVitePlugin({
      intensity: 'balanced',
      honeySourceMap: false,
      failBuildOnError: true,
    }),
  ],
})
