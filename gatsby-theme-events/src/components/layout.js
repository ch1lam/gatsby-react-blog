/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-11 16:08:14
 * @LastEditTime : 2022-01-12 17:08:16
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\gatsby-theme-events\src\components\layout.js
 */
import React from "react";
import { Heading, Container } from "theme-ui";

const Layout = ({ children }) => {
  return (
    <div>
      <Heading>Gatsby Events Theme</Heading>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
