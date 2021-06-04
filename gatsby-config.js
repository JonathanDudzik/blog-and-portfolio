module.exports = {
  siteMetadata: {
    title: "Jonathan's Portfolio",
    description: "Jonathan's personal portfolio",
    links: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "Blog",
        // this link can be the latest post slug
        url: "/entries/welcome",
      },
      {
        text: "Resume",
        url: "/about",
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-gatsby-cloud"
  ],
};
