import React, { useState, useEffect } from 'react';
import { Box, HStack, VStack, SimpleGrid, Text, Spinner } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import '../css/contract.css';
import AddContract from './AddContract';
import AcceptContract from './AcceptContract'
import { getContractRequests } from '../helpers/contractHelpers';

function PlacedContract() {
    const [contracts, setContracts] = useState([]);
    const [expandedCard, setExpandedCard] = useState(null);

    // Fetch open contracts on component mount
    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const data = await getContractRequests();
                setContracts(data);
            } catch (error) {
                console.error("Error fetching contracts:", error);
            }
        };
        fetchContracts();
    }, []);

    const toggleExpand = (id) => {
        setExpandedCard(prev => (prev === id ? null : id));
    };

    return (
        <HStack align="start" spacing={10} p={6}>
            {/* Card Grid */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
                {contracts.map((contract) => (
                    <div className="container" key={contract.contract_id}>
                        <div className={`card ${expandedCard === contract.contract_id ? "expanded" : ""}`}>
                            {/* Face1 (Description & Expand Button) */}
                            <div className="face face1">
                                {/* Expand Button */}
                                <button className="expand-btn" onClick={() => toggleExpand(contract.contract_id)}>
                                    {expandedCard === contract.contract_id ? < ChevronUpIcon boxSize={5} /> : <ChevronDownIcon boxSize={5} />}
                                </button>
                                <div className='cardDis'>
                                    <Text fontSize="lg" fontWeight="bold">
                                        Description: {contract.description}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        ID: {contract.contract_id}
                                    </Text>
                                    <Text fontSize="sm" color="gray.500">
                                        Deadline: {contract.contract_timeout}
                                    </Text>
                                    {/* Extra Content when Expanded */}
                                    {expandedCard === contract.contract_id && (
                                        <Text fontSize="md" fontWeight="bold">
                                            <br></br>
                                            Tier 1 Incentive: ${contract.t1_bonus}
                                            <br></br>
                                            Tier 2 Incentive: ${contract.t2_bonus}
                                            <br></br>
                                            Collateral: ${contract.required_collateral}
                                        </Text>
                                    )}
                                </div>
                            </div>
                            {/* Face2 (Title) */}
                            <div className="face face2">
                                <Text fontSize="lg" fontWeight="bold">
                                    {contract.title}
                                    <br></br>
                                    <br></br>
                                    {'$' + contract.base_price}
                                </Text>
                            </div>
                        </div>
                    </div>
                ))}
            </SimpleGrid>
        </HStack>
    );
}

export default PlacedContract;




