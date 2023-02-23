import Item from "./Item";
import { Container } from '@chakra-ui/react'

const ItemList = ({Professors})=>{ // Desestructuro las props que me pasó el itemListContainer
    console.log(Professors);
    return (
        <>
         <Container maxW="container.md">
            { // corchetes para entrar en js
            Professors.map((professor)=>( //por qué parentesis y no llaves? // mapeo la lista, así por cada profesor hará un componente "item" y le pasará las propiedades a este para que las use en las cards. 
                <Item  key={professor.id} 
                       id ={professor.id}
                       name ={professor.name}
                       price ={professor.price}
                       nationality={professor.nationality}
                       stock = {professor.stock}    
                       description={professor.description} 
                       img = {professor.img}    
                
                />
            ))
            }
        </Container>
      
         </>
    )

}

export default ItemList; 