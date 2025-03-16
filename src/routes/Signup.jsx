import { useState } from "react";
import { signupUser } from "../helpers/authHelpers";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signupUser(username, password);
            navigate("/login"); // Redirect to login after signup
        } catch (error) {
            alert("Signup failed! Try a different username.");
        }
    };

    return (

        <div className="login-container">
            <div className="login-card">
                <div className="login-card-content">
                    <h2 className="login-title">Sign Up</h2>
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
                        <button type="submit" className="login-button">Sign Up</button>
                    </form>
                    <div className="login-footer">
                        <button className="forgot-password" onClick={() => navigate("/login")}>Login</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Signup;
