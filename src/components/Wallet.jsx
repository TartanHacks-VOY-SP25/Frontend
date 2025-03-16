import React from 'react'
import { useState, useEffect } from "react";
import '../css/Wallet.css'
import RegisterSensor from './RegisterSensor';
import { HStack, VStack } from '@chakra-ui/react';
import PendingContract from './PendingContract';
import PlacedContract from './PlacedContract';
import { getCurrentUser } from '../helpers/authHelpers';
import OrderCompletion from './OrderCompletion';


const Wallet = () => {

    const [balance, setBalance] = useState();

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const userData = await getCurrentUser(); // Fetch user data
                setBalance(userData.account_balance);  // Set balance state
            } catch (error) {
                console.error("Error Fetching Balance:", error);
            }
        };

        fetchBalance();
    }, []); // Add dependency array to avoid infinite re-renders


    return (
        <>
            <div className="wallet-container">
                <div className="wallet-card">
                    <div className="wallet-card-content">
                        <h2 className="wallet-title">Balance</h2>
                        <h1 className="amount">${balance || "0.00"}</h1>
                    </div>
                </div>
            </div>

            <RegisterSensor />
            <VStack justify="center" spacing='0px'>
                <HStack justify="center" spacing='600px' p={4}>
                    <h2 className='heading-titles' id='pending-title'>Pending Deliveries</h2>
                    <h2 className='heading-titles' id='placed-title'>Contracts Placed</h2>
                </HStack>

                <HStack justify="center" className='contractSquares' spacing={'100px'}>
                    <PendingContract />
                    <PlacedContract />
                </HStack>
            </VStack>

            <OrderCompletion />
        </>

    )
}

export default Wallet




