import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutPut from "./components/Demo/DemoOutPut";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const changedHandler = () => {
    setShowPara((prevShowPara) => !prevShowPara);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={showPara} />
      <Button onClick={changedHandler}>Show Para!</Button>
    </div>
  );
}

export default App;
//what is virtualDOM?
//virtual dom react use krti hai real dom ko update na hoke kewal jo part update hota hai usi
//ko render krti hai react toh jo kewal updation wala part hota hai usi ko virtual DOM kehte
//hai badh m wo realDOM ko pta lgta hai then pura update jota hai.
//previous state or current state k hisab se virtual DOM update hota hai.

//state mae change hua => wo reactDom ne rerender kia => realDOM ko bheja => realDOM nae wohi part update kia.

//what is setShowPara((prevShowPara)=>!prevShowPara)?
//this is the function form for state change means opposite to the current value
//other method=> setShowPara(!showPara)


//agar koi parent component reexcute hoga toh uske child component bhi reexecute honge.
//or aisa purae component tree mae hoga jo parent k child k child honge wo bhi aise hi honge
//ese ka solution react.memo hai taki jb bhi props ki value change ho tbhi reexecution ho.