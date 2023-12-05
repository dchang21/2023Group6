import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useJToken from './utils/useJToken';

import LandingPage from './LandingPage/LandingPage';
import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';
import ProfilePage from './ProfilePage/ProfilePage';
import HomePage from './HomePage/HomePage';
import Favorites from './Favorites/Favorites';
// import RestaurantComponent from './RestaurantComponent/RestaurantComponent';

/// TODO: 1. Implement search component.
/// TODO: 2. Implement single restaurant view page. 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<LogIn useJTokenHook={useJToken}/>}></Route>
        <Route path="/signin" element={<SignIn useJTokenHook={useJToken}/>}></Route>
        <Route path="/home" element={<HomePage useJTokenHook={useJToken}/>}></Route>
        <Route path="/favorites" element={<Favorites useJTokenHook={useJToken}/>}></Route>
        {/* <Route path="/restaurant/:id" element={<RestaurantComponent useJTokenHook={useJToken}/>}></Route> */}
        <Route path="/login" element={<LogIn usedJTokenHook={useJToken}/>}></Route>
        <Route path="/signin" element={<SignIn usedJTokenHook={useJToken}/>}></Route>
        <Route path='/profile' element={<ProfilePage usedJTokenHook={useJToken}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
