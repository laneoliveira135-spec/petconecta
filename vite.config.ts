import { defineConfig } from 'vite-plus';

export default defineConfig({
  server: {
    port: 5173,
    proxy: { '/api': 'http://localhost:3000' },
  },
});
