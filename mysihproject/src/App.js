import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import LandingPage from './components/landingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/Signup" element={<Signin />} />
          <Route path="/ShopByCategory" element={<ShopByCategory />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
