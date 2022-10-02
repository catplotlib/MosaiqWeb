import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
function Expertise() {
  return (
    <Flex
      height={{ md: "70vh", base: "110vh" }}
      ml={{ base: "4", md: "24" }}
      mr={{ base: "4", md: "24" }}
      mt="20"
      gap="12"
      direction="column"
    >
      <Text
        fontFamily="Inter"
        fontSize="4xl"
        fontWeight="800"
        w={{ md: "50%" }}
        lineHeight="1.2"
      >
        EXPERTISE IN KNOWLEDGE
        <br />
        MANAGMENT & AI/LP SOLUTIONS
      </Text>
      <Flex flexDirection={{ base: "column", md: "row" }} gap="12">
        {/* first */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text fontSize="2xl" fontWeight="800" lineHeight="1.2" mb="4">
            AUDIT & CONSULTING
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            We audit, analyze and propose solutions to your information
            workflows and knowledge management practices
          </Text>
          <br></br>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            This includes processes, behavioral and technical aspects.
          </Text>
        </Box>
        {/* second */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text fontSize="2xl" fontWeight="800" lineHeight="1.2" mb="4">
            CUSTOM NLP SOLUTIONS
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            We help you build the right language technology solutions in a
            viable, scalable and affordable way.
          </Text>
        </Box>
        {/* third */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text fontSize="2xl" fontWeight="800" lineHeight="1.2" mb="4">
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
