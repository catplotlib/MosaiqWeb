import Hero from "../components/Hero";
import Info from "../components/Info";
import BTS from "../components/BTS";
import Contact from "../components/Contact";
import { Box } from "@chakra-ui/react";
function Main() {
  return (
    <>
      <Hero />
      <Box ml={{ base: "4", md: "24" }} mr={{ base: "4", md: "24" }}>
        <Info />
        <BTS />
      </Box>
      <Contact />
    </>
  );
}

export default Main;
