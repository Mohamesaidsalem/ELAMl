import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" يخلي الموقع يشتغل على GitHub Pages وأي استضافة فرعية
export default defineConfig({
  plugins: [react()],
  base: "./",
});
