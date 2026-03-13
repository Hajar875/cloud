import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Crée __dirname équivalent en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // exemple d'alias
    },
  },
  test: {
    globals: true,       // permet d'utiliser test/expect globalement
    environment: 'jsdom' // nécessaire pour tester React
  }
});