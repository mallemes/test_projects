import React from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../Context/useAuth";

const AuthRequire = ({children}: any) => {
    const {user} = useAuth()

    if (!user)
        return <Navigate to={'/register'}/>
    return children
};

export default AuthRequire;