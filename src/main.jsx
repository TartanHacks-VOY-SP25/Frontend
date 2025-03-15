import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import App from './App.jsx';
import ContractsView from './routes/ContractsView.jsx';
import ProfilesView from './routes/ProfilesView.jsx';
import VideoBG from './routes/VideoBG.jsx';
import Login from './routes/Login.jsx';
import Signup from './routes/Signup.jsx';

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" replace /> }, // Redirect to login initially
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/home", element: <VideoBG /> },
  { path: "/contractsView", element: <ContractsView /> },
  { path: "/profilesView", element: <ProfilesView /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
);
