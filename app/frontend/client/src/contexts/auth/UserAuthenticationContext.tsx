import React, { useState, useEffect, useContext, createContext } from 'react'

export const UserAuthContext = createContext({})
export const AdminAuthContext = createContext({})


export function UserAuthProvider(props) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <UserAuthContext.Provider value={value}>{props.children}</UserAuthContext.Provider>
    )
}

export function AdminAuthProvider(props) {
    const [authAdmin, setAuthAdmin] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const value = {
        authAdmin,
        setAuthAdmin,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <AdminAuthContext.Provider value={value}>{props.children}</AdminAuthContext.Provider>
    )
}