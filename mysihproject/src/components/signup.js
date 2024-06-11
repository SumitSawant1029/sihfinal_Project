import React, { useState } from "react";
import './signup.css'
function SignUp() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    surname: "",
    gender: "",
    dob: "",
    adhar: "",
    mob: "",
    role: "",
    username: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (credentials.password !== credentials.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const isEmailValid = await fetch(
      "http://localhost:5000/api/auth/createuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          firstname: credentials.name,
          lastname: credentials.surname,
          adhar:credentials.adhar,
          mob: credentials.mob,
          DOB: credentials.dob,
          role: credentials.role,
          gender: credentials.gender,
          username:credentials.username
        })
      }
    );

   
    if (isEmailValid.ok) {
    
      setCredentials({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        surname: "",
        gender: "",
        dob: "",
        adhar: "",
        mob: "",
        role: "",
        username:""
      });
      setError("");
     
    } else {
      const errorData = await isEmailValid.json();
      setError(errorData.error);
  
    }
  };

  return (
    <>
      <div style={{position:"absolute",width:"1368px",height:"100%",left:"33%",top:"10%"}}>
        <h2 style={{color:"orange"}}>Sign Up Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="innerdiv">
            <input placeholder="firstname" style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}}  type="text" id="name" name="name" value={credentials.name} onChange={handleChange} />
            <br/>
            <input placeholder="Surname" style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}} type="text" id="surname" name="surname" value={credentials.surname} onChange={handleChange} />
          </div>
          <div className="innerdiv">
            <input placeholder="Email" style={{width:"45.5%"}} type="email" id="email" name="email" value={credentials.email} onChange={handleChange} />
          </div>
          <div className="innerdiv">
            <select id="gender" name="gender" style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}} value={credentials.gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input  placeholder="dob" type="date" id="dob" name="dob" value={credentials.dob} onChange={handleChange} />
          </div>
          <div className="innerdiv">
            <input placeholder="Adhar Card Number" style={{marginRight:"13px"}} type="number" id="adhar" name="adhar" value={credentials.adhar} onChange={handleChange} maxLength={12} />
            <input placeholder="Contact Number" type="number" id="mob" name="mob" value={credentials.mob} onChange={handleChange} maxLength={10} />
          </div>
          
          <div className="innerdiv">
            <input placeholder="Username" style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}} type="text" id="username" name="username" value={credentials.username} onChange={handleChange} />
          </div>
          <div className="innerdiv">
            <input placeholder="Password" style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}} type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
            <input type="password"  style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}} placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" value={credentials.confirmPassword} onChange={handleChange} />
          </div>
          <div className="innerdiv">
            <select id="role" name="role" style={{color:"orange",borderRadius:"5px",backgroundColor:"black",width:"22.5%",borderColor:"white",height:"50px",marginRight:"12px"}} value={credentials.role} onChange={handleChange}>
              <option value="">Role</option>
              <option value="Admin">Admin</option>
              <option value="RehabCentre">RehabCentre</option>
              <option value="State">State</option>

            </select>
          </div>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <button type="submit" style={{color:"black",borderRadius:"5px",backgroundColor:"orange",position:"relative",left:"12%",width:"22.5%",borderColor:"black",height:"50px",marginRight:"12px"}} >Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
