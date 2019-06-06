import React, { Component } from 'react';

import { retrieveSecret } from '../util/secretRetriever';

class Greeting extends Component {
  state = {
    secret: "",
    input: ""
  }

  setSecret = (e) => {
    e.preventDefault();
    console.log("state_input: " + this.state.input);
    let r = retrieveSecret(this.state.input);
    console.log(r);

    r.then(data => {
        console.log("state_secret: " + data.secret);
        this.setState({
          secret: data.secret
        })
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
