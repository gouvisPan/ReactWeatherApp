import React from "react";
import classes from "./Card.module.css";

export const Card = (props) => {
  let CSS = props.light ? "card-light" : "card";

  if (props.dark) {
    CSS = "card-dark";
  }
  return <div className={classes[CSS]}>{props.children}</div>;
};
