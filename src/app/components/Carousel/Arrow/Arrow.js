import React from "react";

import classes from "./Arrow.css";

/**
 * Arrow Component
 * 
 * @param {direction, clickFunction, glyph} param0 ;
 */
const arrow = ({ direction, clickFunction, glyph }) => {
  const arrowDirection = direction === "left" ? classes.left : classes.right;
  return (
    <div
      className={ `${classes.slideArrow} ${arrowDirection}` }
      onClick={ clickFunction }
    >
      { glyph }
    </div>
  );
};

export default arrow;
