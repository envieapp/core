import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'envie/core',
      formats: ['es', 'umd'],
      fileName: (format) => { return `index.${format}.js`; },
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@envie/theme'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@emotion/react': 'emotionReact',
          '@envie/theme': 'envieTheme',
        },
      },
    },
  },
});
