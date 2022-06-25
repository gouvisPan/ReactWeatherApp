import React from "react";

const HourForecast = (temp, clouds) => {
  return (
    <li>
      <span>{temp}°C</span>
      <span>{clouds}%</span>
    </li>
  );
};

export default HourForecast;
