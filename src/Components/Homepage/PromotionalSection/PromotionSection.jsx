import React from 'react';
import './PromotionSection.css';
import promotional from '../../../Assets/Promotion.png';

const PromotionalSection = () => {
  return (
    <section className="promotional-section">
      <div className="promo-content">
        <h2>Thousands Of Top Courses Now In One Place</h2>
        <ul>
          <li>Flexible Course Plan</li>
          <li>Access Your Class Anywhere</li>
          <li>Expert Instructors</li>
        </ul>
      </div>
      <div className="promo-image">
        <img src={promotional} alt="Two people working together" />
      </div>
    </section>
  );
};

export default PromotionalSection;
