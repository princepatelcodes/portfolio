import { Box, Flex, Heading, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { GrInstagram, GrFacebook, GrLinkedin, GrGithub } from 'react-icons/gr'
import { FaChevronRight } from 'react-icons/fa'

const links = [
    {
        'name': "Instagram",
        'href': 'https://www.instagram.com',
        'icon': <GrInstagram size='28' />
    },
    {
        'name': "Facebook",
        'href': 'https://www.instagram.com',
        'icon': <GrFacebook size='28' />
    },
    {
        'name': "Linkedin",
        'href': 'https://www.instagram.com',
        'icon': <GrLinkedin size='28' />
    },
    {
        'name': "Github",
        'href': 'https://www.instagram.com',
        'icon': <GrGithub size='28' />
    },
];

export default function Profile() {
    return (
        <Flex
            height='100vh'
            width='100%'
            sx={{
                backgroundImage: "url('https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
            flexDirection='column'
            alignItems='center'
            justifyContent='start'
        >

            <Box
                width={'90%'}
                bgColor={'whiteAlpha.600'}
                p='5'
                rounded='2xl'
                my='8'
                css={{
                    backdropFilter: 'blur(20px)'
                }}
            >
                <Heading fontSize='2xl' color='gray.900' textAlign='center'>Prince Patel</Heading>
            </Box>

            <Box flex='1' width={'90%'} mx='auto'>
                <SimpleGrid columns={[1, 1, 2, 3]} spacing='6' width='100%' mx='auto'>
                    {links.map((link) => (
                        <Link key={link.name} href={link.href}
                            textDecoration='none'
                            _hover={{
                                textDecoration: 'none'
                            }}
                        >
                            <Box bgColor={'white'} p='6' rounded='2xl'
                                _hover={{
                                    bgColor: 'whiteAlpha.800',
                                    cursor: 'pointer',
                                    backdropFilter: 'blur(12px)'
                                }}
                                _groupHover={{
                                    fontWeight: '800'
                                }}
                            >
                                <HStack spacing='4'>
                                    {link.icon}
                                    <Text width={'100%'} fontSize={[18, 18, 20, 22]}   > {link.name}</Text>
                                    <FaChevronRight size='24'></FaChevronRight>
                                </HStack>
                            </Box>
                        </Link>
                    ))}
                </SimpleGrid>
            </Box>

            <Box width='fit-content' my='2' bgColor='whitesmoke' px='6' py='2' rounded='lg'>
                <HStack justifyContent='center' spacing='1'>

                    <Text align='center'>Made By</Text>
                    <Link
                        to=''
                        textDecoration='none'
                        _hover={{
                            textDecoration: 'none'
                        }}>
                        <Text align='center'>Prince Patel</Text>
                    </Link>
                    <Text align='center'>With Love ❤️</Text>
                </HStack>
            </Box>

        </Flex>
    )
}
