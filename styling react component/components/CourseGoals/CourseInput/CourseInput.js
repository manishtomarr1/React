import React, { useState } from "react";
//import styled from 'styled-components';

import Button from "../../UI/Button/Button";
import styles from './CourseInput.module.css'

// const FormControl = styled.div `
 
//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => (props.invalid ? "red" : 'black')};
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props=> (props.invalid ? 'red' : '#ccc')};
//   background : ${props=> (props.invalid ? "#ffd7d7" : "transparent" )};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// `

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [currentStateOfInput, updatedStateOfInput] = useState(true); // for invalid input

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length>0){ //dynamic styling hatane k liye.
   updatedStateOfInput(true)                                       
    }
    setEnteredValue(event.target.value);
    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      //trim is used to remove the whitespace from the string
      updatedStateOfInput(false); // state is false.
      return;
    }
    props.onAddGoal(enteredValue);
  };

  const onInputClickHandeler = () => {
    // borderColor = "black";
    // background = "white";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className = {`${styles['form-control']} ${!currentStateOfInput && styles.invalid}`}>
        {/* css module syntax */}
        {/* adding dynamic invalid class to the div according to the input state */}
        <label >
          Course Goal
        </label>
        <input
          onClick={onInputClickHandeler}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

//why we use trim here?
//because if user want to add the empty input then trim will trim the string and check the
//length of the string and if length is >0 then add otherwise not.

//what is `` ?
//javascript feature called template literal, in the ${}we can add as many dynamic class 
//as many we want.

//what is dynamic updating class method?
//first step:- make the classname.clasWhichWeWantToadd in css
//second step:-come in jsx cpde use `` and front of ${write the class you want to add according to state }

//what is form control here?
//form control is the replacement of the div having class form control, jo us div mae class
//thi form control naam ki usko hmne form control component se replace kr dia, form control 
//component ko attecked template literal method se implement kra then div ki jagha
//form control component use kr lia.
//fher form control mae hum koi bhi props le skte hai jaise hmne yhan invalid lia hai 
//fher jo bhi property hme dynamic change krni hai usko hum => k methid se change kr skte hai
//wo automatically call kr lega props ko.
//jaise label me color change kra hai dynamically, input mae bhi kra, jo extra class add krte 
//dynamically wo yhan hi likh dia.