import { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/protected", { credentials: "include" })
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch(() => navigate("/login"));
    }, [navigate]);

    return (
        <Box p={4}>
            <Text fontSize="xl">{message || "Loading..."}</Text>
            <Button mt={4} colorScheme="red" onClick={() => navigate("/login")}>
                Logout
            </Button>
        </Box>
    );
}

export default Dashboard;
