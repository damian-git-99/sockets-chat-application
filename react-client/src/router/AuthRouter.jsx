import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const AuthRouter = () => {
  const { auth } = useContext(AuthContext)

  if (auth.logged) return <Navigate to="/" />

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
