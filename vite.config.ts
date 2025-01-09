import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vueDevtools from "vite-plugin-vue-devtools";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevtools(), createHtmlPlugin({})],
});
