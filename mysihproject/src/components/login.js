import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [data1, setData1] = useState("");
    const navigate = useNavigate(); // Hook for navigation

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
                setData1(data);
                // Navigate based on user role
                if (data.role === "Admin" && data.approval === "True") {
                    navigate("/AdminHome");
                } else if (data.role === "User"&& data.approval === "True") {
                    navigate("/UserHome");
                } else if (data.role === "Government Admin" && data.approval === "True"){
                    navigate("/GovernmentHome");
                } else if (data.role === "Center Admin" && data.approval === "True"){
                    navigate("/CenterAdminHome");
                } else if (data.role === "Doctor" && data.approval === "True"){
                    navigate("/DoctorHome");
                }
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
        <div>
            <h1>{data1.role}</h1>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    Don't Have An Account? <Link to="/SignUp">SignUp</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
