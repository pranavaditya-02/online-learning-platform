import React from 'react';
import './Header.css';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/loginpage');
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="nav-link">Home</a>
        <a href="/" className="nav-link courses-link">Courses</a>
      </nav>
      <div className="search-login">
        <div className="search-container">
          <input type="text" placeholder="Search for Course..." />
          <FaSearch className="search-icon" />
        </div>
        <div className="icons">
          <div className="icon">
            <FaHeart />
          </div>
          <div className="icon">
            <FaShoppingCart />
          </div>
        </div>
        <button className="login-btn" onClick={handleLoginClick}>Log In</button>
      </div>
    </header>
  );
};

export default Header;
