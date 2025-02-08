import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserSession();
    }, []);

    const checkUserSession = async () => {
        try {
            const response = await axios.get("http://localhost:8000/me", { withCredentials: true });
            setUser(response.data.username);
        } catch (error) {
            console.error("Session check failed:", error);
            setUser(null);
        }
    };

    const login = async (username, password) => {
        try {
            await axios.post(
                "http://localhost:8000/login",
                new URLSearchParams({ user: username, password }),
                { headers: { "Content-Type": "application/x-www-form-urlencoded" }, withCredentials: true }
            );
            checkUserSession();
            return true;
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    };

    const signup = async (username, password) => {
        try {
            await axios.post(
                "http://localhost:8000/auth/register",
                { username, password }, // ✅ Send JSON body instead of query params
                { headers: { "Content-Type": "application/json" }, withCredentials: true }
            );
            return true;
        } catch (error) {
            console.error("Signup failed:", error);
            return false;
        }
    };

    const logout = async () => {
        try {
            await axios.post("http://localhost:8000/logout", {}, { withCredentials: true });
            setUser(null);
            window.location.replace("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthContext;
