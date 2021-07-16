import webpack from 'webpack'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'indigo-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/google-tag.js', '@/plugins/vue-smooth-scroll.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@aceforth/nuxt-optimized-images',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    'nuxt-highcharts',
    [
      'nuxt-social-meta',
      {
        title: 'Indigo Protocol',
        description:
          'Indigo is an algorithmic, autonomous synthetics protocol for on-chain price exposure to real-world assets, built on Cardano.',
        url: 'https://indigoprotocol.io',
        img: '/images/banner.png',
        locale: 'en-US',
        twitter: '@indigo_protocol',
        themeColor: '#100532',
      },
    ],
    '@nuxtjs/sitemap',
  ],

  googleFonts: {
    families: {
      Barlow: [100, 300, 500, 700],
      'Open+Sans': [100, 300, 500, 700],
    },
  },

  fontawesome: {
    icons: {
      solid: [
        'faPlus',
        'faMinus',
        'faChevronDown',
        'faChevronUp',
        'faEnvelope',
        'faBars',
      ],
      brands: [
        'faTwitter',
        'faMedium',
        'faDiscord',
        'faLinkedinIn',
        'faTelegramPlane',
        'faRedditAlien',
      ],
    },
  },

  optimizedImages: {
    optimizeImages: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  sitemap: {
    hostname: 'https://indigoprotocol.io',
    gzip: true,
    exclude: [],
  },

  purgeCSS: {
    // Overrides the default settings here
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /@highcharts\/map-collection/,
      }),
    ],
  },
}
