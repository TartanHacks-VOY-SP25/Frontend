import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { Grid, GridItem } from '@chakra-ui/react'
import Contract from '../components/Contract'
import { Box, HStack, VStack, Button, Input, Image, SimpleGrid, Text, Tabs, TabList, Tab, TabIndicator, Card, CardBody, Heading } from '@chakra-ui/react'
import '../css/contract.css'



function ContractsView() {

    return (
        <Box className='contractViewBG' p={6}>

            <NavBar />

            <Heading size="lg" mb={6} textAlign="center" color="white">
                Contracts
            </Heading>
            <Contract />
        </Box>
    );
}

export default ContractsView