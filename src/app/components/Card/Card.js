import React, { Component } from "react";
import { calcStatus, parseRating } from "../../Utils/Utils";
import ApiService from "../../services/ApiService";
import Carousel from "../Slider/Carousel";
import InfoBox from "./InfoBox/InfoBox";
import Review from "./Review/Review";

import classes from "./Card.css";

export default class card extends Component {
  state = {
    reviews: [],
    fetched: false,
    toggle: false
  };

  fetchReviews = () => {
    if (!this.state.fetched) {
      ApiService.get(
        `/reviews`,
        { hotel_id: this.props.hotel.id },
        (status, data) => {
          this.setState({
            reviews: [...this.state.reviews, ...data],
            fetched: true
          });
        }
      );
    }

    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const reviewsLength = this.state.reviews.length;
    const toggleReviews = this.state.toggle ? classes.show : classes.hide;

    return (
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <Carousel
            images={this.props.hotel.images}
            alt={this.props.hotel.name}
          />
          <InfoBox hotel={this.props.hotel} fetch={this.fetchReviews} />
        </div>

        <div className={`${classes.reviews} ${toggleReviews}`}>
          {this.state.reviews.map(
            (review, i) =>
              i < reviewsLength - 1
                ? [
                    <Review
                      key={i}
                      positive={review.positive}
                      author={review.name}
                      comment={review.comment}
                    />,
                    <div className={classes.break} />
                  ]
                : [
                    <Review
                      key={i}
                      positive={review.positive}
                      author={review.name}
                      comment={review.comment}
                    />
                  ]
          )}
        </div>
      </div>
    );
  }
}
