const API_BASE_URL = "http://localhost:8000"; // Adjust if hosted elsewhere

export const registerSensor = async (sensorID) => {
    const response = await fetch(`${API_BASE_URL}/sensors/register_sensor?sensor=${sensorID}`, {
        method: "POST",
        headers: { "accept": "application/json" },
        credentials: "include",
    });

    // console.log(response)
    if (response.ok == false) {
        throw new Error("Sensor Registration Failed.")
    }
};



