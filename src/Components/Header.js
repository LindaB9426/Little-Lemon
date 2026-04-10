import React from "react";
import { Box, HStack, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <Box
      top={0}
      left={0}
      right={0}
      position="fixed"
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#ffffff"
      zIndex="1000"
    >
      <Box bg="white" maxWidth="1400px" margin="0 auto" >
        <HStack
          px={1}
          py={0}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <Image src="/logo.jpg" alt="Logo" width={200} mt="10%" />
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} color="black">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/reservation">Reservation</Link>
              <Link to="/order">Order online</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
