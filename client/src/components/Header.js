import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false: 
        return <li><a href="/auth/google/">Login with Google</a></li>
      default:
        return [
          <li key="3" style={{ margin: '0 10px'}}>Hello: {this.props.auth.displayName}</li>,
          <li key="1"><Link to="/messagesList"><i className="material-icons">apps</i></Link></li>,
          <li key="2"><a href="/api/logout">Logout</a></li>,
      ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper green">
         <Link style={{ margin: '0 10px'}} to={this.props.auth ? '/landing' : '/'} className="center brand-logo">
         Login App
         </Link>
         <ul className=" hide-on-med-and-down right">
         {this.renderContent()}
         </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
