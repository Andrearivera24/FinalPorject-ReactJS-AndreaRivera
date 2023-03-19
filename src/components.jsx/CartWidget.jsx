
import { Button, ButtonGroup, } from '@chakra-ui/react'
import { useCartContext } from '../context/ShoppingCartContext';

const CartWidget =() =>{
       const{totalProducts} = useCartContext(); //--> si el el total de los productos es diferente de cero, entonces se ejecuta la función.

        return <div className ="cart">
                <Button size='md' colorScheme='purple' mt='10px'> <i className="fa-solid fa-cart-shopping"></i> <span>{totalProducts()||''}</span></Button>

               </div>

         };
 export default CartWidget;