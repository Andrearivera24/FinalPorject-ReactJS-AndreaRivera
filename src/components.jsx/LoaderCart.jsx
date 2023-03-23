import { Spinner,Text, Container, Center } from '@chakra-ui/react'

// rendrizado condicional basado en el estado de un componente 

const LoaderCart = () => {
  return (
<>
<Container>
  <Center mt='260px'>
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='purple.500'
    size='xl'
    />
 </Center>

</Container>
  </>
  )
}

export default LoaderCart;