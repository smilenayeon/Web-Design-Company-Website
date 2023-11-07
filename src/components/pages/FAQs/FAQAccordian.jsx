import React,{useState} from 'react'

function FAQAccordian(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle=()=>{setIsOpen(!isOpen)};
  const icon = `icon fa-solid fa-plus ${isOpen ? "rotate" : ""}`;
  
  return (
    <div className="FAQAccordian-section">
      <div className="FAQ-question" onClick={toggle}>
      <i className={icon}></i>
        {props.question}
      </div>

      {isOpen && (
      <div className="FAQ-answer">
      {props.answer}
      </div>
      )}
    </div>
  )
}

export default FAQAccordian;