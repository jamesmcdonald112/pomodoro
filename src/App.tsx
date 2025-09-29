import { useState } from "react";
import "./App.css";
import TimerButton from "./components/TimerButton";
import ResetButton from "./components/ResetButton";

function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  function toggleStart() {
    setIsRunning(!isRunning);
  }

  return (
    <>
      <TimerButton toggleStart={toggleStart} label="Start" />
      <ResetButton toggleReset={() => {}} />
    </>
  );
}

export default App;
