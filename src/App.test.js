
import {initializeTimes, updateTimes} from './Components/Main';

describe('initializeTimes', () => {
  test("initializeTimes returns non-empty array", () => {
    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });
});

describe('updateTimes', () => {
  test("returns weekend times", () => {
    const result = updateTimes([], "2026-04-05"); 
    expect(result).toEqual(["18:00", "19:00", "20:00"]);
  });


  test("returns weekday times", () => {
    const result = updateTimes([], "2026-04-08"); 
    expect(result).toEqual([
      "17:00","18:00","19:00","20:00","21:00","22:00"
    ]);
  });
});
