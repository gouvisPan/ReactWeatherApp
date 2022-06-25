import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  function keyChangeHandler(event) {
    props.setL(event.target.value);
  }

  const cssClass = props.initial ? "initial" : "search";

  return (
    <input
      type="text"
      value={props.location}
      onChange={keyChangeHandler}
      onKeyPress={props.searchHandler}
      placeholder="Enter Location"
      className={classes[cssClass]}
    />
  );
};

export default SearchBar;
