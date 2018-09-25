import React from 'react'

import Star from '../../UI/Icons/Star/Star';

import classes from './Rating.css';

const rating = ({value}) => {
    let result = [];
    for (let i=0;i<5; i++) {
        result.push(<Star key={i} checked={i<value}/>)
    }

  return (
    <div className={classes.stars}>
      {result}
    </div>
  )
}

export default rating;
