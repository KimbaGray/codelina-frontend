import React, { Component } from "react";
import MyBookings from "./myBookings";
import SignIn from "./signin";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.loggedIn ? (
            <MyBookings />
          ) : (
            <SignIn onLoggedIn={this.props.onLoggedIn} />
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
