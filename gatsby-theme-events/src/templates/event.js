/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-11 15:00:09
 * @LastEditTime : 2022-01-11 16:42:33
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\gatsby-theme-events\src\templates\event.js
 */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Event from "../components/event";

export const query = graphql`
  query ($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM DD YYYY")
      endDate(formatString: "MMMM DD YYYY")
      location
      slug
    }
  }
`;
const EventTemplate = ({ data: { event } }) => (
  <Layout>
    <Event {...event} />
  </Layout>
);

export default EventTemplate;
