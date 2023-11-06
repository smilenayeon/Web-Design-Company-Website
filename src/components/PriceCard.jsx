import React from 'react'


function PriceCard(props) {
    const details= props.details;
  return (
    <div className='price-card'>
    <div className='price-card-image'>
        <img src={props.image} alt={props.alt}/>
    </div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
   <div className="price-container">
        <h2>{props.price}</h2>
        <h3>{props.unit}</h3>
    </div>
    <ul>
        {details.map((detail)=><li>{detail}</li>)}
    </ul>
    <button>
        {props.button}
    </button>
    <fdiv>
        {props.footer}
    </fdiv>

    </div>
  )
}

export default PriceCard