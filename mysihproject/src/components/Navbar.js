import React , {useContext} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import img1 from "../Images/logo.png"
import { AuthContext } from './AuthContext';

function Navbar() {
  const { authToken } = useContext(AuthContext);
  return (
      <>
        <nav className="navbar">
        <img width={80} src={img1}/>
          <div style={{position:"absolute",left:"50px",top:"9px"}}>
          <ul className="nr">
            <li ><button className="button2">Home</button></li>
            <li><button className="button2">Contact</button></li>
          </ul>
          </div>
          
          {!authToken ? (
          <Link to="/Login">
            <button className="button4">Login</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="button4">Account</button>
          </Link>
        )}
          
        </nav>
        <br/>
      <br/>
      <br/>
  
    </>
    );
  }
  
  export default Navbar;