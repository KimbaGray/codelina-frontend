import React, { Component } from "react";
import Logo from "../images/Logo/BGLOGOmaster2.png";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="customNav">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" className="Logo" />
        </Link>
        <nav className="navbar navbar-expand-lg navbar-light bg-white ourNav">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">
                  Book your session
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <button type="button" className="btn btn-dark">
                    {this.props.loggedIn ? "Account" : "Sign in"}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
