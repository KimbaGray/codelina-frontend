import React, { Component } from "react";
import Booked from "./booked";
class MyBookings extends Component {
  state = {
    slots: [
      {
        startTime: "2020-01-16 21:09:00Z",
        endTime: "2020-01-16 22:09:00Z",
        service: "Reiki"
      },
      {
        startTime: "2020-08-22 10:08:00Z",
        endTime: "2020-08-22 12:52:00Z",
        service: "Reiki"
      },
      {
        startTime: "2020-09-22 10:52:00Z",
        endTime: "2020-09-22 11:52:00Z",
        service: "Reiki"
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>My Bookings</h1>
        <div className="slots">
          {this.state.slots.map(slot => {
            return (
              <Booked
                startTime={slot.startTime}
                endTime={slot.endTime}
                service={slot.service}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyBookings;
