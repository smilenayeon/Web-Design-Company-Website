import React from "react";

function PreviousWorkCard(props) {
  return (
    <div className="previous-work-card">
      <div className="previous-work-image-container">
        <img
          className="previous-work-image"
          src={props.image}
          alt={props.title}
        />
      </div>
      <h2 className="previous-work-title">
        {props.title}
      </h2>
      <p className="Previous-work-cotent">
        {props.content}
      </p>
    </div>
  );
}

export default PreviousWorkCard;
