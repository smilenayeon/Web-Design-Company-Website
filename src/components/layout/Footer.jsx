import React from 'react'
import MiniLogo from "../../assets/images/super-hello-mini-logo.jpg";

function Footer() {
  return (
    <div className="footer-section">
    <img className="super-hello-mini-logo" src={MiniLogo} alt="super hello mini logo"/>
    <nav>
    <ul>
        <li>Benefits</li>
        <li>Recent work</li>
        <li>How it works</li>
        <li>Pricing</li>
        <li>FAQs</li>
        <li>Contact</li>
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