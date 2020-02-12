module.exports = {
  siteMetadata: {
    title: `Web consulting`,
    description: `This is a blog protfolio for a web consultant`,
    author: `MBK`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
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
        name: `The Web consulting`,
        short_name: `WebConsulting`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    }
  ]
};
