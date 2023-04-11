import React, {forwardRef} from "react";

const UnderstandForwardRef =(props,ref) =>{
return(<div>
    <input type="text" ref={ref}></input>
</div>)
}

export default forwardRef(UnderstandForwardRef);