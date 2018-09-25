import React, { Component } from "react";

import Button from "../../componenets/UI/Button/Button";
import Header from "../../componenets/Header/Header";
import Card from "../../componenets/Card/Card";

import classes from "./App.css";

export default class App extends Component {
  state = { message: "Fist message" };

  loadHotels = () => {
    return [];
  };

  render() {
    return (
      <div className={classes.container}>
        <Header>
          <Button text="Load Hotels" onclick={this.loadHotels} />
        </Header>
        <div className={classes.container}>
          <Card
          image={null}
          title={"Hotel Name"}
          city={"City Country"}
          rating={3} 
          />
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}
