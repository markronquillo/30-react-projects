import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './Card';
import data from './card_data';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="main-header">
            <h1 className="title"> Baraja </h1>
            <span className="subtitle">playing cards</span>
        </header>

        <div className="cardsWrap">
          {data.map((card, index) => {
            return <Card key={index} {...card} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
