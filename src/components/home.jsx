import React, { Component } from "react";
import Heroimage from "../images/Heroimage.jpg";
import Reikiken from "../images/Reikiken.jpg";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="aboutCarolina">
          <img src={Heroimage} alt="Carolina doing yoga" />
          <div className="copy">
            <h1>About Carolina</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus tincidunt efficitur. Cras pharetra blandit dignissim.
              Nulla dui sem, finibus eget nunc id, fringilla aliquam ante.
              Suspendisse semper pharetra ipsum, vitae porta turpis ornare a.
            </p>
            <button type="button" className="btn btn-link customButton">
              Contact Carolina
            </button>
          </div>
        </div>

        <div className="aboutReiki">
          <div className="copy">
            <h1>About Reiki</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus tincidunt efficitur. Cras pharetra blandit dignissim.
              Nulla dui sem, finibus eget nunc id, fringilla aliquam ante.
              Suspendisse semper pharetra ipsum, vitae porta turpis ornare a.
              Fusce non convallis tellus, quis mattis quam. Phasellus sagittis
              elit vel urna pellentesque vehicula.
            </p>
          </div>
          <img src={Reikiken} alt="Carolina in sun" />
        </div>

        <div className="bookASession">
          <button type="button" className="btn btn-link customButton">
            <h1>Book your session</h1>
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
