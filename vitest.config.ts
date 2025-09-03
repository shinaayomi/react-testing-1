import { defineConfig } from 'vitest/config';
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter(),        // Explicitly include React Router plugin
    tailwindcss(),
    tsconfigPaths()
  ],
  test: {
    environment: 'jsdom', // or 'happy-dom' for React components
    globals: true,
    setupFiles: ['./test/setup.ts'] // optional setup file
  }
});