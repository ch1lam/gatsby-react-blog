/*
 * @Description  :
 * @Author       : ch1lam
 * @Date         : 2022-01-11 16:10:46
 * @LastEditTime : 2022-01-12 17:37:18
 * @LastEditors  : chilam
 * @FilePath     : \gatsby-react-blog\gatsby-theme-events\src\components\event-list.js
 */
import React from "react";
import { Link } from "gatsby";
import { Themed } from "theme-ui";

const EventList = ({ events }) => (
  <>
    <Themed.h1>Upcoming Events</Themed.h1>
    <Themed.ul>
      {events.map((event) => (
        <Themed.li key={event.id}>
          <strong>
            <Link to={event.slug}>{event.name}</Link>
          </strong>
          <br />
          {new Date(event.starDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          in {event.location}
        </Themed.li>
      ))}
    </Themed.ul>
  </>
);

export default EventList;
