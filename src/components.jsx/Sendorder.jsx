import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useCartContext } from "../context/ShoppingCartContext";

// CREAR UN FORMULARIO QUE ENVÍE INFORMACIÓN AL FORMULARIO Y QUE ME DEVUELVA EL ID.

const Sendorder = () => {
  const { cart } = useCartContext();
  // creo 3 estados, id, name y email.
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");

  // luego traigo la base de datos de mi "firebase" y creo la colección en la base de datos con el nombre "order"

  const db = getFirestore();

  const order = {
    client: {
      // la constante order es un objeto con los datos del usuario.
      Name: name,
      Lastname: lastname,
      Email: mail,
      SelectedTeacher: cart,
      Comment: comment,
    },
  };

  const ordersCollection = collection(db, "orden y cart"); // --> (hook)

  // creo el evento del formulario "handleSubmit"

  const handleSubmit = (e) => {
    e.preventDefault(); // para que no se recargue la página automáticamente
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id)); //--> (hook) agrego un documento en la colección creada, con el nombre order, luego con una promesa, le pido que me devuelva el id.
  };

  //validación de ID, solo si orderId es true, se activa el sweet alert
  orderId &&
    Swal.fire({
      title: "Success",
      icon: "success",
      text: `Thank you ${name}, your track number is: ${orderId}`,
    });

  // creo el formulario que tendrá un evento "onSubmit = handleSumbmit", cuyos inputs en onChange setearán la información que ingresó el usuario.
  return (
    <>
      <div>
        <Center>
          <Heading
            className="Title"
            mt="1rem"
            color="purple.700"
            fontSize="4xl"
          >
            Checkout!
          </Heading>
        </Center>

        <form onSubmit={handleSubmit} className="formulario">
          <FormControl isRequired color="purple.700">
            <FormLabel>First name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel mt="20px">Last name</FormLabel>
            <Input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormLabel mt="20px">Email</FormLabel>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e) => setMail(e.target.value)}
            />
          </FormControl>
          <FormLabel color="purple.700" mt="20px">
            Tell us about yourself
          </FormLabel>
          <Textarea
            placeholder="Why do you want to learn Spanish?"
            type="text"
            onChange={(e) => setComment(e.target.value)}
          />
          <Button mt="20px" colorScheme="purple" type="submit">
            Confirm
          </Button>
          {orderId && (
            <Link to="/professors">
              <Button ml="20px" mt="20px" colorScheme="green">
                Continue Shopping
              </Button>
            </Link>
          )}
        </form>
      </div>
    </>
  );
};

export default Sendorder;
