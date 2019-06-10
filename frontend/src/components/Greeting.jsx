import React, { Component } from 'react';

import { retrieveSecret } from '../util/secretRetriever';

class Greeting extends Component {
  abortController = new AbortController();

  constructor(...args) {
    super(...args);
    this.setSecret = this.setSecret.bind(this);
  }

  state = {
    secret: "",
    input: ""
  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  setSecret(e) {
    e.preventDefault();
    retrieveSecret(this.state.input, this.abortController.signal)
      .then(data => {
        this.setState({
          secret: data.secret
        });
      })
      .catch(err =>
      {
        if(err.name === "AbortError") {
          return;
        }
        throw err;
      });
  }

  render() {
    return (
      <>
      <div className="text-center">
        <div className="card bg-dark">
          <div className="card-header">
            <strong>Welcome to the Project!</strong>
          </div>
          <div className="card-body">
            <p className="card-text">Click the button to reveal the secret</p>
            <form onSubmit={this.setSecret}>
              <input
                id="userInput"
                type="text"
                value={this.state.input}
                onChange={(e) => this.setState({ input: e.target.value }) }
              />
              <input id="submitBtn" type="submit"/>
            </form>
          </div>
        </div>
        <p id="decryptedResult">{this.state.secret}</p>
      </div>
      </>
    )
  }
}

export default Greeting;
