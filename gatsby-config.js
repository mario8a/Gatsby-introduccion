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
    `gatsby-transformer-sharp`
  ],
}