import React, { useReducer } from "react";
import Reservation from "./Reservation";
import { fetchAPI } from "./Api";

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

  return (
    <Reservation
      availableTimes={availableTimes}
      dispatch={dispatch}
    />
  );
};

export default Main;