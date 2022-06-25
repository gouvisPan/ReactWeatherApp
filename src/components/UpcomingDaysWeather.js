import React from "react";
import SingleUpcomingDay from "./SingleUpcomingDay";
import classes from "./UpcomingDaysWeather.module.css";

const UpcomingDaysWeather = (props) => {
  return (
    <div className={classes["future-forecast"]}>
      <ul className={classes["weather-list"]}>
        {props.data.map((day) => (
          <SingleUpcomingDay {...day} key={day.weekday}></SingleUpcomingDay>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingDaysWeather;
