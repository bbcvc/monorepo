import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  routes: [
    { path: "/", component: "index" },
    { path: "/icons", component: "icons" },
  ],

  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
