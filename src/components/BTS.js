import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";

import data from "../assets/Data.svg";

import { IoHardwareChipSharp } from "react-icons/io5";
import { GiFamilyTree } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
function BTS() {
  return (
    <Flex
      flexDirection="column"
      height={{ md: "90vh" }}
      justifyContent="center"
      mt={{ base: "32", md: "0" }}
    >
      <Text
        fontFamily="inter"
        fontSize={{ md: "5xl", base: "4xl" }}
        fontWeight="900"
      >
        BEHIND THE SCENE
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "12", md: "20" }}
        mt="2.8rem"
      >
        <Flex flexDirection="column" width={{ md: "33%" }} gap="4">
          <IoHardwareChipSharp style={{ fontSize: "32px" }} />
          <Text
            fontFamily="inter"
            ml="1"
            lineHeight="1.2"
            fontSize="2xl"
            fontWeight="900"
          >
            NATURAL LANGUAGE PROCESSING
          </Text>
          <Text fontFamily="inter" ml="1" color="rgba(225,225,225,0.75)">
            We use AI/NLP to automatically understand, extract & organize
            information by category. This serves users productivity but also
            enables to automatically construct knowledge around projects &
            topics.{" "}
          </Text>
        </Flex>
        <Flex flexDirection="column" width={{ md: "33%" }} gap="4">
          <GiFamilyTree style={{ fontSize: "32px", color: "white" }} />
          <Text
            fontFamily="inter"
            ml="1"
            lineHeight="1.2"
            fontSize="2xl"
            fontWeight="900"
          >
            KNOWLEDGE GRAPHS
          </Text>
          <Text fontFamily="inter" ml="1" color="rgba(225,225,225,0.75)">
            By understanding the text, we build an infrastructure that
            structures the information in knowledge graphs. This helps connect
            the dots between concepts and datapoints contained in different
            environments. A google like infrastructure for all the knowledge
            you’ve processed and consumed.{" "}
          </Text>
        </Flex>
        <Flex flexDirection="column" width={{ md: "33%" }} gap="4">
          <GiBrain style={{ fontSize: "32px", color: "white" }} />
          <Text
            fontFamily="inter"
            ml="1"
            lineHeight="1.2"
            fontSize="2xl"
            fontWeight="900"
          >
            INTELLIGENCE
          </Text>
          <Text
            fontFamily="inter"
            ml="1"
            textAlign="justify"
            color="rgba(225,225,225,0.75)"
          >
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
