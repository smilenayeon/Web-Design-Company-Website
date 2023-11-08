import React from 'react'
import { useInView } from 'react-intersection-observer';
import ProvidingServiceCard from './ProvidingServiceCard';



const serviceCardData=[ 
  {title:"Design", items:["Branding", "Brochures", "Pitch Decks", "Social Media"]}, 
  {title: "Web", items:["Landing Pages", "Marketing websites", "Responsive Design", "Interactions"]}, 
  {title:"UI/UX", items:["App Design", "Wireframing", "Prototyping", "High Fidelity prototypes"]}
]

function ProvidingServices() {

  const { ref, inView } = useInView({
   threshold:0.1
  });
  return (
    <div
      className={`providing-services-section ${inView ? 'animated' : ''}`}
      ref={ref}
    >
   
        <h1>We've got you… Branding, Apps<br/> and Web Design</h1>
        <div className='service-box'>
            {serviceCardData.map( ( {title, items}, index) => (
            <ProvidingServiceCard key={index} index={index} title={title} items={items}/>))}
        </div>
    </div>
  )
}

export default ProvidingServices;