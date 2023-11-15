import { useEffect, useState } from 'react';
import React from 'react';
import LogIn from '../LogIn'
import SignIn from '../SignIn'


const LandingPage = () => {
  return <div>Landing Page</div>;
};

const SignIn = () => {
  return <div>Sign In</div>;
};

const LogIn = () => {
  return <div>LogIn</div>;
};

const CustomRouter = () => {
    const [route, setRoute] = useState('');
  
    useEffect(() => {
    
      const handleRouteChange = () => {
        setRoute(window.location.pathname);
      };
  
      window.addEventListener('popstate', handleRouteChange);
  
      setRoute(window.location.pathname);
  
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }, []);
  
    return (
      <div>
        {route === '/' && <LandingPage />}
        {route === '/LogIn' && <LogIn />}
        {route === '/SignIn' && <SignIn />}
      </div>
    );
  };

  
  
  export default CustomRouter;

