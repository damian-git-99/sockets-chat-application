/* eslint-disable react/prop-types */
import React, { useReducer } from 'react'
import { chatReducer } from './ChatReducer'

export const ChatContext = React.createContext({})

const initialState = {
  userId: '',
  activeChat: null, // id of the user to whom I want to send messages
  users: [],
  messages: []
}

export const ChatContextProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState)
  return (
    <ChatContext.Provider value={ { chatState, dispatch } }>
      { children }
    </ChatContext.Provider>
  )
}
