import React, { Component } from "react";

import ApiService from "../../services/ApiService";
import Carousel from "../Carousel/Carousel";
import InfoBox from "./InfoBox/InfoBox";
import Review from "./Review/Review";

// Styles
import classes from "./Card.css";

/**
 * Card Component
 */
export default class card extends Component {
  state = {
    reviews: [],
    fetched: false,
    toggle: false
  };

  /**
   * Fetch Reviews of a Hotel from the API
   * and update state
   */
  fetchReviews = () => {
    if (!this.state.fetched) {
      ApiService.get(`/reviews`,
        { hotel_id: this.props.hotel.id },
        (status, data) => {
          this.setState({
            reviews: [...this.state.reviews, ...data],
            fetched: true
          });
        }
      );
    }

    // Update state
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const reviewsLength = this.state.reviews.length;
    const toggleReviews = this.state.toggle ? classes.show : classes.hide;

    return (
      <div className={ classes.cardContainer }>
        <div className={ classes.card }>
          <Carousel
            images={ this.props.hotel.images }
            alt={ this.props.hotel.name }
          />
          <InfoBox hotel={ this.props.hotel } fetch={ this.fetchReviews } />
        </div>

        <div className={ `${classes.reviews} ${toggleReviews}` }>
          {/*
             Loop through the reviews and insert in between a break element
             except the first and the last reviews
           */}
          { this.state.reviews.map(
            (review, i) =>
              i < reviewsLength - 1
                ? [
                  <Review
                    key={ i }
                    positive={ review.positive }
                    author={ review.name }
                    comment={ review.comment }
                  />,
                  <div className={ classes.break } />
                ]
                : [
                  <Review
                    key={ i }
                    positive={ review.positive }
                    author={ review.name }
                    comment={ review.comment }
                  />
                ]
          ) }
        </div>
      </div>
    );
  }
}
