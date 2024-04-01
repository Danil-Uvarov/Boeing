import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  components: false,

  imports: {
    autoImport: false,
  },

  css: ["~/assets/css/style.css"],
  app: {
    head: {
      link: [{ rel: "icon", href: "/favicon.ico" }],
      title: "$INVBOE",
      meta: [
        {
          name: "description",
          content:
            "But it’s more than just a coin, it’s tokenized winning. $INVBOE is effortless domination of the sky, Inverse Boeing is nothing like Boeing we open our doors for profits not losses. The only whistleblowing our investors will be doing is blowing whistles of joy and happiness during take off. We Believe that we truly crafted something that is set to only take off. The sky is the limit see you up there with he stars! ",
        },
        { property: "og:image", content: "/og-image.webp" },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-og-image"],
});
