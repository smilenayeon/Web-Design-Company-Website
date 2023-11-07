import React from 'react'


function PriceCard(props) {
    const details= props.details;
  return (
    <div className="price-card">
   <img className="price-card-image" src={props.image} alt={props.alt}/>
    <h1 className="price-card-title">{props.title}</h1>
    <p className="price-card-description">{props.description}</p>
   <div className="price-container">
        <h2>{props.price}</h2>
        <div className="monthly-price">
        <h3 >{props.currency}</h3>
        <h3 >{props.unit}</h3>
        </div>
    </div>
    <h3 className="extra-info">{props.extra}</h3>
    <ul>
        {details.map((detail,index)=><li key={index} className="price-card-details"><i className="fa-solid fa-circle-check"></i><div className="detail-text">{detail}</div></li>)}
    </ul>
    <button className="price-card-button">
        {props.button}
    </button>
    <div className="price-card-footer">
        {props.footer}
    </div>

    </div>
  )
}

export default PriceCard