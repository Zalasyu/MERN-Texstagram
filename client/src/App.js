import React from 'react';
import NavBar from './components/navbar.js';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home.js'
import Profile from './components/screens/Profile.js'
import SignUp from './components/screens/SignUp.js'
import Login from './components/screens/Login.js'

// TODO: Implement Profile Pic Upload feature
function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path = "/" component={<Home />} />
          <Route path = "/signup" element={<SignUp />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/:username" element={<Profile />} />
          <Route path = "/:username/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
