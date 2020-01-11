import React, { Component } from "react";
import Logo from "../images/Logo/Logo.png";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="customNav">
      <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="Logo" />
        </a>
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
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Book your session
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button type="button" className="btn btn-dark">
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Menu;
