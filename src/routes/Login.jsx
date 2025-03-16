import { useState, useEffect } from "react";
import { loginUser } from "../helpers/authHelpers";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import '../css/Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await loginUser(username, password);
            navigate("/home"); // Redirect to home after login
        } catch (error) {
            alert("Login failed! Check credentials.");
        }
    };

    return (

        <div className="login-container">
            <div className="login-card">
                <div className="login-card-content">
                    <h2 className="login-title">Login</h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="login-footer">
                        <button className="forgot-password" onClick={() => navigate("/signup")}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
