import Hero from "../components/Hero";
import Info from "../components/Info";
import BTS from "../components/BTS";
import Contact from "../components/Contact";
import { Box } from "@chakra-ui/react";
import "../styles/hero.css";
function Main() {
  return (
    <Box className="body">
      <Hero />
      <Box ml={{ base: "4", md: "24" }} mr={{ base: "4", md: "24" }}>
        <Info />
        <BTS />
      </Box>
      <Contact />
    </Box>
  );
}

export default Main;
