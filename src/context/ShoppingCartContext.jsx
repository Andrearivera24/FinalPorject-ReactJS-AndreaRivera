// Acá crearé el estado 
import { createContext, useState, useContext } from "react";
const CartContext = createContext(null);
export const useCartContext =()=> useContext(CartContext) //hook personalizado para no tener que escribir useContext en todos lados 


const ShoppingCartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]); // array vacío para luego inyectar información
//Creo acá 4 funciones para el carrito 1. true or false si hay un producto ene l carrito 2. limpiar carrito 3. remover un producto del carrito 4. agregar un producto al carrito (sin duplicado)

// --> 1. limpiar los productos del carrito. 
// const cleanCart = ()=> setCart([])

// --> 2. true or false si hay producto o no en el carrito. 
// const isInCart = (id)=> cart.find(professor => professor.id === id) ? true:false;

// // --> 3. Borrar el carrito 
// const removeProduct = (id) => setCart(cart.filter(professor => professor.id !== id)) //--> Esto setea un nuevo array con todos los productos que no tengan ese ID. 

// // --> 4. Agregar producto al carrito (esta función se va a utilizar en el itemDetail)
// const addProduct = (item, newQuantity)=>{ //--> son los argumentos que pasé en el itemDetail
// // creo un nuevo carrito pero filtrado donde estén todos los productos menos el que coincida con ese producto 
//  const newCart = cart.filter(professor.id !== item.id);
//  newCart.push ({...item, quantity: newQuantity});//--> hace un push desparramendo todo item y le agrega la nueva cantidad
//  setCart(newCart) //--> setea el nuevo carrito
//     }
//  console.log('carrito ', cart);
  


  return (
    <CartContext.Provider value={{cart, setCart}}>
       {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartContextProvider;


// HACER QUE NOS DIGA EL SUBTOTAL Y EL TOTAL. 
//-->> TOTAL PRICE: FUNCIÓN REDUCE CON VALOR INICIAL 0,(previo, actual), previo es un acumulador, por eso comienza en 0.