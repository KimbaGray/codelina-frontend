import React, { Component } from 'react';
import BookingSlot from './bookingSlot';
import Axios from 'axios';

const api = 'http://brazilianglow.co.uk/api/availability';

function groupBy(data, keyGenerator) {
	return data.reduce(function(acc, item) {
		const key = keyGenerator(item);
		const group = acc[key] || [];
		group.push(item);
		acc[key] = group;
		return acc;
	}, {});
}

class BookingSlots extends Component {
	state = {
		slots: []
	};

	componentDidMount() {
		this.getData();
	}

	getData() {
		Axios.get(api).then((result) => {
			console.log(result.data);
			this.setState({ slots: result.data });
		});
	}

	render() {
		const groupedSlots = groupBy(this.state.slots, (slot) =>
			new Date(slot.slotStartTime).toLocaleDateString('en', {
				weekday: 'short',
				day: 'numeric',
				month: 'short'
			})
		);
		return (
			<div>
				<br />
				<p>£60/hour</p>
				<br />
				<p>Please select your session below and pay the 20% deposit via the PayPal button</p>
				<br />
				{Object.entries(groupedSlots).map(([ date, slots ]) => (
					<div>
						<h1>{date}</h1>
						<br />
						{slots.map((slot) => (
							<BookingSlot startTime={slot.slotStartTime} service={'Reiki'} endTime={slot.slotEndTime} />
						))}
					</div>
				))}
				<div>
					<br />
					<p>
						By making this payment you are putting a deposit on the full cost of a Reiki session. You also
						agree to the <a href="">Terms and Conditions</a> and the processing of your data.
					</p>
				</div>
			</div>
		);
	}
}
export default BookingSlots;
