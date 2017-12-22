import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from 'react-router-dom';

class MessagesList extends Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  componentDidUpdate() {
    this.props.fetchMessages();
  }

  onViewItem = (index) => {
    console.log(index)
  }

  renderContent() {
    return this.props.messages.reverse().map(message => {
      return (
        <div className="card" key={message._id}>
          <div className="card-content">
            <h5>{message.message}</h5>
            <p>Posted by: {message.displayName}</p>
            <p>
              Date Posted: {new Date(message.datePosted).toLocaleDateString()}
              </p>
              <p>
              <Link to={"/" + message._id + "/message"}>
              <button className="btn green">Inspect</button>
              </Link>
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
      <Link to="/item/new" >
        <button className="btn green hide-on-med-and-down">
          Create a message<i className="right material-icons">add</i>
          </button>
        </Link>

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

function mapStateToProps({ messages, auth }) {
  return { messages, auth };
}

export default connect(mapStateToProps, actions)(MessagesList);
