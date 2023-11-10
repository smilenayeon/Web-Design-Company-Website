import React from "react";

function ProvidingServiceCard(props) {
  return (
    <div className="providing-service-card">
      <h1 className="providing-service-card-title">
        {props.title}
      </h1>
      <ul className={`list class${props.index}`}>
        {props.items.map((item, index) =>
          <li key={index} className="providing-service-card-item">
            {item}
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProvidingServiceCard;
