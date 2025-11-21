import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const REPO_NAME = 'memory-card'

// https://vite.dev/config/
export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [react()],
})
