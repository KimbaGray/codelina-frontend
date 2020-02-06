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
           startTime: "2020-02-14 22:00:00Z",
        endTime: "2020-02-14 23:30:00Z",
        service: "Reiki"
      },
      {
        startTime: "2020-02-16 10:00:00Z",
        endTime: "2020-02-16 11:00:00Z",
        service: "Reiki"
      },
      {
        startTime: "2020-02-17 10:00:00Z",
        endTime: "2020-02-17 11:00:00Z",
        service: "Reiki"
      },
      {
             startTime: "2020-02-17 22:00:00Z",
        endTime: "2020-02-17 23:45:00Z",
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
