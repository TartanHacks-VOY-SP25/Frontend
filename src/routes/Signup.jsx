import { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        const response = await fetch("http://localhost:8000/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            navigate("/login");
        } else {
            alert("Signup failed");
        }
    };

    return (
        <Box p={4}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button mt={4} colorScheme="blue" onClick={handleSignup}>
                Sign Up
            </Button>
        </Box>
    );
}

export default Signup;
