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
    <Box h='60'></Box>
      <Center>
        <VStack>
          <Heading>Prince Patel</Heading>
          <Text>Finally Added my Website to github page </Text>
          <Image src="https://c.tenor.com/918EwUygx1IAAAAC/mission-impossible-we-got-this.gif" alt='Success' />
            <Heading id='education'>My Education</Heading>
            <Text>Here is my educational journey 😇.</Text>
            <Education />
            <Blogs />
          <Box
          sx={{
            height:'800px'
          }}
          >

          </Box>
          <Image src="https://c.tenor.com/918EwUygx1IAAAAC/mission-impossible-we-got-this.gif" alt='Success' />
       
        </VStack>
      </Center>
    </>
  )
}
