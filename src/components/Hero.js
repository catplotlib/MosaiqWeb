import React from "react";
import bg from "../assets/bg.svg";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import "../styles/hero.css";
import tech from "../assets/Technology.svg";
import toggle from "../assets/Toggle.svg";
import data from "../assets/Data.svg";
function Hero() {
  return (
    <div className="hero">
      <Flex height={{ md: "90vh", base: "82vh" }}>
        <Flex
          mt={{ base: "24", md: "36" }}
          flexDirection="column"
          alignItems="center"
          gap="2"
        >
          <Text
            fontSize="5xl"
            textAlign="center"
            fontWeight="700"
            fontFamily="Inter"
          >
            SAVE DAYS.
            <br class="mobile-break" /> EVERY WEEK..
          </Text>

          <Flex
            mt="2"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2"
          >
            <Text fontSize="xl" fontWeight="700" fontFamily="Inter">
              YOUR AI KNOWLEDGE ASSISTANT
            </Text>
            <Text w={{ md: "40%" }} p="4" textAlign="center" color="grey">
              Do you have 27 tabs open? Do you get lost entranched in overlaping
              documetns? Do you need ages to find existing knowledge? MosaiQ
              removes the friction of your knowledge workflow. Information
              volume becomes your ally.
            </Text>
          </Flex>
          <Button bg="white" color="black" w="48">
            Sign up now
          </Button>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        height={{ md: "70vh" }}
        ml={{ base: "4", md: "24" }}
        mr={{ base: "4", md: "24" }}
        bg={{base:"black",md:'transparent'}}
      >
        <Text fontFamily="inter" fontSize="5xl" fontWeight="700">
          The Platform
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "12", md: "20" }}
          mt="8"
        >
          <Flex flexDirection="column" width={{ md: "33%" }}>
            <Image w="9%" src={tech} height="30px" mb="4"></Image>
            <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
              ACCUMULATE KNOWLEDGE
            </Text>
            <Text fontFamily="inter" ml="1" textAlign="justify">
              Effortlessly accumulate data and files in one place. Because we
              understand their content, you accumulate knowledge into a
              searchable database that becomes smarter with time.{" "}
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            width={{ md: "39%" }}
            bg="black"
            height={{ md: "20rem" }}
          >
            <Image w="9%" src={toggle} height="30px" mb="4"></Image>
            <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
              SKIP THE NOISE
            </Text>
            <Text fontFamily="inter" ml="1" textAlign="justify">
              Access specific categories of information automatically extracted
              from the text, without having to go through documents. Want to see
              all tables and figures contained in 27 documents? Just press a
              button - skip the overlap you already know{" "}
            </Text>
          </Flex>
          <Flex flexDirection="column" width={{ md: "33%" }}>
            <Image w="9%" src={data} height="30px" mb="4"></Image>
            <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
              COLLABORATE
            </Text>
            <Text fontFamily="inter" ml="1" textAlign="justify">
              Share files, notes, documents about entire topics/project. Imagine
              a folder, made interactive and visual. Boost individual
              productivity while leveraging team & institutional knowledge.{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Hero;
