// TopCategories.js
import React from 'react';
import './CategorySection.css'; 

// Import images
import graphicDesignIcon from '../../../Assets/graphic.png';
import aiIcon from '../../../Assets/ai.png';
import developmentIcon from '../../../Assets/development.png';
import marketingIcon from '../../../Assets/marketing.png';
import uiuxIcon from '../../../Assets/ui&ux.png';
import datascienceIcon from '../../../Assets/datascience.png';

const TopCategories = () => {
  const categories = [
    { name: 'Graphic Design', count: 22, icon: graphicDesignIcon },
    { name: 'Artificial Intelligence', count: 41, icon: aiIcon },
    { name: 'Development', count: 29, icon: developmentIcon },
    { name: 'Marketing', count: 31, icon: marketingIcon },
    { name: 'UI & UX', count: 23, icon: uiuxIcon },
    { name: 'Datascience', count: 19, icon: datascienceIcon },
  ];

  return (
    <div className="top-categories">
      <h2>Top Category</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.icon} alt={category.name} className="category-icon"/>
            <p className="category-name">{category.name}</p>
            <span className="category-count">({category.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
