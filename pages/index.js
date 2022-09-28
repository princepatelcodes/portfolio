import { Center, Heading, Image, Text, VStack } from '@chakra-ui/react' 
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
      <Center>
        <VStack>
          <Heading>Prince Patel</Heading>
          <Text>Finally Added my Website to github page </Text>
          <Image src="https://c.tenor.com/918EwUygx1IAAAAC/mission-impossible-we-got-this.gif" alt='Success' />
        </VStack>
      </Center>
    </>
  )
}
