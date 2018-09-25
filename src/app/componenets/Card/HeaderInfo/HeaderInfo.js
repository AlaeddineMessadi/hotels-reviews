import React from "react";

import classes from './HeaderInfo.css';

const headerInfo = props => {
  return (
    <header className={classes.headerInfo}>
      <div className={classes.titleContainer}>
        <h3>{props.title}</h3>
        <span>{props.city}</span>
      </div>
      <div className={classes.stars}>
        <span>
        ☆
          <i className="fa fa-star checked" />
          <i className="fa fa-star checked" />
          <i className="fa fa-star checked" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </span>
      </div>
    </header>
  );
};

export default headerInfo;
