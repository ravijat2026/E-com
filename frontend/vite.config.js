import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      "/api/": "https://ecom-backend-cr0v.onrender.com",
      "/uploads/": "https://ecom-backend-cr0v.onrender.com",
    }
  }
=======
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
    },
  },
  build: {
    rollupOptions: {
      external: ['mongoose'], // Exclude mongoose from the frontend build
    },
  },
>>>>>>> 044eb61df575a7a0ba4bf69d3e0536828a7b3113
})
