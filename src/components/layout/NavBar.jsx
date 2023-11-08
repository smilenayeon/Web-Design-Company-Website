import React, { useState, useEffect } from 'react';
import scrollToSection from '../utilities/scrollToSection';

function NavBar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);  //for hamburger menu

  useEffect(() => {                          //NavBar re-appears when the use scrolls up, and disappear when scroll down
    const handleScroll = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll); //update current scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  const closeMenu = () => {
    setMenuOpen(false);     //close the hamburger menu when an li is clicked
  };

  return (
    <div className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-logo" onClick={() => scrollToSection("hero")}>Super Hello</div>
      
      <button className="hamburger" onClick={handleMenuClick}>
        <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
      </button>

      <ul className={`navbar-links-container ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => { scrollToSection("benefits"); closeMenu(); }}>Benefits</li>
        <li onClick={() => { scrollToSection("recent-work"); closeMenu(); }}>Recent Work</li>
        <li onClick={() => { scrollToSection("how-it-works"); closeMenu(); }}>How It Works</li>
        <li onClick={() => { scrollToSection("pricing"); closeMenu(); }}>Pricing</li>
        <li onClick={() => { scrollToSection("FAQs"); closeMenu(); }}>FAQs</li>
        <li onClick={closeMenu}><a className="contact" href="mailto:someone@example.com?subject=The%20Subject&body=Hello%2C%20let's%20talk!">Contact</a></li>
        <li><button className="navbar-login" onClick={closeMenu}>Log in</button></li>
      </ul>

     
    </div>
  );
}

export default NavBar;