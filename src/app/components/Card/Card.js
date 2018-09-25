import React from 'react';
import { calcStatus, parseRating } from '../../Utils/Utils';

import Image from './Image/Image';
import InfoBox from './InfoBox/InfoBox';
import Review from './Review/Review';

import classes from './Card.css';

const card = ({ hotel }) => {
  return (
    <div className={ classes.card }>
      <Image images={ hotel.images } alt={ hotel.name } />
      <InfoBox title={ hotel.name } city={ hotel.city } rating={ parseRating(hotel.rating) } />
    </div>
  )
}

//  <div className={ classes.reviews }>
//         <Review status={ calcStatus(hotel.rating)} author="Alex" review="Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s." />
//         {/* <div className={ classes.break } /> */}
//       </div>

export default card;
