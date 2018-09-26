import React from 'react';

// Styles
import classes from './Review.css';

/**
 * Review Component
 * 
 * @param {positive, author, comment} param0 
 */
const review = ({ positive, author, comment }) => {
  const sign = (positive) ? classes.plus : classes.minus;
  return (
    <div className={ classes.review }>
      <div>
        <span className={ `${classes.sign} ${sign}` }></span>
      </div>
      <div>
        <h3>{ author }</h3>
        <p>{ comment }</p>
      </div>
    </div>
  )
}

export default review;
