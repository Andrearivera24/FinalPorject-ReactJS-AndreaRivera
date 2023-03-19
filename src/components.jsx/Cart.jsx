import { Button, Container, Card, Text, Stack, Divider, Image, Flex, CardFooter} from '@chakra-ui/react'
import { useCartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
const Cart = () => {
  const { cart, totalPrice, removeProduct }= useCartContext();

  console.log(cart.map(prod=> prod.id));

  
  if(cart.length === 0){
    return (
      <>
      <Text>Your cart is empty</Text>
      <Link to ='/professors'>
       <Button>Purchase</Button>
      </Link>
      </>
    )
  }
// --> por cada elemento en el cart mapeo el itemCart y le paso las propiedades
  return (
    <>
    <Container maxW="xl" p='5rem'>
      {
        cart.map((product)=>(
          <div key={product.id}>
            <Card p='1rem'>
            <Stack direction='row' h='100px' >
                <Divider orientation='vertical'/>
                <Image>{product.img}</Image>
                </Stack>    

                <Text> Name: {product.name}</Text>
                <Text> Nationality: {product.nationality}</Text>
                <Text> Pack: {product.quantity} classes</Text>
                <Text> Price: {product.price}</Text>
                <Text> SubTotal: {product.quantity * product.price}</Text>
            
                <CardFooter ml='60px'>
                <Flex gap='3'>
                <Button w='100px' onClick={()=> removeProduct(product.id)}>Delete</Button>
                <Link to ='/sendorder'><Button w='100px'>Purchase</Button></Link>
                </Flex>
                </CardFooter>
            </Card>
          </div>
        ))  }
    </Container>
    </>)}
export default Cart;