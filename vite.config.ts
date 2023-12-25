import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      name: 'qantra',
      fileName: format => `index.${format}.js`,
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      treeshake: 'smallest',
      output: {
        format: 'esm',
        exports: 'named',
      },
    },
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}`,
      '@dev/': `${resolve(__dirname, 'src/dev')}`,
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: { host: '0.0.0.0' },
  },
});
