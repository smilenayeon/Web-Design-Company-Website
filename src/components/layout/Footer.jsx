import React from 'react'
import MiniLogo from "../../assets/images/super-hello-mini-logo.jpg";

function Footer() {
  return (
    <div className="footer-section">
      <img className="super-hello-mini-logo" src={MiniLogo} alt="super hello mini logo"/>
      <nav>
        <ul>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#recent-work">Recent Work</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#FAQs">FAQs</a></li>
          <li><a href="#open-email">Contact</a></li>
        </ul>
      </nav>
      <div className="copy-right">
        <p>© 2023 Super Hello</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}

export default Footer