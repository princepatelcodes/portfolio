import { Box, Center, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <Box h='100vh' w='100%'
            bgColor='gray.200'
            css={{
                // backgroundImage: 'url("/bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}
            display={'flex'}
            justifyContent='center'
            alignItems='center'

        >
            <Container
                bg={useColorModeValue("whiteAlpha.500", "white.800")}
                borderRadius='lg'
                p='6'
                m='4'
                css={{
                    backdropFilter: 'blur(8px)'
                }}>
                <Heading textAlign='center' fontSize='4xl'>I am Prince Patel</Heading>
                <Heading textAlign='center' fontSize={24} py='2'>
                    <TypeAnimation
                        sequence={[
                            'Student',
                            600, // Waits 1s
                            'Student , Full Stack Developer', // Deletes 'None' and types 'After'
                            600, // Waits 2s
                            'Student , Full Stack Developer, App Developer', // Types 'Three' without deleting 'Two'
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={0}
                    />
                </Heading>
                <Heading textAlign='center' fontSize={24} py='2'>
                    <TypeAnimation
                        sequence={[
                            'And',
                            500, 
                            'an',  
                            500, 
                            'Ever',  
                            1000,
                            'Learning',  
                            1000,
                            'Student',  
                            () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={0}
                    />
                </Heading>
                        
            </Container>
        </Box>
    )
}
