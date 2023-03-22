import { Spinner,Text, Container, Center } from '@chakra-ui/react'

// rendrizado condicional basado en el estado de un componente 

const LoaderCart = () => {
  return (
<>
<Container>
<Text>Loading...</Text>
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  />
</Container>
  </>
  )
}

export default LoaderCart;