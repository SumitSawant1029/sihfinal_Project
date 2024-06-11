import { useState , useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"; 

import { AuthContext } from './AuthContext';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [data1, setData1] = useState("");
    const navigate = useNavigate(); 
    const [swit, setswit] = useState(true);
    const { setAuthToken } = useContext(AuthContext);

    const hanleswitch = () =>{
        setswit(!swit);
    }

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
                setAuthToken(data.authtoken);
                setData1(data);
                // Navigate based on user role
                if (data.role === "Admin"&& data.approval === true) {
                    navigate("/Admin");
                } else if (data.role === "RehabCentre"&& data.approval === true) {
                    navigate("/RehabCentre");
                } else if (data.role === "State" && data.approval === true){
                    navigate("/State");
                } else if (data.approval === false){
                    setError("Your Approval Is Pending! Please Wait till its resolved ");
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

        <div className="container">
            {/* // Two Cards */}
            {swit && <div className="divlogin">
                <button className="loginCards" onClick={hanleswitch}>Rehab Centre</button>
                <br/><br/>
                <button style={{ position:"relative"}} onClick={hanleswitch} className="loginCards">State</button>
            </div>}
            
            {/* // Two Cards */}
            
            {!swit && 
            <form onSubmit={handleLogin}>
            <div>
            <div class="imagelogin"></div>

            <h2 style={{textAlign:"center",color:"orange",position:"relative",right:"6px",top:"-11px"}}>LOGIN</h2>
                
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="password"
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br/>
            
            {error && <div className="error">{error}</div>}
            <button className="button3" type="submit">Login</button><br/><br/>
            <div style={{color:"orange"}}>
                Don't Have An Account? <Link to="/SignUp" style={{color:"orange"}}>SignUp</Link>
            </div>
        </form>}
            
        </div>
    );
}

export default Login;
