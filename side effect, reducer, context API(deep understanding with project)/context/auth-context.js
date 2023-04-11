import React from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogout:()=>{}
})

export default AuthContext

//this is how we create context api.