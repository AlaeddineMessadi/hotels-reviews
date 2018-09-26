import React, { Component } from "react";

import Button from "../../../UI/Button/Button";
import { timeParserDE } from '../../../../Utils/Utils';
import classes from "./FooterInfo.css";

export default class footerInfo extends Component {
  state = { buttonText: "Show Reviews" }

  fetchAndToggle = () => {
    this.props.fetch();
    const text = this.state.buttonText === "Show Reviews" ? "Hide Reviews" : "Show Reviews";
    this.setState({ buttonText: text })
  }

  render() {
    const { price, start, end, fetch } = this.props;
    return (
      <footer className={ classes.footerInfo }>

        <Button text={ this.state.buttonText } onClick={ () => this.fetchAndToggle() } />

        <div className={ classes.priceContainer }>
          <p className={ classes.price }>{ `${price} \u20ac` }</p>
          { <p className={ classes.date }>{ `${timeParserDE(start)} - ${timeParserDE(end)}` }</p> }
        </div>
      </footer>
    );
  }
};
