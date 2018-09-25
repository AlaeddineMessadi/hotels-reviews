import React from 'react';

import Button from '../../UI/Button/Button';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import classes from './InfoBox.css';

const InfoBox = props => {
  return (
    <div className={classes.infoBox}>
      <HeaderInfo title="Hotel Title" city="City - country"/>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <footer>
        <Button text="Show Reviews" onClick={null} />
      </footer>
    </div>
  );
};

export default InfoBox;
