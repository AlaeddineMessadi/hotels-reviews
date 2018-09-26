import React from "react";

import classes from "./HeaderInfo.css";
import Rating from "../../Rating/Rating";
import InfoTitle from "./InfoTitle/InfoTitle";

const headerInfo = ({ name, city, country, stars }) => {
  return (
    <header className={classes.headerInfo}>
      <InfoTitle title={name} city={city} country={country} />
      <Rating value={stars} />
    </header>
  );
};

export default headerInfo;
