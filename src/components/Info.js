import React from "react";
import { Text, Flex, Image } from "@chakra-ui/react";
import ms from "../assets/ms.svg";
import viewer from "../assets/Viewer.svg";
import Project from "../assets/Project.svg";
import "../styles/hero.css";
function Info() {
  return (
    <>
      {/* first */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        ml={{ md: "24" }}
        mb={{ md: "36" }}
      >
        <Flex flexDirection="column" width={{ md: "50%" }}>
          <Image src={ms} className="mobile-break" mb="16" mt="16"></Image>
          <Text
            fontFamily="inter"
            fontSize="4xl"
            lineHeight="1.2"
            fontWeight="700"
            w={{ base: "80%", md: "50%" }}
          >
            EFFORTLESSLY ACCUMULATE INFORMATION
          </Text>
          <Text
            fontFamily="inter"
            width={{ md: "70%" }}
            mt="6"
            textAlign="justify"
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
        justifyContent="space-between"
      >
        <Image src={viewer} mt="-16" className="laptop-break"></Image>

        <Flex flexDirection="column" width={{ md: "50%" }}>
          <Image src={viewer} className="mobile-break" mb="16" mt="16"></Image>
          <Text
            fontFamily="inter"
            fontSize="4xl"
            lineHeight="1.2"
            fontWeight="700"
            w={{ base: "80%", md: "50%" }}
          >
            GET TO THE RIGHT DATA FASTER
          </Text>
          <Text
            fontFamily="inter"
            width={{ md: "70%" }}
            mt="6"
            textAlign="justify"
          >
            Access specific categories of information instantly, without reading
            all documents. Want to see tables, figures, opinions, numbers,
            citations... just press a button, the AI does it for you.
          </Text>
        </Flex>
      </Flex>
      {/*third */}
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        ml={{ md: "24" }}
        mb={{ md: "36" }}
      >
        <Flex flexDirection="column" width={{ md: "50%" }}>
          <Image src={Project} className="mobile-break" mb="16" mt="16"></Image>
          <Text
            fontFamily="inter"
            fontSize="4xl"
            lineHeight="1.2"
            fontWeight="700"
            w={{ base: "80%", md: "50%" }}
          >
            MANAGE & COLLABORATE
          </Text>
          <Text
            fontFamily="inter"
            width={{ md: "70%" }}
            mt="6"
            textAlign="justify"
          >
            Accumulate all files and information sources by topic or project.
            Easily share and collaborate. Imagine a cross-platform folder made
            interactive and visual
          </Text>
        </Flex>
        <Image src={Project} mt="-16" className="laptop-break"></Image>
      </Flex>
    </>
  );
}

export default Info;
