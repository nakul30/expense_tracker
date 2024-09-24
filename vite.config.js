import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/copilotkit': {
        target: 'https://expense-tracker-copilot.vercel.app',
        changeOrigin: true,
      },
    }
  },
  build: {
    rollupOptions: {
      external: ['crypto'],
    },
  },
})
