module.exports = {
  siteMetadata: {
      title: `Andrey Mitko's Personal Website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-F4H7J7P435"
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};