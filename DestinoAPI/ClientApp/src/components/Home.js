import React, {useState} from 'react';
import {Input, Button, Box, VStack, Text} from "@chakra-ui/react";
import {SearchResults} from "./SearchResults";

export const Home = () => {
    const [filterParams, setFilterParams] = useState(' ')
    const [destinations, setDestinations] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const populateDestinations = async () => {
        const response = await fetch(`https://localhost:7151/search?filter=${filterParams}`)
        const data = await response.json()
        setDestinations(data)
        setIsLoading(false)
    }

    return (
        <VStack>
            <Box p={2} 
                 w={"100%"}
                 h={"50%"} 
                 display="flex"
                 spacing={1} 
                 alignItems={"center"} 
                 justifyContent={"center"}>
                <Input type="text" htmlSize={40} width='auto' placeholder="Ache um destino aqui" 
                       onChange={(e) => setFilterParams(e.target.value)}/>
                <Button m={3} onClick={populateDestinations}>Pesquisar</Button>
            </Box>
            {!isLoading && <SearchResults destinations={destinations}/>}
        </VStack>
    );
}