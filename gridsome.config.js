const tailwind = require("tailwindcss");
const precss = require("precss");
const postcssrem = require("postcss-rem");
const postcssmixins = require("postcss-mixins");
const postcssnested = require("postcss-nested");
const postcsssimplevars= require("postcss-simple-vars");
const autoprefixer = require("autoprefixer");


const postcssPlugins = [tailwind(), precss(), postcssrem(), postcssmixins(), postcssnested(), postcsssimplevars(), autoprefixer()];


module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/:slug', // adds a route for the "post" post type (Optional)
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://gridsome.preview.devsrvr.fpsdv.com/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
}
