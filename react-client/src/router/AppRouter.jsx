import { Routes, Route, Navigate } from 'react-router-dom'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'
import '../css/login-register.css'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

export const AppRouter = () => {
  const { verifyToken } = useContext(AuthContext)

  useEffect(() => {
    verifyToken()
  }, [])

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route path="/" element={<ChatPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
