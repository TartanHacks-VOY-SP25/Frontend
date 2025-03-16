const API_BASE_URL = "http://localhost:8000"; // Adjust if hosted elsewhere

export const createContract = async (title, desc, compTime, collateral, basePrice, oneIncen, twoIncen) => {
    const response = await fetch(`${API_BASE_URL}/contracts/create-contract?title=${title}&desc=${desc}&required_completion_time=2025-3-17T11%3A59%3A00&collateral=${collateral}&base_price=${basePrice}&t1_incentive=${oneIncen}&t2_incentive=${twoIncen}`, {
        method: "POST",
        headers: { "accept": "application/json" },
        credentials: "include",
    });

    // console.log(response)
    if (response.ok == false) {
        throw new Error("Create Failed.")
    }
};

export const acceptContract = async (contract_id, sensorid) => {
    const response = await fetch(`${API_BASE_URL}/contracts/${contract_id}/accept-contract?sensorid=${sensorid}`, {
        method: "POST",
        headers: { "accept": "application/json" },
        credentials: "include",
    });

    // console.log(response)
    if (response.ok == false) {
        throw new Error("Accept Failed.")
    }
};

export const completeContract = async (contract_id) => {
    const response = await fetch(`${API_BASE_URL}/contracts/${contract_id}/complete-contract`, {
        method: "POST",
        headers: { "accept": "application/json" },
        credentials: "include",
    });

    // console.log(response)
    if (response.ok == false) {
        throw new Error("Accept Failed.")
    }
};

export const getOpenContracts = async () => {
    const response = await fetch(`${API_BASE_URL}/contracts/open-contracts`, {
        method: "GET",
        credentials: "include",  // Ensures session cookies are sent
        headers: {
            "accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch contracts");
    }

    return response.json();
};

export const getContractById = async (contractId) => {
    const response = await fetch(`${API_BASE_URL}/contracts/${contractId}`, {
        method: "GET",
        credentials: "include",  // Ensures session cookies are sent
        headers: {
            "Accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch contract details");
    }

    return response.json();
};

export const getContractDeliver = async () => {
    const response = await fetch(`${API_BASE_URL}/contracts/my-contract-deliveries`, {
        method: "GET",
        credentials: "include",  // Ensures session cookies are sent
        headers: {
            "accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch contracts");
    }

    return response.json();
};

export const getContractRequests = async () => {
    const response = await fetch(`${API_BASE_URL}/contracts/my-contract-requests`, {
        method: "GET",
        credentials: "include",  // Ensures session cookies are sent
        headers: {
            "accept": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch contracts");
    }

    return response.json();
};



