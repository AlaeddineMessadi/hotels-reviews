import React from 'react';

import Image from './Image/Image';
import InfoBox from './InfoBox/InfoBox';
import Review from './Review/Review';

import classes from './Card.css';

const card = (props) => {
  return (
    <div className={ classes.card }>
      <Image image="" alt="" />
      <InfoBox title={ props.title } city={ props.city } rating={ props.rating } />
      {/* <break></break> */ }
      <div className={ classes.reviews }>
        <Review status="Negative" author="Alex" review="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s." />
        <div className={ classes.break } />
        <Review status={ props.status } author={ props.author } review={ props.review } />
      </div>
    </div>
  )
}


export default card;
