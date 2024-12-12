// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxt/image", "nuxt-viewport"],
  css: ["@/assets/global.css"],
  shadcn: {
    componentDir: "./components/ui",
  },
  viewport: {
    breakpoints: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {
        exposeConfig: true,
        configPath: "tailwind.config.js",
        cssPath: "~/assets/css/tailwind.css",
        viewer: true,
      },
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Make environment variables accessible here
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      // Add more environment variables as needed
    },
  },
});
