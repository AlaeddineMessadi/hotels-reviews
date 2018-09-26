import React, { Component } from "react";
import Arrow from "./Arrow/Arrow";
import ImageSlide from "./ImageSlide/ImageSlide";

/**
 * dummy pictures for testing
 * The are some issue with the images' urls in the api response
 * uncomment this section and change all "this.props.images" to IMAGE_URLS
 */
import { IMAGE_URLS } from '../../Utils/Constants';

// Styles
import classes from "./Carousel.css";


/**
 * Carousel Component
 */
export default class Carousel extends Component {
  state = {
    currentImageIndex: 0,
  };

  /**
   * Previous Slide functionality 
   */
  previousSlide = () => {
    const index =
      this.state.currentImageIndex === 0
        ? this.props.images.length - 1
        : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  /**
   * Next Slide functionality 
   */
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
