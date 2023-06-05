/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { ChatTypes, chatReducer } from './ChatReducer'

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

  const activateChat = (id) => {
    dispatch({
      type: ChatTypes.activateChat,
      payload: id
    })
  }

  return (
    <ChatContext.Provider value={ { chatState, loadUsers, activateChat } }>
      { children }
    </ChatContext.Provider>
  )
}
