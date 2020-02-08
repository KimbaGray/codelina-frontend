import React, { Component } from "react";
import Heroimage from "../images/Prayer.jpg";
import Reikiken from "../images/Reikiken.jpg";
import { Link } from "react-router-dom";
import ContactPhoto1 from "../images/Carolina.jpg";
import ContactPhoto2 from "../images/candles1.png";
import ContactPhoto3 from "../images/Heroimage.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="contactImages">
          <img src={ContactPhoto1} />
          <img className="desktopOnly" src={ContactPhoto2} />
          <img className="desktopOnly" src={ContactPhoto3} />
        </div>
        <div className="aboutReiki">
          <div className="copy">
            <h1>Reiki with Carolina</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus tincidunt efficitur. Cras pharetra blandit dignissim.
              Nulla dui sem, finibus eget nunc id, fringilla aliquam ante.
              Suspendisse semper pharetra ipsum, vitae porta turpis ornare a.
              Fusce non convallis tellus, quis mattis quam. Phasellus sagittis
              elit vel urna pellentesque vehicula.
            </p>
            <button type="button" className="btn btn-link customButton">
              <h1>
                <Link className="button-link" to="/booking">
                  Book your session
                </Link>
              </h1>
            </button>
          </div>
          <img src={Heroimage} alt="Carolina doing yoga" />
        </div>
      </div>
    );
  }
}

export default Home;
