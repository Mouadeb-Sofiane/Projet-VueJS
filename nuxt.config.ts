// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', "@nuxtjs/sanity"],

  css : ['~/assets/scss/main.scss'],
  
  sanity: {
    projectId: "a8btv06f",
    dataset: "production",
  },

  components : [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/scss/foundations/variables" as *;
          @use "@/assets/scss/foundations/functions" as *;
          @use "@/assets/scss/foundations/mixins" as *;
          @use "@/assets/scss/foundations/normalize" as *;
        `,
      },
    },
  },
}
})