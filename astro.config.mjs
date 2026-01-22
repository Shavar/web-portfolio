import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/postcss';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'never', // Prevent CSS bundling across pages
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
      cssCodeSplit: true, // Enable per-page CSS splitting
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
