import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dummyApp from "./reducers";

import Greeting from './components/Greeting';

let store = createStore(dummyApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

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

let RootContainer = (RootContainerComponent);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
