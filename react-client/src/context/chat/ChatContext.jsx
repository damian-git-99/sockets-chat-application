/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { ChatTypes, chatReducer } from './ChatReducer'
import { getMessages } from '../../api/Messages'

export const ChatContext = React.createContext({})

const initialState = {
  userId: '',
  activeChat: null, // id of the user to whom I want to send messages
  users: [],
  messages: []
}

export const ChatContextProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState)

  const loadUsers = (users) => {
    dispatch({
      type: ChatTypes.loadUsers,
      payload: users
    })
  }

  const activateChat = async (id) => {
    dispatch({
      type: ChatTypes.activateChat,
      payload: id
    })
    const response = await getMessages(id)
    dispatch({
      type: ChatTypes.loadMessages,
      payload: response.messages
    })
  }

  const newMessage = (message) => {
    dispatch({
      type: ChatTypes.newMessage,
      payload: message
    })
  }

  const clearChat = () => {
    dispatch({
      type: ChatTypes.clearChat
    })
  }

  return (
    <ChatContext.Provider value={ { chatState, loadUsers, activateChat, newMessage, clearChat } }>
      { children }
    </ChatContext.Provider>
  )
}
