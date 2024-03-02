import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Lord_of_the_rings/",
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
