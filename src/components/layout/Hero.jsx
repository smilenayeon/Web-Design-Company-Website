import React from 'react'
import RobotRabbit from "../../assets/images/robot-rabbit.svg";
import SuperHello from "../../assets/images/super-hello.svg";


function Hero() {
  return (
    <div className="hero-section">
    <div className="hero-content">
        <img className="hero-title" src={SuperHello} alt="super hello"/>
        <p className="hero-tagline">A design agency....kinda</p>
        <h2 className="hero-description">Unlimited revisions and a flat monthly fee.</h2>
        <button className="hero-button">See Plans</button>
    </div>
    <div className="hero-image">
        <img src={RobotRabbit} alt="robot rabbit"/>
    </div>
    </div>
  )
}

export default Hero;