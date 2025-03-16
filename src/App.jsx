import { useEffect, useState } from 'react';
import reactLogo from './assets/logo.png';
import './css/App.css';
import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import VideoBG from './routes/VideoBG';
import { getCurrentUser, logoutUser } from './helpers/authHelpers'; // Import authentication helpers
import { useNavigate } from 'react-router-dom'; // Import navigation hook

function App() {
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
    <>
      <VideoBG />
      {user && (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
}

export default App;