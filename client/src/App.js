import React from 'react';
import NavBar from './components/navbar.js';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home.js'
import Profile from './components/screens/Profile.js'
import SignUp from './components/screens/SignUp.js'
import Login from './components/screens/Login.js'
<<<<<<< HEAD
import createPost from './components/screens/createPost.js';
=======
import Create from './components/screens/Create.js'
import UpdateBio from './components/screens/UpdateBio.js';
import { Layout } from 'antd';
>>>>>>> ab7c2d33271511be056cf2a28b039fc7e9fca4f4

// TODO: Implement Profile Pic Upload feature
function App() {
    return (
      <BrowserRouter>
        <NavBar />
<<<<<<< HEAD
        <Routes>
          <Route exact path = "/" component={<Home />} />
          <Route path = "/signup" element={<SignUp />} />
          <Route path = "/login" element={<Login />} />
          <Route path = "/:username" element={<Profile />} />
          <Route path = "/create" element={<createPost />} />
        </Routes>
=======
        <Layout>
          <Routes>
            <Route path = "/home" element={<Home />} />
            <Route path = "/signup" element={<SignUp />} />
            <Route path = "/login" element={<Login />} />
            <Route path = "/create" element={<Create />} />
            <Route path = "/:username" element={<Profile />} />
            <Route path = "/update" element={<UpdateBio />} />
          </Routes>
        </Layout>
>>>>>>> ab7c2d33271511be056cf2a28b039fc7e9fca4f4
      </BrowserRouter>
    );
}

export default App;
