import { AuthProvider } from './context/AuthContext'
import { SocketContextProvider } from './context/SocketContext'
import { AppRouter } from './router/AppRouter'

function App () {
  return (
    <AuthProvider>
      <SocketContextProvider>
        <AppRouter />
      </SocketContextProvider>
    </AuthProvider>
  )
}

export default App
