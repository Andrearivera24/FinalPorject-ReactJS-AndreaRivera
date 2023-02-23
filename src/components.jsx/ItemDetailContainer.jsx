// Acá es la misma consignda que en ItemListContainer, con use effect llamo al fetch y guardo en el useState el array recibido 

import React from 'react'
import { useState, useEffect} from 'react';
import Professors from '../data.json';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
 
const [professor, setProfessor] = useState([])
console.log(professor);

useEffect(()=>{
 async function fetchProfessor() {
    try {
        const response = await fetch(Professors)
        const data = await response.json()
        setProfessor(data)     
    } catch (error) {}
 }
fetchProfessor()
} , [])

// pasaré "Professors" como propiedades a ItemDetail
  return <>
  <ItemDetail Professors ={Professors}/>
  </>
    
}

export default ItemDetailContainer;