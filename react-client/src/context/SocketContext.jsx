/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'
import { AuthContext } from './AuthContext'

export const SocketContext = React.createContext({})

const connectSocketServer = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket'],
    autoConnect: true,
    forceNew: true
  })
  return socket
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [online, setOnline] = useState(false)
  const { auth } = useContext(AuthContext)

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

  return (
    <SocketContext.Provider value={{ socket, online }}>
      { children }
    </SocketContext.Provider>
  )
}
