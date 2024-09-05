import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="header-content">
        <img src="/images/logo-s.png" alt="Logo" className="logo" />
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#branding">Branding</a>
          <a href="#web-design">Website Design</a>
          <a href="#digital-marketing">Digital Marketing</a>
          <a href="#clients">Clients</a>
          <a href="#work">Work</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
        </nav>
        <button className="contact-button">Let's Talk</button>
      </div>
    </header>
  );
};

export default Header;
