import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const ConfirmedBooking = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading>Booking Confirmed 🎉</Heading>
      <Text mt={4}>
        Your reservation has been successfully submitted!
      </Text>
    </Box>
  );
};

export default ConfirmedBooking;