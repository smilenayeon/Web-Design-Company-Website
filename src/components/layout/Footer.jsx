import React from 'react'
import MiniLogo from "../../assets/images/super-hello-mini-logo.jpg";
import scrollToSection from '../utilities/scrollToSection';

function Footer() {
  return (
    <div className="footer-section">
      <img className="super-hello-mini-logo" src={MiniLogo} alt="super hello mini logo"/>
      <nav>
        <ul>
          <li onClick={()=>scrollToSection("benefits")}>Benefits</li>
          <li onClick={()=>scrollToSection("recent-work")}>Recent Work</li>
          <li onClick={()=>scrollToSection("how-it-works")}>How It Works</li>
          <li onClick={()=>scrollToSection("pricing")}>Pricing</li>
          <li onClick={()=>scrollToSection("FAQs")}>FAQs</li>
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