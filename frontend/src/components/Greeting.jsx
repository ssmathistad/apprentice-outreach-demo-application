import React, { Component } from 'react';
import {connect} from 'react-redux';

import {secrets} from "../actions";

class Greeting extends Component {
  state = {
    secret: ""
  }

  retrieveSecret = (e) => {
    e.preventDefault();
    this.props.getSecret();
    let newSecret = this.props.secrets[0]
    console.log(newSecret)
    this.setState({secret: newSecret})
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
        <p>{this.state.secrets[0].title}</p>
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
