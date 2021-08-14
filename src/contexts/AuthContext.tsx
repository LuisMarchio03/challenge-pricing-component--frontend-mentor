import React, { createContext, ReactNode, useEffect, useState } from "react";
import { firebase, auth } from "../services/firebase";
import usePersistedState from "../utils/usePersistedState";

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User |  undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContexProvider({children}: AuthContextProps) {
  const [user, setUser] = usePersistedState('login', '');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
    }
  }
  
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}