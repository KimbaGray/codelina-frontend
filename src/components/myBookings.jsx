import React, { Component } from 'react';
import Booked from './booked';
import Axios from 'axios';

const api = 'http://brazilianglow.co.uk/api/bookings/retrieve';

class MyBookings extends Component {
	state = {
		bookings: [
			// {
			//   startTime: "2020-01-16 21:09:00Z",
			//   endTime: "2020-01-16 22:09:00Z",
			//   service: "Reiki"
			// },
			// {
			//   startTime: "2020-08-22 10:08:00Z",
			//   endTime: "2020-08-22 12:52:00Z",
			//   service: "Reiki"
			// },
			// {
			//   startTime: "2020-09-22 10:52:00Z",
			//   endTime: "2020-09-22 11:52:00Z",
			//   service: "Reiki"
			// }
		]
	};

	componentDidMount() {
		this.getData(this.props.email);
	}

	getData(email) {
		console.log('My bookings', email, localStorage.getItem('token'));
		Axios.post(api, { email: email, token: localStorage.getItem('token') }).then((result) => {
			console.log(result.data);
			result.error == 1 ? alert('You are a naughty hacker') : this.setState({ bookings: result.data });
		});
	}

	render() {
		return (
			<div>
				<h1>My Bookings</h1>
				<div className="slots">
					{this.state.bookings.map((slot, index) => {
						return (
							<Booked
								key={index}
								// startTime={slot.appointment_start_time}
								// endTime={slot.appointment_end_date}
								service={slot.purchase}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MyBookings;
