
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
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
    Flex,
  } from '@chakra-ui/react'

const Item =({id, name, stock, nationality, img})=>{ // desestructuro las propiedades que me pasó "ItemList"
    return (// Creo aquí las cards en donde usaré las propiedades.
        <>
       
            <div key={id}> 
            <Center p="1rem" >
                
                <Card className='cards'>
                    <CardHeader>
                        <Heading size="lg" textAlign={[ 'center' ]}>{name}</Heading>
                    </CardHeader>

                    <CardBody>
                        <Image borderRadius="lg" h="300px"src={img}></Image>
                        <Stack mt="6" spacing="3">  {/*Stack se usa para agrupar elementos y aplicar espacios entre ellos*/}
                           <Text fontSize="xl">Nationality: {nationality} </Text>
                           <Text fontSize="l">Available classes: {stock} </Text>
                        </Stack>
                    </CardBody>

                    <Divider/>{/*Dividers are used to visually separate content in a list or group.*/}
                    <CardFooter className="cardFooter">
                        <Center> {/*Center is a layout component that centers its child within itself.*/}
                           <Link to={`/item/${id}`}><Button variant="solid" colorScheme="purple" ml="60px">Details</Button></Link>
                        </Center>
                    </CardFooter>
              </Card>

                
                
            </Center>
        </div>
     </>
    );

};

export default Item; 
