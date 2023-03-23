import React from "react";
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
  Flex,
  CardFooter,
  Container,
  Button,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemCount from "./ItemCount";
import { useCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
const ItemDetail = () => {
  //--> llamo a un solo documento y que renderice dinámicamente cada id.
  const { id } = useParams();
  const [professor, setProfessor] = useState([]);
  const { addProduct, cart, totalProducts } = useCartContext();

  useEffect(() => {
    const db = getFirestore();
    const profRef = doc(db, "Professors", `${id}`);

    getDoc(profRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProfessor(snapshot.data());
      } else {
        console.log("doesn´t exist");
      }
    });
  }, []);

  //--> creo la función on Add para pasarme la cantidad que fue elegida en el counter
  const onAdd = (quantity) => {
    addProduct(
      {
        id,
        ...professor,
      },
      quantity
    );
    console.log(`Elegiste un pack de ${quantity} clases`);
  };

  return (
    <>
      {
        <div>
          <Container maxW="container.sm" className="profContainer">
            <Flex>
              <Card className="cards" m="1rem" w="800px">
                <CardHeader>
                  <Image
                    mt="60px"
                    borderRadius="lg"
                    src={professor.img}
                  ></Image>
                </CardHeader>
                <ItemCount initial={1} stock={professor.stock} onAdd={onAdd} />
                <Center>
                  <Link to="/professors">
                    <Text mt="50px" color="gray.400" fontSize="sm">
                      See more teachers
                    </Text>
                  </Link>
                </Center>
              </Card>

              <Card className="cards" m="1rem">
                <Stack mt="25px" ml="20px" mr="20px" spacing="4">
                  {" "}
                  {/*Stack se usa para agrupar elementos y aplicar espacios entre ellos*/}
                  <Heading color="purple.700" size="lg" textAlign={["center"]}>
                    {professor.name}
                  </Heading>
                  <Text color="purple.900" fontSize="xl">
                    Nationality: {professor.nationality}{" "}
                  </Text>
                  <Text color="purple.900" fontSize="l">
                    {" "}
                    {professor.description}{" "}
                  </Text>
                  <Text color="purple.900" fontSize="l">
                    Available classes: {professor.stock}{" "}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    {" "}
                    U$D {professor.price}
                  </Text>
                </Stack>
                <Divider color="purple.500" mb="1rem" />
                {/*Dividers are used to visually separate content in a list or group.*/}
                {cart.length !== 0 && (
                  <Link to="/cart">
                    <Button size="md" colorScheme="purple" mb="1rem" ml="85px">
                      {" "}
                      Get {totalProducts() || ""} classes{" "}
                    </Button>
                  </Link>
                )}
              </Card>
            </Flex>
          </Container>
        </div>
      }
    </>
  );
};

export default ItemDetail;
