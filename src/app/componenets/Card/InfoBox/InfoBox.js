import React from 'react';

import HeaderInfo from './HeaderInfo/HeaderInfo';
import FooterInfo from './FooterInfo/FooterInfo';
import classes from "./InfoBox.css";

const InfoBox = props => {
  return (
    <div className={classes.infoBox}>
      <HeaderInfo title={props.title} city={props.city} rating={props.rating} />
      <p className={classes.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <FooterInfo price={200} date={new Date().toLocaleString('de-DE', { timeZone: 'GMT' })} />
    </div>
  );
};

export default InfoBox;
