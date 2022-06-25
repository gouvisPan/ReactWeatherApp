import moment from "moment";

const getDate = (date) => moment(date).format("Do MMM");
const extractTodaysWeatherData = (data, city) => ({
  cityName: city,
  desc: data.current.weather[0].description,
  temp: data.current.temp,
  humidity: data.current.humidity,
  tempMin: data.daily[0].temp.min,
  tempMax: data.daily[0].temp.max,
  feelsLike: data.current.feels_like,
  date: getDate(data.current.date),
  main: data.current.weather[0].main,
  windSpeed: Math.round(data.current.wind_speed),
  visibility: String(data.current.visibility).slice(0,2),
  clouds: data.current.clouds,
  icon: `http://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`,
});

export default extractTodaysWeatherData;
