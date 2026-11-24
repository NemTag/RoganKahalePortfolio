import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// Pages serves the site from /<repo name>/; `npm run dev` stays at /
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/RoganKahalePortfolio/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
