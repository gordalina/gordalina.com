const theme = require(`${__dirname}/src/gatsby-plugin-theme-ui`)

module.exports = {
  siteMetadata: {
    title: `Samuel Gordalina`,
    description: `Samuel Gordalina's personal website`,
    author: `@gordalina`,
    siteUrl: "https://gordalina.com",
  },
  plugins: [
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-theme-ui`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx"],
        defaultLayouts: {
          pages: require.resolve("./src/components/layout/Layout.tsx"),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Samuel Gordalina`,
        short_name: `Samuel Gordalina`,
        start_url: `/`,
        background_color: theme.colors.background,
        theme_color: theme.colors.primary,
        display: `minimal-ui`,
        icon: `src/images/brand/favicon.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-25956864-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Defers execution of google analytics script after page load
        // defer: false,
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "example.com",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `256881476`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/private`],
      },
    },
    {
      resolve: "@sentry/gatsby",
      options: {
        debug: process.env.NODE_ENV !== "production",
        dsn:
          "https://fa15ae9a9900402aa5e8a7854cda6fb8@o439738.ingest.sentry.io/5406995",
        environment: process.env.NODE_ENV || "dev",
        enabled: process.env.NODE_ENV === "production",
        tracesSampleRate: 0.7,
      },
    },
  ],
}
