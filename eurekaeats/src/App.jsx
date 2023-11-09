
import React from 'react';
import Navigator from '../src/Navigator/Navigator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LandingPage />
    </div>
    </BrowserRouter>
  );
}


export default App;