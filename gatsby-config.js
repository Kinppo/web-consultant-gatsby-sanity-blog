module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Portfolio`,
    author: `Mouaad Boukiaou`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeOnly: ["styles/", "components/"]
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "9xxo12zp",
        dataset: "production"
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `433`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      }
    }
  ]
};
