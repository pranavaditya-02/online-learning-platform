import React from 'react';
import Header from './Header/Header';
import PromotionalSection from './PromotionalSection/PromotionSection';
import StatisticsSection from './StatisticsSection/StatisticsSection';
import HeroSection from './HeroSection/HeroSection';
import CategorySection from './CategorySection/CategorySection';

const Homepage = () => {
  return (
    <div>
        <Header/>
        <HeroSection />
        <CategorySection />
        <PromotionalSection />
        <StatisticsSection />
        
    </div>
  );
};

export default Homepage