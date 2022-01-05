/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-06 00:44:05
 * @LastEditTime : 2022-01-06 01:09:43
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\src\pages\blog.js
 */
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;
