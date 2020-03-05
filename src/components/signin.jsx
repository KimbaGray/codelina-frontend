import React, { Component } from 'react';
import Menu from './menu';
import Axios from 'axios';

const api = 'https://brazilianglow.co.uk/api/users/login';

class SignIn extends Component {
	state = {
		emailVar: '',
		passwordVar: ''
	};

	postData = (e) => {
		//e.preventDefault();
		console.log(this.state.emailVar, this.state.passwordVar);
		Axios.post(api, {
			email: this.state.emailVar,
			password: this.state.passwordVar
		}).then((result) => {
			console.log(result);
			if (result.data > 0) {
				this.props.onLoggedIn();
				console.log('You have a token');
			} else {
				console.log('You have entered the wrong credentials');
			}
		});
	};

	onEmailChange = (event) => {
		this.setState({
			emailVar: event.target.value
		});
	};

	onPasswordChange = (event) => {
		this.setState({
			passwordVar: event.target.value
		});
	};

	render() {
		return (
			<div>
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
				<button type="submit" class="btn customButton" onClick={this.postData}>
					Submit
				</button>
			</div>
		);
	}
}

export default SignIn;
