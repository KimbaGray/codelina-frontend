import React, { Component } from "react";
import Heroimage from "../images/Prayer.jpg";
import Reikiken from "../images/Reikiken.jpg";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
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
            <button type="button" className="btn btn-link customButton">
              <h1>
                <Link className="button-link" to="/booking">
                  Book your session
                </Link>
              </h1>
            </button>
          </div>
          <img src={Reikiken} alt="Carolina in sun" />
        </div>

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
              <Link
                style={{ textDecoration: "none" }}
                className="button-link"
                to="/contact"
              >
                Contact Carolina
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
