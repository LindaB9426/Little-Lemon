import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  Flex,
ime,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";




const Reservation = ({ availableTimes, dispatch, submitForm }) => {
  const { onOpen } = useAlertContext();
  const [bookings, setBookings] = React.useState(() => {
  const saved = localStorage.getItem("bookings");
  return saved ? JSON.parse(saved) : [];
});
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      time: "",
      date: "",
      guests: "",
    },
    
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),   
      time: Yup.string() .required("Required"),
      date: Yup.string() .required("Required"),
      guests: Yup.number()
        .min (1, "Min 1 guest")
        .max (10, "Max 10 guests")
      .required("Required"),
    }),
    
    onSubmit: (values) => {
      submitForm(values);
      setBookings((prev) => {
      const updated = [...prev, values];
        localStorage.setItem("bookings", JSON.stringify(updated)); // 🔥
        return updated;
      });
      onOpen({
          type: "success",
          message: `Thank you ${values.firstName}, your form was submitted successfully!`,
        });
        formik.resetForm();
    },
  });

  return (
    <Box
      id="reservation-section"
      minH="auto"
      
      pt="10px"
      px={8}
      bg="gray.100"
      backgroundColor="#495E57"
      scrollMarginTop="80px"
      justifyContent="center"
      display="flex"
    >
      <VStack w="500px"  >
        <Heading as="h1" color="white" >
          Reserve a table
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4} color="white">
              <FormControl
               isInvalid={formik.touched.firstName && formik.errors.firstName}
               >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  required
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
                  required
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.guests && formik.errors.guests}
                >
                <FormLabel htmlFor="guests" >Number of guests</FormLabel>
                <Select
                  id="guests"
                  name="guests" 
                  color="black"
                  required
                  {...formik.getFieldProps("guests")}
                  >
                  <option value="" >Select guests</option>
                    {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1} >
                    {i + 1}
                    </option>
                    ))}
                </Select>
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.type && formik.errors.type}
                >
                <FormControl
                  isInvalid={formik.touched.date && formik.errors.date}
                >
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    color="black"
                    required
                    {...formik.getFieldProps("date")}
                    onChange={(e) => {
                      formik.handleChange(e);
                      dispatch(e.target.value);
                      
                    }}
                    aria-label="Select reservation date"
                  />
                  <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                
              </FormControl>
              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
                >
                <FormLabel>Choose time</FormLabel>
                <Flex gap={2} wrap="wrap" >
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      onClick={() => formik.setFieldValue("time", time)}
                      variant={formik.values.time === time ? "solid" : "outline"}
                      colorScheme="yellow"
                      aria-label={`Select time ${time}`}
                    >
                      {time}
                    </Button>
                    ))}
                </Flex>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
             
              
              <Button 
                type="submit"
                bg="#f4ce14" 
                width={160}
                aria-label="Submit reservation"
                
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
        <Box mt={10} bg="white" p={4}>
          <Heading size="md">Bookings</Heading>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={index}>
                  <td>{b.firstName}</td>
                  <td>{b.email}</td>
                  <td>{b.date}</td>
                  <td>{b.time}</td>
                  <td>{b.guests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

      </VStack>
    </Box>
  );
};

export default Reservation;
