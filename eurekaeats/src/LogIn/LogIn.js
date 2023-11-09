import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css';
import logo from '../assets/EurekaEatsWText.png';

function LogIn() {
  return (
    <div>
      <main>
        <header>
            
        </header>
        <h2>Ready to Eat? Log In Here</h2>
        <div className="logo">
          <Link to="/"> 
            <img src={logo} alt="My Logo" />
          </Link>
        </div>
        <p>Don't have an account? Sign up today!</p>
        <div className="email-bar">
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="password-bar">
          <input type="text" placeholder="Password" />
        </div>
        <button className="login-button">Log In</button>
      </main>
    </div>
  );
}

export default LogIn;
