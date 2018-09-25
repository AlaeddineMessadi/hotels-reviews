import React from "react";

import styles from "./Image.css";

/**
 * Image component for Card
 * @param {image, alt} props 
 */

const image = props => {
  return (
    <div className={styles.image}>
      {props.image ? (
        <img src={props.image} alt={props.alt ? props.alt : "Hotel image"} />
      ) : 'null'}
    </div>
  );
};

export default image;
