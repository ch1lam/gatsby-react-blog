/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-11 01:11:10
 * @LastEditTime : 2022-01-12 17:10:17
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\gatsby-theme-events\gatsby-config.js
 */
module.exports = ({ contentPath = "data", basePath = "/" }) => ({
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: contentPath,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: "Event",
      },
    },
  ],
});
