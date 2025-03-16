const API_BASE_URL = "http://localhost:8000"; // Adjust if hosted elsewhere

export const getBalance = async () => {
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
            "accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed");
    }

    return response.json();
};