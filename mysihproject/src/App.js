import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from './components/landingpage';
import SignUp from './components/signup';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignUp />}/>
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
