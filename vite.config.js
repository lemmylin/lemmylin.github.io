import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Auto-detect GitHub Pages base: works for user/organization sites and project pages
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserSite = repo.endsWith('.github.io')
const base = isUserSite ? '/' : (repo ? `/${repo}/` : '/')

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base
})
