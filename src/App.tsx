import { useState } from 'react'
import './App.css'
import TimerButton from './components/TimerButton'

function App() {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  function toggleStart() {
    setIsRunning(!isRunning);
  }

  return (
     <>
       <TimerButton toggleStart={toggleStart} label='Start'/>
     </>
  )
}

export default App
