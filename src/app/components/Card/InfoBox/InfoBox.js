import React from "react";

import HeaderInfo from "./HeaderInfo/HeaderInfo";
import FooterInfo from "./FooterInfo/FooterInfo";
import classes from "./InfoBox.css";

const InfoBox = ({ hotel, fetch }) => {
  return (
    <div className={classes.infoBox}>
      <HeaderInfo
        name={hotel.name}
        city={hotel.city}
        country={hotel.country}
        stars={hotel.stars}
      />
      <p className={classes.description}>{hotel.description}</p>
      <FooterInfo
        fetch={fetch}
        price={hotel.price}
        start={hotel.date_start}
        end={hotel.date_end}
      />
    </div>
  );
};

export default InfoBox;
