module.exports = {
  siteMetadata: {
    title: `VietBible - Chương trình nghiên cứu Kinh Thánh cho người Việt`,
    siteUrl: `https://vietbible.cloud`,
    description: `Chương trình nghiên cứu Kinh Thánh tiếng Việt`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134744464-1",
        head: true,
        anonymize: true,
        respectDNT: true,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
  ],
};
