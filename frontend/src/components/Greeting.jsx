import React, { Component } from 'react';
import {connect} from 'react-redux';

import {secrets} from "../actions";

class Greeting extends Component {
  state = {
    secret: ""
  }

  retrieveSecret = (e) => {
    e.preventDefault();
    var that = this;
    this.props.getSecret()
    .then(function(x)
    {
    let newSecret = x.secrets[0].title;
    console.log(newSecret)
    that.setState({secret: newSecret})
    });
    // this.setState();
  }

  render() {
    return (
      <>
      <div class="text-center">
        <div class="card bg-dark">
          <div class="card-header">
            <strong>Welcome to the Dummy Project!</strong>
          </div>
          <div class="card-body">
            <p class="card-text">Click the button to reveal the secret</p>
            <form onSubmit={this.retrieveSecret}>
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
    getSecret: () => {
      return dispatch(secrets.fetchSecret());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
