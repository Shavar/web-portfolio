import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/postcss';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    build: {
      cssMinify: 'esbuild',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
  },
});
