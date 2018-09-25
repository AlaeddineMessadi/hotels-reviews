import React from "react";

import styles from "./Button.css";

const button = props => {
  return (
    <button className={ styles.button } onClick={ () => props.onClick() }>
      { props.text }
    </button>
  );
};

export default button;
