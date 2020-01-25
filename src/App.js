import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu";
import Footer from "./components/footer";
import SignIn from "./components/signin";
import BookingSlots from "./components/bookingSlots";
import { Switch, Route, Link } from "react-router-dom";
import Booking from "./components/booking";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Home from "./components/home";

class App extends Component {
  state = {
    loggedIn: true
  };

  render() {
    return (
      <div>
        <Menu loggedIn={this.state.loggedIn} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/booking" component={Booking} />
          <Route
            path="/dashboard"
            component={() => <Dashboard loggedIn={this.state.loggedIn} />}
          />
        </Switch>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
