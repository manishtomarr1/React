import React, { useEffect, useState } from "react";
import classes from './secondSibling.module.css'
const SecondSibling = (props) => {
  const [counter, setCounter] = useState(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (render) {
      if (props.counter % 5 === 0 && props.counter != 0) {
        console.log(props.counter)
        console.log(props.counter % 5)
        setCounter(counter + 1);
      }
    }
    
    if(props.reset==true){
      setCounter(0)
    }
    setRender(true);
  }, [props.counter]);

  return (
    <div>
      <h1 className={classes.count}>{counter}</h1>
    </div>
  );
};

export default SecondSibling;
