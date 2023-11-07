import React from 'react'
import Phone from "../../../assets/images/phone.svg";
import Game from "../../../assets/images/game.svg";
import ShadowCity from "../../../assets/images/shadow-city.svg";
import Novofit from "../../../assets/images/novofit.svg";
import PreviousWorkCard from './PreviousWorkCard';

const previousWorkData=[
    {image:Phone, title: "UI/UX", content: "A user-friendly, intuitive app interface and icon set.",},
    {image:Game, title:"Branding & Pitch Deck", content:"A compelling, visually engaging brand and pitch deck created to attract investment for 'Iron Horizons,' a riveting new mini-series.",},
    {image:ShadowCity, title:"Landing page", content:"A captivating landing page crafted to create hype and excitement around an upcoming metaverse project.",},
    {image:Novofit, title:"Graphic Design", content:"Branding for a fitness app",},
    ];

function PreviousWork() {
  return (
    <div id="recent-work" className='previous-work-section'>
        <h1>What we've been up to…</h1>
        <div className='previous-works-table'>
        {previousWorkData.map(({image,title,content},index)=><PreviousWorkCard image={image} title={title} content={content} key={index}/>)}
        </div>
    </div>
  )
}

export default PreviousWork;