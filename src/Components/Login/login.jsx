import React from 'react';
import './login.css'; 
import facebookIcon from '../../Assets/facebook.png'
import googleIcon from '../../Assets/google.png';
import linkedinIcon from '../../Assets/linkedin.png';
import image from '../../Assets/login.jpg';

const LoginPage = () => {
  return (
    <div className="login-page">
      <button className="signup-button">Sign Up</button>
      <div className="login-left">
        <h1>Welcome!</h1>
        <p>Login to your account</p>
        <img src={image} alt="Login illustration" /> 
      </div>
      <div className="login-right">
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"  />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </div>
          <div className="form-group">
            <a href="/" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="social-login">
            <p>Login with:</p>
            <button className="social-button facebook">
              <img src={facebookIcon} alt="Facebook" />
            </button>
            <button className="social-button google">
              <img src={googleIcon} alt="Google" />
            </button>
            <button className="social-button linkedin">
              <img src={linkedinIcon} alt="LinkedIn" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
