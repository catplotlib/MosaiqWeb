import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
function Impact() {
  return (
    <Flex
      height={{ md: "160vh", base: "280vh" }}
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
        THE IMPACT OF
        <br />
        INFORMATION OVERLOAD
      </Text>
      <Flex flexDirection={{ base: "column", md: "row" }} gap="12">
        {/* first */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text
            fontSize="3xl"
            fontWeight="800"
            bg="white"
            color="black"
            w={{ base: "32%", md: "49%" }}
            mb="4"
          >
            $900B
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            The yearly cost of information overaoad in lowered employee
            productivity and reduced innovation in the US alone{" "}
          </Text>
        </Box>
        {/* second */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text
            fontSize="3xl"
            fontWeight="800"
            bg="white"
            color="black"
            w={{ base: "50%", md: "83%" }}
            mb="4"
          >
            2.5 HOURS
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            The average time spent by knowledge workers per day finding or
            creating institutional knowledge. On a team of 3, it means that the
            work of 1 is lost{" "}
          </Text>
        </Box>
        {/* third */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text
            fontSize="3xl"
            fontWeight="800"
            bg="white"
            color="black"
            w={{ base: "23%", md: "38%" }}
            mb="4"
          >
            25%
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            Workers experience significant stress and poor health due to the
            volume of information they are required to process{" "}
          </Text>
        </Box>
        {/* fourth*/}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Text
            fontSize="3xl"
            fontWeight="800"
            bg="white"
            color="black"
            w={{ base: "17%", md: "28%" }}
            mb="4"
          >
            110
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            SaaS tools used by organizations 2021. vs 8 only in 2015{" "}
          </Text>
        </Box>
        {/* fifth*/}
        <Box flexDirection="column" w={{ md: "16%" }}>
          <Text
            fontSize="3xl"
            fontWeight="800"
            bg="white"
            color="black"
            w={{ base: "28%", md: "55%" }}
            mb="4"
          >
            90%+
          </Text>
          <Text fontFamily="Inter" as="i" color="#afafaf">
            Information is unstructured and never analysed{" "}
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection="column" mt="24" w={{ md: "60%" }} gap="8">
        <Text
          fontFamily="Inter"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="700"
          lineHeight="1.2"
        >
          THE FUTURE OF THE WORLDS PRODUCTIVITY REQUIRES AI FOR KNOWLEDGE
          MANAGMENT. WE CANNOT COPE WITH EXPONETIAL VOLUME
        </Text>
        <Text fontFamily="Inter" as="i" color="#afafaf">
          We exist to make your life easier, and get you rid of redundant, time
          consuming, non stimulating work tasks. We focus on using AI / NLP to
          organize and derive intelligence from large volumes of data,
          specifically text.{" "}
        </Text>
        <Text fontFamily="Inter" as="i" color="#afafaf">
          As knowledge workers - our life consists in finding information,
          digesting and curating it, and using learnings and curated content to
          make decisions, product content, documents, & more{" "}
        </Text>
        <Text fontFamily="Inter" as="i" color="#afafaf">
          Our founders were doing this daily. From covering overlapping academic
          papers to performing market analysis and due diligence, lots of time
          was lost due to information overload.{" "}
        </Text>
        <Text fontFamily="Inter" as="i" color="#afafaf">
          Information overload is only getting started. The volumes grows at an
          exponential rate. Organization used to have thousands of data points
          to cover, they now have millions. Access to information is now easy.
          Curation is inefficient. Re-utilisation almost nonexistent.{" "}
        </Text>
        <Text fontFamily="Inter" as="i" color="#afafaf">
          In the past 20 years, solutions have focused on the consequence of the
          problem. Note taking apps, storage spaces, communication channels,
          emails, knowledge hubs.. only help with organization, but not with
          volume. We are superficially more organized, in channels. Even the
          most diligently organized people are losing days, every week. No
          amount of organization will solve volume, the real cause of the
          problem.{" "}
        </Text>
        <Text fontFamily="Inter" as="i" color="#afafaf">
          The future is about understanding the text automatically and to
          interact with knowledge in plain language, without technical
          capabilities.{" "}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Impact;
