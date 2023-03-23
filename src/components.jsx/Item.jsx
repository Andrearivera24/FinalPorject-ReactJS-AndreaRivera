import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";

const Item = ({ id, name, stock, nationality, img }) => {
  // desestructuro las propiedades que me pasó "ItemList"

  return (
    // Creo aquí las cards en donde usaré las propiedades.
    <>
      <div key={id}>
        <Center p="1rem">
          <Card className="cards" w="310px" h="410px">
            <CardHeader>
              <Heading
                color="purple.700"
                mb="15px"
                size="lg"
                textAlign={["center"]}
              >
                {name}
              </Heading>
              <Image borderRadius="lg" src={img} ml="auto" mr="auto"></Image>
            </CardHeader>
            <Stack mt="-15px" ml="auto" mr="auto">
              <Text color="purple.900" fontSize="xl">
                Nationality: {nationality}{" "}
              </Text>
              <Text color="purple.900" fontSize="l">
                Available classes: {stock}{" "}
              </Text>
            </Stack>
            <Divider color="purple.500" mt="5px" mb="22px" />
            {/*Dividers are used to visually separate content in a list or group.*/}
            <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="purple" ml="110px" size="md">
                Details
              </Button>
            </Link>
          </Card>
        </Center>
      </div>
    </>
  );
};

export default Item;
