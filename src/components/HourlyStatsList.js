import React from "react";
import HourStatsItem from "./HourStatsItem";
import { Card } from "../UI/Card";
import classes from "./HourlyStatsList.module.css";

const HourlyStatsList = (props) => {
  const hourlyStatList = [];
  return (
    <Card light={true}>
      <div className={classes["hourly-container"]}>
        <ul className={classes["hour-list"]}>
          {props.list.map((hour) => (
            <HourStatsItem {...hour} key={hour.key}></HourStatsItem>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default HourlyStatsList;
