import React, {useState, useEffect} from 'react';
import {Button, Center, Heading, HStack, Stack, Text} from "@chakra-ui/react";

export const FetchData = () => {

  const [destinations, setDestinations] = useState([])
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    const populateDestinations = async () => {
      const response = await fetch(`https://localhost:7151/destinations?pageNumber=${page}`);
      const data = await response.json()
      setDestinations(data)
    }
    populateDestinations()
  }, [page])

  const nextPage = () => {
    setPage(page + 1)
  }

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  
    return (
        <Center
        display={'flex'}
        flexDirection={'column'}>
        <Center py={6}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}>
          {destinations.map((destination, index) => {
            return (
                <Stack
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  w={{sm: '100%', md: '340px'}}
                  height={{sm: '476px', md: '20rem'}}
                  direction={{base: 'column', md: 'row'}}
                  bg={'white'}
                  boxShadow={'2xl'}
                  margin={4}
                  padding={4}>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {destination.name}
                  </Heading>
                  <Text
                      textAlign={'center'}
                      color={'gray.700'}
                      px={3}>
                    {destination.description}
                  </Text>
                  <Stack
                      width={'100%'}
                      mt={'2rem'}
                      direction={'row'}
                      padding={2}
                      justifyContent={'space-between'}
                      alignItems={'center'}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                      Detalhes
                    </Button>
                  </Stack>
                </Stack>
              </Stack>)
            })
          }
        </Center>
          <HStack display={'flex'}
                  justifyContent={'space-between'}>
            {page > 1 ? <Button onClick={previousPage}>P??gina Anterior</Button> : null}
            <Button onClick={nextPage}>Pr??xima P??gina</Button>
          </HStack>
        </Center>
    )
  }