/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-11 14:58:27
 * @LastEditTime : 2022-01-11 16:17:51
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\gatsby-theme-events\src\templates\events.js
 */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import EventList from "../components/event-list";

const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          name
          startDate
          endDate
          location
          url
          slug
        }
      }
    }
  `);

  const events = data.allEvent.nodes;

  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  );
};

export default EventsTemplate;
