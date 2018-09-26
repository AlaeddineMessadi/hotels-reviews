import React from "react";

import classes from "./InfoTitle.css";

const infoTitle = ({ title, city, country }) => {
  return (
    <div className={ classes.titleContainer }>
      <h3>{ title }</h3>
      <span>{ `${city} - ${country}` }</span>
    </div>
  );
};

export default infoTitle;
