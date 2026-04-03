import { Heading, HStack, Image, Text, VStack, Stack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";



const Card = ({ title, description, imageSrc }) => {
  
  return (
    <Stack
      align="start"
      spacing={8}
      bg="#EDEFEE"
      borderRadius="md"
      overflow="hidden"
      maxW={400}
    >
      <Image src={imageSrc} alt={title}/>

      <VStack align="start" spacing={2} p={4}>
        <Heading size="md" color="black">{title}</Heading>
        
        <Text fontSize="sm" color="black">{description}</Text>

        <HStack spacing={3}>
          <Text color="black" fontWeight="bold">
            See more
           <FontAwesomeIcon icon={faArrowRight} size="1x"/>
          </Text>
          
        </HStack>
      </VStack>

    </Stack>
  )
}
    


export default Card;