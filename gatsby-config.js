const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: path.join(__dirname,'src', 'images'),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mi primer sitio en Gatsby`,
        short_name: `MPSG`,
        start_url: `/`,
        background_color: `#262834`,
        theme_color: `#EC6ECE`,
        display: `standalone`,
        icon: `src/images/icons/myIcon.png`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/about']
      }
    }
  ],
}