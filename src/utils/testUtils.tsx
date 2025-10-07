import { act, fireEvent, render, screen } from "@testing-library/react";
import { convertSecondsToTime } from "./time";
import App from "../App";

/**
 * Waits for the next timer tick in real time (default 1 second + buffer).
 */
export async function waitForNextTick(seconds = 1, buffer = 0.1) {
  await act(async () => {
    await new Promise((resolve) =>
      setTimeout(resolve, (seconds + buffer) * 1000),
    );
  });
}

/**
 * Clicks a button by its accessible name (case-insensitive).
 */
export async function clickButton(name: RegExp) {
  const button = await screen.findByRole("button", { name });
  act(() => {
    fireEvent.click(button);
  });
  return button;
}

/**
 * Returns formatted text for easy assertions.
 */
export function getTimeText(seconds: number) {
  return convertSecondsToTime(seconds);
}

export function renderApp() {
  return render(<App />);
}
