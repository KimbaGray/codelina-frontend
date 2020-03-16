import React, { Component } from 'react';
import MyBookings from './myBookings';
class Booked extends Component {
	state = {};

	render() {
		return (
			<div className="container">
				<div className="bookingSlot">
					{/* <p>{this.formatTime(this.props.startTime)}</p>
          <p>
            {this.calculateDuration(this.props.startTime, this.props.endTime)}
            {" min"}
          </p> */}
					<p>
						{'Your Reiki session will start at ' +
							this.formatTime(parseInt(this.props.service)) +
							' on ' +
							this.formatDate(parseInt(this.props.service))}
					</p>
				</div>
			</div>
		);
	}

	calculateDuration(start, end) {
		var myStart = new Date(start);
		var myEnd = new Date(end);
		var dif = myEnd.getTime() - myStart.getTime();
		var dif = dif / 1000 / 60;
		return dif;
	}

	formatDate(time) {
		var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		var myDate = new Date(time);
		var niceDate = myDate.getDate() + '-' + months[myDate.getMonth()];

		console.log(niceDate);
		return niceDate;
	}

	formatTime(time) {
		var myTime = new Date(time);
		var niceTime = myTime.toTimeString().substr(0, 5);

		console.log(niceTime);
		return niceTime;
	}
}

export default Booked;
