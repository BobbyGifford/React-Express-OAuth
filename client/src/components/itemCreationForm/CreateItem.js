import React, { Component } from "react";
import FormComponent from "./formComponent";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { submitMessage } from "../../actions";
import { withRouter } from 'react-router-dom';


class CreateItem extends Component {
  submit = values => {
    submitMessage(values)
    this.props.history.push('/landing')
  };

  renderContent() {
    return (
      <div>
        <h1>Post A Message</h1>
        <FormComponent onSubmit={this.submit}/>
      </div>
    );
  }

  render() {
    return <div style={{ textAlign: "center" }}>{this.renderContent()}</div>;
  }
}

export default connect(null, actions)(CreateItem);
