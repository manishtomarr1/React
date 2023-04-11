import React, { useReducer } from "react";
const reducer=(currentState, action) =>{
  console.log(currentState,action)
  if(action.type==="INCREMENT"){
    currentState+=1;
  }
  if(action.type==="DECREMENT"){
    currentState-=1;
  }
  return currentState;
}
const initialState=0;


function UseReducer() {

 const [updatedState, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <p>{updatedState}</p>
      <div>
        <button onClick={() => dispatch({type:"INCREMENT"})}>INC</button>
        <button onClick={()=> dispatch({type:"DECREMENT"})}>DEC</button>
      </div>
    </>
  );
}

export default UseReducer;

//what is reducer ?
//reducer is the pure function, which can be declare outside the component as well. 
//there is no side effect of this.
//always return anything.

//what is dispatch?
//yeh trigr krega action method ko.

//what is action?
//yeh jo action hai wo hai yeh type jo hmne type me string pass ki hai ese ko hum uppar reducer
//function mae use krenge btane ko k kya kaam krna hai jaise reducer mae if statetement mae
//kra hai.

//ho kya rha hai?
//ho yeh rha hai jo bhi reducer return krega i.e yhan current statereturn krra hai to wohi
//updatedState mae aa jaiga.
//sara khel dispatch ka hai or type ka hai dispatch treger krega action ko action
//ka hoga type jo niche lia hai hmne usi k hisab se hum calculation krenge.
//updated state depend hai reducer function ki return state pe.