import React from 'react'


function NavBar() {
  return (
    
    <div className="navbar">
        <div className="navbar-logo">Super Hello</div>
        <div className="navbar-links">
            <a href="/benefits">Benefits</a>
            <a href="/work">Recent Work</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/pricing">Pricing</a>
            <a href="/faqs">FAQs</a>
            <a href="/contact">Contact</a>
        </div>
        <div className="navbar-login">
            <button>Log in</button>
        </div>
    </div>
  )
}

export default NavBar;