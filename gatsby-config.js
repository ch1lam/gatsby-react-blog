/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-05 18:51:21
 * @LastEditTime : 2022-01-06 00:59:31
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\gatsby-config.js
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-react-blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
  ],
};
