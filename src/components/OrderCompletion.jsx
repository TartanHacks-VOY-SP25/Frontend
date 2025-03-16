import { useState, useEffect } from "react";
import { acceptContract, createContract } from "../helpers/contractHelpers";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import '../css/OrderCompletion.css';
import { completeContract } from "../helpers/contractHelpers";

const OrderCompletion = () => {
    const [contractID, setContractID] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await completeContract(contractID);
            window.location.reload();
        } catch (error) {
            alert("Completion Failed.");
        }
    };

    return (
        <div className="completeContract-container">
            <div className="completeContract-card">
                <div className="completeContract-card-content">
                    <h2 className="completeContract-title">Complete Contract</h2>
                    <form onSubmit={handleSubmit} className="completeContract-form">
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
                        <button type="submit" className="completeContract-button">Complete</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderCompletion;