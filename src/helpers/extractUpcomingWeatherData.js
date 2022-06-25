import moment from "moment";

const getWeekday = (date) => moment.unix(date).format("dddd").substring(0, 3);

const display = (date) => console.log(date);
export const extractUpcomingWeatherData = (data) =>
  data.daily.slice(1, 7).map((day) => ({
    temp: Math.round(day.temp.max),
    icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
    weekday: getWeekday(day.dt),
  }));

export default extractUpcomingWeatherData;
