import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://michalgazda.github.io',
  base: '/michal.gazda.info/',
  output: 'static',
  outDir: './dist',
});