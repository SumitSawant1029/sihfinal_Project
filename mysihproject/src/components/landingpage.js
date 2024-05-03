import React from "react";
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>
      <Link to="/Login">
        <button>
          User Logins
        </button>
      </Link><br/>
      <Link to="/">
        <button>
          Government Logins
        </button>
      </Link><br/>
      <Link to="/">
        <button>
          Admin Logins
        </button>
      </Link><br/>
      <Link to="/">
        <button>
          Doctor Logins
        </button>
      </Link><br/>
      <Link to="/">
        <button>
          Center Admin Logins
        </button>
      </Link>
    </>
  );
}

export default LandingPage;
