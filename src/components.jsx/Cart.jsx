import { Button, Container, Card, Text, Heading, Stack, Divider, Image, Flex, CardFooter} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/ShoppingCartContext';

import ItemCart from './ItemCart';
import LoaderCart from './LoaderCart';
import { useState, useEffect } from 'react';

const Cart = () => {
const [loader, setLoader]= useState(true);
const [professorsInCart, setProfessorsInCart]= useState([])
const {cart, totalPrice}= useCartContext();


// --> El estado del loading inicia en true para que se muestre antes de los productos = >luego con el condicionaal, solo si el loader es verdadero, se muestra el componente.  
// -->lo seteo en false al mismo tiempo que seteo el cart del context en setProfessorsInCart. 

useEffect(()=>{
  setTimeout(()=>{
    setProfessorsInCart([cart]);
    setLoader(false);
  }, 1000)
}, []);

if (loader){
  return <LoaderCart/>
}


// Condicional para que no se renderice nada si no hay productos

if (cart.length === 0){
return(
  <> 
   <Text>No such elements</Text>
  <Link to ='/professors'><Button>Purchase</Button></Link> 
  </>
 
)
 



}

  // --> por cada elemento en el cart mapeo el itemCart y le paso las propiedades
  return (
    <>
    <Container className='cartContainer' maxW='container.xl'  m='auto' mt='5rem'>
      <Flex alignItems ='center' justifyContent='space-around' gap= '2'>
      {
      cart.map(professor =>    
          <ItemCart key={professor.id} professorInCart={professor}/>
        )
       
      }
      </Flex>
      <Flex justifyContent='end' gap= '10' >   
      <Heading size="md">Total:{totalPrice()}</Heading>
      <Link to ='/sendorder'><Button w='80px'>Purchase</Button></Link>
      </Flex>
    </Container>


    </>
  )

  


  }
export default Cart;