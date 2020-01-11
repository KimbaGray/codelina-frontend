import React, { Component } from "react";
import "./App.css";
import Heroimage from "./images/Heroimage.jpg";
import Carolina from "./images/Carolina.jpg";
import Menu from "./components/menu";
import Footer from "./components/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <Menu />
        </nav>
        <div className="aboutCarolina">
          <img src={Heroimage} alt="Carolina doing yoga" />
          <h1>About Carolina</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            tincidunt efficitur. Cras pharetra blandit dignissim. Nulla dui sem,
            finibus eget nunc id, fringilla aliquam ante. Suspendisse semper
            pharetra ipsum, vitae porta turpis ornare a.
          </p>
          <button type="button" className="btn btn-link">
            Contact Carolina
          </button>
        </div>
        <div className="aboutReiki">
          <img src={Carolina} alt="Carolina in sun" />
          <h1>About Reiki</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            tincidunt efficitur. Cras pharetra blandit dignissim. Nulla dui sem,
            finibus eget nunc id, fringilla aliquam ante. Suspendisse semper
            pharetra ipsum, vitae porta turpis ornare a. Fusce non convallis
            tellus, quis mattis quam. Phasellus sagittis elit vel urna
            pellentesque vehicula.
          </p>
        </div>
        <div className="bookASession">
          <h1>Book your Reiki session</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            tincidunt efficitur.
          </p>
          <button type="button" className="btn btn-link">
            Book your session here
          </button>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
