import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';

import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const Reservation = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string() .required("Required"),
    }),
  
    onSubmit: (values) => {
      submit(values);
      },
  });    

  useEffect(() => {
    if (response) {
      if (response.type === "success") {
        onOpen({
          type: "success",
          message: `Thank you ${formik.values.firstName}, your form was submitted successfully!`,
        });
        formik.resetForm(); 
      } else if (response.type === "error") {
        onOpen({
          type: "error",
          message: `Oops! Something went wrong: ${response.message}`,
        });
      }
    }
  }, [response, onOpen, formik]);


  return (
    <Box
      id="reservation-section"
      minH="80vh"
      bg="gray.100"
      px={400}
      backgroundColor="white"
      scrollMarginTop="80px"
    >
      <VStack w="800px" alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Reserve a table
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4}>
              <FormControl
               isInvalid={formik.touched.firstName && formik.errors.firstName}
               >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  {...formik.getFieldProps("firstName")} />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl 
                isInvalid={formik.touched.email && formik.errors.email}
                >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.guests && formik.errors.guests}
                >
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Select
                  id="guests"
                  name="guests" 
                  {...formik.getFieldProps("guests")}
                  >
                  <option value="">Select guests</option>
                    {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                    {i + 1}
                    </option>
                    ))}
                </Select>
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
                >
                <FormLabel htmlFor="guests">Choose time</FormLabel>
                <Select
                  id="time"
                  name="time" 
                  {...formik.getFieldProps("time")}
                  >
                  <option value="">Select time</option>
                     {times.map((t) => (
                      <option key={t} value={t}>
                    {t}
                    </option>
                    ))}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
                >
                <FormControl
               isInvalid={formik.touched.date && formik.errors.date}
               >
                <FormLabel htmlFor="date">Choose date</FormLabel>
                <Input
                  id="date"
                  {...formik.getFieldProps("date")} />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion" 
                  {...formik.getFieldProps("occasion")}>
                  <option value="hireMe">Occasion</option>
                  <option value="Birthday">
                    Birthday
                  </option>
                  <option value="Anniversary">Anniversary</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              </FormControl>
              
              <Button 
                type="submit"
                bg="#495E57" 
                width={160}
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default Reservation;
