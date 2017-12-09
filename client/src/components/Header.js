import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google/">Sign Up or Login<i className="material-icons left">verified_user</i></a>
          </li>
        );
      default:
        return [
          <li key="3">
            <Link to="/landing">{this.props.auth.displayName}<i className="material-icons left">person</i></Link>
          </li>,
          <li key="1">
            <Link to="/messagesList">
              View Messages<i className="material-icons left">view_list</i>
            </Link>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout<i className="material-icons left">lock_open</i></a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper green">
          <Link
            style={{ margin: "0 10px" }}
            to={this.props.auth ? "/landing" : "/"}
            className="center brand-logo"
          >
            Login App
          </Link>

          <div className="hide-on-med-and-down">
            <ul className="right">{this.renderContent()}</ul>
          </div>
          <div
            style={{ margin: "0 10px", cursor: "pointer" }}
            className="hide-on-large-only"
          >
            <a className="dropdown-button" data-activates="dropdown1">
              <i className="material-icons">menu</i>
            </a>

            <ul id="dropdown1" className="dropdown-content">
              {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
