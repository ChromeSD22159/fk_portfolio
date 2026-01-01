import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['frederikkohler.de', 'www.frederikkohler.de', 'localhost', '69.62.113.185'],
  },
});