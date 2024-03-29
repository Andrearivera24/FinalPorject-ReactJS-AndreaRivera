import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import {
  Container,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/ShoppingCartContext";

const NavBar = () => {
  const { cart } = useCartContext();

  return (
    <div>
      <Container className="navBar" bg="#5015bd" maxW="100%" h="60px">
        <Menu>
          <Flex alignItems="center" justifyContent="space-around" gap="2">
            <Link to="/">
              <Avatar src={logo} />
            </Link>
            <Link to="/">
              <Heading
                mr="600px"
                color="whitesmoke"
                mt="auto"
                className="navBar"
              >
                {" "}
                SpanishByHispanics{" "}
              </Heading>{" "}
            </Link>
            <Link to="/professors">
              <Button
                className="btnProfessors"
                colorScheme="purple"
                mt="10px"
                as={Button}
              >
                Professors
              </Button>
            </Link>
            <MenuButton
              colorScheme="purple"
              mt="10px"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Nationality
            </MenuButton>
            <MenuList>
              <Link to={`/nationality/${"Colombian"}`}>
                <MenuItem>Colombian</MenuItem>
              </Link>
              <Link to={`/nationality/${"Venezuelan"}`}>
                <MenuItem>Venezuelan</MenuItem>
              </Link>
              <Link to={`/nationality/${"Argentinian"}`}>
                <MenuItem>Argentinian</MenuItem>
              </Link>
            </MenuList>
            <Link to="/cart">{cart.length !== 0 && <CartWidget />}</Link>
          </Flex>
        </Menu>
      </Container>
    </div>
  );
};
export default NavBar;
