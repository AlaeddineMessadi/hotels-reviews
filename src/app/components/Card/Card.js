import React, { Component } from "react";
import { calcStatus, parseRating } from "../../Utils/Utils";
import ApiService from "../../services/ApiService";
import Image from "./Image/Image";
import InfoBox from "./InfoBox/InfoBox";
import Review from "./Review/Review";

import classes from "./Card.css";

export default class card extends Component {
  state = {
    reviews: []
  };

  fetchReviews = () => {
    ApiService.get(
      `/reviews`,
      { hotel_id: this.props.hotel.id },
      (status, data) => {
        console.log(data);

        this.setState({
          reviews: [...this.state.reviews, ...data]
        });
        console.log(this.state.reviews);
      }
    );
  };

  render() {
    const reviewsLength = this.state.reviews.length;
    
    return (
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          <Image
            images={[this.props.hotel.images[0]]}
            alt={this.props.hotel.name}
          />
          <InfoBox
            title={this.props.hotel.name}
            city={this.props.hotel.city}
            rating={parseRating(this.props.hotel.rating)}
            description={this.props.hotel.description}
            fetch={this.fetchReviews}
          />
        </div>
        <div className={classes.reviews}>
          {this.state.reviews.map((review, index) => {
            console.log('index:', index, ' length: ', reviewsLength)
            const result = [];
            result.push(
              <Review
                key={index}
                positive={review.positive}
                author={review.name}
                comment={review.comment}
              />
            );

            (index < reviewsLength-1)
              ? result.push(<div className={classes.break} />)
              : null;

            return result;
          })}
        </div>
      </div>
    );
  }
}
