import React,{useState, useEffect } from 'react';



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