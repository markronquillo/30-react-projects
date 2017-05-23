import React, { Component } from 'react';

import Signin from './auth/Signin';
import Register from './auth/Register';
import Navigation from './common/Navigation';

import '../styles/auth.css';
import '../styles/board.css';
import '../styles/common.css';

export default class App extends Component {
  render() {
    return (
      <div> 
        <Navigation />
      </div>
    );
  }
}
