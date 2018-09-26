import React from 'react'

import Star from '../../UI/Icons/Star/Star';

// Styles
import classes from './Rating.css';

/**
 * Rating Component
 * 
 * @param {value} param0 
 */
const rating = ({ value }) => {
  let result = [];
  for (let i = 0; i < 5; i++) {
    result.push(<Star key={ i } checked={ i < value } />)
  }

  return (
    <div className={ classes.stars }>
      { result }
    </div>
  )
}

export default rating;
