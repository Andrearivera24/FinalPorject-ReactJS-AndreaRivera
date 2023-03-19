import {Text } from '@chakra-ui/react'
import ItemList from './ItemList';
import React, { useState, useEffect } from "react";
import{collection, getDocs, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom';

const ItemListContainer =() =>{
const {nationality} = useParams();  
const [professors, setProfessors] = useState([])
// llamo dentro del useEffect a la función para que solo traiga la data UNA VEZ (Con un arrary vacío como segundo parámetro)
useEffect(()=>{

    const db = getFirestore();
    const itemCollection = collection(db, "Professors");
    
    getDocs(itemCollection). then((snapshot)=>{
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // const docs = snapshot.docs.map((doc)=> doc.data());
        setProfessors(docs);
    })

// async function fetchProfessors (){
//     try {
//         const response = await fetch (Professors);
//         const data = await response.json();
//         setProfessor(data)
//     } 
//     catch (err) {
//     }
// }

// fetchProfessors()   
},[])
// 

const natFilter = professors.filter((professor)=> professor.nationality === nationality ); //Filtro la nacionalidad en específico con el parámetro antes usado.
//le paso las propiedades, professors y nationality a itemList
 return (
<div>
    { nationality? <ItemList Professors={natFilter}/>: <ItemList Professors={professors} /> }
</div>
 )
 


 };

 
 export default ItemListContainer;
