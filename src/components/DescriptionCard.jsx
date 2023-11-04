import React from 'react'

function DescriptionCard(props) {
  return (
    <div className="desciption-card-container">
    <img className="card-image" src={props.img} alt={props.alt}/>
    <h1 className="card-title">{props.title}</h1>
    <p className="card-content">{props.content}</p>

    </div>
  )
}

export default DescriptionCard;