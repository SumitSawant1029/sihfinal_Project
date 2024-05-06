import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from './components/landingpage';
import SignUp from './components/signup';
import Login from './components/login';
import UserHome from './components/user/userlogin';
import DoctorHome from './components/doctor/doctorhomepage';
import AdminHome from './components/admin/adminhomepage';
import CenterAdminHome from './components/centeradmin/centeradminhomepage';
import GovernmentHome from './components/government/governmenthome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Signup" element={<SignUp />}/>
        <Route path="/Login" element={<Login/>} />
        <Route path="/GovernmentHome" element={<GovernmentHome/>} />
        <Route path="/CenterAdminHome" element={<CenterAdminHome/>} />
        <Route path="/AdminHome" element={<AdminHome/>} />
        <Route path="/DoctorHome" element={<DoctorHome/>} />
        <Route path="/UserHome" element={<UserHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
