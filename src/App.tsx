import { useEffect, useState } from "react";
import "./App.css";
import TimerButton from "./components/TimerButton";
import ResetButton from "./components/ResetButton";
import { convertSecondsToTime } from "./utils/time";
import { getTimerLabel } from "./utils/labels";
import { INITIAL_SECONDS } from "./config/timerConfig";

function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(INITIAL_SECONDS); //25 minutes in seconds

  useEffect(() => {
    let intervalId: number | undefined;
    if (isRunning && timeRemaining > 0) {
      intervalId = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, timeRemaining]);

  function toggleStart() {
    if (timeRemaining === 0) {
      setTimeRemaining(INITIAL_SECONDS);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  }

  function handleReset() {
    setIsRunning(false);
    setTimeRemaining(INITIAL_SECONDS);
  }

  const label = getTimerLabel(isRunning, timeRemaining, INITIAL_SECONDS);

  return (
    <>
      <p>{convertSecondsToTime(timeRemaining)}</p>
      <TimerButton toggleStart={toggleStart} label={label} />
      <ResetButton
        toggleReset={handleReset}
        disabled={timeRemaining === INITIAL_SECONDS}
      />
    </>
  );
}

export default App;
