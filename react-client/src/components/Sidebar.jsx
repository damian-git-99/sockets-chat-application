import { useContext } from 'react'
import { SidebarChatItem } from './SidebarChatItem'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../context/AuthContext'

export const Sidebar = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  return (
    <div className="inbox_chat">
      {chatState?.users.filter(users => users._id !== auth.id).map((user) => (
        <SidebarChatItem user={user} key={user._id} />
      ))}

      {/* <!-- Extra scroll space --> */}
      <div className="extra_space"></div>
    </div>
  )
}
