import React from "react";

import Rating from "../../Rating/Rating";
import InfoTitle from "./InfoTitle/InfoTitle";

// Styles
import classes from "./HeaderInfo.css";

/**
 * Header Info component for the Info Box 
 * 
 * @param {name, city, country, stars} param0 
 */
const headerInfo = ({ name, city, country, stars }) => {
  return (
    <header className={ classes.headerInfo }>
      <InfoTitle title={ name } city={ city } country={ country } />
      <Rating value={ stars } />
    </header>
  );
};

export default headerInfo;
