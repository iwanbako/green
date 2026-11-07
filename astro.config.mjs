// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://greenfresh.co.id',

  output: 'static',

  trailingSlash: 'never',

  build: {
    format: 'directory',
    assets: '_assets',
  },

  integrations: [
    react(),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
    },
  },
});