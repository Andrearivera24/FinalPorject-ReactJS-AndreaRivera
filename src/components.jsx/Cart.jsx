import {
  Button,
  Container,
  Center,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/ShoppingCartContext";
import ItemCart from "./ItemCart";
import LoaderCart from "./LoaderCart";
import { useState, useEffect } from "react";

const Cart = () => {
  const [loader, setLoader] = useState(true);
  const [professorsInCart, setProfessorsInCart] = useState([]);
  const { cart, totalPrice, cleanCart } = useCartContext();

  // --> El estado del loading inicia en true para que se muestre antes de los productos = >luego con el condicionaal, solo si el loader es verdadero, se muestra el componente.
  // -->lo seteo en false al mismo tiempo que seteo el cart del context en setProfessorsInCart.

  useEffect(() => {
    setTimeout(() => {
      setProfessorsInCart([cart]);
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) {
    return (
      <>
        <LoaderCart />
      </>
    );
  }
  // Condicional para que no se renderice nada si no hay productos

  if (cart.length === 0) {
    return (
      <>
        <Center mt="250px">
          <Flex flexDir="column" alignItems="center" gap="10">
            <Heading color="purple.700">
              {" "}
              Give your Spanish some love! ♥{" "}
            </Heading>
            <Link to="/professors">
              <Button colorScheme="purple">GET YOUR PACKS</Button>
            </Link>
          </Flex>
        </Center>
      </>
    );
  }

  // --> por cada elemento en el cart mapeo el itemCart y le paso las propiedades
  return (
    <>
      <Container className="profContainer" maxW="container.lg">
        <Flex alignItems="center" justifyContent="space-around" gap="2">
          {cart.map((professor) => (
            <ItemCart key={professor.id} professorInCart={professor} />
          ))}
        </Flex>
        <Heading
          color="purple.600"
          size="md"
          textAlign={["end"]}
          mr="15px"
          mt="2rem"
        >
          TOTAL: U$D {totalPrice()}
        </Heading>
        <Flex justifyContent="end" gap="2" pt="1rem">
          <Link to="/sendorder">
            <Button w="80px" colorScheme="purple">
              Purchase
            </Button>
          </Link>
          <Button w="80px" onClick={() => cleanCart()}>
            Clean cart
          </Button>
        </Flex>
      </Container>
    </>
  );
};
export default Cart;
