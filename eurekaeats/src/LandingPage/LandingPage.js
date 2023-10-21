import React from 'react';
import './LandingPage.css';
import logo from '../assets/EurekaEatsWText.png';
import search from '../assets/searchIcon.png';
import italian1 from '../assets/italian1.jpeg';
import italian2 from '../assets/italian2.jpeg';

function LandingPage() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="My Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Begin your search for a restaurant here..." />
          <button className="search-button">
            <img src={search} alt="searchLogo" className="search-icon" />
          </button>
          <div className="header-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button" style={{ whiteSpace: 'nowrap' }}>Sign Up</button>

          </div>
        </div>
      </header>
      <main>
        <h2>
          Welcome to EurekaEats! We know people just want to eat <em>good</em>.
        </h2>
        <p>Only available for the Greater Los Angeles Area.</p>
        <h1><u>Featured Restaurants</u></h1>
        <div className="restaurants">
  <div className="restaurant">
  <div className="header">Amazing Italian Place Somewhere</div>
  <div className="blue-rectangle"> 
    <img src={italian1} alt="italian1" />
    <h4>Open until 10PM</h4>
    <p>
      "One of my favorite restaurants located in Los Angeles. They have the best
      breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes. One of my favorite restaurants located in Los Angeles. They have the best
      breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes.”
    </p>
  </div>
</div>
  <div className="restaurant">
    <div className="header">Your Mom's House</div>
    <div className="blue-rectangle1">
    <img src={italian2} alt="italian2" /> 
    <h4>Open until 10PM</h4>    <p>
      "One of my favorite restaurants located in Los Angeles. They have the best
      breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes. One of my favorite restaurants located in Los Angeles. They have the best
      breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes.”
    </p>
    </div>
  </div>
</div>
      </main>
    </div>
  );
}

export default LandingPage;
