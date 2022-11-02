import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
function Expertise() {
  return (
    <Flex
      height={{ md: "80vh", base: "150vh" }}
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
        w={{ md: "70%" }}
        lineHeight="1.2"
      >
        EXPERTISE IN KNOWLEDGE
        <br />
        MANAGMENT & AI/LP SOLUTIONS
      </Text>
      <Flex flexDirection={{ base: "column", md: "row" }} gap="12">
        {/* first */}
        <Box
          flexDirection="column"
          w={{ md: "17%" }}
          mt={{ base: "20", md: "0" }}
        >
          <Text fontSize="2xl" fontWeight="900" lineHeight="1.2" mb="4">
            AUDIT & CONSULTING
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            We audit, analyze and propose solutions to your information
            workflows and knowledge management practices
          </Text>
          <br></br>
          <br></br>

          <Text fontFamily="Inter" as="i" color="#afafaf">
            This includes processes, behavioral and technical aspects.
          </Text>
        </Box>
        {/* second */}
        <Box flexDirection="column" w={{ md: "17%" }}>
          <Text fontSize="2xl" fontWeight="900" lineHeight="1.2" mb="4">
            CUSTOM NLP SOLUTIONS
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            We help you build the right language technology solutions in a
            viable, scalable and affordable way.
          </Text>
        </Box>
        {/* third */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text fontSize="2xl" fontWeight="900" lineHeight="1.2" mb="4">
            KNOWLEDGE GRAPH SERVICE
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            We build you a new way to capture and leverage all your data and
            interact with it in plain language. This helps capture internal,
            external data as well as tacit knowledge. A knowledge hub for your
            enterprise where employees can interact with plain language.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Expertise;
