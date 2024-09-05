import React, { useState } from 'react';
import './Newsletter.css';
import { FaEnvelope } from 'react-icons/fa'; // Importing the icon

function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to your backend or an email marketing service)
    alert(`Thank you for subscribing, ${name}!`);
    setEmail('');
    setName('');
  };

  return (
    <div className="newsletter-widget">
      <div className="newsletter-content">
        <FaEnvelope className="newsletter-icon" />
        <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
        <p className="newsletter-subtitle">Get the latest updates and offers directly in your inbox.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="newsletter-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
