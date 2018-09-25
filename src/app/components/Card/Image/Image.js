import React, { Component } from "react";
import Swiper from 'swiper';
// import LazyLoad from '../../LazyLoad'
import styles from "./Image.css";

/**
 * Image component for Card
 * @param {image, alt} props 
 */

export default class Image extends Component {
  componentDidMount() {
    const swiper = new Swiper(this.refs.swiperContainer, {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
  render() {
    return (
      <div ref="swiperContainer" className={ styles.image } >
        {
          this.props.images.map((img, index) => {
            return <img key={ index }
              className="swiper-slide"
              src={ this.props.image }
              alt={ `${this.props.alt} - Image ${index}` } />
          })
        }
        <div className="swiper-pagination"></div>
      </div>
    );
  }
};

// src = { encodeURI(`https://placehold.it/640x480?text=${props.alt}`) }

// export default image;
