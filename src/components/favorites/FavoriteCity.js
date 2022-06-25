import React from "react";
import classes from "./FavoriteCity.module.css";
import removeImg from "../../assets/remove_icon2.png";
import capitalizeFirstLetter from "../../helpers/capitalizeFirstLetter";
import { useSelector, useDispatch } from "react-redux";
import { favsActions } from "../../store/favs-slice";

const FavoriteCity = (props) => {
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs.cities);
  const cityName = props.name;
  const removeHandler = () => {
    dispatch(favsActions.removeCity(capitalizeFirstLetter(props.name)));
  };

  const citySearchHandler = () => {
    props.citySearch(cityName);
    props.onClose();
  };

  return (
    <div className={classes["favorite-item"]}>
      <li onClick={citySearchHandler}>{cityName}</li>
      <img src={removeImg} className={classes.remove} onClick={removeHandler} />
    </div>
  );
};

export default FavoriteCity;
