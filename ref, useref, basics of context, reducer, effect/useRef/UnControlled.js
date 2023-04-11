import React, {useRef, useState} from "react";
const UnControlled =()=>{

    //it is like usestate only and its hold the value. NO rerender here.
    const luckyName=useRef(null)
    const [show, setShow] = useState(false);

    const submitHandeller=(event) =>{
        event.preventDefault();
        const name= (luckyName.current.value)
        name===""? alert("plz fill the data") : setShow(true);
    }
return (<div>
    <form onSubmit={submitHandeller}>
        <div>
            <label htmlFor="luckyName">enter your lucky name</label>
            <input type="text" id="luckyName" ref={luckyName}></input>
        </div>
        <button>submit</button>
    </form>
    <p> { show ?  `your lucky name is ${luckyName.current.value}`: ""}</p>

</div>)
}

export default UnControlled;
//uncontrolled form hota kya hai?
//jis foem mae name, value, onChange ka use manadatory na ho unko uncontrol form bolte hain 
//uneh ko use ref ki help se handle krte hain.

//ab yeh jo input field hai uski value ko get krna hai controlled mae toh value attribute leke
//pta lga lete the yha ref se lgega.