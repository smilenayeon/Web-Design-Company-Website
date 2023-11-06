import React from 'react'
import Rating from "../assets/images/rating.svg";
import Client from "../assets/images/client.svg";

function Review() {
  return (
    <div className='review-section'>
        <div className='white-box'>
            <img className='rating' src={Rating} alt="five stars"/>
            <p className="review-text">"I found the perfect designer for my start up. I can scale as I need too - no more hiring hassles and amazing results."</p>
            <div className="client">
                <img className="client-logo" src={Client} alt="Blake A. Ngage Agency"/>
                <div>
                    <p className="client-name">Blake A.</p>
                    <p className="client-company">Ngage Agency</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Review