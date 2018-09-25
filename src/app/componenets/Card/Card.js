import React from 'react';

import Image from './Image/Image';
import InfoBox from './InfoBox/InfoBox';

import styles from './Card.css';

const card = (props) => {
  return (
    <div className={styles.card}>
      <Image image="" alt=""/>
      <InfoBox title={props.title} city={props.city} rating={props.rating}/>
    </div>
  )
}

export default card;
