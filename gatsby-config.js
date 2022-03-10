// Copygatsby-config.js: copy code to clipboard
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/andreymitko.com",
  siteMetadata: {
      title: `Andrey Mitko's Personal Website`,
      description: `Andrey Mitko's Personal Website`,
    siteUrl: `https://www.andreymitko.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-F4H7J7P435"
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/icon.png',
    },
  },
  "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 'gatsby-plugin-postcss', 'gatsby-plugin-typescript']
};