import React from "react";

import classes from "./InfoTitle.css";

const infoTitle = ({ title, city }) => {
  return (
    <div className={classes.titleContainer}>
      <h3>{title}</h3>
      <span>{city}</span>
    </div>
  );
};

export default infoTitle;
