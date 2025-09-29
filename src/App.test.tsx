import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Pomodoro heading", async () => {
  render(<App />);
  const startButton = await screen.findByRole("button", { name: /start/i });

  expect(startButton).toBeInTheDocument();
});
