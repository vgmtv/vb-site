module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
  ],
};
