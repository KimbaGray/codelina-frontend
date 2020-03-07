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
    email: undefined
    // loggedIn: false
  };

  render() {
    return (
      <React.Fragment>
        {" "}
        {/* same as <React.Fragment> </ React.fragment> -> not inserting an extra div - 
     technically it is not an element and no style will be applied
     */}
        <Menu loggedIn={this.state.email !== undefined} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/booking" component={Booking} />
          <Route
            path="/dashboard"
            component={() => (
              <Dashboard
                loggedIn={this.state.email !== undefined}
                onLoggedIn={email => {
                  console.log(email);
                  this.setState({ loggedIn: email });
                }}
                email={this.state.email}
              />
            )}
          />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}
export default App;
