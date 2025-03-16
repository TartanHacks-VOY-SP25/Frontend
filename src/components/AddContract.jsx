import { useState, useEffect } from "react";
import { createContract } from "../helpers/contractHelpers";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import '../css/AddContract.css';

const AddContract = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [compTime, setCompTime] = useState("");
    const [collateral, setCollateral] = useState("");
    const [basePrice, setBasePrice] = useState("");
    const [oneIncen, setOneIncen] = useState("");
    const [twoIncen, setTwoIncen] = useState("");
    const navigate = useNavigate();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const [hour, min] = time.split(':');
        setCompTime(date + 'T' + hour + '%3A' + min + '%3A00');
        try {
            await createContract(title, desc, compTime, collateral, basePrice, oneIncen, twoIncen);
            window.location.reload();
        } catch (error) {
            alert("Creation Failed.");
        }
    };

    return (
        <div className="addContract-container">
            <div className="addContract-card">
                <div className="addContract-card-content">
                    <h2 className="addContract-title">Create Contract</h2>
                    <form onSubmit={handleSubmit} className="addContract-form">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Description"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                placeholder="Base Price ($)"
                                value={basePrice}
                                onChange={(e) => setBasePrice(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                placeholder="Tier 1 Incentive ($)"
                                value={oneIncen}
                                onChange={(e) => setOneIncen(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                placeholder="Tier 2 Incentive ($)"
                                value={twoIncen}
                                onChange={(e) => setTwoIncen(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                placeholder="Collateral ($)"
                                value={collateral}
                                onChange={(e) => setCollateral(e.target.value)}
                                required
                                className="input-field"
                            />
                        </div>
                        <button type="submit" className="addContract-button">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContract;