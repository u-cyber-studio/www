import { defineConfig } from "vite";

export default defineConfig({
  root: "public",
  publicDir: false,
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    open: false,
  },
});
