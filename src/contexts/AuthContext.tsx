import React, { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as any);

export function AuthContexProvider({children}: AuthContextProps) {
  const [user, setUser] = useState('');


  
  return (
    <AuthContext.Provider value="teste">
      {children}
    </AuthContext.Provider>
  )
}
