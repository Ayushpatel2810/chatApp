import React, { createContext, useContext, useState } from 'react'
import Cookies from "js-cookie"
export const AuthContext = createContext()
export const Authprovider = ({childrean})=> {

    const initialUserState = Cookies.get("jwt")  || localStorage.getItem("ChatApp");

    //parse user data and storing in state

    const [authUser,setAuthUser] = useState(initialUserState? JSON.parse(initialUserState) : undefined);

  return (
     <AuthContext.Provider value={[authUser,setAuthUser]}>
        {childrean}
     </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext);