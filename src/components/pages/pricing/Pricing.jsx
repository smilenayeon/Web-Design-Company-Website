import React from 'react'
import Price from './Price';
import Availability from './Availability';

function Pricing() {
  return (
    <div className="pricing-section">
    <Availability/>
    <Price/>
    </div>
  )
}

export default Pricing;