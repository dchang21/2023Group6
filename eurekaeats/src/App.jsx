import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';

import useJToken from './utils/useJToken';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
        <Route path="/login" element={<LogIn useJTokenHook={useJToken}/>}></Route>
        <Route path="/signin" element={<SignIn useJTokenHook={useJToken}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
