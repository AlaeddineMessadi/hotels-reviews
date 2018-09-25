import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  state = { message: 'Fist message' };
  
  render() {
    return (
      <div className={styles.app}>
        <p>{ this.state.message }</p>
      </div>
    )
  }
}