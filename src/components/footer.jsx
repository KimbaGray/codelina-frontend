import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <ul>
          <li>
            <i className="fab fa-instagram socialMedia"></i>
          </li>
          <li>
            <i className="far fa-envelope socialMedia"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
