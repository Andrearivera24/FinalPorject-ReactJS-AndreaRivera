import React from 'react'
import { useState, useEffect} from 'react';
import { Container, Button, ButtonGroup, Heading, Text, Flex, Center } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, MinusIcon } from '@chakra-ui/icons'
const ItemCount = () => {

    const [counter, setCounter] = useState(0);

    const sumar = ()=>{
        setCounter (counter + 1)
    };
    const restar = ()=>{
        setCounter (counter - 1)
    }


  

  return <>
  
  <Container ml="50px">
<Flex alignItems ='center' gap= '2'>

    <IconButton
  size = "xs"
  onClick={sumar}
  variant='outline'
  colorScheme='green'
  aria-label='Send email'
  icon={<AddIcon  />}/>

<Text fontSize="xl">{counter}</Text>

<IconButton
  size = "xs"
  onClick={restar}
  variant='outline'
  colorScheme='green'
  aria-label='Send email'
  icon={<MinusIcon />}
/>

</Flex>
  
     
</Container>
 

 
 



  </>
}

export default ItemCount