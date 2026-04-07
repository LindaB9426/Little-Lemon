import React, { useReducer } from "react";
import Reservation from "./Reservation";
import { fetchAPI } from "../Api"
import { submitAPI } from "../Api";
import { useNavigate } from "react-router-dom";


export const initializeTimes = () => {
  return fetchAPI(new Date());
};


export const updateTimes = (state, action) => {
  return fetchAPI(action); 
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitForm = (formData) => {
  const success = submitAPI(formData);

  if (success) {
    navigate("/confirmed");
  }
};
  return(
    <Reservation 
      availableTimes={availableTimes}
      dispatch={dispatch}
      submitForm={submitForm}
      
    />
  );
};



export default Main;