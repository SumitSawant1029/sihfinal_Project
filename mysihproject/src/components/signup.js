import React, { useState } from "react";
import './login.css'
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

    // Handle response
    if (isEmailValid.ok) {
      // Reset form fields on successful sign-up
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
      // Handle successful response
    } else {
      const errorData = await isEmailValid.json();
      setError(errorData.error);
      // Handle error response
    }
  };

  return (
    <>
      <div className="divsignup">
        <h2>Sign Up Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={credentials.name} onChange={handleChange} />
          </div>
          <div>
          
            <input placeholder="Username" type="text" id="username" name="username" value={credentials.username} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" value={credentials.surname} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" value={credentials.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob">Date Of Birth:</label>
            <input type="date" id="dob" name="dob" value={credentials.dob} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="adhar">Adhar Card Number:</label>
            <input type="text" id="adhar" name="adhar" value={credentials.adhar} onChange={handleChange} maxLength={12} />
          </div>
          <div>
            <label htmlFor="mob">Mobile Number:</label>
            <input type="text" id="mob" name="mob" value={credentials.mob} onChange={handleChange} maxLength={10} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={credentials.confirmPassword} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <select id="role" name="role" value={credentials.role} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Admin">Admin</option>
              <option value="RehabCentre">RehabCentre</option>
              <option value="State">State</option>

            </select>
          </div>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
