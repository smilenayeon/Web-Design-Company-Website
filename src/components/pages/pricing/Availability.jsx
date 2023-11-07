import React from 'react'
import Rabbit from "../../../assets/images/rabbit.svg";

function Availability() {
  return (
    <div className='availability-section'>
        <div className="availability-content">
            <h1>Dont just start up… Blast off</h1>
            <p>At a single monthly rate, you get to call the shots with unlimited design requests and revisions</p>
            <h2>Secure your slot</h2>
            <p>We value each of our clients and aim to provide exceptional service. To maintain our high standards,
             we only open up a handful of spots each month. This approach ensures that you receive the attention and
              expert service you deserve.</p>
            <div className="slots-available-box">
                <div className="slots-number">0</div>
                <div className="slots-text">SLOTS AVAILABLE</div>
            </div>
        </div>
        <div className="rabbit"><img src={Rabbit} alt="rabbit"/></div>

    </div>
  )
}

export default Availability; 
