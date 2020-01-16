import React, { Component } from 'react';
import BookingSlot from './bookingSlot';

class BookingSlots extends Component {
	state = {
		slots: [
			{
				startTime: '2020-01-16 21:09:00Z',
				endTime: '2020-01-16 22:09:00Z',
				service: 'Reiki'
			},
			{
				startTime: '2020-08-22 10:52:00Z',
				endTime: '2020-08-22 12:52:00Z',
				service: 'Reiki'
			},
			{
				startTime: '2020-09-22 10:52:00Z',
				endTime: '2020-09-22 11:52:00Z',
				service: 'Reiki'
			}
		]
	};
	render() {
		return (
			<div>
				{this.state.slots.map((slot) => {
					return <BookingSlot startTime={slot.startTime} endTime={slot.endTime} />;
				})}
			</div>
		);
	}
}

export default BookingSlots;
