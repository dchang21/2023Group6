import React, { useState } from 'react';
import Outlet from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../assets/EurekaEatsWText.png';

import useJToken from '../utils/useJToken'; // For ESLint of LogIn doc comment.
import LandingPage from '../LandingPage/LandingPage';

/**
 * @description Stateful page component for login. Checks the user session token with a to-backend call before further routing.
 * @param {useJToken} useJTokenHook
 */
function LogIn(useJTokenHook) {
  /* State of login component: stores user inputs. */
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {setToken, token} = useJTokenHook();

  // Try routing users with non-guest tokens towards their homepage. For now, route them to the landing page, but later this must change.
  if (token !== 'guest') {
    // TODO: add prop argument with a private user profile page e.g
    // EXAMPLE: return <UserProfile jTokenProp={token}/>
    return <LandingPage/>
  }

  /**
   * @description Helper function for making an AJAX call to the app's API in order to process the login.
   * @param {{username: string, email: string, password: string}} credentials
   * @returns {{payload: number, data: {token: string}} | null}
   */
  const doLoginCall = async (credentials) => {
    return fetch('http://127.0.0.1:5000/api/users/action', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({action: 36, args: credentials})
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
      email,
      password
    });

    // If we get null data or a false boolean back, the call failed :(
    if (!responseData) {
      setToken(null);
    } else if (responseData.payload === 3) {
      setToken(null);
    } else {
      // At this point, the only other allowed payload code is an object. By the required JSON format, access object.data.token!
      setToken(responseData.data.token);
    }
  };

  return (
    <>
      <div>
        <main>
          <h2>Ready to Eat? Log In Here</h2>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="My Logo" />
            </Link>
          </div>
          <p>Don't have an account? Sign up today!</p>
          <form onSubmit={handleSubmit}>
            <div className="username-bar">
              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="email-bar">
              <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password-bar">
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" className="login-button" />
          </form>
        </main>
      </div>
      <Outlet/>
    </>
  );
}

export default LogIn;
