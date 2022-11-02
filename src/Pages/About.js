import React from "react";
import Impact from "../components/Impact";
import Contact2 from "../components/Contact2";
import { Box } from "@chakra-ui/react";
import "../styles/hero.css";
function About() {
  return (
    <Box className="body2">
      <Impact />
      <Contact2 />
    </Box>
  );
}

export default About;
