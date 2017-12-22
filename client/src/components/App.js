import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Home from "./Home";
import CreateItem from "./itemCreationForm/CreateItem"
import MessagesList from "./MessagesList"
import MessageItem from "./MessageItem";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/landing" component={Landing} />
            <Route path="/item/new" component={CreateItem} />
            <Route path="/messagesList" component={MessagesList} />
            <Route path="/:id/message" component={MessageItem} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
