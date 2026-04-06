import React from "react";
import { Box, Heading,Flex} from "@chakra-ui/react";

const Login = () => {
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
      display="flex"
            
           
    >
      <Flex      
        height="600px"  
         bg="#495E57" 
      >
      <Heading size="xl" textAlign="center" mb={8} color="white" p={8}>
        Please login
      </Heading>
      </Flex>
    </Box>
  );
};

export default Login; 