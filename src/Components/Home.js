import React from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import home from '../Images/home.jpg';
import {Link} from "react-router-dom"
import { color } from "framer-motion";
import Card from "./Card";
import greeksalad from '../Images/greeksalad.jpg';
import bruchetta from '../Images/bruchetta.svg';
import lemondessert from '../Images/lemon.jpg';



const Home = () => {

  return (
    <Box
      id="home-section"
      minH="auto"
      pt="10px"
      bg="gray.100"
      px={8}
      backgroundColor="white"
      scrollMarginTop="80px"
    >
        <Flex
    
            bg="#495E57"
            height="400px"  
        >   
            <Box flex="2" marginLeft="60px" p={8} display="flex" flexDirection="column" justifyContent="center">
                <Heading as="h1" mb={4} size="3xl" color="#f4ce14">
                Little Lemon
                </Heading>
                <Heading as="h2" mb={4} color="white">
                Chicago
                </Heading>
                <Text color="white" textAlign="left" >
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with modern twist
                </Text>
                <Button as={Link} to="/reservation" mt={8} width={160} backgroundColor="#f4ce14">
                Reserve a table
                </Button>      
            </Box>
            <Box flex="1" marginRight="60px">
                <Image
                src={home}
                alt="About image"
                width="100%"
                height="80%"
                objectFit="cover"
                px="10"
                mt="10"
                borderRadius="20%"
                />
            </Box>
        </Flex>
        <SpecialsSection />
    </Box>
  );
};

const Specials = [
  {
    title: "Greek salad",
    description:
      "The famous salad of crispy lettuces.",
    imageSrc: greeksalad,
  },
  {
    title: "Bruchetta",
    description:
      "Our bruchetta is made from grilled bread that has been smered with garlic",
    imageSrc: bruchetta,
  },
  {
    title: "Lemon Desert",
    description:
      "This comes straight from grandma's recipe book.",
    imageSrc:lemondessert,
  },

];
const SpecialsSection = () => {
  return (
    <Box
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
    
      <Heading 
        display="grid" 
        gridTemplateColumns="1fr 0.7fr" 
        as="h1" 
        id="specials-section" 
        padding="10">
        This weeks specials!
        <Button as={Link} to="/order"  width={160} backgroundColor="#f4ce14">
        Order online
        </Button>
      </Heading>
            
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={6}
        pl={10}
      >
        {Specials.map((specials) => (
          <Card
            key={specials.title}
            title={specials.title}
            description={specials.description}
            imageSrc={specials.imageSrc}           
          />
        ))}
      </Box>
      
    </Box>
    );
};

   


export default Home;