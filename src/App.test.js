import { render, screen } from '@testing-library/react';
import {initializeTimes, updateTimes} from './Main';

describe('initializeTimes', () => {
  test('returns the correct default times', () => {
    const expectedTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('returns the same state that is provided', () => {
    const currentState = ["17:00","18:00","19:00"];
    const action = "any-action"; 
    const result = updateTimes(currentState, action);
    expect(result).toEqual(currentState);
  });
});

test("Adds one", () => {
  render(<App />); 
  const heading = screen.getByTestId("currentNumber"); 
  const btn = screen.getByTestId("addOne"); 
  fireEvent.click(btn); 
  expect(heading).toHaveTextContent("2");
});
