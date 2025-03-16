
import { useState, useEffect } from "react";
import { acceptContract, createContract } from "../helpers/contractHelpers";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import '../css/RegSens.css';
import { registerSensor } from '../helpers/sensorHelpers';

const RegisterSensor = () => {
    const [sensorID, setSensorID] = useState("");
    const [user, setUser] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerSensor(sensorID, user);
            window.location.reload();
        } catch (error) {
            alert("Registeration Failed.");
        }
    };

    return (
        <div className="RegSens-container">
            <div className="RegSens-card">
                <div className="RegSens-card-content">
                    <h2 className="RegSens-title">Register Sensor</h2>
                    <form onSubmit={handleSubmit} className="RegSens-form">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Sensor ID"
                                value={sensorID}
                                onChange={(e) => setSensorID(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <button type="submit" className="RegSens-button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterSensor;














