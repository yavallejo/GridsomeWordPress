const tailwind = require("tailwindcss");
const precss = require("precss");
const postcssrem = require("postcss-rem");
const postcssmixins = require("postcss-mixins");
const postcssnested = require("postcss-nested");
const postcsssimplevars= require("postcss-simple-vars");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind(), precss(), postcssrem(), postcssmixins(), postcssnested(), postcsssimplevars(), autoprefixer()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));

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
        baseUrl: 'http://melagridsome.local/', // required
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
