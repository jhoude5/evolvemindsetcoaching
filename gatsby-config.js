/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `evolvemindsetcoaching`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "4T9L7fGt2AfDKWRG3faVQ689rvwrgvpf_jiRZuUMsyo",
      "spaceId": "hir22svv8o5n"
    }
  }, "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};
