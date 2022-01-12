/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-11 17:31:33
 * @LastEditTime : 2022-01-11 17:31:33
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\site\gatsby-config.js
 */
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-events",
      options: {
        contentPath: "events",
        basePath: "/events",
      },
    },
  ],
};
