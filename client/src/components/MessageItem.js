import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class MessageItem extends Component {

  componentWillMount() {
    const messageId = this.props.match.params.id;
    this.props.fetchMessage(messageId);
  }

  renderContent() {
    return (
      <div>
        <h1>{this.props.message.message}</h1>
      </div>
    );
  }

  render() {
    return <div style={{ textAlign: "center" }}> {this.renderContent()}</div>;
  }
}

function mapStateToProps({ message }) {
  return { message };
}

export default connect(mapStateToProps, actions)(MessageItem);
