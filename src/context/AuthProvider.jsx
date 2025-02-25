import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
// localStorage.clear()
  const [userData, setuserData] = useState(null);
  useEffect(() => {
    setLocalStorage()
    const { employees} = getLocalStorage()
    setuserData(employees)
    // console.log('in authproviderjs  use effect', {employees},userData)
  }, [])

  return (
    <div>
      <AuthContext.Provider value={[userData, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider