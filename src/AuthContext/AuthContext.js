import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.confiq';
import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export  const AuthProvider=createContext()
const AuthContext = ({children}) => {
    const auth=getAuth(app)
  const [user,setUser]=useState({})
  const [loading,setLoading]=useState(true)

  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log(currentUser);
        setLoading(false)
        setUser(currentUser);
    });

    return () =>{
        return unsubscribe();
    }
}, [])
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const login=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const googlepopUp=(provider)=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
const profileUpdate=(profile)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,profile)
}
const logout=()=>{
    return signOut(auth)
}
const githHublogin=(provider)=>{
return signInWithPopup (auth,provider)
}

const AuthInfo={
    user,
    createUser,
    login,
    googlepopUp,
    profileUpdate,
    loading,
    logout,
    githHublogin
}
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;