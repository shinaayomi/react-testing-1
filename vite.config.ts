import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  test: {
    environment: 'jsdom', // Required for testing React components
    globals: true, // Enable global test functions (describe, it, etc.)
    setupFiles: ['./test/setup.ts'], // Optional setup file for global imports
    include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'], // Test file patterns
  },
})
