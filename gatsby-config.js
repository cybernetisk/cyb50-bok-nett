module.exports = {
  siteMetadata: {
    title: `CYB50 Jubileumsbok`,
    description: `Jubileumsbok gitt ut ifm Cybernetisk Selskab sitt 50-års jubileum, gjort tilgjengelig på nett.`,
    author: `@megoth`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cyb50-bok-nett`,
        short_name: `cyb50-bok`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          chapters: require.resolve('./src/components/chapters-layout.tsx'),
          default: require.resolve('./src/components/layout.tsx'),
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'chapters',
        path: `${__dirname}/src/chapters`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        name: 'chapters',
        path: `${__dirname}/src/chapters`,
      },
    },
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
