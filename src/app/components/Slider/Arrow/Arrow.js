import React from "react";

import classes from "./Arrow.css";

const arrow = ({ direction, clickFunction, glyph }) => {
  const arrowDirection = direction === "left" ? classes.left : classes.right;
  return (
    <div
      className={`${classes.slideArrow} ${arrowDirection}`}
      onClick={clickFunction}
    >
      {glyph}
    </div>
  );
};

export default arrow;
