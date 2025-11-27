import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/website/', // <-- NOME DEL REPO QUI
  plugins: [react()],
  build: {
    outDir: 'docs', // così la build finisce in /docs
  },
})
