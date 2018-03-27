import React, { Component } from 'react';
import './App.css';
import CardSelector from './components/CardSelector';
import SelectedCards from './components/SelectedCards';
import CalculatedBid from './components/CalculatedBid';

class App extends Component {
  render() {
    return (
      <div >
        <div>
          <CardSelector />
        </div>
        <div>
          <SelectedCards />
        </div>
        <button>Calculate Bid</button>
        <div><CalculatedBid /></div>
      </div>
    );
  }
}

export default App;
