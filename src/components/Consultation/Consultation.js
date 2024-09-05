import React from 'react';
import { FaVideo, FaEnvelope } from 'react-icons/fa';
import './Consultation.css';

function Consultation() {
  return (
    <section className="consultation">
      <div className="consultation-card">
        <div className="consultation-icons">
          <FaVideo className="consultation-icon" />
          <FaEnvelope className="consultation-icon" />
        </div>
        <h1 className="consultation-title">Elevate Your Brand</h1>
        <p className="consultation-subtitle">Book a consultation with an expert</p>
        <button className="consultation-button">Get in Touch</button>
      </div>
    </section>
  );
}

export default Consultation;
