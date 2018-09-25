import React from 'react';

import Image from './Image/Image';
import InfoBox from './InfoBox/InfoBox';

import styles from './Card.css';

const card = (props) => {
  return (
    <div className={styles.card}>
      <Image image="" alt=""/>
      <InfoBox/>
    </div>
  )
}

export default card;
