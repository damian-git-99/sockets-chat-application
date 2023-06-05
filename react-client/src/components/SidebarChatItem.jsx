import { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'

/* eslint-disable react/prop-types */
export const SidebarChatItem = ({ user = {} }) => {
  const { chatState, activateChat } = useContext(ChatContext)

  const onClick = () => {
    activateChat(user?._id)
  }

  return (
    <div className={`chat_list ${user?._id === chatState?.activeChat && 'active_chat'}`} onClick={onClick}>
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>{user.username}</h5>
          { user.online
            ? <span className="text-success">Online</span>
            : <span className="text-danger">Offline</span> }
        </div>
      </div>
    </div>
  )
}
