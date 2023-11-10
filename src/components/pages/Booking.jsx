import React from "react";

function Booking() {
  return (
    <div className="booking-section">
      <div className="booking-text">
        <h3>Got questions? Lets chat.</h3>
        <p>
          Discover how Super Hello can breathe new life into your brand and take
          it to the next level.
        </p>
      </div>
      <a
        className="book"
        href="https://calendly.com/dflighty/15min?month=2023-11"
      >
        <button className="booking-button">Book a call</button>
      </a>
    </div>
  );
}

export default Booking;
