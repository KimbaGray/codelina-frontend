import React, { Component } from "react";
import Menu from "./menu";
import Axios from "axios";

const api = "http://brazilianglow.co.uk/api/users/login";

class SignIn extends Component {
  state = {
    emailVar: "",
    passwordVar: "",
    loggedIn: true
  };

  postData() {
    Axios.post(api, {
      email: this.state.emailVar,
      password: this.state.passwordVar
    }).then(result => {
      console.log(result);
    });
  }

  onEmailChange = event => {
    this.setState({
      emailVar: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      passwordVar: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <h1>Log in</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={this.state.emailVar}
              onChange={this.onEmailChange}
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
              value={this.state.passwordVar}
              onChange={this.onPasswordChange}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="btn customButton"
            onClick={this.postData()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
