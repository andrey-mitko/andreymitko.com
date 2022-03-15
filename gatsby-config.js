// Copygatsby-config.js: copy code to clipboard
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Andrey Mitko's Personal Website`,
      description: `Andrey Mitko's Personal Website`,
    siteUrl: `https://www.andreymitko.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-220115955-1",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      head: true,
      // Delays sending pageview hits on route update (in milliseconds)
      pageTransitionDelay: 0,
      // defaults to false
      enableWebVitalsTracking: true,
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/icon.png',
    },
  },
  "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 'gatsby-plugin-postcss', 'gatsby-plugin-typescript', 'gatsby-plugin-cname']
};