import React from "react";
import { Text, Flex, Image, Button } from "@chakra-ui/react";
import ms from "../assets/ms.svg";
import viewer from "../assets/Viewer.png";
import Project from "../assets/Project.svg";
import "../styles/hero.css";
import toggle from "../assets/Toggle.svg";
function Info() {
  return (
    <Flex flexDirection= "column" height={{ md: "1400px",lg:'130vh' }}>
      {/* first */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        ml={{ md: "16" }}
        mr={{ md: "36" }}
        mb={{ md: "36" }}
        justifyContent="center"
      >
        <Flex flexDirection="column" width={{ md: "60%" }}>
          <Image src={ms} className="mobile-break" mb="16" mt="16"></Image>
          <Text
            fontFamily="inter"
            fontSize="4xl"
            lineHeight="1.2"
            fontWeight="900"
            w={{ base: "80%", md: "50%" }}
          >
            EFFORTLESSLY ACCUMULATE INFORMATION
          </Text>
          <Text
            fontFamily="inter"
            width={{ md: "50%" }}
            mt="6"
            textAlign="justify"
            color="rgba(255,255,255, 0.75)"
          >
            Use the browser extension to create a project/topic and add any page
            or tab in a few clicks. Forget copy pasting links in random
            documents or leaving 27 tabs open for 3 weeks fearing losing the
            information.
          </Text>
        </Flex>
        <Image src={ms} mt="-16" className="laptop-break"></Image>
      </Flex>
      {/* second */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        ml={{ md: "24" }}
        mb={{ md: "36" }}
        justifyContent="center"
      >
        <Image
          src={viewer}
          mt="-16"
          className="laptop-break"
          height="22rem"
        ></Image>
        <Flex flexDirection="column">
          <Image src={viewer} className="mobile-break" mb="16" mt="16" />
          <Flex ml={{ md: "30%", base: "0%" }} direction="column">
            <Text
              fontFamily="inter"
              fontSize="4xl"
              lineHeight="1.2"
              w={{ base: "100%", md: "50%" }}
              fontWeight="900"
            >
              GET TO THE RIGHT DATA FASTER
            </Text>
            <Text
              fontFamily="inter"
              width={{ md: "70%" }}
              mt="6"
              color="rgba(255,255,255, 0.75)"
            >
              Access specific categories of information instantly, without
              reading all documents. Want to see tables, figures, opinions,
              numbers, citations... just press a button, the AI does it for you.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/*third */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        mb={{ md: "36" }}
        justifyContent="center"
      >
        <Flex flexDirection="column" width={{ md: "50%" }}>
          <Image src={Project} className="mobile-break" mb="16" mt="16"></Image>
          <Text
            fontFamily="inter"
            fontSize="4xl"
            lineHeight="1.2"
            w={{ base: "100%", md: "50%" }}
            fontWeight="900"
          >
            MANAGE & COLLABORATE
          </Text>
          <Text
            fontFamily="inter"
            width={{ md: "50%" }}
            mt="6"
            textAlign="justify"
            color="rgba(255,255,255, 0.75)"
          >
            A central hub to accumulate any online resource - documents, drive,
            web articles, pdfs - related to a topic/project. Easily share and
            collaborate. A visual gateway to all relevant information in one
            place.
          </Text>
          <Flex direction="column" gap="3" mt="8">
            <Button
              bg="white"
              color="black"
              w="36"
              h="12"
              _hover={{
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Watch Demo
            </Button>
          </Flex>
        </Flex>
        <Image src={Project} mt="-16" className="laptop-break"></Image>
      </Flex>
    </Flex>
  );
}

export default Info;
