import React, { useEffect, useState } from 'react';
import { HStack, Image, Button } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Icon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';

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
                    <Tab as={Link} to="/" color={'white'} _hover={{ color: 'blue.500' }}>
                        Home
                    </Tab>
                    <Tab as={Link} to="/contractsView" color={'white'} _hover={{ color: 'blue.500' }}>
                        Contracts
                    </Tab>
                </TabList>

                {/* Tab Indicator for Active Tab */}
                <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
            </Tabs>

            {/* Move Menu Outside Tabs */}
            <Menu>
                <MenuButton as={Button} colorScheme='white' rightIcon={<ChevronDownIcon />}>
                    <Icon as={MdSettings} />
                </MenuButton>
                <MenuList>
                    <MenuItem color={'black'} as={Link} to="/profilesView">Profile</MenuItem>
                    <MenuItem color={'black'}>Wallet</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};

export default NavBar;
