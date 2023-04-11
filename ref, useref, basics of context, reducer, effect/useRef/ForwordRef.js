import React, {useRef} from "react";
import UnderstandForwardRef from "./UnderStandForwardRef";


const ForwordRef =() =>{
    const inputRef = useRef(null)

    const updateInput =()=>{
        inputRef.current.value="1000";
    }
    return (<div>
<h1>Forward ref</h1>
<UnderstandForwardRef ref={inputRef} />
<button onClick={updateInput}>Update Input Box</button>
    </div>)
}

export default ForwordRef;