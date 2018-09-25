import React from "react";

import classes from './HeaderInfo.css';
import Rating from '../../Rating/Rating';
import InfoTitle from './InfoTitle/InfoTitle';

const headerInfo = ({title,city, rating}) => {
  return (
    <header className={classes.headerInfo}>
    <InfoTitle title={title} city={city}/>
        <Rating value={rating} />
        
    </header>
  );
};

export default headerInfo;
