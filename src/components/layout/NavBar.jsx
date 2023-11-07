import React from 'react';



function NavBar() {
  return (
    
    <div className="navbar">
        <div className="navbar-logo">Super Hello</div>
       
        <ul className="navbar-links">
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#recent-work">Recent Work</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#FAQs">FAQs</a></li>
            <li><a href="#beenfits">Contact</a></li>
        </ul>
       
        <div className="navbar-login">
            <button>Log in</button>
        </div>
    </div>
  )
}

export default NavBar;