import React from 'react';

import Image from './Image/Image';
import InfoBox from './InfoBox/InfoBox';
import Review from './Review/Review';

import styles from './Card.css';

const card = (props) => {
  return (
    <div className={styles.card}>
      <Image image="" alt=""/>
      <InfoBox title={props.title} city={props.city} rating={props.rating}/>
      <Review status={props.status} author={props.author} review={props.review} />
    </div>
  )
}

export default card;
