import React,{useState, useEffect } from 'react';
import scrollToSection from '../utilities/scrollToSection';

function NavBar() {

  const [lastScrollTop, setLastScrollTop] =useState(0);
  const [isVisible,setIsVisible]=useState(true);

  useEffect(()=>{
    const handleScroll=()=>{

        const currentScroll=window.scrollY;

        if (currentScroll >lastScrollTop){   //scrolling down
          setIsVisible(false)
        } else {              //scrolling up
          setIsVisible(true)
        };

        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);  //update the last scroll position
    };
    
    window.addEventListener('scroll', handleScroll);
    return()=>{window.removeEventListener('scroll', handleScroll)};

  },[lastScrollTop]);

  

  return (
    
    <div className={`navbar ${isVisible ? 'visible':'hidden'}`}>
        <div className="navbar-logo">Super Hello</div>
       
        <ul className="navbar-links">
            <li onClick={()=>scrollToSection("benefits")}>Benefits</li>
            <li onClick={()=>scrollToSection("recent-work")}>Recent Work</li>
            <li onClick={()=>scrollToSection("how-it-works")}>How It Works</li>
            <li onClick={()=>scrollToSection("pricing")}>Pricing</li>
            <li onClick={()=>scrollToSection("FAQs")}>FAQs</li>
            <li>Contact</li>
        </ul>
       
        <div className="navbar-login">
            <button>Log in</button>
        </div>
    </div>
  )
}

export default NavBar;