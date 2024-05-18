import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'index.js': './index.html',
        'versions/stable.js': './src/testing/stable.ts',
        'versions/canary/a.js': './src/testing/a.ts',
        'versions/canary/b.js': './src/testing/b.ts',
      },
      output: [
        {
          entryFileNames: '[name]',
        },
      ]
    }
  }
});
