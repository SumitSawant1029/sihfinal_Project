import React from "react";
import Navbar from "./Navbar";
import img1 from "../Images/banner.jpg";

function LandingPage() {
  return (
    <>
    <Navbar/>
  
    <div>
      <img style={{height:"450px",width:"100%"}} alt="Hello" src={img1}></img>
    </div>
    </>
  );
}

export default LandingPage;
