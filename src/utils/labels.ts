export function getTimerLabel(
  isRunning: boolean,
  timeRemaining: number,
  initialSeconds: number,
): "Start" | "Pause" | "Resume" {
  if (timeRemaining === initialSeconds || timeRemaining === 0) {
    return "Start";
  } else if (isRunning && timeRemaining > 0) {
    return "Pause";
  }
  return "Resume";
}
