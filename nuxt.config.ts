// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Roboto': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
  },


})
