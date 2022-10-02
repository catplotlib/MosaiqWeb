import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Logo(props) {
  return (
    <Box {...props} mr="2">
      <Link to="/">
        <Image src={logo} mt="1.5" />
      </Link>
    </Box>
  );
}
