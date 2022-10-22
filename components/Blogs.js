import { Box, Flex, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Blogs() {
  return (
    <>
    <Heading>Here are some Blogs</Heading>
    <Text>This is rendered using a blogs renderer that I created myself 😇.</Text>
    {/*  */}
    <SimpleGrid p='6' columns={[1,2,3,3]} spacing='4'>
 
   
    <Box 
    sx={{
        bg:'gray.100',
       borderRadius:'12',
    }}
    >
        <Flex direction={'column'}>
            <Image  borderTopRadius={12}  height={'300px'} objectFit='cover' w="100%" src='https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=960'>
            </Image>
            <VStack spacing={4} p='4'>

            <Heading as='h2' fontSize={[20,20,24,28]}   >Trying to get better with machine learning</Heading>
            <Text>here is siome description about he blog that i have writtredn ands iasnakslja sdkjaskjsdfk jsdk jsdflksd</Text>
            </VStack>
        </Flex>
    </Box>
 
   
    <Box 
    sx={{
        bg:'gray.100',
       borderRadius:'12',
       _hover : {
        bg:'gray.300',
        cursor:'pointer',
       }
    }}
    >
        <Flex direction={'column'}>
            <Image  borderTopRadius={12}  height={'300px'} objectFit='cover' w="100%" src='https://www.opensourceforu.com/wp-content/uploads/2022/06/AIML-and-DL-Whats-the-Difference.jpg'>
            </Image>
            <VStack spacing={4} p='4'>

            <Heading as='h2' fontSize={[20,20,24,28]}   >Trying to get better with machine learning</Heading>
            <Text>here is siome description about he blog that i have writtredn ands iasnakslja sdkjaskjsdfk jsdk jsdflksd</Text>
            </VStack>
        </Flex>
    </Box>
 
   
    <Box 
    sx={{
        bg:'gray.100',
       borderRadius:'12',
    }}
    >
        <Flex direction={'column'}>
            <Image  borderTopRadius={12}  height={'300px'} objectFit='cover' w="100%" src='https://cdn-wordpress-info.futurelearn.com/wp-content/uploads/what-is-machine-learning-header.jpg'>
            </Image>
            <VStack spacing={4} p='4'>

            <Heading as='h2' fontSize={[20,20,24,28]}   >Trying to get better with machine learning</Heading>
            <Text>here is siome description about he blog that i have writtredn ands iasnakslja sdkjaskjsdfk jsdk jsdflksd</Text>
            </VStack>
        </Flex>
    </Box>

    </SimpleGrid>
    </>
  )
}
