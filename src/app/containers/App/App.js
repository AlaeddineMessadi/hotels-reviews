import React, { Component } from "react";
import ApiService from '../../services/ApiService';

import Button from "../../components/UI/Button/Button";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import classes from "./App.css";

export default class App extends Component {
  state = { hotels: [], error: false };

  loadHotels = () => {
    ApiService.get(`/hotels`, { count: 5 }, (status, data) => {
      this.setState({
        hotels:
          [
            ...this.state.hotels,
            ...data
          ],
        error: false
      });
    }).catch((error) => {
      this.setState({ error: true })
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
            !this.state.error ?
              this.state.hotels.map((hotel, index) => (
                <Card key={ hotel.id } hotel={ hotel } />
              )) : <div className={ classes.error }><p>An error occurred</p></div>
          }

        </div>
      </div>
    );
  }
}
