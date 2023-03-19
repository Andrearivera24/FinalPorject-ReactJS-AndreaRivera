// Acá crearé el estado 
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { createContext, useState, useEffect, useContext } from "react";
const CartContext = createContext(null);
export const useCartContext =()=> useContext(CartContext) // hook personalizado para no tener que escribir useContext en todos lados 


const ShoppingCartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]); 
//Creo acá las funciones para el carrito 

// --> 1. limpiar los productos del carrito. 
 const cleanCart = ()=> setCart([])



// --> 2. Borrar el carrito  
const removeProduct = (id) => setCart(cart.filter(professor => professor.id !== id)) //--> Esto setea un nuevo array con todos los productos que no tengan ese ID. 

// --> 3. true or false si hay producto o no en el carrito. 
 const isInCart = (id)=> cart.find(professor => professor.id === id) ? true : false;

//--> agregar producto al carrito. 

const addProduct=(item, quantity)=>{

     if(isInCart(item.id)){
      setCart(cart.map(professor => {
        return professor.id === item.id? {...professor, quantity: professor.quantity + quantity}: professor
      }));

     }else {
      setCart ([...cart,{...item,quantity}]);
     }
}



// --> 5. Total de productos, para ponerlo con el número spaneado del cartWidget.
const totalProducts = ()=> cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);  // arranca en cero y empieza a sumar



// --> 6. Precio total

const totalPrice = () => {
  return cart.reduce((prev, act)  => prev + act.quantity * act.price, 0)
}// el precio total es una funcion reduce, con una función con valor incial "0", el prev es un acumulador, por cada elemendo ejecuta esa función y el resultado se acumular en prev. 




  return (
    <CartContext.Provider value={{cart, 
    setCart, 
    cleanCart,
    removeProduct, 
    addProduct, 
    totalPrice, 
    totalProducts, 
    isInCart}}>
       {children}
    </CartContext.Provider>
  )
}

export default ShoppingCartContextProvider;




// // --> 4. Agregar producto al carrito (en el itemDetail)
// const addProduct = (item, quantity)=>{ //--> son los argumentos que pasé en el itemDetail dentro de la función "onAdd"
//   let newCart; // creo nuevo carrito
//   let product = cart.find(product=> product.id === item.id); //para encontrar el producto
 
//      if (product){
//       product.quantity += quantity; // si lo encuentro con += le sumo la cantidad a la que ya tenía
//       newCart = [...cart]; // nuevo arrary, 
//      } else {// si no lo encuentro, es porque está nuevo, entonces creo un producto nuevo
//        product = {...item, quantity: quantity}; 
//        newCart = [...cart, product]
//       }
//   setCart(newCart) //--> seteo el nuevo carrito.
//  }
 














