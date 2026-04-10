import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import A from "../Images/A.jpg";

const About = () => {
  return (
    <Box
      id="about-section"
      minH="auto"
      pt="10px"
      bg="gray.100"
      px={8}
      backgroundColor="white"
      scrollMarginTop="80px"
      justifyContent="center"
    >
      <Flex
        height="600px"  
        bg="#495E57" 
      >
        <Box flex="1" mt="20" marginLeft="200px" p={8} flexDirection="column" justifyContent="center" >
         <Heading size="xl" textAlign="center" mb={8} color="white">
            Hello everybody!
          </Heading> 
          <Text color="white">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist
          </Text>
        </Box>
        <Box flex="2" paddingLeft="200px" >
          <Image
            src={A}
            alt="About image"
            width="90%"
            height="60%"
            objectFit="cover"
            px="20"
            mt="20"
            borderRadius="20%"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;