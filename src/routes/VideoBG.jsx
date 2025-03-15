import React, { useEffect, useState } from 'react';
import videoBG from '../assets/bgVideo.mov';
import reactLogo from '../assets/logo.png';
import '../css/App.css';
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import { getCurrentUser, logoutUser } from '../authHelpers/authHelpers'; // Import authentication helpers
import { useNavigate } from 'react-router-dom'; // Import navigation hook

const VideoBG = () => {
    const [user, setUser] = useState(null); // State to hold user information
    const navigate = useNavigate(); // Hook to handle navigation

    useEffect(() => {
        // Check if the user is logged in
        const fetchUser = async () => {
            try {
                const userData = await getCurrentUser();
                setUser(userData);
            } catch (error) {
                console.error('User not authenticated', error);
                navigate('/login'); // Redirect to login page if not authenticated
            }
        };

        fetchUser();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await logoutUser();
            setUser(null);
            navigate('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Error logging out', error);
        }
    };

    return (
        <div className='VideoBG'>
            <div className='overlayHome'></div>
            <video className='video' src={videoBG} autoPlay loop muted />
            <div className='homePageContent'>
                <Grid templateAreas={`"nav nav" "logo logo"`}>
                    <GridItem area='nav' className='NavBar'>
                        <NavBar />
                    </GridItem>
                    <GridItem area='logo' className='logo'>
                        <a target="_blank" rel="noopener noreferrer">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </GridItem>
                </Grid>
            </div>
        </div>
    );
};

export default VideoBG;