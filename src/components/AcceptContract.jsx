import { useState, useEffect } from "react";
import { acceptContract, createContract } from "../helpers/contractHelpers";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import '../css/AcceptContract.css';

const AcceptContract = () => {
    const [contractID, setContractID] = useState("");
    const [sensorID, setSensorID] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await acceptContract(contractID, sensorID);
            window.location.reload();
        } catch (error) {
            alert("Acceptance Failed.");
        }
    };

    return (
        <div className="acceptContract-container">
            <div className="acceptContract-card">
                <div className="acceptContract-card-content">
                    <h2 className="acceptContract-title">Accept Contract</h2>
                    <form onSubmit={handleSubmit} className="acceptContract-form">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Contract ID"
                                value={contractID}
                                onChange={(e) => setContractID(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
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
                        <button type="submit" className="acceptContract-button">Accept</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AcceptContract;