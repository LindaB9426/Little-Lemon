import React from "react";
import {Box, Text, Heading, Image, Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      
        <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="flex-start"
        flexWrap="wrap"
        gap={3}
        p={4}
        
        > 
          <Box>
            <Image src="/logo.jpg" alt="Logo" width="120px" />
          </Box>
  
          <Box>
            <Heading size="xs">Contact info</Heading>  
            <Text fontSize="sm"> Telephone +37025698578</Text>
            <Text fontSize="sm">E-mail littlelemon@gmail.com</Text>
          </Box>
          <Box>
            <Heading size="m">Links</Heading>
            <Flex direction="column" gap={1} fontSize="sm">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/order">Order online</Link>
              <Link to="/login">Login</Link>
            </Flex>
          </Box>
          <Box>
            <Heading size="m">Contacts</Heading>
            <Flex direction="column" gap={1} fontSize="sm">
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
