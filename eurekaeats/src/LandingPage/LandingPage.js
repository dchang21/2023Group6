import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../assets/EurekaEatsWText.png';
import search from '../assets/searchIcon.png';
import italian1 from '../assets/italian1.jpeg';
import italian2 from '../assets/italian2.jpeg';

import '../index.css';
import './LandingPage.css';

// TODO: add SignIn link AFTER its page component is done. -DrkWithT
function LandingPage() {
  /**
   * @description Sends a simple GET request to the Flask backend to test if this React client is connected. Takes a JSON message.
   * @note Check `eureka/restaurants.py` for API details.
   * @throws {Error} If the API call failed.
   * @returns {Promise<object | null>} Async task result for API.
   */
  async function dummyPingAPI() {
    /**
     * Devs: Please keep "cors" mode on for security purposes so that no other web programs out of localhost
     *  testing will hack us. If you add a header to 'headers', please please add it to the "restaurants" module
     *  so the server and client agree to process API messages. Same goes for HTTP methods like POST. This was a pain
     *  in the ass to get working!
     */
    const res = await fetch('http://127.0.0.1:5000/api/dummy', {
      'mode': 'cors',
      'method': 'POST',
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': '{"action": 47, "args": null}'
    }).catch((err) => console.error(`eurekaeats: ${err}`)) || null; // Default to null in case of a void value.

    if (res) {
      return res.json();
    }

    return null;
  }

  /**
   * @description Quick and dirty test function to log the message. Should say "Hello World!" in the console when the search button clicks.
   */
  async function testDummyAPICall() {
    const message = await dummyPingAPI();

    console.log(`eurekaeats/api/dummy: ${message.payload} ${message.data}`);
  }

  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <header className='landing-page-header'>
        <div className="landing-page-logo">
            <img src={logo} alt="EurekaEats Logo" />
        </div>
        <div className="landing-page-search-bar">
          <input className='landing-page-input' type="text" placeholder="Begin your search for a restaurant here..." />
          <button className="landing-page-search-button" onClick={testDummyAPICall}>
            <img src={search} alt="searchLogo" className="landing-page-search-icon" />
          </button>
        </div>
        <div className="landing-page-header-buttons">
          <Link to="/login" className="landing-page-login-button">Log In</Link>
          <Link to="/signin" className="landing-page-signup-button">Sign Up</Link>
          <Link to="/home" className="signup-button">Home Test</Link> 
        </div>
      </header>

      <main className='landing-page-main'>
        <h2 className='landing-page-h2'>
          Welcome to EurekaEats! We know people just want to eat <em>good</em>.
        </h2>
        <p className='landing-page-p'>Only available for the Greater Los Angeles Area.</p>
        <h1 className='landing-page-h1'><u>Featured Restaurants</u></h1>
        <div className="landing-page-restaurants">
          <div className="landing-page-restaurant">
            <div className="landing-page-tile-header">
              <Link to="/restaurant" className="landing-page-tile-header-link">
                Amazing Italian Place Somewhere
              </Link>
            </div>
            <div className="landing-page-blue-rectangle">
              <div className="landing-page-content-container">
                <h4>Open until 10PM</h4>
                <p>
                  "One of my favorite restaurants located in Los Angeles. They have the best breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes. One of my favorite restaurants located in Los Angeles. They have the best breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes.”
                </p>
              </div>
              <img src={italian1} alt="italian1" />
            </div>
          </div>
          <div className="landing-page-restaurant">
            <div className="landing-page-tile-header">
              <Link to="/restaurant" className="tile-header-link">
                <div className="tile-header">Your Mom's House</div>
              </Link>
            </div>
            <div className="landing-page-blue-rectangle">
              <div className="landing-page-content-container">
                <h4>Open until 10PM</h4>
                <p>
                  "One of my favorite restaurants located in Los Angeles. They have the best breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes. One of my favorite restaurants located in Los Angeles. They have the best breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes.”
                </p>
              </div>
              <img src={italian2} alt="italian2" />
            </div>
          </div>
        </div>
      </main>
      <Outlet />
    </>
  );
}

export default LandingPage;
