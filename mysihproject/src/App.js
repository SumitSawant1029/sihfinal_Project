import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from './components/landingpage';
import SignUp from './components/signup';
import Login from './components/login';
import Navbar from './components/Navbar';
import State from './components/EntityLogin/state';
import RehabCentre from './components/EntityLogin/rehabcenter';
import Admin from './components/EntityLogin/Admin';
import { AuthProvider } from './components/AuthContext'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/State" element={<State />} />
          <Route path="/RehabCentre" element={<RehabCentre />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
