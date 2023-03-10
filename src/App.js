import React, { useEffect } from "react";
import './App.css';

function App() {
   const [time,setTime] = React.useState(0)
   const [timerOn, setTimeon] = React.useState(false)

   React.useEffect(() => {
    let interval = null;

    if(timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
        clearInterval(interval)
    }

    return() => clearInterval(interval)

   },[timerOn])


  return (
    <div className="App">
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        { ! timerOn && time === 0 && (
        <button onClick={() => setTimeon(true)}>Start</button> )}
        { timerOn && (
        <button onClick={() => setTimeon(false)}>Stop</button> )}

        { ! timerOn && time !== 0 && (
        <button onClick={() => setTimeon(true)}>Resume</button> )}

        { ! timerOn && (
        <button onClick={() => setTime(0)}>Reset</button>
        )}



      </div>
      
    </div>
  );
}

export default App;
