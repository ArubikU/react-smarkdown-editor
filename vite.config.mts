import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
      outDir: 'dist',
  },
  publicDir: 'public',
  plugins: [
    react(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  base: '/react-smarkdown-editor/'
});
