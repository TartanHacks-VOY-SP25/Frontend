import React from 'react'
import { HStack, Image } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'
import ContractsView from '../routes/ContractsView.jsx'
import ProfilesView from '../routes/ProfilesView.jsx'
import { useState } from 'react'
import AuthContext from '../context/AuthContext.jsx'

const NavBar = () => {
    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Map routes to tab indexes
    const tabMapping = {
        '/': 0,
        '/contractsView': 1,
        '/profilesView': 2,
    };

    // Update selected index based on current route
    React.useEffect(() => {
        setSelectedIndex(tabMapping[location.pathname] || 0);
    }, [location.pathname]);

    return (
        <HStack justify="space-between" p={4} borderBottom="1px solid gray">
            <Image src={logo} boxSize="50px" />
            <Tabs
                position="relative"
                variant="unstyled"
                index={selectedIndex}
                onChange={(index) => setSelectedIndex(index)}
            >
                <TabList>
                    <Tab _hover={{ color: 'blue.500' }}>
                        <Link to="/home">Home</Link>
                    </Tab>
                    <Tab _hover={{ color: 'blue.500' }}>
                        <Link to="/contractsView">Contracts</Link>
                    </Tab>
                    <Tab _hover={{ color: 'blue.500' }}>
                        <Link to="/profilesView">Profile</Link>
                    </Tab>
                </TabList>

                {/* Tab Indicator for Active Tab */}
                <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
            </Tabs>
        </HStack>
    );
};

export default NavBar