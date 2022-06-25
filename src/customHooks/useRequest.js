import React, { useState } from "react";
import axios from "axios";
import extractTodaysWeatherData from "../helpers/extractTodaysWeatherData";
import extractUpcomingWeatherData from "../helpers/extractUpcomingWeatherData";
import extractHourlyData from "../helpers/extractHourlyData";

const API_ID = "&appid=8565394423cb0400c30d8cc5a8897ab8";
const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?`;
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/onecall?`;

const useRequest = (location) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getCoordinates = async (location) => {
    const response = await axios.get(`${GEO_URL}q=${location}${API_ID}`);

    if (!response.data || response.data.length === 0) {
      setHasError("Location can't be found");
      setIsLoading(false);
      return;
    }

    const lat = response.data[0].lat;
    const lon = response.data[0].lon;

    return { lat, lon };
  };

  const getWeatherData = async (lat, lon) => {
    const response = await axios.get(
      `${WEATHER_URL}lat=${lat}&lon=${lon + API_ID}&units=metric`
    );

    if (!response.data || response.data.length === 0) {
      setHasError("Location can't be found");
      setIsLoading(false);
      return;
    }

    return response.data;
  };

  const submitRequest = async (location) => {
    setIsLoading(true);
    setHasError(false);

    const { lat, lon } = await getCoordinates(location);
    if (!lat || !lon) return;

    const data = await getWeatherData(lat, lon);
    if (!data) return;

    const todaysWeather = extractTodaysWeatherData(data, location);
    const upcomingDaysData = extractUpcomingWeatherData(data);
    const hourlyData = extractHourlyData(data);

    console.log(data);

    setData({ todaysWeather, upcomingDaysData, hourlyData });

    
    setIsLoading(false);
  };

  return {
    submitRequest,
    data,
    isLoading,
    hasError,
  };
};

export default useRequest;
