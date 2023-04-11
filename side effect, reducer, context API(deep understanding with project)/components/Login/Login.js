import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") }; //action.val dega jo input krenge uski value.
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }; //state.val dega updated state ki value.
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT_PASSWORD") {
    return { value: action.value, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PASSWORD_VALID") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

 

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     console.log("CHECKING VALIDATION!!!!!")

  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   },500)

  //  return () => {
  //   console.log("CLEAN UP!!!!!!!")
  //  }
  // },[enteredEmail, enteredPassword])

  //useEffect & useReducer

  useEffect(() => {
    setTimeout(() => {
      console.log("CHECKING VALIDATION!!!!!");

      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEAN UP!!!!!!!");
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   //enteredPassword.trim().length > 6 && event.target.value.includes('@')
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({ type: "USER_INPUT_PASSWORD", val: event.target.value });
    //setFormIsValid(event.target.value.trim().length > 6 && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchEmail({ type: "PASSWORD_VALID" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

//how we use useeffect here?
//yha hmare pass 2 validation function hai ek email validate krne ko dushra password validate
//krne ko. dono me same code hai jo ki comment me hai. wo code hai jb email pass valid ho to
//login button enable ho wrna disable ho jaye agar galat form mae ho email and password.

//yhan hmne useeffect lia or jo common code tha wo use effect mae rakha function wale part mae
//or dependency wale array mae hmne entered email enteredpassword ko rakkha ab yeh code rerun
//hoga jb enteredemail and enteredpassword change hoga, agar yeh dono change nhi honge
//yeh code rerun nhi hoga, agar hue toh rerun hoga. toh aise hum depend krte hai us function ko
//dependency pae.

//what is debounce?
//jaise yha filhal har ek key stroke pe yeh check krra hai matlab jaise jaise hum email pass
//bhar rhe hai yeh hr ek key stroke pe check krra hai validation ab hum bar bar check na krke
//jb check kre jb user type krna band krde us mrthod ko khenge debounce.
//jisse unnessacery checking bach jayege.
//jaise hmne useeffect mae settimeout function de dia jo ki 5 milisecond pe check krega
//jo us function mae hai usme kya hai usme hai form valid wala function ab wo function
//har 5 milisecond pe call hoga.

//return in useeffect?
//hum function return kra rhe hai useeffect se wo kb kaam krega wo pheli bar mae kaam nhi krega
//jb bhi code rerun hoga usse phle wo function execute hoga jisko hum clean up function bolte hai
//jo ki return mae likha hua hai.

//why we use useReducer?
//jb bhi koi state dushri state pae depebd ho toh hum use reducer ka use krte hai kyuki
//react mae pta nhi chlra k dushri state update hui yah nhi toh mixing ho jati hai
//states ki or koi state updating function nhi hota jis wajha se hum use state ki jagha usereducer function
//use krte hain. jaise ki yhan use state mae kai sari state ek dushri state pae depend hai
//jaise email valid or form valid etc toh hum usereducer ka USE krenge.

//email reducer ka phela argument dega current state
//initial state hai emailstate ki jo sbse last perameter hai usereducer ka i.e value and isvalid

//what is  const {isValid: emailIsValid} = emailState;
//this is the syntax of object distructring.
//kra kyun aisa?
//ek bar agar validation ho jaye to bar bar check na kre valid hone pe check na ho.