import React from "react";
import classes from "./ImageSlide.css";


const imageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%"
  };

  return <div className={classes.imageSlide} style={styles} />;
};

export default imageSlide;
