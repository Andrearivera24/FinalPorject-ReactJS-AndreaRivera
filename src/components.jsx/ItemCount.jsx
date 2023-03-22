import React from 'react'
import { useState,} from 'react';
import { Container, Button, Text, Flex} from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { useCartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';



const ItemCount = ({initial, stock, onAdd}) => {
     const{cart} = useCartContext();

    const [counter, setCounter] = useState(initial);

    const increase = ()=>{
        setCounter (counter + 1)
        
    };
    const decrease = ()=>{
        setCounter (counter - 1)
    }

  return <>
<Container ml='60px'>

<Flex alignItems ='center' gap= '3'>
<IconButton
  size = "xs"
  onClick={decrease}
  isDisabled= {counter <= 1}
  variant='outline'
  colorScheme='green'
  aria-label='Send email'
  icon={<MinusIcon />}
/>


<Text fontSize="xl">{counter}</Text>

<IconButton
  size = "xs"
  onClick={increase}
  isDisabled={counter >= stock}
  variant='outline'
  colorScheme='green'
  aria-label='Send email'
  icon={<AddIcon  />}/>



</Flex>

<Button isDisabled={stock = 0} mt='5px'ml="-15px" colorScheme={'purple'} onClick={()=> onAdd(counter)} >Add to cart</Button>

       { (cart.length !== 0) && <Link to ="/cart"><Button>Cart</Button></Link> }

</Container>
 

 
 



  </>
}

export default ItemCount;

{}

