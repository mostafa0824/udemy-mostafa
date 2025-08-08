import { createContext, useState } from "react";

export const AuthContext=createContext()

export default function AuthContextProvider({children}) {
    const getToken=localStorage.getItem('token')
    
    const [token,setToken]=useState(getToken)
    const handleToken=(tok)=>{
        !tok
        ?localStorage.removeItem('token')
        :localStorage.setItem('token',tok)
        setToken(tok)
    }
  return (
    <div>
      <AuthContext.Provider value={{token,handleToken}}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}
