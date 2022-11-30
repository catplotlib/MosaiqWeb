import React from "react";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { CountUp } from "use-count-up";
function Impact() {
  return (
    <Flex
      height={{ md: "200vh", base: "280vh" }}
      ml={{ base: "4", md: "44" }}
      mr={{ base: "4", md: "44" }}
      gap="12"
      direction="column"
    >
      <Text
        fontFamily="Inter"
        fontSize={{ md: "5xl", base: "4xl" }}
        mt="40"
        fontWeight="900"
        w={{ md: "70%" }}
        lineHeight="1.2"
      >
        THE IMPACT OF
        <br />
        INFORMATION OVERLOAD
      </Text>
      <Flex flexDirection={{ base: "column", md: "row" }} gap="12">
        {/* first */}
        <Box flexDirection="column" w={{ md: "180px" }}>
          {/* Make the white background fit the text */}

          <Box w="28">
            <Text
              fontSize="3xl"
              fontWeight="900"
              bg="white"
              bgSize="contain"
              color="black"
              mb="4"
              borderRadius="4"
              textAlign="center"
            >
              $
              <CountUp isCounting end={900} duration={2} />B
            </Text>
          </Box>
          <Text fontFamily="Inter" color="#afafaf" w={{ md: "170px" }}>
            The yearly cost of information overload in lowered employee
            productivity and reduced innovation in the US alone{" "}
          </Text>
        </Box>
        {/* second */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Box w={{ md: "56" }}>
            <Text
              fontSize="3xl"
              fontWeight="900"
              bg="white"
              color="black"
              w={{ base: "50%", md: "83%" }}
              borderRadius="4"
              textAlign="center"
              mb="4"
            >
              <CountUp isCounting end={2.5} duration={2} />
              HOURS
            </Text>
          </Box>
          <Text fontFamily="Inter" color="#afafaf">
            The average time spent by knowledge workers per day finding or
            recreating institutional knowledge. Out of a team of 3, this means
            completely wasting the efforts of 1{" "}
          </Text>
        </Box>
        {/* third */}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Box w={{ md: "48" }}>
            <Text
              fontSize="3xl"
              fontWeight="900"
              bg="white"
              color="black"
              w={{ base: "23%", md: "38%" }}
              mb="4"
              borderRadius="4"
              textAlign="center"
            >
              
              <CountUp isCounting end={25} duration={2} />%

            </Text>
          </Box>
          <Text fontFamily="Inter" color="#afafaf">
            Of workers experience significant stress and poor health due to the
            volume of information they are required to process{" "}
          </Text>
        </Box>
        {/* fourth*/}
        <Box flexDirection="column" w={{ md: "20%" }}>
          <Box w={{ md: "48" }}>
            <Text
              fontSize="3xl"
              fontWeight="900"
              bg="white"
              color="black"
              w={{ base: "17%", md: "32%" }}
              mb="4"
              borderRadius="4"
              textAlign="center"
            >
              <CountUp isCounting end={110} duration={2} />
              
            </Text>
          </Box>
          <Text fontFamily="Inter" color="#afafaf">
            Avg SaaS tools used by organizations in 2021 vs only 8 in 2015{" "}
          </Text>
        </Box>
        {/* fifth*/}
        <Box flexDirection="column" w={{ md: "16%" }}>
          <Box w={{ md: "180px" }}>
            <Text
              fontSize="3xl"
              fontWeight="900"
              bg="white"
              color="black"
              w={{ base: "28%", md: "55%" }}
              mb="4"
              borderRadius="4"
              textAlign="center"
            >
              <CountUp isCounting end={90} duration={2} />%+
            </Text>
          </Box>
          <Text fontFamily="Inter" color="#afafaf">
            Of the information we consume is unstructured and never analyzed &
            re-used{" "}
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection="column"
        mt={{ md: "24", base: "8" }}
        w={{ md: "60%" }}
        gap="8"
      >
        <Text
          fontFamily="Inter"
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="700"
          lineHeight="1.2"
        >
          AI FOR KNOWLEDGE MANAGEMENT IS THE FUTURE OF PRODUCTIVITY & STRATEGIC
          INTELLIGENCE
        </Text>
        <Text fontFamily="Inter" color="#afafaf">
          We exist to make your life easier, and get you rid of redundant, time
          consuming, non stimulating work tasks. We focus on using AI / NLP to
          organize and derive intelligence from large volumes of data,
          specifically text.{" "}
        </Text>
        <Text fontFamily="Inter" color="#afafaf">
          As knowledge workers - our life consists in finding information,
          digesting and curating it, and using learnings and curated content to
          make decisions, produce content, documents, & more{" "}
        </Text>
        <Text fontFamily="Inter" color="#afafaf">
          Our founders were doing this daily. From covering overlapping academic
          papers to performing market analysis and due diligence, lots of time
          was lost due to information overload.{" "}
        </Text>
        <Text fontFamily="Inter" color="#afafaf">
          Information overload is only getting started. The volume grows at an
          exponential rate. Organizations used to have thousands of data points
          to cover, they now have millions. Access to information is now easy.
          Curation is inefficient. Re-utilisation almost nonexistent.{" "}
        </Text>
        <Text fontFamily="Inter" color="#afafaf">
          In the past 20 years, solutions have focused on the consequence of the
          problem. Note taking apps, storage spaces, communication channels,
          emails, knowledge hubs.. only help with organization, but not with
          volume. We are superficially more organized, in channels. Even the
          most diligently organized people are losing hours, every day. No
          amount of organization will solve volume, the real cause of the
          problem.{" "}
        </Text>
        <Text fontFamily="Inter" color="#afafaf">
          The future is about understanding the text automatically and
          interacting with knowledge in plain language, without technical
          capabilities. Information volume should be a competitive advantage,
          not a burden{" "}
        </Text>
      </Flex>
    </Flex>
  );
}

export default Impact;
