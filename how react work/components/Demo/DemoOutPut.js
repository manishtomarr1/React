import React from "react";

const DemoOutPut=(props) =>{
    console.log("demo execute!")
return <p>{props.show ? "this is new!" : ""}</p>
}

export default React.memo(DemoOutPut);

//what is  export default React.memo(DemoOutPut);
//taki parent k child k child reexecute na ho parent k reexucute hone pe kewal jb props change
//ho jbhi reexecute ho parent k child.
//kyuki yeh component jb bhi reexecute hone ki koshish krega toh memo usko previous snapshot
//se compare krega agar same hui nhi hoga executes.

//memo kewal primitive datatype jaise boolean string inhe ko compare krta hai jaise hum false
//pe check kraye lakin agar onClick pe koi function aara hai wo usko new object ki tarah hi
//sense krta hai usko reExecute hona padta hai. ese ka solution hai useCallback.