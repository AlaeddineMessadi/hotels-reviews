import React, { Component } from "react";
import Arrow from "./Arrow/Arrow";
import ImageSlide from "./ImageSlide/ImageSlide";

/**
 * dummy pictures for testing
 * The are some issue with the images' urls in the api response
 * uncomment this section and the first line in the render method 
 */
import { IMAGE_URLS } from '../../Utils/Constants';

import classes from "./Carousel.css";


/**
 * Carousel Component
 */
export default class Carousel extends Component {
  state = {
    currentImageIndex: 0,
  };

  previousSlide = () => {
    const index =
      this.state.currentImageIndex === 0
        ? this.props.images.length - 1
        : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const index =
      this.state.currentImageIndex === this.props.images.length - 1
        ? 0
        : this.state.currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  render() {
    //   const Urlimages = this.props.images;
    return (
      <div className={ classes.carousel }>
        <ImageSlide url={ this.props.images[this.state.currentImageIndex] } />
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;"
        />
        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;"
        />
      </div>
    );
  }
}
