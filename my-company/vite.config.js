import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    // Add the ngrok host to allowedHosts
    allowedHosts: [
      '0a6a28174d30.ngrok-free.app'
    ],
    // You can also include other hosts if needed
  }
})


