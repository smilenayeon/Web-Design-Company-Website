import React from 'react'
import ProvidingServiceCard from './ProvidingServiceCard';


const serviceCardData=[ 
  {title:"Design", items:["Branding", "Brochures", "Pitch Decks", "Social Media"]}, 
  {title: "Web", items:["Landing Pages", "Marketing websites", "Responsive Design", "Interactions"]}, 
  {title:"UI/UX", items:["App Design", "Wireframing", "Prototyping", "High Fidelity prototypes"]}
]

function ProvidingServices() {
  return (
    <div className='providing-services-section'>
        <h1>We've got you… Branding, Apps<br/> and Web Design</h1>
        <div className='service-box'>
            {serviceCardData.map( ( {title, items}, index) => (
            <ProvidingServiceCard key={index} index={index} title={title} items={items}/>))}
        </div>
    </div>
  )
}

export default ProvidingServices;