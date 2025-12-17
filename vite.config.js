import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vercel serves the app from the domain root, so we don't need a custom base path.
export default defineConfig({
  plugins: [react()],
});
