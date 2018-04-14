// require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: "Honey Jill Hubahib",
    author: "Honey Jill Hubahib",
    description: "A Gatsby.js Starter based on Ceevee by Styleshout"
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '59az8cscnng7',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '9b7d443f41330d58538e4e7e52c74d015fee0f36dceef86a772e53a643849d3a'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          "gatsby-remark-copy-linked-files"
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ]
};
