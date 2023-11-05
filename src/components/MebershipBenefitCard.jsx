import React from 'react';

function MebershipBenefitCard (props) {
  return (
    <div className="membership-benefit-card">
    <img src={props.image} alt={props.title}/>
    <h1>{props.title}</h1>
    <p>{props.content}</p>

    </div>
  )
}

export default MebershipBenefitCard;