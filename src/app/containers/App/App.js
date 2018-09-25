import React, { Component } from "react";
import ApiService from '../../services/ApiService';

import Button from "../../components/UI/Button/Button";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import classes from "./App.css";

export default class App extends Component {
  state = { hotels: [] };

  loadHotels = () => {
    const result = [];

    ApiService.get(`/hotels`, { count: 2 }, (status, data) => {
      this.setState({
        hotels:
          [
            ...this.state.hotels,
            ...data
          ]
      });
      console.log(this.state.hotels)
    })

  };

  render() {
    return (
      <div className={ classes.container }>
        <Header>
          <Button text="Load Hotels" onClick={ this.loadHotels } />
        </Header>
        <div className={ classes.container }>
          {
            this.state.hotels.map((hotel, index) => (
              <Card key={ hotel.id } hotel={ hotel }
              />
            ))
          }

        </div>
      </div>
    );
  }
}
