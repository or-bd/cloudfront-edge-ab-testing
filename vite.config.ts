import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'versions/stable': './src/stable.tsx',
        'versions/a': './src/a.tsx',
        'versions/b': './src/b.tsx',
      },
      output: [
        {
          entryFileNames: '[name].js',
        },
      ]
    }
  }
});
