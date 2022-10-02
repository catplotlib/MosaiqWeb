import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import tech from "../assets/Technology.svg";
import toggle from "../assets/Toggle.svg";
import data from "../assets/Data.svg";
function Platform() {
  return (
    <Flex flexDirection="column" height={{ md: "70vh" }}>
      <Text fontFamily="inter" fontSize="5xl" fontWeight="700">
        The Platform
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "12", md: "20" }}
        mt="8"
      >
        <Flex flexDirection="column" width={{ md: "30%" }}>
          <Image w="9%" src={tech} height="30px" mb="4"></Image>
          <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
            ACCUMULATE KNOWLEDGE
          </Text>
          <Text fontFamily="inter" ml="1" textAlign="justify">
            Effortlessly accumulate data and files in one place. Because we
            understand their content, you accumulate knowledge into a searchable
            database that becomes smarter with time.{" "}
          </Text>
        </Flex>
        <Flex bgColor="red" flexDirection="column" width={{ md: "36%" }}>
          <Image w="9%" bgColor="red" src={toggle} height="30px" mb="4"></Image>
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
            Share files, notes, documents about entire topics/project. Imagine a
            folder, made interactive and visual. Boost individual productivity
            while leveraging team & institutional knowledge.{" "}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Platform;
