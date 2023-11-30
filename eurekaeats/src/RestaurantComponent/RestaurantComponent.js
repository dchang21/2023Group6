import React from 'react';
import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import './RestaurantComponent.css';
import { Link } from 'react-router-dom';
import logo from '../assets/EurekaEatsWText.png';
import search from '../assets/searchIcon.png';
import italian1 from '../assets/italian1.jpeg';
import italian2 from '../assets/italian2.jpeg';


function RestaurantComponent() {

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
    <div>
    <header>
    <div className="logo">
    <Link to="/home" className="tile-header-link">
          <img src={logo} alt="My Logo" />
          </Link>
        </div>
              
        <div className="search-bar">
      
          <input type="text" placeholder="Begin your search for a restaurant here..." />
          <button className="search-button" onClick={testDummyAPICall}>
            <img src={search} alt="searchLogo" className="search-icon" />
          </button>
        </div>
        <div className="header-buttons">
          <Link to="/home" className="home-button">Home</Link> 
        </div>
    </header>
    <main>
    <div className="restaurantComp">
  <div className="tile-header">Your Mom's House</div>
  <div className="blue-rectangle">
    <div className="content-container">
      <h4>Open until 10PM</h4>
      <p>
        "One of my favorite restaurants located in Los Angeles. They have the best breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes. One of my favorite restaurants located in Los Angeles. They have the best breadsticks ever! And there is no extra cost for the bread (like some other places). I think their spaghetti is one of their best dishes.”
      </p>
    </div>
    <img src={italian2} alt="italian2" />
  </div>
</div>

    </main>
    
    </div>

    )

}


export default RestaurantComponent;