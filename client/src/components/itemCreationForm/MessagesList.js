import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../../actions";

class MessagesList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  componentDidUpdate() {
    this.props.fetchMessages();
  }

  renderContent() {
    return this.props.messages.reverse().map(message => {
      return (
        <div className="card" key={message._id}>
          <div className="card-content">
            <p>Message: {message.message}</p>
            <p>User: {message.displayName}</p>
            <p>
              Date Posted: {new Date(message.datePosted).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
    <div style={{ textAlign: "center" }}>
      <h4>This is a list of all the messages left by other visitors</h4>
    {this.renderContent()}
    </div>
  )
  }
}

function mapStateToProps({ messages }) {
  return { messages };
}

export default connect(mapStateToProps, { fetchMessages })(MessagesList);
