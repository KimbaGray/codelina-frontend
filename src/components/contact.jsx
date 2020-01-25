import React, { Component } from "react";
import ContactPhoto1 from "../images/Carolina.jpg";
import ContactPhoto2 from "../images/candles1.png";
import ContactPhoto3 from "../images/Heroimage.jpg";

class Contact extends Component {
  state = {};
  render() {
    return(
    <div>
     <div className="contactImages">
      <img src={ContactPhoto1}/>
      <img className="desktopOnly" src={ContactPhoto2}/>
      <img className="desktopOnly" src={ContactPhoto3}/>
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
