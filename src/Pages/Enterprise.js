import React from "react";
import Expertise from "../components/Expertise";
import Contact2 from "../components/Contact2";
import { Box } from "@chakra-ui/react";
import "../styles/hero.css";
function Enterprise() {
  return (
    <Box className="body3">
      <Expertise />
      <Contact2 />
    </Box>
  );
}

export default Enterprise;
