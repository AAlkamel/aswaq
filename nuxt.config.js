export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'e-aswaaq',
    htmlAttrs: {
      lang: 'ar',
      dir:'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://use.fontawesome.com/releases/v5.15.3/css/all.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
//"~/assets/css/bootstrap.min.css",
    "~/assets/css/global",
    "~/assets/scss/global"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/vuetify'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid:true,
      brands:true,
      regular:true,
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
