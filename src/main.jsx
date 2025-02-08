import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContractsView from './routes/ContractsView.jsx'
import ProfilesView from './routes/ProfilesView.jsx'
import VideoBG from './routes/VideoBG.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <VideoBG /> },
  { path: "/contractsView", element: <ContractsView /> },
  { path: "/profilesView", element: <ProfilesView /> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
