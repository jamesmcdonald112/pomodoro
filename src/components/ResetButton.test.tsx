import { fireEvent, render, screen } from "@testing-library/react";
import ResetButton from "./ResetButton";

test("renders Reset button to the screen", () => {
  const handleClick = vi.fn();
  render(<ResetButton toggleReset={handleClick} disabled={false} />);

  const startButton = screen.getByRole("button", { name: /reset/i });

  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
