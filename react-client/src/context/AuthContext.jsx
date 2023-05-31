/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react'

export const AuthContext = React.createContext({})

const initialState = {
  id: null,
  checking: true,
  logged: false,
  username: null,
  email: null
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)

  const login = (email, password) => {

  }

  const register = (username, email, password) => {

  }

  const verifyToken = useCallback(() => {

  }, [])

  const logout = () => {

  }

  return (
    <AuthContext.Provider value={{ auth, login, register, verifyToken, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
