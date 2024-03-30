import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  components: false,

  imports: {
    autoImport: false,
  },

  css: ["~/assets/css/style.css"],

  modules: ["@nuxtjs/tailwindcss", ""],
});
