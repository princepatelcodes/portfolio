import { Box, Center, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Blogs from '../components/Blogs'
import Navbar from '../components/Navbar'
import Education from '../components/Education'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />


    <Container width={['100%','100%','75%','75%']} mx='auto'>

      <Flex bg='whatsapp.100' my='12' data-aos="fade-up" data-aos-duration='1000' shadow='sm' p='12' rounded='2xl' flexDirection={['column', 'column', 'row', 'row']} justifyContent='space-between' alignItems='center'>
        <Box width={['80%', '80%', '40%', '40%']}>
          <Image alt='Live test' src='/test.png' width='100' />
        </Box>
        <Box width={['100%', '100%', '50%', '50%']}>
          <Heading textAlign={['center', 'center', 'end', 'end']}>Join My Journey of Building a Product</Heading>
          <Text py='2' textAlign={['center', 'center', 'end', 'end']}> This is where I share Logs about</Text>
        </Box>
      </Flex>
    </Container>


      <Box id='education'></Box>
      <VStack my='2'>
        <Heading fontSize='4xl' fontWeight='800'>My Education</Heading>
        <Text>Here is my educational journey 😇.</Text>
        <Box id='blogs'></Box>
        <Education />
        {/* <Blogs /> */}
      </VStack>
    </>
  )
}
