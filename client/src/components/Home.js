import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Home extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div style={{ textAlign: 'center' }}>
          <h1>Please Sign In or Register</h1>
          <a href="/auth/google/"><button className="btn green">Sign Up or Login<i className="material-icons left">verified_user</i></button></a>
        </div>
        );
      default:
        return (
          <div style={{ textAlign: 'center' }}>
          <h1>Welcome:</h1>
          <h2>{this.props.auth.displayName}</h2>
          <Link to="/item/new" >
        <button className="btn green">
          Create a message
          </button>
        </Link>

        </div>

        )
    }
  }


  render() {
    return (<div>{this.renderContent()}</div>
    )
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Home);