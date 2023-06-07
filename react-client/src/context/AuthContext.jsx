/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react'
import { loginRequest, registerRequest, renewTokenRequest } from '../api/Auth'

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
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    try {
      setError(null)
      const data = await loginRequest(email, password)
      const { user, token } = data
      setAuth({
        id: user.id,
        username: user.username,
        email: user.email,
        logged: true,
        checking: false
      })
      localStorage.setItem('token', token)
    } catch (error) {
      setError(error.message)
    }
  }

  const register = async (username, email, password) => {
    try {
      setError(null)
      const data = await registerRequest(username, email, password)
      const { user, token } = data
      setAuth({
        id: user.id,
        username: user.username,
        email: user.email,
        logged: true,
        checking: false
      })
      localStorage.setItem('token', token)
    } catch (error) {
      setError(error.message)
    }
  }

  const verifyToken = useCallback(async () => {
    try {
      setError(null)
      const data = await renewTokenRequest()
      const { user, token: newToken } = data
      setAuth({
        id: user.id,
        username: user.username,
        email: user.email,
        logged: true,
        checking: false
      })
      localStorage.setItem('token', newToken)
    } catch (error) {
      localStorage.removeItem('token')
      setError(error.message)
    }
  }, [])

  const logout = () => {
    setAuth(initialState)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ auth, login, register, verifyToken, logout, error }}>
      {children}
    </AuthContext.Provider>
  )
}
