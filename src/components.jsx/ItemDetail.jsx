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
import ItemCount from './ItemCount';


const ItemDetail = ({Professors}) => {
  const {id} = useParams();
  const professorFilter = Professors.filter((professor)=> professor.id == id);
  
  return (
    <>
    {professorFilter.map((professor) => (
      <div key={professor.id}>
        
        <Center p="1rem" >
                
                <Card className='cards'>
                    <CardHeader>
                        <Heading size="lg" textAlign={[ 'center' ]}>{professor.name}</Heading>
                    </CardHeader>
        
                    <CardBody>
                        <Image borderRadius="lg" h="300px"src={professor.img}></Image>
                        <Stack mt="6" spacing="3">  {/*Stack se usa para agrupar elementos y aplicar espacios entre ellos*/}
                           <Text fontSize="xl">Nationality: {professor.nationality} </Text>
                           <Text fontSize="l">Description: {professor.description} </Text>
                           <Text fontSize="l">Available classes: {professor.stock} </Text>
                           <Text color="green.600" fontSize="xl">Price: U$D {professor.price}</Text>
                        </Stack>
                    </CardBody>
        
                    <Divider/>{/*Dividers are used to visually separate content in a list or group.*/}
                    <CardFooter className="cardFooter">
                      <ItemCount/> 
                    </CardFooter>
              </Card>
            </Center> 



      </div>
    ))

    }
    </>
  )
}

export default ItemDetail;

