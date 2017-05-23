import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CobreactGame from './components/CobreactGame';
import StateDisplay from './components/StateDisplay';
import configureStore from './store/configureStore';
import * as action from './actions/index';

import './App.css';

const store = configureStore();
store.dispatch(action.advance());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="game">
            <CobreactGame />
          </div>
          <div className="state-wrap">
            <StateDisplay />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
