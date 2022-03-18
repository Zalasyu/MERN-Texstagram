import React from 'react';
import NavBar from './components/navbar.js';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home.js'
import Profile from './components/screens/Profile.js'
import SignUp from './components/screens/SignUp.js'
import Login from './components/screens/Login.js'
import createPost from './components/screens/createPost.js';
import Create from './components/screens/Create.js'
import UpdateBio from './components/screens/UpdateBio.js';
import { Layout } from 'antd';

// TODO: Implement Profile Pic Upload feature
function App() {
    return (
      <BrowserRouter>
        <NavBar />
        <Layout>
          <Routes>
            <Route exact path = "/" element={<Login />} />
            <Route path = "/feed" element={<Home />} />
            <Route path = "/signup" element={<SignUp />} />
            <Route path = "/create" element={<Create />} />
            <Route path = "/:username" element={<Profile />} />
            <Route path = "/update" element={<UpdateBio />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
}

export default App;
