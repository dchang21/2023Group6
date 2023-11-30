import React from 'react';
import { useState, useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import './AccountInfo.css';
import { Link } from 'react-router-dom';


function AccountInfo() {

  const [username, setUsername] = useState();

  useEffect(() => {
    const makeUsername = () => {
      setUsername("iqrairfan");
    };

    makeUsername();
  }, []);
   
    return (
        <div>
    <header>
    <div className='drawerHeader'> Welcome Back {username} </div>
    </header>

    <main>
    <div className="drawer-buttons"> 
    <div className="drawer-button1">
          <button className="favorite-button">Favorites</button>
        </div>
    <div className="drawer-button2">
          <button className="favorite-button">Settings</button>
    </div>
    </div>
    <div className="bottom-buttons">
    <button className="logout-button">
        Log Out
    </button>
    </div>
    <div>

    <Link to="/home" className="login-button">Home</Link>

    </div>
    </main>
    
    </div>

    )

}


export default AccountInfo;