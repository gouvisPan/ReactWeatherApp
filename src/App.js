import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentStats from "./components/CurrentStats";
import CurrentSecondaryStats from "./components/CurrentSecondaryStats";
import UpcomingDaysWeather from "./components/UpcomingDaysWeather";
import Intra from "./UI/Intra";
import Error from "./components/Error/Error";
import Favorites from "./components/favorites/Favorites";

import useRequest from "./customHooks/useRequest";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import favsImg from "../src/assets/favorites.png";

function App() {
  const [location, setLocation] = useState("Amsterdam");
  const [areFavsShown, setAreFavsShown] = useState(false);
  const [favsError, setFavsError] = useState(false);

  const favs = useSelector((state) => state.favs.cities);
  const dispatch = useDispatch();

  let backgroundCSS = "app";
  let initial = true;

  const {
    submitRequest: searchLocation,
    data: weatherData,
    isLoading,
    hasError: error,
  } = useRequest();

  useEffect(async () => {
    const response = await axios.put(
      "https://weatherapp-60b95-default-rtdb.europe-west1.firebasedatabase.app/favs",
      {
        favs,
      }
    );

    console.log(response);
  }, [favs]);

  const searchHandler = (event) => {
    if (event.key === "Enter") {
      searchLocation(location);
      setLocation("");
    }
  };

  const autoSearchFavorite = (favoriteName) => {
    searchLocation(favoriteName);
  };

  const setLocationHandler = (value) => {
    setLocation(value);
  };

  const toggleFavsHandler = () => {
    if (favs.length !== 0) {
      setAreFavsShown(!areFavsShown);
    } else {
      setFavsError(true);
      setInterval(() => {
        setFavsError(false);
      }, 3000);
    }
  };

  if (weatherData) {
    initial = false;
    backgroundCSS = `app ${weatherData.todaysWeather.main}`;
  }

  return (
    <div className={backgroundCSS}>
      {areFavsShown && (
        <Favorites
          onHideFavs={toggleFavsHandler}
          citySearch={autoSearchFavorite}
        />
      )}
      <div className="content">
        {favsError && <Error>No favorites added yet!</Error>}
        <SearchBar
          setL={setLocationHandler}
          location={location}
          searchHandler={searchHandler}
          initial={initial}
        ></SearchBar>

        {weatherData && (
          <div className="current-container">
            <CurrentStats
              className="top-box"
              data={weatherData.todaysWeather}
            />
            <CurrentSecondaryStats data={weatherData} />
          </div>
        )}
        {weatherData && (
          <UpcomingDaysWeather data={weatherData.upcomingDaysData} />
        )}
        {initial && <Intra />}

        {error && <Error>{error}</Error>}
        {isLoading && <p className="loading">Loading...</p>}
      </div>
      <img src={favsImg} className="favorites" onClick={toggleFavsHandler} />
    </div>
  );
}

export default App;
