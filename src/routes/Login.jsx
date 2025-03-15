import { useState, useEffect } from "react";
import { loginUser } from "../authHelpers/authHelpers";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            {/* Signup Button */}
            <p>Don't have an account?</p>
            <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    );
};

export default Login;
