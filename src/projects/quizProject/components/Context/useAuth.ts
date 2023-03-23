import {useContext} from "react";
import {AuthContext, userType} from "./AuthContext";


export const useAuth:()=>{user:userType|null, signIn:any, signOut:any} = ()=>{
    return useContext(AuthContext)
}
