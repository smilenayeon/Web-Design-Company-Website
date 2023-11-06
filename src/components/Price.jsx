import React from 'react'
import PriceCard from './PriceCard';
import MostPopular from "../assets/images/most-popular.jpg";
import Clock from "../assets/images/clock.jpg";


const priceCardData=[
    {image:MostPopular, alt:"most popular", title:"Monthly", description:"Save $200 per month.", price:"$1,795", unit: "USD per month", details:["Unlimited requests worked on one at a time",
    "Unlimited Revisions","Stock photos","Ai Image generation","Easy credit card payments","Pause or cancel at anytime",], button:"No slots available", footer:"Book a call"},
    {image:Clock, alt:"clock", title:"Quarterly", description:"No minimum commitment. Pause or cancel anytime.", price:"$1,995", unit: "USD per month", details:["Unlimited requests worked on one at a time","Unlimited Revisions","Stock photos", "Ai Image generation", "Easy credit card payments", "Pause or cancel at anytime"], button:"No slots available", footer:"Book a call"}
    ]

function Price() {
  return (
    <div className='price-section'>
    {priceCardData.map(({image,alt,title,description,price,unit,details,button,footer},index)=>
    <PriceCard key={index}
               image={image}
               alt={alt}
               title={title}
               description={description}
               price={price}
               unit={unit}
               details={details}
               button={button}
               footer={footer} />)}

    </div>
  )
}

export default Price