import Item from "./Item";
import { Container, Flex, Center, Heading } from "@chakra-ui/react";
import { useCartContext } from "../context/ShoppingCartContext";
import LoaderCart from "./LoaderCart";
import { useState, useEffect } from "react";

const ItemList = ({ Professors }) => {
  // Desestructuro las props que me pasó el itemListContainer

  const [loader, setLoader] = useState(true);
  const [professorsInCart, setProfessorsInCart] = useState([]);
  const { cart, totalPrice, cleanCart } = useCartContext();

  // --> El estado del loading inicia en true para que se muestre antes de los productos = >luego con el condicionaal, solo si el loader es verdadero, se muestra el componente.
  // -->lo seteo en false al mismo tiempo que seteo el cart del context en setProfessorsInCart.

  useEffect(() => {
    setTimeout(() => {
      setProfessorsInCart([cart]);
      setLoader(false);
    }, 500);
  }, []);

  if (loader) {
    return (
      <>
        <LoaderCart />
      </>
    );
  }

  return (
    <>
      <Center>
        <Heading className="Title" mt="1rem" color="purple.700" fontSize="5xl">
          {" "}
          Choose your teacher!{" "}
        </Heading>
      </Center>
      <Container maxW="container.xl" className="profContainer">
        <Flex alignItems="center" justifyContent="space-around" gap="2">
          {
            // corchetes para entrar en js
            Professors.map(
              (
                professor //por qué parentesis y no llaves? // mapeo la lista, así por cada profesor hará un componente "item" y le pasará las propiedades a este para que las use en las cards.
              ) => (
                <Item
                  key={professor.name}
                  id={professor.id}
                  name={professor.name}
                  price={professor.price}
                  nationality={professor.nationality}
                  stock={professor.stock}
                  description={professor.description}
                  img={professor.img}
                />
              )
            )
          }
        </Flex>
      </Container>
    </>
  );
};

export default ItemList;
