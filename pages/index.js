import { Box, Center, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Blogs from '../components/Blogs'
import Navbar from '../components/Navbar'
import Education from '../components/Education'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Box id='education'></Box>
      <VStack my='2'>
        <Heading fontSize='4xl' fontWeight='800'>My Education</Heading>
        <Text>Here is my educational journey 😇.</Text>
        <Box id='blogs'></Box>
        <Education />
        <Blogs />
      </VStack>
    </>
  )
}
