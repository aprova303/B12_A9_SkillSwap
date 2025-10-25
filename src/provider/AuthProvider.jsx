import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  console.log(user)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (updatedData)=>{
         return updateProfile(auth.currentUser,updatedData)
  }

  const logOut = ()=>{
    return signOut(auth);
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        SetUser(currentUser)
    });
    return ()=>{
     unsubscribe()
    }
  },[])
  const authData = {
    user,
    SetUser,
    createUser,
    logOut,
    signIn,
    updateUser
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
