
import { Button, ButtonGroup, } from '@chakra-ui/react'
import { useCartContext } from '../context/ShoppingCartContext';


const CartWidget =() =>{
       const{ totalProducts} = useCartContext(); 

        return (
        <>
        <div className ="cart">
        <Button size='md' colorScheme='purple' mt='10px'> <i className="fa-solid fa-cart-shopping"></i> <span>{totalProducts()||''}</span></Button>
        </div>
       </>)

         };
 export default CartWidget;