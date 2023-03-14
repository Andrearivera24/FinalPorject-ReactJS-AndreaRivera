import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ItemDetailContainer from "./components.jsx/ItemDetailContainer";
import ItemListContainer from "./components.jsx/ItemListContainer";
import Welcome from "./components.jsx/welcome";
import NavBar from "./components.jsx/NavBar";
import Cart from "./components.jsx/Cart";

import ShoppingCartContextProvider from "./context/ShoppingCartContext";

const App =() =>{

   // traigo el Provider que le pasará las funciones de set y setCounter a todos sus hijos, es decir a todos los que envuelva. 

    return <div>
      <ShoppingCartContextProvider>
        <BrowserRouter> 
           <NavBar/>

              <Routes>
               <Route exact path = "/" element= {<Welcome/>} />
               <Route exact path ="/professors" element = {<ItemListContainer/>}/>
               <Route exact path ="/nationality/:nationality" element = {<ItemListContainer/>}/> 
               <Route exact path ="/item/:id" element = {<ItemDetailContainer/>}/>
               <Route exact path = "/cart" element= {<Cart/>} />
             </Routes>

        </BrowserRouter>
        </ShoppingCartContextProvider>

      
       
           </div>

};
export default App;

