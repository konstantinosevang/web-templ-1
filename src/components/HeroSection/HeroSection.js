// src/components/HeroSection/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Creating Lasting Impressions</h1>
        <p className="hero-subtitle">Stand out with a brand that speaks to your audience and builds strong connections.</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Our Services</button>
          <button className="hero-button secondary">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
