import React, { Component } from 'react';
import {connect} from 'react-redux';

import {secrets} from "../actions";

class Greeting extends Component {
  state = {
    secret: "",
    secretText: ""
  }

  retrieveSecret = (e) => {
    e.preventDefault();
    var that = this;
    this.props.getSecret(this.state.secretText)
    .then(function(x)
    {
    let newSecret = x.secrets[0].title;
    console.log(newSecret)
    that.setState({secret: newSecret })
    });
  }

  render() {
    return (
      <>
      <div class="text-center">
        <div class="card bg-dark">
          <div class="card-header">
            <strong>Hey there Project!</strong>
          </div>
          <div class="card-body">
            <p class="card-text">Click the button to reveal the secret</p>
            <form onSubmit={this.retrieveSecret}>
              <input 
                type="text" 
                value={this.state.secretText} 
                onChange={(e) => this.setState({ secretText: e.target.value }) } 
              />
              <input type="submit"/>
            </form>
          </div>
        </div>
        <p>{this.state.secret}</p>
      </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    secrets: state.secrets,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSecret: (secretText) => {
      return dispatch(secrets.fetchSecret(secretText));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
