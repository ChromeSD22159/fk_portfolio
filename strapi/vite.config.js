import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: ['frederikkohler.de', 'www.frederikkohler.de', 'localhost'],
  },
});