import React from 'react';
import NavBar from './components/navbar.js';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home.js'
import Profile from './components/screens/Profile.js'
import SignUp from './components/screens/SignUp.js'
import Login from './components/screens/Login.js'

// TODO: Implement Profile Pic Upload feature
function App() {
    return (
      <Router>
        <NavBar />

        <Routes>
          <Route path = "/">
            <Home />
          </Route>

          <Route path = "/signup">
            <SignUp/>
          </Route>

          <Route path = "/login">
            <Login/>
          </Route>

          <Route path = "/profile">
            <Profile/>
          </Route>
        </Routes>
      </Router>
    );
}

export default App;
