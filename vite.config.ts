import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Using the faster SWC plugin from Lovable
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // This 'base' property is ESSENTIAL for GitHub Pages deployment
  base: "/daniel-portfolio/",

  plugins: [react()],
  resolve: {
    // This alias configuration is REQUIRED for your app's imports to work
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // These are nice-to-have settings for local development
    port: 3000,
    open: true,
  },
})