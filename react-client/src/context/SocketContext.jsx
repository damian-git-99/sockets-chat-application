/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { AuthContext } from './AuthContext'
import { ChatContext } from './chat/ChatContext'

export const SocketContext = React.createContext({})

const connectSocketServer = () => {
  const token = localStorage.getItem('token')
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket'],
    autoConnect: true,
    forceNew: true,
    query: {
      token
    }
  })
  return socket
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [online, setOnline] = useState(false)
  const { auth } = useContext(AuthContext)
  const { loadUsers, newMessage } = useContext(ChatContext)

  useEffect(() => {
    if (auth?.logged) {
      const newSocket = connectSocketServer()
      setSocket(newSocket)
    }
    if (!auth?.logged) {
      socket?.disconnect()
      setSocket(null)
      setOnline(false)
    }
    return () => {
      socket?.disconnect()
    }
  }, [auth])

  useEffect(() => {
    socket?.on('users-list', (users) => {
      loadUsers(users)
    })

    socket?.on('message', (message) => {
      newMessage(message)
    })

    return () => {
      socket?.disconnect()
    }
  }, [socket])

  return (
    <SocketContext.Provider value={{ socket, online }}>
      { children }
    </SocketContext.Provider>
  )
}
