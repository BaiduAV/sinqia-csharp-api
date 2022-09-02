import React from 'react';
import {Button, Center, Heading, Stack, Text} from "@chakra-ui/react";

export const SearchResults = ({destinations}) => {
    
    return (
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
    )
  }