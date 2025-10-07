import { tick, convertSecondsToTime } from "./time";

describe("time utilities", () => {
  test("tick decreases time but not below zero", () => {
    expect(tick(1500)).toBe(1499);
    expect(tick(1)).toBe(0);
    expect(tick(0)).toBe(0);
  });

  test("convertSecondsToTime formats correctly", () => {
    expect(convertSecondsToTime(0)).toBe("00:00");
    expect(convertSecondsToTime(5)).toBe("00:05");
    expect(convertSecondsToTime(60)).toBe("01:00");
    expect(convertSecondsToTime(125)).toBe("02:05");
  });
});
