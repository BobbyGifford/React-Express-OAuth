import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Landing extends Component {
  renderContent() {
    return (
      <div>
        <h2>Welcome</h2>
        <Link to="/item/new" >
        <button className="btn green">
          Create a message
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
