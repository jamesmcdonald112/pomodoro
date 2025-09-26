import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Pomodoro heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /pomodoro/i })).toBeInTheDocument();
});