

import React from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
const [professors, setProfessors] = useState([]);

useEffect(()=>{

  const db = getFirestore();

  const professorsCollection = collection(db, "Professors");

  getDocs (professorsCollection).then((snapshot)=>{
    const professors = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProfessors(professors)
  });

},[])

// pasaré "professors" como propiedades a ItemDetail
  return <>
  <ItemDetail Professors ={professors}/>
  </>
    
}

export default ItemDetailContainer;
