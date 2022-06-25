import { Card } from "../UI/Card";
import classes from "./CurrentSecondaryStats.module.css";
import HourlyStatsList from "./HourlyStatsList";
import { useState } from "react";

const CurrentSecondaryStats = (props) => {
  const [isSecSelected, setIsSecSelected] = useState(false);
  const [listRendered, setListRendered] = useState(true);
  const data = props.data.todaysWeather;
  const hourlyData = props.data.hourlyData;

  const statsClickHandler = () => {
    setIsSecSelected(!isSecSelected);

    if (listRendered) {
      setListRendered(false);
    } else {
      setTimeout(() => {
        setListRendered(true);
      }, 150);
    }
  };

  const secDisplayCSS = isSecSelected
    ? "current-stats-secondary-left-expanded"
    : "current-stats-secondary-left";

  const hourlyDisplayCSS = listRendered ? " " : "hourly-shrink";

  return (
    <div className={classes["current-stats-secondary-card"]}>
      <Card>
        <div className={classes[secDisplayCSS]} onClick={statsClickHandler}>
          <div className={classes["always-shown"]}>
            <div>
              H: {data.tempMax.toFixed(0)}°C L: {data.tempMin.toFixed(0)}°C
            </div>
            <div>Feels: {data.feelsLike.toFixed(0)}°C</div>
            <div>Humidity: {data.humidity}%</div>
          </div>
          <div className={classes["togglable"]}>
            <div>W: {data.windSpeed} km/h</div>
            <div>C: {data.clouds}%</div>
            <div>V: {data.visibility}km</div>
          </div>
        </div>
      </Card>
      <div className={classes[hourlyDisplayCSS]}>
        <HourlyStatsList list={hourlyData} />
      </div>
    </div>
  );
};

export default CurrentSecondaryStats;
