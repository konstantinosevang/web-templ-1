// src/components/Steps/Steps.js
import React, { useEffect, useRef } from 'react';
import './Steps.css'; // Import the CSS file for styling

const stepsData = [
  {
    id: 1,
    title: '01 Discovery',
    description: 'We begin by scheduling an initial consultation with our clients to understand their business objectives, target market, and brand expectations. This discovery phase allows us to gain valuable insights into their brand vision, values, and differentiation factors.',
    imgSrc: '/images/steps/Branding_1-MEETING_Reduced.jpg',
  },
  {
    id: 2,
    title: '02 Research and Analysis',
    description: 'Our team conducts extensive research on the client’s industry landscape, competitor positioning, and target audience preferences. We refine our understanding of market trends, customer behavior, and industry benchmarks to inform our strategic brand positioning.',
    imgSrc: '/images/steps/Branding_2-RESEARCH_Reduced.jpg',
  },
  {
    id: 3,
    title: '03 Brand Identity Development',
    description: 'Leveraging the insights gained from research, we initiate the brand identity development process. By integrating elements of design, storytelling, and visual representation, we create a brand identity that authentically reflects our client’s values, resonates with their audience, and sets them apart within their industry.',
    imgSrc: '/images/steps/Branding_4-MOODBOARDING_Reduced.jpg',
  },
  {
    id: 4,
    title: '04 Brand Messaging and Positioning',
    description: 'Crafting a persuasive brand narrative is pivotal in connecting with the target audience. We collaborate with the client to articulate compelling brand messaging that effectively communicates their value proposition and key messages. Our goal is to create a brand position that leaves a lasting impression and fosters meaningful connections.',
    imgSrc: '/images/steps/Branding_5-SKETCHES_Reduced-1.jpg',
  },
  {
    id: 5,
    title: '05 Brand Guidelines Development',
    description: 'We establish comprehensive brand guidelines that serve as a foundational framework for consistent brand implementation. These guidelines encompass the use of visual assets, messaging, and tone of voice, ensuring uniform brand representation across various touchpoints.',
    imgSrc: '/images/steps/Branding_6-LOGO-MOCKUP-10_Reduced.jpg',
  },
  {
    id: 6,
    title: '06 Iterative Refinement and Feedback Loop',
    description: 'We operate within an iterative refinement cycle, where client feedback is integral in shaping the brand’s evolution. This interactive approach allows us to make informed adjustments, ensuring that the final brand representation accurately encapsulates the client’s aspirations.',
    imgSrc: '/images/steps/Branding_7-BRANDING_Reduced-1024x682.jpg',
  },
  {
    id: 7,
    title: '07 Implementation & Launch Support',
    description: 'Following the completion of the brand identity development, we provide comprehensive support during the implementation and launch phase. Our team offers guidance and resources to facilitate a seamless integration of the new brand identity across diverse channels.',
    imgSrc: '/images/steps/1-first-image_Reduced.jpg',
  },
];

function Steps() {
  const stepsRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (stepsRefs.current) {
        stepsRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  return (
    <section className="steps-section">
      {stepsData.map((step, index) => (
        <div
          key={step.id}
          className={`step ${index % 2 === 0 ? 'left' : 'right'}`}
          ref={(el) => (stepsRefs.current[index] = el)}
        >
          <div className="step-text">
            <h3><span className="step-number">{step.title.split(' ')[0]}</span> {step.title.split(' ').slice(1).join(' ')}</h3>
            <p>{step.description}</p>
          </div>
          <div className="step-image">
            <img src={step.imgSrc} alt={step.title} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Steps;
