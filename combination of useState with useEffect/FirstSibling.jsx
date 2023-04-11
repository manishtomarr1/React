import React from "react";
import classes from './firstSibling.module.css'
const FirstSibling = (props) =>{

    return(
<button className={classes.btn} onClick={props.stop}>stop</button>
    )
}

export default FirstSibling;