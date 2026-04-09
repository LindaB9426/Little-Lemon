import { render, screen } from "@testing-library/react";
import Reservation from "./Components/Reservation";

test("name input is required", () => {
  render(<Reservation availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
  
  const input = screen.getByLabelText(/name/i);
  expect(input).toBeRequired();
});

test("email input has type email", () => {
  render(<Reservation availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
  
  const input = screen.getByLabelText(/email/i);
  expect(input).toHaveAttribute("type", "email");
});

test("date input is required", () => {
  render(<Reservation availableTimes={[]} dispatch={() => {}} submitForm={() => {}} />);
  
  const input = screen.getByLabelText(/date/i);
  expect(input).toBeRequired();
});