import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Landing extends Component {
  renderContent() {
    return (
      <div>
        <h1>Signed in</h1>
        <h3>Please create an item</h3>
        <Link to="/item/new" className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </Link>

      </div>
    );
  }

  render() {
    return <div style={{ textAlign: "center" }}>{this.renderContent()}</div>;
  }
}

export default Landing;
