import React from 'react';
import './StatisticsSection.css';

const statistics = [
  { label: 'Active Students', value: '45K+' },
  { label: 'Faculty Courses', value: '24K+' },
  { label: 'Best Professors', value: '14K+' },
  { label: 'Award Achieved', value: '42K+' },
];

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      {statistics.map((stat, index) => (
        <div className="stat" key={index}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatisticsSection;
