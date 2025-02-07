"use client";
import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Motion from "../common/Motion";
import HeroContainer from "./HeroContainer";
import TypeEffect from "./TypeEffect";
import Button from "../common/Button";
import { LuArrowDown } from "react-icons/lu";
import DashedCircle from "../common/DashedCircle";
import ScrollButton from "./ScrollButton";
import localFont from "next/font/local";

const dancing = localFont({
  src: "../../assets/fonts/DancingScript.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  preload: true, // Ensures the font is prioritized during loading
});

const Hero = () => {
  return (
    <Box id="hero" position="relative" width="100vw" height="100vh" overflow="hidden">
      {[0, 1].map((i) => (
        <Motion
          key={i}
          initial={{ translateX: `${i === 0 ? "-" : ""}100%` }}
          animate={{ translateX: 0 }}
          transition={{ delay: 4.7, duration: 0.7, ease: "easeOut" }}
          style={{ width: "100%", height: "50%", backgroundColor: "#f8e179" }}
        ></Motion>
      ))}
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 2 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 1,
        }}
      >
        <Text
          fontWeight="bold"
          fontSize={[110, 170, 230, 275, 325, 350]}
          fontFamily="anton"
          lineHeight={1.2}
          transform="translate(-50%, -50%)"
          userSelect="none"
          color="#ffffff18"
        >
          HELLO
        </Text>
      </Motion>

      <DashedCircle size={1300} position={[-60, 70]} />
      <DashedCircle size={1000} position={[40, -20]} />

      <HeroContainer>
        <VStack
          paddingLeft={["5%", "10%", "20%"]}
          justifyContent="center"
          alignItems="start"
          height="100%"
          zIndex={20}
          position="relative"
        >
          <Text
            className={dancing.className}
            fontSize={[40, 50, 60, 75]}
            as="h1"
          >
            {"Parsa Asadpour".split("").map((letter, index) => (
              <Motion
                key={index}
                initial={{ opacity: 0, left: "-50%" }}
                animate={{ opacity: 1, left: 0 }}
                transition={{ delay: 8 + index * 0.1, duration: 0.5 }}
                style={{ display: "inline", position: "relative" }}
              >
                {letter}
              </Motion>
            ))}
          </Text>
          <TypeEffect />

          <Motion
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 9.2, duration: 0.6, ease: "easeOut" }}
            style={{ display: "flex" }}
          >
            <Button isLink href="/My CV.pdf" download isExternal>
              <HStack fontSize={[15, 17, 20]}>
                <Text>Download CV</Text>
                <Icon as={LuArrowDown} transform="translateX(50%)" />
              </HStack>
            </Button>
          </Motion>
        </VStack>
        <ScrollButton />
      </HeroContainer>
    </Box>
  );
};

export default Hero;
