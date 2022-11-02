import React from "react";
import bg from "../assets/bg.svg";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  flexbox,
} from "@chakra-ui/react";
import "../styles/hero.css";
import tech from "../assets/Technology.svg";
import toggle from "../assets/Toggle.svg";
import data from "../assets/Data.svg";
function Hero() {
  return (
    <div className="hero">
      <Flex justifyContent="center" height={{ md: "115vh", base: "82vh" }}>
        <Flex
          mt={{ base: "24", md: "40" }}
          flexDirection="column"
          alignItems="center"
          gap="2"
        >
          <Text
            fontSize="5xl"
            textAlign="center"
            fontWeight="900"
            fontFamily="Inter"
          >
            SAVE HOURS.
            <br class="mobile-break" /> EVERY DAY.
          </Text>

          <Flex
            mt="2"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2"
          >
            <Text fontSize="xl" fontWeight="700" fontFamily="Inter">
              Meet your knowledge assistant
            </Text>

            <Text
              fontSize="16"
              lineHeight="1.2"
              w={{ md: "37%" }}
              p="4"
              textAlign="center"
              color="rgba(255,255,255, 0.75)"
            >
              Do you have 27 tabs open? Do you get lost entranched in overlaping
              documetns? Do you need ages to find existing knowledge? {""}MosaiQ{" "}
              removes the friction of your knowledge workflow. Information
              volume becomes your ally.
            </Text>
          </Flex>
          <Button bg="white" color="black" w="48" h="12">
            Sign up now
          </Button>
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        height={{ md: "70vh" }}
        ml={{ base: "4", md: "24" }}
        mr={{ base: "4", md: "24" }}
        bg={{ base: "black", md: "transparent" }}
      >
        <Text fontFamily="inter" fontSize="5xl" fontWeight="700">
          The Platform
        </Text>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "12", md: "40" }}
          mt="8"
        >
          <Flex flexDirection="column" width={{ md: "33%" }} gap="3">
            <Image w="9%" src={tech} height="30px"></Image>
            <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="900">
              ACCUMULATE KNOWLEDGE
            </Text>
            <Text
              fontFamily="inter"
              ml="1"
              color="rgba(255,255,255, 0.75)"
              fontSize={{ md: "16px", base: "18px" }}
            >
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
            gap="3"
          >
            <Image w="9%" src={toggle} height="30px"></Image>
            <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="900">
              SKIP THE NOISE
            </Text>
            <Text
              fontFamily="inter"
              ml="1"
              color="rgba(255,255,255, 0.75)"
              fontSize={{ md: "16px", base: "18px" }}
            >
              Access specific categories of information automatically extracted
              from the text, without having to go through documents. Want to see
              all tables and figures contained in 27 documents? Just press a
              button - skip the overlap you already know{" "}
            </Text>
          </Flex>
          <Flex flexDirection="column" width={{ md: "33%" }} gap="3">
            <Image w="9%" src={data} height="30px"></Image>
            <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="900">
              COLLABORATE
            </Text>
            <Text
              fontFamily="inter"
              ml="1"
              color="rgba(255,255,255, 0.75)"
              fontSize={{ md: "16px", base: "18px" }}
            >
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
