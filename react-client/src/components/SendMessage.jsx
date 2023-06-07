import { useContext, useState } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { AuthContext } from '../context/AuthContext'
import { SocketContext } from '../context/SocketContext'

export const SendMessage = () => {
  const { auth } = useContext(AuthContext)
  const { chatState, newMessage } = useContext(ChatContext)
  const { socket } = useContext(SocketContext)

  const [form, setForm] = useState({
    message: ''
  })

  const { message } = form

  const onSubmit = (e) => {
    e.preventDefault()
    if (message.length === 0) return
    const messageData = {
      from: auth?.id,
      to: chatState?.activeChat,
      message
    }
    socket.emit('message', messageData)
    newMessage(messageData) // todo: resolve messageData does not have _id
    setForm({ message: '' })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="type_msg row">
        <div className="input_msg_write col-sm-9">
          <input
            name="message"
            type="text"
            className="write_msg"
            placeholder="Message..."
            value={message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <div className="col-sm-3 text-center">
          <button className="msg_send_btn mt-3" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
  )
}
