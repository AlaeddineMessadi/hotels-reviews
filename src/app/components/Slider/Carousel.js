import React, { Component } from "react";
import Arrow from "./Arrow/Arrow";
import ImageSlide from "./ImageSlide/ImageSlide";

import classes from "./Carousel.css";

/**
 * dummy pictures for testing
 * The are some issue with the images' urls in the api response
 * uncomment this section and the first line in the render method 
 */
const Urlimages = [
  "https://loremflickr.com/640/480/germany",
  "https://loremflickr.com/640/480/brazil",
  "https://loremflickr.com/640/480/usa",
  "https://loremflickr.com/640/480/india",
  "https://loremflickr.com/640/480/japan",
];

/**
 * Carousel Component
 */
export default class Carousel extends Component {
  state = {
    currentImageIndex: 0
  };

  previousSlide = () => {
    const index =
      this.state.currentImageIndex === 0
        ? Urlimages.length - 1
        : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  nextSlide = () => {
    const lastIndex = Urlimages.length - 1;
    const index =
      this.state.currentImageIndex === Urlimages.length - 1
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
        <ImageSlide url={ Urlimages[this.state.currentImageIndex] } />
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
