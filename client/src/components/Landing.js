import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Landing extends Component {
  renderContent() {
    return (
      <div>
        <h1>Signed in</h1>
        <h3>Please create an item</h3>
        <Link to="/item/new" >
        <button className="btn green">
          Create a message<i className="right material-icons">add</i>
          </button>
        </Link>
      </div>
    );
  }

  render() {
    return <div style={{ textAlign: "center" }}>{this.renderContent()}</div>;
  }
}

export default Landing;
