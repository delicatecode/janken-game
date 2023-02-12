import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
    }),
  ],
  build: {
    manifest: true,
    rollupOptions: {
      input: '/src/main.ts',
      output: {
        manualChunks: undefined
      }
    },
    sourcemap: true
  },
})
