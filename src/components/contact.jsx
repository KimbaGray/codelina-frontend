import React, { Component } from "react";
import Carolina_contact_collage from "../images/Carolina_contact_collage.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <img
            src={Carolina_contact_collage}
            alt="Carolina contact collage"
            className="heroCollage"
          />
        </div>

        <div className="contactBox">
          <h1>Contact Carolina</h1>
          <p>For general enquiries:</p>
          <p>wcscodelina@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Contact;
