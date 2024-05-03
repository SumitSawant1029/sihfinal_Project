import React from "react";

function SignUp() {
  return (
    <>
      <div>
        <h2>Sign Up Page</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" />
          </div>
          <div>
            <label htmlFor="gender">Gender:</label>
            <input type="text" id="gender" name="gender" />
          </div>
          <div>
            <label htmlFor="dob">Date Of Birth:</label>
            <input type="date" id="dob" name="dob" />
          </div>
          <div>
            <label htmlFor="adhar">Adhar Card Number:</label>
            <input type="number" id="adhar" name="adhar" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
