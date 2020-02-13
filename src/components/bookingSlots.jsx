import React, { Component } from "react";
import BookingSlot from "./bookingSlot";
import Axios from "axios";

const api = "http://brazilianglow.co.uk/api/availability";

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
    Axios.get(api).then(result => {
      console.log(result.data);
      this.setState({ slots: result.data });
    });
  }

  render() {
    const groupedSlots = groupBy(this.state.slots, slot =>
      new Date(slot.slotStartTime).toLocaleDateString("en", {
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
            <br />
            {slots.map(slot => (
              <BookingSlot
                startTime={slot.slotStartTime}
                service={"Reiki"}
                endTime={slot.slotEndTime}
              />
            ))}
          </>
        ))}
      </div>
    );
  }
}
export default BookingSlots;
