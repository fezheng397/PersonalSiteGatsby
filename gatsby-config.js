module.exports = {
  siteMetadata: {
    name: `Hello Typescript World!`,
    tagline: `Gatsby + SASS + Typescript = 💪`
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felix Zheng`,
        start_url: "/",
        background_color: "#fff",
        icon: `assets/fz-logo.png`
      }
    }
  ]
};
