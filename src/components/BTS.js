import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import tech from "../assets/Technology.svg";
import toggle from "../assets/Toggle.svg";
import data from "../assets/Data.svg";
function BTS() {
  return (
    <Flex flexDirection="column" height={{ md: "70vh" }}>
      <Text fontFamily="inter" fontSize="5xl" fontWeight="700">
        BEHIND THE SCENE
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "12", md: "20" }}
        mt="8"
      >
        <Flex flexDirection="column" width={{ md: "30%" }}>
          <Image w="9%" src={tech} height="30px" mb="4"></Image>
          <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
            NATURAL LANGUAGE PROCESSING
          </Text>
          <Text fontFamily="inter" ml="1" textAlign="justify">
            We use AI/NLP to automatically understand, extract & organize
            information by category. This serves users productivity but also
            enables to automatically construct knowledge around projects &
            topics{" "}
          </Text>
        </Flex>
        <Flex flexDirection="column" width={{ md: "36%" }}>
          <Image w="9%" src={toggle} height="30px" mb="4"></Image>
          <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
            KNOWLEDGE GRAPHS
          </Text>
          <Text fontFamily="inter" ml="1" textAlign="justify">
            By understanding the text, we build an infrastructure that
            structures the information in knowledge graphs. This helps connect
            the dots between concepts and datapoints contained in different
            environments. A google like infrastructure for all the knowledge
            you’ve processed and consumed{" "}
          </Text>
        </Flex>
        <Flex flexDirection="column" width={{ md: "33%" }}>
          <Image w="9%" src={data} height="30px" mb="4"></Image>
          <Text fontFamily="inter" ml="1" fontSize="xl" fontWeight="700">
            INTELLIGENCE
          </Text>
          <Text fontFamily="inter" ml="1" textAlign="justify">
            Once understood and organized into knowledge graphs, the information
            becomes a source of intelligence. Query in plain language, get
            patterns, insights and strategic intelligence accross entire
            topics/projects and enterprise knowledge.{" "}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default BTS;
