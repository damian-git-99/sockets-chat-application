import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'

export const Searchbox = () => {
  const { logout, auth } = useContext(AuthContext)
  const { clearChat } = useContext(ChatContext)

  const handleExit = () => {
    logout()
    clearChat()
  }

  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>{auth?.username}</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button onClick={handleExit} className="btn text-danger">Exit</button>
        </div>
      </div>
    </div>
  )
}
