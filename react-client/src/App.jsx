import { AuthProvider } from './context/AuthContext'
import { SocketContextProvider } from './context/SocketContext'
import { ChatContextProvider } from './context/chat/ChatContext'
import { AppRouter } from './router/AppRouter'

function App () {
  return (
    <ChatContextProvider>
       <AuthProvider>
        <SocketContextProvider>
          <AppRouter />
        </SocketContextProvider>
      </AuthProvider>
    </ChatContextProvider>
  )
}

export default App
