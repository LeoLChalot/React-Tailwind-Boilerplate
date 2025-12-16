import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@Assets': '/src/assets',
      '@Components': '/src/components',
      '@Ui': '/src/components/ui',
      '@Forms': '/src/components/form',
      '@Config': '/src/config',
      '@Hooks': '/src/hooks',
      '@Layouts': '/src/layouts',
      '@Pages': '/src/pages',
      '@Errors': '/src/pages/errors',
      '@Routes': '/src/routes',
      '@Services': '/src/services',
      '@Stores': '/src/stores',
      '@Utils': '/src/utils',
    },
  },
})
