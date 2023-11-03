import React from 'react';
import './SignIn.css';
import logo from '../assets/EurekaEatsWText.png';


function SignIn() {
  
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="My Logo" />
        </div>
      </header>
      <main>
        <h2>
         Ready to Eat? Log In Here
        </h2>
        <p>Don't have an account? Sign up today!</p>
        <div className="email-bar">
          <input type="text" placeholder="Begin your search for a restaurant here..." />
          <button className="login-button">Sign In 
          </button>
        </div>
      </main>
    </div>
  );
}

export default SignIn;