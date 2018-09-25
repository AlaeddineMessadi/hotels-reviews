import React from "react";

import Button from "../../../UI/Button/Button";

import classes from "./FooterInfo.css";

const footerInfo = ({ price, date, reviews }) => {
  return (
    <footer className={classes.footerInfo}>

        <Button text="Show Reviews" onClick={null} />

      <div className={classes.priceContainer}>
        <p className={classes.price}>{`${price} \u20ac`}</p>
        <p className={classes.date}>{date}</p>
      </div>
    </footer>
  );
};

export default footerInfo;
