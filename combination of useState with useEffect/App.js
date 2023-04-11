import React, { useState, useEffect } from "react";
import SecondSibling from "./SecondSibling";
import FirstSibling from "./FirstSibling";
import classes from "./index.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(null);
  const [reset, setReset] = useState(false)


  useEffect(() => {
    const timeout = setTimeout(() => {
      if (start) {
        startTimeout();
      }
    }, 1000);
    setStop(timeout);
  
    // Clean up function to clear the timeout when the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [counter, start]);
  

  const startTimeout = () => {
    console.log(start);
    setCounter(counter + 1);
  };

  const checkStart = () => {
    console.log("yes start");
    setStart(true);
    setReset(false)
  };

  function handleStopTimeout() {
    clearTimeout(stop);
    setStart(false); //kyuki jb dobara button click hoga toh uski state change hogi useEffect dobara call hoga.
  }
  
  function resetHandeler  () {
    setCounter(0)
    handleStopTimeout()
    setReset(true)
  }

  return (
    <div id="root">
      <h1 className={classes.count}>{counter}</h1>
      <button className={classes.btn} onClick={checkStart}>
        start
      </button>
      <FirstSibling  stop={handleStopTimeout}></FirstSibling>
      <button onClick={resetHandeler}  className={classes.btnReset}>reset</button>
      <SecondSibling counter={counter} reset={reset}></SecondSibling>
    </div>
  );
}

export default App;

