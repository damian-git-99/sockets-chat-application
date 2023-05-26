import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'
import '../css/login-register.css'

export const AppRouter = () => {
  return (
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/" element={<ChatPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}
