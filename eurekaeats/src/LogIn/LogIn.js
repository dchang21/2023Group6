import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useJToken from '../utils/useJToken'; // For ESLint of LogIn doc comment.

import logo from '../assets/EurekaEatsWText.png';
import logo1 from '../assets/EurekaEatsLogo.png';

import '../index.css';
import './Login.css';

/**
 * @description Stateful page component for login. Checks the user session token with a to-backend call before further routing.
 * @param {{usedJTokenHook: useJToken}} param0 
 */
function LogIn({ usedJTokenHook }) {
  /* State of login component: stores user inputs. */
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setToken, token } = usedJTokenHook();

  if (token !== 'guest') {
    return <Navigate to="/profile" />;
  }

  /**
   * @description Helper function for making an AJAX call to the app's API in order to process the login.
   * @param {{username: string, password: string}} credentials
   * @returns {Promise<{payload: number, data: {token: string}} | null>}
   */
  const doLoginCall = async (credentials) => {
    return fetch('http://127.0.0.1:5000/api/users/action', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ action: 36, args: credentials })
    })
      .then((response) => {
        return response.json();
      }).catch((error) => {
        console.error(`eurekaeats [API Error]: ${error}`);
        return null;
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const responseData = await doLoginCall({
      username,
      password
    });

    // If we get null data or a false boolean back, the call failed :(
    if (!responseData) {
      setToken(null);
      console.error('[eurekaeats]: No valid JSON response!');
    } else if (responseData.payload === 3) {
      // Here, the payload is a success boolean that is basically false.
      setToken(null);
      console.log(`[eurekaeats]: ${JSON.stringify(responseData)}`);
    } else if (responseData.payload === 2) {
      // At this point, the only other allowed payload code is an object. By the required JSON format, access object.data.token!
      setToken(responseData.data.token);
      console.log(`[eurekaeats]: set token from ${JSON.stringify(responseData)}`);
    } else {
      setToken(null);
      console.log(`[eurekaeats]: set guest token from ${JSON.stringify(responseData)}`);
    }
  };

  return (
    <>
      <main className="login-page-main-content-login">
        <h2>Log Into EurekaEats</h2>
        <div className="login-page-logo-login-box">
          <Link to="/">
            <img src={logo} alt="My Logo" />
          </Link>
        </div>
        <Link to="/signin">
          <p className='login-page-p'>Don't have an account? Sign up today!</p>
        </Link>
        <form className='login-page-form' onSubmit={handleSubmit}>
          <div className="login-page-form-field-bar">
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="login-page-form-field-bar">
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <input type="submit" className="login-page-form-login-button" />
        </form>
        <Link to="/">
          <p>Wrong turn? Head back to our homepage!</p>
        </Link>
      </main>
      <Outlet />
    </>
  );
}

export default LogIn;
