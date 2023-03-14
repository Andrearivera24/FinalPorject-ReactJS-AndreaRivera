import React from 'react'
import {
  Center,
  Card,
  CardHeader,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
  Link,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItemCount from './ItemCount';
import { useCartContext } from '../context/ShoppingCartContext';
const ItemDetail = ({Professors}) => {
  //--> llamo a un solo documento y que renderice dinámicamente cada id.
const {id} = useParams();

console.log(id);
const [professor, setProfessor]= useState([])

useEffect(()=>{

  const db = getFirestore();
  const profRef = doc(db, "Professors",`${id}`);

  getDoc(profRef).then((snapshot)=>{
  if (snapshot.exists()){
    setProfessor(snapshot.data())
  } else{
    console.log("doesn´t exist");
  }

  });

},[])
//  const professorFilter = Professors.filter((professor)=> professor.id === id);
// // //--> creo la función on Add para pasarme la cantidad que fue elegida en el counter
// // const addToCart =(quantity)=>{
// //   console.log(`Elegiste un pack de ${quantity} clases`)
// // }
  return (
    <>{
      <div>
        <h4>name:{professor.name}</h4>
        <h4>nationality:{professor.nationality}</h4>
      </div>
    }
    </>
  )
}

export default ItemDetail;


// const instruments = querySnapshot.docs.map((doc) => ({
//   ...doc.data(),
//   id: doc.id,
// }));
// setData(instruments);


// {professorFilter.map((professor) => (
//   <div key={professor.id}>
    
//     <Center p="1rem" >
            
//             <Card className='cards'>
//                 <CardHeader>
//                     <Heading size="lg" textAlign={[ 'center' ]}>{professor.name}</Heading>
//                 </CardHeader>
    
//                 <CardBody>
//                     <Image borderRadius="lg" h="300px"src={professor.img}></Image>
//                     <Stack mt="6" spacing="3">  {/*Stack se usa para agrupar elementos y aplicar espacios entre ellos*/}
//                        <Text fontSize="xl">Nationality: {professor.nationality} </Text>
//                        <Text fontSize="l">Description: {professor.description} </Text>
//                        <Text fontSize="l">Available classes: {professor.stock} </Text>
//                        <Text color="green.600" fontSize="xl">Price: U$D {professor.price}</Text>
//                     </Stack>
//                 </CardBody>
    
//                 <Divider/>{/*Dividers are used to visually separate content in a list or group.*/}
//                 <CardFooter className="cardFooter">
//                   <ItemCount initial={1} stock={professor.stock} onAdd={addToCart}/> 
//                 </CardFooter>
//           </Card>
//         </Center> 



//   </div>
// ))

// }
