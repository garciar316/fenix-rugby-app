import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fenix-rugby-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // Changed from '.srs' to './src'
    }
  }
})
