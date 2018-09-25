import React from 'react';

import classes from './Review.css';

const review = (props) => {
  return (
    <div className={ classes.review }>
      <div>
        <span className={ `${classes.sign} ${classes.minus}` }></span>
      </div>
      <div>
        <h3>{ props.author }</h3>
        <p>{ props.review }</p>
      </div>
    </div>
  )
}

export default review;
