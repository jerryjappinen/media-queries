// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  // https://nuxt.com/docs/getting-started/styling
  css: ["~/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/shared.scss" as *;',
        },
      },
    },
  },
});
