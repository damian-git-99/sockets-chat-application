import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import '../css/login-register.css'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  const { verifyToken } = useContext(AuthContext)

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/*" element={<PrivateRoutes />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
