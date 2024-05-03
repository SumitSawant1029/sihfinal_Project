import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div>
                <h2>Login Page</h2>
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="role">Role:</label>
                        <select id="role" name="role">
                            <option value="Select">Select a role...</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                            <option value="Center Admin">Center Admin</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Doctor">Doctor</option>

                        </select>
                    </div>
                    <button type="login">login</button>
                    <a>Dont Have An Account ?</a><Link to="/SignUp">SignUp</Link>
                </form>
            </div>
        </>
    );
}

export default Login;
