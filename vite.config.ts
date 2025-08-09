import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// The export is now a function that receives the 'mode'
export default defineConfig(({ mode }) => ({
  // This line conditionally sets the base path.
  // It's '/' for local development and '/daniel-portfolio/' for production builds.
  base: mode === 'production' ? '/daniel-portfolio/' : '/',

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
}));