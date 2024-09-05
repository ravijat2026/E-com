import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin:"https://ecom-backend-cr0v.onrender.com",
    proxy: {
      "/api/": "https://ecom-backend-cr0v.onrender.com",
      "/uploads/": "https://ecom-backend-cr0v.onrender.com",
    }
  }
})
