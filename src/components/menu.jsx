import React, { Component } from "react";
import Logo from "../images/Logo/Logo.png";

class Menu extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Book your session
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <button type="button" class="btn btn-dark">
                  Login
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
