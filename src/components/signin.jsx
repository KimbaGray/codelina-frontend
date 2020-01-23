import React, { Component } from "react";
import Menu from "./menu";

class SignIn extends Component {
  state = {};
  render() {
    return (
      <div>
        <form>
          <h1>Log in</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" class="btn customButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
