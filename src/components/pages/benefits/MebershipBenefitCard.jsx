import React from "react";

function MebershipBenefitCard(props) {
  return (
    <div className="membership-benefit-card">
      <img
        className="membership-benefit-card-image"
        src={props.image}
        alt={props.title}
      />
      <div className="mebership-benefit-card-content">
        <h1>
          {props.title}
        </h1>
        <p>
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default MebershipBenefitCard;
