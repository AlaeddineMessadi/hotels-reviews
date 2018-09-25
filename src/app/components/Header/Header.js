import React from "react";

import classes from "./Header.css";

/**
 * Header Component
 * @param {*} props
 */
const header = props => (
  <header className={classes.header}>{props.children}</header>
);

export default header;
