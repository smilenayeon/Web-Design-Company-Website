import React from 'react'
import DescriptionCard from './DescriptionCard';
import Lightening from "../../../assets/images/lightening.svg";
import PaperPlane from "../../../assets/images/paper-plane.svg";
import Eye from "../../../assets/images/eye.svg";

         const cardData=
        [
            {img:Lightening,
             alt:"lightening",
             title:"Subscribe",
             content:"Kickstart your design adventure by hopping on our monthly subscription. For just $2k, you get unlimited dibs on top-notch design work.",
            },
            {img:PaperPlane,
             alt:"paper plane",
             title:"Request",
             content:"Alright, you're in! Now, it's time to toss your design tasks our way. Need a branding concept? A sleek landing page design? Or maybe a standout trifold brochure? No sweat. Just keep those requests coming!",
            },
            {img:Eye,
             alt:"eye",
             title:"Review",
             content:"Hold tight! In just 48 hours, you'll get your first peek at your completed design. And if it's not love at first sight, no worries! We can tweak and tune it until it's just right - that's the beauty of unlimited revisions.",
            },
        ];

function DetailedServiceDescription() {
  return (
    <div id="how-it-works" className="DetailedServiceDescription">
    <h1>How it works</h1>
    <div className='cards-container'>
   {cardData.map( (data,index) => (
    <DescriptionCard key={index} img={data.img} alt={data.alt} title={data.title} content={data.content}/>
   ))}
   </div>

    </div>
  )
}

export default DetailedServiceDescription;