import { Button, Container, Card, Text, Stack, Divider, Image, Flex, CardFooter} from '@chakra-ui/react'
import { useCartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
const Cart = () => {
  const { cart, totalPrice, removeProduct }= useCartContext();{}

  console.log(cart);

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
    {
      cart.map((professor) =>(
        <div key={professor.id}>
          <ItemCart  professorInCart={professor}/>
        </div>))
        
        
    }
    
    </>
  )



  }
export default Cart;