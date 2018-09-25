import React, { Component } from "react";

import Button from "../../componenets/UI/Button/Button";

import classes from "./App.css";

export default class App extends Component {
  state = { message: "Fist message" };

  loadHotels = () => {
    return [];
  };

  render() {
    return (
      <div className={classes.container}>
        <Button text="Load Hotels" onclick={this.loadHotels} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
