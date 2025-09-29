import { fireEvent, render, screen } from '@testing-library/react'
import TimerButton from './TimerButton'

test('renders Start button to the screen', () => {
  const handleClick = vi.fn()
  render(<TimerButton toggleStart={handleClick} label="Start" />)

  const startButton = screen.getByRole('button', { name: /start/i })

  expect(startButton).toBeInTheDocument()

  fireEvent.click(startButton)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
