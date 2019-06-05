import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import Greeting from './components/Greeting';


export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Greeting />
        </header>
      </div>
    );
  }
}
