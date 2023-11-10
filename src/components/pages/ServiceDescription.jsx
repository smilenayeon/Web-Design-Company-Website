import React from "react";
import DesignRobot from "../../assets/images/design-robot.jpg";

function ServiceDescription() {
  return (
    <div className="service-description-section">
      <img className="design-robot" src={DesignRobot} alt="design robot" />
      <div className="description">
        <h2>
          The future of <br /> design services
        </h2>
        <p>
          Need stunning graphic design, intuitive UI/UX, or eye-catching web
          design? Welcome home. We're Super Hello, your design partner for a
          flat monthly fee. We're all about delivering good creative in a new
          way.
        </p>
      </div>
    </div>
  );
}

export default ServiceDescription;
