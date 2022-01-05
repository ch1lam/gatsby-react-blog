/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-05 18:51:21
 * @LastEditTime : 2022-01-05 23:59:15
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\src\pages\index.js
 */
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/th.webp"
      />
    </Layout>
  );
};

export default IndexPage;
