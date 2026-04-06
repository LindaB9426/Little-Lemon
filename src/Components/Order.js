import React from "react";
import { Box, Heading, Flex} from "@chakra-ui/react";
import Card from "./Card";
import greeksalad from '../Images/greeksalad.jpg';
import bruchetta from '../Images/bruchetta.svg';
import lemondessert from '../Images/lemon.jpg';
import pasta from "../Images/pasta.jpg"

const List = [
  {
    title: "Greek salad",
    description:
      "The famous salad of crispy lettuces.",
    imageSrc: greeksalad,
  },
  {
    title: "Bruchetta",
    description:
      "Our bruchetta is made from grilled bread that has been smered with garlic.",
    imageSrc: bruchetta,
  },
  {
    title: "Lemon Desert",
    description:
      "This comes straight from grandma's recipe book.",
    imageSrc:lemondessert,
  },
  {
    title: "Pasta",
    description:
      "Pasta is made with special spices and magic.",
    imageSrc: pasta,
  }  

];
const Order = () => {
  return (
    <Box
      id="order-section"
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

        <Box  p={8}  justifyContent="center" >
          <Heading size="xl" textAlign="center" mb={8} color="white">
            Food ordering menu
          </Heading>
        <Box 
          display="grid"
          gridTemplateColumns="repeat(4,minmax(0,1fr))"
          gridGap={8}
          pl={10}
        >
          {List.map((List) => (
            <Card
              key={List.title}
              title={List.title}
              description={List.description}
              imageSrc={List.imageSrc}           
            />
          ))}
        </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Order;