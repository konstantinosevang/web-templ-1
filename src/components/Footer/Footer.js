// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section brand-info">
          <img src="/images/logo-L.png" alt="DomainStar Logo" className="logo" />
          <p className="brand-description">
            We succeed by growing others. Our aim is to build transparent, long-lasting relationships with SMEs, as we help them grow their business.
          </p>
        </div>
        <div className="footer-section useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section contact-details">
          <h4>Contact Details</h4>
          <p>
            Stasinou 1, Egkomi, Office 201<br />
            2404 Nicosia, Cyprus<br />
            (+357) 22-781802<br />
            support@domainstar.me
          </p>
          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaInstagram />
          </div>
        </div>
        <div className="footer-section partnership">
          <img src="/images/Google.jpg" alt="Google Partner" className="partner-logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
