import React, { useState } from "react";
import { Card } from "../UI/Card";
import classes from "./CurrentStats.module.css";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import { useDispatch } from "react-redux";
import { favsActions } from "../store/favs-slice";
import favImgBlack from "../assets/favorite-black.png";
import favImgYellow from "../assets/favorite-yellow.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CurrentStats = (props) => {
  const data = props.data;
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.cities);

  const [isFav, setIsFav] = useState(
    favs.includes(capitalizeFirstLetter(data.cityName))
  );

  useEffect(() => {
    setIsFav(favs.includes(capitalizeFirstLetter(data.cityName)));
  }, [data]);

  const addToFavsHandler = () => {
    if (!isFav) {
      dispatch(favsActions.addCity(capitalizeFirstLetter(data.cityName)));
    } else {
      dispatch(favsActions.removeCity(capitalizeFirstLetter(data.cityName)));
    }

    setIsFav(!isFav);
  };

  const favImg = isFav ? favImgYellow : favImgBlack;

  return (
    <div className={classes["current-stats-card"]}>
      <Card>
        <div className={classes.info}>
          <div className={classes.left}>
            <div>{capitalizeFirstLetter(data.cityName)}</div>
            <div className={classes.desc}>
              {capitalizeFirstLetter(data.desc)}
            </div>
          </div>
          <div className={classes.right}>
            <img
              src={favImg}
              className={classes.fav}
              onClick={addToFavsHandler}
            />
            {data.temp.toFixed(0)}°C
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CurrentStats;
