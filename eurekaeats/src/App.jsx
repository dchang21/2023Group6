
import React from 'react';
// import Navigator from '../src/Navigator/Navigator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import LogIn from './LogIn/LogIn';
import SignIn from './SignIn/SignIn';
import useJToken from './utils/useJToken';
import AccountInfo from './AccountInfo/AccountInfo';
import HomePage from './HomePage/HomePage';
import Favorites from './Favorites/Favorites';
import RestaurantComponent from './RestaurantComponent/RestaurantComponent';

// TODO: complete SignIn page component functionality... -DrkWithT
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}>
        </Route>
        <Route path="login" element={<LogIn useJTokenHook={useJToken}/>}></Route>
        <Route path="/signin" element={<SignIn useJTokenHook={useJToken}/>}></Route>
        <Route path="/accountinfo" element={<AccountInfo useJTokenHook={useJToken}/>}></Route>
        <Route path="/home" element={<HomePage useJTokenHook={useJToken}/>}></Route>
        <Route path="/favorites" element={<Favorites useJTokenHook={useJToken}/>}></Route>
        <Route path="/restaurant" element={<RestaurantComponent useJTokenHook={useJToken}/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
