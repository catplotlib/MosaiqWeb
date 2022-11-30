import React from "react";
import bg from "../assets/bg.svg";
import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import "../styles/hero.css";
import fb from "../assets/fb.svg";
import tele from "../assets/tele.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import "../styles/hero.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      className="touch"
      style={{
        position: "relative",
        zIndex: "1",
      }}
    >
      <Flex
        mt={{ base: "24", md: "500px", lg: "0" }}
        justifyContent="center"
        height={{ md: "100vh", base: "82vh", lg: "110vh" }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          // gap="1"
        >
          <Text
            fontSize="5xl"
            textAlign="center"
            fontWeight="700"
            fontFamily="Inter"
          >
            GET IN TOUCH
          </Text>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1"
          >
            <Text
              w={{ md: "45%" }}
              p="4"
              textAlign="center"
              color="rgba(255,255,255,0.75)"
              mt="-4"
            >
              We are on a mission to apply best in class NLP technology to make
              the life of knowledge workers easier, more productive and
              stimulating. If you feel like that is interesting for you - in any
              form - let’s connect!
            </Text>
          </Flex>
          <a
            href="https://calendly.com/mosaiqlabs/intro-call-with-mosaiq-labs"
            target="_blank"
            rel="noreferrer noopener"
          >
            {" "}
            <Button
              mt="8"
              bg="white"
              color="black"
              w="48"
              _hover={{
                transform: "scale(1.1)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              Book a meeting
            </Button>
          </a>

          <Flex gap="12" mt={{ md: "32", base: "16" }} cursor="pointer">
            <a
              href="https://m.facebook.com/MosaiQLabs/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <Image
                src={fb}
                w="8"
                h="8"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 0.2s ease-in-out",
                }}
              ></Image>{" "}
            </a>
            <a
              href="https://twitter.com/mosaiql?lang=en"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <Image
                src={tele}
                w="8"
                h="8"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 0.2s ease-in-out",
                }}
              ></Image>
            </a>
            <a
              href="https://uk.linkedin.com/company/mosaiq-labs"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={linkedin}
                w="8"
                h="8"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 0.2s ease-in-out",
                }}
              ></Image>
            </a>
            <a
              href="https://www.instagram.com/mosaiqlabs/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                src={instagram}
                w="8"
                h="8"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "all 0.2s ease-in-out",
                }}
              ></Image>
            </a>
          </Flex>
          <Flex justify="space-between" w="56" mt={{ md: "6", base: "4" }}>
            <Link to="/Privacy">
              <Button
                bg="transparent"
                color="white"
                border="2px solid white"
                w="80px"
                h="6"
                fontSize="10"
              >
                Privacy Policy
              </Button>
            </Link>
            <Link to="/Terms">
              <Button
                bg="transparent"
                color="white"
                border="2px solid white"
                w="100px"
                h="6"
                fontSize="10"
              >
                Terms of Service
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Contact;
