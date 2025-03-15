const API_BASE_URL = "http://localhost:8000"; // Adjust if hosted elsewhere

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login?user=${username}&password=${password}`, {
        method: "POST",
        headers: { "accept": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username, password }),
    });

    // console.log(response)
    if (response.ok == false) {
        console.log("FALSE RESPONSE")
        throw new Error("Login Failed!")
    }
};

export const signupUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/register?username=${username}&password=${password}`, {
        method: "POST",
        headers: { "accept": "application/json" },
        body: '',
    });

    if (!response.ok) throw new Error("Signup failed");

    return await response.json();
};

export const getCurrentUser = async () => {

    console.log("HERE")
    console.log(document.cookie)

    return
    const token = document.cookie
    if (!token) return null;

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { "accept": "application/json" },
    });

    if (!response.ok) {
        localStorage.removeItem("token");
        throw new Error("Unauthorized");
    }

    return await response.json();
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};
