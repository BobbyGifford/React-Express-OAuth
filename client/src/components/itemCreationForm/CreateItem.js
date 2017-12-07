import React, { Component } from "react";

class CreateItem extends Component {
  renderContent() {
    return (
      <div>
        <h1>Create Item</h1>
      </div>
    );
  }

  render() {
    return <div style={{ textAlign: "center" }}>{this.renderContent()}</div>;
  }
}

export default CreateItem;
