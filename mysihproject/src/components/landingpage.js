import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import img1 from "../Images/banner.jpg";

function LandingPage() {
  return (
    <>
    <Navbar/>
    
    <div>
      <img style={{height:"450px",width:"100%"}} src={img1}></img>
    </div>
      <h1>Landing Page</h1>
      <Link to="/Login">
        <button>
          User Logins
        </button>
      </Link><br />
      <Link to="/">
        <button>
          Government Logins
        </button>
      </Link><br />
      <Link to="/">
        <button>
          Admin Logins
        </button>
      </Link><br />
      <Link to="/">
        <button>
          Doctor Logins
        </button>
      </Link><br />
      <Link to="/">
        <button>
          Center Admin Logins
        </button>
      </Link>
    </>
  );
}

export default LandingPage;
