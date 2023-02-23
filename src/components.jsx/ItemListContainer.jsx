import {Text } from '@chakra-ui/react'
import Professors from "../data.json"
import ItemList from './ItemList';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const ItemListContainer =() =>{
const {nationality} = useParams();  
console.log(nationality);  
const [professor, setProfessor] = useState([])
console.log(professor);
// llamo dentro del useEffect a la función para que solo traiga la data UNA VEZ (Con un arrary vacío como segundo parámetro)
useEffect(()=>{
async function fetchProfessors (){
    try {
        const response = await fetch (Professors);
        const data = await response.json();
        setProfessor(data)
    } 
    catch (err) {
    }
}

fetchProfessors()   
},[])
// 

const natFilter = Professors.filter((professor)=> professor.nationality === nationality ); //Filto la nacionalidad en específico con el parámetro antes usado.
   console.log(natFilter);
//le paso las propiedades, professors y nationality a itemList
 return (
<div>
    { nationality? <ItemList Professors={natFilter}/>: <ItemList Professors={Professors} /> }
</div>
 )
 
   
 


 };

 
 export default ItemListContainer;
