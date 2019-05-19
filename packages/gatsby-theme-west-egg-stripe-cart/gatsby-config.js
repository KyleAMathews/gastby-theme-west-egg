const path = require('path');
const pkg = require('./package.json');

module.exports = (options) => {
  const {STRIPE_API_KEY, STRIPE_SECRET_KEY, siteUrl} = options;

  return {
    siteMetadata: {
      STRIPE_API_KEY,
      siteUrl
    },
    __experimentalThemes: ['gatsby-theme-west-egg-style'],
    plugins: [
      'gatsby-plugin-stripe',
      {
        resolve: `gatsby-source-stripe`,
        options: {
          objects: ['Sku'],
          secretKey: STRIPE_SECRET_KEY,
          downloadFiles: true,
          auth: false,
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
          {
            resolve: "gatsby-plugin-page-creator",
            options: {
              path: path.join(__dirname, "src", "pages"),
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/src/pages/`,
            },
          },
          {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
              modules: [pkg.name]
            }
          }
    ]
  }
 
}