import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      id="about-section"
      minH="100vh"
      pt="120px"   
      bg="gray.100"
    >
      <Heading size="xl" textAlign="center">
        Hello everybody!
      </Heading>
      <p>
        Let's go on!
      </p>
    </Box>
  );
};

export default About;