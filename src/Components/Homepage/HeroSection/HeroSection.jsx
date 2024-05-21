import React from 'react';
import './HeroSection.css';
import hero from '../../../Assets/heropage.png';

function App() {
  return (
    <div className="container">
      <div className="text-section">
        <h1>
          Learn Without <span className="highlight">Limits</span> With platformname
        </h1>
        <p>Every teaching and learning journey is unique. Following We'll help guide your way.</p>
        <button className="cta-button">Start Free Trial</button>
      </div>
      <div className="image-section">
      <img src={hero} alt="Student" />
      </div>
    </div>
  );
}

export default App;
