import { useCartContext } from "../context/ShoppingCartContext"
import { Button, Container, Card, Text, Stack, Divider, Image, Flex, CardFooter} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const ItemCart = ({professorInCart}) => {
  const {removeProduct} =  useCartContext();

  return (
    <>
    <Container maxW="xl" p='5rem'>
      {
            <Card p='1rem'>
            <Stack direction='row' h='100px' >
                <Divider orientation='vertical'/>
                <Image borderRadius="sm "src={professorInCart.img}></Image>
             
                </Stack>    

                <Text> Name: {professorInCart.name}</Text>
                <Text> Nationality: {professorInCart.nationality}</Text>
                <Text> Pack: {professorInCart.quantity} classes</Text>
                <Text> Price: {professorInCart.price}</Text>
                <Text> SubTotal: {professorInCart.quantity * professorInCart.price}</Text>
            
                <CardFooter ml='60px'>
                <Flex gap='3'>
                <Button w='100px' onClick={()=> removeProduct(professorInCart.id)}>Delete</Button>
                <Link to ='/sendorder'><Button w='100px'>Purchase</Button></Link>
                </Flex>
                </CardFooter>
            </Card>
   }
    </Container>
    </>)
}

export default ItemCart