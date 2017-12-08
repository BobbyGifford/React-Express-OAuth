import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMessages } from "../../actions";
import { Link } from 'react-router-dom';

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
            <h5>{message.message}</h5>
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
      <div>
    <div style={{ textAlign: "center" }}>
      <h4>This is a list of all the messages left by other visitors</h4>
    {this.renderContent()}
    </div>
    <div className="fixed-action-btn">
    <Link to="/item/new" className="btn-floating btn-large green">
      <i className="large material-icons">mode_edit</i>
    </Link>
  </div>
    </div>
  )
  }
}

function mapStateToProps({ messages }) {
  return { messages };
}

export default connect(mapStateToProps, { fetchMessages })(MessagesList);
