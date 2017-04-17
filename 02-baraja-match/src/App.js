import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CardMatch from './CardMatch';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="main-header">
            <h1 className="title"> Baraja - Matching Game </h1>
        </header>
        <CardMatch /> 
      </div>
    );
  }
}

export default App;
