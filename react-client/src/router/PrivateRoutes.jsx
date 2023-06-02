import { Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatPage } from '../pages/ChatPage'

export const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext)

  if (!auth?.logged) return <Navigate to="/auth/login" />

  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
    </Routes>
  )
}
