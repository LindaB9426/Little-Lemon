import React from "react";
import {Box, Text, Heading, Image, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      
        <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        py={10}
        justify="space-between"
        gap={10}
        
        > 
          <Box>
            <Image src="/logo.jpg" alt="Logo" width="120px" />
          </Box>
  
          <Box>
            <Heading size="xs">Contact info</Heading>  
            <Text fontSize="xs"> Telephone +37025698578</Text>
            <Text fontSize="xs">E-mail littlelemon@gmail.com</Text>
          </Box>
          <Box>
            <Heading size="m">Links</Heading>
            <Flex direction="column"  fontSize="xs">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/order">Order online</Link>
              <Link to="/login">Login</Link>
            </Flex>
          </Box>
          <Box>
            <Heading size="m">Contacts</Heading>
            <Flex direction="column"  fontSize="xs">
              <Link to="#">Facebook</Link>
              <Link to="#">Instagram</Link>
              <Link to="#">LinkedIn</Link>
            </Flex>
          </Box>
        </Flex>
    </Box>
  );
};
export default Footer;
