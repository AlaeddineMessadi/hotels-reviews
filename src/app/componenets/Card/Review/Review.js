import React from 'react'

import classes from './Review.css';

const review = (props) => {
  return (
    <div className={classes.review}>
    <span>{props.satus}</span>
      <h3>{props.author}</h3>
      <p>{props.author}</p>
    </div>
  )
}

export default review
