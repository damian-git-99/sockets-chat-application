import { useContext } from 'react'
import { IncomingMessage } from './IncomingMessage'
import { OutgoingMessage } from './OutgoingMessage'
import { SendMessage } from './SendMessage'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../context/AuthContext'

export const Messages = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  return (
    <div className="mesgs">
      <div className="msg_history">
        {chatState?.messages?.map((msg) =>
          msg.to === auth.id
            ? (
            <IncomingMessage message={msg} key={msg._id} />
              )
            : (
            <OutgoingMessage message={msg} key={msg._id} />
              )
        )}
      </div>
      <SendMessage />
    </div>
  )
}
