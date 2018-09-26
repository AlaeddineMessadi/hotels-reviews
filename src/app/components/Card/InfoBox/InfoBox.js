import React from "react";

import HeaderInfo from "./HeaderInfo/HeaderInfo";
import FooterInfo from "./FooterInfo/FooterInfo";
import classes from "./InfoBox.css";

const InfoBox = props => {
  return (
    <div className={classes.infoBox}>
      <HeaderInfo title={props.title} city={props.city} rating={props.rating} />
      <p className={classes.description}>{props.description}</p>
      <FooterInfo
        fetch={props.fetch}
        price={200}
        date={new Date().toLocaleString("de-DE", { timeZone: "GMT" })}
      />
    </div>
  );
};

export default InfoBox;
