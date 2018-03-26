import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UnusedCards from './components/UnusedCards';
import SelectedCards from './components/SelectedCards';
import CalculatedBid from './components/CalculatedBid';

class App extends Component {
  render() {
    return (
      <div >
        <div><UnusedCards /></div>
        <div><SelectedCards /></div>
        <div><CalculatedBid /></div>
      </div>
    );
  }
}

export default App;
