import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
function Expertise() {
  return (
    <Flex
      height={{ md: "100vh", base: "150vh" }}
      ml={{ base: "4", md: "44" }}
      mr={{ base: "4", md: "44" }}
      gap="12"
      direction="column"
    >
      <Text
        mt="44"
        fontFamily="Inter"
        fontSize="5xl"
        fontWeight="900"
        w={{ md: "1000px" }}
        lineHeight="1.2"
      >
        EXPERTISE IN KNOWLEDGE
        <br />
        MANAGMENT & AI/NLP SOLUTIONS
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap="24"
        w={{ md: "1260px" }}
      >
        {/* first */}
        <Box
          flexDirection="column"
          w={{ md: "17%" }}
          mt={{ base: "20", md: "0" }}
        >
          <Text fontSize="2xl" fontWeight="900" lineHeight="1.2" mb="4">
            AUDIT & CONSULTING
          </Text>
          <Text fontFamily="Inter" color="#afafaf">
            We audit, analyze and propose solutions to imporove your information
            workflows and knowledge management practices. This includes
            processes, behavioral and technical aspects.
          </Text>
        </Box>
        {/* second */}
        <Box flexDirection="column" w={{ md: "17%" }}>
          <Text fontSize="2xl" fontWeight="900" lineHeight="1.2" mb="4">
            CUSTOM NLP SOLUTIONS
          </Text>
          <Text fontFamily="Inter" color="#afafaf">
            We help you build and implement the right language technology
            solutions in a viable, scalable and affordable way.
          </Text>
        </Box>
        {/* third */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text fontSize="2xl" fontWeight="900" lineHeight="1.2" mb="4">
            KNOWLEDGE GRAPH SERVICE
          </Text>
          <Text fontFamily="Inter" color="#afafaf">
            We help you build you a new way to capture and leverage all your
            data and interact with it in plain language. This helps capture
            internal, external data as well as tacit knowledge; making it
            accessible to any company member in plain language. A smart
            knowledge hub for your enterprise.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Expertise;
