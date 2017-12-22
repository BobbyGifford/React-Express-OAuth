import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import axios from 'axios';

class MessageItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "loading...",
      button: <p></p>
    }
  }

  async componentDidMount() {
    const messageId = this.props.match.params.id;
    var messageData = await axios.get('/api/message/' + messageId);
    var googleId = messageData.data.googleId;
    console.log(messageData);

    this.setState({ message: messageData.data.message });
    if(this.props.auth.googleId === googleId ) {
    this.setState({ button: <button className="btn red">Delete</button> })
    } else {
      this.setState({ button: <p>Created by: {this.props.auth.displayName}</p> })
    }
  }

  renderContent() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {this.state.button}
      </div>
    );
  }

  render() {
    return <div style={{ textAlign: "center" }}> {this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(MessageItem);
