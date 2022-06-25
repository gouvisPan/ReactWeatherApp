import React from "react";
import classes from "./SingleUpcomingDay.module.css";

const SingleUpcomingDay = ({ temp, icon, weekday }) => {
  return (
    <li className={classes["weather-item"]}>
      <span>{weekday}</span>
      <img className={classes.icon} src={icon} alt="icon" />
      <span>{temp}°C</span>
    </li>
  );
};

export default SingleUpcomingDay;
