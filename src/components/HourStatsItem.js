import React from 'react'
import classes from './HourStatsItem.module.css'
const HourStatsItem = (hour) => {
  return (
    <li className={classes["hour-item"]}>
      <span>{hour.hour}:00</span>
      <span>{hour.temp}°C</span>
    </li>
  );
}

export default HourStatsItem