import { screen } from "@testing-library/react";
import { renderApp } from "./utils/testUtils";
import { INITIAL_SECONDS } from "./config/timerConfig";
import { convertSecondsToTime } from "./utils/time";
import { waitForNextTick, clickButton } from "./utils/testUtils";

describe("Timer behaviour", () => {
  test("renders Start Button", async () => {
    renderApp();
    const startButton = await screen.findByRole("button", { name: /start/i });
    expect(startButton).toBeInTheDocument();
  });

  test("Clicking Start button starts the timer", async () => {
    renderApp();

    await clickButton(/start/i);

    const expectedDisplay = convertSecondsToTime(INITIAL_SECONDS);
    expect(screen.getByText(expectedDisplay)).toBeInTheDocument();

    await waitForNextTick(); // wait ~1s for countdown

    const decreasedDisplay = convertSecondsToTime(INITIAL_SECONDS - 1);
    expect(screen.getByText(decreasedDisplay)).toBeInTheDocument();
  });

  test("renders Reset Button", async () => {
    renderApp();
    const resetButton = await screen.findByRole("button", { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
  });

  test("Clicking the Reset button resets the timer", async () => {
    renderApp();
    await clickButton(/start/i);
    await screen.findByRole("button", { name: /reset/i });

    await waitForNextTick();

    // Timer should have decreased
    const decreasedDisplay = convertSecondsToTime(INITIAL_SECONDS - 1);
    expect(screen.getByText(decreasedDisplay)).toBeInTheDocument();

    await clickButton(/reset/i);

    // Timer should reset to initial
    const resetDisplay = convertSecondsToTime(INITIAL_SECONDS);
    expect(screen.getByText(resetDisplay)).toBeInTheDocument();
  });

  test("Reset is only available when timer has started", async () => {
    renderApp();

    const resetButton = await screen.findByRole("button", { name: /reset/i });

    // Initially disabled
    expect(resetButton).toBeDisabled();

    await clickButton(/start/i);
    await waitForNextTick();

    // Enabled while running
    expect(resetButton).not.toBeDisabled();

    await clickButton(/reset/i);

    // Disabled again after reset
    expect(resetButton).toBeDisabled();
  });
});
