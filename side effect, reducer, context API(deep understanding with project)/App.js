import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
  },[]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
   
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0')
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider value={{
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler
      }}>
      <MainHeader   />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;


//what is use effect?
//use effect is the react hook which is here used to retain the previous state like ek bar login
//kr lia toh page referesh krne pae dobara authentication wala page khul jata hai ek bar login
//krne k badh bhi toh agar ek bar login ho jaye toh login rhe usko maintain krne ko use krte 
//hai use effect.

//what is localStorage.setItem('isloggedIn', '1')?
//local storage is the function that is related to the local storage of the system yha use 
//isliye kia kyuki hum jb bhi login ho jaye hmne wo condition isloggedin variable me store
//kra li 1 value k sath.

//what is  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");?
//es lambe se variable me localstorage se value li means current value agar wo 1 k equal 
//hai mtlb user login kr chuka hai.

//how can we use useEffect?
//useeffect mae do perameter hote hai first hota hai ek function jo ki hmne yhan lia hai
//check krne ko k user login hua yah nhi agar hua toh hmne isLoggedIn ko true kr dia
//or homepage khul jaiga, dushra hota hai array of dependency toh agar yeh component 
//bychace re-render hua kise bhi state ki wajah se toh use effect rerender nhi hoga wo kewal 
//dependency k aadhar pae hoga like jb dependency match hogi jb , lakin hmne yha koi
//dependency nhi li toh kewal ek bar hoga yeh re-render wo jb hum referesh krenge page
//mtlb kewal page startiung pe use effect kaam krega yhan.
//ek bar toh execute hoga hi wo function useeffect mae jo hai fher dependency k hisab se hoga.

//matlab khene ka hai k useeffect jo hai w extra information pae kaam krta hai mtlb user
//interface se uska koi lena dena nhi hota jaise yha useeffect jo hai local storage pae depend
//hai.

//kaise context api kam krri hai?
//STEP 1:- create context api joki yha hamne auth-context mae banaya. jo bhi data pass krna hai
//wo context api mae dal dia.
//STEP 2:- jis jis bhi component mae wo data pass krna hai usko api k naam joki yhan 
//AuthContext hai .provider se wrapup kr dena hai, .provider wha use krna hai jha value 
//change krni ho jha value change nhi krni wha eske bina bhi kaam chal jata hai.
//STEP 3:- fher jis bhi component mae usko use krna hai usme useContext hook ko import 
//krna hai or kise const mae usko equal kr dena hai jaise yhan hmne ctx mae kra hai.

//rules of hook.
//1-use react hoon in the react component function or in the custom hook function.
//2-use at the top level of the react component functions.
