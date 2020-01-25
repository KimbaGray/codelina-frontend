import React, { Component } from "react";
import BookingSlot from "./bookingSlot";

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
    slots: [
      {
        startTime: "2020-01-16 21:09:00Z",
        endTime: "2020-01-16 22:09:00Z",
        service: "Reiki"
      },
      {
        startTime: "2020-01-16 10:09:00Z",
        endTime: "2020-01-16 12:09:00Z",
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
    const groupedSlots = groupBy(this.state.slots, slot =>
      new Date(slot.startTime).toLocaleDateString("en", {
        weekday: "short",
        day: "numeric",
        month: "short"
      })
    );
    return (
      <div>
        {Object.entries(groupedSlots).map(([date, slots]) => (
          <>
            <h1>{date}</h1>
            {slots.map(slot => (
              <BookingSlot
                startTime={slot.startTime}
                service={slot.service}
                endTime={slot.endTime}
              />
            ))}
          </>
        ))}
      </div>
    );
  }
}
export default BookingSlots;
