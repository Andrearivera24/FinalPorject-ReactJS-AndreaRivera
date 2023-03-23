import { useCartContext } from "../context/ShoppingCartContext"
import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Button, CardBody,Heading, CardHeader, Container, Card, Text, Center, Image, } from '@chakra-ui/react'


const ItemCart = ({professorInCart}) => {
  const {removeProduct} =  useCartContext();

  return (
    <>
     <Container  m='auto'>   
      {
         <Center>
          <Card className='cards' p='1rem'>
                 <Heading color='purple.700' size="lg" textAlign={[ 'center' ]}>{professorInCart.name}</Heading>

                  <CardHeader>
                  <Image  borderRadius="md" src={professorInCart.img}></Image>
                  </CardHeader>

                  <CardBody mt='-30px'>
                    <Text color='purple.900'> Pack: {professorInCart.quantity} classes</Text>
                    <Text color='purple.900'> U$D: {professorInCart.price}</Text>
                    <Text color='purple.900'> SubTotal: {professorInCart.quantity * professorInCart.price}</Text>
                  </CardBody>
                  <Center>
                   <IconButton colorScheme='purple' icon={< DeleteIcon/>} onClick={()=> removeProduct(professorInCart.id)}></IconButton>

                  </Center>
                            
            </Card>
          </Center>         
   }  
    </Container>

    </>)
}

export default ItemCart