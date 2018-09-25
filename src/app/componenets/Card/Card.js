import React from 'react';

import styles from './Card.css';

const card = (props) => {
  return (
    <div className={styles.card}>
      <div>images left</div>
      <div>information right</div>
    </div>
  )
}

export default card;
