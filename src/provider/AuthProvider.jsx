import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)
  // console.log(user)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInWithGoogle = ()=>{
     setLoading(true)
      return signInWithPopup(auth,googleProvider)
  }

  const updateUser = (updatedData)=>{
         return updateProfile(auth.currentUser,updatedData)
  }

   // expose as updateProfile to match usage in ProfilePage
  // const updateProfile = (profile) => {
  //   if (!auth.currentUser) return Promise.reject(new Error("No authenticated user"));
  //   return firebaseUpdateProfile(auth.currentUser, profile).then(() => {
  //     // keep local state in sync (auth.currentUser is updated by Firebase)
  //     setUser({ ...auth.currentUser });
  //   });
  // };

  const logOut = ()=>{
    return signOut(auth);
  }

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    });
    return ()=>{
     unsubscribe()
    }
  },[])
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    updateUser,
    signInWithGoogle,
    loading,
    setLoading
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
