import React, { useState } from 'react';
import { Box, HStack, VStack, Button, Input, SimpleGrid, Text, Heading } from '@chakra-ui/react';
import '../css/contract.css';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const cardData = [
    { id: 1, title: "Contract 1", description: "a", details: "b" },
    { id: 2, title: "Contract 2", description: "a", details: "b" },
    { id: 3, title: "Contract 3", description: "a", details: "b" },
    { id: 4, title: "Contract 4", description: "a", details: "b" },
    { id: 5, title: "Contract 1", description: "a", details: "b" },
    { id: 6, title: "Contract 2", description: "a", details: "b" },
    { id: 7, title: "Contract 3", description: "a", details: "b" },
    { id: 8, title: "Contract 4", description: "a", details: "b" }
];

function Contract() {
    const [cards, setCards] = useState(cardData);
    const [expandedCard, setExpandedCard] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newDetails, setNewDetails] = useState('');

    const toggleExpand = (id) => {
        setExpandedCard(prev => (prev === id ? null : id));
    };

    const addCard = () => {
        if (newTitle && newDescription && newDetails) {
            const newCard = {
                id: cards.length + 1,
                title: newTitle,
                description: newDescription,
                details: newDetails
            };
            setCards(prevCards => [...prevCards, newCard]);
            setNewTitle('');
            setNewDescription('');
            setNewDetails('');
        }
    };

    return (
        <HStack align="start" spacing={10} p={6}>
            {/* Card Grid */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                {cards.map((item) => (
                    <div className="container" key={item.id}>
                        <div className={`card ${expandedCard === item.id ? "expanded" : ""}`}>
                            {/* Face1 (Description & Expand Button) */}
                            <div className="face face1">
                                {/* Expand Button */}
                                <button className="expand-btn" onClick={() => toggleExpand(item.id)}>
                                    {expandedCard === item.id ? < ChevronUpIcon boxSize={5} /> : <ChevronDownIcon boxSize={5} />}
                                </button>
                                <div className='cardDis'>
                                    <Text mt={2}>{item.description}</Text>
                                    {/* Extra Content when Expanded */}
                                    {expandedCard === item.id && (
                                        <Text mt={2} className="extra-content">{item.details}</Text>
                                    )}
                                </div>
                            </div>
                            {/* Face2 (Title) */}
                            <div className="face face2">
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
            </SimpleGrid>

            {/* Add New Card */}
            <VStack flex="1" spacing={4} p={4} bg="gray.100" borderRadius="lg" boxShadow="md">
                <Heading size="md">Add New Contract</Heading>
                <Input placeholder="Contract Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                <Input placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                <Input placeholder="Details" value={newDetails} onChange={(e) => setNewDetails(e.target.value)} />
                <Button colorScheme="blue" onClick={addCard}>Add Contract</Button>
            </VStack>
        </HStack>
    );
}

export default Contract;
