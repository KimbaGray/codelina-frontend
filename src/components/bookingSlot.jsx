import React, { Component } from 'react';

class BookingSlot extends Component {
	state = {};

	render() {
		return (
			<div className={this.getCSS(this.props.startTime)}>
				Start time{' '}
				{this.formatTime(this.props.startTime) +
					' Duration is ' +
					this.calculateDuration(this.props.startTime, this.props.endTime) +
					' '}
				minutes
				<button onClick="http://www.paypal.com" className="bookBtn">
					Book now
				</button>
			</div>
		);
	}

	getCSS(start) {
		var now = new Date();
		var startDate = new Date(start);
		if (this.calculateDuration(now.getTime(), startDate.getTime()) < 1440) {
			return 'bookingSlotDanger';
		}

		return 'bookingSlot';
	}

	calculateDuration(start, end) {
		var myStart = new Date(start);
		var myEnd = new Date(end);
		var dif = myEnd.getTime() - myStart.getTime();
		var dif = dif / 1000 / 60;
		return dif;
	}

	formatTime(time) {
		var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		var myTime = new Date(time);
		var niceTime =
			myTime.getHours() +
			':' +
			myTime.getMinutes() +
			', ' +
			myTime.getDate() +
			'-' +
			months[myTime.getMonth()] +
			'-' +
			myTime.getFullYear();
		console.log(niceTime);
		return niceTime;
	}
}

export default BookingSlot;
