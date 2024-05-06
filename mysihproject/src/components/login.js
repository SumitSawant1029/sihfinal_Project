import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [data1,setdata1]=useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                // Login successful, handle token saving or redirection
                console.log("Login successful:", data);
                setdata1(data)
            } else {
                // Login failed, display error message
                setError(data.error);
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("Internal Server Error");
        }
    };

    return (
        <>
            <div>
                <h1>{ data1.role }</h1>
                <h2>Login Page</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button type="submit">Login</button>
                    <div>
                        Dont Have An Account? <Link to="/SignUp">SignUp</Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
