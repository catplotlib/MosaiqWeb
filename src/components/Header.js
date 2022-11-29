import React from "react";
import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavBarContainer {...props}>
      <Logo w="100px" color="#282C3E" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      transition="ease-in-out 300ms"
      display={{ base: "block", md: "none" }}
      ml="60%"
      onClick={toggle}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Text
        display="block"
        fontFamily="Inter"
        fontColor="#282C3E"
        {...rest}
        _hover={{
          transform: "scale(1.1)",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "90%" }}
    >
      <Flex justifyContent="space-between">
        <Flex gap="8" pt="1.5">
          <MenuItem to="/About">About</MenuItem>
          <MenuItem to="/Enterprise">Enterprise solutions </MenuItem>
        </Flex>
        <Flex gap="8">
          <MenuItem to="/signup" isLast>
            <Button
              size="sm"
              rounded="md"
              color="#282C3E"
              bg="transparent"
              border="3px solid #282C3E"
            >
              Demo
            </Button>
          </MenuItem>
          <MenuItem to="/signup">
            <Button
              size="sm"
              rounded="md"
              color="white"
              bg="#282C3E"
              _hover={{
                transform: "scale(1)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Sign Up
            </Button>
          </MenuItem>
        </Flex>
      </Flex>

      {/* </Stack> */}
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      position="fixed"
      as="nav"
      align="center"
      wrap="wrap"
      w="100%"
      mb={8}
      p={1}
      pl={3}
      pr={3}
      bg="white"
      color="#282C3E"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
