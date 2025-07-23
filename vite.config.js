// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/RTK_in_react/", // ✅ MUST MATCH YOUR REPO NAME!
  plugins: [react()],
});
