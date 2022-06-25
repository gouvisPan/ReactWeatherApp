import React from "react";
import moment from "moment";

const getHour = (date) => moment.unix(date).format("HH").substring(0, 3);


export const extractHourlyData = (data) =>
  data.hourly.slice(1, 12).map((hour) => ({
    temp: Math.round(hour.temp),
    clouds: hour.clouds,
    key: hour.dt,
    hour: getHour(hour.dt)
  }));

export default extractHourlyData;
