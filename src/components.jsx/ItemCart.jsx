import { useCartContext } from "../context/ShoppingCartContext"
import { Button, Heading, Container, Card, Text, Stack, Divider, Image, Flex, CardFooter} from '@chakra-ui/react'


const ItemCart = ({professorInCart}) => {
  const {removeProduct} =  useCartContext();

  return (
    <>
    <Container p='2rem'>
      {
            <Card p='1rem'>
            <Stack direction='row' h='100px' >
                <Divider orientation='vertical'/>
                <Image borderRadius="md "src={professorInCart.img}></Image>
             
                </Stack>    

                <Text> Name: {professorInCart.name}</Text>
                <Text> Nationality: {professorInCart.nationality}</Text>
                <Text> Pack: {professorInCart.quantity} classes</Text>
                <Text> Price: {professorInCart.price}</Text>
                <Text> SubTotal: {professorInCart.quantity * professorInCart.price}</Text>
            
                <CardFooter ml='60px'>
                <Flex gap='3'>
                <Button w='80px' onClick={()=> removeProduct(professorInCart.id)}>Delete</Button>
                
                </Flex>
                </CardFooter>
            </Card>
   }
    </Container>

    </>)
}

export default ItemCart