import { Box, Center, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function Hero() {
    return (
        <Box h='100vh' w='100%'
            css={{
                backgroundImage: 'url("/bg.png")',
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
                css={{
              backdropFilter : 'blur(8px)'
          }}>
                    <Heading textAlign='center'>I am Prince Patel</Heading>
                    <Text textAlign='center'>Develper By Passion.</Text>
                </Container>
        </Box>
    )
}
