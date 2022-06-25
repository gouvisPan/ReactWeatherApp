import React from "react";
import Modal from "../../UI/Modal.js";
import { useSelector } from "react-redux";
import FavoriteCity from "./FavoriteCity.js";
import classes from "./Favorites.module.css";

const Favorites = (props) => {
  const favs = useSelector((state) => state.favs.cities);

  return (
    <Modal onClose={props.onHideFavs}>
      <div className={classes["favorites-list"]}>
        <ul>
          {favs.map((city) => (
            <FavoriteCity
              name={city}
              key={city}
              citySearch={props.citySearch}
              onClose={props.onHideFavs}
            />
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default Favorites;
