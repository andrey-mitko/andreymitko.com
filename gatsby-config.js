module.exports = {
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
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", 'gatsby-plugin-postcss', 'gatsby-plugin-typescript']
};