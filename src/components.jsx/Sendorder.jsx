
import { useState } from 'react'
import {collection, getFirestore, addDoc} from "firebase/firestore"
import { useEffect } from 'react';
import Swal from 'sweetalert2';
// CREAR UN FORMULARIO QUE ENVÍE INFORMACIÓN AL FORMULARIO Y QUE ME DEVUELVA EL ID. 


const Sendorder = () => { 

  
  // creo 3 estados, id, name y email. 
  const [orderId, setOrderId]= useState(null);
  const [name, setName]= useState("");
  const [lastname, setLastName]= useState("");
  const [mail, setMail]= useState("");
   
  // luego traigo la base de datos de mi "firebase" y creo la colección en la base de datos con el nombre "order" 

   const db = getFirestore(); //--> (hook)

   // creo el evento del formulario "handleSubmit"

   const handleSubmit = (e)=>{
    e.preventDefault()// para que no se recargue la página automáticamente
    addDoc(ordersCollection, order).then(({id})=> setOrderId(id))//--> (hook) agrego un documento en la colección creada, con el nombre order, luego con una promesa, le pido que me devuelva el id.
    
    setTimeout(()=>{
      Swal.fire({
        title: "Success",
        icon: "success",
        text: ` Your track number is: ${id}`
      })
    })

   };

   const order = { // la constante order es un objeto con los datos del usuario.
    name,
    lastname, 
    mail,
 
   };

   const ordersCollection = collection(db, "orden"); // --> (hook)




// creo el formulario que tendrá un evento "onSubmit = handleSumbmit", cuyos inputs en onChange setearán la información que ingresó el usuario. 
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Last name' onChange={(e)=> setLastName(e.target.value)}/>
            <input type="text" placeholder='Email' onChange={(e)=> setMail(e.target.value)}/>
            <button type='submit'>Enviar información</button>

        </form>

        <p>numero de orden:{orderId}</p>





    </div>
  )
}

export default Sendorder;