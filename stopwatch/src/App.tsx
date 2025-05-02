import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const digitStyle = {
    fontSize: '20px'
  }
  const buttonStyle = {
    margin: '10px'
  }

  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if(running){
      interval = setInterval(() => {
        console.log("Running...");
        setTime((prev) => prev + 10);
      }, 10);
    }  
    return () => {
      clearInterval(interval);
      console.log("Interval cleared!");
    };
    
  }, [running])

  return (
    <div style={{display: `flex`, flexDirection: `column`, alignItems:'center'}}>
      <h1>Stopwatch</h1>
      <div className='display-stopwatch'>
        <span style={digitStyle}>{("0"+Math.floor((time/(60*1000)) % 60)).slice(-2)}:</span>
        <span style={digitStyle}>{("0"+Math.floor((time/1000)) % 60).slice(-2)}:</span>
        <span style={digitStyle}>{("0"+(time % 1000)).slice(-2)}</span>
      </div>
      <div className='control-stopwatch' style={{margin: '10px 0px 0px 0px'}}>
        <button style={buttonStyle} onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</button>
        <button style={buttonStyle} onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
