import React, { useState } from 'react';
import './Services.css';
import { FaLightbulb, FaPencilAlt, FaComments, FaRedo } from 'react-icons/fa';

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const servicesList = [
    {
      icon: <FaLightbulb />,
      title: 'Brand Strategy & Identity Development',
      description: (
        <>
          Define your brand’s <strong>identity</strong>, <strong>values</strong>, and <strong>market positioning</strong> with a cohesive strategy.
        </>
      ),
      details: (
        <>
          We explore your brand’s <strong>core</strong>, including market <strong>trends</strong> and customer <strong>personas</strong>, to build a <strong>unique identity</strong>. It’s like giving your brand a <strong>personality makeover</strong>!
        </>
      ),
    },
    {
      icon: <FaPencilAlt />,
      title: 'Logo & Collateral Design',
      description: (
        <>
          Create memorable <strong>logos</strong> and marketing materials that reflect your brand.
        </>
      ),
      details: (
        <>
          Our design team crafts stunning <strong>logos</strong> and collateral, from business cards to brochures. Think of it as your brand’s <strong>visual toolkit</strong>!
        </>
      ),
    },
    {
      icon: <FaComments />,
      title: 'Brand Messaging & Guidelines',
      description: (
        <>
          Communicate your brand’s message clearly with comprehensive <strong>guidelines</strong>.
        </>
      ),
      details: (
        <>
          We develop <strong>consistent messaging</strong> that’s compelling, supported by clear <strong>brand guidelines</strong>. It’s like having a <strong>handbook for your brand’s voice</strong>!
        </>
      ),
    },
    {
      icon: <FaRedo />,
      title: 'Rebranding & Refresh',
      description: (
        <>
          Revitalize your brand to better align with your <strong>market position</strong> and goals.
        </>
      ),
      details: (
        <>
          Whether a full <strong>makeover</strong> or a fresh <strong>update</strong>, we revamp your brand to make it shine in the market. It’s like a <strong>rejuvenation spa</strong> for your brand!
        </>
      ),
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`service-card ${expandedCard === index ? 'expanded' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {expandedCard === index && (
                <div className="service-details">
                  <p>{service.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
