import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss()
  ],
  server: {
    port: 3000,     // Set dev server port
    host: true      // Allow access from network (e.g., LAN or external IP)
  }
})
