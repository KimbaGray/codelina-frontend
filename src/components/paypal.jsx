import React, { Component } from 'react';

class PayPal extends Component {
	state = {};

	calculateDuration(start, end) {
		var myStart = new Date(start);
		var myEnd = new Date(end);
		var dif = myEnd.getTime() - myStart.getTime();
		var dif = dif / 1000 / 60;
		return dif;
	}

	getPrice(dif) {
		console.log(dif);
		if (dif === 90) {
			return '15';
		} else if (dif === 60) {
			return '10';
		} else {
			return Math.round(dif * 0.2);
		}
	}

	timeStampToBritishDateTime(time) {
		var myTime = new Date(time);
		var amPm = myTime.getHours() < 12 ? 'AM' : '';
		return myTime.toTimeString().substr(0, 5) + amPm + ' ' + this.timeStampToBritishDate(time);
	}

	timeStampToBritishDate(time) {
		var months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
		var myDate = new Date(time);
		var niceDate = myDate.getDate() + '-' + months[myDate.getMonth()] + '-' + myDate.getFullYear();
		return niceDate;
	}

	render() {
		return (
			<div>
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
					<input type="hidden" name="business" value="GS48FF76YNLR4" />
					<input type="hidden" name="cmd" value="_xclick" />
					<input
						type="hidden"
						name="item_name"
						value={`Reiki session deposit, ${this.calculateDuration(
							this.props.startTime,
							this.props.endTime
						)} minutes, Start time: ${this.timeStampToBritishDateTime(this.props.startTime)} `}
					/>
					<input
						type="hidden"
						name="amount"
						id="amount"
						value={`${this.getPrice(this.calculateDuration(this.props.startTime, this.props.endTime))}`}
					/>
					<input type="hidden" name="currency_code" id="currency_code" value="GBP" />
					<input
						type="hidden"
						name="custom"
						id="custom"
						value={this.props.startTime + ',' + this.props.endTime}
					/>
					<input type="hidden" name="rm" value="2" />
					<input type="hidden" name="on0" id="on0" value="Voucher" />
					<input type="hidden" name="os0" id="os0" value="0" />
					<input type="hidden" name="on1" id="on1" value="Cd" />
					<input type="hidden" name="os1" id="os1" value="0" />
					<input type="hidden" name="return" id="return" value="" />
					<input type="hidden" name="notify_url" id="notify_url" value="" />
					<input type="hidden" name="return" id="return" value="https://brazilianglow.co.uk/dashboard" />
					<input
						type="hidden"
						name="notify_url"
						id="notify_url"
						value="https://paypal.brazilianglow.co.uk/api/bookings/paypal"
					/>
					<input
						type="image"
						name="submit"
						border="0"
						className="payPalButton"
						src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/44_Grey_PayPal_Pill_Button.png"
						alt="PayPal - The safer, easier way to pay online"
					/>
				</form>
			</div>
		);
	}
}

export default PayPal;
