module.exports = {
  siteMetadata: {
    title: `Chloe and Hayden`,
    description: `Chloe and Hayden are Syked!.`,
    author: `@haydensykes`,
    menuLinks: [
      { name: "Home", link: "/" },
      { name: "Our Story", link: "/our_story/" },
      { name: "Accomodations", link: "/accomodations/" },
      { name: "Wedding Party", link: "/wedding_party/" },
      { name: "Photos", link: "/photos/" },
      { name: "Registry", link: "/registry/" },
    ],
    weddingInfo: {
      date: "March 27th, 2020", //Format ex: October 18th, 2019
      geoLocation: "Atlanta, GA", //ex: Atlanta, GA
      venue: "The Factory Atlanta", //Fripp Plantation
      venueLink: "https://www.factoryatlanta.events/",
      gmapsLink:
        "https://www.google.com/maps/place/Factory+Atlanta/@33.8950643,-84.2928907,15z/data=!4m2!3m1!1s0x0:0x3c367ae74ca15834?sa=X&ved=2ahUKEwjA9pb1zMHtAhVHwFkKHbP_DiwQ_BIwE3oECB8QBQ",
      hashtag: "#PsychedToBeSykes",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chloe and Hayden get Married`,
        short_name: `chloeandhayden`,
        start_url: `/`,
        background_color: `#84A4B2`,
        theme_color: `#84A4B2`,
        display: `standalone`,
        icon: `src/images/tab-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Flamenco`,
          `Montserrat`,
          `Libre Baskerville`
        ],
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
