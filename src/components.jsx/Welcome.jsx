import React from 'react'
import { Heading, Center, Box, Image,Text } from "@chakra-ui/react";
import Logo from '../assets/logo.jpg'


const Welcome = () => {
  return <>
    <Center>
      <Box>
        <Image src={Logo} />
        <Heading ml ="50px">1-on-1 Spanish Tutoring</Heading>
        <Text ml="20px"fontSize='3xl'>Spanish classes with native teachers</Text>
      </Box>
    </Center>

    </>
  
}

export default Welcome ;