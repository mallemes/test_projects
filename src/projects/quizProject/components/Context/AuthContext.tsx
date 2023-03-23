import React, {createContext, useState} from "react";

export type userType = {name:string, email:string, password:string}
export const AuthContext = createContext<any>(null)
export const AuthProvider = ({children}:any)=>{
    const [user, setUser] = useState<userType|null>(null)
    const signIn = (newUser: userType, cb:any)=>{
        setUser(newUser)
        cb()
    }
    const signOut = (cb:any)=>{
        setUser(null)
        cb()
    }
    return(
        <AuthContext.Provider value={{user, signOut, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}
