import React, { useEffect, useState } from 'react';
import { HStack, Image, Button } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Icon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';
import { logoutUser } from "../helpers/authHelpers";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logoutUser();
            navigate("/");
        } catch (error) {
            alert("Logout failed" + error.message);
        }
    }

    // Map routes to tab indexes
    const tabMapping = {
        '/': 0,
        '/contractsView': 1,
        '/profilesView': 2,
    };

    // Update selected index based on current route
    useEffect(() => {
        setSelectedIndex(tabMapping[location.pathname] ?? 0);
    }, [location.pathname]);

    return (
        <HStack justify="space-between" p={4} borderBottom="1px solid white">
            <Image src={logo} boxSize="50px" />
            <Tabs
                position="relative"
                variant="unstyled"
                index={selectedIndex}
                onChange={(index) => setSelectedIndex(index)}
            >
                <TabList>
                    <Tab as={Link} to="/home" color={'white'} _hover={{ color: 'blue.500' }}>
                        Home
                    </Tab>
                    <Tab as={Link} to="/contractsView" color={'white'} _hover={{ color: 'blue.500' }}>
                        Contracts
                    </Tab>
                    <Tab as={Link} to="/profilesView" color={'white'} _hover={{ color: 'blue.500' }}>
                        Profile
                    </Tab>
                    <Tab onClick={handleLogout} color={'white'} _hover={{ color: 'blue.500' }}>
                        Logout
                    </Tab>
                </TabList>

                {/* Tab Indicator for Active Tab */}
                <TabIndicator mt="-1.5px" height="2px" bg="#879A77" borderRadius="1px" />
            </Tabs>

        </HStack>
    );
};

export default NavBar;
