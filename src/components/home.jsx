import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carolina_collage from "../images/Carolina_collage.png";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <img
            src={Carolina_collage}
            alt="Carolina collage"
            className="heroCollage"
          />
        </div>
        <div className="aboutReiki">
          <div className="copy">
            <h1>REIKI WITH CAROLINA</h1>
            <p>--</p>
            <p>
              Carolina is Brazilian both inside and out. Since living in London,
              she has attempted to bring the vibrance of South America across
              the Atlantic. She trained under guru Punnu Wasu as part of her
              spiritual journey in Bali. She believes in the simplistic power of
              energy that is manifested in the life force of every living thing,
              and that reiki is an effective method for tapping into those
              energy flows to bring about natural healing, stress relief, and
              intense relaxation.
            </p>
            <p>
              Carolina is an outgoing and fun-loving personality with a real
              gift for fostering communication and understanding wherever she is
              in the world. Carolina also practices yoga in her spare time and
              has gone so far as to become qualified in yoga instruction.
              Carolina offers in-house reiki sessions to like-minded clientele
              in the London area. These sessions are by appointment only, and
              they encourage a heightened state of relaxation and spiritual
              wellness. She hopes that by offering these services, she will help
              to introduce more people to a more mindful way of living.
            </p>
            <br />
            <div>
              <Link className="callToAction" to="/booking">
                BOOK YOUR SESSION
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
