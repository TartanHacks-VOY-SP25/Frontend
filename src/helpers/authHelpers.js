const API_BASE_URL = "http://localhost:8000"; // Adjust if hosted elsewhere

export const loginUser = async (username, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login?user=${username}&password=${password}`, {
        method: "POST",
        headers: { "accept": "application/x-www-form-urlencoded" },
        credentials: "include",
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
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: { "accept": "application/json" },
        credentials: "include",  // Ensure cookies are included
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }

    return await response.json();
};

export const logoutUser = async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: { "accept": "application/json" },
    });
};
